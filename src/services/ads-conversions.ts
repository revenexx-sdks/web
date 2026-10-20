import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class AdsConversions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The workflow reads `?state=ready`; filter also `?order_id=`, `?rule_id=`, `?platform=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.ruleId - Keep only rows whose `rule_id` equals this.
     * @param {string} params.adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} params.eventKey - Keep only rows whose `event_key` equals this.
     * @param {string} params.event - Keep only rows whose `event` equals this.
     * @param {string} params.platform - Keep only rows whose `platform` equals this.
     * @param {string} params.sourceRef - Keep only rows whose `source_ref` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.clickId - Keep only rows whose `click_id` equals this.
     * @param {string} params.clickIdKind - Keep only rows whose `click_id_kind` equals this.
     * @param {string} params.hashedEmail - Keep only rows whose `hashed_email` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.attempts - Keep only rows whose `attempts` equals this.
     * @param {string} params.externalRef - Keep only rows whose `external_ref` equals this.
     * @param {string} params.lastError - Keep only rows whose `last_error` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsConversionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, ruleId?: string, adAccountId?: string, eventKey?: string, event?: string, platform?: string, sourceRef?: string, orderId?: string, clickId?: string, clickIdKind?: string, hashedEmail?: string, currency?: string, state?: string, attempts?: string, externalRef?: string, lastError?: string }): Promise<{}>;
    /**
     * The workflow reads `?state=ready`; filter also `?order_id=`, `?rule_id=`, `?platform=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} ruleId - Keep only rows whose `rule_id` equals this.
     * @param {string} adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} eventKey - Keep only rows whose `event_key` equals this.
     * @param {string} event - Keep only rows whose `event` equals this.
     * @param {string} platform - Keep only rows whose `platform` equals this.
     * @param {string} sourceRef - Keep only rows whose `source_ref` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} clickId - Keep only rows whose `click_id` equals this.
     * @param {string} clickIdKind - Keep only rows whose `click_id_kind` equals this.
     * @param {string} hashedEmail - Keep only rows whose `hashed_email` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} attempts - Keep only rows whose `attempts` equals this.
     * @param {string} externalRef - Keep only rows whose `external_ref` equals this.
     * @param {string} lastError - Keep only rows whose `last_error` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsConversionsList(limit?: number, offset?: number, order?: string, id?: string, ruleId?: string, adAccountId?: string, eventKey?: string, event?: string, platform?: string, sourceRef?: string, orderId?: string, clickId?: string, clickIdKind?: string, hashedEmail?: string, currency?: string, state?: string, attempts?: string, externalRef?: string, lastError?: string): Promise<{}>;
    adsConversionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, ruleId?: string, adAccountId?: string, eventKey?: string, event?: string, platform?: string, sourceRef?: string, orderId?: string, clickId?: string, clickIdKind?: string, hashedEmail?: string, currency?: string, state?: string, attempts?: string, externalRef?: string, lastError?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, ruleId?: string, adAccountId?: string, eventKey?: string, event?: string, platform?: string, sourceRef?: string, orderId?: string, clickId?: string, clickIdKind?: string, hashedEmail?: string, currency?: string, state?: string, attempts?: string, externalRef?: string, lastError?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, ruleId?: string, adAccountId?: string, eventKey?: string, event?: string, platform?: string, sourceRef?: string, orderId?: string, clickId?: string, clickIdKind?: string, hashedEmail?: string, currency?: string, state?: string, attempts?: string, externalRef?: string, lastError?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                ruleId: rest[3] as string,
                adAccountId: rest[4] as string,
                eventKey: rest[5] as string,
                event: rest[6] as string,
                platform: rest[7] as string,
                sourceRef: rest[8] as string,
                orderId: rest[9] as string,
                clickId: rest[10] as string,
                clickIdKind: rest[11] as string,
                hashedEmail: rest[12] as string,
                currency: rest[13] as string,
                state: rest[14] as string,
                attempts: rest[15] as string,
                externalRef: rest[16] as string,
                lastError: rest[17] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const ruleId = params.ruleId;
        const adAccountId = params.adAccountId;
        const eventKey = params.eventKey;
        const event = params.event;
        const platform = params.platform;
        const sourceRef = params.sourceRef;
        const orderId = params.orderId;
        const clickId = params.clickId;
        const clickIdKind = params.clickIdKind;
        const hashedEmail = params.hashedEmail;
        const currency = params.currency;
        const state = params.state;
        const attempts = params.attempts;
        const externalRef = params.externalRef;
        const lastError = params.lastError;


        const apiPath = '/v1/ads/conversions';
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
        if (typeof ruleId !== 'undefined') {
            apiPayload['rule_id'] = ruleId;
        }
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof eventKey !== 'undefined') {
            apiPayload['event_key'] = eventKey;
        }
        if (typeof event !== 'undefined') {
            apiPayload['event'] = event;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        if (typeof sourceRef !== 'undefined') {
            apiPayload['source_ref'] = sourceRef;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof clickId !== 'undefined') {
            apiPayload['click_id'] = clickId;
        }
        if (typeof clickIdKind !== 'undefined') {
            apiPayload['click_id_kind'] = clickIdKind;
        }
        if (typeof hashedEmail !== 'undefined') {
            apiPayload['hashed_email'] = hashedEmail;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof attempts !== 'undefined') {
            apiPayload['attempts'] = attempts;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof lastError !== 'undefined') {
            apiPayload['last_error'] = lastError;
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
     * @returns {Promise<Models.Conversion>}
     */
    adsConversionsGet(params: { id: string }): Promise<Models.Conversion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Conversion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsConversionsGet(id: string): Promise<Models.Conversion>;
    adsConversionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Conversion> {
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

        const apiPath = '/v1/ads/conversions/{id}'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.error - 
     * @param {string} params.externalRef - 
     * @param {boolean} params.ok - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Conversion>}
     */
    adsConversionsResult(params: { id: string, error?: string, externalRef?: string, ok?: boolean }): Promise<Models.Conversion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} error - 
     * @param {string} externalRef - 
     * @param {boolean} ok - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Conversion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsConversionsResult(id: string, error?: string, externalRef?: string, ok?: boolean): Promise<Models.Conversion>;
    adsConversionsResult(
        paramsOrFirst: { id: string, error?: string, externalRef?: string, ok?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Conversion> {
        let params: { id: string, error?: string, externalRef?: string, ok?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, error?: string, externalRef?: string, ok?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                error: rest[0] as string,
                externalRef: rest[1] as string,
                ok: rest[2] as boolean            
            };
        }
        
        const id = params.id;
        const error = params.error;
        const externalRef = params.externalRef;
        const ok = params.ok;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/conversions/{id}/result'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof error !== 'undefined') {
            apiPayload['error'] = error;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof ok !== 'undefined') {
            apiPayload['ok'] = ok;
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
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Conversion>}
     */
    adsConversionsRetry(params: { id: string, data: object }): Promise<Models.Conversion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Conversion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsConversionsRetry(id: string, data: object): Promise<Models.Conversion>;
    adsConversionsRetry(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Conversion> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/ads/conversions/{id}/retry'.replace('{id}', id);
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
