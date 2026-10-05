import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class QuotesPricing {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Moves every quote past its validity to expired. Runs on a schedule and on demand, and is idempotent — a quote already expired is not touched twice. Switching the sweep off does NOT soften the deadline: acceptance past `valid_until` is refused either way.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ExpireResult>}
     */
    quotesPricingExpire(params: { data: object }): Promise<Models.ExpireResult>;
    /**
     * Moves every quote past its validity to expired. Runs on a schedule and on demand, and is idempotent — a quote already expired is not touched twice. Switching the sweep off does NOT soften the deadline: acceptance past `valid_until` is refused either way.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ExpireResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingExpire(data: object): Promise<Models.ExpireResult>;
    quotesPricingExpire(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.ExpireResult> {
        let params: { data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('data' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { data: object };
        } else {
            params = {
                data: paramsOrFirst as object            
            };
        }
        
        const data = params.data;

        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/quotes/expire';
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            Object.assign(apiPayload, data);
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
     * The merchant's side of the desk, and THE designated override point of this app: a tenant whose prices come out of an ERP replaces this one capability at the gateway and keeps everything else. Sets a negotiated price per position, a validity, and the note the customer reads. Re-pricing a quote the buyer has already seen writes a new revision by default, so every round of a negotiation stays readable.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} params.externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {Models.PriceLine[]} params.items - The positions to price. A position left out keeps what it has.
     * @param {string} params.sellerNote - What the customer reads with the quote.
     * @param {number} params.shippingAmount - Carriage quoted alongside the goods, net. It enters `grand_total` and the first order out of the quote.
     * @param {number} params.shippingTaxRate - The rate carriage is taxed at, in percent (0–100).
     * @param {object} params.sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} params.sourceSyncedAt - When this quote was last confirmed against its source.
     * @param {string} params.validUntil - When the offer stops standing. Left out, the configured default validity is used.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesPricingPrice(params: { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string }): Promise<Models.QuoteDetail>;
    /**
     * The merchant's side of the desk, and THE designated override point of this app: a tenant whose prices come out of an ERP replaces this one capability at the gateway and keeps everything else. Sets a negotiated price per position, a validity, and the note the customer reads. Re-pricing a quote the buyer has already seen writes a new revision by default, so every round of a negotiation stays readable.
     *
     * @param {string} id - The quote.
     * @param {string} externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {Models.PriceLine[]} items - The positions to price. A position left out keeps what it has.
     * @param {string} sellerNote - What the customer reads with the quote.
     * @param {number} shippingAmount - Carriage quoted alongside the goods, net. It enters `grand_total` and the first order out of the quote.
     * @param {number} shippingTaxRate - The rate carriage is taxed at, in percent (0–100).
     * @param {object} sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} sourceSyncedAt - When this quote was last confirmed against its source.
     * @param {string} validUntil - When the offer stops standing. Left out, the configured default validity is used.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingPrice(id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string): Promise<Models.QuoteDetail>;
    quotesPricingPrice(
        paramsOrFirst: { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string } | string,
        ...rest: [(string)?, (object)?, (Models.PriceLine[])?, (string)?, (number)?, (number)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                externalId: rest[0] as string,
                externalRefs: rest[1] as object,
                items: rest[2] as Models.PriceLine[],
                sellerNote: rest[3] as string,
                shippingAmount: rest[4] as number,
                shippingTaxRate: rest[5] as number,
                sourceData: rest[6] as object,
                sourceSyncedAt: rest[7] as string,
                validUntil: rest[8] as string            
            };
        }
        
        const id = params.id;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const items = params.items;
        const sellerNote = params.sellerNote;
        const shippingAmount = params.shippingAmount;
        const shippingTaxRate = params.shippingTaxRate;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const validUntil = params.validUntil;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/price'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"externalId":{"wire":"external_id","children":null},"externalRefs":{"wire":"external_refs","children":null},"leadTimeDays":{"wire":"lead_time_days","children":null},"priceReason":{"wire":"price_reason","children":null},"quotedPrice":{"wire":"quoted_price","children":null},"sourceData":{"wire":"source_data","children":null},"sourceSyncedAt":{"wire":"source_synced_at","children":null}});
        }
        if (typeof sellerNote !== 'undefined') {
            apiPayload['seller_note'] = sellerNote;
        }
        if (typeof shippingAmount !== 'undefined') {
            apiPayload['shipping_amount'] = shippingAmount;
        }
        if (typeof shippingTaxRate !== 'undefined') {
            apiPayload['shipping_tax_rate'] = shippingTaxRate;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * Claims a request: it moves out of the unattended queue and gets an owner, which is what a sales worklist filters by.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.ownerId - Who takes it. The caller when left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     */
    quotesPricingReview(params: { id: string, ownerId?: string }): Promise<Models.Quote>;
    /**
     * Claims a request: it moves out of the unattended queue and gets an owner, which is what a sales worklist filters by.
     *
     * @param {string} id - The quote.
     * @param {string} ownerId - Who takes it. The caller when left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingReview(id: string, ownerId?: string): Promise<Models.Quote>;
    quotesPricingReview(
        paramsOrFirst: { id: string, ownerId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Quote> {
        let params: { id: string, ownerId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, ownerId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                ownerId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const ownerId = params.ownerId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/review'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
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
