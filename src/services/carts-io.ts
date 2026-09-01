import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CartIoDirection } from '../enums/cart-io-direction';
import { CartIoEntity } from '../enums/cart-io-entity';
import { CartIoFormat } from '../enums/cart-io-format';
import { CartIoApplyMode } from '../enums/cart-io-apply-mode';
import { CartExportFormat } from '../enums/cart-export-format';

export class CartsIo {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Reads a payload of lines into a cart — the bulk-order path a buyer pastes a spreadsheet into. With `target_cart_id` the lines land in that cart, which must be active, and the profile's `apply_mode` decides what happens to the lines already there: 'replace' clears them first, 'insert' and 'append' both add. Without a target a new cart is created, and an OWNER is then required — `contact_id` or `session_key` — because a cart with neither cannot exist. `profile_id` names an IMPORT profile; without one the payload is read ad hoc, as CSV when `csv` is present and as JSON otherwise. The lines fold into identical product lines exactly as carts.items.create does, so `imported_lines` counts the lines READ and the cart may have gained fewer rows than that. A payload that parses to no line at all is a 400 rather than a quiet no-op.
     *
     * @param {string} params.contactId - Owner of the cart this import creates. Ignored when target_cart_id is sent.
     * @param {string} params.csv - The CSV rows, when that is easier than putting them in `payload`. First line is the header, and its names are the ones the profile's mapping expects (the bundled quick-order template reads sku, name, quantity, unit_price). Numbers are coerced; a JSON column survives as a JSON string.
     * @param {string} params.name - Name for the cart this import creates. A name in the payload's own `cart` block wins over it; without either the cart is called 'Imported cart'.
     * @param {object} params.payload - The import itself. As an object: `{ "cart": { name, status, currency, channel_id, metadata }, "items": [ … ] }` — the same document carts.export produces, so an export round-trips. As a string: that document as raw JSON, or CSV rows when the profile is a csv one. A line with neither `name` nor `sku` is dropped, and a payload that leaves no line at all is a 400.
     * @param {string} params.profileId - The import profile to run — one of the ids `GET /carts/io/profiles?direction=import` lists. Omit it for an ad-hoc import: the payload is then read in the canonical shape, and as CSV if `csv` is what carried it.
     * @param {string} params.sessionKey - Guest owner of the cart this import creates — the storefront's own session key. Ignored when target_cart_id is sent.
     * @param {string} params.targetCartId - An existing ACTIVE cart to import into. The lines are added to it (merging identical product lines), unless the profile says `apply_mode: replace`, which clears it first. Without this a new cart is created and an owner is required.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsImport(params?: { contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string }): Promise<Models.Error>;
    /**
     * Reads a payload of lines into a cart — the bulk-order path a buyer pastes a spreadsheet into. With `target_cart_id` the lines land in that cart, which must be active, and the profile's `apply_mode` decides what happens to the lines already there: 'replace' clears them first, 'insert' and 'append' both add. Without a target a new cart is created, and an OWNER is then required — `contact_id` or `session_key` — because a cart with neither cannot exist. `profile_id` names an IMPORT profile; without one the payload is read ad hoc, as CSV when `csv` is present and as JSON otherwise. The lines fold into identical product lines exactly as carts.items.create does, so `imported_lines` counts the lines READ and the cart may have gained fewer rows than that. A payload that parses to no line at all is a 400 rather than a quiet no-op.
     *
     * @param {string} contactId - Owner of the cart this import creates. Ignored when target_cart_id is sent.
     * @param {string} csv - The CSV rows, when that is easier than putting them in `payload`. First line is the header, and its names are the ones the profile's mapping expects (the bundled quick-order template reads sku, name, quantity, unit_price). Numbers are coerced; a JSON column survives as a JSON string.
     * @param {string} name - Name for the cart this import creates. A name in the payload's own `cart` block wins over it; without either the cart is called 'Imported cart'.
     * @param {object} payload - The import itself. As an object: `{ "cart": { name, status, currency, channel_id, metadata }, "items": [ … ] }` — the same document carts.export produces, so an export round-trips. As a string: that document as raw JSON, or CSV rows when the profile is a csv one. A line with neither `name` nor `sku` is dropped, and a payload that leaves no line at all is a 400.
     * @param {string} profileId - The import profile to run — one of the ids `GET /carts/io/profiles?direction=import` lists. Omit it for an ad-hoc import: the payload is then read in the canonical shape, and as CSV if `csv` is what carried it.
     * @param {string} sessionKey - Guest owner of the cart this import creates — the storefront's own session key. Ignored when target_cart_id is sent.
     * @param {string} targetCartId - An existing ACTIVE cart to import into. The lines are added to it (merging identical product lines), unless the profile says `apply_mode: replace`, which clears it first. Without this a new cart is created and an owner is required.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsImport(contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string): Promise<Models.Error>;
    cartsImport(
        paramsOrFirst?: { contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string } | string,
        ...rest: [(string)?, (string)?, (object)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                csv: rest[0] as string,
                name: rest[1] as string,
                payload: rest[2] as object,
                profileId: rest[3] as string,
                sessionKey: rest[4] as string,
                targetCartId: rest[5] as string            
            };
        }
        
        const contactId = params.contactId;
        const csv = params.csv;
        const name = params.name;
        const payload = params.payload;
        const profileId = params.profileId;
        const sessionKey = params.sessionKey;
        const targetCartId = params.targetCartId;


        const apiPath = '/v1/carts/import';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof csv !== 'undefined') {
            apiPayload['csv'] = csv;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof payload !== 'undefined') {
            apiPayload['payload'] = payload;
        }
        if (typeof profileId !== 'undefined') {
            apiPayload['profile_id'] = profileId;
        }
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof targetCartId !== 'undefined') {
            apiPayload['target_cart_id'] = targetCartId;
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
     * The filters are what make this list usable: `?direction=export` is how a client offers the profiles that carts.export will accept, and `?is_template=true` separates the four bundled templates from what a merchant wrote. An unknown column is dropped rather than refused — `filter` echoes what was understood.
     *
     * @param {string} params.id - One profile, in list form.
     * @param {string} params.name - Exact profile name — how the bundled templates are addressed, since they are identified by name.
     * @param {CartIoDirection} params.direction - Import or export profiles. `?direction=export` is how a client offers exactly the profiles carts.export will accept — the other half is a 400.
     * @param {CartIoEntity} params.entity - Profiles that carry whole carts, or profiles that carry lines.
     * @param {CartIoFormat} params.format - JSON profiles or CSV profiles.
     * @param {CartIoApplyMode} params.applyMode - Profiles that replace a target cart's lines, as against those that add to them.
     * @param {boolean} params.isTemplate - The four bundled templates, or everything a merchant wrote.
     * @param {string} params.createdAt - Exact instant, not a range.
     * @param {string} params.updatedAt - Exact instant, not a range.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsIoProfilesList(params?: { id?: string, name?: string, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, applyMode?: CartIoApplyMode, isTemplate?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * The filters are what make this list usable: `?direction=export` is how a client offers the profiles that carts.export will accept, and `?is_template=true` separates the four bundled templates from what a merchant wrote. An unknown column is dropped rather than refused — `filter` echoes what was understood.
     *
     * @param {string} id - One profile, in list form.
     * @param {string} name - Exact profile name — how the bundled templates are addressed, since they are identified by name.
     * @param {CartIoDirection} direction - Import or export profiles. `?direction=export` is how a client offers exactly the profiles carts.export will accept — the other half is a 400.
     * @param {CartIoEntity} entity - Profiles that carry whole carts, or profiles that carry lines.
     * @param {CartIoFormat} format - JSON profiles or CSV profiles.
     * @param {CartIoApplyMode} applyMode - Profiles that replace a target cart's lines, as against those that add to them.
     * @param {boolean} isTemplate - The four bundled templates, or everything a merchant wrote.
     * @param {string} createdAt - Exact instant, not a range.
     * @param {string} updatedAt - Exact instant, not a range.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesList(id?: string, name?: string, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, applyMode?: CartIoApplyMode, isTemplate?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    cartsIoProfilesList(
        paramsOrFirst?: { id?: string, name?: string, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, applyMode?: CartIoApplyMode, isTemplate?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (CartIoDirection)?, (CartIoEntity)?, (CartIoFormat)?, (CartIoApplyMode)?, (boolean)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id?: string, name?: string, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, applyMode?: CartIoApplyMode, isTemplate?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, name?: string, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, applyMode?: CartIoApplyMode, isTemplate?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                direction: rest[1] as CartIoDirection,
                entity: rest[2] as CartIoEntity,
                format: rest[3] as CartIoFormat,
                applyMode: rest[4] as CartIoApplyMode,
                isTemplate: rest[5] as boolean,
                createdAt: rest[6] as string,
                updatedAt: rest[7] as string,
                limit: rest[8] as number,
                offset: rest[9] as number,
                order: rest[10] as string            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const direction = params.direction;
        const entity = params.entity;
        const format = params.format;
        const applyMode = params.applyMode;
        const isTemplate = params.isTemplate;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/carts/io/profiles';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof direction !== 'undefined') {
            apiPayload['direction'] = direction;
        }
        if (typeof entity !== 'undefined') {
            apiPayload['entity'] = entity;
        }
        if (typeof format !== 'undefined') {
            apiPayload['format'] = format;
        }
        if (typeof applyMode !== 'undefined') {
            apiPayload['apply_mode'] = applyMode;
        }
        if (typeof isTemplate !== 'undefined') {
            apiPayload['is_template'] = isTemplate;
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
     * Defines a new import/export profile. Two fields are required and have no default — `name`, which must be unique within the tenant, and `direction`, which fixes the one way this profile will ever run. Everything else defaults to the common case: whole carts, JSON, `apply_mode` 'insert', not a template. The uniqueness of the name is a unique index rather than a check in this app, so a reused name is a 409 no matter which route wrote the other one, including the four bundled templates. The shape is Baseline-IO-compatible, so a mapping written for another app's import reads the same way here. Creating a profile does not move any data: carts.export and carts.import are what execute one, and each refuses a profile pointed the wrong way.
     *
     * @param {CartIoDirection} params.direction - Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
     * @param {string} params.name - What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409.
     * @param {CartIoApplyMode} params.applyMode - What an import does with the lines the target cart already has: 'replace' clears them first, 'insert' and 'append' both add and behave identically today. Read only when the import names a target_cart_id. Default 'insert'.
     * @param {CartIoEntity} params.entity - What the profile carries: whole carts (the `{cart, items}` document) or bare cart lines. Default 'carts'.
     * @param {CartIoFormat} params.format - The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it. Default 'json'.
     * @param {boolean} params.isTemplate - One of the bundled templates. Set by carts.io.profiles.defaults; a profile a merchant writes is not one.
     * @param {object} params.mapping - Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
     * @param {object} params.options - Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsIoProfilesCreate(params: { direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object }): Promise<Models.Error>;
    /**
     * Defines a new import/export profile. Two fields are required and have no default — `name`, which must be unique within the tenant, and `direction`, which fixes the one way this profile will ever run. Everything else defaults to the common case: whole carts, JSON, `apply_mode` 'insert', not a template. The uniqueness of the name is a unique index rather than a check in this app, so a reused name is a 409 no matter which route wrote the other one, including the four bundled templates. The shape is Baseline-IO-compatible, so a mapping written for another app's import reads the same way here. Creating a profile does not move any data: carts.export and carts.import are what execute one, and each refuses a profile pointed the wrong way.
     *
     * @param {CartIoDirection} direction - Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
     * @param {string} name - What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409.
     * @param {CartIoApplyMode} applyMode - What an import does with the lines the target cart already has: 'replace' clears them first, 'insert' and 'append' both add and behave identically today. Read only when the import names a target_cart_id. Default 'insert'.
     * @param {CartIoEntity} entity - What the profile carries: whole carts (the `{cart, items}` document) or bare cart lines. Default 'carts'.
     * @param {CartIoFormat} format - The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it. Default 'json'.
     * @param {boolean} isTemplate - One of the bundled templates. Set by carts.io.profiles.defaults; a profile a merchant writes is not one.
     * @param {object} mapping - Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
     * @param {object} options - Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesCreate(direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object): Promise<Models.Error>;
    cartsIoProfilesCreate(
        paramsOrFirst: { direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object } | CartIoDirection,
        ...rest: [(string)?, (CartIoApplyMode)?, (CartIoEntity)?, (CartIoFormat)?, (boolean)?, (object)?, (object)?]    
    ): Promise<Models.Error> {
        let params: { direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('direction' in paramsOrFirst || 'name' in paramsOrFirst || 'applyMode' in paramsOrFirst || 'entity' in paramsOrFirst || 'format' in paramsOrFirst || 'isTemplate' in paramsOrFirst || 'mapping' in paramsOrFirst || 'options' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object };
        } else {
            params = {
                direction: paramsOrFirst as CartIoDirection,
                name: rest[0] as string,
                applyMode: rest[1] as CartIoApplyMode,
                entity: rest[2] as CartIoEntity,
                format: rest[3] as CartIoFormat,
                isTemplate: rest[4] as boolean,
                mapping: rest[5] as object,
                options: rest[6] as object            
            };
        }
        
        const direction = params.direction;
        const name = params.name;
        const applyMode = params.applyMode;
        const entity = params.entity;
        const format = params.format;
        const isTemplate = params.isTemplate;
        const mapping = params.mapping;
        const options = params.options;

        if (typeof direction === 'undefined') {
            throw new RevenexxException('Missing required parameter: "direction"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/carts/io/profiles';
        const apiPayload: Payload = {};
        if (typeof applyMode !== 'undefined') {
            apiPayload['apply_mode'] = applyMode;
        }
        if (typeof direction !== 'undefined') {
            apiPayload['direction'] = direction;
        }
        if (typeof entity !== 'undefined') {
            apiPayload['entity'] = entity;
        }
        if (typeof format !== 'undefined') {
            apiPayload['format'] = format;
        }
        if (typeof isTemplate !== 'undefined') {
            apiPayload['is_template'] = isTemplate;
        }
        if (typeof mapping !== 'undefined') {
            apiPayload['mapping'] = mapping;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = options;
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
     * Seeds the 4 bundled templates and reports which of them it had to create — the call that gives a fresh tenant something to export through before anybody has written a profile. Idempotent and matched by NAME, so a second call answers with everything under 'existing' and writes nothing, and a template a merchant has edited is left exactly as they left it rather than reset. It also runs by itself on app.installed; call it by hand where that event cannot be relied on, and after deleting a template to get it back.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsIoProfilesDefaults(): Promise<{}> {

        const apiPath = '/v1/carts/io/profiles/defaults';
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

    /**
     * Removes a profile. Nothing in this app points at one — no cart and no line stores the profile it was imported through — so no foreign key holds the delete up and nothing is orphaned by it; what breaks is the caller still holding that `profile_id`, which answers 404 on its next run. Deleting one of the four bundled templates is not permanent either: the next carts.io.profiles.defaults, and the next install of this app, seeds it again by name, in the shape it ships with rather than the shape a merchant had edited it into.
     *
     * @param {string} params.id - The import/export profile, by its id — one of the ids `GET /carts/io/profiles` lists.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsIoProfilesDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * Removes a profile. Nothing in this app points at one — no cart and no line stores the profile it was imported through — so no foreign key holds the delete up and nothing is orphaned by it; what breaks is the caller still holding that `profile_id`, which answers 404 on its next run. Deleting one of the four bundled templates is not permanent either: the next carts.io.profiles.defaults, and the next install of this app, seeds it again by name, in the shape it ships with rather than the shape a merchant had edited it into.
     *
     * @param {string} id - The import/export profile, by its id — one of the ids `GET /carts/io/profiles` lists.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesDelete(id: string): Promise<Models.Error>;
    cartsIoProfilesDelete(
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

        const apiPath = '/v1/carts/io/profiles/{id}'.replace('{id}', id);
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
     * One profile by id — the id carts.export and carts.import name in `profile_id`. Read it to see what a run will do before starting one: `direction`, because a profile only ever runs the way it declares; `entity`, whole carts or bare lines; `format`, where json round-trips and csv carries line fields only; `mapping`, what the external columns are called; and `apply_mode`, which decides what an import does with the lines a target cart already has. `is_template` says whether this is one of the four the app ships with or something a merchant wrote. Reading a profile runs nothing and changes nothing.
     *
     * @param {string} params.id - The import/export profile, by its id — one of the ids `GET /carts/io/profiles` lists.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsIoProfilesGet(params: { id: string }): Promise<Models.Error>;
    /**
     * One profile by id — the id carts.export and carts.import name in `profile_id`. Read it to see what a run will do before starting one: `direction`, because a profile only ever runs the way it declares; `entity`, whole carts or bare lines; `format`, where json round-trips and csv carries line fields only; `mapping`, what the external columns are called; and `apply_mode`, which decides what an import does with the lines a target cart already has. `is_template` says whether this is one of the four the app ships with or something a merchant wrote. Reading a profile runs nothing and changes nothing.
     *
     * @param {string} id - The import/export profile, by its id — one of the ids `GET /carts/io/profiles` lists.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesGet(id: string): Promise<Models.Error>;
    cartsIoProfilesGet(
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

        const apiPath = '/v1/carts/io/profiles/{id}'.replace('{id}', id);
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
     * Edits a profile in place, the four bundled templates included — seeding matches on name and never rewrites what it finds, so an edit made here survives every later call to carts.io.profiles.defaults and every reinstall of the app. The name stays unique in the tenant, so renaming onto another profile's name is a 409, and a payload carrying no updatable field answers 400 rather than storing nothing quietly. Runs that already happened are unaffected: a profile is read at the moment carts.export or carts.import executes and nothing is kept pointing back at it, so changing a mapping changes the next run and no earlier one.
     *
     * @param {string} params.id - The import/export profile, by its id — one of the ids `GET /carts/io/profiles` lists.
     * @param {CartIoApplyMode} params.applyMode - What an import does with the lines the target cart already has: 'replace' clears them first, 'insert' and 'append' both add and behave identically today. Read only when the import names a target_cart_id. Default 'insert'.
     * @param {CartIoDirection} params.direction - Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
     * @param {CartIoEntity} params.entity - What the profile carries: whole carts (the `{cart, items}` document) or bare cart lines. Default 'carts'.
     * @param {CartIoFormat} params.format - The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it. Default 'json'.
     * @param {boolean} params.isTemplate - One of the bundled templates. Set by carts.io.profiles.defaults; a profile a merchant writes is not one.
     * @param {object} params.mapping - Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
     * @param {string} params.name - What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409.
     * @param {object} params.options - Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsIoProfilesUpdate(params: { id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object }): Promise<Models.Error>;
    /**
     * Edits a profile in place, the four bundled templates included — seeding matches on name and never rewrites what it finds, so an edit made here survives every later call to carts.io.profiles.defaults and every reinstall of the app. The name stays unique in the tenant, so renaming onto another profile's name is a 409, and a payload carrying no updatable field answers 400 rather than storing nothing quietly. Runs that already happened are unaffected: a profile is read at the moment carts.export or carts.import executes and nothing is kept pointing back at it, so changing a mapping changes the next run and no earlier one.
     *
     * @param {string} id - The import/export profile, by its id — one of the ids `GET /carts/io/profiles` lists.
     * @param {CartIoApplyMode} applyMode - What an import does with the lines the target cart already has: 'replace' clears them first, 'insert' and 'append' both add and behave identically today. Read only when the import names a target_cart_id. Default 'insert'.
     * @param {CartIoDirection} direction - Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
     * @param {CartIoEntity} entity - What the profile carries: whole carts (the `{cart, items}` document) or bare cart lines. Default 'carts'.
     * @param {CartIoFormat} format - The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it. Default 'json'.
     * @param {boolean} isTemplate - One of the bundled templates. Set by carts.io.profiles.defaults; a profile a merchant writes is not one.
     * @param {object} mapping - Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
     * @param {string} name - What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409.
     * @param {object} options - Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesUpdate(id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object): Promise<Models.Error>;
    cartsIoProfilesUpdate(
        paramsOrFirst: { id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object } | string,
        ...rest: [(CartIoApplyMode)?, (CartIoDirection)?, (CartIoEntity)?, (CartIoFormat)?, (boolean)?, (object)?, (string)?, (object)?]    
    ): Promise<Models.Error> {
        let params: { id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                applyMode: rest[0] as CartIoApplyMode,
                direction: rest[1] as CartIoDirection,
                entity: rest[2] as CartIoEntity,
                format: rest[3] as CartIoFormat,
                isTemplate: rest[4] as boolean,
                mapping: rest[5] as object,
                name: rest[6] as string,
                options: rest[7] as object            
            };
        }
        
        const id = params.id;
        const applyMode = params.applyMode;
        const direction = params.direction;
        const entity = params.entity;
        const format = params.format;
        const isTemplate = params.isTemplate;
        const mapping = params.mapping;
        const name = params.name;
        const options = params.options;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/io/profiles/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof applyMode !== 'undefined') {
            apiPayload['apply_mode'] = applyMode;
        }
        if (typeof direction !== 'undefined') {
            apiPayload['direction'] = direction;
        }
        if (typeof entity !== 'undefined') {
            apiPayload['entity'] = entity;
        }
        if (typeof format !== 'undefined') {
            apiPayload['format'] = format;
        }
        if (typeof isTemplate !== 'undefined') {
            apiPayload['is_template'] = isTemplate;
        }
        if (typeof mapping !== 'undefined') {
            apiPayload['mapping'] = mapping;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = options;
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
     * Renders one cart as a document somebody can take away. With `profile_id` the named EXPORT profile decides the format, the entity and the column names; handing it an import profile is a 400, because a profile only runs the way it declares. Without one the call runs ad hoc — JSON, unless `format: 'csv'` says otherwise. The JSON form is `{cart: {…}, items: […]}` and is exactly what carts.import takes back, so an export round-trips; the CSV form is the lines only, header first, and drops everything that lives on the cart rather than on a line. Nothing is stored and nothing about the cart changes — `filename` is a suggestion for a browser download, not a file this app keeps — and a cart of any status can be exported, including one already ordered.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {CartExportFormat} params.format - Format of an ad-hoc export, read only when no profile_id is sent. 'json' returns the whole `{cart, items}` document, 'csv' the lines alone. Default 'json'.
     * @param {string} params.profileId - The export profile to run — one of the ids `GET /carts/io/profiles?direction=export` lists. Omit it for an ad-hoc export in the canonical shape, which is what `format` is for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsExport(params: { id: string, format?: CartExportFormat, profileId?: string }): Promise<Models.Error>;
    /**
     * Renders one cart as a document somebody can take away. With `profile_id` the named EXPORT profile decides the format, the entity and the column names; handing it an import profile is a 400, because a profile only runs the way it declares. Without one the call runs ad hoc — JSON, unless `format: 'csv'` says otherwise. The JSON form is `{cart: {…}, items: […]}` and is exactly what carts.import takes back, so an export round-trips; the CSV form is the lines only, header first, and drops everything that lives on the cart rather than on a line. Nothing is stored and nothing about the cart changes — `filename` is a suggestion for a browser download, not a file this app keeps — and a cart of any status can be exported, including one already ordered.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {CartExportFormat} format - Format of an ad-hoc export, read only when no profile_id is sent. 'json' returns the whole `{cart, items}` document, 'csv' the lines alone. Default 'json'.
     * @param {string} profileId - The export profile to run — one of the ids `GET /carts/io/profiles?direction=export` lists. Omit it for an ad-hoc export in the canonical shape, which is what `format` is for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsExport(id: string, format?: CartExportFormat, profileId?: string): Promise<Models.Error>;
    cartsExport(
        paramsOrFirst: { id: string, format?: CartExportFormat, profileId?: string } | string,
        ...rest: [(CartExportFormat)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id: string, format?: CartExportFormat, profileId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, format?: CartExportFormat, profileId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                format: rest[0] as CartExportFormat,
                profileId: rest[1] as string            
            };
        }
        
        const id = params.id;
        const format = params.format;
        const profileId = params.profileId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}/export'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof format !== 'undefined') {
            apiPayload['format'] = format;
        }
        if (typeof profileId !== 'undefined') {
            apiPayload['profile_id'] = profileId;
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
