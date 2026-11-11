import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { VcsTriggerMode } from '../enums/vcs-trigger-mode';
import { ReleaseMode } from '../enums/release-mode';
import { CubesCreateVcsDeploymentType } from '../enums/cubes-create-vcs-deployment-type';

export class Cubes {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project's Cubes. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: name, enabled, deploymentId, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CubeList>}
     */
    cubesList(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.CubeList>;
    /**
     * Get a list of all the project's Cubes. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: name, enabled, deploymentId, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CubeList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesList(queries?: string[], search?: string, total?: boolean): Promise<Models.CubeList>;
    cubesList(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.CubeList> {
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


        const apiPath = '/v1/cubes';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
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
     * Create a new Cube.
     *
     * @param {string} params.cubeId - Cube ID. Choose a custom ID or generate a random ID with `ID.unique()`.
     * @param {string} params.name - Cube name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is Cube enabled?
     * @param {string} params.installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} params.logging - When disabled, build logs and errors are excluded.
     * @param {string} params.providerBranch - Production branch for the repo linked to the Cube.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the Cube.
     * @param {string} params.providerRootDirectory - Path to the Cube in the linked repo.
     * @param {boolean} params.providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {VcsTriggerMode} params.vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cube>}
     */
    cubesCreate(params: { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode }): Promise<Models.Cube>;
    /**
     * Create a new Cube.
     *
     * @param {string} cubeId - Cube ID. Choose a custom ID or generate a random ID with `ID.unique()`.
     * @param {string} name - Cube name. Max length: 128 chars.
     * @param {boolean} enabled - Is Cube enabled?
     * @param {string} installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} logging - When disabled, build logs and errors are excluded.
     * @param {string} providerBranch - Production branch for the repo linked to the Cube.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the Cube.
     * @param {string} providerRootDirectory - Path to the Cube in the linked repo.
     * @param {boolean} providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {VcsTriggerMode} vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cube>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesCreate(cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode): Promise<Models.Cube>;
    cubesCreate(
        paramsOrFirst: { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (VcsTriggerMode)?]    
    ): Promise<Models.Cube> {
        let params: { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                installationId: rest[2] as string,
                logging: rest[3] as boolean,
                providerBranch: rest[4] as string,
                providerRepositoryId: rest[5] as string,
                providerRootDirectory: rest[6] as string,
                providerSilentMode: rest[7] as boolean,
                vcsTriggerMode: rest[8] as VcsTriggerMode            
            };
        }
        
        const cubeId = params.cubeId;
        const name = params.name;
        const enabled = params.enabled;
        const installationId = params.installationId;
        const logging = params.logging;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const vcsTriggerMode = params.vcsTriggerMode;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/cubes';
        const apiPayload: Payload = {};
        if (typeof cubeId !== 'undefined') {
            apiPayload['cubeId'] = cubeId;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof installationId !== 'undefined') {
            apiPayload['installationId'] = installationId;
        }
        if (typeof logging !== 'undefined') {
            apiPayload['logging'] = logging;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof providerBranch !== 'undefined') {
            apiPayload['providerBranch'] = providerBranch;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            apiPayload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            apiPayload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof providerSilentMode !== 'undefined') {
            apiPayload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof vcsTriggerMode !== 'undefined') {
            apiPayload['vcsTriggerMode'] = vcsTriggerMode;
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
     * Delete a Cube by its unique ID.
     *
     * @param {string} params.cubeId - Cube ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cubesDelete(params: { cubeId: string }): Promise<{}>;
    /**
     * Delete a Cube by its unique ID.
     *
     * @param {string} cubeId - Cube ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesDelete(cubeId: string): Promise<{}>;
    cubesDelete(
        paramsOrFirst: { cubeId: string } | string    
    ): Promise<{}> {
        let params: { cubeId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string };
        } else {
            params = {
                cubeId: paramsOrFirst as string            
            };
        }
        
        const cubeId = params.cubeId;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }

        const apiPath = '/v1/cubes/{cubeId}'.replace('{cubeId}', cubeId);
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
     * Get a Cube by its unique ID.
     *
     * @param {string} params.cubeId - Cube ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cube>}
     */
    cubesGet(params: { cubeId: string }): Promise<Models.Cube>;
    /**
     * Get a Cube by its unique ID.
     *
     * @param {string} cubeId - Cube ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cube>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesGet(cubeId: string): Promise<Models.Cube>;
    cubesGet(
        paramsOrFirst: { cubeId: string } | string    
    ): Promise<Models.Cube> {
        let params: { cubeId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string };
        } else {
            params = {
                cubeId: paramsOrFirst as string            
            };
        }
        
        const cubeId = params.cubeId;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }

        const apiPath = '/v1/cubes/{cubeId}'.replace('{cubeId}', cubeId);
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
     * Update a Cube by its unique ID.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {string} params.name - Cube name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is Cube enabled?
     * @param {string} params.installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} params.logging - When disabled, build logs and errors are excluded.
     * @param {string} params.providerBranch - Production branch for the repo linked to the Cube.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the Cube.
     * @param {string} params.providerRootDirectory - Path to the Cube in the linked repo.
     * @param {boolean} params.providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {VcsTriggerMode} params.vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cube>}
     */
    cubesUpdate(params: { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode }): Promise<Models.Cube>;
    /**
     * Update a Cube by its unique ID.
     *
     * @param {string} cubeId - Cube ID.
     * @param {string} name - Cube name. Max length: 128 chars.
     * @param {boolean} enabled - Is Cube enabled?
     * @param {string} installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} logging - When disabled, build logs and errors are excluded.
     * @param {string} providerBranch - Production branch for the repo linked to the Cube.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the Cube.
     * @param {string} providerRootDirectory - Path to the Cube in the linked repo.
     * @param {boolean} providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {VcsTriggerMode} vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cube>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesUpdate(cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode): Promise<Models.Cube>;
    cubesUpdate(
        paramsOrFirst: { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (VcsTriggerMode)?]    
    ): Promise<Models.Cube> {
        let params: { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsTriggerMode?: VcsTriggerMode };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                installationId: rest[2] as string,
                logging: rest[3] as boolean,
                providerBranch: rest[4] as string,
                providerRepositoryId: rest[5] as string,
                providerRootDirectory: rest[6] as string,
                providerSilentMode: rest[7] as boolean,
                vcsTriggerMode: rest[8] as VcsTriggerMode            
            };
        }
        
        const cubeId = params.cubeId;
        const name = params.name;
        const enabled = params.enabled;
        const installationId = params.installationId;
        const logging = params.logging;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const vcsTriggerMode = params.vcsTriggerMode;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/cubes/{cubeId}'.replace('{cubeId}', cubeId);
        const apiPayload: Payload = {};
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof installationId !== 'undefined') {
            apiPayload['installationId'] = installationId;
        }
        if (typeof logging !== 'undefined') {
            apiPayload['logging'] = logging;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof providerBranch !== 'undefined') {
            apiPayload['providerBranch'] = providerBranch;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            apiPayload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            apiPayload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof providerSilentMode !== 'undefined') {
            apiPayload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof vcsTriggerMode !== 'undefined') {
            apiPayload['vcsTriggerMode'] = vcsTriggerMode;
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
     * Get a list of all the Cube's code deployments. You can use the query params to filter your results.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {string[]} params.queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     */
    cubesListDeployments(params: { cubeId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.DeploymentList>;
    /**
     * Get a list of all the Cube's code deployments. You can use the query params to filter your results.
     *
     * @param {string} cubeId - Cube ID.
     * @param {string[]} queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesListDeployments(cubeId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.DeploymentList>;
    cubesListDeployments(
        paramsOrFirst: { cubeId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.DeploymentList> {
        let params: { cubeId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const cubeId = params.cubeId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }

        const apiPath = '/v1/cubes/{cubeId}/deployments'.replace('{cubeId}', cubeId);
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            apiPayload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
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
     * Create a new Cube deployment from a gzipped tar archive of the Cube directory. The build bundles the Cube and submits it as a release for review. The deployment ends `ready` once the release is submitted, or `failed` when it is rejected, with one line per problem in `buildLogs`. The review itself is not reported through this API.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {File} params.code - The Cube directory packaged as a gzipped tar archive (`.tar.gz`) with `cube.json` at its root, sent as the file part of the multipart request.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {ReleaseMode} params.releaseMode - Release mode: `deploy` releases the Cube once its round is approved; `preview` makes it a candidate the vendor accepts after checking it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    cubesCreateDeployment(params: { cubeId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode, onProgress?: (progress: UploadProgress) => void }): Promise<Models.Deployment>;
    /**
     * Create a new Cube deployment from a gzipped tar archive of the Cube directory. The build bundles the Cube and submits it as a release for review. The deployment ends `ready` once the release is submitted, or `failed` when it is rejected, with one line per problem in `buildLogs`. The review itself is not reported through this API.
     *
     * @param {string} cubeId - Cube ID.
     * @param {File} code - The Cube directory packaged as a gzipped tar archive (`.tar.gz`) with `cube.json` at its root, sent as the file part of the multipart request.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {ReleaseMode} releaseMode - Release mode: `deploy` releases the Cube once its round is approved; `preview` makes it a candidate the vendor accepts after checking it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesCreateDeployment(cubeId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    cubesCreateDeployment(
        paramsOrFirst: { cubeId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode, onProgress?: (progress: UploadProgress) => void } | string,
        ...rest: [(File)?, (boolean)?, (ReleaseMode)?,((progress: UploadProgress) => void)?]    
    ): Promise<Models.Deployment> {
        let params: { cubeId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode };
            onProgress = (paramsOrFirst as { onProgress?: (progress: UploadProgress) => void }).onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                code: rest[0] as File,
                activate: rest[1] as boolean,
                releaseMode: rest[2] as ReleaseMode            
            };
            onProgress = rest[3] as ((progress: UploadProgress) => void);
        }
        
        const cubeId = params.cubeId;
        const code = params.code;
        const activate = params.activate;
        const releaseMode = params.releaseMode;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/cubes/{cubeId}/deployments'.replace('{cubeId}', cubeId);
        const apiPayload: Payload = {};
        if (typeof activate !== 'undefined') {
            apiPayload['activate'] = activate;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof releaseMode !== 'undefined') {
            apiPayload['releaseMode'] = releaseMode;
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
     * Create a deployment when a Cube is connected to VCS.
     * 
     * This endpoint lets you create a deployment from a branch or commit.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash, tag name
     * @param {CubesCreateVcsDeploymentType} params.type - Type of reference passed. Allowed values are: branch, commit, tag
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    cubesCreateVcsDeployment(params: { cubeId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean }): Promise<Models.Deployment>;
    /**
     * Create a deployment when a Cube is connected to VCS.
     * 
     * This endpoint lets you create a deployment from a branch or commit.
     *
     * @param {string} cubeId - Cube ID.
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash, tag name
     * @param {CubesCreateVcsDeploymentType} type - Type of reference passed. Allowed values are: branch, commit, tag
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesCreateVcsDeployment(cubeId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean): Promise<Models.Deployment>;
    cubesCreateVcsDeployment(
        paramsOrFirst: { cubeId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean } | string,
        ...rest: [(string)?, (CubesCreateVcsDeploymentType)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { cubeId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                reference: rest[0] as string,
                type: rest[1] as CubesCreateVcsDeploymentType,
                activate: rest[2] as boolean            
            };
        }
        
        const cubeId = params.cubeId;
        const reference = params.reference;
        const type = params.type;
        const activate = params.activate;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }
        if (typeof reference === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reference"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/cubes/{cubeId}/deployments/vcs'.replace('{cubeId}', cubeId);
        const apiPayload: Payload = {};
        if (typeof activate !== 'undefined') {
            apiPayload['activate'] = activate;
        }
        if (typeof reference !== 'undefined') {
            apiPayload['reference'] = reference;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
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
     * Get a Cube deployment by its unique ID.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    cubesGetDeployment(params: { cubeId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Get a Cube deployment by its unique ID.
     *
     * @param {string} cubeId - Cube ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesGetDeployment(cubeId: string, deploymentId: string): Promise<Models.Deployment>;
    cubesGetDeployment(
        paramsOrFirst: { cubeId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { cubeId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, deploymentId: string };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const cubeId = params.cubeId;
        const deploymentId = params.deploymentId;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/cubes/{cubeId}/deployments/{deploymentId}'.replace('{cubeId}', cubeId).replace('{deploymentId}', deploymentId);
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
     * List the release rounds of this Cube as the registry holds
     * them: version, round number, state (submitted, candidate,
     * approved, rejected), release mode, gate results, decision
     * deadline, rejection reason and the deployment that opened it.
     *
     * @param {string} params.cubeId - Cube ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cubesListReleases(params: { cubeId: string }): Promise<{}>;
    /**
     * List the release rounds of this Cube as the registry holds
     * them: version, round number, state (submitted, candidate,
     * approved, rejected), release mode, gate results, decision
     * deadline, rejection reason and the deployment that opened it.
     *
     * @param {string} cubeId - Cube ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesListReleases(cubeId: string): Promise<{}>;
    cubesListReleases(
        paramsOrFirst: { cubeId: string } | string    
    ): Promise<{}> {
        let params: { cubeId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string };
        } else {
            params = {
                cubeId: paramsOrFirst as string            
            };
        }
        
        const cubeId = params.cubeId;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }

        const apiPath = '/v1/cubes/{cubeId}/releases'.replace('{cubeId}', cubeId);
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
     * Accept a preview candidate of this Cube after checking it.
     * Without `version` the version of the latest released
     * deployment is accepted; without `rc` its newest candidate
     * round. Only the Cube's vendor can accept, and only a candidate
     * in preview mode.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {number} params.rc - Release round to accept. Defaults to the newest candidate round of the version.
     * @param {string} params.version - Version to accept. Defaults to the version of the latest released deployment.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cubesAcceptRelease(params: { cubeId: string, rc?: number, version?: string }): Promise<{}>;
    /**
     * Accept a preview candidate of this Cube after checking it.
     * Without `version` the version of the latest released
     * deployment is accepted; without `rc` its newest candidate
     * round. Only the Cube's vendor can accept, and only a candidate
     * in preview mode.
     *
     * @param {string} cubeId - Cube ID.
     * @param {number} rc - Release round to accept. Defaults to the newest candidate round of the version.
     * @param {string} version - Version to accept. Defaults to the version of the latest released deployment.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesAcceptRelease(cubeId: string, rc?: number, version?: string): Promise<{}>;
    cubesAcceptRelease(
        paramsOrFirst: { cubeId: string, rc?: number, version?: string } | string,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { cubeId: string, rc?: number, version?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, rc?: number, version?: string };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                rc: rest[0] as number,
                version: rest[1] as string            
            };
        }
        
        const cubeId = params.cubeId;
        const rc = params.rc;
        const version = params.version;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }

        const apiPath = '/v1/cubes/{cubeId}/releases/accept'.replace('{cubeId}', cubeId);
        const apiPayload: Payload = {};
        if (typeof rc !== 'undefined') {
            apiPayload['rc'] = rc;
        }
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
     * Release the source a version of this Cube was built from
     * again, so it is linted and judged again in a new release
     * round. Takes the round's deployment, or the newest deployment
     * whose manifest names this version; `commit` narrows that.
     *
     * @param {string} params.cubeId - Cube ID.
     * @param {string} params.version - Version to rebuild.
     * @param {string} params.commit - Commit SHA the round recorded (7 to 64 hex characters). Optional.
     * @param {string} params.deploymentId - Deployment the round was built as. Optional.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    cubesRebuildRelease(params: { cubeId: string, version: string, commit?: string, deploymentId?: string }): Promise<Models.Deployment>;
    /**
     * Release the source a version of this Cube was built from
     * again, so it is linted and judged again in a new release
     * round. Takes the round's deployment, or the newest deployment
     * whose manifest names this version; `commit` narrows that.
     *
     * @param {string} cubeId - Cube ID.
     * @param {string} version - Version to rebuild.
     * @param {string} commit - Commit SHA the round recorded (7 to 64 hex characters). Optional.
     * @param {string} deploymentId - Deployment the round was built as. Optional.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cubesRebuildRelease(cubeId: string, version: string, commit?: string, deploymentId?: string): Promise<Models.Deployment>;
    cubesRebuildRelease(
        paramsOrFirst: { cubeId: string, version: string, commit?: string, deploymentId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.Deployment> {
        let params: { cubeId: string, version: string, commit?: string, deploymentId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cubeId: string, version: string, commit?: string, deploymentId?: string };
        } else {
            params = {
                cubeId: paramsOrFirst as string,
                version: rest[0] as string,
                commit: rest[1] as string,
                deploymentId: rest[2] as string            
            };
        }
        
        const cubeId = params.cubeId;
        const version = params.version;
        const commit = params.commit;
        const deploymentId = params.deploymentId;

        if (typeof cubeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cubeId"');
        }
        if (typeof version === 'undefined') {
            throw new RevenexxException('Missing required parameter: "version"');
        }

        const apiPath = '/v1/cubes/{cubeId}/releases/rebuild'.replace('{cubeId}', cubeId);
        const apiPayload: Payload = {};
        if (typeof commit !== 'undefined') {
            apiPayload['commit'] = commit;
        }
        if (typeof deploymentId !== 'undefined') {
            apiPayload['deploymentId'] = deploymentId;
        }
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
}
