import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class ReviewsModeration {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Shows it in the shop and recomputes the product figures. Publishing a published review answers it unchanged.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     */
    reviewsModerationPublish(params: { id: string, data: object }): Promise<Models.Review>;
    /**
     * Shows it in the shop and recomputes the product figures. Publishing a published review answers it unchanged.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsModerationPublish(id: string, data: object): Promise<Models.Review>;
    reviewsModerationPublish(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Review> {
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

        const apiPath = '/v1/reviews/reviews/{id}/publish'.replace('{id}', id);
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
     * @param {string} params.reason - Why the merchant will not quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     */
    reviewsModerationReject(params: { id: string, reason: string }): Promise<Models.Review>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} reason - Why the merchant will not quote.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsModerationReject(id: string, reason: string): Promise<Models.Review>;
    reviewsModerationReject(
        paramsOrFirst: { id: string, reason: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Review> {
        let params: { id: string, reason: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/reviews/reviews/{id}/reject'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @param {string} params.reply - Empty or null removes the answer.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     */
    reviewsModerationReply(params: { id: string, reply?: string }): Promise<Models.Review>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} reply - Empty or null removes the answer.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsModerationReply(id: string, reply?: string): Promise<Models.Review>;
    reviewsModerationReply(
        paramsOrFirst: { id: string, reply?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Review> {
        let params: { id: string, reply?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reply?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reply: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reply = params.reply;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/reviews/reviews/{id}/reply'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof reply !== 'undefined') {
            apiPayload['reply'] = reply;
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
