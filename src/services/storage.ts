import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { AssetStoreVisibility } from '../enums/asset-store-visibility';

export class Storage {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List the media assets in this tenant, newest first. Narrow the list with
     * `filter[folder_id]`, `filter[kind]`, `filter[status]` and a
     * `filter[created_at][gte]`/`[lte]` range; search original names, display
     * names, alt text and descriptions with `search`; order by `created_at`,
     * `size_bytes` or `original_name` (prefix with `-` to reverse). One page is
     * returned, 50 records by default and 200 at most.
     * 
     * Records only: no file content is returned — fetch bytes with
     * `GET /assets/{id}/download` or hand out a link with
     * `POST /assets/{id}/sign`. Deleted assets are not listed.
     *
     * @param {string} params.search - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetIndex(params?: { search?: string }): Promise<{}>;
    /**
     * List the media assets in this tenant, newest first. Narrow the list with
     * `filter[folder_id]`, `filter[kind]`, `filter[status]` and a
     * `filter[created_at][gte]`/`[lte]` range; search original names, display
     * names, alt text and descriptions with `search`; order by `created_at`,
     * `size_bytes` or `original_name` (prefix with `-` to reverse). One page is
     * returned, 50 records by default and 200 at most.
     * 
     * Records only: no file content is returned — fetch bytes with
     * `GET /assets/{id}/download` or hand out a link with
     * `POST /assets/{id}/sign`. Deleted assets are not listed.
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
     * Upload one file into this tenant's media library. The file is checked
     * against the tenant's single-file limit and its remaining storage quota,
     * its media type is sniffed from the content rather than trusted from the
     * request, and it is virus-scanned before anything is written. The stored
     * asset comes back with status `pending_processing`; metadata extraction
     * finishes asynchronously and moves it to `available`. `folder_id`,
     * `visibility`, `alt_text`, `description`, `display_name` and `tags` are
     * applied on the way in; set `unpack` to also queue an uploaded archive's
     * members for ingestion.
     * 
     * Every call creates a new asset — this never replaces the content of an
     * existing one — and it takes exactly one file. Use `POST /assets/bulk` for
     * several.
     *
     * @param {File} params.file - 
     * @param {string} params.altText - 
     * @param {string} params.description - 
     * @param {string} params.displayName - 
     * @param {string} params.folderId - 
     * @param {boolean} params.keepArchive - 
     * @param {string[]} params.tags - 
     * @param {boolean} params.unpack - Archives only: unpack the members after upload (see AssetController).
     * @param {AssetStoreVisibility} params.visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetStore(params: { file: File, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: AssetStoreVisibility, onProgress?: (progress: UploadProgress) => void }): Promise<{}>;
    /**
     * Upload one file into this tenant's media library. The file is checked
     * against the tenant's single-file limit and its remaining storage quota,
     * its media type is sniffed from the content rather than trusted from the
     * request, and it is virus-scanned before anything is written. The stored
     * asset comes back with status `pending_processing`; metadata extraction
     * finishes asynchronously and moves it to `available`. `folder_id`,
     * `visibility`, `alt_text`, `description`, `display_name` and `tags` are
     * applied on the way in; set `unpack` to also queue an uploaded archive's
     * members for ingestion.
     * 
     * Every call creates a new asset — this never replaces the content of an
     * existing one — and it takes exactly one file. Use `POST /assets/bulk` for
     * several.
     *
     * @param {File} file - 
     * @param {string} altText - 
     * @param {string} description - 
     * @param {string} displayName - 
     * @param {string} folderId - 
     * @param {boolean} keepArchive - 
     * @param {string[]} tags - 
     * @param {boolean} unpack - Archives only: unpack the members after upload (see AssetController).
     * @param {AssetStoreVisibility} visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetStore(file: File, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: AssetStoreVisibility, onProgress?: (progress: UploadProgress) => void): Promise<{}>;
    assetStore(
        paramsOrFirst: { file: File, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: AssetStoreVisibility, onProgress?: (progress: UploadProgress) => void } | File,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?, (string[])?, (boolean)?, (AssetStoreVisibility)?,((progress: UploadProgress) => void)?]    
    ): Promise<{}> {
        let params: { file: File, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: AssetStoreVisibility };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('file' in paramsOrFirst || 'altText' in paramsOrFirst || 'description' in paramsOrFirst || 'displayName' in paramsOrFirst || 'folderId' in paramsOrFirst || 'keepArchive' in paramsOrFirst || 'tags' in paramsOrFirst || 'unpack' in paramsOrFirst || 'visibility' in paramsOrFirst || 'onProgress' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { file: File, altText?: string, description?: string, displayName?: string, folderId?: string, keepArchive?: boolean, tags?: string[], unpack?: boolean, visibility?: AssetStoreVisibility };
            onProgress = (paramsOrFirst as { onProgress?: (progress: UploadProgress) => void }).onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                file: paramsOrFirst as File,
                altText: rest[0] as string,
                description: rest[1] as string,
                displayName: rest[2] as string,
                folderId: rest[3] as string,
                keepArchive: rest[4] as boolean,
                tags: rest[5] as string[],
                unpack: rest[6] as boolean,
                visibility: rest[7] as AssetStoreVisibility            
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
     * Upload a batch of files in one request under `files`, each ingested
     * exactly as `POST /assets` ingests a single file. The batch is rejected as
     * a whole when it carries no files, more files than one request may carry,
     * or too many bytes in total. Past that point every file is attempted
     * independently and the call answers 207 with a `results` entry per file:
     * either the created asset or the error that rejected it. A partial failure
     * is therefore a successful call, not an error status — read `results`.
     * 
     * Only `folder_id` and `visibility` apply, and they apply to the whole
     * batch; per-file metadata is not accepted here. Set it afterwards with
     * `PATCH /assets/{id}`.
     *
     * @param {string} params.folderId - 
     * @param {string} params.visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetBulk(params?: { folderId?: string, visibility?: string }): Promise<{}>;
    /**
     * Upload a batch of files in one request under `files`, each ingested
     * exactly as `POST /assets` ingests a single file. The batch is rejected as
     * a whole when it carries no files, more files than one request may carry,
     * or too many bytes in total. Past that point every file is attempted
     * independently and the call answers 207 with a `results` entry per file:
     * either the created asset or the error that rejected it. A partial failure
     * is therefore a successful call, not an error status — read `results`.
     * 
     * Only `folder_id` and `visibility` apply, and they apply to the whole
     * batch; per-file metadata is not accepted here. Set it afterwards with
     * `PATCH /assets/{id}`.
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
     * Soft-delete an asset: it stops being listed and served, its status
     * becomes `soft_deleted`, and it is scheduled for permanent deletion once
     * the retention window has passed. Until then `POST /assets/{id}/restore`
     * brings it back.
     * 
     * The stored file is not erased at this point and its bytes still count
     * against the tenant's storage quota — use `DELETE /assets/{id}/permanent`
     * to erase it and free the quota immediately.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetDestroy(params: { id: string }): Promise<{}>;
    /**
     * Soft-delete an asset: it stops being listed and served, its status
     * becomes `soft_deleted`, and it is scheduled for permanent deletion once
     * the retention window has passed. Until then `POST /assets/{id}/restore`
     * brings it back.
     * 
     * The stored file is not erased at this point and its bytes still count
     * against the tenant's storage quota — use `DELETE /assets/{id}/permanent`
     * to erase it and free the quota immediately.
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
     * Fetch one asset's record by id: name, folder, media type, size, status,
     * tags, the extracted metadata and the delivery URL (null for a private
     * asset, which is reachable only through a signed URL). Metadata only — the
     * bytes are served by `GET /assets/{id}/download`. A deleted asset is not
     * visible here until `POST /assets/{id}/restore` brings it back.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetShow(params: { id: string }): Promise<{}>;
    /**
     * Fetch one asset's record by id: name, folder, media type, size, status,
     * tags, the extracted metadata and the delivery URL (null for a private
     * asset, which is reachable only through a signed URL). Metadata only — the
     * bytes are served by `GET /assets/{id}/download`. A deleted asset is not
     * visible here until `POST /assets/{id}/restore` brings it back.
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
     * Change an asset's metadata: `display_name`, `alt_text`, `description`,
     * `visibility` and `tags`. Sending `folder_id` moves it and sending `name`
     * renames it; either re-derives the asset's public delivery path, so links
     * built from the old path stop resolving. Only the fields present in the
     * request are touched.
     * 
     * The stored file itself is never modified here — to change the content,
     * upload a new asset.
     *
     * @param {string} params.id - 
     * @param {string} params.altText - 
     * @param {string} params.description - 
     * @param {string} params.displayName - 
     * @param {string} params.folderId - 
     * @param {string} params.name - 
     * @param {string[]} params.tags - 
     * @param {AssetStoreVisibility} params.visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetUpdate(params: { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: AssetStoreVisibility }): Promise<{}>;
    /**
     * Change an asset's metadata: `display_name`, `alt_text`, `description`,
     * `visibility` and `tags`. Sending `folder_id` moves it and sending `name`
     * renames it; either re-derives the asset's public delivery path, so links
     * built from the old path stop resolving. Only the fields present in the
     * request are touched.
     * 
     * The stored file itself is never modified here — to change the content,
     * upload a new asset.
     *
     * @param {string} id - 
     * @param {string} altText - 
     * @param {string} description - 
     * @param {string} displayName - 
     * @param {string} folderId - 
     * @param {string} name - 
     * @param {string[]} tags - 
     * @param {AssetStoreVisibility} visibility - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    assetUpdate(id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: AssetStoreVisibility): Promise<{}>;
    assetUpdate(
        paramsOrFirst: { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: AssetStoreVisibility } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string[])?, (AssetStoreVisibility)?]    
    ): Promise<{}> {
        let params: { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: AssetStoreVisibility };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, altText?: string, description?: string, displayName?: string, folderId?: string, name?: string, tags?: string[], visibility?: AssetStoreVisibility };
        } else {
            params = {
                id: paramsOrFirst as string,
                altText: rest[0] as string,
                description: rest[1] as string,
                displayName: rest[2] as string,
                folderId: rest[3] as string,
                name: rest[4] as string,
                tags: rest[5] as string[],
                visibility: rest[6] as AssetStoreVisibility            
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
     * Stream the asset's original file back as an attachment, named after the
     * asset. This is the authenticated read path — every call carries the
     * caller's credentials — and the bytes are the ones that were uploaded: no
     * resizing, re-encoding or other transformation is applied.
     * 
     * To let a browser, an email or a third party fetch the file without an API
     * credential, mint a link with `POST /assets/{id}/sign` instead.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetDownload(params: { id: string }): Promise<{}>;
    /**
     * Stream the asset's original file back as an attachment, named after the
     * asset. This is the authenticated read path — every call carries the
     * caller's credentials — and the bytes are the ones that were uploaded: no
     * resizing, re-encoding or other transformation is applied.
     * 
     * To let a browser, an email or a third party fetch the file without an API
     * credential, mint a link with `POST /assets/{id}/sign` instead.
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
     * Erase an asset and its stored file for good and credit its bytes back to
     * the tenant's used storage. Works on live and soft-deleted assets alike.
     * 
     * This cannot be undone: there is no restore afterwards, and links to the
     * asset stop resolving at once. Use `DELETE /assets/{id}` for the
     * reversible variant. Requires the elevated (admin) tier.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetPermanent(params: { id: string }): Promise<{}>;
    /**
     * Erase an asset and its stored file for good and credit its bytes back to
     * the tenant's used storage. Works on live and soft-deleted assets alike.
     * 
     * This cannot be undone: there is no restore afterwards, and links to the
     * asset stop resolving at once. Use `DELETE /assets/{id}` for the
     * reversible variant. Requires the elevated (admin) tier.
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
     * Re-run post-upload processing for one asset. It returns to
     * `pending_processing` and the job re-extracts its metadata — and, for a 3D
     * model, re-renders the preview and mesh derivatives — before marking it
     * `available` again. The usual reason is an asset stuck in
     * `processing_failed`.
     * 
     * The stored file is neither re-uploaded nor altered, and no thumbnails are
     * produced: delivery transforms are applied on the fly when the asset is
     * served, not here.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetReprocess(params: { id: string }): Promise<{}>;
    /**
     * Re-run post-upload processing for one asset. It returns to
     * `pending_processing` and the job re-extracts its metadata — and, for a 3D
     * model, re-renders the preview and mesh derivatives — before marking it
     * `available` again. The usual reason is an asset stuck in
     * `processing_failed`.
     * 
     * The stored file is neither re-uploaded nor altered, and no thumbnails are
     * produced: delivery transforms are applied on the fly when the asset is
     * served, not here.
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
     * Bring a soft-deleted asset back: the scheduled permanent deletion is
     * cleared and the asset returns to `available`, listed and served again
     * under its original path. Only works while the asset is still inside its
     * retention window — once it has been erased, by
     * `DELETE /assets/{id}/permanent` or by the retention sweep, there is
     * nothing left to restore.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetRestore(params: { id: string }): Promise<{}>;
    /**
     * Bring a soft-deleted asset back: the scheduled permanent deletion is
     * cleared and the asset returns to `available`, listed and served again
     * under its original path. Only works while the asset is still inside its
     * retention window — once it has been erased, by
     * `DELETE /assets/{id}/permanent` or by the retention sweep, there is
     * nothing left to restore.
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
     * Mint a time-limited URL that serves this asset without an API credential
     * — the way to hand a private asset to a browser, an email or a third
     * party. `ttl_seconds` sets the lifetime: one hour by default, seven days
     * at most. The response carries the URL and the lifetime it was issued
     * with.
     * 
     * The signature is checked at the delivery edge. A link cannot be revoked
     * before it expires, so keep the lifetime short. A public asset already
     * carries an unsigned delivery URL on its record and does not need this.
     *
     * @param {string} params.id - 
     * @param {number} params.ttlSeconds - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetSign(params: { id: string, ttlSeconds?: number }): Promise<{}>;
    /**
     * Mint a time-limited URL that serves this asset without an API credential
     * — the way to hand a private asset to a browser, an email or a third
     * party. `ttl_seconds` sets the lifetime: one hour by default, seven days
     * at most. The response carries the URL and the lifetime it was issued
     * with.
     * 
     * The signature is checked at the delivery edge. A link cannot be revoked
     * before it expires, so keep the lifetime short. A public asset already
     * carries an unsigned delivery URL on its record and does not need this.
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
     * Ingest the members of an already-uploaded archive as individual assets.
     * They land in a folder named after the archive, created under
     * `target_folder_id` or, when that is omitted, under the archive's own
     * folder, and the archive's internal directory structure is mirrored
     * beneath it. Each member goes through the same pipeline as an upload —
     * media-type sniff, virus scan, quota — and a member that fails is skipped
     * rather than failing the run. `keep_archive` (true by default) decides
     * whether the archive asset itself survives.
     * 
     * Asynchronous: this answers 202 as soon as the work is queued, so poll the
     * folder or asset list for the results. Only an asset that is an archive of
     * a supported type can be unpacked; an upload can ask for the same thing
     * inline with `unpack`.
     *
     * @param {string} params.id - 
     * @param {boolean} params.keepArchive - 
     * @param {string} params.targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    assetUnpack(params: { id: string, keepArchive?: boolean, targetFolderId?: string }): Promise<{}>;
    /**
     * Ingest the members of an already-uploaded archive as individual assets.
     * They land in a folder named after the archive, created under
     * `target_folder_id` or, when that is omitted, under the archive's own
     * folder, and the archive's internal directory structure is mirrored
     * beneath it. Each member goes through the same pipeline as an upload —
     * media-type sniff, virus scan, quota — and a member that fails is skipped
     * rather than failing the run. `keep_archive` (true by default) decides
     * whether the archive asset itself survives.
     * 
     * Asynchronous: this answers 202 as soon as the work is queued, so poll the
     * folder or asset list for the results. Only an asset that is an archive of
     * a supported type can be unpacked; an upload can ask for the same thing
     * inline with `unpack`.
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
     * Return every folder in this tenant as one flat list ordered by path, each
     * record carrying its `parent_id` and its materialized `path`, so a client
     * can rebuild the tree without walking it. Not paginated and not filtered.
     * 
     * Folders hold no file content of their own — list a folder's assets with
     * `GET /assets` and `filter[folder_id]`.
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
     * Create a folder under `parent_id`, or at the library root when it is
     * omitted. The `name` is slugged into a path segment and appended to the
     * parent's path; that path is what the public delivery URL of every asset
     * inside it is built from, so two siblings may not slug to the same
     * segment.
     * 
     * Creating a folder moves nothing into it — assign assets with
     * `folder_id` on upload or with `PATCH /assets/{id}`.
     *
     * @param {string} params.name - 
     * @param {string} params.parentId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderStore(params: { name: string, parentId?: string }): Promise<{}>;
    /**
     * Create a folder under `parent_id`, or at the library root when it is
     * omitted. The `name` is slugged into a path segment and appended to the
     * parent's path; that path is what the public delivery URL of every asset
     * inside it is built from, so two siblings may not slug to the same
     * segment.
     * 
     * Creating a folder moves nothing into it — assign assets with
     * `folder_id` on upload or with `PATCH /assets/{id}`.
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
     * Delete a folder. By default it has to be empty: a folder that still holds
     * folders or assets is refused, so pass `recursive=true` to delete it
     * together with everything beneath it.
     * 
     * A recursive delete soft-deletes the assets it takes with it — their files
     * are not erased and their bytes still count against the tenant's storage
     * quota, and each remains restorable through `POST /assets/{id}/restore`.
     * System folders cannot be deleted.
     *
     * @param {string} params.id - 
     * @param {boolean} params.recursive - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderDestroy(params: { id: string, recursive?: boolean }): Promise<{}>;
    /**
     * Delete a folder. By default it has to be empty: a folder that still holds
     * folders or assets is refused, so pass `recursive=true` to delete it
     * together with everything beneath it.
     * 
     * A recursive delete soft-deletes the assets it takes with it — their files
     * are not erased and their bytes still count against the tenant's storage
     * quota, and each remains restorable through `POST /assets/{id}/restore`.
     * System folders cannot be deleted.
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
     * Fetch one folder's record by id: its name, its parent, the materialized
     * path assets inside it are delivered under, and whether it is a system
     * folder (system folders cannot be renamed, moved or deleted).
     * 
     * Its contents are not included — list them with `GET /assets` and
     * `filter[folder_id]`, and its child folders with `GET /folders`.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderShow(params: { id: string }): Promise<{}>;
    /**
     * Fetch one folder's record by id: its name, its parent, the materialized
     * path assets inside it are delivered under, and whether it is a system
     * folder (system folders cannot be renamed, moved or deleted).
     * 
     * Its contents are not included — list them with `GET /assets` and
     * `filter[folder_id]`, and its child folders with `GET /folders`.
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
     * Rename a folder with `name`, move it under a different parent with
     * `parent_id` (null for the root), or both at once. Either rewrites the
     * folder's materialized path and the path of every folder beneath it, which
     * changes the public delivery URL of every asset they hold — existing links
     * built from the old path stop resolving.
     * 
     * Nothing else about the assets changes; they are not moved, re-uploaded or
     * reprocessed. A system folder cannot be changed, a folder cannot be moved
     * inside its own subtree, and the new name has to slug to a segment free
     * among its new siblings.
     *
     * @param {string} params.id - 
     * @param {string} params.name - 
     * @param {string} params.parentId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    folderUpdate(params: { id: string, name?: string, parentId?: string }): Promise<{}>;
    /**
     * Rename a folder with `name`, move it under a different parent with
     * `parent_id` (null for the root), or both at once. Either rewrites the
     * folder's materialized path and the path of every folder beneath it, which
     * changes the public delivery URL of every asset they hold — existing links
     * built from the old path stop resolving.
     * 
     * Nothing else about the assets changes; they are not moved, re-uploaded or
     * reprocessed. A system folder cannot be changed, a folder cannot be moved
     * inside its own subtree, and the new name has to slug to a segment free
     * among its new siblings.
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
     * Return this tenant's SFTP sync rules, newest first, each with the account
     * and remote path it pulls from, the folder it imports into, its cron
     * schedule, whether it is enabled and when it last ran. Not paginated and
     * not filtered.
     * 
     * These are the rules themselves, not what they moved: for the files a rule
     * has actually transferred, see `GET /sftp/sync-history`.
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
     * Schedule a recurring one-way pull from a directory on the tenant's SFTP
     * storage box into this media library. `sftp_account_id` selects the
     * account, `source_path` the remote directory, `target_folder_id` the
     * folder imported assets land in, and `schedule` a cron expression (every
     * five minutes when omitted) at which the rule falls due. `options` carries
     * the per-rule knobs: recursion, include/exclude and size filters, how long
     * a remote file has to have stopped changing before it is taken, and
     * whether it is deleted from the remote after a successful transfer.
     * 
     * Each run ingests every matching remote file exactly as an upload would,
     * quota, media-type and virus checks included, and records one history
     * entry per file. Creating the rule transfers nothing: the first run
     * happens when the schedule next falls due, or immediately if you call
     * `POST /sftp/rules/{id}/run`. Nothing is ever pushed back to the remote,
     * beyond the optional delete after a successful transfer. Requires the
     * elevated (admin) tier.
     *
     * @param {string} params.sftpAccountId - 
     * @param {string} params.sourcePath - 
     * @param {boolean} params.enabled - 
     * @param {string[]} params.options - 
     * @param {string} params.schedule - 
     * @param {string} params.targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleStore(params: { sftpAccountId: string, sourcePath: string, enabled?: boolean, options?: string[], schedule?: string, targetFolderId?: string }): Promise<{}>;
    /**
     * Schedule a recurring one-way pull from a directory on the tenant's SFTP
     * storage box into this media library. `sftp_account_id` selects the
     * account, `source_path` the remote directory, `target_folder_id` the
     * folder imported assets land in, and `schedule` a cron expression (every
     * five minutes when omitted) at which the rule falls due. `options` carries
     * the per-rule knobs: recursion, include/exclude and size filters, how long
     * a remote file has to have stopped changing before it is taken, and
     * whether it is deleted from the remote after a successful transfer.
     * 
     * Each run ingests every matching remote file exactly as an upload would,
     * quota, media-type and virus checks included, and records one history
     * entry per file. Creating the rule transfers nothing: the first run
     * happens when the schedule next falls due, or immediately if you call
     * `POST /sftp/rules/{id}/run`. Nothing is ever pushed back to the remote,
     * beyond the optional delete after a successful transfer. Requires the
     * elevated (admin) tier.
     *
     * @param {string} sftpAccountId - 
     * @param {string} sourcePath - 
     * @param {boolean} enabled - 
     * @param {string[]} options - 
     * @param {string} schedule - 
     * @param {string} targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleStore(sftpAccountId: string, sourcePath: string, enabled?: boolean, options?: string[], schedule?: string, targetFolderId?: string): Promise<{}>;
    syncRuleStore(
        paramsOrFirst: { sftpAccountId: string, sourcePath: string, enabled?: boolean, options?: string[], schedule?: string, targetFolderId?: string } | string,
        ...rest: [(string)?, (boolean)?, (string[])?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { sftpAccountId: string, sourcePath: string, enabled?: boolean, options?: string[], schedule?: string, targetFolderId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { sftpAccountId: string, sourcePath: string, enabled?: boolean, options?: string[], schedule?: string, targetFolderId?: string };
        } else {
            params = {
                sftpAccountId: paramsOrFirst as string,
                sourcePath: rest[0] as string,
                enabled: rest[1] as boolean,
                options: rest[2] as string[],
                schedule: rest[3] as string,
                targetFolderId: rest[4] as string            
            };
        }
        
        const sftpAccountId = params.sftpAccountId;
        const sourcePath = params.sourcePath;
        const enabled = params.enabled;
        const options = params.options;
        const schedule = params.schedule;
        const targetFolderId = params.targetFolderId;

        if (typeof sftpAccountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sftpAccountId"');
        }
        if (typeof sourcePath === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sourcePath"');
        }

        const apiPath = '/v1/storage/sftp/rules';
        const apiPayload: Payload = {};
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = options;
        }
        if (typeof schedule !== 'undefined') {
            apiPayload['schedule'] = schedule;
        }
        if (typeof sftpAccountId !== 'undefined') {
            apiPayload['sftp_account_id'] = sftpAccountId;
        }
        if (typeof sourcePath !== 'undefined') {
            apiPayload['source_path'] = sourcePath;
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
     * Delete a sync rule so it is never scheduled again. The assets it already
     * imported stay exactly where they are, its recorded run history is kept,
     * and nothing on the remote is touched.
     * 
     * To stop a rule only for a while, set `enabled` to false with
     * `PATCH /sftp/rules/{id}` instead — a deleted rule cannot be restored.
     * Requires the elevated (admin) tier.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleDestroy(params: { id: string }): Promise<{}>;
    /**
     * Delete a sync rule so it is never scheduled again. The assets it already
     * imported stay exactly where they are, its recorded run history is kept,
     * and nothing on the remote is touched.
     * 
     * To stop a rule only for a while, set `enabled` to false with
     * `PATCH /sftp/rules/{id}` instead — a deleted rule cannot be restored.
     * Requires the elevated (admin) tier.
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
     * Fetch one sync rule's configuration by id: the account and remote path it
     * pulls from, its target folder, its cron schedule, its `options` and
     * `last_run_at`.
     * 
     * Configuration only, and `last_run_at` says when a run was last attempted,
     * not whether it succeeded. What a run did is in
     * `GET /sftp/rules/{id}/runs/{runId}` and `GET /sftp/sync-history`.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleShow(params: { id: string }): Promise<{}>;
    /**
     * Fetch one sync rule's configuration by id: the account and remote path it
     * pulls from, its target folder, its cron schedule, its `options` and
     * `last_run_at`.
     * 
     * Configuration only, and `last_run_at` says when a run was last attempted,
     * not whether it succeeded. What a run did is in
     * `GET /sftp/rules/{id}/runs/{runId}` and `GET /sftp/sync-history`.
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
     * Change a sync rule in place: its account, remote path, target folder,
     * schedule or options, or `enabled` to pause and resume it without deleting
     * it. Only the fields present in the request are touched, but `options` is
     * replaced wholesale rather than merged — send the whole object.
     * 
     * A change takes effect from the next run; a run already in flight is not
     * affected, and nothing a previous run imported is revisited or undone.
     * Requires the elevated (admin) tier.
     *
     * @param {string} params.id - 
     * @param {boolean} params.enabled - 
     * @param {string[]} params.options - 
     * @param {string} params.schedule - 
     * @param {string} params.sftpAccountId - 
     * @param {string} params.sourcePath - 
     * @param {string} params.targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleUpdate(params: { id: string, enabled?: boolean, options?: string[], schedule?: string, sftpAccountId?: string, sourcePath?: string, targetFolderId?: string }): Promise<{}>;
    /**
     * Change a sync rule in place: its account, remote path, target folder,
     * schedule or options, or `enabled` to pause and resume it without deleting
     * it. Only the fields present in the request are touched, but `options` is
     * replaced wholesale rather than merged — send the whole object.
     * 
     * A change takes effect from the next run; a run already in flight is not
     * affected, and nothing a previous run imported is revisited or undone.
     * Requires the elevated (admin) tier.
     *
     * @param {string} id - 
     * @param {boolean} enabled - 
     * @param {string[]} options - 
     * @param {string} schedule - 
     * @param {string} sftpAccountId - 
     * @param {string} sourcePath - 
     * @param {string} targetFolderId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    syncRuleUpdate(id: string, enabled?: boolean, options?: string[], schedule?: string, sftpAccountId?: string, sourcePath?: string, targetFolderId?: string): Promise<{}>;
    syncRuleUpdate(
        paramsOrFirst: { id: string, enabled?: boolean, options?: string[], schedule?: string, sftpAccountId?: string, sourcePath?: string, targetFolderId?: string } | string,
        ...rest: [(boolean)?, (string[])?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, enabled?: boolean, options?: string[], schedule?: string, sftpAccountId?: string, sourcePath?: string, targetFolderId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, enabled?: boolean, options?: string[], schedule?: string, sftpAccountId?: string, sourcePath?: string, targetFolderId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                enabled: rest[0] as boolean,
                options: rest[1] as string[],
                schedule: rest[2] as string,
                sftpAccountId: rest[3] as string,
                sourcePath: rest[4] as string,
                targetFolderId: rest[5] as string            
            };
        }
        
        const id = params.id;
        const enabled = params.enabled;
        const options = params.options;
        const schedule = params.schedule;
        const sftpAccountId = params.sftpAccountId;
        const sourcePath = params.sourcePath;
        const targetFolderId = params.targetFolderId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/storage/sftp/rules/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = options;
        }
        if (typeof schedule !== 'undefined') {
            apiPayload['schedule'] = schedule;
        }
        if (typeof sftpAccountId !== 'undefined') {
            apiPayload['sftp_account_id'] = sftpAccountId;
        }
        if (typeof sourcePath !== 'undefined') {
            apiPayload['source_path'] = sourcePath;
        }
        if (typeof targetFolderId !== 'undefined') {
            apiPayload['target_folder_id'] = targetFolderId;
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
     * Queue a run of this rule straight away, outside its schedule. Answers 202
     * with the rule id as soon as the job is queued — it does not wait for the
     * transfer and it does not hand back a run id, so follow the outcome in
     * `GET /sftp/sync-history`.
     * 
     * The rule's own schedule is untouched, and this does not enable a disabled
     * rule: the job is queued but does nothing when it picks a disabled rule
     * up. Requires the elevated (admin) tier.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleRun(params: { id: string }): Promise<{}>;
    /**
     * Queue a run of this rule straight away, outside its schedule. Answers 202
     * with the rule id as soon as the job is queued — it does not wait for the
     * transfer and it does not hand back a run id, so follow the outcome in
     * `GET /sftp/sync-history`.
     * 
     * The rule's own schedule is untouched, and this does not enable a disabled
     * rule: the job is queued but does nothing when it picks a disabled rule
     * up. Requires the elevated (admin) tier.
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
     * Return the per-file protocol of one run of one sync rule: every entry the
     * run recorded, oldest first, with the remote source path, the asset it
     * produced, the bytes transferred, the duration and the error where one
     * applies — plus a `summary` counting those entries by status (`success`,
     * `skipped`, `failed`, `quarantined`).
     * 
     * Use it to find out what one run actually did. It is not paginated, and it
     * does not list a rule's runs: take the `run_id` from
     * `GET /sftp/sync-history`. An unknown `runId` under a rule that does exist
     * is an empty protocol, not a 404.
     *
     * @param {string} params.id - 
     * @param {string} params.runId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleRunProtocol(params: { id: string, runId: string }): Promise<{}>;
    /**
     * Return the per-file protocol of one run of one sync rule: every entry the
     * run recorded, oldest first, with the remote source path, the asset it
     * produced, the bytes transferred, the duration and the error where one
     * applies — plus a `summary` counting those entries by status (`success`,
     * `skipped`, `failed`, `quarantined`).
     * 
     * Use it to find out what one run actually did. It is not paginated, and it
     * does not list a rule's runs: take the `run_id` from
     * `GET /sftp/sync-history`. An unknown `runId` under a rule that does exist
     * is an empty protocol, not a 404.
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
     * Page through this tenant's per-file sync records across every rule,
     * newest first. Each entry names the run it belongs to, the rule, the
     * remote source path, the asset it produced where there is one, the
     * outcome — `success`, `skipped`, `failed` or `quarantined` — the bytes
     * transferred and how long it took. Narrow it with `rule_id` and a
     * `from`/`to` range on when the entry was recorded; one page is returned,
     * 50 entries by default and 200 at most.
     * 
     * This is the audit trail of what SFTP sync has brought in: every file
     * taken, skipped and rejected leaves an entry, and a run that matched
     * nothing leaves one too. To read a single run whole instead, group by
     * `run_id` and call `GET /sftp/rules/{id}/runs/{runId}`.
     *
     * @param {string} params.ruleId - 
     * @param {string} params.from - Only runs recorded at or after this instant.
     * @param {string} params.to - Only runs recorded at or before this instant.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    syncRuleHistory(params?: { ruleId?: string, from?: string, to?: string }): Promise<{}>;
    /**
     * Page through this tenant's per-file sync records across every rule,
     * newest first. Each entry names the run it belongs to, the rule, the
     * remote source path, the asset it produced where there is one, the
     * outcome — `success`, `skipped`, `failed` or `quarantined` — the bytes
     * transferred and how long it took. Narrow it with `rule_id` and a
     * `from`/`to` range on when the entry was recorded; one page is returned,
     * 50 entries by default and 200 at most.
     * 
     * This is the audit trail of what SFTP sync has brought in: every file
     * taken, skipped and rejected leaves an entry, and a run that matched
     * nothing leaves one too. To read a single run whole instead, group by
     * `run_id` and call `GET /sftp/rules/{id}/runs/{runId}`.
     *
     * @param {string} ruleId - 
     * @param {string} from - Only runs recorded at or after this instant.
     * @param {string} to - Only runs recorded at or before this instant.
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
     * Break this tenant's library down by asset kind — `image`, `video`,
     * `audio`, `pdf`, `document`, `archive`, `model3d`, `other` — with a count
     * and a byte total for each kind that has at least one asset, alongside the
     * tenant-wide totals.
     * 
     * A dashboard figure, not a listing: no asset is named, and nothing here
     * can be filtered. The tenant-wide byte total is the same running figure
     * `GET /tenant/usage` reports, so soft-deleted assets are counted in it.
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
     * Report this tenant's storage consumption: the bytes in use, the byte
     * quota in force (null when the tenant is uncapped) and how many assets it
     * holds. This is the figure the quota check on upload compares against — it
     * is maintained as a running total on every upload and permanent delete
     * rather than summed on read.
     * 
     * Soft-deleted assets are still counted, because their files are still
     * stored; their bytes come back only once they are permanently deleted. For
     * the breakdown by asset kind, see `GET /tenant/stats`.
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
