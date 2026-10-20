import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { LoyaltyProgramsCreateKind } from '../enums/loyalty-programs-create-kind';
import { Holder } from '../enums/holder';
import { Period } from '../enums/period';

export class LoyaltyPrograms {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every programme of this tenant. Filter `?kind=turnover_bonus` for the B2B bonus programmes, `?active=true` for those running.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.holder - Keep only rows whose `holder` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.period - Keep only rows whose `period` equals this.
     * @param {string} params.autoEnroll - Keep only rows whose `auto_enroll` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @param {string} params.memberCount - Keep only rows whose `member_count` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @param {string} params.deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} params.deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} params.trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} params.purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyProgramsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, holder?: string, currency?: string, period?: string, autoEnroll?: string, active?: string, memberCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string }): Promise<{}>;
    /**
     * Every programme of this tenant. Filter `?kind=turnover_bonus` for the B2B bonus programmes, `?active=true` for those running.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} holder - Keep only rows whose `holder` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} period - Keep only rows whose `period` equals this.
     * @param {string} autoEnroll - Keep only rows whose `auto_enroll` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @param {string} memberCount - Keep only rows whose `member_count` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @param {string} deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, holder?: string, currency?: string, period?: string, autoEnroll?: string, active?: string, memberCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string): Promise<{}>;
    loyaltyProgramsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, holder?: string, currency?: string, period?: string, autoEnroll?: string, active?: string, memberCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, holder?: string, currency?: string, period?: string, autoEnroll?: string, active?: string, memberCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, holder?: string, currency?: string, period?: string, autoEnroll?: string, active?: string, memberCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                code: rest[4] as string,
                description: rest[5] as string,
                kind: rest[6] as string,
                holder: rest[7] as string,
                currency: rest[8] as string,
                period: rest[9] as string,
                autoEnroll: rest[10] as string,
                active: rest[11] as string,
                memberCount: rest[12] as string,
                externalId: rest[13] as string,
                deletedBy: rest[14] as string,
                deletedById: rest[15] as string,
                trashBatch: rest[16] as string,
                purgeBlockedReason: rest[17] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const code = params.code;
        const description = params.description;
        const kind = params.kind;
        const holder = params.holder;
        const currency = params.currency;
        const period = params.period;
        const autoEnroll = params.autoEnroll;
        const active = params.active;
        const memberCount = params.memberCount;
        const externalId = params.externalId;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const trashBatch = params.trashBatch;
        const purgeBlockedReason = params.purgeBlockedReason;


        const apiPath = '/v1/loyalty/programs';
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
        if (typeof trashed !== 'undefined') {
            apiPayload['trashed'] = trashed;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof holder !== 'undefined') {
            apiPayload['holder'] = holder;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof period !== 'undefined') {
            apiPayload['period'] = period;
        }
        if (typeof autoEnroll !== 'undefined') {
            apiPayload['auto_enroll'] = autoEnroll;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof memberCount !== 'undefined') {
            apiPayload['member_count'] = memberCount;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof deletedBy !== 'undefined') {
            apiPayload['deleted_by'] = deletedBy;
        }
        if (typeof deletedById !== 'undefined') {
            apiPayload['deleted_by_id'] = deletedById;
        }
        if (typeof trashBatch !== 'undefined') {
            apiPayload['trash_batch'] = trashBatch;
        }
        if (typeof purgeBlockedReason !== 'undefined') {
            apiPayload['purge_blocked_reason'] = purgeBlockedReason;
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
     * @param {string} params.code - The short identifier of the programme, unique per tenant, e.g. premium or club.
     * @param {LoyaltyProgramsCreateKind} params.kind - `points` (points per order, rewards) or `turnover_bonus` (a yearly bonus agreement per company). Fixed once created.
     * @param {any} params.labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {boolean} params.autoEnroll - When on, a customer becomes a member with their first credited order (and a contact on registration), without being enrolled by hand.
     * @param {string} params.currency - The currency thresholds and bonuses are stated in.
     * @param {string} params.description - What it is, in the merchant own words.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Holder} params.holder - Who collects: `contact` (one person) or `organization` (a company whose orders all count together). A turnover bonus is always `organization`. Fixed once created.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {Period} params.period - The window tiers are measured over: `calendar_year` or `rolling_12m`. A turnover bonus runs per calendar year.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyProgram>}
     */
    loyaltyProgramsCreate(params: { code: string, kind: LoyaltyProgramsCreateKind, labels: any, active?: boolean, autoEnroll?: boolean, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string }): Promise<Models.LoyaltyProgram>;
    /**
     *
     * @param {string} code - The short identifier of the programme, unique per tenant, e.g. premium or club.
     * @param {LoyaltyProgramsCreateKind} kind - `points` (points per order, rewards) or `turnover_bonus` (a yearly bonus agreement per company). Fixed once created.
     * @param {any} labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {boolean} autoEnroll - When on, a customer becomes a member with their first credited order (and a contact on registration), without being enrolled by hand.
     * @param {string} currency - The currency thresholds and bonuses are stated in.
     * @param {string} description - What it is, in the merchant own words.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Holder} holder - Who collects: `contact` (one person) or `organization` (a company whose orders all count together). A turnover bonus is always `organization`. Fixed once created.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {Period} period - The window tiers are measured over: `calendar_year` or `rolling_12m`. A turnover bonus runs per calendar year.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyProgram>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsCreate(code: string, kind: LoyaltyProgramsCreateKind, labels: any, active?: boolean, autoEnroll?: boolean, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string): Promise<Models.LoyaltyProgram>;
    loyaltyProgramsCreate(
        paramsOrFirst: { code: string, kind: LoyaltyProgramsCreateKind, labels: any, active?: boolean, autoEnroll?: boolean, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string } | string,
        ...rest: [(LoyaltyProgramsCreateKind)?, (any)?, (boolean)?, (boolean)?, (string)?, (string)?, (string)?, (any)?, (Holder)?, (any)?, (Period)?, (any)?, (string)?]    
    ): Promise<Models.LoyaltyProgram> {
        let params: { code: string, kind: LoyaltyProgramsCreateKind, labels: any, active?: boolean, autoEnroll?: boolean, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, kind: LoyaltyProgramsCreateKind, labels: any, active?: boolean, autoEnroll?: boolean, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                kind: rest[0] as LoyaltyProgramsCreateKind,
                labels: rest[1] as any,
                active: rest[2] as boolean,
                autoEnroll: rest[3] as boolean,
                currency: rest[4] as string,
                description: rest[5] as string,
                externalId: rest[6] as string,
                externalRefs: rest[7] as any,
                holder: rest[8] as Holder,
                metadata: rest[9] as any,
                period: rest[10] as Period,
                sourceData: rest[11] as any,
                sourceSyncedAt: rest[12] as string            
            };
        }
        
        const code = params.code;
        const kind = params.kind;
        const labels = params.labels;
        const active = params.active;
        const autoEnroll = params.autoEnroll;
        const currency = params.currency;
        const description = params.description;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const holder = params.holder;
        const metadata = params.metadata;
        const period = params.period;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof kind === 'undefined') {
            throw new RevenexxException('Missing required parameter: "kind"');
        }
        if (typeof labels === 'undefined') {
            throw new RevenexxException('Missing required parameter: "labels"');
        }

        const apiPath = '/v1/loyalty/programs';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof autoEnroll !== 'undefined') {
            apiPayload['auto_enroll'] = autoEnroll;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof holder !== 'undefined') {
            apiPayload['holder'] = holder;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof period !== 'undefined') {
            apiPayload['period'] = period;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * Every programme in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    loyaltyProgramsEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/loyalty/programs/trash/empty';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * What the nightly purge does, callable by hand: every programme in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyProgramsPurge(): Promise<{}> {

        const apiPath = '/v1/loyalty/programs/trash/purge';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The first DELETE moves the programme into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A programme with members or agreements is refused (`trash_blocked`, blocker `has_members`) — deactivate it instead. Its tiers and rewards go into the trash with it and come back with it. A DELETE on a programme already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyProgramsDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the programme into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A programme with members or agreements is refused (`trash_blocked`, blocker `has_members`) — deactivate it instead. Its tiers and rewards go into the trash with it and come back with it. A DELETE on a programme already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsDelete(id: string): Promise<{}>;
    loyaltyProgramsDelete(
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

        const apiPath = '/v1/loyalty/programs/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.LoyaltyProgram>}
     */
    loyaltyProgramsGet(params: { id: string }): Promise<Models.LoyaltyProgram>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyProgram>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsGet(id: string): Promise<Models.LoyaltyProgram>;
    loyaltyProgramsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.LoyaltyProgram> {
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

        const apiPath = '/v1/loyalty/programs/{id}'.replace('{id}', id);
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
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {boolean} params.autoEnroll - When on, a customer becomes a member with their first credited order (and a contact on registration), without being enrolled by hand.
     * @param {string} params.code - The short identifier of the programme, unique per tenant, e.g. premium or club.
     * @param {string} params.currency - The currency thresholds and bonuses are stated in.
     * @param {string} params.description - What it is, in the merchant own words.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Holder} params.holder - Who collects: `contact` (one person) or `organization` (a company whose orders all count together). A turnover bonus is always `organization`. Fixed once created.
     * @param {LoyaltyProgramsCreateKind} params.kind - `points` (points per order, rewards) or `turnover_bonus` (a yearly bonus agreement per company). Fixed once created.
     * @param {any} params.labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {Period} params.period - The window tiers are measured over: `calendar_year` or `rolling_12m`. A turnover bonus runs per calendar year.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyProgram>}
     */
    loyaltyProgramsUpdate(params: { id: string, active?: boolean, autoEnroll?: boolean, code?: string, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, kind?: LoyaltyProgramsCreateKind, labels?: any, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string }): Promise<Models.LoyaltyProgram>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {boolean} autoEnroll - When on, a customer becomes a member with their first credited order (and a contact on registration), without being enrolled by hand.
     * @param {string} code - The short identifier of the programme, unique per tenant, e.g. premium or club.
     * @param {string} currency - The currency thresholds and bonuses are stated in.
     * @param {string} description - What it is, in the merchant own words.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Holder} holder - Who collects: `contact` (one person) or `organization` (a company whose orders all count together). A turnover bonus is always `organization`. Fixed once created.
     * @param {LoyaltyProgramsCreateKind} kind - `points` (points per order, rewards) or `turnover_bonus` (a yearly bonus agreement per company). Fixed once created.
     * @param {any} labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {Period} period - The window tiers are measured over: `calendar_year` or `rolling_12m`. A turnover bonus runs per calendar year.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyProgram>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsUpdate(id: string, active?: boolean, autoEnroll?: boolean, code?: string, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, kind?: LoyaltyProgramsCreateKind, labels?: any, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string): Promise<Models.LoyaltyProgram>;
    loyaltyProgramsUpdate(
        paramsOrFirst: { id: string, active?: boolean, autoEnroll?: boolean, code?: string, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, kind?: LoyaltyProgramsCreateKind, labels?: any, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string } | string,
        ...rest: [(boolean)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (any)?, (Holder)?, (LoyaltyProgramsCreateKind)?, (any)?, (any)?, (Period)?, (any)?, (string)?]    
    ): Promise<Models.LoyaltyProgram> {
        let params: { id: string, active?: boolean, autoEnroll?: boolean, code?: string, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, kind?: LoyaltyProgramsCreateKind, labels?: any, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, autoEnroll?: boolean, code?: string, currency?: string, description?: string, externalId?: string, externalRefs?: any, holder?: Holder, kind?: LoyaltyProgramsCreateKind, labels?: any, metadata?: any, period?: Period, sourceData?: any, sourceSyncedAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                autoEnroll: rest[1] as boolean,
                code: rest[2] as string,
                currency: rest[3] as string,
                description: rest[4] as string,
                externalId: rest[5] as string,
                externalRefs: rest[6] as any,
                holder: rest[7] as Holder,
                kind: rest[8] as LoyaltyProgramsCreateKind,
                labels: rest[9] as any,
                metadata: rest[10] as any,
                period: rest[11] as Period,
                sourceData: rest[12] as any,
                sourceSyncedAt: rest[13] as string            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const autoEnroll = params.autoEnroll;
        const code = params.code;
        const currency = params.currency;
        const description = params.description;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const holder = params.holder;
        const kind = params.kind;
        const labels = params.labels;
        const metadata = params.metadata;
        const period = params.period;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/programs/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof autoEnroll !== 'undefined') {
            apiPayload['auto_enroll'] = autoEnroll;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof holder !== 'undefined') {
            apiPayload['holder'] = holder;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof period !== 'undefined') {
            apiPayload['period'] = period;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * Active members per tier, the highest tier first and members without a tier last, each with its share; the total is a `footer` row. No active member answers no rows.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyProgramsFigures(params: { id: string }): Promise<{}>;
    /**
     * Active members per tier, the highest tier first and members without a tier last, each with its share; the total is a `footer` row. No active member answers no rows.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsFigures(id: string): Promise<{}>;
    loyaltyProgramsFigures(
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

        const apiPath = '/v1/loyalty/programs/{id}/figures'.replace('{id}', id);
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
     * Opens one agreement per active member for the year (default: this year), each with its base derived from last year. Members who already have one keep it.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.period - The calendar year, e.g. 2027.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyProgramsOpenPeriod(params: { id: string, period?: string }): Promise<{}>;
    /**
     * Opens one agreement per active member for the year (default: this year), each with its base derived from last year. Members who already have one keep it.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} period - The calendar year, e.g. 2027.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsOpenPeriod(id: string, period?: string): Promise<{}>;
    loyaltyProgramsOpenPeriod(
        paramsOrFirst: { id: string, period?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, period?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, period?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                period: rest[0] as string            
            };
        }
        
        const id = params.id;
        const period = params.period;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/programs/{id}/open-period'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof period !== 'undefined') {
            apiPayload['period'] = period;
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
     * Clears the trash marks on the programme. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    loyaltyProgramsRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the programme. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyProgramsRestore(id: string): Promise<Models.TrashRestoreResult>;
    loyaltyProgramsRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TrashRestoreResult> {
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

        const apiPath = '/v1/loyalty/programs/{id}/restore'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
