import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Shipping {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsList(): Promise<{}> {

        const apiPath = '/v1/shipping/methods';
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
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsCreate(): Promise<Models.ShippingMethod> {

        const apiPath = '/v1/shipping/methods';
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsDefaults(): Promise<{}> {

        const apiPath = '/v1/shipping/methods/defaults';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsUpdate(params: { id: string }): Promise<Models.ShippingMethod>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsUpdate(id: string): Promise<Models.ShippingMethod>;
    shippingMethodsUpdate(
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
     * @param {string} params.methodId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersList(params: { methodId: string }): Promise<{}>;
    /**
     *
     * @param {string} methodId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersList(methodId: string): Promise<{}>;
    shippingTiersList(
        paramsOrFirst: { methodId: string } | string    
    ): Promise<{}> {
        let params: { methodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string };
        } else {
            params = {
                methodId: paramsOrFirst as string            
            };
        }
        
        const methodId = params.methodId;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{methodId}', methodId);
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
     * @param {string} params.methodId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersCreate(params: { methodId: string }): Promise<Models.ShippingRateTier>;
    /**
     *
     * @param {string} methodId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersCreate(methodId: string): Promise<Models.ShippingRateTier>;
    shippingTiersCreate(
        paramsOrFirst: { methodId: string } | string    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string };
        } else {
            params = {
                methodId: paramsOrFirst as string            
            };
        }
        
        const methodId = params.methodId;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{methodId}', methodId);
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
     * @param {string} params.methodId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersReplace(params: { methodId: string }): Promise<{}>;
    /**
     *
     * @param {string} methodId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersReplace(methodId: string): Promise<{}>;
    shippingTiersReplace(
        paramsOrFirst: { methodId: string } | string    
    ): Promise<{}> {
        let params: { methodId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string };
        } else {
            params = {
                methodId: paramsOrFirst as string            
            };
        }
        
        const methodId = params.methodId;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{methodId}', methodId);
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

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{methodId}', methodId).replace('{id}', id);
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

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{methodId}', methodId).replace('{id}', id);
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
     * @param {string} params.methodId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersUpdate(params: { methodId: string, id: string }): Promise<Models.ShippingRateTier>;
    /**
     *
     * @param {string} methodId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersUpdate(methodId: string, id: string): Promise<Models.ShippingRateTier>;
    shippingTiersUpdate(
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

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{methodId}', methodId).replace('{id}', id);
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingRates(): Promise<{}> {

        const apiPath = '/v1/shipping/rates';
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
}
