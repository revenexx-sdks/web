import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Allocation } from '../enums/allocation';
import { AudiencesRulesCreateKind } from '../enums/audiences-rules-create-kind';
import { MatchMode } from '../enums/match-mode';
import { PromotionsEffectsCreateKind } from '../enums/promotions-effects-create-kind';
import { TargetScope } from '../enums/target-scope';
import { UnitChoice } from '../enums/unit-choice';
import { ValueType } from '../enums/value-type';
import { PromotionsGroupsCreateMode } from '../enums/promotions-groups-create-mode';
import { Trashed } from '../enums/trashed';
import { ConditionMatch } from '../enums/condition-match';
import { Reach } from '../enums/reach';
import { RecurrenceKind } from '../enums/recurrence-kind';
import { ReturnBehaviour } from '../enums/return-behaviour';
import { PromotionsPromotionsCreateStatus } from '../enums/promotions-promotions-create-status';
import { PromotionsPromotionsCopyParts } from '../enums/promotions-promotions-copy-parts';
import { When } from '../enums/when';

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
     * @param {any} params.selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} params.unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     */
    promotionsBundlesCreate(params: { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: any, unitsRequired?: number }): Promise<Models.PromotionBundle>;
    /**
     *
     * @param {string} name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {Allocation} allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {any} selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesCreate(name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: any, unitsRequired?: number): Promise<Models.PromotionBundle>;
    promotionsBundlesCreate(
        paramsOrFirst: { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: any, unitsRequired?: number } | string,
        ...rest: [(string)?, (Allocation)?, (number)?, (any)?, (number)?]    
    ): Promise<Models.PromotionBundle> {
        let params: { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: any, unitsRequired?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, promotionId: string, allocation?: Allocation, maxPerCart?: number, selectors?: any, unitsRequired?: number };
        } else {
            params = {
                name: paramsOrFirst as string,
                promotionId: rest[0] as string,
                allocation: rest[1] as Allocation,
                maxPerCart: rest[2] as number,
                selectors: rest[3] as any,
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
     * @param {Allocation} params.allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} params.maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {string} params.name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {any} params.selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} params.unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     */
    promotionsBundlesUpdate(params: { id: string, allocation?: Allocation, maxPerCart?: number, name?: string, promotionId?: string, selectors?: any, unitsRequired?: number }): Promise<Models.PromotionBundle>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {Allocation} allocation - How the units that form a bundle are picked: `best_for_buyer` ranks them by price so whichever unit the effect discounts is worth as much as the cart permits, `cart_order` takes the first it finds. Empty follows the tenant default.
     * @param {number} maxPerCart - How often the bundle may repeat in one cart. Empty repeats as often as the cart allows.
     * @param {string} name - What the bundle is called, and what every discount it produces is attributed to.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {any} selectors - What counts towards the bundle, as a list of `{match, quantity}` — which is what expresses "one machine and one packet of coffee" rather than two units of anything.
     * @param {number} unitsRequired - How many units make one bundle, when no selectors are stated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionBundle>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBundlesUpdate(id: string, allocation?: Allocation, maxPerCart?: number, name?: string, promotionId?: string, selectors?: any, unitsRequired?: number): Promise<Models.PromotionBundle>;
    promotionsBundlesUpdate(
        paramsOrFirst: { id: string, allocation?: Allocation, maxPerCart?: number, name?: string, promotionId?: string, selectors?: any, unitsRequired?: number } | string,
        ...rest: [(Allocation)?, (number)?, (string)?, (string)?, (any)?, (number)?]    
    ): Promise<Models.PromotionBundle> {
        let params: { id: string, allocation?: Allocation, maxPerCart?: number, name?: string, promotionId?: string, selectors?: any, unitsRequired?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, allocation?: Allocation, maxPerCart?: number, name?: string, promotionId?: string, selectors?: any, unitsRequired?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                allocation: rest[0] as Allocation,
                maxPerCart: rest[1] as number,
                name: rest[2] as string,
                promotionId: rest[3] as string,
                selectors: rest[4] as any,
                unitsRequired: rest[5] as number            
            };
        }
        
        const id = params.id;
        const allocation = params.allocation;
        const maxPerCart = params.maxPerCart;
        const name = params.name;
        const promotionId = params.promotionId;
        const selectors = params.selectors;
        const unitsRequired = params.unitsRequired;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
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
     * @param {string} params.summary - Keep only rows whose `summary` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsConditionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, summary?: string, position?: string }): Promise<{}>;
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
     * @param {string} summary - Keep only rows whose `summary` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, summary?: string, position?: string): Promise<{}>;
    promotionsConditionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, summary?: string, position?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, summary?: string, position?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, comparison?: string, rightSubject?: string, summary?: string, position?: string };
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
                summary: rest[11] as string,
                position: rest[12] as string            
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
        const summary = params.summary;
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
        if (typeof summary !== 'undefined') {
            apiPayload['summary'] = summary;
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
     * @param {any} params.compareValue - What the subject is compared against.
     * @param {any} params.compareValueTo - The upper end of a `between` comparison.
     * @param {string} params.comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} params.factor - Multiplies the right-hand subject before the comparison.
     * @param {AudiencesRulesCreateKind} params.kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} params.matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} params.negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} params.parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} params.rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} params.subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     */
    promotionsConditionsCreate(params: { promotionId: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string }): Promise<Models.PromotionCondition>;
    /**
     *
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} addend - Added to the right-hand subject after the factor.
     * @param {any} compareValue - What the subject is compared against.
     * @param {any} compareValueTo - The upper end of a `between` comparison.
     * @param {string} comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} factor - Multiplies the right-hand subject before the comparison.
     * @param {AudiencesRulesCreateKind} kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
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
    promotionsConditionsCreate(promotionId: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string): Promise<Models.PromotionCondition>;
    promotionsConditionsCreate(
        paramsOrFirst: { promotionId: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string } | string,
        ...rest: [(number)?, (any)?, (any)?, (string)?, (number)?, (AudiencesRulesCreateKind)?, (MatchMode)?, (boolean)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PromotionCondition> {
        let params: { promotionId: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { promotionId: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, rightSubject?: string, subject?: string };
        } else {
            params = {
                promotionId: paramsOrFirst as string,
                addend: rest[0] as number,
                compareValue: rest[1] as any,
                compareValueTo: rest[2] as any,
                comparison: rest[3] as string,
                factor: rest[4] as number,
                kind: rest[5] as AudiencesRulesCreateKind,
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
     * @param {number} params.addend - Added to the right-hand subject after the factor.
     * @param {any} params.compareValue - What the subject is compared against.
     * @param {any} params.compareValueTo - The upper end of a `between` comparison.
     * @param {string} params.comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} params.factor - Multiplies the right-hand subject before the comparison.
     * @param {AudiencesRulesCreateKind} params.kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} params.matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} params.negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} params.parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} params.rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} params.subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     */
    promotionsConditionsUpdate(params: { id: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, promotionId?: string, rightSubject?: string, subject?: string }): Promise<Models.PromotionCondition>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {number} addend - Added to the right-hand subject after the factor.
     * @param {any} compareValue - What the subject is compared against.
     * @param {any} compareValueTo - The upper end of a `between` comparison.
     * @param {string} comparison - How the subject is compared: eq, neq, gt, gte, lt, lte, between, in, not_in, is_true, is_false.
     * @param {number} factor - Multiplies the right-hand subject before the comparison.
     * @param {AudiencesRulesCreateKind} kind - Whether this row is a `group` (which holds others) or a `question` (which asks one thing).
     * @param {MatchMode} matchMode - For a group: whether `all` of it must hold, or `any` of it.
     * @param {boolean} negate - Turns the row around. Excluding a range from an offer is how a merchant protects their margin.
     * @param {string} parentId - The group this row sits inside. Rows with no parent are the outermost level.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} rightSubject - Compare against another subject instead of a literal — "a fifth more than they usually spend", which no fixed threshold can express for a thousand buyers.
     * @param {string} subject - What a question asks about — one of a closed vocabulary. A subject accepted at write time and unrecognised at checkout is a promotion that silently never fires, so an unknown one is refused here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionCondition>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsConditionsUpdate(id: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, promotionId?: string, rightSubject?: string, subject?: string): Promise<Models.PromotionCondition>;
    promotionsConditionsUpdate(
        paramsOrFirst: { id: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, promotionId?: string, rightSubject?: string, subject?: string } | string,
        ...rest: [(number)?, (any)?, (any)?, (string)?, (number)?, (AudiencesRulesCreateKind)?, (MatchMode)?, (boolean)?, (string)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.PromotionCondition> {
        let params: { id: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, promotionId?: string, rightSubject?: string, subject?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, addend?: number, compareValue?: any, compareValueTo?: any, comparison?: string, factor?: number, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, parentId?: string, position?: number, promotionId?: string, rightSubject?: string, subject?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                addend: rest[0] as number,
                compareValue: rest[1] as any,
                compareValueTo: rest[2] as any,
                comparison: rest[3] as string,
                factor: rest[4] as number,
                kind: rest[5] as AudiencesRulesCreateKind,
                matchMode: rest[6] as MatchMode,
                negate: rest[7] as boolean,
                parentId: rest[8] as string,
                position: rest[9] as number,
                promotionId: rest[10] as string,
                rightSubject: rest[11] as string,
                subject: rest[12] as string            
            };
        }
        
        const id = params.id;
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
        const promotionId = params.promotionId;
        const rightSubject = params.rightSubject;
        const subject = params.subject;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
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
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsCustomEffectTypesList(params?: { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string, active?: string }): Promise<{}>;
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
     * @param {string} active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesList(limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string, active?: string): Promise<{}>;
    promotionsCustomEffectTypesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string, active?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string, active?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, name?: string, shapeVersion?: string, carriesAmount?: string, active?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                name: rest[3] as string,
                shapeVersion: rest[4] as string,
                carriesAmount: rest[5] as string,
                active: rest[6] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const name = params.name;
        const shapeVersion = params.shapeVersion;
        const carriesAmount = params.carriesAmount;
        const active = params.active;


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
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
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
     * @param {boolean} params.active - Whether a promotion may newly use this type. An inactive type stays valid on every effect already written against it, which keeps applying and keeps its title; a new effect of it, or an effect moved onto it, is refused with 409. Every type is active until a merchant says otherwise.
     * @param {boolean} params.carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {any} params.description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} params.payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {any} params.title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     */
    promotionsCustomEffectTypesCreate(params: { name: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, payloadShape?: any, title?: any }): Promise<Models.CustomEffectType>;
    /**
     *
     * @param {string} name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {boolean} active - Whether a promotion may newly use this type. An inactive type stays valid on every effect already written against it, which keeps applying and keeps its title; a new effect of it, or an effect moved onto it, is refused with 409. Every type is active until a merchant says otherwise.
     * @param {boolean} carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {any} description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {any} title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesCreate(name: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, payloadShape?: any, title?: any): Promise<Models.CustomEffectType>;
    promotionsCustomEffectTypesCreate(
        paramsOrFirst: { name: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, payloadShape?: any, title?: any } | string,
        ...rest: [(boolean)?, (boolean)?, (any)?, (any)?, (any)?, (any)?]    
    ): Promise<Models.CustomEffectType> {
        let params: { name: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, payloadShape?: any, title?: any };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, payloadShape?: any, title?: any };
        } else {
            params = {
                name: paramsOrFirst as string,
                active: rest[0] as boolean,
                carriesAmount: rest[1] as boolean,
                description: rest[2] as any,
                metadata: rest[3] as any,
                payloadShape: rest[4] as any,
                title: rest[5] as any            
            };
        }
        
        const name = params.name;
        const active = params.active;
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
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
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
     * @param {boolean} params.active - Whether a promotion may newly use this type. An inactive type stays valid on every effect already written against it, which keeps applying and keeps its title; a new effect of it, or an effect moved onto it, is refused with 409. Every type is active until a merchant says otherwise.
     * @param {boolean} params.carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {any} params.description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {any} params.payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {any} params.title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     */
    promotionsCustomEffectTypesUpdate(params: { id: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, name?: string, payloadShape?: any, title?: any }): Promise<Models.CustomEffectType>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Whether a promotion may newly use this type. An inactive type stays valid on every effect already written against it, which keeps applying and keeps its title; a new effect of it, or an effect moved onto it, is refused with 409. Every type is active until a merchant says otherwise.
     * @param {boolean} carriesAmount - When true, an effect of this type must also name an amount shape and a target scope, and then goes through exactly the caps, budgets, stacking and rounding a discount does. When false it carries no money at all.
     * @param {any} description - What the type is for, for the person configuring a promotion — rarely the person who registered it.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - The identifier whatever consumes this effect dispatches on. Unique per tenant.
     * @param {any} payloadShape - The JSON Schema an effect payload of this type is checked against, when the promotion is WRITTEN rather than at a till. It may grow and may not shrink while effects exist against it.
     * @param {any} title - What the type is called where an effect is written. Per locale.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomEffectType>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsCustomEffectTypesUpdate(id: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, name?: string, payloadShape?: any, title?: any): Promise<Models.CustomEffectType>;
    promotionsCustomEffectTypesUpdate(
        paramsOrFirst: { id: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, name?: string, payloadShape?: any, title?: any } | string,
        ...rest: [(boolean)?, (boolean)?, (any)?, (any)?, (string)?, (any)?, (any)?]    
    ): Promise<Models.CustomEffectType> {
        let params: { id: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, name?: string, payloadShape?: any, title?: any };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, carriesAmount?: boolean, description?: any, metadata?: any, name?: string, payloadShape?: any, title?: any };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                carriesAmount: rest[1] as boolean,
                description: rest[2] as any,
                metadata: rest[3] as any,
                name: rest[4] as string,
                payloadShape: rest[5] as any,
                title: rest[6] as any            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const carriesAmount = params.carriesAmount;
        const description = params.description;
        const metadata = params.metadata;
        const name = params.name;
        const payloadShape = params.payloadShape;
        const title = params.title;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/custom-effect-types/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
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
     * @param {any} params.appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} params.bundleId - The bundle a bundle effect discounts.
     * @param {any} params.customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} params.customShapeVersion - The shape version the payload was checked against.
     * @param {string} params.customTypeId - The registered type a custom effect is of.
     * @param {number} params.freeItemQuantity - How many of the free item.
     * @param {any} params.freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} params.kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} params.maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {any} params.message - What a notice says, per locale. A notice carries no amount.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
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
    promotionsEffectsCreate(params: { promotionId: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType }): Promise<Models.PromotionEffect>;
    /**
     *
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {number} amount - The figure the value type is read with.
     * @param {any} appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} bundleId - The bundle a bundle effect discounts.
     * @param {any} customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} customShapeVersion - The shape version the payload was checked against.
     * @param {string} customTypeId - The registered type a custom effect is of.
     * @param {number} freeItemQuantity - How many of the free item.
     * @param {any} freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {any} message - What a notice says, per locale. A notice carries no amount.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
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
    promotionsEffectsCreate(promotionId: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType): Promise<Models.PromotionEffect>;
    promotionsEffectsCreate(
        paramsOrFirst: { promotionId: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType } | string,
        ...rest: [(number)?, (any)?, (string)?, (any)?, (number)?, (string)?, (number)?, (any)?, (PromotionsEffectsCreateKind)?, (number)?, (any)?, (any)?, (number)?, (boolean)?, (boolean)?, (TargetScope)?, (UnitChoice)?, (number)?, (ValueType)?]    
    ): Promise<Models.PromotionEffect> {
        let params: { promotionId: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { promotionId: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        } else {
            params = {
                promotionId: paramsOrFirst as string,
                amount: rest[0] as number,
                appliesTo: rest[1] as any,
                bundleId: rest[2] as string,
                customPayload: rest[3] as any,
                customShapeVersion: rest[4] as number,
                customTypeId: rest[5] as string,
                freeItemQuantity: rest[6] as number,
                freeItems: rest[7] as any,
                kind: rest[8] as PromotionsEffectsCreateKind,
                maxDiscount: rest[9] as number,
                message: rest[10] as any,
                metadata: rest[11] as any,
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
     * @param {number} params.amount - The figure the value type is read with.
     * @param {any} params.appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} params.bundleId - The bundle a bundle effect discounts.
     * @param {any} params.customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} params.customShapeVersion - The shape version the payload was checked against.
     * @param {string} params.customTypeId - The registered type a custom effect is of.
     * @param {number} params.freeItemQuantity - How many of the free item.
     * @param {any} params.freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} params.kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} params.maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {any} params.message - What a notice says, per locale. A notice carries no amount.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {boolean} params.requiresChoice - When true, the buyer picks one of the items and the chosen one is what is held and committed.
     * @param {boolean} params.spread - Whether the discount is distributed across the bundle units in proportion to price. A bill showing one line at minus thirty and three at full price cannot be returned line by line.
     * @param {TargetScope} params.targetScope - Which amount the effect is measured against: the unit price, the line total, the cart subtotal, the grand total, the shipping cost or the payment fee.
     * @param {UnitChoice} params.unitChoice - Which unit inside a formed bundle is discounted: `cheapest`, `dearest`, `position` or `all`.
     * @param {number} params.unitPosition - Which unit, when unit_choice is `position`.
     * @param {ValueType} params.valueType - How the amount is stated: `percentage`, `amount`, or `fixed_price` (charge this instead).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionEffect>}
     */
    promotionsEffectsUpdate(params: { id: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, promotionId?: string, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType }): Promise<Models.PromotionEffect>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {number} amount - The figure the value type is read with.
     * @param {any} appliesTo - Which goods the effect touches, as `{skus, product_ids, categories, attribute}`. Empty touches every line.
     * @param {string} bundleId - The bundle a bundle effect discounts.
     * @param {any} customPayload - What a custom effect carries. Checked against the type shape when the promotion is written, and handed back unchanged when it applies.
     * @param {number} customShapeVersion - The shape version the payload was checked against.
     * @param {string} customTypeId - The registered type a custom effect is of.
     * @param {number} freeItemQuantity - How many of the free item.
     * @param {any} freeItems - The items a free-item effect adds, or offers a choice between.
     * @param {PromotionsEffectsCreateKind} kind - What the effect does: `discount`, `free_item`, `surcharge`, `notice`, `bundle` or `custom`.
     * @param {number} maxDiscount - A ceiling on a percentage effect. "20% off, up to 50 euro" is an ordinary offer, and a merchant who cannot express the cap writes the percentage smaller.
     * @param {any} message - What a notice says, per locale. A notice carries no amount.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
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
    promotionsEffectsUpdate(id: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, promotionId?: string, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType): Promise<Models.PromotionEffect>;
    promotionsEffectsUpdate(
        paramsOrFirst: { id: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, promotionId?: string, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType } | string,
        ...rest: [(number)?, (any)?, (string)?, (any)?, (number)?, (string)?, (number)?, (any)?, (PromotionsEffectsCreateKind)?, (number)?, (any)?, (any)?, (number)?, (string)?, (boolean)?, (boolean)?, (TargetScope)?, (UnitChoice)?, (number)?, (ValueType)?]    
    ): Promise<Models.PromotionEffect> {
        let params: { id: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, promotionId?: string, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, amount?: number, appliesTo?: any, bundleId?: string, customPayload?: any, customShapeVersion?: number, customTypeId?: string, freeItemQuantity?: number, freeItems?: any, kind?: PromotionsEffectsCreateKind, maxDiscount?: number, message?: any, metadata?: any, position?: number, promotionId?: string, requiresChoice?: boolean, spread?: boolean, targetScope?: TargetScope, unitChoice?: UnitChoice, unitPosition?: number, valueType?: ValueType };
        } else {
            params = {
                id: paramsOrFirst as string,
                amount: rest[0] as number,
                appliesTo: rest[1] as any,
                bundleId: rest[2] as string,
                customPayload: rest[3] as any,
                customShapeVersion: rest[4] as number,
                customTypeId: rest[5] as string,
                freeItemQuantity: rest[6] as number,
                freeItems: rest[7] as any,
                kind: rest[8] as PromotionsEffectsCreateKind,
                maxDiscount: rest[9] as number,
                message: rest[10] as any,
                metadata: rest[11] as any,
                position: rest[12] as number,
                promotionId: rest[13] as string,
                requiresChoice: rest[14] as boolean,
                spread: rest[15] as boolean,
                targetScope: rest[16] as TargetScope,
                unitChoice: rest[17] as UnitChoice,
                unitPosition: rest[18] as number,
                valueType: rest[19] as ValueType            
            };
        }
        
        const id = params.id;
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
        const promotionId = params.promotionId;
        const requiresChoice = params.requiresChoice;
        const spread = params.spread;
        const targetScope = params.targetScope;
        const unitChoice = params.unitChoice;
        const unitPosition = params.unitPosition;
        const valueType = params.valueType;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
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
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsGroupsList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string, active?: string }): Promise<{}>;
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
     * @param {string} active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsList(limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string, active?: string): Promise<{}>;
    promotionsGroupsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string, active?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string, active?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, mode?: string, parentId?: string, position?: string, active?: string };
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
                position: rest[7] as string,
                active: rest[8] as string            
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
        const active = params.active;


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
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
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
     * @param {boolean} params.active - Whether promotions and groups may newly be put into this group. An inactive group keeps what is already in it and goes on weighing those promotions by its mode exactly as before; putting a promotion or a group into it is refused with 409. Every group is active until a merchant says otherwise.
     * @param {any} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} params.mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} params.parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     */
    promotionsGroupsCreate(params: { code: string, name: string, active?: boolean, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number }): Promise<Models.StackingGroup>;
    /**
     *
     * @param {string} code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {string} name - What the group is called in the Cockpit.
     * @param {boolean} active - Whether promotions and groups may newly be put into this group. An inactive group keeps what is already in it and goes on weighing those promotions by its mode exactly as before; putting a promotion or a group into it is refused with 409. Every group is active until a merchant says otherwise.
     * @param {any} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsCreate(code: string, name: string, active?: boolean, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number): Promise<Models.StackingGroup>;
    promotionsGroupsCreate(
        paramsOrFirst: { code: string, name: string, active?: boolean, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number } | string,
        ...rest: [(string)?, (boolean)?, (any)?, (any)?, (PromotionsGroupsCreateMode)?, (string)?, (number)?]    
    ): Promise<Models.StackingGroup> {
        let params: { code: string, name: string, active?: boolean, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, active?: boolean, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, parentId?: string, position?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                active: rest[1] as boolean,
                labels: rest[2] as any,
                metadata: rest[3] as any,
                mode: rest[4] as PromotionsGroupsCreateMode,
                parentId: rest[5] as string,
                position: rest[6] as number            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const active = params.active;
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
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
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
     * @param {boolean} params.active - Whether promotions and groups may newly be put into this group. An inactive group keeps what is already in it and goes on weighing those promotions by its mode exactly as before; putting a promotion or a group into it is refused with 409. Every group is active until a merchant says otherwise.
     * @param {string} params.code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {any} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} params.mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} params.name - What the group is called in the Cockpit.
     * @param {string} params.parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} params.position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     */
    promotionsGroupsUpdate(params: { id: string, active?: boolean, code?: string, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, name?: string, parentId?: string, position?: number }): Promise<Models.StackingGroup>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Whether promotions and groups may newly be put into this group. An inactive group keeps what is already in it and goes on weighing those promotions by its mode exactly as before; putting a promotion or a group into it is refused with 409. Every group is active until a merchant says otherwise.
     * @param {string} code - The stable identifier a merchant refers to the group by. Unique per tenant.
     * @param {any} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {PromotionsGroupsCreateMode} mode - How the promotions in this group are weighed: `stack` (all of them add up), `highest_value` (only the one worth most) or `first_match` (only the first that matches, by priority).
     * @param {string} name - What the group is called in the Cockpit.
     * @param {string} parentId - The group this one sits inside. A nested group is weighed among its own members first, then competes in its parent as ONE entry worth what it gives in total.
     * @param {number} position - Order among siblings, ascending. Two rows with the same position are ordered by their id, so a list never shuffles between reads.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StackingGroup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsGroupsUpdate(id: string, active?: boolean, code?: string, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, name?: string, parentId?: string, position?: number): Promise<Models.StackingGroup>;
    promotionsGroupsUpdate(
        paramsOrFirst: { id: string, active?: boolean, code?: string, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, name?: string, parentId?: string, position?: number } | string,
        ...rest: [(boolean)?, (string)?, (any)?, (any)?, (PromotionsGroupsCreateMode)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.StackingGroup> {
        let params: { id: string, active?: boolean, code?: string, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, name?: string, parentId?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, code?: string, labels?: any, metadata?: any, mode?: PromotionsGroupsCreateMode, name?: string, parentId?: string, position?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                code: rest[1] as string,
                labels: rest[2] as any,
                metadata: rest[3] as any,
                mode: rest[4] as PromotionsGroupsCreateMode,
                name: rest[5] as string,
                parentId: rest[6] as string,
                position: rest[7] as number            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const code = params.code;
        const labels = params.labels;
        const metadata = params.metadata;
        const mode = params.mode;
        const name = params.name;
        const parentId = params.parentId;
        const position = params.position;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/groups/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
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
     * @param {Trashed} params.trashed - Whether promotions in the trash are listed: `exclude` (default) leaves them out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.reach - Keep only rows whose `reach` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.effectiveState - Keep only rows whose `effective_state` equals this.
     * @param {string} params.priority - Keep only rows whose `priority` equals this.
     * @param {string} params.exclusive - Keep only rows whose `exclusive` equals this.
     * @param {string} params.groupId - Keep only rows whose `group_id` equals this.
     * @param {string} params.searchBestCombination - Keep only rows whose `search_best_combination` equals this.
     * @param {string} params.conditionMatch - Keep only rows whose `condition_match` equals this.
     * @param {string} params.campaignRef - Keep only the promotions one campaign claimed — what the campaigns calendar reads (`?campaign_ref={campaign_id}`, RAD-288).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, effectiveState?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, campaignRef?: string }): Promise<{}>;
    /**
     * Every promotion this tenant has written down, whatever state it is in. Filter `?status=active` for the ones that may apply at all — whether one is live ALSO depends on its window and its recurrence, which GET /promotions/promotions/{id}/state answers.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {Trashed} trashed - Whether promotions in the trash are listed: `exclude` (default) leaves them out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} reach - Keep only rows whose `reach` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} effectiveState - Keep only rows whose `effective_state` equals this.
     * @param {string} priority - Keep only rows whose `priority` equals this.
     * @param {string} exclusive - Keep only rows whose `exclusive` equals this.
     * @param {string} groupId - Keep only rows whose `group_id` equals this.
     * @param {string} searchBestCombination - Keep only rows whose `search_best_combination` equals this.
     * @param {string} conditionMatch - Keep only rows whose `condition_match` equals this.
     * @param {string} campaignRef - Keep only the promotions one campaign claimed — what the campaigns calendar reads (`?campaign_ref={campaign_id}`, RAD-288).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, effectiveState?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, campaignRef?: string): Promise<{}>;
    promotionsPromotionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, effectiveState?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, campaignRef?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, effectiveState?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, campaignRef?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, reach?: string, status?: string, effectiveState?: string, priority?: string, exclusive?: string, groupId?: string, searchBestCombination?: string, conditionMatch?: string, campaignRef?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                code: rest[4] as string,
                name: rest[5] as string,
                description: rest[6] as string,
                reach: rest[7] as string,
                status: rest[8] as string,
                effectiveState: rest[9] as string,
                priority: rest[10] as string,
                exclusive: rest[11] as string,
                groupId: rest[12] as string,
                searchBestCombination: rest[13] as string,
                conditionMatch: rest[14] as string,
                campaignRef: rest[15] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const description = params.description;
        const reach = params.reach;
        const status = params.status;
        const effectiveState = params.effectiveState;
        const priority = params.priority;
        const exclusive = params.exclusive;
        const groupId = params.groupId;
        const searchBestCombination = params.searchBestCombination;
        const conditionMatch = params.conditionMatch;
        const campaignRef = params.campaignRef;


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
        if (typeof trashed !== 'undefined') {
            apiPayload['trashed'] = trashed;
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
        if (typeof effectiveState !== 'undefined') {
            apiPayload['effective_state'] = effectiveState;
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
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
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
     * @param {any} params.audienceChannels - Who it is for, by channel: a list of channel codes, one of which the cart must arrive through. Empty is every channel. Checked before the conditions, like a question that must hold.
     * @param {any} params.audienceRoles - Who it is for, by role: a list of role keys, one of which the buying contact must carry. Empty is every role.
     * @param {any} params.audienceSegments - Who it is for, by segment: a list of segment codes, one of which the buying organisation must be in — asked of customers, and never held when customers cannot say. Empty is everybody.
     * @param {number} params.budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} params.budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} params.campaignRef - The campaign this promotion belongs to — the id of a campaign in the campaigns app, written when that app claims the promotion (`PUT { campaign_ref }`, null releases it). Filterable, so the campaigns calendar finds a campaign's promotions. Nothing in an evaluation reads it; `redemption.committed` carries it for attribution.
     * @param {string} params.channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {ConditionMatch} params.conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} params.currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} params.deletedAt - When the promotion was moved to the trash. Empty for a promotion that is not in it. A trashed promotion applies nowhere and keeps its code reserved.
     * @param {string} params.deletedBy - Who moved it to the trash, as the platform named them — an email, or `system`.
     * @param {string} params.deletedById - The platform subject of whoever moved it to the trash. Kept apart from the name so the history can be pseudonymised.
     * @param {string} params.description - What the promotion is for, in the merchant own words.
     * @param {string} params.endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} params.exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} params.groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {any} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} params.limitPerContact - How often one person may redeem it.
     * @param {number} params.limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {string} params.purgeAt - When the daily purge deletes it for good: the moment it was trashed plus the tenant trash retention.
     * @param {string} params.purgeBlockedReason - Why the purge could not delete it for good. Empty unless a purge tried and was refused; cleared on restore.
     * @param {Reach} params.reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {any} params.recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} params.recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} params.recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} params.recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {any} params.recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} params.returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} params.searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} params.startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} params.status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {any} params.tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} params.template - Which template the Cockpit wizard started the promotion from. A record of where it began; nothing reads it.
     * @param {string} params.timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @param {string} params.trashBatch - One id per trash action, shared by everything that went in with it. Restoring brings back exactly that batch.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     */
    promotionsPromotionsCreate(params: { code: string, name: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string }): Promise<Models.Promotion>;
    /**
     *
     * @param {string} code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {string} name - What the promotion is called.
     * @param {any} audienceChannels - Who it is for, by channel: a list of channel codes, one of which the cart must arrive through. Empty is every channel. Checked before the conditions, like a question that must hold.
     * @param {any} audienceRoles - Who it is for, by role: a list of role keys, one of which the buying contact must carry. Empty is every role.
     * @param {any} audienceSegments - Who it is for, by segment: a list of segment codes, one of which the buying organisation must be in — asked of customers, and never held when customers cannot say. Empty is everybody.
     * @param {number} budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} campaignRef - The campaign this promotion belongs to — the id of a campaign in the campaigns app, written when that app claims the promotion (`PUT { campaign_ref }`, null releases it). Filterable, so the campaigns calendar finds a campaign's promotions. Nothing in an evaluation reads it; `redemption.committed` carries it for attribution.
     * @param {string} channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {ConditionMatch} conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} deletedAt - When the promotion was moved to the trash. Empty for a promotion that is not in it. A trashed promotion applies nowhere and keeps its code reserved.
     * @param {string} deletedBy - Who moved it to the trash, as the platform named them — an email, or `system`.
     * @param {string} deletedById - The platform subject of whoever moved it to the trash. Kept apart from the name so the history can be pseudonymised.
     * @param {string} description - What the promotion is for, in the merchant own words.
     * @param {string} endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {any} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} limitPerContact - How often one person may redeem it.
     * @param {number} limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {string} purgeAt - When the daily purge deletes it for good: the moment it was trashed plus the tenant trash retention.
     * @param {string} purgeBlockedReason - Why the purge could not delete it for good. Empty unless a purge tried and was refused; cleared on restore.
     * @param {Reach} reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {any} recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {any} recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {any} tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} template - Which template the Cockpit wizard started the promotion from. A record of where it began; nothing reads it.
     * @param {string} timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @param {string} trashBatch - One id per trash action, shared by everything that went in with it. Restoring brings back exactly that batch.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsCreate(code: string, name: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string): Promise<Models.Promotion>;
    promotionsPromotionsCreate(
        paramsOrFirst: { code: string, name: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string } | string,
        ...rest: [(string)?, (any)?, (any)?, (any)?, (number)?, (number)?, (string)?, (string)?, (ConditionMatch)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (any)?, (number)?, (number)?, (any)?, (number)?, (string)?, (string)?, (Reach)?, (any)?, (string)?, (RecurrenceKind)?, (string)?, (any)?, (ReturnBehaviour)?, (boolean)?, (string)?, (PromotionsPromotionsCreateStatus)?, (any)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Promotion> {
        let params: { code: string, name: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                audienceChannels: rest[1] as any,
                audienceRoles: rest[2] as any,
                audienceSegments: rest[3] as any,
                budgetDiscount: rest[4] as number,
                budgetRedemptions: rest[5] as number,
                campaignRef: rest[6] as string,
                channelId: rest[7] as string,
                conditionMatch: rest[8] as ConditionMatch,
                currency: rest[9] as string,
                deletedAt: rest[10] as string,
                deletedBy: rest[11] as string,
                deletedById: rest[12] as string,
                description: rest[13] as string,
                endsAt: rest[14] as string,
                exclusive: rest[15] as boolean,
                groupId: rest[16] as string,
                labels: rest[17] as any,
                limitPerContact: rest[18] as number,
                limitPerOrganization: rest[19] as number,
                metadata: rest[20] as any,
                priority: rest[21] as number,
                purgeAt: rest[22] as string,
                purgeBlockedReason: rest[23] as string,
                reach: rest[24] as Reach,
                recurrenceDays: rest[25] as any,
                recurrenceFrom: rest[26] as string,
                recurrenceKind: rest[27] as RecurrenceKind,
                recurrenceUntil: rest[28] as string,
                recurrenceWeekdays: rest[29] as any,
                returnBehaviour: rest[30] as ReturnBehaviour,
                searchBestCombination: rest[31] as boolean,
                startsAt: rest[32] as string,
                status: rest[33] as PromotionsPromotionsCreateStatus,
                tags: rest[34] as any,
                template: rest[35] as string,
                timezone: rest[36] as string,
                trashBatch: rest[37] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const audienceChannels = params.audienceChannels;
        const audienceRoles = params.audienceRoles;
        const audienceSegments = params.audienceSegments;
        const budgetDiscount = params.budgetDiscount;
        const budgetRedemptions = params.budgetRedemptions;
        const campaignRef = params.campaignRef;
        const channelId = params.channelId;
        const conditionMatch = params.conditionMatch;
        const currency = params.currency;
        const deletedAt = params.deletedAt;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const description = params.description;
        const endsAt = params.endsAt;
        const exclusive = params.exclusive;
        const groupId = params.groupId;
        const labels = params.labels;
        const limitPerContact = params.limitPerContact;
        const limitPerOrganization = params.limitPerOrganization;
        const metadata = params.metadata;
        const priority = params.priority;
        const purgeAt = params.purgeAt;
        const purgeBlockedReason = params.purgeBlockedReason;
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
        const template = params.template;
        const timezone = params.timezone;
        const trashBatch = params.trashBatch;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/promotions';
        const apiPayload: Payload = {};
        if (typeof audienceChannels !== 'undefined') {
            apiPayload['audience_channels'] = audienceChannels;
        }
        if (typeof audienceRoles !== 'undefined') {
            apiPayload['audience_roles'] = audienceRoles;
        }
        if (typeof audienceSegments !== 'undefined') {
            apiPayload['audience_segments'] = audienceSegments;
        }
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
        if (typeof deletedAt !== 'undefined') {
            apiPayload['deleted_at'] = deletedAt;
        }
        if (typeof deletedBy !== 'undefined') {
            apiPayload['deleted_by'] = deletedBy;
        }
        if (typeof deletedById !== 'undefined') {
            apiPayload['deleted_by_id'] = deletedById;
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
        if (typeof purgeAt !== 'undefined') {
            apiPayload['purge_at'] = purgeAt;
        }
        if (typeof purgeBlockedReason !== 'undefined') {
            apiPayload['purge_blocked_reason'] = purgeBlockedReason;
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
        if (typeof template !== 'undefined') {
            apiPayload['template'] = template;
        }
        if (typeof timezone !== 'undefined') {
            apiPayload['timezone'] = timezone;
        }
        if (typeof trashBatch !== 'undefined') {
            apiPayload['trash_batch'] = trashBatch;
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
     * The question the Cockpit wizard asks before a promotion exists: `ok` is false while any promotion is running, and `overlaps` names them, so the merchant checks the priorities.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsOverlapCheck(): Promise<{}> {

        const apiPath = '/v1/promotions/promotions/overlap-check';
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
     * Every promotion in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. A right of its own, apart from deleting.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionTrashEmptyResult>}
     */
    promotionsPromotionsEmptyTrash(): Promise<Models.PromotionTrashEmptyResult> {

        const apiPath = '/v1/promotions/promotions/trash/empty';
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
     * What the daily purge does, callable by hand: every promotion in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsPurge(): Promise<{}> {

        const apiPath = '/v1/promotions/promotions/trash/purge';
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
     * The first delete moves the promotion to the trash: it applies nowhere, its code stays reserved, and its conditions, effects, bundles, vouchers and batches stay with it untouched. Refused for a promotion that has been redeemed, which is archived instead. The second delete, on a promotion already in the trash, deletes it for good — only then do its parts go and `promotion.deleted` fire.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionDeleteResult>}
     */
    promotionsPromotionsDelete(params: { id: string }): Promise<Models.PromotionDeleteResult>;
    /**
     * The first delete moves the promotion to the trash: it applies nowhere, its code stays reserved, and its conditions, effects, bundles, vouchers and batches stay with it untouched. Refused for a promotion that has been redeemed, which is archived instead. The second delete, on a promotion already in the trash, deletes it for good — only then do its parts go and `promotion.deleted` fire.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionDeleteResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsDelete(id: string): Promise<Models.PromotionDeleteResult>;
    promotionsPromotionsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PromotionDeleteResult> {
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
     * @param {any} params.audienceChannels - Who it is for, by channel: a list of channel codes, one of which the cart must arrive through. Empty is every channel. Checked before the conditions, like a question that must hold.
     * @param {any} params.audienceRoles - Who it is for, by role: a list of role keys, one of which the buying contact must carry. Empty is every role.
     * @param {any} params.audienceSegments - Who it is for, by segment: a list of segment codes, one of which the buying organisation must be in — asked of customers, and never held when customers cannot say. Empty is everybody.
     * @param {number} params.budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} params.budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} params.campaignRef - The campaign this promotion belongs to — the id of a campaign in the campaigns app, written when that app claims the promotion (`PUT { campaign_ref }`, null releases it). Filterable, so the campaigns calendar finds a campaign's promotions. Nothing in an evaluation reads it; `redemption.committed` carries it for attribution.
     * @param {string} params.channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {string} params.code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {ConditionMatch} params.conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} params.currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} params.deletedAt - When the promotion was moved to the trash. Empty for a promotion that is not in it. A trashed promotion applies nowhere and keeps its code reserved.
     * @param {string} params.deletedBy - Who moved it to the trash, as the platform named them — an email, or `system`.
     * @param {string} params.deletedById - The platform subject of whoever moved it to the trash. Kept apart from the name so the history can be pseudonymised.
     * @param {string} params.description - What the promotion is for, in the merchant own words.
     * @param {string} params.endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} params.exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} params.groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {any} params.labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} params.limitPerContact - How often one person may redeem it.
     * @param {number} params.limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - What the promotion is called.
     * @param {number} params.priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {string} params.purgeAt - When the daily purge deletes it for good: the moment it was trashed plus the tenant trash retention.
     * @param {string} params.purgeBlockedReason - Why the purge could not delete it for good. Empty unless a purge tried and was refused; cleared on restore.
     * @param {Reach} params.reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {any} params.recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} params.recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} params.recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} params.recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {any} params.recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} params.returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} params.searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} params.startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} params.status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {any} params.tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} params.template - Which template the Cockpit wizard started the promotion from. A record of where it began; nothing reads it.
     * @param {string} params.timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @param {string} params.trashBatch - One id per trash action, shared by everything that went in with it. Restoring brings back exactly that batch.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     */
    promotionsPromotionsUpdate(params: { id: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, code?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, name?: string, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string }): Promise<Models.Promotion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {any} audienceChannels - Who it is for, by channel: a list of channel codes, one of which the cart must arrive through. Empty is every channel. Checked before the conditions, like a question that must hold.
     * @param {any} audienceRoles - Who it is for, by role: a list of role keys, one of which the buying contact must carry. Empty is every role.
     * @param {any} audienceSegments - Who it is for, by segment: a list of segment codes, one of which the buying organisation must be in — asked of customers, and never held when customers cannot say. Empty is everybody.
     * @param {number} budgetDiscount - The most this promotion may give away in total. Reaching it stops the promotion rather than refusing the cart.
     * @param {number} budgetRedemptions - The most times it may be redeemed in total.
     * @param {string} campaignRef - The campaign this promotion belongs to — the id of a campaign in the campaigns app, written when that app claims the promotion (`PUT { campaign_ref }`, null releases it). Filterable, so the campaigns calendar finds a campaign's promotions. Nothing in an evaluation reads it; `redemption.committed` carries it for attribution.
     * @param {string} channelId - The sales channel this promotion is limited to. Empty applies in every channel.
     * @param {string} code - The short identifier a merchant recognises the promotion by. Unique per tenant.
     * @param {ConditionMatch} conditionMatch - How the outermost conditions are held together when they are a flat list: `all` or `any`.
     * @param {string} currency - The currency this promotion is stated in. A cart in another currency skips it rather than inventing an exchange rate. Empty applies in every currency.
     * @param {string} deletedAt - When the promotion was moved to the trash. Empty for a promotion that is not in it. A trashed promotion applies nowhere and keeps its code reserved.
     * @param {string} deletedBy - Who moved it to the trash, as the platform named them — an email, or `system`.
     * @param {string} deletedById - The platform subject of whoever moved it to the trash. Kept apart from the name so the history can be pseudonymised.
     * @param {string} description - What the promotion is for, in the merchant own words.
     * @param {string} endsAt - When it stops. Empty means it runs until somebody stops it.
     * @param {boolean} exclusive - When true, this promotion applying ends the whole evaluation across every group — the "cannot be combined with anything" printed on a voucher.
     * @param {string} groupId - The stacking group this promotion is weighed in. A promotion in no group follows the tenant default.
     * @param {any} labels - Display text per locale, e.g. `{"de": "Sommeraktion", "en": "Summer sale"}`. What a storefront shows; `name` is what a merchant searches by.
     * @param {number} limitPerContact - How often one person may redeem it.
     * @param {number} limitPerOrganization - How often one company may redeem it. In B2B this is usually what a merchant means by "once per customer".
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - What the promotion is called.
     * @param {number} priority - Higher goes first. The order decides the money as soon as two effects touch the same amount, and a tie is settled by creation time so one cart never produces two different bills.
     * @param {string} purgeAt - When the daily purge deletes it for good: the moment it was trashed plus the tenant trash retention.
     * @param {string} purgeBlockedReason - Why the purge could not delete it for good. Empty unless a purge tried and was refused; cleared on restore.
     * @param {Reach} reach - How a buyer arrives at it: `automatic` applies on its own, `code` applies only to a buyer who entered one of its vouchers.
     * @param {any} recurrenceDays - Days of the month it runs on: numbers from 1 to 31, or the word `last`. A day a month does not have simply does not occur that month.
     * @param {string} recurrenceFrom - Time of day it starts, as HH:MM. A range that crosses midnight is honoured as one range.
     * @param {RecurrenceKind} recurrenceKind - Whether it recurs inside its window, and how: `none`, `weekdays` or `days_of_month`. Never both shapes at once.
     * @param {string} recurrenceUntil - Time of day it stops, as HH:MM.
     * @param {any} recurrenceWeekdays - Day numbers from 1 (Monday) to 7 (Sunday) the promotion runs on.
     * @param {ReturnBehaviour} returnBehaviour - What a return does to this promotion discounts: `reverse_proportionally` gives back what the returned lines carried, `reevaluate` decides again on the goods that were kept. Empty follows the tenant default.
     * @param {boolean} searchBestCombination - When true, this promotion is searched against the others that asked for it, and the order giving the buyer most is used. Bounded by a tenant setting; beyond it the stated order is used and the answer says so.
     * @param {string} startsAt - When the promotion becomes live. Empty means it is live as soon as it is active.
     * @param {PromotionsPromotionsCreateStatus} status - What the merchant set: `draft`, `active`, `paused` or `archived`. What the promotion IS right now also depends on the clock — read `effective_state`.
     * @param {any} tags - Free labels a merchant groups promotions by. Carried onto every fact this app publishes.
     * @param {string} template - Which template the Cockpit wizard started the promotion from. A record of where it began; nothing reads it.
     * @param {string} timezone - The IANA timezone the window and the recurrence are read in. Empty follows the market, then the tenant setting — a merchant means their own midnight.
     * @param {string} trashBatch - One id per trash action, shared by everything that went in with it. Restoring brings back exactly that batch.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Promotion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsUpdate(id: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, code?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, name?: string, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string): Promise<Models.Promotion>;
    promotionsPromotionsUpdate(
        paramsOrFirst: { id: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, code?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, name?: string, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string } | string,
        ...rest: [(any)?, (any)?, (any)?, (number)?, (number)?, (string)?, (string)?, (string)?, (ConditionMatch)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (any)?, (number)?, (number)?, (any)?, (string)?, (number)?, (string)?, (string)?, (Reach)?, (any)?, (string)?, (RecurrenceKind)?, (string)?, (any)?, (ReturnBehaviour)?, (boolean)?, (string)?, (PromotionsPromotionsCreateStatus)?, (any)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Promotion> {
        let params: { id: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, code?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, name?: string, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, audienceChannels?: any, audienceRoles?: any, audienceSegments?: any, budgetDiscount?: number, budgetRedemptions?: number, campaignRef?: string, channelId?: string, code?: string, conditionMatch?: ConditionMatch, currency?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, description?: string, endsAt?: string, exclusive?: boolean, groupId?: string, labels?: any, limitPerContact?: number, limitPerOrganization?: number, metadata?: any, name?: string, priority?: number, purgeAt?: string, purgeBlockedReason?: string, reach?: Reach, recurrenceDays?: any, recurrenceFrom?: string, recurrenceKind?: RecurrenceKind, recurrenceUntil?: string, recurrenceWeekdays?: any, returnBehaviour?: ReturnBehaviour, searchBestCombination?: boolean, startsAt?: string, status?: PromotionsPromotionsCreateStatus, tags?: any, template?: string, timezone?: string, trashBatch?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                audienceChannels: rest[0] as any,
                audienceRoles: rest[1] as any,
                audienceSegments: rest[2] as any,
                budgetDiscount: rest[3] as number,
                budgetRedemptions: rest[4] as number,
                campaignRef: rest[5] as string,
                channelId: rest[6] as string,
                code: rest[7] as string,
                conditionMatch: rest[8] as ConditionMatch,
                currency: rest[9] as string,
                deletedAt: rest[10] as string,
                deletedBy: rest[11] as string,
                deletedById: rest[12] as string,
                description: rest[13] as string,
                endsAt: rest[14] as string,
                exclusive: rest[15] as boolean,
                groupId: rest[16] as string,
                labels: rest[17] as any,
                limitPerContact: rest[18] as number,
                limitPerOrganization: rest[19] as number,
                metadata: rest[20] as any,
                name: rest[21] as string,
                priority: rest[22] as number,
                purgeAt: rest[23] as string,
                purgeBlockedReason: rest[24] as string,
                reach: rest[25] as Reach,
                recurrenceDays: rest[26] as any,
                recurrenceFrom: rest[27] as string,
                recurrenceKind: rest[28] as RecurrenceKind,
                recurrenceUntil: rest[29] as string,
                recurrenceWeekdays: rest[30] as any,
                returnBehaviour: rest[31] as ReturnBehaviour,
                searchBestCombination: rest[32] as boolean,
                startsAt: rest[33] as string,
                status: rest[34] as PromotionsPromotionsCreateStatus,
                tags: rest[35] as any,
                template: rest[36] as string,
                timezone: rest[37] as string,
                trashBatch: rest[38] as string            
            };
        }
        
        const id = params.id;
        const audienceChannels = params.audienceChannels;
        const audienceRoles = params.audienceRoles;
        const audienceSegments = params.audienceSegments;
        const budgetDiscount = params.budgetDiscount;
        const budgetRedemptions = params.budgetRedemptions;
        const campaignRef = params.campaignRef;
        const channelId = params.channelId;
        const code = params.code;
        const conditionMatch = params.conditionMatch;
        const currency = params.currency;
        const deletedAt = params.deletedAt;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const description = params.description;
        const endsAt = params.endsAt;
        const exclusive = params.exclusive;
        const groupId = params.groupId;
        const labels = params.labels;
        const limitPerContact = params.limitPerContact;
        const limitPerOrganization = params.limitPerOrganization;
        const metadata = params.metadata;
        const name = params.name;
        const priority = params.priority;
        const purgeAt = params.purgeAt;
        const purgeBlockedReason = params.purgeBlockedReason;
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
        const template = params.template;
        const timezone = params.timezone;
        const trashBatch = params.trashBatch;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof audienceChannels !== 'undefined') {
            apiPayload['audience_channels'] = audienceChannels;
        }
        if (typeof audienceRoles !== 'undefined') {
            apiPayload['audience_roles'] = audienceRoles;
        }
        if (typeof audienceSegments !== 'undefined') {
            apiPayload['audience_segments'] = audienceSegments;
        }
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
        if (typeof deletedAt !== 'undefined') {
            apiPayload['deleted_at'] = deletedAt;
        }
        if (typeof deletedBy !== 'undefined') {
            apiPayload['deleted_by'] = deletedBy;
        }
        if (typeof deletedById !== 'undefined') {
            apiPayload['deleted_by_id'] = deletedById;
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
        if (typeof purgeAt !== 'undefined') {
            apiPayload['purge_at'] = purgeAt;
        }
        if (typeof purgeBlockedReason !== 'undefined') {
            apiPayload['purge_blocked_reason'] = purgeBlockedReason;
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
        if (typeof template !== 'undefined') {
            apiPayload['template'] = template;
        }
        if (typeof timezone !== 'undefined') {
            apiPayload['timezone'] = timezone;
        }
        if (typeof trashBatch !== 'undefined') {
            apiPayload['trash_batch'] = trashBatch;
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
     * A draft with everything the promotion says about itself, under a new code, plus the parts asked for: `conditions` (the whole tree) and `effects`. Vouchers, redemptions and the budget used are never copied — they are what happened to the original. Answers the new promotion with `copied` counting what came along.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.code - The code of the copy. Unique per tenant, including the trash.
     * @param {PromotionsPromotionsCopyParts[]} params.parts - What comes along. Omitted means both.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsCopy(params: { id: string, code: string, parts?: PromotionsPromotionsCopyParts[] }): Promise<{}>;
    /**
     * A draft with everything the promotion says about itself, under a new code, plus the parts asked for: `conditions` (the whole tree) and `effects`. Vouchers, redemptions and the budget used are never copied — they are what happened to the original. Answers the new promotion with `copied` counting what came along.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} code - The code of the copy. Unique per tenant, including the trash.
     * @param {PromotionsPromotionsCopyParts[]} parts - What comes along. Omitted means both.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsCopy(id: string, code: string, parts?: PromotionsPromotionsCopyParts[]): Promise<{}>;
    promotionsPromotionsCopy(
        paramsOrFirst: { id: string, code: string, parts?: PromotionsPromotionsCopyParts[] } | string,
        ...rest: [(string)?, (PromotionsPromotionsCopyParts[])?]    
    ): Promise<{}> {
        let params: { id: string, code: string, parts?: PromotionsPromotionsCopyParts[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code: string, parts?: PromotionsPromotionsCopyParts[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                parts: rest[1] as PromotionsPromotionsCopyParts[]            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const parts = params.parts;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/promotions/promotions/{id}/copy'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof parts !== 'undefined') {
            apiPayload['parts'] = parts;
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
     * Sets the end of a running, scheduled or paused promotion — now, or at a later date — and nothing else, so its redemptions stay as they are. Holds open carts carry keep counting, unless `honour_reservations` is false and it ends now: then they are given back as expired.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.at - When it ends, for `when: at`. Not in the past.
     * @param {boolean} params.honourReservations - Whether holds open carts carry may still be committed (default true).
     * @param {When} params.when - Now (default) or at the date in `at`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsEnd(params: { id: string, at?: string, honourReservations?: boolean, when?: When }): Promise<{}>;
    /**
     * Sets the end of a running, scheduled or paused promotion — now, or at a later date — and nothing else, so its redemptions stay as they are. Holds open carts carry keep counting, unless `honour_reservations` is false and it ends now: then they are given back as expired.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} at - When it ends, for `when: at`. Not in the past.
     * @param {boolean} honourReservations - Whether holds open carts carry may still be committed (default true).
     * @param {When} when - Now (default) or at the date in `at`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsEnd(id: string, at?: string, honourReservations?: boolean, when?: When): Promise<{}>;
    promotionsPromotionsEnd(
        paramsOrFirst: { id: string, at?: string, honourReservations?: boolean, when?: When } | string,
        ...rest: [(string)?, (boolean)?, (When)?]    
    ): Promise<{}> {
        let params: { id: string, at?: string, honourReservations?: boolean, when?: When };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, at?: string, honourReservations?: boolean, when?: When };
        } else {
            params = {
                id: paramsOrFirst as string,
                at: rest[0] as string,
                honourReservations: rest[1] as boolean,
                when: rest[2] as When            
            };
        }
        
        const id = params.id;
        const at = params.at;
        const honourReservations = params.honourReservations;
        const when = params.when;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/promotions/{id}/end'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof at !== 'undefined') {
            apiPayload['at'] = at;
        }
        if (typeof honourReservations !== 'undefined') {
            apiPayload['honour_reservations'] = honourReservations;
        }
        if (typeof when !== 'undefined') {
            apiPayload['when'] = when;
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
     * Running or scheduled promotions whose window overlaps this one, that act on the same kind of amount (goods or shipping) and share a market — a promotion in no market is in every one. Each says when and where they meet, and how they combine by exclusivity and priority.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsOverlaps(params: { id: string }): Promise<{}>;
    /**
     * Running or scheduled promotions whose window overlaps this one, that act on the same kind of amount (goods or shipping) and share a market — a promotion in no market is in every one. Each says when and where they meet, and how they combine by exclusivity and priority.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsOverlaps(id: string): Promise<{}>;
    promotionsPromotionsOverlaps(
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

        const apiPath = '/v1/promotions/promotions/{id}/overlaps'.replace('{id}', id);
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
     * Two panels of German sentences for the Cockpit record: `effect` (the sentence, every effect, the goods, whether it combines) and `runtime` (state against release, time left, budget used, a forecast of when the budget runs out at the current pace, and how many carts hold it now). `usage` carries the discount budget, the redemption ceiling and the runtime as rows of label and value with the share gone, worded in the caller language (Accept-Language; German unless English is asked for), the carts holding it as a `footer` row.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsOverview(params: { id: string }): Promise<{}>;
    /**
     * Two panels of German sentences for the Cockpit record: `effect` (the sentence, every effect, the goods, whether it combines) and `runtime` (state against release, time left, budget used, a forecast of when the budget runs out at the current pace, and how many carts hold it now). `usage` carries the discount budget, the redemption ceiling and the runtime as rows of label and value with the share gone, worded in the caller language (Accept-Language; German unless English is asked for), the carts holding it as a `footer` row.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsOverview(id: string): Promise<{}>;
    promotionsPromotionsOverview(
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

        const apiPath = '/v1/promotions/promotions/{id}/overview'.replace('{id}', id);
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
     * Clears the trash marks on the promotion. Its conditions, effects, bundles, vouchers and batches were never touched, so they come back with it, and it applies again exactly as it did before — in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionRestoreResult>}
     */
    promotionsPromotionsRestore(params: { id: string }): Promise<Models.PromotionRestoreResult>;
    /**
     * Clears the trash marks on the promotion. Its conditions, effects, bundles, vouchers and batches were never touched, so they come back with it, and it applies again exactly as it did before — in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PromotionRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsRestore(id: string): Promise<Models.PromotionRestoreResult>;
    promotionsPromotionsRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PromotionRestoreResult> {
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

        const apiPath = '/v1/promotions/promotions/{id}/restore'.replace('{id}', id);
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

    /**
     * Redemptions committed per day, and of those the ones later taken back (a cancellation or a return) on the day they were taken back, in the promotion time zone (Europe/Berlin when it names none) — from the first such day to the last with every day between, at most the latest 60 days.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsPromotionsTimeline(params: { id: string }): Promise<{}>;
    /**
     * Redemptions committed per day, and of those the ones later taken back (a cancellation or a return) on the day they were taken back, in the promotion time zone (Europe/Berlin when it names none) — from the first such day to the last with every day between, at most the latest 60 days.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsPromotionsTimeline(id: string): Promise<{}>;
    promotionsPromotionsTimeline(
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

        const apiPath = '/v1/promotions/promotions/{id}/timeline'.replace('{id}', id);
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
