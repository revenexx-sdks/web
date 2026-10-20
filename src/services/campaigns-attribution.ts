import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsAttribution {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The ledger. Filter `?campaign_id=`, `?order_id=`, `?is_last_touch=true`. Read-only: facts are written from orders, redemptions and touches.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.factKey - Keep only rows whose `fact_key` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.orderNumber - Keep only rows whose `order_number` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.touchKind - Keep only rows whose `touch_kind` equals this.
     * @param {string} params.touchRef - Keep only rows whose `touch_ref` equals this.
     * @param {string} params.isFirstTouch - Keep only rows whose `is_first_touch` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsAttributionList(params?: { limit?: number, offset?: number, order?: string, id?: string, factKey?: string, campaignId?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, currency?: string, market?: string, touchKind?: string, touchRef?: string, isFirstTouch?: string }): Promise<{}>;
    /**
     * The ledger. Filter `?campaign_id=`, `?order_id=`, `?is_last_touch=true`. Read-only: facts are written from orders, redemptions and touches.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} factKey - Keep only rows whose `fact_key` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} orderNumber - Keep only rows whose `order_number` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} touchKind - Keep only rows whose `touch_kind` equals this.
     * @param {string} touchRef - Keep only rows whose `touch_ref` equals this.
     * @param {string} isFirstTouch - Keep only rows whose `is_first_touch` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsAttributionList(limit?: number, offset?: number, order?: string, id?: string, factKey?: string, campaignId?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, currency?: string, market?: string, touchKind?: string, touchRef?: string, isFirstTouch?: string): Promise<{}>;
    campaignsAttributionList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, factKey?: string, campaignId?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, currency?: string, market?: string, touchKind?: string, touchRef?: string, isFirstTouch?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, factKey?: string, campaignId?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, currency?: string, market?: string, touchKind?: string, touchRef?: string, isFirstTouch?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, factKey?: string, campaignId?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, currency?: string, market?: string, touchKind?: string, touchRef?: string, isFirstTouch?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                factKey: rest[3] as string,
                campaignId: rest[4] as string,
                orderId: rest[5] as string,
                orderNumber: rest[6] as string,
                contactId: rest[7] as string,
                organizationId: rest[8] as string,
                currency: rest[9] as string,
                market: rest[10] as string,
                touchKind: rest[11] as string,
                touchRef: rest[12] as string,
                isFirstTouch: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const factKey = params.factKey;
        const campaignId = params.campaignId;
        const orderId = params.orderId;
        const orderNumber = params.orderNumber;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const currency = params.currency;
        const market = params.market;
        const touchKind = params.touchKind;
        const touchRef = params.touchRef;
        const isFirstTouch = params.isFirstTouch;


        const apiPath = '/v1/campaigns/attribution-facts';
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
        if (typeof factKey !== 'undefined') {
            apiPayload['fact_key'] = factKey;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof orderNumber !== 'undefined') {
            apiPayload['order_number'] = orderNumber;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof touchKind !== 'undefined') {
            apiPayload['touch_kind'] = touchKind;
        }
        if (typeof touchRef !== 'undefined') {
            apiPayload['touch_ref'] = touchRef;
        }
        if (typeof isFirstTouch !== 'undefined') {
            apiPayload['is_first_touch'] = isFirstTouch;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributionFact>}
     */
    campaignsAttributionGet(params: { id: string }): Promise<Models.AttributionFact>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributionFact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsAttributionGet(id: string): Promise<Models.AttributionFact>;
    campaignsAttributionGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AttributionFact> {
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

        const apiPath = '/v1/campaigns/attribution-facts/{id}'.replace('{id}', id);
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
     * The hourly schedule, callable by hand: reads committed redemptions of attached promotions and orders placed in the last 48 hours from their apps, and records facts under the same keys the event handlers use. Also moves campaigns whose window opened or closed.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsAttributionSweep(params: { data: object }): Promise<{}>;
    /**
     * The hourly schedule, callable by hand: reads committed redemptions of attached promotions and orders placed in the last 48 hours from their apps, and records facts under the same keys the event handlers use. Also moves campaigns whose window opened or closed.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsAttributionSweep(data: object): Promise<{}>;
    campaignsAttributionSweep(
        paramsOrFirst: { data: object } | object    
    ): Promise<{}> {
        let params: { data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('data' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { data: object };
        } else {
            params = {
                data: paramsOrFirst as object            
            };
        }
        
        const data = params.data;

        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/campaigns/attribution/sweep';
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            Object.assign(apiPayload, data);
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
