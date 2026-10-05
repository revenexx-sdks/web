import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class TagManagerContainer {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every container check of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} params.id - Only rows whose `id` equals this value.
     * @param {string} params.containerVersionId - Only rows whose `container_version_id` equals this value.
     * @param {number} params.containerVersionNumber - Only rows whose `container_version_number` equals this value.
     * @param {number} params.policyVersionNumber - Only rows whose `policy_version_number` equals this value.
     * @param {string} params.reason - Only rows whose `reason` equals this value.
     * @param {boolean} params.ok - Only rows whose `ok` equals this value.
     * @param {string} params.checkedAt - Only rows whose `checked_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerContainerChecksList(params?: { limit?: number, offset?: number, order?: string, id?: string, containerVersionId?: string, containerVersionNumber?: number, policyVersionNumber?: number, reason?: string, ok?: boolean, checkedAt?: string }): Promise<{}>;
    /**
     * Every container check of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} id - Only rows whose `id` equals this value.
     * @param {string} containerVersionId - Only rows whose `container_version_id` equals this value.
     * @param {number} containerVersionNumber - Only rows whose `container_version_number` equals this value.
     * @param {number} policyVersionNumber - Only rows whose `policy_version_number` equals this value.
     * @param {string} reason - Only rows whose `reason` equals this value.
     * @param {boolean} ok - Only rows whose `ok` equals this value.
     * @param {string} checkedAt - Only rows whose `checked_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerChecksList(limit?: number, offset?: number, order?: string, id?: string, containerVersionId?: string, containerVersionNumber?: number, policyVersionNumber?: number, reason?: string, ok?: boolean, checkedAt?: string): Promise<{}>;
    tagManagerContainerChecksList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, containerVersionId?: string, containerVersionNumber?: number, policyVersionNumber?: number, reason?: string, ok?: boolean, checkedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?, (boolean)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, containerVersionId?: string, containerVersionNumber?: number, policyVersionNumber?: number, reason?: string, ok?: boolean, checkedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, containerVersionId?: string, containerVersionNumber?: number, policyVersionNumber?: number, reason?: string, ok?: boolean, checkedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                containerVersionId: rest[3] as string,
                containerVersionNumber: rest[4] as number,
                policyVersionNumber: rest[5] as number,
                reason: rest[6] as string,
                ok: rest[7] as boolean,
                checkedAt: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const containerVersionId = params.containerVersionId;
        const containerVersionNumber = params.containerVersionNumber;
        const policyVersionNumber = params.policyVersionNumber;
        const reason = params.reason;
        const ok = params.ok;
        const checkedAt = params.checkedAt;


        const apiPath = '/v1/tag-manager/container-checks';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof containerVersionId !== 'undefined') {
            apiPayload['container_version_id'] = containerVersionId;
        }
        if (typeof containerVersionNumber !== 'undefined') {
            apiPayload['container_version_number'] = containerVersionNumber;
        }
        if (typeof policyVersionNumber !== 'undefined') {
            apiPayload['policy_version_number'] = policyVersionNumber;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof ok !== 'undefined') {
            apiPayload['ok'] = ok;
        }
        if (typeof checkedAt !== 'undefined') {
            apiPayload['checked_at'] = checkedAt;
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
     * One container check by id.
     *
     * @param {string} params.id - The id of the container check.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerCheck>}
     */
    tagManagerContainerChecksGet(params: { id: string }): Promise<Models.TagManagerContainerCheck>;
    /**
     * One container check by id.
     *
     * @param {string} id - The id of the container check.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerCheck>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerChecksGet(id: string): Promise<Models.TagManagerContainerCheck>;
    tagManagerContainerChecksGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TagManagerContainerCheck> {
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

        const apiPath = '/v1/tag-manager/container-checks/{id}'.replace('{id}', id);
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
     * Every container version of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} params.id - Only rows whose `id` equals this value.
     * @param {number} params.number - Only rows whose `number` equals this value.
     * @param {string} params.market - Only rows whose `market` equals this value.
     * @param {string} params.sha256 - Only rows whose `sha256` equals this value.
     * @param {number} params.policyVersionNumber - Only rows whose `policy_version_number` equals this value.
     * @param {string} params.policySha256 - Only rows whose `policy_sha256` equals this value.
     * @param {number} params.rolledBackFrom - Only rows whose `rolled_back_from` equals this value.
     * @param {string} params.note - Only rows whose `note` equals this value.
     * @param {string} params.publishedBy - Only rows whose `published_by` equals this value.
     * @param {string} params.publishedAt - Only rows whose `published_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerContainerVersionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, number?: number, market?: string, sha256?: string, policyVersionNumber?: number, policySha256?: string, rolledBackFrom?: number, note?: string, publishedBy?: string, publishedAt?: string }): Promise<{}>;
    /**
     * Every container version of this tenant visible in the requested market, paged. Equality filters on plain columns; jsonb columns are answered but not filterable.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} id - Only rows whose `id` equals this value.
     * @param {number} number - Only rows whose `number` equals this value.
     * @param {string} market - Only rows whose `market` equals this value.
     * @param {string} sha256 - Only rows whose `sha256` equals this value.
     * @param {number} policyVersionNumber - Only rows whose `policy_version_number` equals this value.
     * @param {string} policySha256 - Only rows whose `policy_sha256` equals this value.
     * @param {number} rolledBackFrom - Only rows whose `rolled_back_from` equals this value.
     * @param {string} note - Only rows whose `note` equals this value.
     * @param {string} publishedBy - Only rows whose `published_by` equals this value.
     * @param {string} publishedAt - Only rows whose `published_at` equals this value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerVersionsList(limit?: number, offset?: number, order?: string, id?: string, number?: number, market?: string, sha256?: string, policyVersionNumber?: number, policySha256?: string, rolledBackFrom?: number, note?: string, publishedBy?: string, publishedAt?: string): Promise<{}>;
    tagManagerContainerVersionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, number?: number, market?: string, sha256?: string, policyVersionNumber?: number, policySha256?: string, rolledBackFrom?: number, note?: string, publishedBy?: string, publishedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, number?: number, market?: string, sha256?: string, policyVersionNumber?: number, policySha256?: string, rolledBackFrom?: number, note?: string, publishedBy?: string, publishedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, number?: number, market?: string, sha256?: string, policyVersionNumber?: number, policySha256?: string, rolledBackFrom?: number, note?: string, publishedBy?: string, publishedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                number: rest[3] as number,
                market: rest[4] as string,
                sha256: rest[5] as string,
                policyVersionNumber: rest[6] as number,
                policySha256: rest[7] as string,
                rolledBackFrom: rest[8] as number,
                note: rest[9] as string,
                publishedBy: rest[10] as string,
                publishedAt: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const number = params.number;
        const market = params.market;
        const sha256 = params.sha256;
        const policyVersionNumber = params.policyVersionNumber;
        const policySha256 = params.policySha256;
        const rolledBackFrom = params.rolledBackFrom;
        const note = params.note;
        const publishedBy = params.publishedBy;
        const publishedAt = params.publishedAt;


        const apiPath = '/v1/tag-manager/container-versions';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof sha256 !== 'undefined') {
            apiPayload['sha256'] = sha256;
        }
        if (typeof policyVersionNumber !== 'undefined') {
            apiPayload['policy_version_number'] = policyVersionNumber;
        }
        if (typeof policySha256 !== 'undefined') {
            apiPayload['policy_sha256'] = policySha256;
        }
        if (typeof rolledBackFrom !== 'undefined') {
            apiPayload['rolled_back_from'] = rolledBackFrom;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof publishedBy !== 'undefined') {
            apiPayload['published_by'] = publishedBy;
        }
        if (typeof publishedAt !== 'undefined') {
            apiPayload['published_at'] = publishedAt;
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
     * One container version by id.
     *
     * @param {string} params.id - The id of the container version.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerVersion>}
     */
    tagManagerContainerVersionsGet(params: { id: string }): Promise<Models.TagManagerContainerVersion>;
    /**
     * One container version by id.
     *
     * @param {string} id - The id of the container version.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerVersion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerVersionsGet(id: string): Promise<Models.TagManagerContainerVersion>;
    tagManagerContainerVersionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TagManagerContainerVersion> {
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

        const apiPath = '/v1/tag-manager/container-versions/{id}'.replace('{id}', id);
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
     * Freeze the active marketing tags, triggers and variables for the requested market into a new container version, after checking them against the consent manager's published policy. Every violation is answered at once.
     *
     * @param {string} params.note - A note kept with the version.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerVersion>}
     */
    tagManagerContainerPublish(params?: { note?: string }): Promise<Models.TagManagerContainerVersion>;
    /**
     * Freeze the active marketing tags, triggers and variables for the requested market into a new container version, after checking them against the consent manager's published policy. Every violation is answered at once.
     *
     * @param {string} note - A note kept with the version.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerVersion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerPublish(note?: string): Promise<Models.TagManagerContainerVersion>;
    tagManagerContainerPublish(
        paramsOrFirst?: { note?: string } | string    
    ): Promise<Models.TagManagerContainerVersion> {
        let params: { note?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { note?: string };
        } else {
            params = {
                note: paramsOrFirst as string            
            };
        }
        
        const note = params.note;


        const apiPath = '/v1/tag-manager/container/publish';
        const apiPayload: Payload = {};
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
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
     * Check every live container against the consent policy published now and record the result. Also runs on the consent manager's policy_version.published event. Changes no tag.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerContainerRecheck(params: { data: object }): Promise<{}>;
    /**
     * Check every live container against the consent policy published now and record the result. Also runs on the consent manager's policy_version.published event. Changes no tag.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerRecheck(data: object): Promise<{}>;
    tagManagerContainerRecheck(
        paramsOrFirst: { data: object } | object    
    ): Promise<{}> {
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

        const apiPath = '/v1/tag-manager/container/recheck';
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
     * Publish the snapshot of an earlier version as a NEW version, after the same checks against the policy published now. The old version is not touched.
     *
     * @param {number} params.version - The number of the version to publish again.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerVersion>}
     */
    tagManagerContainerRollback(params: { version: number }): Promise<Models.TagManagerContainerVersion>;
    /**
     * Publish the snapshot of an earlier version as a NEW version, after the same checks against the policy published now. The old version is not touched.
     *
     * @param {number} version - The number of the version to publish again.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainerVersion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerRollback(version: number): Promise<Models.TagManagerContainerVersion>;
    tagManagerContainerRollback(
        paramsOrFirst: { version: number } | number    
    ): Promise<Models.TagManagerContainerVersion> {
        let params: { version: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { version: number };
        } else {
            params = {
                version: paramsOrFirst as number            
            };
        }
        
        const version = params.version;

        if (typeof version === 'undefined') {
            throw new RevenexxException('Missing required parameter: "version"');
        }

        const apiPath = '/v1/tag-manager/container/rollback';
        const apiPayload: Payload = {};
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
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
     * Per market: the live version, its hash and policy version, and the latest check with its violations — what the Studio shows as a notice when a new policy no longer discloses a live vendor.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerContainerStatus(): Promise<{}> {

        const apiPath = '/v1/tag-manager/container/status';
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
     * A dry run of the publish: builds the draft for the requested market, reads the consent manager's published policy for it and answers every violation. Writes nothing.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerContainerValidate(params: { data: object }): Promise<{}>;
    /**
     * A dry run of the publish: builds the draft for the requested market, reads the consent manager's published policy for it and answers every violation. Writes nothing.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerContainerValidate(data: object): Promise<{}>;
    tagManagerContainerValidate(
        paramsOrFirst: { data: object } | object    
    ): Promise<{}> {
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

        const apiPath = '/v1/tag-manager/container/validate';
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
     * Mint a token that lets a storefront load the unpublished draft (`?rvx_tm_preview=<token>`). The token is answered once and stored only as its hash.
     *
     * @param {number} params.ttlMinutes - Lifetime in minutes, default 60, at most 7 days.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    tagManagerPreviewCreate(params?: { ttlMinutes?: number }): Promise<{}>;
    /**
     * Mint a token that lets a storefront load the unpublished draft (`?rvx_tm_preview=<token>`). The token is answered once and stored only as its hash.
     *
     * @param {number} ttlMinutes - Lifetime in minutes, default 60, at most 7 days.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerPreviewCreate(ttlMinutes?: number): Promise<{}>;
    tagManagerPreviewCreate(
        paramsOrFirst?: { ttlMinutes?: number } | number    
    ): Promise<{}> {
        let params: { ttlMinutes?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ttlMinutes?: number };
        } else {
            params = {
                ttlMinutes: paramsOrFirst as number            
            };
        }
        
        const ttlMinutes = params.ttlMinutes;


        const apiPath = '/v1/tag-manager/preview';
        const apiPayload: Payload = {};
        if (typeof ttlMinutes !== 'undefined') {
            apiPayload['ttl_minutes'] = ttlMinutes;
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
