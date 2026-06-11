import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { BuildRuntime } from '../enums/build-runtime';
import { Framework } from '../enums/framework';
import { Adapter } from '../enums/adapter';
import { Type } from '../enums/type';

export class Sites {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project's sites. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SiteList>}
     */
    sitesList(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.SiteList>;
    /**
     * Get a list of all the project's sites. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SiteList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesList(queries?: string[], search?: string, total?: boolean): Promise<Models.SiteList>;
    sitesList(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.SiteList> {
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


        const apiPath = '/v1/sites';
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
     * Create a new site.
     *
     * @param {BuildRuntime} params.buildRuntime - Runtime to use during build step.
     * @param {Framework} params.framework - Sites framework.
     * @param {string} params.name - Site name. Max length: 128 chars.
     * @param {string} params.siteId - Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Adapter} params.adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} params.buildCommand - Build Command.
     * @param {boolean} params.enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {string} params.fallbackFile - Fallback file for single page application sites.
     * @param {string} params.installCommand - Install Command.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {boolean} params.logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {string} params.outputDirectory - Output Directory for site.
     * @param {string} params.providerBranch - Production branch for the repo linked to the site.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} params.providerRootDirectory - Path to site code in the linked repo.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.specification - Framework specification for the site and builds.
     * @param {number} params.timeout - Maximum request time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     */
    sitesCreate(params: { buildRuntime: BuildRuntime, framework: Framework, name: string, siteId: string, adapter?: Adapter, buildCommand?: string, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number }): Promise<Models.Site>;
    /**
     * Create a new site.
     *
     * @param {BuildRuntime} buildRuntime - Runtime to use during build step.
     * @param {Framework} framework - Sites framework.
     * @param {string} name - Site name. Max length: 128 chars.
     * @param {string} siteId - Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {Adapter} adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} buildCommand - Build Command.
     * @param {boolean} enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {string} fallbackFile - Fallback file for single page application sites.
     * @param {string} installCommand - Install Command.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {boolean} logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {string} outputDirectory - Output Directory for site.
     * @param {string} providerBranch - Production branch for the repo linked to the site.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} providerRootDirectory - Path to site code in the linked repo.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} specification - Framework specification for the site and builds.
     * @param {number} timeout - Maximum request time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesCreate(buildRuntime: BuildRuntime, framework: Framework, name: string, siteId: string, adapter?: Adapter, buildCommand?: string, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number): Promise<Models.Site>;
    sitesCreate(
        paramsOrFirst: { buildRuntime: BuildRuntime, framework: Framework, name: string, siteId: string, adapter?: Adapter, buildCommand?: string, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number } | BuildRuntime,
        ...rest: [(Framework)?, (string)?, (string)?, (Adapter)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (number)?]    
    ): Promise<Models.Site> {
        let params: { buildRuntime: BuildRuntime, framework: Framework, name: string, siteId: string, adapter?: Adapter, buildCommand?: string, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('buildRuntime' in paramsOrFirst || 'framework' in paramsOrFirst || 'name' in paramsOrFirst || 'siteId' in paramsOrFirst || 'adapter' in paramsOrFirst || 'buildCommand' in paramsOrFirst || 'enabled' in paramsOrFirst || 'fallbackFile' in paramsOrFirst || 'installCommand' in paramsOrFirst || 'installationId' in paramsOrFirst || 'logging' in paramsOrFirst || 'outputDirectory' in paramsOrFirst || 'providerBranch' in paramsOrFirst || 'providerRepositoryId' in paramsOrFirst || 'providerRootDirectory' in paramsOrFirst || 'providerSilentMode' in paramsOrFirst || 'specification' in paramsOrFirst || 'timeout' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { buildRuntime: BuildRuntime, framework: Framework, name: string, siteId: string, adapter?: Adapter, buildCommand?: string, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number };
        } else {
            params = {
                buildRuntime: paramsOrFirst as BuildRuntime,
                framework: rest[0] as Framework,
                name: rest[1] as string,
                siteId: rest[2] as string,
                adapter: rest[3] as Adapter,
                buildCommand: rest[4] as string,
                enabled: rest[5] as boolean,
                fallbackFile: rest[6] as string,
                installCommand: rest[7] as string,
                installationId: rest[8] as string,
                logging: rest[9] as boolean,
                outputDirectory: rest[10] as string,
                providerBranch: rest[11] as string,
                providerRepositoryId: rest[12] as string,
                providerRootDirectory: rest[13] as string,
                providerSilentMode: rest[14] as boolean,
                specification: rest[15] as string,
                timeout: rest[16] as number            
            };
        }
        
        const buildRuntime = params.buildRuntime;
        const framework = params.framework;
        const name = params.name;
        const siteId = params.siteId;
        const adapter = params.adapter;
        const buildCommand = params.buildCommand;
        const enabled = params.enabled;
        const fallbackFile = params.fallbackFile;
        const installCommand = params.installCommand;
        const installationId = params.installationId;
        const logging = params.logging;
        const outputDirectory = params.outputDirectory;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const specification = params.specification;
        const timeout = params.timeout;

        if (typeof buildRuntime === 'undefined') {
            throw new RevenexxException('Missing required parameter: "buildRuntime"');
        }
        if (typeof framework === 'undefined') {
            throw new RevenexxException('Missing required parameter: "framework"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }

        const apiPath = '/v1/sites';
        const payload: Payload = {};
        if (typeof adapter !== 'undefined') {
            payload['adapter'] = adapter;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof buildRuntime !== 'undefined') {
            payload['buildRuntime'] = buildRuntime;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fallbackFile !== 'undefined') {
            payload['fallbackFile'] = fallbackFile;
        }
        if (typeof framework !== 'undefined') {
            payload['framework'] = framework;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof siteId !== 'undefined') {
            payload['siteId'] = siteId;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
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
     * Get a list of all frameworks that are currently available on the server instance.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.FrameworkList>}
     */
    sitesListFrameworks(): Promise<Models.FrameworkList> {

        const apiPath = '/v1/sites/frameworks';
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
     * List allowed site specifications for this instance.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.SpecificationList>}
     */
    sitesListSpecifications(): Promise<Models.SpecificationList> {

        const apiPath = '/v1/sites/specifications';
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
     * Delete a site by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sitesDelete(params: { siteId: string }): Promise<{}>;
    /**
     * Delete a site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesDelete(siteId: string): Promise<{}>;
    sitesDelete(
        paramsOrFirst: { siteId: string } | string    
    ): Promise<{}> {
        let params: { siteId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string            
            };
        }
        
        const siteId = params.siteId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }

        const apiPath = '/v1/sites/{siteId}'.replace('{siteId}', siteId);
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
     * Get a site by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     */
    sitesGet(params: { siteId: string }): Promise<Models.Site>;
    /**
     * Get a site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesGet(siteId: string): Promise<Models.Site>;
    sitesGet(
        paramsOrFirst: { siteId: string } | string    
    ): Promise<Models.Site> {
        let params: { siteId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string            
            };
        }
        
        const siteId = params.siteId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }

        const apiPath = '/v1/sites/{siteId}'.replace('{siteId}', siteId);
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
     * Update site by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {Framework} params.framework - Sites framework.
     * @param {string} params.name - Site name. Max length: 128 chars.
     * @param {Adapter} params.adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} params.buildCommand - Build Command.
     * @param {BuildRuntime} params.buildRuntime - Runtime to use during build step.
     * @param {boolean} params.enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {string} params.fallbackFile - Fallback file for single page application sites.
     * @param {string} params.installCommand - Install Command.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {boolean} params.logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {string} params.outputDirectory - Output Directory for site.
     * @param {string} params.providerBranch - Production branch for the repo linked to the site.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} params.providerRootDirectory - Path to site code in the linked repo.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.specification - Framework specification for the site and builds.
     * @param {number} params.timeout - Maximum request time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     */
    sitesUpdate(params: { siteId: string, framework: Framework, name: string, adapter?: Adapter, buildCommand?: string, buildRuntime?: BuildRuntime, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number }): Promise<Models.Site>;
    /**
     * Update site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {Framework} framework - Sites framework.
     * @param {string} name - Site name. Max length: 128 chars.
     * @param {Adapter} adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} buildCommand - Build Command.
     * @param {BuildRuntime} buildRuntime - Runtime to use during build step.
     * @param {boolean} enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {string} fallbackFile - Fallback file for single page application sites.
     * @param {string} installCommand - Install Command.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {boolean} logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {string} outputDirectory - Output Directory for site.
     * @param {string} providerBranch - Production branch for the repo linked to the site.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} providerRootDirectory - Path to site code in the linked repo.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} specification - Framework specification for the site and builds.
     * @param {number} timeout - Maximum request time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesUpdate(siteId: string, framework: Framework, name: string, adapter?: Adapter, buildCommand?: string, buildRuntime?: BuildRuntime, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number): Promise<Models.Site>;
    sitesUpdate(
        paramsOrFirst: { siteId: string, framework: Framework, name: string, adapter?: Adapter, buildCommand?: string, buildRuntime?: BuildRuntime, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number } | string,
        ...rest: [(Framework)?, (string)?, (Adapter)?, (string)?, (BuildRuntime)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (number)?]    
    ): Promise<Models.Site> {
        let params: { siteId: string, framework: Framework, name: string, adapter?: Adapter, buildCommand?: string, buildRuntime?: BuildRuntime, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, framework: Framework, name: string, adapter?: Adapter, buildCommand?: string, buildRuntime?: BuildRuntime, enabled?: boolean, fallbackFile?: string, installCommand?: string, installationId?: string, logging?: boolean, outputDirectory?: string, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, specification?: string, timeout?: number };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                framework: rest[0] as Framework,
                name: rest[1] as string,
                adapter: rest[2] as Adapter,
                buildCommand: rest[3] as string,
                buildRuntime: rest[4] as BuildRuntime,
                enabled: rest[5] as boolean,
                fallbackFile: rest[6] as string,
                installCommand: rest[7] as string,
                installationId: rest[8] as string,
                logging: rest[9] as boolean,
                outputDirectory: rest[10] as string,
                providerBranch: rest[11] as string,
                providerRepositoryId: rest[12] as string,
                providerRootDirectory: rest[13] as string,
                providerSilentMode: rest[14] as boolean,
                specification: rest[15] as string,
                timeout: rest[16] as number            
            };
        }
        
        const siteId = params.siteId;
        const framework = params.framework;
        const name = params.name;
        const adapter = params.adapter;
        const buildCommand = params.buildCommand;
        const buildRuntime = params.buildRuntime;
        const enabled = params.enabled;
        const fallbackFile = params.fallbackFile;
        const installCommand = params.installCommand;
        const installationId = params.installationId;
        const logging = params.logging;
        const outputDirectory = params.outputDirectory;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const specification = params.specification;
        const timeout = params.timeout;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof framework === 'undefined') {
            throw new RevenexxException('Missing required parameter: "framework"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/sites/{siteId}'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof adapter !== 'undefined') {
            payload['adapter'] = adapter;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof buildRuntime !== 'undefined') {
            payload['buildRuntime'] = buildRuntime;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fallbackFile !== 'undefined') {
            payload['fallbackFile'] = fallbackFile;
        }
        if (typeof framework !== 'undefined') {
            payload['framework'] = framework;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
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
     * Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     */
    sitesUpdateSiteDeployment(params: { siteId: string, deploymentId: string }): Promise<Models.Site>;
    /**
     * Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesUpdateSiteDeployment(siteId: string, deploymentId: string): Promise<Models.Site>;
    sitesUpdateSiteDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Site> {
        let params: { siteId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployment'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all the site's code deployments. You can use the query params to filter your results.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     */
    sitesListDeployments(params: { siteId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.DeploymentList>;
    /**
     * Get a list of all the site's code deployments. You can use the query params to filter your results.
     *
     * @param {string} siteId - Site ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesListDeployments(siteId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.DeploymentList>;
    sitesListDeployments(
        paramsOrFirst: { siteId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.DeploymentList> {
        let params: { siteId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments'.replace('{siteId}', siteId);
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
     * Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the site's deployment to use your new deployment ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {string} params.code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {string} params.buildCommand - Build Commands.
     * @param {string} params.installCommand - Install Commands.
     * @param {string} params.outputDirectory - Output Directory.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    sitesCreateDeployment(params: { siteId: string, activate: boolean, code: string, buildCommand?: string, installCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => void }): Promise<Models.Deployment>;
    /**
     * Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the site's deployment to use your new deployment ID.
     *
     * @param {string} siteId - Site ID.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {string} code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {string} buildCommand - Build Commands.
     * @param {string} installCommand - Install Commands.
     * @param {string} outputDirectory - Output Directory.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesCreateDeployment(siteId: string, activate: boolean, code: string, buildCommand?: string, installCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    sitesCreateDeployment(
        paramsOrFirst: { siteId: string, activate: boolean, code: string, buildCommand?: string, installCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => void } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?, (string)?,((progress: UploadProgress) => void)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, activate: boolean, code: string, buildCommand?: string, installCommand?: string, outputDirectory?: string };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, activate: boolean, code: string, buildCommand?: string, installCommand?: string, outputDirectory?: string };
            onProgress = paramsOrFirst?.onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                siteId: paramsOrFirst as string,
                activate: rest[0] as boolean,
                code: rest[1] as string,
                buildCommand: rest[2] as string,
                installCommand: rest[3] as string,
                outputDirectory: rest[4] as string            
            };
            onProgress = rest[5] as ((progress: UploadProgress) => void);
        }
        
        const siteId = params.siteId;
        const activate = params.activate;
        const code = params.code;
        const buildCommand = params.buildCommand;
        const installCommand = params.installCommand;
        const outputDirectory = params.outputDirectory;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof activate === 'undefined') {
            throw new RevenexxException('Missing required parameter: "activate"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof code !== 'undefined') {
            payload['code'] = code;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
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
     * Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    sitesCreateDuplicateDeployment(params: { siteId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesCreateDuplicateDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    sitesCreateDuplicateDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/duplicate'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
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
     * Create a deployment based on a template.
     * 
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/products/sites/templates) to find the template details.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.owner - The name of the owner of the template.
     * @param {string} params.reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {string} params.repository - Repository name of the template.
     * @param {string} params.rootDirectory - Path to site code in the template repo.
     * @param {Type} params.type - Type for the reference provided. Can be commit, branch, or tag
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    sitesCreateTemplateDeployment(params: { siteId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean }): Promise<Models.Deployment>;
    /**
     * Create a deployment based on a template.
     * 
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/products/sites/templates) to find the template details.
     *
     * @param {string} siteId - Site ID.
     * @param {string} owner - The name of the owner of the template.
     * @param {string} reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {string} repository - Repository name of the template.
     * @param {string} rootDirectory - Path to site code in the template repo.
     * @param {Type} type - Type for the reference provided. Can be commit, branch, or tag
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesCreateTemplateDeployment(siteId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean): Promise<Models.Deployment>;
    sitesCreateTemplateDeployment(
        paramsOrFirst: { siteId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (Type)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                owner: rest[0] as string,
                reference: rest[1] as string,
                repository: rest[2] as string,
                rootDirectory: rest[3] as string,
                type: rest[4] as Type,
                activate: rest[5] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const owner = params.owner;
        const reference = params.reference;
        const repository = params.repository;
        const rootDirectory = params.rootDirectory;
        const type = params.type;
        const activate = params.activate;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof owner === 'undefined') {
            throw new RevenexxException('Missing required parameter: "owner"');
        }
        if (typeof reference === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reference"');
        }
        if (typeof repository === 'undefined') {
            throw new RevenexxException('Missing required parameter: "repository"');
        }
        if (typeof rootDirectory === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rootDirectory"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/template'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        if (typeof owner !== 'undefined') {
            payload['owner'] = owner;
        }
        if (typeof reference !== 'undefined') {
            payload['reference'] = reference;
        }
        if (typeof repository !== 'undefined') {
            payload['repository'] = repository;
        }
        if (typeof rootDirectory !== 'undefined') {
            payload['rootDirectory'] = rootDirectory;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
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
     * Create a deployment when a site is connected to VCS.
     * 
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {Type} params.type - Type of reference passed. Allowed values are: branch, commit
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    sitesCreateVcsDeployment(params: { siteId: string, reference: string, type: Type, activate?: boolean }): Promise<Models.Deployment>;
    /**
     * Create a deployment when a site is connected to VCS.
     * 
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} siteId - Site ID.
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {Type} type - Type of reference passed. Allowed values are: branch, commit
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesCreateVcsDeployment(siteId: string, reference: string, type: Type, activate?: boolean): Promise<Models.Deployment>;
    sitesCreateVcsDeployment(
        paramsOrFirst: { siteId: string, reference: string, type: Type, activate?: boolean } | string,
        ...rest: [(string)?, (Type)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, reference: string, type: Type, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, reference: string, type: Type, activate?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                reference: rest[0] as string,
                type: rest[1] as Type,
                activate: rest[2] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const reference = params.reference;
        const type = params.type;
        const activate = params.activate;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof reference === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reference"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/vcs'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        if (typeof reference !== 'undefined') {
            payload['reference'] = reference;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
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
     * Delete a site deployment by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sitesDeleteDeployment(params: { siteId: string, deploymentId: string }): Promise<{}>;
    /**
     * Delete a site deployment by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesDeleteDeployment(siteId: string, deploymentId: string): Promise<{}>;
    sitesDeleteDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { siteId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/{deploymentId}'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Get a site deployment by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    sitesGetDeployment(params: { siteId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Get a site deployment by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesGetDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    sitesGetDeployment(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/{deploymentId}'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {Type} params.type - Deployment file to download. Can be: "source", "output".
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sitesGetDeploymentDownload(params: { siteId: string, deploymentId: string, type?: Type }): Promise<{}>;
    /**
     * Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {Type} type - Deployment file to download. Can be: "source", "output".
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesGetDeploymentDownload(siteId: string, deploymentId: string, type?: Type): Promise<{}>;
    sitesGetDeploymentDownload(
        paramsOrFirst: { siteId: string, deploymentId: string, type?: Type } | string,
        ...rest: [(string)?, (Type)?]    
    ): Promise<{}> {
        let params: { siteId: string, deploymentId: string, type?: Type };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, deploymentId: string, type?: Type };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string,
                type: rest[1] as Type            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;
        const type = params.type;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/{deploymentId}/download'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
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
     * Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    sitesUpdateDeploymentStatus(params: { siteId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesUpdateDeploymentStatus(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    sitesUpdateDeploymentStatus(
        paramsOrFirst: { siteId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { siteId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, deploymentId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const deploymentId = params.deploymentId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/sites/{siteId}/deployments/{deploymentId}/status'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all site logs. You can use the query params to filter your results.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ExecutionList>}
     */
    sitesListLogs(params: { siteId: string, queries?: string[], total?: boolean }): Promise<Models.ExecutionList>;
    /**
     * Get a list of all site logs. You can use the query params to filter your results.
     *
     * @param {string} siteId - Site ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ExecutionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesListLogs(siteId: string, queries?: string[], total?: boolean): Promise<Models.ExecutionList>;
    sitesListLogs(
        paramsOrFirst: { siteId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.ExecutionList> {
        let params: { siteId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const queries = params.queries;
        const total = params.total;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }

        const apiPath = '/v1/sites/{siteId}/logs'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Delete a site log by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.logId - Log ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sitesDeleteLog(params: { siteId: string, logId: string }): Promise<{}>;
    /**
     * Delete a site log by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} logId - Log ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesDeleteLog(siteId: string, logId: string): Promise<{}>;
    sitesDeleteLog(
        paramsOrFirst: { siteId: string, logId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { siteId: string, logId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, logId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                logId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const logId = params.logId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof logId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "logId"');
        }

        const apiPath = '/v1/sites/{siteId}/logs/{logId}'.replace('{siteId}', siteId).replace('{logId}', logId);
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
     * Get a site request log by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.logId - Log ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Execution>}
     */
    sitesGetLog(params: { siteId: string, logId: string }): Promise<Models.Execution>;
    /**
     * Get a site request log by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} logId - Log ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesGetLog(siteId: string, logId: string): Promise<Models.Execution>;
    sitesGetLog(
        paramsOrFirst: { siteId: string, logId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Execution> {
        let params: { siteId: string, logId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, logId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                logId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const logId = params.logId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof logId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "logId"');
        }

        const apiPath = '/v1/sites/{siteId}/logs/{logId}'.replace('{siteId}', siteId).replace('{logId}', logId);
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
     * Get a list of all variables of a specific site.
     *
     * @param {string} params.siteId - Site unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VariableList>}
     */
    sitesListVariables(params: { siteId: string }): Promise<Models.VariableList>;
    /**
     * Get a list of all variables of a specific site.
     *
     * @param {string} siteId - Site unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesListVariables(siteId: string): Promise<Models.VariableList>;
    sitesListVariables(
        paramsOrFirst: { siteId: string } | string    
    ): Promise<Models.VariableList> {
        let params: { siteId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string            
            };
        }
        
        const siteId = params.siteId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }

        const apiPath = '/v1/sites/{siteId}/variables'.replace('{siteId}', siteId);
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
     * Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     */
    sitesCreateVariable(params: { siteId: string, key: string, value: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesCreateVariable(siteId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    sitesCreateVariable(
        paramsOrFirst: { siteId: string, key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { siteId: string, key: string, value: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, key: string, value: string, secret?: boolean };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const siteId = params.siteId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new RevenexxException('Missing required parameter: "value"');
        }

        const apiPath = '/v1/sites/{siteId}/variables'.replace('{siteId}', siteId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
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
     * Delete a variable by its unique ID.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sitesDeleteVariable(params: { siteId: string, variableId: string }): Promise<{}>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesDeleteVariable(siteId: string, variableId: string): Promise<{}>;
    sitesDeleteVariable(
        paramsOrFirst: { siteId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { siteId: string, variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, variableId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const variableId = params.variableId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof variableId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "variableId"');
        }

        const apiPath = '/v1/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
     * Get a variable by its unique ID.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     */
    sitesGetVariable(params: { siteId: string, variableId: string }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesGetVariable(siteId: string, variableId: string): Promise<Models.Variable>;
    sitesGetVariable(
        paramsOrFirst: { siteId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Variable> {
        let params: { siteId: string, variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, variableId: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const siteId = params.siteId;
        const variableId = params.variableId;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof variableId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "variableId"');
        }

        const apiPath = '/v1/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
     * Update variable by its unique ID.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     */
    sitesUpdateVariable(params: { siteId: string, variableId: string, key: string, secret?: boolean, value?: string }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sitesUpdateVariable(siteId: string, variableId: string, key: string, secret?: boolean, value?: string): Promise<Models.Variable>;
    sitesUpdateVariable(
        paramsOrFirst: { siteId: string, variableId: string, key: string, secret?: boolean, value?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Variable> {
        let params: { siteId: string, variableId: string, key: string, secret?: boolean, value?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { siteId: string, variableId: string, key: string, secret?: boolean, value?: string };
        } else {
            params = {
                siteId: paramsOrFirst as string,
                variableId: rest[0] as string,
                key: rest[1] as string,
                secret: rest[2] as boolean,
                value: rest[3] as string            
            };
        }
        
        const siteId = params.siteId;
        const variableId = params.variableId;
        const key = params.key;
        const secret = params.secret;
        const value = params.value;

        if (typeof siteId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "siteId"');
        }
        if (typeof variableId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
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
}
