import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Source } from '../enums/source';
import { SegmentMemberSource } from '../enums/segment-member-source';
import { RuleMatch } from '../enums/rule-match';
import { SegmentRuleMatch } from '../enums/segment-rule-match';
import { Target } from '../enums/target';

export class CustomersSegments {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. The membership rows themselves — the answer to "which companies are in this segment" (`segment_id`) and to "which segments is this company in" (`organization_id`). Paged with `limit`/`offset`/`order`.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the membership row.
     * @param {string} params.segmentId - Filter to one segment — its members.
     * @param {string} params.organizationId - Filter to one company — the segments it belongs to. The same route answers both questions.
     * @param {Source} params.source - Filter by how the membership came about. `manual` is the hand-picked set a recompute will never touch, `sync` the set an import from the owning system wrote, and `rule` the only one a recompute rewrites.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the organization joined the segment.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersSegmentMembersList(params?: { id?: string, segmentId?: string, organizationId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. The membership rows themselves — the answer to "which companies are in this segment" (`segment_id`) and to "which segments is this company in" (`organization_id`). Paged with `limit`/`offset`/`order`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the membership row.
     * @param {string} segmentId - Filter to one segment — its members.
     * @param {string} organizationId - Filter to one company — the segments it belongs to. The same route answers both questions.
     * @param {Source} source - Filter by how the membership came about. `manual` is the hand-picked set a recompute will never touch, `sync` the set an import from the owning system wrote, and `rule` the only one a recompute rewrites.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the organization joined the segment.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentMembersList(id?: string, segmentId?: string, organizationId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersSegmentMembersList(
        paramsOrFirst?: { id?: string, segmentId?: string, organizationId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (Source)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, segmentId?: string, organizationId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, segmentId?: string, organizationId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                segmentId: rest[0] as string,
                organizationId: rest[1] as string,
                source: rest[2] as Source,
                createdAt: rest[3] as string,
                limit: rest[4] as number,
                offset: rest[5] as number,
                order: rest[6] as string            
            };
        }
        
        const id = params.id;
        const segmentId = params.segmentId;
        const organizationId = params.organizationId;
        const source = params.source;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/segment_members';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof segmentId !== 'undefined') {
            apiPayload['segment_id'] = segmentId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. Adds a company to a segment BY HAND. The row is `source: "manual"`, which is what protects it: a rule recompute rewrites the rule-derived rows of that segment and never touches this one. A create cannot omit `segment_id` and `organization_id`; everything else is optional or defaulted by the database. Two rows of this tenant may not share the combination of `segment_id` + `organization_id`.
     *
     * @param {string} params.organizationId - The member company. Segments group companies, never people — a person is reached through their organization.
     * @param {string} params.segmentId - The segment.
     * @param {string} params.createdAt - When the organization joined the segment. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {SegmentMemberSource} params.source - How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute, 'sync' was written by an import from the system that owns the grouping — an ERP customer discount or price group arrives as a segment membership rather than as a column on the company. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member and an imported one both survive every rule change. Default 'manual'. Send 'sync' from an import so the next recompute of the segment leaves the row alone; 'rule' rows are the recompute's own and it deletes the ones that stopped matching.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentMember>}
     */
    customersSegmentMembersCreate(params: { organizationId: string, segmentId: string, createdAt?: string, source?: SegmentMemberSource }): Promise<Models.SegmentMember>;
    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. Adds a company to a segment BY HAND. The row is `source: "manual"`, which is what protects it: a rule recompute rewrites the rule-derived rows of that segment and never touches this one. A create cannot omit `segment_id` and `organization_id`; everything else is optional or defaulted by the database. Two rows of this tenant may not share the combination of `segment_id` + `organization_id`.
     *
     * @param {string} organizationId - The member company. Segments group companies, never people — a person is reached through their organization.
     * @param {string} segmentId - The segment.
     * @param {string} createdAt - When the organization joined the segment. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {SegmentMemberSource} source - How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute, 'sync' was written by an import from the system that owns the grouping — an ERP customer discount or price group arrives as a segment membership rather than as a column on the company. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member and an imported one both survive every rule change. Default 'manual'. Send 'sync' from an import so the next recompute of the segment leaves the row alone; 'rule' rows are the recompute's own and it deletes the ones that stopped matching.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentMember>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentMembersCreate(organizationId: string, segmentId: string, createdAt?: string, source?: SegmentMemberSource): Promise<Models.SegmentMember>;
    customersSegmentMembersCreate(
        paramsOrFirst: { organizationId: string, segmentId: string, createdAt?: string, source?: SegmentMemberSource } | string,
        ...rest: [(string)?, (string)?, (SegmentMemberSource)?]    
    ): Promise<Models.SegmentMember> {
        let params: { organizationId: string, segmentId: string, createdAt?: string, source?: SegmentMemberSource };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, segmentId: string, createdAt?: string, source?: SegmentMemberSource };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                segmentId: rest[0] as string,
                createdAt: rest[1] as string,
                source: rest[2] as SegmentMemberSource            
            };
        }
        
        const organizationId = params.organizationId;
        const segmentId = params.segmentId;
        const createdAt = params.createdAt;
        const source = params.source;

        if (typeof organizationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "organizationId"');
        }
        if (typeof segmentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "segmentId"');
        }

        const apiPath = '/v1/customers/segment_members';
        const apiPayload: Payload = {};
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof segmentId !== 'undefined') {
            apiPayload['segment_id'] = segmentId;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. Takes the company out of the segment. If the segment carries rules and the company still matches them, the next recompute puts it back; remove it from the rule, not from the list. Nothing else in this app points at it, so nothing else goes with it.
     *
     * @param {string} params.id - The segment membership to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersSegmentMembersDelete(params: { id: string }): Promise<{}>;
    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. Takes the company out of the segment. If the segment carries rules and the company still matches them, the next recompute puts it back; remove it from the rule, not from the list. Nothing else in this app points at it, so nothing else goes with it.
     *
     * @param {string} id - The segment membership to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentMembersDelete(id: string): Promise<{}>;
    customersSegmentMembersDelete(
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

        const apiPath = '/v1/customers/segment_members/{id}'.replace('{id}', id);
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. One membership row by id, with the `source` that says how it came about.
     *
     * @param {string} params.id - The segment membership to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentMember>}
     */
    customersSegmentMembersGet(params: { id: string }): Promise<Models.SegmentMember>;
    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. One membership row by id, with the `source` that says how it came about.
     *
     * @param {string} id - The segment membership to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentMember>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentMembersGet(id: string): Promise<Models.SegmentMember>;
    customersSegmentMembersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.SegmentMember> {
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

        const apiPath = '/v1/customers/segment_members/{id}'.replace('{id}', id);
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. A partial update. In practice there is little to change — a membership is a pair of ids — so this exists for the `source` correction rather than as the normal path. Two rows of this tenant may not share the combination of `segment_id` + `organization_id`.
     *
     * @param {string} params.id - The segment membership to update.
     * @param {string} params.organizationId - The member company. Segments group companies, never people — a person is reached through their organization.
     * @param {string} params.segmentId - The segment.
     * @param {SegmentMemberSource} params.source - How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute, 'sync' was written by an import from the system that owns the grouping — an ERP customer discount or price group arrives as a segment membership rather than as a column on the company. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member and an imported one both survive every rule change. Default 'manual'. Send 'sync' from an import so the next recompute of the segment leaves the row alone; 'rule' rows are the recompute's own and it deletes the ones that stopped matching.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentMember>}
     */
    customersSegmentMembersUpdate(params: { id: string, organizationId?: string, segmentId?: string, source?: SegmentMemberSource }): Promise<Models.SegmentMember>;
    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. A partial update. In practice there is little to change — a membership is a pair of ids — so this exists for the `source` correction rather than as the normal path. Two rows of this tenant may not share the combination of `segment_id` + `organization_id`.
     *
     * @param {string} id - The segment membership to update.
     * @param {string} organizationId - The member company. Segments group companies, never people — a person is reached through their organization.
     * @param {string} segmentId - The segment.
     * @param {SegmentMemberSource} source - How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute, 'sync' was written by an import from the system that owns the grouping — an ERP customer discount or price group arrives as a segment membership rather than as a column on the company. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member and an imported one both survive every rule change. Default 'manual'. Send 'sync' from an import so the next recompute of the segment leaves the row alone; 'rule' rows are the recompute's own and it deletes the ones that stopped matching.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentMember>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentMembersUpdate(id: string, organizationId?: string, segmentId?: string, source?: SegmentMemberSource): Promise<Models.SegmentMember>;
    customersSegmentMembersUpdate(
        paramsOrFirst: { id: string, organizationId?: string, segmentId?: string, source?: SegmentMemberSource } | string,
        ...rest: [(string)?, (string)?, (SegmentMemberSource)?]    
    ): Promise<Models.SegmentMember> {
        let params: { id: string, organizationId?: string, segmentId?: string, source?: SegmentMemberSource };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, organizationId?: string, segmentId?: string, source?: SegmentMemberSource };
        } else {
            params = {
                id: paramsOrFirst as string,
                organizationId: rest[0] as string,
                segmentId: rest[1] as string,
                source: rest[2] as SegmentMemberSource            
            };
        }
        
        const id = params.id;
        const organizationId = params.organizationId;
        const segmentId = params.segmentId;
        const source = params.source;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/segment_members/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof segmentId !== 'undefined') {
            apiPayload['segment_id'] = segmentId;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Every segment this tenant keeps, with its stored rules. Any column filters and the page is `limit`/`offset`/`order`. Which companies are actually IN one is `segment_members`, because the rule half is materialized rather than evaluated on read.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the segment.
     * @param {string} params.code - Filter by exact segment code.
     * @param {number} params.position - Filter to rows whose `position` is exactly this value. Sort order in the cockpit, ascending. Ties fall back to insertion order.
     * @param {RuleMatch} params.ruleMatch - Filter to rows whose `rule_match` is exactly this value. How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {string} params.rulesComputedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the rule last finished a COMPLETE recompute. Null after a rule change, and while a chunked recompute is still running — so it doubles as "are the rule memberships trustworthy right now?".
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. The key this group has in the system that owns it — an ERP price group, discount group or bonus group arrives as a segment, and this is what it was called there. Unique per tenant where set.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the segment was created.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersSegmentsList(params?: { id?: string, code?: string, position?: number, ruleMatch?: RuleMatch, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Every segment this tenant keeps, with its stored rules. Any column filters and the page is `limit`/`offset`/`order`. Which companies are actually IN one is `segment_members`, because the rule half is materialized rather than evaluated on read.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the segment.
     * @param {string} code - Filter by exact segment code.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Sort order in the cockpit, ascending. Ties fall back to insertion order.
     * @param {RuleMatch} ruleMatch - Filter to rows whose `rule_match` is exactly this value. How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {string} rulesComputedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the rule last finished a COMPLETE recompute. Null after a rule change, and while a chunked recompute is still running — so it doubles as "are the rule memberships trustworthy right now?".
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. The key this group has in the system that owns it — an ERP price group, discount group or bonus group arrives as a segment, and this is what it was called there. Unique per tenant where set.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the segment was created.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsList(id?: string, code?: string, position?: number, ruleMatch?: RuleMatch, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersSegmentsList(
        paramsOrFirst?: { id?: string, code?: string, position?: number, ruleMatch?: RuleMatch, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (number)?, (RuleMatch)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, code?: string, position?: number, ruleMatch?: RuleMatch, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, position?: number, ruleMatch?: RuleMatch, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                position: rest[1] as number,
                ruleMatch: rest[2] as RuleMatch,
                rulesComputedAt: rest[3] as string,
                externalId: rest[4] as string,
                sourceSyncedAt: rest[5] as string,
                createdAt: rest[6] as string,
                updatedAt: rest[7] as string,
                limit: rest[8] as number,
                offset: rest[9] as number,
                order: rest[10] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const position = params.position;
        const ruleMatch = params.ruleMatch;
        const rulesComputedAt = params.rulesComputedAt;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/segments';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof rulesComputedAt !== 'undefined') {
            apiPayload['rules_computed_at'] = rulesComputedAt;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Creates the group. Rules are optional: leave them out for a hand-picked list, or store a rule document and let the recompute keep the membership up to date. The `code` is what other apps point at, so pick it deliberately. `code` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {string} params.createdAt - When the segment was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {object} params.labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} params.position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} params.ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} params.rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     */
    customersSegmentsCreate(params: { code: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object }): Promise<Models.Segment>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Creates the group. Rules are optional: leave them out for a hand-picked list, or store a rule document and let the recompute keep the membership up to date. The `code` is what other apps point at, so pick it deliberately. `code` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {string} createdAt - When the segment was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {object} labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsCreate(code: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object): Promise<Models.Segment>;
    customersSegmentsCreate(
        paramsOrFirst: { code: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object } | string,
        ...rest: [(string)?, (object)?, (number)?, (SegmentRuleMatch)?, (object)?]    
    ): Promise<Models.Segment> {
        let params: { code: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        } else {
            params = {
                code: paramsOrFirst as string,
                createdAt: rest[0] as string,
                labels: rest[1] as object,
                position: rest[2] as number,
                ruleMatch: rest[3] as SegmentRuleMatch,
                rules: rest[4] as object            
            };
        }
        
        const code = params.code;
        const createdAt = params.createdAt;
        const labels = params.labels;
        const position = params.position;
        const ruleMatch = params.ruleMatch;
        const rules = params.rules;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/customers/segments';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
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
     * Same sync as the single-segment recompute, applied to every segment with non-null rules. A failing segment is reported in its result entry instead of aborting the run. The run shares one budget: a segment that does not fit reports done:false (or skipped:true) and keeps rules_computed_at null, so the next call resumes it from its own data. Repeat until the top-level done is true.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRuleRecomputeAllResponse>}
     */
    customersSegmentsRulesRecomputeAll(params: { data: object }): Promise<Models.SegmentRuleRecomputeAllResponse>;
    /**
     * Same sync as the single-segment recompute, applied to every segment with non-null rules. A failing segment is reported in its result entry instead of aborting the run. The run shares one budget: a segment that does not fit reports done:false (or skipped:true) and keeps rules_computed_at null, so the next call resumes it from its own data. Repeat until the top-level done is true.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRuleRecomputeAllResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsRulesRecomputeAll(data: object): Promise<Models.SegmentRuleRecomputeAllResponse>;
    customersSegmentsRulesRecomputeAll(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.SegmentRuleRecomputeAllResponse> {
        let params: { data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('data' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { data: object };
        } else {
            params = {
                data: paramsOrFirst as object            
            };
        }
        
        const data = params.data;

        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/customers/segments/rules/recompute-all';
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
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Removes the segment. Anything in another app that points at its `code` — a price list, a campaign — is left pointing at nothing, because no app may hold a foreign key into another (ADR-0055). Deleting one takes every `segment_members` row that points at it with it — the foreign keys decide, not this route.
     *
     * @param {string} params.id - The segment to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersSegmentsDelete(params: { id: string }): Promise<{}>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Removes the segment. Anything in another app that points at its `code` — a price list, a campaign — is left pointing at nothing, because no app may hold a foreign key into another (ADR-0055). Deleting one takes every `segment_members` row that points at it with it — the foreign keys decide, not this route.
     *
     * @param {string} id - The segment to delete.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsDelete(id: string): Promise<{}>;
    customersSegmentsDelete(
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

        const apiPath = '/v1/customers/segments/{id}'.replace('{id}', id);
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
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". One segment by id, including the rule document it carries. A segment with no rules is hand-picked and completely valid.
     *
     * @param {string} params.id - The segment to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     */
    customersSegmentsGet(params: { id: string }): Promise<Models.Segment>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". One segment by id, including the rule document it carries. A segment with no rules is hand-picked and completely valid.
     *
     * @param {string} id - The segment to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsGet(id: string): Promise<Models.Segment>;
    customersSegmentsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Segment> {
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

        const apiPath = '/v1/customers/segments/{id}'.replace('{id}', id);
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
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". A partial update — send only what changes. Editing the rules does NOT re-evaluate them: that is `POST /customers/segments/{segment_id}/rules/recompute`, so a half-typed rule never silently empties a live segment. Two rows of this tenant may not share `code` or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} params.id - The segment to update.
     * @param {string} params.code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {object} params.labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} params.position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} params.ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} params.rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     */
    customersSegmentsUpdate(params: { id: string, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object }): Promise<Models.Segment>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". A partial update — send only what changes. Editing the rules does NOT re-evaluate them: that is `POST /customers/segments/{segment_id}/rules/recompute`, so a half-typed rule never silently empties a live segment. Two rows of this tenant may not share `code` or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} id - The segment to update.
     * @param {string} code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {object} labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsUpdate(id: string, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object): Promise<Models.Segment>;
    customersSegmentsUpdate(
        paramsOrFirst: { id: string, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object } | string,
        ...rest: [(string)?, (object)?, (number)?, (SegmentRuleMatch)?, (object)?]    
    ): Promise<Models.Segment> {
        let params: { id: string, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                labels: rest[1] as object,
                position: rest[2] as number,
                ruleMatch: rest[3] as SegmentRuleMatch,
                rules: rest[4] as object            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const labels = params.labels;
        const position = params.position;
        const ruleMatch = params.ruleMatch;
        const rules = params.rules;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/segments/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof rules !== 'undefined') {
            apiPayload['rules'] = rules;
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
     * A dry run: it answers how many organizations the rule would select, with a handful of them by name, and writes nothing at all. Evaluates the rule document in the REQUEST BODY (not the stored segments.rules), so the cockpit can preview an unsaved rule. Costs a single count query for the common single-query rule; 'any' rules and rules repeating a column are combined in the app and capped at 5000 ids, in which case 'capped' is true and 'count' is a LOWER bound. Membership is never touched.
     *
     * @param {string} params.segmentId - The segment the preview is filed under. Its stored rules are NOT read — the rule comes from the body — but it has to exist.
     * @param {Models.SegmentRuleCondition[]} params.conditions - The conditions, combined by `rule_match`. At least one, at most 25.
     * @param {RuleMatch} params.ruleMatch - How the conditions combine. Default 'all'.
     * @param {Target} params.target - Only 'organizations' is supported; any other value is rejected. A segment groups COMPANIES — the people are reached through them.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRulePreviewResponse>}
     */
    customersSegmentsRulesPreview(params: { segmentId: string, conditions: Models.SegmentRuleCondition[], ruleMatch?: RuleMatch, target?: Target }): Promise<Models.SegmentRulePreviewResponse>;
    /**
     * A dry run: it answers how many organizations the rule would select, with a handful of them by name, and writes nothing at all. Evaluates the rule document in the REQUEST BODY (not the stored segments.rules), so the cockpit can preview an unsaved rule. Costs a single count query for the common single-query rule; 'any' rules and rules repeating a column are combined in the app and capped at 5000 ids, in which case 'capped' is true and 'count' is a LOWER bound. Membership is never touched.
     *
     * @param {string} segmentId - The segment the preview is filed under. Its stored rules are NOT read — the rule comes from the body — but it has to exist.
     * @param {Models.SegmentRuleCondition[]} conditions - The conditions, combined by `rule_match`. At least one, at most 25.
     * @param {RuleMatch} ruleMatch - How the conditions combine. Default 'all'.
     * @param {Target} target - Only 'organizations' is supported; any other value is rejected. A segment groups COMPANIES — the people are reached through them.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRulePreviewResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsRulesPreview(segmentId: string, conditions: Models.SegmentRuleCondition[], ruleMatch?: RuleMatch, target?: Target): Promise<Models.SegmentRulePreviewResponse>;
    customersSegmentsRulesPreview(
        paramsOrFirst: { segmentId: string, conditions: Models.SegmentRuleCondition[], ruleMatch?: RuleMatch, target?: Target } | string,
        ...rest: [(Models.SegmentRuleCondition[])?, (RuleMatch)?, (Target)?]    
    ): Promise<Models.SegmentRulePreviewResponse> {
        let params: { segmentId: string, conditions: Models.SegmentRuleCondition[], ruleMatch?: RuleMatch, target?: Target };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { segmentId: string, conditions: Models.SegmentRuleCondition[], ruleMatch?: RuleMatch, target?: Target };
        } else {
            params = {
                segmentId: paramsOrFirst as string,
                conditions: rest[0] as Models.SegmentRuleCondition[],
                ruleMatch: rest[1] as RuleMatch,
                target: rest[2] as Target            
            };
        }
        
        const segmentId = params.segmentId;
        const conditions = params.conditions;
        const ruleMatch = params.ruleMatch;
        const target = params.target;

        if (typeof segmentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "segmentId"');
        }
        if (typeof conditions === 'undefined') {
            throw new RevenexxException('Missing required parameter: "conditions"');
        }

        const apiPath = '/v1/customers/segments/{segment_id}/rules/preview'.replace('{segment_id}', segmentId);
        const apiPayload: Payload = {};
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof target !== 'undefined') {
            apiPayload['target'] = target;
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
     * Evaluates segments.rules (NOT the request body), then inserts the newly matching organizations as source='rule' rows and deletes the rule rows that no longer match. Manual (source='manual') memberships are never inserted, deleted or shadowed. Bounded by a wall-clock budget below the gateway's upstream timeout: when 'done' is false, POST again with the returned 'cursor' until it is true. added/removed/processed count THIS call only. Omitting 'cursor' resumes an unfinished pass and starts a fresh one after a completed pass; an explicit null always restarts. segments.rules_computed_at is stamped only when the pass completes.
     *
     * @param {string} params.segmentId - The segment whose stored rules are evaluated.
     * @param {string} params.cursor - Continuation token from a previous response — the id of the last organization the pass touched. Omit to resume or start automatically; pass null to force a restart from the beginning.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRuleRecomputeResponse>}
     */
    customersSegmentsRulesRecompute(params: { segmentId: string, cursor?: string }): Promise<Models.SegmentRuleRecomputeResponse>;
    /**
     * Evaluates segments.rules (NOT the request body), then inserts the newly matching organizations as source='rule' rows and deletes the rule rows that no longer match. Manual (source='manual') memberships are never inserted, deleted or shadowed. Bounded by a wall-clock budget below the gateway's upstream timeout: when 'done' is false, POST again with the returned 'cursor' until it is true. added/removed/processed count THIS call only. Omitting 'cursor' resumes an unfinished pass and starts a fresh one after a completed pass; an explicit null always restarts. segments.rules_computed_at is stamped only when the pass completes.
     *
     * @param {string} segmentId - The segment whose stored rules are evaluated.
     * @param {string} cursor - Continuation token from a previous response — the id of the last organization the pass touched. Omit to resume or start automatically; pass null to force a restart from the beginning.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRuleRecomputeResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsRulesRecompute(segmentId: string, cursor?: string): Promise<Models.SegmentRuleRecomputeResponse>;
    customersSegmentsRulesRecompute(
        paramsOrFirst: { segmentId: string, cursor?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.SegmentRuleRecomputeResponse> {
        let params: { segmentId: string, cursor?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { segmentId: string, cursor?: string };
        } else {
            params = {
                segmentId: paramsOrFirst as string,
                cursor: rest[0] as string            
            };
        }
        
        const segmentId = params.segmentId;
        const cursor = params.cursor;

        if (typeof segmentId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "segmentId"');
        }

        const apiPath = '/v1/customers/segments/{segment_id}/rules/recompute'.replace('{segment_id}', segmentId);
        const apiPayload: Payload = {};
        if (typeof cursor !== 'undefined') {
            apiPayload['cursor'] = cursor;
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
