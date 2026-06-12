import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Greetings {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    greetingsDigest(): Promise<{}> {

        const apiPath = '/v1/digest';
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    greetingsList(): Promise<{}> {

        const apiPath = '/v1/greetings';
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
     * @param {string} params.name - Who to greet
     * @param {string} params.locale - BCP-47 locale
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    greetingsCreate(params: { name: string, locale?: string }): Promise<{}>;
    /**
     *
     * @param {string} name - Who to greet
     * @param {string} locale - BCP-47 locale
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    greetingsCreate(name: string, locale?: string): Promise<{}>;
    greetingsCreate(
        paramsOrFirst: { name: string, locale?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { name: string, locale?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, locale?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                locale: rest[0] as string            
            };
        }
        
        const name = params.name;
        const locale = params.locale;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/greetings';
        const apiPayload: Payload = {};
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
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
    greetingsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    greetingsDelete(id: string): Promise<{}>;
    greetingsDelete(
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

        const apiPath = '/v1/greetings/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Greeting>}
     */
    greetingsGet(params: { id: string }): Promise<Models.Greeting>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Greeting>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    greetingsGet(id: string): Promise<Models.Greeting>;
    greetingsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Greeting> {
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

        const apiPath = '/v1/greetings/{id}'.replace('{id}', id);
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
     * @param {string} params.locale - 
     * @param {string} params.message - 
     * @param {object} params.metadata - 
     * @param {string} params.name - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Greeting>}
     */
    greetingsUpdate(params: { id: string, locale?: string, message?: string, metadata?: object, name?: string }): Promise<Models.Greeting>;
    /**
     *
     * @param {string} id - 
     * @param {string} locale - 
     * @param {string} message - 
     * @param {object} metadata - 
     * @param {string} name - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Greeting>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    greetingsUpdate(id: string, locale?: string, message?: string, metadata?: object, name?: string): Promise<Models.Greeting>;
    greetingsUpdate(
        paramsOrFirst: { id: string, locale?: string, message?: string, metadata?: object, name?: string } | string,
        ...rest: [(string)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.Greeting> {
        let params: { id: string, locale?: string, message?: string, metadata?: object, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, locale?: string, message?: string, metadata?: object, name?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                locale: rest[0] as string,
                message: rest[1] as string,
                metadata: rest[2] as object,
                name: rest[3] as string            
            };
        }
        
        const id = params.id;
        const locale = params.locale;
        const message = params.message;
        const metadata = params.metadata;
        const name = params.name;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/greetings/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof message !== 'undefined') {
            apiPayload['message'] = message;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
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
