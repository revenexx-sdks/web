import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Runtime } from '../enums/runtime';
import { Scopes } from '../enums/scopes';
import { Runtimes } from '../enums/runtimes';
import { UseCases } from '../enums/use-cases';
import { Range } from '../enums/range';
import { Type } from '../enums/type';
import { Method } from '../enums/method';

export class Apps {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all Apps in the active project. Pass `search` to filter by name.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FunctionList>}
     */
    appsList(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.FunctionList>;
    /**
     * List all Apps in the active project. Pass `search` to filter by name.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FunctionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsList(queries?: string[], search?: string, total?: boolean): Promise<Models.FunctionList>;
    appsList(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.FunctionList> {
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


        const apiPath = '/v1/apps';
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
     * Create a new revenexx App. An App is the deployment surface for code that runs on the platform — backend jobs, APIs, integrations. The created App owns subsequent deployments and executions.
     * 
     * Phase 1 mirrors the underlying Functions runtime 1:1; future phases will add manifest validation, registry coupling and schema migrations.
     *
     * @param {string} params.functionId - Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Function name. Max length: 128 chars.
     * @param {Runtime} params.runtime - Execution runtime.
     * @param {string} params.commands - Build Commands.
     * @param {boolean} params.enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {string} params.entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {string[]} params.execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {boolean} params.logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} params.providerBranch - Production branch for the repo linked to the function.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the function.
     * @param {string} params.providerRootDirectory - Path to function code in the linked repo.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {Scopes[]} params.scopes - List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} params.specification - Runtime specification for the function and builds.
     * @param {number} params.timeout - Function maximum execution time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     */
    appsCreate(params: { functionId: string, name: string, runtime: Runtime, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number }): Promise<Models.Function>;
    /**
     * Create a new revenexx App. An App is the deployment surface for code that runs on the platform — backend jobs, APIs, integrations. The created App owns subsequent deployments and executions.
     * 
     * Phase 1 mirrors the underlying Functions runtime 1:1; future phases will add manifest validation, registry coupling and schema migrations.
     *
     * @param {string} functionId - Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Function name. Max length: 128 chars.
     * @param {Runtime} runtime - Execution runtime.
     * @param {string} commands - Build Commands.
     * @param {boolean} enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {string} entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {string[]} execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {boolean} logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} providerBranch - Production branch for the repo linked to the function.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the function.
     * @param {string} providerRootDirectory - Path to function code in the linked repo.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {Scopes[]} scopes - List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} specification - Runtime specification for the function and builds.
     * @param {number} timeout - Function maximum execution time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreate(functionId: string, name: string, runtime: Runtime, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number): Promise<Models.Function>;
    appsCreate(
        paramsOrFirst: { functionId: string, name: string, runtime: Runtime, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number } | string,
        ...rest: [(string)?, (Runtime)?, (string)?, (boolean)?, (string)?, (string[])?, (string[])?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (Scopes[])?, (string)?, (number)?]    
    ): Promise<Models.Function> {
        let params: { functionId: string, name: string, runtime: Runtime, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, name: string, runtime: Runtime, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                name: rest[0] as string,
                runtime: rest[1] as Runtime,
                commands: rest[2] as string,
                enabled: rest[3] as boolean,
                entrypoint: rest[4] as string,
                events: rest[5] as string[],
                execute: rest[6] as string[],
                installationId: rest[7] as string,
                logging: rest[8] as boolean,
                providerBranch: rest[9] as string,
                providerRepositoryId: rest[10] as string,
                providerRootDirectory: rest[11] as string,
                providerSilentMode: rest[12] as boolean,
                schedule: rest[13] as string,
                scopes: rest[14] as Scopes[],
                specification: rest[15] as string,
                timeout: rest[16] as number            
            };
        }
        
        const functionId = params.functionId;
        const name = params.name;
        const runtime = params.runtime;
        const commands = params.commands;
        const enabled = params.enabled;
        const entrypoint = params.entrypoint;
        const events = params.events;
        const execute = params.execute;
        const installationId = params.installationId;
        const logging = params.logging;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const schedule = params.schedule;
        const scopes = params.scopes;
        const specification = params.specification;
        const timeout = params.timeout;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof runtime === 'undefined') {
            throw new RevenexxException('Missing required parameter: "runtime"');
        }

        const apiPath = '/v1/apps';
        const payload: Payload = {};
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
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
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
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
     * List apps published to the Marketplace. Proxies the App Registry on Console with `?published=true` filter.
     *
     * @param {string} params.search - Search by app name, title or vendor.
     * @param {number} params.perPage - Items per page.
     * @param {number} params.page - Page number.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsListMarketplace(params?: { search?: string, perPage?: number, page?: number }): Promise<{}>;
    /**
     * List apps published to the Marketplace. Proxies the App Registry on Console with `?published=true` filter.
     *
     * @param {string} search - Search by app name, title or vendor.
     * @param {number} perPage - Items per page.
     * @param {number} page - Page number.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsListMarketplace(search?: string, perPage?: number, page?: number): Promise<{}>;
    appsListMarketplace(
        paramsOrFirst?: { search?: string, perPage?: number, page?: number } | string,
        ...rest: [(number)?, (number)?]    
    ): Promise<{}> {
        let params: { search?: string, perPage?: number, page?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { search?: string, perPage?: number, page?: number };
        } else {
            params = {
                search: paramsOrFirst as string,
                perPage: rest[0] as number,
                page: rest[1] as number            
            };
        }
        
        const search = params.search;
        const perPage = params.perPage;
        const page = params.page;


        const apiPath = '/v1/apps/marketplace';
        const payload: Payload = {};
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof perPage !== 'undefined') {
            payload['per_page'] = perPage;
        }
        if (typeof page !== 'undefined') {
            payload['page'] = page;
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
     * Install a Marketplace app on the calling project's tenant. Body: { owner, name }.
     *
     * @param {string} params.name - App name.
     * @param {string} params.owner - Owner tenant slug of the app being installed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsInstallFromMarketplace(params: { name: string, owner: string }): Promise<{}>;
    /**
     * Install a Marketplace app on the calling project's tenant. Body: { owner, name }.
     *
     * @param {string} name - App name.
     * @param {string} owner - Owner tenant slug of the app being installed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsInstallFromMarketplace(name: string, owner: string): Promise<{}>;
    appsInstallFromMarketplace(
        paramsOrFirst: { name: string, owner: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { name: string, owner: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, owner: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                owner: rest[0] as string            
            };
        }
        
        const name = params.name;
        const owner = params.owner;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof owner === 'undefined') {
            throw new RevenexxException('Missing required parameter: "owner"');
        }

        const apiPath = '/v1/apps/marketplace/install';
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof owner !== 'undefined') {
            payload['owner'] = owner;
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
     * Get a list of all runtimes available for an App. Identical content to `functions.listRuntimes()`.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.RuntimeList>}
     */
    appsListRuntimes(): Promise<Models.RuntimeList> {

        const apiPath = '/v1/apps/runtimes';
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
     * List the compute specifications (CPU + memory) available to Apps in this project.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.SpecificationList>}
     */
    appsListSpecifications(): Promise<Models.SpecificationList> {

        const apiPath = '/v1/apps/specifications';
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
     * List the curated catalogue of App templates that can be used as starting points.
     *
     * @param {Runtimes[]} params.runtimes - List of runtimes allowed for filtering function templates. Maximum of 100 runtimes are allowed.
     * @param {UseCases[]} params.useCases - List of use cases allowed for filtering function templates. Maximum of 100 use cases are allowed.
     * @param {number} params.limit - Limit the number of templates returned in the response. Default limit is 25, and maximum limit is 5000.
     * @param {number} params.offset - Offset the list of returned templates. Maximum offset is 5000.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TemplateFunctionList>}
     */
    appsListTemplates(params?: { runtimes?: Runtimes[], useCases?: UseCases[], limit?: number, offset?: number, total?: boolean }): Promise<Models.TemplateFunctionList>;
    /**
     * List the curated catalogue of App templates that can be used as starting points.
     *
     * @param {Runtimes[]} runtimes - List of runtimes allowed for filtering function templates. Maximum of 100 runtimes are allowed.
     * @param {UseCases[]} useCases - List of use cases allowed for filtering function templates. Maximum of 100 use cases are allowed.
     * @param {number} limit - Limit the number of templates returned in the response. Default limit is 25, and maximum limit is 5000.
     * @param {number} offset - Offset the list of returned templates. Maximum offset is 5000.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TemplateFunctionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsListTemplates(runtimes?: Runtimes[], useCases?: UseCases[], limit?: number, offset?: number, total?: boolean): Promise<Models.TemplateFunctionList>;
    appsListTemplates(
        paramsOrFirst?: { runtimes?: Runtimes[], useCases?: UseCases[], limit?: number, offset?: number, total?: boolean } | Runtimes[],
        ...rest: [(UseCases[])?, (number)?, (number)?, (boolean)?]    
    ): Promise<Models.TemplateFunctionList> {
        let params: { runtimes?: Runtimes[], useCases?: UseCases[], limit?: number, offset?: number, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('runtimes' in paramsOrFirst || 'useCases' in paramsOrFirst || 'limit' in paramsOrFirst || 'offset' in paramsOrFirst || 'total' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { runtimes?: Runtimes[], useCases?: UseCases[], limit?: number, offset?: number, total?: boolean };
        } else {
            params = {
                runtimes: paramsOrFirst as Runtimes[],
                useCases: rest[0] as UseCases[],
                limit: rest[1] as number,
                offset: rest[2] as number,
                total: rest[3] as boolean            
            };
        }
        
        const runtimes = params.runtimes;
        const useCases = params.useCases;
        const limit = params.limit;
        const offset = params.offset;
        const total = params.total;


        const apiPath = '/v1/apps/templates';
        const payload: Payload = {};
        if (typeof runtimes !== 'undefined') {
            payload['runtimes'] = runtimes;
        }
        if (typeof useCases !== 'undefined') {
            payload['useCases'] = useCases;
        }
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
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
     * Get a single App template by its ID.
     *
     * @param {string} params.templateId - Template ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TemplateFunction>}
     */
    appsGetTemplate(params: { templateId: string }): Promise<Models.TemplateFunction>;
    /**
     * Get a single App template by its ID.
     *
     * @param {string} templateId - Template ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TemplateFunction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetTemplate(templateId: string): Promise<Models.TemplateFunction>;
    appsGetTemplate(
        paramsOrFirst: { templateId: string } | string    
    ): Promise<Models.TemplateFunction> {
        let params: { templateId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: string };
        } else {
            params = {
                templateId: paramsOrFirst as string            
            };
        }
        
        const templateId = params.templateId;

        if (typeof templateId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "templateId"');
        }

        const apiPath = '/v1/apps/templates/{templateId}'.replace('{templateId}', templateId);
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
     * Get aggregated usage stats across all Apps in the project for the requested time range.
     *
     * @param {Range} params.range - Date range.
     * @throws {RevenexxException}
     * @returns {Promise<Models.UsageFunctions>}
     */
    appsListUsage(params?: { range?: Range }): Promise<Models.UsageFunctions>;
    /**
     * Get aggregated usage stats across all Apps in the project for the requested time range.
     *
     * @param {Range} range - Date range.
     * @throws {RevenexxException}
     * @returns {Promise<Models.UsageFunctions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsListUsage(range?: Range): Promise<Models.UsageFunctions>;
    appsListUsage(
        paramsOrFirst?: { range?: Range } | Range    
    ): Promise<Models.UsageFunctions> {
        let params: { range?: Range };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('range' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { range?: Range };
        } else {
            params = {
                range: paramsOrFirst as Range            
            };
        }
        
        const range = params.range;


        const apiPath = '/v1/apps/usage';
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
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
     * Delete an App and all of its deployments. Cascades to the App Registry — Console removes the matching `RegisteredApp` row.
     *
     * @param {string} params.functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsDelete(params: { functionId: string }): Promise<{}>;
    /**
     * Delete an App and all of its deployments. Cascades to the App Registry — Console removes the matching `RegisteredApp` row.
     *
     * @param {string} functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsDelete(functionId: string): Promise<{}>;
    appsDelete(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<{}> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}'.replace('{functionId}', functionId);
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
     * Get an App by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     */
    appsGet(params: { functionId: string }): Promise<Models.Function>;
    /**
     * Get an App by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGet(functionId: string): Promise<Models.Function>;
    appsGet(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<Models.Function> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}'.replace('{functionId}', functionId);
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
     * Update an App. Use this endpoint to rename, change runtime, schedule, environment variables and other configuration.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.name - Function name. Max length: 128 chars.
     * @param {string} params.commands - Build Commands.
     * @param {boolean} params.enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {string} params.entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {string[]} params.execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Controle System) deployment.
     * @param {boolean} params.logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} params.providerBranch - Production branch for the repo linked to the function
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the function
     * @param {string} params.providerRootDirectory - Path to function code in the linked repo.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {Runtime} params.runtime - Execution runtime.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {Scopes[]} params.scopes - List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} params.specification - Runtime specification for the function and builds.
     * @param {number} params.timeout - Maximum execution time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     */
    appsUpdate(params: { functionId: string, name: string, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, runtime?: Runtime, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number }): Promise<Models.Function>;
    /**
     * Update an App. Use this endpoint to rename, change runtime, schedule, environment variables and other configuration.
     *
     * @param {string} functionId - Function ID.
     * @param {string} name - Function name. Max length: 128 chars.
     * @param {string} commands - Build Commands.
     * @param {boolean} enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {string} entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {string[]} execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Controle System) deployment.
     * @param {boolean} logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} providerBranch - Production branch for the repo linked to the function
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the function
     * @param {string} providerRootDirectory - Path to function code in the linked repo.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {Runtime} runtime - Execution runtime.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {Scopes[]} scopes - List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} specification - Runtime specification for the function and builds.
     * @param {number} timeout - Maximum execution time in seconds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsUpdate(functionId: string, name: string, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, runtime?: Runtime, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number): Promise<Models.Function>;
    appsUpdate(
        paramsOrFirst: { functionId: string, name: string, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, runtime?: Runtime, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string[])?, (string[])?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (boolean)?, (Runtime)?, (string)?, (Scopes[])?, (string)?, (number)?]    
    ): Promise<Models.Function> {
        let params: { functionId: string, name: string, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, runtime?: Runtime, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, name: string, commands?: string, enabled?: boolean, entrypoint?: string, events?: string[], execute?: string[], installationId?: string, logging?: boolean, providerBranch?: string, providerRepositoryId?: string, providerRootDirectory?: string, providerSilentMode?: boolean, runtime?: Runtime, schedule?: string, scopes?: Scopes[], specification?: string, timeout?: number };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                name: rest[0] as string,
                commands: rest[1] as string,
                enabled: rest[2] as boolean,
                entrypoint: rest[3] as string,
                events: rest[4] as string[],
                execute: rest[5] as string[],
                installationId: rest[6] as string,
                logging: rest[7] as boolean,
                providerBranch: rest[8] as string,
                providerRepositoryId: rest[9] as string,
                providerRootDirectory: rest[10] as string,
                providerSilentMode: rest[11] as boolean,
                runtime: rest[12] as Runtime,
                schedule: rest[13] as string,
                scopes: rest[14] as Scopes[],
                specification: rest[15] as string,
                timeout: rest[16] as number            
            };
        }
        
        const functionId = params.functionId;
        const name = params.name;
        const commands = params.commands;
        const enabled = params.enabled;
        const entrypoint = params.entrypoint;
        const events = params.events;
        const execute = params.execute;
        const installationId = params.installationId;
        const logging = params.logging;
        const providerBranch = params.providerBranch;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerSilentMode = params.providerSilentMode;
        const runtime = params.runtime;
        const schedule = params.schedule;
        const scopes = params.scopes;
        const specification = params.specification;
        const timeout = params.timeout;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/apps/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
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
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
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
     * Set the active deployment for an App. The chosen deployment must already be `ready`.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     */
    appsUpdateDeployment(params: { functionId: string, deploymentId: string }): Promise<Models.Function>;
    /**
     * Set the active deployment for an App. The chosen deployment must already be `ready`.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsUpdateDeployment(functionId: string, deploymentId: string): Promise<Models.Function>;
    appsUpdateDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Function> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployment'.replace('{functionId}', functionId);
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
     * List the deployment history of an App.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     */
    appsListDeployments(params: { functionId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.DeploymentList>;
    /**
     * List the deployment history of an App.
     *
     * @param {string} functionId - Function ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsListDeployments(functionId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.DeploymentList>;
    appsListDeployments(
        paramsOrFirst: { functionId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.DeploymentList> {
        let params: { functionId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments'.replace('{functionId}', functionId);
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
     * Upload a new code deployment for an App. Accepts a `.tar.gz`
     * archive containing the App source. Phase 2 will extract the
     * manifest from this archive and validate it against the App
     * Registry before kicking off the build.
     *
     * @param {string} params.functionId - Function ID.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {string} params.code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {string} params.commands - Build Commands.
     * @param {string} params.entrypoint - Entrypoint File.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    appsCreateDeployment(params: { functionId: string, activate: boolean, code: string, commands?: string, entrypoint?: string, onProgress?: (progress: UploadProgress) => void }): Promise<Models.Deployment>;
    /**
     * Upload a new code deployment for an App. Accepts a `.tar.gz`
     * archive containing the App source. Phase 2 will extract the
     * manifest from this archive and validate it against the App
     * Registry before kicking off the build.
     *
     * @param {string} functionId - Function ID.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {string} code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {string} commands - Build Commands.
     * @param {string} entrypoint - Entrypoint File.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreateDeployment(functionId: string, activate: boolean, code: string, commands?: string, entrypoint?: string, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    appsCreateDeployment(
        paramsOrFirst: { functionId: string, activate: boolean, code: string, commands?: string, entrypoint?: string, onProgress?: (progress: UploadProgress) => void } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?,((progress: UploadProgress) => void)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, activate: boolean, code: string, commands?: string, entrypoint?: string };
        let onProgress: ((progress: UploadProgress) => void);
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, activate: boolean, code: string, commands?: string, entrypoint?: string };
            onProgress = paramsOrFirst?.onProgress as ((progress: UploadProgress) => void);
        } else {
            params = {
                functionId: paramsOrFirst as string,
                activate: rest[0] as boolean,
                code: rest[1] as string,
                commands: rest[2] as string,
                entrypoint: rest[3] as string            
            };
            onProgress = rest[4] as ((progress: UploadProgress) => void);
        }
        
        const functionId = params.functionId;
        const activate = params.activate;
        const code = params.code;
        const commands = params.commands;
        const entrypoint = params.entrypoint;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof activate === 'undefined') {
            throw new RevenexxException('Missing required parameter: "activate"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        if (typeof code !== 'undefined') {
            payload['code'] = code;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
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
     * Re-deploy an existing build under a new deployment ID. Useful for promoting a known-good preview build to production without rebuilding.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {string} params.buildId - Build unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    appsCreateDuplicateDeployment(params: { functionId: string, deploymentId: string, buildId?: string }): Promise<Models.Deployment>;
    /**
     * Re-deploy an existing build under a new deployment ID. Useful for promoting a known-good preview build to production without rebuilding.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {string} buildId - Build unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreateDuplicateDeployment(functionId: string, deploymentId: string, buildId?: string): Promise<Models.Deployment>;
    appsCreateDuplicateDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string, buildId?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, deploymentId: string, buildId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string, buildId?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string,
                buildId: rest[1] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;
        const buildId = params.buildId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments/duplicate'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof buildId !== 'undefined') {
            payload['buildId'] = buildId;
        }
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
     * Create a new App deployment from a template in the App Templates catalogue.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.owner - The name of the owner of the template.
     * @param {string} params.reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {string} params.repository - Repository name of the template.
     * @param {string} params.rootDirectory - Path to function code in the template repo.
     * @param {Type} params.type - Type for the reference provided. Can be commit, branch, or tag
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    appsCreateTemplateDeployment(params: { functionId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean }): Promise<Models.Deployment>;
    /**
     * Create a new App deployment from a template in the App Templates catalogue.
     *
     * @param {string} functionId - Function ID.
     * @param {string} owner - The name of the owner of the template.
     * @param {string} reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {string} repository - Repository name of the template.
     * @param {string} rootDirectory - Path to function code in the template repo.
     * @param {Type} type - Type for the reference provided. Can be commit, branch, or tag
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreateTemplateDeployment(functionId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean): Promise<Models.Deployment>;
    appsCreateTemplateDeployment(
        paramsOrFirst: { functionId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (Type)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, owner: string, reference: string, repository: string, rootDirectory: string, type: Type, activate?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                owner: rest[0] as string,
                reference: rest[1] as string,
                repository: rest[2] as string,
                rootDirectory: rest[3] as string,
                type: rest[4] as Type,
                activate: rest[5] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const owner = params.owner;
        const reference = params.reference;
        const repository = params.repository;
        const rootDirectory = params.rootDirectory;
        const type = params.type;
        const activate = params.activate;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
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

        const apiPath = '/v1/apps/{functionId}/deployments/template'.replace('{functionId}', functionId);
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
     * Trigger a new deployment from the App's connected Git repository.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {Type} params.type - Type of reference passed. Allowed values are: branch, commit
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    appsCreateVcsDeployment(params: { functionId: string, reference: string, type: Type, activate?: boolean }): Promise<Models.Deployment>;
    /**
     * Trigger a new deployment from the App's connected Git repository.
     *
     * @param {string} functionId - Function ID.
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {Type} type - Type of reference passed. Allowed values are: branch, commit
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreateVcsDeployment(functionId: string, reference: string, type: Type, activate?: boolean): Promise<Models.Deployment>;
    appsCreateVcsDeployment(
        paramsOrFirst: { functionId: string, reference: string, type: Type, activate?: boolean } | string,
        ...rest: [(string)?, (Type)?, (boolean)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, reference: string, type: Type, activate?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, reference: string, type: Type, activate?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                reference: rest[0] as string,
                type: rest[1] as Type,
                activate: rest[2] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const reference = params.reference;
        const type = params.type;
        const activate = params.activate;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof reference === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reference"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments/vcs'.replace('{functionId}', functionId);
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
     * Delete a deployment. The active deployment cannot be deleted while it is active — switch first via the deployment-update endpoint.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsDeleteDeployment(params: { functionId: string, deploymentId: string }): Promise<{}>;
    /**
     * Delete a deployment. The active deployment cannot be deleted while it is active — switch first via the deployment-update endpoint.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsDeleteDeployment(functionId: string, deploymentId: string): Promise<{}>;
    appsDeleteDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
     * Get a deployment by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    appsGetDeployment(params: { functionId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Get a deployment by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    appsGetDeployment(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
     * Get a redirect URL to download the source archive of an App deployment. Useful for re-running a build locally or auditing what was deployed.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {Type} params.type - Deployment file to download. Can be: "source", "output".
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsGetDeploymentDownload(params: { functionId: string, deploymentId: string, type?: Type }): Promise<{}>;
    /**
     * Get a redirect URL to download the source archive of an App deployment. Useful for re-running a build locally or auditing what was deployed.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {Type} type - Deployment file to download. Can be: "source", "output".
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetDeploymentDownload(functionId: string, deploymentId: string, type?: Type): Promise<{}>;
    appsGetDeploymentDownload(
        paramsOrFirst: { functionId: string, deploymentId: string, type?: Type } | string,
        ...rest: [(string)?, (Type)?]    
    ): Promise<{}> {
        let params: { functionId: string, deploymentId: string, type?: Type };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string, type?: Type };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string,
                type: rest[1] as Type            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;
        const type = params.type;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
     * Cancel an in-progress deployment build. Used by the Cockpit "Cancel build" affordance.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     */
    appsUpdateDeploymentStatus(params: { functionId: string, deploymentId: string }): Promise<Models.Deployment>;
    /**
     * Cancel an in-progress deployment build. Used by the Cockpit "Cancel build" affordance.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsUpdateDeploymentStatus(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    appsUpdateDeploymentStatus(
        paramsOrFirst: { functionId: string, deploymentId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Deployment> {
        let params: { functionId: string, deploymentId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, deploymentId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                deploymentId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const deploymentId = params.deploymentId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/v1/apps/{functionId}/deployments/{deploymentId}/status'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
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
     * List the execution history of an App.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ExecutionList>}
     */
    appsListExecutions(params: { functionId: string, queries?: string[], total?: boolean }): Promise<Models.ExecutionList>;
    /**
     * List the execution history of an App.
     *
     * @param {string} functionId - Function ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ExecutionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsListExecutions(functionId: string, queries?: string[], total?: boolean): Promise<Models.ExecutionList>;
    appsListExecutions(
        paramsOrFirst: { functionId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.ExecutionList> {
        let params: { functionId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const queries = params.queries;
        const total = params.total;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/executions'.replace('{functionId}', functionId);
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
     * Trigger an App execution. Use the optional `body`, `path`, `method` and `headers` parameters to invoke the App as if from an HTTP request.
     *
     * @param {string} params.functionId - Function ID.
     * @param {boolean} params.async - Execute code in the background. Default value is false.
     * @param {string} params.body - HTTP body of execution. Default value is empty string.
     * @param {object} params.headers - HTTP headers of execution. Defaults to empty.
     * @param {Method} params.method - HTTP method of execution. Default value is POST.
     * @param {string} params.xpath - HTTP path of execution. Path can include query params. Default value is /
     * @param {string} params.scheduledAt - Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Execution>}
     */
    appsCreateExecution(params: { functionId: string, async?: boolean, body?: string, headers?: object, method?: Method, xpath?: string, scheduledAt?: string }): Promise<Models.Execution>;
    /**
     * Trigger an App execution. Use the optional `body`, `path`, `method` and `headers` parameters to invoke the App as if from an HTTP request.
     *
     * @param {string} functionId - Function ID.
     * @param {boolean} async - Execute code in the background. Default value is false.
     * @param {string} body - HTTP body of execution. Default value is empty string.
     * @param {object} headers - HTTP headers of execution. Defaults to empty.
     * @param {Method} method - HTTP method of execution. Default value is POST.
     * @param {string} xpath - HTTP path of execution. Path can include query params. Default value is /
     * @param {string} scheduledAt - Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreateExecution(functionId: string, async?: boolean, body?: string, headers?: object, method?: Method, xpath?: string, scheduledAt?: string): Promise<Models.Execution>;
    appsCreateExecution(
        paramsOrFirst: { functionId: string, async?: boolean, body?: string, headers?: object, method?: Method, xpath?: string, scheduledAt?: string } | string,
        ...rest: [(boolean)?, (string)?, (object)?, (Method)?, (string)?, (string)?]    
    ): Promise<Models.Execution> {
        let params: { functionId: string, async?: boolean, body?: string, headers?: object, method?: Method, xpath?: string, scheduledAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, async?: boolean, body?: string, headers?: object, method?: Method, xpath?: string, scheduledAt?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                async: rest[0] as boolean,
                body: rest[1] as string,
                headers: rest[2] as object,
                method: rest[3] as Method,
                xpath: rest[4] as string,
                scheduledAt: rest[5] as string            
            };
        }
        
        const functionId = params.functionId;
        const async = params.async;
        const body = params.body;
        const headers = params.headers;
        const method = params.method;
        const xpath = params.xpath;
        const scheduledAt = params.scheduledAt;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof async !== 'undefined') {
            payload['async'] = async;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof headers !== 'undefined') {
            payload['headers'] = headers;
        }
        if (typeof method !== 'undefined') {
            payload['method'] = method;
        }
        if (typeof xpath !== 'undefined') {
            payload['path'] = xpath;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
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
     * Delete an App execution by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.executionId - Execution ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsDeleteExecution(params: { functionId: string, executionId: string }): Promise<{}>;
    /**
     * Delete an App execution by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} executionId - Execution ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsDeleteExecution(functionId: string, executionId: string): Promise<{}>;
    appsDeleteExecution(
        paramsOrFirst: { functionId: string, executionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { functionId: string, executionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, executionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                executionId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const executionId = params.executionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof executionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "executionId"');
        }

        const apiPath = '/v1/apps/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
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
     * Get an App execution by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.executionId - Execution ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Execution>}
     */
    appsGetExecution(params: { functionId: string, executionId: string }): Promise<Models.Execution>;
    /**
     * Get an App execution by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} executionId - Execution ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetExecution(functionId: string, executionId: string): Promise<Models.Execution>;
    appsGetExecution(
        paramsOrFirst: { functionId: string, executionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Execution> {
        let params: { functionId: string, executionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, executionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                executionId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const executionId = params.executionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof executionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "executionId"');
        }

        const apiPath = '/v1/apps/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
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
     * Read-through view of the App's App Registry row — visibility + Marketplace publish flag. Used by Cockpit to render the Publish/Unpublish button correctly on cold load.
     *
     * @param {string} params.functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsGetMarketplaceStatus(params: { functionId: string }): Promise<{}>;
    /**
     * Read-through view of the App's App Registry row — visibility + Marketplace publish flag. Used by Cockpit to render the Publish/Unpublish button correctly on cold load.
     *
     * @param {string} functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetMarketplaceStatus(functionId: string): Promise<{}>;
    appsGetMarketplaceStatus(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<{}> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/marketplace-status'.replace('{functionId}', functionId);
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
     * Remove this App from the Marketplace listing. Existing tenant installations are unaffected. Idempotent.
     *
     * @param {string} params.functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsUnpublish(params: { functionId: string }): Promise<{}>;
    /**
     * Remove this App from the Marketplace listing. Existing tenant installations are unaffected. Idempotent.
     *
     * @param {string} functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsUnpublish(functionId: string): Promise<{}>;
    appsUnpublish(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<{}> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/publish'.replace('{functionId}', functionId);
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
     * Publish this App to the Marketplace. The App must have at
     * least one `ready` deployment with a registered manifest,
     * and its visibility (derived from `billing.json`) must be
     * `public` or `included`. Idempotent.
     *
     * @param {string} params.functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsPublish(params: { functionId: string }): Promise<{}>;
    /**
     * Publish this App to the Marketplace. The App must have at
     * least one `ready` deployment with a registered manifest,
     * and its visibility (derived from `billing.json`) must be
     * `public` or `included`. Idempotent.
     *
     * @param {string} functionId - App ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsPublish(functionId: string): Promise<{}>;
    appsPublish(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<{}> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/publish'.replace('{functionId}', functionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get usage stats for a single App over the requested time range.
     *
     * @param {string} params.functionId - Function ID.
     * @param {Range} params.range - Date range.
     * @throws {RevenexxException}
     * @returns {Promise<Models.UsageFunction>}
     */
    appsGetUsage(params: { functionId: string, range?: Range }): Promise<Models.UsageFunction>;
    /**
     * Get usage stats for a single App over the requested time range.
     *
     * @param {string} functionId - Function ID.
     * @param {Range} range - Date range.
     * @throws {RevenexxException}
     * @returns {Promise<Models.UsageFunction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetUsage(functionId: string, range?: Range): Promise<Models.UsageFunction>;
    appsGetUsage(
        paramsOrFirst: { functionId: string, range?: Range } | string,
        ...rest: [(Range)?]    
    ): Promise<Models.UsageFunction> {
        let params: { functionId: string, range?: Range };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, range?: Range };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                range: rest[0] as Range            
            };
        }
        
        const functionId = params.functionId;
        const range = params.range;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/usage'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
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
     * List all environment variables defined for the App.
     *
     * @param {string} params.functionId - Function unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VariableList>}
     */
    appsListVariables(params: { functionId: string }): Promise<Models.VariableList>;
    /**
     * List all environment variables defined for the App.
     *
     * @param {string} functionId - Function unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsListVariables(functionId: string): Promise<Models.VariableList>;
    appsListVariables(
        paramsOrFirst: { functionId: string } | string    
    ): Promise<Models.VariableList> {
        let params: { functionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string            
            };
        }
        
        const functionId = params.functionId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }

        const apiPath = '/v1/apps/{functionId}/variables'.replace('{functionId}', functionId);
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
     * Create a new App environment variable. These are passed into the App at runtime as `process.env.*`.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     */
    appsCreateVariable(params: { functionId: string, key: string, value: string, secret?: boolean }): Promise<Models.Variable>;
    /**
     * Create a new App environment variable. These are passed into the App at runtime as `process.env.*`.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsCreateVariable(functionId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    appsCreateVariable(
        paramsOrFirst: { functionId: string, key: string, value: string, secret?: boolean } | string,
        ...rest: [(string)?, (string)?, (boolean)?]    
    ): Promise<Models.Variable> {
        let params: { functionId: string, key: string, value: string, secret?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, key: string, value: string, secret?: boolean };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                key: rest[0] as string,
                value: rest[1] as string,
                secret: rest[2] as boolean            
            };
        }
        
        const functionId = params.functionId;
        const key = params.key;
        const value = params.value;
        const secret = params.secret;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new RevenexxException('Missing required parameter: "value"');
        }

        const apiPath = '/v1/apps/{functionId}/variables'.replace('{functionId}', functionId);
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
     * Delete an App environment variable.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    appsDeleteVariable(params: { functionId: string, variableId: string }): Promise<{}>;
    /**
     * Delete an App environment variable.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsDeleteVariable(functionId: string, variableId: string): Promise<{}>;
    appsDeleteVariable(
        paramsOrFirst: { functionId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { functionId: string, variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, variableId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const variableId = params.variableId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "variableId"');
        }

        const apiPath = '/v1/apps/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
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
     * Get an App variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     */
    appsGetVariable(params: { functionId: string, variableId: string }): Promise<Models.Variable>;
    /**
     * Get an App variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsGetVariable(functionId: string, variableId: string): Promise<Models.Variable>;
    appsGetVariable(
        paramsOrFirst: { functionId: string, variableId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Variable> {
        let params: { functionId: string, variableId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, variableId: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                variableId: rest[0] as string            
            };
        }
        
        const functionId = params.functionId;
        const variableId = params.variableId;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "variableId"');
        }

        const apiPath = '/v1/apps/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
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
     * Update an App environment variable.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     */
    appsUpdateVariable(params: { functionId: string, variableId: string, key: string, secret?: boolean, value?: string }): Promise<Models.Variable>;
    /**
     * Update an App environment variable.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    appsUpdateVariable(functionId: string, variableId: string, key: string, secret?: boolean, value?: string): Promise<Models.Variable>;
    appsUpdateVariable(
        paramsOrFirst: { functionId: string, variableId: string, key: string, secret?: boolean, value?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Variable> {
        let params: { functionId: string, variableId: string, key: string, secret?: boolean, value?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { functionId: string, variableId: string, key: string, secret?: boolean, value?: string };
        } else {
            params = {
                functionId: paramsOrFirst as string,
                variableId: rest[0] as string,
                key: rest[1] as string,
                secret: rest[2] as boolean,
                value: rest[3] as string            
            };
        }
        
        const functionId = params.functionId;
        const variableId = params.variableId;
        const key = params.key;
        const secret = params.secret;
        const value = params.value;

        if (typeof functionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/apps/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
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
