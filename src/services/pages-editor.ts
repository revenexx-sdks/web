import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PageEditStateStatus } from '../enums/page-edit-state-status';

export class PagesEditor {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The drafts overview — the "what is unpublished right now" list, across every page: who holds it, since when, and whether it is parked for a date. Always newest-first — this route does not read `order`. An edit state whose page has been deleted is dropped from `items` but still counted in `total`.
     *
     * @param {PageEditStateStatus} params.status - Which kind of working copy to list. Omitted means `active` — the drafts somebody is actually holding, which is what this route is opened for.
     * @param {number} params.limit - Page size (default 50). Unlike the list routes this one applies no ceiling of its own.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorEditStates(params?: { status?: PageEditStateStatus, limit?: number, offset?: number }): Promise<{}>;
    /**
     * The drafts overview — the "what is unpublished right now" list, across every page: who holds it, since when, and whether it is parked for a date. Always newest-first — this route does not read `order`. An edit state whose page has been deleted is dropped from `items` but still counted in `total`.
     *
     * @param {PageEditStateStatus} status - Which kind of working copy to list. Omitted means `active` — the drafts somebody is actually holding, which is what this route is opened for.
     * @param {number} limit - Page size (default 50). Unlike the list routes this one applies no ceiling of its own.
     * @param {number} offset - Row offset for pagination (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorEditStates(status?: PageEditStateStatus, limit?: number, offset?: number): Promise<{}>;
    pagesEditorEditStates(
        paramsOrFirst?: { status?: PageEditStateStatus, limit?: number, offset?: number } | PageEditStateStatus,
        ...rest: [(number)?, (number)?]    
    ): Promise<{}> {
        let params: { status?: PageEditStateStatus, limit?: number, offset?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('status' in paramsOrFirst || 'limit' in paramsOrFirst || 'offset' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { status?: PageEditStateStatus, limit?: number, offset?: number };
        } else {
            params = {
                status: paramsOrFirst as PageEditStateStatus,
                limit: rest[0] as number,
                offset: rest[1] as number            
            };
        }
        
        const status = params.status;
        const limit = params.limit;
        const offset = params.offset;


        const apiPath = '/v1/pages/editor/edit-states';
        const apiPayload: Payload = {};
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
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
     * The translation is the tenant's provider's, not this app's, and a tenant that has configured none gets no translation at all. The endpoint comes from the tenant setting `translate_endpoint` (PAGES_TRANSLATE_ENDPOINT remains a fallback). The bearer token does NOT: the gateway masks every setting flagged `sensitive`, so a key stored as one could never be read back — it stays the PAGES_TRANSLATE_KEY function secret. This app does not translate anything itself; it forwards `items` and hands the answer back.
     *
     * @param {object[]} params.items - The strings to translate. This app reads no element of the list — the provider defines the contract, and the blökkli adapter sends the fields below.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorTranslate(params?: { items?: object[] }): Promise<{}>;
    /**
     * The translation is the tenant's provider's, not this app's, and a tenant that has configured none gets no translation at all. The endpoint comes from the tenant setting `translate_endpoint` (PAGES_TRANSLATE_ENDPOINT remains a fallback). The bearer token does NOT: the gateway masks every setting flagged `sensitive`, so a key stored as one could never be read back — it stays the PAGES_TRANSLATE_KEY function secret. This app does not translate anything itself; it forwards `items` and hands the answer back.
     *
     * @param {object[]} items - The strings to translate. This app reads no element of the list — the provider defines the contract, and the blökkli adapter sends the fields below.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorTranslate(items?: object[]): Promise<{}>;
    pagesEditorTranslate(
        paramsOrFirst?: { items?: object[] } | object[]    
    ): Promise<{}> {
        let params: { items?: object[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items?: object[] };
        } else {
            params = {
                items: paramsOrFirst as object[]            
            };
        }
        
        const items = params.items;


        const apiPath = '/v1/pages/editor/translate';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
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
     * Per-user editor preferences — one row per user, scoped to this app. Not tenant configuration: nothing here changes what the API does, only how one person's editor looks.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUserSettingsGet(): Promise<{}> {

        const apiPath = '/v1/pages/editor/user-settings';
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
     * Replaces the caller's preferences wholesale — this is not a merge, so send the whole bag.
     *
     * @param {object} params.settings - The whole preferences bag — replaced, not merged, so send all of it. Its keys vary by the editor build and this app reads none of them. Null or omitted stores `{}`, which is how a user resets their editor.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUserSettingsPut(params?: { settings?: object }): Promise<{}>;
    /**
     * Replaces the caller's preferences wholesale — this is not a merge, so send the whole bag.
     *
     * @param {object} settings - The whole preferences bag — replaced, not merged, so send all of it. Its keys vary by the editor build and this app reads none of them. Null or omitted stores `{}`, which is how a user resets their editor.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorUserSettingsPut(settings?: object): Promise<{}>;
    pagesEditorUserSettingsPut(
        paramsOrFirst?: { settings?: object } | object    
    ): Promise<{}> {
        let params: { settings?: object };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('settings' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { settings?: object };
        } else {
            params = {
                settings: paramsOrFirst as object            
            };
        }
        
        const settings = params.settings;


        const apiPath = '/v1/pages/editor/user-settings';
        const apiPayload: Payload = {};
        if (typeof settings !== 'undefined') {
            apiPayload['settings'] = settings;
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
     * Undo and redo. The pointer is the edit state's `current_index`, the position in the mutation log the page is materialized at, and this route is the only thing that moves it — `GET …/state?index=` looks at another position without going there. The log itself is never rewritten — only the pointer moves — so redo stays available until the next change is appended.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {number} params.index - The position in the mutation log to materialize at. `-1` undoes everything; the last position redoes everything. Values outside the log are clamped rather than refused.
     * @param {string} params.langcode - Which language the returned state should be resolved for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorHistory(params: { pageId: string, index: number, langcode?: string }): Promise<Models.MutationResponse>;
    /**
     * Undo and redo. The pointer is the edit state's `current_index`, the position in the mutation log the page is materialized at, and this route is the only thing that moves it — `GET …/state?index=` looks at another position without going there. The log itself is never rewritten — only the pointer moves — so redo stays available until the next change is appended.
     *
     * @param {string} pageId - The page being edited.
     * @param {number} index - The position in the mutation log to materialize at. `-1` undoes everything; the last position redoes everything. Values outside the log are clamped rather than refused.
     * @param {string} langcode - Which language the returned state should be resolved for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorHistory(pageId: string, index: number, langcode?: string): Promise<Models.MutationResponse>;
    pagesEditorHistory(
        paramsOrFirst: { pageId: string, index: number, langcode?: string } | string,
        ...rest: [(number)?, (string)?]    
    ): Promise<Models.MutationResponse> {
        let params: { pageId: string, index: number, langcode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, index: number, langcode?: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                index: rest[0] as number,
                langcode: rest[1] as string            
            };
        }
        
        const pageId = params.pageId;
        const index = params.index;
        const langcode = params.langcode;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof index === 'undefined') {
            throw new RevenexxException('Missing required parameter: "index"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/history'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof index !== 'undefined') {
            apiPayload['index'] = index;
        }
        if (typeof langcode !== 'undefined') {
            apiPayload['langcode'] = langcode;
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
     * The cheap poll behind "someone else is editing this page": one integer, the moment the open edit state last moved, in epoch seconds rather than as a timestamp so a comparison is a subtraction. Compare it with the `updatedAt` you last saw and re-fetch the state only when it moved.
     *
     * @param {string} params.pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorLastChanged(params: { pageId: string }): Promise<{}>;
    /**
     * The cheap poll behind "someone else is editing this page": one integer, the moment the open edit state last moved, in epoch seconds rather than as a timestamp so a comparison is a subtraction. Compare it with the `updatedAt` you last saw and re-fetch the state only when it moved.
     *
     * @param {string} pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorLastChanged(pageId: string): Promise<{}>;
    pagesEditorLastChanged(
        paramsOrFirst: { pageId: string } | string    
    ): Promise<{}> {
        let params: { pageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string };
        } else {
            params = {
                pageId: paramsOrFirst as string            
            };
        }
        
        const pageId = params.pageId;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/last-changed'.replace('{page_id}', pageId);
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
     * Take one change out of the replay without deleting it — "what would the page look like without this edit". The entry stays in the history and can be switched back on.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {boolean} params.enabled - Whether the entry takes part in the replay.
     * @param {number} params.index - The position in the mutation log to switch. Unknown positions answer 404.
     * @param {string} params.langcode - Which language the returned state should be resolved for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorMutationStatus(params: { pageId: string, enabled: boolean, index: number, langcode?: string }): Promise<Models.MutationResponse>;
    /**
     * Take one change out of the replay without deleting it — "what would the page look like without this edit". The entry stays in the history and can be switched back on.
     *
     * @param {string} pageId - The page being edited.
     * @param {boolean} enabled - Whether the entry takes part in the replay.
     * @param {number} index - The position in the mutation log to switch. Unknown positions answer 404.
     * @param {string} langcode - Which language the returned state should be resolved for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorMutationStatus(pageId: string, enabled: boolean, index: number, langcode?: string): Promise<Models.MutationResponse>;
    pagesEditorMutationStatus(
        paramsOrFirst: { pageId: string, enabled: boolean, index: number, langcode?: string } | string,
        ...rest: [(boolean)?, (number)?, (string)?]    
    ): Promise<Models.MutationResponse> {
        let params: { pageId: string, enabled: boolean, index: number, langcode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, enabled: boolean, index: number, langcode?: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                enabled: rest[0] as boolean,
                index: rest[1] as number,
                langcode: rest[2] as string            
            };
        }
        
        const pageId = params.pageId;
        const enabled = params.enabled;
        const index = params.index;
        const langcode = params.langcode;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof enabled === 'undefined') {
            throw new RevenexxException('Missing required parameter: "enabled"');
        }
        if (typeof index === 'undefined') {
            throw new RevenexxException('Missing required parameter: "index"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/mutation-status'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof index !== 'undefined') {
            apiPayload['index'] = index;
        }
        if (typeof langcode !== 'undefined') {
            apiPayload['langcode'] = langcode;
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
     * The one way page CONTENT changes. Each call appends one entry to the append-only log and answers the whole re-materialized state, so a client never re-fetches. A page nobody has opened yet needs no separate call to open it: the first mutation creates the edit state and takes ownership of it, and every later one asks for that ownership, so a second person editing the same page is refused until they take it over. Appending while the pointer sits mid-history discards the redo branch, exactly as an editor expects.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.plugin - Which kind of change this is — `add`, `move`, `delete`, `duplicate`, `update_field_value`, `update_options`, … An id this app does not implement is refused with 400 rather than stored, because the log has to replay.
     * @param {string} params.langcode - Which language the returned state should be resolved for. Not the language the change is written in — that lives in the payload.
     * @param {object} params.payload - The arguments of that change; the keys depend on the plugin (`add` takes `{ bundle, hostEntityType, hostEntityUuid, hostField }`, `move` takes `{ uuid, preceedingUuid }`, and so on). Anything non-deterministic in it — new uuids, a library item's tree, a copied subtree — is resolved once here and stored, so replaying the log is deterministic forever.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorMutate(params: { pageId: string, plugin: string, langcode?: string, payload?: object }): Promise<Models.MutationResponse>;
    /**
     * The one way page CONTENT changes. Each call appends one entry to the append-only log and answers the whole re-materialized state, so a client never re-fetches. A page nobody has opened yet needs no separate call to open it: the first mutation creates the edit state and takes ownership of it, and every later one asks for that ownership, so a second person editing the same page is refused until they take it over. Appending while the pointer sits mid-history discards the redo branch, exactly as an editor expects.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} plugin - Which kind of change this is — `add`, `move`, `delete`, `duplicate`, `update_field_value`, `update_options`, … An id this app does not implement is refused with 400 rather than stored, because the log has to replay.
     * @param {string} langcode - Which language the returned state should be resolved for. Not the language the change is written in — that lives in the payload.
     * @param {object} payload - The arguments of that change; the keys depend on the plugin (`add` takes `{ bundle, hostEntityType, hostEntityUuid, hostField }`, `move` takes `{ uuid, preceedingUuid }`, and so on). Anything non-deterministic in it — new uuids, a library item's tree, a copied subtree — is resolved once here and stored, so replaying the log is deterministic forever.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorMutate(pageId: string, plugin: string, langcode?: string, payload?: object): Promise<Models.MutationResponse>;
    pagesEditorMutate(
        paramsOrFirst: { pageId: string, plugin: string, langcode?: string, payload?: object } | string,
        ...rest: [(string)?, (string)?, (object)?]    
    ): Promise<Models.MutationResponse> {
        let params: { pageId: string, plugin: string, langcode?: string, payload?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, plugin: string, langcode?: string, payload?: object };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                plugin: rest[0] as string,
                langcode: rest[1] as string,
                payload: rest[2] as object            
            };
        }
        
        const pageId = params.pageId;
        const plugin = params.plugin;
        const langcode = params.langcode;
        const payload = params.payload;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof plugin === 'undefined') {
            throw new RevenexxException('Missing required parameter: "plugin"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/mutations'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof langcode !== 'undefined') {
            apiPayload['langcode'] = langcode;
        }
        if (typeof payload !== 'undefined') {
            apiPayload['payload'] = payload;
        }
        if (typeof plugin !== 'undefined') {
            apiPayload['plugin'] = plugin;
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
     * Mints a link that shows this page's current edit state — the UNPUBLISHED one — to somebody without an editor account. The token is the whole credential — anyone holding it sees the page — so it expires, and a new one is cheap.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {number} params.ttlHours - Hours until the link expires. Defaults to 72. After that `GET /pages/delivery/preview/{token}` answers 410 rather than 404, so the holder can tell "expired" from "wrong link".
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorPreviewGrant(params: { pageId: string, ttlHours?: number }): Promise<{}>;
    /**
     * Mints a link that shows this page's current edit state — the UNPUBLISHED one — to somebody without an editor account. The token is the whole credential — anyone holding it sees the page — so it expires, and a new one is cheap.
     *
     * @param {string} pageId - The page being edited.
     * @param {number} ttlHours - Hours until the link expires. Defaults to 72. After that `GET /pages/delivery/preview/{token}` answers 410 rather than 404, so the holder can tell "expired" from "wrong link".
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorPreviewGrant(pageId: string, ttlHours?: number): Promise<{}>;
    pagesEditorPreviewGrant(
        paramsOrFirst: { pageId: string, ttlHours?: number } | string,
        ...rest: [(number)?]    
    ): Promise<{}> {
        let params: { pageId: string, ttlHours?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, ttlHours?: number };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                ttlHours: rest[0] as number            
            };
        }
        
        const pageId = params.pageId;
        const ttlHours = params.ttlHours;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/preview-grant'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof ttlHours !== 'undefined') {
            apiPayload['ttlHours'] = ttlHours;
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
     * Four things in one call: the mutation log is replayed into a finished block tree, that tree is snapshotted into a new revision, the page's canonical blocks are replaced by it, and the edit state is archived — so the page comes out of this with nothing unpublished and the working copy behind it closed rather than deleted. The revision is written FIRST and the canonical blocks replaced after, so a failure mid-way leaves the page recoverable. Block uuids survive, which is why comments anchored to a block outlive the publish.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {boolean} params.force - Publish despite violations. Without it a page with unresolved violations answers 422 and nothing is written.
     * @param {string} params.label - What to call this publication in the page's history — "Autumn campaign" rather than a timestamp.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorPublish(params: { pageId: string, force?: boolean, label?: string }): Promise<Models.MutationResponse>;
    /**
     * Four things in one call: the mutation log is replayed into a finished block tree, that tree is snapshotted into a new revision, the page's canonical blocks are replaced by it, and the edit state is archived — so the page comes out of this with nothing unpublished and the working copy behind it closed rather than deleted. The revision is written FIRST and the canonical blocks replaced after, so a failure mid-way leaves the page recoverable. Block uuids survive, which is why comments anchored to a block outlive the publish.
     *
     * @param {string} pageId - The page being edited.
     * @param {boolean} force - Publish despite violations. Without it a page with unresolved violations answers 422 and nothing is written.
     * @param {string} label - What to call this publication in the page's history — "Autumn campaign" rather than a timestamp.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorPublish(pageId: string, force?: boolean, label?: string): Promise<Models.MutationResponse>;
    pagesEditorPublish(
        paramsOrFirst: { pageId: string, force?: boolean, label?: string } | string,
        ...rest: [(boolean)?, (string)?]    
    ): Promise<Models.MutationResponse> {
        let params: { pageId: string, force?: boolean, label?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, force?: boolean, label?: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                force: rest[0] as boolean,
                label: rest[1] as string            
            };
        }
        
        const pageId = params.pageId;
        const force = params.force;
        const label = params.label;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/publish'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof force !== 'undefined') {
            apiPayload['force'] = force;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
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
     * Throws the whole working copy away: the edit state row is deleted and its mutation log with it, so the history goes too — this is not an undo and cannot itself be undone. Unlike publishing, which archives the edit state, nothing of it survives to be reopened. The published page is untouched.
     *
     * @param {string} params.pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorRevert(params: { pageId: string }): Promise<Models.MutationResponse>;
    /**
     * Throws the whole working copy away: the edit state row is deleted and its mutation log with it, so the history goes too — this is not an undo and cannot itself be undone. Unlike publishing, which archives the edit state, nothing of it survives to be reopened. The published page is untouched.
     *
     * @param {string} pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorRevert(pageId: string): Promise<Models.MutationResponse>;
    pagesEditorRevert(
        paramsOrFirst: { pageId: string } | string    
    ): Promise<Models.MutationResponse> {
        let params: { pageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string };
        } else {
            params = {
                pageId: paramsOrFirst as string            
            };
        }
        
        const pageId = params.pageId;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/revert'.replace('{page_id}', pageId);
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
     * Gated on the tenant setting `enable_scheduled_publishing`, which is off by default: nothing in the platform publishes a scheduled edit state yet, so a date accepted here would be a promise the app cannot keep. Every editor state carries `features.scheduledPublishing` so the control can be hidden rather than the refusal discovered.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.scheduledAt - The moment to publish at. Stored on the edit state and echoed back normalized to UTC.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorSchedule(params: { pageId: string, scheduledAt: string }): Promise<{}>;
    /**
     * Gated on the tenant setting `enable_scheduled_publishing`, which is off by default: nothing in the platform publishes a scheduled edit state yet, so a date accepted here would be a promise the app cannot keep. Every editor state carries `features.scheduledPublishing` so the control can be hidden rather than the refusal discovered.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} scheduledAt - The moment to publish at. Stored on the edit state and echoed back normalized to UTC.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorSchedule(pageId: string, scheduledAt: string): Promise<{}>;
    pagesEditorSchedule(
        paramsOrFirst: { pageId: string, scheduledAt: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { pageId: string, scheduledAt: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, scheduledAt: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                scheduledAt: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const scheduledAt = params.scheduledAt;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof scheduledAt === 'undefined') {
            throw new RevenexxException('Missing required parameter: "scheduledAt"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/schedule'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof scheduledAt !== 'undefined') {
            apiPayload['scheduledAt'] = scheduledAt;
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
     * The one call the visual editor boots on, and the only place the UNPUBLISHED page can be seen whole: the canonical blocks with every enabled mutation of the log replayed over them, the resulting field lists, the mutation history itself, who owns the edit state and where the undo pointer sits, and the tenant's editor feature flags. `langcode` decides which language the props resolve in, falling back to the page's source language. `index` replays the log up to a given position instead of the current one, which is how the editor previews an undo without performing it — it changes nothing, so it is safe to call at any position. Reading this creates nothing either: a page nobody has opened answers with a null `editState`, an empty history, and the published blocks as they stand.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.langcode - Language to resolve every field for. Falls back to the page's source language, per field, so a half-translated page still comes back whole.
     * @param {number} params.index - Materialize the state at this point of the undo history instead of at the pointer the edit state carries. `-1` is "before the first change". It is how a diff view shows what one step did, and it does NOT move the pointer — `POST …/history` does that.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EditorState>}
     */
    pagesEditorState(params: { pageId: string, langcode?: string, index?: number }): Promise<Models.EditorState>;
    /**
     * The one call the visual editor boots on, and the only place the UNPUBLISHED page can be seen whole: the canonical blocks with every enabled mutation of the log replayed over them, the resulting field lists, the mutation history itself, who owns the edit state and where the undo pointer sits, and the tenant's editor feature flags. `langcode` decides which language the props resolve in, falling back to the page's source language. `index` replays the log up to a given position instead of the current one, which is how the editor previews an undo without performing it — it changes nothing, so it is safe to call at any position. Reading this creates nothing either: a page nobody has opened answers with a null `editState`, an empty history, and the published blocks as they stand.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} langcode - Language to resolve every field for. Falls back to the page's source language, per field, so a half-translated page still comes back whole.
     * @param {number} index - Materialize the state at this point of the undo history instead of at the pointer the edit state carries. `-1` is "before the first change". It is how a diff view shows what one step did, and it does NOT move the pointer — `POST …/history` does that.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EditorState>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorState(pageId: string, langcode?: string, index?: number): Promise<Models.EditorState>;
    pagesEditorState(
        paramsOrFirst: { pageId: string, langcode?: string, index?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.EditorState> {
        let params: { pageId: string, langcode?: string, index?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, langcode?: string, index?: number };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                langcode: rest[0] as string,
                index: rest[1] as number            
            };
        }
        
        const pageId = params.pageId;
        const langcode = params.langcode;
        const index = params.index;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/state'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof langcode !== 'undefined') {
            apiPayload['langcode'] = langcode;
        }
        if (typeof index !== 'undefined') {
            apiPayload['index'] = index;
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
     * One page has one writer. This is how the second person gets the pen — the previous owner is notified rather than silently locked out.
     *
     * @param {string} params.pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorTakeOwnership(params: { pageId: string }): Promise<Models.MutationResponse>;
    /**
     * One page has one writer. This is how the second person gets the pen — the previous owner is notified rather than silently locked out.
     *
     * @param {string} pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorTakeOwnership(pageId: string): Promise<Models.MutationResponse>;
    pagesEditorTakeOwnership(
        paramsOrFirst: { pageId: string } | string    
    ): Promise<Models.MutationResponse> {
        let params: { pageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string };
        } else {
            params = {
                pageId: paramsOrFirst as string            
            };
        }
        
        const pageId = params.pageId;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/take-ownership'.replace('{page_id}', pageId);
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
     * Freezes a selection into a reusable starting point. The blocks are read out of the page's CURRENT edit state rather than out of what is published, so a template can be cut from work in progress and the uuids you send are the ones the editor is showing. Unlike making a block reusable, this COPIES: pages later made from the template are independent of it and of each other.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.label - What the template is called in the picker.
     * @param {string[]} params.uuids - The blocks to serialize into the template, each with its whole subtree. They are read from the CURRENT edit state, so unpublished changes are included.
     * @param {string} params.description - A sentence about when to reach for it.
     * @param {string} params.fieldName - The field this template should be offered in. Null offers it in every field.
     * @param {boolean} params.isDefault - Whether a new page of that type should start from this template.
     * @param {string} params.pageBundle - The page type this template should be offered on. Omit to take the current page's own type.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesEditorTemplatesCreate(params: { pageId: string, label: string, uuids: string[], description?: string, fieldName?: string, isDefault?: boolean, pageBundle?: string }): Promise<Models.Template>;
    /**
     * Freezes a selection into a reusable starting point. The blocks are read out of the page's CURRENT edit state rather than out of what is published, so a template can be cut from work in progress and the uuids you send are the ones the editor is showing. Unlike making a block reusable, this COPIES: pages later made from the template are independent of it and of each other.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} label - What the template is called in the picker.
     * @param {string[]} uuids - The blocks to serialize into the template, each with its whole subtree. They are read from the CURRENT edit state, so unpublished changes are included.
     * @param {string} description - A sentence about when to reach for it.
     * @param {string} fieldName - The field this template should be offered in. Null offers it in every field.
     * @param {boolean} isDefault - Whether a new page of that type should start from this template.
     * @param {string} pageBundle - The page type this template should be offered on. Omit to take the current page's own type.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorTemplatesCreate(pageId: string, label: string, uuids: string[], description?: string, fieldName?: string, isDefault?: boolean, pageBundle?: string): Promise<Models.Template>;
    pagesEditorTemplatesCreate(
        paramsOrFirst: { pageId: string, label: string, uuids: string[], description?: string, fieldName?: string, isDefault?: boolean, pageBundle?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Template> {
        let params: { pageId: string, label: string, uuids: string[], description?: string, fieldName?: string, isDefault?: boolean, pageBundle?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, label: string, uuids: string[], description?: string, fieldName?: string, isDefault?: boolean, pageBundle?: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                label: rest[0] as string,
                uuids: rest[1] as string[],
                description: rest[2] as string,
                fieldName: rest[3] as string,
                isDefault: rest[4] as boolean,
                pageBundle: rest[5] as string            
            };
        }
        
        const pageId = params.pageId;
        const label = params.label;
        const uuids = params.uuids;
        const description = params.description;
        const fieldName = params.fieldName;
        const isDefault = params.isDefault;
        const pageBundle = params.pageBundle;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof label === 'undefined') {
            throw new RevenexxException('Missing required parameter: "label"');
        }
        if (typeof uuids === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuids"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/templates'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof fieldName !== 'undefined') {
            apiPayload['fieldName'] = fieldName;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['isDefault'] = isDefault;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof pageBundle !== 'undefined') {
            apiPayload['pageBundle'] = pageBundle;
        }
        if (typeof uuids !== 'undefined') {
            apiPayload['uuids'] = uuids;
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
     * Takes a parked edit state back to `active` and clears its date, so the scheduled publication simply does not happen. The work is not touched — the mutation log, the undo position and the owner all stay as they were — and the page can then be published by hand or scheduled again for a different date. Like every other write to an edit state it asks for ownership, and a page with no open edit state answers 404 rather than pretending to have cancelled something.
     *
     * @param {string} params.pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUnschedule(params: { pageId: string }): Promise<{}>;
    /**
     * Takes a parked edit state back to `active` and clears its date, so the scheduled publication simply does not happen. The work is not touched — the mutation log, the undo position and the owner all stay as they were — and the page can then be published by hand or scheduled again for a different date. Like every other write to an edit state it asks for ownership, and a page with no open edit state answers 404 rather than pretending to have cancelled something.
     *
     * @param {string} pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorUnschedule(pageId: string): Promise<{}>;
    pagesEditorUnschedule(
        paramsOrFirst: { pageId: string } | string    
    ): Promise<{}> {
        let params: { pageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string };
        } else {
            params = {
                pageId: paramsOrFirst as string            
            };
        }
        
        const pageId = params.pageId;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/unschedule'.replace('{page_id}', pageId);
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
}
