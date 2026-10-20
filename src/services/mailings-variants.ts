import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class MailingsVariants {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Reserved for the A/B test of a later version. Empty in this one.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} params.isWinner - Keep only rows whose `is_winner` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsVariantsList(params?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, isWinner?: string }): Promise<{}>;
    /**
     * Reserved for the A/B test of a later version. Empty in this one.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} isWinner - Keep only rows whose `is_winner` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsVariantsList(limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, isWinner?: string): Promise<{}>;
    mailingsVariantsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, isWinner?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, isWinner?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, isWinner?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                mailingId: rest[3] as string,
                isWinner: rest[4] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const mailingId = params.mailingId;
        const isWinner = params.isWinner;


        const apiPath = '/v1/mailings/variants';
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
        if (typeof mailingId !== 'undefined') {
            apiPayload['mailing_id'] = mailingId;
        }
        if (typeof isWinner !== 'undefined') {
            apiPayload['is_winner'] = isWinner;
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
     * @returns {Promise<Models.MailingVariant>}
     */
    mailingsVariantsGet(params: { id: string }): Promise<Models.MailingVariant>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MailingVariant>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsVariantsGet(id: string): Promise<Models.MailingVariant>;
    mailingsVariantsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MailingVariant> {
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

        const apiPath = '/v1/mailings/variants/{id}'.replace('{id}', id);
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
