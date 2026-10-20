import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Event } from '../enums/event';
import { ValueSource } from '../enums/value-source';

export class AdsRules {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?ad_account_id=`, `?event=`, `?active=true`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.event - Keep only rows whose `event` equals this.
     * @param {string} params.valueSource - Keep only rows whose `value_source` equals this.
     * @param {string} params.externalConversionRef - Keep only rows whose `external_conversion_ref` equals this.
     * @param {string} params.consentPurpose - Keep only rows whose `consent_purpose` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsRulesList(params?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, name?: string, event?: string, valueSource?: string, externalConversionRef?: string, consentPurpose?: string, active?: string }): Promise<{}>;
    /**
     * Filter `?ad_account_id=`, `?event=`, `?active=true`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} adAccountId - Keep only rows whose `ad_account_id` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} event - Keep only rows whose `event` equals this.
     * @param {string} valueSource - Keep only rows whose `value_source` equals this.
     * @param {string} externalConversionRef - Keep only rows whose `external_conversion_ref` equals this.
     * @param {string} consentPurpose - Keep only rows whose `consent_purpose` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsRulesList(limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, name?: string, event?: string, valueSource?: string, externalConversionRef?: string, consentPurpose?: string, active?: string): Promise<{}>;
    adsRulesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, name?: string, event?: string, valueSource?: string, externalConversionRef?: string, consentPurpose?: string, active?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, name?: string, event?: string, valueSource?: string, externalConversionRef?: string, consentPurpose?: string, active?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, adAccountId?: string, name?: string, event?: string, valueSource?: string, externalConversionRef?: string, consentPurpose?: string, active?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                adAccountId: rest[3] as string,
                name: rest[4] as string,
                event: rest[5] as string,
                valueSource: rest[6] as string,
                externalConversionRef: rest[7] as string,
                consentPurpose: rest[8] as string,
                active: rest[9] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const adAccountId = params.adAccountId;
        const name = params.name;
        const event = params.event;
        const valueSource = params.valueSource;
        const externalConversionRef = params.externalConversionRef;
        const consentPurpose = params.consentPurpose;
        const active = params.active;


        const apiPath = '/v1/ads/conversion-rules';
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
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof event !== 'undefined') {
            apiPayload['event'] = event;
        }
        if (typeof valueSource !== 'undefined') {
            apiPayload['value_source'] = valueSource;
        }
        if (typeof externalConversionRef !== 'undefined') {
            apiPayload['external_conversion_ref'] = externalConversionRef;
        }
        if (typeof consentPurpose !== 'undefined') {
            apiPayload['consent_purpose'] = consentPurpose;
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
     * @param {string} params.adAccountId - The ad account this row belongs to.
     * @param {Event} params.event - `order.placed`, `subscription.confirmed` or `form.submitted`.
     * @param {string} params.name - What the merchant calls the rule.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} params.consentPurpose - The consent manager purpose the visitor must have allowed.
     * @param {string} params.externalConversionRef - The conversion action or event name on the platform.
     * @param {number} params.fixedValue - The value when value_source is fixed.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {ValueSource} params.valueSource - `order_net` (goods after discount, no tax or freight), `order_gross`, `fixed` or `none`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConversionRule>}
     */
    adsRulesCreate(params: { adAccountId: string, event: Event, name: string, active?: boolean, consentPurpose?: string, externalConversionRef?: string, fixedValue?: number, metadata?: any, valueSource?: ValueSource }): Promise<Models.ConversionRule>;
    /**
     *
     * @param {string} adAccountId - The ad account this row belongs to.
     * @param {Event} event - `order.placed`, `subscription.confirmed` or `form.submitted`.
     * @param {string} name - What the merchant calls the rule.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} consentPurpose - The consent manager purpose the visitor must have allowed.
     * @param {string} externalConversionRef - The conversion action or event name on the platform.
     * @param {number} fixedValue - The value when value_source is fixed.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {ValueSource} valueSource - `order_net` (goods after discount, no tax or freight), `order_gross`, `fixed` or `none`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConversionRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsRulesCreate(adAccountId: string, event: Event, name: string, active?: boolean, consentPurpose?: string, externalConversionRef?: string, fixedValue?: number, metadata?: any, valueSource?: ValueSource): Promise<Models.ConversionRule>;
    adsRulesCreate(
        paramsOrFirst: { adAccountId: string, event: Event, name: string, active?: boolean, consentPurpose?: string, externalConversionRef?: string, fixedValue?: number, metadata?: any, valueSource?: ValueSource } | string,
        ...rest: [(Event)?, (string)?, (boolean)?, (string)?, (string)?, (number)?, (any)?, (ValueSource)?]    
    ): Promise<Models.ConversionRule> {
        let params: { adAccountId: string, event: Event, name: string, active?: boolean, consentPurpose?: string, externalConversionRef?: string, fixedValue?: number, metadata?: any, valueSource?: ValueSource };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { adAccountId: string, event: Event, name: string, active?: boolean, consentPurpose?: string, externalConversionRef?: string, fixedValue?: number, metadata?: any, valueSource?: ValueSource };
        } else {
            params = {
                adAccountId: paramsOrFirst as string,
                event: rest[0] as Event,
                name: rest[1] as string,
                active: rest[2] as boolean,
                consentPurpose: rest[3] as string,
                externalConversionRef: rest[4] as string,
                fixedValue: rest[5] as number,
                metadata: rest[6] as any,
                valueSource: rest[7] as ValueSource            
            };
        }
        
        const adAccountId = params.adAccountId;
        const event = params.event;
        const name = params.name;
        const active = params.active;
        const consentPurpose = params.consentPurpose;
        const externalConversionRef = params.externalConversionRef;
        const fixedValue = params.fixedValue;
        const metadata = params.metadata;
        const valueSource = params.valueSource;

        if (typeof adAccountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "adAccountId"');
        }
        if (typeof event === 'undefined') {
            throw new RevenexxException('Missing required parameter: "event"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/ads/conversion-rules';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof consentPurpose !== 'undefined') {
            apiPayload['consent_purpose'] = consentPurpose;
        }
        if (typeof event !== 'undefined') {
            apiPayload['event'] = event;
        }
        if (typeof externalConversionRef !== 'undefined') {
            apiPayload['external_conversion_ref'] = externalConversionRef;
        }
        if (typeof fixedValue !== 'undefined') {
            apiPayload['fixed_value'] = fixedValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof valueSource !== 'undefined') {
            apiPayload['value_source'] = valueSource;
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
     * @returns {Promise<{}>}
     */
    adsRulesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsRulesDelete(id: string): Promise<{}>;
    adsRulesDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
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

        const apiPath = '/v1/ads/conversion-rules/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConversionRule>}
     */
    adsRulesGet(params: { id: string }): Promise<Models.ConversionRule>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConversionRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsRulesGet(id: string): Promise<Models.ConversionRule>;
    adsRulesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ConversionRule> {
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

        const apiPath = '/v1/ads/conversion-rules/{id}'.replace('{id}', id);
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

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} params.adAccountId - The ad account this row belongs to.
     * @param {string} params.consentPurpose - The consent manager purpose the visitor must have allowed.
     * @param {Event} params.event - `order.placed`, `subscription.confirmed` or `form.submitted`.
     * @param {string} params.externalConversionRef - The conversion action or event name on the platform.
     * @param {number} params.fixedValue - The value when value_source is fixed.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - What the merchant calls the rule.
     * @param {ValueSource} params.valueSource - `order_net` (goods after discount, no tax or freight), `order_gross`, `fixed` or `none`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConversionRule>}
     */
    adsRulesUpdate(params: { id: string, active?: boolean, adAccountId?: string, consentPurpose?: string, event?: Event, externalConversionRef?: string, fixedValue?: number, metadata?: any, name?: string, valueSource?: ValueSource }): Promise<Models.ConversionRule>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} adAccountId - The ad account this row belongs to.
     * @param {string} consentPurpose - The consent manager purpose the visitor must have allowed.
     * @param {Event} event - `order.placed`, `subscription.confirmed` or `form.submitted`.
     * @param {string} externalConversionRef - The conversion action or event name on the platform.
     * @param {number} fixedValue - The value when value_source is fixed.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - What the merchant calls the rule.
     * @param {ValueSource} valueSource - `order_net` (goods after discount, no tax or freight), `order_gross`, `fixed` or `none`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConversionRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsRulesUpdate(id: string, active?: boolean, adAccountId?: string, consentPurpose?: string, event?: Event, externalConversionRef?: string, fixedValue?: number, metadata?: any, name?: string, valueSource?: ValueSource): Promise<Models.ConversionRule>;
    adsRulesUpdate(
        paramsOrFirst: { id: string, active?: boolean, adAccountId?: string, consentPurpose?: string, event?: Event, externalConversionRef?: string, fixedValue?: number, metadata?: any, name?: string, valueSource?: ValueSource } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (Event)?, (string)?, (number)?, (any)?, (string)?, (ValueSource)?]    
    ): Promise<Models.ConversionRule> {
        let params: { id: string, active?: boolean, adAccountId?: string, consentPurpose?: string, event?: Event, externalConversionRef?: string, fixedValue?: number, metadata?: any, name?: string, valueSource?: ValueSource };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, adAccountId?: string, consentPurpose?: string, event?: Event, externalConversionRef?: string, fixedValue?: number, metadata?: any, name?: string, valueSource?: ValueSource };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                adAccountId: rest[1] as string,
                consentPurpose: rest[2] as string,
                event: rest[3] as Event,
                externalConversionRef: rest[4] as string,
                fixedValue: rest[5] as number,
                metadata: rest[6] as any,
                name: rest[7] as string,
                valueSource: rest[8] as ValueSource            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const adAccountId = params.adAccountId;
        const consentPurpose = params.consentPurpose;
        const event = params.event;
        const externalConversionRef = params.externalConversionRef;
        const fixedValue = params.fixedValue;
        const metadata = params.metadata;
        const name = params.name;
        const valueSource = params.valueSource;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/conversion-rules/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof adAccountId !== 'undefined') {
            apiPayload['ad_account_id'] = adAccountId;
        }
        if (typeof consentPurpose !== 'undefined') {
            apiPayload['consent_purpose'] = consentPurpose;
        }
        if (typeof event !== 'undefined') {
            apiPayload['event'] = event;
        }
        if (typeof externalConversionRef !== 'undefined') {
            apiPayload['external_conversion_ref'] = externalConversionRef;
        }
        if (typeof fixedValue !== 'undefined') {
            apiPayload['fixed_value'] = fixedValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof valueSource !== 'undefined') {
            apiPayload['value_source'] = valueSource;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
