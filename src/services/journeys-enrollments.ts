import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysEnrollments {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?journey_id=`, `?state=`, `?contact_id=`, `?current_step=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} params.version - Keep only rows whose `version` equals this.
     * @param {string} params.journeyVersionId - Keep only rows whose `journey_version_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.email - Keep only rows whose `email` equals this.
     * @param {string} params.phone - Keep only rows whose `phone` equals this.
     * @param {string} params.locale - Keep only rows whose `locale` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.currentStep - Keep only rows whose `current_step` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.exitReason - Keep only rows whose `exit_reason` equals this.
     * @param {string} params.triggerEventId - Keep only rows whose `trigger_event_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysEnrollmentsList(params?: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, journeyVersionId?: string, contactId?: string, organizationId?: string, email?: string, phone?: string, locale?: string, market?: string, currentStep?: string, state?: string, exitReason?: string, triggerEventId?: string }): Promise<{}>;
    /**
     * Filter `?journey_id=`, `?state=`, `?contact_id=`, `?current_step=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} version - Keep only rows whose `version` equals this.
     * @param {string} journeyVersionId - Keep only rows whose `journey_version_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} email - Keep only rows whose `email` equals this.
     * @param {string} phone - Keep only rows whose `phone` equals this.
     * @param {string} locale - Keep only rows whose `locale` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} currentStep - Keep only rows whose `current_step` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} exitReason - Keep only rows whose `exit_reason` equals this.
     * @param {string} triggerEventId - Keep only rows whose `trigger_event_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysEnrollmentsList(limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, journeyVersionId?: string, contactId?: string, organizationId?: string, email?: string, phone?: string, locale?: string, market?: string, currentStep?: string, state?: string, exitReason?: string, triggerEventId?: string): Promise<{}>;
    journeysEnrollmentsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, journeyVersionId?: string, contactId?: string, organizationId?: string, email?: string, phone?: string, locale?: string, market?: string, currentStep?: string, state?: string, exitReason?: string, triggerEventId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, journeyVersionId?: string, contactId?: string, organizationId?: string, email?: string, phone?: string, locale?: string, market?: string, currentStep?: string, state?: string, exitReason?: string, triggerEventId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, journeyVersionId?: string, contactId?: string, organizationId?: string, email?: string, phone?: string, locale?: string, market?: string, currentStep?: string, state?: string, exitReason?: string, triggerEventId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                journeyId: rest[3] as string,
                version: rest[4] as string,
                journeyVersionId: rest[5] as string,
                contactId: rest[6] as string,
                organizationId: rest[7] as string,
                email: rest[8] as string,
                phone: rest[9] as string,
                locale: rest[10] as string,
                market: rest[11] as string,
                currentStep: rest[12] as string,
                state: rest[13] as string,
                exitReason: rest[14] as string,
                triggerEventId: rest[15] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const journeyId = params.journeyId;
        const version = params.version;
        const journeyVersionId = params.journeyVersionId;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const email = params.email;
        const phone = params.phone;
        const locale = params.locale;
        const market = params.market;
        const currentStep = params.currentStep;
        const state = params.state;
        const exitReason = params.exitReason;
        const triggerEventId = params.triggerEventId;


        const apiPath = '/v1/journeys/enrollments';
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
        if (typeof journeyId !== 'undefined') {
            apiPayload['journey_id'] = journeyId;
        }
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
        }
        if (typeof journeyVersionId !== 'undefined') {
            apiPayload['journey_version_id'] = journeyVersionId;
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
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof currentStep !== 'undefined') {
            apiPayload['current_step'] = currentStep;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof exitReason !== 'undefined') {
            apiPayload['exit_reason'] = exitReason;
        }
        if (typeof triggerEventId !== 'undefined') {
            apiPayload['trigger_event_id'] = triggerEventId;
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
     * @returns {Promise<Models.Enrollment>}
     */
    journeysEnrollmentsGet(params: { id: string }): Promise<Models.Enrollment>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Enrollment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysEnrollmentsGet(id: string): Promise<Models.Enrollment>;
    journeysEnrollmentsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Enrollment> {
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

        const apiPath = '/v1/journeys/enrollments/{id}'.replace('{id}', id);
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
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Enrollment>}
     */
    journeysEnrollmentsExit(params: { id: string, data: object }): Promise<Models.Enrollment>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Enrollment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysEnrollmentsExit(id: string, data: object): Promise<Models.Enrollment>;
    journeysEnrollmentsExit(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Enrollment> {
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

        const apiPath = '/v1/journeys/enrollments/{id}/exit'.replace('{id}', id);
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
