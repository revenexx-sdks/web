import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class ReviewsPrivacy {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Stars and text stay so product figures do not move; name, contact and company are cleared, and the person's review links are removed. The same happens on `customers.contact.deleted` and `marketing_consents.consents.erased`.
     *
     * @param {string} params.contactId - The contact.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsPrivacyAnonymise(params: { contactId: string, data: object }): Promise<{}>;
    /**
     * Stars and text stay so product figures do not move; name, contact and company are cleared, and the person's review links are removed. The same happens on `customers.contact.deleted` and `marketing_consents.consents.erased`.
     *
     * @param {string} contactId - The contact.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsPrivacyAnonymise(contactId: string, data: object): Promise<{}>;
    reviewsPrivacyAnonymise(
        paramsOrFirst: { contactId: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { contactId: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, data: object };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const contactId = params.contactId;
        const data = params.data;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/reviews/contacts/{contact_id}/anonymise'.replace('{contact_id}', contactId);
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
