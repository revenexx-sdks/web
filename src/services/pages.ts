import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PageStatus } from '../enums/page-status';
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
     * @param {object} params.tree - A block and its whole subtree, serialized. Produced by the editor when a selection is made reusable or saved as a template, and instantiated back into real blocks when one is inserted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     */
    pagesLibraryUpdate(params: { id: string, bundle?: string, label?: string, tree?: object }): Promise<Models.LibraryItem>;
    /**
     * The one write in this app whose blast radius is not a single page. Delivery expands a library reference against this row every time it serves, so replacing `tree` re-renders every page that points at the item — published ones included — without any of them being edited, republished or even touched. Nothing warns you first and no revision records it, because the pages did not change; the item did. Changing `label` or `bundle` only moves the item around the picker. Detaching one page from the item, so it keeps a copy of its own, is an editor mutation and not this route.
     *
     * @param {string} id - The library item id.
     * @param {string} bundle - The block type this item instantiates. Changing it moves the item to a different part of the picker.
     * @param {string} label - What the item is called in the picker.
     * @param {object} tree - A block and its whole subtree, serialized. Produced by the editor when a selection is made reusable or saved as a template, and instantiated back into real blocks when one is inserted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryUpdate(id: string, bundle?: string, label?: string, tree?: object): Promise<Models.LibraryItem>;
    pagesLibraryUpdate(
        paramsOrFirst: { id: string, bundle?: string, label?: string, tree?: object } | string,
        ...rest: [(string)?, (string)?, (object)?]    
    ): Promise<Models.LibraryItem> {
        let params: { id: string, bundle?: string, label?: string, tree?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, bundle?: string, label?: string, tree?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                bundle: rest[0] as string,
                label: rest[1] as string,
                tree: rest[2] as object            
            };
        }
        
        const id = params.id;
        const bundle = params.bundle;
        const label = params.label;
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
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusUpdate(params: { id: string, items?: Models.PageMenuItem[], label?: string }): Promise<Models.Menu>;
    /**
     * The same write as the upsert, for a caller that already holds the row id — use this when editing a menu a person picked from a list, and the upsert when reconciling a theme's defaults. `menu_key` is deliberately not editable here: the key is the handle every theme reads the menu by, so changing it would empty whatever is rendering that key without anything reporting an error.
     *
     * @param {string} id - The menu row id.
     * @param {Models.PageMenuItem[]} items - The ordered navigation tree. Replaces the stored one completely.
     * @param {string} label - What this menu is called for the people who edit it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusUpdate(id: string, items?: Models.PageMenuItem[], label?: string): Promise<Models.Menu>;
    pagesMenusUpdate(
        paramsOrFirst: { id: string, items?: Models.PageMenuItem[], label?: string } | string,
        ...rest: [(Models.PageMenuItem[])?, (string)?]    
    ): Promise<Models.Menu> {
        let params: { id: string, items?: Models.PageMenuItem[], label?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, items?: Models.PageMenuItem[], label?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                items: rest[0] as Models.PageMenuItem[],
                label: rest[1] as string            
            };
        }
        
        const id = params.id;
        const items = params.items;
        const label = params.label;

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
     * The EDITORIAL index — every live page of the tenant, whatever its status, newest change first. This is the list the Cockpit shows a person: drafts and archived pages are in it, and a row here says nothing about whether a visitor can see the page, because a published status without a published revision still delivers nothing. A storefront wants `GET /pages/delivery/pages` instead, which answers only what is actually servable. Soft-deleted pages are never returned and the predicate is this route's own, not something a caller can switch off.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.bundle - Exact page type. The value set belongs to the active theme, so this app constrains it to a non-empty string and nothing more.
     * @param {PageStatus} params.status - Exact lifecycle status.
     * @param {string} params.q - Case-insensitive substring search over the page title. Runs in the query, so `page.total` counts the matches. Empty means no search.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesList(params?: { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string }): Promise<{}>;
    /**
     * The EDITORIAL index — every live page of the tenant, whatever its status, newest change first. This is the list the Cockpit shows a person: drafts and archived pages are in it, and a row here says nothing about whether a visitor can see the page, because a published status without a published revision still delivers nothing. A storefront wants `GET /pages/delivery/pages` instead, which answers only what is actually servable. Soft-deleted pages are never returned and the predicate is this route's own, not something a caller can switch off.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} bundle - Exact page type. The value set belongs to the active theme, so this app constrains it to a non-empty string and nothing more.
     * @param {PageStatus} status - Exact lifecycle status.
     * @param {string} q - Case-insensitive substring search over the page title. Runs in the query, so `page.total` counts the matches. Empty means no search.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesList(limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string): Promise<{}>;
    pagesPagesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (PageStatus)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, bundle?: string, status?: PageStatus, q?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                bundle: rest[2] as string,
                status: rest[3] as PageStatus,
                q: rest[4] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const bundle = params.bundle;
        const status = params.status;
        const q = params.q;


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
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesCreate(params: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string }): Promise<Models.Page>;
    /**
     * Writes two rows, not one: the page itself and the translation row for its source language, so a page is never without the language it was authored in and `GET /pages/delivery/page?slug=` can match a localized URL from the first moment. Everything the caller leaves out comes from the tenant's settings, not from a literal in this app: `bundle` from default_page_bundle, `sourceLanguage` from default_source_language (resolved for the request's market), and the status of both the page and its source translation from default_page_status (draft | published).
     *
     * @param {string} title - What the page is called, in its source language. Shown in the editorial list and searched by `?q=`.
     * @param {string} bundle - The page type. Omit to take the default_page_bundle setting.
     * @param {object} hostOptions - Page-level blökkli display options as a flat `option key → value` map. Theme-defined; usually left out and set later from the editor.
     * @param {object} meta - The page's metadata bag (SEO and social fields). Stored and handed back untouched — this app reads no key of it, so the theme decides what goes in.
     * @param {string} slug - The path segment the storefront routes it under, without a leading slash. Unique per tenant among live pages; omit or send null for a page reached only by id. Nothing here derives one from the title.
     * @param {string} sourceLanguage - The language you are authoring in, and the fallback for every later translation. Omit to take the default_source_language setting for the request market.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesCreate(title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string): Promise<Models.Page>;
    pagesPagesCreate(
        paramsOrFirst: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string } | string,
        ...rest: [(string)?, (object)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.Page> {
        let params: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string };
        } else {
            params = {
                title: paramsOrFirst as string,
                bundle: rest[0] as string,
                hostOptions: rest[1] as object,
                meta: rest[2] as object,
                slug: rest[3] as string,
                sourceLanguage: rest[4] as string            
            };
        }
        
        const title = params.title;
        const bundle = params.bundle;
        const hostOptions = params.hostOptions;
        const meta = params.meta;
        const slug = params.slug;
        const sourceLanguage = params.sourceLanguage;

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
     * Writes a tombstone. The page leaves every list, every read and all delivery at once, and its slug is immediately free for another page — the unique index counts live rows only. Nothing is erased: the translations, blocks, edit state, revisions, comments and preview grants that hang off the page all keep their rows, because their `on delete cascade` belongs to a hard delete and this is not one. So a page can be brought back intact by clearing `deleted_at` — but not through this app, which publishes no route that does it.
     *
     * @param {string} params.id - The page id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesDelete(params: { id: string }): Promise<{}>;
    /**
     * Writes a tombstone. The page leaves every list, every read and all delivery at once, and its slug is immediately free for another page — the unique index counts live rows only. Nothing is erased: the translations, blocks, edit state, revisions, comments and preview grants that hang off the page all keep their rows, because their `on delete cascade` belongs to a hard delete and this is not one. So a page can be brought back intact by clearing `deleted_at` — but not through this app, which publishes no route that does it.
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
     * The target of a theme activation hook: hand it the theme's default pages and menus and it creates whatever is missing. Idempotent by `slug` and by menu key — a slug or a key the tenant already holds is skipped rather than rewritten, so re-running after a theme update adds only the new ones and never overwrites what an editor has since changed. A seeded page is published on the spot, immediately servable by delivery: the default_page_status setting deliberately does not apply, because a theme that activates with invisible pages looks broken.
     *
     * @param {object[]} params.menus - The menus to create. One with no key or no label is reported under `skipped`.
     * @param {object[]} params.pages - The pages to create. One that has no `slug` or no `title` is reported under `skipped` rather than refused, so one bad entry never loses the rest.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SeedResult>}
     */
    pagesSeed(params?: { menus?: object[], pages?: object[] }): Promise<Models.SeedResult>;
    /**
     * The target of a theme activation hook: hand it the theme's default pages and menus and it creates whatever is missing. Idempotent by `slug` and by menu key — a slug or a key the tenant already holds is skipped rather than rewritten, so re-running after a theme update adds only the new ones and never overwrites what an editor has since changed. A seeded page is published on the spot, immediately servable by delivery: the default_page_status setting deliberately does not apply, because a theme that activates with invisible pages looks broken.
     *
     * @param {object[]} menus - The menus to create. One with no key or no label is reported under `skipped`.
     * @param {object[]} pages - The pages to create. One that has no `slug` or no `title` is reported under `skipped` rather than refused, so one bad entry never loses the rest.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SeedResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesSeed(menus?: object[], pages?: object[]): Promise<Models.SeedResult>;
    pagesSeed(
        paramsOrFirst?: { menus?: object[], pages?: object[] } | object[],
        ...rest: [(object[])?]    
    ): Promise<Models.SeedResult> {
        let params: { menus?: object[], pages?: object[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('menus' in paramsOrFirst || 'pages' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { menus?: object[], pages?: object[] };
        } else {
            params = {
                menus: paramsOrFirst as object[],
                pages: rest[0] as object[]            
            };
        }
        
        const menus = params.menus;
        const pages = params.pages;


        const apiPath = '/v1/pages/seed';
        const apiPayload: Payload = {};
        if (typeof menus !== 'undefined') {
            apiPayload['menus'] = menus;
        }
        if (typeof pages !== 'undefined') {
            apiPayload['pages'] = Client.toWireKeys(pages, {"blocks":{"wire":"blocks","children":{"fragmentName":{"wire":"fragment_name","children":null},"propsI18n":{"wire":"props_i18n","children":null}}}});
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
