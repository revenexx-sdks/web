import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CustomersRoles {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The whole catalogue in one read: every role a contact of this tenant can hold, the permissions each one grants, and the built-in permission vocabulary those grants are drawn from. Roles are held by a CONTACT and apply inside that contact's organization; there is no global customer role. Permissions are derived from the role at read time and never stored per contact, so a role change takes effect immediately and cannot leave a stale grant. The role to permission MAPPING is per tenant and configurable (PUT /customers/roles/{key}/permissions); a tenant that has not configured anything gets the built-ins and 'source' says which of the two answered. Built-in roles, least to most privileged: viewer (Viewer), requester (Requester), buyer (Buyer), approver (Approver), admin (Administrator). The permission KEYS themselves come from the cross-app ledger — every installed app declares what it enforces — so a tenant may grant a key this list does not mention.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleCatalogResponse>}
     */
    customersRolesList(): Promise<Models.RoleCatalogResponse> {

        const apiPath = '/v1/customers/roles';
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
     * Idempotent: a role that already exists is left completely alone, its permissions included, so re-seeding never undoes a merchant's edits. Creates viewer, requester, buyer, approver, admin with the built-in mapping. A tenant that never calls this still behaves correctly — the catalogue and every permission read fall back to the same built-ins.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.RolesDefaultsResponse>}
     */
    customersRolesDefaults(params: { data: object }): Promise<Models.RolesDefaultsResponse>;
    /**
     * Idempotent: a role that already exists is left completely alone, its permissions included, so re-seeding never undoes a merchant's edits. Creates viewer, requester, buyer, approver, admin with the built-in mapping. A tenant that never calls this still behaves correctly — the catalogue and every permission read fall back to the same built-ins.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.RolesDefaultsResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRolesDefaults(data: object): Promise<Models.RolesDefaultsResponse>;
    customersRolesDefaults(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.RolesDefaultsResponse> {
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

        const apiPath = '/v1/customers/roles/defaults';
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
     * The whole new set in one call — the shape a role editor actually produces, and the one that cannot leave a half-applied grant behind if a second call fails. Seeds the built-in roles first when the tenant has none, so editing works without calling /defaults. Permission keys are free text on purpose: they belong to whichever app declared them, and a grant for an app that is not installed simply has nothing to act on.
     *
     * @param {string} params.key - The role key — one of the tenant's own roles (GET /customers/roles).
     * @param {string[]} params.permissions - The complete new set. Duplicates and blanks are ignored; an empty array revokes everything.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RolePermissionsResponse>}
     */
    customersRolesPermissionsReplace(params: { key: string, permissions: string[] }): Promise<Models.RolePermissionsResponse>;
    /**
     * The whole new set in one call — the shape a role editor actually produces, and the one that cannot leave a half-applied grant behind if a second call fails. Seeds the built-in roles first when the tenant has none, so editing works without calling /defaults. Permission keys are free text on purpose: they belong to whichever app declared them, and a grant for an app that is not installed simply has nothing to act on.
     *
     * @param {string} key - The role key — one of the tenant's own roles (GET /customers/roles).
     * @param {string[]} permissions - The complete new set. Duplicates and blanks are ignored; an empty array revokes everything.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RolePermissionsResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRolesPermissionsReplace(key: string, permissions: string[]): Promise<Models.RolePermissionsResponse>;
    customersRolesPermissionsReplace(
        paramsOrFirst: { key: string, permissions: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.RolePermissionsResponse> {
        let params: { key: string, permissions: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string, permissions: string[] };
        } else {
            params = {
                key: paramsOrFirst as string,
                permissions: rest[0] as string[]            
            };
        }
        
        const key = params.key;
        const permissions = params.permissions;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }
        if (typeof permissions === 'undefined') {
            throw new RevenexxException('Missing required parameter: "permissions"');
        }

        const apiPath = '/v1/customers/roles/{key}/permissions'.replace('{key}', key);
        const apiPayload: Payload = {};
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
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
