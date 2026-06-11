import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Compression } from '../enums/compression';
import { Gravity } from '../enums/gravity';
import { Output } from '../enums/output';

export class Storage {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the storage buckets. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus, transformations
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BucketList>}
     */
    storageListBuckets(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.BucketList>;
    /**
     * Get a list of all the storage buckets. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus, transformations
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BucketList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageListBuckets(queries?: string[], search?: string, total?: boolean): Promise<Models.BucketList>;
    storageListBuckets(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.BucketList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/v1/storage/buckets';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new storage bucket.
     *
     * @param {string} params.bucketId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Bucket name
     * @param {string[]} params.allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {boolean} params.antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {Compression} params.compression - Compression algorithm chosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} params.enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {boolean} params.encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} params.fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {number} params.maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 30MB.
     * @param {string[]} params.permissions - An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.transformations - Are image transformations enabled?
     * @throws {RevenexxException}
     * @returns {Promise<Models.Bucket>}
     */
    storageCreateBucket(params: { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean }): Promise<Models.Bucket>;
    /**
     * Create a new storage bucket.
     *
     * @param {string} bucketId - Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Bucket name
     * @param {string[]} allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {boolean} antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {Compression} compression - Compression algorithm chosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {boolean} encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {number} maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 30MB.
     * @param {string[]} permissions - An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} transformations - Are image transformations enabled?
     * @throws {RevenexxException}
     * @returns {Promise<Models.Bucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageCreateBucket(bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean): Promise<Models.Bucket>;
    storageCreateBucket(
        paramsOrFirst: { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean } | string,
        ...rest: [(string)?, (string[])?, (boolean)?, (Compression)?, (boolean)?, (boolean)?, (boolean)?, (number)?, (string[])?, (boolean)?]    
    ): Promise<Models.Bucket> {
        let params: { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                name: rest[0] as string,
                allowedFileExtensions: rest[1] as string[],
                antivirus: rest[2] as boolean,
                compression: rest[3] as Compression,
                enabled: rest[4] as boolean,
                encryption: rest[5] as boolean,
                fileSecurity: rest[6] as boolean,
                maximumFileSize: rest[7] as number,
                permissions: rest[8] as string[],
                transformations: rest[9] as boolean            
            };
        }
        
        const bucketId = params.bucketId;
        const name = params.name;
        const allowedFileExtensions = params.allowedFileExtensions;
        const antivirus = params.antivirus;
        const compression = params.compression;
        const enabled = params.enabled;
        const encryption = params.encryption;
        const fileSecurity = params.fileSecurity;
        const maximumFileSize = params.maximumFileSize;
        const permissions = params.permissions;
        const transformations = params.transformations;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/storage/buckets';
        const payload: Payload = {};
        if (typeof allowedFileExtensions !== 'undefined') {
            payload['allowedFileExtensions'] = allowedFileExtensions;
        }
        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }
        if (typeof bucketId !== 'undefined') {
            payload['bucketId'] = bucketId;
        }
        if (typeof compression !== 'undefined') {
            payload['compression'] = compression;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof fileSecurity !== 'undefined') {
            payload['fileSecurity'] = fileSecurity;
        }
        if (typeof maximumFileSize !== 'undefined') {
            payload['maximumFileSize'] = maximumFileSize;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof transformations !== 'undefined') {
            payload['transformations'] = transformations;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    storageDeleteBucket(params: { bucketId: string }): Promise<{}>;
    /**
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageDeleteBucket(bucketId: string): Promise<{}>;
    storageDeleteBucket(
        paramsOrFirst: { bucketId: string } | string    
    ): Promise<{}> {
        let params: { bucketId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string            
            };
        }
        
        const bucketId = params.bucketId;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Bucket>}
     */
    storageGetBucket(params: { bucketId: string }): Promise<Models.Bucket>;
    /**
     * Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Bucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageGetBucket(bucketId: string): Promise<Models.Bucket>;
    storageGetBucket(
        paramsOrFirst: { bucketId: string } | string    
    ): Promise<Models.Bucket> {
        let params: { bucketId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string            
            };
        }
        
        const bucketId = params.bucketId;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a storage bucket by its unique ID.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @param {string} params.name - Bucket name
     * @param {string[]} params.allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {boolean} params.antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {Compression} params.compression - Compression algorithm chosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} params.enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {boolean} params.encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} params.fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {number} params.maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 30MB.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} params.transformations - Are image transformations enabled?
     * @throws {RevenexxException}
     * @returns {Promise<Models.Bucket>}
     */
    storageUpdateBucket(params: { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean }): Promise<Models.Bucket>;
    /**
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @param {string} name - Bucket name
     * @param {string[]} allowedFileExtensions - Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @param {boolean} antivirus - Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled
     * @param {Compression} compression - Compression algorithm chosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled
     * @param {boolean} enabled - Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @param {boolean} encryption - Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled
     * @param {boolean} fileSecurity - Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {number} maximumFileSize - Maximum file size allowed in bytes. Maximum allowed value is 30MB.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @param {boolean} transformations - Are image transformations enabled?
     * @throws {RevenexxException}
     * @returns {Promise<Models.Bucket>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageUpdateBucket(bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean): Promise<Models.Bucket>;
    storageUpdateBucket(
        paramsOrFirst: { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean } | string,
        ...rest: [(string)?, (string[])?, (boolean)?, (Compression)?, (boolean)?, (boolean)?, (boolean)?, (number)?, (string[])?, (boolean)?]    
    ): Promise<Models.Bucket> {
        let params: { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, name: string, allowedFileExtensions?: string[], antivirus?: boolean, compression?: Compression, enabled?: boolean, encryption?: boolean, fileSecurity?: boolean, maximumFileSize?: number, permissions?: string[], transformations?: boolean };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                name: rest[0] as string,
                allowedFileExtensions: rest[1] as string[],
                antivirus: rest[2] as boolean,
                compression: rest[3] as Compression,
                enabled: rest[4] as boolean,
                encryption: rest[5] as boolean,
                fileSecurity: rest[6] as boolean,
                maximumFileSize: rest[7] as number,
                permissions: rest[8] as string[],
                transformations: rest[9] as boolean            
            };
        }
        
        const bucketId = params.bucketId;
        const name = params.name;
        const allowedFileExtensions = params.allowedFileExtensions;
        const antivirus = params.antivirus;
        const compression = params.compression;
        const enabled = params.enabled;
        const encryption = params.encryption;
        const fileSecurity = params.fileSecurity;
        const maximumFileSize = params.maximumFileSize;
        const permissions = params.permissions;
        const transformations = params.transformations;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        const payload: Payload = {};
        if (typeof allowedFileExtensions !== 'undefined') {
            payload['allowedFileExtensions'] = allowedFileExtensions;
        }
        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }
        if (typeof compression !== 'undefined') {
            payload['compression'] = compression;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof fileSecurity !== 'undefined') {
            payload['fileSecurity'] = fileSecurity;
        }
        if (typeof maximumFileSize !== 'undefined') {
            payload['maximumFileSize'] = maximumFileSize;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof transformations !== 'undefined') {
            payload['transformations'] = transformations;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all the user files. You can use the query params to filter your results.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FileList>}
     */
    storageListFiles(params: { bucketId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.FileList>;
    /**
     * Get a list of all the user files. You can use the query params to filter your results.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FileList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageListFiles(bucketId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.FileList>;
    storageListFiles(
        paramsOrFirst: { bucketId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.FileList> {
        let params: { bucketId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const bucketId = params.bucketId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://app.revenexx.com/docs/server/storage#storageCreateBucket) API or directly from your Revenexx console.
     * 
     * Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.
     * 
     * When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-revenexx-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.
     * 
     * If you're creating a new file using one of the Revenexx SDKs, all the chunking logic will be managed by the SDK internally.
     * 
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.file - Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file).
     * @param {string} params.fileId - File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string[]} params.permissions - An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {RevenexxException}
     * @returns {Promise<Models.File>}
     */
    storageCreateFile(params: { bucketId: string, file: string, fileId: string, permissions?: string[], onProgress?: (progress: UploadProgress) => void }): Promise<Models.File>;
    /**
     * Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://app.revenexx.com/docs/server/storage#storageCreateBucket) API or directly from your Revenexx console.
     * 
     * Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.
     * 
     * When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-revenexx-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.
     * 
     * If you're creating a new file using one of the Revenexx SDKs, all the chunking logic will be managed by the SDK internally.
     * 
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} file - Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file).
     * @param {string} fileId - File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string[]} permissions - An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {RevenexxException}
     * @returns {Promise<Models.File>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageCreateFile(bucketId: string, file: string, fileId: string, permissions?: string[], onProgress?: (progress: UploadProgress) => void): Promise<Models.File>;
    storageCreateFile(
        paramsOrFirst: { bucketId: string, file: string, fileId: string, permissions?: string[], onProgress?: (progress: UploadProgress) => void } | string,
        ...rest: [(string)?, (string)?, (string[])?,((progress: UploadProgress) => void)?]    
    ): Promise<Models.File> {
        let params: { bucketId: string, file: string, fileId: string, permissions?: string[] };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, file: string, fileId: string, permissions?: string[] };
            onProgress = paramsOrFirst?.onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                file: rest[0] as string,
                fileId: rest[1] as string,
                permissions: rest[2] as string[]            
            };
            onProgress = rest[3] as ((progress: UploadProgress) => void);
        }
        
        const bucketId = params.bucketId;
        const file = params.file;
        const fileId = params.fileId;
        const permissions = params.permissions;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof file === 'undefined') {
            throw new RevenexxException('Missing required parameter: "file"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        const payload: Payload = {};
        if (typeof file !== 'undefined') {
            payload['file'] = file;
        }
        if (typeof fileId !== 'undefined') {
            payload['fileId'] = fileId;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        }

        return this.client.chunkedUpload(
            'post',
            uri,
            apiHeaders,
            payload,
            onProgress
        );
    }

    /**
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    storageDeleteFile(params: { bucketId: string, fileId: string }): Promise<{}>;
    /**
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageDeleteFile(bucketId: string, fileId: string): Promise<{}>;
    storageDeleteFile(
        paramsOrFirst: { bucketId: string, fileId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { bucketId: string, fileId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.File>}
     */
    storageGetFile(params: { bucketId: string, fileId: string }): Promise<Models.File>;
    /**
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.File>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageGetFile(bucketId: string, fileId: string): Promise<Models.File>;
    storageGetFile(
        paramsOrFirst: { bucketId: string, fileId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.File> {
        let params: { bucketId: string, fileId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
     *
     * @param {string} params.bucketId - Bucket unique ID.
     * @param {string} params.fileId - File ID.
     * @param {string} params.name - File name.
     * @param {string[]} params.permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {RevenexxException}
     * @returns {Promise<Models.File>}
     */
    storageUpdateFile(params: { bucketId: string, fileId: string, name?: string, permissions?: string[] }): Promise<Models.File>;
    /**
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
     *
     * @param {string} bucketId - Bucket unique ID.
     * @param {string} fileId - File ID.
     * @param {string} name - File name.
     * @param {string[]} permissions - An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @throws {RevenexxException}
     * @returns {Promise<Models.File>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageUpdateFile(bucketId: string, fileId: string, name?: string, permissions?: string[]): Promise<Models.File>;
    storageUpdateFile(
        paramsOrFirst: { bucketId: string, fileId: string, name?: string, permissions?: string[] } | string,
        ...rest: [(string)?, (string)?, (string[])?]    
    ): Promise<Models.File> {
        let params: { bucketId: string, fileId: string, name?: string, permissions?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, name?: string, permissions?: string[] };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                name: rest[1] as string,
                permissions: rest[2] as string[]            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const name = params.name;
        const permissions = params.permissions;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} params.bucketId - Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.token - File token for accessing this file.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    storageGetFileDownload(params: { bucketId: string, fileId: string, token?: string }): Promise<{}>;
    /**
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} bucketId - Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} token - File token for accessing this file.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageGetFileDownload(bucketId: string, fileId: string, token?: string): Promise<{}>;
    storageGetFileDownload(
        paramsOrFirst: { bucketId: string, fileId: string, token?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { bucketId: string, fileId: string, token?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, token?: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                token: rest[1] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const token = params.token;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files/{fileId}/download'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof token !== 'undefined') {
            payload['token'] = token;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID
     * @param {number} params.width - Resize preview image width, Pass an integer between 0 to 4000.
     * @param {number} params.height - Resize preview image height, Pass an integer between 0 to 4000.
     * @param {Gravity} params.gravity - Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
     * @param {number} params.quality - Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @param {number} params.borderWidth - Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
     * @param {string} params.borderColor - Preview image border color. Use a valid HEX color, no # is needed for prefix.
     * @param {number} params.borderRadius - Preview image border radius in pixels. Pass an integer between 0 to 4000.
     * @param {number} params.opacity - Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
     * @param {number} params.rotation - Preview image rotation in degrees. Pass an integer between -360 and 360.
     * @param {string} params.background - Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
     * @param {Output} params.output - Output format type (jpeg, jpg, png, gif and webp).
     * @param {string} params.token - File token for accessing this file.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    storageGetFilePreview(params: { bucketId: string, fileId: string, width?: number, height?: number, gravity?: Gravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: Output, token?: string }): Promise<{}>;
    /**
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID
     * @param {number} width - Resize preview image width, Pass an integer between 0 to 4000.
     * @param {number} height - Resize preview image height, Pass an integer between 0 to 4000.
     * @param {Gravity} gravity - Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
     * @param {number} quality - Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.
     * @param {number} borderWidth - Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
     * @param {string} borderColor - Preview image border color. Use a valid HEX color, no # is needed for prefix.
     * @param {number} borderRadius - Preview image border radius in pixels. Pass an integer between 0 to 4000.
     * @param {number} opacity - Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
     * @param {number} rotation - Preview image rotation in degrees. Pass an integer between -360 and 360.
     * @param {string} background - Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
     * @param {Output} output - Output format type (jpeg, jpg, png, gif and webp).
     * @param {string} token - File token for accessing this file.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageGetFilePreview(bucketId: string, fileId: string, width?: number, height?: number, gravity?: Gravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: Output, token?: string): Promise<{}>;
    storageGetFilePreview(
        paramsOrFirst: { bucketId: string, fileId: string, width?: number, height?: number, gravity?: Gravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: Output, token?: string } | string,
        ...rest: [(string)?, (number)?, (number)?, (Gravity)?, (number)?, (number)?, (string)?, (number)?, (number)?, (number)?, (string)?, (Output)?, (string)?]    
    ): Promise<{}> {
        let params: { bucketId: string, fileId: string, width?: number, height?: number, gravity?: Gravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: Output, token?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, width?: number, height?: number, gravity?: Gravity, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: Output, token?: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                width: rest[1] as number,
                height: rest[2] as number,
                gravity: rest[3] as Gravity,
                quality: rest[4] as number,
                borderWidth: rest[5] as number,
                borderColor: rest[6] as string,
                borderRadius: rest[7] as number,
                opacity: rest[8] as number,
                rotation: rest[9] as number,
                background: rest[10] as string,
                output: rest[11] as Output,
                token: rest[12] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const width = params.width;
        const height = params.height;
        const gravity = params.gravity;
        const quality = params.quality;
        const borderWidth = params.borderWidth;
        const borderColor = params.borderColor;
        const borderRadius = params.borderRadius;
        const opacity = params.opacity;
        const rotation = params.rotation;
        const background = params.background;
        const output = params.output;
        const token = params.token;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files/{fileId}/preview'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof gravity !== 'undefined') {
            payload['gravity'] = gravity;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }
        if (typeof borderWidth !== 'undefined') {
            payload['borderWidth'] = borderWidth;
        }
        if (typeof borderColor !== 'undefined') {
            payload['borderColor'] = borderColor;
        }
        if (typeof borderRadius !== 'undefined') {
            payload['borderRadius'] = borderRadius;
        }
        if (typeof opacity !== 'undefined') {
            payload['opacity'] = opacity;
        }
        if (typeof rotation !== 'undefined') {
            payload['rotation'] = rotation;
        }
        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }
        if (typeof output !== 'undefined') {
            payload['output'] = output;
        }
        if (typeof token !== 'undefined') {
            payload['token'] = token;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
     *
     * @param {string} params.bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} params.fileId - File ID.
     * @param {string} params.token - File token for accessing this file.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    storageGetFileView(params: { bucketId: string, fileId: string, token?: string }): Promise<{}>;
    /**
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
     *
     * @param {string} bucketId - Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).
     * @param {string} fileId - File ID.
     * @param {string} token - File token for accessing this file.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    storageGetFileView(bucketId: string, fileId: string, token?: string): Promise<{}>;
    storageGetFileView(
        paramsOrFirst: { bucketId: string, fileId: string, token?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { bucketId: string, fileId: string, token?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { bucketId: string, fileId: string, token?: string };
        } else {
            params = {
                bucketId: paramsOrFirst as string,
                fileId: rest[0] as string,
                token: rest[1] as string            
            };
        }
        
        const bucketId = params.bucketId;
        const fileId = params.fileId;
        const token = params.token;

        if (typeof bucketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "bucketId"');
        }
        if (typeof fileId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileId"');
        }

        const apiPath = '/v1/storage/buckets/{bucketId}/files/{fileId}/view'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};
        if (typeof token !== 'undefined') {
            payload['token'] = token;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
