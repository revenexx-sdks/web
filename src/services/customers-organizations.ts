import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CustomersOrganizationsListStatus } from '../enums/customers-organizations-list-status';
import { OrganizationStatus } from '../enums/organization-status';

export class CustomersOrganizations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Every address this tenant holds, filterable by owner (`organization_id`, `contact_id`), by `type` and by any other column. It is how the addresses tab of a company or a person is filled; the page is `limit`/`offset`/`order`.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the address.
     * @param {string} params.organizationId - Filter to one owning company.
     * @param {string} params.contactId - Filter to one owning contact — a personal address book.
     * @param {string} params.type - Filter by address type (GET /customers/address-types) — 'billing' or 'shipping' unless the merchant added their own.
     * @param {string} params.company - Filter to rows whose `company` is exactly this value. Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} params.name - Filter to rows whose `name` is exactly this value. Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} params.street - Filter to rows whose `street` is exactly this value. Street and house number, on one line, as the local post expects it.
     * @param {string} params.street2 - Filter to rows whose `street2` is exactly this value. The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} params.zip - Filter to rows whose `zip` is exactly this value. Postal code, as text — leading zeros are real in most countries.
     * @param {string} params.city - Filter to rows whose `city` is exactly this value. City or town.
     * @param {string} params.region - Filter to rows whose `region` is exactly this value. State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} params.country - Filter by ISO 3166-1 alpha-2 country code.
     * @param {string} params.phone - Filter to rows whose `phone` is exactly this value. Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {boolean} params.isDefault - Filter to the default addresses. With `type` and an owner, this is the one address a checkout should preselect.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the address was created.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressesList(params?: { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Every address this tenant holds, filterable by owner (`organization_id`, `contact_id`), by `type` and by any other column. It is how the addresses tab of a company or a person is filled; the page is `limit`/`offset`/`order`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the address.
     * @param {string} organizationId - Filter to one owning company.
     * @param {string} contactId - Filter to one owning contact — a personal address book.
     * @param {string} type - Filter by address type (GET /customers/address-types) — 'billing' or 'shipping' unless the merchant added their own.
     * @param {string} company - Filter to rows whose `company` is exactly this value. Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} name - Filter to rows whose `name` is exactly this value. Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} street - Filter to rows whose `street` is exactly this value. Street and house number, on one line, as the local post expects it.
     * @param {string} street2 - Filter to rows whose `street2` is exactly this value. The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} zip - Filter to rows whose `zip` is exactly this value. Postal code, as text — leading zeros are real in most countries.
     * @param {string} city - Filter to rows whose `city` is exactly this value. City or town.
     * @param {string} region - Filter to rows whose `region` is exactly this value. State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} country - Filter by ISO 3166-1 alpha-2 country code.
     * @param {string} phone - Filter to rows whose `phone` is exactly this value. Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {boolean} isDefault - Filter to the default addresses. With `type` and an owner, this is the one address a checkout should preselect.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the address was created.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesList(id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersAddressesList(
        paramsOrFirst?: { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                organizationId: rest[0] as string,
                contactId: rest[1] as string,
                type: rest[2] as string,
                company: rest[3] as string,
                name: rest[4] as string,
                street: rest[5] as string,
                street2: rest[6] as string,
                zip: rest[7] as string,
                city: rest[8] as string,
                region: rest[9] as string,
                country: rest[10] as string,
                phone: rest[11] as string,
                isDefault: rest[12] as boolean,
                externalId: rest[13] as string,
                createdAt: rest[14] as string,
                updatedAt: rest[15] as string,
                limit: rest[16] as number,
                offset: rest[17] as number,
                order: rest[18] as string            
            };
        }
        
        const id = params.id;
        const organizationId = params.organizationId;
        const contactId = params.contactId;
        const type = params.type;
        const company = params.company;
        const name = params.name;
        const street = params.street;
        const street2 = params.street2;
        const zip = params.zip;
        const city = params.city;
        const region = params.region;
        const country = params.country;
        const phone = params.phone;
        const isDefault = params.isDefault;
        const externalId = params.externalId;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/addresses';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof company !== 'undefined') {
            apiPayload['company'] = company;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof street !== 'undefined') {
            apiPayload['street'] = street;
        }
        if (typeof street2 !== 'undefined') {
            apiPayload['street2'] = street2;
        }
        if (typeof zip !== 'undefined') {
            apiPayload['zip'] = zip;
        }
        if (typeof city !== 'undefined') {
            apiPayload['city'] = city;
        }
        if (typeof region !== 'undefined') {
            apiPayload['region'] = region;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. `type` names one of this tenant's own address types — billing and shipping are seeded, and a merchant may add a works entrance or a central accounts office without a release of this app. `is_default` picks the one a checkout should preselect for that owner and that type. A create cannot omit `street`, `zip`, `city` and `country`; everything else is optional or defaulted by the database.
     *
     * @param {string} params.city - City or town.
     * @param {string} params.country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} params.street - Street and house number, on one line, as the local post expects it.
     * @param {string} params.zip - Postal code, as text — leading zeros are real in most countries.
     * @param {string} params.company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} params.contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} params.externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} params.isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} params.name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} params.organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} params.phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} params.region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} params.street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} params.type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesCreate(params: { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: string }): Promise<Models.Address>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. `type` names one of this tenant's own address types — billing and shipping are seeded, and a merchant may add a works entrance or a central accounts office without a release of this app. `is_default` picks the one a checkout should preselect for that owner and that type. A create cannot omit `street`, `zip`, `city` and `country`; everything else is optional or defaulted by the database.
     *
     * @param {string} city - City or town.
     * @param {string} country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} street - Street and house number, on one line, as the local post expects it.
     * @param {string} zip - Postal code, as text — leading zeros are real in most countries.
     * @param {string} company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesCreate(city: string, country: string, street: string, zip: string, company?: string, contactId?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: string): Promise<Models.Address>;
    customersAddressesCreate(
        paramsOrFirst: { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Address> {
        let params: { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { city: string, country: string, street: string, zip: string, company?: string, contactId?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street2?: string, type?: string };
        } else {
            params = {
                city: paramsOrFirst as string,
                country: rest[0] as string,
                street: rest[1] as string,
                zip: rest[2] as string,
                company: rest[3] as string,
                contactId: rest[4] as string,
                externalId: rest[5] as string,
                isDefault: rest[6] as boolean,
                name: rest[7] as string,
                organizationId: rest[8] as string,
                phone: rest[9] as string,
                region: rest[10] as string,
                street2: rest[11] as string,
                type: rest[12] as string            
            };
        }
        
        const city = params.city;
        const country = params.country;
        const street = params.street;
        const zip = params.zip;
        const company = params.company;
        const contactId = params.contactId;
        const externalId = params.externalId;
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
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Removes the address. Orders already placed keep the address they were placed with; nothing in this app reaches back. Nothing else in this app points at it, so nothing else goes with it.
     *
     * @param {string} params.id - The address to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressesDelete(params: { id: string }): Promise<{}>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Removes the address. Orders already placed keep the address they were placed with; nothing in this app reaches back. Nothing else in this app points at it, so nothing else goes with it.
     *
     * @param {string} id - The address to delete.
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. One address by id, whichever of the two owners it hangs off.
     *
     * @param {string} params.id - The address to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesGet(params: { id: string }): Promise<Models.Address>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. One address by id, whichever of the two owners it hangs off.
     *
     * @param {string} id - The address to read.
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. A partial update — send only what changes. An empty body is refused rather than answered as a no-op, so a client that built the wrong patch finds out.
     *
     * @param {string} params.id - The address to update.
     * @param {string} params.city - City or town.
     * @param {string} params.company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} params.contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} params.country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} params.externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} params.isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} params.name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} params.organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} params.phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} params.region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} params.street - Street and house number, on one line, as the local post expects it.
     * @param {string} params.street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} params.type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @param {string} params.zip - Postal code, as text — leading zeros are real in most countries.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesUpdate(params: { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string }): Promise<Models.Address>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. A partial update — send only what changes. An empty body is refused rather than answered as a no-op, so a client that built the wrong patch finds out.
     *
     * @param {string} id - The address to update.
     * @param {string} city - City or town.
     * @param {string} company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} street - Street and house number, on one line, as the local post expects it.
     * @param {string} street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @param {string} zip - Postal code, as text — leading zeros are real in most countries.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesUpdate(id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string): Promise<Models.Address>;
    customersAddressesUpdate(
        paramsOrFirst: { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Address> {
        let params: { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                city: rest[0] as string,
                company: rest[1] as string,
                contactId: rest[2] as string,
                country: rest[3] as string,
                externalId: rest[4] as string,
                isDefault: rest[5] as boolean,
                name: rest[6] as string,
                organizationId: rest[7] as string,
                phone: rest[8] as string,
                region: rest[9] as string,
                street: rest[10] as string,
                street2: rest[11] as string,
                type: rest[12] as string,
                zip: rest[13] as string            
            };
        }
        
        const id = params.id;
        const city = params.city;
        const company = params.company;
        const contactId = params.contactId;
        const country = params.country;
        const externalId = params.externalId;
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
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
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
     * What an organization has BOUGHT, materialized into this app from the orders app: lifetime revenue, revenue over the last 30/90/365 days, order count, average order value, and the first and last order dates. Revenue lives in orders and may not be joined (ADR-0055: no cross-app foreign key, grant or view), so it is pulled on a schedule and stored here — one row per organization, all-zero for a company that never ordered, so that a "never bought anything" rule has something to match. The customer-value list: sort by `revenue_365d` for the best customers, filter `last_order_at` for the dormant ones. Every row carries `computed_at`, and a row is only as current as the last refresh — `GET /customers/organization_metrics/freshness` says how stale the set is before a number is shown to anybody.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the projection row.
     * @param {string} params.organizationId - Read the metrics of one company.
     * @param {number} params.orderCount - Filter to rows whose `order_count` is exactly this value. Orders ever counted for this company.
     * @param {number} params.orderCount30d - Filter to rows whose `order_count_30d` is exactly this value. Orders in the 30 days before `orders_as_of`. A rolling window, not a calendar month.
     * @param {number} params.orderCount90d - Filter to rows whose `order_count_90d` is exactly this value. Orders in the 90 days before `orders_as_of`.
     * @param {number} params.orderCount365d - Filter to rows whose `order_count_365d` is exactly this value. Orders in the 365 days before `orders_as_of`.
     * @param {number} params.revenueTotal - Filter to rows whose `revenue_total` is exactly this value. Revenue ever counted, in `currency`. Which orders count is the orders app's decision, not this app's.
     * @param {number} params.revenue30d - Filter to rows whose `revenue_30d` is exactly this value. Revenue in the 30 days before `orders_as_of`.
     * @param {number} params.revenue90d - Filter to rows whose `revenue_90d` is exactly this value. Revenue in the 90 days before `orders_as_of`.
     * @param {number} params.revenue365d - Filter to rows whose `revenue_365d` is exactly this value. Revenue in the 365 days before `orders_as_of`. The usual "how big is this customer" number, and the one a key-account rule should read.
     * @param {number} params.avgOrderValue - Filter to rows whose `avg_order_value` is exactly this value. revenue_total / order_count, computed here from the sums rather than averaged upstream. Zero when there are no orders.
     * @param {number} params.avgOrderValue365d - Filter to rows whose `avg_order_value_365d` is exactly this value. revenue_365d / order_count_365d. Zero when there were none in the window.
     * @param {string} params.firstOrderAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company first ordered. Null if it never has — that is what makes it usable as "is this a customer at all?".
     * @param {string} params.lastOrderAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company last ordered. Null if it never has, which is why the virtual `days_since_last_order` rule field never matches those companies: use `last_order_at is_empty` for them.
     * @param {string} params.currency - Filter to rows whose `currency` is exactly this value. The single ISO 4217 currency all counted orders were in. NULL when there were none, and also when there were several — read `currency_mixed` to tell those two apart.
     * @param {boolean} params.currencyMixed - Filter to rows whose `currency_mixed` is exactly this value. True when this company ordered in more than one currency. The sums are still stored (dropping money is worse), but they are not comparable against a threshold, and a rule reading revenue should say so.
     * @param {string} params.ordersAsOf - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. The instant the rolling windows were measured from. Pinned across a chunked refresh, so a multi-call pass cannot let the windows slide underneath it.
     * @param {string} params.computedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last written. The projection is materialized, so this is how stale the numbers are.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the projection row first appeared.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the row last changed. Unchanged numbers are not rewritten, so this can lag `computed_at`.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersOrganizationMetricsList(params?: { id?: string, organizationId?: string, orderCount?: number, orderCount30d?: number, orderCount90d?: number, orderCount365d?: number, revenueTotal?: number, revenue30d?: number, revenue90d?: number, revenue365d?: number, avgOrderValue?: number, avgOrderValue365d?: number, firstOrderAt?: string, lastOrderAt?: string, currency?: string, currencyMixed?: boolean, ordersAsOf?: string, computedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * What an organization has BOUGHT, materialized into this app from the orders app: lifetime revenue, revenue over the last 30/90/365 days, order count, average order value, and the first and last order dates. Revenue lives in orders and may not be joined (ADR-0055: no cross-app foreign key, grant or view), so it is pulled on a schedule and stored here — one row per organization, all-zero for a company that never ordered, so that a "never bought anything" rule has something to match. The customer-value list: sort by `revenue_365d` for the best customers, filter `last_order_at` for the dormant ones. Every row carries `computed_at`, and a row is only as current as the last refresh — `GET /customers/organization_metrics/freshness` says how stale the set is before a number is shown to anybody.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the projection row.
     * @param {string} organizationId - Read the metrics of one company.
     * @param {number} orderCount - Filter to rows whose `order_count` is exactly this value. Orders ever counted for this company.
     * @param {number} orderCount30d - Filter to rows whose `order_count_30d` is exactly this value. Orders in the 30 days before `orders_as_of`. A rolling window, not a calendar month.
     * @param {number} orderCount90d - Filter to rows whose `order_count_90d` is exactly this value. Orders in the 90 days before `orders_as_of`.
     * @param {number} orderCount365d - Filter to rows whose `order_count_365d` is exactly this value. Orders in the 365 days before `orders_as_of`.
     * @param {number} revenueTotal - Filter to rows whose `revenue_total` is exactly this value. Revenue ever counted, in `currency`. Which orders count is the orders app's decision, not this app's.
     * @param {number} revenue30d - Filter to rows whose `revenue_30d` is exactly this value. Revenue in the 30 days before `orders_as_of`.
     * @param {number} revenue90d - Filter to rows whose `revenue_90d` is exactly this value. Revenue in the 90 days before `orders_as_of`.
     * @param {number} revenue365d - Filter to rows whose `revenue_365d` is exactly this value. Revenue in the 365 days before `orders_as_of`. The usual "how big is this customer" number, and the one a key-account rule should read.
     * @param {number} avgOrderValue - Filter to rows whose `avg_order_value` is exactly this value. revenue_total / order_count, computed here from the sums rather than averaged upstream. Zero when there are no orders.
     * @param {number} avgOrderValue365d - Filter to rows whose `avg_order_value_365d` is exactly this value. revenue_365d / order_count_365d. Zero when there were none in the window.
     * @param {string} firstOrderAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company first ordered. Null if it never has — that is what makes it usable as "is this a customer at all?".
     * @param {string} lastOrderAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company last ordered. Null if it never has, which is why the virtual `days_since_last_order` rule field never matches those companies: use `last_order_at is_empty` for them.
     * @param {string} currency - Filter to rows whose `currency` is exactly this value. The single ISO 4217 currency all counted orders were in. NULL when there were none, and also when there were several — read `currency_mixed` to tell those two apart.
     * @param {boolean} currencyMixed - Filter to rows whose `currency_mixed` is exactly this value. True when this company ordered in more than one currency. The sums are still stored (dropping money is worse), but they are not comparable against a threshold, and a rule reading revenue should say so.
     * @param {string} ordersAsOf - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. The instant the rolling windows were measured from. Pinned across a chunked refresh, so a multi-call pass cannot let the windows slide underneath it.
     * @param {string} computedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last written. The projection is materialized, so this is how stale the numbers are.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the projection row first appeared.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the row last changed. Unchanged numbers are not rewritten, so this can lag `computed_at`.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationMetricsList(id?: string, organizationId?: string, orderCount?: number, orderCount30d?: number, orderCount90d?: number, orderCount365d?: number, revenueTotal?: number, revenue30d?: number, revenue90d?: number, revenue365d?: number, avgOrderValue?: number, avgOrderValue365d?: number, firstOrderAt?: string, lastOrderAt?: string, currency?: string, currencyMixed?: boolean, ordersAsOf?: string, computedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersOrganizationMetricsList(
        paramsOrFirst?: { id?: string, organizationId?: string, orderCount?: number, orderCount30d?: number, orderCount90d?: number, orderCount365d?: number, revenueTotal?: number, revenue30d?: number, revenue90d?: number, revenue365d?: number, avgOrderValue?: number, avgOrderValue365d?: number, firstOrderAt?: string, lastOrderAt?: string, currency?: string, currencyMixed?: boolean, ordersAsOf?: string, computedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, organizationId?: string, orderCount?: number, orderCount30d?: number, orderCount90d?: number, orderCount365d?: number, revenueTotal?: number, revenue30d?: number, revenue90d?: number, revenue365d?: number, avgOrderValue?: number, avgOrderValue365d?: number, firstOrderAt?: string, lastOrderAt?: string, currency?: string, currencyMixed?: boolean, ordersAsOf?: string, computedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, organizationId?: string, orderCount?: number, orderCount30d?: number, orderCount90d?: number, orderCount365d?: number, revenueTotal?: number, revenue30d?: number, revenue90d?: number, revenue365d?: number, avgOrderValue?: number, avgOrderValue365d?: number, firstOrderAt?: string, lastOrderAt?: string, currency?: string, currencyMixed?: boolean, ordersAsOf?: string, computedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                organizationId: rest[0] as string,
                orderCount: rest[1] as number,
                orderCount30d: rest[2] as number,
                orderCount90d: rest[3] as number,
                orderCount365d: rest[4] as number,
                revenueTotal: rest[5] as number,
                revenue30d: rest[6] as number,
                revenue90d: rest[7] as number,
                revenue365d: rest[8] as number,
                avgOrderValue: rest[9] as number,
                avgOrderValue365d: rest[10] as number,
                firstOrderAt: rest[11] as string,
                lastOrderAt: rest[12] as string,
                currency: rest[13] as string,
                currencyMixed: rest[14] as boolean,
                ordersAsOf: rest[15] as string,
                computedAt: rest[16] as string,
                createdAt: rest[17] as string,
                updatedAt: rest[18] as string,
                limit: rest[19] as number,
                offset: rest[20] as number,
                order: rest[21] as string            
            };
        }
        
        const id = params.id;
        const organizationId = params.organizationId;
        const orderCount = params.orderCount;
        const orderCount30d = params.orderCount30d;
        const orderCount90d = params.orderCount90d;
        const orderCount365d = params.orderCount365d;
        const revenueTotal = params.revenueTotal;
        const revenue30d = params.revenue30d;
        const revenue90d = params.revenue90d;
        const revenue365d = params.revenue365d;
        const avgOrderValue = params.avgOrderValue;
        const avgOrderValue365d = params.avgOrderValue365d;
        const firstOrderAt = params.firstOrderAt;
        const lastOrderAt = params.lastOrderAt;
        const currency = params.currency;
        const currencyMixed = params.currencyMixed;
        const ordersAsOf = params.ordersAsOf;
        const computedAt = params.computedAt;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/organization_metrics';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof orderCount !== 'undefined') {
            apiPayload['order_count'] = orderCount;
        }
        if (typeof orderCount30d !== 'undefined') {
            apiPayload['order_count_30d'] = orderCount30d;
        }
        if (typeof orderCount90d !== 'undefined') {
            apiPayload['order_count_90d'] = orderCount90d;
        }
        if (typeof orderCount365d !== 'undefined') {
            apiPayload['order_count_365d'] = orderCount365d;
        }
        if (typeof revenueTotal !== 'undefined') {
            apiPayload['revenue_total'] = revenueTotal;
        }
        if (typeof revenue30d !== 'undefined') {
            apiPayload['revenue_30d'] = revenue30d;
        }
        if (typeof revenue90d !== 'undefined') {
            apiPayload['revenue_90d'] = revenue90d;
        }
        if (typeof revenue365d !== 'undefined') {
            apiPayload['revenue_365d'] = revenue365d;
        }
        if (typeof avgOrderValue !== 'undefined') {
            apiPayload['avg_order_value'] = avgOrderValue;
        }
        if (typeof avgOrderValue365d !== 'undefined') {
            apiPayload['avg_order_value_365d'] = avgOrderValue365d;
        }
        if (typeof firstOrderAt !== 'undefined') {
            apiPayload['first_order_at'] = firstOrderAt;
        }
        if (typeof lastOrderAt !== 'undefined') {
            apiPayload['last_order_at'] = lastOrderAt;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof currencyMixed !== 'undefined') {
            apiPayload['currency_mixed'] = currencyMixed;
        }
        if (typeof ordersAsOf !== 'undefined') {
            apiPayload['orders_as_of'] = ordersAsOf;
        }
        if (typeof computedAt !== 'undefined') {
            apiPayload['computed_at'] = computedAt;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * The projection is materialized, so it is only as true as its last refresh. This is that fact as one answer: the OLDEST computed_at in the table (the floor, not an average), the anchor those numbers were measured from, and how many organizations are not covered at all yet.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrganizationMetricsFreshness>}
     */
    customersOrganizationMetricsFreshness(): Promise<Models.OrganizationMetricsFreshness> {

        const apiPath = '/v1/customers/organization_metrics/freshness';
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
     * Revenue lives in the orders app and cannot be joined (ADR-0055: no cross-app FK, grant or view), so it is PULLED: this route walks organizations in id order, asks orders.reports.customer-rollup about a batch of them at a time and materializes the answer into organization_metrics — one row per organization, all-zero for those that never ordered, so that 'never bought' rules match something. Rows are only rewritten when a value actually changed, so a routine refresh costs almost no writes. Bounded by a wall-clock budget below the gateway's upstream timeout: while 'done' is false, POST again with the returned 'cursor' AND 'as_of' (pinning as_of is what stops the rolling windows sliding during a multi-call refresh). 'organization_ids' refreshes exactly those organizations in a single call — the targeted path after a customer ordered.
     *
     * @param {string} params.asOf - Anchor for the rolling windows — pass back the value the previous call returned.
     * @param {string} params.cursor - Continue an unfinished refresh: the value the previous call returned, verbatim. It is the id of the last organization processed, so only a value this API handed out ever resolves.
     * @param {string[]} params.organizationIds - Refresh exactly these organizations in one call instead of walking all of them.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrganizationMetricsRefreshResponse>}
     */
    customersOrganizationMetricsRefresh(params?: { asOf?: string, cursor?: string, organizationIds?: string[] }): Promise<Models.OrganizationMetricsRefreshResponse>;
    /**
     * Revenue lives in the orders app and cannot be joined (ADR-0055: no cross-app FK, grant or view), so it is PULLED: this route walks organizations in id order, asks orders.reports.customer-rollup about a batch of them at a time and materializes the answer into organization_metrics — one row per organization, all-zero for those that never ordered, so that 'never bought' rules match something. Rows are only rewritten when a value actually changed, so a routine refresh costs almost no writes. Bounded by a wall-clock budget below the gateway's upstream timeout: while 'done' is false, POST again with the returned 'cursor' AND 'as_of' (pinning as_of is what stops the rolling windows sliding during a multi-call refresh). 'organization_ids' refreshes exactly those organizations in a single call — the targeted path after a customer ordered.
     *
     * @param {string} asOf - Anchor for the rolling windows — pass back the value the previous call returned.
     * @param {string} cursor - Continue an unfinished refresh: the value the previous call returned, verbatim. It is the id of the last organization processed, so only a value this API handed out ever resolves.
     * @param {string[]} organizationIds - Refresh exactly these organizations in one call instead of walking all of them.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrganizationMetricsRefreshResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationMetricsRefresh(asOf?: string, cursor?: string, organizationIds?: string[]): Promise<Models.OrganizationMetricsRefreshResponse>;
    customersOrganizationMetricsRefresh(
        paramsOrFirst?: { asOf?: string, cursor?: string, organizationIds?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.OrganizationMetricsRefreshResponse> {
        let params: { asOf?: string, cursor?: string, organizationIds?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { asOf?: string, cursor?: string, organizationIds?: string[] };
        } else {
            params = {
                asOf: paramsOrFirst as string,
                cursor: rest[0] as string,
                organizationIds: rest[1] as string[]            
            };
        }
        
        const asOf = params.asOf;
        const cursor = params.cursor;
        const organizationIds = params.organizationIds;


        const apiPath = '/v1/customers/organization_metrics/refresh';
        const apiPayload: Payload = {};
        if (typeof asOf !== 'undefined') {
            apiPayload['as_of'] = asOf;
        }
        if (typeof cursor !== 'undefined') {
            apiPayload['cursor'] = cursor;
        }
        if (typeof organizationIds !== 'undefined') {
            apiPayload['organization_ids'] = organizationIds;
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
     * What an organization has BOUGHT, materialized into this app from the orders app: lifetime revenue, revenue over the last 30/90/365 days, order count, average order value, and the first and last order dates. Revenue lives in orders and may not be joined (ADR-0055: no cross-app foreign key, grant or view), so it is pulled on a schedule and stored here — one row per organization, all-zero for a company that never ordered, so that a "never bought anything" rule has something to match. One company's numbers by the metrics row id. All zeroes mean the company has never ordered, not that the projection is missing — a missing row means the refresh has not reached that company yet.
     *
     * @param {string} params.id - The organization metrics row to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrganizationMetrics>}
     */
    customersOrganizationMetricsGet(params: { id: string }): Promise<Models.OrganizationMetrics>;
    /**
     * What an organization has BOUGHT, materialized into this app from the orders app: lifetime revenue, revenue over the last 30/90/365 days, order count, average order value, and the first and last order dates. Revenue lives in orders and may not be joined (ADR-0055: no cross-app foreign key, grant or view), so it is pulled on a schedule and stored here — one row per organization, all-zero for a company that never ordered, so that a "never bought anything" rule has something to match. One company's numbers by the metrics row id. All zeroes mean the company has never ordered, not that the projection is missing — a missing row means the refresh has not reached that company yet.
     *
     * @param {string} id - The organization metrics row to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrganizationMetrics>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationMetricsGet(id: string): Promise<Models.OrganizationMetrics>;
    customersOrganizationMetricsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrganizationMetrics> {
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

        const apiPath = '/v1/customers/organization_metrics/{id}'.replace('{id}', id);
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. The company list a sales or service desk works from, and the read a segment rule is written against. Every column of the table is a filter and the page is `limit`/`offset`/`order` — including the two that are constantly confused: `status` is ACCESS (active or blocked) and `lifecycle_stage` is the sales PIPELINE, so filtering the wrong one answers with the wrong companies rather than with an error.
     *
     * @param {string} params.id - Filter to exactly one company. `GET /customers/organizations/{id}` is the direct form; this exists because the list honours it too.
     * @param {string} params.name - Filter by the EXACT company name — this is an equality, not a search. There is no substring or fuzzy match on this API.
     * @param {string} params.vatId - Look a company up by its VAT id — the check an integration runs before founding a duplicate.
     * @param {string} params.branche - Filter by exact industry. Free text a merchant typed, matched exactly and case-sensitively — 'Maschinenbau' does not find 'maschinenbau', and there is no substring search to fall back on.
     * @param {string} params.customerNumber - Look a company up by its ERP number — the lookup an ERP integration and a service desk both start from. Exact match; the real numbers come from the merchant, so the example here resolves nowhere.
     * @param {CustomersOrganizationsListStatus} params.status - Filter by status — access, not pipeline.
     * @param {string} params.lifecycleStage - Filter by pipeline stage. One of the tenant's own stages (GET /customers/lifecycle-stages); a fresh install starts with lead, prospect, customer, churned.
     * @param {string} params.paymentTerms - Filter to rows whose `payment_terms` is exactly this value. When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business.
     * @param {number} params.creditLimit - Filter to rows whose `credit_limit` is exactly this value. Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero.
     * @param {string} params.priceList - Filter to rows whose `price_list` is exactly this value. Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {boolean} params.deliveryBlock - Filter to companies whose shipments are stopped.
     * @param {string} params.externalTeamId - Find the organization behind a platform team id. The reverse of the mirror, and the way an auth-side id becomes a customer record.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersOrganizationsList(params?: { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimit?: number, priceList?: string, deliveryBlock?: boolean, externalTeamId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. The company list a sales or service desk works from, and the read a segment rule is written against. Every column of the table is a filter and the page is `limit`/`offset`/`order` — including the two that are constantly confused: `status` is ACCESS (active or blocked) and `lifecycle_stage` is the sales PIPELINE, so filtering the wrong one answers with the wrong companies rather than with an error.
     *
     * @param {string} id - Filter to exactly one company. `GET /customers/organizations/{id}` is the direct form; this exists because the list honours it too.
     * @param {string} name - Filter by the EXACT company name — this is an equality, not a search. There is no substring or fuzzy match on this API.
     * @param {string} vatId - Look a company up by its VAT id — the check an integration runs before founding a duplicate.
     * @param {string} branche - Filter by exact industry. Free text a merchant typed, matched exactly and case-sensitively — 'Maschinenbau' does not find 'maschinenbau', and there is no substring search to fall back on.
     * @param {string} customerNumber - Look a company up by its ERP number — the lookup an ERP integration and a service desk both start from. Exact match; the real numbers come from the merchant, so the example here resolves nowhere.
     * @param {CustomersOrganizationsListStatus} status - Filter by status — access, not pipeline.
     * @param {string} lifecycleStage - Filter by pipeline stage. One of the tenant's own stages (GET /customers/lifecycle-stages); a fresh install starts with lead, prospect, customer, churned.
     * @param {string} paymentTerms - Filter to rows whose `payment_terms` is exactly this value. When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business.
     * @param {number} creditLimit - Filter to rows whose `credit_limit` is exactly this value. Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero.
     * @param {string} priceList - Filter to rows whose `price_list` is exactly this value. Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {boolean} deliveryBlock - Filter to companies whose shipments are stopped.
     * @param {string} externalTeamId - Find the organization behind a platform team id. The reverse of the mirror, and the way an auth-side id becomes a customer record.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsList(id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimit?: number, priceList?: string, deliveryBlock?: boolean, externalTeamId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersOrganizationsList(
        paramsOrFirst?: { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimit?: number, priceList?: string, deliveryBlock?: boolean, externalTeamId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (CustomersOrganizationsListStatus)?, (string)?, (string)?, (number)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimit?: number, priceList?: string, deliveryBlock?: boolean, externalTeamId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimit?: number, priceList?: string, deliveryBlock?: boolean, externalTeamId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                vatId: rest[1] as string,
                branche: rest[2] as string,
                customerNumber: rest[3] as string,
                status: rest[4] as CustomersOrganizationsListStatus,
                lifecycleStage: rest[5] as string,
                paymentTerms: rest[6] as string,
                creditLimit: rest[7] as number,
                priceList: rest[8] as string,
                deliveryBlock: rest[9] as boolean,
                externalTeamId: rest[10] as string,
                createdAt: rest[11] as string,
                updatedAt: rest[12] as string,
                limit: rest[13] as number,
                offset: rest[14] as number,
                order: rest[15] as string            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const vatId = params.vatId;
        const branche = params.branche;
        const customerNumber = params.customerNumber;
        const status = params.status;
        const lifecycleStage = params.lifecycleStage;
        const paymentTerms = params.paymentTerms;
        const creditLimit = params.creditLimit;
        const priceList = params.priceList;
        const deliveryBlock = params.deliveryBlock;
        const externalTeamId = params.externalTeamId;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/organizations';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof vatId !== 'undefined') {
            apiPayload['vat_id'] = vatId;
        }
        if (typeof branche !== 'undefined') {
            apiPayload['branche'] = branche;
        }
        if (typeof customerNumber !== 'undefined') {
            apiPayload['customer_number'] = customerNumber;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof lifecycleStage !== 'undefined') {
            apiPayload['lifecycle_stage'] = lifecycleStage;
        }
        if (typeof paymentTerms !== 'undefined') {
            apiPayload['payment_terms'] = paymentTerms;
        }
        if (typeof creditLimit !== 'undefined') {
            apiPayload['credit_limit'] = creditLimit;
        }
        if (typeof priceList !== 'undefined') {
            apiPayload['price_list'] = priceList;
        }
        if (typeof deliveryBlock !== 'undefined') {
            apiPayload['delivery_block'] = deliveryBlock;
        }
        if (typeof externalTeamId !== 'undefined') {
            apiPayload['external_team_id'] = externalTeamId;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Registers a company as a customer. It is mirrored into platform auth as a team in the same call, so a failure of the identity service fails the create rather than leaving half a company behind. `payment_terms` and `lifecycle_stage` name values from this tenant's own sets, and a newly founded company inherits the tenant's `default_payment_terms` / `default_credit_limit` where the merchant set them. `name` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL) or `external_team_id` (while external_team_id IS NOT NULL).
     *
     * @param {string} params.name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {string} params.branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {number} params.creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero. A create without it inherits the tenant's `default_credit_limit`.
     * @param {string} params.customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} params.deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} params.lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} params.paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} params.priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} params.settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {OrganizationStatus} params.status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} params.vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsCreate(params: { name: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string }): Promise<Models.Organization>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Registers a company as a customer. It is mirrored into platform auth as a team in the same call, so a failure of the identity service fails the create rather than leaving half a company behind. `payment_terms` and `lifecycle_stage` name values from this tenant's own sets, and a newly founded company inherits the tenant's `default_payment_terms` / `default_credit_limit` where the merchant set them. `name` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL) or `external_team_id` (while external_team_id IS NOT NULL).
     *
     * @param {string} name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {string} branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {number} creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero. A create without it inherits the tenant's `default_credit_limit`.
     * @param {string} customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {OrganizationStatus} status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsCreate(name: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string): Promise<Models.Organization>;
    customersOrganizationsCreate(
        paramsOrFirst: { name: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string } | string,
        ...rest: [(string)?, (number)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (object)?, (OrganizationStatus)?, (string)?]    
    ): Promise<Models.Organization> {
        let params: { name: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                branche: rest[0] as string,
                creditLimit: rest[1] as number,
                customerNumber: rest[2] as string,
                deliveryBlock: rest[3] as boolean,
                lifecycleStage: rest[4] as string,
                paymentTerms: rest[5] as string,
                priceList: rest[6] as string,
                settings: rest[7] as object,
                status: rest[8] as OrganizationStatus,
                vatId: rest[9] as string            
            };
        }
        
        const name = params.name;
        const branche = params.branche;
        const creditLimit = params.creditLimit;
        const customerNumber = params.customerNumber;
        const deliveryBlock = params.deliveryBlock;
        const lifecycleStage = params.lifecycleStage;
        const paymentTerms = params.paymentTerms;
        const priceList = params.priceList;
        const settings = params.settings;
        const status = params.status;
        const vatId = params.vatId;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/customers/organizations';
        const apiPayload: Payload = {};
        if (typeof branche !== 'undefined') {
            apiPayload['branche'] = branche;
        }
        if (typeof creditLimit !== 'undefined') {
            apiPayload['credit_limit'] = creditLimit;
        }
        if (typeof customerNumber !== 'undefined') {
            apiPayload['customer_number'] = customerNumber;
        }
        if (typeof deliveryBlock !== 'undefined') {
            apiPayload['delivery_block'] = deliveryBlock;
        }
        if (typeof lifecycleStage !== 'undefined') {
            apiPayload['lifecycle_stage'] = lifecycleStage;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof paymentTerms !== 'undefined') {
            apiPayload['payment_terms'] = paymentTerms;
        }
        if (typeof priceList !== 'undefined') {
            apiPayload['price_list'] = priceList;
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Removes the company and its mirrored team. Its people are NOT deleted: they become standalone buyers who can still sign in and still order, which is the behaviour a merchant winding down a subsidiary wants. Deleting one takes every `contact_events`, `addresses`, `organization_metrics` and `segment_members` row that points at it with it and clears `contacts.organization_id` rather than deleting those rows — the foreign keys decide, not this route.
     *
     * @param {string} params.id - The organization to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersOrganizationsDelete(params: { id: string }): Promise<{}>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Removes the company and its mirrored team. Its people are NOT deleted: they become standalone buyers who can still sign in and still order, which is the behaviour a merchant winding down a subsidiary wants. Deleting one takes every `contact_events`, `addresses`, `organization_metrics` and `segment_members` row that points at it with it and clears `contacts.organization_id` rather than deleting those rows — the foreign keys decide, not this route.
     *
     * @param {string} id - The organization to delete.
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. One company by id, with its commercial terms as stored. What it has BOUGHT is not in here — that is the `organization_metrics` row for the same id, refreshed on its own schedule.
     *
     * @param {string} params.id - The organization to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsGet(params: { id: string }): Promise<Models.Organization>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. One company by id, with its commercial terms as stored. What it has BOUGHT is not in here — that is the `organization_metrics` row for the same id, refreshed on its own schedule.
     *
     * @param {string} id - The organization to read.
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. A partial update — send only what changes. `external_team_id` is mirror-managed and ignored if sent. Blocking a company here is what stops it trading; moving it through the pipeline is `lifecycle_stage`, and the two are independent. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL) or `external_team_id` (while external_team_id IS NOT NULL).
     *
     * @param {string} params.id - The organization to update.
     * @param {string} params.branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {number} params.creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero. A create without it inherits the tenant's `default_credit_limit`.
     * @param {string} params.customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} params.deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} params.lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} params.name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {string} params.paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} params.priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} params.settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {OrganizationStatus} params.status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} params.vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsUpdate(params: { id: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string }): Promise<Models.Organization>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. A partial update — send only what changes. `external_team_id` is mirror-managed and ignored if sent. Blocking a company here is what stops it trading; moving it through the pipeline is `lifecycle_stage`, and the two are independent. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL) or `external_team_id` (while external_team_id IS NOT NULL).
     *
     * @param {string} id - The organization to update.
     * @param {string} branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {number} creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero. A create without it inherits the tenant's `default_credit_limit`.
     * @param {string} customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {string} paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {OrganizationStatus} status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsUpdate(id: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string): Promise<Models.Organization>;
    customersOrganizationsUpdate(
        paramsOrFirst: { id: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string } | string,
        ...rest: [(string)?, (number)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (object)?, (OrganizationStatus)?, (string)?]    
    ): Promise<Models.Organization> {
        let params: { id: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, branche?: string, creditLimit?: number, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, status?: OrganizationStatus, vatId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                branche: rest[0] as string,
                creditLimit: rest[1] as number,
                customerNumber: rest[2] as string,
                deliveryBlock: rest[3] as boolean,
                lifecycleStage: rest[4] as string,
                name: rest[5] as string,
                paymentTerms: rest[6] as string,
                priceList: rest[7] as string,
                settings: rest[8] as object,
                status: rest[9] as OrganizationStatus,
                vatId: rest[10] as string            
            };
        }
        
        const id = params.id;
        const branche = params.branche;
        const creditLimit = params.creditLimit;
        const customerNumber = params.customerNumber;
        const deliveryBlock = params.deliveryBlock;
        const lifecycleStage = params.lifecycleStage;
        const name = params.name;
        const paymentTerms = params.paymentTerms;
        const priceList = params.priceList;
        const settings = params.settings;
        const status = params.status;
        const vatId = params.vatId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/organizations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof branche !== 'undefined') {
            apiPayload['branche'] = branche;
        }
        if (typeof creditLimit !== 'undefined') {
            apiPayload['credit_limit'] = creditLimit;
        }
        if (typeof customerNumber !== 'undefined') {
            apiPayload['customer_number'] = customerNumber;
        }
        if (typeof deliveryBlock !== 'undefined') {
            apiPayload['delivery_block'] = deliveryBlock;
        }
        if (typeof lifecycleStage !== 'undefined') {
            apiPayload['lifecycle_stage'] = lifecycleStage;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof paymentTerms !== 'undefined') {
            apiPayload['payment_terms'] = paymentTerms;
        }
        if (typeof priceList !== 'undefined') {
            apiPayload['price_list'] = priceList;
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
