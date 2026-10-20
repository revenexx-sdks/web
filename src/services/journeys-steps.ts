import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysSteps {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?journey_version_id=` or `?journey_id=&version=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.journeyVersionId - Keep only rows whose `journey_version_id` equals this.
     * @param {string} params.journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} params.version - Keep only rows whose `version` equals this.
     * @param {string} params.key - Keep only rows whose `key` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.label - Keep only rows whose `label` equals this.
     * @param {string} params.nextKey - Keep only rows whose `next_key` equals this.
     * @param {string} params.yesKey - Keep only rows whose `yes_key` equals this.
     * @param {string} params.noKey - Keep only rows whose `no_key` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysStepsList(params?: { limit?: number, offset?: number, order?: string, id?: string, journeyVersionId?: string, journeyId?: string, version?: string, key?: string, kind?: string, label?: string, nextKey?: string, yesKey?: string, noKey?: string, position?: string }): Promise<{}>;
    /**
     * Filter `?journey_version_id=` or `?journey_id=&version=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} journeyVersionId - Keep only rows whose `journey_version_id` equals this.
     * @param {string} journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} version - Keep only rows whose `version` equals this.
     * @param {string} key - Keep only rows whose `key` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} label - Keep only rows whose `label` equals this.
     * @param {string} nextKey - Keep only rows whose `next_key` equals this.
     * @param {string} yesKey - Keep only rows whose `yes_key` equals this.
     * @param {string} noKey - Keep only rows whose `no_key` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysStepsList(limit?: number, offset?: number, order?: string, id?: string, journeyVersionId?: string, journeyId?: string, version?: string, key?: string, kind?: string, label?: string, nextKey?: string, yesKey?: string, noKey?: string, position?: string): Promise<{}>;
    journeysStepsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, journeyVersionId?: string, journeyId?: string, version?: string, key?: string, kind?: string, label?: string, nextKey?: string, yesKey?: string, noKey?: string, position?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, journeyVersionId?: string, journeyId?: string, version?: string, key?: string, kind?: string, label?: string, nextKey?: string, yesKey?: string, noKey?: string, position?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, journeyVersionId?: string, journeyId?: string, version?: string, key?: string, kind?: string, label?: string, nextKey?: string, yesKey?: string, noKey?: string, position?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                journeyVersionId: rest[3] as string,
                journeyId: rest[4] as string,
                version: rest[5] as string,
                key: rest[6] as string,
                kind: rest[7] as string,
                label: rest[8] as string,
                nextKey: rest[9] as string,
                yesKey: rest[10] as string,
                noKey: rest[11] as string,
                position: rest[12] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const journeyVersionId = params.journeyVersionId;
        const journeyId = params.journeyId;
        const version = params.version;
        const key = params.key;
        const kind = params.kind;
        const label = params.label;
        const nextKey = params.nextKey;
        const yesKey = params.yesKey;
        const noKey = params.noKey;
        const position = params.position;


        const apiPath = '/v1/journeys/steps';
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
        if (typeof journeyVersionId !== 'undefined') {
            apiPayload['journey_version_id'] = journeyVersionId;
        }
        if (typeof journeyId !== 'undefined') {
            apiPayload['journey_id'] = journeyId;
        }
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof nextKey !== 'undefined') {
            apiPayload['next_key'] = nextKey;
        }
        if (typeof yesKey !== 'undefined') {
            apiPayload['yes_key'] = yesKey;
        }
        if (typeof noKey !== 'undefined') {
            apiPayload['no_key'] = noKey;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * @returns {Promise<Models.JourneyStep>}
     */
    journeysStepsGet(params: { id: string }): Promise<Models.JourneyStep>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.JourneyStep>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysStepsGet(id: string): Promise<Models.JourneyStep>;
    journeysStepsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.JourneyStep> {
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

        const apiPath = '/v1/journeys/steps/{id}'.replace('{id}', id);
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
