import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Origin } from '../enums/origin';
import { QuotesQuotesCopyParts } from '../enums/quotes-quotes-copy-parts';
import { Audience } from '../enums/audience';
import { QuotesQuotesVocabularyName } from '../enums/quotes-quotes-vocabulary-name';

export class QuotesQuotes {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every position of an open quote that names one product, across all quotes — what `products` asks before it deletes a product for good, so a quote still being negotiated holds the delete (RAD-247). Open means requested, in review, quoted or partially accepted unless `status` says otherwise. Each row is the position with its quote's `quote_number` and `quote_status`; newest quote first, then by position. A call the gateway attributes to a buyer reads only that buyer's organisation's quotes.
     *
     * @param {string} params.productId - The catalogue product the positions name.
     * @param {string} params.status - Which quote states count as open, separated by commas. Default `requested,in_review,quoted,partially_accepted`.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OpenQuoteItemList>}
     */
    quotesQuotesOpenItems(params: { productId: string, status?: string, limit?: number, offset?: number }): Promise<Models.OpenQuoteItemList>;
    /**
     * Every position of an open quote that names one product, across all quotes — what `products` asks before it deletes a product for good, so a quote still being negotiated holds the delete (RAD-247). Open means requested, in review, quoted or partially accepted unless `status` says otherwise. Each row is the position with its quote's `quote_number` and `quote_status`; newest quote first, then by position. A call the gateway attributes to a buyer reads only that buyer's organisation's quotes.
     *
     * @param {string} productId - The catalogue product the positions name.
     * @param {string} status - Which quote states count as open, separated by commas. Default `requested,in_review,quoted,partially_accepted`.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OpenQuoteItemList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesOpenItems(productId: string, status?: string, limit?: number, offset?: number): Promise<Models.OpenQuoteItemList>;
    quotesQuotesOpenItems(
        paramsOrFirst: { productId: string, status?: string, limit?: number, offset?: number } | string,
        ...rest: [(string)?, (number)?, (number)?]    
    ): Promise<Models.OpenQuoteItemList> {
        let params: { productId: string, status?: string, limit?: number, offset?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { productId: string, status?: string, limit?: number, offset?: number };
        } else {
            params = {
                productId: paramsOrFirst as string,
                status: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number            
            };
        }
        
        const productId = params.productId;
        const status = params.status;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof productId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "productId"');
        }

        const apiPath = '/v1/quotes/open-items';
        const apiPayload: Payload = {};
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
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
     * The quote list — a merchant's work queue and a buyer's history, depending on who is asking. Filter `?status=quoted` for what is waiting on the customer, `?status=requested` for what nobody has picked up yet, and `?owner_id=` for one salesperson's desk; `status` takes several values separated by commas. A call the gateway attributes to a buyer is narrowed to that buyer's organisation whatever it asks for. Newest first unless `order` says otherwise.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.status - One status, or several separated by commas: `quoted,partially_accepted`.
     * @param {Origin} params.origin - Which door the quote came through.
     * @param {string} params.organizationId - One company's quotes — how a storefront lists a buyer's history.
     * @param {string} params.contactId - One person's quotes.
     * @param {string} params.ownerId - One salesperson's desk.
     * @param {string} params.cartId - The quote a cart became.
     * @param {string} params.number - A quote by its number.
     * @param {string} params.externalId - The quote the system that owns it knows by this key — what a mirror asks before it decides whether to create a second. The other three provenance columns carry no parameter: such a value is compared as a whole document, so a filter over part of one is refused rather than answered.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteList>}
     */
    quotesQuotesList(params?: { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string, externalId?: string }): Promise<Models.QuoteList>;
    /**
     * The quote list — a merchant's work queue and a buyer's history, depending on who is asking. Filter `?status=quoted` for what is waiting on the customer, `?status=requested` for what nobody has picked up yet, and `?owner_id=` for one salesperson's desk; `status` takes several values separated by commas. A call the gateway attributes to a buyer is narrowed to that buyer's organisation whatever it asks for. Newest first unless `order` says otherwise.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} status - One status, or several separated by commas: `quoted,partially_accepted`.
     * @param {Origin} origin - Which door the quote came through.
     * @param {string} organizationId - One company's quotes — how a storefront lists a buyer's history.
     * @param {string} contactId - One person's quotes.
     * @param {string} ownerId - One salesperson's desk.
     * @param {string} cartId - The quote a cart became.
     * @param {string} number - A quote by its number.
     * @param {string} externalId - The quote the system that owns it knows by this key — what a mirror asks before it decides whether to create a second. The other three provenance columns carry no parameter: such a value is compared as a whole document, so a filter over part of one is refused rather than answered.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesList(limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string, externalId?: string): Promise<Models.QuoteList>;
    quotesQuotesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string, externalId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (Origin)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.QuoteList> {
        let params: { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string, externalId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string, externalId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                status: rest[2] as string,
                origin: rest[3] as Origin,
                organizationId: rest[4] as string,
                contactId: rest[5] as string,
                ownerId: rest[6] as string,
                cartId: rest[7] as string,
                number: rest[8] as string,
                externalId: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const status = params.status;
        const origin = params.origin;
        const organizationId = params.organizationId;
        const contactId = params.contactId;
        const ownerId = params.ownerId;
        const cartId = params.cartId;
        const number = params.number;
        const externalId = params.externalId;


        const apiPath = '/v1/quotes/quotes';
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
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof origin !== 'undefined') {
            apiPayload['origin'] = origin;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
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
     * Sales opens a quote for a customer who never sent a cart — the normal case when a salesperson quotes over the phone. It starts on the desk rather than in the queue, because the person opening it IS the desk.
     *
     * @param {string} params.currency - ISO 4217 code every amount is read in.
     * @param {Models.QuoteLineInput[]} params.items - The positions. At least one.
     * @param {object} params.billingAddress - Where an invoice would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} params.buyer - Name and address of the customer.
     * @param {string} params.contactId - Who the quote is for.
     * @param {string} params.externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} params.externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {object} params.metadata - Free-form data carried with the quote.
     * @param {string} params.organizationId - Which company.
     * @param {string} params.ownerId - Who at the merchant owns it. Taken from the caller identity when left out.
     * @param {string} params.reason - What the quote is about.
     * @param {string} params.sellerNote - What the merchant wants the customer to read.
     * @param {object} params.shippingAddress - Where the goods would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} params.sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} params.sourceSyncedAt - When this quote was last confirmed against its source.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesQuotesCreate(params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string }): Promise<Models.QuoteDetail>;
    /**
     * Sales opens a quote for a customer who never sent a cart — the normal case when a salesperson quotes over the phone. It starts on the desk rather than in the queue, because the person opening it IS the desk.
     *
     * @param {string} currency - ISO 4217 code every amount is read in.
     * @param {Models.QuoteLineInput[]} items - The positions. At least one.
     * @param {object} billingAddress - Where an invoice would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} buyer - Name and address of the customer.
     * @param {string} contactId - Who the quote is for.
     * @param {string} externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {object} metadata - Free-form data carried with the quote.
     * @param {string} organizationId - Which company.
     * @param {string} ownerId - Who at the merchant owns it. Taken from the caller identity when left out.
     * @param {string} reason - What the quote is about.
     * @param {string} sellerNote - What the merchant wants the customer to read.
     * @param {object} shippingAddress - Where the goods would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} sourceSyncedAt - When this quote was last confirmed against its source.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesCreate(currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string): Promise<Models.QuoteDetail>;
    quotesQuotesCreate(
        paramsOrFirst: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string } | string,
        ...rest: [(Models.QuoteLineInput[])?, (object)?, (object)?, (string)?, (string)?, (object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (object)?, (object)?, (string)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string };
        } else {
            params = {
                currency: paramsOrFirst as string,
                items: rest[0] as Models.QuoteLineInput[],
                billingAddress: rest[1] as object,
                buyer: rest[2] as object,
                contactId: rest[3] as string,
                externalId: rest[4] as string,
                externalRefs: rest[5] as object,
                metadata: rest[6] as object,
                organizationId: rest[7] as string,
                ownerId: rest[8] as string,
                reason: rest[9] as string,
                sellerNote: rest[10] as string,
                shippingAddress: rest[11] as object,
                sourceData: rest[12] as object,
                sourceSyncedAt: rest[13] as string            
            };
        }
        
        const currency = params.currency;
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const contactId = params.contactId;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const ownerId = params.ownerId;
        const reason = params.reason;
        const sellerNote = params.sellerNote;
        const shippingAddress = params.shippingAddress;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof currency === 'undefined') {
            throw new RevenexxException('Missing required parameter: "currency"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/quotes/quotes';
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = buyer;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"externalId":{"wire":"external_id","children":null},"externalRefs":{"wire":"external_refs","children":null},"leadTimeDays":{"wire":"lead_time_days","children":null},"listPrice":{"wire":"list_price","children":null},"priceReason":{"wire":"price_reason","children":null},"productId":{"wire":"product_id","children":null},"quotedPrice":{"wire":"quoted_price","children":null},"sourceData":{"wire":"source_data","children":null},"sourceSyncedAt":{"wire":"source_synced_at","children":null},"taxRate":{"wire":"tax_rate","children":null}});
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof sellerNote !== 'undefined') {
            apiPayload['seller_note'] = sellerNote;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * The quote record without its positions. For everything at once — positions, trail and attachments — read the detail.
     *
     * @param {string} params.id - The quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     */
    quotesQuotesGet(params: { id: string }): Promise<Models.Quote>;
    /**
     * The quote record without its positions. For everything at once — positions, trail and attachments — read the detail.
     *
     * @param {string} id - The quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Quote>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesGet(id: string): Promise<Models.Quote>;
    quotesQuotesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Quote> {
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

        const apiPath = '/v1/quotes/quotes/{id}'.replace('{id}', id);
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
     * Opens a new quote from an existing one, as the desk's own work: it takes the next number, starts `in_review` with revision 1 and no request date, keeps the customer, the addresses, the carriage and the notes, and carries none of the original's decisions, deadline, cart or source keys. `parts: ["items"]` (the default) copies the positions with their prices and discounts, every decision open again.
     *
     * @param {string} params.id - The quote to copy.
     * @param {QuotesQuotesCopyParts[]} params.parts - What to copy along. `items` is the only part.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesQuotesCopy(params: { id: string, parts?: QuotesQuotesCopyParts[] }): Promise<Models.QuoteDetail>;
    /**
     * Opens a new quote from an existing one, as the desk's own work: it takes the next number, starts `in_review` with revision 1 and no request date, keeps the customer, the addresses, the carriage and the notes, and carries none of the original's decisions, deadline, cart or source keys. `parts: ["items"]` (the default) copies the positions with their prices and discounts, every decision open again.
     *
     * @param {string} id - The quote to copy.
     * @param {QuotesQuotesCopyParts[]} parts - What to copy along. `items` is the only part.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesCopy(id: string, parts?: QuotesQuotesCopyParts[]): Promise<Models.QuoteDetail>;
    quotesQuotesCopy(
        paramsOrFirst: { id: string, parts?: QuotesQuotesCopyParts[] } | string,
        ...rest: [(QuotesQuotesCopyParts[])?]    
    ): Promise<Models.QuoteDetail> {
        let params: { id: string, parts?: QuotesQuotesCopyParts[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, parts?: QuotesQuotesCopyParts[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                parts: rest[0] as QuotesQuotesCopyParts[]            
            };
        }
        
        const id = params.id;
        const parts = params.parts;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/copy'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * The whole quote in one call: the record, its positions in order, the trail of every move and note, and the attachments. This is what a record page and a storefront both read. A buyer — or any caller asking with `audience=customer` — reads only the entries and files meant for the customer; the merchant's internal notes stay on the merchant's side. Another organisation's quote does not exist for a buyer.
     *
     * @param {string} params.id - The quote.
     * @param {Audience} params.audience - Read the quote as its customer sees it: internal notes and files left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesQuotesDetail(params: { id: string, audience?: Audience }): Promise<Models.QuoteDetail>;
    /**
     * The whole quote in one call: the record, its positions in order, the trail of every move and note, and the attachments. This is what a record page and a storefront both read. A buyer — or any caller asking with `audience=customer` — reads only the entries and files meant for the customer; the merchant's internal notes stay on the merchant's side. Another organisation's quote does not exist for a buyer.
     *
     * @param {string} id - The quote.
     * @param {Audience} audience - Read the quote as its customer sees it: internal notes and files left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesDetail(id: string, audience?: Audience): Promise<Models.QuoteDetail>;
    quotesQuotesDetail(
        paramsOrFirst: { id: string, audience?: Audience } | string,
        ...rest: [(Audience)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { id: string, audience?: Audience };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, audience?: Audience };
        } else {
            params = {
                id: paramsOrFirst as string,
                audience: rest[0] as Audience            
            };
        }
        
        const id = params.id;
        const audience = params.audience;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/detail'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof audience !== 'undefined') {
            apiPayload['audience'] = audience;
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
     * The positions alone, in position order. Unpaged — a quote carries what it carries.
     *
     * @param {string} params.id - The quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteItemList>}
     */
    quotesQuotesItems(params: { id: string }): Promise<Models.QuoteItemList>;
    /**
     * The positions alone, in position order. Unpaged — a quote carries what it carries.
     *
     * @param {string} id - The quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteItemList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesItems(id: string): Promise<Models.QuoteItemList>;
    quotesQuotesItems(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.QuoteItemList> {
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

        const apiPath = '/v1/quotes/quotes/{id}/items'.replace('{id}', id);
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
     * A buyer sends a basket in and asks for a price. The positions are COPIED onto the quote rather than referenced, so the buyer can keep shopping and the quote does not change under the merchant's desk. Commits the buyer to nothing: the answer is a numbered request waiting for a price.
     *
     * @param {string} params.currency - ISO 4217 code every amount is read in.
     * @param {Models.QuoteLineInput[]} params.items - The positions asked about. At least one.
     * @param {object} params.billingAddress - Where an invoice would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} params.buyer - Name and address of who is asking.
     * @param {string} params.buyerNote - What the buyer wants to say about the request.
     * @param {string} params.cartId - The cart this came from, for the trail back.
     * @param {string} params.contactId - Who is asking. Taken from the caller identity when left out.
     * @param {string} params.externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} params.externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {object} params.metadata - Free-form data carried with the quote.
     * @param {string} params.organizationId - Which company they buy for.
     * @param {string} params.reason - Why a quote is being asked for — too heavy to ship, price on request, a volume the list does not cover.
     * @param {object} params.shippingAddress - Where the goods would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} params.sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} params.sourceSyncedAt - When this quote was last confirmed against its source.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesQuotesRequest(params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string }): Promise<Models.QuoteDetail>;
    /**
     * A buyer sends a basket in and asks for a price. The positions are COPIED onto the quote rather than referenced, so the buyer can keep shopping and the quote does not change under the merchant's desk. Commits the buyer to nothing: the answer is a numbered request waiting for a price.
     *
     * @param {string} currency - ISO 4217 code every amount is read in.
     * @param {Models.QuoteLineInput[]} items - The positions asked about. At least one.
     * @param {object} billingAddress - Where an invoice would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} buyer - Name and address of who is asking.
     * @param {string} buyerNote - What the buyer wants to say about the request.
     * @param {string} cartId - The cart this came from, for the trail back.
     * @param {string} contactId - Who is asking. Taken from the caller identity when left out.
     * @param {string} externalId - The key this quote has in the system that owns it. Left out on anything this shop raised itself.
     * @param {object} externalRefs - Every other system that knows this quote, keyed by system name.
     * @param {object} metadata - Free-form data carried with the quote.
     * @param {string} organizationId - Which company they buy for.
     * @param {string} reason - Why a quote is being asked for — too heavy to ship, price on request, a volume the list does not cover.
     * @param {object} shippingAddress - Where the goods would go, in the platform address type (customers app). The old flat shape (`street`, `zip`, `city`, `country`, …) is accepted and mapped first. An address read back may be sent again: the old keys beside the type are dropped. Checked against the country's rules; an invalid one answers 400 naming the field.
     * @param {object} sourceData - What the source said, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to hand back in `If-Match`.
     * @param {string} sourceSyncedAt - When this quote was last confirmed against its source.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesRequest(currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string): Promise<Models.QuoteDetail>;
    quotesQuotesRequest(
        paramsOrFirst: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string } | string,
        ...rest: [(Models.QuoteLineInput[])?, (object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (object)?, (object)?, (string)?, (string)?, (object)?, (object)?, (string)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, externalId?: string, externalRefs?: object, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string };
        } else {
            params = {
                currency: paramsOrFirst as string,
                items: rest[0] as Models.QuoteLineInput[],
                billingAddress: rest[1] as object,
                buyer: rest[2] as object,
                buyerNote: rest[3] as string,
                cartId: rest[4] as string,
                contactId: rest[5] as string,
                externalId: rest[6] as string,
                externalRefs: rest[7] as object,
                metadata: rest[8] as object,
                organizationId: rest[9] as string,
                reason: rest[10] as string,
                shippingAddress: rest[11] as object,
                sourceData: rest[12] as object,
                sourceSyncedAt: rest[13] as string            
            };
        }
        
        const currency = params.currency;
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const buyerNote = params.buyerNote;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const reason = params.reason;
        const shippingAddress = params.shippingAddress;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof currency === 'undefined') {
            throw new RevenexxException('Missing required parameter: "currency"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/quotes/request';
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = buyer;
        }
        if (typeof buyerNote !== 'undefined') {
            apiPayload['buyer_note'] = buyerNote;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"externalId":{"wire":"external_id","children":null},"externalRefs":{"wire":"external_refs","children":null},"leadTimeDays":{"wire":"lead_time_days","children":null},"listPrice":{"wire":"list_price","children":null},"priceReason":{"wire":"price_reason","children":null},"productId":{"wire":"product_id","children":null},"quotedPrice":{"wire":"quoted_price","children":null},"sourceData":{"wire":"source_data","children":null},"sourceSyncedAt":{"wire":"source_synced_at","children":null},"taxRate":{"wire":"tax_rate","children":null}});
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * The values this app accepts, so a client renders a picker instead of guessing: the statuses a quote can stand in, what a position's decision can be, and why a price is what it is.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vocabularies>}
     */
    quotesQuotesVocabularies(): Promise<Models.Vocabularies> {

        const apiPath = '/v1/quotes/vocabularies';
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
     * One list, value by value, with the title a person reads in English and German, a badge tone and whether the value ends a quote. The lists backed by a database constraint are closed and carry exactly the values the database accepts; the trail's entry kinds and actors are written only by this app and are served as known values, not as a promise that nothing else appears.
     *
     * @param {QuotesQuotesVocabularyName} params.name - Which list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vocabulary>}
     */
    quotesQuotesVocabulary(params: { name: QuotesQuotesVocabularyName }): Promise<Models.Vocabulary>;
    /**
     * One list, value by value, with the title a person reads in English and German, a badge tone and whether the value ends a quote. The lists backed by a database constraint are closed and carry exactly the values the database accepts; the trail's entry kinds and actors are written only by this app and are served as known values, not as a promise that nothing else appears.
     *
     * @param {QuotesQuotesVocabularyName} name - Which list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesVocabulary(name: QuotesQuotesVocabularyName): Promise<Models.Vocabulary>;
    quotesQuotesVocabulary(
        paramsOrFirst: { name: QuotesQuotesVocabularyName } | QuotesQuotesVocabularyName    
    ): Promise<Models.Vocabulary> {
        let params: { name: QuotesQuotesVocabularyName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: QuotesQuotesVocabularyName };
        } else {
            params = {
                name: paramsOrFirst as QuotesQuotesVocabularyName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/quotes/vocabularies/{name}'.replace('{name}', name);
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
