import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class MailingsRecipients {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?mailing_id=` for one mailing, `?outcome=` for one outcome. Written by the send pipeline only.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.email - Keep only rows whose `email` equals this.
     * @param {string} params.outcome - Keep only rows whose `outcome` equals this.
     * @param {string} params.reason - Keep only rows whose `reason` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.messageId - Keep only rows whose `message_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsRecipientsList(params?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, contactId?: string, email?: string, outcome?: string, reason?: string, market?: string, messageId?: string }): Promise<{}>;
    /**
     * Filter `?mailing_id=` for one mailing, `?outcome=` for one outcome. Written by the send pipeline only.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} mailingId - Keep only rows whose `mailing_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} email - Keep only rows whose `email` equals this.
     * @param {string} outcome - Keep only rows whose `outcome` equals this.
     * @param {string} reason - Keep only rows whose `reason` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} messageId - Keep only rows whose `message_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsRecipientsList(limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, contactId?: string, email?: string, outcome?: string, reason?: string, market?: string, messageId?: string): Promise<{}>;
    mailingsRecipientsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, contactId?: string, email?: string, outcome?: string, reason?: string, market?: string, messageId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, contactId?: string, email?: string, outcome?: string, reason?: string, market?: string, messageId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, mailingId?: string, contactId?: string, email?: string, outcome?: string, reason?: string, market?: string, messageId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                mailingId: rest[3] as string,
                contactId: rest[4] as string,
                email: rest[5] as string,
                outcome: rest[6] as string,
                reason: rest[7] as string,
                market: rest[8] as string,
                messageId: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const mailingId = params.mailingId;
        const contactId = params.contactId;
        const email = params.email;
        const outcome = params.outcome;
        const reason = params.reason;
        const market = params.market;
        const messageId = params.messageId;


        const apiPath = '/v1/mailings/recipients';
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
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof outcome !== 'undefined') {
            apiPayload['outcome'] = outcome;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof messageId !== 'undefined') {
            apiPayload['message_id'] = messageId;
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
     * @returns {Promise<Models.MailingRecipient>}
     */
    mailingsRecipientsGet(params: { id: string }): Promise<Models.MailingRecipient>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MailingRecipient>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsRecipientsGet(id: string): Promise<Models.MailingRecipient>;
    mailingsRecipientsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MailingRecipient> {
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

        const apiPath = '/v1/mailings/recipients/{id}'.replace('{id}', id);
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
