import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Format } from '../enums/format';
import { Mode } from '../enums/mode';
import { CreateImportTarget } from '../enums/create-import-target';
import { Direction } from '../enums/direction';
import { ApplyMode } from '../enums/apply-mode';

export class Io {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The calling tenant's bulk jobs, newest first. Jobs are created by the
     * feature blocks (import / export / A/B swap / tenant copy / sample) —
     * never here; this surface is read-only.
     * 
     *
     * @param {any} params.type - 
     * @param {any} params.status - 
     * @param {string} params.vendor - 
     * @param {string} params.app - 
     * @param {string} params.entity - 
     * @param {number} params.limit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    listBulkJobs(params?: { type?: any, status?: any, vendor?: string, app?: string, entity?: string, limit?: number }): Promise<Models.ValidationFailedResponse>;
    /**
     * The calling tenant's bulk jobs, newest first. Jobs are created by the
     * feature blocks (import / export / A/B swap / tenant copy / sample) —
     * never here; this surface is read-only.
     * 
     *
     * @param {any} type - 
     * @param {any} status - 
     * @param {string} vendor - 
     * @param {string} app - 
     * @param {string} entity - 
     * @param {number} limit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listBulkJobs(type?: any, status?: any, vendor?: string, app?: string, entity?: string, limit?: number): Promise<Models.ValidationFailedResponse>;
    listBulkJobs(
        paramsOrFirst?: { type?: any, status?: any, vendor?: string, app?: string, entity?: string, limit?: number } | any,
        ...rest: [(any)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { type?: any, status?: any, vendor?: string, app?: string, entity?: string, limit?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('type' in paramsOrFirst || 'status' in paramsOrFirst || 'vendor' in paramsOrFirst || 'app' in paramsOrFirst || 'entity' in paramsOrFirst || 'limit' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { type?: any, status?: any, vendor?: string, app?: string, entity?: string, limit?: number };
        } else {
            params = {
                type: paramsOrFirst as any,
                status: rest[0] as any,
                vendor: rest[1] as string,
                app: rest[2] as string,
                entity: rest[3] as string,
                limit: rest[4] as number            
            };
        }
        
        const type = params.type;
        const status = params.status;
        const vendor = params.vendor;
        const app = params.app;
        const entity = params.entity;
        const limit = params.limit;


        const apiPath = '/v1/io/bulk-jobs';
        const apiPayload: Payload = {};
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof vendor !== 'undefined') {
            apiPayload['vendor'] = vendor;
        }
        if (typeof app !== 'undefined') {
            apiPayload['app'] = app;
        }
        if (typeof entity !== 'undefined') {
            apiPayload['entity'] = entity;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
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
     * Status, row counts, and progress for one bulk job.
     * 
     * Tenant-scoped: an id belonging to another tenant is filtered out and
     * is therefore indistinguishable from a non-existent one — which is the
     * intent.
     * 
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    getBulkJob(params: { id: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * Status, row counts, and progress for one bulk job.
     * 
     * Tenant-scoped: an id belonging to another tenant is filtered out and
     * is therefore indistinguishable from a non-existent one — which is the
     * intent.
     * 
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getBulkJob(id: string): Promise<Models.ValidationFailedResponse>;
    getBulkJob(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ValidationFailedResponse> {
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

        const apiPath = '/v1/io/bulk-jobs/{id}'.replace('{id}', id);
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
     * Flat list of the entities the calling tenant's installed apps expose,
     * sorted by vendor, app, entity. Feeds the entity pickers of the
     * Integration Studio I/O nodes.
     * 
     * The app set comes from `baseline.tenant_app_versions`. Per app the
     * entity list is resolved from the tenant's pinned schema version; when
     * that pointer is stale (missing or not applied) it falls back to the
     * latest applied version of `(vendor, app)`. Apps with no applied
     * schema at all contribute no entities.
     * 
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    listIoEntities(): Promise<Models.ValidationFailedResponse> {

        const apiPath = '/v1/io/entities';
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
     * Creates a `bulk_job` and dispatches the engine to export the tenant's
     * rows for an entity. CSV/XML stream row-by-row into an S3 multipart
     * upload (flat RAM); JSON/XLSX are buffered. The response carries the
     * object key the result will be written to.
     * 
     *
     * @param {string} params.app - 
     * @param {string} params.entity - 
     * @param {string} params.vendor - 
     * @param {Format} params.format - 
     * @param {string} params.profileId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    createExport(params: { app: string, entity: string, vendor: string, format?: Format, profileId?: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * Creates a `bulk_job` and dispatches the engine to export the tenant's
     * rows for an entity. CSV/XML stream row-by-row into an S3 multipart
     * upload (flat RAM); JSON/XLSX are buffered. The response carries the
     * object key the result will be written to.
     * 
     *
     * @param {string} app - 
     * @param {string} entity - 
     * @param {string} vendor - 
     * @param {Format} format - 
     * @param {string} profileId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createExport(app: string, entity: string, vendor: string, format?: Format, profileId?: string): Promise<Models.ValidationFailedResponse>;
    createExport(
        paramsOrFirst: { app: string, entity: string, vendor: string, format?: Format, profileId?: string } | string,
        ...rest: [(string)?, (string)?, (Format)?, (string)?]    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { app: string, entity: string, vendor: string, format?: Format, profileId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { app: string, entity: string, vendor: string, format?: Format, profileId?: string };
        } else {
            params = {
                app: paramsOrFirst as string,
                entity: rest[0] as string,
                vendor: rest[1] as string,
                format: rest[2] as Format,
                profileId: rest[3] as string            
            };
        }
        
        const app = params.app;
        const entity = params.entity;
        const vendor = params.vendor;
        const format = params.format;
        const profileId = params.profileId;

        if (typeof app === 'undefined') {
            throw new RevenexxException('Missing required parameter: "app"');
        }
        if (typeof entity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entity"');
        }
        if (typeof vendor === 'undefined') {
            throw new RevenexxException('Missing required parameter: "vendor"');
        }

        const apiPath = '/v1/io/exports';
        const apiPayload: Payload = {};
        if (typeof app !== 'undefined') {
            apiPayload['app'] = app;
        }
        if (typeof entity !== 'undefined') {
            apiPayload['entity'] = entity;
        }
        if (typeof format !== 'undefined') {
            apiPayload['format'] = format;
        }
        if (typeof profileId !== 'undefined') {
            apiPayload['profile_id'] = profileId;
        }
        if (typeof vendor !== 'undefined') {
            apiPayload['vendor'] = vendor;
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
     * Mints a short-TTL signed S3 `GET` URL for the object a completed
     * export wrote. Tenant-scoped: an id belonging to another tenant — or
     * to a job that is not an export — is indistinguishable from a
     * non-existent one and answers `404`.
     * 
     * The job must have reached `completed` or `partial`; any earlier
     * state answers `409` and carries the current `job_status`.
     * 
     *
     * @param {string} params.id - The export job's id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    getExportUrl(params: { id: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * Mints a short-TTL signed S3 `GET` URL for the object a completed
     * export wrote. Tenant-scoped: an id belonging to another tenant — or
     * to a job that is not an export — is indistinguishable from a
     * non-existent one and answers `404`.
     * 
     * The job must have reached `completed` or `partial`; any earlier
     * state answers `409` and carries the current `job_status`.
     * 
     *
     * @param {string} id - The export job's id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getExportUrl(id: string): Promise<Models.ValidationFailedResponse>;
    getExportUrl(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ValidationFailedResponse> {
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

        const apiPath = '/v1/io/exports/{id}/url'.replace('{id}', id);
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
     * Creates a `bulk_job` and dispatches the engine to import a previously
     * uploaded object into the named entity. The engine streams CSV
     * row-by-row (flat RAM at 1M+ rows) and COPYs into the entity's staging
     * sibling before a merge / content-hash delta into the target.
     * 
     *
     * @param {string} params.app - 
     * @param {string} params.entity - 
     * @param {string} params.objectKey - 
     * @param {string} params.vendor - 
     * @param {Format} params.format - 
     * @param {string[]} params.keys - Natural-key columns for upsert / delta.
     * @param {number} params.maxRejects - Rejected rows tolerated before the import fails. Omit for
unlimited (reject-and-continue); `0` = fail-fast.

     * @param {Mode} params.mode - 
     * @param {string} params.profileId - 
     * @param {CreateImportTarget} params.target - `shadow` stages the dataset into the A/B `{table}__shadow`
sibling for diff + switch-over instead of writing live.

     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    createImport(params: { app: string, entity: string, objectKey: string, vendor: string, format?: Format, keys?: string[], maxRejects?: number, mode?: Mode, profileId?: string, target?: CreateImportTarget }): Promise<Models.ValidationFailedResponse>;
    /**
     * Creates a `bulk_job` and dispatches the engine to import a previously
     * uploaded object into the named entity. The engine streams CSV
     * row-by-row (flat RAM at 1M+ rows) and COPYs into the entity's staging
     * sibling before a merge / content-hash delta into the target.
     * 
     *
     * @param {string} app - 
     * @param {string} entity - 
     * @param {string} objectKey - 
     * @param {string} vendor - 
     * @param {Format} format - 
     * @param {string[]} keys - Natural-key columns for upsert / delta.
     * @param {number} maxRejects - Rejected rows tolerated before the import fails. Omit for
unlimited (reject-and-continue); `0` = fail-fast.

     * @param {Mode} mode - 
     * @param {string} profileId - 
     * @param {CreateImportTarget} target - `shadow` stages the dataset into the A/B `{table}__shadow`
sibling for diff + switch-over instead of writing live.

     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createImport(app: string, entity: string, objectKey: string, vendor: string, format?: Format, keys?: string[], maxRejects?: number, mode?: Mode, profileId?: string, target?: CreateImportTarget): Promise<Models.ValidationFailedResponse>;
    createImport(
        paramsOrFirst: { app: string, entity: string, objectKey: string, vendor: string, format?: Format, keys?: string[], maxRejects?: number, mode?: Mode, profileId?: string, target?: CreateImportTarget } | string,
        ...rest: [(string)?, (string)?, (string)?, (Format)?, (string[])?, (number)?, (Mode)?, (string)?, (CreateImportTarget)?]    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { app: string, entity: string, objectKey: string, vendor: string, format?: Format, keys?: string[], maxRejects?: number, mode?: Mode, profileId?: string, target?: CreateImportTarget };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { app: string, entity: string, objectKey: string, vendor: string, format?: Format, keys?: string[], maxRejects?: number, mode?: Mode, profileId?: string, target?: CreateImportTarget };
        } else {
            params = {
                app: paramsOrFirst as string,
                entity: rest[0] as string,
                objectKey: rest[1] as string,
                vendor: rest[2] as string,
                format: rest[3] as Format,
                keys: rest[4] as string[],
                maxRejects: rest[5] as number,
                mode: rest[6] as Mode,
                profileId: rest[7] as string,
                target: rest[8] as CreateImportTarget            
            };
        }
        
        const app = params.app;
        const entity = params.entity;
        const objectKey = params.objectKey;
        const vendor = params.vendor;
        const format = params.format;
        const keys = params.keys;
        const maxRejects = params.maxRejects;
        const mode = params.mode;
        const profileId = params.profileId;
        const target = params.target;

        if (typeof app === 'undefined') {
            throw new RevenexxException('Missing required parameter: "app"');
        }
        if (typeof entity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entity"');
        }
        if (typeof objectKey === 'undefined') {
            throw new RevenexxException('Missing required parameter: "objectKey"');
        }
        if (typeof vendor === 'undefined') {
            throw new RevenexxException('Missing required parameter: "vendor"');
        }

        const apiPath = '/v1/io/imports';
        const apiPayload: Payload = {};
        if (typeof app !== 'undefined') {
            apiPayload['app'] = app;
        }
        if (typeof entity !== 'undefined') {
            apiPayload['entity'] = entity;
        }
        if (typeof format !== 'undefined') {
            apiPayload['format'] = format;
        }
        if (typeof keys !== 'undefined') {
            apiPayload['keys'] = keys;
        }
        if (typeof maxRejects !== 'undefined') {
            apiPayload['max_rejects'] = maxRejects;
        }
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
        }
        if (typeof objectKey !== 'undefined') {
            apiPayload['object_key'] = objectKey;
        }
        if (typeof profileId !== 'undefined') {
            apiPayload['profile_id'] = profileId;
        }
        if (typeof target !== 'undefined') {
            apiPayload['target'] = target;
        }
        if (typeof vendor !== 'undefined') {
            apiPayload['vendor'] = vendor;
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
     * The calling tenant's saved profiles, ordered by name.
     * 
     * When `X-Revenexx-Market` is present the listing is filtered to the
     * profiles offered for that market — global profiles (`markets: null`)
     * plus those whose `markets` contain it. Omit the header to get every
     * profile, which is what the management view wants.
     * 
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    listProfiles(): Promise<Models.ValidationFailedResponse> {

        const apiPath = '/v1/io/profiles';
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
     * A tenant-secured, reusable mapping (field rename + transforms + keys)
     * for a direction (`import`/`export`), format, and entity. Runnable
     * on-click via `/io/profiles/{id}/run`.
     * 
     *
     * @param {string} params.app - 
     * @param {Direction} params.direction - 
     * @param {string} params.entity - 
     * @param {string} params.format - 
     * @param {string} params.name - 
     * @param {string} params.vendor - 
     * @param {ApplyMode} params.applyMode - 
     * @param {object} params.mapping - Field mapping. `fields[]` carry `target` (DB column),
`source` (external name) and ordered `transforms`; `keys[]`
are natural-key columns. Optional `max_rejects`/`target`
ride along for import runs.

     * @param {string[]} params.markets - Markets this profile applies to (n:m). Omitted, `null` or
empty means global — offered for every market.

     * @param {object} params.options - Free-form per-profile engine options.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    createProfile(params: { app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object }): Promise<Models.ValidationFailedResponse>;
    /**
     * A tenant-secured, reusable mapping (field rename + transforms + keys)
     * for a direction (`import`/`export`), format, and entity. Runnable
     * on-click via `/io/profiles/{id}/run`.
     * 
     *
     * @param {string} app - 
     * @param {Direction} direction - 
     * @param {string} entity - 
     * @param {string} format - 
     * @param {string} name - 
     * @param {string} vendor - 
     * @param {ApplyMode} applyMode - 
     * @param {object} mapping - Field mapping. `fields[]` carry `target` (DB column),
`source` (external name) and ordered `transforms`; `keys[]`
are natural-key columns. Optional `max_rejects`/`target`
ride along for import runs.

     * @param {string[]} markets - Markets this profile applies to (n:m). Omitted, `null` or
empty means global — offered for every market.

     * @param {object} options - Free-form per-profile engine options.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createProfile(app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object): Promise<Models.ValidationFailedResponse>;
    createProfile(
        paramsOrFirst: { app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object } | string,
        ...rest: [(Direction)?, (string)?, (string)?, (string)?, (string)?, (ApplyMode)?, (object)?, (string[])?, (object)?]    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object };
        } else {
            params = {
                app: paramsOrFirst as string,
                direction: rest[0] as Direction,
                entity: rest[1] as string,
                format: rest[2] as string,
                name: rest[3] as string,
                vendor: rest[4] as string,
                applyMode: rest[5] as ApplyMode,
                mapping: rest[6] as object,
                markets: rest[7] as string[],
                options: rest[8] as object            
            };
        }
        
        const app = params.app;
        const direction = params.direction;
        const entity = params.entity;
        const format = params.format;
        const name = params.name;
        const vendor = params.vendor;
        const applyMode = params.applyMode;
        const mapping = params.mapping;
        const markets = params.markets;
        const options = params.options;

        if (typeof app === 'undefined') {
            throw new RevenexxException('Missing required parameter: "app"');
        }
        if (typeof direction === 'undefined') {
            throw new RevenexxException('Missing required parameter: "direction"');
        }
        if (typeof entity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entity"');
        }
        if (typeof format === 'undefined') {
            throw new RevenexxException('Missing required parameter: "format"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof vendor === 'undefined') {
            throw new RevenexxException('Missing required parameter: "vendor"');
        }

        const apiPath = '/v1/io/profiles';
        const apiPayload: Payload = {};
        if (typeof app !== 'undefined') {
            apiPayload['app'] = app;
        }
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
        if (typeof mapping !== 'undefined') {
            apiPayload['mapping'] = Client.toWireKeys(mapping, {"maxRejects":{"wire":"max_rejects","children":null},"targets":{"wire":"targets","children":{"relations":{"wire":"relations","children":{"parentKeys":{"wire":"parent_keys","children":null},"parentPk":{"wire":"parent_pk","children":null},"sourceKeys":{"wire":"source_keys","children":null}}}}}});
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = options;
        }
        if (typeof vendor !== 'undefined') {
            apiPayload['vendor'] = vendor;
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
     * Permanently remove a saved profile owned by the calling tenant.
     * 
     * Idempotent, and deliberately not a `404` path: deleting an id that
     * does not belong to the tenant still answers `200`, with `deleted: 0`.
     * 
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    deleteProfile(params: { id: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * Permanently remove a saved profile owned by the calling tenant.
     * 
     * Idempotent, and deliberately not a `404` path: deleting an id that
     * does not belong to the tenant still answers `200`, with `deleted: 0`.
     * 
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProfile(id: string): Promise<Models.ValidationFailedResponse>;
    deleteProfile(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ValidationFailedResponse> {
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

        const apiPath = '/v1/io/profiles/{id}'.replace('{id}', id);
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
     * A single saved profile. Tenant-scoped: an id owned by another tenant
     * is indistinguishable from a non-existent one and answers `404`.
     * 
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    showProfile(params: { id: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * A single saved profile. Tenant-scoped: an id owned by another tenant
     * is indistinguishable from a non-existent one and answers `404`.
     * 
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    showProfile(id: string): Promise<Models.ValidationFailedResponse>;
    showProfile(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ValidationFailedResponse> {
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

        const apiPath = '/v1/io/profiles/{id}'.replace('{id}', id);
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
     * Replace a saved profile's mapping, format, or apply mode (tenant-scoped).
     *
     * @param {string} params.id - 
     * @param {string} params.app - 
     * @param {Direction} params.direction - 
     * @param {string} params.entity - 
     * @param {string} params.format - 
     * @param {string} params.name - 
     * @param {string} params.vendor - 
     * @param {ApplyMode} params.applyMode - 
     * @param {object} params.mapping - Field mapping. `fields[]` carry `target` (DB column),
`source` (external name) and ordered `transforms`; `keys[]`
are natural-key columns. Optional `max_rejects`/`target`
ride along for import runs.

     * @param {string[]} params.markets - Markets this profile applies to (n:m). Omitted, `null` or
empty means global — offered for every market.

     * @param {object} params.options - Free-form per-profile engine options.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    updateProfile(params: { id: string, app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object }): Promise<Models.ValidationFailedResponse>;
    /**
     * Replace a saved profile's mapping, format, or apply mode (tenant-scoped).
     *
     * @param {string} id - 
     * @param {string} app - 
     * @param {Direction} direction - 
     * @param {string} entity - 
     * @param {string} format - 
     * @param {string} name - 
     * @param {string} vendor - 
     * @param {ApplyMode} applyMode - 
     * @param {object} mapping - Field mapping. `fields[]` carry `target` (DB column),
`source` (external name) and ordered `transforms`; `keys[]`
are natural-key columns. Optional `max_rejects`/`target`
ride along for import runs.

     * @param {string[]} markets - Markets this profile applies to (n:m). Omitted, `null` or
empty means global — offered for every market.

     * @param {object} options - Free-form per-profile engine options.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProfile(id: string, app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object): Promise<Models.ValidationFailedResponse>;
    updateProfile(
        paramsOrFirst: { id: string, app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object } | string,
        ...rest: [(string)?, (Direction)?, (string)?, (string)?, (string)?, (string)?, (ApplyMode)?, (object)?, (string[])?, (object)?]    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { id: string, app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, app: string, direction: Direction, entity: string, format: string, name: string, vendor: string, applyMode?: ApplyMode, mapping?: object, markets?: string[], options?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                app: rest[0] as string,
                direction: rest[1] as Direction,
                entity: rest[2] as string,
                format: rest[3] as string,
                name: rest[4] as string,
                vendor: rest[5] as string,
                applyMode: rest[6] as ApplyMode,
                mapping: rest[7] as object,
                markets: rest[8] as string[],
                options: rest[9] as object            
            };
        }
        
        const id = params.id;
        const app = params.app;
        const direction = params.direction;
        const entity = params.entity;
        const format = params.format;
        const name = params.name;
        const vendor = params.vendor;
        const applyMode = params.applyMode;
        const mapping = params.mapping;
        const markets = params.markets;
        const options = params.options;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof app === 'undefined') {
            throw new RevenexxException('Missing required parameter: "app"');
        }
        if (typeof direction === 'undefined') {
            throw new RevenexxException('Missing required parameter: "direction"');
        }
        if (typeof entity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entity"');
        }
        if (typeof format === 'undefined') {
            throw new RevenexxException('Missing required parameter: "format"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof vendor === 'undefined') {
            throw new RevenexxException('Missing required parameter: "vendor"');
        }

        const apiPath = '/v1/io/profiles/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof app !== 'undefined') {
            apiPayload['app'] = app;
        }
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
        if (typeof mapping !== 'undefined') {
            apiPayload['mapping'] = Client.toWireKeys(mapping, {"maxRejects":{"wire":"max_rejects","children":null},"targets":{"wire":"targets","children":{"relations":{"wire":"relations","children":{"parentKeys":{"wire":"parent_keys","children":null},"parentPk":{"wire":"parent_pk","children":null},"sourceKeys":{"wire":"source_keys","children":null}}}}}});
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = options;
        }
        if (typeof vendor !== 'undefined') {
            apiPayload['vendor'] = vendor;
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
     * Dispatches the engine using the saved profile. An import run requires
     * `object_key` (upload first); an export run writes a generated key.
     * 
     *
     * @param {string} params.id - 
     * @param {string[]} params.markets - Target market(s) the imported rows are assigned to (n:m).
Overrides the profile's own `markets` for this run; an
empty array means global (no assignment).

     * @param {string} params.objectKey - The uploaded object to import. Required for an import
run; ignored for an export run, which generates its own
key. Omitting it on an import answers `422` with
`RUN_NO_OBJECT`.

     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    runProfile(params: { id: string, markets?: string[], objectKey?: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * Dispatches the engine using the saved profile. An import run requires
     * `object_key` (upload first); an export run writes a generated key.
     * 
     *
     * @param {string} id - 
     * @param {string[]} markets - Target market(s) the imported rows are assigned to (n:m).
Overrides the profile's own `markets` for this run; an
empty array means global (no assignment).

     * @param {string} objectKey - The uploaded object to import. Required for an import
run; ignored for an export run, which generates its own
key. Omitting it on an import answers `422` with
`RUN_NO_OBJECT`.

     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    runProfile(id: string, markets?: string[], objectKey?: string): Promise<Models.ValidationFailedResponse>;
    runProfile(
        paramsOrFirst: { id: string, markets?: string[], objectKey?: string } | string,
        ...rest: [(string[])?, (string)?]    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { id: string, markets?: string[], objectKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, markets?: string[], objectKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                markets: rest[0] as string[],
                objectKey: rest[1] as string            
            };
        }
        
        const id = params.id;
        const markets = params.markets;
        const objectKey = params.objectKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/io/profiles/{id}/run'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
        }
        if (typeof objectKey !== 'undefined') {
            apiPayload['object_key'] = objectKey;
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
     * Returns a short-lived signed S3 `PUT` URL (+ required headers) and
     * the `object_key` to reference in a subsequent `/io/imports`. The
     * client uploads bytes directly to object storage — never through
     * Baseline.
     * 
     *
     * @param {string} params.extension - File extension for the generated key.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     */
    createUpload(params?: { extension?: string }): Promise<Models.ValidationFailedResponse>;
    /**
     * Returns a short-lived signed S3 `PUT` URL (+ required headers) and
     * the `object_key` to reference in a subsequent `/io/imports`. The
     * client uploads bytes directly to object storage — never through
     * Baseline.
     * 
     *
     * @param {string} extension - File extension for the generated key.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ValidationFailedResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createUpload(extension?: string): Promise<Models.ValidationFailedResponse>;
    createUpload(
        paramsOrFirst?: { extension?: string } | string    
    ): Promise<Models.ValidationFailedResponse> {
        let params: { extension?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { extension?: string };
        } else {
            params = {
                extension: paramsOrFirst as string            
            };
        }
        
        const extension = params.extension;


        const apiPath = '/v1/io/uploads';
        const apiPayload: Payload = {};
        if (typeof extension !== 'undefined') {
            apiPayload['extension'] = extension;
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
