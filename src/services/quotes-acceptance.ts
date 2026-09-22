import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class QuotesAcceptance {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The buyer takes the offer. Sent with no positions it takes everything still open; sent with positions it decides exactly those, which leaves the quote `partially_accepted` and open for the rest — a second acceptance later produces a SECOND order. The answer carries an `order_draft` shaped the way order management takes it, with the negotiated price as `unit_price`, covering only what THIS call accepted. Refused past `valid_until`, and refused entirely when the merchant does not allow a basket to be taken apart.
     *
     * @param {string} params.id - The quote.
     * @param {Models.AcceptLine[]} params.items - The positions to decide. Left out, every position still open is accepted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AcceptResult>}
     */
    quotesAcceptanceAccept(params: { id: string, items?: Models.AcceptLine[] }): Promise<Models.AcceptResult>;
    /**
     * The buyer takes the offer. Sent with no positions it takes everything still open; sent with positions it decides exactly those, which leaves the quote `partially_accepted` and open for the rest — a second acceptance later produces a SECOND order. The answer carries an `order_draft` shaped the way order management takes it, with the negotiated price as `unit_price`, covering only what THIS call accepted. Refused past `valid_until`, and refused entirely when the merchant does not allow a basket to be taken apart.
     *
     * @param {string} id - The quote.
     * @param {Models.AcceptLine[]} items - The positions to decide. Left out, every position still open is accepted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AcceptResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesAcceptanceAccept(id: string, items?: Models.AcceptLine[]): Promise<Models.AcceptResult>;
    quotesAcceptanceAccept(
        paramsOrFirst: { id: string, items?: Models.AcceptLine[] } | string,
        ...rest: [(Models.AcceptLine[])?]    
    ): Promise<Models.AcceptResult> {
        let params: { id: string, items?: Models.AcceptLine[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, items?: Models.AcceptLine[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                items: rest[0] as Models.AcceptLine[]            
            };
        }
        
        const id = params.id;
        const items = params.items;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/accept'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
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
     * The buyer refuses the offer. Every position still open is declined with it.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.reason - Why, in the words the merchant will read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     */
    quotesAcceptanceDecline(params: { id: string, reason?: string }): Promise<Models.Quote>;
    /**
     * The buyer refuses the offer. Every position still open is declined with it.
     *
     * @param {string} id - The quote.
     * @param {string} reason - Why, in the words the merchant will read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesAcceptanceDecline(id: string, reason?: string): Promise<Models.Quote>;
    quotesAcceptanceDecline(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Quote> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/decline'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * Writes back which order took which positions. This app cannot know the order id — order management mints it after the draft was handed over — so without this call the record could not answer "which order came out of this quote".
     *
     * @param {string} params.id - The quote.
     * @param {string} params.orderId - The order order management created.
     * @param {string[]} params.itemIds - Which positions went into it. Left out, every accepted position not yet on an order.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderedResult>}
     */
    quotesAcceptanceOrdered(params: { id: string, orderId: string, itemIds?: string[] }): Promise<Models.OrderedResult>;
    /**
     * Writes back which order took which positions. This app cannot know the order id — order management mints it after the draft was handed over — so without this call the record could not answer "which order came out of this quote".
     *
     * @param {string} id - The quote.
     * @param {string} orderId - The order order management created.
     * @param {string[]} itemIds - Which positions went into it. Left out, every accepted position not yet on an order.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderedResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesAcceptanceOrdered(id: string, orderId: string, itemIds?: string[]): Promise<Models.OrderedResult>;
    quotesAcceptanceOrdered(
        paramsOrFirst: { id: string, orderId: string, itemIds?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.OrderedResult> {
        let params: { id: string, orderId: string, itemIds?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, orderId: string, itemIds?: string[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                orderId: rest[0] as string,
                itemIds: rest[1] as string[]            
            };
        }
        
        const id = params.id;
        const orderId = params.orderId;
        const itemIds = params.itemIds;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof orderId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderId"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/ordered'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof itemIds !== 'undefined') {
            apiPayload['item_ids'] = itemIds;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
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
     * The merchant will not make an offer — not deliverable, not a customer they serve, a quantity they cannot do. The reason is required: a refusal the buyer cannot read is not a refusal.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.reason - Why the merchant will not quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     */
    quotesAcceptanceReject(params: { id: string, reason: string }): Promise<Models.Quote>;
    /**
     * The merchant will not make an offer — not deliverable, not a customer they serve, a quantity they cannot do. The reason is required: a refusal the buyer cannot read is not a refusal.
     *
     * @param {string} id - The quote.
     * @param {string} reason - Why the merchant will not quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesAcceptanceReject(id: string, reason: string): Promise<Models.Quote>;
    quotesAcceptanceReject(
        paramsOrFirst: { id: string, reason: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Quote> {
        let params: { id: string, reason: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/reject'.replace('{id}', id);
        const apiPayload: Payload = {};
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
}
