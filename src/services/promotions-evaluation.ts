import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class PromotionsEvaluation {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * A different question from what a cart is owed: a shop that can only answer the second can only tell a buyer about a discount after they have earned it. With a cart, each promotion states how far away it is — "12 euro more" is the sentence that raises an order value. A promotion needing a code is listed as needing one, and no code appears in the answer.
     *
     * @param {string} params.currency - The three-letter currency the cart is stated in. A promotion in another currency is skipped rather than converted.
     * @param {string} params.channel - The sales channel.
     * @param {string} params.contactId - The person buying.
     * @param {number} params.itemCount - Units in the cart, for a quantity condition. Derived from the lines when absent.
     * @param {Models.PricedCartLine[]} params.lines - The priced cart lines. At most 500.
     * @param {string} params.market - The market the call is for. Also taken from the x-revenexx-market header.
     * @param {string} params.organizationId - The company they buy for.
     * @param {number} params.paymentFee - The payment fee, so an effect can reduce it.
     * @param {number} params.precision - Decimals every derived amount is rounded to. Follows the tenant price policy.
     * @param {string} params.rounding - How a fraction of a cent is rounded: half_up, half_even, up or down.
     * @param {number} params.shipping - The freight cost, so an effect can reduce it.
     * @param {number} params.subtotal - The goods value before any promotion. Derived from the lines when absent.
     * @param {boolean} params.taxIncluded - Whether the prices are gross. A net discount subtracted from a gross line is wrong by exactly the tax rate.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEvaluationAvailable(params: { currency: string, channel?: string, contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean }): Promise<{}>;
    /**
     * A different question from what a cart is owed: a shop that can only answer the second can only tell a buyer about a discount after they have earned it. With a cart, each promotion states how far away it is — "12 euro more" is the sentence that raises an order value. A promotion needing a code is listed as needing one, and no code appears in the answer.
     *
     * @param {string} currency - The three-letter currency the cart is stated in. A promotion in another currency is skipped rather than converted.
     * @param {string} channel - The sales channel.
     * @param {string} contactId - The person buying.
     * @param {number} itemCount - Units in the cart, for a quantity condition. Derived from the lines when absent.
     * @param {Models.PricedCartLine[]} lines - The priced cart lines. At most 500.
     * @param {string} market - The market the call is for. Also taken from the x-revenexx-market header.
     * @param {string} organizationId - The company they buy for.
     * @param {number} paymentFee - The payment fee, so an effect can reduce it.
     * @param {number} precision - Decimals every derived amount is rounded to. Follows the tenant price policy.
     * @param {string} rounding - How a fraction of a cent is rounded: half_up, half_even, up or down.
     * @param {number} shipping - The freight cost, so an effect can reduce it.
     * @param {number} subtotal - The goods value before any promotion. Derived from the lines when absent.
     * @param {boolean} taxIncluded - Whether the prices are gross. A net discount subtracted from a gross line is wrong by exactly the tax rate.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEvaluationAvailable(currency: string, channel?: string, contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean): Promise<{}>;
    promotionsEvaluationAvailable(
        paramsOrFirst: { currency: string, channel?: string, contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean } | string,
        ...rest: [(string)?, (string)?, (number)?, (Models.PricedCartLine[])?, (string)?, (string)?, (number)?, (number)?, (string)?, (number)?, (number)?, (boolean)?]    
    ): Promise<{}> {
        let params: { currency: string, channel?: string, contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { currency: string, channel?: string, contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean };
        } else {
            params = {
                currency: paramsOrFirst as string,
                channel: rest[0] as string,
                contactId: rest[1] as string,
                itemCount: rest[2] as number,
                lines: rest[3] as Models.PricedCartLine[],
                market: rest[4] as string,
                organizationId: rest[5] as string,
                paymentFee: rest[6] as number,
                precision: rest[7] as number,
                rounding: rest[8] as string,
                shipping: rest[9] as number,
                subtotal: rest[10] as number,
                taxIncluded: rest[11] as boolean            
            };
        }
        
        const currency = params.currency;
        const channel = params.channel;
        const contactId = params.contactId;
        const itemCount = params.itemCount;
        const lines = params.lines;
        const market = params.market;
        const organizationId = params.organizationId;
        const paymentFee = params.paymentFee;
        const precision = params.precision;
        const rounding = params.rounding;
        const shipping = params.shipping;
        const subtotal = params.subtotal;
        const taxIncluded = params.taxIncluded;

        if (typeof currency === 'undefined') {
            throw new RevenexxException('Missing required parameter: "currency"');
        }

        const apiPath = '/v1/promotions/available';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof itemCount !== 'undefined') {
            apiPayload['item_count'] = itemCount;
        }
        if (typeof lines !== 'undefined') {
            apiPayload['lines'] = Client.toWireKeys(lines, {"lineTotal":{"wire":"line_total","children":null},"productId":{"wire":"product_id","children":null},"taxRate":{"wire":"tax_rate","children":null},"unitPrice":{"wire":"unit_price","children":null}});
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof paymentFee !== 'undefined') {
            apiPayload['payment_fee'] = paymentFee;
        }
        if (typeof precision !== 'undefined') {
            apiPayload['precision'] = precision;
        }
        if (typeof rounding !== 'undefined') {
            apiPayload['rounding'] = rounding;
        }
        if (typeof shipping !== 'undefined') {
            apiPayload['shipping'] = shipping;
        }
        if (typeof subtotal !== 'undefined') {
            apiPayload['subtotal'] = subtotal;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
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
     * A landing page shows an offer before a buyer has added anything, and should not have to invent a cart to find out whether it is still live. The answer never says WHO a code belongs to — the address is reachable by anyone who can guess a code, and one that answered with a customer name would be a data leak with a search box.
     *
     * @param {string} params.code - The code to check.
     * @param {string} params.contactId - Who is asking, so a code held for them is reported as usable.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEvaluationCheckCode(params: { code: string, contactId?: string }): Promise<{}>;
    /**
     * A landing page shows an offer before a buyer has added anything, and should not have to invent a cart to find out whether it is still live. The answer never says WHO a code belongs to — the address is reachable by anyone who can guess a code, and one that answered with a customer name would be a data leak with a search box.
     *
     * @param {string} code - The code to check.
     * @param {string} contactId - Who is asking, so a code held for them is reported as usable.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEvaluationCheckCode(code: string, contactId?: string): Promise<{}>;
    promotionsEvaluationCheckCode(
        paramsOrFirst: { code: string, contactId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { code: string, contactId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, contactId?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                contactId: rest[0] as string            
            };
        }
        
        const code = params.code;
        const contactId = params.contactId;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/promotions/codes/check';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
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
     * THE promotion call, and the designated override point. A priced cart goes in; a list of attributed effects comes out, each naming the promotion behind it and the amount it takes off. It writes nothing, so a storefront may call it on every keystroke, and it prices nothing, so a line with no resolved unit price is refused rather than guessed at. Promotions that matched and lost are named with the reason, unless the tenant switched disclosure off. The answer carries the policy it was computed under, so a discount can be re-derived from its own payload.
     *
     * @param {string} params.currency - The three-letter currency the cart is stated in. A promotion in another currency is skipped rather than converted.
     * @param {string} params.channel - The sales channel.
     * @param {string[]} params.codes - Codes the buyer entered. Matched trimmed and case-insensitively unless the tenant made codes case-sensitive.
     * @param {string} params.contactId - The person buying.
     * @param {number} params.itemCount - Units in the cart, for a quantity condition. Derived from the lines when absent.
     * @param {Models.PricedCartLine[]} params.lines - The priced cart lines. At most 500.
     * @param {string} params.market - The market the call is for. Also taken from the x-revenexx-market header.
     * @param {string} params.organizationId - The company they buy for.
     * @param {number} params.paymentFee - The payment fee, so an effect can reduce it.
     * @param {number} params.precision - Decimals every derived amount is rounded to. Follows the tenant price policy.
     * @param {string[]} params.previewPromotionIds - Promotions to evaluate although they are not live — a merchant testing a drafted offer against a real cart. Nothing about them is changed.
     * @param {string} params.rounding - How a fraction of a cent is rounded: half_up, half_even, up or down.
     * @param {number} params.shipping - The freight cost, so an effect can reduce it.
     * @param {number} params.subtotal - The goods value before any promotion. Derived from the lines when absent.
     * @param {boolean} params.taxIncluded - Whether the prices are gross. A net discount subtracted from a gross line is wrong by exactly the tax rate.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEvaluationEvaluate(params: { currency: string, channel?: string, codes?: string[], contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, previewPromotionIds?: string[], rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean }): Promise<{}>;
    /**
     * THE promotion call, and the designated override point. A priced cart goes in; a list of attributed effects comes out, each naming the promotion behind it and the amount it takes off. It writes nothing, so a storefront may call it on every keystroke, and it prices nothing, so a line with no resolved unit price is refused rather than guessed at. Promotions that matched and lost are named with the reason, unless the tenant switched disclosure off. The answer carries the policy it was computed under, so a discount can be re-derived from its own payload.
     *
     * @param {string} currency - The three-letter currency the cart is stated in. A promotion in another currency is skipped rather than converted.
     * @param {string} channel - The sales channel.
     * @param {string[]} codes - Codes the buyer entered. Matched trimmed and case-insensitively unless the tenant made codes case-sensitive.
     * @param {string} contactId - The person buying.
     * @param {number} itemCount - Units in the cart, for a quantity condition. Derived from the lines when absent.
     * @param {Models.PricedCartLine[]} lines - The priced cart lines. At most 500.
     * @param {string} market - The market the call is for. Also taken from the x-revenexx-market header.
     * @param {string} organizationId - The company they buy for.
     * @param {number} paymentFee - The payment fee, so an effect can reduce it.
     * @param {number} precision - Decimals every derived amount is rounded to. Follows the tenant price policy.
     * @param {string[]} previewPromotionIds - Promotions to evaluate although they are not live — a merchant testing a drafted offer against a real cart. Nothing about them is changed.
     * @param {string} rounding - How a fraction of a cent is rounded: half_up, half_even, up or down.
     * @param {number} shipping - The freight cost, so an effect can reduce it.
     * @param {number} subtotal - The goods value before any promotion. Derived from the lines when absent.
     * @param {boolean} taxIncluded - Whether the prices are gross. A net discount subtracted from a gross line is wrong by exactly the tax rate.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEvaluationEvaluate(currency: string, channel?: string, codes?: string[], contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, previewPromotionIds?: string[], rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean): Promise<{}>;
    promotionsEvaluationEvaluate(
        paramsOrFirst: { currency: string, channel?: string, codes?: string[], contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, previewPromotionIds?: string[], rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean } | string,
        ...rest: [(string)?, (string[])?, (string)?, (number)?, (Models.PricedCartLine[])?, (string)?, (string)?, (number)?, (number)?, (string[])?, (string)?, (number)?, (number)?, (boolean)?]    
    ): Promise<{}> {
        let params: { currency: string, channel?: string, codes?: string[], contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, previewPromotionIds?: string[], rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { currency: string, channel?: string, codes?: string[], contactId?: string, itemCount?: number, lines?: Models.PricedCartLine[], market?: string, organizationId?: string, paymentFee?: number, precision?: number, previewPromotionIds?: string[], rounding?: string, shipping?: number, subtotal?: number, taxIncluded?: boolean };
        } else {
            params = {
                currency: paramsOrFirst as string,
                channel: rest[0] as string,
                codes: rest[1] as string[],
                contactId: rest[2] as string,
                itemCount: rest[3] as number,
                lines: rest[4] as Models.PricedCartLine[],
                market: rest[5] as string,
                organizationId: rest[6] as string,
                paymentFee: rest[7] as number,
                precision: rest[8] as number,
                previewPromotionIds: rest[9] as string[],
                rounding: rest[10] as string,
                shipping: rest[11] as number,
                subtotal: rest[12] as number,
                taxIncluded: rest[13] as boolean            
            };
        }
        
        const currency = params.currency;
        const channel = params.channel;
        const codes = params.codes;
        const contactId = params.contactId;
        const itemCount = params.itemCount;
        const lines = params.lines;
        const market = params.market;
        const organizationId = params.organizationId;
        const paymentFee = params.paymentFee;
        const precision = params.precision;
        const previewPromotionIds = params.previewPromotionIds;
        const rounding = params.rounding;
        const shipping = params.shipping;
        const subtotal = params.subtotal;
        const taxIncluded = params.taxIncluded;

        if (typeof currency === 'undefined') {
            throw new RevenexxException('Missing required parameter: "currency"');
        }

        const apiPath = '/v1/promotions/evaluate';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof codes !== 'undefined') {
            apiPayload['codes'] = codes;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof itemCount !== 'undefined') {
            apiPayload['item_count'] = itemCount;
        }
        if (typeof lines !== 'undefined') {
            apiPayload['lines'] = Client.toWireKeys(lines, {"lineTotal":{"wire":"line_total","children":null},"productId":{"wire":"product_id","children":null},"taxRate":{"wire":"tax_rate","children":null},"unitPrice":{"wire":"unit_price","children":null}});
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof paymentFee !== 'undefined') {
            apiPayload['payment_fee'] = paymentFee;
        }
        if (typeof precision !== 'undefined') {
            apiPayload['precision'] = precision;
        }
        if (typeof previewPromotionIds !== 'undefined') {
            apiPayload['preview_promotion_ids'] = previewPromotionIds;
        }
        if (typeof rounding !== 'undefined') {
            apiPayload['rounding'] = rounding;
        }
        if (typeof shipping !== 'undefined') {
            apiPayload['shipping'] = shipping;
        }
        if (typeof subtotal !== 'undefined') {
            apiPayload['subtotal'] = subtotal;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
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
     * The subjects a condition may ask about, the comparisons it may use, the effect kinds and target scopes, the stacking modes, and the closed lists of refusal, skip and release reasons. A caller building a form reads these rather than hardcoding them.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEvaluationVocabularies(): Promise<{}> {

        const apiPath = '/v1/promotions/vocabularies';
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
     * @param {string} params.name - The vocabulary name, as the list answers it.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsEvaluationVocabulary(params: { name: string }): Promise<{}>;
    /**
     *
     * @param {string} name - The vocabulary name, as the list answers it.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsEvaluationVocabulary(name: string): Promise<{}>;
    promotionsEvaluationVocabulary(
        paramsOrFirst: { name: string } | string    
    ): Promise<{}> {
        let params: { name: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string };
        } else {
            params = {
                name: paramsOrFirst as string            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/promotions/vocabularies/{name}'.replace('{name}', name);
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
