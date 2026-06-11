import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Tokens {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File unique ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceTokenList>}
     */
    tokensList(params: { bucketId: string, fileId: string, queries?: string[], total?: boolean }): Promise<Models.ResourceTokenList>;
    /**
     * List all the tokens created for a specific file or bucket. You can use the query params to filter your results.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File unique ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceTokenList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tokensList(bucketId: string, fileId: string, queries?: string[], total?: boolean): Promise<Models.ResourceTokenList>;
    tokensList(
        paramsOrFirst: { bucketId: string, fileId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string)?, (string[])?, (boolean)?]    
    ): Promise<Models.ResourceTokenList> {
        let params: { bucketId: string, fileId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                queries: rest[1] as string[],
                total: rest[2] as boolean            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const queries = params.queries;
        const total = params.total;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
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
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File unique ID.
     * @param {string} params.expire - Token expiry date
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceToken>}
     */
    tokensCreateFileToken(params: { bucketId: string, fileId: string, expire?: string }): Promise<Models.ResourceToken>;
    /**
     * Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File unique ID.
     * @param {string} expire - Token expiry date
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tokensCreateFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken>;
    tokensCreateFileToken(
        paramsOrFirst: { bucketId: string, fileId: string, expire?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.ResourceToken> {
        let params: { bucketId: string, fileId: string, expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, expire?: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                expire: rest[1] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const expire = params.expire;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
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
     * Delete a token by its unique ID.
     *
     * @param {string} params.tokenId - Token ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tokensDelete(params: { tokenId: string }): Promise<{}>;
    /**
     * Delete a token by its unique ID.
     *
     * @param {string} tokenId - Token ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tokensDelete(tokenId: string): Promise<{}>;
    tokensDelete(
        paramsOrFirst: { tokenId: string } | string    
    ): Promise<{}> {
        let params: { tokenId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { tokenId: string };
        } else {
            params = {
                tokenId: paramsOrFirst as string            
            };
        }
        
        const tokenId = params.tokenId;

        if (typeof tokenId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/v1/tokens/{tokenId}'.replace('{tokenId}', tokenId);
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
     * Get a token by its unique ID.
     *
     * @param {string} params.tokenId - Token ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceToken>}
     */
    tokensGet(params: { tokenId: string }): Promise<Models.ResourceToken>;
    /**
     * Get a token by its unique ID.
     *
     * @param {string} tokenId - Token ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tokensGet(tokenId: string): Promise<Models.ResourceToken>;
    tokensGet(
        paramsOrFirst: { tokenId: string } | string    
    ): Promise<Models.ResourceToken> {
        let params: { tokenId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { tokenId: string };
        } else {
            params = {
                tokenId: paramsOrFirst as string            
            };
        }
        
        const tokenId = params.tokenId;

        if (typeof tokenId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/v1/tokens/{tokenId}'.replace('{tokenId}', tokenId);
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
     * Update a token by its unique ID. Use this endpoint to update a token's expiry date.
     *
     * @param {string} params.tokenId - Token unique ID.
     * @param {string} params.expire - File token expiry date
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceToken>}
     */
    tokensUpdate(params: { tokenId: string, expire?: string }): Promise<Models.ResourceToken>;
    /**
     * Update a token by its unique ID. Use this endpoint to update a token's expiry date.
     *
     * @param {string} tokenId - Token unique ID.
     * @param {string} expire - File token expiry date
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResourceToken>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tokensUpdate(tokenId: string, expire?: string): Promise<Models.ResourceToken>;
    tokensUpdate(
        paramsOrFirst: { tokenId: string, expire?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ResourceToken> {
        let params: { tokenId: string, expire?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { tokenId: string, expire?: string };
        } else {
            params = {
                tokenId: paramsOrFirst as string,
                expire: rest[0] as string            
            };
        }
        
        const tokenId = params.tokenId;
        const expire = params.expire;

        if (typeof tokenId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/v1/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
}
