import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { ChannelStatus } from '../enums/channel-status';
import { ChannelType } from '../enums/channel-type';

export class Channels {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    channelsList(
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


        const apiPath = '/v1/channels';
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
     * @param {string} params.code - Stable channel code, unique per tenant (e.g. shop, punchout-acme).
     * @param {string} params.name - Display name.
     * @param {boolean} params.isDefault - Mark as the default channel (default false).
     * @param {object} params.labels - Localized display names keyed by locale.
     * @param {number} params.position - Sort position (default 0).
     * @param {ChannelStatus} params.status - Lifecycle status (default 'active').
     * @param {ChannelType} params.type - Where business happens (default 'storefront').
     * @throws {RevenexxException}
     * @returns {Promise<Models.Channel>}
     */
    channelsCreate(params: { code: string, name: string, isDefault?: boolean, labels?: object, position?: number, status?: ChannelStatus, type?: ChannelType }): Promise<Models.Channel>;
    /**
     *
     * @param {string} code - Stable channel code, unique per tenant (e.g. shop, punchout-acme).
     * @param {string} name - Display name.
     * @param {boolean} isDefault - Mark as the default channel (default false).
     * @param {object} labels - Localized display names keyed by locale.
     * @param {number} position - Sort position (default 0).
     * @param {ChannelStatus} status - Lifecycle status (default 'active').
     * @param {ChannelType} type - Where business happens (default 'storefront').
     * @throws {RevenexxException}
     * @returns {Promise<Models.Channel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelsCreate(code: string, name: string, isDefault?: boolean, labels?: object, position?: number, status?: ChannelStatus, type?: ChannelType): Promise<Models.Channel>;
    channelsCreate(
        paramsOrFirst: { code: string, name: string, isDefault?: boolean, labels?: object, position?: number, status?: ChannelStatus, type?: ChannelType } | string,
        ...rest: [(string)?, (boolean)?, (object)?, (number)?, (ChannelStatus)?, (ChannelType)?]    
    ): Promise<Models.Channel> {
        let params: { code: string, name: string, isDefault?: boolean, labels?: object, position?: number, status?: ChannelStatus, type?: ChannelType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, isDefault?: boolean, labels?: object, position?: number, status?: ChannelStatus, type?: ChannelType };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                isDefault: rest[1] as boolean,
                labels: rest[2] as object,
                position: rest[3] as number,
                status: rest[4] as ChannelStatus,
                type: rest[5] as ChannelType            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const status = params.status;
        const type = params.type;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/channels';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
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
     * @returns {Promise<Models.ChannelDefaults>}
     */
    channelsDefaults(): Promise<Models.ChannelDefaults> {

        const apiPath = '/v1/channels/defaults';
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
    channelsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelsDelete(id: string): Promise<{}>;
    channelsDelete(
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

        const apiPath = '/v1/channels/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Channel>}
     */
    channelsGet(params: { id: string }): Promise<Models.Channel>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Channel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelsGet(id: string): Promise<Models.Channel>;
    channelsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Channel> {
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

        const apiPath = '/v1/channels/{id}'.replace('{id}', id);
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
     * @param {string} params.code - Stable channel code, unique per tenant (e.g. shop, punchout-acme).
     * @param {boolean} params.isDefault - Mark as the default channel (default false).
     * @param {object} params.labels - Localized display names keyed by locale.
     * @param {string} params.name - Display name.
     * @param {number} params.position - Sort position (default 0).
     * @param {ChannelStatus} params.status - Lifecycle status (default 'active').
     * @param {ChannelType} params.type - Where business happens (default 'storefront').
     * @throws {RevenexxException}
     * @returns {Promise<Models.Channel>}
     */
    channelsUpdate(params: { id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: ChannelStatus, type?: ChannelType }): Promise<Models.Channel>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - Stable channel code, unique per tenant (e.g. shop, punchout-acme).
     * @param {boolean} isDefault - Mark as the default channel (default false).
     * @param {object} labels - Localized display names keyed by locale.
     * @param {string} name - Display name.
     * @param {number} position - Sort position (default 0).
     * @param {ChannelStatus} status - Lifecycle status (default 'active').
     * @param {ChannelType} type - Where business happens (default 'storefront').
     * @throws {RevenexxException}
     * @returns {Promise<Models.Channel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelsUpdate(id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: ChannelStatus, type?: ChannelType): Promise<Models.Channel>;
    channelsUpdate(
        paramsOrFirst: { id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: ChannelStatus, type?: ChannelType } | string,
        ...rest: [(string)?, (boolean)?, (object)?, (string)?, (number)?, (ChannelStatus)?, (ChannelType)?]    
    ): Promise<Models.Channel> {
        let params: { id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: ChannelStatus, type?: ChannelType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: ChannelStatus, type?: ChannelType };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                isDefault: rest[1] as boolean,
                labels: rest[2] as object,
                name: rest[3] as string,
                position: rest[4] as number,
                status: rest[5] as ChannelStatus,
                type: rest[6] as ChannelType            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const name = params.name;
        const position = params.position;
        const status = params.status;
        const type = params.type;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/channels/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
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
