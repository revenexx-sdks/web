import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CustomersFollowUps {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * A follow-up — a task, or any entry with a due date — is done: `done_at` is set and it leaves every list of open tasks. The entry stays on the timeline as it was filed. Done twice answers the entry as it is.
     *
     * @param {string} params.id - The timeline entry.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     */
    customersContactEventsDone(params: { id: string }): Promise<Models.ContactEvent>;
    /**
     * A follow-up — a task, or any entry with a due date — is done: `done_at` is set and it leaves every list of open tasks. The entry stays on the timeline as it was filed. Done twice answers the entry as it is.
     *
     * @param {string} id - The timeline entry.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventsDone(id: string): Promise<Models.ContactEvent>;
    customersContactEventsDone(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactEvent> {
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

        const apiPath = '/v1/customers/contact_events/{id}/done'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
