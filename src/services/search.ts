import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Collection } from '../enums/collection';

export class Search {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The collections the tenant's installed apps have provisioned.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchListCollections(): Promise<{}> {

        const apiPath = '/v1/search/collections';
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
     * Full-text search within one collection using Typesense query parameters as the query string.
     *
     * @param {Collection} params.collection - Collection key (one the tenant has installed).
     * @param {string} params.q - Query text. Use `*` to match all.
     * @param {string} params.queryBy - Comma-separated fields to search.
     * @param {string} params.filterBy - Filter expression.
     * @param {string} params.sortBy - Sort expression.
     * @param {number} params.page - 1-based page.
     * @param {number} params.perPage - Hits per page (max 250).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchSearchDocumentsGet(params: { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, page?: number, perPage?: number }): Promise<{}>;
    /**
     * Full-text search within one collection using Typesense query parameters as the query string.
     *
     * @param {Collection} collection - Collection key (one the tenant has installed).
     * @param {string} q - Query text. Use `*` to match all.
     * @param {string} queryBy - Comma-separated fields to search.
     * @param {string} filterBy - Filter expression.
     * @param {string} sortBy - Sort expression.
     * @param {number} page - 1-based page.
     * @param {number} perPage - Hits per page (max 250).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchSearchDocumentsGet(collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, page?: number, perPage?: number): Promise<{}>;
    searchSearchDocumentsGet(
        paramsOrFirst: { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, page?: number, perPage?: number } | Collection,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<{}> {
        let params: { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, page?: number, perPage?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('collection' in paramsOrFirst || 'q' in paramsOrFirst || 'queryBy' in paramsOrFirst || 'filterBy' in paramsOrFirst || 'sortBy' in paramsOrFirst || 'page' in paramsOrFirst || 'perPage' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, page?: number, perPage?: number };
        } else {
            params = {
                collection: paramsOrFirst as Collection,
                q: rest[0] as string,
                queryBy: rest[1] as string,
                filterBy: rest[2] as string,
                sortBy: rest[3] as string,
                page: rest[4] as number,
                perPage: rest[5] as number            
            };
        }
        
        const collection = params.collection;
        const q = params.q;
        const queryBy = params.queryBy;
        const filterBy = params.filterBy;
        const sortBy = params.sortBy;
        const page = params.page;
        const perPage = params.perPage;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }

        const apiPath = '/v1/search/collections/{collection}/documents/search'.replace('{collection}', collection);
        const apiPayload: Payload = {};
        if (typeof q !== 'undefined') {
            apiPayload['q'] = q;
        }
        if (typeof queryBy !== 'undefined') {
            apiPayload['query_by'] = queryBy;
        }
        if (typeof filterBy !== 'undefined') {
            apiPayload['filter_by'] = filterBy;
        }
        if (typeof sortBy !== 'undefined') {
            apiPayload['sort_by'] = sortBy;
        }
        if (typeof page !== 'undefined') {
            apiPayload['page'] = page;
        }
        if (typeof perPage !== 'undefined') {
            apiPayload['per_page'] = perPage;
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
     * Full-text search within one collection. The body holds Typesense search parameters.
     *
     * @param {Collection} params.collection - Collection key (one the tenant has installed).
     * @param {string} params.facetBy - Comma-separated fields to facet on.
     * @param {string} params.filterBy - Filter expression, e.g. `in_stock:=true`.
     * @param {number} params.page - 
     * @param {number} params.perPage - 
     * @param {string} params.q - Query text. Use `*` to match all.
     * @param {string} params.queryBy - Comma-separated fields to search.
     * @param {string} params.sortBy - Sort expression, e.g. `price:desc`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchSearchDocuments(params: { collection: Collection, facetBy?: string, filterBy?: string, page?: number, perPage?: number, q?: string, queryBy?: string, sortBy?: string }): Promise<{}>;
    /**
     * Full-text search within one collection. The body holds Typesense search parameters.
     *
     * @param {Collection} collection - Collection key (one the tenant has installed).
     * @param {string} facetBy - Comma-separated fields to facet on.
     * @param {string} filterBy - Filter expression, e.g. `in_stock:=true`.
     * @param {number} page - 
     * @param {number} perPage - 
     * @param {string} q - Query text. Use `*` to match all.
     * @param {string} queryBy - Comma-separated fields to search.
     * @param {string} sortBy - Sort expression, e.g. `price:desc`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchSearchDocuments(collection: Collection, facetBy?: string, filterBy?: string, page?: number, perPage?: number, q?: string, queryBy?: string, sortBy?: string): Promise<{}>;
    searchSearchDocuments(
        paramsOrFirst: { collection: Collection, facetBy?: string, filterBy?: string, page?: number, perPage?: number, q?: string, queryBy?: string, sortBy?: string } | Collection,
        ...rest: [(string)?, (string)?, (number)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { collection: Collection, facetBy?: string, filterBy?: string, page?: number, perPage?: number, q?: string, queryBy?: string, sortBy?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('collection' in paramsOrFirst || 'facetBy' in paramsOrFirst || 'filterBy' in paramsOrFirst || 'page' in paramsOrFirst || 'perPage' in paramsOrFirst || 'q' in paramsOrFirst || 'queryBy' in paramsOrFirst || 'sortBy' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: Collection, facetBy?: string, filterBy?: string, page?: number, perPage?: number, q?: string, queryBy?: string, sortBy?: string };
        } else {
            params = {
                collection: paramsOrFirst as Collection,
                facetBy: rest[0] as string,
                filterBy: rest[1] as string,
                page: rest[2] as number,
                perPage: rest[3] as number,
                q: rest[4] as string,
                queryBy: rest[5] as string,
                sortBy: rest[6] as string            
            };
        }
        
        const collection = params.collection;
        const facetBy = params.facetBy;
        const filterBy = params.filterBy;
        const page = params.page;
        const perPage = params.perPage;
        const q = params.q;
        const queryBy = params.queryBy;
        const sortBy = params.sortBy;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }

        const apiPath = '/v1/search/collections/{collection}/documents/search'.replace('{collection}', collection);
        const apiPayload: Payload = {};
        if (typeof facetBy !== 'undefined') {
            apiPayload['facet_by'] = facetBy;
        }
        if (typeof filterBy !== 'undefined') {
            apiPayload['filter_by'] = filterBy;
        }
        if (typeof page !== 'undefined') {
            apiPayload['page'] = page;
        }
        if (typeof perPage !== 'undefined') {
            apiPayload['per_page'] = perPage;
        }
        if (typeof q !== 'undefined') {
            apiPayload['q'] = q;
        }
        if (typeof queryBy !== 'undefined') {
            apiPayload['query_by'] = queryBy;
        }
        if (typeof sortBy !== 'undefined') {
            apiPayload['sort_by'] = sortBy;
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
     * Fetch a single document by id from a collection the tenant has installed.
     *
     * @param {Collection} params.collection - Collection key (one the tenant has installed).
     * @param {string} params.documentId - Document id within the collection.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchGetDocument(params: { collection: Collection, documentId: string }): Promise<{}>;
    /**
     * Fetch a single document by id from a collection the tenant has installed.
     *
     * @param {Collection} collection - Collection key (one the tenant has installed).
     * @param {string} documentId - Document id within the collection.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchGetDocument(collection: Collection, documentId: string): Promise<{}>;
    searchGetDocument(
        paramsOrFirst: { collection: Collection, documentId: string } | Collection,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { collection: Collection, documentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('collection' in paramsOrFirst || 'documentId' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: Collection, documentId: string };
        } else {
            params = {
                collection: paramsOrFirst as Collection,
                documentId: rest[0] as string            
            };
        }
        
        const collection = params.collection;
        const documentId = params.documentId;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }
        if (typeof documentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "documentId"');
        }

        const apiPath = '/v1/search/collections/{collection}/documents/{documentId}'.replace('{collection}', collection).replace('{documentId}', documentId);
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
     * Run several searches in one request (the InstantSearch adapter uses this). Each entry names its collection.
     *
     * @param {object[]} params.searches - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchMultiSearch(params: { searches: object[] }): Promise<{}>;
    /**
     * Run several searches in one request (the InstantSearch adapter uses this). Each entry names its collection.
     *
     * @param {object[]} searches - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchMultiSearch(searches: object[]): Promise<{}>;
    searchMultiSearch(
        paramsOrFirst: { searches: object[] } | object[]    
    ): Promise<{}> {
        let params: { searches: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('searches' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { searches: object[] };
        } else {
            params = {
                searches: paramsOrFirst as object[]            
            };
        }
        
        const searches = params.searches;

        if (typeof searches === 'undefined') {
            throw new RevenexxException('Missing required parameter: "searches"');
        }

        const apiPath = '/v1/search/multi_search';
        const apiPayload: Payload = {};
        if (typeof searches !== 'undefined') {
            apiPayload['searches'] = Client.toWireKeys(searches, {"facetBy":{"wire":"facet_by","children":null},"filterBy":{"wire":"filter_by","children":null},"perPage":{"wire":"per_page","children":null},"queryBy":{"wire":"query_by","children":null},"sortBy":{"wire":"sort_by","children":null}});
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
