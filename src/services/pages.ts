import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Pages {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     */
    pagesDeliveryPage(): Promise<Models.DeliveryPage> {

        const apiPath = '/v1/pages/delivery/page';
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesDeliveryPages(): Promise<{}> {

        const apiPath = '/v1/pages/delivery/pages';
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorEditStates(): Promise<{}> {

        const apiPath = '/v1/pages/editor/edit-states';
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsList(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications';
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsMarkAllRead(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications/mark-all-read';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsUnreadCount(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications/unread-count';
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
        const payload: Payload = {};
        if (typeof items !== 'undefined') {
            payload['items'] = items;
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUserSettingsGet(): Promise<{}> {

        const apiPath = '/v1/pages/editor/user-settings';
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
        const payload: Payload = {};
        if (typeof settings !== 'undefined') {
            payload['settings'] = settings;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUsers(): Promise<{}> {

        const apiPath = '/v1/pages/editor/users';
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

        const apiPath = '/v1/pages/editor/{page_id}/comments'.replace('{pageId}', pageId);
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

        const apiPath = '/v1/pages/editor/{page_id}/comments'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof blockUuids !== 'undefined') {
            payload['blockUuids'] = blockUuids;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof parentUuid !== 'undefined') {
            payload['parentUuid'] = parentUuid;
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

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}'.replace('{pageId}', pageId).replace('{uuid}', uuid);
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

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}'.replace('{pageId}', pageId).replace('{uuid}', uuid);
        const payload: Payload = {};
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
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

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/resolve'.replace('{pageId}', pageId).replace('{uuid}', uuid);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
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

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/toggle-task'.replace('{pageId}', pageId).replace('{uuid}', uuid);
        const payload: Payload = {};
        if (typeof taskIndex !== 'undefined') {
            payload['taskIndex'] = taskIndex;
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

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/unresolve'.replace('{pageId}', pageId).replace('{uuid}', uuid);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
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

        const apiPath = '/v1/pages/editor/{page_id}/history'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof index !== 'undefined') {
            payload['index'] = index;
        }
        if (typeof langcode !== 'undefined') {
            payload['langcode'] = langcode;
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

        const apiPath = '/v1/pages/editor/{page_id}/last-changed'.replace('{pageId}', pageId);
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

        const apiPath = '/v1/pages/editor/{page_id}/mutation-status'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof index !== 'undefined') {
            payload['index'] = index;
        }
        if (typeof langcode !== 'undefined') {
            payload['langcode'] = langcode;
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
     *
     * @param {string} params.pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     */
    pagesEditorMutate(params: { pageId: string }): Promise<Models.MutationResponse>;
    /**
     *
     * @param {string} pageId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MutationResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorMutate(pageId: string): Promise<Models.MutationResponse>;
    pagesEditorMutate(
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

        const apiPath = '/v1/pages/editor/{page_id}/mutations'.replace('{pageId}', pageId);
        const payload: Payload = {};
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

        const apiPath = '/v1/pages/editor/{page_id}/preview-grant'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof ttlHours !== 'undefined') {
            payload['ttlHours'] = ttlHours;
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

        const apiPath = '/v1/pages/editor/{page_id}/publish'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof force !== 'undefined') {
            payload['force'] = force;
        }
        if (typeof label !== 'undefined') {
            payload['label'] = label;
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

        const apiPath = '/v1/pages/editor/{page_id}/revert'.replace('{pageId}', pageId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
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

        const apiPath = '/v1/pages/editor/{page_id}/schedule'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
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

        const apiPath = '/v1/pages/editor/{page_id}/state'.replace('{pageId}', pageId);
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

        const apiPath = '/v1/pages/editor/{page_id}/take-ownership'.replace('{pageId}', pageId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
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

        const apiPath = '/v1/pages/editor/{page_id}/templates'.replace('{pageId}', pageId);
        const payload: Payload = {};
        if (typeof description !== 'undefined') {
            payload['description'] = description;
        }
        if (typeof fieldName !== 'undefined') {
            payload['fieldName'] = fieldName;
        }
        if (typeof isDefault !== 'undefined') {
            payload['isDefault'] = isDefault;
        }
        if (typeof label !== 'undefined') {
            payload['label'] = label;
        }
        if (typeof pageBundle !== 'undefined') {
            payload['pageBundle'] = pageBundle;
        }
        if (typeof uuids !== 'undefined') {
            payload['uuids'] = uuids;
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

        const apiPath = '/v1/pages/editor/{page_id}/unschedule'.replace('{pageId}', pageId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesLibraryList(): Promise<{}> {

        const apiPath = '/v1/pages/library';
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     */
    pagesLibraryUpdate(params: { id: string }): Promise<Models.LibraryItem>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.LibraryItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesLibraryUpdate(id: string): Promise<Models.LibraryItem>;
    pagesLibraryUpdate(
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
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesList(): Promise<{}> {

        const apiPath = '/v1/pages/pages';
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesCreate(): Promise<Models.Page> {

        const apiPath = '/v1/pages/pages';
        const payload: Payload = {};
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     */
    pagesPagesUpdate(params: { id: string }): Promise<Models.Page>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Page>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesUpdate(id: string): Promise<Models.Page>;
    pagesPagesUpdate(
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
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesPagesRevisions(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesPagesRevisions(id: string): Promise<{}>;
    pagesPagesRevisions(
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

        const apiPath = '/v1/pages/pages/{id}/revisions'.replace('{id}', id);
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesSeed(): Promise<{}> {

        const apiPath = '/v1/pages/seed';
        const payload: Payload = {};
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesTemplatesList(): Promise<{}> {

        const apiPath = '/v1/pages/templates';
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     */
    pagesTemplatesUpdate(params: { id: string }): Promise<Models.Template>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Template>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesTemplatesUpdate(id: string): Promise<Models.Template>;
    pagesTemplatesUpdate(
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
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }
}
