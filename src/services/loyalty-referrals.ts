import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class LoyaltyReferrals {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?membership_id=`, `?contact_id=`, `?code=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.uses - Keep only rows whose `uses` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyReferralsCodesList(params?: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, contactId?: string, code?: string, uses?: string, active?: string }): Promise<{}>;
    /**
     * Filter `?membership_id=`, `?contact_id=`, `?code=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} membershipId - Keep only rows whose `membership_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} uses - Keep only rows whose `uses` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsCodesList(limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, contactId?: string, code?: string, uses?: string, active?: string): Promise<{}>;
    loyaltyReferralsCodesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, contactId?: string, code?: string, uses?: string, active?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, contactId?: string, code?: string, uses?: string, active?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, membershipId?: string, contactId?: string, code?: string, uses?: string, active?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                membershipId: rest[3] as string,
                contactId: rest[4] as string,
                code: rest[5] as string,
                uses: rest[6] as string,
                active: rest[7] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const membershipId = params.membershipId;
        const contactId = params.contactId;
        const code = params.code;
        const uses = params.uses;
        const active = params.active;


        const apiPath = '/v1/loyalty/referral-codes';
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
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof uses !== 'undefined') {
            apiPayload['uses'] = uses;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
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
     * @returns {Promise<Models.ReferralCode>}
     */
    loyaltyReferralsCodesGet(params: { id: string }): Promise<Models.ReferralCode>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferralCode>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsCodesGet(id: string): Promise<Models.ReferralCode>;
    loyaltyReferralsCodesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ReferralCode> {
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

        const apiPath = '/v1/loyalty/referral-codes/{id}'.replace('{id}', id);
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
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferralCode>}
     */
    loyaltyReferralsCodesDeactivate(params: { id: string, data: object }): Promise<Models.ReferralCode>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReferralCode>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsCodesDeactivate(id: string, data: object): Promise<Models.ReferralCode>;
    loyaltyReferralsCodesDeactivate(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.ReferralCode> {
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

        const apiPath = '/v1/loyalty/referral-codes/{id}/deactivate'.replace('{id}', id);
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
     * Filter `?state=`, `?referrer_contact_id=`, `?referee_contact_id=`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.referralCodeId - Keep only rows whose `referral_code_id` equals this.
     * @param {string} params.referrerMembershipId - Keep only rows whose `referrer_membership_id` equals this.
     * @param {string} params.referrerContactId - Keep only rows whose `referrer_contact_id` equals this.
     * @param {string} params.refereeContactId - Keep only rows whose `referee_contact_id` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.reason - Keep only rows whose `reason` equals this.
     * @param {string} params.refereeVoucherCode - Keep only rows whose `referee_voucher_code` equals this.
     * @param {string} params.referrerVoucherCode - Keep only rows whose `referrer_voucher_code` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    loyaltyReferralsList(params?: { limit?: number, offset?: number, order?: string, id?: string, referralCodeId?: string, referrerMembershipId?: string, referrerContactId?: string, refereeContactId?: string, state?: string, orderId?: string, reason?: string, refereeVoucherCode?: string, referrerVoucherCode?: string }): Promise<{}>;
    /**
     * Filter `?state=`, `?referrer_contact_id=`, `?referee_contact_id=`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} referralCodeId - Keep only rows whose `referral_code_id` equals this.
     * @param {string} referrerMembershipId - Keep only rows whose `referrer_membership_id` equals this.
     * @param {string} referrerContactId - Keep only rows whose `referrer_contact_id` equals this.
     * @param {string} refereeContactId - Keep only rows whose `referee_contact_id` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} reason - Keep only rows whose `reason` equals this.
     * @param {string} refereeVoucherCode - Keep only rows whose `referee_voucher_code` equals this.
     * @param {string} referrerVoucherCode - Keep only rows whose `referrer_voucher_code` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsList(limit?: number, offset?: number, order?: string, id?: string, referralCodeId?: string, referrerMembershipId?: string, referrerContactId?: string, refereeContactId?: string, state?: string, orderId?: string, reason?: string, refereeVoucherCode?: string, referrerVoucherCode?: string): Promise<{}>;
    loyaltyReferralsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, referralCodeId?: string, referrerMembershipId?: string, referrerContactId?: string, refereeContactId?: string, state?: string, orderId?: string, reason?: string, refereeVoucherCode?: string, referrerVoucherCode?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, referralCodeId?: string, referrerMembershipId?: string, referrerContactId?: string, refereeContactId?: string, state?: string, orderId?: string, reason?: string, refereeVoucherCode?: string, referrerVoucherCode?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, referralCodeId?: string, referrerMembershipId?: string, referrerContactId?: string, refereeContactId?: string, state?: string, orderId?: string, reason?: string, refereeVoucherCode?: string, referrerVoucherCode?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                referralCodeId: rest[3] as string,
                referrerMembershipId: rest[4] as string,
                referrerContactId: rest[5] as string,
                refereeContactId: rest[6] as string,
                state: rest[7] as string,
                orderId: rest[8] as string,
                reason: rest[9] as string,
                refereeVoucherCode: rest[10] as string,
                referrerVoucherCode: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const referralCodeId = params.referralCodeId;
        const referrerMembershipId = params.referrerMembershipId;
        const referrerContactId = params.referrerContactId;
        const refereeContactId = params.refereeContactId;
        const state = params.state;
        const orderId = params.orderId;
        const reason = params.reason;
        const refereeVoucherCode = params.refereeVoucherCode;
        const referrerVoucherCode = params.referrerVoucherCode;


        const apiPath = '/v1/loyalty/referrals';
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
        if (typeof referralCodeId !== 'undefined') {
            apiPayload['referral_code_id'] = referralCodeId;
        }
        if (typeof referrerMembershipId !== 'undefined') {
            apiPayload['referrer_membership_id'] = referrerMembershipId;
        }
        if (typeof referrerContactId !== 'undefined') {
            apiPayload['referrer_contact_id'] = referrerContactId;
        }
        if (typeof refereeContactId !== 'undefined') {
            apiPayload['referee_contact_id'] = refereeContactId;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof refereeVoucherCode !== 'undefined') {
            apiPayload['referee_voucher_code'] = refereeVoucherCode;
        }
        if (typeof referrerVoucherCode !== 'undefined') {
            apiPayload['referrer_voucher_code'] = referrerVoucherCode;
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
     * The storefront calls it at sign-up. Records the referral and, when the tenant set one, issues a welcome voucher. Claiming the same code again answers the first claim.
     *
     * @param {string} params.code - 
     * @param {string} params.contactId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     */
    loyaltyReferralsClaim(params: { code: string, contactId: string }): Promise<Models.Referral>;
    /**
     * The storefront calls it at sign-up. Records the referral and, when the tenant set one, issues a welcome voucher. Claiming the same code again answers the first claim.
     *
     * @param {string} code - 
     * @param {string} contactId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsClaim(code: string, contactId: string): Promise<Models.Referral>;
    loyaltyReferralsClaim(
        paramsOrFirst: { code: string, contactId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Referral> {
        let params: { code: string, contactId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, contactId: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                contactId: rest[0] as string            
            };
        }
        
        const code = params.code;
        const contactId = params.contactId;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/loyalty/referrals/claim';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
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

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     */
    loyaltyReferralsGet(params: { id: string }): Promise<Models.Referral>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsGet(id: string): Promise<Models.Referral>;
    loyaltyReferralsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Referral> {
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

        const apiPath = '/v1/loyalty/referrals/{id}'.replace('{id}', id);
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
     * @param {string} params.reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     */
    loyaltyReferralsReject(params: { id: string, reason: string }): Promise<Models.Referral>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsReject(id: string, reason: string): Promise<Models.Referral>;
    loyaltyReferralsReject(
        paramsOrFirst: { id: string, reason: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Referral> {
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

        const apiPath = '/v1/loyalty/referrals/{id}/reject'.replace('{id}', id);
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
     * For a referral that qualified while promotions could not issue the voucher.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     */
    loyaltyReferralsReward(params: { id: string, data: object }): Promise<Models.Referral>;
    /**
     * For a referral that qualified while promotions could not issue the voucher.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Referral>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    loyaltyReferralsReward(id: string, data: object): Promise<Models.Referral>;
    loyaltyReferralsReward(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Referral> {
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

        const apiPath = '/v1/loyalty/referrals/{id}/reward'.replace('{id}', id);
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
}
