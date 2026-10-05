import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { TagManagerTagsCreateKind } from '../enums/tag-manager-tags-create-kind';
import { Load } from '../enums/load';
import { TagManagerTriggersCreateKind } from '../enums/tag-manager-triggers-create-kind';
import { TagManagerVariablesCreateKind } from '../enums/tag-manager-variables-create-kind';

export class TagManagerTags {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every registry key a marketing tag may name, with its label, category, the consent catalogue vendor code it usually discloses as (`vendor`, repeated as `vendor_key` for looking up the catalogue logo), its hosts, the JSON Schema of its configuration and its default event map. Every configuration property carries `title` and `description` as English strings and `x-title` / `x-description` as { de, en } for the tag form.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerRegistryList(): Promise<{}> {

        const apiPath = '/v1/tag-manager/registry';
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
     * Every marketing tag of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} params.id - Only rows whose `id` equals this value.
     * @param {string} params.code - Only rows whose `code` equals this value.
     * @param {string} params.name - Only rows whose `name` equals this value.
     * @param {string} params.description - Only rows whose `description` equals this value.
     * @param {string} params.kind - Only rows whose `kind` equals this value.
     * @param {string} params.registryKey - Only rows whose `registry_key` equals this value.
     * @param {string} params.scriptUrl - Only rows whose `script_url` equals this value.
     * @param {string} params.vendorCode - Only rows whose `vendor_code` equals this value.
     * @param {string} params.purposeCode - Only rows whose `purpose_code` equals this value.
     * @param {string} params.load - Only rows whose `load` equals this value.
     * @param {boolean} params.isActive - Only rows whose `is_active` equals this value.
     * @param {string} params.createdAt - Only rows whose `created_at` equals this value.
     * @param {string} params.updatedAt - Only rows whose `updated_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTagsList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, kind?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string, purposeCode?: string, load?: string, isActive?: boolean, createdAt?: string, updatedAt?: string }): Promise<{}>;
    /**
     * Every marketing tag of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} id - Only rows whose `id` equals this value.
     * @param {string} code - Only rows whose `code` equals this value.
     * @param {string} name - Only rows whose `name` equals this value.
     * @param {string} description - Only rows whose `description` equals this value.
     * @param {string} kind - Only rows whose `kind` equals this value.
     * @param {string} registryKey - Only rows whose `registry_key` equals this value.
     * @param {string} scriptUrl - Only rows whose `script_url` equals this value.
     * @param {string} vendorCode - Only rows whose `vendor_code` equals this value.
     * @param {string} purposeCode - Only rows whose `purpose_code` equals this value.
     * @param {string} load - Only rows whose `load` equals this value.
     * @param {boolean} isActive - Only rows whose `is_active` equals this value.
     * @param {string} createdAt - Only rows whose `created_at` equals this value.
     * @param {string} updatedAt - Only rows whose `updated_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsList(limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, kind?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string, purposeCode?: string, load?: string, isActive?: boolean, createdAt?: string, updatedAt?: string): Promise<{}>;
    tagManagerTagsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, kind?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string, purposeCode?: string, load?: string, isActive?: boolean, createdAt?: string, updatedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, kind?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string, purposeCode?: string, load?: string, isActive?: boolean, createdAt?: string, updatedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, description?: string, kind?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string, purposeCode?: string, load?: string, isActive?: boolean, createdAt?: string, updatedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                code: rest[3] as string,
                name: rest[4] as string,
                description: rest[5] as string,
                kind: rest[6] as string,
                registryKey: rest[7] as string,
                scriptUrl: rest[8] as string,
                vendorCode: rest[9] as string,
                purposeCode: rest[10] as string,
                load: rest[11] as string,
                isActive: rest[12] as boolean,
                createdAt: rest[13] as string,
                updatedAt: rest[14] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const description = params.description;
        const kind = params.kind;
        const registryKey = params.registryKey;
        const scriptUrl = params.scriptUrl;
        const vendorCode = params.vendorCode;
        const purposeCode = params.purposeCode;
        const load = params.load;
        const isActive = params.isActive;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;


