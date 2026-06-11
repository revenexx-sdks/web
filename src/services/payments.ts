import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Payments {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsList(): Promise<{}> {

        const apiPath = '/v1/payments';
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
     * @returns {Promise<Models.Payment>}
     */
    paymentsCreate(): Promise<Models.Payment> {

        const apiPath = '/v1/payments';
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
    paymentsMethodsList(): Promise<{}> {

        const apiPath = '/v1/payments/methods';
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
     * @returns {Promise<Models.PaymentMethod>}
     */
    paymentsMethodsCreate(): Promise<Models.PaymentMethod> {

        const apiPath = '/v1/payments/methods';
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
    paymentsMethodsDefaults(): Promise<{}> {

        const apiPath = '/v1/payments/methods/defaults';
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsEligible(): Promise<{}> {

        const apiPath = '/v1/payments/methods/eligible';
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
    paymentsMethodsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsDelete(id: string): Promise<{}>;
    paymentsMethodsDelete(
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

        const apiPath = '/v1/payments/methods/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PaymentMethod>}
     */
    paymentsMethodsGet(params: { id: string }): Promise<Models.PaymentMethod>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsGet(id: string): Promise<Models.PaymentMethod>;
    paymentsMethodsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentMethod> {
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

        const apiPath = '/v1/payments/methods/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PaymentMethod>}
     */
    paymentsMethodsUpdate(params: { id: string }): Promise<Models.PaymentMethod>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsUpdate(id: string): Promise<Models.PaymentMethod>;
    paymentsMethodsUpdate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentMethod> {
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

        const apiPath = '/v1/payments/methods/{id}'.replace('{id}', id);
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
    paymentsProvidersList(): Promise<{}> {

        const apiPath = '/v1/payments/providers';
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
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersCreate(): Promise<Models.PaymentProvider> {

        const apiPath = '/v1/payments/providers';
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
    paymentsProvidersCatalog(): Promise<{}> {

        const apiPath = '/v1/payments/providers/catalog';
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
     * @returns {Promise<{}>}
     */
    paymentsProvidersDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersDelete(id: string): Promise<{}>;
    paymentsProvidersDelete(
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

        const apiPath = '/v1/payments/providers/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersGet(params: { id: string }): Promise<Models.PaymentProvider>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersGet(id: string): Promise<Models.PaymentProvider>;
    paymentsProvidersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentProvider> {
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

        const apiPath = '/v1/payments/providers/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersUpdate(params: { id: string }): Promise<Models.PaymentProvider>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersUpdate(id: string): Promise<Models.PaymentProvider>;
    paymentsProvidersUpdate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentProvider> {
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

        const apiPath = '/v1/payments/providers/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Payment>}
     */
    paymentsGet(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsGet(id: string): Promise<Models.Payment>;
    paymentsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Payment>}
     */
    paymentsCancel(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCancel(id: string): Promise<Models.Payment>;
    paymentsCancel(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/cancel'.replace('{id}', id);
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
     * @returns {Promise<Models.Payment>}
     */
    paymentsCapture(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCapture(id: string): Promise<Models.Payment>;
    paymentsCapture(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/capture'.replace('{id}', id);
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
     * @returns {Promise<Models.Payment>}
     */
    paymentsConfirm(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsConfirm(id: string): Promise<Models.Payment>;
    paymentsConfirm(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/confirm'.replace('{id}', id);
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
     * @returns {Promise<Models.Payment>}
     */
    paymentsRefund(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsRefund(id: string): Promise<Models.Payment>;
    paymentsRefund(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/refund'.replace('{id}', id);
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
}
