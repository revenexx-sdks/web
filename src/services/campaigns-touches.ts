import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsTouches {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?campaign_id=`, `?kind=`, `?contact_id=`. Read-only.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.touchKey - Keep only rows whose `touch_key` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.ref - Keep only rows whose `ref` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.sessionKey - Keep only rows whose `session_key` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsTouchesList(params?: { limit?: number, offset?: number, order?: string, id?: string, touchKey?: string, campaignId?: string, kind?: string, ref?: string, contactId?: string, sessionKey?: string, orderId?: string, market?: string }): Promise<{}>;
    /**
     * Filter `?campaign_id=`, `?kind=`, `?contact_id=`. Read-only.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} touchKey - Keep only rows whose `touch_key` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} ref - Keep only rows whose `ref` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} sessionKey - Keep only rows whose `session_key` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTouchesList(limit?: number, offset?: number, order?: string, id?: string, touchKey?: string, campaignId?: string, kind?: string, ref?: string, contactId?: string, sessionKey?: string, orderId?: string, market?: string): Promise<{}>;
    campaignsTouchesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, touchKey?: string, campaignId?: string, kind?: string, ref?: string, contactId?: string, sessionKey?: string, orderId?: string, market?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, touchKey?: string, campaignId?: string, kind?: string, ref?: string, contactId?: string, sessionKey?: string, orderId?: string, market?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, touchKey?: string, campaignId?: string, kind?: string, ref?: string, contactId?: string, sessionKey?: string, orderId?: string, market?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                touchKey: rest[3] as string,
                campaignId: rest[4] as string,
                kind: rest[5] as string,
                ref: rest[6] as string,
                contactId: rest[7] as string,
                sessionKey: rest[8] as string,
                orderId: rest[9] as string,
                market: rest[10] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const touchKey = params.touchKey;
        const campaignId = params.campaignId;
        const kind = params.kind;
        const ref = params.ref;
        const contactId = params.contactId;
        const sessionKey = params.sessionKey;
        const orderId = params.orderId;
        const market = params.market;


        const apiPath = '/v1/campaigns/touches';
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
        if (typeof touchKey !== 'undefined') {
            apiPayload['touch_key'] = touchKey;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof ref !== 'undefined') {
            apiPayload['ref'] = ref;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
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
     * A batch of at most 500 on-site impressions, on-site clicks and ad clicks. Each item is judged on its own; an item with a key already recorded is counted as a duplicate.
     *
     * @param {object[]} params.touches - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsTouchesIngest(params: { touches: object[] }): Promise<{}>;
    /**
     * A batch of at most 500 on-site impressions, on-site clicks and ad clicks. Each item is judged on its own; an item with a key already recorded is counted as a duplicate.
     *
     * @param {object[]} touches - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTouchesIngest(touches: object[]): Promise<{}>;
    campaignsTouchesIngest(
        paramsOrFirst: { touches: object[] } | object[]    
    ): Promise<{}> {
        let params: { touches: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('touches' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { touches: object[] };
        } else {
            params = {
                touches: paramsOrFirst as object[]            
            };
        }
        
        const touches = params.touches;

        if (typeof touches === 'undefined') {
            throw new RevenexxException('Missing required parameter: "touches"');
        }

        const apiPath = '/v1/campaigns/touches';
        const apiPayload: Payload = {};
        if (typeof touches !== 'undefined') {
            apiPayload['touches'] = Client.toWireKeys(touches, {"campaignId":{"wire":"campaign_id","children":null},"contactId":{"wire":"contact_id","children":null},"sessionKey":{"wire":"session_key","children":null}});
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTouch>}
     */
    campaignsTouchesGet(params: { id: string }): Promise<Models.CampaignTouch>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTouch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTouchesGet(id: string): Promise<Models.CampaignTouch>;
    campaignsTouchesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignTouch> {
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

        const apiPath = '/v1/campaigns/touches/{id}'.replace('{id}', id);
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
