import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Kind } from '../enums/kind';
import { LegalBasis } from '../enums/legal-basis';
import { GoogleSignals } from '../enums/google-signals';
import { LegalBasisOverride } from '../enums/legal-basis-override';
import { ConsentManagerVocabulariesGetName } from '../enums/consent-manager-vocabularies-get-name';

export class ConsentManagerRegistry {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The vendor catalogue this version of the app ships — the vendors met in B2B shops, each with company, purposes, hosts and cookies in German and English — and, per entry, whether this tenant adopted it and whether the copy is older. `?category=` narrows it to one group (analytics, advertising, chat, external_media, …).
     *
     * @param {string} params.category - Only entries of this category: platform, tag_manager, analytics, advertising, marketing_automation, visitor_identification, chat, ab_testing, personalisation, search, external_media, fonts, reviews, payment or security.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Catalog>}
     */
    consentManagerCatalogList(params?: { category?: string }): Promise<Models.Catalog>;
    /**
     * The vendor catalogue this version of the app ships — the vendors met in B2B shops, each with company, purposes, hosts and cookies in German and English — and, per entry, whether this tenant adopted it and whether the copy is older. `?category=` narrows it to one group (analytics, advertising, chat, external_media, …).
     *
     * @param {string} category - Only entries of this category: platform, tag_manager, analytics, advertising, marketing_automation, visitor_identification, chat, ab_testing, personalisation, search, external_media, fonts, reviews, payment or security.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Catalog>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCatalogList(category?: string): Promise<Models.Catalog>;
    consentManagerCatalogList(
        paramsOrFirst?: { category?: string } | string    
    ): Promise<Models.Catalog> {
        let params: { category?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { category?: string };
        } else {
            params = {
                category: paramsOrFirst as string            
            };
        }
        
        const category = params.category;


        const apiPath = '/v1/consent-manager/catalog';
        const apiPayload: Payload = {};
        if (typeof category !== 'undefined') {
            apiPayload['category'] = category;
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
     * Creates a vendor from a catalogue entry — its fields, its cookies and its purpose links — and records the catalogue key and version it came from. The copy is the tenant's: nothing re-reads the catalogue. Adopting an entry already adopted is refused unless `refresh: true` is sent, which takes the catalogue's current fields and replaces the cookies. A `legal_basis_hint` that differs from the purposes' basis becomes the vendor's `legal_basis_override`.
     *
     * @param {string} params.key - The catalogue key.
     * @param {string[]} params.purposes - Purpose codes to file the vendor under instead of the catalogue's.
     * @param {boolean} params.refresh - Take the current catalogue entry for a vendor already adopted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     */
    consentManagerCatalogAdopt(params: { key: string, purposes?: string[], refresh?: boolean }): Promise<Models.Vendor>;
    /**
     * Creates a vendor from a catalogue entry — its fields, its cookies and its purpose links — and records the catalogue key and version it came from. The copy is the tenant's: nothing re-reads the catalogue. Adopting an entry already adopted is refused unless `refresh: true` is sent, which takes the catalogue's current fields and replaces the cookies. A `legal_basis_hint` that differs from the purposes' basis becomes the vendor's `legal_basis_override`.
     *
     * @param {string} key - The catalogue key.
     * @param {string[]} purposes - Purpose codes to file the vendor under instead of the catalogue's.
     * @param {boolean} refresh - Take the current catalogue entry for a vendor already adopted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCatalogAdopt(key: string, purposes?: string[], refresh?: boolean): Promise<Models.Vendor>;
    consentManagerCatalogAdopt(
        paramsOrFirst: { key: string, purposes?: string[], refresh?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.Vendor> {
        let params: { key: string, purposes?: string[], refresh?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string, purposes?: string[], refresh?: boolean };
        } else {
            params = {
                key: paramsOrFirst as string,
                purposes: rest[0] as string[],
                refresh: rest[1] as boolean            
            };
        }
        
        const key = params.key;
        const purposes = params.purposes;
        const refresh = params.refresh;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/consent-manager/catalog/adopt';
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof purposes !== 'undefined') {
            apiPayload['purposes'] = purposes;
        }
        if (typeof refresh !== 'undefined') {
            apiPayload['refresh'] = refresh;
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
     * Cookies and storage entries, usually filtered with `?vendor_id=`.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} params.vendorId - Filter to rows whose `vendor_id` is exactly this value. The vendor this row belongs to.
     * @param {string} params.name - Filter to rows whose `name` is exactly this value. The cookie or storage key as the browser shows it.
     * @param {Kind} params.kind - Filter to rows whose `kind` is exactly this value. Where on the device it is stored: cookie, local_storage, session_storage, indexeddb or pixel.
     * @param {string} params.host - Filter to rows whose `host` is exactly this value. Who sets it: 'first-party' for the shop's own domain, otherwise the third-party host.
     * @param {number} params.position - Filter to rows whose `position` is exactly this value. Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} params.createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} params.updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set — every route that changes the row stamps it.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} params.offset - Row offset (default 0).
     * @param {string} params.order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerCookiesList(params?: { id?: string, vendorId?: string, name?: string, kind?: Kind, host?: string, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * Cookies and storage entries, usually filtered with `?vendor_id=`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} vendorId - Filter to rows whose `vendor_id` is exactly this value. The vendor this row belongs to.
     * @param {string} name - Filter to rows whose `name` is exactly this value. The cookie or storage key as the browser shows it.
     * @param {Kind} kind - Filter to rows whose `kind` is exactly this value. Where on the device it is stored: cookie, local_storage, session_storage, indexeddb or pixel.
     * @param {string} host - Filter to rows whose `host` is exactly this value. Who sets it: 'first-party' for the shop's own domain, otherwise the third-party host.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set — every route that changes the row stamps it.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} offset - Row offset (default 0).
     * @param {string} order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCookiesList(id?: string, vendorId?: string, name?: string, kind?: Kind, host?: string, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    consentManagerCookiesList(
        paramsOrFirst?: { id?: string, vendorId?: string, name?: string, kind?: Kind, host?: string, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (Kind)?, (string)?, (number)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, vendorId?: string, name?: string, kind?: Kind, host?: string, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, vendorId?: string, name?: string, kind?: Kind, host?: string, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                vendorId: rest[0] as string,
                name: rest[1] as string,
                kind: rest[2] as Kind,
                host: rest[3] as string,
                position: rest[4] as number,
                createdAt: rest[5] as string,
                updatedAt: rest[6] as string,
                limit: rest[7] as number,
                offset: rest[8] as number,
                order: rest[9] as string            
            };
        }
        
        const id = params.id;
        const vendorId = params.vendorId;
        const name = params.name;
        const kind = params.kind;
        const host = params.host;
        const position = params.position;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/consent-manager/cookies';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof vendorId !== 'undefined') {
            apiPayload['vendor_id'] = vendorId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * Declare one cookie or storage entry of a vendor this tenant keeps.
     *
     * @param {string} params.name - The cookie or storage key as the browser shows it.
     * @param {string} params.vendorId - The vendor that sets this cookie. It has to be a vendor this tenant keeps.
     * @param {object} params.description - What the cookie is for, as the banner shows it.
     * @param {object} params.duration - How long it lives, as the banner shows it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} params.host - Who sets it: 'first-party' for the shop's own domain, otherwise the third-party host.
     * @param {Kind} params.kind - Where on the device it is stored: cookie, local_storage, session_storage, indexeddb or pixel.
     * @param {number} params.position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cookie>}
     */
    consentManagerCookiesCreate(params: { name: string, vendorId: string, description?: object, duration?: object, host?: string, kind?: Kind, position?: number }): Promise<Models.Cookie>;
    /**
     * Declare one cookie or storage entry of a vendor this tenant keeps.
     *
     * @param {string} name - The cookie or storage key as the browser shows it.
     * @param {string} vendorId - The vendor that sets this cookie. It has to be a vendor this tenant keeps.
     * @param {object} description - What the cookie is for, as the banner shows it.
     * @param {object} duration - How long it lives, as the banner shows it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} host - Who sets it: 'first-party' for the shop's own domain, otherwise the third-party host.
     * @param {Kind} kind - Where on the device it is stored: cookie, local_storage, session_storage, indexeddb or pixel.
     * @param {number} position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cookie>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCookiesCreate(name: string, vendorId: string, description?: object, duration?: object, host?: string, kind?: Kind, position?: number): Promise<Models.Cookie>;
    consentManagerCookiesCreate(
        paramsOrFirst: { name: string, vendorId: string, description?: object, duration?: object, host?: string, kind?: Kind, position?: number } | string,
        ...rest: [(string)?, (object)?, (object)?, (string)?, (Kind)?, (number)?]    
    ): Promise<Models.Cookie> {
        let params: { name: string, vendorId: string, description?: object, duration?: object, host?: string, kind?: Kind, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, vendorId: string, description?: object, duration?: object, host?: string, kind?: Kind, position?: number };
        } else {
            params = {
                name: paramsOrFirst as string,
                vendorId: rest[0] as string,
                description: rest[1] as object,
                duration: rest[2] as object,
                host: rest[3] as string,
                kind: rest[4] as Kind,
                position: rest[5] as number            
            };
        }
        
        const name = params.name;
        const vendorId = params.vendorId;
        const description = params.description;
        const duration = params.duration;
        const host = params.host;
        const kind = params.kind;
        const position = params.position;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof vendorId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "vendorId"');
        }

        const apiPath = '/v1/consent-manager/cookies';
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof duration !== 'undefined') {
            apiPayload['duration'] = duration;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof vendorId !== 'undefined') {
            apiPayload['vendor_id'] = vendorId;
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
     * Removes one cookie.
     *
     * @param {string} params.id - The cookie.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerCookiesDelete(params: { id: string }): Promise<{}>;
    /**
     * Removes one cookie.
     *
     * @param {string} id - The cookie.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCookiesDelete(id: string): Promise<{}>;
    consentManagerCookiesDelete(
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

        const apiPath = '/v1/consent-manager/cookies/{id}'.replace('{id}', id);
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
     * One cookie by id.
     *
     * @param {string} params.id - The cookie.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cookie>}
     */
    consentManagerCookiesGet(params: { id: string }): Promise<Models.Cookie>;
    /**
     * One cookie by id.
     *
     * @param {string} id - The cookie.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cookie>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCookiesGet(id: string): Promise<Models.Cookie>;
    consentManagerCookiesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cookie> {
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

        const apiPath = '/v1/consent-manager/cookies/{id}'.replace('{id}', id);
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
     * Partial update of one cookie.
     *
     * @param {string} params.id - The cookie.
     * @param {object} params.description - What the cookie is for, as the banner shows it.
     * @param {object} params.duration - How long it lives, as the banner shows it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} params.host - Who sets it: 'first-party' for the shop's own domain, otherwise the third-party host.
     * @param {Kind} params.kind - Where on the device it is stored: cookie, local_storage, session_storage, indexeddb or pixel.
     * @param {string} params.name - The cookie or storage key as the browser shows it.
     * @param {number} params.position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} params.vendorId - The vendor that sets this cookie. It has to be a vendor this tenant keeps.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cookie>}
     */
    consentManagerCookiesUpdate(params: { id: string, description?: object, duration?: object, host?: string, kind?: Kind, name?: string, position?: number, vendorId?: string }): Promise<Models.Cookie>;
    /**
     * Partial update of one cookie.
     *
     * @param {string} id - The cookie.
     * @param {object} description - What the cookie is for, as the banner shows it.
     * @param {object} duration - How long it lives, as the banner shows it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} host - Who sets it: 'first-party' for the shop's own domain, otherwise the third-party host.
     * @param {Kind} kind - Where on the device it is stored: cookie, local_storage, session_storage, indexeddb or pixel.
     * @param {string} name - The cookie or storage key as the browser shows it.
     * @param {number} position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} vendorId - The vendor that sets this cookie. It has to be a vendor this tenant keeps.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cookie>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerCookiesUpdate(id: string, description?: object, duration?: object, host?: string, kind?: Kind, name?: string, position?: number, vendorId?: string): Promise<Models.Cookie>;
    consentManagerCookiesUpdate(
        paramsOrFirst: { id: string, description?: object, duration?: object, host?: string, kind?: Kind, name?: string, position?: number, vendorId?: string } | string,
        ...rest: [(object)?, (object)?, (string)?, (Kind)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.Cookie> {
        let params: { id: string, description?: object, duration?: object, host?: string, kind?: Kind, name?: string, position?: number, vendorId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: object, duration?: object, host?: string, kind?: Kind, name?: string, position?: number, vendorId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as object,
                duration: rest[1] as object,
                host: rest[2] as string,
                kind: rest[3] as Kind,
                name: rest[4] as string,
                position: rest[5] as number,
                vendorId: rest[6] as string            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const duration = params.duration;
        const host = params.host;
        const kind = params.kind;
        const name = params.name;
        const position = params.position;
        const vendorId = params.vendorId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/consent-manager/cookies/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof duration !== 'undefined') {
            apiPayload['duration'] = duration;
        }
        if (typeof host !== 'undefined') {
            apiPayload['host'] = host;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof vendorId !== 'undefined') {
            apiPayload['vendor_id'] = vendorId;
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
     * Creates the five standard purposes (necessary, statistics, marketing, comfort, external_media), the shop's banner draft with a German and an English text, and exactly one vendor — `revenexx`, the shop's own necessary cookies — whatever of that is missing, and nothing else. The catalogue is a library: every other vendor, necessary ones included, appears only once the tenant adopts it. Idempotent by code: a purpose or draft the merchant changed is left exactly as it is. The install announcement runs the same seeding, but it is not reliably delivered, so a live check calls this first.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultsResponse>}
     */
    consentManagerDefaultsRun(params: { data: object }): Promise<Models.DefaultsResponse>;
    /**
     * Creates the five standard purposes (necessary, statistics, marketing, comfort, external_media), the shop's banner draft with a German and an English text, and exactly one vendor — `revenexx`, the shop's own necessary cookies — whatever of that is missing, and nothing else. The catalogue is a library: every other vendor, necessary ones included, appears only once the tenant adopts it. Idempotent by code: a purpose or draft the merchant changed is left exactly as it is. The install announcement runs the same seeding, but it is not reliably delivered, so a live check calls this first.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.DefaultsResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerDefaultsRun(data: object): Promise<Models.DefaultsResponse>;
    consentManagerDefaultsRun(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.DefaultsResponse> {
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

        const apiPath = '/v1/consent-manager/defaults';
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
     * Every purpose of this tenant (and market), with the legal basis that decides whether its tools load before a decision.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} params.code - Filter to rows whose `code` is exactly this value. The purpose's fixed identity — `necessary`, `statistics`, `marketing`, `comfort`, `external_media` or one the tenant adds. Vendors, the catalogue, the Tag Manager, the visitor's cookie and every record name it, so it never changes once created.
     * @param {LegalBasis} params.legalBasis - Filter to rows whose `legal_basis` is exactly this value. Why this purpose may process data at all, and therefore whether its tools load before a decision: `consent` waits for the visitor, `legitimate_interest` runs until the visitor objects, `necessary` always runs. A vendor may override it with its own `legal_basis_override`.
     * @param {number} params.position - Filter to rows whose `position` is exactly this value. Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {boolean} params.isActive - Filter to rows whose `is_active` is exactly this value. Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {boolean} params.isSystem - Filter to rows whose `is_system` is exactly this value. True for the five purposes this app seeds. It records who put the row there and licenses nothing: a seeded purpose may be reworded like any other.
     * @param {string} params.createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} params.updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set — every route that changes the row stamps it.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} params.offset - Row offset (default 0).
     * @param {string} params.order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerPurposesList(params?: { id?: string, code?: string, legalBasis?: LegalBasis, position?: number, isActive?: boolean, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * Every purpose of this tenant (and market), with the legal basis that decides whether its tools load before a decision.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} code - Filter to rows whose `code` is exactly this value. The purpose's fixed identity — `necessary`, `statistics`, `marketing`, `comfort`, `external_media` or one the tenant adds. Vendors, the catalogue, the Tag Manager, the visitor's cookie and every record name it, so it never changes once created.
     * @param {LegalBasis} legalBasis - Filter to rows whose `legal_basis` is exactly this value. Why this purpose may process data at all, and therefore whether its tools load before a decision: `consent` waits for the visitor, `legitimate_interest` runs until the visitor objects, `necessary` always runs. A vendor may override it with its own `legal_basis_override`.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {boolean} isActive - Filter to rows whose `is_active` is exactly this value. Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {boolean} isSystem - Filter to rows whose `is_system` is exactly this value. True for the five purposes this app seeds. It records who put the row there and licenses nothing: a seeded purpose may be reworded like any other.
     * @param {string} createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set — every route that changes the row stamps it.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} offset - Row offset (default 0).
     * @param {string} order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPurposesList(id?: string, code?: string, legalBasis?: LegalBasis, position?: number, isActive?: boolean, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    consentManagerPurposesList(
        paramsOrFirst?: { id?: string, code?: string, legalBasis?: LegalBasis, position?: number, isActive?: boolean, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (LegalBasis)?, (number)?, (boolean)?, (boolean)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, code?: string, legalBasis?: LegalBasis, position?: number, isActive?: boolean, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, legalBasis?: LegalBasis, position?: number, isActive?: boolean, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                legalBasis: rest[1] as LegalBasis,
                position: rest[2] as number,
                isActive: rest[3] as boolean,
                isSystem: rest[4] as boolean,
                createdAt: rest[5] as string,
                updatedAt: rest[6] as string,
                limit: rest[7] as number,
                offset: rest[8] as number,
                order: rest[9] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const legalBasis = params.legalBasis;
        const position = params.position;
        const isActive = params.isActive;
        const isSystem = params.isSystem;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/consent-manager/purposes';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof legalBasis !== 'undefined') {
            apiPayload['legal_basis'] = legalBasis;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof isSystem !== 'undefined') {
            apiPayload['is_system'] = isSystem;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * Add a purpose beyond the five seeded ones. `code`, `name` and `legal_basis` are owed; the code is fixed once created.
     *
     * @param {string} params.code - The purpose's fixed identity — `necessary`, `statistics`, `marketing`, `comfort`, `external_media` or one the tenant adds. Vendors, the catalogue, the Tag Manager, the visitor's cookie and every record name it, so it never changes once created.
     * @param {LegalBasis} params.legalBasis - Why this purpose may process data at all, and therefore whether its tools load before a decision: `consent` waits for the visitor, `legitimate_interest` runs until the visitor objects, `necessary` always runs. A vendor may override it with its own `legal_basis_override`.
     * @param {object} params.name - What a visitor reads for this purpose. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {object} params.description - The sentence under the purpose in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {GoogleSignals[]} params.googleSignals - The Google Consent Mode v2 signals this purpose releases when granted — e.g. statistics releases `analytics_storage`. A list drawn from the google-signals vocabulary.
     * @param {boolean} params.isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {number} params.position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Purpose>}
     */
    consentManagerPurposesCreate(params: { code: string, legalBasis: LegalBasis, name?: object, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, position?: number }): Promise<Models.Purpose>;
    /**
     * Add a purpose beyond the five seeded ones. `code`, `name` and `legal_basis` are owed; the code is fixed once created.
     *
     * @param {string} code - The purpose's fixed identity — `necessary`, `statistics`, `marketing`, `comfort`, `external_media` or one the tenant adds. Vendors, the catalogue, the Tag Manager, the visitor's cookie and every record name it, so it never changes once created.
     * @param {LegalBasis} legalBasis - Why this purpose may process data at all, and therefore whether its tools load before a decision: `consent` waits for the visitor, `legitimate_interest` runs until the visitor objects, `necessary` always runs. A vendor may override it with its own `legal_basis_override`.
     * @param {object} name - What a visitor reads for this purpose. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {object} description - The sentence under the purpose in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {GoogleSignals[]} googleSignals - The Google Consent Mode v2 signals this purpose releases when granted — e.g. statistics releases `analytics_storage`. A list drawn from the google-signals vocabulary.
     * @param {boolean} isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {number} position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Purpose>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPurposesCreate(code: string, legalBasis: LegalBasis, name?: object, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, position?: number): Promise<Models.Purpose>;
    consentManagerPurposesCreate(
        paramsOrFirst: { code: string, legalBasis: LegalBasis, name?: object, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, position?: number } | string,
        ...rest: [(LegalBasis)?, (object)?, (object)?, (GoogleSignals[])?, (boolean)?, (number)?]    
    ): Promise<Models.Purpose> {
        let params: { code: string, legalBasis: LegalBasis, name?: object, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, legalBasis: LegalBasis, name?: object, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, position?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                legalBasis: rest[0] as LegalBasis,
                name: rest[1] as object,
                description: rest[2] as object,
                googleSignals: rest[3] as GoogleSignals[],
                isActive: rest[4] as boolean,
                position: rest[5] as number            
            };
        }
        
        const code = params.code;
        const legalBasis = params.legalBasis;
        const name = params.name;
        const description = params.description;
        const googleSignals = params.googleSignals;
        const isActive = params.isActive;
        const position = params.position;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof legalBasis === 'undefined') {
            throw new RevenexxException('Missing required parameter: "legalBasis"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/consent-manager/purposes';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof googleSignals !== 'undefined') {
            apiPayload['google_signals'] = googleSignals;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof legalBasis !== 'undefined') {
            apiPayload['legal_basis'] = legalBasis;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Removes a purpose. Refused while any vendor serves it — switch it inactive instead, which leaves it out of the next version.
     *
     * @param {string} params.id - The purpose.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerPurposesDelete(params: { id: string }): Promise<{}>;
    /**
     * Removes a purpose. Refused while any vendor serves it — switch it inactive instead, which leaves it out of the next version.
     *
     * @param {string} id - The purpose.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPurposesDelete(id: string): Promise<{}>;
    consentManagerPurposesDelete(
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

        const apiPath = '/v1/consent-manager/purposes/{id}'.replace('{id}', id);
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
     * One purpose by id.
     *
     * @param {string} params.id - The purpose.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Purpose>}
     */
    consentManagerPurposesGet(params: { id: string }): Promise<Models.Purpose>;
    /**
     * One purpose by id.
     *
     * @param {string} id - The purpose.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Purpose>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPurposesGet(id: string): Promise<Models.Purpose>;
    consentManagerPurposesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Purpose> {
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

        const apiPath = '/v1/consent-manager/purposes/{id}'.replace('{id}', id);
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
     * Partial update. The code may be sent only unchanged — vendors, records and the catalogue name it. Changing the legal basis affects versions published afterwards; every record keeps the basis it was made under.
     *
     * @param {string} params.id - The purpose.
     * @param {string} params.code - The purpose's fixed identity — `necessary`, `statistics`, `marketing`, `comfort`, `external_media` or one the tenant adds. Vendors, the catalogue, the Tag Manager, the visitor's cookie and every record name it, so it never changes once created.
     * @param {object} params.description - The sentence under the purpose in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {GoogleSignals[]} params.googleSignals - The Google Consent Mode v2 signals this purpose releases when granted — e.g. statistics releases `analytics_storage`. A list drawn from the google-signals vocabulary.
     * @param {boolean} params.isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {LegalBasis} params.legalBasis - Why this purpose may process data at all, and therefore whether its tools load before a decision: `consent` waits for the visitor, `legitimate_interest` runs until the visitor objects, `necessary` always runs. A vendor may override it with its own `legal_basis_override`.
     * @param {object} params.name - What a visitor reads for this purpose. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {number} params.position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Purpose>}
     */
    consentManagerPurposesUpdate(params: { id: string, code?: string, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, legalBasis?: LegalBasis, name?: object, position?: number }): Promise<Models.Purpose>;
    /**
     * Partial update. The code may be sent only unchanged — vendors, records and the catalogue name it. Changing the legal basis affects versions published afterwards; every record keeps the basis it was made under.
     *
     * @param {string} id - The purpose.
     * @param {string} code - The purpose's fixed identity — `necessary`, `statistics`, `marketing`, `comfort`, `external_media` or one the tenant adds. Vendors, the catalogue, the Tag Manager, the visitor's cookie and every record name it, so it never changes once created.
     * @param {object} description - The sentence under the purpose in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {GoogleSignals[]} googleSignals - The Google Consent Mode v2 signals this purpose releases when granted — e.g. statistics releases `analytics_storage`. A list drawn from the google-signals vocabulary.
     * @param {boolean} isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {LegalBasis} legalBasis - Why this purpose may process data at all, and therefore whether its tools load before a decision: `consent` waits for the visitor, `legitimate_interest` runs until the visitor objects, `necessary` always runs. A vendor may override it with its own `legal_basis_override`.
     * @param {object} name - What a visitor reads for this purpose. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {number} position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Purpose>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPurposesUpdate(id: string, code?: string, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, legalBasis?: LegalBasis, name?: object, position?: number): Promise<Models.Purpose>;
    consentManagerPurposesUpdate(
        paramsOrFirst: { id: string, code?: string, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, legalBasis?: LegalBasis, name?: object, position?: number } | string,
        ...rest: [(string)?, (object)?, (GoogleSignals[])?, (boolean)?, (LegalBasis)?, (object)?, (number)?]    
    ): Promise<Models.Purpose> {
        let params: { id: string, code?: string, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, legalBasis?: LegalBasis, name?: object, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, description?: object, googleSignals?: GoogleSignals[], isActive?: boolean, legalBasis?: LegalBasis, name?: object, position?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                description: rest[1] as object,
                googleSignals: rest[2] as GoogleSignals[],
                isActive: rest[3] as boolean,
                legalBasis: rest[4] as LegalBasis,
                name: rest[5] as object,
                position: rest[6] as number            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const description = params.description;
        const googleSignals = params.googleSignals;
        const isActive = params.isActive;
        const legalBasis = params.legalBasis;
        const name = params.name;
        const position = params.position;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/consent-manager/purposes/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof googleSignals !== 'undefined') {
            apiPayload['google_signals'] = googleSignals;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof legalBasis !== 'undefined') {
            apiPayload['legal_basis'] = legalBasis;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Every vendor of this tenant (and market). An adopted vendor whose catalogue entry is newer carries `catalog_update`; its fields are untouched until the merchant refreshes it.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} params.code - Filter to rows whose `code` is exactly this value. The vendor's fixed identity, as the Tag Manager, the visitor's cookie and every record name it. Lowercase letters, digits and '-'. For an adopted vendor it is the catalogue key.
     * @param {string} params.name - Filter to rows whose `name` is exactly this value. The tool as a visitor knows it.
     * @param {string} params.category - Filter to rows whose `category` is exactly this value. What kind of tool this is — analytics, advertising, chat, video — as the catalogue groups it. Presentation only.
     * @param {string} params.company - Filter to rows whose `company` is exactly this value. The legal entity behind the tool, as the banner names it.
     * @param {string} params.address - Filter to rows whose `address` is exactly this value. The company's postal address, as the banner names it.
     * @param {string} params.country - Filter to rows whose `country` is exactly this value. The company's country, ISO 3166-1 alpha-2.
     * @param {string} params.privacyPolicyUrl - Filter to rows whose `privacy_policy_url` is exactly this value. The vendor's own privacy policy, linked from the banner.
     * @param {string} params.dpaUrl - Filter to rows whose `dpa_url` is exactly this value. Where the vendor's data processing terms are published, if anywhere.
     * @param {boolean} params.thirdCountryTransfer - Filter to rows whose `third_country_transfer` is exactly this value. Whether data reaches a country outside the EU/EEA. The banner says so, because a visitor is owed it before agreeing.
     * @param {string} params.transferBasis - Filter to rows whose `transfer_basis` is exactly this value. What a third-country transfer rests on, in the words the banner shows.
     * @param {string} params.registryKey - Filter to rows whose `registry_key` is exactly this value. The `@nuxt/scripts` registry entry the storefront loads this tool through, where one exists.
     * @param {string} params.logo - Filter to rows whose `logo` is exactly this value. The vendor's logo for the admin UI, as a base64 data URI of an SVG, PNG, JPEG or WebP image, at most 20480 characters. Adoption copies the catalogue's logo. Null shows the vendor's initials. It is never part of the delivered policy.
     * @param {LegalBasisOverride} params.legalBasisOverride - Filter to rows whose `legal_basis_override` is exactly this value. This vendor's own legal basis where it differs from its purpose's — a cookieless statistics tool on `legitimate_interest` while the rest of statistics waits for `consent`. Null means the purpose's basis applies. The effective basis is this ?? the purpose's.
     * @param {string} params.catalogKey - Filter to rows whose `catalog_key` is exactly this value. The catalogue entry this vendor was adopted from; null for a vendor the tenant described themselves. It is provenance — nothing re-reads the catalogue through it.
     * @param {string} params.catalogVersion - Filter to rows whose `catalog_version` is exactly this value. The catalogue version the adopted copy was taken from. A read flags the vendor when the shipped catalogue is newer, and nothing changes until the merchant refreshes it.
     * @param {number} params.position - Filter to rows whose `position` is exactly this value. Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {boolean} params.isActive - Filter to rows whose `is_active` is exactly this value. Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {string} params.createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} params.updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set — every route that changes the row stamps it.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} params.offset - Row offset (default 0).
     * @param {string} params.order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerVendorsList(params?: { id?: string, code?: string, name?: string, category?: string, company?: string, address?: string, country?: string, privacyPolicyUrl?: string, dpaUrl?: string, thirdCountryTransfer?: boolean, transferBasis?: string, registryKey?: string, logo?: string, legalBasisOverride?: LegalBasisOverride, catalogKey?: string, catalogVersion?: string, position?: number, isActive?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * Every vendor of this tenant (and market). An adopted vendor whose catalogue entry is newer carries `catalog_update`; its fields are untouched until the merchant refreshes it.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} code - Filter to rows whose `code` is exactly this value. The vendor's fixed identity, as the Tag Manager, the visitor's cookie and every record name it. Lowercase letters, digits and '-'. For an adopted vendor it is the catalogue key.
     * @param {string} name - Filter to rows whose `name` is exactly this value. The tool as a visitor knows it.
     * @param {string} category - Filter to rows whose `category` is exactly this value. What kind of tool this is — analytics, advertising, chat, video — as the catalogue groups it. Presentation only.
     * @param {string} company - Filter to rows whose `company` is exactly this value. The legal entity behind the tool, as the banner names it.
     * @param {string} address - Filter to rows whose `address` is exactly this value. The company's postal address, as the banner names it.
     * @param {string} country - Filter to rows whose `country` is exactly this value. The company's country, ISO 3166-1 alpha-2.
     * @param {string} privacyPolicyUrl - Filter to rows whose `privacy_policy_url` is exactly this value. The vendor's own privacy policy, linked from the banner.
     * @param {string} dpaUrl - Filter to rows whose `dpa_url` is exactly this value. Where the vendor's data processing terms are published, if anywhere.
     * @param {boolean} thirdCountryTransfer - Filter to rows whose `third_country_transfer` is exactly this value. Whether data reaches a country outside the EU/EEA. The banner says so, because a visitor is owed it before agreeing.
     * @param {string} transferBasis - Filter to rows whose `transfer_basis` is exactly this value. What a third-country transfer rests on, in the words the banner shows.
     * @param {string} registryKey - Filter to rows whose `registry_key` is exactly this value. The `@nuxt/scripts` registry entry the storefront loads this tool through, where one exists.
     * @param {string} logo - Filter to rows whose `logo` is exactly this value. The vendor's logo for the admin UI, as a base64 data URI of an SVG, PNG, JPEG or WebP image, at most 20480 characters. Adoption copies the catalogue's logo. Null shows the vendor's initials. It is never part of the delivered policy.
     * @param {LegalBasisOverride} legalBasisOverride - Filter to rows whose `legal_basis_override` is exactly this value. This vendor's own legal basis where it differs from its purpose's — a cookieless statistics tool on `legitimate_interest` while the rest of statistics waits for `consent`. Null means the purpose's basis applies. The effective basis is this ?? the purpose's.
     * @param {string} catalogKey - Filter to rows whose `catalog_key` is exactly this value. The catalogue entry this vendor was adopted from; null for a vendor the tenant described themselves. It is provenance — nothing re-reads the catalogue through it.
     * @param {string} catalogVersion - Filter to rows whose `catalog_version` is exactly this value. The catalogue version the adopted copy was taken from. A read flags the vendor when the shipped catalogue is newer, and nothing changes until the merchant refreshes it.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {boolean} isActive - Filter to rows whose `is_active` is exactly this value. Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {string} createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set — every route that changes the row stamps it.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} offset - Row offset (default 0).
     * @param {string} order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerVendorsList(id?: string, code?: string, name?: string, category?: string, company?: string, address?: string, country?: string, privacyPolicyUrl?: string, dpaUrl?: string, thirdCountryTransfer?: boolean, transferBasis?: string, registryKey?: string, logo?: string, legalBasisOverride?: LegalBasisOverride, catalogKey?: string, catalogVersion?: string, position?: number, isActive?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    consentManagerVendorsList(
        paramsOrFirst?: { id?: string, code?: string, name?: string, category?: string, company?: string, address?: string, country?: string, privacyPolicyUrl?: string, dpaUrl?: string, thirdCountryTransfer?: boolean, transferBasis?: string, registryKey?: string, logo?: string, legalBasisOverride?: LegalBasisOverride, catalogKey?: string, catalogVersion?: string, position?: number, isActive?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (LegalBasisOverride)?, (string)?, (string)?, (number)?, (boolean)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, code?: string, name?: string, category?: string, company?: string, address?: string, country?: string, privacyPolicyUrl?: string, dpaUrl?: string, thirdCountryTransfer?: boolean, transferBasis?: string, registryKey?: string, logo?: string, legalBasisOverride?: LegalBasisOverride, catalogKey?: string, catalogVersion?: string, position?: number, isActive?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, name?: string, category?: string, company?: string, address?: string, country?: string, privacyPolicyUrl?: string, dpaUrl?: string, thirdCountryTransfer?: boolean, transferBasis?: string, registryKey?: string, logo?: string, legalBasisOverride?: LegalBasisOverride, catalogKey?: string, catalogVersion?: string, position?: number, isActive?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                category: rest[2] as string,
                company: rest[3] as string,
                address: rest[4] as string,
                country: rest[5] as string,
                privacyPolicyUrl: rest[6] as string,
                dpaUrl: rest[7] as string,
                thirdCountryTransfer: rest[8] as boolean,
                transferBasis: rest[9] as string,
                registryKey: rest[10] as string,
                logo: rest[11] as string,
                legalBasisOverride: rest[12] as LegalBasisOverride,
                catalogKey: rest[13] as string,
                catalogVersion: rest[14] as string,
                position: rest[15] as number,
                isActive: rest[16] as boolean,
                createdAt: rest[17] as string,
                updatedAt: rest[18] as string,
                limit: rest[19] as number,
                offset: rest[20] as number,
                order: rest[21] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const category = params.category;
        const company = params.company;
        const address = params.address;
        const country = params.country;
        const privacyPolicyUrl = params.privacyPolicyUrl;
        const dpaUrl = params.dpaUrl;
        const thirdCountryTransfer = params.thirdCountryTransfer;
        const transferBasis = params.transferBasis;
        const registryKey = params.registryKey;
        const logo = params.logo;
        const legalBasisOverride = params.legalBasisOverride;
        const catalogKey = params.catalogKey;
        const catalogVersion = params.catalogVersion;
        const position = params.position;
        const isActive = params.isActive;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/consent-manager/vendors';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof category !== 'undefined') {
            apiPayload['category'] = category;
        }
        if (typeof company !== 'undefined') {
            apiPayload['company'] = company;
        }
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof privacyPolicyUrl !== 'undefined') {
            apiPayload['privacy_policy_url'] = privacyPolicyUrl;
        }
        if (typeof dpaUrl !== 'undefined') {
            apiPayload['dpa_url'] = dpaUrl;
        }
        if (typeof thirdCountryTransfer !== 'undefined') {
            apiPayload['third_country_transfer'] = thirdCountryTransfer;
        }
        if (typeof transferBasis !== 'undefined') {
            apiPayload['transfer_basis'] = transferBasis;
        }
        if (typeof registryKey !== 'undefined') {
            apiPayload['registry_key'] = registryKey;
        }
        if (typeof logo !== 'undefined') {
            apiPayload['logo'] = logo;
        }
        if (typeof legalBasisOverride !== 'undefined') {
            apiPayload['legal_basis_override'] = legalBasisOverride;
        }
        if (typeof catalogKey !== 'undefined') {
            apiPayload['catalog_key'] = catalogKey;
        }
        if (typeof catalogVersion !== 'undefined') {
            apiPayload['catalog_version'] = catalogVersion;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * Declare a vendor the catalogue does not carry. `code` and `name` are owed; `purposes` names the purpose codes it serves — a vendor with none cannot be published.
     *
     * @param {string} params.code - The vendor's fixed identity, as the Tag Manager, the visitor's cookie and every record name it. Lowercase letters, digits and '-'. For an adopted vendor it is the catalogue key.
     * @param {string} params.name - The tool as a visitor knows it.
     * @param {string} params.address - The company's postal address, as the banner names it.
     * @param {string} params.category - What kind of tool this is — analytics, advertising, chat, video — as the catalogue groups it. Presentation only.
     * @param {string[]} params.chains - Other vendors this one loads in turn — Google Tag Manager loading Google Analytics — by vendor code, so the banner can name every link of the chain.
     * @param {string} params.company - The legal entity behind the tool, as the banner names it.
     * @param {string} params.country - The company's country, ISO 3166-1 alpha-2.
     * @param {object} params.description - What the tool does, in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} params.dpaUrl - Where the vendor's data processing terms are published, if anywhere.
     * @param {string[]} params.hosts - The hosts the tool contacts. A storefront blocks requests to them until the vendor is allowed; the Tag Manager checks its tags against them.
     * @param {boolean} params.isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {LegalBasisOverride} params.legalBasisOverride - This vendor's own legal basis where it differs from its purpose's — a cookieless statistics tool on `legitimate_interest` while the rest of statistics waits for `consent`. Null means the purpose's basis applies. The effective basis is this ?? the purpose's.
     * @param {string} params.logo - The vendor's logo for the admin UI, as a base64 data URI of an SVG, PNG, JPEG or WebP image, at most 20480 characters. Adoption copies the catalogue's logo. Null shows the vendor's initials. It is never part of the delivered policy. Anything else is refused with 422 `invalid_logo`; an empty string clears it.
     * @param {number} params.position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} params.privacyPolicyUrl - The vendor's own privacy policy, linked from the banner.
     * @param {string[]} params.purposes - The codes of the purposes this vendor serves. On an update, the list replaces the current one; a code this tenant does not keep is refused with 422.
     * @param {string} params.registryKey - The `@nuxt/scripts` registry entry the storefront loads this tool through, where one exists.
     * @param {object} params.retentionNote - How long the vendor keeps the data, as the banner states it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {boolean} params.thirdCountryTransfer - Whether data reaches a country outside the EU/EEA. The banner says so, because a visitor is owed it before agreeing.
     * @param {string} params.transferBasis - What a third-country transfer rests on, in the words the banner shows.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     */
    consentManagerVendorsCreate(params: { code: string, name: string, address?: string, category?: string, chains?: string[], company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string }): Promise<Models.Vendor>;
    /**
     * Declare a vendor the catalogue does not carry. `code` and `name` are owed; `purposes` names the purpose codes it serves — a vendor with none cannot be published.
     *
     * @param {string} code - The vendor's fixed identity, as the Tag Manager, the visitor's cookie and every record name it. Lowercase letters, digits and '-'. For an adopted vendor it is the catalogue key.
     * @param {string} name - The tool as a visitor knows it.
     * @param {string} address - The company's postal address, as the banner names it.
     * @param {string} category - What kind of tool this is — analytics, advertising, chat, video — as the catalogue groups it. Presentation only.
     * @param {string[]} chains - Other vendors this one loads in turn — Google Tag Manager loading Google Analytics — by vendor code, so the banner can name every link of the chain.
     * @param {string} company - The legal entity behind the tool, as the banner names it.
     * @param {string} country - The company's country, ISO 3166-1 alpha-2.
     * @param {object} description - What the tool does, in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} dpaUrl - Where the vendor's data processing terms are published, if anywhere.
     * @param {string[]} hosts - The hosts the tool contacts. A storefront blocks requests to them until the vendor is allowed; the Tag Manager checks its tags against them.
     * @param {boolean} isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {LegalBasisOverride} legalBasisOverride - This vendor's own legal basis where it differs from its purpose's — a cookieless statistics tool on `legitimate_interest` while the rest of statistics waits for `consent`. Null means the purpose's basis applies. The effective basis is this ?? the purpose's.
     * @param {string} logo - The vendor's logo for the admin UI, as a base64 data URI of an SVG, PNG, JPEG or WebP image, at most 20480 characters. Adoption copies the catalogue's logo. Null shows the vendor's initials. It is never part of the delivered policy. Anything else is refused with 422 `invalid_logo`; an empty string clears it.
     * @param {number} position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} privacyPolicyUrl - The vendor's own privacy policy, linked from the banner.
     * @param {string[]} purposes - The codes of the purposes this vendor serves. On an update, the list replaces the current one; a code this tenant does not keep is refused with 422.
     * @param {string} registryKey - The `@nuxt/scripts` registry entry the storefront loads this tool through, where one exists.
     * @param {object} retentionNote - How long the vendor keeps the data, as the banner states it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {boolean} thirdCountryTransfer - Whether data reaches a country outside the EU/EEA. The banner says so, because a visitor is owed it before agreeing.
     * @param {string} transferBasis - What a third-country transfer rests on, in the words the banner shows.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerVendorsCreate(code: string, name: string, address?: string, category?: string, chains?: string[], company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string): Promise<Models.Vendor>;
    consentManagerVendorsCreate(
        paramsOrFirst: { code: string, name: string, address?: string, category?: string, chains?: string[], company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (object)?, (string)?, (string[])?, (boolean)?, (LegalBasisOverride)?, (string)?, (number)?, (string)?, (string[])?, (string)?, (object)?, (boolean)?, (string)?]    
    ): Promise<Models.Vendor> {
        let params: { code: string, name: string, address?: string, category?: string, chains?: string[], company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, address?: string, category?: string, chains?: string[], company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                address: rest[1] as string,
                category: rest[2] as string,
                chains: rest[3] as string[],
                company: rest[4] as string,
                country: rest[5] as string,
                description: rest[6] as object,
                dpaUrl: rest[7] as string,
                hosts: rest[8] as string[],
                isActive: rest[9] as boolean,
                legalBasisOverride: rest[10] as LegalBasisOverride,
                logo: rest[11] as string,
                position: rest[12] as number,
                privacyPolicyUrl: rest[13] as string,
                purposes: rest[14] as string[],
                registryKey: rest[15] as string,
                retentionNote: rest[16] as object,
                thirdCountryTransfer: rest[17] as boolean,
                transferBasis: rest[18] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const address = params.address;
        const category = params.category;
        const chains = params.chains;
        const company = params.company;
        const country = params.country;
        const description = params.description;
        const dpaUrl = params.dpaUrl;
        const hosts = params.hosts;
        const isActive = params.isActive;
        const legalBasisOverride = params.legalBasisOverride;
        const logo = params.logo;
        const position = params.position;
        const privacyPolicyUrl = params.privacyPolicyUrl;
        const purposes = params.purposes;
        const registryKey = params.registryKey;
        const retentionNote = params.retentionNote;
        const thirdCountryTransfer = params.thirdCountryTransfer;
        const transferBasis = params.transferBasis;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/consent-manager/vendors';
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof category !== 'undefined') {
            apiPayload['category'] = category;
        }
        if (typeof chains !== 'undefined') {
            apiPayload['chains'] = chains;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof company !== 'undefined') {
            apiPayload['company'] = company;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof dpaUrl !== 'undefined') {
            apiPayload['dpa_url'] = dpaUrl;
        }
        if (typeof hosts !== 'undefined') {
            apiPayload['hosts'] = hosts;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof legalBasisOverride !== 'undefined') {
            apiPayload['legal_basis_override'] = legalBasisOverride;
        }
        if (typeof logo !== 'undefined') {
            apiPayload['logo'] = logo;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof privacyPolicyUrl !== 'undefined') {
            apiPayload['privacy_policy_url'] = privacyPolicyUrl;
        }
        if (typeof purposes !== 'undefined') {
            apiPayload['purposes'] = purposes;
        }
        if (typeof registryKey !== 'undefined') {
            apiPayload['registry_key'] = registryKey;
        }
        if (typeof retentionNote !== 'undefined') {
            apiPayload['retention_note'] = retentionNote;
        }
        if (typeof thirdCountryTransfer !== 'undefined') {
            apiPayload['third_country_transfer'] = thirdCountryTransfer;
        }
        if (typeof transferBasis !== 'undefined') {
            apiPayload['transfer_basis'] = transferBasis;
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
     * Removes the vendor, its cookies and its purpose links. Published versions keep naming it — they are frozen.
     *
     * @param {string} params.id - The vendor.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerVendorsDelete(params: { id: string }): Promise<{}>;
    /**
     * Removes the vendor, its cookies and its purpose links. Published versions keep naming it — they are frozen.
     *
     * @param {string} id - The vendor.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerVendorsDelete(id: string): Promise<{}>;
    consentManagerVendorsDelete(
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

        const apiPath = '/v1/consent-manager/vendors/{id}'.replace('{id}', id);
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
     * One vendor, with the codes of the purposes it serves, its cookies and any newer catalogue entry.
     *
     * @param {string} params.id - The vendor.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     */
    consentManagerVendorsGet(params: { id: string }): Promise<Models.Vendor>;
    /**
     * One vendor, with the codes of the purposes it serves, its cookies and any newer catalogue entry.
     *
     * @param {string} id - The vendor.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerVendorsGet(id: string): Promise<Models.Vendor>;
    consentManagerVendorsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Vendor> {
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

        const apiPath = '/v1/consent-manager/vendors/{id}'.replace('{id}', id);
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
     * Partial update. `purposes`, when sent, replaces the vendor's purposes. The code may be sent only unchanged.
     *
     * @param {string} params.id - The vendor.
     * @param {string} params.address - The company's postal address, as the banner names it.
     * @param {string} params.category - What kind of tool this is — analytics, advertising, chat, video — as the catalogue groups it. Presentation only.
     * @param {string[]} params.chains - Other vendors this one loads in turn — Google Tag Manager loading Google Analytics — by vendor code, so the banner can name every link of the chain.
     * @param {string} params.code - The vendor's fixed identity, as the Tag Manager, the visitor's cookie and every record name it. Lowercase letters, digits and '-'. For an adopted vendor it is the catalogue key.
     * @param {string} params.company - The legal entity behind the tool, as the banner names it.
     * @param {string} params.country - The company's country, ISO 3166-1 alpha-2.
     * @param {object} params.description - What the tool does, in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} params.dpaUrl - Where the vendor's data processing terms are published, if anywhere.
     * @param {string[]} params.hosts - The hosts the tool contacts. A storefront blocks requests to them until the vendor is allowed; the Tag Manager checks its tags against them.
     * @param {boolean} params.isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {LegalBasisOverride} params.legalBasisOverride - This vendor's own legal basis where it differs from its purpose's — a cookieless statistics tool on `legitimate_interest` while the rest of statistics waits for `consent`. Null means the purpose's basis applies. The effective basis is this ?? the purpose's.
     * @param {string} params.logo - The vendor's logo for the admin UI, as a base64 data URI of an SVG, PNG, JPEG or WebP image, at most 20480 characters. Adoption copies the catalogue's logo. Null shows the vendor's initials. It is never part of the delivered policy. Anything else is refused with 422 `invalid_logo`; an empty string clears it.
     * @param {string} params.name - The tool as a visitor knows it.
     * @param {number} params.position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} params.privacyPolicyUrl - The vendor's own privacy policy, linked from the banner.
     * @param {string[]} params.purposes - The codes of the purposes this vendor serves. On an update, the list replaces the current one; a code this tenant does not keep is refused with 422.
     * @param {string} params.registryKey - The `@nuxt/scripts` registry entry the storefront loads this tool through, where one exists.
     * @param {object} params.retentionNote - How long the vendor keeps the data, as the banner states it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {boolean} params.thirdCountryTransfer - Whether data reaches a country outside the EU/EEA. The banner says so, because a visitor is owed it before agreeing.
     * @param {string} params.transferBasis - What a third-country transfer rests on, in the words the banner shows.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     */
    consentManagerVendorsUpdate(params: { id: string, address?: string, category?: string, chains?: string[], code?: string, company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, name?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string }): Promise<Models.Vendor>;
    /**
     * Partial update. `purposes`, when sent, replaces the vendor's purposes. The code may be sent only unchanged.
     *
     * @param {string} id - The vendor.
     * @param {string} address - The company's postal address, as the banner names it.
     * @param {string} category - What kind of tool this is — analytics, advertising, chat, video — as the catalogue groups it. Presentation only.
     * @param {string[]} chains - Other vendors this one loads in turn — Google Tag Manager loading Google Analytics — by vendor code, so the banner can name every link of the chain.
     * @param {string} code - The vendor's fixed identity, as the Tag Manager, the visitor's cookie and every record name it. Lowercase letters, digits and '-'. For an adopted vendor it is the catalogue key.
     * @param {string} company - The legal entity behind the tool, as the banner names it.
     * @param {string} country - The company's country, ISO 3166-1 alpha-2.
     * @param {object} description - What the tool does, in the banner's second layer. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {string} dpaUrl - Where the vendor's data processing terms are published, if anywhere.
     * @param {string[]} hosts - The hosts the tool contacts. A storefront blocks requests to them until the vendor is allowed; the Tag Manager checks its tags against them.
     * @param {boolean} isActive - Whether this row takes part in the next published version. Switching it off keeps the row and leaves it out of every version published afterwards; versions already published are untouched.
     * @param {LegalBasisOverride} legalBasisOverride - This vendor's own legal basis where it differs from its purpose's — a cookieless statistics tool on `legitimate_interest` while the rest of statistics waits for `consent`. Null means the purpose's basis applies. The effective basis is this ?? the purpose's.
     * @param {string} logo - The vendor's logo for the admin UI, as a base64 data URI of an SVG, PNG, JPEG or WebP image, at most 20480 characters. Adoption copies the catalogue's logo. Null shows the vendor's initials. It is never part of the delivered policy. Anything else is refused with 422 `invalid_logo`; an empty string clears it.
     * @param {string} name - The tool as a visitor knows it.
     * @param {number} position - Where this row sorts in the order a screen and the banner show them, ascending. Presentation only.
     * @param {string} privacyPolicyUrl - The vendor's own privacy policy, linked from the banner.
     * @param {string[]} purposes - The codes of the purposes this vendor serves. On an update, the list replaces the current one; a code this tenant does not keep is refused with 422.
     * @param {string} registryKey - The `@nuxt/scripts` registry entry the storefront loads this tool through, where one exists.
     * @param {object} retentionNote - How long the vendor keeps the data, as the banner states it. A text per language tag, e.g. { "de": "…", "en": "…" }.
     * @param {boolean} thirdCountryTransfer - Whether data reaches a country outside the EU/EEA. The banner says so, because a visitor is owed it before agreeing.
     * @param {string} transferBasis - What a third-country transfer rests on, in the words the banner shows.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Vendor>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerVendorsUpdate(id: string, address?: string, category?: string, chains?: string[], code?: string, company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, name?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string): Promise<Models.Vendor>;
    consentManagerVendorsUpdate(
        paramsOrFirst: { id: string, address?: string, category?: string, chains?: string[], code?: string, company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, name?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string)?, (string)?, (string)?, (object)?, (string)?, (string[])?, (boolean)?, (LegalBasisOverride)?, (string)?, (string)?, (number)?, (string)?, (string[])?, (string)?, (object)?, (boolean)?, (string)?]    
    ): Promise<Models.Vendor> {
        let params: { id: string, address?: string, category?: string, chains?: string[], code?: string, company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, name?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, address?: string, category?: string, chains?: string[], code?: string, company?: string, country?: string, description?: object, dpaUrl?: string, hosts?: string[], isActive?: boolean, legalBasisOverride?: LegalBasisOverride, logo?: string, name?: string, position?: number, privacyPolicyUrl?: string, purposes?: string[], registryKey?: string, retentionNote?: object, thirdCountryTransfer?: boolean, transferBasis?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                address: rest[0] as string,
                category: rest[1] as string,
                chains: rest[2] as string[],
                code: rest[3] as string,
                company: rest[4] as string,
                country: rest[5] as string,
                description: rest[6] as object,
                dpaUrl: rest[7] as string,
                hosts: rest[8] as string[],
                isActive: rest[9] as boolean,
                legalBasisOverride: rest[10] as LegalBasisOverride,
                logo: rest[11] as string,
                name: rest[12] as string,
                position: rest[13] as number,
                privacyPolicyUrl: rest[14] as string,
                purposes: rest[15] as string[],
                registryKey: rest[16] as string,
                retentionNote: rest[17] as object,
                thirdCountryTransfer: rest[18] as boolean,
                transferBasis: rest[19] as string            
            };
        }
        
        const id = params.id;
        const address = params.address;
        const category = params.category;
        const chains = params.chains;
        const code = params.code;
        const company = params.company;
        const country = params.country;
        const description = params.description;
        const dpaUrl = params.dpaUrl;
        const hosts = params.hosts;
        const isActive = params.isActive;
        const legalBasisOverride = params.legalBasisOverride;
        const logo = params.logo;
        const name = params.name;
        const position = params.position;
        const privacyPolicyUrl = params.privacyPolicyUrl;
        const purposes = params.purposes;
        const registryKey = params.registryKey;
        const retentionNote = params.retentionNote;
        const thirdCountryTransfer = params.thirdCountryTransfer;
        const transferBasis = params.transferBasis;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/consent-manager/vendors/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof category !== 'undefined') {
            apiPayload['category'] = category;
        }
        if (typeof chains !== 'undefined') {
            apiPayload['chains'] = chains;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof company !== 'undefined') {
            apiPayload['company'] = company;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof dpaUrl !== 'undefined') {
            apiPayload['dpa_url'] = dpaUrl;
        }
        if (typeof hosts !== 'undefined') {
            apiPayload['hosts'] = hosts;
        }
        if (typeof isActive !== 'undefined') {
            apiPayload['is_active'] = isActive;
        }
        if (typeof legalBasisOverride !== 'undefined') {
            apiPayload['legal_basis_override'] = legalBasisOverride;
        }
        if (typeof logo !== 'undefined') {
            apiPayload['logo'] = logo;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof privacyPolicyUrl !== 'undefined') {
            apiPayload['privacy_policy_url'] = privacyPolicyUrl;
        }
        if (typeof purposes !== 'undefined') {
            apiPayload['purposes'] = purposes;
        }
        if (typeof registryKey !== 'undefined') {
            apiPayload['registry_key'] = registryKey;
        }
        if (typeof retentionNote !== 'undefined') {
            apiPayload['retention_note'] = retentionNote;
        }
        if (typeof thirdCountryTransfer !== 'undefined') {
            apiPayload['third_country_transfer'] = thirdCountryTransfer;
        }
        if (typeof transferBasis !== 'undefined') {
            apiPayload['transfer_basis'] = transferBasis;
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
     * The value sets this app publishes, without their values: legal-bases, cookie-kinds, record-actions, record-surfaces, banner-layouts, google-signals.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConsentVocabularyIndex>}
     */
    consentManagerVocabulariesList(): Promise<Models.ConsentVocabularyIndex> {

        const apiPath = '/v1/consent-manager/vocabularies';
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
     * One value set with every value and its German and English label. The sets are closed: a value outside one is refused by the routes that take it.
     *
     * @param {ConsentManagerVocabulariesGetName} params.name - One of legal-bases, cookie-kinds, record-actions, record-surfaces, banner-layouts, google-signals.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConsentVocabulary>}
     */
    consentManagerVocabulariesGet(params: { name: ConsentManagerVocabulariesGetName }): Promise<Models.ConsentVocabulary>;
    /**
     * One value set with every value and its German and English label. The sets are closed: a value outside one is refused by the routes that take it.
     *
     * @param {ConsentManagerVocabulariesGetName} name - One of legal-bases, cookie-kinds, record-actions, record-surfaces, banner-layouts, google-signals.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConsentVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerVocabulariesGet(name: ConsentManagerVocabulariesGetName): Promise<Models.ConsentVocabulary>;
    consentManagerVocabulariesGet(
        paramsOrFirst: { name: ConsentManagerVocabulariesGetName } | ConsentManagerVocabulariesGetName    
    ): Promise<Models.ConsentVocabulary> {
        let params: { name: ConsentManagerVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: ConsentManagerVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as ConsentManagerVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/consent-manager/vocabularies/{name}'.replace('{name}', name);
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
