import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Origin } from '../enums/origin';
import { Audience } from '../enums/audience';

export class QuotesQuotes {
    client: Client;

    constructor(client: Client) {
        this.client = client;
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
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteList>}
     */
    quotesQuotesList(params?: { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string }): Promise<Models.QuoteList>;
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
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesList(limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string): Promise<Models.QuoteList>;
    quotesQuotesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (Origin)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.QuoteList> {
        let params: { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, status?: string, origin?: Origin, organizationId?: string, contactId?: string, ownerId?: string, cartId?: string, number?: string };
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
                number: rest[8] as string            
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
     * @param {object} params.billingAddress - Where an invoice would go.
     * @param {object} params.buyer - Name and address of the customer.
     * @param {string} params.contactId - Who the quote is for.
     * @param {object} params.metadata - Free-form data carried with the quote.
     * @param {string} params.organizationId - Which company.
     * @param {string} params.ownerId - Who at the merchant owns it. Taken from the caller identity when left out.
     * @param {string} params.reason - What the quote is about.
     * @param {string} params.sellerNote - What the merchant wants the customer to read.
     * @param {object} params.shippingAddress - Where the goods would go.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesQuotesCreate(params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object }): Promise<Models.QuoteDetail>;
    /**
     * Sales opens a quote for a customer who never sent a cart — the normal case when a salesperson quotes over the phone. It starts on the desk rather than in the queue, because the person opening it IS the desk.
     *
     * @param {string} currency - ISO 4217 code every amount is read in.
     * @param {Models.QuoteLineInput[]} items - The positions. At least one.
     * @param {object} billingAddress - Where an invoice would go.
     * @param {object} buyer - Name and address of the customer.
     * @param {string} contactId - Who the quote is for.
     * @param {object} metadata - Free-form data carried with the quote.
     * @param {string} organizationId - Which company.
     * @param {string} ownerId - Who at the merchant owns it. Taken from the caller identity when left out.
     * @param {string} reason - What the quote is about.
     * @param {string} sellerNote - What the merchant wants the customer to read.
     * @param {object} shippingAddress - Where the goods would go.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesCreate(currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object): Promise<Models.QuoteDetail>;
    quotesQuotesCreate(
        paramsOrFirst: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object } | string,
        ...rest: [(Models.QuoteLineInput[])?, (object)?, (object)?, (string)?, (object)?, (string)?, (string)?, (string)?, (string)?, (object)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, contactId?: string, metadata?: object, organizationId?: string, ownerId?: string, reason?: string, sellerNote?: string, shippingAddress?: object };
        } else {
            params = {
                currency: paramsOrFirst as string,
                items: rest[0] as Models.QuoteLineInput[],
                billingAddress: rest[1] as object,
                buyer: rest[2] as object,
                contactId: rest[3] as string,
                metadata: rest[4] as object,
                organizationId: rest[5] as string,
                ownerId: rest[6] as string,
                reason: rest[7] as string,
                sellerNote: rest[8] as string,
                shippingAddress: rest[9] as object            
            };
        }
        
        const currency = params.currency;
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const contactId = params.contactId;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const ownerId = params.ownerId;
        const reason = params.reason;
        const sellerNote = params.sellerNote;
        const shippingAddress = params.shippingAddress;

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
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"leadTimeDays":{"wire":"lead_time_days","children":null},"listPrice":{"wire":"list_price","children":null},"priceReason":{"wire":"price_reason","children":null},"productId":{"wire":"product_id","children":null},"quotedPrice":{"wire":"quoted_price","children":null},"taxRate":{"wire":"tax_rate","children":null}});
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
     * @param {object} params.billingAddress - Where an invoice would go.
     * @param {object} params.buyer - Name and address of who is asking.
     * @param {string} params.buyerNote - What the buyer wants to say about the request.
     * @param {string} params.cartId - The cart this came from, for the trail back.
     * @param {string} params.contactId - Who is asking. Taken from the caller identity when left out.
     * @param {object} params.metadata - Free-form data carried with the quote.
     * @param {string} params.organizationId - Which company they buy for.
     * @param {string} params.reason - Why a quote is being asked for — too heavy to ship, price on request, a volume the list does not cover.
     * @param {object} params.shippingAddress - Where the goods would go.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     */
    quotesQuotesRequest(params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object }): Promise<Models.QuoteDetail>;
    /**
     * A buyer sends a basket in and asks for a price. The positions are COPIED onto the quote rather than referenced, so the buyer can keep shopping and the quote does not change under the merchant's desk. Commits the buyer to nothing: the answer is a numbered request waiting for a price.
     *
     * @param {string} currency - ISO 4217 code every amount is read in.
     * @param {Models.QuoteLineInput[]} items - The positions asked about. At least one.
     * @param {object} billingAddress - Where an invoice would go.
     * @param {object} buyer - Name and address of who is asking.
     * @param {string} buyerNote - What the buyer wants to say about the request.
     * @param {string} cartId - The cart this came from, for the trail back.
     * @param {string} contactId - Who is asking. Taken from the caller identity when left out.
     * @param {object} metadata - Free-form data carried with the quote.
     * @param {string} organizationId - Which company they buy for.
     * @param {string} reason - Why a quote is being asked for — too heavy to ship, price on request, a volume the list does not cover.
     * @param {object} shippingAddress - Where the goods would go.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesQuotesRequest(currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object): Promise<Models.QuoteDetail>;
    quotesQuotesRequest(
        paramsOrFirst: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object } | string,
        ...rest: [(Models.QuoteLineInput[])?, (object)?, (object)?, (string)?, (string)?, (string)?, (object)?, (string)?, (string)?, (object)?]    
    ): Promise<Models.QuoteDetail> {
        let params: { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { currency: string, items: Models.QuoteLineInput[], billingAddress?: object, buyer?: object, buyerNote?: string, cartId?: string, contactId?: string, metadata?: object, organizationId?: string, reason?: string, shippingAddress?: object };
        } else {
            params = {
                currency: paramsOrFirst as string,
                items: rest[0] as Models.QuoteLineInput[],
                billingAddress: rest[1] as object,
                buyer: rest[2] as object,
                buyerNote: rest[3] as string,
                cartId: rest[4] as string,
                contactId: rest[5] as string,
                metadata: rest[6] as object,
                organizationId: rest[7] as string,
                reason: rest[8] as string,
                shippingAddress: rest[9] as object            
            };
        }
        
        const currency = params.currency;
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const buyerNote = params.buyerNote;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const reason = params.reason;
        const shippingAddress = params.shippingAddress;

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
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"leadTimeDays":{"wire":"lead_time_days","children":null},"listPrice":{"wire":"list_price","children":null},"priceReason":{"wire":"price_reason","children":null},"productId":{"wire":"product_id","children":null},"quotedPrice":{"wire":"quoted_price","children":null},"taxRate":{"wire":"tax_rate","children":null}});
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
}
