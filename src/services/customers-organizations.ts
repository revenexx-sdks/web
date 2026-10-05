import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CustomersOrganizationsListStatus } from '../enums/customers-organizations-list-status';
import { CreditLimitMode } from '../enums/credit-limit-mode';
import { ShippingAdvice } from '../enums/shipping-advice';
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
     * @param {string} params.name2 - Filter to rows whose `name2` is exactly this value. The second recipient line: a department beneath a person, an attention line, a c/o. What `street2` is for the street, this is for the recipient — and it is a line of its own rather than more text in `name`, because a label prints two lines and an ERP delivers two fields. Null when there is none.
     * @param {string} params.street - Filter to rows whose `street` is exactly this value. Street and house number, on one line, as the local post expects it. OPTIONAL, because a deliverable address does not always have one: a German PO box is addressed by its number, its postcode and its town, and an ERP that holds thousands of them would otherwise have every one of them refused. The postcode and the town stay required — a PO box has both.
     * @param {string} params.street2 - Filter to rows whose `street2` is exactly this value. The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} params.zip - Filter to rows whose `zip` is exactly this value. Postal code, as text — leading zeros are real in most countries.
     * @param {string} params.city - Filter to rows whose `city` is exactly this value. City or town.
     * @param {string} params.region - Filter to rows whose `region` is exactly this value. State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} params.country - Filter by ISO 3166-1 alpha-2 country code.
     * @param {string} params.phone - Filter to rows whose `phone` is exactly this value. Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {boolean} params.isDefault - Filter to the default addresses. With `type` and an owner, this is the one address a checkout should preselect.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the address was created.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressesList(params?: { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, name2?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Every address this tenant holds, filterable by owner (`organization_id`, `contact_id`), by `type` and by any other column. It is how the addresses tab of a company or a person is filled; the page is `limit`/`offset`/`order`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the address.
     * @param {string} organizationId - Filter to one owning company.
     * @param {string} contactId - Filter to one owning contact — a personal address book.
     * @param {string} type - Filter by address type (GET /customers/address-types) — 'billing' or 'shipping' unless the merchant added their own.
     * @param {string} company - Filter to rows whose `company` is exactly this value. Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} name - Filter to rows whose `name` is exactly this value. Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} name2 - Filter to rows whose `name2` is exactly this value. The second recipient line: a department beneath a person, an attention line, a c/o. What `street2` is for the street, this is for the recipient — and it is a line of its own rather than more text in `name`, because a label prints two lines and an ERP delivers two fields. Null when there is none.
     * @param {string} street - Filter to rows whose `street` is exactly this value. Street and house number, on one line, as the local post expects it. OPTIONAL, because a deliverable address does not always have one: a German PO box is addressed by its number, its postcode and its town, and an ERP that holds thousands of them would otherwise have every one of them refused. The postcode and the town stay required — a PO box has both.
     * @param {string} street2 - Filter to rows whose `street2` is exactly this value. The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} zip - Filter to rows whose `zip` is exactly this value. Postal code, as text — leading zeros are real in most countries.
     * @param {string} city - Filter to rows whose `city` is exactly this value. City or town.
     * @param {string} region - Filter to rows whose `region` is exactly this value. State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} country - Filter by ISO 3166-1 alpha-2 country code.
     * @param {string} phone - Filter to rows whose `phone` is exactly this value. Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {boolean} isDefault - Filter to the default addresses. With `type` and an owner, this is the one address a checkout should preselect.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the address was created.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesList(id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, name2?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersAddressesList(
        paramsOrFirst?: { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, name2?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, name2?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, organizationId?: string, contactId?: string, type?: string, company?: string, name?: string, name2?: string, street?: string, street2?: string, zip?: string, city?: string, region?: string, country?: string, phone?: string, isDefault?: boolean, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                organizationId: rest[0] as string,
                contactId: rest[1] as string,
                type: rest[2] as string,
                company: rest[3] as string,
                name: rest[4] as string,
                name2: rest[5] as string,
                street: rest[6] as string,
                street2: rest[7] as string,
                zip: rest[8] as string,
                city: rest[9] as string,
                region: rest[10] as string,
                country: rest[11] as string,
                phone: rest[12] as string,
                isDefault: rest[13] as boolean,
                externalId: rest[14] as string,
                sourceSyncedAt: rest[15] as string,
                createdAt: rest[16] as string,
                updatedAt: rest[17] as string,
                limit: rest[18] as number,
                offset: rest[19] as number,
                order: rest[20] as string            
            };
        }
        
        const id = params.id;
        const organizationId = params.organizationId;
        const contactId = params.contactId;
        const type = params.type;
        const company = params.company;
        const name = params.name;
        const name2 = params.name2;
        const street = params.street;
        const street2 = params.street2;
        const zip = params.zip;
        const city = params.city;
        const region = params.region;
        const country = params.country;
        const phone = params.phone;
        const isDefault = params.isDefault;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
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
        if (typeof name2 !== 'undefined') {
            apiPayload['name2'] = name2;
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
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. `type` names one of this tenant's own address types — billing and shipping are seeded, and a merchant may add a works entrance or a central accounts office without a release of this app. `is_default` picks the one a checkout should preselect for that owner and that type. A create cannot omit `zip`, `city` and `country`; everything else is optional or defaulted by the database. Two rows of this tenant may not share `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.city - City or town.
     * @param {string} params.country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} params.zip - Postal code, as text — leading zeros are real in most countries.
     * @param {string} params.company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} params.contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} params.createdAt - When the address was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {string} params.externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} params.isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} params.name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} params.name2 - The second recipient line: a department beneath a person, an attention line, a c/o. What `street2` is for the street, this is for the recipient — and it is a line of its own rather than more text in `name`, because a label prints two lines and an ERP delivers two fields. Null when there is none.
     * @param {string} params.organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} params.phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} params.region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} params.street - Street and house number, on one line, as the local post expects it. OPTIONAL, because a deliverable address does not always have one: a German PO box is addressed by its number, its postcode and its town, and an ERP that holds thousands of them would otherwise have every one of them refused. The postcode and the town stay required — a PO box has both.
     * @param {string} params.street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} params.type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesCreate(params: { city: string, country: string, zip: string, company?: string, contactId?: string, createdAt?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string }): Promise<Models.Address>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. `type` names one of this tenant's own address types — billing and shipping are seeded, and a merchant may add a works entrance or a central accounts office without a release of this app. `is_default` picks the one a checkout should preselect for that owner and that type. A create cannot omit `zip`, `city` and `country`; everything else is optional or defaulted by the database. Two rows of this tenant may not share `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} city - City or town.
     * @param {string} country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} zip - Postal code, as text — leading zeros are real in most countries.
     * @param {string} company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} createdAt - When the address was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {string} externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} name2 - The second recipient line: a department beneath a person, an attention line, a c/o. What `street2` is for the street, this is for the recipient — and it is a line of its own rather than more text in `name`, because a label prints two lines and an ERP delivers two fields. Null when there is none.
     * @param {string} organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} street - Street and house number, on one line, as the local post expects it. OPTIONAL, because a deliverable address does not always have one: a German PO box is addressed by its number, its postcode and its town, and an ERP that holds thousands of them would otherwise have every one of them refused. The postcode and the town stay required — a PO box has both.
     * @param {string} street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesCreate(city: string, country: string, zip: string, company?: string, contactId?: string, createdAt?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string): Promise<Models.Address>;
    customersAddressesCreate(
        paramsOrFirst: { city: string, country: string, zip: string, company?: string, contactId?: string, createdAt?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Address> {
        let params: { city: string, country: string, zip: string, company?: string, contactId?: string, createdAt?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { city: string, country: string, zip: string, company?: string, contactId?: string, createdAt?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string };
        } else {
            params = {
                city: paramsOrFirst as string,
                country: rest[0] as string,
                zip: rest[1] as string,
                company: rest[2] as string,
                contactId: rest[3] as string,
                createdAt: rest[4] as string,
                externalId: rest[5] as string,
                isDefault: rest[6] as boolean,
                name: rest[7] as string,
                name2: rest[8] as string,
                organizationId: rest[9] as string,
                phone: rest[10] as string,
                region: rest[11] as string,
                street: rest[12] as string,
                street2: rest[13] as string,
                type: rest[14] as string            
            };
        }
        
        const city = params.city;
        const country = params.country;
        const zip = params.zip;
        const company = params.company;
        const contactId = params.contactId;
        const createdAt = params.createdAt;
        const externalId = params.externalId;
        const isDefault = params.isDefault;
        const name = params.name;
        const name2 = params.name2;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const region = params.region;
        const street = params.street;
        const street2 = params.street2;
        const type = params.type;

        if (typeof city === 'undefined') {
            throw new RevenexxException('Missing required parameter: "city"');
        }
        if (typeof country === 'undefined') {
            throw new RevenexxException('Missing required parameter: "country"');
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
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
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
        if (typeof name2 !== 'undefined') {
            apiPayload['name2'] = name2;
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Removes the address. Orders already placed keep the address they were placed with; nothing in this app reaches back. Deleting one takes every `contact_points` row that points at it with it — the foreign keys decide, not this route.
     *
     * @param {string} params.id - The address to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersAddressesDelete(params: { id: string }): Promise<{}>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. Removes the address. Orders already placed keep the address they were placed with; nothing in this app reaches back. Deleting one takes every `contact_points` row that points at it with it — the foreign keys decide, not this route.
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
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. A partial update — send only what changes. An empty body is refused rather than answered as a no-op, so a client that built the wrong patch finds out. Two rows of this tenant may not share `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.id - The address to update.
     * @param {string} params.city - City or town.
     * @param {string} params.company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} params.contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} params.country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} params.externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} params.isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} params.name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} params.name2 - The second recipient line: a department beneath a person, an attention line, a c/o. What `street2` is for the street, this is for the recipient — and it is a line of its own rather than more text in `name`, because a label prints two lines and an ERP delivers two fields. Null when there is none.
     * @param {string} params.organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} params.phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} params.region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} params.street - Street and house number, on one line, as the local post expects it. OPTIONAL, because a deliverable address does not always have one: a German PO box is addressed by its number, its postcode and its town, and an ERP that holds thousands of them would otherwise have every one of them refused. The postcode and the town stay required — a PO box has both.
     * @param {string} params.street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} params.type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @param {string} params.zip - Postal code, as text — leading zeros are real in most countries.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     */
    customersAddressesUpdate(params: { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string }): Promise<Models.Address>;
    /**
     * A postal address used for billing or for shipping, owned by exactly one of the two parties: an organization (the company address everyone in it may use) or a contact (a private one only that person uses). Both owner columns are nullable and exactly one is set — sending both, or neither, is refused. A partial update — send only what changes. An empty body is refused rather than answered as a no-op, so a client that built the wrong patch finds out. Two rows of this tenant may not share `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} id - The address to update.
     * @param {string} city - City or town.
     * @param {string} company - Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
     * @param {string} contactId - Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
     * @param {string} country - ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
     * @param {string} externalId - Id of this address in the system it came from — an ERP address number. Nullable and unique per tenant where it is set. It is also the id a line-based order export has to hand back, because the receiving system names a delivery or invoice address by it rather than by its street. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} isDefault - The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
     * @param {string} name - Recipient line on the label — the person or department the parcel is addressed to.
     * @param {string} name2 - The second recipient line: a department beneath a person, an attention line, a c/o. What `street2` is for the street, this is for the recipient — and it is a line of its own rather than more text in `name`, because a label prints two lines and an ERP delivers two fields. Null when there is none.
     * @param {string} organizationId - Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
     * @param {string} phone - Phone number for the carrier to reach at this address — often a different one from the contact's own.
     * @param {string} region - State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
     * @param {string} street - Street and house number, on one line, as the local post expects it. OPTIONAL, because a deliverable address does not always have one: a German PO box is addressed by its number, its postcode and its town, and an ERP that holds thousands of them would otherwise have every one of them refused. The postcode and the town stay required — a PO box has both.
     * @param {string} street2 - The second address line: building, floor, gate, c/o. Null when there is none.
     * @param {string} type - What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
     * @param {string} zip - Postal code, as text — leading zeros are real in most countries.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Address>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAddressesUpdate(id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string): Promise<Models.Address>;
    customersAddressesUpdate(
        paramsOrFirst: { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Address> {
        let params: { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, city?: string, company?: string, contactId?: string, country?: string, externalId?: string, isDefault?: boolean, name?: string, name2?: string, organizationId?: string, phone?: string, region?: string, street?: string, street2?: string, type?: string, zip?: string };
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
                name2: rest[7] as string,
                organizationId: rest[8] as string,
                phone: rest[9] as string,
                region: rest[10] as string,
                street: rest[11] as string,
                street2: rest[12] as string,
                type: rest[13] as string,
                zip: rest[14] as string            
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
        const name2 = params.name2;
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
        if (typeof name2 !== 'undefined') {
            apiPayload['name2'] = name2;
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
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. Every contact point this tenant holds, filtered by `organization_id` for one company, by `kind` for one kind of document, by `is_primary` for the ones actually in use. `?organization_id=…&kind=invoice&is_primary=true` is the single read behind "where does this company's invoice go" — and it answers at most one row, because this app keeps the flag single. The page is `limit`/`offset`/`order`.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the contact point.
     * @param {string} params.organizationId - Filter to one company's document recipients.
     * @param {string} params.addressId - Filter to the points carried on one postal address — the ERP case of a mail address on a delivery address.
     * @param {string} params.kind - Filter by which document goes there. One of the tenant's own document recipient types (GET /customers/contact-point-kinds).
     * @param {string} params.email - Filter to rows whose `email` is exactly this value. The mail address this document is sent to. Nullable, because a point may carry a phone number instead — but a point with neither is refused, since it delivers nothing. Note that `addresses` has never had a column for this: a mail address per document had nowhere to live before these rows.
     * @param {string} params.phone - Filter to rows whose `phone` is exactly this value. The number this document is sent to or announced on — a fax for an order confirmation, a mobile for a delivery notice. Free text, as somebody typed it; E.164 is what an integration should send.
     * @param {boolean} params.isPrimary - Filter to the points actually in use. With `organization_id` and `kind` this answers at most one row, because exactly one point of a kind carries the flag.
     * @param {number} params.position - Filter to rows whose `position` is exactly this value. Where this point sits among the others of its kind, ascending. It orders the ones that are NOT flagged — a fallback list for a caller that wants every invoice recipient rather than the one.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. The key this point has in the system that owns it — an ERP's own id for a document sending address. Unique per tenant where set, so a repeated import updates this row instead of adding a second one. Null for a point somebody typed in here.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the point was created.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactPointsList(params?: { id?: string, organizationId?: string, addressId?: string, kind?: string, email?: string, phone?: string, isPrimary?: boolean, position?: number, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. Every contact point this tenant holds, filtered by `organization_id` for one company, by `kind` for one kind of document, by `is_primary` for the ones actually in use. `?organization_id=…&kind=invoice&is_primary=true` is the single read behind "where does this company's invoice go" — and it answers at most one row, because this app keeps the flag single. The page is `limit`/`offset`/`order`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the contact point.
     * @param {string} organizationId - Filter to one company's document recipients.
     * @param {string} addressId - Filter to the points carried on one postal address — the ERP case of a mail address on a delivery address.
     * @param {string} kind - Filter by which document goes there. One of the tenant's own document recipient types (GET /customers/contact-point-kinds).
     * @param {string} email - Filter to rows whose `email` is exactly this value. The mail address this document is sent to. Nullable, because a point may carry a phone number instead — but a point with neither is refused, since it delivers nothing. Note that `addresses` has never had a column for this: a mail address per document had nowhere to live before these rows.
     * @param {string} phone - Filter to rows whose `phone` is exactly this value. The number this document is sent to or announced on — a fax for an order confirmation, a mobile for a delivery notice. Free text, as somebody typed it; E.164 is what an integration should send.
     * @param {boolean} isPrimary - Filter to the points actually in use. With `organization_id` and `kind` this answers at most one row, because exactly one point of a kind carries the flag.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Where this point sits among the others of its kind, ascending. It orders the ones that are NOT flagged — a fallback list for a caller that wants every invoice recipient rather than the one.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. The key this point has in the system that owns it — an ERP's own id for a document sending address. Unique per tenant where set, so a repeated import updates this row instead of adding a second one. Null for a point somebody typed in here.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the point was created.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointsList(id?: string, organizationId?: string, addressId?: string, kind?: string, email?: string, phone?: string, isPrimary?: boolean, position?: number, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersContactPointsList(
        paramsOrFirst?: { id?: string, organizationId?: string, addressId?: string, kind?: string, email?: string, phone?: string, isPrimary?: boolean, position?: number, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (number)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, organizationId?: string, addressId?: string, kind?: string, email?: string, phone?: string, isPrimary?: boolean, position?: number, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, organizationId?: string, addressId?: string, kind?: string, email?: string, phone?: string, isPrimary?: boolean, position?: number, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                organizationId: rest[0] as string,
                addressId: rest[1] as string,
                kind: rest[2] as string,
                email: rest[3] as string,
                phone: rest[4] as string,
                isPrimary: rest[5] as boolean,
                position: rest[6] as number,
                externalId: rest[7] as string,
                sourceSyncedAt: rest[8] as string,
                createdAt: rest[9] as string,
                updatedAt: rest[10] as string,
                limit: rest[11] as number,
                offset: rest[12] as number,
                order: rest[13] as string            
            };
        }
        
        const id = params.id;
        const organizationId = params.organizationId;
        const addressId = params.addressId;
        const kind = params.kind;
        const email = params.email;
        const phone = params.phone;
        const isPrimary = params.isPrimary;
        const position = params.position;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/contact_points';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof addressId !== 'undefined') {
            apiPayload['address_id'] = addressId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. `kind` is required and names one of this tenant's own document recipient types — nothing is defaulted, because a point filed as the wrong document is worse than a point refused. A point needs an `email` or a `phone`, since one with neither delivers nothing. The FIRST point of a kind becomes the one to use on its own; a later one takes over only when it is sent as `is_primary`, which demotes the incumbent in the same call. A create cannot omit `organization_id` and `kind`; everything else is optional or defaulted by the database. Two rows of this tenant may not share the combination of `organization_id` + `kind` (while is_primary) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.kind - WHICH document goes here — one of the tenant's own document recipient types (GET /customers/contact-point-kinds), seeded with invoice, order_confirmation, shipping_notice and dunning. Required and never defaulted: a point filed as the wrong document is worse than no point at all, because nothing downstream can tell that nobody chose. A merchant whose ERP mails a credit note separately adds their own type without a release of this app. Required on create, and nothing is defaulted: a kind the tenant does not keep is a 400 naming the ones on offer.
     * @param {string} params.organizationId - The company whose document this is. Required — a contact point with no company is an address for nobody, and deleting the company takes its points with it. Fixed once created — the flag that says which point of a kind to use is scoped by the company, so moving a point would move an invariant with it.
     * @param {string} params.addressId - The postal address this point belongs to, for the one case an ERP has it: a mail address carried ON a delivery address, so the notice about a shipment goes to whoever receives it there. Null is the ordinary case and means the point is the company's rather than one address's. It has to be an address of the same company (or of one of its people), and deleting the address takes the point with it.
     * @param {string} params.createdAt - When the point was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {string} params.email - The mail address this document is sent to. Nullable, because a point may carry a phone number instead — but a point with neither is refused, since it delivers nothing. Note that `addresses` has never had a column for this: a mail address per document had nowhere to live before these rows.
     * @param {string} params.externalId - The key this point has in the system that owns it — an ERP's own id for a document sending address. Unique per tenant where set, so a repeated import updates this row instead of adding a second one. Null for a point somebody typed in here. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} params.isPrimary - The point THIS kind of document actually goes to. Exactly one point per company and kind carries it: the first point of a kind is flagged as it is created, flagging another demotes the incumbent, and it is never simply switched off — so the question has one answer while the kind has any point at all, and none only when it has none. The first point of a kind gets it on its own. Sending true on a later one demotes the incumbent in the same call; sending false on the one that holds it is refused — flag the point that should take over instead.
     * @param {string} params.phone - The number this document is sent to or announced on — a fax for an order confirmation, a mobile for a delivery notice. Free text, as somebody typed it; E.164 is what an integration should send.
     * @param {number} params.position - Where this point sits among the others of its kind, ascending. It orders the ones that are NOT flagged — a fallback list for a caller that wants every invoice recipient rather than the one. Default 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPoint>}
     */
    customersContactPointsCreate(params: { kind: string, organizationId: string, addressId?: string, createdAt?: string, email?: string, externalId?: string, isPrimary?: boolean, phone?: string, position?: number }): Promise<Models.ContactPoint>;
    /**
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. `kind` is required and names one of this tenant's own document recipient types — nothing is defaulted, because a point filed as the wrong document is worse than a point refused. A point needs an `email` or a `phone`, since one with neither delivers nothing. The FIRST point of a kind becomes the one to use on its own; a later one takes over only when it is sent as `is_primary`, which demotes the incumbent in the same call. A create cannot omit `organization_id` and `kind`; everything else is optional or defaulted by the database. Two rows of this tenant may not share the combination of `organization_id` + `kind` (while is_primary) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} kind - WHICH document goes here — one of the tenant's own document recipient types (GET /customers/contact-point-kinds), seeded with invoice, order_confirmation, shipping_notice and dunning. Required and never defaulted: a point filed as the wrong document is worse than no point at all, because nothing downstream can tell that nobody chose. A merchant whose ERP mails a credit note separately adds their own type without a release of this app. Required on create, and nothing is defaulted: a kind the tenant does not keep is a 400 naming the ones on offer.
     * @param {string} organizationId - The company whose document this is. Required — a contact point with no company is an address for nobody, and deleting the company takes its points with it. Fixed once created — the flag that says which point of a kind to use is scoped by the company, so moving a point would move an invariant with it.
     * @param {string} addressId - The postal address this point belongs to, for the one case an ERP has it: a mail address carried ON a delivery address, so the notice about a shipment goes to whoever receives it there. Null is the ordinary case and means the point is the company's rather than one address's. It has to be an address of the same company (or of one of its people), and deleting the address takes the point with it.
     * @param {string} createdAt - When the point was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {string} email - The mail address this document is sent to. Nullable, because a point may carry a phone number instead — but a point with neither is refused, since it delivers nothing. Note that `addresses` has never had a column for this: a mail address per document had nowhere to live before these rows.
     * @param {string} externalId - The key this point has in the system that owns it — an ERP's own id for a document sending address. Unique per tenant where set, so a repeated import updates this row instead of adding a second one. Null for a point somebody typed in here. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} isPrimary - The point THIS kind of document actually goes to. Exactly one point per company and kind carries it: the first point of a kind is flagged as it is created, flagging another demotes the incumbent, and it is never simply switched off — so the question has one answer while the kind has any point at all, and none only when it has none. The first point of a kind gets it on its own. Sending true on a later one demotes the incumbent in the same call; sending false on the one that holds it is refused — flag the point that should take over instead.
     * @param {string} phone - The number this document is sent to or announced on — a fax for an order confirmation, a mobile for a delivery notice. Free text, as somebody typed it; E.164 is what an integration should send.
     * @param {number} position - Where this point sits among the others of its kind, ascending. It orders the ones that are NOT flagged — a fallback list for a caller that wants every invoice recipient rather than the one. Default 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointsCreate(kind: string, organizationId: string, addressId?: string, createdAt?: string, email?: string, externalId?: string, isPrimary?: boolean, phone?: string, position?: number): Promise<Models.ContactPoint>;
    customersContactPointsCreate(
        paramsOrFirst: { kind: string, organizationId: string, addressId?: string, createdAt?: string, email?: string, externalId?: string, isPrimary?: boolean, phone?: string, position?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (number)?]    
    ): Promise<Models.ContactPoint> {
        let params: { kind: string, organizationId: string, addressId?: string, createdAt?: string, email?: string, externalId?: string, isPrimary?: boolean, phone?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { kind: string, organizationId: string, addressId?: string, createdAt?: string, email?: string, externalId?: string, isPrimary?: boolean, phone?: string, position?: number };
        } else {
            params = {
                kind: paramsOrFirst as string,
                organizationId: rest[0] as string,
                addressId: rest[1] as string,
                createdAt: rest[2] as string,
                email: rest[3] as string,
                externalId: rest[4] as string,
                isPrimary: rest[5] as boolean,
                phone: rest[6] as string,
                position: rest[7] as number            
            };
        }
        
        const kind = params.kind;
        const organizationId = params.organizationId;
        const addressId = params.addressId;
        const createdAt = params.createdAt;
        const email = params.email;
        const externalId = params.externalId;
        const isPrimary = params.isPrimary;
        const phone = params.phone;
        const position = params.position;

        if (typeof kind === 'undefined') {
            throw new RevenexxException('Missing required parameter: "kind"');
        }
        if (typeof organizationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "organizationId"');
        }

        const apiPath = '/v1/customers/contact_points';
        const apiPayload: Payload = {};
        if (typeof addressId !== 'undefined') {
            apiPayload['address_id'] = addressId;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. Removes the point. If it was the flagged one, the next point of that kind takes over — so the kind keeps an answer for as long as it has any point at all, and the company is left with none only once the last one goes. Nothing else in this app points at it, so nothing else goes with it.
     *
     * @param {string} params.id - The contact point to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactPointsDelete(params: { id: string }): Promise<{}>;
    /**
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. Removes the point. If it was the flagged one, the next point of that kind takes over — so the kind keeps an answer for as long as it has any point at all, and the company is left with none only once the last one goes. Nothing else in this app points at it, so nothing else goes with it.
     *
     * @param {string} id - The contact point to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointsDelete(id: string): Promise<{}>;
    customersContactPointsDelete(
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

        const apiPath = '/v1/customers/contact_points/{id}'.replace('{id}', id);
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
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. One contact point by id.
     *
     * @param {string} params.id - The contact point to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPoint>}
     */
    customersContactPointsGet(params: { id: string }): Promise<Models.ContactPoint>;
    /**
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. One contact point by id.
     *
     * @param {string} id - The contact point to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointsGet(id: string): Promise<Models.ContactPoint>;
    customersContactPointsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactPoint> {
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

        const apiPath = '/v1/customers/contact_points/{id}'.replace('{id}', id);
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
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. A partial update — send only what changes. The owning company is fixed (the flag is scoped by it, so moving a point between companies would move an invariant with it) and an empty body is refused. A flag MOVES rather than switching off: send `is_primary` on the point that should take over, because a kind with points and no flag is a question with no answer. Two rows of this tenant may not share the combination of `organization_id` + `kind` (while is_primary) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.id - The contact point to update.
     * @param {string} params.addressId - The postal address this point belongs to, for the one case an ERP has it: a mail address carried ON a delivery address, so the notice about a shipment goes to whoever receives it there. Null is the ordinary case and means the point is the company's rather than one address's. It has to be an address of the same company (or of one of its people), and deleting the address takes the point with it.
     * @param {string} params.email - The mail address this document is sent to. Nullable, because a point may carry a phone number instead — but a point with neither is refused, since it delivers nothing. Note that `addresses` has never had a column for this: a mail address per document had nowhere to live before these rows.
     * @param {string} params.externalId - The key this point has in the system that owns it — an ERP's own id for a document sending address. Unique per tenant where set, so a repeated import updates this row instead of adding a second one. Null for a point somebody typed in here. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} params.isPrimary - The point THIS kind of document actually goes to. Exactly one point per company and kind carries it: the first point of a kind is flagged as it is created, flagging another demotes the incumbent, and it is never simply switched off — so the question has one answer while the kind has any point at all, and none only when it has none. The first point of a kind gets it on its own. Sending true on a later one demotes the incumbent in the same call; sending false on the one that holds it is refused — flag the point that should take over instead.
     * @param {string} params.kind - WHICH document goes here — one of the tenant's own document recipient types (GET /customers/contact-point-kinds), seeded with invoice, order_confirmation, shipping_notice and dunning. Required and never defaulted: a point filed as the wrong document is worse than no point at all, because nothing downstream can tell that nobody chose. A merchant whose ERP mails a credit note separately adds their own type without a release of this app. Required on create, and nothing is defaulted: a kind the tenant does not keep is a 400 naming the ones on offer.
     * @param {string} params.organizationId - The company whose document this is. Required — a contact point with no company is an address for nobody, and deleting the company takes its points with it. Fixed once created — the flag that says which point of a kind to use is scoped by the company, so moving a point would move an invariant with it.
     * @param {string} params.phone - The number this document is sent to or announced on — a fax for an order confirmation, a mobile for a delivery notice. Free text, as somebody typed it; E.164 is what an integration should send.
     * @param {number} params.position - Where this point sits among the others of its kind, ascending. It orders the ones that are NOT flagged — a fallback list for a caller that wants every invoice recipient rather than the one. Default 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPoint>}
     */
    customersContactPointsUpdate(params: { id: string, addressId?: string, email?: string, externalId?: string, isPrimary?: boolean, kind?: string, organizationId?: string, phone?: string, position?: number }): Promise<Models.ContactPoint>;
    /**
     * A contact point is WHERE one kind of document goes for one company: the invoice to accounts payable, the order confirmation to the buyer who placed it, the shipping notice to goods-in, the dunning letter to whoever settles it. An ERP keeps these as four separate addresses per debtor and they had nowhere to land here — `addresses` carries a `phone` column and has never had an `email` one — so these rows create a home rather than moving one. Exactly one point per company and kind is flagged as the one to use. A partial update — send only what changes. The owning company is fixed (the flag is scoped by it, so moving a point between companies would move an invariant with it) and an empty body is refused. A flag MOVES rather than switching off: send `is_primary` on the point that should take over, because a kind with points and no flag is a question with no answer. Two rows of this tenant may not share the combination of `organization_id` + `kind` (while is_primary) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} id - The contact point to update.
     * @param {string} addressId - The postal address this point belongs to, for the one case an ERP has it: a mail address carried ON a delivery address, so the notice about a shipment goes to whoever receives it there. Null is the ordinary case and means the point is the company's rather than one address's. It has to be an address of the same company (or of one of its people), and deleting the address takes the point with it.
     * @param {string} email - The mail address this document is sent to. Nullable, because a point may carry a phone number instead — but a point with neither is refused, since it delivers nothing. Note that `addresses` has never had a column for this: a mail address per document had nowhere to live before these rows.
     * @param {string} externalId - The key this point has in the system that owns it — an ERP's own id for a document sending address. Unique per tenant where set, so a repeated import updates this row instead of adding a second one. Null for a point somebody typed in here. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {boolean} isPrimary - The point THIS kind of document actually goes to. Exactly one point per company and kind carries it: the first point of a kind is flagged as it is created, flagging another demotes the incumbent, and it is never simply switched off — so the question has one answer while the kind has any point at all, and none only when it has none. The first point of a kind gets it on its own. Sending true on a later one demotes the incumbent in the same call; sending false on the one that holds it is refused — flag the point that should take over instead.
     * @param {string} kind - WHICH document goes here — one of the tenant's own document recipient types (GET /customers/contact-point-kinds), seeded with invoice, order_confirmation, shipping_notice and dunning. Required and never defaulted: a point filed as the wrong document is worse than no point at all, because nothing downstream can tell that nobody chose. A merchant whose ERP mails a credit note separately adds their own type without a release of this app. Required on create, and nothing is defaulted: a kind the tenant does not keep is a 400 naming the ones on offer.
     * @param {string} organizationId - The company whose document this is. Required — a contact point with no company is an address for nobody, and deleting the company takes its points with it. Fixed once created — the flag that says which point of a kind to use is scoped by the company, so moving a point would move an invariant with it.
     * @param {string} phone - The number this document is sent to or announced on — a fax for an order confirmation, a mobile for a delivery notice. Free text, as somebody typed it; E.164 is what an integration should send.
     * @param {number} position - Where this point sits among the others of its kind, ascending. It orders the ones that are NOT flagged — a fallback list for a caller that wants every invoice recipient rather than the one. Default 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPoint>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactPointsUpdate(id: string, addressId?: string, email?: string, externalId?: string, isPrimary?: boolean, kind?: string, organizationId?: string, phone?: string, position?: number): Promise<Models.ContactPoint>;
    customersContactPointsUpdate(
        paramsOrFirst: { id: string, addressId?: string, email?: string, externalId?: string, isPrimary?: boolean, kind?: string, organizationId?: string, phone?: string, position?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.ContactPoint> {
        let params: { id: string, addressId?: string, email?: string, externalId?: string, isPrimary?: boolean, kind?: string, organizationId?: string, phone?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, addressId?: string, email?: string, externalId?: string, isPrimary?: boolean, kind?: string, organizationId?: string, phone?: string, position?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                addressId: rest[0] as string,
                email: rest[1] as string,
                externalId: rest[2] as string,
                isPrimary: rest[3] as boolean,
                kind: rest[4] as string,
                organizationId: rest[5] as string,
                phone: rest[6] as string,
                position: rest[7] as number            
            };
        }
        
        const id = params.id;
        const addressId = params.addressId;
        const email = params.email;
        const externalId = params.externalId;
        const isPrimary = params.isPrimary;
        const kind = params.kind;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const position = params.position;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/contact_points/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof addressId !== 'undefined') {
            apiPayload['address_id'] = addressId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * @param {CreditLimitMode} params.creditLimitMode - Filter to rows whose `credit_limit_mode` is exactly this value. Whether this company buys on credit, and how far: 'unset' (nobody decided — whoever checks credit applies its own fallback), 'limited' (open receivables up to `credit_limit`) or 'unlimited' (no ceiling, by decision). The mode is the decision; the amount exists only for 'limited'.
     * @param {number} params.creditLimit - Filter to rows whose `credit_limit` is exactly this value. Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Set exactly when `credit_limit_mode` is 'limited', and then above 0; null otherwise — read the mode, never the null, to know whether there is a ceiling.
     * @param {number} params.balance - Filter to rows whose `balance` is exactly this value. What this company owes right now, in the market's currency, as its accounting system last reported it — the figure a credit limit is compared against, and the reason the limit could check nothing on its own. A COPY, never a live read: this app asks no accounting system anything, so the number is exactly as old as `source_synced_at` says and the tenant's `credit_check_max_age_hours` setting says how old is too old. Null means no source has ever reported one, which is NOT a balance of zero — reading it as nothing owed is the mistake this column exists to prevent. A negative figure is a credit balance.
     * @param {number} params.balanceDue - Filter to rows whose `balance_due` is exactly this value. How much of `balance` is already OVERDUE, in the same currency and from the same report. The difference between warning a customer and blocking one: a company at its limit with nothing overdue is buying normally, and one below its limit with an unpaid invoice from March is not. Null means no source has reported it; zero means nothing is overdue, and the two are not the same answer.
     * @param {string} params.priceList - Filter to rows whose `price_list` is exactly this value. Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {ShippingAdvice} params.shippingAdvice - Filter by whether a part delivery is accepted. `complete` is the set of companies whose orders may not be split, which is what a warehouse wanting to know its constrained customers asks for.
     * @param {string} params.locationCode - Filter to the companies served out of one warehouse. Exact match on the code the inventories app owns; the real codes come from the merchant, so the example here resolves nowhere.
     * @param {boolean} params.deliveryBlock - Filter to companies whose shipments are stopped.
     * @param {string} params.externalTeamId - Find the organization behind a platform team id. The reverse of the mirror, and the way an auth-side id becomes a customer record.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. The key this company has in the system that OWNS it — the ERP's own key for the customer, not the number a human quotes (that is `customer_number`). Often a GUID; it is stored verbatim, whatever shape the source uses. Unique per tenant where set, so an import upserts on it instead of matching on a name. Null for a company the shop itself created.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersOrganizationsList(params?: { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimitMode?: CreditLimitMode, creditLimit?: number, balance?: number, balanceDue?: number, priceList?: string, shippingAdvice?: ShippingAdvice, locationCode?: string, deliveryBlock?: boolean, externalTeamId?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
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
     * @param {CreditLimitMode} creditLimitMode - Filter to rows whose `credit_limit_mode` is exactly this value. Whether this company buys on credit, and how far: 'unset' (nobody decided — whoever checks credit applies its own fallback), 'limited' (open receivables up to `credit_limit`) or 'unlimited' (no ceiling, by decision). The mode is the decision; the amount exists only for 'limited'.
     * @param {number} creditLimit - Filter to rows whose `credit_limit` is exactly this value. Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Set exactly when `credit_limit_mode` is 'limited', and then above 0; null otherwise — read the mode, never the null, to know whether there is a ceiling.
     * @param {number} balance - Filter to rows whose `balance` is exactly this value. What this company owes right now, in the market's currency, as its accounting system last reported it — the figure a credit limit is compared against, and the reason the limit could check nothing on its own. A COPY, never a live read: this app asks no accounting system anything, so the number is exactly as old as `source_synced_at` says and the tenant's `credit_check_max_age_hours` setting says how old is too old. Null means no source has ever reported one, which is NOT a balance of zero — reading it as nothing owed is the mistake this column exists to prevent. A negative figure is a credit balance.
     * @param {number} balanceDue - Filter to rows whose `balance_due` is exactly this value. How much of `balance` is already OVERDUE, in the same currency and from the same report. The difference between warning a customer and blocking one: a company at its limit with nothing overdue is buying normally, and one below its limit with an unpaid invoice from March is not. Null means no source has reported it; zero means nothing is overdue, and the two are not the same answer.
     * @param {string} priceList - Filter to rows whose `price_list` is exactly this value. Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {ShippingAdvice} shippingAdvice - Filter by whether a part delivery is accepted. `complete` is the set of companies whose orders may not be split, which is what a warehouse wanting to know its constrained customers asks for.
     * @param {string} locationCode - Filter to the companies served out of one warehouse. Exact match on the code the inventories app owns; the real codes come from the merchant, so the example here resolves nowhere.
     * @param {boolean} deliveryBlock - Filter to companies whose shipments are stopped.
     * @param {string} externalTeamId - Find the organization behind a platform team id. The reverse of the mirror, and the way an auth-side id becomes a customer record.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. The key this company has in the system that OWNS it — the ERP's own key for the customer, not the number a human quotes (that is `customer_number`). Often a GUID; it is stored verbatim, whatever shape the source uses. Unique per tenant where set, so an import upserts on it instead of matching on a name. Null for a company the shop itself created.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsList(id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimitMode?: CreditLimitMode, creditLimit?: number, balance?: number, balanceDue?: number, priceList?: string, shippingAdvice?: ShippingAdvice, locationCode?: string, deliveryBlock?: boolean, externalTeamId?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersOrganizationsList(
        paramsOrFirst?: { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimitMode?: CreditLimitMode, creditLimit?: number, balance?: number, balanceDue?: number, priceList?: string, shippingAdvice?: ShippingAdvice, locationCode?: string, deliveryBlock?: boolean, externalTeamId?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (CustomersOrganizationsListStatus)?, (string)?, (string)?, (CreditLimitMode)?, (number)?, (number)?, (number)?, (string)?, (ShippingAdvice)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimitMode?: CreditLimitMode, creditLimit?: number, balance?: number, balanceDue?: number, priceList?: string, shippingAdvice?: ShippingAdvice, locationCode?: string, deliveryBlock?: boolean, externalTeamId?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, name?: string, vatId?: string, branche?: string, customerNumber?: string, status?: CustomersOrganizationsListStatus, lifecycleStage?: string, paymentTerms?: string, creditLimitMode?: CreditLimitMode, creditLimit?: number, balance?: number, balanceDue?: number, priceList?: string, shippingAdvice?: ShippingAdvice, locationCode?: string, deliveryBlock?: boolean, externalTeamId?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
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
                creditLimitMode: rest[7] as CreditLimitMode,
                creditLimit: rest[8] as number,
                balance: rest[9] as number,
                balanceDue: rest[10] as number,
                priceList: rest[11] as string,
                shippingAdvice: rest[12] as ShippingAdvice,
                locationCode: rest[13] as string,
                deliveryBlock: rest[14] as boolean,
                externalTeamId: rest[15] as string,
                externalId: rest[16] as string,
                sourceSyncedAt: rest[17] as string,
                createdAt: rest[18] as string,
                updatedAt: rest[19] as string,
                limit: rest[20] as number,
                offset: rest[21] as number,
                order: rest[22] as string            
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
        const creditLimitMode = params.creditLimitMode;
        const creditLimit = params.creditLimit;
        const balance = params.balance;
        const balanceDue = params.balanceDue;
        const priceList = params.priceList;
        const shippingAdvice = params.shippingAdvice;
        const locationCode = params.locationCode;
        const deliveryBlock = params.deliveryBlock;
        const externalTeamId = params.externalTeamId;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
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
        if (typeof creditLimitMode !== 'undefined') {
            apiPayload['credit_limit_mode'] = creditLimitMode;
        }
        if (typeof creditLimit !== 'undefined') {
            apiPayload['credit_limit'] = creditLimit;
        }
        if (typeof balance !== 'undefined') {
            apiPayload['balance'] = balance;
        }
        if (typeof balanceDue !== 'undefined') {
            apiPayload['balance_due'] = balanceDue;
        }
        if (typeof priceList !== 'undefined') {
            apiPayload['price_list'] = priceList;
        }
        if (typeof shippingAdvice !== 'undefined') {
            apiPayload['shipping_advice'] = shippingAdvice;
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof deliveryBlock !== 'undefined') {
            apiPayload['delivery_block'] = deliveryBlock;
        }
        if (typeof externalTeamId !== 'undefined') {
            apiPayload['external_team_id'] = externalTeamId;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Registers a company as a customer. It is mirrored into platform auth as a team in the same call, so a failure of the identity service fails the create rather than leaving half a company behind. `payment_terms` and `lifecycle_stage` name values from this tenant's own sets, and a newly founded company inherits the tenant's `default_payment_terms` / `default_credit_limit` where the merchant set them. `name` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL), `external_team_id` (while external_team_id IS NOT NULL) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {number} params.balance - What this company owes right now, in the market's currency, as its accounting system last reported it — the figure a credit limit is compared against, and the reason the limit could check nothing on its own. A COPY, never a live read: this app asks no accounting system anything, so the number is exactly as old as `source_synced_at` says and the tenant's `credit_check_max_age_hours` setting says how old is too old. Null means no source has ever reported one, which is NOT a balance of zero — reading it as nothing owed is the mistake this column exists to prevent. A negative figure is a credit balance. Written by whatever imports the accounting figures. Send `source_synced_at` with it — a balance whose age nobody knows cannot be used for a credit decision at all.
     * @param {number} params.balanceDue - How much of `balance` is already OVERDUE, in the same currency and from the same report. The difference between warning a customer and blocking one: a company at its limit with nothing overdue is buying normally, and one below its limit with an unpaid invoice from March is not. Null means no source has reported it; zero means nothing is overdue, and the two are not the same answer. Written by the same import, and null rather than 0 where the source reported nothing.
     * @param {string} params.branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {string} params.createdAt - When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {number} params.creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Set exactly when `credit_limit_mode` is 'limited', and then above 0; null otherwise — read the mode, never the null, to know whether there is a ceiling. Required with `credit_limit_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {CreditLimitMode} params.creditLimitMode - Whether this company buys on credit, and how far: 'unset' (nobody decided — whoever checks credit applies its own fallback), 'limited' (open receivables up to `credit_limit`) or 'unlimited' (no ceiling, by decision). The mode is the decision; the amount exists only for 'limited'. A create naming neither this nor `credit_limit` inherits the market's `default_credit_limit_mode` (and, for 'limited', `default_credit_limit`). Leaving 'limited' without sending `credit_limit` clears the amount.
     * @param {string} params.customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} params.deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} params.lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} params.locationCode - Code of the warehouse this company's availability is computed against — plain text naming `locations.code` in the inventories app. A CODE and not a foreign key: ADR-0055 forbids the cross-app one, and nothing here checks it, so a code that names no location simply computes availability against the default. It belongs on the customer rather than in inventories because inventories models what is IN a warehouse and not which customer buys out of which — a company served from the northern depot is a fact about the company. Null means no warehouse was agreed. Not validated against the inventories app — ADR-0055 forbids the cross-app read, so a code that names no location is stored and computes availability against the default.
     * @param {string} params.paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} params.priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} params.settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {ShippingAdvice} params.shippingAdvice - Whether this company accepts a PART delivery: 'partial' ships what is available and lets the rest follow, 'complete' holds the whole order until every line can go at once. It decides whether a basket may offer a part quantity in the first place, so a checkout that ignores it promises a delivery date the warehouse cannot keep. Null means nothing was agreed and the store's own default applies. Only these two values — it is an ERP's own delivery flag, and there is no third way to ship an order. Null leaves it unagreed.
     * @param {OrganizationStatus} params.status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} params.vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsCreate(params: { name: string, balance?: number, balanceDue?: number, branche?: string, createdAt?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string }): Promise<Models.Organization>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Registers a company as a customer. It is mirrored into platform auth as a team in the same call, so a failure of the identity service fails the create rather than leaving half a company behind. `payment_terms` and `lifecycle_stage` name values from this tenant's own sets, and a newly founded company inherits the tenant's `default_payment_terms` / `default_credit_limit` where the merchant set them. `name` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL), `external_team_id` (while external_team_id IS NOT NULL) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {number} balance - What this company owes right now, in the market's currency, as its accounting system last reported it — the figure a credit limit is compared against, and the reason the limit could check nothing on its own. A COPY, never a live read: this app asks no accounting system anything, so the number is exactly as old as `source_synced_at` says and the tenant's `credit_check_max_age_hours` setting says how old is too old. Null means no source has ever reported one, which is NOT a balance of zero — reading it as nothing owed is the mistake this column exists to prevent. A negative figure is a credit balance. Written by whatever imports the accounting figures. Send `source_synced_at` with it — a balance whose age nobody knows cannot be used for a credit decision at all.
     * @param {number} balanceDue - How much of `balance` is already OVERDUE, in the same currency and from the same report. The difference between warning a customer and blocking one: a company at its limit with nothing overdue is buying normally, and one below its limit with an unpaid invoice from March is not. Null means no source has reported it; zero means nothing is overdue, and the two are not the same answer. Written by the same import, and null rather than 0 where the source reported nothing.
     * @param {string} branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {string} createdAt - When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {number} creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Set exactly when `credit_limit_mode` is 'limited', and then above 0; null otherwise — read the mode, never the null, to know whether there is a ceiling. Required with `credit_limit_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {CreditLimitMode} creditLimitMode - Whether this company buys on credit, and how far: 'unset' (nobody decided — whoever checks credit applies its own fallback), 'limited' (open receivables up to `credit_limit`) or 'unlimited' (no ceiling, by decision). The mode is the decision; the amount exists only for 'limited'. A create naming neither this nor `credit_limit` inherits the market's `default_credit_limit_mode` (and, for 'limited', `default_credit_limit`). Leaving 'limited' without sending `credit_limit` clears the amount.
     * @param {string} customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} locationCode - Code of the warehouse this company's availability is computed against — plain text naming `locations.code` in the inventories app. A CODE and not a foreign key: ADR-0055 forbids the cross-app one, and nothing here checks it, so a code that names no location simply computes availability against the default. It belongs on the customer rather than in inventories because inventories models what is IN a warehouse and not which customer buys out of which — a company served from the northern depot is a fact about the company. Null means no warehouse was agreed. Not validated against the inventories app — ADR-0055 forbids the cross-app read, so a code that names no location is stored and computes availability against the default.
     * @param {string} paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {ShippingAdvice} shippingAdvice - Whether this company accepts a PART delivery: 'partial' ships what is available and lets the rest follow, 'complete' holds the whole order until every line can go at once. It decides whether a basket may offer a part quantity in the first place, so a checkout that ignores it promises a delivery date the warehouse cannot keep. Null means nothing was agreed and the store's own default applies. Only these two values — it is an ERP's own delivery flag, and there is no third way to ship an order. Null leaves it unagreed.
     * @param {OrganizationStatus} status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsCreate(name: string, balance?: number, balanceDue?: number, branche?: string, createdAt?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string): Promise<Models.Organization>;
    customersOrganizationsCreate(
        paramsOrFirst: { name: string, balance?: number, balanceDue?: number, branche?: string, createdAt?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string } | string,
        ...rest: [(number)?, (number)?, (string)?, (string)?, (number)?, (CreditLimitMode)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (object)?, (ShippingAdvice)?, (OrganizationStatus)?, (string)?]    
    ): Promise<Models.Organization> {
        let params: { name: string, balance?: number, balanceDue?: number, branche?: string, createdAt?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, balance?: number, balanceDue?: number, branche?: string, createdAt?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                balance: rest[0] as number,
                balanceDue: rest[1] as number,
                branche: rest[2] as string,
                createdAt: rest[3] as string,
                creditLimit: rest[4] as number,
                creditLimitMode: rest[5] as CreditLimitMode,
                customerNumber: rest[6] as string,
                deliveryBlock: rest[7] as boolean,
                lifecycleStage: rest[8] as string,
                locationCode: rest[9] as string,
                paymentTerms: rest[10] as string,
                priceList: rest[11] as string,
                settings: rest[12] as object,
                shippingAdvice: rest[13] as ShippingAdvice,
                status: rest[14] as OrganizationStatus,
                vatId: rest[15] as string            
            };
        }
        
        const name = params.name;
        const balance = params.balance;
        const balanceDue = params.balanceDue;
        const branche = params.branche;
        const createdAt = params.createdAt;
        const creditLimit = params.creditLimit;
        const creditLimitMode = params.creditLimitMode;
        const customerNumber = params.customerNumber;
        const deliveryBlock = params.deliveryBlock;
        const lifecycleStage = params.lifecycleStage;
        const locationCode = params.locationCode;
        const paymentTerms = params.paymentTerms;
        const priceList = params.priceList;
        const settings = params.settings;
        const shippingAdvice = params.shippingAdvice;
        const status = params.status;
        const vatId = params.vatId;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/customers/organizations';
        const apiPayload: Payload = {};
        if (typeof balance !== 'undefined') {
            apiPayload['balance'] = balance;
        }
        if (typeof balanceDue !== 'undefined') {
            apiPayload['balance_due'] = balanceDue;
        }
        if (typeof branche !== 'undefined') {
            apiPayload['branche'] = branche;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof creditLimit !== 'undefined') {
            apiPayload['credit_limit'] = creditLimit;
        }
        if (typeof creditLimitMode !== 'undefined') {
            apiPayload['credit_limit_mode'] = creditLimitMode;
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
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
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
        if (typeof shippingAdvice !== 'undefined') {
            apiPayload['shipping_advice'] = shippingAdvice;
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Removes the company and its mirrored team. Its people are NOT deleted: they become standalone buyers who can still sign in and still order, which is the behaviour a merchant winding down a subsidiary wants. Deleting one takes every `contact_events`, `addresses`, `contact_points`, `organization_metrics` and `segment_members` row that points at it with it and clears `contacts.organization_id` rather than deleting those rows — the foreign keys decide, not this route.
     *
     * @param {string} params.id - The organization to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersOrganizationsDelete(params: { id: string }): Promise<{}>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. Removes the company and its mirrored team. Its people are NOT deleted: they become standalone buyers who can still sign in and still order, which is the behaviour a merchant winding down a subsidiary wants. Deleting one takes every `contact_events`, `addresses`, `contact_points`, `organization_metrics` and `segment_members` row that points at it with it and clears `contacts.organization_id` rather than deleting those rows — the foreign keys decide, not this route.
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
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. A partial update — send only what changes. `external_team_id` is mirror-managed and ignored if sent. Blocking a company here is what stops it trading; moving it through the pipeline is `lifecycle_stage`, and the two are independent. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL), `external_team_id` (while external_team_id IS NOT NULL) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.id - The organization to update.
     * @param {number} params.balance - What this company owes right now, in the market's currency, as its accounting system last reported it — the figure a credit limit is compared against, and the reason the limit could check nothing on its own. A COPY, never a live read: this app asks no accounting system anything, so the number is exactly as old as `source_synced_at` says and the tenant's `credit_check_max_age_hours` setting says how old is too old. Null means no source has ever reported one, which is NOT a balance of zero — reading it as nothing owed is the mistake this column exists to prevent. A negative figure is a credit balance. Written by whatever imports the accounting figures. Send `source_synced_at` with it — a balance whose age nobody knows cannot be used for a credit decision at all.
     * @param {number} params.balanceDue - How much of `balance` is already OVERDUE, in the same currency and from the same report. The difference between warning a customer and blocking one: a company at its limit with nothing overdue is buying normally, and one below its limit with an unpaid invoice from March is not. Null means no source has reported it; zero means nothing is overdue, and the two are not the same answer. Written by the same import, and null rather than 0 where the source reported nothing.
     * @param {string} params.branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {number} params.creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Set exactly when `credit_limit_mode` is 'limited', and then above 0; null otherwise — read the mode, never the null, to know whether there is a ceiling. Required with `credit_limit_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {CreditLimitMode} params.creditLimitMode - Whether this company buys on credit, and how far: 'unset' (nobody decided — whoever checks credit applies its own fallback), 'limited' (open receivables up to `credit_limit`) or 'unlimited' (no ceiling, by decision). The mode is the decision; the amount exists only for 'limited'. A create naming neither this nor `credit_limit` inherits the market's `default_credit_limit_mode` (and, for 'limited', `default_credit_limit`). Leaving 'limited' without sending `credit_limit` clears the amount.
     * @param {string} params.customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} params.deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} params.lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} params.locationCode - Code of the warehouse this company's availability is computed against — plain text naming `locations.code` in the inventories app. A CODE and not a foreign key: ADR-0055 forbids the cross-app one, and nothing here checks it, so a code that names no location simply computes availability against the default. It belongs on the customer rather than in inventories because inventories models what is IN a warehouse and not which customer buys out of which — a company served from the northern depot is a fact about the company. Null means no warehouse was agreed. Not validated against the inventories app — ADR-0055 forbids the cross-app read, so a code that names no location is stored and computes availability against the default.
     * @param {string} params.name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {string} params.paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} params.priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} params.settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {ShippingAdvice} params.shippingAdvice - Whether this company accepts a PART delivery: 'partial' ships what is available and lets the rest follow, 'complete' holds the whole order until every line can go at once. It decides whether a basket may offer a part quantity in the first place, so a checkout that ignores it promises a delivery date the warehouse cannot keep. Null means nothing was agreed and the store's own default applies. Only these two values — it is an ERP's own delivery flag, and there is no third way to ship an order. Null leaves it unagreed.
     * @param {OrganizationStatus} params.status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} params.vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     */
    customersOrganizationsUpdate(params: { id: string, balance?: number, balanceDue?: number, branche?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string }): Promise<Models.Organization>;
    /**
     * An organization is a buying COMPANY — the unit a contract, a credit limit, a price list and a payment term belong to, and the unit an order is placed on behalf of. It is not a household and not a person: the people are `contacts`, and a company with no contacts yet is a perfectly normal row. Every organization is mirrored into platform auth as a team, so a name written here is the name storefront authentication shows. A partial update — send only what changes. `external_team_id` is mirror-managed and ignored if sent. Blocking a company here is what stops it trading; moving it through the pipeline is `lifecycle_stage`, and the two are independent. Two rows of this tenant may not share `customer_number` (while customer_number IS NOT NULL), `external_team_id` (while external_team_id IS NOT NULL) or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} id - The organization to update.
     * @param {number} balance - What this company owes right now, in the market's currency, as its accounting system last reported it — the figure a credit limit is compared against, and the reason the limit could check nothing on its own. A COPY, never a live read: this app asks no accounting system anything, so the number is exactly as old as `source_synced_at` says and the tenant's `credit_check_max_age_hours` setting says how old is too old. Null means no source has ever reported one, which is NOT a balance of zero — reading it as nothing owed is the mistake this column exists to prevent. A negative figure is a credit balance. Written by whatever imports the accounting figures. Send `source_synced_at` with it — a balance whose age nobody knows cannot be used for a credit decision at all.
     * @param {number} balanceDue - How much of `balance` is already OVERDUE, in the same currency and from the same report. The difference between warning a customer and blocking one: a company at its limit with nothing overdue is buying normally, and one below its limit with an unpaid invoice from March is not. Null means no source has reported it; zero means nothing is overdue, and the two are not the same answer. Written by the same import, and null rather than 0 where the source reported nothing.
     * @param {string} branche - Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
     * @param {number} creditLimit - Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Set exactly when `credit_limit_mode` is 'limited', and then above 0; null otherwise — read the mode, never the null, to know whether there is a ceiling. Required with `credit_limit_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {CreditLimitMode} creditLimitMode - Whether this company buys on credit, and how far: 'unset' (nobody decided — whoever checks credit applies its own fallback), 'limited' (open receivables up to `credit_limit`) or 'unlimited' (no ceiling, by decision). The mode is the decision; the amount exists only for 'limited'. A create naming neither this nor `credit_limit` inherits the market's `default_credit_limit_mode` (and, for 'limited', `default_credit_limit`). Leaving 'limited' without sending `credit_limit` clears the amount.
     * @param {string} customerNumber - The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
     * @param {boolean} deliveryBlock - True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
     * @param {string} lifecycleStage - Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
     * @param {string} locationCode - Code of the warehouse this company's availability is computed against — plain text naming `locations.code` in the inventories app. A CODE and not a foreign key: ADR-0055 forbids the cross-app one, and nothing here checks it, so a code that names no location simply computes availability against the default. It belongs on the customer rather than in inventories because inventories models what is IN a warehouse and not which customer buys out of which — a company served from the northern depot is a fact about the company. Null means no warehouse was agreed. Not validated against the inventories app — ADR-0055 forbids the cross-app read, so a code that names no location is stored and computes availability against the default.
     * @param {string} name - Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
     * @param {string} paymentTerms - When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
     * @param {string} priceList - Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
     * @param {object} settings - Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
     * @param {ShippingAdvice} shippingAdvice - Whether this company accepts a PART delivery: 'partial' ships what is available and lets the rest follow, 'complete' holds the whole order until every line can go at once. It decides whether a basket may offer a part quantity in the first place, so a checkout that ignores it promises a delivery date the warehouse cannot keep. Null means nothing was agreed and the store's own default applies. Only these two values — it is an ERP's own delivery flag, and there is no third way to ship an order. Null leaves it unagreed.
     * @param {OrganizationStatus} status - ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
     * @param {string} vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Organization>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsUpdate(id: string, balance?: number, balanceDue?: number, branche?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string): Promise<Models.Organization>;
    customersOrganizationsUpdate(
        paramsOrFirst: { id: string, balance?: number, balanceDue?: number, branche?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string } | string,
        ...rest: [(number)?, (number)?, (string)?, (number)?, (CreditLimitMode)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (ShippingAdvice)?, (OrganizationStatus)?, (string)?]    
    ): Promise<Models.Organization> {
        let params: { id: string, balance?: number, balanceDue?: number, branche?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, balance?: number, balanceDue?: number, branche?: string, creditLimit?: number, creditLimitMode?: CreditLimitMode, customerNumber?: string, deliveryBlock?: boolean, lifecycleStage?: string, locationCode?: string, name?: string, paymentTerms?: string, priceList?: string, settings?: object, shippingAdvice?: ShippingAdvice, status?: OrganizationStatus, vatId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                balance: rest[0] as number,
                balanceDue: rest[1] as number,
                branche: rest[2] as string,
                creditLimit: rest[3] as number,
                creditLimitMode: rest[4] as CreditLimitMode,
                customerNumber: rest[5] as string,
                deliveryBlock: rest[6] as boolean,
                lifecycleStage: rest[7] as string,
                locationCode: rest[8] as string,
                name: rest[9] as string,
                paymentTerms: rest[10] as string,
                priceList: rest[11] as string,
                settings: rest[12] as object,
                shippingAdvice: rest[13] as ShippingAdvice,
                status: rest[14] as OrganizationStatus,
                vatId: rest[15] as string            
            };
        }
        
        const id = params.id;
        const balance = params.balance;
        const balanceDue = params.balanceDue;
        const branche = params.branche;
        const creditLimit = params.creditLimit;
        const creditLimitMode = params.creditLimitMode;
        const customerNumber = params.customerNumber;
        const deliveryBlock = params.deliveryBlock;
        const lifecycleStage = params.lifecycleStage;
        const locationCode = params.locationCode;
        const name = params.name;
        const paymentTerms = params.paymentTerms;
        const priceList = params.priceList;
        const settings = params.settings;
        const shippingAdvice = params.shippingAdvice;
        const status = params.status;
        const vatId = params.vatId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/organizations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof balance !== 'undefined') {
            apiPayload['balance'] = balance;
        }
        if (typeof balanceDue !== 'undefined') {
            apiPayload['balance_due'] = balanceDue;
        }
        if (typeof branche !== 'undefined') {
            apiPayload['branche'] = branche;
        }
        if (typeof creditLimit !== 'undefined') {
            apiPayload['credit_limit'] = creditLimit;
        }
        if (typeof creditLimitMode !== 'undefined') {
            apiPayload['credit_limit_mode'] = creditLimitMode;
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
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
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
        if (typeof shippingAdvice !== 'undefined') {
            apiPayload['shipping_advice'] = shippingAdvice;
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
