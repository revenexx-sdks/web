import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class LoyaltyJobs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Credits orders of the last 48 hours, books their completed returns and cancellations, expires due points, moves agreement projections on and re-reads tiers — the same as the hourly schedule.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyJobsRecalculate(params: { data: object }): Promise<{}>;
    /**
     * Credits orders of the last 48 hours, books their completed returns and cancellations, expires due points, moves agreement projections on and re-reads tiers — the same as the hourly schedule.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyJobsRecalculate(data: object): Promise<{}>;
    loyaltyJobsRecalculate(
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

        const apiPath = '/v1/loyalty/recalculate/run';
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
