import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { MarketStatus } from '../enums/market-status';

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
     * @param {string} params.code - Market code (unique per tenant).
     * @param {string} params.name - 
     * @param {string} params.currency - ISO 4217 code (default 'EUR').
     * @param {boolean} params.isDefault - 
     * @param {object} params.labels - Localized display names ({locale: label}).
     * @param {number} params.position - Sort position (default 0).
     * @param {MarketStatus} params.status - Default 'active'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsCreate(params: { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus }): Promise<Models.Market>;
    /**
     *
     * @param {string} code - Market code (unique per tenant).
     * @param {string} name - 
     * @param {string} currency - ISO 4217 code (default 'EUR').
     * @param {boolean} isDefault - 
     * @param {object} labels - Localized display names ({locale: label}).
     * @param {number} position - Sort position (default 0).
     * @param {MarketStatus} status - Default 'active'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCreate(code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus): Promise<Models.Market>;
    marketsCreate(
        paramsOrFirst: { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (number)?, (MarketStatus)?]    
    ): Promise<Models.Market> {
        let params: { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                currency: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                status: rest[5] as MarketStatus            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const currency = params.currency;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const status = params.status;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/markets';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     * @param {string} params.id - 
     * @param {string} params.code - Market code (unique per tenant).
     * @param {string} params.currency - ISO 4217 code (default 'EUR').
     * @param {boolean} params.isDefault - 
     * @param {object} params.labels - Localized display names ({locale: label}).
     * @param {string} params.name - 
     * @param {number} params.position - Sort position (default 0).
     * @param {MarketStatus} params.status - Default 'active'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsUpdate(params: { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus }): Promise<Models.Market>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - Market code (unique per tenant).
     * @param {string} currency - ISO 4217 code (default 'EUR').
     * @param {boolean} isDefault - 
     * @param {object} labels - Localized display names ({locale: label}).
     * @param {string} name - 
     * @param {number} position - Sort position (default 0).
     * @param {MarketStatus} status - Default 'active'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsUpdate(id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus): Promise<Models.Market>;
    marketsUpdate(
        paramsOrFirst: { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (string)?, (number)?, (MarketStatus)?]    
    ): Promise<Models.Market> {
        let params: { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                currency: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                status: rest[6] as MarketStatus            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const currency = params.currency;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const name = params.name;
        const position = params.position;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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

        const apiPath = '/v1/markets/{market_id}/locales'.replace('{market_id}', marketId);
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
     * @param {string} params.marketId - 
     * @param {string} params.code - Locale code, e.g. 'de-DE' (unique per market).
     * @param {string} params.country - ISO 3166-1 alpha-2 country code.
     * @param {string} params.language - ISO 639-1 language code.
     * @param {boolean} params.isDefault - 
     * @param {number} params.position - Sort position (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesCreate(params: { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number }): Promise<Models.MarketLocale>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} code - Locale code, e.g. 'de-DE' (unique per market).
     * @param {string} country - ISO 3166-1 alpha-2 country code.
     * @param {string} language - ISO 639-1 language code.
     * @param {boolean} isDefault - 
     * @param {number} position - Sort position (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesCreate(marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number): Promise<Models.MarketLocale>;
    marketsLocalesCreate(
        paramsOrFirst: { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (number)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                code: rest[0] as string,
                country: rest[1] as string,
                language: rest[2] as string,
                isDefault: rest[3] as boolean,
                position: rest[4] as number            
            };
        }
        
        const marketId = params.marketId;
        const code = params.code;
        const country = params.country;
        const language = params.language;
        const isDefault = params.isDefault;
        const position = params.position;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof country === 'undefined') {
            throw new RevenexxException('Missing required parameter: "country"');
        }
        if (typeof language === 'undefined') {
            throw new RevenexxException('Missing required parameter: "language"');
        }

        const apiPath = '/v1/markets/{market_id}/locales'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof language !== 'undefined') {
            apiPayload['language'] = language;
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

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @param {string} params.code - Locale code, e.g. 'de-DE' (unique per market).
     * @param {string} params.country - ISO 3166-1 alpha-2 country code.
     * @param {boolean} params.isDefault - 
     * @param {string} params.language - ISO 639-1 language code.
     * @param {number} params.position - Sort position (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesUpdate(params: { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number }): Promise<Models.MarketLocale>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @param {string} code - Locale code, e.g. 'de-DE' (unique per market).
     * @param {string} country - ISO 3166-1 alpha-2 country code.
     * @param {boolean} isDefault - 
     * @param {string} language - ISO 639-1 language code.
     * @param {number} position - Sort position (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesUpdate(marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number): Promise<Models.MarketLocale>;
    marketsLocalesUpdate(
        paramsOrFirst: { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (number)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                country: rest[2] as string,
                isDefault: rest[3] as boolean,
                language: rest[4] as string,
                position: rest[5] as number            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const country = params.country;
        const isDefault = params.isDefault;
        const language = params.language;
        const position = params.position;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{market_id}', marketId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof language !== 'undefined') {
            apiPayload['language'] = language;
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

        const apiPath = '/v1/markets/{market_id}/tax_classes'.replace('{market_id}', marketId);
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
     * @param {string} params.marketId - 
     * @param {string} params.code - Tax class code (unique per market).
     * @param {string} params.name - 
     * @param {boolean} params.isDefault - 
     * @param {object} params.labels - Localized display names ({locale: label}).
     * @param {number} params.position - Sort position (default 0).
     * @param {number} params.rate - Tax rate in percent, 0–100 (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesCreate(params: { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number }): Promise<Models.MarketTaxClass>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} code - Tax class code (unique per market).
     * @param {string} name - 
     * @param {boolean} isDefault - 
     * @param {object} labels - Localized display names ({locale: label}).
     * @param {number} position - Sort position (default 0).
     * @param {number} rate - Tax rate in percent, 0–100 (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesCreate(marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number): Promise<Models.MarketTaxClass>;
    marketsTaxClassesCreate(
        paramsOrFirst: { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (number)?, (number)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                rate: rest[5] as number            
            };
        }
        
        const marketId = params.marketId;
        const code = params.code;
        const name = params.name;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const rate = params.rate;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof rate !== 'undefined') {
            apiPayload['rate'] = rate;
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

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * @param {string} params.marketId - 
     * @param {string} params.id - 
     * @param {string} params.code - Tax class code (unique per market).
     * @param {boolean} params.isDefault - 
     * @param {object} params.labels - Localized display names ({locale: label}).
     * @param {string} params.name - 
     * @param {number} params.position - Sort position (default 0).
     * @param {number} params.rate - Tax rate in percent, 0–100 (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesUpdate(params: { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number }): Promise<Models.MarketTaxClass>;
    /**
     *
     * @param {string} marketId - 
     * @param {string} id - 
     * @param {string} code - Tax class code (unique per market).
     * @param {boolean} isDefault - 
     * @param {object} labels - Localized display names ({locale: label}).
     * @param {string} name - 
     * @param {number} position - Sort position (default 0).
     * @param {number} rate - Tax rate in percent, 0–100 (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesUpdate(marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number): Promise<Models.MarketTaxClass>;
    marketsTaxClassesUpdate(
        paramsOrFirst: { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                rate: rest[6] as number            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const name = params.name;
        const position = params.position;
        const rate = params.rate;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{market_id}', marketId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof rate !== 'undefined') {
            apiPayload['rate'] = rate;
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
}
