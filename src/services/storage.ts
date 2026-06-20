import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Visibility } from '../enums/visibility';

export class Storage {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {string} params.search - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetIndex(params?: { search?: string }): Promise<{}>;
    /**
     *
     * @param {string} search - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetIndex(search?: string): Promise<{}>;
    assetIndex(
        paramsOrFirst?: { search?: string } | string    
    ): Promise<{}> {
        let params: { search?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { search?: string };
        } else {
            params = {
                search: paramsOrFirst as string            
            };
        }
        
        const search = params.search;


        const apiPath = '/v1/storage/assets';
        const apiPayload: Payload = {};
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
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
     * @param {string} params.file - 
     * @param {string} params.altText - 
     * @param {string} params.description - 
     * @param {string} params.displayName - 
     * @param {string} params.folderId - 
     * @param {boolean} params.keepArchive - 
     * @param {string[]} params.tags - 
     * @param {boolean} params.unpack - Archives only: unpack the members after upload (see AssetController).
     * @param {Visibility} params.visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetStore(params: { file: string, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: Visibility, onProgress?: (progress: UploadProgress) => void }): Promise<{}>;
    /**
     *
     * @param {string} file - 
     * @param {string} altText - 
     * @param {string} description - 
     * @param {string} displayName - 
     * @param {string} folderId - 
     * @param {boolean} keepArchive - 
     * @param {string[]} tags - 
     * @param {boolean} unpack - Archives only: unpack the members after upload (see AssetController).
     * @param {Visibility} visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetStore(file: string, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: Visibility, onProgress?: (progress: UploadProgress) => void): Promise<{}>;
    assetStore(
        paramsOrFirst: { file: string, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: Visibility, onProgress?: (progress: UploadProgress) => void } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?, (string[])?, (boolean)?, (Visibility)?,((progress: UploadProgress) => void)?]    
    ): Promise<{}> {
        let params: { file: string, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: Visibility };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { file: string, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: Visibility };
            onProgress = paramsOrFirst?.onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                file: paramsOrFirst as string,
                altText: rest[0] as string,
                description: rest[1] as string,
                displayName: rest[2] as string,
                folderId: rest[3] as string,
                keepArchive: rest[4] as boolean,
                tags: rest[5] as string[],
                unpack: rest[6] as boolean,
                visibility: rest[7] as Visibility            
            };
            onProgress = rest[8] as ((progress: UploadProgress) => void);
        }
        
        const file = params.file;
        const altText = params.altText;
        const description = params.description;
        const displayName = params.displayName;
        const folderId = params.folderId;
        const keepArchive = params.keepArchive;
        const tags = params.tags;
        const unpack = params.unpack;
        const visibility = params.visibility;

        if (typeof file === 'undefined') {
            throw new RevenexxException('Missing required parameter: "file"');
        }

        const apiPath = '/v1/storage/assets';
        const apiPayload: Payload = {};
        if (typeof altText !== 'undefined') {
            apiPayload['alt_text'] = altText;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof displayName !== 'undefined') {
            apiPayload['display_name'] = displayName;
        }
        if (typeof file !== 'undefined') {
            apiPayload['file'] = file;
        }
        if (typeof folderId !== 'undefined') {
            apiPayload['folder_id'] = folderId;
        }
        if (typeof keepArchive !== 'undefined') {
            apiPayload['keep_archive'] = keepArchive;
        }
        if (typeof tags !== 'undefined') {
            apiPayload['tags'] = tags;
        }
        if (typeof unpack !== 'undefined') {
            apiPayload['unpack'] = unpack;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        }

        return this.client.chunkedUpload(
            'post',
            uri,
            apiHeaders,
            apiPayload,
            onProgress
        );
    }

    /**
     *
     * @param {string} params.folderId - 
     * @param {string} params.visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetBulk(params?: { folderId?: string, visibility?: string }): Promise<{}>;
    /**
     *
     * @param {string} folderId - 
     * @param {string} visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetBulk(folderId?: string, visibility?: string): Promise<{}>;
    assetBulk(
        paramsOrFirst?: { folderId?: string, visibility?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { folderId?: string, visibility?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { folderId?: string, visibility?: string };
        } else {
            params = {
                folderId: paramsOrFirst as string,
                visibility: rest[0] as string            
            };
        }
        
        const folderId = params.folderId;
        const visibility = params.visibility;


        const apiPath = '/v1/storage/assets/bulk';
        const apiPayload: Payload = {};
        if (typeof folderId !== 'undefined') {
            apiPayload['folder_id'] = folderId;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
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
    assetDestroy(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetDestroy(id: string): Promise<{}>;
    assetDestroy(
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

        const apiPath = '/v1/storage/assets/{id}'.replace('{id}', id);
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
     * @returns {Promise<{}>}
     */
    assetShow(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetShow(id: string): Promise<{}>;
    assetShow(
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

        const apiPath = '/v1/storage/assets/{id}'.replace('{id}', id);
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
     * @param {string} params.altText - 
     * @param {string} params.description - 
     * @param {string} params.displayName - 
     * @param {string} params.folderId - 
     * @param {string} params.name - 
     * @param {string[]} params.tags - 
     * @param {Visibility} params.visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetUpdate(params: { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: Visibility }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {string} altText - 
     * @param {string} description - 
     * @param {string} displayName - 
     * @param {string} folderId - 
     * @param {string} name - 
     * @param {string[]} tags - 
     * @param {Visibility} visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetUpdate(id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: Visibility): Promise<{}>;
    assetUpdate(
        paramsOrFirst: { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: Visibility } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string[])?, (Visibility)?]    
    ): Promise<{}> {
        let params: { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: Visibility };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: Visibility };
        } else {
            params = {
                id: paramsOrFirst as string,
                altText: rest[0] as string,
                description: rest[1] as string,
                displayName: rest[2] as string,
                folderId: rest[3] as string,
                name: rest[4] as string,
                tags: rest[5] as string[],
                visibility: rest[6] as Visibility            
            };
        }
        
