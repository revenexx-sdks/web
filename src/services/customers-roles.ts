import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Tone } from '../enums/tone';

export class CustomersRoles {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * What the role editor offers: every permission with its words per language, its area, the app that owns it and whether the platform enforces it yet, plus the built-in set of every built-in role — what resetting a role to its default restores.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PermissionLedger>}
     */
    customersPermissionsLedger(): Promise<Models.PermissionLedger> {

        const apiPath = '/v1/customers/permissions/ledger';
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
     * One call for a whole new role: its name, and the permissions it grants. The key is made from the name when none is sent — 'Einkauf Zentrale' becomes `einkauf-zentrale`, German letters spelled out — and it is fixed from then on, because every contact holding the role stores it. Seeds the built-in roles first when the tenant never wrote them down, so the first role of a tenant's own leaves what every existing contact may do exactly as it was.
     *
     * @param {string} params.title - The name a merchant reads.
     * @param {boolean} params.active - Whether the role is offered when a contact gets one. Default true. An inactive role cannot be the default.
     * @param {string} params.description - One line on what the role is for.
     * @param {object} params.descriptions - The one line per locale.
     * @param {boolean} params.isDefault - Make this the role a contact created without one gets. The previous default stops being one.
     * @param {string} params.key - Optional. Made from `title` when left out.
     * @param {object} params.labels - The name per locale.
     * @param {string[]} params.permissions - What the role grants. Duplicates and blanks are ignored; left out, it grants nothing yet.
     * @param {number} params.position - Optional. Defaults to after every existing role.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleResponse>}
     */
    customersRolesCreate(params: { title: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, key?: string, labels?: object, permissions?: string[], position?: number }): Promise<Models.RoleResponse>;
    /**
     * One call for a whole new role: its name, and the permissions it grants. The key is made from the name when none is sent — 'Einkauf Zentrale' becomes `einkauf-zentrale`, German letters spelled out — and it is fixed from then on, because every contact holding the role stores it. Seeds the built-in roles first when the tenant never wrote them down, so the first role of a tenant's own leaves what every existing contact may do exactly as it was.
     *
     * @param {string} title - The name a merchant reads.
     * @param {boolean} active - Whether the role is offered when a contact gets one. Default true. An inactive role cannot be the default.
     * @param {string} description - One line on what the role is for.
     * @param {object} descriptions - The one line per locale.
     * @param {boolean} isDefault - Make this the role a contact created without one gets. The previous default stops being one.
     * @param {string} key - Optional. Made from `title` when left out.
     * @param {object} labels - The name per locale.
     * @param {string[]} permissions - What the role grants. Duplicates and blanks are ignored; left out, it grants nothing yet.
     * @param {number} position - Optional. Defaults to after every existing role.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRolesCreate(title: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, key?: string, labels?: object, permissions?: string[], position?: number): Promise<Models.RoleResponse>;
    customersRolesCreate(
        paramsOrFirst: { title: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, key?: string, labels?: object, permissions?: string[], position?: number } | string,
        ...rest: [(boolean)?, (string)?, (object)?, (boolean)?, (string)?, (object)?, (string[])?, (number)?]    
    ): Promise<Models.RoleResponse> {
        let params: { title: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, key?: string, labels?: object, permissions?: string[], position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { title: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, key?: string, labels?: object, permissions?: string[], position?: number };
        } else {
            params = {
                title: paramsOrFirst as string,
                active: rest[0] as boolean,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                key: rest[4] as string,
                labels: rest[5] as object,
                permissions: rest[6] as string[],
                position: rest[7] as number            
            };
        }
        
        const title = params.title;
        const active = params.active;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const key = params.key;
        const labels = params.labels;
        const permissions = params.permissions;
        const position = params.position;

        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/roles';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof permissions !== 'undefined') {
            apiPayload['permissions'] = permissions;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * A role's words, its rank, the default flag and whether it is still offered — not its key, which every contact holding the role stores, and not its grants, which `PUT /customers/roles/{key}/permissions` replaces. A role marked inactive is no longer offered when a contact gets a role (the roles vocabulary leaves it out), while every contact that holds it keeps it and keeps its grants. Two roles stay on offer: a built-in one, which is what every tenant starts from, and the default, which is what a new contact gets. Promoting a role to the default demotes the previous one; clearing the flag on the default changes nothing. Seeds the built-in roles first when the tenant never wrote them down.
     *
     * @param {string} params.key - The role key, or the role's id, which is what a record page holds.
     * @param {boolean} params.active - False retires the role: contacts holding it keep it, it is no longer offered. Refused on a built-in role and on the default.
     * @param {string} params.description - One line on what the role is for.
     * @param {object} params.descriptions - The one line per locale.
     * @param {boolean} params.isDefault - Make this the role a contact created without one gets. Refused for an inactive role.
     * @param {object} params.labels - The name per locale.
     * @param {number} params.position - Display order, least privileged first. Grants nothing by itself.
     * @param {string} params.title - The name a merchant reads.
     * @param {Tone} params.tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleUpdateResponse>}
     */
    customersRolesUpdate(params: { key: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone }): Promise<Models.RoleUpdateResponse>;
    /**
     * A role's words, its rank, the default flag and whether it is still offered — not its key, which every contact holding the role stores, and not its grants, which `PUT /customers/roles/{key}/permissions` replaces. A role marked inactive is no longer offered when a contact gets a role (the roles vocabulary leaves it out), while every contact that holds it keeps it and keeps its grants. Two roles stay on offer: a built-in one, which is what every tenant starts from, and the default, which is what a new contact gets. Promoting a role to the default demotes the previous one; clearing the flag on the default changes nothing. Seeds the built-in roles first when the tenant never wrote them down.
     *
     * @param {string} key - The role key, or the role's id, which is what a record page holds.
     * @param {boolean} active - False retires the role: contacts holding it keep it, it is no longer offered. Refused on a built-in role and on the default.
     * @param {string} description - One line on what the role is for.
     * @param {object} descriptions - The one line per locale.
     * @param {boolean} isDefault - Make this the role a contact created without one gets. Refused for an inactive role.
     * @param {object} labels - The name per locale.
     * @param {number} position - Display order, least privileged first. Grants nothing by itself.
     * @param {string} title - The name a merchant reads.
     * @param {Tone} tone - Semantic badge colour.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleUpdateResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRolesUpdate(key: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone): Promise<Models.RoleUpdateResponse>;
    customersRolesUpdate(
        paramsOrFirst: { key: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone } | string,
        ...rest: [(boolean)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (Tone)?]    
    ): Promise<Models.RoleUpdateResponse> {
        let params: { key: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string, active?: boolean, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: Tone };
        } else {
            params = {
                key: paramsOrFirst as string,
                active: rest[0] as boolean,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                title: rest[6] as string,
                tone: rest[7] as Tone            
            };
        }
        
        const key = params.key;
        const active = params.active;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/customers/roles/{key}'.replace('{key}', key);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * A new role with the permissions of `key` and a name of its own — the quick way to a role that differs from a built-in by one grant. The source may be a built-in the tenant never wrote down; the built-ins are seeded first, exactly as a create does. The copy is the tenant's own role, never a built-in, and it is not the default.
     *
     * @param {string} params.key - The role to copy, by key or by id.
     * @param {string} params.title - The name of the new role.
     * @param {string} params.description - Optional. The source's description when left out.
     * @param {string} params.keyBody - Optional. Made from `title` when left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleCopyResponse>}
     */
    customersRolesCopy(params: { key: string, title: string, description?: string, keyBody?: string }): Promise<Models.RoleCopyResponse>;
    /**
     * A new role with the permissions of `key` and a name of its own — the quick way to a role that differs from a built-in by one grant. The source may be a built-in the tenant never wrote down; the built-ins are seeded first, exactly as a create does. The copy is the tenant's own role, never a built-in, and it is not the default.
     *
     * @param {string} key - The role to copy, by key or by id.
     * @param {string} title - The name of the new role.
     * @param {string} description - Optional. The source's description when left out.
     * @param {string} keyBody - Optional. Made from `title` when left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RoleCopyResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRolesCopy(key: string, title: string, description?: string, keyBody?: string): Promise<Models.RoleCopyResponse>;
    customersRolesCopy(
        paramsOrFirst: { key: string, title: string, description?: string, keyBody?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.RoleCopyResponse> {
        let params: { key: string, title: string, description?: string, keyBody?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { key: string, title: string, description?: string, keyBody?: string };
        } else {
            params = {
                key: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                keyBody: rest[2] as string            
            };
        }
        
        const key = params.key;
        const title = params.title;
        const description = params.description;
        const keyBody = params.keyBody;

        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/customers/roles/{key}/copy'.replace('{key}', key);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof keyBody !== 'undefined') {
            apiPayload['key'] = keyBody;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * The whole new set in one call — the shape a role editor actually produces, and the one that cannot leave a half-applied grant behind if a second call fails. Seeds the built-in roles first when the tenant never wrote them down, so editing works without calling /defaults. Permission keys are free text on purpose: they belong to whichever app declared them, and a grant for an app that is not installed simply has nothing to act on.
     *
     * @param {string} params.key - The role key — one of the tenant's own roles (GET /customers/roles) — or the role's id, which is what a record page holds.
     * @param {string[]} params.permissions - The complete new set. Duplicates and blanks are ignored; an empty array revokes everything.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RolePermissionsResponse>}
     */
    customersRolesPermissionsReplace(params: { key: string, permissions: string[] }): Promise<Models.RolePermissionsResponse>;
    /**
     * The whole new set in one call — the shape a role editor actually produces, and the one that cannot leave a half-applied grant behind if a second call fails. Seeds the built-in roles first when the tenant never wrote them down, so editing works without calling /defaults. Permission keys are free text on purpose: they belong to whichever app declared them, and a grant for an app that is not installed simply has nothing to act on.
     *
     * @param {string} key - The role key — one of the tenant's own roles (GET /customers/roles) — or the role's id, which is what a record page holds.
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
