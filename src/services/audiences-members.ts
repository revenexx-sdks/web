import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class AudiencesMembers {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Members per market (largest first, at most eight named, the rest summed, members without a market last) and per source (rule, import, by hand), each with its share. Labels follow Accept-Language (de or en).
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceComposition>}
     */
    audiencesMembersComposition(params: { id: string }): Promise<Models.AudienceComposition>;
    /**
     * Members per market (largest first, at most eight named, the rest summed, members without a market last) and per source (rule, import, by hand), each with its share. Labels follow Accept-Language (de or en).
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceComposition>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersComposition(id: string): Promise<Models.AudienceComposition>;
    audiencesMembersComposition(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceComposition> {
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

        const apiPath = '/v1/audiences/audiences/{id}/composition'.replace('{id}', id);
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
     * Each row names a contact id or a mail address of an existing contact. A row that matches nobody is refused with its reason rather than creating a person. At most 1000 rows per call.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.emails - Addresses separated by lines, commas or semicolons — what a form field sends. Used when `rows` is absent.
     * @param {string} params.filename - 
     * @param {object[]} params.rows - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceImport>}
     */
    audiencesAudiencesImport(params: { id: string, emails?: string, filename?: string, rows?: object[] }): Promise<Models.AudienceImport>;
    /**
     * Each row names a contact id or a mail address of an existing contact. A row that matches nobody is refused with its reason rather than creating a person. At most 1000 rows per call.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} emails - Addresses separated by lines, commas or semicolons — what a form field sends. Used when `rows` is absent.
     * @param {string} filename - 
     * @param {object[]} rows - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceImport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesImport(id: string, emails?: string, filename?: string, rows?: object[]): Promise<Models.AudienceImport>;
    audiencesAudiencesImport(
        paramsOrFirst: { id: string, emails?: string, filename?: string, rows?: object[] } | string,
        ...rest: [(string)?, (string)?, (object[])?]    
    ): Promise<Models.AudienceImport> {
        let params: { id: string, emails?: string, filename?: string, rows?: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, emails?: string, filename?: string, rows?: object[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                emails: rest[0] as string,
                filename: rest[1] as string,
                rows: rest[2] as object[]            
            };
        }
        
        const id = params.id;
        const emails = params.emails;
        const filename = params.filename;
        const rows = params.rows;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/audiences/{id}/import'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof emails !== 'undefined') {
            apiPayload['emails'] = emails;
        }
        if (typeof filename !== 'undefined') {
            apiPayload['filename'] = filename;
        }
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = Client.toWireKeys(rows, {"contactId":{"wire":"contact_id","children":null}});
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
     * The page a send reads: members in contact-id order after `cursor`. Hand `next_cursor` back until `done`. Stable while a recompute runs — a page never repeats or skips a member who stays.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.cursor - The `next_cursor` of the previous page. Omitted: the first page.
     * @param {number} params.limit - Page size (default 200, max 500).
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberPage>}
     */
    audiencesMembersRead(params: { id: string, cursor?: string, limit?: number }): Promise<Models.AudienceMemberPage>;
    /**
     * The page a send reads: members in contact-id order after `cursor`. Hand `next_cursor` back until `done`. Stable while a recompute runs — a page never repeats or skips a member who stays.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} cursor - The `next_cursor` of the previous page. Omitted: the first page.
     * @param {number} limit - Page size (default 200, max 500).
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberPage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersRead(id: string, cursor?: string, limit?: number): Promise<Models.AudienceMemberPage>;
    audiencesMembersRead(
        paramsOrFirst: { id: string, cursor?: string, limit?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.AudienceMemberPage> {
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

        const apiPath = '/v1/audiences/audiences/{id}/members'.replace('{id}', id);
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
     * Hand-picked members — also what a journey's "add to audience" step calls. At most 500 contacts per call; a contact that does not exist is refused with its reason.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.contactId - 
     * @param {string[]} params.contactIds - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMembersAdded>}
     */
    audiencesMembersAdd(params: { id: string, contactId?: string, contactIds?: string[] }): Promise<Models.AudienceMembersAdded>;
    /**
     * Hand-picked members — also what a journey's "add to audience" step calls. At most 500 contacts per call; a contact that does not exist is refused with its reason.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - 
     * @param {string[]} contactIds - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMembersAdded>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersAdd(id: string, contactId?: string, contactIds?: string[]): Promise<Models.AudienceMembersAdded>;
    audiencesMembersAdd(
        paramsOrFirst: { id: string, contactId?: string, contactIds?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.AudienceMembersAdded> {
        let params: { id: string, contactId?: string, contactIds?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, contactIds?: string[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                contactIds: rest[1] as string[]            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const contactIds = params.contactIds;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/audiences/{id}/members'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof contactIds !== 'undefined') {
            apiPayload['contact_ids'] = contactIds;
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
     * @param {string} params.contactId - The contact to take out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberRemoved>}
     */
    audiencesMembersRemove(params: { id: string, contactId: string }): Promise<Models.AudienceMemberRemoved>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - The contact to take out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberRemoved>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersRemove(id: string, contactId: string): Promise<Models.AudienceMemberRemoved>;
    audiencesMembersRemove(
        paramsOrFirst: { id: string, contactId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.AudienceMemberRemoved> {
        let params: { id: string, contactId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/audiences/audiences/{id}/members/{contact_id}'.replace('{id}', id).replace('{contact_id}', contactId);
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
     * Joins and leaves per day in Europe/Berlin, from the first change to the last with every day between, at most the latest 90 days. Counted from the join/leave history; `capped` says the history was longer than one read covers.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceTimeline>}
     */
    audiencesMembersTimeline(params: { id: string }): Promise<Models.AudienceTimeline>;
    /**
     * Joins and leaves per day in Europe/Berlin, from the first change to the last with every day between, at most the latest 90 days. Counted from the join/leave history; `capped` says the history was longer than one read covers.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceTimeline>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersTimeline(id: string): Promise<Models.AudienceTimeline>;
    audiencesMembersTimeline(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceTimeline> {
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

        const apiPath = '/v1/audiences/audiences/{id}/timeline'.replace('{id}', id);
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
     * Every import into a static audience, with its counts and refused rows.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} params.filename - Keep only rows whose `filename` equals this.
     * @param {string} params.rows - Keep only rows whose `rows` equals this.
     * @param {string} params.accepted - Keep only rows whose `accepted` equals this.
     * @param {string} params.rejected - Keep only rows whose `rejected` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesImportsList(params?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, filename?: string, rows?: string, accepted?: string, rejected?: string, state?: string }): Promise<{}>;
    /**
     * Every import into a static audience, with its counts and refused rows.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} filename - Keep only rows whose `filename` equals this.
     * @param {string} rows - Keep only rows whose `rows` equals this.
     * @param {string} accepted - Keep only rows whose `accepted` equals this.
     * @param {string} rejected - Keep only rows whose `rejected` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesImportsList(limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, filename?: string, rows?: string, accepted?: string, rejected?: string, state?: string): Promise<{}>;
    audiencesImportsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, filename?: string, rows?: string, accepted?: string, rejected?: string, state?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, filename?: string, rows?: string, accepted?: string, rejected?: string, state?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, filename?: string, rows?: string, accepted?: string, rejected?: string, state?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                audienceId: rest[3] as string,
                filename: rest[4] as string,
                rows: rest[5] as string,
                accepted: rest[6] as string,
                rejected: rest[7] as string,
                state: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const audienceId = params.audienceId;
        const filename = params.filename;
        const rows = params.rows;
        const accepted = params.accepted;
        const rejected = params.rejected;
        const state = params.state;


        const apiPath = '/v1/audiences/imports';
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
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof filename !== 'undefined') {
            apiPayload['filename'] = filename;
        }
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = rows;
        }
        if (typeof accepted !== 'undefined') {
            apiPayload['accepted'] = accepted;
        }
        if (typeof rejected !== 'undefined') {
            apiPayload['rejected'] = rejected;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
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
     * @returns {Promise<Models.AudienceImport>}
     */
    audiencesImportsGet(params: { id: string }): Promise<Models.AudienceImport>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceImport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesImportsGet(id: string): Promise<Models.AudienceImport>;
    audiencesImportsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceImport> {
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

        const apiPath = '/v1/audiences/imports/{id}'.replace('{id}', id);
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
     * The join/leave history; filter `?audience_id=` or `?contact_id=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.source - Keep only rows whose `source` equals this.
     * @param {string} params.reason - Keep only rows whose `reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesMemberEventsList(params?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, contactId?: string, kind?: string, source?: string, reason?: string }): Promise<{}>;
    /**
     * The join/leave history; filter `?audience_id=` or `?contact_id=`.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} source - Keep only rows whose `source` equals this.
     * @param {string} reason - Keep only rows whose `reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMemberEventsList(limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, contactId?: string, kind?: string, source?: string, reason?: string): Promise<{}>;
    audiencesMemberEventsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, contactId?: string, kind?: string, source?: string, reason?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, contactId?: string, kind?: string, source?: string, reason?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, contactId?: string, kind?: string, source?: string, reason?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                audienceId: rest[3] as string,
                contactId: rest[4] as string,
                kind: rest[5] as string,
                source: rest[6] as string,
                reason: rest[7] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const audienceId = params.audienceId;
        const contactId = params.contactId;
        const kind = params.kind;
        const source = params.source;
        const reason = params.reason;


        const apiPath = '/v1/audiences/member-events';
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
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @returns {Promise<Models.AudienceMemberEvent>}
     */
    audiencesMemberEventsGet(params: { id: string }): Promise<Models.AudienceMemberEvent>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMemberEventsGet(id: string): Promise<Models.AudienceMemberEvent>;
    audiencesMemberEventsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceMemberEvent> {
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

        const apiPath = '/v1/audiences/member-events/{id}'.replace('{id}', id);
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
     * Membership rows across audiences; filter `?audience_id=` or `?contact_id=`. For a send, read GET /audiences/audiences/{id}/members instead.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} params.audienceCode - Keep only rows whose `audience_code` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.email - Keep only rows whose `email` equals this.
     * @param {string} params.locale - Keep only rows whose `locale` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.eligible - Keep only rows whose `eligible` equals this.
     * @param {string} params.source - Keep only rows whose `source` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesMembersList(params?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, audienceCode?: string, contactId?: string, organizationId?: string, email?: string, locale?: string, market?: string, eligible?: string, source?: string }): Promise<{}>;
    /**
     * Membership rows across audiences; filter `?audience_id=` or `?contact_id=`. For a send, read GET /audiences/audiences/{id}/members instead.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} audienceCode - Keep only rows whose `audience_code` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} email - Keep only rows whose `email` equals this.
     * @param {string} locale - Keep only rows whose `locale` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} eligible - Keep only rows whose `eligible` equals this.
     * @param {string} source - Keep only rows whose `source` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersList(limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, audienceCode?: string, contactId?: string, organizationId?: string, email?: string, locale?: string, market?: string, eligible?: string, source?: string): Promise<{}>;
    audiencesMembersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, audienceCode?: string, contactId?: string, organizationId?: string, email?: string, locale?: string, market?: string, eligible?: string, source?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, audienceCode?: string, contactId?: string, organizationId?: string, email?: string, locale?: string, market?: string, eligible?: string, source?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, audienceCode?: string, contactId?: string, organizationId?: string, email?: string, locale?: string, market?: string, eligible?: string, source?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                audienceId: rest[3] as string,
                audienceCode: rest[4] as string,
                contactId: rest[5] as string,
                organizationId: rest[6] as string,
                email: rest[7] as string,
                locale: rest[8] as string,
                market: rest[9] as string,
                eligible: rest[10] as string,
                source: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const audienceId = params.audienceId;
        const audienceCode = params.audienceCode;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const email = params.email;
        const locale = params.locale;
        const market = params.market;
        const eligible = params.eligible;
        const source = params.source;


        const apiPath = '/v1/audiences/members';
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
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof audienceCode !== 'undefined') {
            apiPayload['audience_code'] = audienceCode;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof eligible !== 'undefined') {
            apiPayload['eligible'] = eligible;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
     * @returns {Promise<Models.AudienceMember>}
     */
    audiencesMembersGet(params: { id: string }): Promise<Models.AudienceMember>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMember>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersGet(id: string): Promise<Models.AudienceMember>;
    audiencesMembersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceMember> {
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

        const apiPath = '/v1/audiences/members/{id}'.replace('{id}', id);
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
     * For the storefront's personalisation: the active audiences one logged-in contact belongs to, by id and by code.
     *
     * @param {string} params.contactId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberships>}
     */
    audiencesMembersMemberships(params: { contactId: string }): Promise<Models.AudienceMemberships>;
    /**
     * For the storefront's personalisation: the active audiences one logged-in contact belongs to, by id and by code.
     *
     * @param {string} contactId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceMemberships>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesMembersMemberships(contactId: string): Promise<Models.AudienceMemberships>;
    audiencesMembersMemberships(
        paramsOrFirst: { contactId: string } | string    
    ): Promise<Models.AudienceMemberships> {
        let params: { contactId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string };
        } else {
            params = {
                contactId: paramsOrFirst as string            
            };
        }
        
        const contactId = params.contactId;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/audiences/memberships';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
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
