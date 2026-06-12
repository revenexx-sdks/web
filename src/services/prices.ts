import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Prices {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesListsList(): Promise<{}> {

        const apiPath = '/v1/prices/lists';
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
     * @returns {Promise<Models.PriceList>}
     */
    pricesListsCreate(): Promise<Models.PriceList> {

        const apiPath = '/v1/prices/lists';
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
    pricesListsDefaults(): Promise<{}> {

        const apiPath = '/v1/prices/lists/defaults';
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
    pricesListsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsDelete(id: string): Promise<{}>;
    pricesListsDelete(
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PriceList>}
     */
    pricesListsGet(params: { id: string }): Promise<Models.PriceList>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsGet(id: string): Promise<Models.PriceList>;
    pricesListsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PriceList> {
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PriceList>}
     */
    pricesListsUpdate(params: { id: string }): Promise<Models.PriceList>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsUpdate(id: string): Promise<Models.PriceList>;
    pricesListsUpdate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PriceList> {
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * @param {string} params.listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesList(params: { listId: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesList(listId: string): Promise<{}>;
    pricesEntriesList(
        paramsOrFirst: { listId: string } | string    
    ): Promise<{}> {
        let params: { listId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string };
        } else {
            params = {
                listId: paramsOrFirst as string            
            };
        }
        
        const listId = params.listId;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{listId}', listId);
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
     * @param {string} params.listId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     */
    pricesEntriesCreate(params: { listId: string }): Promise<Models.PriceEntry>;
    /**
     *
     * @param {string} listId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesCreate(listId: string): Promise<Models.PriceEntry>;
    pricesEntriesCreate(
        paramsOrFirst: { listId: string } | string    
    ): Promise<Models.PriceEntry> {
        let params: { listId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string };
        } else {
            params = {
                listId: paramsOrFirst as string            
            };
        }
        
        const listId = params.listId;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{listId}', listId);
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
     * @param {string} params.listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesReplace(params: { listId: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesReplace(listId: string): Promise<{}>;
    pricesEntriesReplace(
        paramsOrFirst: { listId: string } | string    
    ): Promise<{}> {
        let params: { listId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string };
        } else {
            params = {
                listId: paramsOrFirst as string            
            };
        }
        
        const listId = params.listId;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{listId}', listId);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesDelete(params: { listId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesDelete(listId: string, id: string): Promise<{}>;
    pricesEntriesDelete(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{listId}', listId).replace('{id}', id);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     */
    pricesEntriesGet(params: { listId: string, id: string }): Promise<Models.PriceEntry>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesGet(listId: string, id: string): Promise<Models.PriceEntry>;
    pricesEntriesGet(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PriceEntry> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{listId}', listId).replace('{id}', id);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     */
    pricesEntriesUpdate(params: { listId: string, id: string }): Promise<Models.PriceEntry>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesUpdate(listId: string, id: string): Promise<Models.PriceEntry>;
    pricesEntriesUpdate(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PriceEntry> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{listId}', listId).replace('{id}', id);
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
    pricesResolve(): Promise<{}> {

        const apiPath = '/v1/prices/resolve';
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
