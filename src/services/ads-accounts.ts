import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { Platform } from '../enums/platform';
import { Status } from '../enums/status';

export class AdsAccounts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every ad account, without the trash unless `trashed` asks for it. Filter `?platform=`, `?status=connected`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.platform - Keep only rows whose `platform` equals this.
     * @param {string} params.externalAccountId - Keep only rows whose `external_account_id` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.connectionRef - Keep only rows whose `connection_ref` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.lastError - Keep only rows whose `last_error` equals this.
     * @param {string} params.clicksTotal - Keep only rows whose `clicks_total` equals this.
     * @param {string} params.conversionsTotal - Keep only rows whose `conversions_total` equals this.
     * @param {string} params.deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} params.deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} params.trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} params.purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsAccountsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, platform?: string, externalAccountId?: string, name?: string, connectionRef?: string, status?: string, currency?: string, lastError?: string, clicksTotal?: string, conversionsTotal?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string }): Promise<{}>;
    /**
     * Every ad account, without the trash unless `trashed` asks for it. Filter `?platform=`, `?status=connected`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} platform - Keep only rows whose `platform` equals this.
     * @param {string} externalAccountId - Keep only rows whose `external_account_id` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} connectionRef - Keep only rows whose `connection_ref` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} lastError - Keep only rows whose `last_error` equals this.
     * @param {string} clicksTotal - Keep only rows whose `clicks_total` equals this.
     * @param {string} conversionsTotal - Keep only rows whose `conversions_total` equals this.
     * @param {string} deletedBy - Keep only rows whose `deleted_by` equals this.
     * @param {string} deletedById - Keep only rows whose `deleted_by_id` equals this.
     * @param {string} trashBatch - Keep only rows whose `trash_batch` equals this.
     * @param {string} purgeBlockedReason - Keep only rows whose `purge_blocked_reason` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, platform?: string, externalAccountId?: string, name?: string, connectionRef?: string, status?: string, currency?: string, lastError?: string, clicksTotal?: string, conversionsTotal?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string): Promise<{}>;
    adsAccountsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, platform?: string, externalAccountId?: string, name?: string, connectionRef?: string, status?: string, currency?: string, lastError?: string, clicksTotal?: string, conversionsTotal?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, platform?: string, externalAccountId?: string, name?: string, connectionRef?: string, status?: string, currency?: string, lastError?: string, clicksTotal?: string, conversionsTotal?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, platform?: string, externalAccountId?: string, name?: string, connectionRef?: string, status?: string, currency?: string, lastError?: string, clicksTotal?: string, conversionsTotal?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeBlockedReason?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                platform: rest[4] as string,
                externalAccountId: rest[5] as string,
                name: rest[6] as string,
                connectionRef: rest[7] as string,
                status: rest[8] as string,
                currency: rest[9] as string,
                lastError: rest[10] as string,
                clicksTotal: rest[11] as string,
                conversionsTotal: rest[12] as string,
                deletedBy: rest[13] as string,
                deletedById: rest[14] as string,
                trashBatch: rest[15] as string,
                purgeBlockedReason: rest[16] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const platform = params.platform;
        const externalAccountId = params.externalAccountId;
        const name = params.name;
        const connectionRef = params.connectionRef;
        const status = params.status;
        const currency = params.currency;
        const lastError = params.lastError;
        const clicksTotal = params.clicksTotal;
        const conversionsTotal = params.conversionsTotal;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const trashBatch = params.trashBatch;
        const purgeBlockedReason = params.purgeBlockedReason;


        const apiPath = '/v1/ads/accounts';
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
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        if (typeof externalAccountId !== 'undefined') {
            apiPayload['external_account_id'] = externalAccountId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof connectionRef !== 'undefined') {
            apiPayload['connection_ref'] = connectionRef;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof lastError !== 'undefined') {
            apiPayload['last_error'] = lastError;
        }
        if (typeof clicksTotal !== 'undefined') {
            apiPayload['clicks_total'] = clicksTotal;
        }
        if (typeof conversionsTotal !== 'undefined') {
            apiPayload['conversions_total'] = conversionsTotal;
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
     * @param {string} params.externalAccountId - The account id on the platform (ad account, customer id, LinkedIn account).
     * @param {string} params.name - What the merchant calls the account.
     * @param {Platform} params.platform - `meta`, `google_ads` or `linkedin`.
     * @param {number} params.clicksTotal - All clicks the spend imports reported. Recounted with spend_total.
     * @param {string} params.connectionRef - The Integration Studio connection that holds the platform login. Without one the account is not connected.
     * @param {number} params.conversionValueTotal - The value of those conversions in the account's currency. Recounted with spend_total.
     * @param {number} params.conversionsTotal - Conversions recorded with consent — skipped ones not counted. Recounted with spend_total.
     * @param {string} params.currency - Three-letter currency code, e.g. EUR.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} params.figuresAt - When the totals were last recounted.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} params.roas - conversion_value_total divided by spend_total, two decimals; empty while nothing was spent.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {number} params.spendTotal - All spend imported for the account, in its currency. Recounted by the hourly run and after each spend import; never written by a caller.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     */
    adsAccountsCreate(params: { externalAccountId: string, name: string, platform: Platform, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalRefs?: any, figuresAt?: string, metadata?: any, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number }): Promise<Models.AdAccount>;
    /**
     *
     * @param {string} externalAccountId - The account id on the platform (ad account, customer id, LinkedIn account).
     * @param {string} name - What the merchant calls the account.
     * @param {Platform} platform - `meta`, `google_ads` or `linkedin`.
     * @param {number} clicksTotal - All clicks the spend imports reported. Recounted with spend_total.
     * @param {string} connectionRef - The Integration Studio connection that holds the platform login. Without one the account is not connected.
     * @param {number} conversionValueTotal - The value of those conversions in the account's currency. Recounted with spend_total.
     * @param {number} conversionsTotal - Conversions recorded with consent — skipped ones not counted. Recounted with spend_total.
     * @param {string} currency - Three-letter currency code, e.g. EUR.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} figuresAt - When the totals were last recounted.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {number} roas - conversion_value_total divided by spend_total, two decimals; empty while nothing was spent.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {number} spendTotal - All spend imported for the account, in its currency. Recounted by the hourly run and after each spend import; never written by a caller.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsCreate(externalAccountId: string, name: string, platform: Platform, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalRefs?: any, figuresAt?: string, metadata?: any, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number): Promise<Models.AdAccount>;
    adsAccountsCreate(
        paramsOrFirst: { externalAccountId: string, name: string, platform: Platform, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalRefs?: any, figuresAt?: string, metadata?: any, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number } | string,
        ...rest: [(string)?, (Platform)?, (number)?, (string)?, (number)?, (number)?, (string)?, (any)?, (string)?, (any)?, (number)?, (any)?, (string)?, (number)?]    
    ): Promise<Models.AdAccount> {
        let params: { externalAccountId: string, name: string, platform: Platform, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalRefs?: any, figuresAt?: string, metadata?: any, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { externalAccountId: string, name: string, platform: Platform, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalRefs?: any, figuresAt?: string, metadata?: any, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number };
        } else {
            params = {
                externalAccountId: paramsOrFirst as string,
                name: rest[0] as string,
                platform: rest[1] as Platform,
                clicksTotal: rest[2] as number,
                connectionRef: rest[3] as string,
                conversionValueTotal: rest[4] as number,
                conversionsTotal: rest[5] as number,
                currency: rest[6] as string,
                externalRefs: rest[7] as any,
                figuresAt: rest[8] as string,
                metadata: rest[9] as any,
                roas: rest[10] as number,
                sourceData: rest[11] as any,
                sourceSyncedAt: rest[12] as string,
                spendTotal: rest[13] as number            
            };
        }
        
        const externalAccountId = params.externalAccountId;
        const name = params.name;
        const platform = params.platform;
        const clicksTotal = params.clicksTotal;
        const connectionRef = params.connectionRef;
        const conversionValueTotal = params.conversionValueTotal;
        const conversionsTotal = params.conversionsTotal;
        const currency = params.currency;
        const externalRefs = params.externalRefs;
        const figuresAt = params.figuresAt;
        const metadata = params.metadata;
        const roas = params.roas;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const spendTotal = params.spendTotal;

        if (typeof externalAccountId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "externalAccountId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof platform === 'undefined') {
            throw new RevenexxException('Missing required parameter: "platform"');
        }

        const apiPath = '/v1/ads/accounts';
        const apiPayload: Payload = {};
        if (typeof clicksTotal !== 'undefined') {
            apiPayload['clicks_total'] = clicksTotal;
        }
        if (typeof connectionRef !== 'undefined') {
            apiPayload['connection_ref'] = connectionRef;
        }
        if (typeof conversionValueTotal !== 'undefined') {
            apiPayload['conversion_value_total'] = conversionValueTotal;
        }
        if (typeof conversionsTotal !== 'undefined') {
            apiPayload['conversions_total'] = conversionsTotal;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof externalAccountId !== 'undefined') {
            apiPayload['external_account_id'] = externalAccountId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof figuresAt !== 'undefined') {
            apiPayload['figures_at'] = figuresAt;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        if (typeof roas !== 'undefined') {
            apiPayload['roas'] = roas;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof spendTotal !== 'undefined') {
            apiPayload['spend_total'] = spendTotal;
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
     * Every ad account in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    adsAccountsEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/ads/accounts/trash/empty';
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
     * What the nightly purge does, callable by hand: every ad account in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsAccountsPurge(): Promise<{}> {

        const apiPath = '/v1/ads/accounts/trash/purge';
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
     * The first DELETE moves the ad account into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Only an account that never booked spend or sent a conversion goes into the trash; one that did is refused (`trash_blocked`, blocker `has_history`) — disconnect it instead. Its audience syncs, conversion rules and campaign links stay untouched and do nothing while it is in the trash; they are deleted with it for good. A DELETE on a ad account already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsAccountsDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the ad account into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Only an account that never booked spend or sent a conversion goes into the trash; one that did is refused (`trash_blocked`, blocker `has_history`) — disconnect it instead. Its audience syncs, conversion rules and campaign links stay untouched and do nothing while it is in the trash; they are deleted with it for good. A DELETE on a ad account already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsDelete(id: string): Promise<{}>;
    adsAccountsDelete(
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

        const apiPath = '/v1/ads/accounts/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AdAccount>}
     */
    adsAccountsGet(params: { id: string }): Promise<Models.AdAccount>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsGet(id: string): Promise<Models.AdAccount>;
    adsAccountsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AdAccount> {
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

        const apiPath = '/v1/ads/accounts/{id}'.replace('{id}', id);
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
     * @param {number} params.clicksTotal - All clicks the spend imports reported. Recounted with spend_total.
     * @param {string} params.connectionRef - The Integration Studio connection that holds the platform login. Without one the account is not connected.
     * @param {number} params.conversionValueTotal - The value of those conversions in the account's currency. Recounted with spend_total.
     * @param {number} params.conversionsTotal - Conversions recorded with consent — skipped ones not counted. Recounted with spend_total.
     * @param {string} params.currency - Three-letter currency code, e.g. EUR.
     * @param {string} params.externalAccountId - The account id on the platform (ad account, customer id, LinkedIn account).
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} params.figuresAt - When the totals were last recounted.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - What the merchant calls the account.
     * @param {Platform} params.platform - `meta`, `google_ads` or `linkedin`.
     * @param {number} params.roas - conversion_value_total divided by spend_total, two decimals; empty while nothing was spent.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {number} params.spendTotal - All spend imported for the account, in its currency. Recounted by the hourly run and after each spend import; never written by a caller.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     */
    adsAccountsUpdate(params: { id: string, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalAccountId?: string, externalRefs?: any, figuresAt?: string, metadata?: any, name?: string, platform?: Platform, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number }): Promise<Models.AdAccount>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {number} clicksTotal - All clicks the spend imports reported. Recounted with spend_total.
     * @param {string} connectionRef - The Integration Studio connection that holds the platform login. Without one the account is not connected.
     * @param {number} conversionValueTotal - The value of those conversions in the account's currency. Recounted with spend_total.
     * @param {number} conversionsTotal - Conversions recorded with consent — skipped ones not counted. Recounted with spend_total.
     * @param {string} currency - Three-letter currency code, e.g. EUR.
     * @param {string} externalAccountId - The account id on the platform (ad account, customer id, LinkedIn account).
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} figuresAt - When the totals were last recounted.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - What the merchant calls the account.
     * @param {Platform} platform - `meta`, `google_ads` or `linkedin`.
     * @param {number} roas - conversion_value_total divided by spend_total, two decimals; empty while nothing was spent.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {number} spendTotal - All spend imported for the account, in its currency. Recounted by the hourly run and after each spend import; never written by a caller.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsUpdate(id: string, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalAccountId?: string, externalRefs?: any, figuresAt?: string, metadata?: any, name?: string, platform?: Platform, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number): Promise<Models.AdAccount>;
    adsAccountsUpdate(
        paramsOrFirst: { id: string, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalAccountId?: string, externalRefs?: any, figuresAt?: string, metadata?: any, name?: string, platform?: Platform, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number } | string,
        ...rest: [(number)?, (string)?, (number)?, (number)?, (string)?, (string)?, (any)?, (string)?, (any)?, (string)?, (Platform)?, (number)?, (any)?, (string)?, (number)?]    
    ): Promise<Models.AdAccount> {
        let params: { id: string, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalAccountId?: string, externalRefs?: any, figuresAt?: string, metadata?: any, name?: string, platform?: Platform, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, clicksTotal?: number, connectionRef?: string, conversionValueTotal?: number, conversionsTotal?: number, currency?: string, externalAccountId?: string, externalRefs?: any, figuresAt?: string, metadata?: any, name?: string, platform?: Platform, roas?: number, sourceData?: any, sourceSyncedAt?: string, spendTotal?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                clicksTotal: rest[0] as number,
                connectionRef: rest[1] as string,
                conversionValueTotal: rest[2] as number,
                conversionsTotal: rest[3] as number,
                currency: rest[4] as string,
                externalAccountId: rest[5] as string,
                externalRefs: rest[6] as any,
                figuresAt: rest[7] as string,
                metadata: rest[8] as any,
                name: rest[9] as string,
                platform: rest[10] as Platform,
                roas: rest[11] as number,
                sourceData: rest[12] as any,
                sourceSyncedAt: rest[13] as string,
                spendTotal: rest[14] as number            
            };
        }
        
        const id = params.id;
        const clicksTotal = params.clicksTotal;
        const connectionRef = params.connectionRef;
        const conversionValueTotal = params.conversionValueTotal;
        const conversionsTotal = params.conversionsTotal;
        const currency = params.currency;
        const externalAccountId = params.externalAccountId;
        const externalRefs = params.externalRefs;
        const figuresAt = params.figuresAt;
        const metadata = params.metadata;
        const name = params.name;
        const platform = params.platform;
        const roas = params.roas;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const spendTotal = params.spendTotal;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/accounts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof clicksTotal !== 'undefined') {
            apiPayload['clicks_total'] = clicksTotal;
        }
        if (typeof connectionRef !== 'undefined') {
            apiPayload['connection_ref'] = connectionRef;
        }
        if (typeof conversionValueTotal !== 'undefined') {
            apiPayload['conversion_value_total'] = conversionValueTotal;
        }
        if (typeof conversionsTotal !== 'undefined') {
            apiPayload['conversions_total'] = conversionsTotal;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof externalAccountId !== 'undefined') {
            apiPayload['external_account_id'] = externalAccountId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof figuresAt !== 'undefined') {
            apiPayload['figures_at'] = figuresAt;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof platform !== 'undefined') {
            apiPayload['platform'] = platform;
        }
        if (typeof roas !== 'undefined') {
            apiPayload['roas'] = roas;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof spendTotal !== 'undefined') {
            apiPayload['spend_total'] = spendTotal;
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
     * Clears the trash marks on the ad account. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    adsAccountsRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the ad account. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsRestore(id: string): Promise<Models.TrashRestoreResult>;
    adsAccountsRestore(
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

        const apiPath = '/v1/ads/accounts/{id}/restore'.replace('{id}', id);
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
     * Called by a connector workflow when a login expired or works again.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {Status} params.status - 
     * @param {string} params.error - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     */
    adsAccountsStatus(params: { id: string, status: Status, error?: string }): Promise<Models.AdAccount>;
    /**
     * Called by a connector workflow when a login expired or works again.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {Status} status - 
     * @param {string} error - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.AdAccount>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsAccountsStatus(id: string, status: Status, error?: string): Promise<Models.AdAccount>;
    adsAccountsStatus(
        paramsOrFirst: { id: string, status: Status, error?: string } | string,
        ...rest: [(Status)?, (string)?]    
    ): Promise<Models.AdAccount> {
        let params: { id: string, status: Status, error?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, status: Status, error?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                status: rest[0] as Status,
                error: rest[1] as string            
            };
        }
        
        const id = params.id;
        const status = params.status;
        const error = params.error;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof status === 'undefined') {
            throw new RevenexxException('Missing required parameter: "status"');
        }

        const apiPath = '/v1/ads/accounts/{id}/status'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof error !== 'undefined') {
            apiPayload['error'] = error;
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
}
