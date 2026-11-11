import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { VcsTriggerMode } from '../enums/vcs-trigger-mode';
import { ReleaseMode } from '../enums/release-mode';
import { CubesCreateVcsDeploymentType } from '../enums/cubes-create-vcs-deployment-type';

export class Integrations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project's integration node packages. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: name, enabled, deploymentId, buildCommand, installCommand, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.IntegrationList>}
     */
    integrationsList(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.IntegrationList>;
    /**
     * Get a list of all the project's integration node packages. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: name, enabled, deploymentId, buildCommand, installCommand, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.IntegrationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsList(queries?: string[], search?: string, total?: boolean): Promise<Models.IntegrationList>;
    integrationsList(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.IntegrationList> {
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


        const apiPath = '/v1/integrations';
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
     * Create a new integration node package.
     *
     * @param {string} params.integrationId - Integration ID. Choose a custom ID or generate a random ID with `ID.unique()`.
     * @param {string} params.name - Integration name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is integration enabled?
     * @param {string} params.installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} params.logging - When disabled, build logs and errors are excluded.
     * @param {string} params.providerBranch - Production branch for the repo linked to the integration.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the integration.
     * @param {string} params.providerRootDirectory - Path to the package in the linked repo.
     * @param {boolean} params.providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {boolean} params.vcsPreviewsEnabled - Whether pull request events create preview deployments and PR comments.
     * @param {VcsTriggerMode} params.vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Integration>}
     */
    integrationsCreate(params: { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode }): Promise<Models.Integration>;
    /**
     * Create a new integration node package.
     *
     * @param {string} integrationId - Integration ID. Choose a custom ID or generate a random ID with `ID.unique()`.
     * @param {string} name - Integration name. Max length: 128 chars.
     * @param {boolean} enabled - Is integration enabled?
     * @param {string} installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} logging - When disabled, build logs and errors are excluded.
     * @param {string} providerBranch - Production branch for the repo linked to the integration.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the integration.
     * @param {string} providerRootDirectory - Path to the package in the linked repo.
     * @param {boolean} providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {boolean} vcsPreviewsEnabled - Whether pull request events create preview deployments and PR comments.
     * @param {VcsTriggerMode} vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Integration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsCreate(integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode): Promise<Models.Integration>;
    integrationsCreate(
        paramsOrFirst: { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?, (VcsTriggerMode)?]    
    ): Promise<Models.Integration> {
        let params: { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                installationId: rest[2] as string,
                logging: rest[3] as boolean,
                providerBranch: rest[4] as string,
                providerRepositoryId: rest[5] as string,
                providerRootDirectory: rest[6] as string,
                providerSilentMode: rest[7] as boolean,
                vcsPreviewsEnabled: rest[8] as boolean,
                vcsTriggerMode: rest[9] as VcsTriggerMode            
            };
        }
        
        const integrationId = params.integrationId;
        const name = params.name;
        const enabled = params.enabled;
        const installationId = params.installationId;
        const logging = params.logging;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const vcsPreviewsEnabled = params.vcsPreviewsEnabled;
        const vcsTriggerMode = params.vcsTriggerMode;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/integrations';
        const apiPayload: Payload = {};
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof installationId !== 'undefined') {
            apiPayload['installationId'] = installationId;
        }
        if (typeof integrationId !== 'undefined') {
            apiPayload['integrationId'] = integrationId;
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
        if (typeof vcsPreviewsEnabled !== 'undefined') {
            apiPayload['vcsPreviewsEnabled'] = vcsPreviewsEnabled;
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
     * Delete an integration by its unique ID.
     *
     * @param {string} params.integrationId - Integration ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    integrationsDelete(params: { integrationId: string }): Promise<{}>;
    /**
     * Delete an integration by its unique ID.
     *
     * @param {string} integrationId - Integration ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsDelete(integrationId: string): Promise<{}>;
    integrationsDelete(
        paramsOrFirst: { integrationId: string } | string    
    ): Promise<{}> {
        let params: { integrationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string };
        } else {
            params = {
                integrationId: paramsOrFirst as string            
            };
        }
        
        const integrationId = params.integrationId;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }

        const apiPath = '/v1/integrations/{integrationId}'.replace('{integrationId}', integrationId);
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
     * Get an integration by its unique ID.
     *
     * @param {string} params.integrationId - Integration ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Integration>}
     */
    integrationsGet(params: { integrationId: string }): Promise<Models.Integration>;
    /**
     * Get an integration by its unique ID.
     *
     * @param {string} integrationId - Integration ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Integration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsGet(integrationId: string): Promise<Models.Integration>;
    integrationsGet(
        paramsOrFirst: { integrationId: string } | string    
    ): Promise<Models.Integration> {
        let params: { integrationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string };
        } else {
            params = {
                integrationId: paramsOrFirst as string            
            };
        }
        
        const integrationId = params.integrationId;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }

        const apiPath = '/v1/integrations/{integrationId}'.replace('{integrationId}', integrationId);
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
     * Update an integration by its unique ID.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {string} params.name - Integration name. Max length: 128 chars.
     * @param {boolean} params.enabled - Is integration enabled?
     * @param {string} params.installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} params.logging - When disabled, build logs and errors are excluded.
     * @param {string} params.providerBranch - Production branch for the repo linked to the integration.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the integration.
     * @param {string} params.providerRootDirectory - Path to the package in the linked repo.
     * @param {boolean} params.providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {boolean} params.vcsPreviewsEnabled - Whether pull request events create preview deployments and PR comments.
     * @param {VcsTriggerMode} params.vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Integration>}
     */
    integrationsUpdate(params: { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode }): Promise<Models.Integration>;
    /**
     * Update an integration by its unique ID.
     *
     * @param {string} integrationId - Integration ID.
     * @param {string} name - Integration name. Max length: 128 chars.
     * @param {boolean} enabled - Is integration enabled?
     * @param {string} installationId - Installation ID of the platform's VCS (Version Control System) integration to deploy from.
     * @param {boolean} logging - When disabled, build logs and errors are excluded.
     * @param {string} providerBranch - Production branch for the repo linked to the integration.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the integration.
     * @param {string} providerRootDirectory - Path to the package in the linked repo.
     * @param {boolean} providerSilentMode - In silent mode, no comments are made on commits and pull requests.
     * @param {boolean} vcsPreviewsEnabled - Whether pull request events create preview deployments and PR comments.
     * @param {VcsTriggerMode} vcsTriggerMode - Controls when a VCS deployment is triggered. "push" deploys on every branch push, "tag" deploys only when a tag is pushed or a GitHub release is published.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Integration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsUpdate(integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode): Promise<Models.Integration>;
    integrationsUpdate(
        paramsOrFirst: { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (boolean)?, (VcsTriggerMode)?]    
    ): Promise<Models.Integration> {
        let params: { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, name: string, enabled?: boolean, installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, vcsPreviewsEnabled?: boolean, vcsTriggerMode?: VcsTriggerMode };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                name: rest[0] as string,
                enabled: rest[1] as boolean,
                installationId: rest[2] as string,
                logging: rest[3] as boolean,
                providerBranch: rest[4] as string,
                providerRepositoryId: rest[5] as string,
                providerRootDirectory: rest[6] as string,
                providerSilentMode: rest[7] as boolean,
                vcsPreviewsEnabled: rest[8] as boolean,
                vcsTriggerMode: rest[9] as VcsTriggerMode            
            };
        }
        
        const integrationId = params.integrationId;
        const name = params.name;
        const enabled = params.enabled;
        const installationId = params.installationId;
        const logging = params.logging;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const vcsPreviewsEnabled = params.vcsPreviewsEnabled;
        const vcsTriggerMode = params.vcsTriggerMode;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/integrations/{integrationId}'.replace('{integrationId}', integrationId);
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
        if (typeof vcsPreviewsEnabled !== 'undefined') {
            apiPayload['vcsPreviewsEnabled'] = vcsPreviewsEnabled;
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
     * Get a list of all the integration's code deployments. You can use the query params to filter your results.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {string[]} params.queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     */
    integrationsListDeployments(params: { integrationId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.DeploymentList>;
    /**
     * Get a list of all the integration's code deployments. You can use the query params to filter your results.
     *
     * @param {string} integrationId - Integration ID.
     * @param {string[]} queries - Result filters, paging and ordering. Repeat the parameter once per query — `?queries=…&queries=…` — and make each value a JSON object, e.g. `{"method":"limit","values":[25]}`. The bracketed spellings `queries[]=` and `queries[0]=` are accepted too; the `limit(25)` call syntax is not. See “Query parameters” in this document's introduction. Filterable attributes, besides `$id`, `$createdAt`, `$updatedAt` and `$sequence`: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsListDeployments(integrationId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.DeploymentList>;
    integrationsListDeployments(
        paramsOrFirst: { integrationId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.DeploymentList> {
        let params: { integrationId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const integrationId = params.integrationId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }

        const apiPath = '/v1/integrations/{integrationId}/deployments'.replace('{integrationId}', integrationId);
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
     * Create a new integration deployment from a gzipped tar archive of the node package directory. The build publishes the package and registers the version in the integrations registry as a release round.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {File} params.code - Gzip file with the node package directory (package.json at its root). When used with the CLI, pass the path to the package directory, and the CLI will package it.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {ReleaseMode} params.releaseMode - Release mode: `deploy` releases the version once its round is approved; `preview` makes it a candidate the vendor accepts after checking it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    integrationsCreateDeployment(params: { integrationId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode, onProgress?: (progress: UploadProgress) => void }): Promise<Models.Deployment>;
    /**
     * Create a new integration deployment from a gzipped tar archive of the node package directory. The build publishes the package and registers the version in the integrations registry as a release round.
     *
     * @param {string} integrationId - Integration ID.
     * @param {File} code - Gzip file with the node package directory (package.json at its root). When used with the CLI, pass the path to the package directory, and the CLI will package it.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {ReleaseMode} releaseMode - Release mode: `deploy` releases the version once its round is approved; `preview` makes it a candidate the vendor accepts after checking it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsCreateDeployment(integrationId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    integrationsCreateDeployment(
        paramsOrFirst: { integrationId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode, onProgress?: (progress: UploadProgress) => void } | string,
        ...rest: [(File)?, (boolean)?, (ReleaseMode)?,((progress: UploadProgress) => void)?]    
    ): Promise<Models.Deployment> {
        let params: { integrationId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, code: File, activate?: boolean, releaseMode?: ReleaseMode };
            onProgress = (paramsOrFirst as { onProgress?: (progress: UploadProgress) => void }).onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                code: rest[0] as File,
                activate: rest[1] as boolean,
                releaseMode: rest[2] as ReleaseMode            
            };
            onProgress = rest[3] as ((progress: UploadProgress) => void);
        }
        
        const integrationId = params.integrationId;
        const code = params.code;
        const activate = params.activate;
        const releaseMode = params.releaseMode;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/integrations/{integrationId}/deployments'.replace('{integrationId}', integrationId);
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
     * Create a deployment when an integration is connected to VCS.
     * 
     * This endpoint lets you create a deployment from a branch or commit.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {CubesCreateVcsDeploymentType} params.type - Type of reference passed. Allowed values are: branch, commit
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    integrationsCreateVcsDeployment(params: { integrationId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean }): Promise<Models.Deployment>;
    /**
     * Create a deployment when an integration is connected to VCS.
     * 
     * This endpoint lets you create a deployment from a branch or commit.
     *
     * @param {string} integrationId - Integration ID.
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {CubesCreateVcsDeploymentType} type - Type of reference passed. Allowed values are: branch, commit
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsCreateVcsDeployment(integrationId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean): Promise<Models.Deployment>;
    integrationsCreateVcsDeployment(
        paramsOrFirst: { integrationId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean } | string,
        ...rest: [(string)?, (CubesCreateVcsDeploymentType)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { integrationId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, reference: string, type: CubesCreateVcsDeploymentType, activate?: boolean };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                reference: rest[0] as string,
                type: rest[1] as CubesCreateVcsDeploymentType,
                activate: rest[2] as boolean            
            };
        }
        
        const integrationId = params.integrationId;
        const reference = params.reference;
        const type = params.type;
        const activate = params.activate;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }
        if (typeof reference === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reference"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/integrations/{integrationId}/deployments/vcs'.replace('{integrationId}', integrationId);
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
     * Get an integration deployment by its unique ID.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    integrationsGetDeployment(params: { integrationId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Get an integration deployment by its unique ID.
     *
     * @param {string} integrationId - Integration ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsGetDeployment(integrationId: string, deploymentId: string): Promise<Models.Deployment>;
    integrationsGetDeployment(
        paramsOrFirst: { integrationId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { integrationId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, deploymentId: string };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const integrationId = params.integrationId;
        const deploymentId = params.deploymentId;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/integrations/{integrationId}/deployments/{deploymentId}'.replace('{integrationId}', integrationId).replace('{deploymentId}', deploymentId);
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
     * List the release rounds of this integration as the
     * integrations registry holds them: version, round number,
     * state (submitted, candidate, approved, rejected), release
     * mode, gate results, decision deadline and rejection reason.
     *
     * @param {string} params.integrationId - Integration ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    integrationsListReleases(params: { integrationId: string }): Promise<{}>;
    /**
     * List the release rounds of this integration as the
     * integrations registry holds them: version, round number,
     * state (submitted, candidate, approved, rejected), release
     * mode, gate results, decision deadline and rejection reason.
     *
     * @param {string} integrationId - Integration ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsListReleases(integrationId: string): Promise<{}>;
    integrationsListReleases(
        paramsOrFirst: { integrationId: string } | string    
    ): Promise<{}> {
        let params: { integrationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string };
        } else {
            params = {
                integrationId: paramsOrFirst as string            
            };
        }
        
        const integrationId = params.integrationId;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }

        const apiPath = '/v1/integrations/{integrationId}/releases'.replace('{integrationId}', integrationId);
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
     * Accept a preview candidate of this integration after checking
     * it. Without `version` the version of the latest registered
     * deployment is accepted; without `rc` its newest candidate
     * round. Only the integration's vendor can accept, and only a
     * candidate in preview mode.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {number} params.rc - Release round to accept. Defaults to the newest candidate round of the version.
     * @param {string} params.version - Version to accept. Defaults to the version of the latest registered deployment.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    integrationsAcceptRelease(params: { integrationId: string, rc?: number, version?: string }): Promise<{}>;
    /**
     * Accept a preview candidate of this integration after checking
     * it. Without `version` the version of the latest registered
     * deployment is accepted; without `rc` its newest candidate
     * round. Only the integration's vendor can accept, and only a
     * candidate in preview mode.
     *
     * @param {string} integrationId - Integration ID.
     * @param {number} rc - Release round to accept. Defaults to the newest candidate round of the version.
     * @param {string} version - Version to accept. Defaults to the version of the latest registered deployment.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsAcceptRelease(integrationId: string, rc?: number, version?: string): Promise<{}>;
    integrationsAcceptRelease(
        paramsOrFirst: { integrationId: string, rc?: number, version?: string } | string,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { integrationId: string, rc?: number, version?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, rc?: number, version?: string };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                rc: rest[0] as number,
                version: rest[1] as string            
            };
        }
        
        const integrationId = params.integrationId;
        const rc = params.rc;
        const version = params.version;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }

        const apiPath = '/v1/integrations/{integrationId}/releases/accept'.replace('{integrationId}', integrationId);
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
     * Rebuild the source a release of this integration was built
     * from, so its release gates run again and a new release round
     * opens. Picks the newest deployment whose manifest names this
     * version; `commit` narrows it to that commit.
     *
     * @param {string} params.integrationId - Integration ID.
     * @param {string} params.version - Version to rebuild.
     * @param {string} params.commit - Commit SHA the round recorded (7 to 64 hex characters). Optional.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    integrationsRebuildRelease(params: { integrationId: string, version: string, commit?: string }): Promise<Models.Deployment>;
    /**
     * Rebuild the source a release of this integration was built
     * from, so its release gates run again and a new release round
     * opens. Picks the newest deployment whose manifest names this
     * version; `commit` narrows it to that commit.
     *
     * @param {string} integrationId - Integration ID.
     * @param {string} version - Version to rebuild.
     * @param {string} commit - Commit SHA the round recorded (7 to 64 hex characters). Optional.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    integrationsRebuildRelease(integrationId: string, version: string, commit?: string): Promise<Models.Deployment>;
    integrationsRebuildRelease(
        paramsOrFirst: { integrationId: string, version: string, commit?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Deployment> {
        let params: { integrationId: string, version: string, commit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { integrationId: string, version: string, commit?: string };
        } else {
            params = {
                integrationId: paramsOrFirst as string,
                version: rest[0] as string,
                commit: rest[1] as string            
            };
        }
        
        const integrationId = params.integrationId;
        const version = params.version;
        const commit = params.commit;

        if (typeof integrationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "integrationId"');
        }
        if (typeof version === 'undefined') {
            throw new RevenexxException('Missing required parameter: "version"');
        }

        const apiPath = '/v1/integrations/{integrationId}/releases/rebuild'.replace('{integrationId}', integrationId);
        const apiPayload: Payload = {};
        if (typeof commit !== 'undefined') {
            apiPayload['commit'] = commit;
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
