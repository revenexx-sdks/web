import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Tone } from '../enums/tone';
import { CustomersVocabulariesGetName } from '../enums/customers-vocabularies-get-name';

export class CustomersValueLists {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * What an address is used for. Billing and shipping are what a checkout needs; a works entrance or a central accounts office is the tenant's own. A fresh install is seeded with billing, shipping, and the set seeds on first read too, so the page is never empty and `addresses.type` always has a value it may carry. The whole set comes back in one page in the tenant's own order — this route takes no limit/offset/order and no column filters, so `page` describes the full set and `filter` is always empty.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressTypesList(): Promise<{}> {

        const apiPath = '/v1/customers/address-types';
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
     * Extends this tenant's address types set with a value of their own — the whole reason these four stopped being CHECK constraints. What an address is used for. Billing and shipping are what a checkout needs; a works entrance or a central accounts office is the tenant's own. The code is lowercase and becomes what `addresses.type` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} params.code - What `addresses.type` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AddressTypeRow>}
     */
    customersAddressTypesCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.AddressTypeRow>;
    /**
     * Extends this tenant's address types set with a value of their own — the whole reason these four stopped being CHECK constraints. What an address is used for. Billing and shipping are what a checkout needs; a works entrance or a central accounts office is the tenant's own. The code is lowercase and becomes what `addresses.type` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} code - What `addresses.type` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AddressTypeRow>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressTypesCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.AddressTypeRow>;
    customersAddressTypesCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.AddressTypeRow> {
        let params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        } else {
            params = {
                code: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                tone: rest[6] as Tone            
            };
        }
        
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const tone = params.tone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/address-types';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Takes a value out of the address types set. There is no foreign key behind `addresses.type` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} params.id - The address type to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressTypesDelete(params: { id: string }): Promise<{}>;
    /**
     * Takes a value out of the address types set. There is no foreign key behind `addresses.type` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} id - The address type to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressTypesDelete(id: string): Promise<{}>;
    customersAddressTypesDelete(
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

        const apiPath = '/v1/customers/address-types/{id}'.replace('{id}', id);
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
     * One value of the address types set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. What an address is used for. Billing and shipping are what a checkout needs; a works entrance or a central accounts office is the tenant's own. Reading one value is the rare path: `GET /customers/address-types` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} params.id - The address type to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AddressTypeRow>}
     */
    customersAddressTypesGet(params: { id: string }): Promise<Models.AddressTypeRow>;
    /**
     * One value of the address types set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. What an address is used for. Billing and shipping are what a checkout needs; a works entrance or a central accounts office is the tenant's own. Reading one value is the rare path: `GET /customers/address-types` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} id - The address type to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AddressTypeRow>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressTypesGet(id: string): Promise<Models.AddressTypeRow>;
    customersAddressTypesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AddressTypeRow> {
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

        const apiPath = '/v1/customers/address-types/{id}'.replace('{id}', id);
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
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `shipping` to wording of their own changes what people READ and nothing about what `addresses.type` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} params.id - The address type to edit.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AddressTypeRow>}
     */
    customersAddressTypesUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.AddressTypeRow>;
    /**
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `shipping` to wording of their own changes what people READ and nothing about what `addresses.type` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} id - The address type to edit.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AddressTypeRow>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressTypesUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.AddressTypeRow>;
    customersAddressTypesUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.AddressTypeRow> {
        let params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                title: rest[5] as string,
                tone: rest[6] as Tone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/address-types/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * What kind of entry lands on a customer timeline. 'system' is the app's own decision trail and a caller may not file one, whatever the set says. A fresh install is seeded with system, note, call, email, meeting, visit, task, and the set seeds on first read too, so the page is never empty and `contact_events.kind` always has a value it may carry. The whole set comes back in one page in the tenant's own order — this route takes no limit/offset/order and no column filters, so `page` describes the full set and `filter` is always empty.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactEventKindsList(): Promise<{}> {

        const apiPath = '/v1/customers/contact-event-kinds';
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
     * Extends this tenant's activity types set with a value of their own — the whole reason these four stopped being CHECK constraints. What kind of entry lands on a customer timeline. 'system' is the app's own decision trail and a caller may not file one, whatever the set says. The code is lowercase and becomes what `contact_events.kind` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} params.code - What `contact_events.kind` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEventKind>}
     */
    customersContactEventKindsCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.ContactEventKind>;
    /**
     * Extends this tenant's activity types set with a value of their own — the whole reason these four stopped being CHECK constraints. What kind of entry lands on a customer timeline. 'system' is the app's own decision trail and a caller may not file one, whatever the set says. The code is lowercase and becomes what `contact_events.kind` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} code - What `contact_events.kind` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEventKind>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventKindsCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.ContactEventKind>;
    customersContactEventKindsCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.ContactEventKind> {
        let params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        } else {
            params = {
                code: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                tone: rest[6] as Tone            
            };
        }
        
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const tone = params.tone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/contact-event-kinds';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Takes a value out of the activity types set. There is no foreign key behind `contact_events.kind` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} params.id - The activity type to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactEventKindsDelete(params: { id: string }): Promise<{}>;
    /**
     * Takes a value out of the activity types set. There is no foreign key behind `contact_events.kind` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} id - The activity type to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventKindsDelete(id: string): Promise<{}>;
    customersContactEventKindsDelete(
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

        const apiPath = '/v1/customers/contact-event-kinds/{id}'.replace('{id}', id);
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
     * One value of the activity types set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. What kind of entry lands on a customer timeline. 'system' is the app's own decision trail and a caller may not file one, whatever the set says. Reading one value is the rare path: `GET /customers/contact-event-kinds` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} params.id - The activity type to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEventKind>}
     */
    customersContactEventKindsGet(params: { id: string }): Promise<Models.ContactEventKind>;
    /**
     * One value of the activity types set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. What kind of entry lands on a customer timeline. 'system' is the app's own decision trail and a caller may not file one, whatever the set says. Reading one value is the rare path: `GET /customers/contact-event-kinds` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} id - The activity type to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEventKind>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventKindsGet(id: string): Promise<Models.ContactEventKind>;
    customersContactEventKindsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactEventKind> {
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

        const apiPath = '/v1/customers/contact-event-kinds/{id}'.replace('{id}', id);
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
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `call` to wording of their own changes what people READ and nothing about what `contact_events.kind` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} params.id - The activity type to edit.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEventKind>}
     */
    customersContactEventKindsUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.ContactEventKind>;
    /**
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `call` to wording of their own changes what people READ and nothing about what `contact_events.kind` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} id - The activity type to edit.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEventKind>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventKindsUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.ContactEventKind>;
    customersContactEventKindsUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.ContactEventKind> {
        let params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                title: rest[5] as string,
                tone: rest[6] as Tone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/contact-event-kinds/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Which document a contact point receives. Four is what an ERP delivers per debtor; a merchant whose own mails a credit note or a statement separately adds theirs. A fresh install is seeded with invoice, order_confirmation, shipping_notice, dunning, and the set seeds on first read too, so the page is never empty. The whole set comes back in one page in the tenant's own order — this route takes no limit/offset/order and no column filters, so `page` describes the full set and `filter` is always empty.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactPointKindsList(): Promise<{}> {

        const apiPath = '/v1/customers/contact-point-kinds';
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
     * Extends this tenant's recipient types set with a value of their own — the whole reason these four stopped being CHECK constraints. Which document a contact point receives. Four is what an ERP delivers per debtor; a merchant whose own mails a credit note or a statement separately adds theirs. The code is lowercase and becomes what `contact_points.kind` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} params.code - What `contact_points.kind` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPointKind>}
     */
    customersContactPointKindsCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.ContactPointKind>;
    /**
     * Extends this tenant's recipient types set with a value of their own — the whole reason these four stopped being CHECK constraints. Which document a contact point receives. Four is what an ERP delivers per debtor; a merchant whose own mails a credit note or a statement separately adds theirs. The code is lowercase and becomes what `contact_points.kind` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} code - What `contact_points.kind` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPointKind>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointKindsCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.ContactPointKind>;
    customersContactPointKindsCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.ContactPointKind> {
        let params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        } else {
            params = {
                code: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                tone: rest[6] as Tone            
            };
        }
        
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const tone = params.tone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/contact-point-kinds';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Takes a value out of the recipient types set. There is no foreign key behind `contact_points.kind` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} params.id - The recipient type to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactPointKindsDelete(params: { id: string }): Promise<{}>;
    /**
     * Takes a value out of the recipient types set. There is no foreign key behind `contact_points.kind` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} id - The recipient type to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointKindsDelete(id: string): Promise<{}>;
    customersContactPointKindsDelete(
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

        const apiPath = '/v1/customers/contact-point-kinds/{id}'.replace('{id}', id);
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
     * One value of the recipient types set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. Which document a contact point receives. Four is what an ERP delivers per debtor; a merchant whose own mails a credit note or a statement separately adds theirs. Reading one value is the rare path: `GET /customers/contact-point-kinds` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} params.id - The recipient type to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPointKind>}
     */
    customersContactPointKindsGet(params: { id: string }): Promise<Models.ContactPointKind>;
    /**
     * One value of the recipient types set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. Which document a contact point receives. Four is what an ERP delivers per debtor; a merchant whose own mails a credit note or a statement separately adds theirs. Reading one value is the rare path: `GET /customers/contact-point-kinds` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} id - The recipient type to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPointKind>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointKindsGet(id: string): Promise<Models.ContactPointKind>;
    customersContactPointKindsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactPointKind> {
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

        const apiPath = '/v1/customers/contact-point-kinds/{id}'.replace('{id}', id);
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
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `invoice` to wording of their own changes what people READ and nothing about what `contact_points.kind` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} params.id - The recipient type to edit.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPointKind>}
     */
    customersContactPointKindsUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.ContactPointKind>;
    /**
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `invoice` to wording of their own changes what people READ and nothing about what `contact_points.kind` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} id - The recipient type to edit.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPointKind>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointKindsUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.ContactPointKind>;
    customersContactPointKindsUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.ContactPointKind> {
        let params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                title: rest[5] as string,
                tone: rest[6] as Tone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/contact-point-kinds/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * What the app.installed event runs. It fills all 5 of the value sets a tenant needs before anything else works — the payment terms, the address types, the lifecycle stages, the activity types and the recipient types — in one call. Idempotent by code: a set that already has its rows is left completely alone, so a re-delivered event and a merchant's renames both survive. A tenant installed before these tables existed is seeded lazily instead, by the first read that finds one empty.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomersDefaultsResponse>}
     */
    customersDefaults(params: { data: object }): Promise<Models.CustomersDefaultsResponse>;
    /**
     * What the app.installed event runs. It fills all 5 of the value sets a tenant needs before anything else works — the payment terms, the address types, the lifecycle stages, the activity types and the recipient types — in one call. Idempotent by code: a set that already has its rows is left completely alone, so a re-delivered event and a merchant's renames both survive. A tenant installed before these tables existed is seeded lazily instead, by the first read that finds one empty.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.CustomersDefaultsResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersDefaults(data: object): Promise<Models.CustomersDefaultsResponse>;
    customersDefaults(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.CustomersDefaultsResponse> {
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

        const apiPath = '/v1/customers/defaults';
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
     * Where a company stands in the sales pipeline — a separate axis from status, and one whose steps are a sales team's own. A fresh install is seeded with lead, prospect, customer, churned, and the set seeds on first read too, so the page is never empty and `organizations.lifecycle_stage` always has a value it may carry. The whole set comes back in one page in the tenant's own order — this route takes no limit/offset/order and no column filters, so `page` describes the full set and `filter` is always empty.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersLifecycleStagesList(): Promise<{}> {

        const apiPath = '/v1/customers/lifecycle-stages';
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
     * Extends this tenant's lifecycle stages set with a value of their own — the whole reason these four stopped being CHECK constraints. Where a company stands in the sales pipeline — a separate axis from status, and one whose steps are a sales team's own. The code is lowercase and becomes what `organizations.lifecycle_stage` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} params.code - What `organizations.lifecycle_stage` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LifecycleStage>}
     */
    customersLifecycleStagesCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.LifecycleStage>;
    /**
     * Extends this tenant's lifecycle stages set with a value of their own — the whole reason these four stopped being CHECK constraints. Where a company stands in the sales pipeline — a separate axis from status, and one whose steps are a sales team's own. The code is lowercase and becomes what `organizations.lifecycle_stage` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} code - What `organizations.lifecycle_stage` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LifecycleStage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersLifecycleStagesCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.LifecycleStage>;
    customersLifecycleStagesCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.LifecycleStage> {
        let params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        } else {
            params = {
                code: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                tone: rest[6] as Tone            
            };
        }
        
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const tone = params.tone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/lifecycle-stages';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Takes a value out of the lifecycle stages set. There is no foreign key behind `organizations.lifecycle_stage` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} params.id - The lifecycle stage to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersLifecycleStagesDelete(params: { id: string }): Promise<{}>;
    /**
     * Takes a value out of the lifecycle stages set. There is no foreign key behind `organizations.lifecycle_stage` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} id - The lifecycle stage to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersLifecycleStagesDelete(id: string): Promise<{}>;
    customersLifecycleStagesDelete(
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

        const apiPath = '/v1/customers/lifecycle-stages/{id}'.replace('{id}', id);
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
     * One value of the lifecycle stages set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. Where a company stands in the sales pipeline — a separate axis from status, and one whose steps are a sales team's own. Reading one value is the rare path: `GET /customers/lifecycle-stages` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} params.id - The lifecycle stage to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LifecycleStage>}
     */
    customersLifecycleStagesGet(params: { id: string }): Promise<Models.LifecycleStage>;
    /**
     * One value of the lifecycle stages set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. Where a company stands in the sales pipeline — a separate axis from status, and one whose steps are a sales team's own. Reading one value is the rare path: `GET /customers/lifecycle-stages` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} id - The lifecycle stage to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LifecycleStage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersLifecycleStagesGet(id: string): Promise<Models.LifecycleStage>;
    customersLifecycleStagesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.LifecycleStage> {
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

        const apiPath = '/v1/customers/lifecycle-stages/{id}'.replace('{id}', id);
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
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `customer` to wording of their own changes what people READ and nothing about what `organizations.lifecycle_stage` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} params.id - The lifecycle stage to edit.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LifecycleStage>}
     */
    customersLifecycleStagesUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.LifecycleStage>;
    /**
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `customer` to wording of their own changes what people READ and nothing about what `organizations.lifecycle_stage` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} id - The lifecycle stage to edit.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LifecycleStage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersLifecycleStagesUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.LifecycleStage>;
    customersLifecycleStagesUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.LifecycleStage> {
        let params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                title: rest[5] as string,
                tone: rest[6] as Tone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/lifecycle-stages/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * When a company has to pay. A wholesaler who agrees net 45 with one customer used to need a release of this app to say so. A fresh install is seeded with prepayment, direct_debit, net_7, net_14, net_30, net_60, net_90, and the set seeds on first read too, so the page is never empty and `organizations.payment_terms` always has a value it may carry. The whole set comes back in one page in the tenant's own order — this route takes no limit/offset/order and no column filters, so `page` describes the full set and `filter` is always empty.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersPaymentTermsList(): Promise<{}> {

        const apiPath = '/v1/customers/payment-terms';
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
     * Extends this tenant's payment terms set with a value of their own — the whole reason these four stopped being CHECK constraints. When a company has to pay. A wholesaler who agrees net 45 with one customer used to need a release of this app to say so. The code is lowercase and becomes what `organizations.payment_terms` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} params.code - What `organizations.payment_terms` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentTerm>}
     */
    customersPaymentTermsCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.PaymentTerm>;
    /**
     * Extends this tenant's payment terms set with a value of their own — the whole reason these four stopped being CHECK constraints. When a company has to pay. A wholesaler who agrees net 45 with one customer used to need a release of this app to say so. The code is lowercase and becomes what `organizations.payment_terms` stores; it cannot be changed afterwards, because every record carrying it would be orphaned.
     *
     * @param {string} code - What `organizations.payment_terms` will store. Lowercase, starting with a letter; immutable afterwards.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted in the same call.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending. Default 0.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentTerm>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersPaymentTermsCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.PaymentTerm>;
    customersPaymentTermsCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.PaymentTerm> {
        let params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        } else {
            params = {
                code: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                tone: rest[6] as Tone            
            };
        }
        
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const tone = params.tone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/payment-terms';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Takes a value out of the payment terms set. There is no foreign key behind `organizations.payment_terms` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} params.id - The payment term to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersPaymentTermsDelete(params: { id: string }): Promise<{}>;
    /**
     * Takes a value out of the payment terms set. There is no foreign key behind `organizations.payment_terms` — one added to a table that starts empty fails the migration of every existing tenant — so this route IS the integrity: it refuses while any record still carries the code, and it refuses to empty the set. Retiring a value that is in use is therefore a two-step job: move the records onto another value first, then remove it.
     *
     * @param {string} id - The payment term to remove.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersPaymentTermsDelete(id: string): Promise<{}>;
    customersPaymentTermsDelete(
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

        const apiPath = '/v1/customers/payment-terms/{id}'.replace('{id}', id);
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
     * One value of the payment terms set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. When a company has to pay. A wholesaler who agrees net 45 with one customer used to need a release of this app to say so. Reading one value is the rare path: `GET /customers/payment-terms` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} params.id - The payment term to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentTerm>}
     */
    customersPaymentTermsGet(params: { id: string }): Promise<Models.PaymentTerm>;
    /**
     * One value of the payment terms set, by its id — its code, its fallback title, the per-language `labels` an operator reads and the badge `tone` a client renders it with. When a company has to pay. A wholesaler who agrees net 45 with one customer used to need a release of this app to say so. Reading one value is the rare path: `GET /customers/payment-terms` answers the whole set in a single page, which is what a select needs.
     *
     * @param {string} id - The payment term to read. Note that records store the CODE, not this id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentTerm>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersPaymentTermsGet(id: string): Promise<Models.PaymentTerm>;
    customersPaymentTermsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentTerm> {
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

        const apiPath = '/v1/customers/payment-terms/{id}'.replace('{id}', id);
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
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `net_30` to wording of their own changes what people READ and nothing about what `organizations.payment_terms` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} params.id - The payment term to edit.
     * @param {string} params.description - One line of help for whoever picks this value.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted.
     * @param {object} params.labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} params.position - Where it sits in the set, ascending.
     * @param {string} params.title - The fallback name shown when no locale matches.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentTerm>}
     */
    customersPaymentTermsUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.PaymentTerm>;
    /**
     * Everything about a value except the value itself: its titles, its help text, its badge tone, its `position` in the select, and which one of the set is the default. The `code` is immutable, so no record carrying it is ever orphaned by an edit here — a merchant who retitles `net_30` to wording of their own changes what people READ and nothing about what `organizations.payment_terms` stores. Seeded values (`is_system`) are renameable like any other, and re-seeding leaves the rename alone.
     *
     * @param {string} id - The payment term to edit.
     * @param {string} description - One line of help for whoever picks this value.
     * @param {object} descriptions - Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted.
     * @param {object} labels - Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
     * @param {number} position - Where it sits in the set, ascending.
     * @param {string} title - The fallback name shown when no locale matches.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentTerm>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersPaymentTermsUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.PaymentTerm>;
    customersPaymentTermsUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.PaymentTerm> {
        let params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                title: rest[5] as string,
                tone: rest[6] as Tone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/payment-terms/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * Discovery for the vocabulary routes: every enum this app publishes, each as a name, a title and a description. The VALUES are deliberately left out — this is the call that says which vocabularies exist, and the detail route is the one that answers what is in them. Names: address-types, contact-event-kinds, contact-point-kinds, contact-statuses, credit-limit-modes, lifecycle-stages, locales, order-approval-modes, organization-statuses, payment-terms, registration-statuses, roles, rule-matches, segment-sources, shipping-advice. Fetch one with GET /customers/vocabularies/{name}; a client holding the qualified pair 'customers.<name>' builds that URL from the pair alone.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.VocabularyIndex>}
     */
    customersVocabulariesList(): Promise<Models.VocabularyIndex> {

        const apiPath = '/v1/customers/vocabularies';
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
     * One vocabulary in full: every permitted value, each with its title, its description and the badge tone a client renders it with — enough to build a select without a second call. Two kinds of set, and 'source' says which one answered. 'schema' — the values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift; a value added to the constraint appears here even before anyone labels it, titled from its own key. 'table' — the values are the TENANT's own rows (payment terms, address types, lifecycle stages, activity types, roles), so they carry labels/descriptions per locale, is_system and is_default, and a merchant may add to them without a release of this app. 'tenant'/'defaults' are the two answers for a set the merchant configures but may not extend. Either way 'closed' is true: the set is exhaustive at this moment, so a value outside it is stale data rather than a missing label. Values come back in the order a select should offer them — lifecycle order for a status, the merchant's own position for a table. Names: address-types, contact-event-kinds, contact-point-kinds, contact-statuses, credit-limit-modes, lifecycle-stages, locales, order-approval-modes, organization-statuses, payment-terms, registration-statuses, roles, rule-matches, segment-sources, shipping-advice.
     *
     * @param {CustomersVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vocabulary>}
     */
    customersVocabulariesGet(params: { name: CustomersVocabulariesGetName }): Promise<Models.Vocabulary>;
    /**
     * One vocabulary in full: every permitted value, each with its title, its description and the badge tone a client renders it with — enough to build a select without a second call. Two kinds of set, and 'source' says which one answered. 'schema' — the values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift; a value added to the constraint appears here even before anyone labels it, titled from its own key. 'table' — the values are the TENANT's own rows (payment terms, address types, lifecycle stages, activity types, roles), so they carry labels/descriptions per locale, is_system and is_default, and a merchant may add to them without a release of this app. 'tenant'/'defaults' are the two answers for a set the merchant configures but may not extend. Either way 'closed' is true: the set is exhaustive at this moment, so a value outside it is stale data rather than a missing label. Values come back in the order a select should offer them — lifecycle order for a status, the merchant's own position for a table. Names: address-types, contact-event-kinds, contact-point-kinds, contact-statuses, credit-limit-modes, lifecycle-stages, locales, order-approval-modes, organization-statuses, payment-terms, registration-statuses, roles, rule-matches, segment-sources, shipping-advice.
     *
     * @param {CustomersVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersVocabulariesGet(name: CustomersVocabulariesGetName): Promise<Models.Vocabulary>;
    customersVocabulariesGet(
        paramsOrFirst: { name: CustomersVocabulariesGetName } | CustomersVocabulariesGetName    
    ): Promise<Models.Vocabulary> {
        let params: { name: CustomersVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: CustomersVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as CustomersVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/customers/vocabularies/{name}'.replace('{name}', name);
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
