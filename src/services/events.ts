import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Events {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every event type this tenant's installed apps and platform services declare — what can be published and subscribed to, independent of whether one has fired yet. Each entry says what causes it (`trigger`) and what it carries (`sample`, `data_schema`).
     *
     * @param {string} params.fields - Comma-separated keys to keep on each emit. Omit for the full entry. A consumer that reads two fields should say so: the response carries a sample and a JSON Schema per event, and asking for less is the difference between a few kB and tens. An unknown key is ignored; a list naming nothing this response has returns the full entry rather than an empty one.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    eventsGetCatalog(params?: { fields?: string }): Promise<{}>;
    /**
     * Every event type this tenant's installed apps and platform services declare — what can be published and subscribed to, independent of whether one has fired yet. Each entry says what causes it (`trigger`) and what it carries (`sample`, `data_schema`).
     *
     * @param {string} fields - Comma-separated keys to keep on each emit. Omit for the full entry. A consumer that reads two fields should say so: the response carries a sample and a JSON Schema per event, and asking for less is the difference between a few kB and tens. An unknown key is ignored; a list naming nothing this response has returns the full entry rather than an empty one.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    eventsGetCatalog(fields?: string): Promise<{}>;
    eventsGetCatalog(
        paramsOrFirst?: { fields?: string } | string    
    ): Promise<{}> {
        let params: { fields?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { fields?: string };
        } else {
            params = {
                fields: paramsOrFirst as string            
            };
        }
        
        const fields = params.fields;


        const apiPath = '/v1/events/catalog';
        const apiPayload: Payload = {};
        if (typeof fields !== 'undefined') {
            apiPayload['fields'] = fields;
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
}
