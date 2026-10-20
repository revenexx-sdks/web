import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Source } from '../enums/source';
import { SegmentMemberSource } from '../enums/segment-member-source';
import { RuleMatch } from '../enums/rule-match';
import { MemberType } from '../enums/member-type';
import { Trashed } from '../enums/trashed';
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
     * @param {string} params.contactId - Filter to rows whose `contact_id` is exactly this value. The member person, in a contact segment. Null in an organization segment.
     * @param {Source} params.source - Filter by how the membership came about. `manual` is the hand-picked set a recompute will never touch, `sync` the set an import from the owning system wrote, and `rule` the only one a recompute rewrites.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the organization joined the segment.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersSegmentMembersList(params?: { id?: string, segmentId?: string, organizationId?: string, contactId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. The membership rows themselves — the answer to "which companies are in this segment" (`segment_id`) and to "which segments is this company in" (`organization_id`). Paged with `limit`/`offset`/`order`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the membership row.
     * @param {string} segmentId - Filter to one segment — its members.
     * @param {string} organizationId - Filter to one company — the segments it belongs to. The same route answers both questions.
     * @param {string} contactId - Filter to rows whose `contact_id` is exactly this value. The member person, in a contact segment. Null in an organization segment.
     * @param {Source} source - Filter by how the membership came about. `manual` is the hand-picked set a recompute will never touch, `sync` the set an import from the owning system wrote, and `rule` the only one a recompute rewrites.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the organization joined the segment.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentMembersList(id?: string, segmentId?: string, organizationId?: string, contactId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersSegmentMembersList(
        paramsOrFirst?: { id?: string, segmentId?: string, organizationId?: string, contactId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (Source)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, segmentId?: string, organizationId?: string, contactId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, segmentId?: string, organizationId?: string, contactId?: string, source?: Source, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                segmentId: rest[0] as string,
                organizationId: rest[1] as string,
                contactId: rest[2] as string,
                source: rest[3] as Source,
                createdAt: rest[4] as string,
                limit: rest[5] as number,
                offset: rest[6] as number,
                order: rest[7] as string            
            };
        }
        
        const id = params.id;
        const segmentId = params.segmentId;
        const organizationId = params.organizationId;
        const contactId = params.contactId;
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
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. Adds a company to a segment BY HAND. The row is `source: "manual"`, which is what protects it: a rule recompute rewrites the rule-derived rows of that segment and never touches this one. A create cannot omit `segment_id` and `organization_id`; everything else is optional or defaulted by the database. Two rows of this tenant may not share the combination of `segment_id` + `organization_id` (while contact_id IS NULL) or the combination of `segment_id` + `contact_id` (while contact_id IS NOT NULL).
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. Adds a company to a segment BY HAND. The row is `source: "manual"`, which is what protects it: a rule recompute rewrites the rule-derived rows of that segment and never touches this one. A create cannot omit `segment_id` and `organization_id`; everything else is optional or defaulted by the database. Two rows of this tenant may not share the combination of `segment_id` + `organization_id` (while contact_id IS NULL) or the combination of `segment_id` + `contact_id` (while contact_id IS NOT NULL).
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. A partial update. In practice there is little to change — a membership is a pair of ids — so this exists for the `source` correction rather than as the normal path. Two rows of this tenant may not share the combination of `segment_id` + `organization_id` (while contact_id IS NULL) or the combination of `segment_id` + `contact_id` (while contact_id IS NOT NULL).
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
     * One organization inside one segment, plus the record of how it got there: `source: "manual"` for a company somebody put in, `source: "rule"` for one the rule engine matched. That distinction is what lets a recompute rewrite its own rows and leave every hand-picked one alone. A partial update. In practice there is little to change — a membership is a pair of ids — so this exists for the `source` correction rather than as the normal path. Two rows of this tenant may not share the combination of `segment_id` + `organization_id` (while contact_id IS NULL) or the combination of `segment_id` + `contact_id` (while contact_id IS NOT NULL).
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
     * @param {boolean} params.active - Filter to rows whose `active` is exactly this value. False when the merchant retired the segment. Its memberships stay exactly as they are and it still applies wherever it is named; it is only no longer offered as a choice, and its rules are not recomputed — neither by the schedule nor by hand — until it is active again. `?active=true` is the list of segments a picker should offer.
     * @param {RuleMatch} params.ruleMatch - Filter to rows whose `rule_match` is exactly this value. How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {MemberType} params.memberType - Filter to rows whose `member_type` is exactly this value. What the segment holds: 'organization' (companies, the default) or 'contact' (people, each row naming their company too). Fixed once the segment has members.
     * @param {string} params.rulesComputedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the rule last finished a COMPLETE recompute. Null after a rule change, and while a chunked recompute is still running — so it doubles as "are the rule memberships trustworthy right now?".
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. The key this group has in the system that owns it — an ERP price group, discount group or bonus group arrives as a segment, and this is what it was called there. Unique per tenant where set.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} params.deletedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this segment was moved to the trash, or null while it is live. A segment in the trash is left out of every list unless `trashed` asks for it, so it stops applying: its memberships stay but act nowhere, its rules are not recomputed, and its code stays reserved. A second DELETE or the daily purge deletes it for good.
     * @param {string} params.deletedBy - Filter to rows whose `deleted_by` is exactly this value. Who moved it to the trash, as the platform named them — an email, or `system`. Null while it is live.
     * @param {string} params.deletedById - Filter to rows whose `deleted_by_id` is exactly this value. The platform subject of whoever moved it to the trash. Kept beside the name so the person can be pseudonymised later without losing who acted. Null while it is live, and for the system.
     * @param {string} params.trashBatch - Filter to rows whose `trash_batch` is exactly this value. The trash action this record went with. An organization and the contacts it took along share one; a restore brings back exactly the records that carry it.
     * @param {string} params.purgeAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the daily purge deletes it for good unless it is restored first: `deleted_at` plus the tenant's trash retention (90 days unless the tenant says otherwise). Null while it is live.
     * @param {string} params.purgeBlockedReason - Filter to rows whose `purge_blocked_reason` is exactly this value. Why the purge could not delete it for good — an active price list or promotion that still names its code, or a check nobody answered. Null when nothing stopped it. Cleared by a restore.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the segment was created.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {Trashed} params.trashed - Whether the trash is part of the answer. `exclude` (the default) leaves records in the trash out, `only` answers the trash itself, `include` both. A call acting for a buyer is always `exclude`.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersSegmentsList(params?: { id?: string, code?: string, position?: number, active?: boolean, ruleMatch?: RuleMatch, memberType?: MemberType, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Every segment this tenant keeps, with its stored rules. Any column filters and the page is `limit`/`offset`/`order`. Which companies are actually IN one is `segment_members`, because the rule half is materialized rather than evaluated on read.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the segment.
     * @param {string} code - Filter by exact segment code.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Sort order in the cockpit, ascending. Ties fall back to insertion order.
     * @param {boolean} active - Filter to rows whose `active` is exactly this value. False when the merchant retired the segment. Its memberships stay exactly as they are and it still applies wherever it is named; it is only no longer offered as a choice, and its rules are not recomputed — neither by the schedule nor by hand — until it is active again. `?active=true` is the list of segments a picker should offer.
     * @param {RuleMatch} ruleMatch - Filter to rows whose `rule_match` is exactly this value. How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {MemberType} memberType - Filter to rows whose `member_type` is exactly this value. What the segment holds: 'organization' (companies, the default) or 'contact' (people, each row naming their company too). Fixed once the segment has members.
     * @param {string} rulesComputedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the rule last finished a COMPLETE recompute. Null after a rule change, and while a chunked recompute is still running — so it doubles as "are the rule memberships trustworthy right now?".
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. The key this group has in the system that owns it — an ERP price group, discount group or bonus group arrives as a segment, and this is what it was called there. Unique per tenant where set.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} deletedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this segment was moved to the trash, or null while it is live. A segment in the trash is left out of every list unless `trashed` asks for it, so it stops applying: its memberships stay but act nowhere, its rules are not recomputed, and its code stays reserved. A second DELETE or the daily purge deletes it for good.
     * @param {string} deletedBy - Filter to rows whose `deleted_by` is exactly this value. Who moved it to the trash, as the platform named them — an email, or `system`. Null while it is live.
     * @param {string} deletedById - Filter to rows whose `deleted_by_id` is exactly this value. The platform subject of whoever moved it to the trash. Kept beside the name so the person can be pseudonymised later without losing who acted. Null while it is live, and for the system.
     * @param {string} trashBatch - Filter to rows whose `trash_batch` is exactly this value. The trash action this record went with. An organization and the contacts it took along share one; a restore brings back exactly the records that carry it.
     * @param {string} purgeAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the daily purge deletes it for good unless it is restored first: `deleted_at` plus the tenant's trash retention (90 days unless the tenant says otherwise). Null while it is live.
     * @param {string} purgeBlockedReason - Filter to rows whose `purge_blocked_reason` is exactly this value. Why the purge could not delete it for good — an active price list or promotion that still names its code, or a check nobody answered. Null when nothing stopped it. Cleared by a restore.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the segment was created.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {Trashed} trashed - Whether the trash is part of the answer. `exclude` (the default) leaves records in the trash out, `only` answers the trash itself, `include` both. A call acting for a buyer is always `exclude`.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsList(id?: string, code?: string, position?: number, active?: boolean, ruleMatch?: RuleMatch, memberType?: MemberType, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersSegmentsList(
        paramsOrFirst?: { id?: string, code?: string, position?: number, active?: boolean, ruleMatch?: RuleMatch, memberType?: MemberType, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (number)?, (boolean)?, (RuleMatch)?, (MemberType)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (Trashed)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, code?: string, position?: number, active?: boolean, ruleMatch?: RuleMatch, memberType?: MemberType, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, position?: number, active?: boolean, ruleMatch?: RuleMatch, memberType?: MemberType, rulesComputedAt?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                position: rest[1] as number,
                active: rest[2] as boolean,
                ruleMatch: rest[3] as RuleMatch,
                memberType: rest[4] as MemberType,
                rulesComputedAt: rest[5] as string,
                externalId: rest[6] as string,
                sourceSyncedAt: rest[7] as string,
                deletedAt: rest[8] as string,
                deletedBy: rest[9] as string,
                deletedById: rest[10] as string,
                trashBatch: rest[11] as string,
                purgeAt: rest[12] as string,
                purgeBlockedReason: rest[13] as string,
                createdAt: rest[14] as string,
                updatedAt: rest[15] as string,
                trashed: rest[16] as Trashed,
                limit: rest[17] as number,
                offset: rest[18] as number,
                order: rest[19] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const position = params.position;
        const active = params.active;
        const ruleMatch = params.ruleMatch;
        const memberType = params.memberType;
        const rulesComputedAt = params.rulesComputedAt;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
        const deletedAt = params.deletedAt;
        const deletedBy = params.deletedBy;
        const deletedById = params.deletedById;
        const trashBatch = params.trashBatch;
        const purgeAt = params.purgeAt;
        const purgeBlockedReason = params.purgeBlockedReason;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const trashed = params.trashed;
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
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof ruleMatch !== 'undefined') {
            apiPayload['rule_match'] = ruleMatch;
        }
        if (typeof memberType !== 'undefined') {
            apiPayload['member_type'] = memberType;
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
        if (typeof deletedAt !== 'undefined') {
            apiPayload['deleted_at'] = deletedAt;
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
        if (typeof purgeAt !== 'undefined') {
            apiPayload['purge_at'] = purgeAt;
        }
        if (typeof purgeBlockedReason !== 'undefined') {
            apiPayload['purge_blocked_reason'] = purgeBlockedReason;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
        }
        if (typeof trashed !== 'undefined') {
            apiPayload['trashed'] = trashed;
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
     * @param {boolean} params.active - False when the merchant retired the segment. Its memberships stay exactly as they are and it still applies wherever it is named; it is only no longer offered as a choice, and its rules are not recomputed — neither by the schedule nor by hand — until it is active again. `?active=true` is the list of segments a picker should offer. Default true.
     * @param {string} params.code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {string} params.createdAt - When the segment was created. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {object} params.labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} params.position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} params.ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} params.rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     */
    customersSegmentsCreate(params?: { active?: boolean, code?: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object }): Promise<Models.Segment>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". Creates the group. Rules are optional: leave them out for a hand-picked list, or store a rule document and let the recompute keep the membership up to date. The `code` is what other apps point at, so pick it deliberately. `code` is the only field a create cannot omit; everything else is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` (while external_id IS NOT NULL).
     *
     * @param {boolean} active - False when the merchant retired the segment. Its memberships stay exactly as they are and it still applies wherever it is named; it is only no longer offered as a choice, and its rules are not recomputed — neither by the schedule nor by hand — until it is active again. `?active=true` is the list of segments a picker should offer. Default true.
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
    customersSegmentsCreate(active?: boolean, code?: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object): Promise<Models.Segment>;
    customersSegmentsCreate(
        paramsOrFirst?: { active?: boolean, code?: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object } | boolean,
        ...rest: [(string)?, (string)?, (object)?, (number)?, (SegmentRuleMatch)?, (object)?]    
    ): Promise<Models.Segment> {
        let params: { active?: boolean, code?: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { active?: boolean, code?: string, createdAt?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        } else {
            params = {
                active: paramsOrFirst as boolean,
                code: rest[0] as string,
                createdAt: rest[1] as string,
                labels: rest[2] as object,
                position: rest[3] as number,
                ruleMatch: rest[4] as SegmentRuleMatch,
                rules: rest[5] as object            
            };
        }
        
        const active = params.active;
        const code = params.code;
        const createdAt = params.createdAt;
        const labels = params.labels;
        const position = params.position;
        const ruleMatch = params.ruleMatch;
        const rules = params.rules;


        const apiPath = '/v1/customers/segments';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
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
     * Deletes every segment in the trash for good, oldest first and at most fifty per call, each checked on its own exactly like a second DELETE. A segment an active price list or promotion still names stays in the trash and is listed with the reason; the rest go. POST again while `more` is true. An administrator's right, never a buyer's.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentTrashEmptyResult>}
     */
    customersSegmentsTrashEmpty(): Promise<Models.SegmentTrashEmptyResult> {

        const apiPath = '/v1/customers/segments/trash/empty';
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
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". The first DELETE moves the segment to the trash. Nothing is refused there: its memberships stay but stop applying, its rules are no longer recomputed, its market assignment stays, and its `code` stays reserved, so a restore loses nothing. The answer warns, with counts, about the members, and about the price lists and promotions that name the code. A second DELETE on a segment already in the trash deletes it for good, with its memberships — refused while an ACTIVE price list or an ACTIVE promotion still names its code. An app that does not answer blocks too; an app the tenant has not installed blocks nothing. The daily purge runs the same delete once the tenant's trash retention has run out.
     *
     * @param {string} params.id - The segment to delete.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentDeleteResult>}
     */
    customersSegmentsDelete(params: { id: string }): Promise<Models.SegmentDeleteResult>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". The first DELETE moves the segment to the trash. Nothing is refused there: its memberships stay but stop applying, its rules are no longer recomputed, its market assignment stays, and its `code` stays reserved, so a restore loses nothing. The answer warns, with counts, about the members, and about the price lists and promotions that name the code. A second DELETE on a segment already in the trash deletes it for good, with its memberships — refused while an ACTIVE price list or an ACTIVE promotion still names its code. An app that does not answer blocks too; an app the tenant has not installed blocks nothing. The daily purge runs the same delete once the tenant's trash retention has run out.
     *
     * @param {string} id - The segment to delete.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentDeleteResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsDelete(id: string): Promise<Models.SegmentDeleteResult>;
    customersSegmentsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.SegmentDeleteResult> {
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
     * @param {boolean} params.active - False when the merchant retired the segment. Its memberships stay exactly as they are and it still applies wherever it is named; it is only no longer offered as a choice, and its rules are not recomputed — neither by the schedule nor by hand — until it is active again. `?active=true` is the list of segments a picker should offer. Default true.
     * @param {string} params.code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {object} params.labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} params.position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} params.ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} params.rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     */
    customersSegmentsUpdate(params: { id: string, active?: boolean, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object }): Promise<Models.Segment>;
    /**
     * A segment is a named group of ORGANIZATIONS — never of people — built by hand, by rule, or both at once. It is what a price list, a campaign or a shipping option is pointed at when the answer is "these customers, not those". A partial update — send only what changes. Editing the rules does NOT re-evaluate them: that is `POST /customers/segments/{segment_id}/rules/recompute`, so a half-typed rule never silently empties a live segment. Two rows of this tenant may not share `code` or `external_id` (while external_id IS NOT NULL).
     *
     * @param {string} id - The segment to update.
     * @param {boolean} active - False when the merchant retired the segment. Its memberships stay exactly as they are and it still applies wherever it is named; it is only no longer offered as a choice, and its rules are not recomputed — neither by the schedule nor by hand — until it is active again. `?active=true` is the list of segments a picker should offer. Default true.
     * @param {string} code - Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
     * @param {object} labels - Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
     * @param {number} position - Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
     * @param {SegmentRuleMatch} ruleMatch - How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
     * @param {object} rules - The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Segment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsUpdate(id: string, active?: boolean, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object): Promise<Models.Segment>;
    customersSegmentsUpdate(
        paramsOrFirst: { id: string, active?: boolean, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object } | string,
        ...rest: [(boolean)?, (string)?, (object)?, (number)?, (SegmentRuleMatch)?, (object)?]    
    ): Promise<Models.Segment> {
        let params: { id: string, active?: boolean, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, code?: string, labels?: object, position?: number, ruleMatch?: SegmentRuleMatch, rules?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                code: rest[1] as string,
                labels: rest[2] as object,
                position: rest[3] as number,
                ruleMatch: rest[4] as SegmentRuleMatch,
                rules: rest[5] as object            
            };
        }
        
        const id = params.id;
        const active = params.active;
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
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
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
     * Brings a segment back from the trash. Its memberships, its market assignment and every price list or promotion naming its code apply again as they did, because nothing was changed when it went. Needs the same right as the delete.
     *
     * @param {string} params.id - The segment to restore.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRestoreResult>}
     */
    customersSegmentsRestore(params: { id: string }): Promise<Models.SegmentRestoreResult>;
    /**
     * Brings a segment back from the trash. Its memberships, its market assignment and every price list or promotion naming its code apply again as they did, because nothing was changed when it went. Needs the same right as the delete.
     *
     * @param {string} id - The segment to restore.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SegmentRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersSegmentsRestore(id: string): Promise<Models.SegmentRestoreResult>;
    customersSegmentsRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.SegmentRestoreResult> {
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

        const apiPath = '/v1/customers/segments/{id}/restore'.replace('{id}', id);
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
