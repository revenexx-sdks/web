import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysTimeline {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?enrollment_id=` for one person's timeline.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.enrollmentId - Keep only rows whose `enrollment_id` equals this.
     * @param {string} params.journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} params.version - Keep only rows whose `version` equals this.
     * @param {string} params.stepKey - Keep only rows whose `step_key` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.outcome - Keep only rows whose `outcome` equals this.
     * @param {string} params.eventKey - Keep only rows whose `event_key` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysTimelineList(params?: { limit?: number, offset?: number, order?: string, id?: string, enrollmentId?: string, journeyId?: string, version?: string, stepKey?: string, kind?: string, outcome?: string, eventKey?: string }): Promise<{}>;
    /**
     * Filter `?enrollment_id=` for one person's timeline.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} enrollmentId - Keep only rows whose `enrollment_id` equals this.
     * @param {string} journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} version - Keep only rows whose `version` equals this.
     * @param {string} stepKey - Keep only rows whose `step_key` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} outcome - Keep only rows whose `outcome` equals this.
     * @param {string} eventKey - Keep only rows whose `event_key` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysTimelineList(limit?: number, offset?: number, order?: string, id?: string, enrollmentId?: string, journeyId?: string, version?: string, stepKey?: string, kind?: string, outcome?: string, eventKey?: string): Promise<{}>;
    journeysTimelineList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, enrollmentId?: string, journeyId?: string, version?: string, stepKey?: string, kind?: string, outcome?: string, eventKey?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, enrollmentId?: string, journeyId?: string, version?: string, stepKey?: string, kind?: string, outcome?: string, eventKey?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, enrollmentId?: string, journeyId?: string, version?: string, stepKey?: string, kind?: string, outcome?: string, eventKey?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                enrollmentId: rest[3] as string,
                journeyId: rest[4] as string,
                version: rest[5] as string,
                stepKey: rest[6] as string,
                kind: rest[7] as string,
                outcome: rest[8] as string,
                eventKey: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const enrollmentId = params.enrollmentId;
        const journeyId = params.journeyId;
        const version = params.version;
        const stepKey = params.stepKey;
        const kind = params.kind;
        const outcome = params.outcome;
        const eventKey = params.eventKey;


        const apiPath = '/v1/journeys/enrollment-events';
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
        if (typeof enrollmentId !== 'undefined') {
            apiPayload['enrollment_id'] = enrollmentId;
        }
        if (typeof journeyId !== 'undefined') {
            apiPayload['journey_id'] = journeyId;
        }
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
        }
        if (typeof stepKey !== 'undefined') {
            apiPayload['step_key'] = stepKey;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof outcome !== 'undefined') {
            apiPayload['outcome'] = outcome;
        }
        if (typeof eventKey !== 'undefined') {
            apiPayload['event_key'] = eventKey;
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
     * @returns {Promise<Models.EnrollmentEvent>}
     */
    journeysTimelineGet(params: { id: string }): Promise<Models.EnrollmentEvent>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EnrollmentEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysTimelineGet(id: string): Promise<Models.EnrollmentEvent>;
    journeysTimelineGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.EnrollmentEvent> {
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

        const apiPath = '/v1/journeys/enrollment-events/{id}'.replace('{id}', id);
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
