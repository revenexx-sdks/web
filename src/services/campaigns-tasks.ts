import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsTasks {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List campaign tasks
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} params.title - Keep only rows whose `title` equals this.
     * @param {string} params.notes - Keep only rows whose `notes` equals this.
     * @param {string} params.assignee - Keep only rows whose `assignee` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsTasksList(params?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, title?: string, notes?: string, assignee?: string }): Promise<{}>;
    /**
     * List campaign tasks
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} campaignId - Keep only rows whose `campaign_id` equals this.
     * @param {string} title - Keep only rows whose `title` equals this.
     * @param {string} notes - Keep only rows whose `notes` equals this.
     * @param {string} assignee - Keep only rows whose `assignee` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksList(limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, title?: string, notes?: string, assignee?: string): Promise<{}>;
    campaignsTasksList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, title?: string, notes?: string, assignee?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, title?: string, notes?: string, assignee?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, campaignId?: string, title?: string, notes?: string, assignee?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                campaignId: rest[3] as string,
                title: rest[4] as string,
                notes: rest[5] as string,
                assignee: rest[6] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const campaignId = params.campaignId;
        const title = params.title;
        const notes = params.notes;
        const assignee = params.assignee;


        const apiPath = '/v1/campaigns/tasks';
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
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
        }
        if (typeof assignee !== 'undefined') {
            apiPayload['assignee'] = assignee;
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
     * @param {string} params.title - What has to be done.
     * @param {string} params.assignee - Who does it: a name, an email or a sales-rep code.
     * @param {string} params.doneAt - When it was ticked off. Empty while open.
     * @param {string} params.dueAt - When it is due. A task with a due date appears on the calendar.
     * @param {string} params.notes - Anything else the assignee needs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     */
    campaignsTasksCreate(params: { campaignId: string, title: string, assignee?: string, doneAt?: string, dueAt?: string, notes?: string }): Promise<Models.CampaignTask>;
    /**
     *
     * @param {string} campaignId - The campaign this row belongs to.
     * @param {string} title - What has to be done.
     * @param {string} assignee - Who does it: a name, an email or a sales-rep code.
     * @param {string} doneAt - When it was ticked off. Empty while open.
     * @param {string} dueAt - When it is due. A task with a due date appears on the calendar.
     * @param {string} notes - Anything else the assignee needs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksCreate(campaignId: string, title: string, assignee?: string, doneAt?: string, dueAt?: string, notes?: string): Promise<Models.CampaignTask>;
    campaignsTasksCreate(
        paramsOrFirst: { campaignId: string, title: string, assignee?: string, doneAt?: string, dueAt?: string, notes?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.CampaignTask> {
        let params: { campaignId: string, title: string, assignee?: string, doneAt?: string, dueAt?: string, notes?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { campaignId: string, title: string, assignee?: string, doneAt?: string, dueAt?: string, notes?: string };
        } else {
            params = {
                campaignId: paramsOrFirst as string,
                title: rest[0] as string,
                assignee: rest[1] as string,
                doneAt: rest[2] as string,
                dueAt: rest[3] as string,
                notes: rest[4] as string            
            };
        }
        
        const campaignId = params.campaignId;
        const title = params.title;
        const assignee = params.assignee;
        const doneAt = params.doneAt;
        const dueAt = params.dueAt;
        const notes = params.notes;

        if (typeof campaignId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "campaignId"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/campaigns/tasks';
        const apiPayload: Payload = {};
        if (typeof assignee !== 'undefined') {
            apiPayload['assignee'] = assignee;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof doneAt !== 'undefined') {
            apiPayload['done_at'] = doneAt;
        }
        if (typeof dueAt !== 'undefined') {
            apiPayload['due_at'] = dueAt;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
    campaignsTasksDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksDelete(id: string): Promise<{}>;
    campaignsTasksDelete(
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

        const apiPath = '/v1/campaigns/tasks/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.CampaignTask>}
     */
    campaignsTasksGet(params: { id: string }): Promise<Models.CampaignTask>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksGet(id: string): Promise<Models.CampaignTask>;
    campaignsTasksGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignTask> {
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

        const apiPath = '/v1/campaigns/tasks/{id}'.replace('{id}', id);
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
     * @param {string} params.assignee - Who does it: a name, an email or a sales-rep code.
     * @param {string} params.campaignId - The campaign this row belongs to.
     * @param {string} params.doneAt - When it was ticked off. Empty while open.
     * @param {string} params.dueAt - When it is due. A task with a due date appears on the calendar.
     * @param {string} params.notes - Anything else the assignee needs.
     * @param {string} params.title - What has to be done.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     */
    campaignsTasksUpdate(params: { id: string, assignee?: string, campaignId?: string, doneAt?: string, dueAt?: string, notes?: string, title?: string }): Promise<Models.CampaignTask>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} assignee - Who does it: a name, an email or a sales-rep code.
     * @param {string} campaignId - The campaign this row belongs to.
     * @param {string} doneAt - When it was ticked off. Empty while open.
     * @param {string} dueAt - When it is due. A task with a due date appears on the calendar.
     * @param {string} notes - Anything else the assignee needs.
     * @param {string} title - What has to be done.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksUpdate(id: string, assignee?: string, campaignId?: string, doneAt?: string, dueAt?: string, notes?: string, title?: string): Promise<Models.CampaignTask>;
    campaignsTasksUpdate(
        paramsOrFirst: { id: string, assignee?: string, campaignId?: string, doneAt?: string, dueAt?: string, notes?: string, title?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.CampaignTask> {
        let params: { id: string, assignee?: string, campaignId?: string, doneAt?: string, dueAt?: string, notes?: string, title?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, assignee?: string, campaignId?: string, doneAt?: string, dueAt?: string, notes?: string, title?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                assignee: rest[0] as string,
                campaignId: rest[1] as string,
                doneAt: rest[2] as string,
                dueAt: rest[3] as string,
                notes: rest[4] as string,
                title: rest[5] as string            
            };
        }
        
        const id = params.id;
        const assignee = params.assignee;
        const campaignId = params.campaignId;
        const doneAt = params.doneAt;
        const dueAt = params.dueAt;
        const notes = params.notes;
        const title = params.title;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/campaigns/tasks/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof assignee !== 'undefined') {
            apiPayload['assignee'] = assignee;
        }
        if (typeof campaignId !== 'undefined') {
            apiPayload['campaign_id'] = campaignId;
        }
        if (typeof doneAt !== 'undefined') {
            apiPayload['done_at'] = doneAt;
        }
        if (typeof dueAt !== 'undefined') {
            apiPayload['due_at'] = dueAt;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * Stamps done_at now. A task already done keeps its first stamp.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     */
    campaignsTasksComplete(params: { id: string }): Promise<Models.CampaignTask>;
    /**
     * Stamps done_at now. A task already done keeps its first stamp.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksComplete(id: string): Promise<Models.CampaignTask>;
    campaignsTasksComplete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignTask> {
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

        const apiPath = '/v1/campaigns/tasks/{id}/complete'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * @returns {Promise<Models.CampaignTask>}
     */
    campaignsTasksReopen(params: { id: string }): Promise<Models.CampaignTask>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignTask>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsTasksReopen(id: string): Promise<Models.CampaignTask>;
    campaignsTasksReopen(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CampaignTask> {
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

        const apiPath = '/v1/campaigns/tasks/{id}/reopen'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
