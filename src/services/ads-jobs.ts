import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class AdsJobs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Records conversions of orders placed in the last three hours, requests audience uploads that are due, books spend that waited for campaigns, recounts the totals of each account — the same as the hourly schedule.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsJobsRun(params: { data: object }): Promise<{}>;
    /**
     * Records conversions of orders placed in the last three hours, requests audience uploads that are due, books spend that waited for campaigns, recounts the totals of each account — the same as the hourly schedule.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsJobsRun(data: object): Promise<{}>;
    adsJobsRun(
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

        const apiPath = '/v1/ads/run';
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
