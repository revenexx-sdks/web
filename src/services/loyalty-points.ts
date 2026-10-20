import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class LoyaltyPoints {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The ledger. Filter `?membership_id=`, `?kind=`, `?order_id=`. Read-only.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} params.entryKey - Keep only rows whose `entry_key` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.points - Keep only rows whose `points` equals this.
     * @param {string} params.remaining - Keep only rows whose `remaining` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.rewardId - Keep only rows whose `reward_id` equals this.
     * @param {string} params.redemptionId - Keep only rows whose `redemption_id` equals this.
     * @param {string} params.reason - Keep only rows whose `reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyPointsList(params?: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, entryKey?: string, kind?: string, points?: string, remaining?: string, orderId?: string, rewardId?: string, redemptionId?: string, reason?: string }): Promise<{}>;
    /**
     * The ledger. Filter `?membership_id=`, `?kind=`, `?order_id=`. Read-only.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} entryKey - Keep only rows whose `entry_key` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} points - Keep only rows whose `points` equals this.
     * @param {string} remaining - Keep only rows whose `remaining` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} rewardId - Keep only rows whose `reward_id` equals this.
     * @param {string} redemptionId - Keep only rows whose `redemption_id` equals this.
     * @param {string} reason - Keep only rows whose `reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyPointsList(limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, entryKey?: string, kind?: string, points?: string, remaining?: string, orderId?: string, rewardId?: string, redemptionId?: string, reason?: string): Promise<{}>;
    loyaltyPointsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, entryKey?: string, kind?: string, points?: string, remaining?: string, orderId?: string, rewardId?: string, redemptionId?: string, reason?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, entryKey?: string, kind?: string, points?: string, remaining?: string, orderId?: string, rewardId?: string, redemptionId?: string, reason?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, entryKey?: string, kind?: string, points?: string, remaining?: string, orderId?: string, rewardId?: string, redemptionId?: string, reason?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                membershipId: rest[3] as string,
                entryKey: rest[4] as string,
                kind: rest[5] as string,
                points: rest[6] as string,
                remaining: rest[7] as string,
                orderId: rest[8] as string,
                rewardId: rest[9] as string,
                redemptionId: rest[10] as string,
                reason: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const membershipId = params.membershipId;
        const entryKey = params.entryKey;
        const kind = params.kind;
        const points = params.points;
        const remaining = params.remaining;
        const orderId = params.orderId;
        const rewardId = params.rewardId;
        const redemptionId = params.redemptionId;
        const reason = params.reason;


        const apiPath = '/v1/loyalty/point-ledger';
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
        if (typeof entryKey !== 'undefined') {
            apiPayload['entry_key'] = entryKey;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof points !== 'undefined') {
            apiPayload['points'] = points;
        }
        if (typeof remaining !== 'undefined') {
            apiPayload['remaining'] = remaining;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof rewardId !== 'undefined') {
            apiPayload['reward_id'] = rewardId;
        }
        if (typeof redemptionId !== 'undefined') {
            apiPayload['redemption_id'] = redemptionId;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @returns {Promise<Models.PointLedgerEntry>}
     */
    loyaltyPointsGet(params: { id: string }): Promise<Models.PointLedgerEntry>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PointLedgerEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyPointsGet(id: string): Promise<Models.PointLedgerEntry>;
    loyaltyPointsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PointLedgerEntry> {
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

        const apiPath = '/v1/loyalty/point-ledger/{id}'.replace('{id}', id);
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
     * What the journeys award_points step calls. Names the member by membership, contact or company (`program_code` when the holder collects in several programmes). A `key` makes a retry book once.
     *
     * @param {number} params.points - 
     * @param {string} params.contactId - 
     * @param {string} params.key - 
     * @param {string} params.membershipId - 
     * @param {string} params.organizationId - 
     * @param {string} params.programCode - 
     * @param {string} params.reason - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyPointsAward(params: { points: number, contactId?: string, key?: string, membershipId?: string, organizationId?: string, programCode?: string, reason?: string }): Promise<{}>;
    /**
     * What the journeys award_points step calls. Names the member by membership, contact or company (`program_code` when the holder collects in several programmes). A `key` makes a retry book once.
     *
     * @param {number} points - 
     * @param {string} contactId - 
     * @param {string} key - 
     * @param {string} membershipId - 
     * @param {string} organizationId - 
     * @param {string} programCode - 
     * @param {string} reason - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyPointsAward(points: number, contactId?: string, key?: string, membershipId?: string, organizationId?: string, programCode?: string, reason?: string): Promise<{}>;
    loyaltyPointsAward(
        paramsOrFirst: { points: number, contactId?: string, key?: string, membershipId?: string, organizationId?: string, programCode?: string, reason?: string } | number,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { points: number, contactId?: string, key?: string, membershipId?: string, organizationId?: string, programCode?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { points: number, contactId?: string, key?: string, membershipId?: string, organizationId?: string, programCode?: string, reason?: string };
        } else {
            params = {
                points: paramsOrFirst as number,
                contactId: rest[0] as string,
                key: rest[1] as string,
                membershipId: rest[2] as string,
                organizationId: rest[3] as string,
                programCode: rest[4] as string,
                reason: rest[5] as string            
            };
        }
        
        const points = params.points;
        const contactId = params.contactId;
        const key = params.key;
        const membershipId = params.membershipId;
        const organizationId = params.organizationId;
        const programCode = params.programCode;
        const reason = params.reason;

        if (typeof points === 'undefined') {
            throw new RevenexxException('Missing required parameter: "points"');
        }

        const apiPath = '/v1/loyalty/points/award';
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
        if (typeof points !== 'undefined') {
            apiPayload['points'] = points;
        }
        if (typeof programCode !== 'undefined') {
            apiPayload['program_code'] = programCode;
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
}
