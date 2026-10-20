import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysTemplates {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List the shipped flows
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.tier - Keep only rows whose `tier` equals this.
     * @param {string} params.triggerKind - Keep only rows whose `trigger_kind` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysTemplatesList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, tier?: string, triggerKind?: string, position?: string, active?: string }): Promise<{}>;
    /**
     * List the shipped flows
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} tier - Keep only rows whose `tier` equals this.
     * @param {string} triggerKind - Keep only rows whose `trigger_kind` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysTemplatesList(limit?: number, offset?: number, order?: string, id?: string, code?: string, tier?: string, triggerKind?: string, position?: string, active?: string): Promise<{}>;
    journeysTemplatesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, tier?: string, triggerKind?: string, position?: string, active?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, tier?: string, triggerKind?: string, position?: string, active?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, tier?: string, triggerKind?: string, position?: string, active?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                code: rest[3] as string,
                tier: rest[4] as string,
                triggerKind: rest[5] as string,
                position: rest[6] as string,
                active: rest[7] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const code = params.code;
        const tier = params.tier;
        const triggerKind = params.triggerKind;
        const position = params.position;
        const active = params.active;


        const apiPath = '/v1/journeys/templates';
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
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof tier !== 'undefined') {
            apiPayload['tier'] = tier;
        }
        if (typeof triggerKind !== 'undefined') {
            apiPayload['trigger_kind'] = triggerKind;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
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
     * @param {string} params.code - e.g. cart_recovery
     * @param {string} params.name - Defaults to the template name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     */
    journeysTemplatesCopy(params: { code: string, name?: string }): Promise<Models.Journey>;
    /**
     *
     * @param {string} code - e.g. cart_recovery
     * @param {string} name - Defaults to the template name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysTemplatesCopy(code: string, name?: string): Promise<Models.Journey>;
    journeysTemplatesCopy(
        paramsOrFirst: { code: string, name?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Journey> {
        let params: { code: string, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/journeys/templates/{code}/copy'.replace('{code}', code);
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
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
     * @throws {RevenexxException}
     * @returns {Promise<Models.JourneyTemplate>}
     */
    journeysTemplatesGet(params: { id: string }): Promise<Models.JourneyTemplate>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.JourneyTemplate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysTemplatesGet(id: string): Promise<Models.JourneyTemplate>;
    journeysTemplatesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.JourneyTemplate> {
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

        const apiPath = '/v1/journeys/templates/{id}'.replace('{id}', id);
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
