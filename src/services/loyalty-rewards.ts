import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';

export class LoyaltyRewards {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?membership_id=`, `?reward_id=`, `?state=`. Read-only.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} params.rewardId - Keep only rows whose `reward_id` equals this.
     * @param {string} params.points - Keep only rows whose `points` equals this.
     * @param {string} params.voucherCode - Keep only rows whose `voucher_code` equals this.
     * @param {string} params.ledgerEntryId - Keep only rows whose `ledger_entry_id` equals this.
     * @param {string} params.requestKey - Keep only rows whose `request_key` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.usedOrderId - Keep only rows whose `used_order_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyRewardsRedemptionsList(params?: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, rewardId?: string, points?: string, voucherCode?: string, ledgerEntryId?: string, requestKey?: string, state?: string, usedOrderId?: string }): Promise<{}>;
    /**
     * Filter `?membership_id=`, `?reward_id=`, `?state=`. Read-only.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} rewardId - Keep only rows whose `reward_id` equals this.
     * @param {string} points - Keep only rows whose `points` equals this.
     * @param {string} voucherCode - Keep only rows whose `voucher_code` equals this.
     * @param {string} ledgerEntryId - Keep only rows whose `ledger_entry_id` equals this.
     * @param {string} requestKey - Keep only rows whose `request_key` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} usedOrderId - Keep only rows whose `used_order_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsRedemptionsList(limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, rewardId?: string, points?: string, voucherCode?: string, ledgerEntryId?: string, requestKey?: string, state?: string, usedOrderId?: string): Promise<{}>;
    loyaltyRewardsRedemptionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, rewardId?: string, points?: string, voucherCode?: string, ledgerEntryId?: string, requestKey?: string, state?: string, usedOrderId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, rewardId?: string, points?: string, voucherCode?: string, ledgerEntryId?: string, requestKey?: string, state?: string, usedOrderId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, rewardId?: string, points?: string, voucherCode?: string, ledgerEntryId?: string, requestKey?: string, state?: string, usedOrderId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                membershipId: rest[3] as string,
                rewardId: rest[4] as string,
                points: rest[5] as string,
                voucherCode: rest[6] as string,
                ledgerEntryId: rest[7] as string,
                requestKey: rest[8] as string,
                state: rest[9] as string,
                usedOrderId: rest[10] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const membershipId = params.membershipId;
        const rewardId = params.rewardId;
        const points = params.points;
        const voucherCode = params.voucherCode;
        const ledgerEntryId = params.ledgerEntryId;
        const requestKey = params.requestKey;
        const state = params.state;
        const usedOrderId = params.usedOrderId;


        const apiPath = '/v1/loyalty/reward-redemptions';
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
        if (typeof membershipId !== 'undefined') {
            apiPayload['membership_id'] = membershipId;
        }
        if (typeof rewardId !== 'undefined') {
            apiPayload['reward_id'] = rewardId;
        }
        if (typeof points !== 'undefined') {
            apiPayload['points'] = points;
        }
        if (typeof voucherCode !== 'undefined') {
            apiPayload['voucher_code'] = voucherCode;
        }
        if (typeof ledgerEntryId !== 'undefined') {
            apiPayload['ledger_entry_id'] = ledgerEntryId;
        }
        if (typeof requestKey !== 'undefined') {
            apiPayload['request_key'] = requestKey;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof usedOrderId !== 'undefined') {
            apiPayload['used_order_id'] = usedOrderId;
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
     * @returns {Promise<Models.RewardRedemption>}
     */
    loyaltyRewardsRedemptionsGet(params: { id: string }): Promise<Models.RewardRedemption>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.RewardRedemption>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsRedemptionsGet(id: string): Promise<Models.RewardRedemption>;
    loyaltyRewardsRedemptionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.RewardRedemption> {
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

        const apiPath = '/v1/loyalty/reward-redemptions/{id}'.replace('{id}', id);
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
     * Filter `?program_id=`, `?active=true`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.programId - Keep only rows whose `program_id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.pointsCost - Keep only rows whose `points_cost` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.voucherBatchId - Keep only rows whose `voucher_batch_id` equals this.
     * @param {string} params.minTierId - Keep only rows whose `min_tier_id` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @param {string} params.redeemedCount - Keep only rows whose `redeemed_count` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @param {string} params.deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} params.deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} params.trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} params.purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyRewardsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, description?: string, pointsCost?: string, promotionId?: string, voucherBatchId?: string, minTierId?: string, active?: string, redeemedCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string }): Promise<{}>;
    /**
     * Filter `?program_id=`, `?active=true`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} programId - Keep only rows whose `program_id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} pointsCost - Keep only rows whose `points_cost` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} voucherBatchId - Keep only rows whose `voucher_batch_id` equals this.
     * @param {string} minTierId - Keep only rows whose `min_tier_id` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @param {string} redeemedCount - Keep only rows whose `redeemed_count` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @param {string} deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, description?: string, pointsCost?: string, promotionId?: string, voucherBatchId?: string, minTierId?: string, active?: string, redeemedCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string): Promise<{}>;
    loyaltyRewardsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, description?: string, pointsCost?: string, promotionId?: string, voucherBatchId?: string, minTierId?: string, active?: string, redeemedCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, description?: string, pointsCost?: string, promotionId?: string, voucherBatchId?: string, minTierId?: string, active?: string, redeemedCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, programId?: string, code?: string, description?: string, pointsCost?: string, promotionId?: string, voucherBatchId?: string, minTierId?: string, active?: string, redeemedCount?: string, externalId?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                programId: rest[4] as string,
                code: rest[5] as string,
                description: rest[6] as string,
                pointsCost: rest[7] as string,
                promotionId: rest[8] as string,
                voucherBatchId: rest[9] as string,
                minTierId: rest[10] as string,
                active: rest[11] as string,
                redeemedCount: rest[12] as string,
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
        const programId = params.programId;
        const code = params.code;
        const description = params.description;
        const pointsCost = params.pointsCost;
        const promotionId = params.promotionId;
        const voucherBatchId = params.voucherBatchId;
        const minTierId = params.minTierId;
        const active = params.active;
        const redeemedCount = params.redeemedCount;
        const externalId = params.externalId;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const trashBatch = params.trashBatch;
        const purgeBlockedReason = params.purgeBlockedReason;


        const apiPath = '/v1/loyalty/rewards';
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
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof pointsCost !== 'undefined') {
            apiPayload['points_cost'] = pointsCost;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof voucherBatchId !== 'undefined') {
            apiPayload['voucher_batch_id'] = voucherBatchId;
        }
        if (typeof minTierId !== 'undefined') {
            apiPayload['min_tier_id'] = minTierId;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof redeemedCount !== 'undefined') {
            apiPayload['redeemed_count'] = redeemedCount;
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
     * @param {string} params.code - The reward code, unique within the programme.
     * @param {any} params.labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {number} params.pointsCost - How many points the reward costs.
     * @param {string} params.programId - The programme this row belongs to.
     * @param {string} params.promotionId - The promotion whose voucher the member receives.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {string} params.description - What it is, in the merchant own words.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.minTierId - The lowest tier allowed to redeem it. Empty: every member.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} params.voucherBatchId - The voucher series the code is drawn from. Empty: the oldest series of the promotion that can still issue codes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyReward>}
     */
    loyaltyRewardsCreate(params: { code: string, labels: any, pointsCost: number, programId: string, promotionId: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, metadata?: any, minTierId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string }): Promise<Models.LoyaltyReward>;
    /**
     *
     * @param {string} code - The reward code, unique within the programme.
     * @param {any} labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {number} pointsCost - How many points the reward costs.
     * @param {string} programId - The programme this row belongs to.
     * @param {string} promotionId - The promotion whose voucher the member receives.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {string} description - What it is, in the merchant own words.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} minTierId - The lowest tier allowed to redeem it. Empty: every member.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} voucherBatchId - The voucher series the code is drawn from. Empty: the oldest series of the promotion that can still issue codes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyReward>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsCreate(code: string, labels: any, pointsCost: number, programId: string, promotionId: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, metadata?: any, minTierId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string): Promise<Models.LoyaltyReward>;
    loyaltyRewardsCreate(
        paramsOrFirst: { code: string, labels: any, pointsCost: number, programId: string, promotionId: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, metadata?: any, minTierId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string } | string,
        ...rest: [(any)?, (number)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (any)?, (any)?, (string)?, (any)?, (string)?, (string)?]    
    ): Promise<Models.LoyaltyReward> {
        let params: { code: string, labels: any, pointsCost: number, programId: string, promotionId: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, metadata?: any, minTierId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, labels: any, pointsCost: number, programId: string, promotionId: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, metadata?: any, minTierId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                labels: rest[0] as any,
                pointsCost: rest[1] as number,
                programId: rest[2] as string,
                promotionId: rest[3] as string,
                active: rest[4] as boolean,
                description: rest[5] as string,
                externalId: rest[6] as string,
                externalRefs: rest[7] as any,
                metadata: rest[8] as any,
                minTierId: rest[9] as string,
                sourceData: rest[10] as any,
                sourceSyncedAt: rest[11] as string,
                voucherBatchId: rest[12] as string            
            };
        }
        
        const code = params.code;
        const labels = params.labels;
        const pointsCost = params.pointsCost;
        const programId = params.programId;
        const promotionId = params.promotionId;
        const active = params.active;
        const description = params.description;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const minTierId = params.minTierId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const voucherBatchId = params.voucherBatchId;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof labels === 'undefined') {
            throw new RevenexxException('Missing required parameter: "labels"');
        }
        if (typeof pointsCost === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pointsCost"');
        }
        if (typeof programId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "programId"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/loyalty/rewards';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
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
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof minTierId !== 'undefined') {
            apiPayload['min_tier_id'] = minTierId;
        }
        if (typeof pointsCost !== 'undefined') {
            apiPayload['points_cost'] = pointsCost;
        }
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof voucherBatchId !== 'undefined') {
            apiPayload['voucher_batch_id'] = voucherBatchId;
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
     * Every reward in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    loyaltyRewardsEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/loyalty/rewards/trash/empty';
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
     * What the nightly purge does, callable by hand: every reward in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyRewardsPurge(): Promise<{}> {

        const apiPath = '/v1/loyalty/rewards/trash/purge';
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
     * The first DELETE moves the reward into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A redeemed reward is refused (`trash_blocked`, blocker `redeemed`) — deactivate it instead. Restoring waits for its programme to be restored (`parent_in_trash`). A DELETE on a reward already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyRewardsDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the reward into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A redeemed reward is refused (`trash_blocked`, blocker `redeemed`) — deactivate it instead. Restoring waits for its programme to be restored (`parent_in_trash`). A DELETE on a reward already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsDelete(id: string): Promise<{}>;
    loyaltyRewardsDelete(
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

        const apiPath = '/v1/loyalty/rewards/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.LoyaltyReward>}
     */
    loyaltyRewardsGet(params: { id: string }): Promise<Models.LoyaltyReward>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyReward>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsGet(id: string): Promise<Models.LoyaltyReward>;
    loyaltyRewardsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.LoyaltyReward> {
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

        const apiPath = '/v1/loyalty/rewards/{id}'.replace('{id}', id);
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
     * @param {string} params.code - The reward code, unique within the programme.
     * @param {string} params.description - What it is, in the merchant own words.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} params.labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.minTierId - The lowest tier allowed to redeem it. Empty: every member.
     * @param {number} params.pointsCost - How many points the reward costs.
     * @param {string} params.programId - The programme this row belongs to.
     * @param {string} params.promotionId - The promotion whose voucher the member receives.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} params.voucherBatchId - The voucher series the code is drawn from. Empty: the oldest series of the promotion that can still issue codes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyReward>}
     */
    loyaltyRewardsUpdate(params: { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, minTierId?: string, pointsCost?: number, programId?: string, promotionId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string }): Promise<Models.LoyaltyReward>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and is not offered.
     * @param {string} code - The reward code, unique within the programme.
     * @param {string} description - What it is, in the merchant own words.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {any} labels - What it is called, as `{ de, en }`. A bare string is taken for both.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} minTierId - The lowest tier allowed to redeem it. Empty: every member.
     * @param {number} pointsCost - How many points the reward costs.
     * @param {string} programId - The programme this row belongs to.
     * @param {string} promotionId - The promotion whose voucher the member receives.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} voucherBatchId - The voucher series the code is drawn from. Empty: the oldest series of the promotion that can still issue codes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LoyaltyReward>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsUpdate(id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, minTierId?: string, pointsCost?: number, programId?: string, promotionId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string): Promise<Models.LoyaltyReward>;
    loyaltyRewardsUpdate(
        paramsOrFirst: { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, minTierId?: string, pointsCost?: number, programId?: string, promotionId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?, (any)?, (any)?, (any)?, (string)?, (number)?, (string)?, (string)?, (any)?, (string)?, (string)?]    
    ): Promise<Models.LoyaltyReward> {
        let params: { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, minTierId?: string, pointsCost?: number, programId?: string, promotionId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, labels?: any, metadata?: any, minTierId?: string, pointsCost?: number, programId?: string, promotionId?: string, sourceData?: any, sourceSyncedAt?: string, voucherBatchId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                code: rest[1] as string,
                description: rest[2] as string,
                externalId: rest[3] as string,
                externalRefs: rest[4] as any,
                labels: rest[5] as any,
                metadata: rest[6] as any,
                minTierId: rest[7] as string,
                pointsCost: rest[8] as number,
                programId: rest[9] as string,
                promotionId: rest[10] as string,
                sourceData: rest[11] as any,
                sourceSyncedAt: rest[12] as string,
                voucherBatchId: rest[13] as string            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const code = params.code;
        const description = params.description;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const labels = params.labels;
        const metadata = params.metadata;
        const minTierId = params.minTierId;
        const pointsCost = params.pointsCost;
        const programId = params.programId;
        const promotionId = params.promotionId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const voucherBatchId = params.voucherBatchId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/rewards/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
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
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof minTierId !== 'undefined') {
            apiPayload['min_tier_id'] = minTierId;
        }
        if (typeof pointsCost !== 'undefined') {
            apiPayload['points_cost'] = pointsCost;
        }
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof voucherBatchId !== 'undefined') {
            apiPayload['voucher_batch_id'] = voucherBatchId;
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
     * Draws a single-use voucher for the member from promotions, then takes the points. No voucher, no points taken. A `key` makes a retry answer the first redemption.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.contactId - The member, or for a company membership the person the voucher is for.
     * @param {string} params.key - 
     * @param {string} params.membershipId - 
     * @param {string} params.organizationId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.RewardRedemption>}
     */
    loyaltyRewardsRedeem(params: { id: string, contactId?: string, key?: string, membershipId?: string, organizationId?: string }): Promise<Models.RewardRedemption>;
    /**
     * Draws a single-use voucher for the member from promotions, then takes the points. No voucher, no points taken. A `key` makes a retry answer the first redemption.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - The member, or for a company membership the person the voucher is for.
     * @param {string} key - 
     * @param {string} membershipId - 
     * @param {string} organizationId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.RewardRedemption>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsRedeem(id: string, contactId?: string, key?: string, membershipId?: string, organizationId?: string): Promise<Models.RewardRedemption>;
    loyaltyRewardsRedeem(
        paramsOrFirst: { id: string, contactId?: string, key?: string, membershipId?: string, organizationId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.RewardRedemption> {
        let params: { id: string, contactId?: string, key?: string, membershipId?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, key?: string, membershipId?: string, organizationId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                key: rest[1] as string,
                membershipId: rest[2] as string,
                organizationId: rest[3] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const key = params.key;
        const membershipId = params.membershipId;
        const organizationId = params.organizationId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/rewards/{id}/redeem'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof membershipId !== 'undefined') {
            apiPayload['membership_id'] = membershipId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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
     * Clears the trash marks on the reward. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    loyaltyRewardsRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the reward. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyRewardsRestore(id: string): Promise<Models.TrashRestoreResult>;
    loyaltyRewardsRestore(
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

        const apiPath = '/v1/loyalty/rewards/{id}/restore'.replace('{id}', id);
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
