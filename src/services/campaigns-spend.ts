import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsSpend {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List booked days of ad spend
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.budgetId - Keep only rows whose `budget_id` equals this.
     * @param {string} params.platform - Keep only rows whose `platform` equals this.
     * @param {string} params.spendDate - Keep only rows whose `spend_date` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.impressions - Keep only rows whose `impressions` equals this.
     * @param {string} params.clicks - Keep only rows whose `clicks` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsSpendList(params?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, budgetId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string }): Promise<{}>;
    /**
     * List booked days of ad spend
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} budgetId - Keep only rows whose `budget_id` equals this.
     * @param {string} platform - Keep only rows whose `platform` equals this.
     * @param {string} spendDate - Keep only rows whose `spend_date` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} impressions - Keep only rows whose `impressions` equals this.
     * @param {string} clicks - Keep only rows whose `clicks` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsSpendList(limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, budgetId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string): Promise<{}>;
    campaignsSpendList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, budgetId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, budgetId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, budgetId?: string, platform?: string, spendDate?: string, currency?: string, impressions?: string, clicks?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                campaignId: rest[3] as string,
                budgetId: rest[4] as string,
                platform: rest[5] as string,
                spendDate: rest[6] as string,
                currency: rest[7] as string,
                impressions: rest[8] as string,
                clicks: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const campaignId = params.campaignId;
        const budgetId = params.budgetId;
        const platform = params.platform;
        const spendDate = params.spendDate;
        const currency = params.currency;
        const impressions = params.impressions;
        const clicks = params.clicks;


        const apiPath = '/v1/campaigns/spend';
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
        if (typeof budgetId !== 'undefined') {
            apiPayload['budget_id'] = budgetId;
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
     * At most 500 rows. Each books one day of one platform into the campaign ads budget line, created on first use; booking a day again replaces it.
     *
     * @param {object[]} params.rows - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsSpendImport(params: { rows: object[] }): Promise<{}>;
    /**
     * At most 500 rows. Each books one day of one platform into the campaign ads budget line, created on first use; booking a day again replaces it.
     *
     * @param {object[]} rows - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsSpendImport(rows: object[]): Promise<{}>;
    campaignsSpendImport(
        paramsOrFirst: { rows: object[] } | object[]    
    ): Promise<{}> {
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

        const apiPath = '/v1/campaigns/spend';
        const apiPayload: Payload = {};
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = Client.toWireKeys(rows, {"campaignId":{"wire":"campaign_id","children":null}});
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
     * @returns {Promise<Models.CampaignSpendDay>}
     */
    campaignsSpendGet(params: { id: string }): Promise<Models.CampaignSpendDay>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignSpendDay>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsSpendGet(id: string): Promise<Models.CampaignSpendDay>;
    campaignsSpendGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignSpendDay> {
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

        const apiPath = '/v1/campaigns/spend/{id}'.replace('{id}', id);
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
