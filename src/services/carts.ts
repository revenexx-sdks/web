import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CartIoDirection } from '../enums/cart-io-direction';
import { CartIoApplyMode } from '../enums/cart-io-apply-mode';
import { CartIoEntity } from '../enums/cart-io-entity';
import { CartIoFormat } from '../enums/cart-io-format';
import { CartItemType } from '../enums/cart-item-type';
import { CartExportFormat } from '../enums/cart-export-format';

export class Carts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsList(): Promise<{}> {

        const apiPath = '/v1/carts';
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
     * @param {string} params.channelId - 
     * @param {string} params.contactId - Owning customer contact.
     * @param {string} params.currency - ISO 4217 code (default EUR).
     * @param {boolean} params.isCurrent - Make this THE current cart of its owner.
     * @param {string} params.marketId - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - Display name (default 'Cart').
     * @param {string} params.sessionKey - Owning guest session.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsCreate(params?: { channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, marketId?: string, metadata?: object, name?: string, sessionKey?: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} channelId - 
     * @param {string} contactId - Owning customer contact.
     * @param {string} currency - ISO 4217 code (default EUR).
     * @param {boolean} isCurrent - Make this THE current cart of its owner.
     * @param {string} marketId - 
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - Display name (default 'Cart').
     * @param {string} sessionKey - Owning guest session.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsCreate(channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, marketId?: string, metadata?: object, name?: string, sessionKey?: string): Promise<Models.Cart>;
    cartsCreate(
        paramsOrFirst?: { channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, marketId?: string, metadata?: object, name?: string, sessionKey?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.Cart> {
        let params: { channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, marketId?: string, metadata?: object, name?: string, sessionKey?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, marketId?: string, metadata?: object, name?: string, sessionKey?: string };
        } else {
            params = {
                channelId: paramsOrFirst as string,
                contactId: rest[0] as string,
                currency: rest[1] as string,
                isCurrent: rest[2] as boolean,
                marketId: rest[3] as string,
                metadata: rest[4] as object,
                name: rest[5] as string,
                sessionKey: rest[6] as string            
            };
        }
        
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const isCurrent = params.isCurrent;
        const marketId = params.marketId;
        const metadata = params.metadata;
        const name = params.name;
        const sessionKey = params.sessionKey;


        const apiPath = '/v1/carts';
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof isCurrent !== 'undefined') {
            apiPayload['is_current'] = isCurrent;
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
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
     * @param {string} params.contactId - Contact taking ownership.
     * @param {string} params.sessionKey - Guest session whose active carts are handed over.
     * @param {string} params.targetCartId - Merge the session carts into this cart instead of adopting them.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsClaim(params: { contactId: string, sessionKey: string, targetCartId?: string }): Promise<{}>;
    /**
     *
     * @param {string} contactId - Contact taking ownership.
     * @param {string} sessionKey - Guest session whose active carts are handed over.
     * @param {string} targetCartId - Merge the session carts into this cart instead of adopting them.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsClaim(contactId: string, sessionKey: string, targetCartId?: string): Promise<{}>;
    cartsClaim(
        paramsOrFirst: { contactId: string, sessionKey: string, targetCartId?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { contactId: string, sessionKey: string, targetCartId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, sessionKey: string, targetCartId?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                sessionKey: rest[0] as string,
                targetCartId: rest[1] as string            
            };
        }
        
        const contactId = params.contactId;
        const sessionKey = params.sessionKey;
        const targetCartId = params.targetCartId;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof sessionKey === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sessionKey"');
        }

        const apiPath = '/v1/carts/claim';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
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
     *
     * @param {string} params.contactId - Owner of a newly created cart.
     * @param {string} params.csv - Raw CSV content (alternative to payload for csv profiles).
     * @param {string} params.name - Name for a newly created cart.
     * @param {object} params.payload - The import payload: '{cart, items}' object, or a raw JSON/CSV string in the profile's format.
     * @param {string} params.profileId - Import profile to run; ad-hoc import when omitted.
     * @param {string} params.sessionKey - Guest owner of a newly created cart.
     * @param {string} params.targetCartId - Existing active cart to import into.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsImport(params?: { contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string }): Promise<{}>;
    /**
     *
     * @param {string} contactId - Owner of a newly created cart.
     * @param {string} csv - Raw CSV content (alternative to payload for csv profiles).
     * @param {string} name - Name for a newly created cart.
     * @param {object} payload - The import payload: '{cart, items}' object, or a raw JSON/CSV string in the profile's format.
     * @param {string} profileId - Import profile to run; ad-hoc import when omitted.
     * @param {string} sessionKey - Guest owner of a newly created cart.
     * @param {string} targetCartId - Existing active cart to import into.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsImport(contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string): Promise<{}>;
    cartsImport(
        paramsOrFirst?: { contactId?: string, csv?: string, name?: string, payload?: object, profileId?: string, sessionKey?: string, targetCartId?: string } | string,
        ...rest: [(string)?, (string)?, (object)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsIoProfilesList(): Promise<{}> {

        const apiPath = '/v1/carts/io/profiles';
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
     * @param {CartIoDirection} params.direction - 
     * @param {string} params.name - 
     * @param {CartIoApplyMode} params.applyMode - Default 'insert'.
     * @param {CartIoEntity} params.entity - Default 'carts'.
     * @param {CartIoFormat} params.format - Default 'json'.
     * @param {boolean} params.isTemplate - 
     * @param {object} params.mapping - Column mapping (Baseline-IO-compatible).
     * @param {object} params.options - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     */
    cartsIoProfilesCreate(params: { direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object }): Promise<Models.IoProfile>;
    /**
     *
     * @param {CartIoDirection} direction - 
     * @param {string} name - 
     * @param {CartIoApplyMode} applyMode - Default 'insert'.
     * @param {CartIoEntity} entity - Default 'carts'.
     * @param {CartIoFormat} format - Default 'json'.
     * @param {boolean} isTemplate - 
     * @param {object} mapping - Column mapping (Baseline-IO-compatible).
     * @param {object} options - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesCreate(direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object): Promise<Models.IoProfile>;
    cartsIoProfilesCreate(
        paramsOrFirst: { direction: CartIoDirection, name: string, applyMode?: CartIoApplyMode, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, options?: object } | CartIoDirection,
        ...rest: [(string)?, (CartIoApplyMode)?, (CartIoEntity)?, (CartIoFormat)?, (boolean)?, (object)?, (object)?]    
    ): Promise<Models.IoProfile> {
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsIoProfilesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesDelete(id: string): Promise<{}>;
    cartsIoProfilesDelete(
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     */
    cartsIoProfilesGet(params: { id: string }): Promise<Models.IoProfile>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesGet(id: string): Promise<Models.IoProfile>;
    cartsIoProfilesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.IoProfile> {
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
     *
     * @param {string} params.id - 
     * @param {CartIoApplyMode} params.applyMode - Default 'insert'.
     * @param {CartIoDirection} params.direction - 
     * @param {CartIoEntity} params.entity - Default 'carts'.
     * @param {CartIoFormat} params.format - Default 'json'.
     * @param {boolean} params.isTemplate - 
     * @param {object} params.mapping - Column mapping (Baseline-IO-compatible).
     * @param {string} params.name - 
     * @param {object} params.options - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     */
    cartsIoProfilesUpdate(params: { id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object }): Promise<Models.IoProfile>;
    /**
     *
     * @param {string} id - 
     * @param {CartIoApplyMode} applyMode - Default 'insert'.
     * @param {CartIoDirection} direction - 
     * @param {CartIoEntity} entity - Default 'carts'.
     * @param {CartIoFormat} format - Default 'json'.
     * @param {boolean} isTemplate - 
     * @param {object} mapping - Column mapping (Baseline-IO-compatible).
     * @param {string} name - 
     * @param {object} options - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.IoProfile>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsIoProfilesUpdate(id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object): Promise<Models.IoProfile>;
    cartsIoProfilesUpdate(
        paramsOrFirst: { id: string, applyMode?: CartIoApplyMode, direction?: CartIoDirection, entity?: CartIoEntity, format?: CartIoFormat, isTemplate?: boolean, mapping?: object, name?: string, options?: object } | string,
        ...rest: [(CartIoApplyMode)?, (CartIoDirection)?, (CartIoEntity)?, (CartIoFormat)?, (boolean)?, (object)?, (string)?, (object)?]    
    ): Promise<Models.IoProfile> {
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
     *
     * @param {string} params.sourceCartId - Cart whose lines move into the target (becomes status merged).
     * @param {string} params.targetCartId - Receiving cart (must be active).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsMerge(params: { sourceCartId: string, targetCartId: string }): Promise<{}>;
    /**
     *
     * @param {string} sourceCartId - Cart whose lines move into the target (becomes status merged).
     * @param {string} targetCartId - Receiving cart (must be active).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsMerge(sourceCartId: string, targetCartId: string): Promise<{}>;
    cartsMerge(
        paramsOrFirst: { sourceCartId: string, targetCartId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { sourceCartId: string, targetCartId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { sourceCartId: string, targetCartId: string };
        } else {
            params = {
                sourceCartId: paramsOrFirst as string,
                targetCartId: rest[0] as string            
            };
        }
        
        const sourceCartId = params.sourceCartId;
        const targetCartId = params.targetCartId;

        if (typeof sourceCartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sourceCartId"');
        }
        if (typeof targetCartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "targetCartId"');
        }

        const apiPath = '/v1/carts/merge';
        const apiPayload: Payload = {};
        if (typeof sourceCartId !== 'undefined') {
            apiPayload['source_cart_id'] = sourceCartId;
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
     *
     * @param {string} params.cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsItemsList(params: { cartId: string }): Promise<{}>;
    /**
     *
     * @param {string} cartId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsList(cartId: string): Promise<{}>;
    cartsItemsList(
        paramsOrFirst: { cartId: string } | string    
    ): Promise<{}> {
        let params: { cartId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string };
        } else {
            params = {
                cartId: paramsOrFirst as string            
            };
        }
        
        const cartId = params.cartId;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cart_id}', cartId);
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
     * @param {string} params.cartId - 
     * @param {object} params.configuration - Free-form configuration — configured lines never merge.
     * @param {string} params.currency - Defaults to the cart's currency.
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - Falls back to 'sku' when omitted.
     * @param {number} params.position - 
     * @param {string} params.productId - 
     * @param {number} params.quantity - Default 1.
     * @param {string} params.sku - 
     * @param {object} params.snapshot - Loose product snapshot at add-time (price, name, image, …).
     * @param {number} params.taxRate - 
     * @param {CartItemType} params.type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - Per-unit net price — line_total is always derived.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     */
    cartsItemsCreate(params: { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number }): Promise<Models.CartItem>;
    /**
     *
     * @param {string} cartId - 
     * @param {object} configuration - Free-form configuration — configured lines never merge.
     * @param {string} currency - Defaults to the cart's currency.
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - Falls back to 'sku' when omitted.
     * @param {number} position - 
     * @param {string} productId - 
     * @param {number} quantity - Default 1.
     * @param {string} sku - 
     * @param {object} snapshot - Loose product snapshot at add-time (price, name, image, …).
     * @param {number} taxRate - 
     * @param {CartItemType} type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} unit - 
     * @param {number} unitPrice - Per-unit net price — line_total is always derived.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsCreate(cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number): Promise<Models.CartItem>;
    cartsItemsCreate(
        paramsOrFirst: { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number } | string,
        ...rest: [(object)?, (string)?, (object)?, (string)?, (number)?, (string)?, (number)?, (string)?, (object)?, (number)?, (CartItemType)?, (string)?, (number)?]    
    ): Promise<Models.CartItem> {
        let params: { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                configuration: rest[0] as object,
                currency: rest[1] as string,
                metadata: rest[2] as object,
                name: rest[3] as string,
                position: rest[4] as number,
                productId: rest[5] as string,
                quantity: rest[6] as number,
                sku: rest[7] as string,
                snapshot: rest[8] as object,
                taxRate: rest[9] as number,
                type: rest[10] as CartItemType,
                unit: rest[11] as string,
                unitPrice: rest[12] as number            
            };
        }
        
        const cartId = params.cartId;
        const configuration = params.configuration;
        const currency = params.currency;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const snapshot = params.snapshot;
        const taxRate = params.taxRate;
        const type = params.type;
        const unit = params.unit;
        const unitPrice = params.unitPrice;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cart_id}', cartId);
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof snapshot !== 'undefined') {
            apiPayload['snapshot'] = snapshot;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
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
     * @param {string} params.cartId - 
     * @param {Models.CartItemCreateRequest[]} params.items - The complete new item set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsItemsReplace(params: { cartId: string, items: Models.CartItemCreateRequest[] }): Promise<{}>;
    /**
     *
     * @param {string} cartId - 
     * @param {Models.CartItemCreateRequest[]} items - The complete new item set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsReplace(cartId: string, items: Models.CartItemCreateRequest[]): Promise<{}>;
    cartsItemsReplace(
        paramsOrFirst: { cartId: string, items: Models.CartItemCreateRequest[] } | string,
        ...rest: [(Models.CartItemCreateRequest[])?]    
    ): Promise<{}> {
        let params: { cartId: string, items: Models.CartItemCreateRequest[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, items: Models.CartItemCreateRequest[] };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                items: rest[0] as Models.CartItemCreateRequest[]            
            };
        }
        
        const cartId = params.cartId;
        const items = params.items;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cart_id}', cartId);
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
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
     *
     * @param {string} params.cartId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsItemsDelete(params: { cartId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} cartId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsDelete(cartId: string, id: string): Promise<{}>;
    cartsItemsDelete(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cart_id}', cartId).replace('{id}', id);
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
     * @param {string} params.cartId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     */
    cartsItemsGet(params: { cartId: string, id: string }): Promise<Models.CartItem>;
    /**
     *
     * @param {string} cartId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsGet(cartId: string, id: string): Promise<Models.CartItem>;
    cartsItemsGet(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.CartItem> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cart_id}', cartId).replace('{id}', id);
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
     * @param {string} params.cartId - 
     * @param {string} params.id - 
     * @param {object} params.configuration - Free-form configuration — configured lines never merge.
     * @param {string} params.currency - Defaults to the cart's currency.
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - Falls back to 'sku' when omitted.
     * @param {number} params.position - 
     * @param {string} params.productId - 
     * @param {number} params.quantity - Default 1.
     * @param {string} params.sku - 
     * @param {object} params.snapshot - Loose product snapshot at add-time (price, name, image, …).
     * @param {number} params.taxRate - 
     * @param {CartItemType} params.type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - Per-unit net price — line_total is always derived.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     */
    cartsItemsUpdate(params: { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number }): Promise<Models.CartItem>;
    /**
     *
     * @param {string} cartId - 
     * @param {string} id - 
     * @param {object} configuration - Free-form configuration — configured lines never merge.
     * @param {string} currency - Defaults to the cart's currency.
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - Falls back to 'sku' when omitted.
     * @param {number} position - 
     * @param {string} productId - 
     * @param {number} quantity - Default 1.
     * @param {string} sku - 
     * @param {object} snapshot - Loose product snapshot at add-time (price, name, image, …).
     * @param {number} taxRate - 
     * @param {CartItemType} type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} unit - 
     * @param {number} unitPrice - Per-unit net price — line_total is always derived.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsUpdate(cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number): Promise<Models.CartItem>;
    cartsItemsUpdate(
        paramsOrFirst: { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number } | string,
        ...rest: [(string)?, (object)?, (string)?, (object)?, (string)?, (number)?, (string)?, (number)?, (string)?, (object)?, (number)?, (CartItemType)?, (string)?, (number)?]    
    ): Promise<Models.CartItem> {
        let params: { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string,
                configuration: rest[1] as object,
                currency: rest[2] as string,
                metadata: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                productId: rest[6] as string,
                quantity: rest[7] as number,
                sku: rest[8] as string,
                snapshot: rest[9] as object,
                taxRate: rest[10] as number,
                type: rest[11] as CartItemType,
                unit: rest[12] as string,
                unitPrice: rest[13] as number            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;
        const configuration = params.configuration;
        const currency = params.currency;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const snapshot = params.snapshot;
        const taxRate = params.taxRate;
        const type = params.type;
        const unit = params.unit;
        const unitPrice = params.unitPrice;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cart_id}', cartId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof snapshot !== 'undefined') {
            apiPayload['snapshot'] = snapshot;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsDelete(id: string): Promise<{}>;
    cartsDelete(
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

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsGet(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsGet(id: string): Promise<Models.Cart>;
    cartsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
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
     * @param {string} params.id - 
     * @param {string} params.channelId - 
     * @param {string} params.currency - ISO 4217 code.
     * @param {string} params.marketId - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsUpdate(params: { id: string, channelId?: string, currency?: string, marketId?: string, metadata?: object, name?: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @param {string} channelId - 
     * @param {string} currency - ISO 4217 code.
     * @param {string} marketId - 
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsUpdate(id: string, channelId?: string, currency?: string, marketId?: string, metadata?: object, name?: string): Promise<Models.Cart>;
    cartsUpdate(
        paramsOrFirst: { id: string, channelId?: string, currency?: string, marketId?: string, metadata?: object, name?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.Cart> {
        let params: { id: string, channelId?: string, currency?: string, marketId?: string, metadata?: object, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channelId?: string, currency?: string, marketId?: string, metadata?: object, name?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channelId: rest[0] as string,
                currency: rest[1] as string,
                marketId: rest[2] as string,
                metadata: rest[3] as object,
                name: rest[4] as string            
            };
        }
        
        const id = params.id;
        const channelId = params.channelId;
        const currency = params.currency;
        const marketId = params.marketId;
        const metadata = params.metadata;
        const name = params.name;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsAbandon(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsAbandon(id: string): Promise<Models.Cart>;
    cartsAbandon(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/abandon'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsActivate(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsActivate(id: string): Promise<Models.Cart>;
    cartsActivate(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/activate'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @param {CartExportFormat} params.format - Ad-hoc export format (only without profile_id).
     * @param {string} params.profileId - Export profile to run; ad-hoc JSON/CSV export when omitted.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsExport(params: { id: string, format?: CartExportFormat, profileId?: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {CartExportFormat} format - Ad-hoc export format (only without profile_id).
     * @param {string} profileId - Export profile to run; ad-hoc JSON/CSV export when omitted.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsExport(id: string, format?: CartExportFormat, profileId?: string): Promise<{}>;
    cartsExport(
        paramsOrFirst: { id: string, format?: CartExportFormat, profileId?: string } | string,
        ...rest: [(CartExportFormat)?, (string)?]    
    ): Promise<{}> {
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

    /**
     *
     * @param {string} params.id - 
     * @param {string} params.orderRef - External order reference from order management.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsOrder(params: { id: string, orderRef?: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @param {string} orderRef - External order reference from order management.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsOrder(id: string, orderRef?: string): Promise<Models.Cart>;
    cartsOrder(
        paramsOrFirst: { id: string, orderRef?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Cart> {
        let params: { id: string, orderRef?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, orderRef?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                orderRef: rest[0] as string            
            };
        }
        
        const id = params.id;
        const orderRef = params.orderRef;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}/order'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsReopen(params: { id: string }): Promise<Models.Cart>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsReopen(id: string): Promise<Models.Cart>;
    cartsReopen(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Cart> {
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

        const apiPath = '/v1/carts/{id}/reopen'.replace('{id}', id);
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
