import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PageStatus } from '../enums/page-status';

export class Pages {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesDeliveryMenus(): Promise<{}> {

        const apiPath = '/v1/pages/delivery/menus';
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
     * @returns {Promise<Models.DeliveryPage>}
     */
    pagesDeliveryPage(): Promise<Models.DeliveryPage> {

        const apiPath = '/v1/pages/delivery/page';
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesDeliveryPages(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesDeliveryPages(limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesDeliveryPages(
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


        const apiPath = '/v1/pages/delivery/pages';
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
     *
     * @param {string} params.token - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     */
    pagesDeliveryPreview(params: { token: string }): Promise<Models.DeliveryPage>;
    /**
     *
     * @param {string} token - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesDeliveryPreview(token: string): Promise<Models.DeliveryPage>;
    pagesDeliveryPreview(
        paramsOrFirst: { token: string } | string    
    ): Promise<Models.DeliveryPage> {
        let params: { token: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string };
        } else {
            params = {
                token: paramsOrFirst as string            
            };
        }
        
        const token = params.token;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/pages/delivery/preview/{token}'.replace('{token}', token);
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
    pagesEditorEditStates(): Promise<{}> {

        const apiPath = '/v1/pages/editor/edit-states';
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
    pagesEditorNotificationsList(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications';
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
    pagesEditorNotificationsMarkAllRead(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications/mark-all-read';
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsUnreadCount(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications/unread-count';
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
     * @param {object[]} params.items - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorTranslate(params?: { items?: object[] }): Promise<{}>;
    /**
     *
     * @param {object[]} items - 
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
     *
     * @param {object} params.settings - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUserSettingsPut(params?: { settings?: object }): Promise<{}>;
    /**
     *
     * @param {object} settings - 
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUsers(): Promise<{}> {

        const apiPath = '/v1/pages/editor/users';
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
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorCommentsList(params: { pageId: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsList(pageId: string): Promise<{}>;
    pagesEditorCommentsList(
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

        const apiPath = '/v1/pages/editor/{page_id}/comments'.replace('{page_id}', pageId);
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
     * @param {string} params.pageId - 
     * @param {string} params.body - 
     * @param {string[]} params.blockUuids - 
     * @param {string} params.parentUuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorCommentsCreate(params: { pageId: string, body: string, blockUuids?: string[], parentUuid?: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} body - 
     * @param {string[]} blockUuids - 
     * @param {string} parentUuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsCreate(pageId: string, body: string, blockUuids?: string[], parentUuid?: string): Promise<{}>;
    pagesEditorCommentsCreate(
        paramsOrFirst: { pageId: string, body: string, blockUuids?: string[], parentUuid?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?]    
    ): Promise<{}> {
        let params: { pageId: string, body: string, blockUuids?: string[], parentUuid?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, body: string, blockUuids?: string[], parentUuid?: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                body: rest[0] as string,
                blockUuids: rest[1] as string[],
                parentUuid: rest[2] as string            
            };
        }
        
        const pageId = params.pageId;
        const body = params.body;
        const blockUuids = params.blockUuids;
        const parentUuid = params.parentUuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof blockUuids !== 'undefined') {
            apiPayload['blockUuids'] = blockUuids;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof parentUuid !== 'undefined') {
            apiPayload['parentUuid'] = parentUuid;
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
     * @param {string} params.pageId - 
     * @param {string} params.uuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorCommentsDelete(params: { pageId: string, uuid: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} uuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsDelete(pageId: string, uuid: string): Promise<{}>;
    pagesEditorCommentsDelete(
        paramsOrFirst: { pageId: string, uuid: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { pageId: string, uuid: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}'.replace('{page_id}', pageId).replace('{uuid}', uuid);
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
     * @param {string} params.pageId - 
     * @param {string} params.uuid - 
     * @param {string} params.body - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorCommentsUpdate(params: { pageId: string, uuid: string, body: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} uuid - 
     * @param {string} body - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsUpdate(pageId: string, uuid: string, body: string): Promise<{}>;
    pagesEditorCommentsUpdate(
        paramsOrFirst: { pageId: string, uuid: string, body: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { pageId: string, uuid: string, body: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string, body: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string,
                body: rest[1] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;
        const body = params.body;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}'.replace('{page_id}', pageId).replace('{uuid}', uuid);
        const apiPayload: Payload = {};
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
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
     * @param {string} params.pageId - 
     * @param {string} params.uuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorCommentsResolve(params: { pageId: string, uuid: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} uuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsResolve(pageId: string, uuid: string): Promise<{}>;
    pagesEditorCommentsResolve(
        paramsOrFirst: { pageId: string, uuid: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { pageId: string, uuid: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/resolve'.replace('{page_id}', pageId).replace('{uuid}', uuid);
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
     * @param {string} params.pageId - 
     * @param {string} params.uuid - 
     * @param {number} params.taskIndex - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Comment>}
     */
    pagesEditorCommentsToggleTask(params: { pageId: string, uuid: string, taskIndex: number }): Promise<Models.Comment>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} uuid - 
     * @param {number} taskIndex - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Comment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsToggleTask(pageId: string, uuid: string, taskIndex: number): Promise<Models.Comment>;
    pagesEditorCommentsToggleTask(
        paramsOrFirst: { pageId: string, uuid: string, taskIndex: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.Comment> {
        let params: { pageId: string, uuid: string, taskIndex: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string, taskIndex: number };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string,
                taskIndex: rest[1] as number            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;
        const taskIndex = params.taskIndex;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }
        if (typeof taskIndex === 'undefined') {
            throw new RevenexxException('Missing required parameter: "taskIndex"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/toggle-task'.replace('{page_id}', pageId).replace('{uuid}', uuid);
        const apiPayload: Payload = {};
        if (typeof taskIndex !== 'undefined') {
            apiPayload['taskIndex'] = taskIndex;
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
     * @param {string} params.pageId - 
     * @param {string} params.uuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorCommentsUnresolve(params: { pageId: string, uuid: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} uuid - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsUnresolve(pageId: string, uuid: string): Promise<{}>;
    pagesEditorCommentsUnresolve(
        paramsOrFirst: { pageId: string, uuid: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { pageId: string, uuid: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/unresolve'.replace('{page_id}', pageId).replace('{uuid}', uuid);
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
     * @param {string} params.pageId - 
     * @param {number} params.index - 
     * @param {string} params.langcode - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorHistory(params: { pageId: string, index: number, langcode?: string }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
     * @param {number} index - 
     * @param {string} langcode - 
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
     *
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorLastChanged(params: { pageId: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
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
     *
     * @param {string} params.pageId - 
     * @param {boolean} params.enabled - 
     * @param {number} params.index - 
     * @param {string} params.langcode - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorMutationStatus(params: { pageId: string, enabled: boolean, index: number, langcode?: string }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
     * @param {boolean} enabled - 
     * @param {number} index - 
     * @param {string} langcode - 
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
     *
     * @param {string} params.pageId - 
     * @param {string} params.plugin - Mutation plugin id (add, move, delete, duplicate, update_field_value, ...).
     * @param {string} params.langcode - 
     * @param {object} params.payload - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorMutate(params: { pageId: string, plugin: string, langcode?: string, payload?: object }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} plugin - Mutation plugin id (add, move, delete, duplicate, update_field_value, ...).
     * @param {string} langcode - 
     * @param {object} payload - 
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
     *
     * @param {string} params.pageId - 
     * @param {number} params.ttlHours - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorPreviewGrant(params: { pageId: string, ttlHours?: number }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {number} ttlHours - 
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
     *
     * @param {string} params.pageId - 
     * @param {boolean} params.force - Publish despite violations.
     * @param {string} params.label - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorPublish(params: { pageId: string, force?: boolean, label?: string }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
     * @param {boolean} force - Publish despite violations.
     * @param {string} label - 
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
     *
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorRevert(params: { pageId: string }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
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
     *
     * @param {string} params.pageId - 
     * @param {string} params.scheduledAt - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorSchedule(params: { pageId: string, scheduledAt: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} scheduledAt - 
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
     *
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.EditorState>}
     */
    pagesEditorState(params: { pageId: string }): Promise<Models.EditorState>;
    /**
     *
     * @param {string} pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.EditorState>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorState(pageId: string): Promise<Models.EditorState>;
    pagesEditorState(
        paramsOrFirst: { pageId: string } | string    
    ): Promise<Models.EditorState> {
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

        const apiPath = '/v1/pages/editor/{page_id}/state'.replace('{page_id}', pageId);
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
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorTakeOwnership(params: { pageId: string }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
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
     *
     * @param {string} params.pageId - 
     * @param {string} params.label - 
     * @param {string[]} params.uuids - 
     * @param {string} params.description - 
     * @param {string} params.fieldName - 
     * @param {boolean} params.isDefault - 
     * @param {string} params.pageBundle - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesEditorTemplatesCreate(params: { pageId: string, label: string, uuids: string[], description?: string, fieldName?: string, isDefault?: boolean, pageBundle?: string }): Promise<Models.Template>;
    /**
     *
     * @param {string} pageId - 
     * @param {string} label - 
     * @param {string[]} uuids - 
     * @param {string} description - 
     * @param {string} fieldName - 
     * @param {boolean} isDefault - 
     * @param {string} pageBundle - 
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
     *
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUnschedule(params: { pageId: string }): Promise<{}>;
    /**
     *
     * @param {string} pageId - 
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

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesLibraryList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryList(limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesLibraryList(
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesLibraryDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     */
    pagesLibraryGet(params: { id: string }): Promise<Models.LibraryItem>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @param {string} params.bundle - 
     * @param {string} params.label - 
     * @param {object} params.tree - Serialized block tree ({ bundle, props, props_i18n, options, children }).
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     */
    pagesLibraryUpdate(params: { id: string, bundle?: string, label?: string, tree?: object }): Promise<Models.LibraryItem>;
    /**
     *
     * @param {string} id - 
     * @param {string} bundle - 
     * @param {string} label - 
     * @param {object} tree - Serialized block tree ({ bundle, props, props_i18n, options, children }).
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
            apiPayload['tree'] = tree;
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesMenusList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
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
     *
     * @param {string} params.label - 
     * @param {string} params.menuKey - Stable menu identifier, e.g. "main", "footer", "account".
     * @param {object[]} params.items - Ordered menu entries ({ label, to?, items? }).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusUpsert(params: { label: string, menuKey: string, items?: object[] }): Promise<Models.Menu>;
    /**
     *
     * @param {string} label - 
     * @param {string} menuKey - Stable menu identifier, e.g. "main", "footer", "account".
     * @param {object[]} items - Ordered menu entries ({ label, to?, items? }).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusUpsert(label: string, menuKey: string, items?: object[]): Promise<Models.Menu>;
    pagesMenusUpsert(
        paramsOrFirst: { label: string, menuKey: string, items?: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.Menu> {
        let params: { label: string, menuKey: string, items?: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { label: string, menuKey: string, items?: object[] };
        } else {
            params = {
                label: paramsOrFirst as string,
                menuKey: rest[0] as string,
                items: rest[1] as object[]            
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesMenusDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusGet(params: { id: string }): Promise<Models.Menu>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @param {object[]} params.items - 
     * @param {string} params.label - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     */
    pagesMenusUpdate(params: { id: string, items?: object[], label?: string }): Promise<Models.Menu>;
    /**
     *
     * @param {string} id - 
     * @param {object[]} items - 
     * @param {string} label - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Menu>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesMenusUpdate(id: string, items?: object[], label?: string): Promise<Models.Menu>;
    pagesMenusUpdate(
        paramsOrFirst: { id: string, items?: object[], label?: string } | string,
        ...rest: [(object[])?, (string)?]    
    ): Promise<Models.Menu> {
        let params: { id: string, items?: object[], label?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, items?: object[], label?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                items: rest[0] as object[],
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesList(limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesPagesList(
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
     * @param {string} params.title - 
     * @param {string} params.bundle - 
     * @param {object} params.hostOptions - 
     * @param {object} params.meta - 
     * @param {string} params.slug - 
     * @param {string} params.sourceLanguage - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesCreate(params: { title: string, bundle?: string, hostOptions?: object, meta?: object, slug?: string, sourceLanguage?: string }): Promise<Models.Page>;
    /**
     *
     * @param {string} title - 
     * @param {string} bundle - 
     * @param {object} hostOptions - 
     * @param {object} meta - 
     * @param {string} slug - 
     * @param {string} sourceLanguage - 
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesGet(params: { id: string }): Promise<Models.Page>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @param {string} params.bundle - 
     * @param {object} params.meta - 
     * @param {string} params.slug - 
     * @param {PageStatus} params.status - 
     * @param {string} params.title - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesUpdate(params: { id: string, bundle?: string, meta?: object, slug?: string, status?: PageStatus, title?: string }): Promise<Models.Page>;
    /**
     *
     * @param {string} id - 
     * @param {string} bundle - 
     * @param {object} meta - 
     * @param {string} slug - 
     * @param {PageStatus} status - 
     * @param {string} title - 
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
     *
     * @param {string} params.id - 
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesRevisions(params: { id: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesRevisions(id: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesPagesRevisions(
        paramsOrFirst: { id: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                limit: rest[0] as number,
                offset: rest[1] as number,
                order: rest[2] as string            
            };
        }
        
        const id = params.id;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

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
     * @param {object[]} params.menus - 
     * @param {object[]} params.pages - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesSeed(params?: { menus?: object[], pages?: object[] }): Promise<{}>;
    /**
     *
     * @param {object[]} menus - 
     * @param {object[]} pages - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesSeed(menus?: object[], pages?: object[]): Promise<{}>;
    pagesSeed(
        paramsOrFirst?: { menus?: object[], pages?: object[] } | object[],
        ...rest: [(object[])?]    
    ): Promise<{}> {
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
            apiPayload['pages'] = pages;
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplatesList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesList(limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesTemplatesList(
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplatesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesTemplatesGet(params: { id: string }): Promise<Models.Template>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @param {string} params.description - 
     * @param {string} params.fieldName - 
     * @param {boolean} params.isDefault - 
     * @param {string} params.label - 
     * @param {string} params.pageBundle - 
     * @param {object[]} params.tree - Serialized block trees ({ bundle, props, props_i18n, options, children }).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesTemplatesUpdate(params: { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: object[] }): Promise<Models.Template>;
    /**
     *
     * @param {string} id - 
     * @param {string} description - 
     * @param {string} fieldName - 
     * @param {boolean} isDefault - 
     * @param {string} label - 
     * @param {string} pageBundle - 
     * @param {object[]} tree - Serialized block trees ({ bundle, props, props_i18n, options, children }).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesUpdate(id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: object[]): Promise<Models.Template>;
    pagesTemplatesUpdate(
        paramsOrFirst: { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: object[] } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (object[])?]    
    ): Promise<Models.Template> {
        let params: { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, fieldName?: string, isDefault?: boolean, label?: string, pageBundle?: string, tree?: object[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                fieldName: rest[1] as string,
                isDefault: rest[2] as boolean,
                label: rest[3] as string,
                pageBundle: rest[4] as string,
                tree: rest[5] as object[]            
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
            apiPayload['tree'] = tree;
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