        const apiPath = '/v1/tag-manager/tags';
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
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof registryKey !== 'undefined') {
            apiPayload['registry_key'] = registryKey;
        }
        if (typeof scriptUrl !== 'undefined') {
            apiPayload['script_url'] = scriptUrl;
        }
        if (typeof vendorCode !== 'undefined') {
            apiPayload['vendor_code'] = vendorCode;
        }
        if (typeof purposeCode !== 'undefined') {
            apiPayload['purpose_code'] = purposeCode;
        }
        if (typeof load !== 'undefined') {
            apiPayload['load'] = load;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * Create one marketing tag. Every rule is checked and every broken one is named in the 422.
     *
     * @param {string[]} params.chainedVendorCodes - Vendors this tag loads by itself — Google Analytics under a Google Tag Manager container. They do not decide whether the tag loads, but each must be disclosed in the policy, or the publish is refused.
     * @param {string} params.code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} params.config - For a registry tag: the options passed to that registry entry, checked against its `config_schema` on every write. A value may be a `{{variable}}` placeholder, checked again once resolved at publish. Consent Mode defaults and personal data are never options.
     * @param {string} params.description - Free text for the merchant: why this tag exists.
     * @param {object} params.eventMap - Theme event → the vendor's own call, `{ name, params? }` or a name. Overrides the registry's default map per event; `null` removes a default. Keys must be events of theme-events/1.
     * @param {boolean} params.isActive - Whether the tag is part of the next published container. An inactive tag is kept but never published.
     * @param {TagManagerTagsCreateKind} params.kind - `registry` (an entry of GET /tag-manager/registry) or `script` (an https address). There is no custom HTML kind, and anything else is refused with 422.
     * @param {Load} params.load - When the storefront starts loading the tag once allowed: `immediate`, `idle` or `interaction`. A new tag without one takes the market's `default_load` setting.
     * @param {string} params.name - What the row is called, as a person reads it.
     * @param {string} params.purposeCode - The purpose this tag serves (`statistics`, `marketing`, `necessary`, …). The vendor must be disclosed for exactly this purpose. Required.
     * @param {string} params.registryKey - For a registry tag: the @nuxt/scripts registry key (`googleAnalytics`, `etracker`, …). Empty for a script tag.
     * @param {string} params.scriptUrl - For a script tag: the absolute https:// address it loads. Empty for a registry tag.
     * @param {string} params.vendorCode - The vendor this tag loads, as the consent manager's published policy discloses it (`google-analytics`, `etracker`). Required.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerMarketingTag>}
     */
    tagManagerTagsCreate(params?: { chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string }): Promise<Models.TagManagerMarketingTag>;
    /**
     * Create one marketing tag. Every rule is checked and every broken one is named in the 422.
     *
     * @param {string[]} chainedVendorCodes - Vendors this tag loads by itself — Google Analytics under a Google Tag Manager container. They do not decide whether the tag loads, but each must be disclosed in the policy, or the publish is refused.
     * @param {string} code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} config - For a registry tag: the options passed to that registry entry, checked against its `config_schema` on every write. A value may be a `{{variable}}` placeholder, checked again once resolved at publish. Consent Mode defaults and personal data are never options.
     * @param {string} description - Free text for the merchant: why this tag exists.
     * @param {object} eventMap - Theme event → the vendor's own call, `{ name, params? }` or a name. Overrides the registry's default map per event; `null` removes a default. Keys must be events of theme-events/1.
     * @param {boolean} isActive - Whether the tag is part of the next published container. An inactive tag is kept but never published.
     * @param {TagManagerTagsCreateKind} kind - `registry` (an entry of GET /tag-manager/registry) or `script` (an https address). There is no custom HTML kind, and anything else is refused with 422.
     * @param {Load} load - When the storefront starts loading the tag once allowed: `immediate`, `idle` or `interaction`. A new tag without one takes the market's `default_load` setting.
     * @param {string} name - What the row is called, as a person reads it.
     * @param {string} purposeCode - The purpose this tag serves (`statistics`, `marketing`, `necessary`, …). The vendor must be disclosed for exactly this purpose. Required.
     * @param {string} registryKey - For a registry tag: the @nuxt/scripts registry key (`googleAnalytics`, `etracker`, …). Empty for a script tag.
     * @param {string} scriptUrl - For a script tag: the absolute https:// address it loads. Empty for a registry tag.
     * @param {string} vendorCode - The vendor this tag loads, as the consent manager's published policy discloses it (`google-analytics`, `etracker`). Required.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerMarketingTag>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsCreate(chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string): Promise<Models.TagManagerMarketingTag>;
    tagManagerTagsCreate(
        paramsOrFirst?: { chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string } | string[],
        ...rest: [(string)?, (object)?, (string)?, (object)?, (boolean)?, (TagManagerTagsCreateKind)?, (Load)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.TagManagerMarketingTag> {
        let params: { chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string };
        } else {
            params = {
                chainedVendorCodes: paramsOrFirst as string[],
                code: rest[0] as string,
                config: rest[1] as object,
                description: rest[2] as string,
                eventMap: rest[3] as object,
                isActive: rest[4] as boolean,
                kind: rest[5] as TagManagerTagsCreateKind,
                load: rest[6] as Load,
                name: rest[7] as string,
                purposeCode: rest[8] as string,
                registryKey: rest[9] as string,
                scriptUrl: rest[10] as string,
                vendorCode: rest[11] as string            
            };
        }
        
        const chainedVendorCodes = params.chainedVendorCodes;
        const code = params.code;
        const config = params.config;
        const description = params.description;
        const eventMap = params.eventMap;
        const isActive = params.isActive;
        const kind = params.kind;
        const load = params.load;
        const name = params.name;
        const purposeCode = params.purposeCode;
        const registryKey = params.registryKey;
        const scriptUrl = params.scriptUrl;
        const vendorCode = params.vendorCode;


        const apiPath = '/v1/tag-manager/tags';
        const apiPayload: Payload = {};
        if (typeof chainedVendorCodes !== 'undefined') {
            apiPayload['chained_vendor_codes'] = chainedVendorCodes;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof config !== 'undefined') {
            apiPayload['config'] = config;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof eventMap !== 'undefined') {
            apiPayload['event_map'] = eventMap;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof load !== 'undefined') {
            apiPayload['load'] = load;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof purposeCode !== 'undefined') {
            apiPayload['purpose_code'] = purposeCode;
        }
        if (typeof registryKey !== 'undefined') {
            apiPayload['registry_key'] = registryKey;
        }
        if (typeof scriptUrl !== 'undefined') {
            apiPayload['script_url'] = scriptUrl;
        }
        if (typeof vendorCode !== 'undefined') {
            apiPayload['vendor_code'] = vendorCode;
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
     * Delete one marketing tag.
     *
     * @param {string} params.id - The id of the marketing tag.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTagsDelete(params: { id: string }): Promise<{}>;
    /**
     * Delete one marketing tag.
     *
     * @param {string} id - The id of the marketing tag.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsDelete(id: string): Promise<{}>;
    tagManagerTagsDelete(
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

        const apiPath = '/v1/tag-manager/tags/{id}'.replace('{id}', id);
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
     * One marketing tag by id.
     *
     * @param {string} params.id - The id of the marketing tag.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerMarketingTag>}
     */
    tagManagerTagsGet(params: { id: string }): Promise<Models.TagManagerMarketingTag>;
    /**
     * One marketing tag by id.
     *
     * @param {string} id - The id of the marketing tag.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerMarketingTag>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsGet(id: string): Promise<Models.TagManagerMarketingTag>;
    tagManagerTagsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TagManagerMarketingTag> {
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

        const apiPath = '/v1/tag-manager/tags/{id}'.replace('{id}', id);
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
     * Edit one marketing tag. The row it would leave is checked whole.
     *
     * @param {string} params.id - The id of the marketing tag.
     * @param {string[]} params.chainedVendorCodes - Vendors this tag loads by itself — Google Analytics under a Google Tag Manager container. They do not decide whether the tag loads, but each must be disclosed in the policy, or the publish is refused.
     * @param {string} params.code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} params.config - For a registry tag: the options passed to that registry entry, checked against its `config_schema` on every write. A value may be a `{{variable}}` placeholder, checked again once resolved at publish. Consent Mode defaults and personal data are never options.
     * @param {string} params.description - Free text for the merchant: why this tag exists.
     * @param {object} params.eventMap - Theme event → the vendor's own call, `{ name, params? }` or a name. Overrides the registry's default map per event; `null` removes a default. Keys must be events of theme-events/1.
     * @param {boolean} params.isActive - Whether the tag is part of the next published container. An inactive tag is kept but never published.
     * @param {TagManagerTagsCreateKind} params.kind - `registry` (an entry of GET /tag-manager/registry) or `script` (an https address). There is no custom HTML kind, and anything else is refused with 422.
     * @param {Load} params.load - When the storefront starts loading the tag once allowed: `immediate`, `idle` or `interaction`. A new tag without one takes the market's `default_load` setting.
     * @param {string} params.name - What the row is called, as a person reads it.
     * @param {string} params.purposeCode - The purpose this tag serves (`statistics`, `marketing`, `necessary`, …). The vendor must be disclosed for exactly this purpose. Required.
     * @param {string} params.registryKey - For a registry tag: the @nuxt/scripts registry key (`googleAnalytics`, `etracker`, …). Empty for a script tag.
     * @param {string} params.scriptUrl - For a script tag: the absolute https:// address it loads. Empty for a registry tag.
     * @param {string} params.vendorCode - The vendor this tag loads, as the consent manager's published policy discloses it (`google-analytics`, `etracker`). Required.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerMarketingTag>}
     */
    tagManagerTagsUpdate(params: { id: string, chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string }): Promise<Models.TagManagerMarketingTag>;
    /**
     * Edit one marketing tag. The row it would leave is checked whole.
     *
     * @param {string} id - The id of the marketing tag.
     * @param {string[]} chainedVendorCodes - Vendors this tag loads by itself — Google Analytics under a Google Tag Manager container. They do not decide whether the tag loads, but each must be disclosed in the policy, or the publish is refused.
     * @param {string} code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} config - For a registry tag: the options passed to that registry entry, checked against its `config_schema` on every write. A value may be a `{{variable}}` placeholder, checked again once resolved at publish. Consent Mode defaults and personal data are never options.
     * @param {string} description - Free text for the merchant: why this tag exists.
     * @param {object} eventMap - Theme event → the vendor's own call, `{ name, params? }` or a name. Overrides the registry's default map per event; `null` removes a default. Keys must be events of theme-events/1.
     * @param {boolean} isActive - Whether the tag is part of the next published container. An inactive tag is kept but never published.
     * @param {TagManagerTagsCreateKind} kind - `registry` (an entry of GET /tag-manager/registry) or `script` (an https address). There is no custom HTML kind, and anything else is refused with 422.
     * @param {Load} load - When the storefront starts loading the tag once allowed: `immediate`, `idle` or `interaction`. A new tag without one takes the market's `default_load` setting.
     * @param {string} name - What the row is called, as a person reads it.
     * @param {string} purposeCode - The purpose this tag serves (`statistics`, `marketing`, `necessary`, …). The vendor must be disclosed for exactly this purpose. Required.
     * @param {string} registryKey - For a registry tag: the @nuxt/scripts registry key (`googleAnalytics`, `etracker`, …). Empty for a script tag.
     * @param {string} scriptUrl - For a script tag: the absolute https:// address it loads. Empty for a registry tag.
     * @param {string} vendorCode - The vendor this tag loads, as the consent manager's published policy discloses it (`google-analytics`, `etracker`). Required.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerMarketingTag>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsUpdate(id: string, chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string): Promise<Models.TagManagerMarketingTag>;
    tagManagerTagsUpdate(
        paramsOrFirst: { id: string, chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string } | string,
        ...rest: [(string[])?, (string)?, (object)?, (string)?, (object)?, (boolean)?, (TagManagerTagsCreateKind)?, (Load)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.TagManagerMarketingTag> {
        let params: { id: string, chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, chainedVendorCodes?: string[], code?: string, config?: object, description?: string, eventMap?: object, isActive?: boolean, kind?: TagManagerTagsCreateKind, load?: Load, name?: string, purposeCode?: string, registryKey?: string, scriptUrl?: string, vendorCode?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                chainedVendorCodes: rest[0] as string[],
                code: rest[1] as string,
                config: rest[2] as object,
                description: rest[3] as string,
                eventMap: rest[4] as object,
                isActive: rest[5] as boolean,
                kind: rest[6] as TagManagerTagsCreateKind,
                load: rest[7] as Load,
                name: rest[8] as string,
                purposeCode: rest[9] as string,
                registryKey: rest[10] as string,
                scriptUrl: rest[11] as string,
                vendorCode: rest[12] as string            
            };
        }
        
        const id = params.id;
        const chainedVendorCodes = params.chainedVendorCodes;
        const code = params.code;
        const config = params.config;
        const description = params.description;
        const eventMap = params.eventMap;
        const isActive = params.isActive;
        const kind = params.kind;
        const load = params.load;
        const name = params.name;
        const purposeCode = params.purposeCode;
        const registryKey = params.registryKey;
        const scriptUrl = params.scriptUrl;
        const vendorCode = params.vendorCode;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/tag-manager/tags/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof chainedVendorCodes !== 'undefined') {
            apiPayload['chained_vendor_codes'] = chainedVendorCodes;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof config !== 'undefined') {
            apiPayload['config'] = config;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof eventMap !== 'undefined') {
            apiPayload['event_map'] = eventMap;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof load !== 'undefined') {
            apiPayload['load'] = load;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof purposeCode !== 'undefined') {
            apiPayload['purpose_code'] = purposeCode;
        }
        if (typeof registryKey !== 'undefined') {
            apiPayload['registry_key'] = registryKey;
        }
        if (typeof scriptUrl !== 'undefined') {
            apiPayload['script_url'] = scriptUrl;
        }
        if (typeof vendorCode !== 'undefined') {
            apiPayload['vendor_code'] = vendorCode;
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

    /**
     * The triggers attached to one marketing tag. A tag with none loads on every page.
     *
     * @param {string} params.id - The id of the marketing tag.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTagsTriggersList(params: { id: string }): Promise<{}>;
    /**
     * The triggers attached to one marketing tag. A tag with none loads on every page.
     *
     * @param {string} id - The id of the marketing tag.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsTriggersList(id: string): Promise<{}>;
    tagManagerTagsTriggersList(
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

        const apiPath = '/v1/tag-manager/tags/{id}/triggers'.replace('{id}', id);
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
     * Attach one trigger to one marketing tag. A pair is attached once.
     *
     * @param {string} params.id - The id of the marketing tag.
     * @param {string} params.triggerId - The trigger to attach.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTagsTriggersAttach(params: { id: string, triggerId: string }): Promise<{}>;
    /**
     * Attach one trigger to one marketing tag. A pair is attached once.
     *
     * @param {string} id - The id of the marketing tag.
     * @param {string} triggerId - The trigger to attach.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsTriggersAttach(id: string, triggerId: string): Promise<{}>;
    tagManagerTagsTriggersAttach(
        paramsOrFirst: { id: string, triggerId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, triggerId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, triggerId: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                triggerId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const triggerId = params.triggerId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof triggerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "triggerId"');
        }

        const apiPath = '/v1/tag-manager/tags/{id}/triggers'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof triggerId !== 'undefined') {
            apiPayload['trigger_id'] = triggerId;
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
     * Remove one trigger from one marketing tag.
     *
     * @param {string} params.id - The id of the marketing tag.
     * @param {string} params.triggerId - The id of the trigger.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTagsTriggersDetach(params: { id: string, triggerId: string }): Promise<{}>;
    /**
     * Remove one trigger from one marketing tag.
     *
     * @param {string} id - The id of the marketing tag.
     * @param {string} triggerId - The id of the trigger.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTagsTriggersDetach(id: string, triggerId: string): Promise<{}>;
    tagManagerTagsTriggersDetach(
        paramsOrFirst: { id: string, triggerId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, triggerId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, triggerId: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                triggerId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const triggerId = params.triggerId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof triggerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "triggerId"');
        }

        const apiPath = '/v1/tag-manager/tags/{id}/triggers/{trigger_id}'.replace('{id}', id).replace('{trigger_id}', triggerId);
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
     * Every trigger of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} params.id - Only rows whose `id` equals this value.
     * @param {string} params.code - Only rows whose `code` equals this value.
     * @param {string} params.name - Only rows whose `name` equals this value.
     * @param {string} params.kind - Only rows whose `kind` equals this value.
     * @param {string} params.eventName - Only rows whose `event_name` equals this value.
     * @param {string} params.createdAt - Only rows whose `created_at` equals this value.
     * @param {string} params.updatedAt - Only rows whose `updated_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTriggersList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, eventName?: string, createdAt?: string, updatedAt?: string }): Promise<{}>;
    /**
     * Every trigger of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} id - Only rows whose `id` equals this value.
     * @param {string} code - Only rows whose `code` equals this value.
     * @param {string} name - Only rows whose `name` equals this value.
     * @param {string} kind - Only rows whose `kind` equals this value.
     * @param {string} eventName - Only rows whose `event_name` equals this value.
     * @param {string} createdAt - Only rows whose `created_at` equals this value.
     * @param {string} updatedAt - Only rows whose `updated_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTriggersList(limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, eventName?: string, createdAt?: string, updatedAt?: string): Promise<{}>;
    tagManagerTriggersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, eventName?: string, createdAt?: string, updatedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, eventName?: string, createdAt?: string, updatedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, eventName?: string, createdAt?: string, updatedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                code: rest[3] as string,
                name: rest[4] as string,
                kind: rest[5] as string,
                eventName: rest[6] as string,
                createdAt: rest[7] as string,
                updatedAt: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const kind = params.kind;
        const eventName = params.eventName;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;


        const apiPath = '/v1/tag-manager/triggers';
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
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof eventName !== 'undefined') {
            apiPayload['event_name'] = eventName;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * Create one trigger. Every rule is checked and every broken one is named in the 422.
     *
     * @param {string} params.code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} params.conditions - Narrowing, every key optional and all set keys must match: `path_prefixes` (paths starting with /), `page_types` (the contract's page types), `b2b` (true/false).
     * @param {string} params.eventName - For a theme_event trigger: an event of theme-events/1. Empty for a page_view trigger.
     * @param {TagManagerTriggersCreateKind} params.kind - `page_view` (on page views matching the conditions) or `theme_event` (when the named event happens).
     * @param {string} params.name - What the row is called, as a person reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerTrigger>}
     */
    tagManagerTriggersCreate(params?: { code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string }): Promise<Models.TagManagerTrigger>;
    /**
     * Create one trigger. Every rule is checked and every broken one is named in the 422.
     *
     * @param {string} code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} conditions - Narrowing, every key optional and all set keys must match: `path_prefixes` (paths starting with /), `page_types` (the contract's page types), `b2b` (true/false).
     * @param {string} eventName - For a theme_event trigger: an event of theme-events/1. Empty for a page_view trigger.
     * @param {TagManagerTriggersCreateKind} kind - `page_view` (on page views matching the conditions) or `theme_event` (when the named event happens).
     * @param {string} name - What the row is called, as a person reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerTrigger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTriggersCreate(code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string): Promise<Models.TagManagerTrigger>;
    tagManagerTriggersCreate(
        paramsOrFirst?: { code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string } | string,
        ...rest: [(object)?, (string)?, (TagManagerTriggersCreateKind)?, (string)?]    
    ): Promise<Models.TagManagerTrigger> {
        let params: { code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                conditions: rest[0] as object,
                eventName: rest[1] as string,
                kind: rest[2] as TagManagerTriggersCreateKind,
                name: rest[3] as string            
            };
        }
        
        const code = params.code;
        const conditions = params.conditions;
        const eventName = params.eventName;
        const kind = params.kind;
        const name = params.name;


        const apiPath = '/v1/tag-manager/triggers';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = Client.toWireKeys(conditions, {"pageTypes":{"wire":"page_types","children":null},"pathPrefixes":{"wire":"path_prefixes","children":null}});
        }
        if (typeof eventName !== 'undefined') {
            apiPayload['event_name'] = eventName;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
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
     * Delete one trigger.
     *
     * @param {string} params.id - The id of the trigger.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerTriggersDelete(params: { id: string }): Promise<{}>;
    /**
     * Delete one trigger.
     *
     * @param {string} id - The id of the trigger.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTriggersDelete(id: string): Promise<{}>;
    tagManagerTriggersDelete(
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

        const apiPath = '/v1/tag-manager/triggers/{id}'.replace('{id}', id);
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
     * One trigger by id.
     *
     * @param {string} params.id - The id of the trigger.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerTrigger>}
     */
    tagManagerTriggersGet(params: { id: string }): Promise<Models.TagManagerTrigger>;
    /**
     * One trigger by id.
     *
     * @param {string} id - The id of the trigger.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerTrigger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTriggersGet(id: string): Promise<Models.TagManagerTrigger>;
    tagManagerTriggersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TagManagerTrigger> {
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

        const apiPath = '/v1/tag-manager/triggers/{id}'.replace('{id}', id);
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
     * Edit one trigger. The row it would leave is checked whole.
     *
     * @param {string} params.id - The id of the trigger.
     * @param {string} params.code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} params.conditions - Narrowing, every key optional and all set keys must match: `path_prefixes` (paths starting with /), `page_types` (the contract's page types), `b2b` (true/false).
     * @param {string} params.eventName - For a theme_event trigger: an event of theme-events/1. Empty for a page_view trigger.
     * @param {TagManagerTriggersCreateKind} params.kind - `page_view` (on page views matching the conditions) or `theme_event` (when the named event happens).
     * @param {string} params.name - What the row is called, as a person reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerTrigger>}
     */
    tagManagerTriggersUpdate(params: { id: string, code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string }): Promise<Models.TagManagerTrigger>;
    /**
     * Edit one trigger. The row it would leave is checked whole.
     *
     * @param {string} id - The id of the trigger.
     * @param {string} code - The row's stable handle, unique per tenant: lowercase letters, digits, '-' and '_'.
     * @param {object} conditions - Narrowing, every key optional and all set keys must match: `path_prefixes` (paths starting with /), `page_types` (the contract's page types), `b2b` (true/false).
     * @param {string} eventName - For a theme_event trigger: an event of theme-events/1. Empty for a page_view trigger.
     * @param {TagManagerTriggersCreateKind} kind - `page_view` (on page views matching the conditions) or `theme_event` (when the named event happens).
     * @param {string} name - What the row is called, as a person reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerTrigger>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerTriggersUpdate(id: string, code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string): Promise<Models.TagManagerTrigger>;
    tagManagerTriggersUpdate(
        paramsOrFirst: { id: string, code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string } | string,
        ...rest: [(string)?, (object)?, (string)?, (TagManagerTriggersCreateKind)?, (string)?]    
    ): Promise<Models.TagManagerTrigger> {
        let params: { id: string, code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, conditions?: object, eventName?: string, kind?: TagManagerTriggersCreateKind, name?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                conditions: rest[1] as object,
                eventName: rest[2] as string,
                kind: rest[3] as TagManagerTriggersCreateKind,
                name: rest[4] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const conditions = params.conditions;
        const eventName = params.eventName;
        const kind = params.kind;
        const name = params.name;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/tag-manager/triggers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = Client.toWireKeys(conditions, {"pageTypes":{"wire":"page_types","children":null},"pathPrefixes":{"wire":"path_prefixes","children":null}});
        }
        if (typeof eventName !== 'undefined') {
            apiPayload['event_name'] = eventName;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
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

    /**
     * Every variable of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} params.id - Only rows whose `id` equals this value.
     * @param {string} params.code - Only rows whose `code` equals this value.
     * @param {string} params.name - Only rows whose `name` equals this value.
     * @param {string} params.kind - Only rows whose `kind` equals this value.
     * @param {string} params.xpath - Only rows whose `path` equals this value.
     * @param {string} params.createdAt - Only rows whose `created_at` equals this value.
     * @param {string} params.updatedAt - Only rows whose `updated_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerVariablesList(params?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, xpath?: string, createdAt?: string, updatedAt?: string }): Promise<{}>;
    /**
     * Every variable of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} id - Only rows whose `id` equals this value.
     * @param {string} code - Only rows whose `code` equals this value.
     * @param {string} name - Only rows whose `name` equals this value.
     * @param {string} kind - Only rows whose `kind` equals this value.
     * @param {string} xpath - Only rows whose `path` equals this value.
     * @param {string} createdAt - Only rows whose `created_at` equals this value.
     * @param {string} updatedAt - Only rows whose `updated_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerVariablesList(limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, xpath?: string, createdAt?: string, updatedAt?: string): Promise<{}>;
    tagManagerVariablesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, xpath?: string, createdAt?: string, updatedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, xpath?: string, createdAt?: string, updatedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, code?: string, name?: string, kind?: string, xpath?: string, createdAt?: string, updatedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                code: rest[3] as string,
                name: rest[4] as string,
                kind: rest[5] as string,
                xpath: rest[6] as string,
                createdAt: rest[7] as string,
                updatedAt: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const kind = params.kind;
        const xpath = params.xpath;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;


        const apiPath = '/v1/tag-manager/variables';
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
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof xpath !== 'undefined') {
            apiPayload['path'] = xpath;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * Create one variable. Every rule is checked and every broken one is named in the 422.
     *
     * @param {string} params.code - The name a placeholder uses: `{{code}}`. Lowercase letters, digits and underscores, starting with a letter.
     * @param {any} params.constantValue - For a constant variable: its value, of any JSON type.
     * @param {TagManagerVariablesCreateKind} params.kind - `constant` (a value kept here), `event_field` (a field of the theme event) or `page` (a field of the page).
     * @param {string} params.name - What the row is called, as a person reads it.
     * @param {string} params.xpath - For event_field and page variables: the dotted path, e.g. `ecommerce.value_net`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerVariable>}
     */
    tagManagerVariablesCreate(params?: { code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string }): Promise<Models.TagManagerVariable>;
    /**
     * Create one variable. Every rule is checked and every broken one is named in the 422.
     *
     * @param {string} code - The name a placeholder uses: `{{code}}`. Lowercase letters, digits and underscores, starting with a letter.
     * @param {any} constantValue - For a constant variable: its value, of any JSON type.
     * @param {TagManagerVariablesCreateKind} kind - `constant` (a value kept here), `event_field` (a field of the theme event) or `page` (a field of the page).
     * @param {string} name - What the row is called, as a person reads it.
     * @param {string} xpath - For event_field and page variables: the dotted path, e.g. `ecommerce.value_net`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerVariable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerVariablesCreate(code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string): Promise<Models.TagManagerVariable>;
    tagManagerVariablesCreate(
        paramsOrFirst?: { code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string } | string,
        ...rest: [(any)?, (TagManagerVariablesCreateKind)?, (string)?, (string)?]    
    ): Promise<Models.TagManagerVariable> {
        let params: { code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                constantValue: rest[0] as any,
                kind: rest[1] as TagManagerVariablesCreateKind,
                name: rest[2] as string,
                xpath: rest[3] as string            
            };
        }
        
        const code = params.code;
        const constantValue = params.constantValue;
        const kind = params.kind;
        const name = params.name;
        const xpath = params.xpath;


        const apiPath = '/v1/tag-manager/variables';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof constantValue !== 'undefined') {
            apiPayload['constant_value'] = constantValue;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof xpath !== 'undefined') {
            apiPayload['path'] = xpath;
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
     * Delete one variable.
     *
     * @param {string} params.id - The id of the variable.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerVariablesDelete(params: { id: string }): Promise<{}>;
    /**
     * Delete one variable.
     *
     * @param {string} id - The id of the variable.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerVariablesDelete(id: string): Promise<{}>;
    tagManagerVariablesDelete(
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

        const apiPath = '/v1/tag-manager/variables/{id}'.replace('{id}', id);
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
     * One variable by id.
     *
     * @param {string} params.id - The id of the variable.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerVariable>}
     */
    tagManagerVariablesGet(params: { id: string }): Promise<Models.TagManagerVariable>;
    /**
     * One variable by id.
     *
     * @param {string} id - The id of the variable.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerVariable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerVariablesGet(id: string): Promise<Models.TagManagerVariable>;
    tagManagerVariablesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TagManagerVariable> {
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

        const apiPath = '/v1/tag-manager/variables/{id}'.replace('{id}', id);
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
     * Edit one variable. The row it would leave is checked whole.
     *
     * @param {string} params.id - The id of the variable.
     * @param {string} params.code - The name a placeholder uses: `{{code}}`. Lowercase letters, digits and underscores, starting with a letter.
     * @param {any} params.constantValue - For a constant variable: its value, of any JSON type.
     * @param {TagManagerVariablesCreateKind} params.kind - `constant` (a value kept here), `event_field` (a field of the theme event) or `page` (a field of the page).
     * @param {string} params.name - What the row is called, as a person reads it.
     * @param {string} params.xpath - For event_field and page variables: the dotted path, e.g. `ecommerce.value_net`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerVariable>}
     */
    tagManagerVariablesUpdate(params: { id: string, code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string }): Promise<Models.TagManagerVariable>;
    /**
     * Edit one variable. The row it would leave is checked whole.
     *
     * @param {string} id - The id of the variable.
     * @param {string} code - The name a placeholder uses: `{{code}}`. Lowercase letters, digits and underscores, starting with a letter.
     * @param {any} constantValue - For a constant variable: its value, of any JSON type.
     * @param {TagManagerVariablesCreateKind} kind - `constant` (a value kept here), `event_field` (a field of the theme event) or `page` (a field of the page).
     * @param {string} name - What the row is called, as a person reads it.
     * @param {string} xpath - For event_field and page variables: the dotted path, e.g. `ecommerce.value_net`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerVariable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerVariablesUpdate(id: string, code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string): Promise<Models.TagManagerVariable>;
    tagManagerVariablesUpdate(
        paramsOrFirst: { id: string, code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string } | string,
        ...rest: [(string)?, (any)?, (TagManagerVariablesCreateKind)?, (string)?, (string)?]    
    ): Promise<Models.TagManagerVariable> {
        let params: { id: string, code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, constantValue?: any, kind?: TagManagerVariablesCreateKind, name?: string, xpath?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                constantValue: rest[1] as any,
                kind: rest[2] as TagManagerVariablesCreateKind,
                name: rest[3] as string,
                xpath: rest[4] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const constantValue = params.constantValue;
        const kind = params.kind;
        const name = params.name;
        const xpath = params.xpath;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/tag-manager/variables/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof constantValue !== 'undefined') {
            apiPayload['constant_value'] = constantValue;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof xpath !== 'undefined') {
            apiPayload['path'] = xpath;
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

    /**
     * The event names of the theme event contract version this app supports (theme-events/1), which a trigger and an event map may name, plus the value sets of tags, triggers and variables.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerVocabulariesList(): Promise<{}> {

        const apiPath = '/v1/tag-manager/vocabularies';
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
