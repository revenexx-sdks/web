import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class AdsSyncs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?ad_account_id=`, `?audience_id=`, `?state=failed`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} params.audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} params.audienceCode - Keep only rows whose `audience_code` equals this.
     * @param {string} params.subscriptionType - Keep only rows whose `subscription_type` equals this.
     * @param {string} params.externalAudienceId - Keep only rows whose `external_audience_id` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @param {string} params.stale - Keep only rows whose `stale` equals this.
     * @param {string} params.memberCount - Keep only rows whose `member_count` equals this.
     * @param {string} params.matchedCount - Keep only rows whose `matched_count` equals this.
     * @param {string} params.uploadedCount - Keep only rows whose `uploaded_count` equals this.
     * @param {string} params.skippedCount - Keep only rows whose `skipped_count` equals this.
     * @param {string} params.lastError - Keep only rows whose `last_error` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsSyncsList(params?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, audienceId?: string, audienceCode?: string, subscriptionType?: string, externalAudienceId?: string, state?: string, active?: string, stale?: string, memberCount?: string, matchedCount?: string, uploadedCount?: string, skippedCount?: string, lastError?: string }): Promise<{}>;
    /**
     * Filter `?ad_account_id=`, `?audience_id=`, `?state=failed`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} audienceCode - Keep only rows whose `audience_code` equals this.
     * @param {string} subscriptionType - Keep only rows whose `subscription_type` equals this.
     * @param {string} externalAudienceId - Keep only rows whose `external_audience_id` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @param {string} stale - Keep only rows whose `stale` equals this.
     * @param {string} memberCount - Keep only rows whose `member_count` equals this.
     * @param {string} matchedCount - Keep only rows whose `matched_count` equals this.
     * @param {string} uploadedCount - Keep only rows whose `uploaded_count` equals this.
     * @param {string} skippedCount - Keep only rows whose `skipped_count` equals this.
     * @param {string} lastError - Keep only rows whose `last_error` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsList(limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, audienceId?: string, audienceCode?: string, subscriptionType?: string, externalAudienceId?: string, state?: string, active?: string, stale?: string, memberCount?: string, matchedCount?: string, uploadedCount?: string, skippedCount?: string, lastError?: string): Promise<{}>;
    adsSyncsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, audienceId?: string, audienceCode?: string, subscriptionType?: string, externalAudienceId?: string, state?: string, active?: string, stale?: string, memberCount?: string, matchedCount?: string, uploadedCount?: string, skippedCount?: string, lastError?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, audienceId?: string, audienceCode?: string, subscriptionType?: string, externalAudienceId?: string, state?: string, active?: string, stale?: string, memberCount?: string, matchedCount?: string, uploadedCount?: string, skippedCount?: string, lastError?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, audienceId?: string, audienceCode?: string, subscriptionType?: string, externalAudienceId?: string, state?: string, active?: string, stale?: string, memberCount?: string, matchedCount?: string, uploadedCount?: string, skippedCount?: string, lastError?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                adAccountId: rest[3] as string,
                audienceId: rest[4] as string,
                audienceCode: rest[5] as string,
                subscriptionType: rest[6] as string,
                externalAudienceId: rest[7] as string,
                state: rest[8] as string,
                active: rest[9] as string,
                stale: rest[10] as string,
                memberCount: rest[11] as string,
                matchedCount: rest[12] as string,
                uploadedCount: rest[13] as string,
                skippedCount: rest[14] as string,
                lastError: rest[15] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const adAccountId = params.adAccountId;
        const audienceId = params.audienceId;
        const audienceCode = params.audienceCode;
        const subscriptionType = params.subscriptionType;
        const externalAudienceId = params.externalAudienceId;
        const state = params.state;
        const active = params.active;
        const stale = params.stale;
        const memberCount = params.memberCount;
        const matchedCount = params.matchedCount;
        const uploadedCount = params.uploadedCount;
        const skippedCount = params.skippedCount;
        const lastError = params.lastError;


        const apiPath = '/v1/ads/audience-syncs';
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
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof audienceCode !== 'undefined') {
            apiPayload['audience_code'] = audienceCode;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
        }
        if (typeof externalAudienceId !== 'undefined') {
            apiPayload['external_audience_id'] = externalAudienceId;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof stale !== 'undefined') {
            apiPayload['stale'] = stale;
        }
        if (typeof memberCount !== 'undefined') {
            apiPayload['member_count'] = memberCount;
        }
        if (typeof matchedCount !== 'undefined') {
            apiPayload['matched_count'] = matchedCount;
        }
        if (typeof uploadedCount !== 'undefined') {
            apiPayload['uploaded_count'] = uploadedCount;
        }
        if (typeof skippedCount !== 'undefined') {
            apiPayload['skipped_count'] = skippedCount;
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
     * @param {string} params.adAccountId - The ad account this row belongs to.
     * @param {string} params.audienceId - The audience in the audiences app.
     * @param {string} params.subscriptionType - The marketing-consents subscription type whose confirmed consent covers uploading a member.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} params.audienceCode - Its code, copied for display.
     * @param {string} params.externalAudienceId - The custom audience id on the platform, once the workflow created it.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     */
    adsSyncsCreate(params: { adAccountId: string, audienceId: string, subscriptionType: string, active?: boolean, audienceCode?: string, externalAudienceId?: string, metadata?: any }): Promise<Models.AudienceSync>;
    /**
     *
     * @param {string} adAccountId - The ad account this row belongs to.
     * @param {string} audienceId - The audience in the audiences app.
     * @param {string} subscriptionType - The marketing-consents subscription type whose confirmed consent covers uploading a member.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} audienceCode - Its code, copied for display.
     * @param {string} externalAudienceId - The custom audience id on the platform, once the workflow created it.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsCreate(adAccountId: string, audienceId: string, subscriptionType: string, active?: boolean, audienceCode?: string, externalAudienceId?: string, metadata?: any): Promise<Models.AudienceSync>;
    adsSyncsCreate(
        paramsOrFirst: { adAccountId: string, audienceId: string, subscriptionType: string, active?: boolean, audienceCode?: string, externalAudienceId?: string, metadata?: any } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (any)?]    
    ): Promise<Models.AudienceSync> {
        let params: { adAccountId: string, audienceId: string, subscriptionType: string, active?: boolean, audienceCode?: string, externalAudienceId?: string, metadata?: any };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { adAccountId: string, audienceId: string, subscriptionType: string, active?: boolean, audienceCode?: string, externalAudienceId?: string, metadata?: any };
        } else {
            params = {
                adAccountId: paramsOrFirst as string,
                audienceId: rest[0] as string,
                subscriptionType: rest[1] as string,
                active: rest[2] as boolean,
                audienceCode: rest[3] as string,
                externalAudienceId: rest[4] as string,
                metadata: rest[5] as any            
            };
        }
        
        const adAccountId = params.adAccountId;
        const audienceId = params.audienceId;
        const subscriptionType = params.subscriptionType;
        const active = params.active;
        const audienceCode = params.audienceCode;
        const externalAudienceId = params.externalAudienceId;
        const metadata = params.metadata;

        if (typeof adAccountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "adAccountId"');
        }
        if (typeof audienceId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "audienceId"');
        }
        if (typeof subscriptionType === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriptionType"');
        }

        const apiPath = '/v1/ads/audience-syncs';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof audienceCode !== 'undefined') {
            apiPayload['audience_code'] = audienceCode;
        }
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof externalAudienceId !== 'undefined') {
            apiPayload['external_audience_id'] = externalAudienceId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
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
     * @returns {Promise<{}>}
     */
    adsSyncsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsDelete(id: string): Promise<{}>;
    adsSyncsDelete(
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

        const apiPath = '/v1/ads/audience-syncs/{id}'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     */
    adsSyncsGet(params: { id: string }): Promise<Models.AudienceSync>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsGet(id: string): Promise<Models.AudienceSync>;
    adsSyncsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceSync> {
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

        const apiPath = '/v1/ads/audience-syncs/{id}'.replace('{id}', id);
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
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} params.adAccountId - The ad account this row belongs to.
     * @param {string} params.audienceCode - Its code, copied for display.
     * @param {string} params.audienceId - The audience in the audiences app.
     * @param {string} params.externalAudienceId - The custom audience id on the platform, once the workflow created it.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.subscriptionType - The marketing-consents subscription type whose confirmed consent covers uploading a member.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     */
    adsSyncsUpdate(params: { id: string, active?: boolean, adAccountId?: string, audienceCode?: string, audienceId?: string, externalAudienceId?: string, metadata?: any, subscriptionType?: string }): Promise<Models.AudienceSync>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} adAccountId - The ad account this row belongs to.
     * @param {string} audienceCode - Its code, copied for display.
     * @param {string} audienceId - The audience in the audiences app.
     * @param {string} externalAudienceId - The custom audience id on the platform, once the workflow created it.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} subscriptionType - The marketing-consents subscription type whose confirmed consent covers uploading a member.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsUpdate(id: string, active?: boolean, adAccountId?: string, audienceCode?: string, audienceId?: string, externalAudienceId?: string, metadata?: any, subscriptionType?: string): Promise<Models.AudienceSync>;
    adsSyncsUpdate(
        paramsOrFirst: { id: string, active?: boolean, adAccountId?: string, audienceCode?: string, audienceId?: string, externalAudienceId?: string, metadata?: any, subscriptionType?: string } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?, (string)?, (any)?, (string)?]    
    ): Promise<Models.AudienceSync> {
        let params: { id: string, active?: boolean, adAccountId?: string, audienceCode?: string, audienceId?: string, externalAudienceId?: string, metadata?: any, subscriptionType?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, adAccountId?: string, audienceCode?: string, audienceId?: string, externalAudienceId?: string, metadata?: any, subscriptionType?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                adAccountId: rest[1] as string,
                audienceCode: rest[2] as string,
                audienceId: rest[3] as string,
                externalAudienceId: rest[4] as string,
                metadata: rest[5] as any,
                subscriptionType: rest[6] as string            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const adAccountId = params.adAccountId;
        const audienceCode = params.audienceCode;
        const audienceId = params.audienceId;
        const externalAudienceId = params.externalAudienceId;
        const metadata = params.metadata;
        const subscriptionType = params.subscriptionType;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/audience-syncs/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof audienceCode !== 'undefined') {
            apiPayload['audience_code'] = audienceCode;
        }
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof externalAudienceId !== 'undefined') {
            apiPayload['external_audience_id'] = externalAudienceId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
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
     * SHA-256 of the trimmed, lower-cased e-mail of every member holding a confirmed subscription of the sync type — by default only consent, not the existing-customer exemption. Members without it are counted as skipped and never served.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.cursor - The next_cursor of the previous page.
     * @param {number} params.limit - Page size (default and max 500).
     * @throws {RevenexxException}
     * @returns {Promise<Models.HashedMembers>}
     */
    adsSyncsMembers(params: { id: string, cursor?: string, limit?: number }): Promise<Models.HashedMembers>;
    /**
     * SHA-256 of the trimmed, lower-cased e-mail of every member holding a confirmed subscription of the sync type — by default only consent, not the existing-customer exemption. Members without it are counted as skipped and never served.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} cursor - The next_cursor of the previous page.
     * @param {number} limit - Page size (default and max 500).
     * @throws {RevenexxException}
     * @returns {Promise<Models.HashedMembers>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsMembers(id: string, cursor?: string, limit?: number): Promise<Models.HashedMembers>;
    adsSyncsMembers(
        paramsOrFirst: { id: string, cursor?: string, limit?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.HashedMembers> {
        let params: { id: string, cursor?: string, limit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, cursor?: string, limit?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                cursor: rest[0] as string,
                limit: rest[1] as number            
            };
        }
        
        const id = params.id;
        const cursor = params.cursor;
        const limit = params.limit;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/audience-syncs/{id}/members'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cursor !== 'undefined') {
            apiPayload['cursor'] = cursor;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
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
     * Announces `audience_sync.requested` for the workflow of the platform.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     */
    adsSyncsRequest(params: { id: string, data: object }): Promise<Models.AudienceSync>;
    /**
     * Announces `audience_sync.requested` for the workflow of the platform.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsRequest(id: string, data: object): Promise<Models.AudienceSync>;
    adsSyncsRequest(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.AudienceSync> {
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

        const apiPath = '/v1/ads/audience-syncs/{id}/request'.replace('{id}', id);
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

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.error - 
     * @param {string} params.externalAudienceId - 
     * @param {number} params.matchedCount - 
     * @param {number} params.memberCount - 
     * @param {boolean} params.ok - 
     * @param {number} params.skippedCount - 
     * @param {number} params.uploadedCount - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     */
    adsSyncsResult(params: { id: string, error?: string, externalAudienceId?: string, matchedCount?: number, memberCount?: number, ok?: boolean, skippedCount?: number, uploadedCount?: number }): Promise<Models.AudienceSync>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} error - 
     * @param {string} externalAudienceId - 
     * @param {number} matchedCount - 
     * @param {number} memberCount - 
     * @param {boolean} ok - 
     * @param {number} skippedCount - 
     * @param {number} uploadedCount - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceSync>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSyncsResult(id: string, error?: string, externalAudienceId?: string, matchedCount?: number, memberCount?: number, ok?: boolean, skippedCount?: number, uploadedCount?: number): Promise<Models.AudienceSync>;
    adsSyncsResult(
        paramsOrFirst: { id: string, error?: string, externalAudienceId?: string, matchedCount?: number, memberCount?: number, ok?: boolean, skippedCount?: number, uploadedCount?: number } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?, (boolean)?, (number)?, (number)?]    
    ): Promise<Models.AudienceSync> {
        let params: { id: string, error?: string, externalAudienceId?: string, matchedCount?: number, memberCount?: number, ok?: boolean, skippedCount?: number, uploadedCount?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, error?: string, externalAudienceId?: string, matchedCount?: number, memberCount?: number, ok?: boolean, skippedCount?: number, uploadedCount?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                error: rest[0] as string,
                externalAudienceId: rest[1] as string,
                matchedCount: rest[2] as number,
                memberCount: rest[3] as number,
                ok: rest[4] as boolean,
                skippedCount: rest[5] as number,
                uploadedCount: rest[6] as number            
            };
        }
        
        const id = params.id;
        const error = params.error;
        const externalAudienceId = params.externalAudienceId;
        const matchedCount = params.matchedCount;
        const memberCount = params.memberCount;
        const ok = params.ok;
        const skippedCount = params.skippedCount;
        const uploadedCount = params.uploadedCount;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/audience-syncs/{id}/result'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof error !== 'undefined') {
            apiPayload['error'] = error;
        }
        if (typeof externalAudienceId !== 'undefined') {
            apiPayload['external_audience_id'] = externalAudienceId;
        }
        if (typeof matchedCount !== 'undefined') {
            apiPayload['matched_count'] = matchedCount;
        }
        if (typeof memberCount !== 'undefined') {
            apiPayload['member_count'] = memberCount;
        }
        if (typeof ok !== 'undefined') {
            apiPayload['ok'] = ok;
        }
        if (typeof skippedCount !== 'undefined') {
            apiPayload['skipped_count'] = skippedCount;
        }
        if (typeof uploadedCount !== 'undefined') {
            apiPayload['uploaded_count'] = uploadedCount;
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
