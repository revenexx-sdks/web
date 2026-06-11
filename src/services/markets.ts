import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Markets {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketsList(): Promise<{}> {

        const apiPath = '/v1/markets';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsCreate(): Promise<Models.Market> {

        const apiPath = '/v1/markets';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsDelete(id: string): Promise<{}>;
    marketsDelete(
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

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsGet(params: { id: string }): Promise<Models.Market>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsGet(id: string): Promise<Models.Market>;
    marketsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Market> {
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

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsUpdate(params: { id: string }): Promise<Models.Market>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsUpdate(id: string): Promise<Models.Market>;
    marketsUpdate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Market> {
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

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketContext>}
     */
    marketsContext(params: { id: string }): Promise<Models.MarketContext>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketContext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsContext(id: string): Promise<Models.MarketContext>;
    marketsContext(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MarketContext> {
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

        const apiPath = '/v1/markets/{id}/context'.replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketsLocalesList(params: { marketId: string }): Promise<{}>;
    /**
     *
     * @param {string} marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesList(marketId: string): Promise<{}>;
    marketsLocalesList(
        paramsOrFirst: { marketId: string } | string    
    ): Promise<{}> {
        let params: { marketId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string };
        } else {
            params = {
                marketId: paramsOrFirst as string            
            };
        }
        
        const marketId = params.marketId;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/locales'.replace('{marketId}', marketId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesCreate(params: { marketId: string }): Promise<Models.MarketLocale>;
    /**
     *
     * @param {string} marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesCreate(marketId: string): Promise<Models.MarketLocale>;
    marketsLocalesCreate(
        paramsOrFirst: { marketId: string } | string    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string };
        } else {
            params = {
                marketId: paramsOrFirst as string            
            };
        }
        
        const marketId = params.marketId;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/locales'.replace('{marketId}', marketId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketsLocalesDelete(params: { marketId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesDelete(marketId: string, id: string): Promise<{}>;
    marketsLocalesDelete(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{marketId}', marketId).replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesGet(params: { marketId: string, id: string }): Promise<Models.MarketLocale>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesGet(marketId: string, id: string): Promise<Models.MarketLocale>;
    marketsLocalesGet(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{marketId}', marketId).replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesUpdate(params: { marketId: string, id: string }): Promise<Models.MarketLocale>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesUpdate(marketId: string, id: string): Promise<Models.MarketLocale>;
    marketsLocalesUpdate(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{marketId}', marketId).replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketsTaxClassesList(params: { marketId: string }): Promise<{}>;
    /**
     *
     * @param {string} marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesList(marketId: string): Promise<{}>;
    marketsTaxClassesList(
        paramsOrFirst: { marketId: string } | string    
    ): Promise<{}> {
        let params: { marketId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string };
        } else {
            params = {
                marketId: paramsOrFirst as string            
            };
        }
        
        const marketId = params.marketId;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes'.replace('{marketId}', marketId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesCreate(params: { marketId: string }): Promise<Models.MarketTaxClass>;
    /**
     *
     * @param {string} marketId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesCreate(marketId: string): Promise<Models.MarketTaxClass>;
    marketsTaxClassesCreate(
        paramsOrFirst: { marketId: string } | string    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string };
        } else {
            params = {
                marketId: paramsOrFirst as string            
            };
        }
        
        const marketId = params.marketId;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes'.replace('{marketId}', marketId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketsTaxClassesDelete(params: { marketId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesDelete(marketId: string, id: string): Promise<{}>;
    marketsTaxClassesDelete(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{marketId}', marketId).replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesGet(params: { marketId: string, id: string }): Promise<Models.MarketTaxClass>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesGet(marketId: string, id: string): Promise<Models.MarketTaxClass>;
    marketsTaxClassesGet(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{marketId}', marketId).replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesUpdate(params: { marketId: string, id: string }): Promise<Models.MarketTaxClass>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesUpdate(marketId: string, id: string): Promise<Models.MarketTaxClass>;
    marketsTaxClassesUpdate(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{marketId}', marketId).replace('{id}', id);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }
}
