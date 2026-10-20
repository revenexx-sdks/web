import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { Kind } from '../enums/kind';
import { RuleMatch } from '../enums/rule-match';

export class AudiencesAudiences {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every audience of this tenant, active and static, with its member count and how many of them someone may write to.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.ruleMatch - Keep only rows whose `rule_match` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @param {string} params.memberCount - Keep only rows whose `member_count` equals this.
     * @param {string} params.eligibleCount - Keep only rows whose `eligible_count` equals this.
     * @param {string} params.rulesSummary - Keep only rows whose `rules_summary` equals this.
     * @param {string} params.recomputeState - Keep only rows whose `recompute_state` equals this.
     * @param {string} params.recomputeError - Keep only rows whose `recompute_error` equals this.
     * @param {string} params.frozenFromId - Keep only rows whose `frozen_from_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesAudiencesList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, ruleMatch?: string, active?: string, memberCount?: string, eligibleCount?: string, rulesSummary?: string, recomputeState?: string, recomputeError?: string, frozenFromId?: string }): Promise<{}>;
    /**
     * Every audience of this tenant, active and static, with its member count and how many of them someone may write to.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} ruleMatch - Keep only rows whose `rule_match` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @param {string} memberCount - Keep only rows whose `member_count` equals this.
     * @param {string} eligibleCount - Keep only rows whose `eligible_count` equals this.
     * @param {string} rulesSummary - Keep only rows whose `rules_summary` equals this.
     * @param {string} recomputeState - Keep only rows whose `recompute_state` equals this.
     * @param {string} recomputeError - Keep only rows whose `recompute_error` equals this.
     * @param {string} frozenFromId - Keep only rows whose `frozen_from_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, ruleMatch?: string, active?: string, memberCount?: string, eligibleCount?: string, rulesSummary?: string, recomputeState?: string, recomputeError?: string, frozenFromId?: string): Promise<{}>;
    audiencesAudiencesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, ruleMatch?: string, active?: string, memberCount?: string, eligibleCount?: string, rulesSummary?: string, recomputeState?: string, recomputeError?: string, frozenFromId?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, ruleMatch?: string, active?: string, memberCount?: string, eligibleCount?: string, rulesSummary?: string, recomputeState?: string, recomputeError?: string, frozenFromId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, code?: string, description?: string, kind?: string, ruleMatch?: string, active?: string, memberCount?: string, eligibleCount?: string, rulesSummary?: string, recomputeState?: string, recomputeError?: string, frozenFromId?: string };
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
                ruleMatch: rest[7] as string,
                active: rest[8] as string,
                memberCount: rest[9] as string,
                eligibleCount: rest[10] as string,
                rulesSummary: rest[11] as string,
                recomputeState: rest[12] as string,
                recomputeError: rest[13] as string,
                frozenFromId: rest[14] as string            
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
        const ruleMatch = params.ruleMatch;
        const active = params.active;
        const memberCount = params.memberCount;
        const eligibleCount = params.eligibleCount;
        const rulesSummary = params.rulesSummary;
        const recomputeState = params.recomputeState;
        const recomputeError = params.recomputeError;
        const frozenFromId = params.frozenFromId;


        const apiPath = '/v1/audiences/audiences';
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
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof memberCount !== 'undefined') {
            apiPayload['member_count'] = memberCount;
        }
        if (typeof eligibleCount !== 'undefined') {
            apiPayload['eligible_count'] = eligibleCount;
        }
        if (typeof rulesSummary !== 'undefined') {
            apiPayload['rules_summary'] = rulesSummary;
        }
        if (typeof recomputeState !== 'undefined') {
            apiPayload['recompute_state'] = recomputeState;
        }
        if (typeof recomputeError !== 'undefined') {
            apiPayload['recompute_error'] = recomputeError;
        }
        if (typeof frozenFromId !== 'undefined') {
            apiPayload['frozen_from_id'] = frozenFromId;
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
     * @param {string} params.code - The stable identifier other apps and the storefront refer to the audience by. Unique per tenant, and fixed once created.
     * @param {boolean} params.active - An inactive audience is not recomputed and is left out of a person's memberships; its members stay as they are.
     * @param {string} params.description - What the audience is for, in the merchant's own words.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Kind} params.kind - `active` — defined by rules and recomputed; `static` — holds an import, a hand-picked list or a frozen copy. Fixed once created.
     * @param {any} params.labels - Display text per locale, e.g. `{"de": "Newsletter DE", "en": "Newsletter DE"}`.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {RuleMatch} params.ruleMatch - How the top-level rules of an active audience are held together: `all` or `any`.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Audience>}
     */
    audiencesAudiencesCreate(params: { code: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string }): Promise<Models.Audience>;
    /**
     *
     * @param {string} code - The stable identifier other apps and the storefront refer to the audience by. Unique per tenant, and fixed once created.
     * @param {boolean} active - An inactive audience is not recomputed and is left out of a person's memberships; its members stay as they are.
     * @param {string} description - What the audience is for, in the merchant's own words.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Kind} kind - `active` — defined by rules and recomputed; `static` — holds an import, a hand-picked list or a frozen copy. Fixed once created.
     * @param {any} labels - Display text per locale, e.g. `{"de": "Newsletter DE", "en": "Newsletter DE"}`.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {RuleMatch} ruleMatch - How the top-level rules of an active audience are held together: `all` or `any`.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Audience>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesCreate(code: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string): Promise<Models.Audience>;
    audiencesAudiencesCreate(
        paramsOrFirst: { code: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (any)?, (Kind)?, (any)?, (any)?, (RuleMatch)?, (any)?, (string)?]    
    ): Promise<Models.Audience> {
        let params: { code: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, active?: boolean, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                active: rest[0] as boolean,
                description: rest[1] as string,
                externalId: rest[2] as string,
                externalRefs: rest[3] as any,
                kind: rest[4] as Kind,
                labels: rest[5] as any,
                metadata: rest[6] as any,
                ruleMatch: rest[7] as RuleMatch,
                sourceData: rest[8] as any,
                sourceSyncedAt: rest[9] as string            
            };
        }
        
        const code = params.code;
        const active = params.active;
        const description = params.description;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const kind = params.kind;
        const labels = params.labels;
        const metadata = params.metadata;
        const ruleMatch = params.ruleMatch;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/audiences/audiences';
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
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
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
     * What the hourly schedule runs, by hand: every active audience, unfinished passes first, one shared budget. One audience failing does not stop the others.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRecomputeAll>}
     */
    audiencesAudiencesRecomputeAll(): Promise<Models.AudienceRecomputeAll> {

        const apiPath = '/v1/audiences/audiences/recompute-all';
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
     * Every audience in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    audiencesAudiencesEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/audiences/audiences/trash/empty';
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
     * What the nightly purge does, callable by hand: every audience in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesAudiencesPurge(): Promise<{}> {

        const apiPath = '/v1/audiences/audiences/trash/purge';
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
     * The first DELETE moves the audience into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. An audience another audience asks for members of is refused (`trash_blocked`, blocker `audience_in_use` with `audience_ids`) — change their rules first. Its rules and members stay with it. A DELETE on a audience already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesAudiencesDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the audience into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. An audience another audience asks for members of is refused (`trash_blocked`, blocker `audience_in_use` with `audience_ids`) — change their rules first. Its rules and members stay with it. A DELETE on a audience already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesDelete(id: string): Promise<{}>;
    audiencesAudiencesDelete(
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

        const apiPath = '/v1/audiences/audiences/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Audience>}
     */
    audiencesAudiencesGet(params: { id: string }): Promise<Models.Audience>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Audience>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesGet(id: string): Promise<Models.Audience>;
    audiencesAudiencesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Audience> {
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

        const apiPath = '/v1/audiences/audiences/{id}'.replace('{id}', id);
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
     * @param {boolean} params.active - An inactive audience is not recomputed and is left out of a person's memberships; its members stay as they are.
     * @param {string} params.code - The stable identifier other apps and the storefront refer to the audience by. Unique per tenant, and fixed once created.
     * @param {string} params.description - What the audience is for, in the merchant's own words.
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Kind} params.kind - `active` — defined by rules and recomputed; `static` — holds an import, a hand-picked list or a frozen copy. Fixed once created.
     * @param {any} params.labels - Display text per locale, e.g. `{"de": "Newsletter DE", "en": "Newsletter DE"}`.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {RuleMatch} params.ruleMatch - How the top-level rules of an active audience are held together: `all` or `any`.
     * @param {any} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Audience>}
     */
    audiencesAudiencesUpdate(params: { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string }): Promise<Models.Audience>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - An inactive audience is not recomputed and is left out of a person's memberships; its members stay as they are.
     * @param {string} code - The stable identifier other apps and the storefront refer to the audience by. Unique per tenant, and fixed once created.
     * @param {string} description - What the audience is for, in the merchant's own words.
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {any} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {Kind} kind - `active` — defined by rules and recomputed; `static` — holds an import, a hand-picked list or a frozen copy. Fixed once created.
     * @param {any} labels - Display text per locale, e.g. `{"de": "Newsletter DE", "en": "Newsletter DE"}`.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {RuleMatch} ruleMatch - How the top-level rules of an active audience are held together: `all` or `any`.
     * @param {any} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Audience>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesUpdate(id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string): Promise<Models.Audience>;
    audiencesAudiencesUpdate(
        paramsOrFirst: { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (string)?, (any)?, (Kind)?, (any)?, (any)?, (RuleMatch)?, (any)?, (string)?]    
    ): Promise<Models.Audience> {
        let params: { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, code?: string, description?: string, externalId?: string, externalRefs?: any, kind?: Kind, labels?: any, metadata?: any, ruleMatch?: RuleMatch, sourceData?: any, sourceSyncedAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                code: rest[1] as string,
                description: rest[2] as string,
                externalId: rest[3] as string,
                externalRefs: rest[4] as any,
                kind: rest[5] as Kind,
                labels: rest[6] as any,
                metadata: rest[7] as any,
                ruleMatch: rest[8] as RuleMatch,
                sourceData: rest[9] as any,
                sourceSyncedAt: rest[10] as string            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const code = params.code;
        const description = params.description;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const kind = params.kind;
        const labels = params.labels;
        const metadata = params.metadata;
        const ruleMatch = params.ruleMatch;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/audiences/{id}'.replace('{id}', id);
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
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
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
     * Creates a static audience holding exactly who is in the active one now, so a big send's list does not move. Chunked: an unfinished copy answers `done: false` with the new audience's id, and a call naming it in `target_id` continues.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.code - The new audience's code. Required on the first call.
     * @param {string} params.description - 
     * @param {object} params.labels - 
     * @param {string} params.targetId - Continue an unfinished freeze into this audience.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceFreezeResult>}
     */
    audiencesAudiencesFreeze(params: { id: string, code?: string, description?: string, labels?: object, targetId?: string }): Promise<Models.AudienceFreezeResult>;
    /**
     * Creates a static audience holding exactly who is in the active one now, so a big send's list does not move. Chunked: an unfinished copy answers `done: false` with the new audience's id, and a call naming it in `target_id` continues.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} code - The new audience's code. Required on the first call.
     * @param {string} description - 
     * @param {object} labels - 
     * @param {string} targetId - Continue an unfinished freeze into this audience.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceFreezeResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesFreeze(id: string, code?: string, description?: string, labels?: object, targetId?: string): Promise<Models.AudienceFreezeResult>;
    audiencesAudiencesFreeze(
        paramsOrFirst: { id: string, code?: string, description?: string, labels?: object, targetId?: string } | string,
        ...rest: [(string)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.AudienceFreezeResult> {
        let params: { id: string, code?: string, description?: string, labels?: object, targetId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, description?: string, labels?: object, targetId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                description: rest[1] as string,
                labels: rest[2] as object,
                targetId: rest[3] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const description = params.description;
        const labels = params.labels;
        const targetId = params.targetId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/audiences/{id}/freeze'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof targetId !== 'undefined') {
            apiPayload['target_id'] = targetId;
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
     * Evaluates the stored rules — or a candidate tree sent in `rules`, for a form not yet saved — over the tenant's contacts and counts the matches. Bounded by a short budget: when the population does not fit, the answer says how many were examined and estimates the rest. Nothing is written.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {RuleMatch} params.ruleMatch - 
     * @param {object[]} params.rules - A candidate rule tree. Omitted: the stored rules.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudiencePreview>}
     */
    audiencesAudiencesPreview(params: { id: string, ruleMatch?: RuleMatch, rules?: object[] }): Promise<Models.AudiencePreview>;
    /**
     * Evaluates the stored rules — or a candidate tree sent in `rules`, for a form not yet saved — over the tenant's contacts and counts the matches. Bounded by a short budget: when the population does not fit, the answer says how many were examined and estimates the rest. Nothing is written.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {RuleMatch} ruleMatch - 
     * @param {object[]} rules - A candidate rule tree. Omitted: the stored rules.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudiencePreview>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesPreview(id: string, ruleMatch?: RuleMatch, rules?: object[]): Promise<Models.AudiencePreview>;
    audiencesAudiencesPreview(
        paramsOrFirst: { id: string, ruleMatch?: RuleMatch, rules?: object[] } | string,
        ...rest: [(RuleMatch)?, (object[])?]    
    ): Promise<Models.AudiencePreview> {
        let params: { id: string, ruleMatch?: RuleMatch, rules?: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, ruleMatch?: RuleMatch, rules?: object[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                ruleMatch: rest[0] as RuleMatch,
                rules: rest[1] as object[]            
            };
        }
        
        const id = params.id;
        const ruleMatch = params.ruleMatch;
        const rules = params.rules;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/audiences/{id}/preview'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = Client.toWireKeys(rules, {"matchMode":{"wire":"match_mode","children":null},"valueTo":{"wire":"value_to","children":null},"windowDays":{"wire":"window_days","children":null}});
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
     * Evaluates the rules over the tenant's contacts and writes who joined and who left, for as long as the tenant's budget allows. An unfinished pass answers `done: false` and continues on the next call. `restart: true` drops an unfinished pass and starts over.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {boolean} params.restart - Start a fresh pass even if one is unfinished.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRecomputeResult>}
     */
    audiencesAudiencesRecompute(params: { id: string, restart?: boolean }): Promise<Models.AudienceRecomputeResult>;
    /**
     * Evaluates the rules over the tenant's contacts and writes who joined and who left, for as long as the tenant's budget allows. An unfinished pass answers `done: false` and continues on the next call. `restart: true` drops an unfinished pass and starts over.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} restart - Start a fresh pass even if one is unfinished.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRecomputeResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesRecompute(id: string, restart?: boolean): Promise<Models.AudienceRecomputeResult>;
    audiencesAudiencesRecompute(
        paramsOrFirst: { id: string, restart?: boolean } | string,
        ...rest: [(boolean)?]    
    ): Promise<Models.AudienceRecomputeResult> {
        let params: { id: string, restart?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, restart?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                restart: rest[0] as boolean            
            };
        }
        
        const id = params.id;
        const restart = params.restart;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/audiences/{id}/recompute'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof restart !== 'undefined') {
            apiPayload['restart'] = restart;
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
     * Clears the trash marks on the audience. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    audiencesAudiencesRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the audience. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesAudiencesRestore(id: string): Promise<Models.TrashRestoreResult>;
    audiencesAudiencesRestore(
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

        const apiPath = '/v1/audiences/audiences/{id}/restore'.replace('{id}', id);
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceVocabularyIndex>}
     */
    audiencesVocabulariesList(): Promise<Models.AudienceVocabularyIndex> {

        const apiPath = '/v1/audiences/vocabularies';
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
     * @param {string} params.name - The vocabulary, e.g. `subjects` or `operators`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceVocabulary>}
     */
    audiencesVocabulariesGet(params: { name: string }): Promise<Models.AudienceVocabulary>;
    /**
     *
     * @param {string} name - The vocabulary, e.g. `subjects` or `operators`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesVocabulariesGet(name: string): Promise<Models.AudienceVocabulary>;
    audiencesVocabulariesGet(
        paramsOrFirst: { name: string } | string    
    ): Promise<Models.AudienceVocabulary> {
        let params: { name: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string };
        } else {
            params = {
                name: paramsOrFirst as string            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/audiences/vocabularies/{name}'.replace('{name}', name);
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
}
