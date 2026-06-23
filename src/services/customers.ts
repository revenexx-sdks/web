import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { AddressType } from '../enums/address-type';
import { ContactRole } from '../enums/contact-role';
import { ContactStatus } from '../enums/contact-status';
import { OrganizationStatus } from '../enums/organization-status';

export class Customers {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {string} params.contactId - Filter to one owning contact.
     * @param {string} params.organizationId - Filter to one organization.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressesList(params?: { contactId?: string, organizationId?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {string} contactId - Filter to one owning contact.
     * @param {string} organizationId - Filter to one organization.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesList(contactId?: string, organizationId?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersAddressesList(
        paramsOrFirst?: { contactId?: string, organizationId?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { contactId?: string, organizationId?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId?: string, organizationId?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                organizationId: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number,
                order: rest[3] as string            
            };
        }
        
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/addresses';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
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
     * @param {string} params.city - 
     * @param {string} params.country - ISO 3166-1 alpha-2 code.
     * @param {string} params.street - 
     * @param {string} params.zip - 
     * @param {string} params.company - 
     * @param {string} params.contactId - Owning contact (personal address).
     * @param {boolean} params.isDefault - The default address of its owner and type.
     * @param {string} params.name - Recipient name.
     * @param {string} params.organizationId - Owning organization (company address).
     * @param {string} params.phone - 
     * @param {string} params.region - 
     * @param {string} params.street2 - 
     * @param {AddressType} params.type - Default 'shipping'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesCreate(params: { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: AddressType }): Promise<Models.Address>;
    /**
     *
     * @param {string} city - 
     * @param {string} country - ISO 3166-1 alpha-2 code.
     * @param {string} street - 
     * @param {string} zip - 
     * @param {string} company - 
     * @param {string} contactId - Owning contact (personal address).
     * @param {boolean} isDefault - The default address of its owner and type.
     * @param {string} name - Recipient name.
     * @param {string} organizationId - Owning organization (company address).
     * @param {string} phone - 
     * @param {string} region - 
     * @param {string} street2 - 
     * @param {AddressType} type - Default 'shipping'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesCreate(city: string, country: string, street: string, zip: string, company?: string, contactId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: AddressType): Promise<Models.Address>;
    customersAddressesCreate(
        paramsOrFirst: { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: AddressType } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (AddressType)?]    
    ): Promise<Models.Address> {
        let params: { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: AddressType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: AddressType };
        } else {
            params = {
                city: paramsOrFirst as string,
                country: rest[0] as string,
                street: rest[1] as string,
                zip: rest[2] as string,
                company: rest[3] as string,
                contactId: rest[4] as string,
                isDefault: rest[5] as boolean,
                name: rest[6] as string,
                organizationId: rest[7] as string,
                phone: rest[8] as string,
                region: rest[9] as string,
                street2: rest[10] as string,
                type: rest[11] as AddressType            
            };
        }
        
        const city = params.city;
        const country = params.country;
        const street = params.street;
        const zip = params.zip;
        const company = params.company;
        const contactId = params.contactId;
        const isDefault = params.isDefault;
        const name = params.name;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const region = params.region;
        const street2 = params.street2;
        const type = params.type;

        if (typeof city === 'undefined') {
            throw new RevenexxException('Missing required parameter: "city"');
        }
        if (typeof country === 'undefined') {
            throw new RevenexxException('Missing required parameter: "country"');
        }
        if (typeof street === 'undefined') {
            throw new RevenexxException('Missing required parameter: "street"');
        }
        if (typeof zip === 'undefined') {
            throw new RevenexxException('Missing required parameter: "zip"');
        }

        const apiPath = '/v1/customers/addresses';
        const apiPayload: Payload = {};
        if (typeof city !== 'undefined') {
            apiPayload['city'] = city;
        }
        if (typeof company !== 'undefined') {
            apiPayload['company'] = company;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof region !== 'undefined') {
            apiPayload['region'] = region;
        }
        if (typeof street !== 'undefined') {
            apiPayload['street'] = street;
        }
        if (typeof street2 !== 'undefined') {
            apiPayload['street2'] = street2;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof zip !== 'undefined') {
            apiPayload['zip'] = zip;
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
    customersAddressesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesDelete(id: string): Promise<{}>;
    customersAddressesDelete(
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

        const apiPath = '/v1/customers/addresses/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Address>}
     */
    customersAddressesGet(params: { id: string }): Promise<Models.Address>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesGet(id: string): Promise<Models.Address>;
    customersAddressesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Address> {
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

        const apiPath = '/v1/customers/addresses/{id}'.replace('{id}', id);
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
     * @param {string} params.city - 
     * @param {string} params.company - 
     * @param {string} params.contactId - Owning contact (personal address).
     * @param {string} params.country - ISO 3166-1 alpha-2 code.
     * @param {boolean} params.isDefault - The default address of its owner and type.
     * @param {string} params.name - Recipient name.
     * @param {string} params.organizationId - Owning organization (company address).
     * @param {string} params.phone - 
     * @param {string} params.region - 
     * @param {string} params.street - 
     * @param {string} params.street2 - 
     * @param {AddressType} params.type - Default 'shipping'.
     * @param {string} params.zip - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesUpdate(params: { id: string, city?: string, company?: string, contactId?: string, country?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: AddressType, zip?: string }): Promise<Models.Address>;
    /**
     *
     * @param {string} id - 
     * @param {string} city - 
     * @param {string} company - 
     * @param {string} contactId - Owning contact (personal address).
     * @param {string} country - ISO 3166-1 alpha-2 code.
     * @param {boolean} isDefault - The default address of its owner and type.
     * @param {string} name - Recipient name.
     * @param {string} organizationId - Owning organization (company address).
     * @param {string} phone - 
     * @param {string} region - 
     * @param {string} street - 
     * @param {string} street2 - 
     * @param {AddressType} type - Default 'shipping'.
     * @param {string} zip - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesUpdate(id: string, city?: string, company?: string, contactId?: string, country?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: AddressType, zip?: string): Promise<Models.Address>;
    customersAddressesUpdate(
        paramsOrFirst: { id: string, city?: string, company?: string, contactId?: string, country?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: AddressType, zip?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (AddressType)?, (string)?]    
    ): Promise<Models.Address> {
        let params: { id: string, city?: string, company?: string, contactId?: string, country?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: AddressType, zip?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, city?: string, company?: string, contactId?: string, country?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: AddressType, zip?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                city: rest[0] as string,
                company: rest[1] as string,
                contactId: rest[2] as string,
                country: rest[3] as string,
                isDefault: rest[4] as boolean,
                name: rest[5] as string,
                organizationId: rest[6] as string,
                phone: rest[7] as string,
                region: rest[8] as string,
                street: rest[9] as string,
                street2: rest[10] as string,
                type: rest[11] as AddressType,
                zip: rest[12] as string            
            };
        }
        
        const id = params.id;
        const city = params.city;
        const company = params.company;
        const contactId = params.contactId;
        const country = params.country;
        const isDefault = params.isDefault;
        const name = params.name;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const region = params.region;
        const street = params.street;
        const street2 = params.street2;
        const type = params.type;
        const zip = params.zip;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/addresses/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof city !== 'undefined') {
            apiPayload['city'] = city;
        }
        if (typeof company !== 'undefined') {
            apiPayload['company'] = company;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof region !== 'undefined') {
            apiPayload['region'] = region;
        }
        if (typeof street !== 'undefined') {
            apiPayload['street'] = street;
        }
        if (typeof street2 !== 'undefined') {
            apiPayload['street2'] = street2;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof zip !== 'undefined') {
            apiPayload['zip'] = zip;
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
     * @param {string} params.email - 
     * @param {string} params.password - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AuthLoginResponse>}
     */
    customersAuthLogin(params: { email: string, password: string }): Promise<Models.AuthLoginResponse>;
    /**
     *
     * @param {string} email - 
     * @param {string} password - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AuthLoginResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthLogin(email: string, password: string): Promise<Models.AuthLoginResponse>;
    customersAuthLogin(
        paramsOrFirst: { email: string, password: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.AuthLoginResponse> {
        let params: { email: string, password: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, password: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                password: rest[0] as string            
            };
        }
        
        const email = params.email;
        const password = params.password;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new RevenexxException('Missing required parameter: "password"');
        }

        const apiPath = '/v1/customers/auth/login';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
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
     * @param {string} params.sessionId - 
     * @param {string} params.userId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAuthLogout(params: { sessionId: string, userId: string }): Promise<{}>;
    /**
     *
     * @param {string} sessionId - 
     * @param {string} userId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthLogout(sessionId: string, userId: string): Promise<{}>;
    customersAuthLogout(
        paramsOrFirst: { sessionId: string, userId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { sessionId: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { sessionId: string, userId: string };
        } else {
            params = {
                sessionId: paramsOrFirst as string,
                userId: rest[0] as string            
            };
        }
        
        const sessionId = params.sessionId;
        const userId = params.userId;

        if (typeof sessionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sessionId"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/logout';
        const apiPayload: Payload = {};
        if (typeof sessionId !== 'undefined') {
            apiPayload['session_id'] = sessionId;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * @param {string} params.userId - 
     * @param {string} params.sessionId - Optional session to verify — answers 401 when the session is expired or revoked.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AuthMeResponse>}
     */
    customersAuthMe(params: { userId: string, sessionId?: string }): Promise<Models.AuthMeResponse>;
    /**
     *
     * @param {string} userId - 
     * @param {string} sessionId - Optional session to verify — answers 401 when the session is expired or revoked.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AuthMeResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthMe(userId: string, sessionId?: string): Promise<Models.AuthMeResponse>;
    customersAuthMe(
        paramsOrFirst: { userId: string, sessionId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.AuthMeResponse> {
        let params: { userId: string, sessionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { userId: string, sessionId?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                sessionId: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const sessionId = params.sessionId;

        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/me';
        const apiPayload: Payload = {};
        if (typeof sessionId !== 'undefined') {
            apiPayload['session_id'] = sessionId;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * @param {string} params.email - 
     * @param {string} params.url - Redirect URL carrying userId + secret.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAuthRecovery(params: { email: string, url: string }): Promise<{}>;
    /**
     *
     * @param {string} email - 
     * @param {string} url - Redirect URL carrying userId + secret.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthRecovery(email: string, url: string): Promise<{}>;
    customersAuthRecovery(
        paramsOrFirst: { email: string, url: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { email: string, url: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, url: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                url: rest[0] as string            
            };
        }
        
        const email = params.email;
        const url = params.url;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof url === 'undefined') {
            throw new RevenexxException('Missing required parameter: "url"');
        }

        const apiPath = '/v1/customers/auth/recovery';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
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
     * @param {string} params.password - 
     * @param {string} params.secret - 
     * @param {string} params.userId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAuthRecoveryConfirm(params: { password: string, secret: string, userId: string }): Promise<{}>;
    /**
     *
     * @param {string} password - 
     * @param {string} secret - 
     * @param {string} userId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthRecoveryConfirm(password: string, secret: string, userId: string): Promise<{}>;
    customersAuthRecoveryConfirm(
        paramsOrFirst: { password: string, secret: string, userId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { password: string, secret: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { password: string, secret: string, userId: string };
        } else {
            params = {
                password: paramsOrFirst as string,
                secret: rest[0] as string,
                userId: rest[1] as string            
            };
        }
        
        const password = params.password;
        const secret = params.secret;
        const userId = params.userId;

        if (typeof password === 'undefined') {
            throw new RevenexxException('Missing required parameter: "password"');
        }
        if (typeof secret === 'undefined') {
            throw new RevenexxException('Missing required parameter: "secret"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/recovery';
        const apiPayload: Payload = {};
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
        }
        if (typeof secret !== 'undefined') {
            apiPayload['secret'] = secret;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * @param {string} params.email - 
     * @param {string} params.password - 
     * @param {string} params.firstName - 
     * @param {string} params.lastName - 
     * @param {string} params.locale - BCP 47, e.g. de-DE
     * @param {string} params.organizationId - Join an existing organization.
     * @param {string} params.organizationName - Found a new organization; the contact becomes its admin.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AuthRegisterResponse>}
     */
    customersAuthRegister(params: { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string }): Promise<Models.AuthRegisterResponse>;
    /**
     *
     * @param {string} email - 
     * @param {string} password - 
     * @param {string} firstName - 
     * @param {string} lastName - 
     * @param {string} locale - BCP 47, e.g. de-DE
     * @param {string} organizationId - Join an existing organization.
     * @param {string} organizationName - Found a new organization; the contact becomes its admin.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AuthRegisterResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthRegister(email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string): Promise<Models.AuthRegisterResponse>;
    customersAuthRegister(
        paramsOrFirst: { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.AuthRegisterResponse> {
        let params: { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                password: rest[0] as string,
                firstName: rest[1] as string,
                lastName: rest[2] as string,
                locale: rest[3] as string,
                organizationId: rest[4] as string,
                organizationName: rest[5] as string            
            };
        }
        
        const email = params.email;
        const password = params.password;
        const firstName = params.firstName;
        const lastName = params.lastName;
        const locale = params.locale;
        const organizationId = params.organizationId;
        const organizationName = params.organizationName;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new RevenexxException('Missing required parameter: "password"');
        }

        const apiPath = '/v1/customers/auth/register';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof organizationName !== 'undefined') {
            apiPayload['organization_name'] = organizationName;
        }
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
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
     * @param {string} params.organizationId - Filter to one organization.
     * @param {string} params.role - Filter by role (buyer | approver | admin | requester).
     * @param {string} params.status - Filter by status (invited | active | blocked).
     * @param {string} params.email - Filter by exact email.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactsList(params?: { organizationId?: string, role?: string, status?: string, email?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {string} organizationId - Filter to one organization.
     * @param {string} role - Filter by role (buyer | approver | admin | requester).
     * @param {string} status - Filter by status (invited | active | blocked).
     * @param {string} email - Filter by exact email.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsList(organizationId?: string, role?: string, status?: string, email?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersContactsList(
        paramsOrFirst?: { organizationId?: string, role?: string, status?: string, email?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { organizationId?: string, role?: string, status?: string, email?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId?: string, role?: string, status?: string, email?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                role: rest[0] as string,
                status: rest[1] as string,
                email: rest[2] as string,
                limit: rest[3] as number,
                offset: rest[4] as number,
                order: rest[5] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const role = params.role;
        const status = params.status;
        const email = params.email;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/contacts';
        const apiPayload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof role !== 'undefined') {
            apiPayload['role'] = role;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
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
     * @param {string} params.email - 
     * @param {string} params.firstName - 
     * @param {boolean} params.isPrimary - The primary contact of its organization.
     * @param {string} params.lastName - 
     * @param {string} params.locale - BCP 47, e.g. de-DE
     * @param {string} params.organizationId - Owning organization — membership is mirrored to the platform team.
     * @param {string} params.phone - 
     * @param {ContactRole} params.role - Default 'buyer' — also the team role on the platform mirror.
     * @param {ContactStatus} params.status - Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsCreate(params: { email: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus }): Promise<Models.Contact>;
    /**
     *
     * @param {string} email - 
     * @param {string} firstName - 
     * @param {boolean} isPrimary - The primary contact of its organization.
     * @param {string} lastName - 
     * @param {string} locale - BCP 47, e.g. de-DE
     * @param {string} organizationId - Owning organization — membership is mirrored to the platform team.
     * @param {string} phone - 
     * @param {ContactRole} role - Default 'buyer' — also the team role on the platform mirror.
     * @param {ContactStatus} status - Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsCreate(email: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus): Promise<Models.Contact>;
    customersContactsCreate(
        paramsOrFirst: { email: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (ContactRole)?, (ContactStatus)?]    
    ): Promise<Models.Contact> {
        let params: { email: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus };
        } else {
            params = {
                email: paramsOrFirst as string,
                firstName: rest[0] as string,
                isPrimary: rest[1] as boolean,
                lastName: rest[2] as string,
                locale: rest[3] as string,
                organizationId: rest[4] as string,
                phone: rest[5] as string,
                role: rest[6] as ContactRole,
                status: rest[7] as ContactStatus            
            };
        }
        
        const email = params.email;
        const firstName = params.firstName;
        const isPrimary = params.isPrimary;
        const lastName = params.lastName;
        const locale = params.locale;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const role = params.role;
        const status = params.status;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }

        const apiPath = '/v1/customers/contacts';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof role !== 'undefined') {
            apiPayload['role'] = role;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
    customersContactsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsDelete(id: string): Promise<{}>;
    customersContactsDelete(
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

        const apiPath = '/v1/customers/contacts/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Contact>}
     */
    customersContactsGet(params: { id: string }): Promise<Models.Contact>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsGet(id: string): Promise<Models.Contact>;
    customersContactsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Contact> {
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

        const apiPath = '/v1/customers/contacts/{id}'.replace('{id}', id);
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
     * @param {string} params.email - 
     * @param {string} params.firstName - 
     * @param {boolean} params.isPrimary - The primary contact of its organization.
     * @param {string} params.lastName - 
     * @param {string} params.locale - BCP 47, e.g. de-DE
     * @param {string} params.organizationId - Owning organization — membership is mirrored to the platform team.
     * @param {string} params.phone - 
     * @param {ContactRole} params.role - Default 'buyer' — also the team role on the platform mirror.
     * @param {ContactStatus} params.status - Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsUpdate(params: { id: string, email?: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus }): Promise<Models.Contact>;
    /**
     *
     * @param {string} id - 
     * @param {string} email - 
     * @param {string} firstName - 
     * @param {boolean} isPrimary - The primary contact of its organization.
     * @param {string} lastName - 
     * @param {string} locale - BCP 47, e.g. de-DE
     * @param {string} organizationId - Owning organization — membership is mirrored to the platform team.
     * @param {string} phone - 
     * @param {ContactRole} role - Default 'buyer' — also the team role on the platform mirror.
     * @param {ContactStatus} status - Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsUpdate(id: string, email?: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus): Promise<Models.Contact>;
    customersContactsUpdate(
        paramsOrFirst: { id: string, email?: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (ContactRole)?, (ContactStatus)?]    
    ): Promise<Models.Contact> {
        let params: { id: string, email?: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, email?: string, firstName?: string, isPrimary?: boolean, lastName?: string, locale?: string, organizationId?: string, phone?: string, role?: ContactRole, status?: ContactStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                email: rest[0] as string,
                firstName: rest[1] as string,
                isPrimary: rest[2] as boolean,
                lastName: rest[3] as string,
                locale: rest[4] as string,
                organizationId: rest[5] as string,
                phone: rest[6] as string,
                role: rest[7] as ContactRole,
                status: rest[8] as ContactStatus            
            };
        }
        
        const id = params.id;
        const email = params.email;
        const firstName = params.firstName;
        const isPrimary = params.isPrimary;
        const lastName = params.lastName;
        const locale = params.locale;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const role = params.role;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/contacts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof role !== 'undefined') {
            apiPayload['role'] = role;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
    customersOrganizationsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    customersOrganizationsList(
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


        const apiPath = '/v1/customers/organizations';
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
     * @param {string} params.name - Company name — mirrored to the platform team.
     * @param {object} params.settings - Free-form organization settings.
     * @param {OrganizationStatus} params.status - Default 'active'.
     * @param {string} params.vatId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsCreate(params: { name: string, settings?: object, status?: OrganizationStatus, vatId?: string }): Promise<Models.Organization>;
    /**
     *
     * @param {string} name - Company name — mirrored to the platform team.
     * @param {object} settings - Free-form organization settings.
     * @param {OrganizationStatus} status - Default 'active'.
     * @param {string} vatId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsCreate(name: string, settings?: object, status?: OrganizationStatus, vatId?: string): Promise<Models.Organization>;
    customersOrganizationsCreate(
        paramsOrFirst: { name: string, settings?: object, status?: OrganizationStatus, vatId?: string } | string,
        ...rest: [(object)?, (OrganizationStatus)?, (string)?]    
    ): Promise<Models.Organization> {
        let params: { name: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                settings: rest[0] as object,
                status: rest[1] as OrganizationStatus,
                vatId: rest[2] as string            
            };
        }
        
        const name = params.name;
        const settings = params.settings;
        const status = params.status;
        const vatId = params.vatId;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/customers/organizations';
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof settings !== 'undefined') {
            apiPayload['settings'] = settings;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof vatId !== 'undefined') {
            apiPayload['vat_id'] = vatId;
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
    customersOrganizationsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsDelete(id: string): Promise<{}>;
    customersOrganizationsDelete(
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

        const apiPath = '/v1/customers/organizations/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsGet(params: { id: string }): Promise<Models.Organization>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsGet(id: string): Promise<Models.Organization>;
    customersOrganizationsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Organization> {
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

        const apiPath = '/v1/customers/organizations/{id}'.replace('{id}', id);
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
     * @param {string} params.name - Company name — mirrored to the platform team.
     * @param {object} params.settings - Free-form organization settings.
     * @param {OrganizationStatus} params.status - Default 'active'.
     * @param {string} params.vatId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsUpdate(params: { id: string, name?: string, settings?: object, status?: OrganizationStatus, vatId?: string }): Promise<Models.Organization>;
    /**
     *
     * @param {string} id - 
     * @param {string} name - Company name — mirrored to the platform team.
     * @param {object} settings - Free-form organization settings.
     * @param {OrganizationStatus} status - Default 'active'.
     * @param {string} vatId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsUpdate(id: string, name?: string, settings?: object, status?: OrganizationStatus, vatId?: string): Promise<Models.Organization>;
    customersOrganizationsUpdate(
        paramsOrFirst: { id: string, name?: string, settings?: object, status?: OrganizationStatus, vatId?: string } | string,
        ...rest: [(string)?, (object)?, (OrganizationStatus)?, (string)?]    
    ): Promise<Models.Organization> {
        let params: { id: string, name?: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, name?: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                settings: rest[1] as object,
                status: rest[2] as OrganizationStatus,
                vatId: rest[3] as string            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const settings = params.settings;
        const status = params.status;
        const vatId = params.vatId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/organizations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof settings !== 'undefined') {
            apiPayload['settings'] = settings;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof vatId !== 'undefined') {
            apiPayload['vat_id'] = vatId;
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
