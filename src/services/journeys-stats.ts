import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysStats {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List step counters
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} params.version - Keep only rows whose `version` equals this.
     * @param {string} params.stepKey - Keep only rows whose `step_key` equals this.
     * @param {string} params.entered - Keep only rows whose `entered` equals this.
     * @param {string} params.passed - Keep only rows whose `passed` equals this.
     * @param {string} params.sent - Keep only rows whose `sent` equals this.
     * @param {string} params.skipped - Keep only rows whose `skipped` equals this.
     * @param {string} params.failed - Keep only rows whose `failed` equals this.
     * @param {string} params.exited - Keep only rows whose `exited` equals this.
     * @param {string} params.clicked - Keep only rows whose `clicked` equals this.
     * @param {string} params.goalReached - Keep only rows whose `goal_reached` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysStatsList(params?: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, stepKey?: string, entered?: string, passed?: string, sent?: string, skipped?: string, failed?: string, exited?: string, clicked?: string, goalReached?: string }): Promise<{}>;
    /**
     * List step counters
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} journeyId - Keep only rows whose `journey_id` equals this.
     * @param {string} version - Keep only rows whose `version` equals this.
     * @param {string} stepKey - Keep only rows whose `step_key` equals this.
     * @param {string} entered - Keep only rows whose `entered` equals this.
     * @param {string} passed - Keep only rows whose `passed` equals this.
     * @param {string} sent - Keep only rows whose `sent` equals this.
     * @param {string} skipped - Keep only rows whose `skipped` equals this.
     * @param {string} failed - Keep only rows whose `failed` equals this.
     * @param {string} exited - Keep only rows whose `exited` equals this.
     * @param {string} clicked - Keep only rows whose `clicked` equals this.
     * @param {string} goalReached - Keep only rows whose `goal_reached` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysStatsList(limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, stepKey?: string, entered?: string, passed?: string, sent?: string, skipped?: string, failed?: string, exited?: string, clicked?: string, goalReached?: string): Promise<{}>;
    journeysStatsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, stepKey?: string, entered?: string, passed?: string, sent?: string, skipped?: string, failed?: string, exited?: string, clicked?: string, goalReached?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, stepKey?: string, entered?: string, passed?: string, sent?: string, skipped?: string, failed?: string, exited?: string, clicked?: string, goalReached?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, journeyId?: string, version?: string, stepKey?: string, entered?: string, passed?: string, sent?: string, skipped?: string, failed?: string, exited?: string, clicked?: string, goalReached?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                journeyId: rest[3] as string,
                version: rest[4] as string,
                stepKey: rest[5] as string,
                entered: rest[6] as string,
                passed: rest[7] as string,
                sent: rest[8] as string,
                skipped: rest[9] as string,
                failed: rest[10] as string,
                exited: rest[11] as string,
                clicked: rest[12] as string,
                goalReached: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const journeyId = params.journeyId;
        const version = params.version;
        const stepKey = params.stepKey;
        const entered = params.entered;
        const passed = params.passed;
        const sent = params.sent;
        const skipped = params.skipped;
        const failed = params.failed;
        const exited = params.exited;
        const clicked = params.clicked;
        const goalReached = params.goalReached;


        const apiPath = '/v1/journeys/step-stats';
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
        if (typeof stepKey !== 'undefined') {
            apiPayload['step_key'] = stepKey;
        }
        if (typeof entered !== 'undefined') {
            apiPayload['entered'] = entered;
        }
        if (typeof passed !== 'undefined') {
            apiPayload['passed'] = passed;
        }
        if (typeof sent !== 'undefined') {
            apiPayload['sent'] = sent;
        }
        if (typeof skipped !== 'undefined') {
            apiPayload['skipped'] = skipped;
        }
        if (typeof failed !== 'undefined') {
            apiPayload['failed'] = failed;
        }
        if (typeof exited !== 'undefined') {
            apiPayload['exited'] = exited;
        }
        if (typeof clicked !== 'undefined') {
            apiPayload['clicked'] = clicked;
        }
        if (typeof goalReached !== 'undefined') {
            apiPayload['goal_reached'] = goalReached;
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
     * @returns {Promise<Models.JourneyStepStats>}
     */
    journeysStatsGet(params: { id: string }): Promise<Models.JourneyStepStats>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.JourneyStepStats>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysStatsGet(id: string): Promise<Models.JourneyStepStats>;
    journeysStatsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.JourneyStepStats> {
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

        const apiPath = '/v1/journeys/step-stats/{id}'.replace('{id}', id);
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
