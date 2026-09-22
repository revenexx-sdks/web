import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Allocation } from '../enums/allocation';
import { PromotionsConditionsCreateKind } from '../enums/promotions-conditions-create-kind';
import { MatchMode } from '../enums/match-mode';
import { PromotionsEffectsCreateKind } from '../enums/promotions-effects-create-kind';
import { TargetScope } from '../enums/target-scope';
import { UnitChoice } from '../enums/unit-choice';
import { ValueType } from '../enums/value-type';
import { PromotionsGroupsCreateMode } from '../enums/promotions-groups-create-mode';
import { ConditionMatch } from '../enums/condition-match';
import { Reach } from '../enums/reach';
import { RecurrenceKind } from '../enums/recurrence-kind';
import { ReturnBehaviour } from '../enums/return-behaviour';
import { PromotionsPromotionsCreateStatus } from '../enums/promotions-promotions-create-status';

export class PromotionsPromotions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The offers that count items rather than money: buy three pay two, the cheapest of any four free, a packet of coffee with every machine. A bundle forms from the units a cart holds and repeats up to a cap.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.unitsRequired - Keep only rows whose `units_required` equals this.
     * @param {string} params.maxPerCart - Keep only rows whose `max_per_cart` equals this.
     * @param {string} params.allocation - Keep only rows whose `allocation` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBundlesList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, unitsRequired?: string, maxPerCart?: string, allocation?: string }): Promise<{}>;
    /**
     * The offers that count items rather than money: buy three pay two, the cheapest of any four free, a packet of coffee with every machine. A bundle forms from the units a cart holds and repeats up to a cap.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} unitsRequired - Keep only rows whose `units_required` equals this.
     * @param {string} maxPerCart - Keep only rows whose `max_per_cart` equals this.
     * @param {string} allocation - Keep only rows whose `allocation` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, unitsRequired?: string, maxPerCart?: string, allocation?: string): Promise<{}>;
    promotionsBundlesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, unitsRequired?: string, maxPerCart?: string, allocation?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, unitsRequired?: string, maxPerCart?: string, allocation?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, unitsRequired?: string, maxPerCart?: string, allocation?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                promotionId: rest[3] as string,
                name: rest[4] as string,
                unitsRequired: rest[5] as string,
                maxPerCart: rest[6] as string,
                allocation: rest[7] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const promotionId = params.promotionId;
        const name = params.name;
        const unitsRequired = params.unitsRequired;
        const maxPerCart = params.maxPerCart;
        const allocation = params.allocation;


        const apiPath = '/v1/promotions/bundles';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof unitsRequired !== 'undefined') {
            apiPayload['units_required'] = unitsRequired;
        }
        if (typeof maxPerCart !== 'undefined') {
            apiPayload['max_per_cart'] = maxPerCart;
        }
        if (typeof allocation !== 'undefined') {
            apiPayload['allocation'] = allocation;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {Allocation} params.allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} params.maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {object} params.selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} params.unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     */
    promotionsBundlesCreate(params: { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number }): Promise<Models.PromotionBundle>;
    /**
     *
     * @param {string} name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {Allocation} allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {object} selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesCreate(name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number): Promise<Models.PromotionBundle>;
    promotionsBundlesCreate(
        paramsOrFirst: { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number } | string,
        ...rest: [(string)?, (Allocation)?, (number)?, (object)?, (number)?]    
    ): Promise<Models.PromotionBundle> {
        let params: { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number };
        } else {
            params = {
                name: paramsOrFirst as string,
                promotionId: rest[0] as string,
                allocation: rest[1] as Allocation,
                maxPerCart: rest[2] as number,
                selectors: rest[3] as object,
                unitsRequired: rest[4] as number            
            };
        }
        
        const name = params.name;
        const promotionId = params.promotionId;
        const allocation = params.allocation;
        const maxPerCart = params.maxPerCart;
        const selectors = params.selectors;
        const unitsRequired = params.unitsRequired;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/bundles';
        const apiPayload: Payload = {};
        if (typeof allocation !== 'undefined') {
            apiPayload['allocation'] = allocation;
        }
        if (typeof maxPerCart !== 'undefined') {
            apiPayload['max_per_cart'] = maxPerCart;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof selectors !== 'undefined') {
            apiPayload['selectors'] = selectors;
        }
        if (typeof unitsRequired !== 'undefined') {
            apiPayload['units_required'] = unitsRequired;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBundlesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesDelete(id: string): Promise<{}>;
    promotionsBundlesDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/bundles/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     */
    promotionsBundlesGet(params: { id: string }): Promise<Models.PromotionBundle>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesGet(id: string): Promise<Models.PromotionBundle>;
    promotionsBundlesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PromotionBundle> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/bundles/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {Allocation} params.allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} params.maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {object} params.selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} params.unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     */
    promotionsBundlesUpdate(params: { id: string, name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number }): Promise<Models.PromotionBundle>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {Allocation} allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {object} selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesUpdate(id: string, name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number): Promise<Models.PromotionBundle>;
    promotionsBundlesUpdate(
        paramsOrFirst: { id: string, name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number } | string,
        ...rest: [(string)?, (string)?, (Allocation)?, (number)?, (object)?, (number)?]    
    ): Promise<Models.PromotionBundle> {
        let params: { id: string, name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: object, unitsRequired?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                promotionId: rest[1] as string,
                allocation: rest[2] as Allocation,
                maxPerCart: rest[3] as number,
                selectors: rest[4] as object,
                unitsRequired: rest[5] as number            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const promotionId = params.promotionId;
        const allocation = params.allocation;
        const maxPerCart = params.maxPerCart;
        const selectors = params.selectors;
        const unitsRequired = params.unitsRequired;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/bundles/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof allocation !== 'undefined') {
            apiPayload['allocation'] = allocation;
        }
        if (typeof maxPerCart !== 'undefined') {
            apiPayload['max_per_cart'] = maxPerCart;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof selectors !== 'undefined') {
            apiPayload['selectors'] = selectors;
        }
        if (typeof unitsRequired !== 'undefined') {
            apiPayload['units_required'] = unitsRequired;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The tree that decides which purchases a promotion catches. A row is either a group, which says whether all or any of what it holds must hold, or a question, which asks one thing from a closed vocabulary. Read the assembled tree at GET /promotions/promotions/{id}/conditions.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.parentId - Keep only rows whose `parent_id` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.matchMode - Keep only rows whose `match_mode` equals this.
     * @param {string} params.negate - Keep only rows whose `negate` equals this.
     * @param {string} params.subject - Keep only rows whose `subject` equals this.
     * @param {string} params.comparison - Keep only rows whose `comparison` equals this.
     * @param {string} params.rightSubject - Keep only rows whose `right_subject` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsConditionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, position?: string }): Promise<{}>;
    /**
     * The tree that decides which purchases a promotion catches. A row is either a group, which says whether all or any of what it holds must hold, or a question, which asks one thing from a closed vocabulary. Read the assembled tree at GET /promotions/promotions/{id}/conditions.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} parentId - Keep only rows whose `parent_id` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} matchMode - Keep only rows whose `match_mode` equals this.
     * @param {string} negate - Keep only rows whose `negate` equals this.
     * @param {string} subject - Keep only rows whose `subject` equals this.
     * @param {string} comparison - Keep only rows whose `comparison` equals this.
     * @param {string} rightSubject - Keep only rows whose `right_subject` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, position?: string): Promise<{}>;
    promotionsConditionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, position?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, position?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, position?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                promotionId: rest[3] as string,
                parentId: rest[4] as string,
                kind: rest[5] as string,
                matchMode: rest[6] as string,
                negate: rest[7] as string,
                subject: rest[8] as string,
                comparison: rest[9] as string,
                rightSubject: rest[10] as string,
                position: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const promotionId = params.promotionId;
        const parentId = params.parentId;
        const kind = params.kind;
        const matchMode = params.matchMode;
        const negate = params.negate;
        const subject = params.subject;
        const comparison = params.comparison;
        const rightSubject = params.rightSubject;
        const position = params.position;


        const apiPath = '/v1/promotions/conditions';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof matchMode !== 'undefined') {
            apiPayload['match_mode'] = matchMode;
        }
        if (typeof negate !== 'undefined') {
            apiPayload['negate'] = negate;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof comparison !== 'undefined') {
            apiPayload['comparison'] = comparison;
        }
        if (typeof rightSubject !== 'undefined') {
            apiPayload['right_subject'] = rightSubject;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} params.addend - Added to the right-hand subject after the factor.
     * @param {object} params.compareValue - What the subject is compared against.
     * @param {object} params.compareValueTo - The upper end of a `between` comparison.
     * @param {string} params.comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} params.factor - Multiplies the right-hand subject before the comparison.
     * @param {PromotionsConditionsCreateKind} params.kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} params.matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} params.negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} params.parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} params.rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} params.subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     */
    promotionsConditionsCreate(params: { promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string }): Promise<Models.PromotionCondition>;
    /**
     *
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} addend - Added to the right-hand subject after the factor.
     * @param {object} compareValue - What the subject is compared against.
     * @param {object} compareValueTo - The upper end of a `between` comparison.
     * @param {string} comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} factor - Multiplies the right-hand subject before the comparison.
     * @param {PromotionsConditionsCreateKind} kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsCreate(promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string): Promise<Models.PromotionCondition>;
    promotionsConditionsCreate(
        paramsOrFirst: { promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string } | string,
        ...rest: [(number)?, (object)?, (object)?, (string)?, (number)?, (PromotionsConditionsCreateKind)?, (MatchMode)?, (boolean)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PromotionCondition> {
        let params: { promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string };
        } else {
            params = {
                promotionId: paramsOrFirst as string,
                addend: rest[0] as number,
                compareValue: rest[1] as object,
                compareValueTo: rest[2] as object,
                comparison: rest[3] as string,
                factor: rest[4] as number,
                kind: rest[5] as PromotionsConditionsCreateKind,
                matchMode: rest[6] as MatchMode,
                negate: rest[7] as boolean,
                parentId: rest[8] as string,
                position: rest[9] as number,
                rightSubject: rest[10] as string,
                subject: rest[11] as string            
            };
        }
        
        const promotionId = params.promotionId;
        const addend = params.addend;
        const compareValue = params.compareValue;
        const compareValueTo = params.compareValueTo;
        const comparison = params.comparison;
        const factor = params.factor;
        const kind = params.kind;
        const matchMode = params.matchMode;
        const negate = params.negate;
        const parentId = params.parentId;
        const position = params.position;
        const rightSubject = params.rightSubject;
        const subject = params.subject;

        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/conditions';
        const apiPayload: Payload = {};
        if (typeof addend !== 'undefined') {
            apiPayload['addend'] = addend;
        }
        if (typeof compareValue !== 'undefined') {
            apiPayload['compare_value'] = compareValue;
        }
        if (typeof compareValueTo !== 'undefined') {
            apiPayload['compare_value_to'] = compareValueTo;
        }
        if (typeof comparison !== 'undefined') {
            apiPayload['comparison'] = comparison;
        }
        if (typeof factor !== 'undefined') {
            apiPayload['factor'] = factor;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof matchMode !== 'undefined') {
            apiPayload['match_mode'] = matchMode;
        }
        if (typeof negate !== 'undefined') {
            apiPayload['negate'] = negate;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof rightSubject !== 'undefined') {
            apiPayload['right_subject'] = rightSubject;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * What an editor calls while a merchant is still typing, so an unknown subject or a comparison that needs a second value is caught in the form rather than on save.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsConditionsValidate(): Promise<{}> {

        const apiPath = '/v1/promotions/conditions/validate';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsConditionsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsDelete(id: string): Promise<{}>;
    promotionsConditionsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/conditions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     */
    promotionsConditionsGet(params: { id: string }): Promise<Models.PromotionCondition>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsGet(id: string): Promise<Models.PromotionCondition>;
    promotionsConditionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PromotionCondition> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/conditions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} params.addend - Added to the right-hand subject after the factor.
     * @param {object} params.compareValue - What the subject is compared against.
     * @param {object} params.compareValueTo - The upper end of a `between` comparison.
     * @param {string} params.comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} params.factor - Multiplies the right-hand subject before the comparison.
     * @param {PromotionsConditionsCreateKind} params.kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} params.matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} params.negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} params.parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} params.rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} params.subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     */
    promotionsConditionsUpdate(params: { id: string, promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string }): Promise<Models.PromotionCondition>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} addend - Added to the right-hand subject after the factor.
     * @param {object} compareValue - What the subject is compared against.
     * @param {object} compareValueTo - The upper end of a `between` comparison.
     * @param {string} comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} factor - Multiplies the right-hand subject before the comparison.
     * @param {PromotionsConditionsCreateKind} kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsUpdate(id: string, promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string): Promise<Models.PromotionCondition>;
    promotionsConditionsUpdate(
        paramsOrFirst: { id: string, promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string } | string,
        ...rest: [(string)?, (number)?, (object)?, (object)?, (string)?, (number)?, (PromotionsConditionsCreateKind)?, (MatchMode)?, (boolean)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PromotionCondition> {
        let params: { id: string, promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, promotionId: string, addend?: number, compareValue?: object, compareValueTo?: object, comparison?: string, factor?: number, kind?: PromotionsConditionsCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                promotionId: rest[0] as string,
                addend: rest[1] as number,
                compareValue: rest[2] as object,
                compareValueTo: rest[3] as object,
                comparison: rest[4] as string,
                factor: rest[5] as number,
                kind: rest[6] as PromotionsConditionsCreateKind,
                matchMode: rest[7] as MatchMode,
                negate: rest[8] as boolean,
                parentId: rest[9] as string,
                position: rest[10] as number,
                rightSubject: rest[11] as string,
                subject: rest[12] as string            
            };
        }
        
        const id = params.id;
        const promotionId = params.promotionId;
        const addend = params.addend;
        const compareValue = params.compareValue;
        const compareValueTo = params.compareValueTo;
        const comparison = params.comparison;
        const factor = params.factor;
        const kind = params.kind;
        const matchMode = params.matchMode;
        const negate = params.negate;
        const parentId = params.parentId;
        const position = params.position;
        const rightSubject = params.rightSubject;
        const subject = params.subject;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/conditions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof addend !== 'undefined') {
            apiPayload['addend'] = addend;
        }
        if (typeof compareValue !== 'undefined') {
            apiPayload['compare_value'] = compareValue;
        }
        if (typeof compareValueTo !== 'undefined') {
            apiPayload['compare_value_to'] = compareValueTo;
        }
        if (typeof comparison !== 'undefined') {
            apiPayload['comparison'] = comparison;
        }
        if (typeof factor !== 'undefined') {
            apiPayload['factor'] = factor;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof matchMode !== 'undefined') {
            apiPayload['match_mode'] = matchMode;
        }
        if (typeof negate !== 'undefined') {
            apiPayload['negate'] = negate;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof rightSubject !== 'undefined') {
            apiPayload['right_subject'] = rightSubject;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Effects a tenant invents: unlock a download, extend a warranty, add a gift message. The engine validates the payload when the promotion is WRITTEN and hands it back verbatim when it applies — it never interprets one.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.shapeVersion - Keep only rows whose `shape_version` equals this.
     * @param {string} params.carriesAmount - Keep only rows whose `carries_amount` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsCustomEffectTypesList(params?: { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string }): Promise<{}>;
    /**
     * Effects a tenant invents: unlock a download, extend a warranty, add a gift message. The engine validates the payload when the promotion is WRITTEN and hands it back verbatim when it applies — it never interprets one.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} shapeVersion - Keep only rows whose `shape_version` equals this.
     * @param {string} carriesAmount - Keep only rows whose `carries_amount` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesList(limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string): Promise<{}>;
    promotionsCustomEffectTypesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                name: rest[3] as string,
                shapeVersion: rest[4] as string,
                carriesAmount: rest[5] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const name = params.name;
        const shapeVersion = params.shapeVersion;
        const carriesAmount = params.carriesAmount;


        const apiPath = '/v1/promotions/custom-effect-types';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof shapeVersion !== 'undefined') {
            apiPayload['shape_version'] = shapeVersion;
        }
        if (typeof carriesAmount !== 'undefined') {
            apiPayload['carries_amount'] = carriesAmount;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {boolean} params.carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {object} params.description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {object} params.payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {object} params.title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     */
    promotionsCustomEffectTypesCreate(params: { name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object }): Promise<Models.CustomEffectType>;
    /**
     *
     * @param {string} name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {boolean} carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {object} description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {object} payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {object} title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesCreate(name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object): Promise<Models.CustomEffectType>;
    promotionsCustomEffectTypesCreate(
        paramsOrFirst: { name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object } | string,
        ...rest: [(boolean)?, (object)?, (object)?, (object)?, (object)?]    
    ): Promise<Models.CustomEffectType> {
        let params: { name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object };
        } else {
            params = {
                name: paramsOrFirst as string,
                carriesAmount: rest[0] as boolean,
                description: rest[1] as object,
                metadata: rest[2] as object,
                payloadShape: rest[3] as object,
                title: rest[4] as object            
            };
        }
        
        const name = params.name;
        const carriesAmount = params.carriesAmount;
        const description = params.description;
        const metadata = params.metadata;
        const payloadShape = params.payloadShape;
        const title = params.title;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/custom-effect-types';
        const apiPayload: Payload = {};
        if (typeof carriesAmount !== 'undefined') {
            apiPayload['carries_amount'] = carriesAmount;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof payloadShape !== 'undefined') {
            apiPayload['payload_shape'] = payloadShape;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsCustomEffectTypesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesDelete(id: string): Promise<{}>;
    promotionsCustomEffectTypesDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/custom-effect-types/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     */
    promotionsCustomEffectTypesGet(params: { id: string }): Promise<Models.CustomEffectType>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesGet(id: string): Promise<Models.CustomEffectType>;
    promotionsCustomEffectTypesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CustomEffectType> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/custom-effect-types/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {boolean} params.carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {object} params.description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {object} params.payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {object} params.title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     */
    promotionsCustomEffectTypesUpdate(params: { id: string, name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object }): Promise<Models.CustomEffectType>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {boolean} carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {object} description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {object} payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {object} title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesUpdate(id: string, name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object): Promise<Models.CustomEffectType>;
    promotionsCustomEffectTypesUpdate(
        paramsOrFirst: { id: string, name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object } | string,
        ...rest: [(string)?, (boolean)?, (object)?, (object)?, (object)?, (object)?]    
    ): Promise<Models.CustomEffectType> {
        let params: { id: string, name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, name: string, carriesAmount?: boolean, description?: object, metadata?: object, payloadShape?: object, title?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                carriesAmount: rest[1] as boolean,
                description: rest[2] as object,
                metadata: rest[3] as object,
                payloadShape: rest[4] as object,
                title: rest[5] as object            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const carriesAmount = params.carriesAmount;
        const description = params.description;
        const metadata = params.metadata;
        const payloadShape = params.payloadShape;
        const title = params.title;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/custom-effect-types/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof carriesAmount !== 'undefined') {
            apiPayload['carries_amount'] = carriesAmount;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof payloadShape !== 'undefined') {
            apiPayload['payload_shape'] = payloadShape;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * What a promotion takes off. Three amount shapes against six target scopes — the unit price, the line total, the cart subtotal, the grand total, the shipping cost, the payment fee — plus free items, surcharges, notices, bundles and types a tenant registered itself.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.valueType - Keep only rows whose `value_type` equals this.
     * @param {string} params.targetScope - Keep only rows whose `target_scope` equals this.
     * @param {string} params.bundleId - Keep only rows whose `bundle_id` equals this.
     * @param {string} params.unitChoice - Keep only rows whose `unit_choice` equals this.
     * @param {string} params.unitPosition - Keep only rows whose `unit_position` equals this.
     * @param {string} params.spread - Keep only rows whose `spread` equals this.
     * @param {string} params.freeItemQuantity - Keep only rows whose `free_item_quantity` equals this.
     * @param {string} params.requiresChoice - Keep only rows whose `requires_choice` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEffectsList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, position?: string, kind?: string, valueType?: string, targetScope?: string, bundleId?: string, unitChoice?: string, unitPosition?: string, spread?: string, freeItemQuantity?: string, requiresChoice?: string }): Promise<{}>;
    /**
     * What a promotion takes off. Three amount shapes against six target scopes — the unit price, the line total, the cart subtotal, the grand total, the shipping cost, the payment fee — plus free items, surcharges, notices, bundles and types a tenant registered itself.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} valueType - Keep only rows whose `value_type` equals this.
     * @param {string} targetScope - Keep only rows whose `target_scope` equals this.
     * @param {string} bundleId - Keep only rows whose `bundle_id` equals this.
     * @param {string} unitChoice - Keep only rows whose `unit_choice` equals this.
     * @param {string} unitPosition - Keep only rows whose `unit_position` equals this.
     * @param {string} spread - Keep only rows whose `spread` equals this.
     * @param {string} freeItemQuantity - Keep only rows whose `free_item_quantity` equals this.
     * @param {string} requiresChoice - Keep only rows whose `requires_choice` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEffectsList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, position?: string, kind?: string, valueType?: string, targetScope?: string, bundleId?: string, unitChoice?: string, unitPosition?: string, spread?: string, freeItemQuantity?: string, requiresChoice?: string): Promise<{}>;
    promotionsEffectsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, position?: string, kind?: string, valueType?: string, targetScope?: string, bundleId?: string, unitChoice?: string, unitPosition?: string, spread?: string, freeItemQuantity?: string, requiresChoice?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, position?: string, kind?: string, valueType?: string, targetScope?: string, bundleId?: string, unitChoice?: string, unitPosition?: string, spread?: string, freeItemQuantity?: string, requiresChoice?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, position?: string, kind?: string, valueType?: string, targetScope?: string, bundleId?: string, unitChoice?: string, unitPosition?: string, spread?: string, freeItemQuantity?: string, requiresChoice?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                promotionId: rest[3] as string,
                position: rest[4] as string,
                kind: rest[5] as string,
                valueType: rest[6] as string,
                targetScope: rest[7] as string,
                bundleId: rest[8] as string,
                unitChoice: rest[9] as string,
                unitPosition: rest[10] as string,
                spread: rest[11] as string,
                freeItemQuantity: rest[12] as string,
                requiresChoice: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const promotionId = params.promotionId;
        const position = params.position;
        const kind = params.kind;
        const valueType = params.valueType;
        const targetScope = params.targetScope;
        const bundleId = params.bundleId;
        const unitChoice = params.unitChoice;
        const unitPosition = params.unitPosition;
        const spread = params.spread;
        const freeItemQuantity = params.freeItemQuantity;
        const requiresChoice = params.requiresChoice;


        const apiPath = '/v1/promotions/effects';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof valueType !== 'undefined') {
            apiPayload['value_type'] = valueType;
        }
        if (typeof targetScope !== 'undefined') {
            apiPayload['target_scope'] = targetScope;
        }
        if (typeof bundleId !== 'undefined') {
            apiPayload['bundle_id'] = bundleId;
        }
        if (typeof unitChoice !== 'undefined') {
            apiPayload['unit_choice'] = unitChoice;
        }
        if (typeof unitPosition !== 'undefined') {
            apiPayload['unit_position'] = unitPosition;
        }
        if (typeof spread !== 'undefined') {
            apiPayload['spread'] = spread;
        }
        if (typeof freeItemQuantity !== 'undefined') {
            apiPayload['free_item_quantity'] = freeItemQuantity;
        }
        if (typeof requiresChoice !== 'undefined') {
            apiPayload['requires_choice'] = requiresChoice;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} params.amount - The figure the value type is read with.
     * @param {object} params.appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} params.bundleId - The bundle a bundle effect discounts.
     * @param {object} params.customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} params.customShapeVersion - The shape version the payload was checked against.
     * @param {string} params.customTypeId - The registered type a custom effect is of.
     * @param {number} params.freeItemQuantity - How many of the free item.
     * @param {object} params.freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} params.kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} params.maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {object} params.message - What a notice says, per locale. A notice carries no amount.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {boolean} params.requiresChoice - When true, the buyer picks one of the items and the chosen one is what is held and committed.
     * @param {boolean} params.spread - Whether the discount is distributed across the bundle units in proportion to price. A bill showing one line at minus thirty and three at full price cannot be returned line by line.
     * @param {TargetScope} params.targetScope - Which amount the effect is measured against: the unit price, the line total, the cart subtotal, the grand total, the shipping cost or the payment fee.
     * @param {UnitChoice} params.unitChoice - Which unit inside a formed bundle is discounted: `cheapest`, `dearest`, `position` or `all`.
     * @param {number} params.unitPosition - Which unit, when unit_choice is `position`.
     * @param {ValueType} params.valueType - How the amount is stated: `percentage`, `amount`, or `fixed_price` (charge this instead).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     */
    promotionsEffectsCreate(params: { promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType }): Promise<Models.PromotionEffect>;
    /**
     *
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} amount - The figure the value type is read with.
     * @param {object} appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} bundleId - The bundle a bundle effect discounts.
     * @param {object} customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} customShapeVersion - The shape version the payload was checked against.
     * @param {string} customTypeId - The registered type a custom effect is of.
     * @param {number} freeItemQuantity - How many of the free item.
     * @param {object} freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {object} message - What a notice says, per locale. A notice carries no amount.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {boolean} requiresChoice - When true, the buyer picks one of the items and the chosen one is what is held and committed.
     * @param {boolean} spread - Whether the discount is distributed across the bundle units in proportion to price. A bill showing one line at minus thirty and three at full price cannot be returned line by line.
     * @param {TargetScope} targetScope - Which amount the effect is measured against: the unit price, the line total, the cart subtotal, the grand total, the shipping cost or the payment fee.
     * @param {UnitChoice} unitChoice - Which unit inside a formed bundle is discounted: `cheapest`, `dearest`, `position` or `all`.
     * @param {number} unitPosition - Which unit, when unit_choice is `position`.
     * @param {ValueType} valueType - How the amount is stated: `percentage`, `amount`, or `fixed_price` (charge this instead).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEffectsCreate(promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType): Promise<Models.PromotionEffect>;
    promotionsEffectsCreate(
        paramsOrFirst: { promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType } | string,
        ...rest: [(number)?, (object)?, (string)?, (object)?, (number)?, (string)?, (number)?, (object)?, (PromotionsEffectsCreateKind)?, (number)?, (object)?, (object)?, (number)?, (boolean)?, (boolean)?, (TargetScope)?, (UnitChoice)?, (number)?, (ValueType)?]    
    ): Promise<Models.PromotionEffect> {
        let params: { promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        } else {
            params = {
                promotionId: paramsOrFirst as string,
                amount: rest[0] as number,
                appliesTo: rest[1] as object,
                bundleId: rest[2] as string,
                customPayload: rest[3] as object,
                customShapeVersion: rest[4] as number,
                customTypeId: rest[5] as string,
                freeItemQuantity: rest[6] as number,
                freeItems: rest[7] as object,
                kind: rest[8] as PromotionsEffectsCreateKind,
                maxDiscount: rest[9] as number,
                message: rest[10] as object,
                metadata: rest[11] as object,
                position: rest[12] as number,
                requiresChoice: rest[13] as boolean,
                spread: rest[14] as boolean,
                targetScope: rest[15] as TargetScope,
                unitChoice: rest[16] as UnitChoice,
                unitPosition: rest[17] as number,
                valueType: rest[18] as ValueType            
            };
        }
        
        const promotionId = params.promotionId;
        const amount = params.amount;
        const appliesTo = params.appliesTo;
        const bundleId = params.bundleId;
        const customPayload = params.customPayload;
        const customShapeVersion = params.customShapeVersion;
        const customTypeId = params.customTypeId;
        const freeItemQuantity = params.freeItemQuantity;
        const freeItems = params.freeItems;
        const kind = params.kind;
        const maxDiscount = params.maxDiscount;
        const message = params.message;
        const metadata = params.metadata;
        const position = params.position;
        const requiresChoice = params.requiresChoice;
        const spread = params.spread;
        const targetScope = params.targetScope;
        const unitChoice = params.unitChoice;
        const unitPosition = params.unitPosition;
        const valueType = params.valueType;

        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/effects';
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof appliesTo !== 'undefined') {
            apiPayload['applies_to'] = appliesTo;
        }
        if (typeof bundleId !== 'undefined') {
            apiPayload['bundle_id'] = bundleId;
        }
        if (typeof customPayload !== 'undefined') {
            apiPayload['custom_payload'] = customPayload;
        }
        if (typeof customShapeVersion !== 'undefined') {
            apiPayload['custom_shape_version'] = customShapeVersion;
        }
        if (typeof customTypeId !== 'undefined') {
            apiPayload['custom_type_id'] = customTypeId;
        }
        if (typeof freeItemQuantity !== 'undefined') {
            apiPayload['free_item_quantity'] = freeItemQuantity;
        }
        if (typeof freeItems !== 'undefined') {
            apiPayload['free_items'] = freeItems;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof maxDiscount !== 'undefined') {
            apiPayload['max_discount'] = maxDiscount;
        }
        if (typeof message !== 'undefined') {
            apiPayload['message'] = message;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof requiresChoice !== 'undefined') {
            apiPayload['requires_choice'] = requiresChoice;
        }
        if (typeof spread !== 'undefined') {
            apiPayload['spread'] = spread;
        }
        if (typeof targetScope !== 'undefined') {
            apiPayload['target_scope'] = targetScope;
        }
        if (typeof unitChoice !== 'undefined') {
            apiPayload['unit_choice'] = unitChoice;
        }
        if (typeof unitPosition !== 'undefined') {
            apiPayload['unit_position'] = unitPosition;
        }
        if (typeof valueType !== 'undefined') {
            apiPayload['value_type'] = valueType;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEffectsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEffectsDelete(id: string): Promise<{}>;
    promotionsEffectsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/effects/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     */
    promotionsEffectsGet(params: { id: string }): Promise<Models.PromotionEffect>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEffectsGet(id: string): Promise<Models.PromotionEffect>;
    promotionsEffectsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PromotionEffect> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/effects/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} params.amount - The figure the value type is read with.
     * @param {object} params.appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} params.bundleId - The bundle a bundle effect discounts.
     * @param {object} params.customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} params.customShapeVersion - The shape version the payload was checked against.
     * @param {string} params.customTypeId - The registered type a custom effect is of.
     * @param {number} params.freeItemQuantity - How many of the free item.
     * @param {object} params.freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} params.kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} params.maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {object} params.message - What a notice says, per locale. A notice carries no amount.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {boolean} params.requiresChoice - When true, the buyer picks one of the items and the chosen one is what is held and committed.
     * @param {boolean} params.spread - Whether the discount is distributed across the bundle units in proportion to price. A bill showing one line at minus thirty and three at full price cannot be returned line by line.
     * @param {TargetScope} params.targetScope - Which amount the effect is measured against: the unit price, the line total, the cart subtotal, the grand total, the shipping cost or the payment fee.
     * @param {UnitChoice} params.unitChoice - Which unit inside a formed bundle is discounted: `cheapest`, `dearest`, `position` or `all`.
     * @param {number} params.unitPosition - Which unit, when unit_choice is `position`.
     * @param {ValueType} params.valueType - How the amount is stated: `percentage`, `amount`, or `fixed_price` (charge this instead).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     */
    promotionsEffectsUpdate(params: { id: string, promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType }): Promise<Models.PromotionEffect>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} amount - The figure the value type is read with.
     * @param {object} appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} bundleId - The bundle a bundle effect discounts.
     * @param {object} customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} customShapeVersion - The shape version the payload was checked against.
     * @param {string} customTypeId - The registered type a custom effect is of.
     * @param {number} freeItemQuantity - How many of the free item.
     * @param {object} freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {object} message - What a notice says, per locale. A notice carries no amount.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {boolean} requiresChoice - When true, the buyer picks one of the items and the chosen one is what is held and committed.
     * @param {boolean} spread - Whether the discount is distributed across the bundle units in proportion to price. A bill showing one line at minus thirty and three at full price cannot be returned line by line.
     * @param {TargetScope} targetScope - Which amount the effect is measured against: the unit price, the line total, the cart subtotal, the grand total, the shipping cost or the payment fee.
     * @param {UnitChoice} unitChoice - Which unit inside a formed bundle is discounted: `cheapest`, `dearest`, `position` or `all`.
     * @param {number} unitPosition - Which unit, when unit_choice is `position`.
     * @param {ValueType} valueType - How the amount is stated: `percentage`, `amount`, or `fixed_price` (charge this instead).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEffectsUpdate(id: string, promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType): Promise<Models.PromotionEffect>;
    promotionsEffectsUpdate(
        paramsOrFirst: { id: string, promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType } | string,
        ...rest: [(string)?, (number)?, (object)?, (string)?, (object)?, (number)?, (string)?, (number)?, (object)?, (PromotionsEffectsCreateKind)?, (number)?, (object)?, (object)?, (number)?, (boolean)?, (boolean)?, (TargetScope)?, (UnitChoice)?, (number)?, (ValueType)?]    
    ): Promise<Models.PromotionEffect> {
        let params: { id: string, promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, promotionId: string, amount?: number, appliesTo?: object, bundleId?: string, customPayload?: object, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: object, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: object, metadata?: object, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        } else {
            params = {
                id: paramsOrFirst as string,
                promotionId: rest[0] as string,
                amount: rest[1] as number,
                appliesTo: rest[2] as object,
                bundleId: rest[3] as string,
                customPayload: rest[4] as object,
                customShapeVersion: rest[5] as number,
                customTypeId: rest[6] as string,
                freeItemQuantity: rest[7] as number,
                freeItems: rest[8] as object,
                kind: rest[9] as PromotionsEffectsCreateKind,
                maxDiscount: rest[10] as number,
                message: rest[11] as object,
                metadata: rest[12] as object,
                position: rest[13] as number,
                requiresChoice: rest[14] as boolean,
                spread: rest[15] as boolean,
                targetScope: rest[16] as TargetScope,
                unitChoice: rest[17] as UnitChoice,
                unitPosition: rest[18] as number,
                valueType: rest[19] as ValueType            
            };
        }
        
        const id = params.id;
        const promotionId = params.promotionId;
        const amount = params.amount;
        const appliesTo = params.appliesTo;
        const bundleId = params.bundleId;
        const customPayload = params.customPayload;
        const customShapeVersion = params.customShapeVersion;
        const customTypeId = params.customTypeId;
        const freeItemQuantity = params.freeItemQuantity;
        const freeItems = params.freeItems;
        const kind = params.kind;
        const maxDiscount = params.maxDiscount;
        const message = params.message;
        const metadata = params.metadata;
        const position = params.position;
        const requiresChoice = params.requiresChoice;
        const spread = params.spread;
        const targetScope = params.targetScope;
        const unitChoice = params.unitChoice;
        const unitPosition = params.unitPosition;
        const valueType = params.valueType;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/effects/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof appliesTo !== 'undefined') {
            apiPayload['applies_to'] = appliesTo;
        }
        if (typeof bundleId !== 'undefined') {
            apiPayload['bundle_id'] = bundleId;
        }
        if (typeof customPayload !== 'undefined') {
            apiPayload['custom_payload'] = customPayload;
        }
        if (typeof customShapeVersion !== 'undefined') {
            apiPayload['custom_shape_version'] = customShapeVersion;
        }
        if (typeof customTypeId !== 'undefined') {
            apiPayload['custom_type_id'] = customTypeId;
        }
        if (typeof freeItemQuantity !== 'undefined') {
            apiPayload['free_item_quantity'] = freeItemQuantity;
        }
        if (typeof freeItems !== 'undefined') {
            apiPayload['free_items'] = freeItems;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof maxDiscount !== 'undefined') {
            apiPayload['max_discount'] = maxDiscount;
        }
        if (typeof message !== 'undefined') {
            apiPayload['message'] = message;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof requiresChoice !== 'undefined') {
            apiPayload['requires_choice'] = requiresChoice;
        }
        if (typeof spread !== 'undefined') {
            apiPayload['spread'] = spread;
        }
        if (typeof targetScope !== 'undefined') {
            apiPayload['target_scope'] = targetScope;
        }
        if (typeof unitChoice !== 'undefined') {
            apiPayload['unit_choice'] = unitChoice;
        }
        if (typeof unitPosition !== 'undefined') {
            apiPayload['unit_position'] = unitPosition;
        }
        if (typeof valueType !== 'undefined') {
            apiPayload['value_type'] = valueType;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The sets promotions are weighed in. Whether two offers add up, compete on value or shadow each other is a property of the SET, which a flag on one promotion cannot state. Groups nest, and a nested group competes in its parent as one entry worth what it gives in total.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.mode - Keep only rows whose `mode` equals this.
     * @param {string} params.parentId - Keep only rows whose `parent_id` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsGroupsList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string }): Promise<{}>;
    /**
     * The sets promotions are weighed in. Whether two offers add up, compete on value or shadow each other is a property of the SET, which a flag on one promotion cannot state. Groups nest, and a nested group competes in its parent as one entry worth what it gives in total.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} mode - Keep only rows whose `mode` equals this.
     * @param {string} parentId - Keep only rows whose `parent_id` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsList(limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string): Promise<{}>;
    promotionsGroupsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                code: rest[3] as string,
                name: rest[4] as string,
                mode: rest[5] as string,
                parentId: rest[6] as string,
                position: rest[7] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const mode = params.mode;
        const parentId = params.parentId;
        const position = params.position;


        const apiPath = '/v1/promotions/groups';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {string} params.name - What the group is called in the Cockpit.
     * @param {object} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} params.mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} params.parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     */
    promotionsGroupsCreate(params: { code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number }): Promise<Models.StackingGroup>;
    /**
     *
     * @param {string} code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {string} name - What the group is called in the Cockpit.
     * @param {object} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsCreate(code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number): Promise<Models.StackingGroup>;
    promotionsGroupsCreate(
        paramsOrFirst: { code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number } | string,
        ...rest: [(string)?, (object)?, (object)?, (PromotionsGroupsCreateMode)?, (string)?, (number)?]    
    ): Promise<Models.StackingGroup> {
        let params: { code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                labels: rest[1] as object,
                metadata: rest[2] as object,
                mode: rest[3] as PromotionsGroupsCreateMode,
                parentId: rest[4] as string,
                position: rest[5] as number            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const labels = params.labels;
        const metadata = params.metadata;
        const mode = params.mode;
        const parentId = params.parentId;
        const position = params.position;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/groups';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsGroupsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsDelete(id: string): Promise<{}>;
    promotionsGroupsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/groups/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     */
    promotionsGroupsGet(params: { id: string }): Promise<Models.StackingGroup>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsGet(id: string): Promise<Models.StackingGroup>;
    promotionsGroupsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.StackingGroup> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/groups/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {string} params.name - What the group is called in the Cockpit.
     * @param {object} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} params.mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} params.parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     */
    promotionsGroupsUpdate(params: { id: string, code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number }): Promise<Models.StackingGroup>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {string} name - What the group is called in the Cockpit.
     * @param {object} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsUpdate(id: string, code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number): Promise<Models.StackingGroup>;
    promotionsGroupsUpdate(
        paramsOrFirst: { id: string, code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number } | string,
        ...rest: [(string)?, (string)?, (object)?, (object)?, (PromotionsGroupsCreateMode)?, (string)?, (number)?]    
    ): Promise<Models.StackingGroup> {
        let params: { id: string, code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code: string, name: string, labels?: object, metadata?: object, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                labels: rest[2] as object,
                metadata: rest[3] as object,
                mode: rest[4] as PromotionsGroupsCreateMode,
                parentId: rest[5] as string,
                position: rest[6] as number            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const labels = params.labels;
        const metadata = params.metadata;
        const mode = params.mode;
        const parentId = params.parentId;
        const position = params.position;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/groups/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Every promotion this tenant has written down, whatever state it is in. Filter `?status=active` for the ones that may apply at all — whether one is live ALSO depends on its window and its recurrence, which GET /promotions/promotions/{id}/state answers.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.reach - Keep only rows whose `reach` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.priority - Keep only rows whose `priority` equals this.
     * @param {string} params.exclusive - Keep only rows whose `exclusive` equals this.
     * @param {string} params.groupId - Keep only rows whose `group_id` equals this.
     * @param {string} params.searchBestCombination - Keep only rows whose `search_best_combination` equals this.
     * @param {string} params.conditionMatch - Keep only rows whose `condition_match` equals this.
     * @param {string} params.recurrenceKind - Keep only rows whose `recurrence_kind` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, recurrenceKind?: string }): Promise<{}>;
    /**
     * Every promotion this tenant has written down, whatever state it is in. Filter `?status=active` for the ones that may apply at all — whether one is live ALSO depends on its window and its recurrence, which GET /promotions/promotions/{id}/state answers.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} reach - Keep only rows whose `reach` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} priority - Keep only rows whose `priority` equals this.
     * @param {string} exclusive - Keep only rows whose `exclusive` equals this.
     * @param {string} groupId - Keep only rows whose `group_id` equals this.
     * @param {string} searchBestCombination - Keep only rows whose `search_best_combination` equals this.
     * @param {string} conditionMatch - Keep only rows whose `condition_match` equals this.
     * @param {string} recurrenceKind - Keep only rows whose `recurrence_kind` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsList(limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, recurrenceKind?: string): Promise<{}>;
    promotionsPromotionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, recurrenceKind?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, recurrenceKind?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, recurrenceKind?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                code: rest[3] as string,
                name: rest[4] as string,
                description: rest[5] as string,
                reach: rest[6] as string,
                status: rest[7] as string,
                priority: rest[8] as string,
                exclusive: rest[9] as string,
                groupId: rest[10] as string,
                searchBestCombination: rest[11] as string,
                conditionMatch: rest[12] as string,
                recurrenceKind: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const description = params.description;
        const reach = params.reach;
        const status = params.status;
        const priority = params.priority;
        const exclusive = params.exclusive;
        const groupId = params.groupId;
        const searchBestCombination = params.searchBestCombination;
        const conditionMatch = params.conditionMatch;
        const recurrenceKind = params.recurrenceKind;


        const apiPath = '/v1/promotions/promotions';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof reach !== 'undefined') {
            apiPayload['reach'] = reach;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof exclusive !== 'undefined') {
            apiPayload['exclusive'] = exclusive;
        }
        if (typeof groupId !== 'undefined') {
            apiPayload['group_id'] = groupId;
        }
        if (typeof searchBestCombination !== 'undefined') {
            apiPayload['search_best_combination'] = searchBestCombination;
        }
        if (typeof conditionMatch !== 'undefined') {
            apiPayload['condition_match'] = conditionMatch;
        }
        if (typeof recurrenceKind !== 'undefined') {
            apiPayload['recurrence_kind'] = recurrenceKind;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {string} params.name - What the promotion is called.
     * @param {number} params.budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} params.budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} params.campaignRef - A loose reference to a campaign. Nothing here reads it, and a reference to a campaign that does not exist changes nothing.
     * @param {string} params.channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {ConditionMatch} params.conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} params.currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} params.description - What the promotion is for, in the merchant own words.
     * @param {string} params.endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} params.exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} params.groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {object} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} params.limitPerContact - How often one person may redeem it.
     * @param {number} params.limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {Reach} params.reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {object} params.recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} params.recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} params.recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} params.recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {object} params.recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} params.returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} params.searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} params.startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} params.status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {object} params.tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} params.timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     */
    promotionsPromotionsCreate(params: { code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string }): Promise<Models.Promotion>;
    /**
     *
     * @param {string} code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {string} name - What the promotion is called.
     * @param {number} budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} campaignRef - A loose reference to a campaign. Nothing here reads it, and a reference to a campaign that does not exist changes nothing.
     * @param {string} channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {ConditionMatch} conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} description - What the promotion is for, in the merchant own words.
     * @param {string} endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {object} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} limitPerContact - How often one person may redeem it.
     * @param {number} limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {Reach} reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {object} recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {object} recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {object} tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsCreate(code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string): Promise<Models.Promotion>;
    promotionsPromotionsCreate(
        paramsOrFirst: { code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string } | string,
        ...rest: [(string)?, (number)?, (number)?, (string)?, (string)?, (ConditionMatch)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (object)?, (number)?, (number)?, (object)?, (number)?, (Reach)?, (object)?, (string)?, (RecurrenceKind)?, (string)?, (object)?, (ReturnBehaviour)?, (boolean)?, (string)?, (PromotionsPromotionsCreateStatus)?, (object)?, (string)?]    
    ): Promise<Models.Promotion> {
        let params: { code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                budgetDiscount: rest[1] as number,
                budgetRedemptions: rest[2] as number,
                campaignRef: rest[3] as string,
                channelId: rest[4] as string,
                conditionMatch: rest[5] as ConditionMatch,
                currency: rest[6] as string,
                description: rest[7] as string,
                endsAt: rest[8] as string,
                exclusive: rest[9] as boolean,
                groupId: rest[10] as string,
                labels: rest[11] as object,
                limitPerContact: rest[12] as number,
                limitPerOrganization: rest[13] as number,
                metadata: rest[14] as object,
                priority: rest[15] as number,
                reach: rest[16] as Reach,
                recurrenceDays: rest[17] as object,
                recurrenceFrom: rest[18] as string,
                recurrenceKind: rest[19] as RecurrenceKind,
                recurrenceUntil: rest[20] as string,
                recurrenceWeekdays: rest[21] as object,
                returnBehaviour: rest[22] as ReturnBehaviour,
                searchBestCombination: rest[23] as boolean,
                startsAt: rest[24] as string,
                status: rest[25] as PromotionsPromotionsCreateStatus,
                tags: rest[26] as object,
                timezone: rest[27] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const budgetDiscount = params.budgetDiscount;
        const budgetRedemptions = params.budgetRedemptions;
        const campaignRef = params.campaignRef;
        const channelId = params.channelId;
        const conditionMatch = params.conditionMatch;
        const currency = params.currency;
        const description = params.description;
        const endsAt = params.endsAt;
        const exclusive = params.exclusive;
        const groupId = params.groupId;
        const labels = params.labels;
        const limitPerContact = params.limitPerContact;
        const limitPerOrganization = params.limitPerOrganization;
        const metadata = params.metadata;
        const priority = params.priority;
        const reach = params.reach;
        const recurrenceDays = params.recurrenceDays;
        const recurrenceFrom = params.recurrenceFrom;
        const recurrenceKind = params.recurrenceKind;
        const recurrenceUntil = params.recurrenceUntil;
        const recurrenceWeekdays = params.recurrenceWeekdays;
        const returnBehaviour = params.returnBehaviour;
        const searchBestCombination = params.searchBestCombination;
        const startsAt = params.startsAt;
        const status = params.status;
        const tags = params.tags;
        const timezone = params.timezone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/promotions';
        const apiPayload: Payload = {};
        if (typeof budgetDiscount !== 'undefined') {
            apiPayload['budget_discount'] = budgetDiscount;
        }
        if (typeof budgetRedemptions !== 'undefined') {
            apiPayload['budget_redemptions'] = budgetRedemptions;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof conditionMatch !== 'undefined') {
            apiPayload['condition_match'] = conditionMatch;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof endsAt !== 'undefined') {
            apiPayload['ends_at'] = endsAt;
        }
        if (typeof exclusive !== 'undefined') {
            apiPayload['exclusive'] = exclusive;
        }
        if (typeof groupId !== 'undefined') {
            apiPayload['group_id'] = groupId;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof limitPerContact !== 'undefined') {
            apiPayload['limit_per_contact'] = limitPerContact;
        }
        if (typeof limitPerOrganization !== 'undefined') {
            apiPayload['limit_per_organization'] = limitPerOrganization;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof reach !== 'undefined') {
            apiPayload['reach'] = reach;
        }
        if (typeof recurrenceDays !== 'undefined') {
            apiPayload['recurrence_days'] = recurrenceDays;
        }
        if (typeof recurrenceFrom !== 'undefined') {
            apiPayload['recurrence_from'] = recurrenceFrom;
        }
        if (typeof recurrenceKind !== 'undefined') {
            apiPayload['recurrence_kind'] = recurrenceKind;
        }
        if (typeof recurrenceUntil !== 'undefined') {
            apiPayload['recurrence_until'] = recurrenceUntil;
        }
        if (typeof recurrenceWeekdays !== 'undefined') {
            apiPayload['recurrence_weekdays'] = recurrenceWeekdays;
        }
        if (typeof returnBehaviour !== 'undefined') {
            apiPayload['return_behaviour'] = returnBehaviour;
        }
        if (typeof searchBestCombination !== 'undefined') {
            apiPayload['search_best_combination'] = searchBestCombination;
        }
        if (typeof startsAt !== 'undefined') {
            apiPayload['starts_at'] = startsAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof tags !== 'undefined') {
            apiPayload['tags'] = tags;
        }
        if (typeof timezone !== 'undefined') {
            apiPayload['timezone'] = timezone;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsDelete(id: string): Promise<{}>;
    promotionsPromotionsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     */
    promotionsPromotionsGet(params: { id: string }): Promise<Models.Promotion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsGet(id: string): Promise<Models.Promotion>;
    promotionsPromotionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Promotion> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {string} params.name - What the promotion is called.
     * @param {number} params.budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} params.budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} params.campaignRef - A loose reference to a campaign. Nothing here reads it, and a reference to a campaign that does not exist changes nothing.
     * @param {string} params.channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {ConditionMatch} params.conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} params.currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} params.description - What the promotion is for, in the merchant own words.
     * @param {string} params.endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} params.exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} params.groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {object} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} params.limitPerContact - How often one person may redeem it.
     * @param {number} params.limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {Reach} params.reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {object} params.recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} params.recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} params.recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} params.recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {object} params.recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} params.returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} params.searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} params.startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} params.status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {object} params.tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} params.timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     */
    promotionsPromotionsUpdate(params: { id: string, code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string }): Promise<Models.Promotion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {string} name - What the promotion is called.
     * @param {number} budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} campaignRef - A loose reference to a campaign. Nothing here reads it, and a reference to a campaign that does not exist changes nothing.
     * @param {string} channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {ConditionMatch} conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} description - What the promotion is for, in the merchant own words.
     * @param {string} endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {object} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} limitPerContact - How often one person may redeem it.
     * @param {number} limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {Reach} reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {object} recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {object} recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {object} tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsUpdate(id: string, code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string): Promise<Models.Promotion>;
    promotionsPromotionsUpdate(
        paramsOrFirst: { id: string, code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?, (string)?, (string)?, (ConditionMatch)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (object)?, (number)?, (number)?, (object)?, (number)?, (Reach)?, (object)?, (string)?, (RecurrenceKind)?, (string)?, (object)?, (ReturnBehaviour)?, (boolean)?, (string)?, (PromotionsPromotionsCreateStatus)?, (object)?, (string)?]    
    ): Promise<Models.Promotion> {
        let params: { id: string, code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code: string, name: string, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: object, limitPerContact?: number, limitPerOrganization?: number, metadata?: object, priority?: number, reach?: Reach, recurrenceDays?: object, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: object, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: object, timezone?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                budgetDiscount: rest[2] as number,
                budgetRedemptions: rest[3] as number,
                campaignRef: rest[4] as string,
                channelId: rest[5] as string,
                conditionMatch: rest[6] as ConditionMatch,
                currency: rest[7] as string,
                description: rest[8] as string,
                endsAt: rest[9] as string,
                exclusive: rest[10] as boolean,
                groupId: rest[11] as string,
                labels: rest[12] as object,
                limitPerContact: rest[13] as number,
                limitPerOrganization: rest[14] as number,
                metadata: rest[15] as object,
                priority: rest[16] as number,
                reach: rest[17] as Reach,
                recurrenceDays: rest[18] as object,
                recurrenceFrom: rest[19] as string,
                recurrenceKind: rest[20] as RecurrenceKind,
                recurrenceUntil: rest[21] as string,
                recurrenceWeekdays: rest[22] as object,
                returnBehaviour: rest[23] as ReturnBehaviour,
                searchBestCombination: rest[24] as boolean,
                startsAt: rest[25] as string,
                status: rest[26] as PromotionsPromotionsCreateStatus,
                tags: rest[27] as object,
                timezone: rest[28] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const budgetDiscount = params.budgetDiscount;
        const budgetRedemptions = params.budgetRedemptions;
        const campaignRef = params.campaignRef;
        const channelId = params.channelId;
        const conditionMatch = params.conditionMatch;
        const currency = params.currency;
        const description = params.description;
        const endsAt = params.endsAt;
        const exclusive = params.exclusive;
        const groupId = params.groupId;
        const labels = params.labels;
        const limitPerContact = params.limitPerContact;
        const limitPerOrganization = params.limitPerOrganization;
        const metadata = params.metadata;
        const priority = params.priority;
        const reach = params.reach;
        const recurrenceDays = params.recurrenceDays;
        const recurrenceFrom = params.recurrenceFrom;
        const recurrenceKind = params.recurrenceKind;
        const recurrenceUntil = params.recurrenceUntil;
        const recurrenceWeekdays = params.recurrenceWeekdays;
        const returnBehaviour = params.returnBehaviour;
        const searchBestCombination = params.searchBestCombination;
        const startsAt = params.startsAt;
        const status = params.status;
        const tags = params.tags;
        const timezone = params.timezone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/promotions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof budgetDiscount !== 'undefined') {
            apiPayload['budget_discount'] = budgetDiscount;
        }
        if (typeof budgetRedemptions !== 'undefined') {
            apiPayload['budget_redemptions'] = budgetRedemptions;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof conditionMatch !== 'undefined') {
            apiPayload['condition_match'] = conditionMatch;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof endsAt !== 'undefined') {
            apiPayload['ends_at'] = endsAt;
        }
        if (typeof exclusive !== 'undefined') {
            apiPayload['exclusive'] = exclusive;
        }
        if (typeof groupId !== 'undefined') {
            apiPayload['group_id'] = groupId;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof limitPerContact !== 'undefined') {
            apiPayload['limit_per_contact'] = limitPerContact;
        }
        if (typeof limitPerOrganization !== 'undefined') {
            apiPayload['limit_per_organization'] = limitPerOrganization;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof reach !== 'undefined') {
            apiPayload['reach'] = reach;
        }
        if (typeof recurrenceDays !== 'undefined') {
            apiPayload['recurrence_days'] = recurrenceDays;
        }
        if (typeof recurrenceFrom !== 'undefined') {
            apiPayload['recurrence_from'] = recurrenceFrom;
        }
        if (typeof recurrenceKind !== 'undefined') {
            apiPayload['recurrence_kind'] = recurrenceKind;
        }
        if (typeof recurrenceUntil !== 'undefined') {
            apiPayload['recurrence_until'] = recurrenceUntil;
        }
        if (typeof recurrenceWeekdays !== 'undefined') {
            apiPayload['recurrence_weekdays'] = recurrenceWeekdays;
        }
        if (typeof returnBehaviour !== 'undefined') {
            apiPayload['return_behaviour'] = returnBehaviour;
        }
        if (typeof searchBestCombination !== 'undefined') {
            apiPayload['search_best_combination'] = searchBestCombination;
        }
        if (typeof startsAt !== 'undefined') {
            apiPayload['starts_at'] = startsAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof tags !== 'undefined') {
            apiPayload['tags'] = tags;
        }
        if (typeof timezone !== 'undefined') {
            apiPayload['timezone'] = timezone;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The rows of the condition list, built into the tree the engine evaluates, with the depth it reaches. What an editor renders and what a reader checks an offer against.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsConditions(params: { id: string }): Promise<{}>;
    /**
     * The rows of the condition list, built into the tree the engine evaluates, with the depth it reaches. What an editor renders and what a reader checks an offer against.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsConditions(id: string): Promise<{}>;
    promotionsPromotionsConditions(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}/conditions'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * An empty group holds for nothing or for everything, so whichever a merchant meant, one of the two silently ruins the promotion. This finds those, and a tree deeper than the tenant allows, before a shopper does.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsConditionsCheck(params: { id: string }): Promise<{}>;
    /**
     * An empty group holds for nothing or for everything, so whichever a merchant meant, one of the two silently ruins the promotion. This finds those, and a tree deeper than the tenant allows, before a shopper does.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsConditionsCheck(id: string): Promise<{}>;
    promotionsPromotionsConditionsCheck(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}/conditions/check'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Two facts, never one: the state a merchant set, and what the clock has made of it. A surface showing only the first tells a merchant their finished campaign is still running. Also reports whether any buyer can reach it, and what is left of its budget.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsState(params: { id: string }): Promise<{}>;
    /**
     * Two facts, never one: the state a merchant set, and what the clock has made of it. A surface showing only the first tells a merchant their finished campaign is still running. Also reports whether any buyer can reach it, and what is left of its budget.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsState(id: string): Promise<{}>;
    promotionsPromotionsState(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}/state'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
