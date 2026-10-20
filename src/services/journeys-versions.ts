import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysVersions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?journey_id=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} params.version - Keep only rows whose `version` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.entryKey - Keep only rows whose `entry_key` equals this.
     * @param {string} params.stepCount - Keep only rows whose `step_count` equals this.
     * @param {string} params.publishedBy - Keep only rows whose `published_by` equals this.
     * @param {string} params.notes - Keep only rows whose `notes` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysVersionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, state?: string, entryKey?: string, stepCount?: string, publishedBy?: string, notes?: string }): Promise<{}>;
    /**
     * Filter `?journey_id=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} version - Keep only rows whose `version` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} entryKey - Keep only rows whose `entry_key` equals this.
     * @param {string} stepCount - Keep only rows whose `step_count` equals this.
     * @param {string} publishedBy - Keep only rows whose `published_by` equals this.
     * @param {string} notes - Keep only rows whose `notes` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysVersionsList(limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, state?: string, entryKey?: string, stepCount?: string, publishedBy?: string, notes?: string): Promise<{}>;
    journeysVersionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, state?: string, entryKey?: string, stepCount?: string, publishedBy?: string, notes?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, state?: string, entryKey?: string, stepCount?: string, publishedBy?: string, notes?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, state?: string, entryKey?: string, stepCount?: string, publishedBy?: string, notes?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                journeyId: rest[3] as string,
                version: rest[4] as string,
                state: rest[5] as string,
                entryKey: rest[6] as string,
                stepCount: rest[7] as string,
                publishedBy: rest[8] as string,
                notes: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const journeyId = params.journeyId;
        const version = params.version;
        const state = params.state;
        const entryKey = params.entryKey;
        const stepCount = params.stepCount;
        const publishedBy = params.publishedBy;
        const notes = params.notes;


        const apiPath = '/v1/journeys/versions';
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
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof entryKey !== 'undefined') {
            apiPayload['entry_key'] = entryKey;
        }
        if (typeof stepCount !== 'undefined') {
            apiPayload['step_count'] = stepCount;
        }
        if (typeof publishedBy !== 'undefined') {
            apiPayload['published_by'] = publishedBy;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.JourneyVersion>}
     */
    journeysVersionsGet(params: { id: string }): Promise<Models.JourneyVersion>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.JourneyVersion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysVersionsGet(id: string): Promise<Models.JourneyVersion>;
    journeysVersionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.JourneyVersion> {
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

        const apiPath = '/v1/journeys/versions/{id}'.replace('{id}', id);
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
