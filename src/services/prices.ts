import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PriceListStatus } from '../enums/price-list-status';
import { PriceEntryType } from '../enums/price-entry-type';

export class Prices {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesListsList(): Promise<{}> {

        const apiPath = '/v1/prices/lists';
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
     * @param {string} params.code - Unique list code per tenant.
     * @param {string} params.name - 
     * @param {string} params.channelId - Scope: only this channel.
     * @param {string} params.contactId - Scope: only this contact — beats every other scope.
     * @param {string} params.currency - ISO 4217 code (default EUR) — resolution only considers lists matching the requested currency.
     * @param {string} params.description - 
     * @param {boolean} params.isDefault - Default lists resolve last within their group.
     * @param {object} params.labels - Localised names ({de, en, …}).
     * @param {string} params.marketId - Scope: only this market.
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.organizationId - Scope: only this organization.
     * @param {number} params.priority - Tie-breaker within a specificity group (higher wins, default 0).
     * @param {PriceListStatus} params.status - Default 'active' — only active lists resolve.
     * @param {boolean} params.taxIncluded - Gross (true) or net (false, default) prices.
     * @param {string} params.validFrom - Validity window start.
     * @param {string} params.validUntil - Validity window end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     */
    pricesListsCreate(params: { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string }): Promise<Models.PriceList>;
    /**
     *
     * @param {string} code - Unique list code per tenant.
     * @param {string} name - 
     * @param {string} channelId - Scope: only this channel.
     * @param {string} contactId - Scope: only this contact — beats every other scope.
     * @param {string} currency - ISO 4217 code (default EUR) — resolution only considers lists matching the requested currency.
     * @param {string} description - 
     * @param {boolean} isDefault - Default lists resolve last within their group.
     * @param {object} labels - Localised names ({de, en, …}).
     * @param {string} marketId - Scope: only this market.
     * @param {object} metadata - Free-form metadata.
     * @param {string} organizationId - Scope: only this organization.
     * @param {number} priority - Tie-breaker within a specificity group (higher wins, default 0).
     * @param {PriceListStatus} status - Default 'active' — only active lists resolve.
     * @param {boolean} taxIncluded - Gross (true) or net (false, default) prices.
     * @param {string} validFrom - Validity window start.
     * @param {string} validUntil - Validity window end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsCreate(code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string): Promise<Models.PriceList>;
    pricesListsCreate(
        paramsOrFirst: { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (object)?, (string)?, (object)?, (string)?, (number)?, (PriceListStatus)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.PriceList> {
        let params: { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                channelId: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                description: rest[4] as string,
                isDefault: rest[5] as boolean,
                labels: rest[6] as object,
                marketId: rest[7] as string,
                metadata: rest[8] as object,
                organizationId: rest[9] as string,
                priority: rest[10] as number,
                status: rest[11] as PriceListStatus,
                taxIncluded: rest[12] as boolean,
                validFrom: rest[13] as string,
                validUntil: rest[14] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const description = params.description;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const marketId = params.marketId;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const priority = params.priority;
        const status = params.status;
        const taxIncluded = params.taxIncluded;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/prices/lists';
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
    pricesListsDefaults(): Promise<{}> {

        const apiPath = '/v1/prices/lists/defaults';
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
    pricesListsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsDelete(id: string): Promise<{}>;
    pricesListsDelete(
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PriceList>}
     */
    pricesListsGet(params: { id: string }): Promise<Models.PriceList>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsGet(id: string): Promise<Models.PriceList>;
    pricesListsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PriceList> {
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * @param {string} params.channelId - Scope: only this channel.
     * @param {string} params.code - Unique list code per tenant.
     * @param {string} params.contactId - Scope: only this contact — beats every other scope.
     * @param {string} params.currency - ISO 4217 code (default EUR) — resolution only considers lists matching the requested currency.
     * @param {string} params.description - 
     * @param {boolean} params.isDefault - Default lists resolve last within their group.
     * @param {object} params.labels - Localised names ({de, en, …}).
     * @param {string} params.marketId - Scope: only this market.
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - 
     * @param {string} params.organizationId - Scope: only this organization.
     * @param {number} params.priority - Tie-breaker within a specificity group (higher wins, default 0).
     * @param {PriceListStatus} params.status - Default 'active' — only active lists resolve.
     * @param {boolean} params.taxIncluded - Gross (true) or net (false, default) prices.
     * @param {string} params.validFrom - Validity window start.
     * @param {string} params.validUntil - Validity window end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     */
    pricesListsUpdate(params: { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, name?: string, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string }): Promise<Models.PriceList>;
    /**
     *
     * @param {string} id - 
     * @param {string} channelId - Scope: only this channel.
     * @param {string} code - Unique list code per tenant.
     * @param {string} contactId - Scope: only this contact — beats every other scope.
     * @param {string} currency - ISO 4217 code (default EUR) — resolution only considers lists matching the requested currency.
     * @param {string} description - 
     * @param {boolean} isDefault - Default lists resolve last within their group.
     * @param {object} labels - Localised names ({de, en, …}).
     * @param {string} marketId - Scope: only this market.
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - 
     * @param {string} organizationId - Scope: only this organization.
     * @param {number} priority - Tie-breaker within a specificity group (higher wins, default 0).
     * @param {PriceListStatus} status - Default 'active' — only active lists resolve.
     * @param {boolean} taxIncluded - Gross (true) or net (false, default) prices.
     * @param {string} validFrom - Validity window start.
     * @param {string} validUntil - Validity window end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsUpdate(id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, name?: string, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string): Promise<Models.PriceList>;
    pricesListsUpdate(
        paramsOrFirst: { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, name?: string, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (object)?, (string)?, (object)?, (string)?, (string)?, (number)?, (PriceListStatus)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.PriceList> {
        let params: { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, name?: string, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, marketId?: string, metadata?: object, name?: string, organizationId?: string, priority?: number, status?: PriceListStatus, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channelId: rest[0] as string,
                code: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                description: rest[4] as string,
                isDefault: rest[5] as boolean,
                labels: rest[6] as object,
                marketId: rest[7] as string,
                metadata: rest[8] as object,
                name: rest[9] as string,
                organizationId: rest[10] as string,
                priority: rest[11] as number,
                status: rest[12] as PriceListStatus,
                taxIncluded: rest[13] as boolean,
                validFrom: rest[14] as string,
                validUntil: rest[15] as string            
            };
        }
        
        const id = params.id;
        const channelId = params.channelId;
        const code = params.code;
        const contactId = params.contactId;
        const currency = params.currency;
        const description = params.description;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const marketId = params.marketId;
        const metadata = params.metadata;
        const name = params.name;
        const organizationId = params.organizationId;
        const priority = params.priority;
        const status = params.status;
        const taxIncluded = params.taxIncluded;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * @param {string} params.listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesList(params: { listId: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesList(listId: string): Promise<{}>;
    pricesEntriesList(
        paramsOrFirst: { listId: string } | string    
    ): Promise<{}> {
        let params: { listId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string };
        } else {
            params = {
                listId: paramsOrFirst as string            
            };
        }
        
        const listId = params.listId;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{list_id}', listId);
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
     * @param {string} params.listId - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {PriceEntryType} params.priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it stops resolution and answers "price on request".
     * @param {string} params.productId - Priced product.
     * @param {number} params.quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity (default 1).
     * @param {string} params.sku - Priced SKU (alternative to product_id).
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - Per-unit price (default 0).
     * @param {string} params.validFrom - Per-entry validity start (promo prices).
     * @param {string} params.validUntil - Per-entry validity end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     */
    pricesEntriesCreate(params: { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string }): Promise<Models.PriceEntry>;
    /**
     *
     * @param {string} listId - 
     * @param {object} metadata - Free-form metadata.
     * @param {PriceEntryType} priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it stops resolution and answers "price on request".
     * @param {string} productId - Priced product.
     * @param {number} quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity (default 1).
     * @param {string} sku - Priced SKU (alternative to product_id).
     * @param {string} unit - 
     * @param {number} unitPrice - Per-unit price (default 0).
     * @param {string} validFrom - Per-entry validity start (promo prices).
     * @param {string} validUntil - Per-entry validity end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesCreate(listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string): Promise<Models.PriceEntry>;
    pricesEntriesCreate(
        paramsOrFirst: { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string } | string,
        ...rest: [(object)?, (PriceEntryType)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PriceEntry> {
        let params: { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                metadata: rest[0] as object,
                priceType: rest[1] as PriceEntryType,
                productId: rest[2] as string,
                quantityMin: rest[3] as number,
                sku: rest[4] as string,
                unit: rest[5] as string,
                unitPrice: rest[6] as number,
                validFrom: rest[7] as string,
                validUntil: rest[8] as string            
            };
        }
        
        const listId = params.listId;
        const metadata = params.metadata;
        const priceType = params.priceType;
        const productId = params.productId;
        const quantityMin = params.quantityMin;
        const sku = params.sku;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof priceType !== 'undefined') {
            apiPayload['price_type'] = priceType;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantityMin !== 'undefined') {
            apiPayload['quantity_min'] = quantityMin;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * @param {string} params.listId - 
     * @param {Models.PriceEntryReplaceItem[]} params.entries - The complete new entry set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesReplace(params: { listId: string, entries: Models.PriceEntryReplaceItem[] }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @param {Models.PriceEntryReplaceItem[]} entries - The complete new entry set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesReplace(listId: string, entries: Models.PriceEntryReplaceItem[]): Promise<{}>;
    pricesEntriesReplace(
        paramsOrFirst: { listId: string, entries: Models.PriceEntryReplaceItem[] } | string,
        ...rest: [(Models.PriceEntryReplaceItem[])?]    
    ): Promise<{}> {
        let params: { listId: string, entries: Models.PriceEntryReplaceItem[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, entries: Models.PriceEntryReplaceItem[] };
        } else {
            params = {
                listId: paramsOrFirst as string,
                entries: rest[0] as Models.PriceEntryReplaceItem[]            
            };
        }
        
        const listId = params.listId;
        const entries = params.entries;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof entries === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entries"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof entries !== 'undefined') {
            apiPayload['entries'] = Client.toWireKeys(entries, {"priceType":{"wire":"price_type","children":null},"productId":{"wire":"product_id","children":null},"quantityMin":{"wire":"quantity_min","children":null},"unitPrice":{"wire":"unit_price","children":null},"validFrom":{"wire":"valid_from","children":null},"validUntil":{"wire":"valid_until","children":null}});
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
     * @param {string} params.listId - 
     * @param {Models.PriceEntryReplaceItem[]} params.entries - The complete new entry set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesBulk(params: { listId: string, entries: Models.PriceEntryReplaceItem[] }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @param {Models.PriceEntryReplaceItem[]} entries - The complete new entry set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesBulk(listId: string, entries: Models.PriceEntryReplaceItem[]): Promise<{}>;
    pricesEntriesBulk(
        paramsOrFirst: { listId: string, entries: Models.PriceEntryReplaceItem[] } | string,
        ...rest: [(Models.PriceEntryReplaceItem[])?]    
    ): Promise<{}> {
        let params: { listId: string, entries: Models.PriceEntryReplaceItem[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, entries: Models.PriceEntryReplaceItem[] };
        } else {
            params = {
                listId: paramsOrFirst as string,
                entries: rest[0] as Models.PriceEntryReplaceItem[]            
            };
        }
        
        const listId = params.listId;
        const entries = params.entries;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof entries === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entries"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/bulk'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof entries !== 'undefined') {
            apiPayload['entries'] = Client.toWireKeys(entries, {"priceType":{"wire":"price_type","children":null},"productId":{"wire":"product_id","children":null},"quantityMin":{"wire":"quantity_min","children":null},"unitPrice":{"wire":"unit_price","children":null},"validFrom":{"wire":"valid_from","children":null},"validUntil":{"wire":"valid_until","children":null}});
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesEntriesDelete(params: { listId: string, id: string }): Promise<{}>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesDelete(listId: string, id: string): Promise<{}>;
    pricesEntriesDelete(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     */
    pricesEntriesGet(params: { listId: string, id: string }): Promise<Models.PriceEntry>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesGet(listId: string, id: string): Promise<Models.PriceEntry>;
    pricesEntriesGet(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PriceEntry> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * @param {string} params.listId - 
     * @param {string} params.id - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {PriceEntryType} params.priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it stops resolution and answers "price on request".
     * @param {string} params.productId - Priced product.
     * @param {number} params.quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity (default 1).
     * @param {string} params.sku - Priced SKU (alternative to product_id).
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - Per-unit price (default 0).
     * @param {string} params.validFrom - Per-entry validity start (promo prices).
     * @param {string} params.validUntil - Per-entry validity end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     */
    pricesEntriesUpdate(params: { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string }): Promise<Models.PriceEntry>;
    /**
     *
     * @param {string} listId - 
     * @param {string} id - 
     * @param {object} metadata - Free-form metadata.
     * @param {PriceEntryType} priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it stops resolution and answers "price on request".
     * @param {string} productId - Priced product.
     * @param {number} quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity (default 1).
     * @param {string} sku - Priced SKU (alternative to product_id).
     * @param {string} unit - 
     * @param {number} unitPrice - Per-unit price (default 0).
     * @param {string} validFrom - Per-entry validity start (promo prices).
     * @param {string} validUntil - Per-entry validity end.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesUpdate(listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string): Promise<Models.PriceEntry>;
    pricesEntriesUpdate(
        paramsOrFirst: { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string } | string,
        ...rest: [(string)?, (object)?, (PriceEntryType)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PriceEntry> {
        let params: { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string,
                metadata: rest[1] as object,
                priceType: rest[2] as PriceEntryType,
                productId: rest[3] as string,
                quantityMin: rest[4] as number,
                sku: rest[5] as string,
                unit: rest[6] as string,
                unitPrice: rest[7] as number,
                validFrom: rest[8] as string,
                validUntil: rest[9] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;
        const metadata = params.metadata;
        const priceType = params.priceType;
        const productId = params.productId;
        const quantityMin = params.quantityMin;
        const sku = params.sku;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{list_id}', listId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof priceType !== 'undefined') {
            apiPayload['price_type'] = priceType;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantityMin !== 'undefined') {
            apiPayload['quantity_min'] = quantityMin;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * @param {Models.PriceResolveItem[]} params.items - Items to price (at most 200 per call).
     * @param {string} params.at - Point in time for validity windows (ISO 8601 timestamp, default now).
     * @param {string} params.channelId - Buyer context: channel.
     * @param {string} params.contactId - Buyer context: contact — most specific scope.
     * @param {string} params.currency - ISO 4217 code (default EUR) — only lists in this currency resolve.
     * @param {string} params.marketId - Buyer context: market.
     * @param {string} params.organizationId - Buyer context: organization.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pricesResolve(params: { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string }): Promise<{}>;
    /**
     *
     * @param {Models.PriceResolveItem[]} items - Items to price (at most 200 per call).
     * @param {string} at - Point in time for validity windows (ISO 8601 timestamp, default now).
     * @param {string} channelId - Buyer context: channel.
     * @param {string} contactId - Buyer context: contact — most specific scope.
     * @param {string} currency - ISO 4217 code (default EUR) — only lists in this currency resolve.
     * @param {string} marketId - Buyer context: market.
     * @param {string} organizationId - Buyer context: organization.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesResolve(items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string): Promise<{}>;
    pricesResolve(
        paramsOrFirst: { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string } | Models.PriceResolveItem[],
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'at' in paramsOrFirst || 'channelId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'marketId' in paramsOrFirst || 'organizationId' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.PriceResolveItem[],
                at: rest[0] as string,
                channelId: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                marketId: rest[4] as string,
                organizationId: rest[5] as string            
            };
        }
        
        const items = params.items;
        const at = params.at;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const marketId = params.marketId;
        const organizationId = params.organizationId;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/prices/resolve';
        const apiPayload: Payload = {};
        if (typeof at !== 'undefined') {
            apiPayload['at'] = at;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null}});
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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
