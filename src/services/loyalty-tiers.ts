import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { ThresholdKind } from '../enums/threshold-kind';

export class LoyaltyTiers {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?program_id=` for one programme, `?code=` to find a tier by the code a promotion or an audience names.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.programId - Keep only rows whose `program_id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @param {string} params.thresholdKind - Keep only rows whose `threshold_kind` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @param {string} params.deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} params.deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} params.trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} params.purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyTiersList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, position?: string, thresholdKind?: string, active?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string }): Promise<{}>;
    /**
     * Filter `?program_id=` for one programme, `?code=` to find a tier by the code a promotion or an audience names.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} programId - Keep only rows whose `program_id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @param {string} thresholdKind - Keep only rows whose `threshold_kind` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @param {string} deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyTiersList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, position?: string, thresholdKind?: string, active?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string): Promise<{}>;
    loyaltyTiersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, position?: string, thresholdKind?: string, active?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, position?: string, thresholdKind?: string, active?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, position?: string, thresholdKind?: string, active?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                programId: rest[4] as string,
                code: rest[5] as string,
                position: rest[6] as string,
                thresholdKind: rest[7] as string,
                active: rest[8] as string,
                externalId: rest[9] as string,
                deletedBy: rest[10] as string,
                deletedById: rest[11] as string,
                trashBatch: rest[12] as string,
                purgeBlockedReason: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const programId = params.programId;
        const code = params.code;
        const position = params.position;
        const thresholdKind = params.thresholdKind;
        const active = params.active;
        const externalId = params.externalId;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const trashBatch = params.trashBatch;
        const purgeBlockedReason = params.purgeBlockedReason;


        const apiPath = '/v1/loyalty/tiers';
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
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof thresholdKind !== 'undefined') {
            apiPayload['threshold_kind'] = thresholdKind;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
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
     * @param {string} params.code - The tier code, unique within the programme. This is what a promotion condition and an audience rule name.
     * @param {any} params.labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {string} params.programId - The programme this row belongs to.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {number} params.bonusPercent - Turnover bonus: the percentage of the whole year turnover paid at this tier. Not cumulative.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} params.perks - What the tier stands for, as a list of `{ de, en }` texts the storefront shows. The perk itself is a promotion.
     * @param {number} params.pointsMultiplier - Points programme: earnings are multiplied by this while a member holds the tier.
     * @param {number} params.position - Order among tiers with the same threshold.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {ThresholdKind} params.thresholdKind - `absolute`: points earned in the period, or turnover in the programme currency. `relative_to_base`: a percentage of an agreement base turnover (100 = last year reached).
     * @param {number} params.thresholdValue - The threshold. 0 makes an entry tier every member holds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyTier>}
     */
    loyaltyTiersCreate(params: { code: string, labels: any, programId: string, active?: boolean, bonusPercent?: number, externalId?: string, externalRefs?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number }): Promise<Models.LoyaltyTier>;
    /**
     *
     * @param {string} code - The tier code, unique within the programme. This is what a promotion condition and an audience rule name.
     * @param {any} labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {string} programId - The programme this row belongs to.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {number} bonusPercent - Turnover bonus: the percentage of the whole year turnover paid at this tier. Not cumulative.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} perks - What the tier stands for, as a list of `{ de, en }` texts the storefront shows. The perk itself is a promotion.
     * @param {number} pointsMultiplier - Points programme: earnings are multiplied by this while a member holds the tier.
     * @param {number} position - Order among tiers with the same threshold.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {ThresholdKind} thresholdKind - `absolute`: points earned in the period, or turnover in the programme currency. `relative_to_base`: a percentage of an agreement base turnover (100 = last year reached).
     * @param {number} thresholdValue - The threshold. 0 makes an entry tier every member holds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyTiersCreate(code: string, labels: any, programId: string, active?: boolean, bonusPercent?: number, externalId?: string, externalRefs?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number): Promise<Models.LoyaltyTier>;
    loyaltyTiersCreate(
        paramsOrFirst: { code: string, labels: any, programId: string, active?: boolean, bonusPercent?: number, externalId?: string, externalRefs?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number } | string,
        ...rest: [(any)?, (string)?, (boolean)?, (number)?, (string)?, (any)?, (any)?, (any)?, (number)?, (number)?, (any)?, (string)?, (ThresholdKind)?, (number)?]    
    ): Promise<Models.LoyaltyTier> {
        let params: { code: string, labels: any, programId: string, active?: boolean, bonusPercent?: number, externalId?: string, externalRefs?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, labels: any, programId: string, active?: boolean, bonusPercent?: number, externalId?: string, externalRefs?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                labels: rest[0] as any,
                programId: rest[1] as string,
                active: rest[2] as boolean,
                bonusPercent: rest[3] as number,
                externalId: rest[4] as string,
                externalRefs: rest[5] as any,
                metadata: rest[6] as any,
                perks: rest[7] as any,
                pointsMultiplier: rest[8] as number,
                position: rest[9] as number,
                sourceData: rest[10] as any,
                sourceSyncedAt: rest[11] as string,
                thresholdKind: rest[12] as ThresholdKind,
                thresholdValue: rest[13] as number            
            };
        }
        
        const code = params.code;
        const labels = params.labels;
        const programId = params.programId;
        const active = params.active;
        const bonusPercent = params.bonusPercent;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const perks = params.perks;
        const pointsMultiplier = params.pointsMultiplier;
        const position = params.position;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const thresholdKind = params.thresholdKind;
        const thresholdValue = params.thresholdValue;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof labels === 'undefined') {
            throw new RevenexxException('Missing required parameter: "labels"');
        }
        if (typeof programId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "programId"');
        }

        const apiPath = '/v1/loyalty/tiers';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof bonusPercent !== 'undefined') {
            apiPayload['bonus_percent'] = bonusPercent;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof perks !== 'undefined') {
            apiPayload['perks'] = perks;
        }
        if (typeof pointsMultiplier !== 'undefined') {
            apiPayload['points_multiplier'] = pointsMultiplier;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
        if (typeof thresholdKind !== 'undefined') {
            apiPayload['threshold_kind'] = thresholdKind;
        }
        if (typeof thresholdValue !== 'undefined') {
            apiPayload['threshold_value'] = thresholdValue;
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
     * Every tier in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    loyaltyTiersEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/loyalty/tiers/trash/empty';
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
     * What the nightly purge does, callable by hand: every tier in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyTiersPurge(): Promise<{}> {

        const apiPath = '/v1/loyalty/tiers/trash/purge';
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
     * The first DELETE moves the tier into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A tier active members hold is refused (`trash_blocked`, blocker `tier_in_use`). Restoring waits for its programme to be restored (`parent_in_trash`). A DELETE on a tier already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyTiersDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the tier into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A tier active members hold is refused (`trash_blocked`, blocker `tier_in_use`). Restoring waits for its programme to be restored (`parent_in_trash`). A DELETE on a tier already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyTiersDelete(id: string): Promise<{}>;
    loyaltyTiersDelete(
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

        const apiPath = '/v1/loyalty/tiers/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.LoyaltyTier>}
     */
    loyaltyTiersGet(params: { id: string }): Promise<Models.LoyaltyTier>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyTiersGet(id: string): Promise<Models.LoyaltyTier>;
    loyaltyTiersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.LoyaltyTier> {
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

        const apiPath = '/v1/loyalty/tiers/{id}'.replace('{id}', id);
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
     * @param {number} params.bonusPercent - Turnover bonus: the percentage of the whole year turnover paid at this tier. Not cumulative.
     * @param {string} params.code - The tier code, unique within the programme. This is what a promotion condition and an audience rule name.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} params.labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} params.perks - What the tier stands for, as a list of `{ de, en }` texts the storefront shows. The perk itself is a promotion.
     * @param {number} params.pointsMultiplier - Points programme: earnings are multiplied by this while a member holds the tier.
     * @param {number} params.position - Order among tiers with the same threshold.
     * @param {string} params.programId - The programme this row belongs to.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {ThresholdKind} params.thresholdKind - `absolute`: points earned in the period, or turnover in the programme currency. `relative_to_base`: a percentage of an agreement base turnover (100 = last year reached).
     * @param {number} params.thresholdValue - The threshold. 0 makes an entry tier every member holds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyTier>}
     */
    loyaltyTiersUpdate(params: { id: string, active?: boolean, bonusPercent?: number, code?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, programId?: string, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number }): Promise<Models.LoyaltyTier>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {number} bonusPercent - Turnover bonus: the percentage of the whole year turnover paid at this tier. Not cumulative.
     * @param {string} code - The tier code, unique within the programme. This is what a promotion condition and an audience rule name.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {any} perks - What the tier stands for, as a list of `{ de, en }` texts the storefront shows. The perk itself is a promotion.
     * @param {number} pointsMultiplier - Points programme: earnings are multiplied by this while a member holds the tier.
     * @param {number} position - Order among tiers with the same threshold.
     * @param {string} programId - The programme this row belongs to.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {ThresholdKind} thresholdKind - `absolute`: points earned in the period, or turnover in the programme currency. `relative_to_base`: a percentage of an agreement base turnover (100 = last year reached).
     * @param {number} thresholdValue - The threshold. 0 makes an entry tier every member holds.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyTiersUpdate(id: string, active?: boolean, bonusPercent?: number, code?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, programId?: string, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number): Promise<Models.LoyaltyTier>;
    loyaltyTiersUpdate(
        paramsOrFirst: { id: string, active?: boolean, bonusPercent?: number, code?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, programId?: string, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number } | string,
        ...rest: [(boolean)?, (number)?, (string)?, (string)?, (any)?, (any)?, (any)?, (any)?, (number)?, (number)?, (string)?, (any)?, (string)?, (ThresholdKind)?, (number)?]    
    ): Promise<Models.LoyaltyTier> {
        let params: { id: string, active?: boolean, bonusPercent?: number, code?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, programId?: string, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, bonusPercent?: number, code?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, perks?: any, pointsMultiplier?: number, position?: number, programId?: string, sourceData?: any, sourceSyncedAt?: string, thresholdKind?: ThresholdKind, thresholdValue?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                bonusPercent: rest[1] as number,
                code: rest[2] as string,
                externalId: rest[3] as string,
                externalRefs: rest[4] as any,
                labels: rest[5] as any,
                metadata: rest[6] as any,
                perks: rest[7] as any,
                pointsMultiplier: rest[8] as number,
                position: rest[9] as number,
                programId: rest[10] as string,
                sourceData: rest[11] as any,
                sourceSyncedAt: rest[12] as string,
                thresholdKind: rest[13] as ThresholdKind,
                thresholdValue: rest[14] as number            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const bonusPercent = params.bonusPercent;
        const code = params.code;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const labels = params.labels;
        const metadata = params.metadata;
        const perks = params.perks;
        const pointsMultiplier = params.pointsMultiplier;
        const position = params.position;
        const programId = params.programId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const thresholdKind = params.thresholdKind;
        const thresholdValue = params.thresholdValue;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/tiers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof bonusPercent !== 'undefined') {
            apiPayload['bonus_percent'] = bonusPercent;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof perks !== 'undefined') {
            apiPayload['perks'] = perks;
        }
        if (typeof pointsMultiplier !== 'undefined') {
            apiPayload['points_multiplier'] = pointsMultiplier;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
        if (typeof thresholdKind !== 'undefined') {
            apiPayload['threshold_kind'] = thresholdKind;
        }
        if (typeof thresholdValue !== 'undefined') {
            apiPayload['threshold_value'] = thresholdValue;
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
     * Clears the trash marks on the tier. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    loyaltyTiersRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the tier. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyTiersRestore(id: string): Promise<Models.TrashRestoreResult>;
    loyaltyTiersRestore(
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

        const apiPath = '/v1/loyalty/tiers/{id}/restore'.replace('{id}', id);
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
