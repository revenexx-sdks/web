import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { OrderListKind } from '../enums/order-list-kind';

export class Orderlists {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    orderlistsList(): Promise<{}> {

        const apiPath = '/v1/orderlists';
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
     * @param {string} params.name - 
     * @param {string} params.ownerId - Owning contact.
     * @param {string} params.ownerName - Owner display name (snapshot).
     * @param {Models.OrderListItemInput[]} params.items - Optional initial positions.
     * @param {OrderListKind} params.kind - List kind (default 'shopping').
     * @param {object} params.metadata - 
     * @param {string} params.organizationId - Owning organization (scopes public sharing).
     * @param {boolean} params.shared - Shared read-only across the organization (default false).
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListWithItems>}
     */
    orderlistsCreate(params: { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: OrderListKind, metadata?: object, organizationId?: string, shared?: boolean }): Promise<Models.OrderListWithItems>;
    /**
     *
     * @param {string} name - 
     * @param {string} ownerId - Owning contact.
     * @param {string} ownerName - Owner display name (snapshot).
     * @param {Models.OrderListItemInput[]} items - Optional initial positions.
     * @param {OrderListKind} kind - List kind (default 'shopping').
     * @param {object} metadata - 
     * @param {string} organizationId - Owning organization (scopes public sharing).
     * @param {boolean} shared - Shared read-only across the organization (default false).
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListWithItems>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsCreate(name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: OrderListKind, metadata?: object, organizationId?: string, shared?: boolean): Promise<Models.OrderListWithItems>;
    orderlistsCreate(
        paramsOrFirst: { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: OrderListKind, metadata?: object, organizationId?: string, shared?: boolean } | string,
        ...rest: [(string)?, (string)?, (Models.OrderListItemInput[])?, (OrderListKind)?, (object)?, (string)?, (boolean)?]    
    ): Promise<Models.OrderListWithItems> {
        let params: { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: OrderListKind, metadata?: object, organizationId?: string, shared?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: OrderListKind, metadata?: object, organizationId?: string, shared?: boolean };
        } else {
            params = {
                name: paramsOrFirst as string,
                ownerId: rest[0] as string,
                ownerName: rest[1] as string,
                items: rest[2] as Models.OrderListItemInput[],
                kind: rest[3] as OrderListKind,
                metadata: rest[4] as object,
                organizationId: rest[5] as string,
                shared: rest[6] as boolean            
            };
        }
        
        const name = params.name;
        const ownerId = params.ownerId;
        const ownerName = params.ownerName;
        const items = params.items;
        const kind = params.kind;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const shared = params.shared;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof ownerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "ownerId"');
        }
        if (typeof ownerName === 'undefined') {
            throw new RevenexxException('Missing required parameter: "ownerName"');
        }

        const apiPath = '/v1/orderlists';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"categorySlug":{"wire":"category_slug","children":null},"costCenterId":{"wire":"cost_center_id","children":null},"customSku":{"wire":"custom_sku","children":null},"positionTexts":{"wire":"position_texts","children":null},"productId":{"wire":"product_id","children":null},"subcategorySlug":{"wire":"subcategory_slug","children":null},"taxRate":{"wire":"tax_rate","children":null}});
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof ownerName !== 'undefined') {
            apiPayload['owner_name'] = ownerName;
        }
        if (typeof shared !== 'undefined') {
            apiPayload['shared'] = shared;
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
    orderlistsDefaults(): Promise<{}> {

        const apiPath = '/v1/orderlists/defaults';
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
    orderlistsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsDelete(id: string): Promise<{}>;
    orderlistsDelete(
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

        const apiPath = '/v1/orderlists/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.OrderListWithItems>}
     */
    orderlistsGet(params: { id: string }): Promise<Models.OrderListWithItems>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListWithItems>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsGet(id: string): Promise<Models.OrderListWithItems>;
    orderlistsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrderListWithItems> {
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

        const apiPath = '/v1/orderlists/{id}'.replace('{id}', id);
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
     * @param {OrderListKind} params.kind - List kind (default 'shopping').
     * @param {object} params.metadata - 
     * @param {string} params.name - 
     * @param {boolean} params.shared - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListWithItems>}
     */
    orderlistsUpdate(params: { id: string, kind?: OrderListKind, metadata?: object, name?: string, shared?: boolean }): Promise<Models.OrderListWithItems>;
    /**
     *
     * @param {string} id - 
     * @param {OrderListKind} kind - List kind (default 'shopping').
     * @param {object} metadata - 
     * @param {string} name - 
     * @param {boolean} shared - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListWithItems>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsUpdate(id: string, kind?: OrderListKind, metadata?: object, name?: string, shared?: boolean): Promise<Models.OrderListWithItems>;
    orderlistsUpdate(
        paramsOrFirst: { id: string, kind?: OrderListKind, metadata?: object, name?: string, shared?: boolean } | string,
        ...rest: [(OrderListKind)?, (object)?, (string)?, (boolean)?]    
    ): Promise<Models.OrderListWithItems> {
        let params: { id: string, kind?: OrderListKind, metadata?: object, name?: string, shared?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, kind?: OrderListKind, metadata?: object, name?: string, shared?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                kind: rest[0] as OrderListKind,
                metadata: rest[1] as object,
                name: rest[2] as string,
                shared: rest[3] as boolean            
            };
        }
        
        const id = params.id;
        const kind = params.kind;
        const metadata = params.metadata;
        const name = params.name;
        const shared = params.shared;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof shared !== 'undefined') {
            apiPayload['shared'] = shared;
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
     * @param {string} params.listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    orderlistsItemsList(params: { listId: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsList(listId: string): Promise<{}>;
    orderlistsItemsList(
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

        const apiPath = '/v1/orderlists/{list_id}/items'.replace('{list_id}', listId);
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
     * @param {string} params.listId - 
     * @param {string} params.name - Display name (snapshot).
     * @param {string} params.categorySlug - 
     * @param {string} params.costCenterId - Cost center reference (free-text).
     * @param {string} params.customSku - Customer's own article number.
     * @param {string} params.image - 
     * @param {object} params.metadata - 
     * @param {number} params.position - Sort order (assigned automatically when omitted).
     * @param {string[]} params.positionTexts - Per-position notes.
     * @param {number} params.price - Unit price snapshot.
     * @param {string} params.productId - Catalog product (alternative to sku).
     * @param {number} params.quantity - Default 1.
     * @param {string} params.sku - Article SKU (alternative to product_id).
     * @param {string} params.subcategorySlug - 
     * @param {number} params.taxRate - 
     * @param {string} params.unit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListItem>}
     */
    orderlistsItemsCreate(params: { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string }): Promise<Models.OrderListItem>;
    /**
     *
     * @param {string} listId - 
     * @param {string} name - Display name (snapshot).
     * @param {string} categorySlug - 
     * @param {string} costCenterId - Cost center reference (free-text).
     * @param {string} customSku - Customer's own article number.
     * @param {string} image - 
     * @param {object} metadata - 
     * @param {number} position - Sort order (assigned automatically when omitted).
     * @param {string[]} positionTexts - Per-position notes.
     * @param {number} price - Unit price snapshot.
     * @param {string} productId - Catalog product (alternative to sku).
     * @param {number} quantity - Default 1.
     * @param {string} sku - Article SKU (alternative to product_id).
     * @param {string} subcategorySlug - 
     * @param {number} taxRate - 
     * @param {string} unit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsCreate(listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string): Promise<Models.OrderListItem>;
    orderlistsItemsCreate(
        paramsOrFirst: { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (number)?, (string[])?, (number)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.OrderListItem> {
        let params: { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                name: rest[0] as string,
                categorySlug: rest[1] as string,
                costCenterId: rest[2] as string,
                customSku: rest[3] as string,
                image: rest[4] as string,
                metadata: rest[5] as object,
                position: rest[6] as number,
                positionTexts: rest[7] as string[],
                price: rest[8] as number,
                productId: rest[9] as string,
                quantity: rest[10] as number,
                sku: rest[11] as string,
                subcategorySlug: rest[12] as string,
                taxRate: rest[13] as number,
                unit: rest[14] as string            
            };
        }
        
        const listId = params.listId;
        const name = params.name;
        const categorySlug = params.categorySlug;
        const costCenterId = params.costCenterId;
        const customSku = params.customSku;
        const image = params.image;
        const metadata = params.metadata;
        const position = params.position;
        const positionTexts = params.positionTexts;
        const price = params.price;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const subcategorySlug = params.subcategorySlug;
        const taxRate = params.taxRate;
        const unit = params.unit;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof categorySlug !== 'undefined') {
            apiPayload['category_slug'] = categorySlug;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof customSku !== 'undefined') {
            apiPayload['custom_sku'] = customSku;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
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
        if (typeof positionTexts !== 'undefined') {
            apiPayload['position_texts'] = positionTexts;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof subcategorySlug !== 'undefined') {
            apiPayload['subcategory_slug'] = subcategorySlug;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
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
     * @param {string} params.listId - 
     * @param {Models.OrderListItemInput[]} params.items - The new full set of positions.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    orderlistsItemsReplace(params: { listId: string, items: Models.OrderListItemInput[] }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @param {Models.OrderListItemInput[]} items - The new full set of positions.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsReplace(listId: string, items: Models.OrderListItemInput[]): Promise<{}>;
    orderlistsItemsReplace(
        paramsOrFirst: { listId: string, items: Models.OrderListItemInput[] } | string,
        ...rest: [(Models.OrderListItemInput[])?]    
    ): Promise<{}> {
        let params: { listId: string, items: Models.OrderListItemInput[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, items: Models.OrderListItemInput[] };
        } else {
            params = {
                listId: paramsOrFirst as string,
                items: rest[0] as Models.OrderListItemInput[]            
            };
        }
        
        const listId = params.listId;
        const items = params.items;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"categorySlug":{"wire":"category_slug","children":null},"costCenterId":{"wire":"cost_center_id","children":null},"customSku":{"wire":"custom_sku","children":null},"positionTexts":{"wire":"position_texts","children":null},"productId":{"wire":"product_id","children":null},"subcategorySlug":{"wire":"subcategory_slug","children":null},"taxRate":{"wire":"tax_rate","children":null}});
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    orderlistsItemsDelete(params: { listId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsDelete(listId: string, id: string): Promise<{}>;
    orderlistsItemsDelete(
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

        const apiPath = '/v1/orderlists/{list_id}/items/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListItem>}
     */
    orderlistsItemsGet(params: { listId: string, id: string }): Promise<Models.OrderListItem>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsGet(listId: string, id: string): Promise<Models.OrderListItem>;
    orderlistsItemsGet(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.OrderListItem> {
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

        const apiPath = '/v1/orderlists/{list_id}/items/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @param {string} params.categorySlug - 
     * @param {string} params.costCenterId - Cost center reference (free-text).
     * @param {string} params.customSku - Customer's own article number.
     * @param {string} params.image - 
     * @param {object} params.metadata - 
     * @param {string} params.name - Display name (snapshot).
     * @param {number} params.position - Sort order (assigned automatically when omitted).
     * @param {string[]} params.positionTexts - Per-position notes.
     * @param {number} params.price - Unit price snapshot.
     * @param {string} params.productId - Catalog product (alternative to sku).
     * @param {number} params.quantity - Default 1.
     * @param {string} params.sku - Article SKU (alternative to product_id).
     * @param {string} params.subcategorySlug - 
     * @param {number} params.taxRate - 
     * @param {string} params.unit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListItem>}
     */
    orderlistsItemsUpdate(params: { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string }): Promise<Models.OrderListItem>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @param {string} categorySlug - 
     * @param {string} costCenterId - Cost center reference (free-text).
     * @param {string} customSku - Customer's own article number.
     * @param {string} image - 
     * @param {object} metadata - 
     * @param {string} name - Display name (snapshot).
     * @param {number} position - Sort order (assigned automatically when omitted).
     * @param {string[]} positionTexts - Per-position notes.
     * @param {number} price - Unit price snapshot.
     * @param {string} productId - Catalog product (alternative to sku).
     * @param {number} quantity - Default 1.
     * @param {string} sku - Article SKU (alternative to product_id).
     * @param {string} subcategorySlug - 
     * @param {number} taxRate - 
     * @param {string} unit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsUpdate(listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string): Promise<Models.OrderListItem>;
    orderlistsItemsUpdate(
        paramsOrFirst: { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (number)?, (string[])?, (number)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.OrderListItem> {
        let params: { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string,
                categorySlug: rest[1] as string,
                costCenterId: rest[2] as string,
                customSku: rest[3] as string,
                image: rest[4] as string,
                metadata: rest[5] as object,
                name: rest[6] as string,
                position: rest[7] as number,
                positionTexts: rest[8] as string[],
                price: rest[9] as number,
                productId: rest[10] as string,
                quantity: rest[11] as number,
                sku: rest[12] as string,
                subcategorySlug: rest[13] as string,
                taxRate: rest[14] as number,
                unit: rest[15] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;
        const categorySlug = params.categorySlug;
        const costCenterId = params.costCenterId;
        const customSku = params.customSku;
        const image = params.image;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const positionTexts = params.positionTexts;
        const price = params.price;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const subcategorySlug = params.subcategorySlug;
        const taxRate = params.taxRate;
        const unit = params.unit;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items/{id}'.replace('{list_id}', listId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof categorySlug !== 'undefined') {
            apiPayload['category_slug'] = categorySlug;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof customSku !== 'undefined') {
            apiPayload['custom_sku'] = customSku;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
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
        if (typeof positionTexts !== 'undefined') {
            apiPayload['position_texts'] = positionTexts;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof subcategorySlug !== 'undefined') {
            apiPayload['subcategory_slug'] = subcategorySlug;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
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
