import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Carts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsList(): Promise<{}> {

        const apiPath = '/v1/carts';
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
     * @returns {Promise<Models.Cart>}
     */
    cartsCreate(): Promise<Models.Cart> {

        const apiPath = '/v1/carts';
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
    cartsClaim(): Promise<{}> {

        const apiPath = '/v1/carts/claim';
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
    cartsImport(): Promise<{}> {

        const apiPath = '/v1/carts/import';
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
    cartsIoProfilesList(): Promise<{}> {

        const apiPath = '/v1/carts/io/profiles';
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
     * @returns {Promise<Models.IoProfile>}
     */
    cartsIoProfilesCreate(): Promise<Models.IoProfile> {

        const apiPath = '/v1/carts/io/profiles';
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
    cartsIoProfilesDefaults(): Promise<{}> {

        const apiPath = '/v1/carts/io/profiles/defaults';
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
    cartsIoProfilesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesDelete(id: string): Promise<{}>;
    cartsIoProfilesDelete(
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

        const apiPath = '/v1/carts/io/profiles/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.IoProfile>}
     */
    cartsIoProfilesGet(params: { id: string }): Promise<Models.IoProfile>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesGet(id: string): Promise<Models.IoProfile>;
    cartsIoProfilesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.IoProfile> {
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

        const apiPath = '/v1/carts/io/profiles/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.IoProfile>}
     */
    cartsIoProfilesUpdate(params: { id: string }): Promise<Models.IoProfile>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesUpdate(id: string): Promise<Models.IoProfile>;
    cartsIoProfilesUpdate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.IoProfile> {
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

        const apiPath = '/v1/carts/io/profiles/{id}'.replace('{id}', id);
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
    cartsMerge(): Promise<{}> {

        const apiPath = '/v1/carts/merge';
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
     * @param {string} params.cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsItemsList(params: { cartId: string }): Promise<{}>;
    /**
     *
     * @param {string} cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsList(cartId: string): Promise<{}>;
    cartsItemsList(
        paramsOrFirst: { cartId: string } | string    
    ): Promise<{}> {
        let params: { cartId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string };
        } else {
            params = {
                cartId: paramsOrFirst as string            
            };
        }
        
        const cartId = params.cartId;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cartId}', cartId);
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
     * @param {string} params.cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     */
    cartsItemsCreate(params: { cartId: string }): Promise<Models.CartItem>;
    /**
     *
     * @param {string} cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsCreate(cartId: string): Promise<Models.CartItem>;
    cartsItemsCreate(
        paramsOrFirst: { cartId: string } | string    
    ): Promise<Models.CartItem> {
        let params: { cartId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string };
        } else {
            params = {
                cartId: paramsOrFirst as string            
            };
        }
        
        const cartId = params.cartId;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cartId}', cartId);
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
     * @param {string} params.cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsItemsReplace(params: { cartId: string }): Promise<{}>;
    /**
     *
     * @param {string} cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsReplace(cartId: string): Promise<{}>;
    cartsItemsReplace(
        paramsOrFirst: { cartId: string } | string    
    ): Promise<{}> {
        let params: { cartId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string };
        } else {
            params = {
                cartId: paramsOrFirst as string            
            };
        }
        
        const cartId = params.cartId;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cartId}', cartId);
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
     * @param {string} params.cartId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsItemsDelete(params: { cartId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} cartId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsDelete(cartId: string, id: string): Promise<{}>;
    cartsItemsDelete(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cartId}', cartId).replace('{id}', id);
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
     * @param {string} params.cartId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     */
    cartsItemsGet(params: { cartId: string, id: string }): Promise<Models.CartItem>;
    /**
     *
     * @param {string} cartId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsGet(cartId: string, id: string): Promise<Models.CartItem>;
    cartsItemsGet(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.CartItem> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cartId}', cartId).replace('{id}', id);
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
     * @param {string} params.cartId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     */
    cartsItemsUpdate(params: { cartId: string, id: string }): Promise<Models.CartItem>;
    /**
     *
     * @param {string} cartId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsUpdate(cartId: string, id: string): Promise<Models.CartItem>;
    cartsItemsUpdate(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.CartItem> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cartId}', cartId).replace('{id}', id);
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
     * @returns {Promise<{}>}
     */
    cartsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsDelete(id: string): Promise<{}>;
    cartsDelete(
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

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Cart>}
     */
    cartsGet(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsGet(id: string): Promise<Models.Cart>;
    cartsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Cart>}
     */
    cartsUpdate(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsUpdate(id: string): Promise<Models.Cart>;
    cartsUpdate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Cart>}
     */
    cartsAbandon(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsAbandon(id: string): Promise<Models.Cart>;
    cartsAbandon(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/abandon'.replace('{id}', id);
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
     * @returns {Promise<Models.Cart>}
     */
    cartsActivate(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsActivate(id: string): Promise<Models.Cart>;
    cartsActivate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/activate'.replace('{id}', id);
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
    cartsExport(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsExport(id: string): Promise<{}>;
    cartsExport(
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

        const apiPath = '/v1/carts/{id}/export'.replace('{id}', id);
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
     * @returns {Promise<Models.Cart>}
     */
    cartsOrder(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsOrder(id: string): Promise<Models.Cart>;
    cartsOrder(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/order'.replace('{id}', id);
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
     * @returns {Promise<Models.Cart>}
     */
    cartsReopen(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsReopen(id: string): Promise<Models.Cart>;
    cartsReopen(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/reopen'.replace('{id}', id);
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
