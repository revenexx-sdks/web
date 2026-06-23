import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { ShippingMethodMatrixBasis } from '../enums/shipping-method-matrix-basis';
import { ShippingMethodPricingType } from '../enums/shipping-method-pricing-type';

export class Shipping {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    shippingMethodsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/shipping/methods';
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
     * @param {string} params.code - Stable method code, unique per tenant (e.g. standard, express).
     * @param {string} params.name - Display name.
     * @param {string} params.carrier - Carrier anchor for the upcoming carrier connect (dynamic rates, tracking links).
     * @param {string[]} params.countries - Allowed ISO 3166-1 alpha-2 codes; null or empty = worldwide.
     * @param {string} params.currency - ISO 4217 code (default EUR).
     * @param {string} params.description - 
     * @param {boolean} params.enabled - Only enabled methods appear in rate responses (default false).
     * @param {number} params.etaDaysMax - Delivery-time estimate for the checkout (days, upper bound).
     * @param {number} params.etaDaysMin - Delivery-time estimate for the checkout (days, lower bound).
     * @param {number} params.freeAbove - Free shipping at or above this order value — wins over every pricing model.
     * @param {object} params.labels - Localized display names keyed by locale (e.g. {de, en}).
     * @param {string} params.matrixAttribute - Attribute name for matrix_basis 'attribute'.
     * @param {ShippingMethodMatrixBasis} params.matrixBasis - The measure a matrix method prices over; 'attribute' reads matrix_attribute from the rate request.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.position - Sort order in the checkout (default 0).
     * @param {number} params.price - The fixed price (default 0) — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} params.pricingType - Pricing model (default 'fixed'): one price, no price, or tiered over a measure.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsCreate(params: { code: string, name: string, carrier?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType }): Promise<Models.ShippingMethod>;
    /**
     *
     * @param {string} code - Stable method code, unique per tenant (e.g. standard, express).
     * @param {string} name - Display name.
     * @param {string} carrier - Carrier anchor for the upcoming carrier connect (dynamic rates, tracking links).
     * @param {string[]} countries - Allowed ISO 3166-1 alpha-2 codes; null or empty = worldwide.
     * @param {string} currency - ISO 4217 code (default EUR).
     * @param {string} description - 
     * @param {boolean} enabled - Only enabled methods appear in rate responses (default false).
     * @param {number} etaDaysMax - Delivery-time estimate for the checkout (days, upper bound).
     * @param {number} etaDaysMin - Delivery-time estimate for the checkout (days, lower bound).
     * @param {number} freeAbove - Free shipping at or above this order value — wins over every pricing model.
     * @param {object} labels - Localized display names keyed by locale (e.g. {de, en}).
     * @param {string} matrixAttribute - Attribute name for matrix_basis 'attribute'.
     * @param {ShippingMethodMatrixBasis} matrixBasis - The measure a matrix method prices over; 'attribute' reads matrix_attribute from the rate request.
     * @param {object} metadata - Free-form metadata.
     * @param {number} position - Sort order in the checkout (default 0).
     * @param {number} price - The fixed price (default 0) — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} pricingType - Pricing model (default 'fixed'): one price, no price, or tiered over a measure.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsCreate(code: string, name: string, carrier?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType): Promise<Models.ShippingMethod>;
    shippingMethodsCreate(
        paramsOrFirst: { code: string, name: string, carrier?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (object)?, (string)?, (ShippingMethodMatrixBasis)?, (object)?, (number)?, (number)?, (ShippingMethodPricingType)?]    
    ): Promise<Models.ShippingMethod> {
        let params: { code: string, name: string, carrier?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, carrier?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                carrier: rest[1] as string,
                countries: rest[2] as string[],
                currency: rest[3] as string,
                description: rest[4] as string,
                enabled: rest[5] as boolean,
                etaDaysMax: rest[6] as number,
                etaDaysMin: rest[7] as number,
                freeAbove: rest[8] as number,
                labels: rest[9] as object,
                matrixAttribute: rest[10] as string,
                matrixBasis: rest[11] as ShippingMethodMatrixBasis,
                metadata: rest[12] as object,
                position: rest[13] as number,
                price: rest[14] as number,
                pricingType: rest[15] as ShippingMethodPricingType            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const carrier = params.carrier;
        const countries = params.countries;
        const currency = params.currency;
        const description = params.description;
        const enabled = params.enabled;
        const etaDaysMax = params.etaDaysMax;
        const etaDaysMin = params.etaDaysMin;
        const freeAbove = params.freeAbove;
        const labels = params.labels;
        const matrixAttribute = params.matrixAttribute;
        const matrixBasis = params.matrixBasis;
        const metadata = params.metadata;
        const position = params.position;
        const price = params.price;
        const pricingType = params.pricingType;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/shipping/methods';
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof etaDaysMax !== 'undefined') {
            apiPayload['eta_days_max'] = etaDaysMax;
        }
        if (typeof etaDaysMin !== 'undefined') {
            apiPayload['eta_days_min'] = etaDaysMin;
        }
        if (typeof freeAbove !== 'undefined') {
            apiPayload['free_above'] = freeAbove;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof matrixAttribute !== 'undefined') {
            apiPayload['matrix_attribute'] = matrixAttribute;
        }
        if (typeof matrixBasis !== 'undefined') {
            apiPayload['matrix_basis'] = matrixBasis;
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
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof pricingType !== 'undefined') {
            apiPayload['pricing_type'] = pricingType;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsDefaults(): Promise<{}> {

        const apiPath = '/v1/shipping/methods/defaults';
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsDelete(id: string): Promise<{}>;
    shippingMethodsDelete(
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

        const apiPath = '/v1/shipping/methods/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsGet(params: { id: string }): Promise<Models.ShippingMethod>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsGet(id: string): Promise<Models.ShippingMethod>;
    shippingMethodsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ShippingMethod> {
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

        const apiPath = '/v1/shipping/methods/{id}'.replace('{id}', id);
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
     * @param {string} params.carrier - Carrier anchor for the upcoming carrier connect (dynamic rates, tracking links).
     * @param {string} params.code - Stable method code, unique per tenant (e.g. standard, express).
     * @param {string[]} params.countries - Allowed ISO 3166-1 alpha-2 codes; null or empty = worldwide.
     * @param {string} params.currency - ISO 4217 code (default EUR).
     * @param {string} params.description - 
     * @param {boolean} params.enabled - Only enabled methods appear in rate responses (default false).
     * @param {number} params.etaDaysMax - Delivery-time estimate for the checkout (days, upper bound).
     * @param {number} params.etaDaysMin - Delivery-time estimate for the checkout (days, lower bound).
     * @param {number} params.freeAbove - Free shipping at or above this order value — wins over every pricing model.
     * @param {object} params.labels - Localized display names keyed by locale (e.g. {de, en}).
     * @param {string} params.matrixAttribute - Attribute name for matrix_basis 'attribute'.
     * @param {ShippingMethodMatrixBasis} params.matrixBasis - The measure a matrix method prices over; 'attribute' reads matrix_attribute from the rate request.
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - Display name.
     * @param {number} params.position - Sort order in the checkout (default 0).
     * @param {number} params.price - The fixed price (default 0) — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} params.pricingType - Pricing model (default 'fixed'): one price, no price, or tiered over a measure.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsUpdate(params: { id: string, carrier?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType }): Promise<Models.ShippingMethod>;
    /**
     *
     * @param {string} id - 
     * @param {string} carrier - Carrier anchor for the upcoming carrier connect (dynamic rates, tracking links).
     * @param {string} code - Stable method code, unique per tenant (e.g. standard, express).
     * @param {string[]} countries - Allowed ISO 3166-1 alpha-2 codes; null or empty = worldwide.
     * @param {string} currency - ISO 4217 code (default EUR).
     * @param {string} description - 
     * @param {boolean} enabled - Only enabled methods appear in rate responses (default false).
     * @param {number} etaDaysMax - Delivery-time estimate for the checkout (days, upper bound).
     * @param {number} etaDaysMin - Delivery-time estimate for the checkout (days, lower bound).
     * @param {number} freeAbove - Free shipping at or above this order value — wins over every pricing model.
     * @param {object} labels - Localized display names keyed by locale (e.g. {de, en}).
     * @param {string} matrixAttribute - Attribute name for matrix_basis 'attribute'.
     * @param {ShippingMethodMatrixBasis} matrixBasis - The measure a matrix method prices over; 'attribute' reads matrix_attribute from the rate request.
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - Display name.
     * @param {number} position - Sort order in the checkout (default 0).
     * @param {number} price - The fixed price (default 0) — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} pricingType - Pricing model (default 'fixed'): one price, no price, or tiered over a measure.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsUpdate(id: string, carrier?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType): Promise<Models.ShippingMethod>;
    shippingMethodsUpdate(
        paramsOrFirst: { id: string, carrier?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (object)?, (string)?, (ShippingMethodMatrixBasis)?, (object)?, (string)?, (number)?, (number)?, (ShippingMethodPricingType)?]    
    ): Promise<Models.ShippingMethod> {
        let params: { id: string, carrier?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, carrier?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType };
        } else {
            params = {
                id: paramsOrFirst as string,
                carrier: rest[0] as string,
                code: rest[1] as string,
                countries: rest[2] as string[],
                currency: rest[3] as string,
                description: rest[4] as string,
                enabled: rest[5] as boolean,
                etaDaysMax: rest[6] as number,
                etaDaysMin: rest[7] as number,
                freeAbove: rest[8] as number,
                labels: rest[9] as object,
                matrixAttribute: rest[10] as string,
                matrixBasis: rest[11] as ShippingMethodMatrixBasis,
                metadata: rest[12] as object,
                name: rest[13] as string,
                position: rest[14] as number,
                price: rest[15] as number,
                pricingType: rest[16] as ShippingMethodPricingType            
            };
        }
        
        const id = params.id;
        const carrier = params.carrier;
        const code = params.code;
        const countries = params.countries;
        const currency = params.currency;
        const description = params.description;
        const enabled = params.enabled;
        const etaDaysMax = params.etaDaysMax;
        const etaDaysMin = params.etaDaysMin;
        const freeAbove = params.freeAbove;
        const labels = params.labels;
        const matrixAttribute = params.matrixAttribute;
        const matrixBasis = params.matrixBasis;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const price = params.price;
        const pricingType = params.pricingType;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof etaDaysMax !== 'undefined') {
            apiPayload['eta_days_max'] = etaDaysMax;
        }
        if (typeof etaDaysMin !== 'undefined') {
            apiPayload['eta_days_min'] = etaDaysMin;
        }
        if (typeof freeAbove !== 'undefined') {
            apiPayload['free_above'] = freeAbove;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof matrixAttribute !== 'undefined') {
            apiPayload['matrix_attribute'] = matrixAttribute;
        }
        if (typeof matrixBasis !== 'undefined') {
            apiPayload['matrix_basis'] = matrixBasis;
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
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof pricingType !== 'undefined') {
            apiPayload['pricing_type'] = pricingType;
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
     * @param {string} params.methodId - 
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersList(params: { methodId: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {string} methodId - 
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersList(methodId: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    shippingTiersList(
        paramsOrFirst: { methodId: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { methodId: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                limit: rest[0] as number,
                offset: rest[1] as number,
                order: rest[2] as string            
            };
        }
        
        const methodId = params.methodId;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{method_id}', methodId);
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
     * @param {string} params.methodId - 
     * @param {number} params.fromValue - Tier threshold (default 0) — the tier with the highest from_value at or below the measured value wins.
     * @param {number} params.position - Sort order (default 0; bulk replace derives it from the array index).
     * @param {number} params.price - Price of this tier (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersCreate(params: { methodId: string, fromValue?: number, position?: number, price?: number }): Promise<Models.ShippingRateTier>;
    /**
     *
     * @param {string} methodId - 
     * @param {number} fromValue - Tier threshold (default 0) — the tier with the highest from_value at or below the measured value wins.
     * @param {number} position - Sort order (default 0; bulk replace derives it from the array index).
     * @param {number} price - Price of this tier (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersCreate(methodId: string, fromValue?: number, position?: number, price?: number): Promise<Models.ShippingRateTier>;
    shippingTiersCreate(
        paramsOrFirst: { methodId: string, fromValue?: number, position?: number, price?: number } | string,
        ...rest: [(number)?, (number)?, (number)?]    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string, fromValue?: number, position?: number, price?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, fromValue?: number, position?: number, price?: number };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                fromValue: rest[0] as number,
                position: rest[1] as number,
                price: rest[2] as number            
            };
        }
        
        const methodId = params.methodId;
        const fromValue = params.fromValue;
        const position = params.position;
        const price = params.price;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{method_id}', methodId);
        const apiPayload: Payload = {};
        if (typeof fromValue !== 'undefined') {
            apiPayload['from_value'] = fromValue;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
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
     * @param {string} params.methodId - 
     * @param {Models.ShippingRateTierReplaceItem[]} params.tiers - The complete new tier set (set semantics) — positions are derived from the array order.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersReplace(params: { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] }): Promise<{}>;
    /**
     *
     * @param {string} methodId - 
     * @param {Models.ShippingRateTierReplaceItem[]} tiers - The complete new tier set (set semantics) — positions are derived from the array order.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersReplace(methodId: string, tiers: Models.ShippingRateTierReplaceItem[]): Promise<{}>;
    shippingTiersReplace(
        paramsOrFirst: { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] } | string,
        ...rest: [(Models.ShippingRateTierReplaceItem[])?]    
    ): Promise<{}> {
        let params: { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                tiers: rest[0] as Models.ShippingRateTierReplaceItem[]            
            };
        }
        
        const methodId = params.methodId;
        const tiers = params.tiers;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof tiers === 'undefined') {
            throw new RevenexxException('Missing required parameter: "tiers"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{method_id}', methodId);
        const apiPayload: Payload = {};
        if (typeof tiers !== 'undefined') {
            apiPayload['tiers'] = Client.toWireKeys(tiers, {"fromValue":{"wire":"from_value","children":null}});
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
     * @param {string} params.methodId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersDelete(params: { methodId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} methodId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersDelete(methodId: string, id: string): Promise<{}>;
    shippingTiersDelete(
        paramsOrFirst: { methodId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { methodId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, id: string };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const methodId = params.methodId;
        const id = params.id;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{method_id}', methodId).replace('{id}', id);
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
     * @param {string} params.methodId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersGet(params: { methodId: string, id: string }): Promise<Models.ShippingRateTier>;
    /**
     *
     * @param {string} methodId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersGet(methodId: string, id: string): Promise<Models.ShippingRateTier>;
    shippingTiersGet(
        paramsOrFirst: { methodId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, id: string };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const methodId = params.methodId;
        const id = params.id;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{method_id}', methodId).replace('{id}', id);
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
     * @param {string} params.methodId - 
     * @param {string} params.id - 
     * @param {number} params.fromValue - Tier threshold (default 0) — the tier with the highest from_value at or below the measured value wins.
     * @param {number} params.position - Sort order (default 0; bulk replace derives it from the array index).
     * @param {number} params.price - Price of this tier (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersUpdate(params: { methodId: string, id: string, fromValue?: number, position?: number, price?: number }): Promise<Models.ShippingRateTier>;
    /**
     *
     * @param {string} methodId - 
     * @param {string} id - 
     * @param {number} fromValue - Tier threshold (default 0) — the tier with the highest from_value at or below the measured value wins.
     * @param {number} position - Sort order (default 0; bulk replace derives it from the array index).
     * @param {number} price - Price of this tier (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersUpdate(methodId: string, id: string, fromValue?: number, position?: number, price?: number): Promise<Models.ShippingRateTier>;
    shippingTiersUpdate(
        paramsOrFirst: { methodId: string, id: string, fromValue?: number, position?: number, price?: number } | string,
        ...rest: [(string)?, (number)?, (number)?, (number)?]    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string, id: string, fromValue?: number, position?: number, price?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, id: string, fromValue?: number, position?: number, price?: number };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                id: rest[0] as string,
                fromValue: rest[1] as number,
                position: rest[2] as number,
                price: rest[3] as number            
            };
        }
        
        const methodId = params.methodId;
        const id = params.id;
        const fromValue = params.fromValue;
        const position = params.position;
        const price = params.price;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{method_id}', methodId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof fromValue !== 'undefined') {
            apiPayload['from_value'] = fromValue;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
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
     * @param {object} params.attributes - Measure values for attribute matrices, keyed by attribute name.
     * @param {string} params.country - Destination ISO 3166-1 alpha-2 code — checked against method country restrictions.
     * @param {string} params.currency - Echoed into the rates (default 'EUR').
     * @param {string} params.marketId - Buyer market for tax resolution (else inferred from country, else first market).
     * @param {number} params.orderValue - Order value (default 0) — drives free-above thresholds and order_value matrices.
     * @param {number} params.quantity - Total quantity — measure for quantity matrices.
     * @param {number} params.weight - Total weight — measure for weight matrices.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingRates(params?: { attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, quantity?: number, weight?: number }): Promise<{}>;
    /**
     *
     * @param {object} attributes - Measure values for attribute matrices, keyed by attribute name.
     * @param {string} country - Destination ISO 3166-1 alpha-2 code — checked against method country restrictions.
     * @param {string} currency - Echoed into the rates (default 'EUR').
     * @param {string} marketId - Buyer market for tax resolution (else inferred from country, else first market).
     * @param {number} orderValue - Order value (default 0) — drives free-above thresholds and order_value matrices.
     * @param {number} quantity - Total quantity — measure for quantity matrices.
     * @param {number} weight - Total weight — measure for weight matrices.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingRates(attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, quantity?: number, weight?: number): Promise<{}>;
    shippingRates(
        paramsOrFirst?: { attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, quantity?: number, weight?: number } | object,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (number)?]    
    ): Promise<{}> {
        let params: { attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, quantity?: number, weight?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('attributes' in paramsOrFirst || 'country' in paramsOrFirst || 'currency' in paramsOrFirst || 'marketId' in paramsOrFirst || 'orderValue' in paramsOrFirst || 'quantity' in paramsOrFirst || 'weight' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, quantity?: number, weight?: number };
        } else {
            params = {
                attributes: paramsOrFirst as object,
                country: rest[0] as string,
                currency: rest[1] as string,
                marketId: rest[2] as string,
                orderValue: rest[3] as number,
                quantity: rest[4] as number,
                weight: rest[5] as number            
            };
        }
        
        const attributes = params.attributes;
        const country = params.country;
        const currency = params.currency;
        const marketId = params.marketId;
        const orderValue = params.orderValue;
        const quantity = params.quantity;
        const weight = params.weight;


        const apiPath = '/v1/shipping/rates';
        const apiPayload: Payload = {};
        if (typeof attributes !== 'undefined') {
            apiPayload['attributes'] = attributes;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof orderValue !== 'undefined') {
            apiPayload['order_value'] = orderValue;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof weight !== 'undefined') {
            apiPayload['weight'] = weight;
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
