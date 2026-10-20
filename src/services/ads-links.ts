import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class AdsLinks {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?campaign_id=` for one campaign, `?campaign_id=` empty via the Cockpit for unmapped ones, `?ad_account_id=`. Mapping books the imported spend into the campaign.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} params.externalCampaignId - Keep only rows whose `external_campaign_id` equals this.
     * @param {string} params.externalName - Keep only rows whose `external_name` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsLinksList(params?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, externalName?: string, campaignId?: string }): Promise<{}>;
    /**
     * Filter `?campaign_id=` for one campaign, `?campaign_id=` empty via the Cockpit for unmapped ones, `?ad_account_id=`. Mapping books the imported spend into the campaign.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} externalCampaignId - Keep only rows whose `external_campaign_id` equals this.
     * @param {string} externalName - Keep only rows whose `external_name` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsLinksList(limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, externalName?: string, campaignId?: string): Promise<{}>;
    adsLinksList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, externalName?: string, campaignId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, externalName?: string, campaignId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, externalName?: string, campaignId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                adAccountId: rest[3] as string,
                externalCampaignId: rest[4] as string,
                externalName: rest[5] as string,
                campaignId: rest[6] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const adAccountId = params.adAccountId;
        const externalCampaignId = params.externalCampaignId;
        const externalName = params.externalName;
        const campaignId = params.campaignId;


        const apiPath = '/v1/ads/campaign-links';
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
        if (typeof externalCampaignId !== 'undefined') {
            apiPayload['external_campaign_id'] = externalCampaignId;
        }
        if (typeof externalName !== 'undefined') {
            apiPayload['external_name'] = externalName;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
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
     * @param {string} params.externalCampaignId - The ad campaign id on the platform.
     * @param {string} params.campaignId - The campaign, as the campaigns app knows it.
     * @param {string} params.externalName - Its name on the platform.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdCampaignLink>}
     */
    adsLinksCreate(params: { adAccountId: string, externalCampaignId: string, campaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string }): Promise<Models.AdCampaignLink>;
    /**
     *
     * @param {string} adAccountId - The ad account this row belongs to.
     * @param {string} externalCampaignId - The ad campaign id on the platform.
     * @param {string} campaignId - The campaign, as the campaigns app knows it.
     * @param {string} externalName - Its name on the platform.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdCampaignLink>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsLinksCreate(adAccountId: string, externalCampaignId: string, campaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string): Promise<Models.AdCampaignLink>;
    adsLinksCreate(
        paramsOrFirst: { adAccountId: string, externalCampaignId: string, campaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (any)?, (any)?, (any)?, (string)?]    
    ): Promise<Models.AdCampaignLink> {
        let params: { adAccountId: string, externalCampaignId: string, campaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { adAccountId: string, externalCampaignId: string, campaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string };
        } else {
            params = {
                adAccountId: paramsOrFirst as string,
                externalCampaignId: rest[0] as string,
                campaignId: rest[1] as string,
                externalName: rest[2] as string,
                externalRefs: rest[3] as any,
                metadata: rest[4] as any,
                sourceData: rest[5] as any,
                sourceSyncedAt: rest[6] as string            
            };
        }
        
        const adAccountId = params.adAccountId;
        const externalCampaignId = params.externalCampaignId;
        const campaignId = params.campaignId;
        const externalName = params.externalName;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof adAccountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "adAccountId"');
        }
        if (typeof externalCampaignId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "externalCampaignId"');
        }

        const apiPath = '/v1/ads/campaign-links';
        const apiPayload: Payload = {};
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof externalCampaignId !== 'undefined') {
            apiPayload['external_campaign_id'] = externalCampaignId;
        }
        if (typeof externalName !== 'undefined') {
            apiPayload['external_name'] = externalName;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
    adsLinksDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsLinksDelete(id: string): Promise<{}>;
    adsLinksDelete(
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

        const apiPath = '/v1/ads/campaign-links/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AdCampaignLink>}
     */
    adsLinksGet(params: { id: string }): Promise<Models.AdCampaignLink>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdCampaignLink>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsLinksGet(id: string): Promise<Models.AdCampaignLink>;
    adsLinksGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AdCampaignLink> {
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

        const apiPath = '/v1/ads/campaign-links/{id}'.replace('{id}', id);
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
     * @param {string} params.adAccountId - The ad account this row belongs to.
     * @param {string} params.campaignId - The campaign, as the campaigns app knows it.
     * @param {string} params.externalCampaignId - The ad campaign id on the platform.
     * @param {string} params.externalName - Its name on the platform.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdCampaignLink>}
     */
    adsLinksUpdate(params: { id: string, adAccountId?: string, campaignId?: string, externalCampaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string }): Promise<Models.AdCampaignLink>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} adAccountId - The ad account this row belongs to.
     * @param {string} campaignId - The campaign, as the campaigns app knows it.
     * @param {string} externalCampaignId - The ad campaign id on the platform.
     * @param {string} externalName - Its name on the platform.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdCampaignLink>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsLinksUpdate(id: string, adAccountId?: string, campaignId?: string, externalCampaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string): Promise<Models.AdCampaignLink>;
    adsLinksUpdate(
        paramsOrFirst: { id: string, adAccountId?: string, campaignId?: string, externalCampaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (any)?, (any)?, (any)?, (string)?]    
    ): Promise<Models.AdCampaignLink> {
        let params: { id: string, adAccountId?: string, campaignId?: string, externalCampaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, adAccountId?: string, campaignId?: string, externalCampaignId?: string, externalName?: string, externalRefs?: any, metadata?: any, sourceData?: any, sourceSyncedAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                adAccountId: rest[0] as string,
                campaignId: rest[1] as string,
                externalCampaignId: rest[2] as string,
                externalName: rest[3] as string,
                externalRefs: rest[4] as any,
                metadata: rest[5] as any,
                sourceData: rest[6] as any,
                sourceSyncedAt: rest[7] as string            
            };
        }
        
        const id = params.id;
        const adAccountId = params.adAccountId;
        const campaignId = params.campaignId;
        const externalCampaignId = params.externalCampaignId;
        const externalName = params.externalName;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/campaign-links/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof externalCampaignId !== 'undefined') {
            apiPayload['external_campaign_id'] = externalCampaignId;
        }
        if (typeof externalName !== 'undefined') {
            apiPayload['external_name'] = externalName;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
