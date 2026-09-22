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
     * Run several searches in one round trip — the endpoint the typesense-js `multiSearch` helper and the InstantSearch adapter use for every query. On the gateway-trust path each entry must name a collection the tenant owns. With a `revx_` key `collection_name` is optional and is forced to the key's own collection. Requires the `documents:search` action.
     *
     * @param {Models.MultiSearchEntry[]} params.searches - The searches to run, in order. Must not be empty.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MultiSearchResult>}
     */
    searchMultiSearch(params: { searches: Models.MultiSearchEntry[] }): Promise<Models.MultiSearchResult>;
    /**
     * Run several searches in one round trip — the endpoint the typesense-js `multiSearch` helper and the InstantSearch adapter use for every query. On the gateway-trust path each entry must name a collection the tenant owns. With a `revx_` key `collection_name` is optional and is forced to the key's own collection. Requires the `documents:search` action.
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
}
