import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PageStatus } from '../enums/page-status';
import { Deleted } from '../enums/deleted';
import { PagesSeedMode } from '../enums/pages-seed-mode';
import { PagesVocabulariesGetName } from '../enums/pages-vocabularies-get-name';

export class Pages {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The pool an editor picks a reusable block from. A library item is ONE block subtree that many pages share BY REFERENCE — edit the item and every page using it changes — which is what separates it from a template, the other reusable thing here, which copies instead and is at `GET /pages/templates`. So the two filters are the two questions the picker asks: `bundles` narrows to the block types that fit the field being filled, `text` matches the label a person gave the item.
     *
     * @param {number} params.limit - Page size (default 24, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.bundles - Comma-separated block types; an item matching any of them is returned. Note the plural — `?bundle=` (singular) is not read by this route and is ignored. Empty means no filter.
     * @param {string} params.text - Case-insensitive substring search over the item label. Runs in the query, so `page.total` counts the matches. Empty means no search.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesLibraryList(params?: { limit?: number, offset?: number, order?: string, bundles?: string, text?: string }): Promise<{}>;
    /**
     * The pool an editor picks a reusable block from. A library item is ONE block subtree that many pages share BY REFERENCE — edit the item and every page using it changes — which is what separates it from a template, the other reusable thing here, which copies instead and is at `GET /pages/templates`. So the two filters are the two questions the picker asks: `bundles` narrows to the block types that fit the field being filled, `text` matches the label a person gave the item.
     *
     * @param {number} limit - Page size (default 24, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} bundles - Comma-separated block types; an item matching any of them is returned. Note the plural — `?bundle=` (singular) is not read by this route and is ignored. Empty means no filter.
     * @param {string} text - Case-insensitive substring search over the item label. Runs in the query, so `page.total` counts the matches. Empty means no search.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryList(limit?: number, offset?: number, order?: string, bundles?: string, text?: string): Promise<{}>;
    pagesLibraryList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, bundles?: string, text?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, bundles?: string, text?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, bundles?: string, text?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                bundles: rest[2] as string,
                text: rest[3] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const bundles = params.bundles;
        const text = params.text;


        const apiPath = '/v1/pages/library';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof bundles !== 'undefined') {
            apiPayload['bundles'] = bundles;
        }
        if (typeof text !== 'undefined') {
            apiPayload['text'] = text;
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
     * Retires a reusable block. It leaves the picker and every list, but the blocks pointing at it keep their `library_item_id` — the FK's `set null` belongs to a hard delete, and this writes a tombstone. Delivery then skips the expansion for a struck item rather than failing on it, so a page that used it falls back to the block content stored in its own published revision: nothing breaks, but the pages quietly stop tracking each other. Nothing here tells you which pages those are, so establish that before striking it.
     *
     * @param {string} params.id - The library item id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesLibraryDelete(params: { id: string }): Promise<{}>;
    /**
     * Retires a reusable block. It leaves the picker and every list, but the blocks pointing at it keep their `library_item_id` — the FK's `set null` belongs to a hard delete, and this writes a tombstone. Delivery then skips the expansion for a struck item rather than failing on it, so a page that used it falls back to the block content stored in its own published revision: nothing breaks, but the pages quietly stop tracking each other. Nothing here tells you which pages those are, so establish that before striking it.
     *
     * @param {string} id - The library item id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryDelete(id: string): Promise<{}>;
    pagesLibraryDelete(
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

        const apiPath = '/v1/pages/library/{id}'.replace('{id}', id);
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
     * The stored subtree behind one reusable block, so a picker can preview what dropping it into a page would produce. Because delivery expands the reference against THIS row at read time, what comes back is also what every page already using the item is currently rendering — which makes this the call to make before editing one.
     *
     * @param {string} params.id - The library item id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     */
    pagesLibraryGet(params: { id: string }): Promise<Models.LibraryItem>;
    /**
     * The stored subtree behind one reusable block, so a picker can preview what dropping it into a page would produce. Because delivery expands the reference against THIS row at read time, what comes back is also what every page already using the item is currently rendering — which makes this the call to make before editing one.
     *
     * @param {string} id - The library item id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryGet(id: string): Promise<Models.LibraryItem>;
    pagesLibraryGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.LibraryItem> {
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

        const apiPath = '/v1/pages/library/{id}'.replace('{id}', id);
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
     * The one write in this app whose blast radius is not a single page. Delivery expands a library reference against this row every time it serves, so replacing `tree` re-renders every page that points at the item — published ones included — without any of them being edited, republished or even touched. Nothing warns you first and no revision records it, because the pages did not change; the item did. Changing `label` or `bundle` only moves the item around the picker. Detaching one page from the item, so it keeps a copy of its own, is an editor mutation and not this route.
     *
     * @param {string} params.id - The library item id.
     * @param {string} params.bundle - The block type this item instantiates. Changing it moves the item to a different part of the picker.
     * @param {string} params.label - What the item is called in the picker.
     * @param {object} params.metadata - The item's own bag, replaced wholesale. This route is the only way to write it — the library item itself is made by the `make_reusable` editor step, which writes none — so an importer creates the item and then names it here.
     * @param {object} params.tree - A block and its whole subtree, serialized. Produced by the editor when a selection is made reusable or saved as a template, and instantiated back into real blocks when one is inserted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     */
    pagesLibraryUpdate(params: { id: string, bundle?: string, label?: string, metadata?: object, tree?: object }): Promise<Models.LibraryItem>;
    /**
     * The one write in this app whose blast radius is not a single page. Delivery expands a library reference against this row every time it serves, so replacing `tree` re-renders every page that points at the item — published ones included — without any of them being edited, republished or even touched. Nothing warns you first and no revision records it, because the pages did not change; the item did. Changing `label` or `bundle` only moves the item around the picker. Detaching one page from the item, so it keeps a copy of its own, is an editor mutation and not this route.
     *
     * @param {string} id - The library item id.
     * @param {string} bundle - The block type this item instantiates. Changing it moves the item to a different part of the picker.
     * @param {string} label - What the item is called in the picker.
     * @param {object} metadata - The item's own bag, replaced wholesale. This route is the only way to write it — the library item itself is made by the `make_reusable` editor step, which writes none — so an importer creates the item and then names it here.
     * @param {object} tree - A block and its whole subtree, serialized. Produced by the editor when a selection is made reusable or saved as a template, and instantiated back into real blocks when one is inserted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryUpdate(id: string, bundle?: string, label?: string, metadata?: object, tree?: object): Promise<Models.LibraryItem>;
    pagesLibraryUpdate(
        paramsOrFirst: { id: string, bundle?: string, label?: string, metadata?: object, tree?: object } | string,
        ...rest: [(string)?, (string)?, (object)?, (object)?]    
    ): Promise<Models.LibraryItem> {
        let params: { id: string, bundle?: string, label?: string, metadata?: object, tree?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, bundle?: string, label?: string, metadata?: object, tree?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                bundle: rest[0] as string,
                label: rest[1] as string,
                metadata: rest[2] as object,
                tree: rest[3] as object            
            };
        }
        
        const id = params.id;
        const bundle = params.bundle;
        const label = params.label;
        const metadata = params.metadata;
        const tree = params.tree;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/pages/library/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof bundle !== 'undefined') {
            apiPayload['bundle'] = bundle;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof tree !== 'undefined') {
            apiPayload['tree'] = Client.toWireKeys(tree, {"fragmentName":{"wire":"fragment_name","children":null},"propsI18n":{"wire":"props_i18n","children":null}});
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
     * The management view of the menus a tenant keeps — `main`, `footer`, `account` and whatever else the theme asks for, each with the key it is looked up by. This route reads no filter at all — a `?menu_key=` is ignored, which the empty `filter` echo shows — so fetch a page and pick, or address one by id.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesMenusList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * The management view of the menus a tenant keeps — `main`, `footer`, `account` and whatever else the theme asks for, each with the key it is looked up by. This route reads no filter at all — a `?menu_key=` is ignored, which the empty `filter` echo shows — so fetch a page and pick, or address one by id.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusList(limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesMenusList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/pages/menus';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * Writes a menu by its KEY rather than by its id, which is what makes theme seeding safe to repeat: a key the tenant already has has its label and items replaced in place, a key it does not have is created. `items` is replaced wholesale and never merged, so sending an empty list empties the navigation. One caveat worth reading before you rely on the idempotence: the key's uniqueness is this route's doing and not the database's — `menu_key` carries an index but no unique constraint — so a duplicate key created any other way leaves this route updating whichever row it finds first.
     *
     * @param {string} params.label - What this menu is called for the people who edit it. Required on a create; an update keeps the label it had when this is left out.
     * @param {string} params.menuKey - The stable slot the theme asks for this menu by. Idempotency is keyed on it: sending an existing key replaces that menu instead of creating a second one.
     * @param {Models.PageMenuItem[]} params.items - The ordered navigation tree. Replaces the stored one completely.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusUpsert(params: { label: string, menuKey: string, items?: Models.PageMenuItem[] }): Promise<Models.Menu>;
    /**
     * Writes a menu by its KEY rather than by its id, which is what makes theme seeding safe to repeat: a key the tenant already has has its label and items replaced in place, a key it does not have is created. `items` is replaced wholesale and never merged, so sending an empty list empties the navigation. One caveat worth reading before you rely on the idempotence: the key's uniqueness is this route's doing and not the database's — `menu_key` carries an index but no unique constraint — so a duplicate key created any other way leaves this route updating whichever row it finds first.
     *
     * @param {string} label - What this menu is called for the people who edit it. Required on a create; an update keeps the label it had when this is left out.
     * @param {string} menuKey - The stable slot the theme asks for this menu by. Idempotency is keyed on it: sending an existing key replaces that menu instead of creating a second one.
     * @param {Models.PageMenuItem[]} items - The ordered navigation tree. Replaces the stored one completely.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusUpsert(label: string, menuKey: string, items?: Models.PageMenuItem[]): Promise<Models.Menu>;
    pagesMenusUpsert(
        paramsOrFirst: { label: string, menuKey: string, items?: Models.PageMenuItem[] } | string,
        ...rest: [(string)?, (Models.PageMenuItem[])?]    
    ): Promise<Models.Menu> {
        let params: { label: string, menuKey: string, items?: Models.PageMenuItem[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { label: string, menuKey: string, items?: Models.PageMenuItem[] };
        } else {
            params = {
                label: paramsOrFirst as string,
                menuKey: rest[0] as string,
                items: rest[1] as Models.PageMenuItem[]            
            };
        }
        
        const label = params.label;
        const menuKey = params.menuKey;
        const items = params.items;

        if (typeof label === 'undefined') {
            throw new RevenexxException('Missing required parameter: "label"');
        }
        if (typeof menuKey === 'undefined') {
            throw new RevenexxException('Missing required parameter: "menuKey"');
        }

        const apiPath = '/v1/pages/menus';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof menuKey !== 'undefined') {
            apiPayload['menuKey'] = menuKey;
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
     * Writes the tombstone. The menu drops out of the management list and out of `GET /pages/delivery/menus` in the same moment, so a theme that reads its key gets nothing back and renders nothing — there is no fallback and no error a storefront could act on. The key is free immediately, which means re-seeding the theme is the way back. Check what reads the key before striking it.
     *
     * @param {string} params.id - The menu row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesMenusDelete(params: { id: string }): Promise<{}>;
    /**
     * Writes the tombstone. The menu drops out of the management list and out of `GET /pages/delivery/menus` in the same moment, so a theme that reads its key gets nothing back and renders nothing — there is no fallback and no error a storefront could act on. The key is free immediately, which means re-seeding the theme is the way back. Check what reads the key before striking it.
     *
     * @param {string} id - The menu row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusDelete(id: string): Promise<{}>;
    pagesMenusDelete(
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

        const apiPath = '/v1/pages/menus/{id}'.replace('{id}', id);
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
     * One menu and its whole item tree — the ordered links a theme renders as its header, footer or account navigation. `items` is nested, not one level, so this is the entire navigation for that key in a single read. Addressed by ROW ID here; the key a theme knows it by is `menu_key` on the body, and the route that works by key is the upsert.
     *
     * @param {string} params.id - The menu row id — not the menu key.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusGet(params: { id: string }): Promise<Models.Menu>;
    /**
     * One menu and its whole item tree — the ordered links a theme renders as its header, footer or account navigation. `items` is nested, not one level, so this is the entire navigation for that key in a single read. Addressed by ROW ID here; the key a theme knows it by is `menu_key` on the body, and the route that works by key is the upsert.
     *
     * @param {string} id - The menu row id — not the menu key.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusGet(id: string): Promise<Models.Menu>;
    pagesMenusGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Menu> {
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

        const apiPath = '/v1/pages/menus/{id}'.replace('{id}', id);
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
     * The same write as the upsert, for a caller that already holds the row id — use this when editing a menu a person picked from a list, and the upsert when reconciling a theme's defaults. `menu_key` is deliberately not editable here: the key is the handle every theme reads the menu by, so changing it would empty whatever is rendering that key without anything reporting an error.
     *
     * @param {string} params.id - The menu row id.
     * @param {Models.PageMenuItem[]} params.items - The ordered navigation tree. Replaces the stored one completely.
     * @param {string} params.label - What this menu is called for the people who edit it.
     * @param {object} params.metadata - The menu's own bag, replaced wholesale. This route is the only way to write it — the upsert reads `menuKey`, `label` and `items` and nothing else — so a caller that seeds a menu by key names its metadata here afterwards.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusUpdate(params: { id: string, items?: Models.PageMenuItem[], label?: string, metadata?: object }): Promise<Models.Menu>;
    /**
     * The same write as the upsert, for a caller that already holds the row id — use this when editing a menu a person picked from a list, and the upsert when reconciling a theme's defaults. `menu_key` is deliberately not editable here: the key is the handle every theme reads the menu by, so changing it would empty whatever is rendering that key without anything reporting an error.
     *
     * @param {string} id - The menu row id.
     * @param {Models.PageMenuItem[]} items - The ordered navigation tree. Replaces the stored one completely.
     * @param {string} label - What this menu is called for the people who edit it.
     * @param {object} metadata - The menu's own bag, replaced wholesale. This route is the only way to write it — the upsert reads `menuKey`, `label` and `items` and nothing else — so a caller that seeds a menu by key names its metadata here afterwards.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusUpdate(id: string, items?: Models.PageMenuItem[], label?: string, metadata?: object): Promise<Models.Menu>;
    pagesMenusUpdate(
        paramsOrFirst: { id: string, items?: Models.PageMenuItem[], label?: string, metadata?: object } | string,
        ...rest: [(Models.PageMenuItem[])?, (string)?, (object)?]    
    ): Promise<Models.Menu> {
        let params: { id: string, items?: Models.PageMenuItem[], label?: string, metadata?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, items?: Models.PageMenuItem[], label?: string, metadata?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                items: rest[0] as Models.PageMenuItem[],
                label: rest[1] as string,
                metadata: rest[2] as object            
            };
        }
        
        const id = params.id;
        const items = params.items;
        const label = params.label;
        const metadata = params.metadata;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/pages/menus/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
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
     * The EDITORIAL index — every live page of the tenant, whatever its status, newest change first. This is the list the Cockpit shows a person: drafts and archived pages are in it, and a row here says nothing about whether a visitor can see the page, because a published status without a published revision still delivers nothing. A storefront wants `GET /pages/delivery/pages` instead, which answers only what is actually servable. Soft-deleted pages are not returned unless `?deleted=only` asks for the trash instead: then ONLY soft-deleted pages come back, most recently deleted first, each carrying its `deleted_at`, and `POST /pages/pages/{id}/restore` brings one back. The two collections never mix in one answer.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.bundle - Exact page type. The value set belongs to the active theme, so this app constrains it to a non-empty string and nothing more.
     * @param {PageStatus} params.status - Exact lifecycle status.
     * @param {string} params.q - Case-insensitive substring search over the page title. Runs in the query, so `page.total` counts the matches. Empty means no search.
     * @param {Deleted} params.deleted - Send `only` for the trash: soft-deleted pages instead of live ones, default order `deleted_at.desc`. Every other filter, the search and `order` apply as on the live list. Any other value is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesList(params?: { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string, deleted?: Deleted }): Promise<{}>;
    /**
     * The EDITORIAL index — every live page of the tenant, whatever its status, newest change first. This is the list the Cockpit shows a person: drafts and archived pages are in it, and a row here says nothing about whether a visitor can see the page, because a published status without a published revision still delivers nothing. A storefront wants `GET /pages/delivery/pages` instead, which answers only what is actually servable. Soft-deleted pages are not returned unless `?deleted=only` asks for the trash instead: then ONLY soft-deleted pages come back, most recently deleted first, each carrying its `deleted_at`, and `POST /pages/pages/{id}/restore` brings one back. The two collections never mix in one answer.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} bundle - Exact page type. The value set belongs to the active theme, so this app constrains it to a non-empty string and nothing more.
     * @param {PageStatus} status - Exact lifecycle status.
     * @param {string} q - Case-insensitive substring search over the page title. Runs in the query, so `page.total` counts the matches. Empty means no search.
     * @param {Deleted} deleted - Send `only` for the trash: soft-deleted pages instead of live ones, default order `deleted_at.desc`. Every other filter, the search and `order` apply as on the live list. Any other value is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesList(limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string, deleted?: Deleted): Promise<{}>;
    pagesPagesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string, deleted?: Deleted } | number,
        ...rest: [(number)?, (string)?, (string)?, (PageStatus)?, (string)?, (Deleted)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string, deleted?: Deleted };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string, deleted?: Deleted };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                bundle: rest[2] as string,
                status: rest[3] as PageStatus,
                q: rest[4] as string,
                deleted: rest[5] as Deleted            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const bundle = params.bundle;
        const status = params.status;
        const q = params.q;
        const deleted = params.deleted;


        const apiPath = '/v1/pages/pages';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof bundle !== 'undefined') {
            apiPayload['bundle'] = bundle;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof q !== 'undefined') {
            apiPayload['q'] = q;
        }
        if (typeof deleted !== 'undefined') {
            apiPayload['deleted'] = deleted;
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
     * Writes two rows, not one: the page itself and the translation row for its source language, so a page is never without the language it was authored in and `GET /pages/delivery/page?slug=` can match a localized URL from the first moment. Everything the caller leaves out comes from the tenant's settings, not from a literal in this app: `bundle` from default_page_bundle, `sourceLanguage` from default_source_language (resolved for the request's market), and the status of both the page and its source translation from default_page_status (draft | published).
     *
     * @param {string} params.title - What the page is called, in its source language. Shown in the editorial list and searched by `?q=`.
     * @param {string} params.bundle - The page type. Omit to take the default_page_bundle setting.
     * @param {object} params.hostOptions - Page-level blökkli display options as a flat `option key → value` map. Theme-defined; usually left out and set later from the editor.
     * @param {object} params.meta - The page's metadata bag (SEO and social fields). Stored and handed back untouched — this app reads no key of it, so the theme decides what goes in.
     * @param {string} params.slug - The path segment the storefront routes it under, without a leading slash. Unique per tenant among live pages; omit or send null for a page reached only by id. Nothing here derives one from the title.
     * @param {string} params.sourceLanguage - The language you are authoring in, and the fallback for every later translation. Omit to take the default_source_language setting for the request market.
     * @param {string} params.templateId - Start from a template instead of an empty page: its blocks become the page's blocks, with new ids, in the template's `field_name` (or `content` when it has none), and the page takes the template's `page_bundle` as its type. Nothing is published — the page starts at default_page_status like any other. `GET /pages/templates?page_bundle=` lists the templates for a type, and `is_default` marks the one to offer first. Omit or send null for an empty page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesCreate(params: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string, templateId?: string }): Promise<Models.Page>;
    /**
     * Writes two rows, not one: the page itself and the translation row for its source language, so a page is never without the language it was authored in and `GET /pages/delivery/page?slug=` can match a localized URL from the first moment. Everything the caller leaves out comes from the tenant's settings, not from a literal in this app: `bundle` from default_page_bundle, `sourceLanguage` from default_source_language (resolved for the request's market), and the status of both the page and its source translation from default_page_status (draft | published).
     *
     * @param {string} title - What the page is called, in its source language. Shown in the editorial list and searched by `?q=`.
     * @param {string} bundle - The page type. Omit to take the default_page_bundle setting.
     * @param {object} hostOptions - Page-level blökkli display options as a flat `option key → value` map. Theme-defined; usually left out and set later from the editor.
     * @param {object} meta - The page's metadata bag (SEO and social fields). Stored and handed back untouched — this app reads no key of it, so the theme decides what goes in.
     * @param {string} slug - The path segment the storefront routes it under, without a leading slash. Unique per tenant among live pages; omit or send null for a page reached only by id. Nothing here derives one from the title.
     * @param {string} sourceLanguage - The language you are authoring in, and the fallback for every later translation. Omit to take the default_source_language setting for the request market.
     * @param {string} templateId - Start from a template instead of an empty page: its blocks become the page's blocks, with new ids, in the template's `field_name` (or `content` when it has none), and the page takes the template's `page_bundle` as its type. Nothing is published — the page starts at default_page_status like any other. `GET /pages/templates?page_bundle=` lists the templates for a type, and `is_default` marks the one to offer first. Omit or send null for an empty page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesCreate(title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string, templateId?: string): Promise<Models.Page>;
    pagesPagesCreate(
        paramsOrFirst: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string, templateId?: string } | string,
        ...rest: [(string)?, (object)?, (object)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Page> {
        let params: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string, templateId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string, templateId?: string };
        } else {
            params = {
                title: paramsOrFirst as string,
                bundle: rest[0] as string,
                hostOptions: rest[1] as object,
                meta: rest[2] as object,
                slug: rest[3] as string,
                sourceLanguage: rest[4] as string,
                templateId: rest[5] as string            
            };
        }
        
        const title = params.title;
        const bundle = params.bundle;
        const hostOptions = params.hostOptions;
        const meta = params.meta;
        const slug = params.slug;
        const sourceLanguage = params.sourceLanguage;
        const templateId = params.templateId;

        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/pages/pages';
        const apiPayload: Payload = {};
        if (typeof bundle !== 'undefined') {
            apiPayload['bundle'] = bundle;
        }
        if (typeof hostOptions !== 'undefined') {
            apiPayload['hostOptions'] = hostOptions;
        }
        if (typeof meta !== 'undefined') {
            apiPayload['meta'] = meta;
        }
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
        }
        if (typeof sourceLanguage !== 'undefined') {
            apiPayload['sourceLanguage'] = sourceLanguage;
        }
        if (typeof templateId !== 'undefined') {
            apiPayload['templateId'] = templateId;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * Writes a tombstone. The page leaves every list, every read and all delivery at once, and its slug is immediately free for another page — the unique index counts live rows only. Nothing is erased: the translations, blocks, edit state, revisions, comments and preview grants that hang off the page all keep their rows, because their `on delete cascade` belongs to a hard delete and this is not one. So a page comes back intact through `POST /pages/pages/{id}/restore`, and until then it is listed in the trash at `GET /pages/pages?deleted=only`.
     *
     * @param {string} params.id - The page id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesDelete(params: { id: string }): Promise<{}>;
    /**
     * Writes a tombstone. The page leaves every list, every read and all delivery at once, and its slug is immediately free for another page — the unique index counts live rows only. Nothing is erased: the translations, blocks, edit state, revisions, comments and preview grants that hang off the page all keep their rows, because their `on delete cascade` belongs to a hard delete and this is not one. So a page comes back intact through `POST /pages/pages/{id}/restore`, and until then it is listed in the trash at `GET /pages/pages?deleted=only`.
     *
     * @param {string} id - The page id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesDelete(id: string): Promise<{}>;
    pagesPagesDelete(
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

        const apiPath = '/v1/pages/pages/{id}'.replace('{id}', id);
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
     * One page RECORD: what it is called, where it routes, what type it is, which revision is live. Not its content — the blocks are not on this row and no expansion here returns them. The editor reads them with `GET /pages/editor/{page_id}/state`, a renderer with `GET /pages/delivery/page`. A soft-deleted page answers 404 exactly like one that never existed, so this is also the check for whether an id is still good.
     *
     * @param {string} params.id - The page id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesGet(params: { id: string }): Promise<Models.Page>;
    /**
     * One page RECORD: what it is called, where it routes, what type it is, which revision is live. Not its content — the blocks are not on this row and no expansion here returns them. The editor reads them with `GET /pages/editor/{page_id}/state`, a renderer with `GET /pages/delivery/page`. A soft-deleted page answers 404 exactly like one that never existed, so this is also the check for whether an id is still good.
     *
     * @param {string} id - The page id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesGet(id: string): Promise<Models.Page>;
    pagesPagesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Page> {
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

        const apiPath = '/v1/pages/pages/{id}'.replace('{id}', id);
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
     * Corrects the page RECORD — the five fields an editor changes without opening the visual editor, which are `title`, `slug`, `status`, `meta` and `bundle`, and no others. Anything else in the body is dropped rather than refused, and the block tree is unreachable from here by design: content moves only through the editor's mutation log, so a caller cannot half-edit a page behind the undo history's back. Two consequences worth knowing before you call it: a slug is unique among live pages, so claiming one that is held answers 409; and setting `status` to published does NOT put anything in front of a visitor — delivery needs a revision, which only `POST /pages/editor/{page_id}/publish` writes.
     *
     * @param {string} params.id - The page id.
     * @param {string} params.bundle - The page type. Changing it changes which template the theme renders.
     * @param {object} params.meta - The page's metadata bag. Replaced wholesale, not merged.
     * @param {string} params.slug - The path segment the storefront routes it under. Sending a slug another live page holds answers 409; sending null makes the page unreachable by path.
     * @param {PageStatus} params.status - The lifecycle status. Setting `published` here does NOT publish content — delivery still needs a revision, which only `POST /pages/editor/{page_id}/publish` writes.
     * @param {string} params.title - The page title in its source language.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesUpdate(params: { id: string, bundle?: string, meta?: object, slug?: string, status?: PageStatus, title?: string }): Promise<Models.Page>;
    /**
     * Corrects the page RECORD — the five fields an editor changes without opening the visual editor, which are `title`, `slug`, `status`, `meta` and `bundle`, and no others. Anything else in the body is dropped rather than refused, and the block tree is unreachable from here by design: content moves only through the editor's mutation log, so a caller cannot half-edit a page behind the undo history's back. Two consequences worth knowing before you call it: a slug is unique among live pages, so claiming one that is held answers 409; and setting `status` to published does NOT put anything in front of a visitor — delivery needs a revision, which only `POST /pages/editor/{page_id}/publish` writes.
     *
     * @param {string} id - The page id.
     * @param {string} bundle - The page type. Changing it changes which template the theme renders.
     * @param {object} meta - The page's metadata bag. Replaced wholesale, not merged.
     * @param {string} slug - The path segment the storefront routes it under. Sending a slug another live page holds answers 409; sending null makes the page unreachable by path.
     * @param {PageStatus} status - The lifecycle status. Setting `published` here does NOT publish content — delivery still needs a revision, which only `POST /pages/editor/{page_id}/publish` writes.
     * @param {string} title - The page title in its source language.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesUpdate(id: string, bundle?: string, meta?: object, slug?: string, status?: PageStatus, title?: string): Promise<Models.Page>;
    pagesPagesUpdate(
        paramsOrFirst: { id: string, bundle?: string, meta?: object, slug?: string, status?: PageStatus, title?: string } | string,
        ...rest: [(string)?, (object)?, (string)?, (PageStatus)?, (string)?]    
    ): Promise<Models.Page> {
        let params: { id: string, bundle?: string, meta?: object, slug?: string, status?: PageStatus, title?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, bundle?: string, meta?: object, slug?: string, status?: PageStatus, title?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                bundle: rest[0] as string,
                meta: rest[1] as object,
                slug: rest[2] as string,
                status: rest[3] as PageStatus,
                title: rest[4] as string            
            };
        }
        
        const id = params.id;
        const bundle = params.bundle;
        const meta = params.meta;
        const slug = params.slug;
        const status = params.status;
        const title = params.title;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/pages/pages/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof bundle !== 'undefined') {
            apiPayload['bundle'] = bundle;
        }
        if (typeof meta !== 'undefined') {
            apiPayload['meta'] = meta;
        }
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * Creates a new page from what the source SHOWS: its blocks as they stand, which after a publish are the live tree, every language's title, its type, language, display options and metadata. An open draft on the source is not copied — it lives in the source's edit state, not in its blocks. Every block of the copy gets a new id, so editing the copy never touches the source, while a block that references a library item keeps referencing it. The copy is unpublished, has no revisions and no edit state, and starts at default_page_status. With an empty body (`{}`) its title is the source's plus a copy suffix in the source language and it has no slug, so it collides with nothing.
     *
     * @param {string} params.id - The page to copy.
     * @param {string} params.slug - The path segment to route the copy under. Omit or send null for none — the source's slug stays the source's. One another live page or a live page's translation holds answers 409.
     * @param {string} params.title - The copy's title in its source language. Omit for the source title plus `(Kopie)` / `(copy)`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesDuplicate(params: { id: string, slug?: string, title?: string }): Promise<Models.Page>;
    /**
     * Creates a new page from what the source SHOWS: its blocks as they stand, which after a publish are the live tree, every language's title, its type, language, display options and metadata. An open draft on the source is not copied — it lives in the source's edit state, not in its blocks. Every block of the copy gets a new id, so editing the copy never touches the source, while a block that references a library item keeps referencing it. The copy is unpublished, has no revisions and no edit state, and starts at default_page_status. With an empty body (`{}`) its title is the source's plus a copy suffix in the source language and it has no slug, so it collides with nothing.
     *
     * @param {string} id - The page to copy.
     * @param {string} slug - The path segment to route the copy under. Omit or send null for none — the source's slug stays the source's. One another live page or a live page's translation holds answers 409.
     * @param {string} title - The copy's title in its source language. Omit for the source title plus `(Kopie)` / `(copy)`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesDuplicate(id: string, slug?: string, title?: string): Promise<Models.Page>;
    pagesPagesDuplicate(
        paramsOrFirst: { id: string, slug?: string, title?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Page> {
        let params: { id: string, slug?: string, title?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, slug?: string, title?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                slug: rest[0] as string,
                title: rest[1] as string            
            };
        }
        
        const id = params.id;
        const slug = params.slug;
        const title = params.title;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/pages/pages/{id}/duplicate'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * Clears the tombstone, and that is the whole restore: a soft delete never touched the translations, blocks, edit state, revisions, comments or preview grants, so the page returns to every list, read and delivery exactly as it was, including its published revision. Only the slug can have moved on — deleting freed it, so another live page may hold it now. Then the page stays in the trash and the call answers 409; free or change the other page's slug and restore again.
     *
     * @param {string} params.id - The deleted page, as the trash lists it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesRestore(params: { id: string }): Promise<Models.Page>;
    /**
     * Clears the tombstone, and that is the whole restore: a soft delete never touched the translations, blocks, edit state, revisions, comments or preview grants, so the page returns to every list, read and delivery exactly as it was, including its published revision. Only the slug can have moved on — deleting freed it, so another live page may hold it now. Then the page stays in the trash and the call answers 409; free or change the other page's slug and restore again.
     *
     * @param {string} id - The deleted page, as the trash lists it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesRestore(id: string): Promise<Models.Page>;
    pagesPagesRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Page> {
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

        const apiPath = '/v1/pages/pages/{id}/restore'.replace('{id}', id);
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
     * One entry per publication, newest first, which is the order a history is read in and the one this route sorts by unless `order` says otherwise. The `snapshot` — the whole published page, in every language — is deliberately not in the index: it is page-sized, and nothing that renders a history needs it.
     *
     * @param {string} params.id - The page whose history to read.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.label - Exact revision label — the name a publication was made under. An equality, not a search.
     * @param {string} params.createdBy - Exact user id of whoever published.
     * @param {string} params.createdByName - Exact display name recorded at publish time.
     * @param {string} params.createdAt - Exact publication timestamp, RFC 3339. Equality only — this data plane has no range operator, so walk the history with `order=created_at.desc` and `limit` instead.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesRevisions(params: { id: string, limit?: number, offset?: number, order?: string, label?: string, createdBy?: string, createdByName?: string, createdAt?: string }): Promise<{}>;
    /**
     * One entry per publication, newest first, which is the order a history is read in and the one this route sorts by unless `order` says otherwise. The `snapshot` — the whole published page, in every language — is deliberately not in the index: it is page-sized, and nothing that renders a history needs it.
     *
     * @param {string} id - The page whose history to read.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} label - Exact revision label — the name a publication was made under. An equality, not a search.
     * @param {string} createdBy - Exact user id of whoever published.
     * @param {string} createdByName - Exact display name recorded at publish time.
     * @param {string} createdAt - Exact publication timestamp, RFC 3339. Equality only — this data plane has no range operator, so walk the history with `order=created_at.desc` and `limit` instead.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesRevisions(id: string, limit?: number, offset?: number, order?: string, label?: string, createdBy?: string, createdByName?: string, createdAt?: string): Promise<{}>;
    pagesPagesRevisions(
        paramsOrFirst: { id: string, limit?: number, offset?: number, order?: string, label?: string, createdBy?: string, createdByName?: string, createdAt?: string } | string,
        ...rest: [(number)?, (number)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, limit?: number, offset?: number, order?: string, label?: string, createdBy?: string, createdByName?: string, createdAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, limit?: number, offset?: number, order?: string, label?: string, createdBy?: string, createdByName?: string, createdAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                limit: rest[0] as number,
                offset: rest[1] as number,
                order: rest[2] as string,
                label: rest[3] as string,
                createdBy: rest[4] as string,
                createdByName: rest[5] as string,
                createdAt: rest[6] as string            
            };
        }
        
        const id = params.id;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const label = params.label;
        const createdBy = params.createdBy;
        const createdByName = params.createdByName;
        const createdAt = params.createdAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/pages/pages/{id}/revisions'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof createdBy !== 'undefined') {
            apiPayload['created_by'] = createdBy;
        }
        if (typeof createdByName !== 'undefined') {
            apiPayload['created_by_name'] = createdByName;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
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
     * The target of a theme install: hand it the theme's default pages, menus, library items and site settings. In `fill` mode — the default — it creates whatever is missing and leaves everything else alone: idempotent by page `slug`, menu key, library item label and setting key, so re-running after a theme update adds only the new ones and never overwrites what an editor has since changed, and a setting the tenant has set keeps its value. In `reset` mode every section the body carries REPLACES the tenant's own content of that kind: the live pages, menus or library items are soft-deleted first, exactly as their delete does it — so they wait in the trash and can be restored — and the site settings are removed, then the section is seeded as in fill. A section the body leaves out is not touched in either mode, and nothing reaches beyond the calling tenant. A seeded page is published on the spot, immediately servable by delivery: the default_page_status setting deliberately does not apply, because a theme that activates with invisible pages looks broken.
     *
     * @param {object[]} params.library - The reusable blocks to create. Idempotent by label among live items. One without a label or without a block tree is reported under `skipped`.
     * @param {object[]} params.menus - The menus to create. One with no key or no label is reported under `skipped`.
     * @param {PagesSeedMode} params.mode - `fill` (the default) adds what is missing and keeps everything that exists. `reset` replaces every section that is sent — pages, menus and library items go to the trash first, site settings are removed — and must be asked for by name.
     * @param {object[]} params.pages - The pages to create. One that has no `slug` or no `title` is reported under `skipped` rather than refused, so one bad entry never loses the rest.
     * @param {object} params.settings - Site settings by key — the same values `PUT /pages/settings/site/{key}` stores. In fill only keys the tenant has not set are written; in reset every existing key is removed first. A key that is not a valid setting name, an empty value or one over 128 KiB is reported under `skipped`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SeedResult>}
     */
    pagesSeed(params?: { library?: object[], menus?: object[], mode?: PagesSeedMode, pages?: object[], settings?: object }): Promise<Models.SeedResult>;
    /**
     * The target of a theme install: hand it the theme's default pages, menus, library items and site settings. In `fill` mode — the default — it creates whatever is missing and leaves everything else alone: idempotent by page `slug`, menu key, library item label and setting key, so re-running after a theme update adds only the new ones and never overwrites what an editor has since changed, and a setting the tenant has set keeps its value. In `reset` mode every section the body carries REPLACES the tenant's own content of that kind: the live pages, menus or library items are soft-deleted first, exactly as their delete does it — so they wait in the trash and can be restored — and the site settings are removed, then the section is seeded as in fill. A section the body leaves out is not touched in either mode, and nothing reaches beyond the calling tenant. A seeded page is published on the spot, immediately servable by delivery: the default_page_status setting deliberately does not apply, because a theme that activates with invisible pages looks broken.
     *
     * @param {object[]} library - The reusable blocks to create. Idempotent by label among live items. One without a label or without a block tree is reported under `skipped`.
     * @param {object[]} menus - The menus to create. One with no key or no label is reported under `skipped`.
     * @param {PagesSeedMode} mode - `fill` (the default) adds what is missing and keeps everything that exists. `reset` replaces every section that is sent — pages, menus and library items go to the trash first, site settings are removed — and must be asked for by name.
     * @param {object[]} pages - The pages to create. One that has no `slug` or no `title` is reported under `skipped` rather than refused, so one bad entry never loses the rest.
     * @param {object} settings - Site settings by key — the same values `PUT /pages/settings/site/{key}` stores. In fill only keys the tenant has not set are written; in reset every existing key is removed first. A key that is not a valid setting name, an empty value or one over 128 KiB is reported under `skipped`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SeedResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesSeed(library?: object[], menus?: object[], mode?: PagesSeedMode, pages?: object[], settings?: object): Promise<Models.SeedResult>;
    pagesSeed(
        paramsOrFirst?: { library?: object[], menus?: object[], mode?: PagesSeedMode, pages?: object[], settings?: object } | object[],
        ...rest: [(object[])?, (PagesSeedMode)?, (object[])?, (object)?]    
    ): Promise<Models.SeedResult> {
        let params: { library?: object[], menus?: object[], mode?: PagesSeedMode, pages?: object[], settings?: object };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('library' in paramsOrFirst || 'menus' in paramsOrFirst || 'mode' in paramsOrFirst || 'pages' in paramsOrFirst || 'settings' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { library?: object[], menus?: object[], mode?: PagesSeedMode, pages?: object[], settings?: object };
        } else {
            params = {
                library: paramsOrFirst as object[],
                menus: rest[0] as object[],
                mode: rest[1] as PagesSeedMode,
                pages: rest[2] as object[],
                settings: rest[3] as object            
            };
        }
        
        const library = params.library;
        const menus = params.menus;
        const mode = params.mode;
        const pages = params.pages;
        const settings = params.settings;


        const apiPath = '/v1/pages/seed';
        const apiPayload: Payload = {};
        if (typeof library !== 'undefined') {
            apiPayload['library'] = Client.toWireKeys(library, {"tree":{"wire":"tree","children":{"fragmentName":{"wire":"fragment_name","children":null},"propsI18n":{"wire":"props_i18n","children":null}}}});
        }
        if (typeof menus !== 'undefined') {
            apiPayload['menus'] = menus;
        }
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof pages !== 'undefined') {
            apiPayload['pages'] = Client.toWireKeys(pages, {"blocks":{"wire":"blocks","children":{"fragmentName":{"wire":"fragment_name","children":null},"propsI18n":{"wire":"props_i18n","children":null}}}});
        }
        if (typeof settings !== 'undefined') {
            apiPayload['settings'] = settings;
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
     * Every site setting the tenant has set, ordered by key — what a theme styles the whole storefront with: its appearance, its design tokens, its custom CSS. Not paged: a tenant holds a handful of keys, and this is the whole set in one read. A key nobody set is simply absent here; `GET /pages/delivery/site-settings` is the read that answers it as `null`.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesSettingsSiteList(): Promise<{}> {

        const apiPath = '/v1/pages/settings/site';
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
     * Takes the value away, so the key reads as unset again — absent from the list, `null` on delivery, which is where a theme falls back to its own default. Not a tombstone: there is nothing to restore, and setting the key again starts afresh.
     *
     * @param {string} params.key - The setting key: a lower-case letter, then letters and digits, 64 characters at most. The storefront themes read `appearance`, `design` and `customCss`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesSettingsSiteDelete(params: { key: string }): Promise<{}>;
    /**
     * Takes the value away, so the key reads as unset again — absent from the list, `null` on delivery, which is where a theme falls back to its own default. Not a tombstone: there is nothing to restore, and setting the key again starts afresh.
     *
     * @param {string} key - The setting key: a lower-case letter, then letters and digits, 64 characters at most. The storefront themes read `appearance`, `design` and `customCss`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesSettingsSiteDelete(key: string): Promise<{}>;
    pagesSettingsSiteDelete(
        paramsOrFirst: { key: string } | string    
    ): Promise<{}> {
        let params: { key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string };
        } else {
            params = {
                key: paramsOrFirst as string            
            };
        }
        
        const key = params.key;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/pages/settings/site/{key}'.replace('{key}', key);
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
     * One key, with who set it and when. A key the tenant never set answers 404 rather than an empty value, so an editor can tell "not set" from "set to nothing".
     *
     * @param {string} params.key - The setting key: a lower-case letter, then letters and digits, 64 characters at most. The storefront themes read `appearance`, `design` and `customCss`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SiteSetting>}
     */
    pagesSettingsSiteGet(params: { key: string }): Promise<Models.SiteSetting>;
    /**
     * One key, with who set it and when. A key the tenant never set answers 404 rather than an empty value, so an editor can tell "not set" from "set to nothing".
     *
     * @param {string} key - The setting key: a lower-case letter, then letters and digits, 64 characters at most. The storefront themes read `appearance`, `design` and `customCss`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SiteSetting>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesSettingsSiteGet(key: string): Promise<Models.SiteSetting>;
    pagesSettingsSiteGet(
        paramsOrFirst: { key: string } | string    
    ): Promise<Models.SiteSetting> {
        let params: { key: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string };
        } else {
            params = {
                key: paramsOrFirst as string            
            };
        }
        
        const key = params.key;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/pages/settings/site/{key}'.replace('{key}', key);
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
     * Stores the value under the key, creating the key or replacing its value — both answer 200 with the stored row, because after either call the key holds exactly what was sent. The value is replaced whole, never merged, and it is not checked against what a theme expects: this app stores JSON and the theme reading the key decides its shape. It reaches every storefront of the tenant at once, through `GET /pages/delivery/site-settings`.
     *
     * @param {string} params.key - The setting key: a lower-case letter, then letters and digits, 64 characters at most. The storefront themes read `appearance`, `design` and `customCss`.
     * @param {object} params.value - The value, as JSON. `appearance` and `design` hold objects, `customCss` a string; any other key holds whatever the theme reading it expects. At most 128 KiB serialized.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SiteSetting>}
     */
    pagesSettingsSitePut(params: { key: string, value: object }): Promise<Models.SiteSetting>;
    /**
     * Stores the value under the key, creating the key or replacing its value — both answer 200 with the stored row, because after either call the key holds exactly what was sent. The value is replaced whole, never merged, and it is not checked against what a theme expects: this app stores JSON and the theme reading the key decides its shape. It reaches every storefront of the tenant at once, through `GET /pages/delivery/site-settings`.
     *
     * @param {string} key - The setting key: a lower-case letter, then letters and digits, 64 characters at most. The storefront themes read `appearance`, `design` and `customCss`.
     * @param {object} value - The value, as JSON. `appearance` and `design` hold objects, `customCss` a string; any other key holds whatever the theme reading it expects. At most 128 KiB serialized.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SiteSetting>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesSettingsSitePut(key: string, value: object): Promise<Models.SiteSetting>;
    pagesSettingsSitePut(
        paramsOrFirst: { key: string, value: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.SiteSetting> {
        let params: { key: string, value: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string, value: object };
        } else {
            params = {
                key: paramsOrFirst as string,
                value: rest[0] as object            
            };
        }
        
        const key = params.key;
        const value = params.value;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new RevenexxException('Missing required parameter: "value"');
        }

        const apiPath = '/v1/pages/settings/site/{key}'.replace('{key}', key);
        const apiPayload: Payload = {};
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
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
     * Which records render with which page: one entry per product or category that has a page of its own as its template. Every other record renders with the theme's default template, so an absent record is not an error. Filter by `resource_type` for one kind of record, by `page_slug` for everything one page is the template of.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.resourceType - Exact record type — the assignments of every product, say.
     * @param {string} params.pageSlug - Exact page slug — which records render with this page.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplateAssignmentsList(params?: { limit?: number, offset?: number, order?: string, resourceType?: string, pageSlug?: string }): Promise<{}>;
    /**
     * Which records render with which page: one entry per product or category that has a page of its own as its template. Every other record renders with the theme's default template, so an absent record is not an error. Filter by `resource_type` for one kind of record, by `page_slug` for everything one page is the template of.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} resourceType - Exact record type — the assignments of every product, say.
     * @param {string} pageSlug - Exact page slug — which records render with this page.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplateAssignmentsList(limit?: number, offset?: number, order?: string, resourceType?: string, pageSlug?: string): Promise<{}>;
    pagesTemplateAssignmentsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, resourceType?: string, pageSlug?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, resourceType?: string, pageSlug?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, resourceType?: string, pageSlug?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                resourceType: rest[2] as string,
                pageSlug: rest[3] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const resourceType = params.resourceType;
        const pageSlug = params.pageSlug;


        const apiPath = '/v1/pages/template-assignments';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof resourceType !== 'undefined') {
            apiPayload['resource_type'] = resourceType;
        }
        if (typeof pageSlug !== 'undefined') {
            apiPayload['page_slug'] = pageSlug;
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
     * Takes the page away from the record, which then renders with the theme's default template again. The page itself is not touched. Not a tombstone: the assignment is gone, and assigning a page again starts afresh.
     *
     * @param {string} params.resourceType - The kind of record: `product`, `category`, … Lower case.
     * @param {string} params.resourceId - The record's id in the app that owns it. This app never looks it up.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplateAssignmentsDelete(params: { resourceType: string, resourceId: string }): Promise<{}>;
    /**
     * Takes the page away from the record, which then renders with the theme's default template again. The page itself is not touched. Not a tombstone: the assignment is gone, and assigning a page again starts afresh.
     *
     * @param {string} resourceType - The kind of record: `product`, `category`, … Lower case.
     * @param {string} resourceId - The record's id in the app that owns it. This app never looks it up.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplateAssignmentsDelete(resourceType: string, resourceId: string): Promise<{}>;
    pagesTemplateAssignmentsDelete(
        paramsOrFirst: { resourceType: string, resourceId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { resourceType: string, resourceId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resourceType: string, resourceId: string };
        } else {
            params = {
                resourceType: paramsOrFirst as string,
                resourceId: rest[0] as string            
            };
        }
        
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;

        if (typeof resourceType === 'undefined') {
            throw new RevenexxException('Missing required parameter: "resourceType"');
        }
        if (typeof resourceId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "resourceId"');
        }

        const apiPath = '/v1/pages/template-assignments/{resource_type}/{resource_id}'.replace('{resource_type}', resourceType).replace('{resource_id}', resourceId);
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
     * Makes a page the template one record renders with, replacing any page assigned before — the record is the address, so a second PUT moves it rather than adding another. The page is named by its slug and has to be a live page when the call is made; it need not be published yet, but the storefront only uses it once it is. Answers 200 with the stored assignment either way.
     *
     * @param {string} params.resourceType - The kind of record: `product`, `category`, … Lower case.
     * @param {string} params.resourceId - The record's id in the app that owns it. This app never looks it up.
     * @param {string} params.pageSlug - The slug of the page that renders as this record's template.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TemplateAssignment>}
     */
    pagesTemplateAssignmentsPut(params: { resourceType: string, resourceId: string, pageSlug: string }): Promise<Models.TemplateAssignment>;
    /**
     * Makes a page the template one record renders with, replacing any page assigned before — the record is the address, so a second PUT moves it rather than adding another. The page is named by its slug and has to be a live page when the call is made; it need not be published yet, but the storefront only uses it once it is. Answers 200 with the stored assignment either way.
     *
     * @param {string} resourceType - The kind of record: `product`, `category`, … Lower case.
     * @param {string} resourceId - The record's id in the app that owns it. This app never looks it up.
     * @param {string} pageSlug - The slug of the page that renders as this record's template.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TemplateAssignment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplateAssignmentsPut(resourceType: string, resourceId: string, pageSlug: string): Promise<Models.TemplateAssignment>;
    pagesTemplateAssignmentsPut(
        paramsOrFirst: { resourceType: string, resourceId: string, pageSlug: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.TemplateAssignment> {
        let params: { resourceType: string, resourceId: string, pageSlug: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resourceType: string, resourceId: string, pageSlug: string };
        } else {
            params = {
                resourceType: paramsOrFirst as string,
                resourceId: rest[0] as string,
                pageSlug: rest[1] as string            
            };
        }
        
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const pageSlug = params.pageSlug;

        if (typeof resourceType === 'undefined') {
            throw new RevenexxException('Missing required parameter: "resourceType"');
        }
        if (typeof resourceId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "resourceId"');
        }
        if (typeof pageSlug === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageSlug"');
        }

        const apiPath = '/v1/pages/template-assignments/{resource_type}/{resource_id}'.replace('{resource_type}', resourceType).replace('{resource_id}', resourceId);
        const apiPayload: Payload = {};
        if (typeof pageSlug !== 'undefined') {
            apiPayload['pageSlug'] = pageSlug;
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
     * Every column of a template is an exact-match filter here: `?page_bundle=standard&field_name=content` is how a picker asks for the templates offered in one place, and `?is_default=true` is how a "new page" flow finds the one to start from.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.id - Exact template id.
     * @param {string} params.label - Exact label. An equality, not a search — there is no substring search on this route.
     * @param {string} params.description - Exact description text. An equality, so it is the round-trip of the value a picker already showed, not a search.
     * @param {string} params.pageBundle - Exact page type the template is offered on. A template offered everywhere has no page_bundle and is not returned by this filter.
     * @param {string} params.fieldName - Exact field the template is offered in.
     * @param {boolean} params.isDefault - Whether the template is the starting point for new pages of its bundle.
     * @param {string} params.createdBy - Exact user id of whoever saved the template.
     * @param {string} params.createdAt - Exact creation timestamp, RFC 3339. Equality only — there is no range operator here, so walk the list with `order` instead.
     * @param {string} params.updatedAt - Exact last-change timestamp, RFC 3339. Equality only.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplatesList(params?: { limit?: number, offset?: number, order?: string, id?: string, label?: string, description?: string, pageBundle?: string, fieldName?: string, isDefault?: boolean, createdBy?: string, createdAt?: string, updatedAt?: string }): Promise<{}>;
    /**
     * Every column of a template is an exact-match filter here: `?page_bundle=standard&field_name=content` is how a picker asks for the templates offered in one place, and `?is_default=true` is how a "new page" flow finds the one to start from.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} id - Exact template id.
     * @param {string} label - Exact label. An equality, not a search — there is no substring search on this route.
     * @param {string} description - Exact description text. An equality, so it is the round-trip of the value a picker already showed, not a search.
     * @param {string} pageBundle - Exact page type the template is offered on. A template offered everywhere has no page_bundle and is not returned by this filter.
     * @param {string} fieldName - Exact field the template is offered in.
     * @param {boolean} isDefault - Whether the template is the starting point for new pages of its bundle.
     * @param {string} createdBy - Exact user id of whoever saved the template.
     * @param {string} createdAt - Exact creation timestamp, RFC 3339. Equality only — there is no range operator here, so walk the list with `order` instead.
     * @param {string} updatedAt - Exact last-change timestamp, RFC 3339. Equality only.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesList(limit?: number, offset?: number, order?: string, id?: string, label?: string, description?: string, pageBundle?: string, fieldName?: string, isDefault?: boolean, createdBy?: string, createdAt?: string, updatedAt?: string): Promise<{}>;
    pagesTemplatesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, label?: string, description?: string, pageBundle?: string, fieldName?: string, isDefault?: boolean, createdBy?: string, createdAt?: string, updatedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, label?: string, description?: string, pageBundle?: string, fieldName?: string, isDefault?: boolean, createdBy?: string, createdAt?: string, updatedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, label?: string, description?: string, pageBundle?: string, fieldName?: string, isDefault?: boolean, createdBy?: string, createdAt?: string, updatedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                label: rest[3] as string,
                description: rest[4] as string,
                pageBundle: rest[5] as string,
                fieldName: rest[6] as string,
                isDefault: rest[7] as boolean,
                createdBy: rest[8] as string,
                createdAt: rest[9] as string,
                updatedAt: rest[10] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const label = params.label;
        const description = params.description;
        const pageBundle = params.pageBundle;
        const fieldName = params.fieldName;
        const isDefault = params.isDefault;
        const createdBy = params.createdBy;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;


        const apiPath = '/v1/pages/templates';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof pageBundle !== 'undefined') {
            apiPayload['page_bundle'] = pageBundle;
        }
        if (typeof fieldName !== 'undefined') {
            apiPayload['field_name'] = fieldName;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof createdBy !== 'undefined') {
            apiPayload['created_by'] = createdBy;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * Removes the template row outright. This is the one delete in the app that is not a tombstone — `templates` carries no `deleted_at` — so it cannot be undone and the id will not come back. Nothing else breaks by it: pages built from the template hold their own copy of the blocks and never referenced the row.
     *
     * @param {string} params.id - The template id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplatesDelete(params: { id: string }): Promise<{}>;
    /**
     * Removes the template row outright. This is the one delete in the app that is not a tombstone — `templates` carries no `deleted_at` — so it cannot be undone and the id will not come back. Nothing else breaks by it: pages built from the template hold their own copy of the blocks and never referenced the row.
     *
     * @param {string} id - The template id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesDelete(id: string): Promise<{}>;
    pagesTemplatesDelete(
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

        const apiPath = '/v1/pages/templates/{id}'.replace('{id}', id);
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
     * The blocks a page would START from if an editor picked this template — read it to preview the insert. A template is a COPY source, the opposite of a library item: nothing links back from the pages already built from it, so this tells you what future pages get and nothing about existing ones.
     *
     * @param {string} params.id - The template id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesTemplatesGet(params: { id: string }): Promise<Models.Template>;
    /**
     * The blocks a page would START from if an editor picked this template — read it to preview the insert. A template is a COPY source, the opposite of a library item: nothing links back from the pages already built from it, so this tells you what future pages get and nothing about existing ones.
     *
     * @param {string} id - The template id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesGet(id: string): Promise<Models.Template>;
    pagesTemplatesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Template> {
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

        const apiPath = '/v1/pages/templates/{id}'.replace('{id}', id);
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
     * Edits what a future page will start from. Because templates copy rather than share, this reaches nothing that already exists — pages built from it keep the blocks they were handed, which is exactly the property that makes a template safe to edit and a library item dangerous. `is_default` is the one field with an effect past the picker: it decides what a new page of `page_bundle` starts with, and nothing here stops two templates of the same bundle from both claiming it, so which one wins is left to whoever reads the list.
     *
     * @param {string} params.id - The template id.
     * @param {string} params.description - A sentence about when to reach for it, shown next to the label.
     * @param {string} params.fieldName - The field this template is offered in. Null offers it in every field.
     * @param {boolean} params.isDefault - Whether a new page of this bundle starts from this template.
     * @param {string} params.label - What the template is called in the picker.
     * @param {string} params.pageBundle - The page type this template is offered on. Null offers it on every page type.
     * @param {Models.PageBlockTree[]} params.tree - The blocks the template inserts, in order. Replaces the stored tree completely.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesTemplatesUpdate(params: { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: Models.PageBlockTree[] }): Promise<Models.Template>;
    /**
     * Edits what a future page will start from. Because templates copy rather than share, this reaches nothing that already exists — pages built from it keep the blocks they were handed, which is exactly the property that makes a template safe to edit and a library item dangerous. `is_default` is the one field with an effect past the picker: it decides what a new page of `page_bundle` starts with, and nothing here stops two templates of the same bundle from both claiming it, so which one wins is left to whoever reads the list.
     *
     * @param {string} id - The template id.
     * @param {string} description - A sentence about when to reach for it, shown next to the label.
     * @param {string} fieldName - The field this template is offered in. Null offers it in every field.
     * @param {boolean} isDefault - Whether a new page of this bundle starts from this template.
     * @param {string} label - What the template is called in the picker.
     * @param {string} pageBundle - The page type this template is offered on. Null offers it on every page type.
     * @param {Models.PageBlockTree[]} tree - The blocks the template inserts, in order. Replaces the stored tree completely.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesUpdate(id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: Models.PageBlockTree[]): Promise<Models.Template>;
    pagesTemplatesUpdate(
        paramsOrFirst: { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: Models.PageBlockTree[] } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (Models.PageBlockTree[])?]    
    ): Promise<Models.Template> {
        let params: { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: Models.PageBlockTree[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: Models.PageBlockTree[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                fieldName: rest[1] as string,
                isDefault: rest[2] as boolean,
                label: rest[3] as string,
                pageBundle: rest[4] as string,
                tree: rest[5] as Models.PageBlockTree[]            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const fieldName = params.fieldName;
        const isDefault = params.isDefault;
        const label = params.label;
        const pageBundle = params.pageBundle;
        const tree = params.tree;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/pages/templates/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof fieldName !== 'undefined') {
            apiPayload['field_name'] = fieldName;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof pageBundle !== 'undefined') {
            apiPayload['page_bundle'] = pageBundle;
        }
        if (typeof tree !== 'undefined') {
            apiPayload['tree'] = Client.toWireKeys(tree, {"fragmentName":{"wire":"fragment_name","children":null},"propsI18n":{"wire":"props_i18n","children":null}});
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
     * Discovery for the vocabulary routes: the enums this app publishes, each with its name, its title and what it is for, and none of them unpacked — the permitted values are not on this route, only on the one that serves a single vocabulary. Names: edit-state-statuses, page-statuses, translation-statuses. Fetch one with GET /pages/vocabularies/{name}; a client holding the qualified pair 'pages.<name>' builds that URL from the pair alone.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PagesVocabularyIndex>}
     */
    pagesVocabulariesList(): Promise<Models.PagesVocabularyIndex> {

        const apiPath = '/v1/pages/vocabularies';
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
     * One vocabulary unpacked: every value the column permits, each with the title to show for it, the sentence explaining it and the badge tone to render it in — everything a select or a status pill needs, so nothing downstream keeps its own copy of the labels. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is the order a select should offer. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Names: edit-state-statuses, page-statuses, translation-statuses.
     *
     * @param {PagesVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PagesVocabulary>}
     */
    pagesVocabulariesGet(params: { name: PagesVocabulariesGetName }): Promise<Models.PagesVocabulary>;
    /**
     * One vocabulary unpacked: every value the column permits, each with the title to show for it, the sentence explaining it and the badge tone to render it in — everything a select or a status pill needs, so nothing downstream keeps its own copy of the labels. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is the order a select should offer. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Names: edit-state-statuses, page-statuses, translation-statuses.
     *
     * @param {PagesVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PagesVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesVocabulariesGet(name: PagesVocabulariesGetName): Promise<Models.PagesVocabulary>;
    pagesVocabulariesGet(
        paramsOrFirst: { name: PagesVocabulariesGetName } | PagesVocabulariesGetName    
    ): Promise<Models.PagesVocabulary> {
        let params: { name: PagesVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: PagesVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as PagesVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/pages/vocabularies/{name}'.replace('{name}', name);
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
}
