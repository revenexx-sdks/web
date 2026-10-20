import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Collection } from '../enums/collection';
import { SearchEventsType } from '../enums/search-events-type';

export class Search {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The collections the tenant's installed apps have provisioned. Available on the API-gateway-trust path only — a `revx_` key authorises a single collection, so discovery is a gateway concern and a key-authenticated caller gets 403.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.CollectionList>}
     */
    searchListCollections(): Promise<Models.CollectionList> {

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
     * Returns the Typesense collection definition (fields, defaults, document count). Requires the `collections:read` action.
     *
     * @param {Collection} params.collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultCollection>}
     */
    searchGetCollection(params: { collection: Collection }): Promise<Models.DefaultCollection>;
    /**
     * Returns the Typesense collection definition (fields, defaults, document count). Requires the `collections:read` action.
     *
     * @param {Collection} collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultCollection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchGetCollection(collection: Collection): Promise<Models.DefaultCollection>;
    searchGetCollection(
        paramsOrFirst: { collection: Collection } | Collection    
    ): Promise<Models.DefaultCollection> {
        let params: { collection: Collection };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('collection' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: Collection };
        } else {
            params = {
                collection: paramsOrFirst as Collection            
            };
        }
        
        const collection = params.collection;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }

        const apiPath = '/v1/search/collections/{collection}'.replace('{collection}', collection);
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
     * Full-text search within one collection. Typesense search parameters are passed through verbatim as the query string, so parameters not listed here still reach Typesense. Requires the `documents:search` action.
     *
     * @param {Collection} params.collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @param {string} params.q - Query text. Use `*` to match everything.
     * @param {string} params.queryBy - Comma-separated fields to search, in weight order.
     * @param {string} params.filterBy - Filter expression, e.g. `in_stock:=true && price:<100`. ANDed with the tenant filter the proxy injects.
     * @param {string} params.sortBy - Sort expression, e.g. `price:desc`.
     * @param {string} params.facetBy - Comma-separated fields to facet on.
     * @param {number} params.maxFacetValues - Facet values to return per field.
     * @param {string} params.groupBy - Comma-separated fields to group results by.
     * @param {string} params.includeFields - Comma-separated document fields to return.
     * @param {string} params.excludeFields - Comma-separated document fields to omit.
     * @param {string} params.highlightFullFields - Comma-separated fields to highlight in full.
     * @param {number} params.numTypos - Typos tolerated per query token.
     * @param {string} params.prefix - Whether the last token is a prefix; per-field when comma-separated.
     * @param {number} params.page - 1-based page number.
     * @param {number} params.perPage - Hits per page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultSearchResult>}
     */
    searchSearchDocumentsGet(params: { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, facetBy?: string, maxFacetValues?: number, groupBy?: string, includeFields?: string, excludeFields?: string, highlightFullFields?: string, numTypos?: number, prefix?: string, page?: number, perPage?: number }): Promise<Models.DefaultSearchResult>;
    /**
     * Full-text search within one collection. Typesense search parameters are passed through verbatim as the query string, so parameters not listed here still reach Typesense. Requires the `documents:search` action.
     *
     * @param {Collection} collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @param {string} q - Query text. Use `*` to match everything.
     * @param {string} queryBy - Comma-separated fields to search, in weight order.
     * @param {string} filterBy - Filter expression, e.g. `in_stock:=true && price:<100`. ANDed with the tenant filter the proxy injects.
     * @param {string} sortBy - Sort expression, e.g. `price:desc`.
     * @param {string} facetBy - Comma-separated fields to facet on.
     * @param {number} maxFacetValues - Facet values to return per field.
     * @param {string} groupBy - Comma-separated fields to group results by.
     * @param {string} includeFields - Comma-separated document fields to return.
     * @param {string} excludeFields - Comma-separated document fields to omit.
     * @param {string} highlightFullFields - Comma-separated fields to highlight in full.
     * @param {number} numTypos - Typos tolerated per query token.
     * @param {string} prefix - Whether the last token is a prefix; per-field when comma-separated.
     * @param {number} page - 1-based page number.
     * @param {number} perPage - Hits per page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultSearchResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchSearchDocumentsGet(collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, facetBy?: string, maxFacetValues?: number, groupBy?: string, includeFields?: string, excludeFields?: string, highlightFullFields?: string, numTypos?: number, prefix?: string, page?: number, perPage?: number): Promise<Models.DefaultSearchResult>;
    searchSearchDocumentsGet(
        paramsOrFirst: { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, facetBy?: string, maxFacetValues?: number, groupBy?: string, includeFields?: string, excludeFields?: string, highlightFullFields?: string, numTypos?: number, prefix?: string, page?: number, perPage?: number } | Collection,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.DefaultSearchResult> {
        let params: { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, facetBy?: string, maxFacetValues?: number, groupBy?: string, includeFields?: string, excludeFields?: string, highlightFullFields?: string, numTypos?: number, prefix?: string, page?: number, perPage?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('collection' in paramsOrFirst || 'q' in paramsOrFirst || 'queryBy' in paramsOrFirst || 'filterBy' in paramsOrFirst || 'sortBy' in paramsOrFirst || 'facetBy' in paramsOrFirst || 'maxFacetValues' in paramsOrFirst || 'groupBy' in paramsOrFirst || 'includeFields' in paramsOrFirst || 'excludeFields' in paramsOrFirst || 'highlightFullFields' in paramsOrFirst || 'numTypos' in paramsOrFirst || 'prefix' in paramsOrFirst || 'page' in paramsOrFirst || 'perPage' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: Collection, q?: string, queryBy?: string, filterBy?: string, sortBy?: string, facetBy?: string, maxFacetValues?: number, groupBy?: string, includeFields?: string, excludeFields?: string, highlightFullFields?: string, numTypos?: number, prefix?: string, page?: number, perPage?: number };
        } else {
            params = {
                collection: paramsOrFirst as Collection,
                q: rest[0] as string,
                queryBy: rest[1] as string,
                filterBy: rest[2] as string,
                sortBy: rest[3] as string,
                facetBy: rest[4] as string,
                maxFacetValues: rest[5] as number,
                groupBy: rest[6] as string,
                includeFields: rest[7] as string,
                excludeFields: rest[8] as string,
                highlightFullFields: rest[9] as string,
                numTypos: rest[10] as number,
                prefix: rest[11] as string,
                page: rest[12] as number,
                perPage: rest[13] as number            
            };
        }
        
        const collection = params.collection;
        const q = params.q;
        const queryBy = params.queryBy;
        const filterBy = params.filterBy;
        const sortBy = params.sortBy;
        const facetBy = params.facetBy;
        const maxFacetValues = params.maxFacetValues;
        const groupBy = params.groupBy;
        const includeFields = params.includeFields;
        const excludeFields = params.excludeFields;
        const highlightFullFields = params.highlightFullFields;
        const numTypos = params.numTypos;
        const prefix = params.prefix;
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
        if (typeof facetBy !== 'undefined') {
            apiPayload['facet_by'] = facetBy;
        }
        if (typeof maxFacetValues !== 'undefined') {
            apiPayload['max_facet_values'] = maxFacetValues;
        }
        if (typeof groupBy !== 'undefined') {
            apiPayload['group_by'] = groupBy;
        }
        if (typeof includeFields !== 'undefined') {
            apiPayload['include_fields'] = includeFields;
        }
        if (typeof excludeFields !== 'undefined') {
            apiPayload['exclude_fields'] = excludeFields;
        }
        if (typeof highlightFullFields !== 'undefined') {
            apiPayload['highlight_full_fields'] = highlightFullFields;
        }
        if (typeof numTypos !== 'undefined') {
            apiPayload['num_typos'] = numTypos;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
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
     * Full-text search within one collection, with the Typesense search parameters in the body. Requires the `documents:search` action.
     *
     * @param {Collection} params.collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @param {string} params.excludeFields - Comma-separated document fields to omit.
     * @param {string} params.facetBy - Comma-separated fields to facet on.
     * @param {string} params.filterBy - Filter expression, e.g. `in_stock:=true && price:<100`. ANDed with the tenant filter the proxy injects.
     * @param {string} params.groupBy - Comma-separated fields to group results by.
     * @param {string} params.highlightFullFields - Comma-separated fields to highlight in full.
     * @param {string} params.includeFields - Comma-separated document fields to return.
     * @param {number} params.maxFacetValues - Facet values to return per field.
     * @param {number} params.numTypos - Typos tolerated per query token.
     * @param {number} params.page - 1-based page number.
     * @param {number} params.perPage - Hits per page.
     * @param {string} params.prefix - Whether the last token is a prefix; per-field when comma-separated.
     * @param {string} params.q - Query text. Use `*` to match everything.
     * @param {string} params.queryBy - Comma-separated fields to search, in weight order.
     * @param {string} params.sortBy - Sort expression, e.g. `price:desc`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultSearchResult>}
     */
    searchSearchDocuments(params: { collection: Collection, excludeFields?: string, facetBy?: string, filterBy?: string, groupBy?: string, highlightFullFields?: string, includeFields?: string, maxFacetValues?: number, numTypos?: number, page?: number, perPage?: number, prefix?: string, q?: string, queryBy?: string, sortBy?: string }): Promise<Models.DefaultSearchResult>;
    /**
     * Full-text search within one collection, with the Typesense search parameters in the body. Requires the `documents:search` action.
     *
     * @param {Collection} collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @param {string} excludeFields - Comma-separated document fields to omit.
     * @param {string} facetBy - Comma-separated fields to facet on.
     * @param {string} filterBy - Filter expression, e.g. `in_stock:=true && price:<100`. ANDed with the tenant filter the proxy injects.
     * @param {string} groupBy - Comma-separated fields to group results by.
     * @param {string} highlightFullFields - Comma-separated fields to highlight in full.
     * @param {string} includeFields - Comma-separated document fields to return.
     * @param {number} maxFacetValues - Facet values to return per field.
     * @param {number} numTypos - Typos tolerated per query token.
     * @param {number} page - 1-based page number.
     * @param {number} perPage - Hits per page.
     * @param {string} prefix - Whether the last token is a prefix; per-field when comma-separated.
     * @param {string} q - Query text. Use `*` to match everything.
     * @param {string} queryBy - Comma-separated fields to search, in weight order.
     * @param {string} sortBy - Sort expression, e.g. `price:desc`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultSearchResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchSearchDocuments(collection: Collection, excludeFields?: string, facetBy?: string, filterBy?: string, groupBy?: string, highlightFullFields?: string, includeFields?: string, maxFacetValues?: number, numTypos?: number, page?: number, perPage?: number, prefix?: string, q?: string, queryBy?: string, sortBy?: string): Promise<Models.DefaultSearchResult>;
    searchSearchDocuments(
        paramsOrFirst: { collection: Collection, excludeFields?: string, facetBy?: string, filterBy?: string, groupBy?: string, highlightFullFields?: string, includeFields?: string, maxFacetValues?: number, numTypos?: number, page?: number, perPage?: number, prefix?: string, q?: string, queryBy?: string, sortBy?: string } | Collection,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (number)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.DefaultSearchResult> {
        let params: { collection: Collection, excludeFields?: string, facetBy?: string, filterBy?: string, groupBy?: string, highlightFullFields?: string, includeFields?: string, maxFacetValues?: number, numTypos?: number, page?: number, perPage?: number, prefix?: string, q?: string, queryBy?: string, sortBy?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('collection' in paramsOrFirst || 'excludeFields' in paramsOrFirst || 'facetBy' in paramsOrFirst || 'filterBy' in paramsOrFirst || 'groupBy' in paramsOrFirst || 'highlightFullFields' in paramsOrFirst || 'includeFields' in paramsOrFirst || 'maxFacetValues' in paramsOrFirst || 'numTypos' in paramsOrFirst || 'page' in paramsOrFirst || 'perPage' in paramsOrFirst || 'prefix' in paramsOrFirst || 'q' in paramsOrFirst || 'queryBy' in paramsOrFirst || 'sortBy' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: Collection, excludeFields?: string, facetBy?: string, filterBy?: string, groupBy?: string, highlightFullFields?: string, includeFields?: string, maxFacetValues?: number, numTypos?: number, page?: number, perPage?: number, prefix?: string, q?: string, queryBy?: string, sortBy?: string };
        } else {
            params = {
                collection: paramsOrFirst as Collection,
                excludeFields: rest[0] as string,
                facetBy: rest[1] as string,
                filterBy: rest[2] as string,
                groupBy: rest[3] as string,
                highlightFullFields: rest[4] as string,
                includeFields: rest[5] as string,
                maxFacetValues: rest[6] as number,
                numTypos: rest[7] as number,
                page: rest[8] as number,
                perPage: rest[9] as number,
                prefix: rest[10] as string,
                q: rest[11] as string,
                queryBy: rest[12] as string,
                sortBy: rest[13] as string            
            };
        }
        
        const collection = params.collection;
        const excludeFields = params.excludeFields;
        const facetBy = params.facetBy;
        const filterBy = params.filterBy;
        const groupBy = params.groupBy;
        const highlightFullFields = params.highlightFullFields;
        const includeFields = params.includeFields;
        const maxFacetValues = params.maxFacetValues;
        const numTypos = params.numTypos;
        const page = params.page;
        const perPage = params.perPage;
        const prefix = params.prefix;
        const q = params.q;
        const queryBy = params.queryBy;
        const sortBy = params.sortBy;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }

        const apiPath = '/v1/search/collections/{collection}/documents/search'.replace('{collection}', collection);
        const apiPayload: Payload = {};
        if (typeof excludeFields !== 'undefined') {
            apiPayload['exclude_fields'] = excludeFields;
        }
        if (typeof facetBy !== 'undefined') {
            apiPayload['facet_by'] = facetBy;
        }
        if (typeof filterBy !== 'undefined') {
            apiPayload['filter_by'] = filterBy;
        }
        if (typeof groupBy !== 'undefined') {
            apiPayload['group_by'] = groupBy;
        }
        if (typeof highlightFullFields !== 'undefined') {
            apiPayload['highlight_full_fields'] = highlightFullFields;
        }
        if (typeof includeFields !== 'undefined') {
            apiPayload['include_fields'] = includeFields;
        }
        if (typeof maxFacetValues !== 'undefined') {
            apiPayload['max_facet_values'] = maxFacetValues;
        }
        if (typeof numTypos !== 'undefined') {
            apiPayload['num_typos'] = numTypos;
        }
        if (typeof page !== 'undefined') {
            apiPayload['page'] = page;
        }
        if (typeof perPage !== 'undefined') {
            apiPayload['per_page'] = perPage;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
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
     * Fetch a single document by id. The document shape is the collection's own schema, so it is described as a free-form object. Requires the `documents:get` action.
     *
     * @param {Collection} params.collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @param {string} params.documentId - The document's `id` within the collection.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchGetDocument(params: { collection: Collection, documentId: string }): Promise<{}>;
    /**
     * Fetch a single document by id. The document shape is the collection's own schema, so it is described as a free-form object. Requires the `documents:get` action.
     *
     * @param {Collection} collection - A collection the tenant owns (see `GET /api/v1/collections`). Resolved to its namespaced Typesense name server-side; a collection the tenant does not own is a 404.
     * @param {string} documentId - The document's `id` within the collection.
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
     * A click on a result, an add-to-cart or a purchase, tied to the search it came from by `query_id` (from `/api/v1/query` or `/api/v1/suggest`). The search analytics count it per language and search type; with an events key configured the proxy also writes it to the collection's Typesense event log.
     * 
     * `user_token` is a pseudonymous id the storefront chooses (a random value kept in a cookie, never an e-mail or a customer number); it is stored only salted and hashed. The locale comes from `X-Revenexx-Locale`.
     * 
     * Answers 202 at once: recording happens in the background, and an event is dropped rather than slowing the shop down. Requires the `documents:search` action; a `revx_` key may report events for its own collection only.
     *
     * @param {string} params.collection - The collection of the document — `categories` for a category tile.
     * @param {SearchEventsType} params.type - 
     * @param {string} params.docId - The document's `id`. Required except for a purchase.
     * @param {number} params.position - 1-based position of the document in the result list.
     * @param {string} params.q - 
     * @param {string} params.queryId - The `query_id` of the search the event came from. Required for a click.
     * @param {string} params.userToken - Pseudonymous shopper id; stored salted and hashed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    searchEvents(params: { collection: string, type: SearchEventsType, docId?: string, position?: number, q?: string, queryId?: string, userToken?: string }): Promise<{}>;
    /**
     * A click on a result, an add-to-cart or a purchase, tied to the search it came from by `query_id` (from `/api/v1/query` or `/api/v1/suggest`). The search analytics count it per language and search type; with an events key configured the proxy also writes it to the collection's Typesense event log.
     * 
     * `user_token` is a pseudonymous id the storefront chooses (a random value kept in a cookie, never an e-mail or a customer number); it is stored only salted and hashed. The locale comes from `X-Revenexx-Locale`.
     * 
     * Answers 202 at once: recording happens in the background, and an event is dropped rather than slowing the shop down. Requires the `documents:search` action; a `revx_` key may report events for its own collection only.
     *
     * @param {string} collection - The collection of the document — `categories` for a category tile.
     * @param {SearchEventsType} type - 
     * @param {string} docId - The document's `id`. Required except for a purchase.
     * @param {number} position - 1-based position of the document in the result list.
     * @param {string} q - 
     * @param {string} queryId - The `query_id` of the search the event came from. Required for a click.
     * @param {string} userToken - Pseudonymous shopper id; stored salted and hashed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchEvents(collection: string, type: SearchEventsType, docId?: string, position?: number, q?: string, queryId?: string, userToken?: string): Promise<{}>;
    searchEvents(
        paramsOrFirst: { collection: string, type: SearchEventsType, docId?: string, position?: number, q?: string, queryId?: string, userToken?: string } | string,
        ...rest: [(SearchEventsType)?, (string)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { collection: string, type: SearchEventsType, docId?: string, position?: number, q?: string, queryId?: string, userToken?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: string, type: SearchEventsType, docId?: string, position?: number, q?: string, queryId?: string, userToken?: string };
        } else {
            params = {
                collection: paramsOrFirst as string,
                type: rest[0] as SearchEventsType,
                docId: rest[1] as string,
                position: rest[2] as number,
                q: rest[3] as string,
                queryId: rest[4] as string,
                userToken: rest[5] as string            
            };
        }
        
        const collection = params.collection;
        const type = params.type;
        const docId = params.docId;
        const position = params.position;
        const q = params.q;
        const queryId = params.queryId;
        const userToken = params.userToken;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/search/events';
        const apiPayload: Payload = {};
        if (typeof collection !== 'undefined') {
            apiPayload['collection'] = collection;
        }
        if (typeof docId !== 'undefined') {
            apiPayload['doc_id'] = docId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof q !== 'undefined') {
            apiPayload['q'] = q;
        }
        if (typeof queryId !== 'undefined') {
            apiPayload['query_id'] = queryId;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof userToken !== 'undefined') {
            apiPayload['user_token'] = userToken;
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
     * Idempotent, and bounded by the tenant's own configuration: it can add
     * no field for an attribute the tenant has not marked `is_filterable`,
     * and drops only fields whose attribute it has itself un-marked. A run
     * that changes nothing makes zero calls to Typesense.
     * 
     * Body (optional) narrows the sweep to one app:
     * 
     *     {"vendor": "revenexx", "app": "products"}
     * 
     * Omitted, every app the tenant has installed is swept. Apps outside the
     * facet-sync allowlist are included in the response with
     * `skipped: app_not_enabled` rather than silently dropped — a caller
     * asking for an app that cannot have facets deserves to be told so.
     * 
     * The response shape below is DECLARED rather than inferred. Its entries
     * are built by spreading AttributeFacetSyncer::syncForCollection()'s
     * summary, and the generator cannot see through an array spread: left to
     * itself it emits an unnamed property and a null in `required`, which
     * Spectral rejects as `"1" property must be string`.
     * AppController::resyncFacets() carries the same declaration for the same
     * reason — keep both in step with syncForApp()'s return type.
     *
     * @param {string} params.app - 
     * @param {string} params.vendor - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    gatewayFacetResync(params?: { app?: string, vendor?: string }): Promise<{}>;
    /**
     * Idempotent, and bounded by the tenant's own configuration: it can add
     * no field for an attribute the tenant has not marked `is_filterable`,
     * and drops only fields whose attribute it has itself un-marked. A run
     * that changes nothing makes zero calls to Typesense.
     * 
     * Body (optional) narrows the sweep to one app:
     * 
     *     {"vendor": "revenexx", "app": "products"}
     * 
     * Omitted, every app the tenant has installed is swept. Apps outside the
     * facet-sync allowlist are included in the response with
     * `skipped: app_not_enabled` rather than silently dropped — a caller
     * asking for an app that cannot have facets deserves to be told so.
     * 
     * The response shape below is DECLARED rather than inferred. Its entries
     * are built by spreading AttributeFacetSyncer::syncForCollection()'s
     * summary, and the generator cannot see through an array spread: left to
     * itself it emits an unnamed property and a null in `required`, which
     * Spectral rejects as `"1" property must be string`.
     * AppController::resyncFacets() carries the same declaration for the same
     * reason — keep both in step with syncForApp()'s return type.
     *
     * @param {string} app - 
     * @param {string} vendor - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    gatewayFacetResync(app?: string, vendor?: string): Promise<{}>;
    gatewayFacetResync(
        paramsOrFirst?: { app?: string, vendor?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { app?: string, vendor?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { app?: string, vendor?: string };
        } else {
            params = {
                app: paramsOrFirst as string,
                vendor: rest[0] as string            
            };
        }
        
        const app = params.app;
        const vendor = params.vendor;


        const apiPath = '/v1/search/facets/resync';
        const apiPayload: Payload = {};
        if (typeof app !== 'undefined') {
            apiPayload['app'] = app;
        }
        if (typeof vendor !== 'undefined') {
            apiPayload['vendor'] = vendor;
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
     * Run several searches in one round trip — the endpoint the typesense-js `multiSearch` helper and the InstantSearch adapter use for every query. On the gateway-trust path each entry must name a collection the tenant owns in `collection`. With a `revx_` key it is optional and is forced to the key's own collection. Requires the `documents:search` action.
     * 
     * Use this instead of the single-collection search when the query outgrows a URL: Typesense caps a GET query string at 4000 characters, which a long `facet_by` reaches sooner than expected.
     *
     * @param {Models.MultiSearchEntry[]} params.searches - The searches to run, in order. Must not be empty.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MultiSearchResult>}
     */
    searchMultiSearch(params: { searches: Models.MultiSearchEntry[] }): Promise<Models.MultiSearchResult>;
    /**
     * Run several searches in one round trip — the endpoint the typesense-js `multiSearch` helper and the InstantSearch adapter use for every query. On the gateway-trust path each entry must name a collection the tenant owns in `collection`. With a `revx_` key it is optional and is forced to the key's own collection. Requires the `documents:search` action.
     * 
     * Use this instead of the single-collection search when the query outgrows a URL: Typesense caps a GET query string at 4000 characters, which a long `facet_by` reaches sooner than expected.
     *
     * @param {Models.MultiSearchEntry[]} searches - The searches to run, in order. Must not be empty.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MultiSearchResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchMultiSearch(searches: Models.MultiSearchEntry[]): Promise<Models.MultiSearchResult>;
    searchMultiSearch(
        paramsOrFirst: { searches: Models.MultiSearchEntry[] } | Models.MultiSearchEntry[]    
    ): Promise<Models.MultiSearchResult> {
        let params: { searches: Models.MultiSearchEntry[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('searches' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { searches: Models.MultiSearchEntry[] };
        } else {
            params = {
                searches: paramsOrFirst as Models.MultiSearchEntry[]            
            };
        }
        
        const searches = params.searches;

        if (typeof searches === 'undefined') {
            throw new RevenexxException('Missing required parameter: "searches"');
        }

        const apiPath = '/v1/search/multi_search';
        const apiPayload: Payload = {};
        if (typeof searches !== 'undefined') {
            apiPayload['searches'] = Client.toWireKeys(searches, {"collectionName":{"wire":"collection_name","children":null},"excludeFields":{"wire":"exclude_fields","children":null},"facetBy":{"wire":"facet_by","children":null},"filterBy":{"wire":"filter_by","children":null},"groupBy":{"wire":"group_by","children":null},"highlightFullFields":{"wire":"highlight_full_fields","children":null},"includeFields":{"wire":"include_fields","children":null},"maxFacetValues":{"wire":"max_facet_values","children":null},"numTypos":{"wire":"num_typos","children":null},"perPage":{"wire":"per_page","children":null},"queryBy":{"wire":"query_by","children":null},"sortBy":{"wire":"sort_by","children":null}});
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
     * Search one collection by intent rather than by Typesense parameters. The caller says what to look for (`q`, `filters`, `sort`, paging) and which `view` it is rendering; how to search comes from the collection's preset for that view (`<typesense_collection>__<view>`, managed through the admin API) or, without one, from a built-in default per view.
     * 
     * Always applied and not overridable: the tenant scope, `enabled:=true` when the collection has a boolean `enabled` field, the channel from `X-Revenexx-Channel` when the collection has `channels`, and the locale from `X-Revenexx-Locale` when the collection has `locale` (both the full and the bare code, e.g. `de-DE` and `de`).
     * 
     * Relevance parameters in the body (`query_by`, `sort_by`, `preset`, `facet_by`, …) are ignored, as is any other unknown key. Filters on fields the schema does not have, or cannot filter on, are dropped and listed in `ignored_filters`; a sort on a field without `sort: true` is dropped and echoed in `ignored_sort`.
     * 
     * Answers 404 while the proxy runs without its metadata key, which callers should treat like a missing route and fall back to `multi_search`. Requires the `documents:search` action; a `revx_` key may query its own collection only.
     *
     * @param {string} params.collection - A collection the tenant owns, by its public name.
     * @param {object} params.filters - Filters, ANDed across fields. A list matches any of its values; a scalar matches exactly; `{min, max}` is a range on a numeric field, either bound optional. Field names must exist in the collection schema and be filterable.
     * @param {number} params.page - 
     * @param {number} params.perPage - Hits per page. Defaults to the preset's, else the view's built-in default (20 for most views).
     * @param {string} params.q - Query text. Empty or `*` matches everything.
     * @param {string} params.sort - `relevance` (the preset decides), or `<field>_asc` / `<field>_desc` for a field with `sort: true` in the schema.
     * @param {string} params.view - What the result is for — `search`, `category`, `suggest`, `brand`, `listing`, or any other name a preset exists for. Selects the preset `<typesense_collection>__<view>`; without one, the built-in default of the view (a view without its own default behaves like `search`).
     * @throws {RevenexxException}
     * @returns {Promise<Models.QueryResult>}
     */
    searchQuery(params: { collection: string, filters?: object, page?: number, perPage?: number, q?: string, sort?: string, view?: string }): Promise<Models.QueryResult>;
    /**
     * Search one collection by intent rather than by Typesense parameters. The caller says what to look for (`q`, `filters`, `sort`, paging) and which `view` it is rendering; how to search comes from the collection's preset for that view (`<typesense_collection>__<view>`, managed through the admin API) or, without one, from a built-in default per view.
     * 
     * Always applied and not overridable: the tenant scope, `enabled:=true` when the collection has a boolean `enabled` field, the channel from `X-Revenexx-Channel` when the collection has `channels`, and the locale from `X-Revenexx-Locale` when the collection has `locale` (both the full and the bare code, e.g. `de-DE` and `de`).
     * 
     * Relevance parameters in the body (`query_by`, `sort_by`, `preset`, `facet_by`, …) are ignored, as is any other unknown key. Filters on fields the schema does not have, or cannot filter on, are dropped and listed in `ignored_filters`; a sort on a field without `sort: true` is dropped and echoed in `ignored_sort`.
     * 
     * Answers 404 while the proxy runs without its metadata key, which callers should treat like a missing route and fall back to `multi_search`. Requires the `documents:search` action; a `revx_` key may query its own collection only.
     *
     * @param {string} collection - A collection the tenant owns, by its public name.
     * @param {object} filters - Filters, ANDed across fields. A list matches any of its values; a scalar matches exactly; `{min, max}` is a range on a numeric field, either bound optional. Field names must exist in the collection schema and be filterable.
     * @param {number} page - 
     * @param {number} perPage - Hits per page. Defaults to the preset's, else the view's built-in default (20 for most views).
     * @param {string} q - Query text. Empty or `*` matches everything.
     * @param {string} sort - `relevance` (the preset decides), or `<field>_asc` / `<field>_desc` for a field with `sort: true` in the schema.
     * @param {string} view - What the result is for — `search`, `category`, `suggest`, `brand`, `listing`, or any other name a preset exists for. Selects the preset `<typesense_collection>__<view>`; without one, the built-in default of the view (a view without its own default behaves like `search`).
     * @throws {RevenexxException}
     * @returns {Promise<Models.QueryResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchQuery(collection: string, filters?: object, page?: number, perPage?: number, q?: string, sort?: string, view?: string): Promise<Models.QueryResult>;
    searchQuery(
        paramsOrFirst: { collection: string, filters?: object, page?: number, perPage?: number, q?: string, sort?: string, view?: string } | string,
        ...rest: [(object)?, (number)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.QueryResult> {
        let params: { collection: string, filters?: object, page?: number, perPage?: number, q?: string, sort?: string, view?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { collection: string, filters?: object, page?: number, perPage?: number, q?: string, sort?: string, view?: string };
        } else {
            params = {
                collection: paramsOrFirst as string,
                filters: rest[0] as object,
                page: rest[1] as number,
                perPage: rest[2] as number,
                q: rest[3] as string,
                sort: rest[4] as string,
                view: rest[5] as string            
            };
        }
        
        const collection = params.collection;
        const filters = params.filters;
        const page = params.page;
        const perPage = params.perPage;
        const q = params.q;
        const sort = params.sort;
        const view = params.view;

        if (typeof collection === 'undefined') {
            throw new RevenexxException('Missing required parameter: "collection"');
        }

        const apiPath = '/v1/search/query';
        const apiPayload: Payload = {};
        if (typeof collection !== 'undefined') {
            apiPayload['collection'] = collection;
        }
        if (typeof filters !== 'undefined') {
            apiPayload['filters'] = filters;
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
        if (typeof sort !== 'undefined') {
            apiPayload['sort'] = sort;
        }
        if (typeof view !== 'undefined') {
            apiPayload['view'] = view;
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
     * One request for a quick search: products and the category, manufacturer and page tiles beside them. Every collection is searched with its `suggest` preset or, without one, the built-in suggest default (prefix matching, few hits), under the same mandatory filters as `/api/v1/query` (tenant, locale, channel, `enabled`).
     * 
     * Without `collections` the proxy asks `products`, `categories`, `manufacturers` and `pages`, and leaves out those the tenant does not have; groups come back in that order. A collection whose search fails is left out rather than failing the request. Storefront actions (a redirect for the query) come from the first group that has any.
     * 
     * Send the `query_id` back with the events the result leads to (`POST /api/v1/events`). Answers 404 while the proxy runs without its metadata key. Requires the `documents:search` action; a `revx_` key asks its own collection only.
     *
     * @param {string} params.q - What the shopper typed.
     * @param {string[]} params.collections - Collections to ask, in the order the groups should come back. Default: products, categories, manufacturers, pages.
     * @param {number} params.perPage - Hits per collection. Defaults to the preset's, else the built-in suggest default.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SuggestResult>}
     */
    searchSuggest(params: { q: string, collections?: string[], perPage?: number }): Promise<Models.SuggestResult>;
    /**
     * One request for a quick search: products and the category, manufacturer and page tiles beside them. Every collection is searched with its `suggest` preset or, without one, the built-in suggest default (prefix matching, few hits), under the same mandatory filters as `/api/v1/query` (tenant, locale, channel, `enabled`).
     * 
     * Without `collections` the proxy asks `products`, `categories`, `manufacturers` and `pages`, and leaves out those the tenant does not have; groups come back in that order. A collection whose search fails is left out rather than failing the request. Storefront actions (a redirect for the query) come from the first group that has any.
     * 
     * Send the `query_id` back with the events the result leads to (`POST /api/v1/events`). Answers 404 while the proxy runs without its metadata key. Requires the `documents:search` action; a `revx_` key asks its own collection only.
     *
     * @param {string} q - What the shopper typed.
     * @param {string[]} collections - Collections to ask, in the order the groups should come back. Default: products, categories, manufacturers, pages.
     * @param {number} perPage - Hits per collection. Defaults to the preset's, else the built-in suggest default.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SuggestResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    searchSuggest(q: string, collections?: string[], perPage?: number): Promise<Models.SuggestResult>;
    searchSuggest(
        paramsOrFirst: { q: string, collections?: string[], perPage?: number } | string,
        ...rest: [(string[])?, (number)?]    
    ): Promise<Models.SuggestResult> {
        let params: { q: string, collections?: string[], perPage?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { q: string, collections?: string[], perPage?: number };
        } else {
            params = {
                q: paramsOrFirst as string,
                collections: rest[0] as string[],
                perPage: rest[1] as number            
            };
        }
        
        const q = params.q;
        const collections = params.collections;
        const perPage = params.perPage;

        if (typeof q === 'undefined') {
            throw new RevenexxException('Missing required parameter: "q"');
        }

        const apiPath = '/v1/search/suggest';
        const apiPayload: Payload = {};
        if (typeof collections !== 'undefined') {
            apiPayload['collections'] = collections;
        }
        if (typeof perPage !== 'undefined') {
            apiPayload['per_page'] = perPage;
        }
        if (typeof q !== 'undefined') {
            apiPayload['q'] = q;
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
