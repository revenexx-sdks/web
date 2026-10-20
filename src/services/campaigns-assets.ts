import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsAssets {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?campaign_id=` for one campaign, `?asset_app=&asset_id=` for the campaign that holds an asset. Written only through attach and detach.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.assetApp - Keep only rows whose `asset_app` equals this.
     * @param {string} params.assetEntity - Keep only rows whose `asset_entity` equals this.
     * @param {string} params.assetId - Keep only rows whose `asset_id` equals this.
     * @param {string} params.label - Keep only rows whose `label` equals this.
     * @param {string} params.claim - Keep only rows whose `claim` equals this.
     * @param {string} params.addedBy - Keep only rows whose `added_by` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsAssetsList(params?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, assetApp?: string, assetEntity?: string, assetId?: string, label?: string, claim?: string, addedBy?: string }): Promise<{}>;
    /**
     * Filter `?campaign_id=` for one campaign, `?asset_app=&asset_id=` for the campaign that holds an asset. Written only through attach and detach.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} assetApp - Keep only rows whose `asset_app` equals this.
     * @param {string} assetEntity - Keep only rows whose `asset_entity` equals this.
     * @param {string} assetId - Keep only rows whose `asset_id` equals this.
     * @param {string} label - Keep only rows whose `label` equals this.
     * @param {string} claim - Keep only rows whose `claim` equals this.
     * @param {string} addedBy - Keep only rows whose `added_by` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsAssetsList(limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, assetApp?: string, assetEntity?: string, assetId?: string, label?: string, claim?: string, addedBy?: string): Promise<{}>;
    campaignsAssetsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, assetApp?: string, assetEntity?: string, assetId?: string, label?: string, claim?: string, addedBy?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, assetApp?: string, assetEntity?: string, assetId?: string, label?: string, claim?: string, addedBy?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, assetApp?: string, assetEntity?: string, assetId?: string, label?: string, claim?: string, addedBy?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                campaignId: rest[3] as string,
                assetApp: rest[4] as string,
                assetEntity: rest[5] as string,
                assetId: rest[6] as string,
                label: rest[7] as string,
                claim: rest[8] as string,
                addedBy: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const campaignId = params.campaignId;
        const assetApp = params.assetApp;
        const assetEntity = params.assetEntity;
        const assetId = params.assetId;
        const label = params.label;
        const claim = params.claim;
        const addedBy = params.addedBy;


        const apiPath = '/v1/campaigns/assets';
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
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof assetApp !== 'undefined') {
            apiPayload['asset_app'] = assetApp;
        }
        if (typeof assetEntity !== 'undefined') {
            apiPayload['asset_entity'] = assetEntity;
        }
        if (typeof assetId !== 'undefined') {
            apiPayload['asset_id'] = assetId;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof claim !== 'undefined') {
            apiPayload['claim'] = claim;
        }
        if (typeof addedBy !== 'undefined') {
            apiPayload['added_by'] = addedBy;
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
     * @returns {Promise<Models.CampaignAsset>}
     */
    campaignsAssetsGet(params: { id: string }): Promise<Models.CampaignAsset>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignAsset>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsAssetsGet(id: string): Promise<Models.CampaignAsset>;
    campaignsAssetsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignAsset> {
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

        const apiPath = '/v1/campaigns/assets/{id}'.replace('{id}', id);
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
     * The same as detaching from the campaign, addressed by the asset row — what a list row offers.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsAssetsDetach(params: { id: string, data: object }): Promise<{}>;
    /**
     * The same as detaching from the campaign, addressed by the asset row — what a list row offers.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsAssetsDetach(id: string, data: object): Promise<{}>;
    campaignsAssetsDetach(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
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

        const apiPath = '/v1/campaigns/assets/{id}/detach'.replace('{id}', id);
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
