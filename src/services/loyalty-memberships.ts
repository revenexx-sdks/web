import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { LoyaltyMembershipsCreateStatus } from '../enums/loyalty-memberships-create-status';

export class LoyaltyMemberships {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?program_id=`, `?contact_id=`, `?organization_id=`, `?tier_id=` or `?tier_code=` (what the audiences rule reads), `?status=active`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.programId - Keep only rows whose `program_id` equals this.
     * @param {string} params.holder - Keep only rows whose `holder` equals this.
     * @param {string} params.holderKey - Keep only rows whose `holder_key` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.tierId - Keep only rows whose `tier_id` equals this.
     * @param {string} params.tierCode - Keep only rows whose `tier_code` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.pointsBalance - Keep only rows whose `points_balance` equals this.
     * @param {string} params.pointsPeriod - Keep only rows whose `points_period` equals this.
     * @param {string} params.pointsLifetime - Keep only rows whose `points_lifetime` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyMembershipsList(params?: { limit?: number, offset?: number, order?: string, id?: string, programId?: string, holder?: string, holderKey?: string, contactId?: string, organizationId?: string, tierId?: string, tierCode?: string, status?: string, pointsBalance?: string, pointsPeriod?: string, pointsLifetime?: string, market?: string, externalId?: string }): Promise<{}>;
    /**
     * Filter `?program_id=`, `?contact_id=`, `?organization_id=`, `?tier_id=` or `?tier_code=` (what the audiences rule reads), `?status=active`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} programId - Keep only rows whose `program_id` equals this.
     * @param {string} holder - Keep only rows whose `holder` equals this.
     * @param {string} holderKey - Keep only rows whose `holder_key` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} tierId - Keep only rows whose `tier_id` equals this.
     * @param {string} tierCode - Keep only rows whose `tier_code` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} pointsBalance - Keep only rows whose `points_balance` equals this.
     * @param {string} pointsPeriod - Keep only rows whose `points_period` equals this.
     * @param {string} pointsLifetime - Keep only rows whose `points_lifetime` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsList(limit?: number, offset?: number, order?: string, id?: string, programId?: string, holder?: string, holderKey?: string, contactId?: string, organizationId?: string, tierId?: string, tierCode?: string, status?: string, pointsBalance?: string, pointsPeriod?: string, pointsLifetime?: string, market?: string, externalId?: string): Promise<{}>;
    loyaltyMembershipsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, programId?: string, holder?: string, holderKey?: string, contactId?: string, organizationId?: string, tierId?: string, tierCode?: string, status?: string, pointsBalance?: string, pointsPeriod?: string, pointsLifetime?: string, market?: string, externalId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, programId?: string, holder?: string, holderKey?: string, contactId?: string, organizationId?: string, tierId?: string, tierCode?: string, status?: string, pointsBalance?: string, pointsPeriod?: string, pointsLifetime?: string, market?: string, externalId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, programId?: string, holder?: string, holderKey?: string, contactId?: string, organizationId?: string, tierId?: string, tierCode?: string, status?: string, pointsBalance?: string, pointsPeriod?: string, pointsLifetime?: string, market?: string, externalId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                programId: rest[3] as string,
                holder: rest[4] as string,
                holderKey: rest[5] as string,
                contactId: rest[6] as string,
                organizationId: rest[7] as string,
                tierId: rest[8] as string,
                tierCode: rest[9] as string,
                status: rest[10] as string,
                pointsBalance: rest[11] as string,
                pointsPeriod: rest[12] as string,
                pointsLifetime: rest[13] as string,
                market: rest[14] as string,
                externalId: rest[15] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const programId = params.programId;
        const holder = params.holder;
        const holderKey = params.holderKey;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const tierId = params.tierId;
        const tierCode = params.tierCode;
        const status = params.status;
        const pointsBalance = params.pointsBalance;
        const pointsPeriod = params.pointsPeriod;
        const pointsLifetime = params.pointsLifetime;
        const market = params.market;
        const externalId = params.externalId;


        const apiPath = '/v1/loyalty/memberships';
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
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
        }
        if (typeof holder !== 'undefined') {
            apiPayload['holder'] = holder;
        }
        if (typeof holderKey !== 'undefined') {
            apiPayload['holder_key'] = holderKey;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof tierId !== 'undefined') {
            apiPayload['tier_id'] = tierId;
        }
        if (typeof tierCode !== 'undefined') {
            apiPayload['tier_code'] = tierCode;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof pointsBalance !== 'undefined') {
            apiPayload['points_balance'] = pointsBalance;
        }
        if (typeof pointsPeriod !== 'undefined') {
            apiPayload['points_period'] = pointsPeriod;
        }
        if (typeof pointsLifetime !== 'undefined') {
            apiPayload['points_lifetime'] = pointsLifetime;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
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
     * @param {string} params.programId - The programme this row belongs to.
     * @param {string} params.contactId - The person, as customers knows them.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} params.market - The market the member joined in, when known.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.organizationId - The company, as customers knows it.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {LoyaltyMembershipsCreateStatus} params.status - `active`, `paused` (nothing earned or redeemed) or `ended` (final).
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyMembership>}
     */
    loyaltyMembershipsCreate(params: { programId: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus }): Promise<Models.LoyaltyMembership>;
    /**
     *
     * @param {string} programId - The programme this row belongs to.
     * @param {string} contactId - The person, as customers knows them.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} market - The market the member joined in, when known.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} organizationId - The company, as customers knows it.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {LoyaltyMembershipsCreateStatus} status - `active`, `paused` (nothing earned or redeemed) or `ended` (final).
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyMembership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsCreate(programId: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus): Promise<Models.LoyaltyMembership>;
    loyaltyMembershipsCreate(
        paramsOrFirst: { programId: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus } | string,
        ...rest: [(string)?, (string)?, (any)?, (string)?, (any)?, (string)?, (any)?, (string)?, (LoyaltyMembershipsCreateStatus)?]    
    ): Promise<Models.LoyaltyMembership> {
        let params: { programId: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { programId: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus };
        } else {
            params = {
                programId: paramsOrFirst as string,
                contactId: rest[0] as string,
                externalId: rest[1] as string,
                externalRefs: rest[2] as any,
                market: rest[3] as string,
                metadata: rest[4] as any,
                organizationId: rest[5] as string,
                sourceData: rest[6] as any,
                sourceSyncedAt: rest[7] as string,
                status: rest[8] as LoyaltyMembershipsCreateStatus            
            };
        }
        
        const programId = params.programId;
        const contactId = params.contactId;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const market = params.market;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const status = params.status;

        if (typeof programId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "programId"');
        }

        const apiPath = '/v1/loyalty/memberships';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * What the storefront account page and cart perk hint, the loyalty_tier condition in promotions and the loyalty_tier rule in audiences ask. A contact counts together with its company. Only active memberships of active programmes answer; `tier_codes` lists every tier held.
     *
     * @param {string} params.contactId - The person. Their company is looked up with them.
     * @param {string} params.organizationId - The company.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyMembershipsLookup(params?: { contactId?: string, organizationId?: string }): Promise<{}>;
    /**
     * What the storefront account page and cart perk hint, the loyalty_tier condition in promotions and the loyalty_tier rule in audiences ask. A contact counts together with its company. Only active memberships of active programmes answer; `tier_codes` lists every tier held.
     *
     * @param {string} contactId - The person. Their company is looked up with them.
     * @param {string} organizationId - The company.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsLookup(contactId?: string, organizationId?: string): Promise<{}>;
    loyaltyMembershipsLookup(
        paramsOrFirst?: { contactId?: string, organizationId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { contactId?: string, organizationId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId?: string, organizationId?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                organizationId: rest[0] as string            
            };
        }
        
        const contactId = params.contactId;
        const organizationId = params.organizationId;


        const apiPath = '/v1/loyalty/memberships/lookup';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyMembershipsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsDelete(id: string): Promise<{}>;
    loyaltyMembershipsDelete(
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

        const apiPath = '/v1/loyalty/memberships/{id}'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyMembership>}
     */
    loyaltyMembershipsGet(params: { id: string }): Promise<Models.LoyaltyMembership>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyMembership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsGet(id: string): Promise<Models.LoyaltyMembership>;
    loyaltyMembershipsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.LoyaltyMembership> {
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

        const apiPath = '/v1/loyalty/memberships/{id}'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.contactId - The person, as customers knows them.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} params.market - The market the member joined in, when known.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.organizationId - The company, as customers knows it.
     * @param {string} params.programId - The programme this row belongs to.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {LoyaltyMembershipsCreateStatus} params.status - `active`, `paused` (nothing earned or redeemed) or `ended` (final).
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyMembership>}
     */
    loyaltyMembershipsUpdate(params: { id: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, programId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus }): Promise<Models.LoyaltyMembership>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - The person, as customers knows them.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} market - The market the member joined in, when known.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} organizationId - The company, as customers knows it.
     * @param {string} programId - The programme this row belongs to.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {LoyaltyMembershipsCreateStatus} status - `active`, `paused` (nothing earned or redeemed) or `ended` (final).
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyMembership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsUpdate(id: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, programId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus): Promise<Models.LoyaltyMembership>;
    loyaltyMembershipsUpdate(
        paramsOrFirst: { id: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, programId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus } | string,
        ...rest: [(string)?, (string)?, (any)?, (string)?, (any)?, (string)?, (string)?, (any)?, (string)?, (LoyaltyMembershipsCreateStatus)?]    
    ): Promise<Models.LoyaltyMembership> {
        let params: { id: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, programId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, externalId?: string, externalRefs?: any, market?: string, metadata?: any, organizationId?: string, programId?: string, sourceData?: any, sourceSyncedAt?: string, status?: LoyaltyMembershipsCreateStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                externalId: rest[1] as string,
                externalRefs: rest[2] as any,
                market: rest[3] as string,
                metadata: rest[4] as any,
                organizationId: rest[5] as string,
                programId: rest[6] as string,
                sourceData: rest[7] as any,
                sourceSyncedAt: rest[8] as string,
                status: rest[9] as LoyaltyMembershipsCreateStatus            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const market = params.market;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const programId = params.programId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/memberships/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * A credit or a debit with a reason. A debit never takes the balance below zero. A `key` makes a retry book once.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {number} params.points - Positive to credit, negative to debit.
     * @param {string} params.reason - 
     * @param {string} params.key - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyMembershipsAdjust(params: { id: string, points: number, reason: string, key?: string }): Promise<{}>;
    /**
     * A credit or a debit with a reason. A debit never takes the balance below zero. A `key` makes a retry book once.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {number} points - Positive to credit, negative to debit.
     * @param {string} reason - 
     * @param {string} key - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsAdjust(id: string, points: number, reason: string, key?: string): Promise<{}>;
    loyaltyMembershipsAdjust(
        paramsOrFirst: { id: string, points: number, reason: string, key?: string } | string,
        ...rest: [(number)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, points: number, reason: string, key?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, points: number, reason: string, key?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                points: rest[0] as number,
                reason: rest[1] as string,
                key: rest[2] as string            
            };
        }
        
        const id = params.id;
        const points = params.points;
        const reason = params.reason;
        const key = params.key;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof points === 'undefined') {
            throw new RevenexxException('Missing required parameter: "points"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/loyalty/memberships/{id}/adjust'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof points !== 'undefined') {
            apiPayload['points'] = points;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * Every tier of the programme, lowest first, with how far the member has come towards it: points of this period for a points programme, this year's turnover through the agreement for a turnover bonus. Reached tiers say so, the next says how much is missing. No tiers, or no agreement this year, answers no rows.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyMembershipsProgress(params: { id: string }): Promise<{}>;
    /**
     * Every tier of the programme, lowest first, with how far the member has come towards it: points of this period for a points programme, this year's turnover through the agreement for a turnover bonus. Reached tiers say so, the next says how much is missing. No tiers, or no agreement this year, answers no rows.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsProgress(id: string): Promise<{}>;
    loyaltyMembershipsProgress(
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

        const apiPath = '/v1/loyalty/memberships/{id}/progress'.replace('{id}', id);
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
     * Answers the active code of the membership, making one on first ask. A company membership names the person who refers with `contact_id`.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.contactId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferralCode>}
     */
    loyaltyMembershipsReferralCode(params: { id: string, contactId?: string }): Promise<Models.ReferralCode>;
    /**
     * Answers the active code of the membership, making one on first ask. A company membership names the person who refers with `contact_id`.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferralCode>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyMembershipsReferralCode(id: string, contactId?: string): Promise<Models.ReferralCode>;
    loyaltyMembershipsReferralCode(
        paramsOrFirst: { id: string, contactId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ReferralCode> {
        let params: { id: string, contactId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/memberships/{id}/referral-code'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
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
