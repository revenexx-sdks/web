import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { GoalMetric } from '../enums/goal-metric';
import { CampaignsCampaignsCreateStatus } from '../enums/campaigns-campaigns-create-status';
import { AssetApp } from '../enums/asset-app';
import { Model } from '../enums/model';

export class CampaignsCampaigns {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every campaign of this tenant. Filter `?effective_state=running` for what runs now, `?utm_campaign=` to resolve the campaign a tracked landing names.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.effectiveState - Keep only rows whose `effective_state` equals this.
     * @param {string} params.ownerId - Keep only rows whose `owner_id` equals this.
     * @param {string} params.utmCampaign - Keep only rows whose `utm_campaign` equals this.
     * @param {string} params.goalMetric - Keep only rows whose `goal_metric` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.ordersCount - Keep only rows whose `orders_count` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCampaignsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, status?: string, effectiveState?: string, ownerId?: string, utmCampaign?: string, goalMetric?: string, currency?: string, ordersCount?: string, externalId?: string }): Promise<{}>;
    /**
     * Every campaign of this tenant. Filter `?effective_state=running` for what runs now, `?utm_campaign=` to resolve the campaign a tracked landing names.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} effectiveState - Keep only rows whose `effective_state` equals this.
     * @param {string} ownerId - Keep only rows whose `owner_id` equals this.
     * @param {string} utmCampaign - Keep only rows whose `utm_campaign` equals this.
     * @param {string} goalMetric - Keep only rows whose `goal_metric` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} ordersCount - Keep only rows whose `orders_count` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, status?: string, effectiveState?: string, ownerId?: string, utmCampaign?: string, goalMetric?: string, currency?: string, ordersCount?: string, externalId?: string): Promise<{}>;
    campaignsCampaignsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, status?: string, effectiveState?: string, ownerId?: string, utmCampaign?: string, goalMetric?: string, currency?: string, ordersCount?: string, externalId?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, status?: string, effectiveState?: string, ownerId?: string, utmCampaign?: string, goalMetric?: string, currency?: string, ordersCount?: string, externalId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, name?: string, description?: string, status?: string, effectiveState?: string, ownerId?: string, utmCampaign?: string, goalMetric?: string, currency?: string, ordersCount?: string, externalId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                code: rest[4] as string,
                name: rest[5] as string,
                description: rest[6] as string,
                status: rest[7] as string,
                effectiveState: rest[8] as string,
                ownerId: rest[9] as string,
                utmCampaign: rest[10] as string,
                goalMetric: rest[11] as string,
                currency: rest[12] as string,
                ordersCount: rest[13] as string,
                externalId: rest[14] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const description = params.description;
        const status = params.status;
        const effectiveState = params.effectiveState;
        const ownerId = params.ownerId;
        const utmCampaign = params.utmCampaign;
        const goalMetric = params.goalMetric;
        const currency = params.currency;
        const ordersCount = params.ordersCount;
        const externalId = params.externalId;


        const apiPath = '/v1/campaigns/campaigns';
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
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof effectiveState !== 'undefined') {
            apiPayload['effective_state'] = effectiveState;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof utmCampaign !== 'undefined') {
            apiPayload['utm_campaign'] = utmCampaign;
        }
        if (typeof goalMetric !== 'undefined') {
            apiPayload['goal_metric'] = goalMetric;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof ordersCount !== 'undefined') {
            apiPayload['orders_count'] = ordersCount;
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
     * @param {string} params.code - The short identifier a marketer recognises the campaign by. Unique per tenant.
     * @param {string} params.name - What the campaign is called, e.g. Black Week 2026.
     * @param {string} params.currency - The currency the budget and the revenue figures are stated in.
     * @param {string} params.description - What the campaign is for, in the marketer own words.
     * @param {string} params.endsAt - When the window closes. Empty means open-ended. Never before `starts_at`.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {GoalMetric} params.goalMetric - The one figure the campaign is judged by: revenue, orders, redemptions, leads, subscriptions or clicks.
     * @param {number} params.goalValue - The target for `goal_metric`. Needs a metric.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.ownerId - Who is responsible: a sales-rep code or a platform user.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} params.startsAt - When the campaign window opens. Empty means it runs from its release.
     * @param {CampaignsCampaignsCreateStatus} params.status - What the marketer set: `draft`, `active` (released), `completed` or `archived`. What the campaign is doing right now also depends on its window — read `effective_state`.
     * @param {any} params.tags - Free labels a marketer groups campaigns by, as a list of words.
     * @param {string} params.utmCampaign - The value a tracked link carries as utm_campaign, lower case. Unique per tenant; an order arriving with it is credited to this campaign. Filter `?utm_campaign=` to resolve a campaign from a landing.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Campaign>}
     */
    campaignsCampaignsCreate(params: { code: string, name: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string }): Promise<Models.Campaign>;
    /**
     *
     * @param {string} code - The short identifier a marketer recognises the campaign by. Unique per tenant.
     * @param {string} name - What the campaign is called, e.g. Black Week 2026.
     * @param {string} currency - The currency the budget and the revenue figures are stated in.
     * @param {string} description - What the campaign is for, in the marketer own words.
     * @param {string} endsAt - When the window closes. Empty means open-ended. Never before `starts_at`.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {GoalMetric} goalMetric - The one figure the campaign is judged by: revenue, orders, redemptions, leads, subscriptions or clicks.
     * @param {number} goalValue - The target for `goal_metric`. Needs a metric.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} ownerId - Who is responsible: a sales-rep code or a platform user.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} startsAt - When the campaign window opens. Empty means it runs from its release.
     * @param {CampaignsCampaignsCreateStatus} status - What the marketer set: `draft`, `active` (released), `completed` or `archived`. What the campaign is doing right now also depends on its window — read `effective_state`.
     * @param {any} tags - Free labels a marketer groups campaigns by, as a list of words.
     * @param {string} utmCampaign - The value a tracked link carries as utm_campaign, lower case. Unique per tenant; an order arriving with it is credited to this campaign. Filter `?utm_campaign=` to resolve a campaign from a landing.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Campaign>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsCreate(code: string, name: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string): Promise<Models.Campaign>;
    campaignsCampaignsCreate(
        paramsOrFirst: { code: string, name: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (any)?, (GoalMetric)?, (number)?, (any)?, (string)?, (any)?, (string)?, (string)?, (CampaignsCampaignsCreateStatus)?, (any)?, (string)?]    
    ): Promise<Models.Campaign> {
        let params: { code: string, name: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                currency: rest[1] as string,
                description: rest[2] as string,
                endsAt: rest[3] as string,
                externalId: rest[4] as string,
                externalRefs: rest[5] as any,
                goalMetric: rest[6] as GoalMetric,
                goalValue: rest[7] as number,
                metadata: rest[8] as any,
                ownerId: rest[9] as string,
                sourceData: rest[10] as any,
                sourceSyncedAt: rest[11] as string,
                startsAt: rest[12] as string,
                status: rest[13] as CampaignsCampaignsCreateStatus,
                tags: rest[14] as any,
                utmCampaign: rest[15] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const currency = params.currency;
        const description = params.description;
        const endsAt = params.endsAt;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const goalMetric = params.goalMetric;
        const goalValue = params.goalValue;
        const metadata = params.metadata;
        const ownerId = params.ownerId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const startsAt = params.startsAt;
        const status = params.status;
        const tags = params.tags;
        const utmCampaign = params.utmCampaign;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/campaigns/campaigns';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof endsAt !== 'undefined') {
            apiPayload['ends_at'] = endsAt;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof goalMetric !== 'undefined') {
            apiPayload['goal_metric'] = goalMetric;
        }
        if (typeof goalValue !== 'undefined') {
            apiPayload['goal_value'] = goalValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof startsAt !== 'undefined') {
            apiPayload['starts_at'] = startsAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof tags !== 'undefined') {
            apiPayload['tags'] = tags;
        }
        if (typeof utmCampaign !== 'undefined') {
            apiPayload['utm_campaign'] = utmCampaign;
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
     * Every campaign in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    campaignsCampaignsEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/campaigns/campaigns/trash/empty';
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
     * What the nightly purge does, callable by hand: every campaign in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCampaignsPurge(): Promise<{}> {

        const apiPath = '/v1/campaigns/campaigns/trash/purge';
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
     * The first DELETE moves the campaign into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A campaign with attribution facts or touches is refused (`trash_blocked`, blocker `campaign_in_use`) — archive it instead; one still holding assets is not deleted for good (`delete_blocked`, blocker `campaign_has_assets`). A DELETE on a campaign already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCampaignsDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the campaign into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. A campaign with attribution facts or touches is refused (`trash_blocked`, blocker `campaign_in_use`) — archive it instead; one still holding assets is not deleted for good (`delete_blocked`, blocker `campaign_has_assets`). A DELETE on a campaign already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsDelete(id: string): Promise<{}>;
    campaignsCampaignsDelete(
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

        const apiPath = '/v1/campaigns/campaigns/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Campaign>}
     */
    campaignsCampaignsGet(params: { id: string }): Promise<Models.Campaign>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Campaign>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsGet(id: string): Promise<Models.Campaign>;
    campaignsCampaignsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Campaign> {
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

        const apiPath = '/v1/campaigns/campaigns/{id}'.replace('{id}', id);
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
     * @param {string} params.code - The short identifier a marketer recognises the campaign by. Unique per tenant.
     * @param {string} params.currency - The currency the budget and the revenue figures are stated in.
     * @param {string} params.description - What the campaign is for, in the marketer own words.
     * @param {string} params.endsAt - When the window closes. Empty means open-ended. Never before `starts_at`.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {GoalMetric} params.goalMetric - The one figure the campaign is judged by: revenue, orders, redemptions, leads, subscriptions or clicks.
     * @param {number} params.goalValue - The target for `goal_metric`. Needs a metric.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - What the campaign is called, e.g. Black Week 2026.
     * @param {string} params.ownerId - Who is responsible: a sales-rep code or a platform user.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} params.startsAt - When the campaign window opens. Empty means it runs from its release.
     * @param {CampaignsCampaignsCreateStatus} params.status - What the marketer set: `draft`, `active` (released), `completed` or `archived`. What the campaign is doing right now also depends on its window — read `effective_state`.
     * @param {any} params.tags - Free labels a marketer groups campaigns by, as a list of words.
     * @param {string} params.utmCampaign - The value a tracked link carries as utm_campaign, lower case. Unique per tenant; an order arriving with it is credited to this campaign. Filter `?utm_campaign=` to resolve a campaign from a landing.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Campaign>}
     */
    campaignsCampaignsUpdate(params: { id: string, code?: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, name?: string, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string }): Promise<Models.Campaign>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} code - The short identifier a marketer recognises the campaign by. Unique per tenant.
     * @param {string} currency - The currency the budget and the revenue figures are stated in.
     * @param {string} description - What the campaign is for, in the marketer own words.
     * @param {string} endsAt - When the window closes. Empty means open-ended. Never before `starts_at`.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {GoalMetric} goalMetric - The one figure the campaign is judged by: revenue, orders, redemptions, leads, subscriptions or clicks.
     * @param {number} goalValue - The target for `goal_metric`. Needs a metric.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - What the campaign is called, e.g. Black Week 2026.
     * @param {string} ownerId - Who is responsible: a sales-rep code or a platform user.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} startsAt - When the campaign window opens. Empty means it runs from its release.
     * @param {CampaignsCampaignsCreateStatus} status - What the marketer set: `draft`, `active` (released), `completed` or `archived`. What the campaign is doing right now also depends on its window — read `effective_state`.
     * @param {any} tags - Free labels a marketer groups campaigns by, as a list of words.
     * @param {string} utmCampaign - The value a tracked link carries as utm_campaign, lower case. Unique per tenant; an order arriving with it is credited to this campaign. Filter `?utm_campaign=` to resolve a campaign from a landing.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Campaign>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsUpdate(id: string, code?: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, name?: string, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string): Promise<Models.Campaign>;
    campaignsCampaignsUpdate(
        paramsOrFirst: { id: string, code?: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, name?: string, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (any)?, (GoalMetric)?, (number)?, (any)?, (string)?, (string)?, (any)?, (string)?, (string)?, (CampaignsCampaignsCreateStatus)?, (any)?, (string)?]    
    ): Promise<Models.Campaign> {
        let params: { id: string, code?: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, name?: string, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, currency?: string, description?: string, endsAt?: string, externalId?: string, externalRefs?: any, goalMetric?: GoalMetric, goalValue?: number, metadata?: any, name?: string, ownerId?: string, sourceData?: any, sourceSyncedAt?: string, startsAt?: string, status?: CampaignsCampaignsCreateStatus, tags?: any, utmCampaign?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                currency: rest[1] as string,
                description: rest[2] as string,
                endsAt: rest[3] as string,
                externalId: rest[4] as string,
                externalRefs: rest[5] as any,
                goalMetric: rest[6] as GoalMetric,
                goalValue: rest[7] as number,
                metadata: rest[8] as any,
                name: rest[9] as string,
                ownerId: rest[10] as string,
                sourceData: rest[11] as any,
                sourceSyncedAt: rest[12] as string,
                startsAt: rest[13] as string,
                status: rest[14] as CampaignsCampaignsCreateStatus,
                tags: rest[15] as any,
                utmCampaign: rest[16] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const currency = params.currency;
        const description = params.description;
        const endsAt = params.endsAt;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const goalMetric = params.goalMetric;
        const goalValue = params.goalValue;
        const metadata = params.metadata;
        const name = params.name;
        const ownerId = params.ownerId;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const startsAt = params.startsAt;
        const status = params.status;
        const tags = params.tags;
        const utmCampaign = params.utmCampaign;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/campaigns/campaigns/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof endsAt !== 'undefined') {
            apiPayload['ends_at'] = endsAt;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof goalMetric !== 'undefined') {
            apiPayload['goal_metric'] = goalMetric;
        }
        if (typeof goalValue !== 'undefined') {
            apiPayload['goal_value'] = goalValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof startsAt !== 'undefined') {
            apiPayload['starts_at'] = startsAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof tags !== 'undefined') {
            apiPayload['tags'] = tags;
        }
        if (typeof utmCampaign !== 'undefined') {
            apiPayload['utm_campaign'] = utmCampaign;
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
     * Claims a promotion, mailing, journey or form by writing the campaign id into its own campaign_ref through the owning app, and records the asset here. Pages and ad campaigns are recorded here only. Attaching what is already attached to this campaign answers the existing row.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.adCampaignLinkId - Shorthand for an ad campaign link of the ads app.
     * @param {AssetApp} params.assetApp - The app that owns the asset.
     * @param {string} params.assetEntity - The kind of record in that app. Defaults per app: promotions, mailings, journeys, forms, pages, ad_campaign_links.
     * @param {string} params.assetId - The asset id in its own app.
     * @param {string} params.formId - Shorthand for a form.
     * @param {string} params.journeyId - Shorthand for an automation.
     * @param {string} params.label - What to call the asset here. Defaults to its own name.
     * @param {string} params.libraryItemId - Shorthand for a page library item, such as a pop-up.
     * @param {string} params.mailingId - Shorthand for a marketing mail.
     * @param {string} params.pageId - Shorthand for a page.
     * @param {string} params.promotionId - Shorthand for a promotion.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignAsset>}
     */
    campaignsCampaignsAttach(params: { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string }): Promise<Models.CampaignAsset>;
    /**
     * Claims a promotion, mailing, journey or form by writing the campaign id into its own campaign_ref through the owning app, and records the asset here. Pages and ad campaigns are recorded here only. Attaching what is already attached to this campaign answers the existing row.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} adCampaignLinkId - Shorthand for an ad campaign link of the ads app.
     * @param {AssetApp} assetApp - The app that owns the asset.
     * @param {string} assetEntity - The kind of record in that app. Defaults per app: promotions, mailings, journeys, forms, pages, ad_campaign_links.
     * @param {string} assetId - The asset id in its own app.
     * @param {string} formId - Shorthand for a form.
     * @param {string} journeyId - Shorthand for an automation.
     * @param {string} label - What to call the asset here. Defaults to its own name.
     * @param {string} libraryItemId - Shorthand for a page library item, such as a pop-up.
     * @param {string} mailingId - Shorthand for a marketing mail.
     * @param {string} pageId - Shorthand for a page.
     * @param {string} promotionId - Shorthand for a promotion.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CampaignAsset>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsAttach(id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string): Promise<Models.CampaignAsset>;
    campaignsCampaignsAttach(
        paramsOrFirst: { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string } | string,
        ...rest: [(string)?, (AssetApp)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.CampaignAsset> {
        let params: { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                adCampaignLinkId: rest[0] as string,
                assetApp: rest[1] as AssetApp,
                assetEntity: rest[2] as string,
                assetId: rest[3] as string,
                formId: rest[4] as string,
                journeyId: rest[5] as string,
                label: rest[6] as string,
                libraryItemId: rest[7] as string,
                mailingId: rest[8] as string,
                pageId: rest[9] as string,
                promotionId: rest[10] as string            
            };
        }
        
        const id = params.id;
        const adCampaignLinkId = params.adCampaignLinkId;
        const assetApp = params.assetApp;
        const assetEntity = params.assetEntity;
        const assetId = params.assetId;
        const formId = params.formId;
        const journeyId = params.journeyId;
        const label = params.label;
        const libraryItemId = params.libraryItemId;
        const mailingId = params.mailingId;
        const pageId = params.pageId;
        const promotionId = params.promotionId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/campaigns/campaigns/{id}/attach'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof adCampaignLinkId !== 'undefined') {
            apiPayload['ad_campaign_link_id'] = adCampaignLinkId;
        }
        if (typeof assetApp !== 'undefined') {
            apiPayload['asset_app'] = assetApp;
        }
        if (typeof assetEntity !== 'undefined') {
            apiPayload['asset_entity'] = assetEntity;
        }
        if (typeof assetId !== 'undefined') {
            apiPayload['asset_id'] = assetId;
        }
        if (typeof formId !== 'undefined') {
            apiPayload['form_id'] = formId;
        }
        if (typeof journeyId !== 'undefined') {
            apiPayload['journey_id'] = journeyId;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof libraryItemId !== 'undefined') {
            apiPayload['library_item_id'] = libraryItemId;
        }
        if (typeof mailingId !== 'undefined') {
            apiPayload['mailing_id'] = mailingId;
        }
        if (typeof pageId !== 'undefined') {
            apiPayload['page_id'] = pageId;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
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
     * Clears the campaign_ref on the asset, if it still names this campaign, and removes the asset row.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.adCampaignLinkId - Shorthand for an ad campaign link of the ads app.
     * @param {AssetApp} params.assetApp - The app that owns the asset.
     * @param {string} params.assetEntity - The kind of record in that app. Defaults per app: promotions, mailings, journeys, forms, pages, ad_campaign_links.
     * @param {string} params.assetId - The asset id in its own app.
     * @param {string} params.formId - Shorthand for a form.
     * @param {string} params.journeyId - Shorthand for an automation.
     * @param {string} params.label - What to call the asset here. Defaults to its own name.
     * @param {string} params.libraryItemId - Shorthand for a page library item, such as a pop-up.
     * @param {string} params.mailingId - Shorthand for a marketing mail.
     * @param {string} params.pageId - Shorthand for a page.
     * @param {string} params.promotionId - Shorthand for a promotion.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCampaignsDetach(params: { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string }): Promise<{}>;
    /**
     * Clears the campaign_ref on the asset, if it still names this campaign, and removes the asset row.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} adCampaignLinkId - Shorthand for an ad campaign link of the ads app.
     * @param {AssetApp} assetApp - The app that owns the asset.
     * @param {string} assetEntity - The kind of record in that app. Defaults per app: promotions, mailings, journeys, forms, pages, ad_campaign_links.
     * @param {string} assetId - The asset id in its own app.
     * @param {string} formId - Shorthand for a form.
     * @param {string} journeyId - Shorthand for an automation.
     * @param {string} label - What to call the asset here. Defaults to its own name.
     * @param {string} libraryItemId - Shorthand for a page library item, such as a pop-up.
     * @param {string} mailingId - Shorthand for a marketing mail.
     * @param {string} pageId - Shorthand for a page.
     * @param {string} promotionId - Shorthand for a promotion.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsDetach(id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string): Promise<{}>;
    campaignsCampaignsDetach(
        paramsOrFirst: { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string } | string,
        ...rest: [(string)?, (AssetApp)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, adCampaignLinkId?: string, assetApp?: AssetApp, assetEntity?: string, assetId?: string, formId?: string, journeyId?: string, label?: string, libraryItemId?: string, mailingId?: string, pageId?: string, promotionId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                adCampaignLinkId: rest[0] as string,
                assetApp: rest[1] as AssetApp,
                assetEntity: rest[2] as string,
                assetId: rest[3] as string,
                formId: rest[4] as string,
                journeyId: rest[5] as string,
                label: rest[6] as string,
                libraryItemId: rest[7] as string,
                mailingId: rest[8] as string,
                pageId: rest[9] as string,
                promotionId: rest[10] as string            
            };
        }
        
        const id = params.id;
        const adCampaignLinkId = params.adCampaignLinkId;
        const assetApp = params.assetApp;
        const assetEntity = params.assetEntity;
        const assetId = params.assetId;
        const formId = params.formId;
        const journeyId = params.journeyId;
        const label = params.label;
        const libraryItemId = params.libraryItemId;
        const mailingId = params.mailingId;
        const pageId = params.pageId;
        const promotionId = params.promotionId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/campaigns/campaigns/{id}/detach'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof adCampaignLinkId !== 'undefined') {
            apiPayload['ad_campaign_link_id'] = adCampaignLinkId;
        }
        if (typeof assetApp !== 'undefined') {
            apiPayload['asset_app'] = assetApp;
        }
        if (typeof assetEntity !== 'undefined') {
            apiPayload['asset_entity'] = assetEntity;
        }
        if (typeof assetId !== 'undefined') {
            apiPayload['asset_id'] = assetId;
        }
        if (typeof formId !== 'undefined') {
            apiPayload['form_id'] = formId;
        }
        if (typeof journeyId !== 'undefined') {
            apiPayload['journey_id'] = journeyId;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof libraryItemId !== 'undefined') {
            apiPayload['library_item_id'] = libraryItemId;
        }
        if (typeof mailingId !== 'undefined') {
            apiPayload['mailing_id'] = mailingId;
        }
        if (typeof pageId !== 'undefined') {
            apiPayload['page_id'] = pageId;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
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
     * Adds utm_source (default from the settings), utm_medium, utm_campaign and optionally utm_content and utm_term to a URL, replacing UTM values it already carried. A campaign without a UTM value gets its code slug the first time.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.medium - The channel the link travels in, e.g. email, social, print.
     * @param {string} params.url - The absolute http(s) address to tag.
     * @param {string} params.content - Tells two links of one campaign apart.
     * @param {string} params.source - Overrides the default source.
     * @param {string} params.term - A paid search term.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCampaignsLinks(params: { id: string, medium: string, url: string, content?: string, source?: string, term?: string }): Promise<{}>;
    /**
     * Adds utm_source (default from the settings), utm_medium, utm_campaign and optionally utm_content and utm_term to a URL, replacing UTM values it already carried. A campaign without a UTM value gets its code slug the first time.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} medium - The channel the link travels in, e.g. email, social, print.
     * @param {string} url - The absolute http(s) address to tag.
     * @param {string} content - Tells two links of one campaign apart.
     * @param {string} source - Overrides the default source.
     * @param {string} term - A paid search term.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsLinks(id: string, medium: string, url: string, content?: string, source?: string, term?: string): Promise<{}>;
    campaignsCampaignsLinks(
        paramsOrFirst: { id: string, medium: string, url: string, content?: string, source?: string, term?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, medium: string, url: string, content?: string, source?: string, term?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, medium: string, url: string, content?: string, source?: string, term?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                medium: rest[0] as string,
                url: rest[1] as string,
                content: rest[2] as string,
                source: rest[3] as string,
                term: rest[4] as string            
            };
        }
        
        const id = params.id;
        const medium = params.medium;
        const url = params.url;
        const content = params.content;
        const source = params.source;
        const term = params.term;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof medium === 'undefined') {
            throw new RevenexxException('Missing required parameter: "medium"');
        }
        if (typeof url === 'undefined') {
            throw new RevenexxException('Missing required parameter: "url"');
        }

        const apiPath = '/v1/campaigns/campaigns/{id}/links'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof content !== 'undefined') {
            apiPayload['content'] = content;
        }
        if (typeof medium !== 'undefined') {
            apiPayload['medium'] = medium;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof term !== 'undefined') {
            apiPayload['term'] = term;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
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
     * Revenue and orders under the chosen model, returns netted out; redemptions, clicks, impressions, subscriptions and leads; goal progress; budget planned and spent with return on ad spend; the same figures per attached asset. `results`, `goal_rows`, `budget_rows` and `asset_rows` carry the same figures as rows of label and value, worded and formatted in the caller language (Accept-Language; German unless English is asked for); `days` carries clicks, redemptions, sign-ups and credited orders per day.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {Model} params.model - Attribution model. Defaults to the tenant setting.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCampaignsPerformance(params: { id: string, model?: Model }): Promise<{}>;
    /**
     * Revenue and orders under the chosen model, returns netted out; redemptions, clicks, impressions, subscriptions and leads; goal progress; budget planned and spent with return on ad spend; the same figures per attached asset. `results`, `goal_rows`, `budget_rows` and `asset_rows` carry the same figures as rows of label and value, worded and formatted in the caller language (Accept-Language; German unless English is asked for); `days` carries clicks, redemptions, sign-ups and credited orders per day.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {Model} model - Attribution model. Defaults to the tenant setting.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsPerformance(id: string, model?: Model): Promise<{}>;
    campaignsCampaignsPerformance(
        paramsOrFirst: { id: string, model?: Model } | string,
        ...rest: [(Model)?]    
    ): Promise<{}> {
        let params: { id: string, model?: Model };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, model?: Model };
        } else {
            params = {
                id: paramsOrFirst as string,
                model: rest[0] as Model            
            };
        }
        
        const id = params.id;
        const model = params.model;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/campaigns/campaigns/{id}/performance'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof model !== 'undefined') {
            apiPayload['model'] = model;
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
     * Clears the trash marks on the campaign. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    campaignsCampaignsRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the campaign. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCampaignsRestore(id: string): Promise<Models.TrashRestoreResult>;
    campaignsCampaignsRestore(
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

        const apiPath = '/v1/campaigns/campaigns/{id}/restore'.replace('{id}', id);
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
