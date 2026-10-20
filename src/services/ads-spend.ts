import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Model } from '../enums/model';

export class AdsSpend {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Spend per day, clicks and consented conversions per day, from the first active day to the last with every day between, at most the latest 60; and spend per ad campaign, largest first. Spend in the account's currency only; words in the caller's language. Reads only.
     *
     * @param {string} params.id - The ad account.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AccountFigures>}
     */
    adsSpendFigures(params: { id: string }): Promise<Models.AccountFigures>;
    /**
     * Spend per day, clicks and consented conversions per day, from the first active day to the last with every day between, at most the latest 60; and spend per ad campaign, largest first. Spend in the account's currency only; words in the caller's language. Reads only.
     *
     * @param {string} id - The ad account.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AccountFigures>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSpendFigures(id: string): Promise<Models.AccountFigures>;
    adsSpendFigures(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AccountFigures> {
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

        const apiPath = '/v1/ads/accounts/{id}/figures'.replace('{id}', id);
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
     * Revenue as campaigns attributes it under the model, divided by the ad spend booked here in the campaign's currency, with spend per platform.
     *
     * @param {string} params.campaignId - The campaign.
     * @param {Model} params.model - Default last_touch.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Roas>}
     */
    adsSpendRoas(params: { campaignId: string, model?: Model }): Promise<Models.Roas>;
    /**
     * Revenue as campaigns attributes it under the model, divided by the ad spend booked here in the campaign's currency, with spend per platform.
     *
     * @param {string} campaignId - The campaign.
     * @param {Model} model - Default last_touch.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Roas>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSpendRoas(campaignId: string, model?: Model): Promise<Models.Roas>;
    adsSpendRoas(
        paramsOrFirst: { campaignId: string, model?: Model } | string,
        ...rest: [(Model)?]    
    ): Promise<Models.Roas> {
        let params: { campaignId: string, model?: Model };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { campaignId: string, model?: Model };
        } else {
            params = {
                campaignId: paramsOrFirst as string,
                model: rest[0] as Model            
            };
        }
        
        const campaignId = params.campaignId;
        const model = params.model;

        if (typeof campaignId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "campaignId"');
        }

        const apiPath = '/v1/ads/campaigns/{campaign_id}/roas'.replace('{campaign_id}', campaignId);
        const apiPayload: Payload = {};
        if (typeof model !== 'undefined') {
            apiPayload['model'] = model;
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
     * Filter `?campaign_id=`, `?ad_account_id=`, `?booking_state=unlinked`, `?spend_date=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} params.externalCampaignId - Keep only rows whose `external_campaign_id` equals this.
     * @param {string} params.linkId - Keep only rows whose `link_id` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.platform - Keep only rows whose `platform` equals this.
     * @param {string} params.spendDate - Keep only rows whose `spend_date` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.impressions - Keep only rows whose `impressions` equals this.
     * @param {string} params.clicks - Keep only rows whose `clicks` equals this.
     * @param {string} params.bookingState - Keep only rows whose `booking_state` equals this.
     * @param {string} params.bookingError - Keep only rows whose `booking_error` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsSpendList(params?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, linkId?: string, campaignId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string, bookingState?: string, bookingError?: string }): Promise<{}>;
    /**
     * Filter `?campaign_id=`, `?ad_account_id=`, `?booking_state=unlinked`, `?spend_date=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} externalCampaignId - Keep only rows whose `external_campaign_id` equals this.
     * @param {string} linkId - Keep only rows whose `link_id` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} platform - Keep only rows whose `platform` equals this.
     * @param {string} spendDate - Keep only rows whose `spend_date` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} impressions - Keep only rows whose `impressions` equals this.
     * @param {string} clicks - Keep only rows whose `clicks` equals this.
     * @param {string} bookingState - Keep only rows whose `booking_state` equals this.
     * @param {string} bookingError - Keep only rows whose `booking_error` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSpendList(limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, linkId?: string, campaignId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string, bookingState?: string, bookingError?: string): Promise<{}>;
    adsSpendList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, linkId?: string, campaignId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string, bookingState?: string, bookingError?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, linkId?: string, campaignId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string, bookingState?: string, bookingError?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, externalCampaignId?: string, linkId?: string, campaignId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string, bookingState?: string, bookingError?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                adAccountId: rest[3] as string,
                externalCampaignId: rest[4] as string,
                linkId: rest[5] as string,
                campaignId: rest[6] as string,
                platform: rest[7] as string,
                spendDate: rest[8] as string,
                currency: rest[9] as string,
                impressions: rest[10] as string,
                clicks: rest[11] as string,
                bookingState: rest[12] as string,
                bookingError: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const adAccountId = params.adAccountId;
        const externalCampaignId = params.externalCampaignId;
        const linkId = params.linkId;
        const campaignId = params.campaignId;
        const platform = params.platform;
        const spendDate = params.spendDate;
        const currency = params.currency;
        const impressions = params.impressions;
        const clicks = params.clicks;
        const bookingState = params.bookingState;
        const bookingError = params.bookingError;


        const apiPath = '/v1/ads/spend';
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
        if (typeof linkId !== 'undefined') {
            apiPayload['link_id'] = linkId;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        if (typeof spendDate !== 'undefined') {
            apiPayload['spend_date'] = spendDate;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof impressions !== 'undefined') {
            apiPayload['impressions'] = impressions;
        }
        if (typeof clicks !== 'undefined') {
            apiPayload['clicks'] = clicks;
        }
        if (typeof bookingState !== 'undefined') {
            apiPayload['booking_state'] = bookingState;
        }
        if (typeof bookingError !== 'undefined') {
            apiPayload['booking_error'] = bookingError;
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
     * Called by the daily spend workflow. Each row is kept per account, ad campaign and day; a second import of a day replaces it. Mapped spend is booked into the campaign budget, summed per campaign, platform and day.
     *
     * @param {object[]} params.rows - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.SpendImportResult>}
     */
    adsSpendImport(params: { rows: object[] }): Promise<Models.SpendImportResult>;
    /**
     * Called by the daily spend workflow. Each row is kept per account, ad campaign and day; a second import of a day replaces it. Mapped spend is booked into the campaign budget, summed per campaign, platform and day.
     *
     * @param {object[]} rows - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.SpendImportResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSpendImport(rows: object[]): Promise<Models.SpendImportResult>;
    adsSpendImport(
        paramsOrFirst: { rows: object[] } | object[]    
    ): Promise<Models.SpendImportResult> {
        let params: { rows: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('rows' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { rows: object[] };
        } else {
            params = {
                rows: paramsOrFirst as object[]            
            };
        }
        
        const rows = params.rows;

        if (typeof rows === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rows"');
        }

        const apiPath = '/v1/ads/spend';
        const apiPayload: Payload = {};
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = Client.toWireKeys(rows, {"adAccountId":{"wire":"ad_account_id","children":null},"externalCampaignId":{"wire":"external_campaign_id","children":null},"externalName":{"wire":"external_name","children":null}});
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
     * @returns {Promise<Models.AdSpendDay>}
     */
    adsSpendGet(params: { id: string }): Promise<Models.AdSpendDay>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdSpendDay>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsSpendGet(id: string): Promise<Models.AdSpendDay>;
    adsSpendGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AdSpendDay> {
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

        const apiPath = '/v1/ads/spend/{id}'.replace('{id}', id);
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
