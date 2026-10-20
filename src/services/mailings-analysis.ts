import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class MailingsAnalysis {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List clicked links of mailings
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} params.url - Keep only rows whose `url` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisListClicks(params?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, url?: string }): Promise<{}>;
    /**
     * List clicked links of mailings
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} url - Keep only rows whose `url` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisListClicks(limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, url?: string): Promise<{}>;
    mailingsAnalysisListClicks(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, url?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, url?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, url?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                mailingId: rest[3] as string,
                url: rest[4] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const mailingId = params.mailingId;
        const url = params.url;


        const apiPath = '/v1/mailings/clicks';
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
        if (typeof mailingId !== 'undefined') {
            apiPayload['mailing_id'] = mailingId;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
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
     * @returns {Promise<Models.MailingClick>}
     */
    mailingsAnalysisGetClick(params: { id: string }): Promise<Models.MailingClick>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MailingClick>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisGetClick(id: string): Promise<Models.MailingClick>;
    mailingsAnalysisGetClick(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MailingClick> {
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

        const apiPath = '/v1/mailings/clicks/{id}'.replace('{id}', id);
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
     * The ledger of sequencer announcements, one row per announcement. Read-only.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.email - Keep only rows whose `email` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.messageId - Keep only rows whose `message_id` equals this.
     * @param {string} params.isMachine - Keep only rows whose `is_machine` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisListEngagements(params?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, kind?: string, email?: string, contactId?: string, messageId?: string, isMachine?: string }): Promise<{}>;
    /**
     * The ledger of sequencer announcements, one row per announcement. Read-only.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} email - Keep only rows whose `email` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} messageId - Keep only rows whose `message_id` equals this.
     * @param {string} isMachine - Keep only rows whose `is_machine` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisListEngagements(limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, kind?: string, email?: string, contactId?: string, messageId?: string, isMachine?: string): Promise<{}>;
    mailingsAnalysisListEngagements(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, kind?: string, email?: string, contactId?: string, messageId?: string, isMachine?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, kind?: string, email?: string, contactId?: string, messageId?: string, isMachine?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, kind?: string, email?: string, contactId?: string, messageId?: string, isMachine?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                mailingId: rest[3] as string,
                kind: rest[4] as string,
                email: rest[5] as string,
                contactId: rest[6] as string,
                messageId: rest[7] as string,
                isMachine: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const mailingId = params.mailingId;
        const kind = params.kind;
        const email = params.email;
        const contactId = params.contactId;
        const messageId = params.messageId;
        const isMachine = params.isMachine;


        const apiPath = '/v1/mailings/engagements';
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
        if (typeof mailingId !== 'undefined') {
            apiPayload['mailing_id'] = mailingId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof messageId !== 'undefined') {
            apiPayload['message_id'] = messageId;
        }
        if (typeof isMachine !== 'undefined') {
            apiPayload['is_machine'] = isMachine;
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
     * @returns {Promise<Models.MailingEngagement>}
     */
    mailingsAnalysisGetEngagement(params: { id: string }): Promise<Models.MailingEngagement>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MailingEngagement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisGetEngagement(id: string): Promise<Models.MailingEngagement>;
    mailingsAnalysisGetEngagement(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MailingEngagement> {
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

        const apiPath = '/v1/mailings/engagements/{id}'.replace('{id}', id);
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
     * Every clicked link with clicks, unique clickers and its share of all clicks, the most clicked first. `top` carries the most clicked links as rows of label and value, worded in the caller language.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisClicks(params: { id: string }): Promise<{}>;
    /**
     * Every clicked link with clicks, unique clickers and its share of all clicks, the most clicked first. `top` carries the most clicked links as rows of label and value, worded in the caller language.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisClicks(id: string): Promise<{}>;
    mailingsAnalysisClicks(
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

        const apiPath = '/v1/mailings/mailings/{id}/clicks'.replace('{id}', id);
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
     * Recipient outcomes, deliveries, bounces, opens by people and by machines apart, clicks, click rate, click-to-open, unsubscribes, complaints and revenue. Rates are computed from unique clicks and human opens only. `funnel`, `attention` and `outcomes` carry the same figures as rows of label and value, worded in the caller language.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisStats(params: { id: string }): Promise<{}>;
    /**
     * Recipient outcomes, deliveries, bounces, opens by people and by machines apart, clicks, click rate, click-to-open, unsubscribes, complaints and revenue. Rates are computed from unique clicks and human opens only. `funnel`, `attention` and `outcomes` carry the same figures as rows of label and value, worded in the caller language.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisStats(id: string): Promise<{}>;
    mailingsAnalysisStats(
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

        const apiPath = '/v1/mailings/mailings/{id}/stats'.replace('{id}', id);
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
     * Human opens and clicks per day in the tenant time zone, from the first reaction to the last with every day between, at most the latest 60 days. Machine opens are left out.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisTimeline(params: { id: string }): Promise<{}>;
    /**
     * Human opens and clicks per day in the tenant time zone, from the first reaction to the last with every day between, at most the latest 60 days. Machine opens are left out.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisTimeline(id: string): Promise<{}>;
    mailingsAnalysisTimeline(
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

        const apiPath = '/v1/mailings/mailings/{id}/timeline'.replace('{id}', id);
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
     * List the figures of mailings
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.mailingId - Keep only rows whose `mailing_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisListStats(params?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string }): Promise<{}>;
    /**
     * List the figures of mailings
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} mailingId - Keep only rows whose `mailing_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisListStats(limit?: number, offset?: number, order?: string, id?: string, mailingId?: string): Promise<{}>;
    mailingsAnalysisListStats(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                mailingId: rest[3] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const mailingId = params.mailingId;


        const apiPath = '/v1/mailings/stats';
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
        if (typeof mailingId !== 'undefined') {
            apiPayload['mailing_id'] = mailingId;
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
     * The hourly schedule, callable by hand: recomputes revenue from the campaigns ledger and lifts delivered and clicked figures to what the sequencer messages say.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsAnalysisSweep(params: { data: object }): Promise<{}>;
    /**
     * The hourly schedule, callable by hand: recomputes revenue from the campaigns ledger and lifts delivered and clicked figures to what the sequencer messages say.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisSweep(data: object): Promise<{}>;
    mailingsAnalysisSweep(
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

        const apiPath = '/v1/mailings/stats/sweep';
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
     * @throws {RevenexxException}
     * @returns {Promise<Models.MailingStats>}
     */
    mailingsAnalysisGetStats(params: { id: string }): Promise<Models.MailingStats>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MailingStats>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsAnalysisGetStats(id: string): Promise<Models.MailingStats>;
    mailingsAnalysisGetStats(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MailingStats> {
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

        const apiPath = '/v1/mailings/stats/{id}'.replace('{id}', id);
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