        const id = params.id;
        const altText = params.altText;
        const description = params.description;
        const displayName = params.displayName;
        const folderId = params.folderId;
        const name = params.name;
        const tags = params.tags;
        const visibility = params.visibility;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/storage/assets/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof altText !== 'undefined') {
            apiPayload['alt_text'] = altText;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof displayName !== 'undefined') {
            apiPayload['display_name'] = displayName;
        }
        if (typeof folderId !== 'undefined') {
            apiPayload['folder_id'] = folderId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof tags !== 'undefined') {
            apiPayload['tags'] = tags;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
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
    assetDownload(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetDownload(id: string): Promise<{}>;
    assetDownload(
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

        const apiPath = '/v1/storage/assets/{id}/download'.replace('{id}', id);
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetPermanent(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetPermanent(id: string): Promise<{}>;
    assetPermanent(
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

        const apiPath = '/v1/storage/assets/{id}/permanent'.replace('{id}', id);
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
     * @returns {Promise<{}>}
     */
    assetReprocess(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetReprocess(id: string): Promise<{}>;
    assetReprocess(
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

        const apiPath = '/v1/storage/assets/{id}/reprocess'.replace('{id}', id);
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
    assetRestore(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetRestore(id: string): Promise<{}>;
    assetRestore(
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

        const apiPath = '/v1/storage/assets/{id}/restore'.replace('{id}', id);
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
     * @param {number} params.ttlSeconds - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetSign(params: { id: string, ttlSeconds?: number }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {number} ttlSeconds - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetSign(id: string, ttlSeconds?: number): Promise<{}>;
    assetSign(
        paramsOrFirst: { id: string, ttlSeconds?: number } | string,
        ...rest: [(number)?]    
    ): Promise<{}> {
        let params: { id: string, ttlSeconds?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, ttlSeconds?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                ttlSeconds: rest[0] as number            
            };
        }
        
        const id = params.id;
        const ttlSeconds = params.ttlSeconds;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/storage/assets/{id}/sign'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof ttlSeconds !== 'undefined') {
            apiPayload['ttl_seconds'] = ttlSeconds;
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
     * @param {boolean} params.keepArchive - 
     * @param {string} params.targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetUnpack(params: { id: string, keepArchive?: boolean, targetFolderId?: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {boolean} keepArchive - 
     * @param {string} targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetUnpack(id: string, keepArchive?: boolean, targetFolderId?: string): Promise<{}>;
    assetUnpack(
        paramsOrFirst: { id: string, keepArchive?: boolean, targetFolderId?: string } | string,
        ...rest: [(boolean)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, keepArchive?: boolean, targetFolderId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, keepArchive?: boolean, targetFolderId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                keepArchive: rest[0] as boolean,
                targetFolderId: rest[1] as string            
            };
        }
        
        const id = params.id;
        const keepArchive = params.keepArchive;
        const targetFolderId = params.targetFolderId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/storage/assets/{id}/unpack'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof keepArchive !== 'undefined') {
            apiPayload['keep_archive'] = keepArchive;
        }
        if (typeof targetFolderId !== 'undefined') {
            apiPayload['target_folder_id'] = targetFolderId;
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
    folderIndex(): Promise<{}> {

        const apiPath = '/v1/storage/folders';
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
     * @param {string} params.name - 
     * @param {string} params.parentId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderStore(params: { name: string, parentId?: string }): Promise<{}>;
    /**
     *
     * @param {string} name - 
     * @param {string} parentId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    folderStore(name: string, parentId?: string): Promise<{}>;
    folderStore(
        paramsOrFirst: { name: string, parentId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { name: string, parentId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, parentId?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                parentId: rest[0] as string            
            };
        }
        
        const name = params.name;
        const parentId = params.parentId;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/storage/folders';
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
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
     * @param {boolean} params.recursive - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderDestroy(params: { id: string, recursive?: boolean }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {boolean} recursive - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    folderDestroy(id: string, recursive?: boolean): Promise<{}>;
    folderDestroy(
        paramsOrFirst: { id: string, recursive?: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<{}> {
        let params: { id: string, recursive?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, recursive?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                recursive: rest[0] as boolean            
            };
        }
        
        const id = params.id;
        const recursive = params.recursive;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/storage/folders/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof recursive !== 'undefined') {
            apiPayload['recursive'] = recursive;
        }
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
     * @returns {Promise<{}>}
     */
    folderShow(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    folderShow(id: string): Promise<{}>;
    folderShow(
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

        const apiPath = '/v1/storage/folders/{id}'.replace('{id}', id);
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
     * @param {string} params.name - 
     * @param {string} params.parentId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderUpdate(params: { id: string, name?: string, parentId?: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {string} name - 
     * @param {string} parentId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    folderUpdate(id: string, name?: string, parentId?: string): Promise<{}>;
    folderUpdate(
        paramsOrFirst: { id: string, name?: string, parentId?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, name?: string, parentId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, name?: string, parentId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                parentId: rest[1] as string            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const parentId = params.parentId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/storage/folders/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
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
    syncRuleIndex(): Promise<{}> {

        const apiPath = '/v1/storage/sftp/rules';
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleStore(): Promise<{}> {

        const apiPath = '/v1/storage/sftp/rules';
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
    syncRuleDestroy(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleDestroy(id: string): Promise<{}>;
    syncRuleDestroy(
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

        const apiPath = '/v1/storage/sftp/rules/{id}'.replace('{id}', id);
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
     * @returns {Promise<{}>}
     */
    syncRuleShow(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleShow(id: string): Promise<{}>;
    syncRuleShow(
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

        const apiPath = '/v1/storage/sftp/rules/{id}'.replace('{id}', id);
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleUpdate(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleUpdate(id: string): Promise<{}>;
    syncRuleUpdate(
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

        const apiPath = '/v1/storage/sftp/rules/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'patch',
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
    syncRuleRun(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleRun(id: string): Promise<{}>;
    syncRuleRun(
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

        const apiPath = '/v1/storage/sftp/rules/{id}/run'.replace('{id}', id);
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
     * @param {string} params.runId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleRunProtocol(params: { id: string, runId: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {string} runId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleRunProtocol(id: string, runId: string): Promise<{}>;
    syncRuleRunProtocol(
        paramsOrFirst: { id: string, runId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, runId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, runId: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                runId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const runId = params.runId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof runId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "runId"');
        }

        const apiPath = '/v1/storage/sftp/rules/{id}/runs/{runId}'.replace('{id}', id).replace('{runId}', runId);
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
     * @param {string} params.ruleId - 
     * @param {string} params.from - 
     * @param {string} params.to - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleHistory(params?: { ruleId?: string, from?: string, to?: string }): Promise<{}>;
    /**
     *
     * @param {string} ruleId - 
     * @param {string} from - 
     * @param {string} to - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleHistory(ruleId?: string, from?: string, to?: string): Promise<{}>;
    syncRuleHistory(
        paramsOrFirst?: { ruleId?: string, from?: string, to?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { ruleId?: string, from?: string, to?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ruleId?: string, from?: string, to?: string };
        } else {
            params = {
                ruleId: paramsOrFirst as string,
                from: rest[0] as string,
                to: rest[1] as string            
            };
        }
        
        const ruleId = params.ruleId;
        const from = params.from;
        const to = params.to;


        const apiPath = '/v1/storage/sftp/sync-history';
        const apiPayload: Payload = {};
        if (typeof ruleId !== 'undefined') {
            apiPayload['rule_id'] = ruleId;
        }
        if (typeof from !== 'undefined') {
            apiPayload['from'] = from;
        }
        if (typeof to !== 'undefined') {
            apiPayload['to'] = to;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tenantStats(): Promise<{}> {

        const apiPath = '/v1/storage/tenant/stats';
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tenantUsage(): Promise<{}> {

        const apiPath = '/v1/storage/tenant/usage';
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
