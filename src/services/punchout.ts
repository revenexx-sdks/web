import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Protocol } from '../enums/protocol';
import { PunchoutVocabulariesGetName } from '../enums/punchout-vocabularies-get-name';

export class Punchout {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutAccountsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    punchoutAccountsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/punchout/accounts';
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
     *
     * @param {string} params.channelCode - 
     * @param {string} params.code - 
     * @param {string} params.name - 
     * @param {string} params.protocol - 
     * @param {string} params.authStrategy - 
     * @param {object} params.behaviour - 
     * @param {string} params.credentialDomain - 
     * @param {string} params.credentialIdentity - 
     * @param {string} params.credentialSecret - 
     * @param {boolean} params.enabled - 
     * @param {string} params.fallbackContactId - 
     * @param {string} params.idsCustomerName - 
     * @param {string} params.loginToken - 
     * @param {string} params.organizationId - 
     * @param {string} params.protocolVersion - 
     * @param {boolean} params.secureOci - 
     * @param {number} params.sessionTtlMinutes - 
     * @param {string} params.sharedSecret - 
     * @param {string} params.startPageUrl - 
     * @param {string} params.unknownUserPolicy - 
     * @param {boolean} params.urlThreading - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutAccount>}
     */
    punchoutAccountsCreate(params: { channelCode: string, code: string, name: string, protocol: string, authStrategy?: string, behaviour?: object, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, organizationId?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean }): Promise<Models.PunchoutAccount>;
    /**
     *
     * @param {string} channelCode - 
     * @param {string} code - 
     * @param {string} name - 
     * @param {string} protocol - 
     * @param {string} authStrategy - 
     * @param {object} behaviour - 
     * @param {string} credentialDomain - 
     * @param {string} credentialIdentity - 
     * @param {string} credentialSecret - 
     * @param {boolean} enabled - 
     * @param {string} fallbackContactId - 
     * @param {string} idsCustomerName - 
     * @param {string} loginToken - 
     * @param {string} organizationId - 
     * @param {string} protocolVersion - 
     * @param {boolean} secureOci - 
     * @param {number} sessionTtlMinutes - 
     * @param {string} sharedSecret - 
     * @param {string} startPageUrl - 
     * @param {string} unknownUserPolicy - 
     * @param {boolean} urlThreading - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsCreate(channelCode: string, code: string, name: string, protocol: string, authStrategy?: string, behaviour?: object, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, organizationId?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean): Promise<Models.PunchoutAccount>;
    punchoutAccountsCreate(
        paramsOrFirst: { channelCode: string, code: string, name: string, protocol: string, authStrategy?: string, behaviour?: object, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, organizationId?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (number)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.PunchoutAccount> {
        let params: { channelCode: string, code: string, name: string, protocol: string, authStrategy?: string, behaviour?: object, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, organizationId?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channelCode: string, code: string, name: string, protocol: string, authStrategy?: string, behaviour?: object, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, organizationId?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean };
        } else {
            params = {
                channelCode: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                protocol: rest[2] as string,
                authStrategy: rest[3] as string,
                behaviour: rest[4] as object,
                credentialDomain: rest[5] as string,
                credentialIdentity: rest[6] as string,
                credentialSecret: rest[7] as string,
                enabled: rest[8] as boolean,
                fallbackContactId: rest[9] as string,
                idsCustomerName: rest[10] as string,
                loginToken: rest[11] as string,
                organizationId: rest[12] as string,
                protocolVersion: rest[13] as string,
                secureOci: rest[14] as boolean,
                sessionTtlMinutes: rest[15] as number,
                sharedSecret: rest[16] as string,
                startPageUrl: rest[17] as string,
                unknownUserPolicy: rest[18] as string,
                urlThreading: rest[19] as boolean            
            };
        }
        
        const channelCode = params.channelCode;
        const code = params.code;
        const name = params.name;
        const protocol = params.protocol;
        const authStrategy = params.authStrategy;
        const behaviour = params.behaviour;
        const credentialDomain = params.credentialDomain;
        const credentialIdentity = params.credentialIdentity;
        const credentialSecret = params.credentialSecret;
        const enabled = params.enabled;
        const fallbackContactId = params.fallbackContactId;
        const idsCustomerName = params.idsCustomerName;
        const loginToken = params.loginToken;
        const organizationId = params.organizationId;
        const protocolVersion = params.protocolVersion;
        const secureOci = params.secureOci;
        const sessionTtlMinutes = params.sessionTtlMinutes;
        const sharedSecret = params.sharedSecret;
        const startPageUrl = params.startPageUrl;
        const unknownUserPolicy = params.unknownUserPolicy;
        const urlThreading = params.urlThreading;

        if (typeof channelCode === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channelCode"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof protocol === 'undefined') {
            throw new RevenexxException('Missing required parameter: "protocol"');
        }

        const apiPath = '/v1/punchout/accounts';
        const apiPayload: Payload = {};
        if (typeof authStrategy !== 'undefined') {
            apiPayload['auth_strategy'] = authStrategy;
        }
        if (typeof behaviour !== 'undefined') {
            apiPayload['behaviour'] = behaviour;
        }
        if (typeof channelCode !== 'undefined') {
            apiPayload['channel_code'] = channelCode;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof credentialDomain !== 'undefined') {
            apiPayload['credential_domain'] = credentialDomain;
        }
        if (typeof credentialIdentity !== 'undefined') {
            apiPayload['credential_identity'] = credentialIdentity;
        }
        if (typeof credentialSecret !== 'undefined') {
            apiPayload['credential_secret'] = credentialSecret;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof fallbackContactId !== 'undefined') {
            apiPayload['fallback_contact_id'] = fallbackContactId;
        }
        if (typeof idsCustomerName !== 'undefined') {
            apiPayload['ids_customer_name'] = idsCustomerName;
        }
        if (typeof loginToken !== 'undefined') {
            apiPayload['login_token'] = loginToken;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof protocolVersion !== 'undefined') {
            apiPayload['protocol_version'] = protocolVersion;
        }
        if (typeof secureOci !== 'undefined') {
            apiPayload['secure_oci'] = secureOci;
        }
        if (typeof sessionTtlMinutes !== 'undefined') {
            apiPayload['session_ttl_minutes'] = sessionTtlMinutes;
        }
        if (typeof sharedSecret !== 'undefined') {
            apiPayload['shared_secret'] = sharedSecret;
        }
        if (typeof startPageUrl !== 'undefined') {
            apiPayload['start_page_url'] = startPageUrl;
        }
        if (typeof unknownUserPolicy !== 'undefined') {
            apiPayload['unknown_user_policy'] = unknownUserPolicy;
        }
        if (typeof urlThreading !== 'undefined') {
            apiPayload['url_threading'] = urlThreading;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutAccountsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsDelete(id: string): Promise<{}>;
    punchoutAccountsDelete(
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

        const apiPath = '/v1/punchout/accounts/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutAccount>}
     */
    punchoutAccountsGet(params: { id: string }): Promise<Models.PunchoutAccount>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsGet(id: string): Promise<Models.PunchoutAccount>;
    punchoutAccountsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PunchoutAccount> {
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

        const apiPath = '/v1/punchout/accounts/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @param {string} params.authStrategy - 
     * @param {object} params.behaviour - 
     * @param {string} params.channelCode - 
     * @param {string} params.code - 
     * @param {string} params.credentialDomain - 
     * @param {string} params.credentialIdentity - 
     * @param {string} params.credentialSecret - 
     * @param {boolean} params.enabled - 
     * @param {string} params.fallbackContactId - 
     * @param {string} params.idsCustomerName - 
     * @param {string} params.loginToken - 
     * @param {string} params.name - 
     * @param {string} params.organizationId - 
     * @param {string} params.protocol - 
     * @param {string} params.protocolVersion - 
     * @param {boolean} params.secureOci - 
     * @param {number} params.sessionTtlMinutes - 
     * @param {string} params.sharedSecret - 
     * @param {string} params.startPageUrl - 
     * @param {string} params.unknownUserPolicy - 
     * @param {boolean} params.urlThreading - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutAccount>}
     */
    punchoutAccountsUpdate(params: { id: string, authStrategy?: string, behaviour?: object, channelCode?: string, code?: string, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, name?: string, organizationId?: string, protocol?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean }): Promise<Models.PunchoutAccount>;
    /**
     *
     * @param {string} id - 
     * @param {string} authStrategy - 
     * @param {object} behaviour - 
     * @param {string} channelCode - 
     * @param {string} code - 
     * @param {string} credentialDomain - 
     * @param {string} credentialIdentity - 
     * @param {string} credentialSecret - 
     * @param {boolean} enabled - 
     * @param {string} fallbackContactId - 
     * @param {string} idsCustomerName - 
     * @param {string} loginToken - 
     * @param {string} name - 
     * @param {string} organizationId - 
     * @param {string} protocol - 
     * @param {string} protocolVersion - 
     * @param {boolean} secureOci - 
     * @param {number} sessionTtlMinutes - 
     * @param {string} sharedSecret - 
     * @param {string} startPageUrl - 
     * @param {string} unknownUserPolicy - 
     * @param {boolean} urlThreading - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsUpdate(id: string, authStrategy?: string, behaviour?: object, channelCode?: string, code?: string, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, name?: string, organizationId?: string, protocol?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean): Promise<Models.PunchoutAccount>;
    punchoutAccountsUpdate(
        paramsOrFirst: { id: string, authStrategy?: string, behaviour?: object, channelCode?: string, code?: string, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, name?: string, organizationId?: string, protocol?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (number)?, (string)?, (string)?, (string)?, (boolean)?]    
    ): Promise<Models.PunchoutAccount> {
        let params: { id: string, authStrategy?: string, behaviour?: object, channelCode?: string, code?: string, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, name?: string, organizationId?: string, protocol?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, authStrategy?: string, behaviour?: object, channelCode?: string, code?: string, credentialDomain?: string, credentialIdentity?: string, credentialSecret?: string, enabled?: boolean, fallbackContactId?: string, idsCustomerName?: string, loginToken?: string, name?: string, organizationId?: string, protocol?: string, protocolVersion?: string, secureOci?: boolean, sessionTtlMinutes?: number, sharedSecret?: string, startPageUrl?: string, unknownUserPolicy?: string, urlThreading?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                authStrategy: rest[0] as string,
                behaviour: rest[1] as object,
                channelCode: rest[2] as string,
                code: rest[3] as string,
                credentialDomain: rest[4] as string,
                credentialIdentity: rest[5] as string,
                credentialSecret: rest[6] as string,
                enabled: rest[7] as boolean,
                fallbackContactId: rest[8] as string,
                idsCustomerName: rest[9] as string,
                loginToken: rest[10] as string,
                name: rest[11] as string,
                organizationId: rest[12] as string,
                protocol: rest[13] as string,
                protocolVersion: rest[14] as string,
                secureOci: rest[15] as boolean,
                sessionTtlMinutes: rest[16] as number,
                sharedSecret: rest[17] as string,
                startPageUrl: rest[18] as string,
                unknownUserPolicy: rest[19] as string,
                urlThreading: rest[20] as boolean            
            };
        }
        
        const id = params.id;
        const authStrategy = params.authStrategy;
        const behaviour = params.behaviour;
        const channelCode = params.channelCode;
        const code = params.code;
        const credentialDomain = params.credentialDomain;
        const credentialIdentity = params.credentialIdentity;
        const credentialSecret = params.credentialSecret;
        const enabled = params.enabled;
        const fallbackContactId = params.fallbackContactId;
        const idsCustomerName = params.idsCustomerName;
        const loginToken = params.loginToken;
        const name = params.name;
        const organizationId = params.organizationId;
        const protocol = params.protocol;
        const protocolVersion = params.protocolVersion;
        const secureOci = params.secureOci;
        const sessionTtlMinutes = params.sessionTtlMinutes;
        const sharedSecret = params.sharedSecret;
        const startPageUrl = params.startPageUrl;
        const unknownUserPolicy = params.unknownUserPolicy;
        const urlThreading = params.urlThreading;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/punchout/accounts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof authStrategy !== 'undefined') {
            apiPayload['auth_strategy'] = authStrategy;
        }
        if (typeof behaviour !== 'undefined') {
            apiPayload['behaviour'] = behaviour;
        }
        if (typeof channelCode !== 'undefined') {
            apiPayload['channel_code'] = channelCode;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof credentialDomain !== 'undefined') {
            apiPayload['credential_domain'] = credentialDomain;
        }
        if (typeof credentialIdentity !== 'undefined') {
            apiPayload['credential_identity'] = credentialIdentity;
        }
        if (typeof credentialSecret !== 'undefined') {
            apiPayload['credential_secret'] = credentialSecret;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof fallbackContactId !== 'undefined') {
            apiPayload['fallback_contact_id'] = fallbackContactId;
        }
        if (typeof idsCustomerName !== 'undefined') {
            apiPayload['ids_customer_name'] = idsCustomerName;
        }
        if (typeof loginToken !== 'undefined') {
            apiPayload['login_token'] = loginToken;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof protocolVersion !== 'undefined') {
            apiPayload['protocol_version'] = protocolVersion;
        }
        if (typeof secureOci !== 'undefined') {
            apiPayload['secure_oci'] = secureOci;
        }
        if (typeof sessionTtlMinutes !== 'undefined') {
            apiPayload['session_ttl_minutes'] = sessionTtlMinutes;
        }
        if (typeof sharedSecret !== 'undefined') {
            apiPayload['shared_secret'] = sharedSecret;
        }
        if (typeof startPageUrl !== 'undefined') {
            apiPayload['start_page_url'] = startPageUrl;
        }
        if (typeof unknownUserPolicy !== 'undefined') {
            apiPayload['unknown_user_policy'] = unknownUserPolicy;
        }
        if (typeof urlThreading !== 'undefined') {
            apiPayload['url_threading'] = urlThreading;
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
     * What a buyer's system would receive, before a buyer is in the shop: the account's mappings run over a cart that exists, through the same production code a real hand-back runs, and the field set or the document that comes out. Writes nothing — no visit, no transfer, no correlation key kept — and posts nothing. `mapping` says which mappings produced nothing and why, because a field the document deliberately leaves out reads exactly like one whose source resolved to nothing and only one of the two is a fault.
     *
     * @param {string} params.id - 
     * @param {string} params.cartId - The cart to produce the payload for — already priced, the way a hand-back reads one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutReturnPreview>}
     */
    punchoutAccountsPreview(params: { id: string, cartId: string }): Promise<Models.PunchoutReturnPreview>;
    /**
     * What a buyer's system would receive, before a buyer is in the shop: the account's mappings run over a cart that exists, through the same production code a real hand-back runs, and the field set or the document that comes out. Writes nothing — no visit, no transfer, no correlation key kept — and posts nothing. `mapping` says which mappings produced nothing and why, because a field the document deliberately leaves out reads exactly like one whose source resolved to nothing and only one of the two is a fault.
     *
     * @param {string} id - 
     * @param {string} cartId - The cart to produce the payload for — already priced, the way a hand-back reads one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutReturnPreview>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsPreview(id: string, cartId: string): Promise<Models.PunchoutReturnPreview>;
    punchoutAccountsPreview(
        paramsOrFirst: { id: string, cartId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PunchoutReturnPreview> {
        let params: { id: string, cartId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, cartId: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                cartId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const cartId = params.cartId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/punchout/accounts/{id}/preview'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
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
     * Punchout entry is served on the tenant's own storefront host and never by this app (adr/ADR-0002), so whether an account is reachable is a fact about somebody else's runtime — a per-DOMAIN fact, which no install-time check can see. The probe calls the account's own public entry address, carrying a single-use token this app's entry route echoes back, and records what it found: reachable, not_found, not_entry, wrong_host, tls, timeout, unreachable, unconfigured. Only the echo counts as reachable — a storefront that answers 200 with its own page for every unknown path is exactly the setup this exists to catch. The outcome, the address it was taken on and what came back are answered and kept on the account. Changing the entry URL retires the finding.
     *
     * @param {string} params.id - 
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryProbeResult>}
     */
    punchoutAccountsProbe(params: { id: string, data: object }): Promise<Models.PunchoutEntryProbeResult>;
    /**
     * Punchout entry is served on the tenant's own storefront host and never by this app (adr/ADR-0002), so whether an account is reachable is a fact about somebody else's runtime — a per-DOMAIN fact, which no install-time check can see. The probe calls the account's own public entry address, carrying a single-use token this app's entry route echoes back, and records what it found: reachable, not_found, not_entry, wrong_host, tls, timeout, unreachable, unconfigured. Only the echo counts as reachable — a storefront that answers 200 with its own page for every unknown path is exactly the setup this exists to catch. The outcome, the address it was taken on and what came back are answered and kept on the account. Changing the entry URL retires the finding.
     *
     * @param {string} id - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryProbeResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsProbe(id: string, data: object): Promise<Models.PunchoutEntryProbeResult>;
    punchoutAccountsProbe(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.PunchoutEntryProbeResult> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/punchout/accounts/{id}/probe'.replace('{id}', id);
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
     * The operator's way to tell "the ERP is configured wrong" from "we are broken", with no procurement system in the loop. Builds the entry call this account would receive — its own credentials, in the transport its standard uses — hands it to the same adapter an ERP reaches, and answers the status, the headers and the body the storefront would have written out, rather than a summary of them. It leaves nothing that acts: an entry call opens a visit, so the visit it opened is marked as the tester's and revoked before the answer goes back, its refusals do not count against the credential throttle, and it sends no action that imports a cart. It creates no cart and records no transfer.
     *
     * @param {string} params.id - 
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryTestResult>}
     */
    punchoutAccountsTest(params: { id: string, data: object }): Promise<Models.PunchoutEntryTestResult>;
    /**
     * The operator's way to tell "the ERP is configured wrong" from "we are broken", with no procurement system in the loop. Builds the entry call this account would receive — its own credentials, in the transport its standard uses — hands it to the same adapter an ERP reaches, and answers the status, the headers and the body the storefront would have written out, rather than a summary of them. It leaves nothing that acts: an entry call opens a visit, so the visit it opened is marked as the tester's and revoked before the answer goes back, its refusals do not count against the credential throttle, and it sends no action that imports a cart. It creates no cart and records no transfer.
     *
     * @param {string} id - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryTestResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutAccountsTest(id: string, data: object): Promise<Models.PunchoutEntryTestResult>;
    punchoutAccountsTest(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.PunchoutEntryTestResult> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/punchout/accounts/{id}/test'.replace('{id}', id);
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
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutDefaultsResult>}
     */
    punchoutDefaults(params: { data: object }): Promise<Models.PunchoutDefaultsResult>;
    /**
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutDefaultsResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutDefaults(data: object): Promise<Models.PunchoutDefaultsResult>;
    punchoutDefaults(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.PunchoutDefaultsResult> {
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

        const apiPath = '/v1/punchout/defaults';
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutEntryRefusalsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutEntryRefusalsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    punchoutEntryRefusalsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/punchout/entry-refusals';
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
     * cXML PunchOutSetupRequest for the account named in the path. The answer must be the PunchOutSetupResponse itself, in the same HTTP response — which is the whole reason ADR-0002 exists. What authenticates is Sender/Credential, not From: in the usual shape a network hub has already verified the buyer and presents its OWN credential (§5.3.2.2). Direct PunchOut (§5.7) authenticates by MAC or client certificate and is not supported. A requisition is reopened with operation — create, edit and inspect are served, with the ERP sending the lines back in the request and inspect recorded as view-only; source is not. Reached from the tenant's storefront host, never from this app's own URL and never as a public gateway route — see adr/ADR-0002. The storefront pass-through forwards the ERP's request as the envelope above and returns this answer unchanged.
     *
     * @param {string} params.accountCode - 
     * @param {string} params.method - The method the external system used ('GET' for a typical OCI entry, 'POST' for cXML/IDS).
     * @param {string} params.bodyB64 - The raw request body, base64-encoded. Base64 because a cXML or IDS document must survive byte-for-byte — re-serialising it breaks signatures and encodings.
     * @param {string} params.clientIp - The external system's IP, for the session record and rate accounting.
     * @param {string} params.contentType - The body content type as sent.
     * @param {object} params.headers - Request headers as sent, minus hop-by-hop and storefront session headers.
     * @param {object} params.query - Query parameters as sent — OCI carries USERNAME/PASSWORD/HOOK_URL here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryResponse>}
     */
    punchoutEntryCxml(params: { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object }): Promise<Models.PunchoutEntryResponse>;
    /**
     * cXML PunchOutSetupRequest for the account named in the path. The answer must be the PunchOutSetupResponse itself, in the same HTTP response — which is the whole reason ADR-0002 exists. What authenticates is Sender/Credential, not From: in the usual shape a network hub has already verified the buyer and presents its OWN credential (§5.3.2.2). Direct PunchOut (§5.7) authenticates by MAC or client certificate and is not supported. A requisition is reopened with operation — create, edit and inspect are served, with the ERP sending the lines back in the request and inspect recorded as view-only; source is not. Reached from the tenant's storefront host, never from this app's own URL and never as a public gateway route — see adr/ADR-0002. The storefront pass-through forwards the ERP's request as the envelope above and returns this answer unchanged.
     *
     * @param {string} accountCode - 
     * @param {string} method - The method the external system used ('GET' for a typical OCI entry, 'POST' for cXML/IDS).
     * @param {string} bodyB64 - The raw request body, base64-encoded. Base64 because a cXML or IDS document must survive byte-for-byte — re-serialising it breaks signatures and encodings.
     * @param {string} clientIp - The external system's IP, for the session record and rate accounting.
     * @param {string} contentType - The body content type as sent.
     * @param {object} headers - Request headers as sent, minus hop-by-hop and storefront session headers.
     * @param {object} query - Query parameters as sent — OCI carries USERNAME/PASSWORD/HOOK_URL here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutEntryCxml(accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object): Promise<Models.PunchoutEntryResponse>;
    punchoutEntryCxml(
        paramsOrFirst: { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (object)?, (object)?]    
    ): Promise<Models.PunchoutEntryResponse> {
        let params: { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object };
        } else {
            params = {
                accountCode: paramsOrFirst as string,
                method: rest[0] as string,
                bodyB64: rest[1] as string,
                clientIp: rest[2] as string,
                contentType: rest[3] as string,
                headers: rest[4] as object,
                query: rest[5] as object            
            };
        }
        
        const accountCode = params.accountCode;
        const method = params.method;
        const bodyB64 = params.bodyB64;
        const clientIp = params.clientIp;
        const contentType = params.contentType;
        const headers = params.headers;
        const query = params.query;

        if (typeof accountCode === 'undefined') {
            throw new RevenexxException('Missing required parameter: "accountCode"');
        }
        if (typeof method === 'undefined') {
            throw new RevenexxException('Missing required parameter: "method"');
        }

        const apiPath = '/v1/punchout/entry/cxml/{account_code}'.replace('{account_code}', accountCode);
        const apiPayload: Payload = {};
        if (typeof bodyB64 !== 'undefined') {
            apiPayload['body_b64'] = bodyB64;
        }
        if (typeof clientIp !== 'undefined') {
            apiPayload['client_ip'] = clientIp;
        }
        if (typeof contentType !== 'undefined') {
            apiPayload['content_type'] = contentType;
        }
        if (typeof headers !== 'undefined') {
            apiPayload['headers'] = headers;
        }
        if (typeof method !== 'undefined') {
            apiPayload['method'] = method;
        }
        if (typeof query !== 'undefined') {
            apiPayload['query'] = query;
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
     * IDS entry on one shared endpoint: the account is resolved from kndnr/name_kunde/pw_kunde in the body, because that is how IDS clients are configured. POST-only with multipart/form-data — the standard rules GET out because a cart does not fit in a query string (§5.1a) — and parameter names are lower-case single words. WKE (shop), ADL (one article), AS (a search) and WKS (a cart sent in, which always becomes a NEW cart) authenticate; LI and SV are answered BEFORE authentication, because the standard sends only the action code with them and they are what makes setup self-service. HLS, the heating-label list, is refused as not implemented rather than falling through to "come in and shop". Reached from the tenant's storefront host, never from this app's own URL and never as a public gateway route — see adr/ADR-0002. The storefront pass-through forwards the ERP's request as the envelope above and returns this answer unchanged.
     *
     * @param {string} params.method - The method the external system used ('GET' for a typical OCI entry, 'POST' for cXML/IDS).
     * @param {string} params.bodyB64 - The raw request body, base64-encoded. Base64 because a cXML or IDS document must survive byte-for-byte — re-serialising it breaks signatures and encodings.
     * @param {string} params.clientIp - The external system's IP, for the session record and rate accounting.
     * @param {string} params.contentType - The body content type as sent.
     * @param {object} params.headers - Request headers as sent, minus hop-by-hop and storefront session headers.
     * @param {object} params.query - Query parameters as sent — OCI carries USERNAME/PASSWORD/HOOK_URL here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryResponse>}
     */
    punchoutEntryIds(params: { method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object }): Promise<Models.PunchoutEntryResponse>;
    /**
     * IDS entry on one shared endpoint: the account is resolved from kndnr/name_kunde/pw_kunde in the body, because that is how IDS clients are configured. POST-only with multipart/form-data — the standard rules GET out because a cart does not fit in a query string (§5.1a) — and parameter names are lower-case single words. WKE (shop), ADL (one article), AS (a search) and WKS (a cart sent in, which always becomes a NEW cart) authenticate; LI and SV are answered BEFORE authentication, because the standard sends only the action code with them and they are what makes setup self-service. HLS, the heating-label list, is refused as not implemented rather than falling through to "come in and shop". Reached from the tenant's storefront host, never from this app's own URL and never as a public gateway route — see adr/ADR-0002. The storefront pass-through forwards the ERP's request as the envelope above and returns this answer unchanged.
     *
     * @param {string} method - The method the external system used ('GET' for a typical OCI entry, 'POST' for cXML/IDS).
     * @param {string} bodyB64 - The raw request body, base64-encoded. Base64 because a cXML or IDS document must survive byte-for-byte — re-serialising it breaks signatures and encodings.
     * @param {string} clientIp - The external system's IP, for the session record and rate accounting.
     * @param {string} contentType - The body content type as sent.
     * @param {object} headers - Request headers as sent, minus hop-by-hop and storefront session headers.
     * @param {object} query - Query parameters as sent — OCI carries USERNAME/PASSWORD/HOOK_URL here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutEntryIds(method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object): Promise<Models.PunchoutEntryResponse>;
    punchoutEntryIds(
        paramsOrFirst: { method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object } | string,
        ...rest: [(string)?, (string)?, (string)?, (object)?, (object)?]    
    ): Promise<Models.PunchoutEntryResponse> {
        let params: { method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object };
        } else {
            params = {
                method: paramsOrFirst as string,
                bodyB64: rest[0] as string,
                clientIp: rest[1] as string,
                contentType: rest[2] as string,
                headers: rest[3] as object,
                query: rest[4] as object            
            };
        }
        
        const method = params.method;
        const bodyB64 = params.bodyB64;
        const clientIp = params.clientIp;
        const contentType = params.contentType;
        const headers = params.headers;
        const query = params.query;

        if (typeof method === 'undefined') {
            throw new RevenexxException('Missing required parameter: "method"');
        }

        const apiPath = '/v1/punchout/entry/ids';
        const apiPayload: Payload = {};
        if (typeof bodyB64 !== 'undefined') {
            apiPayload['body_b64'] = bodyB64;
        }
        if (typeof clientIp !== 'undefined') {
            apiPayload['client_ip'] = clientIp;
        }
        if (typeof contentType !== 'undefined') {
            apiPayload['content_type'] = contentType;
        }
        if (typeof headers !== 'undefined') {
            apiPayload['headers'] = headers;
        }
        if (typeof method !== 'undefined') {
            apiPayload['method'] = method;
        }
        if (typeof query !== 'undefined') {
            apiPayload['query'] = query;
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
     * OCI entry for the account named in the path — V8's externalIdentifier, so an existing ERP configuration migrates unchanged. Answers a 302 to the account's start page carrying the session handle, and nothing else: no credential and no sign-in secret ride in a redirect. FUNCTION is a closed upper-case set and only its ABSENCE means "let the buyer shop"; the Level 2 functions (DETAIL, VALIDATE, SOURCING, BACKGROUND_SEARCH, DOWNLOADJSON, DETAILADD, QUANTITYCHECK) answer 501 naming the one asked for, and an undefined one a 400 — neither counts against the credential throttle. This address also carries Secure OCI's two backend legs, INITIALIZE and RETRIEVEOCI, where the cart is FETCHED rather than posted. Reached from the tenant's storefront host, never from this app's own URL and never as a public gateway route — see adr/ADR-0002. The storefront pass-through forwards the ERP's request as the envelope above and returns this answer unchanged.
     *
     * @param {string} params.accountCode - 
     * @param {string} params.method - The method the external system used ('GET' for a typical OCI entry, 'POST' for cXML/IDS).
     * @param {string} params.bodyB64 - The raw request body, base64-encoded. Base64 because a cXML or IDS document must survive byte-for-byte — re-serialising it breaks signatures and encodings.
     * @param {string} params.clientIp - The external system's IP, for the session record and rate accounting.
     * @param {string} params.contentType - The body content type as sent.
     * @param {object} params.headers - Request headers as sent, minus hop-by-hop and storefront session headers.
     * @param {object} params.query - Query parameters as sent — OCI carries USERNAME/PASSWORD/HOOK_URL here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryResponse>}
     */
    punchoutEntryOci(params: { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object }): Promise<Models.PunchoutEntryResponse>;
    /**
     * OCI entry for the account named in the path — V8's externalIdentifier, so an existing ERP configuration migrates unchanged. Answers a 302 to the account's start page carrying the session handle, and nothing else: no credential and no sign-in secret ride in a redirect. FUNCTION is a closed upper-case set and only its ABSENCE means "let the buyer shop"; the Level 2 functions (DETAIL, VALIDATE, SOURCING, BACKGROUND_SEARCH, DOWNLOADJSON, DETAILADD, QUANTITYCHECK) answer 501 naming the one asked for, and an undefined one a 400 — neither counts against the credential throttle. This address also carries Secure OCI's two backend legs, INITIALIZE and RETRIEVEOCI, where the cart is FETCHED rather than posted. Reached from the tenant's storefront host, never from this app's own URL and never as a public gateway route — see adr/ADR-0002. The storefront pass-through forwards the ERP's request as the envelope above and returns this answer unchanged.
     *
     * @param {string} accountCode - 
     * @param {string} method - The method the external system used ('GET' for a typical OCI entry, 'POST' for cXML/IDS).
     * @param {string} bodyB64 - The raw request body, base64-encoded. Base64 because a cXML or IDS document must survive byte-for-byte — re-serialising it breaks signatures and encodings.
     * @param {string} clientIp - The external system's IP, for the session record and rate accounting.
     * @param {string} contentType - The body content type as sent.
     * @param {object} headers - Request headers as sent, minus hop-by-hop and storefront session headers.
     * @param {object} query - Query parameters as sent — OCI carries USERNAME/PASSWORD/HOOK_URL here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutEntryResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutEntryOci(accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object): Promise<Models.PunchoutEntryResponse>;
    punchoutEntryOci(
        paramsOrFirst: { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (object)?, (object)?]    
    ): Promise<Models.PunchoutEntryResponse> {
        let params: { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { accountCode: string, method: string, bodyB64?: string, clientIp?: string, contentType?: string, headers?: object, query?: object };
        } else {
            params = {
                accountCode: paramsOrFirst as string,
                method: rest[0] as string,
                bodyB64: rest[1] as string,
                clientIp: rest[2] as string,
                contentType: rest[3] as string,
                headers: rest[4] as object,
                query: rest[5] as object            
            };
        }
        
        const accountCode = params.accountCode;
        const method = params.method;
        const bodyB64 = params.bodyB64;
        const clientIp = params.clientIp;
        const contentType = params.contentType;
        const headers = params.headers;
        const query = params.query;

        if (typeof accountCode === 'undefined') {
            throw new RevenexxException('Missing required parameter: "accountCode"');
        }
        if (typeof method === 'undefined') {
            throw new RevenexxException('Missing required parameter: "method"');
        }

        const apiPath = '/v1/punchout/entry/oci/{account_code}'.replace('{account_code}', accountCode);
        const apiPayload: Payload = {};
        if (typeof bodyB64 !== 'undefined') {
            apiPayload['body_b64'] = bodyB64;
        }
        if (typeof clientIp !== 'undefined') {
            apiPayload['client_ip'] = clientIp;
        }
        if (typeof contentType !== 'undefined') {
            apiPayload['content_type'] = contentType;
        }
        if (typeof headers !== 'undefined') {
            apiPayload['headers'] = headers;
        }
        if (typeof method !== 'undefined') {
            apiPayload['method'] = method;
        }
        if (typeof query !== 'undefined') {
            apiPayload['query'] = query;
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutFieldMappingsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    punchoutFieldMappingsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/punchout/field-mappings';
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
     *
     * @param {string} params.protocol - 
     * @param {string} params.source - 
     * @param {string} params.target - 
     * @param {string} params.targetKind - 
     * @param {string} params.accountId - 
     * @param {string} params.document - 
     * @param {string} params.emit - 
     * @param {boolean} params.enabled - 
     * @param {object} params.mutators - 
     * @param {number} params.position - 
     * @param {string} params.scope - 
     * @param {object} params.sourceConfig - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMapping>}
     */
    punchoutFieldMappingsCreate(params: { protocol: string, source: string, target: string, targetKind: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, scope?: string, sourceConfig?: object }): Promise<Models.PunchoutFieldMapping>;
    /**
     *
     * @param {string} protocol - 
     * @param {string} source - 
     * @param {string} target - 
     * @param {string} targetKind - 
     * @param {string} accountId - 
     * @param {string} document - 
     * @param {string} emit - 
     * @param {boolean} enabled - 
     * @param {object} mutators - 
     * @param {number} position - 
     * @param {string} scope - 
     * @param {object} sourceConfig - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMapping>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsCreate(protocol: string, source: string, target: string, targetKind: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, scope?: string, sourceConfig?: object): Promise<Models.PunchoutFieldMapping>;
    punchoutFieldMappingsCreate(
        paramsOrFirst: { protocol: string, source: string, target: string, targetKind: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, scope?: string, sourceConfig?: object } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (object)?, (number)?, (string)?, (object)?]    
    ): Promise<Models.PunchoutFieldMapping> {
        let params: { protocol: string, source: string, target: string, targetKind: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, scope?: string, sourceConfig?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { protocol: string, source: string, target: string, targetKind: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, scope?: string, sourceConfig?: object };
        } else {
            params = {
                protocol: paramsOrFirst as string,
                source: rest[0] as string,
                target: rest[1] as string,
                targetKind: rest[2] as string,
                accountId: rest[3] as string,
                document: rest[4] as string,
                emit: rest[5] as string,
                enabled: rest[6] as boolean,
                mutators: rest[7] as object,
                position: rest[8] as number,
                scope: rest[9] as string,
                sourceConfig: rest[10] as object            
            };
        }
        
        const protocol = params.protocol;
        const source = params.source;
        const target = params.target;
        const targetKind = params.targetKind;
        const accountId = params.accountId;
        const document = params.document;
        const emit = params.emit;
        const enabled = params.enabled;
        const mutators = params.mutators;
        const position = params.position;
        const scope = params.scope;
        const sourceConfig = params.sourceConfig;

        if (typeof protocol === 'undefined') {
            throw new RevenexxException('Missing required parameter: "protocol"');
        }
        if (typeof source === 'undefined') {
            throw new RevenexxException('Missing required parameter: "source"');
        }
        if (typeof target === 'undefined') {
            throw new RevenexxException('Missing required parameter: "target"');
        }
        if (typeof targetKind === 'undefined') {
            throw new RevenexxException('Missing required parameter: "targetKind"');
        }

        const apiPath = '/v1/punchout/field-mappings';
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof document !== 'undefined') {
            apiPayload['document'] = document;
        }
        if (typeof emit !== 'undefined') {
            apiPayload['emit'] = emit;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof mutators !== 'undefined') {
            apiPayload['mutators'] = mutators;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof scope !== 'undefined') {
            apiPayload['scope'] = scope;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof sourceConfig !== 'undefined') {
            apiPayload['source_config'] = sourceConfig;
        }
        if (typeof target !== 'undefined') {
            apiPayload['target'] = target;
        }
        if (typeof targetKind !== 'undefined') {
            apiPayload['target_kind'] = targetKind;
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
     * The inverse of the import, and what makes a configuration reviewable and restorable outside the editor — and diffable against the installation it came from. Not a perfect inverse, and it says so: a mapping whose source the old platform has no driver for is left out and named in `dropped`.
     *
     * @param {string} params.accountId - The account whose mappings are written out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMappingExportResult>}
     */
    punchoutFieldMappingsExport(params: { accountId: string }): Promise<Models.PunchoutFieldMappingExportResult>;
    /**
     * The inverse of the import, and what makes a configuration reviewable and restorable outside the editor — and diffable against the installation it came from. Not a perfect inverse, and it says so: a mapping whose source the old platform has no driver for is left out and named in `dropped`.
     *
     * @param {string} accountId - The account whose mappings are written out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMappingExportResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsExport(accountId: string): Promise<Models.PunchoutFieldMappingExportResult>;
    punchoutFieldMappingsExport(
        paramsOrFirst: { accountId: string } | string    
    ): Promise<Models.PunchoutFieldMappingExportResult> {
        let params: { accountId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { accountId: string };
        } else {
            params = {
                accountId: paramsOrFirst as string            
            };
        }
        
        const accountId = params.accountId;

        if (typeof accountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "accountId"');
        }

        const apiPath = '/v1/punchout/field-mappings/export';
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
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
     * Takes a V8 `field_mapping` — the whole column, one protocol's sub-object, or what V8's own export action writes — and records it as mappings for one account. Idempotent on the record's own key (protocol, document, scope, target): re-importing a corrected configuration corrects the rows rather than adding beside them, which is what makes a migration rehearsable. A rule this vocabulary cannot express is NEVER stored and comes back in `refused` with the target it filled, the type it named and why; `skipped` names a group the old platform itself never read.
     *
     * @param {string} params.accountId - The account the configuration belongs to.
     * @param {object} params.configuration - The configuration as the old platform stored it.
     * @param {Protocol} params.protocol - Optional, and only as a check: it has to be the protocol the account speaks. IDS has no configuration to carry over — the old platform held its document in code.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMappingImportResult>}
     */
    punchoutFieldMappingsImport(params: { accountId: string, configuration: object, protocol?: Protocol }): Promise<Models.PunchoutFieldMappingImportResult>;
    /**
     * Takes a V8 `field_mapping` — the whole column, one protocol's sub-object, or what V8's own export action writes — and records it as mappings for one account. Idempotent on the record's own key (protocol, document, scope, target): re-importing a corrected configuration corrects the rows rather than adding beside them, which is what makes a migration rehearsable. A rule this vocabulary cannot express is NEVER stored and comes back in `refused` with the target it filled, the type it named and why; `skipped` names a group the old platform itself never read.
     *
     * @param {string} accountId - The account the configuration belongs to.
     * @param {object} configuration - The configuration as the old platform stored it.
     * @param {Protocol} protocol - Optional, and only as a check: it has to be the protocol the account speaks. IDS has no configuration to carry over — the old platform held its document in code.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMappingImportResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsImport(accountId: string, configuration: object, protocol?: Protocol): Promise<Models.PunchoutFieldMappingImportResult>;
    punchoutFieldMappingsImport(
        paramsOrFirst: { accountId: string, configuration: object, protocol?: Protocol } | string,
        ...rest: [(object)?, (Protocol)?]    
    ): Promise<Models.PunchoutFieldMappingImportResult> {
        let params: { accountId: string, configuration: object, protocol?: Protocol };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { accountId: string, configuration: object, protocol?: Protocol };
        } else {
            params = {
                accountId: paramsOrFirst as string,
                configuration: rest[0] as object,
                protocol: rest[1] as Protocol            
            };
        }
        
        const accountId = params.accountId;
        const configuration = params.configuration;
        const protocol = params.protocol;

        if (typeof accountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "accountId"');
        }
        if (typeof configuration === 'undefined') {
            throw new RevenexxException('Missing required parameter: "configuration"');
        }

        const apiPath = '/v1/punchout/field-mappings/import';
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutFieldMappingsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsDelete(id: string): Promise<{}>;
    punchoutFieldMappingsDelete(
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

        const apiPath = '/v1/punchout/field-mappings/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMapping>}
     */
    punchoutFieldMappingsGet(params: { id: string }): Promise<Models.PunchoutFieldMapping>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMapping>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsGet(id: string): Promise<Models.PunchoutFieldMapping>;
    punchoutFieldMappingsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PunchoutFieldMapping> {
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

        const apiPath = '/v1/punchout/field-mappings/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @param {string} params.accountId - 
     * @param {string} params.document - 
     * @param {string} params.emit - 
     * @param {boolean} params.enabled - 
     * @param {object} params.mutators - 
     * @param {number} params.position - 
     * @param {string} params.protocol - 
     * @param {string} params.scope - 
     * @param {string} params.source - 
     * @param {object} params.sourceConfig - 
     * @param {string} params.target - 
     * @param {string} params.targetKind - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMapping>}
     */
    punchoutFieldMappingsUpdate(params: { id: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, protocol?: string, scope?: string, source?: string, sourceConfig?: object, target?: string, targetKind?: string }): Promise<Models.PunchoutFieldMapping>;
    /**
     *
     * @param {string} id - 
     * @param {string} accountId - 
     * @param {string} document - 
     * @param {string} emit - 
     * @param {boolean} enabled - 
     * @param {object} mutators - 
     * @param {number} position - 
     * @param {string} protocol - 
     * @param {string} scope - 
     * @param {string} source - 
     * @param {object} sourceConfig - 
     * @param {string} target - 
     * @param {string} targetKind - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutFieldMapping>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutFieldMappingsUpdate(id: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, protocol?: string, scope?: string, source?: string, sourceConfig?: object, target?: string, targetKind?: string): Promise<Models.PunchoutFieldMapping>;
    punchoutFieldMappingsUpdate(
        paramsOrFirst: { id: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, protocol?: string, scope?: string, source?: string, sourceConfig?: object, target?: string, targetKind?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (object)?, (number)?, (string)?, (string)?, (string)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.PunchoutFieldMapping> {
        let params: { id: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, protocol?: string, scope?: string, source?: string, sourceConfig?: object, target?: string, targetKind?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, accountId?: string, document?: string, emit?: string, enabled?: boolean, mutators?: object, position?: number, protocol?: string, scope?: string, source?: string, sourceConfig?: object, target?: string, targetKind?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                accountId: rest[0] as string,
                document: rest[1] as string,
                emit: rest[2] as string,
                enabled: rest[3] as boolean,
                mutators: rest[4] as object,
                position: rest[5] as number,
                protocol: rest[6] as string,
                scope: rest[7] as string,
                source: rest[8] as string,
                sourceConfig: rest[9] as object,
                target: rest[10] as string,
                targetKind: rest[11] as string            
            };
        }
        
        const id = params.id;
        const accountId = params.accountId;
        const document = params.document;
        const emit = params.emit;
        const enabled = params.enabled;
        const mutators = params.mutators;
        const position = params.position;
        const protocol = params.protocol;
        const scope = params.scope;
        const source = params.source;
        const sourceConfig = params.sourceConfig;
        const target = params.target;
        const targetKind = params.targetKind;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/punchout/field-mappings/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof document !== 'undefined') {
            apiPayload['document'] = document;
        }
        if (typeof emit !== 'undefined') {
            apiPayload['emit'] = emit;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof mutators !== 'undefined') {
            apiPayload['mutators'] = mutators;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof scope !== 'undefined') {
            apiPayload['scope'] = scope;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof sourceConfig !== 'undefined') {
            apiPayload['source_config'] = sourceConfig;
        }
        if (typeof target !== 'undefined') {
            apiPayload['target'] = target;
        }
        if (typeof targetKind !== 'undefined') {
            apiPayload['target_kind'] = targetKind;
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutSessionsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    punchoutSessionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/punchout/sessions';
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
     *
     * @param {string} params.accountId - 
     * @param {string} params.channelCode - 
     * @param {string} params.expiresAt - 
     * @param {string} params.protocol - 
     * @param {string} params.psid - 
     * @param {string} params.cartId - 
     * @param {string} params.claimedAt - 
     * @param {string} params.closedReason - 
     * @param {string} params.contactId - 
     * @param {string} params.correlationKey - 
     * @param {string} params.entryAction - 
     * @param {object} params.entryIntent - 
     * @param {object} params.entryPayload - 
     * @param {string} params.externalUserId - 
     * @param {string} params.organizationId - 
     * @param {string} params.origin - 
     * @param {string} params.returnMethod - 
     * @param {string} params.returnUrl - 
     * @param {string} params.secureSessionId - 
     * @param {string} params.secureSessionUsedAt - 
     * @param {string} params.secureTransmissionId - 
     * @param {string} params.status - 
     * @param {string} params.transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutSession>}
     */
    punchoutSessionsCreate(params: { accountId: string, channelCode: string, expiresAt: string, protocol: string, psid: string, cartId?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, externalUserId?: string, organizationId?: string, origin?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string }): Promise<Models.PunchoutSession>;
    /**
     *
     * @param {string} accountId - 
     * @param {string} channelCode - 
     * @param {string} expiresAt - 
     * @param {string} protocol - 
     * @param {string} psid - 
     * @param {string} cartId - 
     * @param {string} claimedAt - 
     * @param {string} closedReason - 
     * @param {string} contactId - 
     * @param {string} correlationKey - 
     * @param {string} entryAction - 
     * @param {object} entryIntent - 
     * @param {object} entryPayload - 
     * @param {string} externalUserId - 
     * @param {string} organizationId - 
     * @param {string} origin - 
     * @param {string} returnMethod - 
     * @param {string} returnUrl - 
     * @param {string} secureSessionId - 
     * @param {string} secureSessionUsedAt - 
     * @param {string} secureTransmissionId - 
     * @param {string} status - 
     * @param {string} transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutSession>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsCreate(accountId: string, channelCode: string, expiresAt: string, protocol: string, psid: string, cartId?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, externalUserId?: string, organizationId?: string, origin?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string): Promise<Models.PunchoutSession>;
    punchoutSessionsCreate(
        paramsOrFirst: { accountId: string, channelCode: string, expiresAt: string, protocol: string, psid: string, cartId?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, externalUserId?: string, organizationId?: string, origin?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.PunchoutSession> {
        let params: { accountId: string, channelCode: string, expiresAt: string, protocol: string, psid: string, cartId?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, externalUserId?: string, organizationId?: string, origin?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { accountId: string, channelCode: string, expiresAt: string, protocol: string, psid: string, cartId?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, externalUserId?: string, organizationId?: string, origin?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string };
        } else {
            params = {
                accountId: paramsOrFirst as string,
                channelCode: rest[0] as string,
                expiresAt: rest[1] as string,
                protocol: rest[2] as string,
                psid: rest[3] as string,
                cartId: rest[4] as string,
                claimedAt: rest[5] as string,
                closedReason: rest[6] as string,
                contactId: rest[7] as string,
                correlationKey: rest[8] as string,
                entryAction: rest[9] as string,
                entryIntent: rest[10] as object,
                entryPayload: rest[11] as object,
                externalUserId: rest[12] as string,
                organizationId: rest[13] as string,
                origin: rest[14] as string,
                returnMethod: rest[15] as string,
                returnUrl: rest[16] as string,
                secureSessionId: rest[17] as string,
                secureSessionUsedAt: rest[18] as string,
                secureTransmissionId: rest[19] as string,
                status: rest[20] as string,
                transferredAt: rest[21] as string            
            };
        }
        
        const accountId = params.accountId;
        const channelCode = params.channelCode;
        const expiresAt = params.expiresAt;
        const protocol = params.protocol;
        const psid = params.psid;
        const cartId = params.cartId;
        const claimedAt = params.claimedAt;
        const closedReason = params.closedReason;
        const contactId = params.contactId;
        const correlationKey = params.correlationKey;
        const entryAction = params.entryAction;
        const entryIntent = params.entryIntent;
        const entryPayload = params.entryPayload;
        const externalUserId = params.externalUserId;
        const organizationId = params.organizationId;
        const origin = params.origin;
        const returnMethod = params.returnMethod;
        const returnUrl = params.returnUrl;
        const secureSessionId = params.secureSessionId;
        const secureSessionUsedAt = params.secureSessionUsedAt;
        const secureTransmissionId = params.secureTransmissionId;
        const status = params.status;
        const transferredAt = params.transferredAt;

        if (typeof accountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "accountId"');
        }
        if (typeof channelCode === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channelCode"');
        }
        if (typeof expiresAt === 'undefined') {
            throw new RevenexxException('Missing required parameter: "expiresAt"');
        }
        if (typeof protocol === 'undefined') {
            throw new RevenexxException('Missing required parameter: "protocol"');
        }
        if (typeof psid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "psid"');
        }

        const apiPath = '/v1/punchout/sessions';
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof channelCode !== 'undefined') {
            apiPayload['channel_code'] = channelCode;
        }
        if (typeof claimedAt !== 'undefined') {
            apiPayload['claimed_at'] = claimedAt;
        }
        if (typeof closedReason !== 'undefined') {
            apiPayload['closed_reason'] = closedReason;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof correlationKey !== 'undefined') {
            apiPayload['correlation_key'] = correlationKey;
        }
        if (typeof entryAction !== 'undefined') {
            apiPayload['entry_action'] = entryAction;
        }
        if (typeof entryIntent !== 'undefined') {
            apiPayload['entry_intent'] = entryIntent;
        }
        if (typeof entryPayload !== 'undefined') {
            apiPayload['entry_payload'] = entryPayload;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof externalUserId !== 'undefined') {
            apiPayload['external_user_id'] = externalUserId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof origin !== 'undefined') {
            apiPayload['origin'] = origin;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof psid !== 'undefined') {
            apiPayload['psid'] = psid;
        }
        if (typeof returnMethod !== 'undefined') {
            apiPayload['return_method'] = returnMethod;
        }
        if (typeof returnUrl !== 'undefined') {
            apiPayload['return_url'] = returnUrl;
        }
        if (typeof secureSessionId !== 'undefined') {
            apiPayload['secure_session_id'] = secureSessionId;
        }
        if (typeof secureSessionUsedAt !== 'undefined') {
            apiPayload['secure_session_used_at'] = secureSessionUsedAt;
        }
        if (typeof secureTransmissionId !== 'undefined') {
            apiPayload['secure_transmission_id'] = secureTransmissionId;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof transferredAt !== 'undefined') {
            apiPayload['transferred_at'] = transferredAt;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutSessionsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsDelete(id: string): Promise<{}>;
    punchoutSessionsDelete(
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

        const apiPath = '/v1/punchout/sessions/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutSession>}
     */
    punchoutSessionsGet(params: { id: string }): Promise<Models.PunchoutSession>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutSession>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsGet(id: string): Promise<Models.PunchoutSession>;
    punchoutSessionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PunchoutSession> {
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

        const apiPath = '/v1/punchout/sessions/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @param {string} params.accountId - 
     * @param {string} params.cartId - 
     * @param {string} params.channelCode - 
     * @param {string} params.claimedAt - 
     * @param {string} params.closedReason - 
     * @param {string} params.contactId - 
     * @param {string} params.correlationKey - 
     * @param {string} params.entryAction - 
     * @param {object} params.entryIntent - 
     * @param {object} params.entryPayload - 
     * @param {string} params.expiresAt - 
     * @param {string} params.externalUserId - 
     * @param {string} params.organizationId - 
     * @param {string} params.origin - 
     * @param {string} params.protocol - 
     * @param {string} params.psid - 
     * @param {string} params.returnMethod - 
     * @param {string} params.returnUrl - 
     * @param {string} params.secureSessionId - 
     * @param {string} params.secureSessionUsedAt - 
     * @param {string} params.secureTransmissionId - 
     * @param {string} params.status - 
     * @param {string} params.transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutSession>}
     */
    punchoutSessionsUpdate(params: { id: string, accountId?: string, cartId?: string, channelCode?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, expiresAt?: string, externalUserId?: string, organizationId?: string, origin?: string, protocol?: string, psid?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string }): Promise<Models.PunchoutSession>;
    /**
     *
     * @param {string} id - 
     * @param {string} accountId - 
     * @param {string} cartId - 
     * @param {string} channelCode - 
     * @param {string} claimedAt - 
     * @param {string} closedReason - 
     * @param {string} contactId - 
     * @param {string} correlationKey - 
     * @param {string} entryAction - 
     * @param {object} entryIntent - 
     * @param {object} entryPayload - 
     * @param {string} expiresAt - 
     * @param {string} externalUserId - 
     * @param {string} organizationId - 
     * @param {string} origin - 
     * @param {string} protocol - 
     * @param {string} psid - 
     * @param {string} returnMethod - 
     * @param {string} returnUrl - 
     * @param {string} secureSessionId - 
     * @param {string} secureSessionUsedAt - 
     * @param {string} secureTransmissionId - 
     * @param {string} status - 
     * @param {string} transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutSession>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsUpdate(id: string, accountId?: string, cartId?: string, channelCode?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, expiresAt?: string, externalUserId?: string, organizationId?: string, origin?: string, protocol?: string, psid?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string): Promise<Models.PunchoutSession>;
    punchoutSessionsUpdate(
        paramsOrFirst: { id: string, accountId?: string, cartId?: string, channelCode?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, expiresAt?: string, externalUserId?: string, organizationId?: string, origin?: string, protocol?: string, psid?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.PunchoutSession> {
        let params: { id: string, accountId?: string, cartId?: string, channelCode?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, expiresAt?: string, externalUserId?: string, organizationId?: string, origin?: string, protocol?: string, psid?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, accountId?: string, cartId?: string, channelCode?: string, claimedAt?: string, closedReason?: string, contactId?: string, correlationKey?: string, entryAction?: string, entryIntent?: object, entryPayload?: object, expiresAt?: string, externalUserId?: string, organizationId?: string, origin?: string, protocol?: string, psid?: string, returnMethod?: string, returnUrl?: string, secureSessionId?: string, secureSessionUsedAt?: string, secureTransmissionId?: string, status?: string, transferredAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                accountId: rest[0] as string,
                cartId: rest[1] as string,
                channelCode: rest[2] as string,
                claimedAt: rest[3] as string,
                closedReason: rest[4] as string,
                contactId: rest[5] as string,
                correlationKey: rest[6] as string,
                entryAction: rest[7] as string,
                entryIntent: rest[8] as object,
                entryPayload: rest[9] as object,
                expiresAt: rest[10] as string,
                externalUserId: rest[11] as string,
                organizationId: rest[12] as string,
                origin: rest[13] as string,
                protocol: rest[14] as string,
                psid: rest[15] as string,
                returnMethod: rest[16] as string,
                returnUrl: rest[17] as string,
                secureSessionId: rest[18] as string,
                secureSessionUsedAt: rest[19] as string,
                secureTransmissionId: rest[20] as string,
                status: rest[21] as string,
                transferredAt: rest[22] as string            
            };
        }
        
        const id = params.id;
        const accountId = params.accountId;
        const cartId = params.cartId;
        const channelCode = params.channelCode;
        const claimedAt = params.claimedAt;
        const closedReason = params.closedReason;
        const contactId = params.contactId;
        const correlationKey = params.correlationKey;
        const entryAction = params.entryAction;
        const entryIntent = params.entryIntent;
        const entryPayload = params.entryPayload;
        const expiresAt = params.expiresAt;
        const externalUserId = params.externalUserId;
        const organizationId = params.organizationId;
        const origin = params.origin;
        const protocol = params.protocol;
        const psid = params.psid;
        const returnMethod = params.returnMethod;
        const returnUrl = params.returnUrl;
        const secureSessionId = params.secureSessionId;
        const secureSessionUsedAt = params.secureSessionUsedAt;
        const secureTransmissionId = params.secureTransmissionId;
        const status = params.status;
        const transferredAt = params.transferredAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/punchout/sessions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof channelCode !== 'undefined') {
            apiPayload['channel_code'] = channelCode;
        }
        if (typeof claimedAt !== 'undefined') {
            apiPayload['claimed_at'] = claimedAt;
        }
        if (typeof closedReason !== 'undefined') {
            apiPayload['closed_reason'] = closedReason;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof correlationKey !== 'undefined') {
            apiPayload['correlation_key'] = correlationKey;
        }
        if (typeof entryAction !== 'undefined') {
            apiPayload['entry_action'] = entryAction;
        }
        if (typeof entryIntent !== 'undefined') {
            apiPayload['entry_intent'] = entryIntent;
        }
        if (typeof entryPayload !== 'undefined') {
            apiPayload['entry_payload'] = entryPayload;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof externalUserId !== 'undefined') {
            apiPayload['external_user_id'] = externalUserId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof origin !== 'undefined') {
            apiPayload['origin'] = origin;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof psid !== 'undefined') {
            apiPayload['psid'] = psid;
        }
        if (typeof returnMethod !== 'undefined') {
            apiPayload['return_method'] = returnMethod;
        }
        if (typeof returnUrl !== 'undefined') {
            apiPayload['return_url'] = returnUrl;
        }
        if (typeof secureSessionId !== 'undefined') {
            apiPayload['secure_session_id'] = secureSessionId;
        }
        if (typeof secureSessionUsedAt !== 'undefined') {
            apiPayload['secure_session_used_at'] = secureSessionUsedAt;
        }
        if (typeof secureTransmissionId !== 'undefined') {
            apiPayload['secure_transmission_id'] = secureTransmissionId;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof transferredAt !== 'undefined') {
            apiPayload['transferred_at'] = transferredAt;
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
     * The start of a punchout visit in the shop. Resolves the buyer the external system named to an ordinary contact — the named one, else the account's fallback contact, else whatever the account's policy for an unknown name says — asks the app that owns buyer authentication to sign that contact in, and answers the secret together with the channel, the action and the cart the visit names. The secret is single-use and short-lived: redeem it server-side, and keep it out of a redirect URL, a browser history and a Referer. Answered exactly ONCE — the handle travelled through the external system in the clear. A second claim, an expired or revoked visit, one already handed back and a handle nobody minted all get the same answer, deliberately.
     *
     * @param {string} params.psid - 
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutClaim>}
     */
    punchoutSessionsClaim(params: { psid: string, data: object }): Promise<Models.PunchoutClaim>;
    /**
     * The start of a punchout visit in the shop. Resolves the buyer the external system named to an ordinary contact — the named one, else the account's fallback contact, else whatever the account's policy for an unknown name says — asks the app that owns buyer authentication to sign that contact in, and answers the secret together with the channel, the action and the cart the visit names. The secret is single-use and short-lived: redeem it server-side, and keep it out of a redirect URL, a browser history and a Referer. Answered exactly ONCE — the handle travelled through the external system in the clear. A second claim, an expired or revoked visit, one already handed back and a handle nobody minted all get the same answer, deliberately.
     *
     * @param {string} psid - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutClaim>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsClaim(psid: string, data: object): Promise<Models.PunchoutClaim>;
    punchoutSessionsClaim(
        paramsOrFirst: { psid: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.PunchoutClaim> {
        let params: { psid: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { psid: string, data: object };
        } else {
            params = {
                psid: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const psid = params.psid;
        const data = params.data;

        if (typeof psid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "psid"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/punchout/sessions/{psid}/claim'.replace('{psid}', psid);
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
     * The end of a punchout visit. Answers where the cart goes, by which method and encoding, and the mapped fields to submit — one shape for all three protocols, whether that means dozens of named fields (OCI) or one field holding a whole document (cXML, IDS). The payload is ANSWERED, never posted from here: a request from this app carries none of the buyer's ERP session, and the protocols that expect a browser form post would reject it even if it did. Records a transfer with its normalised lines and the exact payload, mints a correlation key into that payload so an order arriving weeks later can be matched to it, and closes the visit as transferred. Creates NO order and reserves NO stock — the procurement system has decided nothing. A retried call answers the same payload and records no second transfer; a visit that expired or was revoked is refused, with the same answer a handle that never existed gets.
     *
     * @param {string} params.psid - 
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutReturnPayload>}
     */
    punchoutSessionsReturn(params: { psid: string, data: object }): Promise<Models.PunchoutReturnPayload>;
    /**
     * The end of a punchout visit. Answers where the cart goes, by which method and encoding, and the mapped fields to submit — one shape for all three protocols, whether that means dozens of named fields (OCI) or one field holding a whole document (cXML, IDS). The payload is ANSWERED, never posted from here: a request from this app carries none of the buyer's ERP session, and the protocols that expect a browser form post would reject it even if it did. Records a transfer with its normalised lines and the exact payload, mints a correlation key into that payload so an order arriving weeks later can be matched to it, and closes the visit as transferred. Creates NO order and reserves NO stock — the procurement system has decided nothing. A retried call answers the same payload and records no second transfer; a visit that expired or was revoked is refused, with the same answer a handle that never existed gets.
     *
     * @param {string} psid - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutReturnPayload>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutSessionsReturn(psid: string, data: object): Promise<Models.PunchoutReturnPayload>;
    punchoutSessionsReturn(
        paramsOrFirst: { psid: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.PunchoutReturnPayload> {
        let params: { psid: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { psid: string, data: object };
        } else {
            params = {
                psid: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const psid = params.psid;
        const data = params.data;

        if (typeof psid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "psid"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/punchout/sessions/{psid}/return'.replace('{psid}', psid);
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutTransferItemsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransferItemsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    punchoutTransferItemsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/punchout/transfer-items';
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
     *
     * @param {string} params.name - 
     * @param {number} params.quantity - 
     * @param {string} params.transferId - 
     * @param {string} params.currency - 
     * @param {string} params.externalRef - 
     * @param {number} params.lineGross - 
     * @param {number} params.lineNet - 
     * @param {object} params.metadata - 
     * @param {number} params.position - 
     * @param {string} params.productId - 
     * @param {string} params.sku - 
     * @param {number} params.taxRate - 
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransferItem>}
     */
    punchoutTransferItemsCreate(params: { name: string, quantity: number, transferId: string, currency?: string, externalRef?: string, lineGross?: number, lineNet?: number, metadata?: object, position?: number, productId?: string, sku?: string, taxRate?: number, unit?: string, unitPrice?: number }): Promise<Models.PunchoutTransferItem>;
    /**
     *
     * @param {string} name - 
     * @param {number} quantity - 
     * @param {string} transferId - 
     * @param {string} currency - 
     * @param {string} externalRef - 
     * @param {number} lineGross - 
     * @param {number} lineNet - 
     * @param {object} metadata - 
     * @param {number} position - 
     * @param {string} productId - 
     * @param {string} sku - 
     * @param {number} taxRate - 
     * @param {string} unit - 
     * @param {number} unitPrice - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransferItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransferItemsCreate(name: string, quantity: number, transferId: string, currency?: string, externalRef?: string, lineGross?: number, lineNet?: number, metadata?: object, position?: number, productId?: string, sku?: string, taxRate?: number, unit?: string, unitPrice?: number): Promise<Models.PunchoutTransferItem>;
    punchoutTransferItemsCreate(
        paramsOrFirst: { name: string, quantity: number, transferId: string, currency?: string, externalRef?: string, lineGross?: number, lineNet?: number, metadata?: object, position?: number, productId?: string, sku?: string, taxRate?: number, unit?: string, unitPrice?: number } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (number)?, (number)?, (object)?, (number)?, (string)?, (string)?, (number)?, (string)?, (number)?]    
    ): Promise<Models.PunchoutTransferItem> {
        let params: { name: string, quantity: number, transferId: string, currency?: string, externalRef?: string, lineGross?: number, lineNet?: number, metadata?: object, position?: number, productId?: string, sku?: string, taxRate?: number, unit?: string, unitPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, quantity: number, transferId: string, currency?: string, externalRef?: string, lineGross?: number, lineNet?: number, metadata?: object, position?: number, productId?: string, sku?: string, taxRate?: number, unit?: string, unitPrice?: number };
        } else {
            params = {
                name: paramsOrFirst as string,
                quantity: rest[0] as number,
                transferId: rest[1] as string,
                currency: rest[2] as string,
                externalRef: rest[3] as string,
                lineGross: rest[4] as number,
                lineNet: rest[5] as number,
                metadata: rest[6] as object,
                position: rest[7] as number,
                productId: rest[8] as string,
                sku: rest[9] as string,
                taxRate: rest[10] as number,
                unit: rest[11] as string,
                unitPrice: rest[12] as number            
            };
        }
        
        const name = params.name;
        const quantity = params.quantity;
        const transferId = params.transferId;
        const currency = params.currency;
        const externalRef = params.externalRef;
        const lineGross = params.lineGross;
        const lineNet = params.lineNet;
        const metadata = params.metadata;
        const position = params.position;
        const productId = params.productId;
        const sku = params.sku;
        const taxRate = params.taxRate;
        const unit = params.unit;
        const unitPrice = params.unitPrice;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof quantity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "quantity"');
        }
        if (typeof transferId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "transferId"');
        }

        const apiPath = '/v1/punchout/transfer-items';
        const apiPayload: Payload = {};
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof lineGross !== 'undefined') {
            apiPayload['line_gross'] = lineGross;
        }
        if (typeof lineNet !== 'undefined') {
            apiPayload['line_net'] = lineNet;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof transferId !== 'undefined') {
            apiPayload['transfer_id'] = transferId;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransferItem>}
     */
    punchoutTransferItemsGet(params: { id: string }): Promise<Models.PunchoutTransferItem>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransferItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransferItemsGet(id: string): Promise<Models.PunchoutTransferItem>;
    punchoutTransferItemsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PunchoutTransferItem> {
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

        const apiPath = '/v1/punchout/transfer-items/{id}'.replace('{id}', id);
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    punchoutTransfersList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransfersList(limit?: number, offset?: number, order?: string): Promise<{}>;
    punchoutTransfersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/punchout/transfers';
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
     *
     * @param {string} params.accountId - 
     * @param {string} params.correlationKey - 
     * @param {string} params.protocol - 
     * @param {string} params.sessionId - 
     * @param {string} params.cartId - 
     * @param {string} params.contactId - 
     * @param {string} params.currency - 
     * @param {number} params.itemCount - 
     * @param {string} params.matchedAt - 
     * @param {string} params.matchedOrderId - 
     * @param {string} params.organizationId - 
     * @param {object} params.payload - 
     * @param {string} params.targetUrl - 
     * @param {number} params.totalGross - 
     * @param {number} params.totalNet - 
     * @param {string} params.transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransfer>}
     */
    punchoutTransfersCreate(params: { accountId: string, correlationKey: string, protocol: string, sessionId: string, cartId?: string, contactId?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string }): Promise<Models.PunchoutTransfer>;
    /**
     *
     * @param {string} accountId - 
     * @param {string} correlationKey - 
     * @param {string} protocol - 
     * @param {string} sessionId - 
     * @param {string} cartId - 
     * @param {string} contactId - 
     * @param {string} currency - 
     * @param {number} itemCount - 
     * @param {string} matchedAt - 
     * @param {string} matchedOrderId - 
     * @param {string} organizationId - 
     * @param {object} payload - 
     * @param {string} targetUrl - 
     * @param {number} totalGross - 
     * @param {number} totalNet - 
     * @param {string} transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransfer>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransfersCreate(accountId: string, correlationKey: string, protocol: string, sessionId: string, cartId?: string, contactId?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string): Promise<Models.PunchoutTransfer>;
    punchoutTransfersCreate(
        paramsOrFirst: { accountId: string, correlationKey: string, protocol: string, sessionId: string, cartId?: string, contactId?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (string)?, (object)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.PunchoutTransfer> {
        let params: { accountId: string, correlationKey: string, protocol: string, sessionId: string, cartId?: string, contactId?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { accountId: string, correlationKey: string, protocol: string, sessionId: string, cartId?: string, contactId?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string };
        } else {
            params = {
                accountId: paramsOrFirst as string,
                correlationKey: rest[0] as string,
                protocol: rest[1] as string,
                sessionId: rest[2] as string,
                cartId: rest[3] as string,
                contactId: rest[4] as string,
                currency: rest[5] as string,
                itemCount: rest[6] as number,
                matchedAt: rest[7] as string,
                matchedOrderId: rest[8] as string,
                organizationId: rest[9] as string,
                payload: rest[10] as object,
                targetUrl: rest[11] as string,
                totalGross: rest[12] as number,
                totalNet: rest[13] as number,
                transferredAt: rest[14] as string            
            };
        }
        
        const accountId = params.accountId;
        const correlationKey = params.correlationKey;
        const protocol = params.protocol;
        const sessionId = params.sessionId;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const currency = params.currency;
        const itemCount = params.itemCount;
        const matchedAt = params.matchedAt;
        const matchedOrderId = params.matchedOrderId;
        const organizationId = params.organizationId;
        const payload = params.payload;
        const targetUrl = params.targetUrl;
        const totalGross = params.totalGross;
        const totalNet = params.totalNet;
        const transferredAt = params.transferredAt;

        if (typeof accountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "accountId"');
        }
        if (typeof correlationKey === 'undefined') {
            throw new RevenexxException('Missing required parameter: "correlationKey"');
        }
        if (typeof protocol === 'undefined') {
            throw new RevenexxException('Missing required parameter: "protocol"');
        }
        if (typeof sessionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sessionId"');
        }

        const apiPath = '/v1/punchout/transfers';
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof correlationKey !== 'undefined') {
            apiPayload['correlation_key'] = correlationKey;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof itemCount !== 'undefined') {
            apiPayload['item_count'] = itemCount;
        }
        if (typeof matchedAt !== 'undefined') {
            apiPayload['matched_at'] = matchedAt;
        }
        if (typeof matchedOrderId !== 'undefined') {
            apiPayload['matched_order_id'] = matchedOrderId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof payload !== 'undefined') {
            apiPayload['payload'] = payload;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof sessionId !== 'undefined') {
            apiPayload['session_id'] = sessionId;
        }
        if (typeof targetUrl !== 'undefined') {
            apiPayload['target_url'] = targetUrl;
        }
        if (typeof totalGross !== 'undefined') {
            apiPayload['total_gross'] = totalGross;
        }
        if (typeof totalNet !== 'undefined') {
            apiPayload['total_net'] = totalNet;
        }
        if (typeof transferredAt !== 'undefined') {
            apiPayload['transferred_at'] = transferredAt;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransfer>}
     */
    punchoutTransfersGet(params: { id: string }): Promise<Models.PunchoutTransfer>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransfer>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransfersGet(id: string): Promise<Models.PunchoutTransfer>;
    punchoutTransfersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PunchoutTransfer> {
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

        const apiPath = '/v1/punchout/transfers/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @param {string} params.accountId - 
     * @param {string} params.cartId - 
     * @param {string} params.contactId - 
     * @param {string} params.correlationKey - 
     * @param {string} params.currency - 
     * @param {number} params.itemCount - 
     * @param {string} params.matchedAt - 
     * @param {string} params.matchedOrderId - 
     * @param {string} params.organizationId - 
     * @param {object} params.payload - 
     * @param {string} params.protocol - 
     * @param {string} params.sessionId - 
     * @param {string} params.targetUrl - 
     * @param {number} params.totalGross - 
     * @param {number} params.totalNet - 
     * @param {string} params.transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransfer>}
     */
    punchoutTransfersUpdate(params: { id: string, accountId?: string, cartId?: string, contactId?: string, correlationKey?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, protocol?: string, sessionId?: string, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string }): Promise<Models.PunchoutTransfer>;
    /**
     *
     * @param {string} id - 
     * @param {string} accountId - 
     * @param {string} cartId - 
     * @param {string} contactId - 
     * @param {string} correlationKey - 
     * @param {string} currency - 
     * @param {number} itemCount - 
     * @param {string} matchedAt - 
     * @param {string} matchedOrderId - 
     * @param {string} organizationId - 
     * @param {object} payload - 
     * @param {string} protocol - 
     * @param {string} sessionId - 
     * @param {string} targetUrl - 
     * @param {number} totalGross - 
     * @param {number} totalNet - 
     * @param {string} transferredAt - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutTransfer>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutTransfersUpdate(id: string, accountId?: string, cartId?: string, contactId?: string, correlationKey?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, protocol?: string, sessionId?: string, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string): Promise<Models.PunchoutTransfer>;
    punchoutTransfersUpdate(
        paramsOrFirst: { id: string, accountId?: string, cartId?: string, contactId?: string, correlationKey?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, protocol?: string, sessionId?: string, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (string)?, (object)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.PunchoutTransfer> {
        let params: { id: string, accountId?: string, cartId?: string, contactId?: string, correlationKey?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, protocol?: string, sessionId?: string, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, accountId?: string, cartId?: string, contactId?: string, correlationKey?: string, currency?: string, itemCount?: number, matchedAt?: string, matchedOrderId?: string, organizationId?: string, payload?: object, protocol?: string, sessionId?: string, targetUrl?: string, totalGross?: number, totalNet?: number, transferredAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                accountId: rest[0] as string,
                cartId: rest[1] as string,
                contactId: rest[2] as string,
                correlationKey: rest[3] as string,
                currency: rest[4] as string,
                itemCount: rest[5] as number,
                matchedAt: rest[6] as string,
                matchedOrderId: rest[7] as string,
                organizationId: rest[8] as string,
                payload: rest[9] as object,
                protocol: rest[10] as string,
                sessionId: rest[11] as string,
                targetUrl: rest[12] as string,
                totalGross: rest[13] as number,
                totalNet: rest[14] as number,
                transferredAt: rest[15] as string            
            };
        }
        
        const id = params.id;
        const accountId = params.accountId;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const correlationKey = params.correlationKey;
        const currency = params.currency;
        const itemCount = params.itemCount;
        const matchedAt = params.matchedAt;
        const matchedOrderId = params.matchedOrderId;
        const organizationId = params.organizationId;
        const payload = params.payload;
        const protocol = params.protocol;
        const sessionId = params.sessionId;
        const targetUrl = params.targetUrl;
        const totalGross = params.totalGross;
        const totalNet = params.totalNet;
        const transferredAt = params.transferredAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/punchout/transfers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof accountId !== 'undefined') {
            apiPayload['account_id'] = accountId;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof correlationKey !== 'undefined') {
            apiPayload['correlation_key'] = correlationKey;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof itemCount !== 'undefined') {
            apiPayload['item_count'] = itemCount;
        }
        if (typeof matchedAt !== 'undefined') {
            apiPayload['matched_at'] = matchedAt;
        }
        if (typeof matchedOrderId !== 'undefined') {
            apiPayload['matched_order_id'] = matchedOrderId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof payload !== 'undefined') {
            apiPayload['payload'] = payload;
        }
        if (typeof protocol !== 'undefined') {
            apiPayload['protocol'] = protocol;
        }
        if (typeof sessionId !== 'undefined') {
            apiPayload['session_id'] = sessionId;
        }
        if (typeof targetUrl !== 'undefined') {
            apiPayload['target_url'] = targetUrl;
        }
        if (typeof totalGross !== 'undefined') {
            apiPayload['total_gross'] = totalGross;
        }
        if (typeof totalNet !== 'undefined') {
            apiPayload['total_net'] = totalNet;
        }
        if (typeof transferredAt !== 'undefined') {
            apiPayload['transferred_at'] = transferredAt;
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
     * Discovery for the vocabulary routes: the enums this app enforces, each with its name, its title and its description — and deliberately WITHOUT its values, so a UI can cache this one small answer and fetch only the value sets it renders. Names: entry-probe-outcome, mapping-mutators, mapping-sources. Fetch one with GET /punchout/vocabularies/{name}.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutVocabularyIndex>}
     */
    punchoutVocabulariesList(): Promise<Models.PunchoutVocabularyIndex> {

        const apiPath = '/v1/punchout/vocabularies';
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
     * One vocabulary in full: every permitted value with its title, its description and the badge tone a UI colours it with. The values are read out of the column's CHECK constraint, so the served set IS the set the database accepts and the set the mapping engine understands — a mapping editor offering anything else would produce silently empty fields. `mapping-sources` carries the 24 sources of ADR-0003 (three of them namespaced `cxml.*`, offered only for a cXML account) and `mapping-mutators` the 17 chainable mutators; each value's description names the config keys it reads and which of them are required. Answers 404 for an unknown name.
     *
     * @param {PunchoutVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutVocabulary>}
     */
    punchoutVocabulariesGet(params: { name: PunchoutVocabulariesGetName }): Promise<Models.PunchoutVocabulary>;
    /**
     * One vocabulary in full: every permitted value with its title, its description and the badge tone a UI colours it with. The values are read out of the column's CHECK constraint, so the served set IS the set the database accepts and the set the mapping engine understands — a mapping editor offering anything else would produce silently empty fields. `mapping-sources` carries the 24 sources of ADR-0003 (three of them namespaced `cxml.*`, offered only for a cXML account) and `mapping-mutators` the 17 chainable mutators; each value's description names the config keys it reads and which of them are required. Answers 404 for an unknown name.
     *
     * @param {PunchoutVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PunchoutVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    punchoutVocabulariesGet(name: PunchoutVocabulariesGetName): Promise<Models.PunchoutVocabulary>;
    punchoutVocabulariesGet(
        paramsOrFirst: { name: PunchoutVocabulariesGetName } | PunchoutVocabulariesGetName    
    ): Promise<Models.PunchoutVocabulary> {
        let params: { name: PunchoutVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: PunchoutVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as PunchoutVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/punchout/vocabularies/{name}'.replace('{name}', name);
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
