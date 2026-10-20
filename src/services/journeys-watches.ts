import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysWatches {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?product_id=&state=waiting`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.email - Keep only rows whose `email` equals this.
     * @param {string} params.productId - Keep only rows whose `product_id` equals this.
     * @param {string} params.sku - Keep only rows whose `sku` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.source - Keep only rows whose `source` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysWatchesList(params?: { limit?: number, offset?: number, order?: string, id?: string, contactId?: string, email?: string, productId?: string, sku?: string, market?: string, state?: string, source?: string }): Promise<{}>;
    /**
     * Filter `?product_id=&state=waiting`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} email - Keep only rows whose `email` equals this.
     * @param {string} productId - Keep only rows whose `product_id` equals this.
     * @param {string} sku - Keep only rows whose `sku` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} source - Keep only rows whose `source` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysWatchesList(limit?: number, offset?: number, order?: string, id?: string, contactId?: string, email?: string, productId?: string, sku?: string, market?: string, state?: string, source?: string): Promise<{}>;
    journeysWatchesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, contactId?: string, email?: string, productId?: string, sku?: string, market?: string, state?: string, source?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, contactId?: string, email?: string, productId?: string, sku?: string, market?: string, state?: string, source?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, contactId?: string, email?: string, productId?: string, sku?: string, market?: string, state?: string, source?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                contactId: rest[3] as string,
                email: rest[4] as string,
                productId: rest[5] as string,
                sku: rest[6] as string,
                market: rest[7] as string,
                state: rest[8] as string,
                source: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const contactId = params.contactId;
        const email = params.email;
        const productId = params.productId;
        const sku = params.sku;
        const market = params.market;
        const state = params.state;
        const source = params.source;


        const apiPath = '/v1/journeys/stock-watches';
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
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
     * What the storefront posts from a sold-out product page. A person already waiting for the product gets the existing request back.
     *
     * @param {string} params.contactId - 
     * @param {string} params.email - 
     * @param {string} params.market - 
     * @param {string} params.productId - 
     * @param {string} params.sku - 
     * @param {string} params.source - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockWatch>}
     */
    journeysWatchesCreate(params?: { contactId?: string, email?: string, market?: string, productId?: string, sku?: string, source?: string }): Promise<Models.StockWatch>;
    /**
     * What the storefront posts from a sold-out product page. A person already waiting for the product gets the existing request back.
     *
     * @param {string} contactId - 
     * @param {string} email - 
     * @param {string} market - 
     * @param {string} productId - 
     * @param {string} sku - 
     * @param {string} source - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockWatch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysWatchesCreate(contactId?: string, email?: string, market?: string, productId?: string, sku?: string, source?: string): Promise<Models.StockWatch>;
    journeysWatchesCreate(
        paramsOrFirst?: { contactId?: string, email?: string, market?: string, productId?: string, sku?: string, source?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.StockWatch> {
        let params: { contactId?: string, email?: string, market?: string, productId?: string, sku?: string, source?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId?: string, email?: string, market?: string, productId?: string, sku?: string, source?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                email: rest[0] as string,
                market: rest[1] as string,
                productId: rest[2] as string,
                sku: rest[3] as string,
                source: rest[4] as string            
            };
        }
        
        const contactId = params.contactId;
        const email = params.email;
        const market = params.market;
        const productId = params.productId;
        const sku = params.sku;
        const source = params.source;


        const apiPath = '/v1/journeys/stock-watches';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
    journeysWatchesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysWatchesDelete(id: string): Promise<{}>;
    journeysWatchesDelete(
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

        const apiPath = '/v1/journeys/stock-watches/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.StockWatch>}
     */
    journeysWatchesGet(params: { id: string }): Promise<Models.StockWatch>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockWatch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysWatchesGet(id: string): Promise<Models.StockWatch>;
    journeysWatchesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.StockWatch> {
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

        const apiPath = '/v1/journeys/stock-watches/{id}'.replace('{id}', id);
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
