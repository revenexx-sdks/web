import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PromotionsRedemptionsReleaseReason } from '../enums/promotions-redemptions-release-reason';

export class PromotionsRedemptions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The order is what survives the cart, so this is where a redemption stops pointing at something temporary. Idempotent on the order: a checkout retries a call it did not see answered, and a second commitment would count the budget twice for one sale. A caller with no prior hold may commit directly, which is what a back-office or an imported order needs.
     *
     * @param {string} params.orderId - The order the redemptions are recorded against.
     * @param {string} params.cartId - The cart whose hold is being committed.
     * @param {string} params.contactId - The person buying, for a direct commitment.
     * @param {string} params.currency - The currency, for a direct commitment.
     * @param {string} params.market - The market, carried onto the published fact.
     * @param {string} params.organizationId - The company, for a direct commitment.
     * @param {object[]} params.promotions - What to record, for a commitment with no prior hold.
     * @param {object} params.terms - Per promotion, the effects that produced it — what a re-decided return is settled against, because an order is a snapshot everywhere else in this platform.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsRedemptionsCommit(params: { orderId: string, cartId?: string, contactId?: string, currency?: string, market?: string, organizationId?: string, promotions?: object[], terms?: object }): Promise<{}>;
    /**
     * The order is what survives the cart, so this is where a redemption stops pointing at something temporary. Idempotent on the order: a checkout retries a call it did not see answered, and a second commitment would count the budget twice for one sale. A caller with no prior hold may commit directly, which is what a back-office or an imported order needs.
     *
     * @param {string} orderId - The order the redemptions are recorded against.
     * @param {string} cartId - The cart whose hold is being committed.
     * @param {string} contactId - The person buying, for a direct commitment.
     * @param {string} currency - The currency, for a direct commitment.
     * @param {string} market - The market, carried onto the published fact.
     * @param {string} organizationId - The company, for a direct commitment.
     * @param {object[]} promotions - What to record, for a commitment with no prior hold.
     * @param {object} terms - Per promotion, the effects that produced it — what a re-decided return is settled against, because an order is a snapshot everywhere else in this platform.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsRedemptionsCommit(orderId: string, cartId?: string, contactId?: string, currency?: string, market?: string, organizationId?: string, promotions?: object[], terms?: object): Promise<{}>;
    promotionsRedemptionsCommit(
        paramsOrFirst: { orderId: string, cartId?: string, contactId?: string, currency?: string, market?: string, organizationId?: string, promotions?: object[], terms?: object } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (object[])?, (object)?]    
    ): Promise<{}> {
        let params: { orderId: string, cartId?: string, contactId?: string, currency?: string, market?: string, organizationId?: string, promotions?: object[], terms?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { orderId: string, cartId?: string, contactId?: string, currency?: string, market?: string, organizationId?: string, promotions?: object[], terms?: object };
        } else {
            params = {
                orderId: paramsOrFirst as string,
                cartId: rest[0] as string,
                contactId: rest[1] as string,
                currency: rest[2] as string,
                market: rest[3] as string,
                organizationId: rest[4] as string,
                promotions: rest[5] as object[],
                terms: rest[6] as object            
            };
        }
        
        const orderId = params.orderId;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const currency = params.currency;
        const market = params.market;
        const organizationId = params.organizationId;
        const promotions = params.promotions;
        const terms = params.terms;

        if (typeof orderId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderId"');
        }

        const apiPath = '/v1/promotions/commit';
        const apiPayload: Payload = {};
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof promotions !== 'undefined') {
            apiPayload['promotions'] = promotions;
        }
        if (typeof terms !== 'undefined') {
            apiPayload['terms'] = terms;
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
     * Housekeeping, and nothing depends on it: an expired hold stops counting when the promotion is next looked at, whether or not this ever runs. It publishes nothing, because an expiry is not a fact anybody wants mailed. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsRedemptionsSweep(): Promise<{}> {

        const apiPath = '/v1/promotions/holds/sweep';
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
     * The ledger. Every row is the outcome of a hold, a commitment, a release or a return — a hand-written one would be a discount nobody gave, so this is read-only. It is the row that answers why a past order was cheaper, for support, for the margin report and for the export to a buying organisation.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.voucherId - Keep only rows whose `voucher_id` equals this.
     * @param {string} params.cartId - Keep only rows whose `cart_id` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsRedemptionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, voucherId?: string, cartId?: string, orderId?: string, contactId?: string, organizationId?: string, state?: string, currency?: string }): Promise<{}>;
    /**
     * The ledger. Every row is the outcome of a hold, a commitment, a release or a return — a hand-written one would be a discount nobody gave, so this is read-only. It is the row that answers why a past order was cheaper, for support, for the margin report and for the export to a buying organisation.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} voucherId - Keep only rows whose `voucher_id` equals this.
     * @param {string} cartId - Keep only rows whose `cart_id` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsRedemptionsList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, voucherId?: string, cartId?: string, orderId?: string, contactId?: string, organizationId?: string, state?: string, currency?: string): Promise<{}>;
    promotionsRedemptionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, voucherId?: string, cartId?: string, orderId?: string, contactId?: string, organizationId?: string, state?: string, currency?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, voucherId?: string, cartId?: string, orderId?: string, contactId?: string, organizationId?: string, state?: string, currency?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, voucherId?: string, cartId?: string, orderId?: string, contactId?: string, organizationId?: string, state?: string, currency?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                promotionId: rest[3] as string,
                voucherId: rest[4] as string,
                cartId: rest[5] as string,
                orderId: rest[6] as string,
                contactId: rest[7] as string,
                organizationId: rest[8] as string,
                state: rest[9] as string,
                currency: rest[10] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const promotionId = params.promotionId;
        const voucherId = params.voucherId;
        const cartId = params.cartId;
        const orderId = params.orderId;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const state = params.state;
        const currency = params.currency;


        const apiPath = '/v1/promotions/redemptions';
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
        if (typeof voucherId !== 'undefined') {
            apiPayload['voucher_id'] = voucherId;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Redemption>}
     */
    promotionsRedemptionsGet(params: { id: string }): Promise<Models.Redemption>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Redemption>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsRedemptionsGet(id: string): Promise<Models.Redemption>;
    promotionsRedemptionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Redemption> {
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

        const apiPath = '/v1/promotions/redemptions/{id}'.replace('{id}', id);
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
     * Abandoned carts are the majority of carts, and a hold that never came back would exhaust every campaign within a day. Releasing is not terminal: a buyer returning to a recovered cart may hold again, which is the journey every recovery mail is sent for.
     *
     * @param {string} params.cartId - Release this cart hold.
     * @param {string} params.orderId - Release this order redemptions — a cancellation.
     * @param {PromotionsRedemptionsReleaseReason} params.reason - Why they came back. Carried onto the published fact.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsRedemptionsRelease(params?: { cartId?: string, orderId?: string, reason?: PromotionsRedemptionsReleaseReason }): Promise<{}>;
    /**
     * Abandoned carts are the majority of carts, and a hold that never came back would exhaust every campaign within a day. Releasing is not terminal: a buyer returning to a recovered cart may hold again, which is the journey every recovery mail is sent for.
     *
     * @param {string} cartId - Release this cart hold.
     * @param {string} orderId - Release this order redemptions — a cancellation.
     * @param {PromotionsRedemptionsReleaseReason} reason - Why they came back. Carried onto the published fact.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsRedemptionsRelease(cartId?: string, orderId?: string, reason?: PromotionsRedemptionsReleaseReason): Promise<{}>;
    promotionsRedemptionsRelease(
        paramsOrFirst?: { cartId?: string, orderId?: string, reason?: PromotionsRedemptionsReleaseReason } | string,
        ...rest: [(string)?, (PromotionsRedemptionsReleaseReason)?]    
    ): Promise<{}> {
        let params: { cartId?: string, orderId?: string, reason?: PromotionsRedemptionsReleaseReason };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId?: string, orderId?: string, reason?: PromotionsRedemptionsReleaseReason };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                orderId: rest[0] as string,
                reason: rest[1] as PromotionsRedemptionsReleaseReason            
            };
        }
        
        const cartId = params.cartId;
        const orderId = params.orderId;
        const reason = params.reason;


        const apiPath = '/v1/promotions/release';
        const apiPayload: Payload = {};
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * A budget nobody holds is a budget every concurrent checkout is promised, and the merchant pays the difference. The whole set is replaced rather than added to, because a buyer edits a cart until the last moment. Naming `from_cart_id` moves a hold instead of duplicating it, which is what a merging cart needs.
     *
     * @param {string} params.cartId - The cart the hold is taken on.
     * @param {string} params.contactId - The person buying.
     * @param {string} params.currency - The currency the amounts are stated in.
     * @param {string} params.fromCartId - A cart being merged into this one. Its hold is released in the same call, so the promotion is never scarcer than it really is.
     * @param {string} params.organizationId - The company they buy for.
     * @param {Models.PromotionHold[]} params.promotions - What this cart intends to use, as the evaluation answered it.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsRedemptionsReserve(params: { cartId: string, contactId?: string, currency?: string, fromCartId?: string, organizationId?: string, promotions?: Models.PromotionHold[] }): Promise<{}>;
    /**
     * A budget nobody holds is a budget every concurrent checkout is promised, and the merchant pays the difference. The whole set is replaced rather than added to, because a buyer edits a cart until the last moment. Naming `from_cart_id` moves a hold instead of duplicating it, which is what a merging cart needs.
     *
     * @param {string} cartId - The cart the hold is taken on.
     * @param {string} contactId - The person buying.
     * @param {string} currency - The currency the amounts are stated in.
     * @param {string} fromCartId - A cart being merged into this one. Its hold is released in the same call, so the promotion is never scarcer than it really is.
     * @param {string} organizationId - The company they buy for.
     * @param {Models.PromotionHold[]} promotions - What this cart intends to use, as the evaluation answered it.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsRedemptionsReserve(cartId: string, contactId?: string, currency?: string, fromCartId?: string, organizationId?: string, promotions?: Models.PromotionHold[]): Promise<{}>;
    promotionsRedemptionsReserve(
        paramsOrFirst: { cartId: string, contactId?: string, currency?: string, fromCartId?: string, organizationId?: string, promotions?: Models.PromotionHold[] } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (Models.PromotionHold[])?]    
    ): Promise<{}> {
        let params: { cartId: string, contactId?: string, currency?: string, fromCartId?: string, organizationId?: string, promotions?: Models.PromotionHold[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, contactId?: string, currency?: string, fromCartId?: string, organizationId?: string, promotions?: Models.PromotionHold[] };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                contactId: rest[0] as string,
                currency: rest[1] as string,
                fromCartId: rest[2] as string,
                organizationId: rest[3] as string,
                promotions: rest[4] as Models.PromotionHold[]            
            };
        }
        
        const cartId = params.cartId;
        const contactId = params.contactId;
        const currency = params.currency;
        const fromCartId = params.fromCartId;
        const organizationId = params.organizationId;
        const promotions = params.promotions;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/promotions/reserve';
        const apiPayload: Payload = {};
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof fromCartId !== 'undefined') {
            apiPayload['from_cart_id'] = fromCartId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof promotions !== 'undefined') {
            apiPayload['promotions'] = Client.toWireKeys(promotions, {"chosenItems":{"wire":"chosen_items","children":null},"promotionId":{"wire":"promotion_id","children":null},"voucherId":{"wire":"voucher_id","children":null}});
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
     * A returned line gives back the discount recorded against it, and nothing else moves — unless the promotion re-decides, which is a merchant choice and not an algorithm. Idempotent on the return reference: order management retries, and a return credited twice hands a budget back money it never spent.
     *
     * @param {string} params.orderId - The order goods came back from.
     * @param {boolean} params.all - Everything came back. The same result as a cancellation, so a merchant watching campaign figures sees one answer either way.
     * @param {Models.ReturnedLine[]} params.lines - Which lines came back.
     * @param {object} params.remainingAmounts - Per promotion, what the kept goods are owed — for a promotion that re-decides rather than reversing in proportion.
     * @param {string} params.returnRef - The return identifier, so a repeated report credits nothing further.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsRedemptionsReturns(params: { orderId: string, all?: boolean, lines?: Models.ReturnedLine[], remainingAmounts?: object, returnRef?: string }): Promise<{}>;
    /**
     * A returned line gives back the discount recorded against it, and nothing else moves — unless the promotion re-decides, which is a merchant choice and not an algorithm. Idempotent on the return reference: order management retries, and a return credited twice hands a budget back money it never spent.
     *
     * @param {string} orderId - The order goods came back from.
     * @param {boolean} all - Everything came back. The same result as a cancellation, so a merchant watching campaign figures sees one answer either way.
     * @param {Models.ReturnedLine[]} lines - Which lines came back.
     * @param {object} remainingAmounts - Per promotion, what the kept goods are owed — for a promotion that re-decides rather than reversing in proportion.
     * @param {string} returnRef - The return identifier, so a repeated report credits nothing further.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsRedemptionsReturns(orderId: string, all?: boolean, lines?: Models.ReturnedLine[], remainingAmounts?: object, returnRef?: string): Promise<{}>;
    promotionsRedemptionsReturns(
        paramsOrFirst: { orderId: string, all?: boolean, lines?: Models.ReturnedLine[], remainingAmounts?: object, returnRef?: string } | string,
        ...rest: [(boolean)?, (Models.ReturnedLine[])?, (object)?, (string)?]    
    ): Promise<{}> {
        let params: { orderId: string, all?: boolean, lines?: Models.ReturnedLine[], remainingAmounts?: object, returnRef?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { orderId: string, all?: boolean, lines?: Models.ReturnedLine[], remainingAmounts?: object, returnRef?: string };
        } else {
            params = {
                orderId: paramsOrFirst as string,
                all: rest[0] as boolean,
                lines: rest[1] as Models.ReturnedLine[],
                remainingAmounts: rest[2] as object,
                returnRef: rest[3] as string            
            };
        }
        
        const orderId = params.orderId;
        const all = params.all;
        const lines = params.lines;
        const remainingAmounts = params.remainingAmounts;
        const returnRef = params.returnRef;

        if (typeof orderId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderId"');
        }

        const apiPath = '/v1/promotions/returns';
        const apiPayload: Payload = {};
        if (typeof all !== 'undefined') {
            apiPayload['all'] = all;
        }
        if (typeof lines !== 'undefined') {
            apiPayload['lines'] = lines;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof remainingAmounts !== 'undefined') {
            apiPayload['remaining_amounts'] = remainingAmounts;
        }
        if (typeof returnRef !== 'undefined') {
            apiPayload['return_ref'] = returnRef;
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
}
