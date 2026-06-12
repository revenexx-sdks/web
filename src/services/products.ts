import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Products {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsList(): Promise<{}> {

        const apiPath = '/v1/products';
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
     * @param {string} params.sku - 
     * @param {object} params.attributeValues - 
     * @param {object} params.completeness - 
     * @param {string} params.deletedAt - 
     * @param {boolean} params.enabled - 
     * @param {string} params.familyId - 
     * @param {string} params.familyVariantId - 
     * @param {string} params.kind - 
     * @param {string} params.parentId - 
     * @param {object} params.quantifiedAssociations - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Products>}
     */
    productsCreate(params: { sku: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object }): Promise<Models.Products>;
    /**
     *
     * @param {string} sku - 
     * @param {object} attributeValues - 
     * @param {object} completeness - 
     * @param {string} deletedAt - 
     * @param {boolean} enabled - 
     * @param {string} familyId - 
     * @param {string} familyVariantId - 
     * @param {string} kind - 
     * @param {string} parentId - 
     * @param {object} quantifiedAssociations - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Products>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsCreate(sku: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object): Promise<Models.Products>;
    productsCreate(
        paramsOrFirst: { sku: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object } | string,
        ...rest: [(object)?, (object)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (object)?]    
    ): Promise<Models.Products> {
        let params: { sku: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { sku: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object };
        } else {
            params = {
                sku: paramsOrFirst as string,
                attributeValues: rest[0] as object,
                completeness: rest[1] as object,
                deletedAt: rest[2] as string,
                enabled: rest[3] as boolean,
                familyId: rest[4] as string,
                familyVariantId: rest[5] as string,
                kind: rest[6] as string,
                parentId: rest[7] as string,
                quantifiedAssociations: rest[8] as object            
            };
        }
        
        const sku = params.sku;
        const attributeValues = params.attributeValues;
        const completeness = params.completeness;
        const deletedAt = params.deletedAt;
        const enabled = params.enabled;
        const familyId = params.familyId;
        const familyVariantId = params.familyVariantId;
        const kind = params.kind;
        const parentId = params.parentId;
        const quantifiedAssociations = params.quantifiedAssociations;

        if (typeof sku === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sku"');
        }

        const apiPath = '/v1/products';
        const apiPayload: Payload = {};
        if (typeof attributeValues !== 'undefined') {
            apiPayload['attribute_values'] = attributeValues;
        }
        if (typeof completeness !== 'undefined') {
            apiPayload['completeness'] = completeness;
        }
        if (typeof deletedAt !== 'undefined') {
            apiPayload['deleted_at'] = deletedAt;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof familyId !== 'undefined') {
            apiPayload['family_id'] = familyId;
        }
        if (typeof familyVariantId !== 'undefined') {
            apiPayload['family_variant_id'] = familyVariantId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof quantifiedAssociations !== 'undefined') {
            apiPayload['quantified_associations'] = quantifiedAssociations;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
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
    productsAssetFamiliesList(): Promise<{}> {

        const apiPath = '/v1/products/asset_families';
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {object} params.namingConvention - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssetFamilies>}
     */
    productsAssetFamiliesCreate(params: { code: string, labels?: object, namingConvention?: object }): Promise<Models.AssetFamilies>;
    /**
     *
     * @param {string} code - 
     * @param {object} labels - 
     * @param {object} namingConvention - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssetFamilies>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetFamiliesCreate(code: string, labels?: object, namingConvention?: object): Promise<Models.AssetFamilies>;
    productsAssetFamiliesCreate(
        paramsOrFirst: { code: string, labels?: object, namingConvention?: object } | string,
        ...rest: [(object)?, (object)?]    
    ): Promise<Models.AssetFamilies> {
        let params: { code: string, labels?: object, namingConvention?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, labels?: object, namingConvention?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                labels: rest[0] as object,
                namingConvention: rest[1] as object            
            };
        }
        
        const code = params.code;
        const labels = params.labels;
        const namingConvention = params.namingConvention;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/asset_families';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof namingConvention !== 'undefined') {
            apiPayload['naming_convention'] = namingConvention;
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
     * @returns {Promise<{}>}
     */
    productsAssetFamiliesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetFamiliesDelete(id: string): Promise<{}>;
    productsAssetFamiliesDelete(
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

        const apiPath = '/v1/products/asset_families/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AssetFamilies>}
     */
    productsAssetFamiliesGet(params: { id: string }): Promise<Models.AssetFamilies>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssetFamilies>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetFamiliesGet(id: string): Promise<Models.AssetFamilies>;
    productsAssetFamiliesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AssetFamilies> {
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

        const apiPath = '/v1/products/asset_families/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {object} params.namingConvention - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssetFamilies>}
     */
    productsAssetFamiliesUpdate(params: { id: string, code?: string, labels?: object, namingConvention?: object }): Promise<Models.AssetFamilies>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {object} namingConvention - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssetFamilies>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetFamiliesUpdate(id: string, code?: string, labels?: object, namingConvention?: object): Promise<Models.AssetFamilies>;
    productsAssetFamiliesUpdate(
        paramsOrFirst: { id: string, code?: string, labels?: object, namingConvention?: object } | string,
        ...rest: [(string)?, (object)?, (object)?]    
    ): Promise<Models.AssetFamilies> {
        let params: { id: string, code?: string, labels?: object, namingConvention?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, labels?: object, namingConvention?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                labels: rest[1] as object,
                namingConvention: rest[2] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const labels = params.labels;
        const namingConvention = params.namingConvention;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/asset_families/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof namingConvention !== 'undefined') {
            apiPayload['naming_convention'] = namingConvention;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsAssetsList(): Promise<{}> {

        const apiPath = '/v1/products/assets';
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
     * @param {string} params.assetFamilyId - 
     * @param {string} params.code - 
     * @param {object} params.attributeValues - 
     * @param {string} params.mediaUuid - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Assets>}
     */
    productsAssetsCreate(params: { assetFamilyId: string, code: string, attributeValues?: object, mediaUuid?: string }): Promise<Models.Assets>;
    /**
     *
     * @param {string} assetFamilyId - 
     * @param {string} code - 
     * @param {object} attributeValues - 
     * @param {string} mediaUuid - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Assets>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetsCreate(assetFamilyId: string, code: string, attributeValues?: object, mediaUuid?: string): Promise<Models.Assets>;
    productsAssetsCreate(
        paramsOrFirst: { assetFamilyId: string, code: string, attributeValues?: object, mediaUuid?: string } | string,
        ...rest: [(string)?, (object)?, (string)?]    
    ): Promise<Models.Assets> {
        let params: { assetFamilyId: string, code: string, attributeValues?: object, mediaUuid?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { assetFamilyId: string, code: string, attributeValues?: object, mediaUuid?: string };
        } else {
            params = {
                assetFamilyId: paramsOrFirst as string,
                code: rest[0] as string,
                attributeValues: rest[1] as object,
                mediaUuid: rest[2] as string            
            };
        }
        
        const assetFamilyId = params.assetFamilyId;
        const code = params.code;
        const attributeValues = params.attributeValues;
        const mediaUuid = params.mediaUuid;

        if (typeof assetFamilyId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "assetFamilyId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/assets';
        const apiPayload: Payload = {};
        if (typeof assetFamilyId !== 'undefined') {
            apiPayload['asset_family_id'] = assetFamilyId;
        }
        if (typeof attributeValues !== 'undefined') {
            apiPayload['attribute_values'] = attributeValues;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof mediaUuid !== 'undefined') {
            apiPayload['media_uuid'] = mediaUuid;
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
     * @returns {Promise<{}>}
     */
    productsAssetsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetsDelete(id: string): Promise<{}>;
    productsAssetsDelete(
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

        const apiPath = '/v1/products/assets/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Assets>}
     */
    productsAssetsGet(params: { id: string }): Promise<Models.Assets>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Assets>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetsGet(id: string): Promise<Models.Assets>;
    productsAssetsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Assets> {
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

        const apiPath = '/v1/products/assets/{id}'.replace('{id}', id);
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
     * @param {string} params.assetFamilyId - 
     * @param {object} params.attributeValues - 
     * @param {string} params.code - 
     * @param {string} params.mediaUuid - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Assets>}
     */
    productsAssetsUpdate(params: { id: string, assetFamilyId?: string, attributeValues?: object, code?: string, mediaUuid?: string }): Promise<Models.Assets>;
    /**
     *
     * @param {string} id - 
     * @param {string} assetFamilyId - 
     * @param {object} attributeValues - 
     * @param {string} code - 
     * @param {string} mediaUuid - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Assets>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssetsUpdate(id: string, assetFamilyId?: string, attributeValues?: object, code?: string, mediaUuid?: string): Promise<Models.Assets>;
    productsAssetsUpdate(
        paramsOrFirst: { id: string, assetFamilyId?: string, attributeValues?: object, code?: string, mediaUuid?: string } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.Assets> {
        let params: { id: string, assetFamilyId?: string, attributeValues?: object, code?: string, mediaUuid?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, assetFamilyId?: string, attributeValues?: object, code?: string, mediaUuid?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                assetFamilyId: rest[0] as string,
                attributeValues: rest[1] as object,
                code: rest[2] as string,
                mediaUuid: rest[3] as string            
            };
        }
        
        const id = params.id;
        const assetFamilyId = params.assetFamilyId;
        const attributeValues = params.attributeValues;
        const code = params.code;
        const mediaUuid = params.mediaUuid;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/assets/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof assetFamilyId !== 'undefined') {
            apiPayload['asset_family_id'] = assetFamilyId;
        }
        if (typeof attributeValues !== 'undefined') {
            apiPayload['attribute_values'] = attributeValues;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof mediaUuid !== 'undefined') {
            apiPayload['media_uuid'] = mediaUuid;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsAssociationTypesList(): Promise<{}> {

        const apiPath = '/v1/products/association_types';
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
     * @param {string} params.code - 
     * @param {boolean} params.isQuantified - 
     * @param {boolean} params.isTwoWay - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssociationTypes>}
     */
    productsAssociationTypesCreate(params: { code: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object }): Promise<Models.AssociationTypes>;
    /**
     *
     * @param {string} code - 
     * @param {boolean} isQuantified - 
     * @param {boolean} isTwoWay - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssociationTypes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssociationTypesCreate(code: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object): Promise<Models.AssociationTypes>;
    productsAssociationTypesCreate(
        paramsOrFirst: { code: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object } | string,
        ...rest: [(boolean)?, (boolean)?, (object)?]    
    ): Promise<Models.AssociationTypes> {
        let params: { code: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                isQuantified: rest[0] as boolean,
                isTwoWay: rest[1] as boolean,
                labels: rest[2] as object            
            };
        }
        
        const code = params.code;
        const isQuantified = params.isQuantified;
        const isTwoWay = params.isTwoWay;
        const labels = params.labels;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/association_types';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isQuantified !== 'undefined') {
            apiPayload['is_quantified'] = isQuantified;
        }
        if (typeof isTwoWay !== 'undefined') {
            apiPayload['is_two_way'] = isTwoWay;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @returns {Promise<{}>}
     */
    productsAssociationTypesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssociationTypesDelete(id: string): Promise<{}>;
    productsAssociationTypesDelete(
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

        const apiPath = '/v1/products/association_types/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AssociationTypes>}
     */
    productsAssociationTypesGet(params: { id: string }): Promise<Models.AssociationTypes>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssociationTypes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssociationTypesGet(id: string): Promise<Models.AssociationTypes>;
    productsAssociationTypesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AssociationTypes> {
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

        const apiPath = '/v1/products/association_types/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {boolean} params.isQuantified - 
     * @param {boolean} params.isTwoWay - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssociationTypes>}
     */
    productsAssociationTypesUpdate(params: { id: string, code?: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object }): Promise<Models.AssociationTypes>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {boolean} isQuantified - 
     * @param {boolean} isTwoWay - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AssociationTypes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAssociationTypesUpdate(id: string, code?: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object): Promise<Models.AssociationTypes>;
    productsAssociationTypesUpdate(
        paramsOrFirst: { id: string, code?: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object } | string,
        ...rest: [(string)?, (boolean)?, (boolean)?, (object)?]    
    ): Promise<Models.AssociationTypes> {
        let params: { id: string, code?: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, isQuantified?: boolean, isTwoWay?: boolean, labels?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                isQuantified: rest[1] as boolean,
                isTwoWay: rest[2] as boolean,
                labels: rest[3] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const isQuantified = params.isQuantified;
        const isTwoWay = params.isTwoWay;
        const labels = params.labels;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/association_types/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isQuantified !== 'undefined') {
            apiPayload['is_quantified'] = isQuantified;
        }
        if (typeof isTwoWay !== 'undefined') {
            apiPayload['is_two_way'] = isTwoWay;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsAttributeGroupsList(): Promise<{}> {

        const apiPath = '/v1/products/attribute_groups';
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {number} params.position - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeGroups>}
     */
    productsAttributeGroupsCreate(params: { code: string, labels?: object, position?: number }): Promise<Models.AttributeGroups>;
    /**
     *
     * @param {string} code - 
     * @param {object} labels - 
     * @param {number} position - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeGroups>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeGroupsCreate(code: string, labels?: object, position?: number): Promise<Models.AttributeGroups>;
    productsAttributeGroupsCreate(
        paramsOrFirst: { code: string, labels?: object, position?: number } | string,
        ...rest: [(object)?, (number)?]    
    ): Promise<Models.AttributeGroups> {
        let params: { code: string, labels?: object, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, labels?: object, position?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                labels: rest[0] as object,
                position: rest[1] as number            
            };
        }
        
        const code = params.code;
        const labels = params.labels;
        const position = params.position;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/attribute_groups';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsAttributeGroupsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeGroupsDelete(id: string): Promise<{}>;
    productsAttributeGroupsDelete(
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

        const apiPath = '/v1/products/attribute_groups/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AttributeGroups>}
     */
    productsAttributeGroupsGet(params: { id: string }): Promise<Models.AttributeGroups>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeGroups>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeGroupsGet(id: string): Promise<Models.AttributeGroups>;
    productsAttributeGroupsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AttributeGroups> {
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

        const apiPath = '/v1/products/attribute_groups/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {number} params.position - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeGroups>}
     */
    productsAttributeGroupsUpdate(params: { id: string, code?: string, labels?: object, position?: number }): Promise<Models.AttributeGroups>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {number} position - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeGroups>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeGroupsUpdate(id: string, code?: string, labels?: object, position?: number): Promise<Models.AttributeGroups>;
    productsAttributeGroupsUpdate(
        paramsOrFirst: { id: string, code?: string, labels?: object, position?: number } | string,
        ...rest: [(string)?, (object)?, (number)?]    
    ): Promise<Models.AttributeGroups> {
        let params: { id: string, code?: string, labels?: object, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, labels?: object, position?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                labels: rest[1] as object,
                position: rest[2] as number            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const labels = params.labels;
        const position = params.position;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/attribute_groups/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsAttributeOptionsList(): Promise<{}> {

        const apiPath = '/v1/products/attribute_options';
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
     * @param {string} params.attributeId - 
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {number} params.position - 
     * @param {object} params.swatch - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeOptions>}
     */
    productsAttributeOptionsCreate(params: { attributeId: string, code: string, labels?: object, position?: number, swatch?: object }): Promise<Models.AttributeOptions>;
    /**
     *
     * @param {string} attributeId - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {number} position - 
     * @param {object} swatch - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeOptions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeOptionsCreate(attributeId: string, code: string, labels?: object, position?: number, swatch?: object): Promise<Models.AttributeOptions>;
    productsAttributeOptionsCreate(
        paramsOrFirst: { attributeId: string, code: string, labels?: object, position?: number, swatch?: object } | string,
        ...rest: [(string)?, (object)?, (number)?, (object)?]    
    ): Promise<Models.AttributeOptions> {
        let params: { attributeId: string, code: string, labels?: object, position?: number, swatch?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { attributeId: string, code: string, labels?: object, position?: number, swatch?: object };
        } else {
            params = {
                attributeId: paramsOrFirst as string,
                code: rest[0] as string,
                labels: rest[1] as object,
                position: rest[2] as number,
                swatch: rest[3] as object            
            };
        }
        
        const attributeId = params.attributeId;
        const code = params.code;
        const labels = params.labels;
        const position = params.position;
        const swatch = params.swatch;

        if (typeof attributeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "attributeId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/attribute_options';
        const apiPayload: Payload = {};
        if (typeof attributeId !== 'undefined') {
            apiPayload['attribute_id'] = attributeId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof swatch !== 'undefined') {
            apiPayload['swatch'] = swatch;
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
     * @returns {Promise<{}>}
     */
    productsAttributeOptionsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeOptionsDelete(id: string): Promise<{}>;
    productsAttributeOptionsDelete(
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

        const apiPath = '/v1/products/attribute_options/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AttributeOptions>}
     */
    productsAttributeOptionsGet(params: { id: string }): Promise<Models.AttributeOptions>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeOptions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeOptionsGet(id: string): Promise<Models.AttributeOptions>;
    productsAttributeOptionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AttributeOptions> {
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

        const apiPath = '/v1/products/attribute_options/{id}'.replace('{id}', id);
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
     * @param {string} params.attributeId - 
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {number} params.position - 
     * @param {object} params.swatch - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeOptions>}
     */
    productsAttributeOptionsUpdate(params: { id: string, attributeId?: string, code?: string, labels?: object, position?: number, swatch?: object }): Promise<Models.AttributeOptions>;
    /**
     *
     * @param {string} id - 
     * @param {string} attributeId - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {number} position - 
     * @param {object} swatch - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AttributeOptions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributeOptionsUpdate(id: string, attributeId?: string, code?: string, labels?: object, position?: number, swatch?: object): Promise<Models.AttributeOptions>;
    productsAttributeOptionsUpdate(
        paramsOrFirst: { id: string, attributeId?: string, code?: string, labels?: object, position?: number, swatch?: object } | string,
        ...rest: [(string)?, (string)?, (object)?, (number)?, (object)?]    
    ): Promise<Models.AttributeOptions> {
        let params: { id: string, attributeId?: string, code?: string, labels?: object, position?: number, swatch?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, attributeId?: string, code?: string, labels?: object, position?: number, swatch?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                attributeId: rest[0] as string,
                code: rest[1] as string,
                labels: rest[2] as object,
                position: rest[3] as number,
                swatch: rest[4] as object            
            };
        }
        
        const id = params.id;
        const attributeId = params.attributeId;
        const code = params.code;
        const labels = params.labels;
        const position = params.position;
        const swatch = params.swatch;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/attribute_options/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof attributeId !== 'undefined') {
            apiPayload['attribute_id'] = attributeId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof swatch !== 'undefined') {
            apiPayload['swatch'] = swatch;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsAttributesList(): Promise<{}> {

        const apiPath = '/v1/products/attributes';
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
     * @param {string} params.code - 
     * @param {string} params.type - 
     * @param {object} params.config - 
     * @param {string} params.entityRef - 
     * @param {string} params.entityType - 
     * @param {string} params.groupId - 
     * @param {boolean} params.isFilterable - 
     * @param {boolean} params.isUnique - 
     * @param {object} params.labels - 
     * @param {boolean} params.localizable - 
     * @param {number} params.position - 
     * @param {boolean} params.scopable - 
     * @param {boolean} params.usableInGrid - 
     * @param {object} params.validation - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Attributes>}
     */
    productsAttributesCreate(params: { code: string, type: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, usableInGrid?: boolean, validation?: object }): Promise<Models.Attributes>;
    /**
     *
     * @param {string} code - 
     * @param {string} type - 
     * @param {object} config - 
     * @param {string} entityRef - 
     * @param {string} entityType - 
     * @param {string} groupId - 
     * @param {boolean} isFilterable - 
     * @param {boolean} isUnique - 
     * @param {object} labels - 
     * @param {boolean} localizable - 
     * @param {number} position - 
     * @param {boolean} scopable - 
     * @param {boolean} usableInGrid - 
     * @param {object} validation - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Attributes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributesCreate(code: string, type: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, usableInGrid?: boolean, validation?: object): Promise<Models.Attributes>;
    productsAttributesCreate(
        paramsOrFirst: { code: string, type: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, usableInGrid?: boolean, validation?: object } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?, (object)?, (boolean)?, (number)?, (boolean)?, (boolean)?, (object)?]    
    ): Promise<Models.Attributes> {
        let params: { code: string, type: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, usableInGrid?: boolean, validation?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, type: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, usableInGrid?: boolean, validation?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                type: rest[0] as string,
                config: rest[1] as object,
                entityRef: rest[2] as string,
                entityType: rest[3] as string,
                groupId: rest[4] as string,
                isFilterable: rest[5] as boolean,
                isUnique: rest[6] as boolean,
                labels: rest[7] as object,
                localizable: rest[8] as boolean,
                position: rest[9] as number,
                scopable: rest[10] as boolean,
                usableInGrid: rest[11] as boolean,
                validation: rest[12] as object            
            };
        }
        
        const code = params.code;
        const type = params.type;
        const config = params.config;
        const entityRef = params.entityRef;
        const entityType = params.entityType;
        const groupId = params.groupId;
        const isFilterable = params.isFilterable;
        const isUnique = params.isUnique;
        const labels = params.labels;
        const localizable = params.localizable;
        const position = params.position;
        const scopable = params.scopable;
        const usableInGrid = params.usableInGrid;
        const validation = params.validation;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/products/attributes';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof config !== 'undefined') {
            apiPayload['config'] = config;
        }
        if (typeof entityRef !== 'undefined') {
            apiPayload['entity_ref'] = entityRef;
        }
        if (typeof entityType !== 'undefined') {
            apiPayload['entity_type'] = entityType;
        }
        if (typeof groupId !== 'undefined') {
            apiPayload['group_id'] = groupId;
        }
        if (typeof isFilterable !== 'undefined') {
            apiPayload['is_filterable'] = isFilterable;
        }
        if (typeof isUnique !== 'undefined') {
            apiPayload['is_unique'] = isUnique;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof localizable !== 'undefined') {
            apiPayload['localizable'] = localizable;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof scopable !== 'undefined') {
            apiPayload['scopable'] = scopable;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof usableInGrid !== 'undefined') {
            apiPayload['usable_in_grid'] = usableInGrid;
        }
        if (typeof validation !== 'undefined') {
            apiPayload['validation'] = validation;
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
     * @returns {Promise<{}>}
     */
    productsAttributesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributesDelete(id: string): Promise<{}>;
    productsAttributesDelete(
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

        const apiPath = '/v1/products/attributes/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Attributes>}
     */
    productsAttributesGet(params: { id: string }): Promise<Models.Attributes>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Attributes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributesGet(id: string): Promise<Models.Attributes>;
    productsAttributesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Attributes> {
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

        const apiPath = '/v1/products/attributes/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {object} params.config - 
     * @param {string} params.entityRef - 
     * @param {string} params.entityType - 
     * @param {string} params.groupId - 
     * @param {boolean} params.isFilterable - 
     * @param {boolean} params.isUnique - 
     * @param {object} params.labels - 
     * @param {boolean} params.localizable - 
     * @param {number} params.position - 
     * @param {boolean} params.scopable - 
     * @param {string} params.type - 
     * @param {boolean} params.usableInGrid - 
     * @param {object} params.validation - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Attributes>}
     */
    productsAttributesUpdate(params: { id: string, code?: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, type?: string, usableInGrid?: boolean, validation?: object }): Promise<Models.Attributes>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {object} config - 
     * @param {string} entityRef - 
     * @param {string} entityType - 
     * @param {string} groupId - 
     * @param {boolean} isFilterable - 
     * @param {boolean} isUnique - 
     * @param {object} labels - 
     * @param {boolean} localizable - 
     * @param {number} position - 
     * @param {boolean} scopable - 
     * @param {string} type - 
     * @param {boolean} usableInGrid - 
     * @param {object} validation - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Attributes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsAttributesUpdate(id: string, code?: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, type?: string, usableInGrid?: boolean, validation?: object): Promise<Models.Attributes>;
    productsAttributesUpdate(
        paramsOrFirst: { id: string, code?: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, type?: string, usableInGrid?: boolean, validation?: object } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?, (object)?, (boolean)?, (number)?, (boolean)?, (string)?, (boolean)?, (object)?]    
    ): Promise<Models.Attributes> {
        let params: { id: string, code?: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, type?: string, usableInGrid?: boolean, validation?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, config?: object, entityRef?: string, entityType?: string, groupId?: string, isFilterable?: boolean, isUnique?: boolean, labels?: object, localizable?: boolean, position?: number, scopable?: boolean, type?: string, usableInGrid?: boolean, validation?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                config: rest[1] as object,
                entityRef: rest[2] as string,
                entityType: rest[3] as string,
                groupId: rest[4] as string,
                isFilterable: rest[5] as boolean,
                isUnique: rest[6] as boolean,
                labels: rest[7] as object,
                localizable: rest[8] as boolean,
                position: rest[9] as number,
                scopable: rest[10] as boolean,
                type: rest[11] as string,
                usableInGrid: rest[12] as boolean,
                validation: rest[13] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const config = params.config;
        const entityRef = params.entityRef;
        const entityType = params.entityType;
        const groupId = params.groupId;
        const isFilterable = params.isFilterable;
        const isUnique = params.isUnique;
        const labels = params.labels;
        const localizable = params.localizable;
        const position = params.position;
        const scopable = params.scopable;
        const type = params.type;
        const usableInGrid = params.usableInGrid;
        const validation = params.validation;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/attributes/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof config !== 'undefined') {
            apiPayload['config'] = config;
        }
        if (typeof entityRef !== 'undefined') {
            apiPayload['entity_ref'] = entityRef;
        }
        if (typeof entityType !== 'undefined') {
            apiPayload['entity_type'] = entityType;
        }
        if (typeof groupId !== 'undefined') {
            apiPayload['group_id'] = groupId;
        }
        if (typeof isFilterable !== 'undefined') {
            apiPayload['is_filterable'] = isFilterable;
        }
        if (typeof isUnique !== 'undefined') {
            apiPayload['is_unique'] = isUnique;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof localizable !== 'undefined') {
            apiPayload['localizable'] = localizable;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof scopable !== 'undefined') {
            apiPayload['scopable'] = scopable;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof usableInGrid !== 'undefined') {
            apiPayload['usable_in_grid'] = usableInGrid;
        }
        if (typeof validation !== 'undefined') {
            apiPayload['validation'] = validation;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsCategoriesList(): Promise<{}> {

        const apiPath = '/v1/products/categories';
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {string} params.parentId - 
     * @param {string} params.xpath - 
     * @param {number} params.position - 
     * @param {object} params.values - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Categories>}
     */
    productsCategoriesCreate(params: { code: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object }): Promise<Models.Categories>;
    /**
     *
     * @param {string} code - 
     * @param {object} labels - 
     * @param {string} parentId - 
     * @param {string} xpath - 
     * @param {number} position - 
     * @param {object} values - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Categories>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsCategoriesCreate(code: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object): Promise<Models.Categories>;
    productsCategoriesCreate(
        paramsOrFirst: { code: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object } | string,
        ...rest: [(object)?, (string)?, (string)?, (number)?, (object)?]    
    ): Promise<Models.Categories> {
        let params: { code: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                labels: rest[0] as object,
                parentId: rest[1] as string,
                xpath: rest[2] as string,
                position: rest[3] as number,
                values: rest[4] as object            
            };
        }
        
        const code = params.code;
        const labels = params.labels;
        const parentId = params.parentId;
        const xpath = params.xpath;
        const position = params.position;
        const values = params.values;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/categories';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof xpath !== 'undefined') {
            apiPayload['path'] = xpath;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof values !== 'undefined') {
            apiPayload['values'] = values;
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
     * @returns {Promise<{}>}
     */
    productsCategoriesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsCategoriesDelete(id: string): Promise<{}>;
    productsCategoriesDelete(
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

        const apiPath = '/v1/products/categories/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Categories>}
     */
    productsCategoriesGet(params: { id: string }): Promise<Models.Categories>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Categories>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsCategoriesGet(id: string): Promise<Models.Categories>;
    productsCategoriesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Categories> {
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

        const apiPath = '/v1/products/categories/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {string} params.parentId - 
     * @param {string} params.xpath - 
     * @param {number} params.position - 
     * @param {object} params.values - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Categories>}
     */
    productsCategoriesUpdate(params: { id: string, code?: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object }): Promise<Models.Categories>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {string} parentId - 
     * @param {string} xpath - 
     * @param {number} position - 
     * @param {object} values - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Categories>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsCategoriesUpdate(id: string, code?: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object): Promise<Models.Categories>;
    productsCategoriesUpdate(
        paramsOrFirst: { id: string, code?: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?, (number)?, (object)?]    
    ): Promise<Models.Categories> {
        let params: { id: string, code?: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, labels?: object, parentId?: string, xpath?: string, position?: number, values?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                labels: rest[1] as object,
                parentId: rest[2] as string,
                xpath: rest[3] as string,
                position: rest[4] as number,
                values: rest[5] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const labels = params.labels;
        const parentId = params.parentId;
        const xpath = params.xpath;
        const position = params.position;
        const values = params.values;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/categories/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof xpath !== 'undefined') {
            apiPayload['path'] = xpath;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof values !== 'undefined') {
            apiPayload['values'] = values;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsFamiliesList(): Promise<{}> {

        const apiPath = '/v1/products/families';
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
     * @param {string} params.code - 
     * @param {string} params.imageAttribute - 
     * @param {string} params.labelAttribute - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Families>}
     */
    productsFamiliesCreate(params: { code: string, imageAttribute?: string, labelAttribute?: string, labels?: object }): Promise<Models.Families>;
    /**
     *
     * @param {string} code - 
     * @param {string} imageAttribute - 
     * @param {string} labelAttribute - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Families>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamiliesCreate(code: string, imageAttribute?: string, labelAttribute?: string, labels?: object): Promise<Models.Families>;
    productsFamiliesCreate(
        paramsOrFirst: { code: string, imageAttribute?: string, labelAttribute?: string, labels?: object } | string,
        ...rest: [(string)?, (string)?, (object)?]    
    ): Promise<Models.Families> {
        let params: { code: string, imageAttribute?: string, labelAttribute?: string, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, imageAttribute?: string, labelAttribute?: string, labels?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                imageAttribute: rest[0] as string,
                labelAttribute: rest[1] as string,
                labels: rest[2] as object            
            };
        }
        
        const code = params.code;
        const imageAttribute = params.imageAttribute;
        const labelAttribute = params.labelAttribute;
        const labels = params.labels;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/families';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof imageAttribute !== 'undefined') {
            apiPayload['image_attribute'] = imageAttribute;
        }
        if (typeof labelAttribute !== 'undefined') {
            apiPayload['label_attribute'] = labelAttribute;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @returns {Promise<{}>}
     */
    productsFamiliesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamiliesDelete(id: string): Promise<{}>;
    productsFamiliesDelete(
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

        const apiPath = '/v1/products/families/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Families>}
     */
    productsFamiliesGet(params: { id: string }): Promise<Models.Families>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Families>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamiliesGet(id: string): Promise<Models.Families>;
    productsFamiliesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Families> {
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

        const apiPath = '/v1/products/families/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {string} params.imageAttribute - 
     * @param {string} params.labelAttribute - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Families>}
     */
    productsFamiliesUpdate(params: { id: string, code?: string, imageAttribute?: string, labelAttribute?: string, labels?: object }): Promise<Models.Families>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {string} imageAttribute - 
     * @param {string} labelAttribute - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Families>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamiliesUpdate(id: string, code?: string, imageAttribute?: string, labelAttribute?: string, labels?: object): Promise<Models.Families>;
    productsFamiliesUpdate(
        paramsOrFirst: { id: string, code?: string, imageAttribute?: string, labelAttribute?: string, labels?: object } | string,
        ...rest: [(string)?, (string)?, (string)?, (object)?]    
    ): Promise<Models.Families> {
        let params: { id: string, code?: string, imageAttribute?: string, labelAttribute?: string, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, imageAttribute?: string, labelAttribute?: string, labels?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                imageAttribute: rest[1] as string,
                labelAttribute: rest[2] as string,
                labels: rest[3] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const imageAttribute = params.imageAttribute;
        const labelAttribute = params.labelAttribute;
        const labels = params.labels;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/families/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof imageAttribute !== 'undefined') {
            apiPayload['image_attribute'] = imageAttribute;
        }
        if (typeof labelAttribute !== 'undefined') {
            apiPayload['label_attribute'] = labelAttribute;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsFamilyAttributesList(): Promise<{}> {

        const apiPath = '/v1/products/family_attributes';
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
     * @param {string} params.attributeId - 
     * @param {string} params.familyId - 
     * @param {boolean} params.isRequired - 
     * @param {number} params.position - 
     * @param {object} params.requiredChannels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyAttributes>}
     */
    productsFamilyAttributesCreate(params: { attributeId: string, familyId: string, isRequired?: boolean, position?: number, requiredChannels?: object }): Promise<Models.FamilyAttributes>;
    /**
     *
     * @param {string} attributeId - 
     * @param {string} familyId - 
     * @param {boolean} isRequired - 
     * @param {number} position - 
     * @param {object} requiredChannels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyAttributes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyAttributesCreate(attributeId: string, familyId: string, isRequired?: boolean, position?: number, requiredChannels?: object): Promise<Models.FamilyAttributes>;
    productsFamilyAttributesCreate(
        paramsOrFirst: { attributeId: string, familyId: string, isRequired?: boolean, position?: number, requiredChannels?: object } | string,
        ...rest: [(string)?, (boolean)?, (number)?, (object)?]    
    ): Promise<Models.FamilyAttributes> {
        let params: { attributeId: string, familyId: string, isRequired?: boolean, position?: number, requiredChannels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { attributeId: string, familyId: string, isRequired?: boolean, position?: number, requiredChannels?: object };
        } else {
            params = {
                attributeId: paramsOrFirst as string,
                familyId: rest[0] as string,
                isRequired: rest[1] as boolean,
                position: rest[2] as number,
                requiredChannels: rest[3] as object            
            };
        }
        
        const attributeId = params.attributeId;
        const familyId = params.familyId;
        const isRequired = params.isRequired;
        const position = params.position;
        const requiredChannels = params.requiredChannels;

        if (typeof attributeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "attributeId"');
        }
        if (typeof familyId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "familyId"');
        }

        const apiPath = '/v1/products/family_attributes';
        const apiPayload: Payload = {};
        if (typeof attributeId !== 'undefined') {
            apiPayload['attribute_id'] = attributeId;
        }
        if (typeof familyId !== 'undefined') {
            apiPayload['family_id'] = familyId;
        }
        if (typeof isRequired !== 'undefined') {
            apiPayload['is_required'] = isRequired;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof requiredChannels !== 'undefined') {
            apiPayload['required_channels'] = requiredChannels;
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
     * @returns {Promise<{}>}
     */
    productsFamilyAttributesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyAttributesDelete(id: string): Promise<{}>;
    productsFamilyAttributesDelete(
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

        const apiPath = '/v1/products/family_attributes/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.FamilyAttributes>}
     */
    productsFamilyAttributesGet(params: { id: string }): Promise<Models.FamilyAttributes>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyAttributes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyAttributesGet(id: string): Promise<Models.FamilyAttributes>;
    productsFamilyAttributesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.FamilyAttributes> {
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

        const apiPath = '/v1/products/family_attributes/{id}'.replace('{id}', id);
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
     * @param {string} params.attributeId - 
     * @param {string} params.familyId - 
     * @param {boolean} params.isRequired - 
     * @param {number} params.position - 
     * @param {object} params.requiredChannels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyAttributes>}
     */
    productsFamilyAttributesUpdate(params: { id: string, attributeId?: string, familyId?: string, isRequired?: boolean, position?: number, requiredChannels?: object }): Promise<Models.FamilyAttributes>;
    /**
     *
     * @param {string} id - 
     * @param {string} attributeId - 
     * @param {string} familyId - 
     * @param {boolean} isRequired - 
     * @param {number} position - 
     * @param {object} requiredChannels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyAttributes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyAttributesUpdate(id: string, attributeId?: string, familyId?: string, isRequired?: boolean, position?: number, requiredChannels?: object): Promise<Models.FamilyAttributes>;
    productsFamilyAttributesUpdate(
        paramsOrFirst: { id: string, attributeId?: string, familyId?: string, isRequired?: boolean, position?: number, requiredChannels?: object } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (object)?]    
    ): Promise<Models.FamilyAttributes> {
        let params: { id: string, attributeId?: string, familyId?: string, isRequired?: boolean, position?: number, requiredChannels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, attributeId?: string, familyId?: string, isRequired?: boolean, position?: number, requiredChannels?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                attributeId: rest[0] as string,
                familyId: rest[1] as string,
                isRequired: rest[2] as boolean,
                position: rest[3] as number,
                requiredChannels: rest[4] as object            
            };
        }
        
        const id = params.id;
        const attributeId = params.attributeId;
        const familyId = params.familyId;
        const isRequired = params.isRequired;
        const position = params.position;
        const requiredChannels = params.requiredChannels;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/family_attributes/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof attributeId !== 'undefined') {
            apiPayload['attribute_id'] = attributeId;
        }
        if (typeof familyId !== 'undefined') {
            apiPayload['family_id'] = familyId;
        }
        if (typeof isRequired !== 'undefined') {
            apiPayload['is_required'] = isRequired;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof requiredChannels !== 'undefined') {
            apiPayload['required_channels'] = requiredChannels;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsFamilyVariantsList(): Promise<{}> {

        const apiPath = '/v1/products/family_variants';
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
     * @param {string} params.code - 
     * @param {string} params.familyId - 
     * @param {object} params.axes - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyVariants>}
     */
    productsFamilyVariantsCreate(params: { code: string, familyId: string, axes?: object, labels?: object }): Promise<Models.FamilyVariants>;
    /**
     *
     * @param {string} code - 
     * @param {string} familyId - 
     * @param {object} axes - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyVariants>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyVariantsCreate(code: string, familyId: string, axes?: object, labels?: object): Promise<Models.FamilyVariants>;
    productsFamilyVariantsCreate(
        paramsOrFirst: { code: string, familyId: string, axes?: object, labels?: object } | string,
        ...rest: [(string)?, (object)?, (object)?]    
    ): Promise<Models.FamilyVariants> {
        let params: { code: string, familyId: string, axes?: object, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, familyId: string, axes?: object, labels?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                familyId: rest[0] as string,
                axes: rest[1] as object,
                labels: rest[2] as object            
            };
        }
        
        const code = params.code;
        const familyId = params.familyId;
        const axes = params.axes;
        const labels = params.labels;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof familyId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "familyId"');
        }

        const apiPath = '/v1/products/family_variants';
        const apiPayload: Payload = {};
        if (typeof axes !== 'undefined') {
            apiPayload['axes'] = axes;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof familyId !== 'undefined') {
            apiPayload['family_id'] = familyId;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @returns {Promise<{}>}
     */
    productsFamilyVariantsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyVariantsDelete(id: string): Promise<{}>;
    productsFamilyVariantsDelete(
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

        const apiPath = '/v1/products/family_variants/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.FamilyVariants>}
     */
    productsFamilyVariantsGet(params: { id: string }): Promise<Models.FamilyVariants>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyVariants>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyVariantsGet(id: string): Promise<Models.FamilyVariants>;
    productsFamilyVariantsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.FamilyVariants> {
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

        const apiPath = '/v1/products/family_variants/{id}'.replace('{id}', id);
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
     * @param {object} params.axes - 
     * @param {string} params.code - 
     * @param {string} params.familyId - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyVariants>}
     */
    productsFamilyVariantsUpdate(params: { id: string, axes?: object, code?: string, familyId?: string, labels?: object }): Promise<Models.FamilyVariants>;
    /**
     *
     * @param {string} id - 
     * @param {object} axes - 
     * @param {string} code - 
     * @param {string} familyId - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.FamilyVariants>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsFamilyVariantsUpdate(id: string, axes?: object, code?: string, familyId?: string, labels?: object): Promise<Models.FamilyVariants>;
    productsFamilyVariantsUpdate(
        paramsOrFirst: { id: string, axes?: object, code?: string, familyId?: string, labels?: object } | string,
        ...rest: [(object)?, (string)?, (string)?, (object)?]    
    ): Promise<Models.FamilyVariants> {
        let params: { id: string, axes?: object, code?: string, familyId?: string, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, axes?: object, code?: string, familyId?: string, labels?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                axes: rest[0] as object,
                code: rest[1] as string,
                familyId: rest[2] as string,
                labels: rest[3] as object            
            };
        }
        
        const id = params.id;
        const axes = params.axes;
        const code = params.code;
        const familyId = params.familyId;
        const labels = params.labels;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/family_variants/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof axes !== 'undefined') {
            apiPayload['axes'] = axes;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof familyId !== 'undefined') {
            apiPayload['family_id'] = familyId;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsMeasurementFamiliesList(): Promise<{}> {

        const apiPath = '/v1/products/measurement_families';
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
     * @param {string} params.code - 
     * @param {string} params.standardUnit - 
     * @param {object} params.labels - 
     * @param {object} params.units - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MeasurementFamilies>}
     */
    productsMeasurementFamiliesCreate(params: { code: string, standardUnit: string, labels?: object, units?: object }): Promise<Models.MeasurementFamilies>;
    /**
     *
     * @param {string} code - 
     * @param {string} standardUnit - 
     * @param {object} labels - 
     * @param {object} units - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MeasurementFamilies>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsMeasurementFamiliesCreate(code: string, standardUnit: string, labels?: object, units?: object): Promise<Models.MeasurementFamilies>;
    productsMeasurementFamiliesCreate(
        paramsOrFirst: { code: string, standardUnit: string, labels?: object, units?: object } | string,
        ...rest: [(string)?, (object)?, (object)?]    
    ): Promise<Models.MeasurementFamilies> {
        let params: { code: string, standardUnit: string, labels?: object, units?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, standardUnit: string, labels?: object, units?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                standardUnit: rest[0] as string,
                labels: rest[1] as object,
                units: rest[2] as object            
            };
        }
        
        const code = params.code;
        const standardUnit = params.standardUnit;
        const labels = params.labels;
        const units = params.units;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof standardUnit === 'undefined') {
            throw new RevenexxException('Missing required parameter: "standardUnit"');
        }

        const apiPath = '/v1/products/measurement_families';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof standardUnit !== 'undefined') {
            apiPayload['standard_unit'] = standardUnit;
        }
        if (typeof units !== 'undefined') {
            apiPayload['units'] = units;
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
     * @returns {Promise<{}>}
     */
    productsMeasurementFamiliesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsMeasurementFamiliesDelete(id: string): Promise<{}>;
    productsMeasurementFamiliesDelete(
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

        const apiPath = '/v1/products/measurement_families/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.MeasurementFamilies>}
     */
    productsMeasurementFamiliesGet(params: { id: string }): Promise<Models.MeasurementFamilies>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MeasurementFamilies>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsMeasurementFamiliesGet(id: string): Promise<Models.MeasurementFamilies>;
    productsMeasurementFamiliesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MeasurementFamilies> {
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

        const apiPath = '/v1/products/measurement_families/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {string} params.standardUnit - 
     * @param {object} params.units - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MeasurementFamilies>}
     */
    productsMeasurementFamiliesUpdate(params: { id: string, code?: string, labels?: object, standardUnit?: string, units?: object }): Promise<Models.MeasurementFamilies>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {string} standardUnit - 
     * @param {object} units - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.MeasurementFamilies>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsMeasurementFamiliesUpdate(id: string, code?: string, labels?: object, standardUnit?: string, units?: object): Promise<Models.MeasurementFamilies>;
    productsMeasurementFamiliesUpdate(
        paramsOrFirst: { id: string, code?: string, labels?: object, standardUnit?: string, units?: object } | string,
        ...rest: [(string)?, (object)?, (string)?, (object)?]    
    ): Promise<Models.MeasurementFamilies> {
        let params: { id: string, code?: string, labels?: object, standardUnit?: string, units?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, labels?: object, standardUnit?: string, units?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                labels: rest[1] as object,
                standardUnit: rest[2] as string,
                units: rest[3] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const labels = params.labels;
        const standardUnit = params.standardUnit;
        const units = params.units;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/measurement_families/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof standardUnit !== 'undefined') {
            apiPayload['standard_unit'] = standardUnit;
        }
        if (typeof units !== 'undefined') {
            apiPayload['units'] = units;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsProductAssociationsList(): Promise<{}> {

        const apiPath = '/v1/products/product_associations';
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
     * @param {string} params.associationTypeId - 
     * @param {string} params.productId - 
     * @param {string} params.targetProductId - 
     * @param {number} params.position - 
     * @param {number} params.quantity - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductAssociations>}
     */
    productsProductAssociationsCreate(params: { associationTypeId: string, productId: string, targetProductId: string, position?: number, quantity?: number }): Promise<Models.ProductAssociations>;
    /**
     *
     * @param {string} associationTypeId - 
     * @param {string} productId - 
     * @param {string} targetProductId - 
     * @param {number} position - 
     * @param {number} quantity - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductAssociations>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductAssociationsCreate(associationTypeId: string, productId: string, targetProductId: string, position?: number, quantity?: number): Promise<Models.ProductAssociations>;
    productsProductAssociationsCreate(
        paramsOrFirst: { associationTypeId: string, productId: string, targetProductId: string, position?: number, quantity?: number } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.ProductAssociations> {
        let params: { associationTypeId: string, productId: string, targetProductId: string, position?: number, quantity?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { associationTypeId: string, productId: string, targetProductId: string, position?: number, quantity?: number };
        } else {
            params = {
                associationTypeId: paramsOrFirst as string,
                productId: rest[0] as string,
                targetProductId: rest[1] as string,
                position: rest[2] as number,
                quantity: rest[3] as number            
            };
        }
        
        const associationTypeId = params.associationTypeId;
        const productId = params.productId;
        const targetProductId = params.targetProductId;
        const position = params.position;
        const quantity = params.quantity;

        if (typeof associationTypeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "associationTypeId"');
        }
        if (typeof productId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "productId"');
        }
        if (typeof targetProductId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "targetProductId"');
        }

        const apiPath = '/v1/products/product_associations';
        const apiPayload: Payload = {};
        if (typeof associationTypeId !== 'undefined') {
            apiPayload['association_type_id'] = associationTypeId;
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
        if (typeof targetProductId !== 'undefined') {
            apiPayload['target_product_id'] = targetProductId;
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
     * @returns {Promise<{}>}
     */
    productsProductAssociationsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductAssociationsDelete(id: string): Promise<{}>;
    productsProductAssociationsDelete(
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

        const apiPath = '/v1/products/product_associations/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ProductAssociations>}
     */
    productsProductAssociationsGet(params: { id: string }): Promise<Models.ProductAssociations>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductAssociations>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductAssociationsGet(id: string): Promise<Models.ProductAssociations>;
    productsProductAssociationsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ProductAssociations> {
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

        const apiPath = '/v1/products/product_associations/{id}'.replace('{id}', id);
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
     * @param {string} params.associationTypeId - 
     * @param {number} params.position - 
     * @param {string} params.productId - 
     * @param {number} params.quantity - 
     * @param {string} params.targetProductId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductAssociations>}
     */
    productsProductAssociationsUpdate(params: { id: string, associationTypeId?: string, position?: number, productId?: string, quantity?: number, targetProductId?: string }): Promise<Models.ProductAssociations>;
    /**
     *
     * @param {string} id - 
     * @param {string} associationTypeId - 
     * @param {number} position - 
     * @param {string} productId - 
     * @param {number} quantity - 
     * @param {string} targetProductId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductAssociations>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductAssociationsUpdate(id: string, associationTypeId?: string, position?: number, productId?: string, quantity?: number, targetProductId?: string): Promise<Models.ProductAssociations>;
    productsProductAssociationsUpdate(
        paramsOrFirst: { id: string, associationTypeId?: string, position?: number, productId?: string, quantity?: number, targetProductId?: string } | string,
        ...rest: [(string)?, (number)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.ProductAssociations> {
        let params: { id: string, associationTypeId?: string, position?: number, productId?: string, quantity?: number, targetProductId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, associationTypeId?: string, position?: number, productId?: string, quantity?: number, targetProductId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                associationTypeId: rest[0] as string,
                position: rest[1] as number,
                productId: rest[2] as string,
                quantity: rest[3] as number,
                targetProductId: rest[4] as string            
            };
        }
        
        const id = params.id;
        const associationTypeId = params.associationTypeId;
        const position = params.position;
        const productId = params.productId;
        const quantity = params.quantity;
        const targetProductId = params.targetProductId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/product_associations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof associationTypeId !== 'undefined') {
            apiPayload['association_type_id'] = associationTypeId;
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
        if (typeof targetProductId !== 'undefined') {
            apiPayload['target_product_id'] = targetProductId;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsProductCategoriesList(): Promise<{}> {

        const apiPath = '/v1/products/product_categories';
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
     * @param {string} params.categoryId - 
     * @param {string} params.productId - 
     * @param {number} params.position - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductCategories>}
     */
    productsProductCategoriesCreate(params: { categoryId: string, productId: string, position?: number }): Promise<Models.ProductCategories>;
    /**
     *
     * @param {string} categoryId - 
     * @param {string} productId - 
     * @param {number} position - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductCategories>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductCategoriesCreate(categoryId: string, productId: string, position?: number): Promise<Models.ProductCategories>;
    productsProductCategoriesCreate(
        paramsOrFirst: { categoryId: string, productId: string, position?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.ProductCategories> {
        let params: { categoryId: string, productId: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { categoryId: string, productId: string, position?: number };
        } else {
            params = {
                categoryId: paramsOrFirst as string,
                productId: rest[0] as string,
                position: rest[1] as number            
            };
        }
        
        const categoryId = params.categoryId;
        const productId = params.productId;
        const position = params.position;

        if (typeof categoryId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "categoryId"');
        }
        if (typeof productId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "productId"');
        }

        const apiPath = '/v1/products/product_categories';
        const apiPayload: Payload = {};
        if (typeof categoryId !== 'undefined') {
            apiPayload['category_id'] = categoryId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
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
     * @returns {Promise<{}>}
     */
    productsProductCategoriesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductCategoriesDelete(id: string): Promise<{}>;
    productsProductCategoriesDelete(
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

        const apiPath = '/v1/products/product_categories/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ProductCategories>}
     */
    productsProductCategoriesGet(params: { id: string }): Promise<Models.ProductCategories>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductCategories>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductCategoriesGet(id: string): Promise<Models.ProductCategories>;
    productsProductCategoriesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ProductCategories> {
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

        const apiPath = '/v1/products/product_categories/{id}'.replace('{id}', id);
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
     * @param {string} params.categoryId - 
     * @param {number} params.position - 
     * @param {string} params.productId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductCategories>}
     */
    productsProductCategoriesUpdate(params: { id: string, categoryId?: string, position?: number, productId?: string }): Promise<Models.ProductCategories>;
    /**
     *
     * @param {string} id - 
     * @param {string} categoryId - 
     * @param {number} position - 
     * @param {string} productId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductCategories>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsProductCategoriesUpdate(id: string, categoryId?: string, position?: number, productId?: string): Promise<Models.ProductCategories>;
    productsProductCategoriesUpdate(
        paramsOrFirst: { id: string, categoryId?: string, position?: number, productId?: string } | string,
        ...rest: [(string)?, (number)?, (string)?]    
    ): Promise<Models.ProductCategories> {
        let params: { id: string, categoryId?: string, position?: number, productId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, categoryId?: string, position?: number, productId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                categoryId: rest[0] as string,
                position: rest[1] as number,
                productId: rest[2] as string            
            };
        }
        
        const id = params.id;
        const categoryId = params.categoryId;
        const position = params.position;
        const productId = params.productId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/product_categories/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof categoryId !== 'undefined') {
            apiPayload['category_id'] = categoryId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsReferenceEntitiesList(): Promise<{}> {

        const apiPath = '/v1/products/reference_entities';
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
     * @param {string} params.code - 
     * @param {string} params.image - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntities>}
     */
    productsReferenceEntitiesCreate(params: { code: string, image?: string, labels?: object }): Promise<Models.ReferenceEntities>;
    /**
     *
     * @param {string} code - 
     * @param {string} image - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntities>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntitiesCreate(code: string, image?: string, labels?: object): Promise<Models.ReferenceEntities>;
    productsReferenceEntitiesCreate(
        paramsOrFirst: { code: string, image?: string, labels?: object } | string,
        ...rest: [(string)?, (object)?]    
    ): Promise<Models.ReferenceEntities> {
        let params: { code: string, image?: string, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, image?: string, labels?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                image: rest[0] as string,
                labels: rest[1] as object            
            };
        }
        
        const code = params.code;
        const image = params.image;
        const labels = params.labels;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/products/reference_entities';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @returns {Promise<{}>}
     */
    productsReferenceEntitiesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntitiesDelete(id: string): Promise<{}>;
    productsReferenceEntitiesDelete(
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

        const apiPath = '/v1/products/reference_entities/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ReferenceEntities>}
     */
    productsReferenceEntitiesGet(params: { id: string }): Promise<Models.ReferenceEntities>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntities>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntitiesGet(id: string): Promise<Models.ReferenceEntities>;
    productsReferenceEntitiesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ReferenceEntities> {
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

        const apiPath = '/v1/products/reference_entities/{id}'.replace('{id}', id);
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
     * @param {string} params.code - 
     * @param {string} params.image - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntities>}
     */
    productsReferenceEntitiesUpdate(params: { id: string, code?: string, image?: string, labels?: object }): Promise<Models.ReferenceEntities>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - 
     * @param {string} image - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntities>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntitiesUpdate(id: string, code?: string, image?: string, labels?: object): Promise<Models.ReferenceEntities>;
    productsReferenceEntitiesUpdate(
        paramsOrFirst: { id: string, code?: string, image?: string, labels?: object } | string,
        ...rest: [(string)?, (string)?, (object)?]    
    ): Promise<Models.ReferenceEntities> {
        let params: { id: string, code?: string, image?: string, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, image?: string, labels?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                image: rest[1] as string,
                labels: rest[2] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const image = params.image;
        const labels = params.labels;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/reference_entities/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    productsReferenceEntityRecordsList(): Promise<{}> {

        const apiPath = '/v1/products/reference_entity_records';
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
     * @param {string} params.code - 
     * @param {string} params.referenceEntityId - 
     * @param {object} params.attributeValues - 
     * @param {object} params.labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntityRecords>}
     */
    productsReferenceEntityRecordsCreate(params: { code: string, referenceEntityId: string, attributeValues?: object, labels?: object }): Promise<Models.ReferenceEntityRecords>;
    /**
     *
     * @param {string} code - 
     * @param {string} referenceEntityId - 
     * @param {object} attributeValues - 
     * @param {object} labels - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntityRecords>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntityRecordsCreate(code: string, referenceEntityId: string, attributeValues?: object, labels?: object): Promise<Models.ReferenceEntityRecords>;
    productsReferenceEntityRecordsCreate(
        paramsOrFirst: { code: string, referenceEntityId: string, attributeValues?: object, labels?: object } | string,
        ...rest: [(string)?, (object)?, (object)?]    
    ): Promise<Models.ReferenceEntityRecords> {
        let params: { code: string, referenceEntityId: string, attributeValues?: object, labels?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, referenceEntityId: string, attributeValues?: object, labels?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                referenceEntityId: rest[0] as string,
                attributeValues: rest[1] as object,
                labels: rest[2] as object            
            };
        }
        
        const code = params.code;
        const referenceEntityId = params.referenceEntityId;
        const attributeValues = params.attributeValues;
        const labels = params.labels;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof referenceEntityId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "referenceEntityId"');
        }

        const apiPath = '/v1/products/reference_entity_records';
        const apiPayload: Payload = {};
        if (typeof attributeValues !== 'undefined') {
            apiPayload['attribute_values'] = attributeValues;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof referenceEntityId !== 'undefined') {
            apiPayload['reference_entity_id'] = referenceEntityId;
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
     * @returns {Promise<{}>}
     */
    productsReferenceEntityRecordsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntityRecordsDelete(id: string): Promise<{}>;
    productsReferenceEntityRecordsDelete(
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

        const apiPath = '/v1/products/reference_entity_records/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ReferenceEntityRecords>}
     */
    productsReferenceEntityRecordsGet(params: { id: string }): Promise<Models.ReferenceEntityRecords>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntityRecords>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntityRecordsGet(id: string): Promise<Models.ReferenceEntityRecords>;
    productsReferenceEntityRecordsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ReferenceEntityRecords> {
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

        const apiPath = '/v1/products/reference_entity_records/{id}'.replace('{id}', id);
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
     * @param {object} params.attributeValues - 
     * @param {string} params.code - 
     * @param {object} params.labels - 
     * @param {string} params.referenceEntityId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntityRecords>}
     */
    productsReferenceEntityRecordsUpdate(params: { id: string, attributeValues?: object, code?: string, labels?: object, referenceEntityId?: string }): Promise<Models.ReferenceEntityRecords>;
    /**
     *
     * @param {string} id - 
     * @param {object} attributeValues - 
     * @param {string} code - 
     * @param {object} labels - 
     * @param {string} referenceEntityId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferenceEntityRecords>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsReferenceEntityRecordsUpdate(id: string, attributeValues?: object, code?: string, labels?: object, referenceEntityId?: string): Promise<Models.ReferenceEntityRecords>;
    productsReferenceEntityRecordsUpdate(
        paramsOrFirst: { id: string, attributeValues?: object, code?: string, labels?: object, referenceEntityId?: string } | string,
        ...rest: [(object)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.ReferenceEntityRecords> {
        let params: { id: string, attributeValues?: object, code?: string, labels?: object, referenceEntityId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, attributeValues?: object, code?: string, labels?: object, referenceEntityId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                attributeValues: rest[0] as object,
                code: rest[1] as string,
                labels: rest[2] as object,
                referenceEntityId: rest[3] as string            
            };
        }
        
        const id = params.id;
        const attributeValues = params.attributeValues;
        const code = params.code;
        const labels = params.labels;
        const referenceEntityId = params.referenceEntityId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/reference_entity_records/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof attributeValues !== 'undefined') {
            apiPayload['attribute_values'] = attributeValues;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof referenceEntityId !== 'undefined') {
            apiPayload['reference_entity_id'] = referenceEntityId;
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
    productsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsDelete(id: string): Promise<{}>;
    productsDelete(
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

        const apiPath = '/v1/products/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Products>}
     */
    productsGet(params: { id: string }): Promise<Models.Products>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Products>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsGet(id: string): Promise<Models.Products>;
    productsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Products> {
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

        const apiPath = '/v1/products/{id}'.replace('{id}', id);
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
     * @param {object} params.attributeValues - 
     * @param {object} params.completeness - 
     * @param {string} params.deletedAt - 
     * @param {boolean} params.enabled - 
     * @param {string} params.familyId - 
     * @param {string} params.familyVariantId - 
     * @param {string} params.kind - 
     * @param {string} params.parentId - 
     * @param {object} params.quantifiedAssociations - 
     * @param {string} params.sku - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Products>}
     */
    productsUpdate(params: { id: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object, sku?: string }): Promise<Models.Products>;
    /**
     *
     * @param {string} id - 
     * @param {object} attributeValues - 
     * @param {object} completeness - 
     * @param {string} deletedAt - 
     * @param {boolean} enabled - 
     * @param {string} familyId - 
     * @param {string} familyVariantId - 
     * @param {string} kind - 
     * @param {string} parentId - 
     * @param {object} quantifiedAssociations - 
     * @param {string} sku - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Products>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    productsUpdate(id: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object, sku?: string): Promise<Models.Products>;
    productsUpdate(
        paramsOrFirst: { id: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object, sku?: string } | string,
        ...rest: [(object)?, (object)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.Products> {
        let params: { id: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object, sku?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, attributeValues?: object, completeness?: object, deletedAt?: string, enabled?: boolean, familyId?: string, familyVariantId?: string, kind?: string, parentId?: string, quantifiedAssociations?: object, sku?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                attributeValues: rest[0] as object,
                completeness: rest[1] as object,
                deletedAt: rest[2] as string,
                enabled: rest[3] as boolean,
                familyId: rest[4] as string,
                familyVariantId: rest[5] as string,
                kind: rest[6] as string,
                parentId: rest[7] as string,
                quantifiedAssociations: rest[8] as object,
                sku: rest[9] as string            
            };
        }
        
        const id = params.id;
        const attributeValues = params.attributeValues;
        const completeness = params.completeness;
        const deletedAt = params.deletedAt;
        const enabled = params.enabled;
        const familyId = params.familyId;
        const familyVariantId = params.familyVariantId;
        const kind = params.kind;
        const parentId = params.parentId;
        const quantifiedAssociations = params.quantifiedAssociations;
        const sku = params.sku;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/products/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof attributeValues !== 'undefined') {
            apiPayload['attribute_values'] = attributeValues;
        }
        if (typeof completeness !== 'undefined') {
            apiPayload['completeness'] = completeness;
        }
        if (typeof deletedAt !== 'undefined') {
            apiPayload['deleted_at'] = deletedAt;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof familyId !== 'undefined') {
            apiPayload['family_id'] = familyId;
        }
        if (typeof familyVariantId !== 'undefined') {
            apiPayload['family_variant_id'] = familyVariantId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof quantifiedAssociations !== 'undefined') {
            apiPayload['quantified_associations'] = quantifiedAssociations;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
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
