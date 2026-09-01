import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Tone } from '../enums/tone';
import { ShippingVocabulariesGetName } from '../enums/shipping-vocabularies-get-name';

export class ShippingValueLists {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * What class of service a carrier row represents. This used to be a CHECK constraint, which meant a merchant with a night-courier tier or a two-man delivery service needed a release of this app to say so — and nothing in the app ever branched on the value, it only carried it. The set is the tenant's rows now, and the first read seeds it, so this never answers empty. Hand-rolled rather than a generic mount, because seeding is the point: it therefore honours limit/offset AND NOTHING ELSE. There is no `?code=` filter and no `order` — the rows always come back in `position` order, and a sort or a filter sent anyway is accepted, ignored, and answered 200.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} params.offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingServiceLevelsList(params?: { limit?: number, offset?: number }): Promise<{}>;
    /**
     * What class of service a carrier row represents. This used to be a CHECK constraint, which meant a merchant with a night-courier tier or a two-man delivery service needed a release of this app to say so — and nothing in the app ever branched on the value, it only carried it. The set is the tenant's rows now, and the first read seeds it, so this never answers empty. Hand-rolled rather than a generic mount, because seeding is the point: it therefore honours limit/offset AND NOTHING ELSE. There is no `?code=` filter and no `order` — the rows always come back in `position` order, and a sort or a filter sent anyway is accepted, ignored, and answered 200.
     *
     * @param {number} limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingServiceLevelsList(limit?: number, offset?: number): Promise<{}>;
    shippingServiceLevelsList(
        paramsOrFirst?: { limit?: number, offset?: number } | number,
        ...rest: [(number)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;


        const apiPath = '/v1/shipping/service-levels';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
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
     * A service level is the class of service a carrier row represents, as one of the tenant's own codes. It is carried by `shipping_carriers.service_level` and reported on a rate as `carrier_service_level`; nothing in this app branches on it. A method never names one — it gets its level through the carrier it ships with. Reach for this when a merchant sells a class this app was not shipped with — a night courier, a two-man delivery, a same-day run. A create cannot omit `code` and `title`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` — that is the 409. The code is lowercase and becomes what a carrier stores; it cannot be changed afterwards, because every carrier carrying it would be orphaned. Creating one changes nothing on its own: a carrier has to be moved onto it before it means anything.
     *
     * @param {string} params.code - Lowercase letters, digits, - or _, starting with a letter. What `shipping_carriers.service_level` stores. Immutable once created — renaming it would orphan every row carrying it.
     * @param {string} params.title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {string} params.description - The sentence under the title, explaining when to pick this service level. Null when the title says enough.
     * @param {object} params.descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {boolean} params.isDefault - Promote this value on creation; the previous default is demoted.
     * @param {object} params.labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} params.position - Sort order in a select — the collection is returned in it.
     * @param {Tone} params.tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingServiceLevelsCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.Error>;
    /**
     * A service level is the class of service a carrier row represents, as one of the tenant's own codes. It is carried by `shipping_carriers.service_level` and reported on a rate as `carrier_service_level`; nothing in this app branches on it. A method never names one — it gets its level through the carrier it ships with. Reach for this when a merchant sells a class this app was not shipped with — a night courier, a two-man delivery, a same-day run. A create cannot omit `code` and `title`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` — that is the 409. The code is lowercase and becomes what a carrier stores; it cannot be changed afterwards, because every carrier carrying it would be orphaned. Creating one changes nothing on its own: a carrier has to be moved onto it before it means anything.
     *
     * @param {string} code - Lowercase letters, digits, - or _, starting with a letter. What `shipping_carriers.service_level` stores. Immutable once created — renaming it would orphan every row carrying it.
     * @param {string} title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {string} description - The sentence under the title, explaining when to pick this service level. Null when the title says enough.
     * @param {object} descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {boolean} isDefault - Promote this value on creation; the previous default is demoted.
     * @param {object} labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} position - Sort order in a select — the collection is returned in it.
     * @param {Tone} tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingServiceLevelsCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.Error>;
    shippingServiceLevelsCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/shipping/service-levels';
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
     * There is no foreign key doing this: adding one to a table that starts empty would fail the migration of every existing tenant. The refusal lives in the handler instead.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingServiceLevelsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * There is no foreign key doing this: adding one to a table that starts empty would fail the migration of every existing tenant. The refusal lives in the handler instead.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingServiceLevelsDelete(id: string): Promise<Models.Error>;
    shippingServiceLevelsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/shipping/service-levels/{id}'.replace('{id}', id);
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
     * A service level is the class of service a carrier row represents, as one of the tenant's own codes. It is carried by `shipping_carriers.service_level` and reported on a rate as `carrier_service_level`; nothing in this app branches on it. A method never names one — it gets its level through the carrier it ships with. This reads one of them by ROW ID — which is what an editor holds after listing the set, and not what anything else in the platform stores. A caller holding the CODE (off a carrier row, or off a rate's `carrier_service_level`) cannot use this route: there is no `?code=` filter on the collection either, so read GET /shipping/vocabularies/service-levels, which is keyed the way the rest of the platform refers to these values.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingServiceLevelsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * A service level is the class of service a carrier row represents, as one of the tenant's own codes. It is carried by `shipping_carriers.service_level` and reported on a rate as `carrier_service_level`; nothing in this app branches on it. A method never names one — it gets its level through the carrier it ships with. This reads one of them by ROW ID — which is what an editor holds after listing the set, and not what anything else in the platform stores. A caller holding the CODE (off a carrier row, or off a rate's `carrier_service_level`) cannot use this route: there is no `?code=` filter on the collection either, so read GET /shipping/vocabularies/service-levels, which is keyed the way the rest of the platform refers to these values.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingServiceLevelsGet(id: string): Promise<Models.Error>;
    shippingServiceLevelsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/shipping/service-levels/{id}'.replace('{id}', id);
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
     * A service level is the class of service a carrier row represents, as one of the tenant's own codes. It is carried by `shipping_carriers.service_level` and reported on a rate as `carrier_service_level`; nothing in this app branches on it. A method never names one — it gets its level through the carrier it ships with. This edits the DISPLAY half of one — title, description, their locale maps, badge tone, position, and the default flag. Everything a carrier or a filter joins on stays put: the code is immutable (a different one in the payload is a 400, not a silent no-op), and no carrier is moved onto or off this level by renaming it. Moving a row's `position` does not renumber its neighbours — the collection is returned in position order and ties fall back to whatever the database returns, so a deliberate order means writing every row's position.
     *
     * @param {string} params.id - The row id.
     * @param {string} params.description - The sentence under the title, explaining when to pick this service level. Null when the title says enough.
     * @param {object} params.descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted. POST …/make-default does the same thing without an edit.
     * @param {object} params.labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} params.position - Sort order in a select — the collection is returned in it.
     * @param {string} params.title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {Tone} params.tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingServiceLevelsUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.Error>;
    /**
     * A service level is the class of service a carrier row represents, as one of the tenant's own codes. It is carried by `shipping_carriers.service_level` and reported on a rate as `carrier_service_level`; nothing in this app branches on it. A method never names one — it gets its level through the carrier it ships with. This edits the DISPLAY half of one — title, description, their locale maps, badge tone, position, and the default flag. Everything a carrier or a filter joins on stays put: the code is immutable (a different one in the payload is a 400, not a silent no-op), and no carrier is moved onto or off this level by renaming it. Moving a row's `position` does not renumber its neighbours — the collection is returned in position order and ties fall back to whatever the database returns, so a deliberate order means writing every row's position.
     *
     * @param {string} id - The row id.
     * @param {string} description - The sentence under the title, explaining when to pick this service level. Null when the title says enough.
     * @param {object} descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted. POST …/make-default does the same thing without an edit.
     * @param {object} labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} position - Sort order in a select — the collection is returned in it.
     * @param {string} title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {Tone} tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingServiceLevelsUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.Error>;
    shippingServiceLevelsUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/shipping/service-levels/{id}'.replace('{id}', id);
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
     * The flag is a single answer, not a per-row opinion: it is what every fallback lands on, so two defaults leave the result to row order and none leaves it to the seeded value. This row takes it and whoever was holding it is demoted in the same call — there is no separate write to clear the old one, and no window in which both carry it. Only the rows whose flag is wrong are written, so repeating the call is free.
     *
     * @param {string} params.id - The row id.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingServiceLevelsMakeDefault(params: { id: string, data: object }): Promise<Models.Error>;
    /**
     * The flag is a single answer, not a per-row opinion: it is what every fallback lands on, so two defaults leave the result to row order and none leaves it to the seeded value. This row takes it and whoever was holding it is demoted in the same call — there is no separate write to clear the old one, and no window in which both carry it. Only the rows whose flag is wrong are written, so repeating the call is free.
     *
     * @param {string} id - The row id.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingServiceLevelsMakeDefault(id: string, data: object): Promise<Models.Error>;
    shippingServiceLevelsMakeDefault(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Error> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/shipping/service-levels/{id}/make-default'.replace('{id}', id);
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
     * Discovery for the vocabulary routes: every enum this app publishes, each with its name, its title and its description, and deliberately without its values — an index stays an index, and the set a value belongs to is one further call. Names: carrier-statuses, matrix-bases, pricing-types, service-levels, weight-units. Fetch one with GET /shipping/vocabularies/{name}; a client holding the qualified pair 'shipping.<name>' builds that URL from the pair alone. `title` and `description` are either one string or a locale map keyed by locale — every entry here carries the map, because every one of them is curated copy.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingVocabularyIndex>}
     */
    shippingVocabulariesList(): Promise<Models.ShippingVocabularyIndex> {

        const apiPath = '/v1/shipping/vocabularies';
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
     * One vocabulary in full: every value it permits, each carrying the title to show, the description to explain it and the badge tone to draw it in — everything a select or a status chip needs, so nothing has to be labelled a second time in a client. Two sources, one guarantee: what is served is what is enforced, so no UI keeps a second copy. 'source: schema' means the values are read out of a CHECK constraint — a value added to the constraint appears here even before anyone labels it, titled from its own key, in constraint order. 'source: table' means the values are the TENANT's own rows (service-levels, weight-units), read per request and seeded on first use, so a merchant may add one without a release of this app; those values also carry labels/descriptions, is_system and is_default, and weight-units carries the conversion factor. 'closed' says the set is exhaustive either way, so a value outside it is stale data rather than a missing label. `title` and `description` — the vocabulary's and every value's — are either one string or a locale map keyed by locale: curated copy carries the map, a value titled from its own key carries the string. Names: carrier-statuses, matrix-bases, pricing-types, service-levels, weight-units.
     *
     * @param {ShippingVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingVocabulariesGet(params: { name: ShippingVocabulariesGetName }): Promise<Models.Error>;
    /**
     * One vocabulary in full: every value it permits, each carrying the title to show, the description to explain it and the badge tone to draw it in — everything a select or a status chip needs, so nothing has to be labelled a second time in a client. Two sources, one guarantee: what is served is what is enforced, so no UI keeps a second copy. 'source: schema' means the values are read out of a CHECK constraint — a value added to the constraint appears here even before anyone labels it, titled from its own key, in constraint order. 'source: table' means the values are the TENANT's own rows (service-levels, weight-units), read per request and seeded on first use, so a merchant may add one without a release of this app; those values also carry labels/descriptions, is_system and is_default, and weight-units carries the conversion factor. 'closed' says the set is exhaustive either way, so a value outside it is stale data rather than a missing label. `title` and `description` — the vocabulary's and every value's — are either one string or a locale map keyed by locale: curated copy carries the map, a value titled from its own key carries the string. Names: carrier-statuses, matrix-bases, pricing-types, service-levels, weight-units.
     *
     * @param {ShippingVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingVocabulariesGet(name: ShippingVocabulariesGetName): Promise<Models.Error>;
    shippingVocabulariesGet(
        paramsOrFirst: { name: ShippingVocabulariesGetName } | ShippingVocabulariesGetName    
    ): Promise<Models.Error> {
        let params: { name: ShippingVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: ShippingVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as ShippingVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/shipping/vocabularies/{name}'.replace('{name}', name);
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
     * Not a taxonomy: a unit is a code PLUS a factor, and the factor prices parcels. `factor` is how many kilograms one of this unit weighs, so a matrix keyed in one unit can price a request expressed in another. Exactly one row is the BASE (kg, factor 1) — the anchor every other factor and every stored rate tier is expressed in — and it is fixed at install. Seeded on first read, so this never answers empty. Like the service levels it is hand-rolled and honours limit/offset AND NOTHING ELSE: no column filter, no `order`, always `position` order, and a sort sent anyway is ignored rather than refused.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} params.offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingWeightUnitsList(params?: { limit?: number, offset?: number }): Promise<{}>;
    /**
     * Not a taxonomy: a unit is a code PLUS a factor, and the factor prices parcels. `factor` is how many kilograms one of this unit weighs, so a matrix keyed in one unit can price a request expressed in another. Exactly one row is the BASE (kg, factor 1) — the anchor every other factor and every stored rate tier is expressed in — and it is fixed at install. Seeded on first read, so this never answers empty. Like the service levels it is hand-rolled and honours limit/offset AND NOTHING ELSE: no column filter, no `order`, always `position` order, and a sort sent anyway is ignored rather than refused.
     *
     * @param {number} limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingWeightUnitsList(limit?: number, offset?: number): Promise<{}>;
    shippingWeightUnitsList(
        paramsOrFirst?: { limit?: number, offset?: number } | number,
        ...rest: [(number)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;


        const apiPath = '/v1/shipping/weight-units';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
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
     * Reach for this when a merchant weighs goods in something this app was not shipped with — a tonne for pallet freight, a carat for jewellery — and wants a rate matrix keyed in it. `factor` is required and must be greater than 0: zero does not convert a weight, it divides by it, and a negative factor turns a parcel into a credit. The new unit is never the base — which unit anchors the others is decided at install, and moving it would silently reprice every weight matrix in the shop.
     *
     * @param {string} params.code - Lowercase letters, digits, - or _, starting with a letter. What a rate request names in `weight_unit`, and what a market's `weight_unit` setting stores. Immutable once created — renaming it would orphan every row carrying it.
     * @param {number} params.factor - How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
     * @param {string} params.title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {string} params.description - The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
     * @param {object} params.descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {boolean} params.isDefault - Promote this value on creation; the previous default is demoted.
     * @param {object} params.labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} params.position - Sort order in a select — the collection is returned in it.
     * @param {Tone} params.tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingWeightUnitsCreate(params: { code: string, factor: number, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone }): Promise<Models.Error>;
    /**
     * Reach for this when a merchant weighs goods in something this app was not shipped with — a tonne for pallet freight, a carat for jewellery — and wants a rate matrix keyed in it. `factor` is required and must be greater than 0: zero does not convert a weight, it divides by it, and a negative factor turns a parcel into a credit. The new unit is never the base — which unit anchors the others is decided at install, and moving it would silently reprice every weight matrix in the shop.
     *
     * @param {string} code - Lowercase letters, digits, - or _, starting with a letter. What a rate request names in `weight_unit`, and what a market's `weight_unit` setting stores. Immutable once created — renaming it would orphan every row carrying it.
     * @param {number} factor - How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
     * @param {string} title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {string} description - The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
     * @param {object} descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {boolean} isDefault - Promote this value on creation; the previous default is demoted.
     * @param {object} labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} position - Sort order in a select — the collection is returned in it.
     * @param {Tone} tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingWeightUnitsCreate(code: string, factor: number, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone): Promise<Models.Error>;
    shippingWeightUnitsCreate(
        paramsOrFirst: { code: string, factor: number, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone } | string,
        ...rest: [(number)?, (string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (Tone)?]    
    ): Promise<Models.Error> {
        let params: { code: string, factor: number, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, factor: number, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: Tone };
        } else {
            params = {
                code: paramsOrFirst as string,
                factor: rest[0] as number,
                title: rest[1] as string,
                description: rest[2] as string,
                descriptions: rest[3] as object,
                isDefault: rest[4] as boolean,
                labels: rest[5] as object,
                position: rest[6] as number,
                tone: rest[7] as Tone            
            };
        }
        
        const code = params.code;
        const factor = params.factor;
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
        if (typeof factor === 'undefined') {
            throw new RevenexxException('Missing required parameter: "factor"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/shipping/weight-units';
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
        if (typeof factor !== 'undefined') {
            apiPayload['factor'] = factor;
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
     * The market check is best effort by design — the setting is per market and this request carries one, so another market may still name the unit. That case degrades to the market falling back to the flagged unit rather than failing its quotes.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingWeightUnitsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * The market check is best effort by design — the setting is per market and this request carries one, so another market may still name the unit. That case degrades to the market falling back to the flagged unit rather than failing its quotes.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingWeightUnitsDelete(id: string): Promise<Models.Error>;
    shippingWeightUnitsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/shipping/weight-units/{id}'.replace('{id}', id);
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
     * A weight unit is a code PLUS a factor — how many kilograms one of this unit weighs — and the factor is what prices parcels: a rate request expressed in one unit is converted through the two factors into the unit the market's tiers are keyed in. Exactly one row is the base (kg, factor 1), fixed at install. This reads one of them by ROW ID, which is what an editor holds after listing the set; a caller holding the CODE (a market's `weight_unit` setting, a rate request's `weight_unit`) has no filter for it here and should read GET /shipping/vocabularies/weight-units instead. Reading the factor back is NOT how a past quote is checked: a rate answer echoes the factors it applied in `basis.weight_unit_factor` and `basis.request_weight_unit_factor` precisely so it stays re-derivable after this row has been edited.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingWeightUnitsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * A weight unit is a code PLUS a factor — how many kilograms one of this unit weighs — and the factor is what prices parcels: a rate request expressed in one unit is converted through the two factors into the unit the market's tiers are keyed in. Exactly one row is the base (kg, factor 1), fixed at install. This reads one of them by ROW ID, which is what an editor holds after listing the set; a caller holding the CODE (a market's `weight_unit` setting, a rate request's `weight_unit`) has no filter for it here and should read GET /shipping/vocabularies/weight-units instead. Reading the factor back is NOT how a past quote is checked: a rate answer echoes the factors it applied in `basis.weight_unit_factor` and `basis.request_weight_unit_factor` precisely so it stays re-derivable after this row has been edited.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingWeightUnitsGet(id: string): Promise<Models.Error>;
    shippingWeightUnitsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/shipping/weight-units/{id}'.replace('{id}', id);
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
     * Everything but the code and the base flag. A factor sent for the BASE unit is refused rather than silently ignored: it reads as 1 because every other factor is relative to it, so changing it would rescale the whole table without touching another row.
     *
     * @param {string} params.id - The row id.
     * @param {string} params.description - The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
     * @param {object} params.descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} params.factor - How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
     * @param {boolean} params.isDefault - Promote this value; the previous default is demoted. POST …/make-default does the same thing without an edit.
     * @param {object} params.labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} params.position - Sort order in a select — the collection is returned in it.
     * @param {string} params.title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {Tone} params.tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingWeightUnitsUpdate(params: { id: string, description?: string, descriptions?: object, factor?: number, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.Error>;
    /**
     * Everything but the code and the base flag. A factor sent for the BASE unit is refused rather than silently ignored: it reads as 1 because every other factor is relative to it, so changing it would rescale the whole table without touching another row.
     *
     * @param {string} id - The row id.
     * @param {string} description - The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
     * @param {object} descriptions - Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} factor - How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
     * @param {boolean} isDefault - Promote this value; the previous default is demoted. POST …/make-default does the same thing without an edit.
     * @param {object} labels - Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {number} position - Sort order in a select — the collection is returned in it.
     * @param {string} title - What an operator reads in a select. The name a merchant renames; the code underneath never moves.
     * @param {Tone} tone - Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingWeightUnitsUpdate(id: string, description?: string, descriptions?: object, factor?: number, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.Error>;
    shippingWeightUnitsUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, factor?: number, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(string)?, (object)?, (number)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.Error> {
        let params: { id: string, description?: string, descriptions?: object, factor?: number, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, factor?: number, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                factor: rest[2] as number,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                title: rest[6] as string,
                tone: rest[7] as Tone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const factor = params.factor;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/weight-units/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof factor !== 'undefined') {
            apiPayload['factor'] = factor;
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
     * The flag is a single answer, not a per-row opinion: it is what every fallback lands on, so two defaults leave the result to row order and none leaves it to the seeded value. This row takes it and whoever was holding it is demoted in the same call — there is no separate write to clear the old one, and no window in which both carry it. Only the rows whose flag is wrong are written, so repeating the call is free.
     *
     * @param {string} params.id - The row id.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    shippingWeightUnitsMakeDefault(params: { id: string, data: object }): Promise<Models.Error>;
    /**
     * The flag is a single answer, not a per-row opinion: it is what every fallback lands on, so two defaults leave the result to row order and none leaves it to the seeded value. This row takes it and whoever was holding it is demoted in the same call — there is no separate write to clear the old one, and no window in which both carry it. Only the rows whose flag is wrong are written, so repeating the call is free.
     *
     * @param {string} id - The row id.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingWeightUnitsMakeDefault(id: string, data: object): Promise<Models.Error>;
    shippingWeightUnitsMakeDefault(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Error> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/shipping/weight-units/{id}/make-default'.replace('{id}', id);
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
