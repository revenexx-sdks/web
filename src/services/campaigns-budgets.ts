import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsBudgets {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List budget lines
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.line - Keep only rows whose `line` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.source - Keep only rows whose `source` equals this.
     * @param {string} params.platform - Keep only rows whose `platform` equals this.
     * @param {string} params.notes - Keep only rows whose `notes` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsBudgetsList(params?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, line?: string, currency?: string, source?: string, platform?: string, notes?: string }): Promise<{}>;
    /**
     * List budget lines
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} line - Keep only rows whose `line` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} source - Keep only rows whose `source` equals this.
     * @param {string} platform - Keep only rows whose `platform` equals this.
     * @param {string} notes - Keep only rows whose `notes` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsBudgetsList(limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, line?: string, currency?: string, source?: string, platform?: string, notes?: string): Promise<{}>;
    campaignsBudgetsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, line?: string, currency?: string, source?: string, platform?: string, notes?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, line?: string, currency?: string, source?: string, platform?: string, notes?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, line?: string, currency?: string, source?: string, platform?: string, notes?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                campaignId: rest[3] as string,
                line: rest[4] as string,
                currency: rest[5] as string,
                source: rest[6] as string,
                platform: rest[7] as string,
                notes: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const campaignId = params.campaignId;
        const line = params.line;
        const currency = params.currency;
        const source = params.source;
        const platform = params.platform;
        const notes = params.notes;


        const apiPath = '/v1/campaigns/budgets';
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
        if (typeof line !== 'undefined') {
            apiPayload['line'] = line;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
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
     * @param {string} params.campaignId - The campaign this row belongs to.
     * @param {string} params.line - The name of the line, unique within the campaign, e.g. Print or ads:meta.
     * @param {string} params.currency - Three-letter currency code, e.g. EUR.
     * @param {string} params.notes - Anything worth saying about the line.
     * @param {number} params.planned - Money planned for this line.
     * @param {number} params.spent - Money spent. For a line fed by ad spend, the sum of the booked days.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignBudget>}
     */
    campaignsBudgetsCreate(params: { campaignId: string, line: string, currency?: string, notes?: string, planned?: number, spent?: number }): Promise<Models.CampaignBudget>;
    /**
     *
     * @param {string} campaignId - The campaign this row belongs to.
     * @param {string} line - The name of the line, unique within the campaign, e.g. Print or ads:meta.
     * @param {string} currency - Three-letter currency code, e.g. EUR.
     * @param {string} notes - Anything worth saying about the line.
     * @param {number} planned - Money planned for this line.
     * @param {number} spent - Money spent. For a line fed by ad spend, the sum of the booked days.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignBudget>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsBudgetsCreate(campaignId: string, line: string, currency?: string, notes?: string, planned?: number, spent?: number): Promise<Models.CampaignBudget>;
    campaignsBudgetsCreate(
        paramsOrFirst: { campaignId: string, line: string, currency?: string, notes?: string, planned?: number, spent?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.CampaignBudget> {
        let params: { campaignId: string, line: string, currency?: string, notes?: string, planned?: number, spent?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { campaignId: string, line: string, currency?: string, notes?: string, planned?: number, spent?: number };
        } else {
            params = {
                campaignId: paramsOrFirst as string,
                line: rest[0] as string,
                currency: rest[1] as string,
                notes: rest[2] as string,
                planned: rest[3] as number,
                spent: rest[4] as number            
            };
        }
        
        const campaignId = params.campaignId;
        const line = params.line;
        const currency = params.currency;
        const notes = params.notes;
        const planned = params.planned;
        const spent = params.spent;

        if (typeof campaignId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "campaignId"');
        }
        if (typeof line === 'undefined') {
            throw new RevenexxException('Missing required parameter: "line"');
        }

        const apiPath = '/v1/campaigns/budgets';
        const apiPayload: Payload = {};
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof line !== 'undefined') {
            apiPayload['line'] = line;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
        }
        if (typeof planned !== 'undefined') {
            apiPayload['planned'] = planned;
        }
        if (typeof spent !== 'undefined') {
            apiPayload['spent'] = spent;
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
    campaignsBudgetsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsBudgetsDelete(id: string): Promise<{}>;
    campaignsBudgetsDelete(
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

        const apiPath = '/v1/campaigns/budgets/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.CampaignBudget>}
     */
    campaignsBudgetsGet(params: { id: string }): Promise<Models.CampaignBudget>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignBudget>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsBudgetsGet(id: string): Promise<Models.CampaignBudget>;
    campaignsBudgetsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignBudget> {
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

        const apiPath = '/v1/campaigns/budgets/{id}'.replace('{id}', id);
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
     * @param {string} params.campaignId - The campaign this row belongs to.
     * @param {string} params.currency - Three-letter currency code, e.g. EUR.
     * @param {string} params.line - The name of the line, unique within the campaign, e.g. Print or ads:meta.
     * @param {string} params.notes - Anything worth saying about the line.
     * @param {number} params.planned - Money planned for this line.
     * @param {number} params.spent - Money spent. For a line fed by ad spend, the sum of the booked days.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignBudget>}
     */
    campaignsBudgetsUpdate(params: { id: string, campaignId?: string, currency?: string, line?: string, notes?: string, planned?: number, spent?: number }): Promise<Models.CampaignBudget>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} campaignId - The campaign this row belongs to.
     * @param {string} currency - Three-letter currency code, e.g. EUR.
     * @param {string} line - The name of the line, unique within the campaign, e.g. Print or ads:meta.
     * @param {string} notes - Anything worth saying about the line.
     * @param {number} planned - Money planned for this line.
     * @param {number} spent - Money spent. For a line fed by ad spend, the sum of the booked days.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignBudget>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsBudgetsUpdate(id: string, campaignId?: string, currency?: string, line?: string, notes?: string, planned?: number, spent?: number): Promise<Models.CampaignBudget>;
    campaignsBudgetsUpdate(
        paramsOrFirst: { id: string, campaignId?: string, currency?: string, line?: string, notes?: string, planned?: number, spent?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.CampaignBudget> {
        let params: { id: string, campaignId?: string, currency?: string, line?: string, notes?: string, planned?: number, spent?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, campaignId?: string, currency?: string, line?: string, notes?: string, planned?: number, spent?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                campaignId: rest[0] as string,
                currency: rest[1] as string,
                line: rest[2] as string,
                notes: rest[3] as string,
                planned: rest[4] as number,
                spent: rest[5] as number            
            };
        }
        
        const id = params.id;
        const campaignId = params.campaignId;
        const currency = params.currency;
        const line = params.line;
        const notes = params.notes;
        const planned = params.planned;
        const spent = params.spent;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/campaigns/budgets/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof line !== 'undefined') {
            apiPayload['line'] = line;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
        }
        if (typeof planned !== 'undefined') {
            apiPayload['planned'] = planned;
        }
        if (typeof spent !== 'undefined') {
            apiPayload['spent'] = spent;
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
