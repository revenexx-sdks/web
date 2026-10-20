import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { TurnoverSource } from '../enums/turnover-source';

export class LoyaltyBonus {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?organization_id=`, `?period=2026`, `?state=calculated` for the year-end queue.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.programId - Keep only rows whose `program_id` equals this.
     * @param {string} params.membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.period - Keep only rows whose `period` equals this.
     * @param {string} params.periodStart - Keep only rows whose `period_start` equals this.
     * @param {string} params.periodEnd - Keep only rows whose `period_end` equals this.
     * @param {string} params.baseSource - Keep only rows whose `base_source` equals this.
     * @param {string} params.turnoverSource - Keep only rows whose `turnover_source` equals this.
     * @param {string} params.reachedTierId - Keep only rows whose `reached_tier_id` equals this.
     * @param {string} params.reachedTierCode - Keep only rows whose `reached_tier_code` equals this.
     * @param {string} params.projectedTierCode - Keep only rows whose `projected_tier_code` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.receivablesCleared - Keep only rows whose `receivables_cleared` equals this.
     * @param {string} params.receivablesCheckedBy - Keep only rows whose `receivables_checked_by` equals this.
     * @param {string} params.forfeitReason - Keep only rows whose `forfeit_reason` equals this.
     * @param {string} params.documentRef - Keep only rows whose `document_ref` equals this.
     * @param {string} params.payoutRef - Keep only rows whose `payout_ref` equals this.
     * @param {string} params.approvedBy - Keep only rows whose `approved_by` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyBonusList(params?: { limit?: number, offset?: number, order?: string, id?: string, programId?: string, membershipId?: string, organizationId?: string, period?: string, periodStart?: string, periodEnd?: string, baseSource?: string, turnoverSource?: string, reachedTierId?: string, reachedTierCode?: string, projectedTierCode?: string, currency?: string, state?: string, receivablesCleared?: string, receivablesCheckedBy?: string, forfeitReason?: string, documentRef?: string, payoutRef?: string, approvedBy?: string, externalId?: string }): Promise<{}>;
    /**
     * Filter `?organization_id=`, `?period=2026`, `?state=calculated` for the year-end queue.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} programId - Keep only rows whose `program_id` equals this.
     * @param {string} membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} period - Keep only rows whose `period` equals this.
     * @param {string} periodStart - Keep only rows whose `period_start` equals this.
     * @param {string} periodEnd - Keep only rows whose `period_end` equals this.
     * @param {string} baseSource - Keep only rows whose `base_source` equals this.
     * @param {string} turnoverSource - Keep only rows whose `turnover_source` equals this.
     * @param {string} reachedTierId - Keep only rows whose `reached_tier_id` equals this.
     * @param {string} reachedTierCode - Keep only rows whose `reached_tier_code` equals this.
     * @param {string} projectedTierCode - Keep only rows whose `projected_tier_code` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} receivablesCleared - Keep only rows whose `receivables_cleared` equals this.
     * @param {string} receivablesCheckedBy - Keep only rows whose `receivables_checked_by` equals this.
     * @param {string} forfeitReason - Keep only rows whose `forfeit_reason` equals this.
     * @param {string} documentRef - Keep only rows whose `document_ref` equals this.
     * @param {string} payoutRef - Keep only rows whose `payout_ref` equals this.
     * @param {string} approvedBy - Keep only rows whose `approved_by` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusList(limit?: number, offset?: number, order?: string, id?: string, programId?: string, membershipId?: string, organizationId?: string, period?: string, periodStart?: string, periodEnd?: string, baseSource?: string, turnoverSource?: string, reachedTierId?: string, reachedTierCode?: string, projectedTierCode?: string, currency?: string, state?: string, receivablesCleared?: string, receivablesCheckedBy?: string, forfeitReason?: string, documentRef?: string, payoutRef?: string, approvedBy?: string, externalId?: string): Promise<{}>;
    loyaltyBonusList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, programId?: string, membershipId?: string, organizationId?: string, period?: string, periodStart?: string, periodEnd?: string, baseSource?: string, turnoverSource?: string, reachedTierId?: string, reachedTierCode?: string, projectedTierCode?: string, currency?: string, state?: string, receivablesCleared?: string, receivablesCheckedBy?: string, forfeitReason?: string, documentRef?: string, payoutRef?: string, approvedBy?: string, externalId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, programId?: string, membershipId?: string, organizationId?: string, period?: string, periodStart?: string, periodEnd?: string, baseSource?: string, turnoverSource?: string, reachedTierId?: string, reachedTierCode?: string, projectedTierCode?: string, currency?: string, state?: string, receivablesCleared?: string, receivablesCheckedBy?: string, forfeitReason?: string, documentRef?: string, payoutRef?: string, approvedBy?: string, externalId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, programId?: string, membershipId?: string, organizationId?: string, period?: string, periodStart?: string, periodEnd?: string, baseSource?: string, turnoverSource?: string, reachedTierId?: string, reachedTierCode?: string, projectedTierCode?: string, currency?: string, state?: string, receivablesCleared?: string, receivablesCheckedBy?: string, forfeitReason?: string, documentRef?: string, payoutRef?: string, approvedBy?: string, externalId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                programId: rest[3] as string,
                membershipId: rest[4] as string,
                organizationId: rest[5] as string,
                period: rest[6] as string,
                periodStart: rest[7] as string,
                periodEnd: rest[8] as string,
                baseSource: rest[9] as string,
                turnoverSource: rest[10] as string,
                reachedTierId: rest[11] as string,
                reachedTierCode: rest[12] as string,
                projectedTierCode: rest[13] as string,
                currency: rest[14] as string,
                state: rest[15] as string,
                receivablesCleared: rest[16] as string,
                receivablesCheckedBy: rest[17] as string,
                forfeitReason: rest[18] as string,
                documentRef: rest[19] as string,
                payoutRef: rest[20] as string,
                approvedBy: rest[21] as string,
                externalId: rest[22] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const programId = params.programId;
        const membershipId = params.membershipId;
        const organizationId = params.organizationId;
        const period = params.period;
        const periodStart = params.periodStart;
        const periodEnd = params.periodEnd;
        const baseSource = params.baseSource;
        const turnoverSource = params.turnoverSource;
        const reachedTierId = params.reachedTierId;
        const reachedTierCode = params.reachedTierCode;
        const projectedTierCode = params.projectedTierCode;
        const currency = params.currency;
        const state = params.state;
        const receivablesCleared = params.receivablesCleared;
        const receivablesCheckedBy = params.receivablesCheckedBy;
        const forfeitReason = params.forfeitReason;
        const documentRef = params.documentRef;
        const payoutRef = params.payoutRef;
        const approvedBy = params.approvedBy;
        const externalId = params.externalId;


        const apiPath = '/v1/loyalty/bonus-agreements';
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
        if (typeof membershipId !== 'undefined') {
            apiPayload['membership_id'] = membershipId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof period !== 'undefined') {
            apiPayload['period'] = period;
        }
        if (typeof periodStart !== 'undefined') {
            apiPayload['period_start'] = periodStart;
        }
        if (typeof periodEnd !== 'undefined') {
            apiPayload['period_end'] = periodEnd;
        }
        if (typeof baseSource !== 'undefined') {
            apiPayload['base_source'] = baseSource;
        }
        if (typeof turnoverSource !== 'undefined') {
            apiPayload['turnover_source'] = turnoverSource;
        }
        if (typeof reachedTierId !== 'undefined') {
            apiPayload['reached_tier_id'] = reachedTierId;
        }
        if (typeof reachedTierCode !== 'undefined') {
            apiPayload['reached_tier_code'] = reachedTierCode;
        }
        if (typeof projectedTierCode !== 'undefined') {
            apiPayload['projected_tier_code'] = projectedTierCode;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof receivablesCleared !== 'undefined') {
            apiPayload['receivables_cleared'] = receivablesCleared;
        }
        if (typeof receivablesCheckedBy !== 'undefined') {
            apiPayload['receivables_checked_by'] = receivablesCheckedBy;
        }
        if (typeof forfeitReason !== 'undefined') {
            apiPayload['forfeit_reason'] = forfeitReason;
        }
        if (typeof documentRef !== 'undefined') {
            apiPayload['document_ref'] = documentRef;
        }
        if (typeof payoutRef !== 'undefined') {
            apiPayload['payout_ref'] = payoutRef;
        }
        if (typeof approvedBy !== 'undefined') {
            apiPayload['approved_by'] = approvedBy;
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
     * Enrols the company if needed, freezes the programme tiers against the base, and reads the year so far from orders. Without `base_turnover` the base is last year: the previous agreement, else last year completed orders.
     *
     * @param {string} params.organizationId - 
     * @param {string} params.programId - 
     * @param {number} params.baseTurnover - 
     * @param {string} params.contactId - 
     * @param {string} params.documentRef - 
     * @param {string} params.period - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusCreate(params: { organizationId: string, programId: string, baseTurnover?: number, contactId?: string, documentRef?: string, period?: string }): Promise<Models.BonusAgreement>;
    /**
     * Enrols the company if needed, freezes the programme tiers against the base, and reads the year so far from orders. Without `base_turnover` the base is last year: the previous agreement, else last year completed orders.
     *
     * @param {string} organizationId - 
     * @param {string} programId - 
     * @param {number} baseTurnover - 
     * @param {string} contactId - 
     * @param {string} documentRef - 
     * @param {string} period - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusCreate(organizationId: string, programId: string, baseTurnover?: number, contactId?: string, documentRef?: string, period?: string): Promise<Models.BonusAgreement>;
    loyaltyBonusCreate(
        paramsOrFirst: { organizationId: string, programId: string, baseTurnover?: number, contactId?: string, documentRef?: string, period?: string } | string,
        ...rest: [(string)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.BonusAgreement> {
        let params: { organizationId: string, programId: string, baseTurnover?: number, contactId?: string, documentRef?: string, period?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, programId: string, baseTurnover?: number, contactId?: string, documentRef?: string, period?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                programId: rest[0] as string,
                baseTurnover: rest[1] as number,
                contactId: rest[2] as string,
                documentRef: rest[3] as string,
                period: rest[4] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const programId = params.programId;
        const baseTurnover = params.baseTurnover;
        const contactId = params.contactId;
        const documentRef = params.documentRef;
        const period = params.period;

        if (typeof organizationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "organizationId"');
        }
        if (typeof programId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "programId"');
        }

        const apiPath = '/v1/loyalty/bonus-agreements';
        const apiPayload: Payload = {};
        if (typeof baseTurnover !== 'undefined') {
            apiPayload['base_turnover'] = baseTurnover;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof documentRef !== 'undefined') {
            apiPayload['document_ref'] = documentRef;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof period !== 'undefined') {
            apiPayload['period'] = period;
        }
        if (typeof programId !== 'undefined') {
            apiPayload['program_id'] = programId;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusGet(params: { id: string }): Promise<Models.BonusAgreement>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusGet(id: string): Promise<Models.BonusAgreement>;
    loyaltyBonusGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.BonusAgreement> {
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

        const apiPath = '/v1/loyalty/bonus-agreements/{id}'.replace('{id}', id);
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
     * Changing the base re-prices the frozen tiers; only while the year runs. Everything else on an agreement is kept by this app.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {number} params.baseTurnover - 
     * @param {string} params.documentRef - 
     * @param {any} params.metadata - Free-form data kept with the agreement, stored as given.
     * @param {TurnoverSource} params.turnoverSource - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusUpdate(params: { id: string, baseTurnover?: number, documentRef?: string, metadata?: any, turnoverSource?: TurnoverSource }): Promise<Models.BonusAgreement>;
    /**
     * Changing the base re-prices the frozen tiers; only while the year runs. Everything else on an agreement is kept by this app.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {number} baseTurnover - 
     * @param {string} documentRef - 
     * @param {any} metadata - Free-form data kept with the agreement, stored as given.
     * @param {TurnoverSource} turnoverSource - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusUpdate(id: string, baseTurnover?: number, documentRef?: string, metadata?: any, turnoverSource?: TurnoverSource): Promise<Models.BonusAgreement>;
    loyaltyBonusUpdate(
        paramsOrFirst: { id: string, baseTurnover?: number, documentRef?: string, metadata?: any, turnoverSource?: TurnoverSource } | string,
        ...rest: [(number)?, (string)?, (any)?, (TurnoverSource)?]    
    ): Promise<Models.BonusAgreement> {
        let params: { id: string, baseTurnover?: number, documentRef?: string, metadata?: any, turnoverSource?: TurnoverSource };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, baseTurnover?: number, documentRef?: string, metadata?: any, turnoverSource?: TurnoverSource };
        } else {
            params = {
                id: paramsOrFirst as string,
                baseTurnover: rest[0] as number,
                documentRef: rest[1] as string,
                metadata: rest[2] as any,
                turnoverSource: rest[3] as TurnoverSource            
            };
        }
        
        const id = params.id;
        const baseTurnover = params.baseTurnover;
        const documentRef = params.documentRef;
        const metadata = params.metadata;
        const turnoverSource = params.turnoverSource;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/bonus-agreements/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof baseTurnover !== 'undefined') {
            apiPayload['base_turnover'] = baseTurnover;
        }
        if (typeof documentRef !== 'undefined') {
            apiPayload['document_ref'] = documentRef;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof turnoverSource !== 'undefined') {
            apiPayload['turnover_source'] = turnoverSource;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.checkedBy - 
     * @param {boolean} params.receivablesCleared - All receivables due at settlement are paid.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusApprove(params: { id: string, checkedBy?: string, receivablesCleared?: boolean }): Promise<Models.BonusAgreement>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} checkedBy - 
     * @param {boolean} receivablesCleared - All receivables due at settlement are paid.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusApprove(id: string, checkedBy?: string, receivablesCleared?: boolean): Promise<Models.BonusAgreement>;
    loyaltyBonusApprove(
        paramsOrFirst: { id: string, checkedBy?: string, receivablesCleared?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.BonusAgreement> {
        let params: { id: string, checkedBy?: string, receivablesCleared?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, checkedBy?: string, receivablesCleared?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                checkedBy: rest[0] as string,
                receivablesCleared: rest[1] as boolean            
            };
        }
        
        const id = params.id;
        const checkedBy = params.checkedBy;
        const receivablesCleared = params.receivablesCleared;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/bonus-agreements/{id}/approve'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof checkedBy !== 'undefined') {
            apiPayload['checked_by'] = checkedBy;
        }
        if (typeof receivablesCleared !== 'undefined') {
            apiPayload['receivables_cleared'] = receivablesCleared;
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
     * Final turnover, reached tier and bonus (that tier percentage of the whole year). Announces bonus_agreement.calculated. A calculated agreement may be calculated again after a late return.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusCalculate(params: { id: string, data: object }): Promise<Models.BonusAgreement>;
    /**
     * Final turnover, reached tier and bonus (that tier percentage of the whole year). Announces bonus_agreement.calculated. A calculated agreement may be calculated again after a late return.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusCalculate(id: string, data: object): Promise<Models.BonusAgreement>;
    loyaltyBonusCalculate(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.BonusAgreement> {
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

        const apiPath = '/v1/loyalty/bonus-agreements/{id}/calculate'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusForfeit(params: { id: string, reason: string }): Promise<Models.BonusAgreement>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusForfeit(id: string, reason: string): Promise<Models.BonusAgreement>;
    loyaltyBonusForfeit(
        paramsOrFirst: { id: string, reason: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.BonusAgreement> {
        let params: { id: string, reason: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/loyalty/bonus-agreements/{id}/forfeit'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.payoutRef - The credit note or payment.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusPay(params: { id: string, payoutRef?: string }): Promise<Models.BonusAgreement>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} payoutRef - The credit note or payment.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusPay(id: string, payoutRef?: string): Promise<Models.BonusAgreement>;
    loyaltyBonusPay(
        paramsOrFirst: { id: string, payoutRef?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.BonusAgreement> {
        let params: { id: string, payoutRef?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, payoutRef?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                payoutRef: rest[0] as string            
            };
        }
        
        const id = params.id;
        const payoutRef = params.payoutRef;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/loyalty/bonus-agreements/{id}/pay'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof payoutRef !== 'undefined') {
            apiPayload['payout_ref'] = payoutRef;
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
     * Turnover so far, projection to year end, every tier with its range, the tier reached, the gap to the next with its projected date, the bonus now and the expected bonus — the storefront Premium page and the cockpit panel read it. `bars` carries the tiers as rows of label and value, worded in the caller language, with the year gone and the bonus now as `footer` rows.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyBonusProgress(params: { id: string }): Promise<{}>;
    /**
     * Turnover so far, projection to year end, every tier with its range, the tier reached, the gap to the next with its projected date, the bonus now and the expected bonus — the storefront Premium page and the cockpit panel read it. `bars` carries the tiers as rows of label and value, worded in the caller language, with the year gone and the bonus now as `footer` rows.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusProgress(id: string): Promise<{}>;
    loyaltyBonusProgress(
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

        const apiPath = '/v1/loyalty/bonus-agreements/{id}/progress'.replace('{id}', id);
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
     * Adds every completed order of the year not yet counted; an order already counted is not counted twice. Not for agreements fed by ERP imports.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     */
    loyaltyBonusRebuild(params: { id: string, data: object }): Promise<Models.BonusAgreement>;
    /**
     * Adds every completed order of the year not yet counted; an order already counted is not counted twice. Not for agreements fed by ERP imports.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.BonusAgreement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusRebuild(id: string, data: object): Promise<Models.BonusAgreement>;
    loyaltyBonusRebuild(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.BonusAgreement> {
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

        const apiPath = '/v1/loyalty/bonus-agreements/{id}/rebuild'.replace('{id}', id);
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
     * Filter `?agreement_id=`, `?source=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.agreementId - Keep only rows whose `agreement_id` equals this.
     * @param {string} params.entryKey - Keep only rows whose `entry_key` equals this.
     * @param {string} params.source - Keep only rows whose `source` equals this.
     * @param {string} params.ref - Keep only rows whose `ref` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyBonusEntriesList(params?: { limit?: number, offset?: number, order?: string, id?: string, agreementId?: string, entryKey?: string, source?: string, ref?: string, orderId?: string }): Promise<{}>;
    /**
     * Filter `?agreement_id=`, `?source=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} agreementId - Keep only rows whose `agreement_id` equals this.
     * @param {string} entryKey - Keep only rows whose `entry_key` equals this.
     * @param {string} source - Keep only rows whose `source` equals this.
     * @param {string} ref - Keep only rows whose `ref` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusEntriesList(limit?: number, offset?: number, order?: string, id?: string, agreementId?: string, entryKey?: string, source?: string, ref?: string, orderId?: string): Promise<{}>;
    loyaltyBonusEntriesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, agreementId?: string, entryKey?: string, source?: string, ref?: string, orderId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, agreementId?: string, entryKey?: string, source?: string, ref?: string, orderId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, agreementId?: string, entryKey?: string, source?: string, ref?: string, orderId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                agreementId: rest[3] as string,
                entryKey: rest[4] as string,
                source: rest[5] as string,
                ref: rest[6] as string,
                orderId: rest[7] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const agreementId = params.agreementId;
        const entryKey = params.entryKey;
        const source = params.source;
        const ref = params.ref;
        const orderId = params.orderId;


        const apiPath = '/v1/loyalty/turnover-entries';
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
        if (typeof agreementId !== 'undefined') {
            apiPayload['agreement_id'] = agreementId;
        }
        if (typeof entryKey !== 'undefined') {
            apiPayload['entry_key'] = entryKey;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof ref !== 'undefined') {
            apiPayload['ref'] = ref;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
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
     * A signed correction line with a reason (`ref`). A `key` makes a retry book once.
     *
     * @param {string} params.agreementId - 
     * @param {number} params.amount - 
     * @param {string} params.ref - 
     * @param {string} params.at - 
     * @param {string} params.key - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.TurnoverEntry>}
     */
    loyaltyBonusEntriesCorrect(params: { agreementId: string, amount: number, ref: string, at?: string, key?: string }): Promise<Models.TurnoverEntry>;
    /**
     * A signed correction line with a reason (`ref`). A `key` makes a retry book once.
     *
     * @param {string} agreementId - 
     * @param {number} amount - 
     * @param {string} ref - 
     * @param {string} at - 
     * @param {string} key - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.TurnoverEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusEntriesCorrect(agreementId: string, amount: number, ref: string, at?: string, key?: string): Promise<Models.TurnoverEntry>;
    loyaltyBonusEntriesCorrect(
        paramsOrFirst: { agreementId: string, amount: number, ref: string, at?: string, key?: string } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.TurnoverEntry> {
        let params: { agreementId: string, amount: number, ref: string, at?: string, key?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { agreementId: string, amount: number, ref: string, at?: string, key?: string };
        } else {
            params = {
                agreementId: paramsOrFirst as string,
                amount: rest[0] as number,
                ref: rest[1] as string,
                at: rest[2] as string,
                key: rest[3] as string            
            };
        }
        
        const agreementId = params.agreementId;
        const amount = params.amount;
        const ref = params.ref;
        const at = params.at;
        const key = params.key;

        if (typeof agreementId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "agreementId"');
        }
        if (typeof amount === 'undefined') {
            throw new RevenexxException('Missing required parameter: "amount"');
        }
        if (typeof ref === 'undefined') {
            throw new RevenexxException('Missing required parameter: "ref"');
        }

        const apiPath = '/v1/loyalty/turnover-entries';
        const apiPayload: Payload = {};
        if (typeof agreementId !== 'undefined') {
            apiPayload['agreement_id'] = agreementId;
        }
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof at !== 'undefined') {
            apiPayload['at'] = at;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof ref !== 'undefined') {
            apiPayload['ref'] = ref;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TurnoverEntry>}
     */
    loyaltyBonusEntriesGet(params: { id: string }): Promise<Models.TurnoverEntry>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TurnoverEntry>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusEntriesGet(id: string): Promise<Models.TurnoverEntry>;
    loyaltyBonusEntriesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TurnoverEntry> {
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

        const apiPath = '/v1/loyalty/turnover-entries/{id}'.replace('{id}', id);
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
     * At most 500 rows, each one line under its own reference. From the first imported line an agreement counts imported lines only.
     *
     * @param {object[]} params.rows - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyBonusImport(params: { rows: object[] }): Promise<{}>;
    /**
     * At most 500 rows, each one line under its own reference. From the first imported line an agreement counts imported lines only.
     *
     * @param {object[]} rows - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyBonusImport(rows: object[]): Promise<{}>;
    loyaltyBonusImport(
        paramsOrFirst: { rows: object[] } | object[]    
    ): Promise<{}> {
        let params: { rows: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('rows' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { rows: object[] };
        } else {
            params = {
                rows: paramsOrFirst as object[]            
            };
        }
        
        const rows = params.rows;

        if (typeof rows === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rows"');
        }

        const apiPath = '/v1/loyalty/turnover-imports';
        const apiPayload: Payload = {};
        if (typeof rows !== 'undefined') {
            apiPayload['rows'] = Client.toWireKeys(rows, {"agreementId":{"wire":"agreement_id","children":null},"organizationId":{"wire":"organization_id","children":null},"programId":{"wire":"program_id","children":null}});
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
