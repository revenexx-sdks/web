import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PriceReason } from '../enums/price-reason';
import { QuotesPricingReviewState } from '../enums/quotes-pricing-review-state';

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
     * Removes one position while its quote is `requested` or `in_review`, and re-totals the quote. The last position stays: a quote with nothing on it is declined or rejected instead.
     *
     * @param {string} params.id - The position.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.RemovedItem>}
     */
    quotesPricingRemoveItem(params: { id: string, data: object }): Promise<Models.RemovedItem>;
    /**
     * Removes one position while its quote is `requested` or `in_review`, and re-totals the quote. The last position stays: a quote with nothing on it is declined or rejected instead.
     *
     * @param {string} id - The position.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.RemovedItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingRemoveItem(id: string, data: object): Promise<Models.RemovedItem>;
    quotesPricingRemoveItem(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.RemovedItem> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/quotes/items/{id}/remove'.replace('{id}', id);
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
     * Sets or clears `follow_up_at` on an open quote and writes it to the internal trail. The buyer is not told; nothing happens on the day by itself.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.followUpAt - The day, YYYY-MM-DD. `null` clears it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     */
    quotesPricingFollowUp(params: { id: string, followUpAt?: string }): Promise<Models.Quote>;
    /**
     * Sets or clears `follow_up_at` on an open quote and writes it to the internal trail. The buyer is not told; nothing happens on the day by itself.
     *
     * @param {string} id - The quote.
     * @param {string} followUpAt - The day, YYYY-MM-DD. `null` clears it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingFollowUp(id: string, followUpAt?: string): Promise<Models.Quote>;
    quotesPricingFollowUp(
        paramsOrFirst: { id: string, followUpAt?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Quote> {
        let params: { id: string, followUpAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, followUpAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                followUpAt: rest[0] as string            
            };
        }
        
        const id = params.id;
        const followUpAt = params.followUpAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/follow-up'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof followUpAt !== 'undefined') {
            apiPayload['follow_up_at'] = followUpAt;
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
     * Adds one position while the quote is `requested` or `in_review`. The line is the shape a quote's lines always take — the caller names the article (`name`, else `sku`, is required); this app does not read the catalogue. It goes in after the last position and the quote re-totals. A sent quote takes no new position: it changes by pricing it again, which leaves a revision.
     *
     * @param {string} params.id - The quote.
     * @param {object} params.configuration - What was configured on this line, in the configurator's vocabulary.
     * @param {number} params.discountPercent - A discount on the list price instead of a quoted price.
     * @param {string} params.externalId - The key this position has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} params.externalRefs - Every other system that knows this position, keyed by system name.
     * @param {number} params.leadTimeDays - Quoted delivery time in days.
     * @param {number} params.listPrice - The catalogue price per unit. Leave it out for a position that has none — that is what "price on request" is.
     * @param {object} params.metadata - Free-form data carried with the line.
     * @param {string} params.name - What the position is called. Falls back to the SKU.
     * @param {number} params.position - Sort order. Left out, positions are numbered in steps of ten.
     * @param {PriceReason} params.priceReason - Why the price is what it is.
     * @param {string} params.productId - The catalogue product, when the line names one.
     * @param {number} params.quantity - How many units. 1 when left out.
     * @param {number} params.quotedPrice - A negotiated price, when the caller already knows one. Normally set later, by pricing.
     * @param {string} params.sku - The article number. Free text.
     * @param {object} params.sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} params.sourceSyncedAt - When this position was last confirmed against its source.
     * @param {number} params.taxRate - The rate in percent.
     * @param {string} params.unit - The unit the quantity is counted in.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteItem>}
     */
    quotesPricingAddItem(params: { id: string, configuration?: object, discountPercent?: number, externalId?: string, externalRefs?: object, leadTimeDays?: number, listPrice?: number, metadata?: object, name?: string, position?: number, priceReason?: PriceReason, productId?: string, quantity?: number, quotedPrice?: number, sku?: string, sourceData?: object, sourceSyncedAt?: string, taxRate?: number, unit?: string }): Promise<Models.QuoteItem>;
    /**
     * Adds one position while the quote is `requested` or `in_review`. The line is the shape a quote's lines always take — the caller names the article (`name`, else `sku`, is required); this app does not read the catalogue. It goes in after the last position and the quote re-totals. A sent quote takes no new position: it changes by pricing it again, which leaves a revision.
     *
     * @param {string} id - The quote.
     * @param {object} configuration - What was configured on this line, in the configurator's vocabulary.
     * @param {number} discountPercent - A discount on the list price instead of a quoted price.
     * @param {string} externalId - The key this position has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} externalRefs - Every other system that knows this position, keyed by system name.
     * @param {number} leadTimeDays - Quoted delivery time in days.
     * @param {number} listPrice - The catalogue price per unit. Leave it out for a position that has none — that is what "price on request" is.
     * @param {object} metadata - Free-form data carried with the line.
     * @param {string} name - What the position is called. Falls back to the SKU.
     * @param {number} position - Sort order. Left out, positions are numbered in steps of ten.
     * @param {PriceReason} priceReason - Why the price is what it is.
     * @param {string} productId - The catalogue product, when the line names one.
     * @param {number} quantity - How many units. 1 when left out.
     * @param {number} quotedPrice - A negotiated price, when the caller already knows one. Normally set later, by pricing.
     * @param {string} sku - The article number. Free text.
     * @param {object} sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} sourceSyncedAt - When this position was last confirmed against its source.
     * @param {number} taxRate - The rate in percent.
     * @param {string} unit - The unit the quantity is counted in.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingAddItem(id: string, configuration?: object, discountPercent?: number, externalId?: string, externalRefs?: object, leadTimeDays?: number, listPrice?: number, metadata?: object, name?: string, position?: number, priceReason?: PriceReason, productId?: string, quantity?: number, quotedPrice?: number, sku?: string, sourceData?: object, sourceSyncedAt?: string, taxRate?: number, unit?: string): Promise<Models.QuoteItem>;
    quotesPricingAddItem(
        paramsOrFirst: { id: string, configuration?: object, discountPercent?: number, externalId?: string, externalRefs?: object, leadTimeDays?: number, listPrice?: number, metadata?: object, name?: string, position?: number, priceReason?: PriceReason, productId?: string, quantity?: number, quotedPrice?: number, sku?: string, sourceData?: object, sourceSyncedAt?: string, taxRate?: number, unit?: string } | string,
        ...rest: [(object)?, (number)?, (string)?, (object)?, (number)?, (number)?, (object)?, (string)?, (number)?, (PriceReason)?, (string)?, (number)?, (number)?, (string)?, (object)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.QuoteItem> {
        let params: { id: string, configuration?: object, discountPercent?: number, externalId?: string, externalRefs?: object, leadTimeDays?: number, listPrice?: number, metadata?: object, name?: string, position?: number, priceReason?: PriceReason, productId?: string, quantity?: number, quotedPrice?: number, sku?: string, sourceData?: object, sourceSyncedAt?: string, taxRate?: number, unit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, configuration?: object, discountPercent?: number, externalId?: string, externalRefs?: object, leadTimeDays?: number, listPrice?: number, metadata?: object, name?: string, position?: number, priceReason?: PriceReason, productId?: string, quantity?: number, quotedPrice?: number, sku?: string, sourceData?: object, sourceSyncedAt?: string, taxRate?: number, unit?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                configuration: rest[0] as object,
                discountPercent: rest[1] as number,
                externalId: rest[2] as string,
                externalRefs: rest[3] as object,
                leadTimeDays: rest[4] as number,
                listPrice: rest[5] as number,
                metadata: rest[6] as object,
                name: rest[7] as string,
                position: rest[8] as number,
                priceReason: rest[9] as PriceReason,
                productId: rest[10] as string,
                quantity: rest[11] as number,
                quotedPrice: rest[12] as number,
                sku: rest[13] as string,
                sourceData: rest[14] as object,
                sourceSyncedAt: rest[15] as string,
                taxRate: rest[16] as number,
                unit: rest[17] as string            
            };
        }
        
        const id = params.id;
        const configuration = params.configuration;
        const discountPercent = params.discountPercent;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const leadTimeDays = params.leadTimeDays;
        const listPrice = params.listPrice;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const priceReason = params.priceReason;
        const productId = params.productId;
        const quantity = params.quantity;
        const quotedPrice = params.quotedPrice;
        const sku = params.sku;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const taxRate = params.taxRate;
        const unit = params.unit;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/items'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof discountPercent !== 'undefined') {
            apiPayload['discount_percent'] = discountPercent;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof leadTimeDays !== 'undefined') {
            apiPayload['lead_time_days'] = leadTimeDays;
        }
        if (typeof listPrice !== 'undefined') {
            apiPayload['list_price'] = listPrice;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof priceReason !== 'undefined') {
            apiPayload['price_reason'] = priceReason;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof quotedPrice !== 'undefined') {
            apiPayload['quoted_price'] = quotedPrice;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
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
     * The desk calculating line by line. Sets the quantity, the negotiated price (or the discount on the list price, which moves it), its reason and the lead time of one position, re-totals the line and the quote, and tells nobody: no event, no trail entry, no status change. Allowed while the quote is `requested`, `in_review` or `quoted`; the buyer learns of it when the quote is sent through `POST /quotes/quotes/{id}/price`. A key left out keeps what it has; `null` clears it, and a position without a negotiated price counts at its list price.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.itemId - The position.
     * @param {number} params.discountPercent - The discount on the list price, in percent. Sets the negotiated price to the list price less this share; ignored when `quoted_price` is sent too. `null` clears both.
     * @param {number} params.leadTimeDays - Quoted delivery time in days.
     * @param {PriceReason} params.priceReason - Why that price.
     * @param {number} params.quantity - How many units the position is for.
     * @param {number} params.quotedPrice - The negotiated price per unit, net. `null` falls back to the list price.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteItem>}
     */
    quotesPricingItem(params: { id: string, itemId: string, discountPercent?: number, leadTimeDays?: number, priceReason?: PriceReason, quantity?: number, quotedPrice?: number }): Promise<Models.QuoteItem>;
    /**
     * The desk calculating line by line. Sets the quantity, the negotiated price (or the discount on the list price, which moves it), its reason and the lead time of one position, re-totals the line and the quote, and tells nobody: no event, no trail entry, no status change. Allowed while the quote is `requested`, `in_review` or `quoted`; the buyer learns of it when the quote is sent through `POST /quotes/quotes/{id}/price`. A key left out keeps what it has; `null` clears it, and a position without a negotiated price counts at its list price.
     *
     * @param {string} id - The quote.
     * @param {string} itemId - The position.
     * @param {number} discountPercent - The discount on the list price, in percent. Sets the negotiated price to the list price less this share; ignored when `quoted_price` is sent too. `null` clears both.
     * @param {number} leadTimeDays - Quoted delivery time in days.
     * @param {PriceReason} priceReason - Why that price.
     * @param {number} quantity - How many units the position is for.
     * @param {number} quotedPrice - The negotiated price per unit, net. `null` falls back to the list price.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingItem(id: string, itemId: string, discountPercent?: number, leadTimeDays?: number, priceReason?: PriceReason, quantity?: number, quotedPrice?: number): Promise<Models.QuoteItem>;
    quotesPricingItem(
        paramsOrFirst: { id: string, itemId: string, discountPercent?: number, leadTimeDays?: number, priceReason?: PriceReason, quantity?: number, quotedPrice?: number } | string,
        ...rest: [(string)?, (number)?, (number)?, (PriceReason)?, (number)?, (number)?]    
    ): Promise<Models.QuoteItem> {
        let params: { id: string, itemId: string, discountPercent?: number, leadTimeDays?: number, priceReason?: PriceReason, quantity?: number, quotedPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, itemId: string, discountPercent?: number, leadTimeDays?: number, priceReason?: PriceReason, quantity?: number, quotedPrice?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                itemId: rest[0] as string,
                discountPercent: rest[1] as number,
                leadTimeDays: rest[2] as number,
                priceReason: rest[3] as PriceReason,
                quantity: rest[4] as number,
                quotedPrice: rest[5] as number            
            };
        }
        
        const id = params.id;
        const itemId = params.itemId;
        const discountPercent = params.discountPercent;
        const leadTimeDays = params.leadTimeDays;
        const priceReason = params.priceReason;
        const quantity = params.quantity;
        const quotedPrice = params.quotedPrice;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof itemId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "itemId"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/items/{item_id}'.replace('{id}', id).replace('{item_id}', itemId);
        const apiPayload: Payload = {};
        if (typeof discountPercent !== 'undefined') {
            apiPayload['discount_percent'] = discountPercent;
        }
        if (typeof leadTimeDays !== 'undefined') {
            apiPayload['lead_time_days'] = leadTimeDays;
        }
        if (typeof priceReason !== 'undefined') {
            apiPayload['price_reason'] = priceReason;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof quotedPrice !== 'undefined') {
            apiPayload['quoted_price'] = quotedPrice;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
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
     * @param {string} params.senderCountry - The country the goods are sent from, ISO 3166-1 alpha-2 (DE). It decides what the address lines frozen on this send print in capitals: a destination's capitalised fields when the quote goes abroad, none at home. Omit it and the request's market counts when its code is a country's code (de, at); otherwise nothing but the country line is in capitals. Used to print, never stored. Anything that is not a country's code is a 400.
     * @param {number} params.shippingAmount - Carriage quoted alongside the goods, net. It enters `grand_total` and the first order out of the quote.
     * @param {number} params.shippingTaxRate - The rate carriage is taxed at, in percent (0–100).
     * @param {object} params.sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} params.sourceSyncedAt - When this quote was last confirmed against its source.
     * @param {string} params.validUntil - When the offer stops standing. Left out, the configured default validity is used.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesPricingPrice(params: { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, senderCountry?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string }): Promise<Models.QuoteDetail>;
    /**
     * The merchant's side of the desk, and THE designated override point of this app: a tenant whose prices come out of an ERP replaces this one capability at the gateway and keeps everything else. Sets a negotiated price per position, a validity, and the note the customer reads. Re-pricing a quote the buyer has already seen writes a new revision by default, so every round of a negotiation stays readable.
     *
     * @param {string} id - The quote.
     * @param {string} externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {Models.PriceLine[]} items - The positions to price. A position left out keeps what it has.
     * @param {string} sellerNote - What the customer reads with the quote.
     * @param {string} senderCountry - The country the goods are sent from, ISO 3166-1 alpha-2 (DE). It decides what the address lines frozen on this send print in capitals: a destination's capitalised fields when the quote goes abroad, none at home. Omit it and the request's market counts when its code is a country's code (de, at); otherwise nothing but the country line is in capitals. Used to print, never stored. Anything that is not a country's code is a 400.
     * @param {number} shippingAmount - Carriage quoted alongside the goods, net. It enters `grand_total` and the first order out of the quote.
     * @param {number} shippingTaxRate - The rate carriage is taxed at, in percent (0–100).
     * @param {object} sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} sourceSyncedAt - When this quote was last confirmed against its source.
     * @param {string} validUntil - When the offer stops standing. Left out, the configured default validity is used.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingPrice(id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, senderCountry?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string): Promise<Models.QuoteDetail>;
    quotesPricingPrice(
        paramsOrFirst: { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, senderCountry?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string } | string,
        ...rest: [(string)?, (object)?, (Models.PriceLine[])?, (string)?, (string)?, (number)?, (number)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, senderCountry?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, externalId?: string, externalRefs?: object, items?: Models.PriceLine[], sellerNote?: string, senderCountry?: string, shippingAmount?: number, shippingTaxRate?: number, sourceData?: object, sourceSyncedAt?: string, validUntil?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                externalId: rest[0] as string,
                externalRefs: rest[1] as object,
                items: rest[2] as Models.PriceLine[],
                sellerNote: rest[3] as string,
                senderCountry: rest[4] as string,
                shippingAmount: rest[5] as number,
                shippingTaxRate: rest[6] as number,
                sourceData: rest[7] as object,
                sourceSyncedAt: rest[8] as string,
                validUntil: rest[9] as string            
            };
        }
        
        const id = params.id;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const items = params.items;
        const sellerNote = params.sellerNote;
        const senderCountry = params.senderCountry;
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
        if (typeof senderCountry !== 'undefined') {
            apiPayload['sender_country'] = senderCountry;
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
     * @param {string} params.contactId - The person, as customers knows them. Null once anonymised.
     * @param {string} params.createdAt - When the row was created. Written by the database.
     * @param {string} params.expiresAt - Until when the link can be used.
     * @param {string} params.idBody - The row's own id, generated by the database. A caller never sends one.
     * @param {number} params.issuedCount - How often a link was issued for this order and contact; above 1 after an expired link was replaced.
     * @param {any} params.items - Those products as the order named them: `{ product_id, sku, name }`.
     * @param {string} params.journeyRef - The journey step that asked for the link, e.g. `journey:<id>:<step>`.
     * @param {string} params.locale - The language the review is written in, e.g. de-DE.
     * @param {string} params.market - The market code the row belongs to.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.orderId - The order, as the orders app knows it.
     * @param {string} params.orderNumber - The order number, copied for display.
     * @param {string} params.organizationId - The company of the order, as customers knows it.
     * @param {any} params.productIds - The products of the order the link asks to review.
     * @param {number} params.reviewedCount - How many of the products are reviewed.
     * @param {QuotesPricingReviewState} params.state - `issued` (open), `used` (every product reviewed) or `expired`.
     * @param {string} params.updatedAt - When the row last changed.
     * @param {string} params.usedAt - When the last product was reviewed.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     */
    quotesPricingReview(params: { id: string, contactId?: string, createdAt?: string, expiresAt?: string, idBody?: string, issuedCount?: number, items?: any, journeyRef?: string, locale?: string, market?: string, metadata?: any, orderId?: string, orderNumber?: string, organizationId?: string, productIds?: any, reviewedCount?: number, state?: QuotesPricingReviewState, updatedAt?: string, usedAt?: string }): Promise<Models.Quote>;
    /**
     * Claims a request: it moves out of the unattended queue and gets an owner, which is what a sales worklist filters by.
     *
     * @param {string} id - The quote.
     * @param {string} contactId - The person, as customers knows them. Null once anonymised.
     * @param {string} createdAt - When the row was created. Written by the database.
     * @param {string} expiresAt - Until when the link can be used.
     * @param {string} idBody - The row's own id, generated by the database. A caller never sends one.
     * @param {number} issuedCount - How often a link was issued for this order and contact; above 1 after an expired link was replaced.
     * @param {any} items - Those products as the order named them: `{ product_id, sku, name }`.
     * @param {string} journeyRef - The journey step that asked for the link, e.g. `journey:<id>:<step>`.
     * @param {string} locale - The language the review is written in, e.g. de-DE.
     * @param {string} market - The market code the row belongs to.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} orderId - The order, as the orders app knows it.
     * @param {string} orderNumber - The order number, copied for display.
     * @param {string} organizationId - The company of the order, as customers knows it.
     * @param {any} productIds - The products of the order the link asks to review.
     * @param {number} reviewedCount - How many of the products are reviewed.
     * @param {QuotesPricingReviewState} state - `issued` (open), `used` (every product reviewed) or `expired`.
     * @param {string} updatedAt - When the row last changed.
     * @param {string} usedAt - When the last product was reviewed.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingReview(id: string, contactId?: string, createdAt?: string, expiresAt?: string, idBody?: string, issuedCount?: number, items?: any, journeyRef?: string, locale?: string, market?: string, metadata?: any, orderId?: string, orderNumber?: string, organizationId?: string, productIds?: any, reviewedCount?: number, state?: QuotesPricingReviewState, updatedAt?: string, usedAt?: string): Promise<Models.Quote>;
    quotesPricingReview(
        paramsOrFirst: { id: string, contactId?: string, createdAt?: string, expiresAt?: string, idBody?: string, issuedCount?: number, items?: any, journeyRef?: string, locale?: string, market?: string, metadata?: any, orderId?: string, orderNumber?: string, organizationId?: string, productIds?: any, reviewedCount?: number, state?: QuotesPricingReviewState, updatedAt?: string, usedAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (any)?, (string)?, (string)?, (string)?, (any)?, (string)?, (string)?, (string)?, (any)?, (number)?, (QuotesPricingReviewState)?, (string)?, (string)?]    
    ): Promise<Models.Quote> {
        let params: { id: string, contactId?: string, createdAt?: string, expiresAt?: string, idBody?: string, issuedCount?: number, items?: any, journeyRef?: string, locale?: string, market?: string, metadata?: any, orderId?: string, orderNumber?: string, organizationId?: string, productIds?: any, reviewedCount?: number, state?: QuotesPricingReviewState, updatedAt?: string, usedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, createdAt?: string, expiresAt?: string, idBody?: string, issuedCount?: number, items?: any, journeyRef?: string, locale?: string, market?: string, metadata?: any, orderId?: string, orderNumber?: string, organizationId?: string, productIds?: any, reviewedCount?: number, state?: QuotesPricingReviewState, updatedAt?: string, usedAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                createdAt: rest[1] as string,
                expiresAt: rest[2] as string,
                idBody: rest[3] as string,
                issuedCount: rest[4] as number,
                items: rest[5] as any,
                journeyRef: rest[6] as string,
                locale: rest[7] as string,
                market: rest[8] as string,
                metadata: rest[9] as any,
                orderId: rest[10] as string,
                orderNumber: rest[11] as string,
                organizationId: rest[12] as string,
                productIds: rest[13] as any,
                reviewedCount: rest[14] as number,
                state: rest[15] as QuotesPricingReviewState,
                updatedAt: rest[16] as string,
                usedAt: rest[17] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const createdAt = params.createdAt;
        const expiresAt = params.expiresAt;
        const idBody = params.idBody;
        const issuedCount = params.issuedCount;
        const items = params.items;
        const journeyRef = params.journeyRef;
        const locale = params.locale;
        const market = params.market;
        const metadata = params.metadata;
        const orderId = params.orderId;
        const orderNumber = params.orderNumber;
        const organizationId = params.organizationId;
        const productIds = params.productIds;
        const reviewedCount = params.reviewedCount;
        const state = params.state;
        const updatedAt = params.updatedAt;
        const usedAt = params.usedAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/review'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof idBody !== 'undefined') {
            apiPayload['id'] = idBody;
        }
        if (typeof issuedCount !== 'undefined') {
            apiPayload['issued_count'] = issuedCount;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof journeyRef !== 'undefined') {
            apiPayload['journey_ref'] = journeyRef;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof orderNumber !== 'undefined') {
            apiPayload['order_number'] = orderNumber;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof productIds !== 'undefined') {
            apiPayload['product_ids'] = productIds;
        }
        if (typeof reviewedCount !== 'undefined') {
            apiPayload['reviewed_count'] = reviewedCount;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
        }
        if (typeof usedAt !== 'undefined') {
            apiPayload['used_at'] = usedAt;
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
     * Announces `quote.expiring` now, with `manual: true`, instead of waiting for the sweep — so whatever mails the expiry warning mails this too — and writes it to the trail the buyer reads. Only for a quote the buyer holds (`quoted`, `partially_accepted`).
     *
     * @param {string} params.id - The quote.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Reminder>}
     */
    quotesPricingRemind(params: { id: string, data: object }): Promise<Models.Reminder>;
    /**
     * Announces `quote.expiring` now, with `manual: true`, instead of waiting for the sweep — so whatever mails the expiry warning mails this too — and writes it to the trail the buyer reads. Only for a quote the buyer holds (`quoted`, `partially_accepted`).
     *
     * @param {string} id - The quote.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Reminder>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesPricingRemind(id: string, data: object): Promise<Models.Reminder>;
    quotesPricingRemind(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Reminder> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/send-reminder'.replace('{id}', id);
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
}
