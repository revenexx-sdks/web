import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CustomersContactsListStatus } from '../enums/customers-contacts-list-status';
import { ShopAccess } from '../enums/shop-access';
import { OrderApprovalMode } from '../enums/order-approval-mode';
import { RegistrationStatus } from '../enums/registration-status';
import { LeadSource } from '../enums/lead-source';
import { Trashed } from '../enums/trashed';
import { CustomersContactsCreateRegistrationStatus } from '../enums/customers-contacts-create-registration-status';
import { ContactStatus } from '../enums/contact-status';
import { ContactActivityKind } from '../enums/contact-activity-kind';
import { Reason } from '../enums/reason';

export class CustomersContacts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * A contact event is one entry on a customer's timeline: an activity somebody logged (a call, a visit, a meeting, a note) or a registration decision this app recorded itself. Every entry is keyed by a CONTACT and stamped with the organization derived from that contact, so a company's history is one indexed read rather than a join. Append-only — there is no update and no delete, which is what makes it usable as evidence. The activity feed, filtered by whichever column the question needs: `contact_id` for one person, `organization_id` for a whole company, `kind` for one type of activity. `kind: "system"` is this app's own registration decision trail (`registration.submitted` / `.approved` / `.rejected`), and no caller may file one of those. Paged with `limit`/`offset`/`order`; newest first is `order=occurred_at.desc`.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the timeline entry.
     * @param {string} params.contactId - Filter to one person's timeline.
     * @param {string} params.organizationId - Filter to one company timeline — the whole history, without fanning out over its people.
     * @param {string} params.kind - Filter by entry kind. One of the tenant's own activity types (GET /customers/contact-event-kinds); 'system' is the registration decision trail and is the one a caller may not file.
     * @param {string} params.name - Filter by event name — registration.submitted | registration.approved | registration.rejected | activity.<kind>. This one IS this app's own vocabulary, not the tenant's.
     * @param {string} params.subject - Filter to rows whose `subject` is exactly this value. One line a person can scan in a timeline. Required for an activity; a decision row carries the app's own wording.
     * @param {string} params.actor - Filter to rows whose `actor` is exactly this value. Who logged the entry — free text as the client supplied it (operator id or email). Null for a row the app wrote itself.
     * @param {string} params.occurredAt - Exact timestamp equality on when it happened — there is no range filter on this API. Use `order=occurred_at.desc` with limit/offset to walk a timeline.
     * @param {string} params.dueAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When a follow-up is due. Null for an entry that is not a follow-up.
     * @param {string} params.assignee - Filter to rows whose `assignee` is exactly this value. Who does the follow-up, as the caller named them. Null when nobody was named.
     * @param {string} params.doneAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the follow-up was done — set by POST /customers/contact_events/{id}/done. Null while it is open.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the row was written. Together with `occurred_at` this is what tells a late entry from a live one.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactEventsList(params?: { id?: string, contactId?: string, organizationId?: string, kind?: string, name?: string, subject?: string, actor?: string, occurredAt?: string, dueAt?: string, assignee?: string, doneAt?: string, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A contact event is one entry on a customer's timeline: an activity somebody logged (a call, a visit, a meeting, a note) or a registration decision this app recorded itself. Every entry is keyed by a CONTACT and stamped with the organization derived from that contact, so a company's history is one indexed read rather than a join. Append-only — there is no update and no delete, which is what makes it usable as evidence. The activity feed, filtered by whichever column the question needs: `contact_id` for one person, `organization_id` for a whole company, `kind` for one type of activity. `kind: "system"` is this app's own registration decision trail (`registration.submitted` / `.approved` / `.rejected`), and no caller may file one of those. Paged with `limit`/`offset`/`order`; newest first is `order=occurred_at.desc`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the timeline entry.
     * @param {string} contactId - Filter to one person's timeline.
     * @param {string} organizationId - Filter to one company timeline — the whole history, without fanning out over its people.
     * @param {string} kind - Filter by entry kind. One of the tenant's own activity types (GET /customers/contact-event-kinds); 'system' is the registration decision trail and is the one a caller may not file.
     * @param {string} name - Filter by event name — registration.submitted | registration.approved | registration.rejected | activity.<kind>. This one IS this app's own vocabulary, not the tenant's.
     * @param {string} subject - Filter to rows whose `subject` is exactly this value. One line a person can scan in a timeline. Required for an activity; a decision row carries the app's own wording.
     * @param {string} actor - Filter to rows whose `actor` is exactly this value. Who logged the entry — free text as the client supplied it (operator id or email). Null for a row the app wrote itself.
     * @param {string} occurredAt - Exact timestamp equality on when it happened — there is no range filter on this API. Use `order=occurred_at.desc` with limit/offset to walk a timeline.
     * @param {string} dueAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When a follow-up is due. Null for an entry that is not a follow-up.
     * @param {string} assignee - Filter to rows whose `assignee` is exactly this value. Who does the follow-up, as the caller named them. Null when nobody was named.
     * @param {string} doneAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the follow-up was done — set by POST /customers/contact_events/{id}/done. Null while it is open.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the row was written. Together with `occurred_at` this is what tells a late entry from a live one.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventsList(id?: string, contactId?: string, organizationId?: string, kind?: string, name?: string, subject?: string, actor?: string, occurredAt?: string, dueAt?: string, assignee?: string, doneAt?: string, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersContactEventsList(
        paramsOrFirst?: { id?: string, contactId?: string, organizationId?: string, kind?: string, name?: string, subject?: string, actor?: string, occurredAt?: string, dueAt?: string, assignee?: string, doneAt?: string, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, contactId?: string, organizationId?: string, kind?: string, name?: string, subject?: string, actor?: string, occurredAt?: string, dueAt?: string, assignee?: string, doneAt?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, contactId?: string, organizationId?: string, kind?: string, name?: string, subject?: string, actor?: string, occurredAt?: string, dueAt?: string, assignee?: string, doneAt?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                organizationId: rest[1] as string,
                kind: rest[2] as string,
                name: rest[3] as string,
                subject: rest[4] as string,
                actor: rest[5] as string,
                occurredAt: rest[6] as string,
                dueAt: rest[7] as string,
                assignee: rest[8] as string,
                doneAt: rest[9] as string,
                createdAt: rest[10] as string,
                limit: rest[11] as number,
                offset: rest[12] as number,
                order: rest[13] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const kind = params.kind;
        const name = params.name;
        const subject = params.subject;
        const actor = params.actor;
        const occurredAt = params.occurredAt;
        const dueAt = params.dueAt;
        const assignee = params.assignee;
        const doneAt = params.doneAt;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/customers/contact_events';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof occurredAt !== 'undefined') {
            apiPayload['occurred_at'] = occurredAt;
        }
        if (typeof dueAt !== 'undefined') {
            apiPayload['due_at'] = dueAt;
        }
        if (typeof assignee !== 'undefined') {
            apiPayload['assignee'] = assignee;
        }
        if (typeof doneAt !== 'undefined') {
            apiPayload['done_at'] = doneAt;
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
     * A contact event is one entry on a customer's timeline: an activity somebody logged (a call, a visit, a meeting, a note) or a registration decision this app recorded itself. Every entry is keyed by a CONTACT and stamped with the organization derived from that contact, so a company's history is one indexed read rather than a join. Append-only — there is no update and no delete, which is what makes it usable as evidence. One timeline entry by id, as it was written. Entries are never edited, so what this answers is what was recorded at the time.
     *
     * @param {string} params.id - The contact event to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     */
    customersContactEventsGet(params: { id: string }): Promise<Models.ContactEvent>;
    /**
     * A contact event is one entry on a customer's timeline: an activity somebody logged (a call, a visit, a meeting, a note) or a registration decision this app recorded itself. Every entry is keyed by a CONTACT and stamped with the organization derived from that contact, so a company's history is one indexed read rather than a join. Append-only — there is no update and no delete, which is what makes it usable as evidence. One timeline entry by id, as it was written. Entries are never edited, so what this answers is what was recorded at the time.
     *
     * @param {string} id - The contact event to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactEventsGet(id: string): Promise<Models.ContactEvent>;
    customersContactEventsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactEvent> {
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

        const apiPath = '/v1/customers/contact_events/{id}'.replace('{id}', id);
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
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. The people list, and the read behind an approval queue: `registration_status=pending` is every application waiting for a decision. Every column is a filter — `external_user_id` in particular is how a storefront turns a platform auth id back into a customer — and the page is `limit`/`offset`/`order`.
     *
     * @param {string} params.id - Filter to exactly one person.
     * @param {string} params.organizationId - Filter to one company's people. The company address book.
     * @param {string} params.email - Filter by exact email — the one lookup that is guaranteed to return at most one person, because the address is unique per tenant.
     * @param {string} params.username - Filter to rows whose `username` is exactly this value. What this person types instead of an address, unique within the tenant where it is set. Free text the shop assigns or the buyer chooses — a customer number with a name behind it, a works login, whatever the trade already says. It exists because an address is not something every B2B buyer has, and because a customer number alone names a company rather than a person.
     * @param {string} params.firstName - Filter to rows whose `first_name` is exactly this value. Given name. Optional: an ERP import often has only a mailbox.
     * @param {string} params.lastName - Filter to rows whose `last_name` is exactly this value. Family name. Optional for the same reason.
     * @param {string} params.phone - Filter to rows whose `phone` is exactly this value. Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
     * @param {string} params.jobTitle - Filter to rows whose `job_title` is exactly this value. What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
     * @param {string} params.role - Filter by role. One of the tenant's own roles (GET /customers/roles) — a tenant that never edited the ledger has viewer, requester, buyer, approver, admin.
     * @param {CustomersContactsListStatus} params.status - Filter by status.
     * @param {ShopAccess} params.shopAccess - Filter to rows whose `shop_access` is exactly this value. Whether this person can buy in the shop, in one word: 'can_order', 'invited' (the invitation went out), 'pending' (an application nobody decided), 'blocked' (access revoked) or 'none' (never invited, or rejected). Derived from `status`, `registration_status` and `invited_at`, never written.
     * @param {string} params.invitedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the last shop invitation was sent. Set by POST …/invite and …/reinvite; null while none went out.
     * @param {string} params.accessBlockedReason - Filter to rows whose `access_blocked_reason` is exactly this value. Why this person's shop access was revoked, in the tenant's default language. Set by POST …/revoke-access, cleared by …/restore-access.
     * @param {OrderApprovalMode} params.orderApprovalMode - Filter to rows whose `order_approval_mode` is exactly this value. How far `orders.approve` is meant to reach for this person: 'none' (the default), 'limited' (up to `order_approval_limit`) or 'unlimited'. Meaningful only with a role that grants `orders.approve`; the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount.
     * @param {number} params.orderApprovalLimit - Filter to rows whose `order_approval_limit` is exactly this value. Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they are meant to sign off. Set exactly when `order_approval_mode` is 'limited', and then above 0; null otherwise. An amount, never a grant — the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount.
     * @param {RegistrationStatus} params.registrationStatus - Filter by registration state. `pending` IS the approval inbox — there is no second entity for it.
     * @param {string} params.registrationDecidedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When a merchant approved or rejected the application. Null while nobody has decided.
     * @param {string} params.registrationDecidedBy - Filter to rows whose `registration_decided_by` is exactly this value. Who decided — free text as the deciding client supplied it (an operator id or an email address), not a resolvable user reference.
     * @param {string} params.registrationReason - Filter to rows whose `registration_reason` is exactly this value. Why the application was declined. Always recorded here; whether the APPLICANT is ever told it is the tenant's `registration_reason_disclosed` setting, because that is a legal decision and not a template one.
     * @param {string} params.locale - Filter to rows whose `locale` is exactly this value. The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
     * @param {boolean} params.consentMarketing - Filter to rows whose `consent_marketing` is exactly this value. Whether this person may be sent marketing email. A MIRROR of the consent app (revenexx/marketing-consents): true while the person holds at least one confirmed email subscription there, written by this app from that app's events and its hourly sweep. What a contact segment for a campaign selects on. False until they say yes. Where the consent app is not installed, an import or an edit may still set it.
     * @param {string} params.lifecycleStage - Filter to rows whose `lifecycle_stage` is exactly this value. Where this PERSON stands in the marketing and sales funnel — a separate axis from the company's stage and from shop access. One of the tenant's contact lifecycle stages (GET /customers/contact-lifecycle-stages), seeded subscriber, lead, mql, sql, opportunity, customer. Null for a person nobody placed in the funnel. Every change is announced as `contact.lifecycle_changed`.
     * @param {string} params.lifecycleChangedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When `lifecycle_stage` last changed. Written by this app.
     * @param {LeadSource} params.leadSource - Filter to rows whose `lead_source` is exactly this value. How the person first came: form, campaign, import, trade_fair, newsletter, referral or manual. Null when nobody said.
     * @param {string} params.leadSourceRef - Filter to rows whose `lead_source_ref` is exactly this value. What exactly they came through — a campaign id, `form:{form_id}:{submission_id}`, a fair code. Free text the caller supplied; a campaign counts a lead whose ref is its id.
     * @param {string} params.ownerId - Filter to rows whose `owner_id` is exactly this value. The sales rep who owns this person, as the rep CODE of the sales-reps app. Set by POST /customers/contacts/{contact_id}/handover or an edit.
     * @param {number} params.leadScore - Filter to rows whose `lead_score` is exactly this value. A score marketing writes — a whole number from 0, higher is warmer. Null until something scores the person; this app computes nothing.
     * @param {string} params.consentMarketingSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the consent mirror last changed `consent_marketing`. Null while the mirror never touched the row.
     * @param {boolean} params.isPrimary - Filter to the primary contacts — with `organization_id`, the one person a merchant calls first at that company.
     * @param {string} params.externalUserId - Find the contact behind a platform user id. What a storefront session resolves with when it has an auth id and needs the customer record.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. Id of this person in the system the record came from — an ERP contact number, a CRM id. Nullable, because a contact created in the shop has none and never will, and unique per tenant where it is set, which is what lets a repeated import find the row it wrote last time instead of adding a second one. Distinct from `external_user_id`, which points at the platform account: this one points OUT of the platform.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} params.deletedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this person was moved to the trash, or null while it is live. A person in the trash is left out of every list unless `trashed` asks for it, cannot sign in or be signed in for, and is deleted for good by a second DELETE or by the daily purge.
     * @param {string} params.deletedBy - Filter to rows whose `deleted_by` is exactly this value. Who moved it to the trash, as the platform named them — an email, or `system`. Null while it is live.
     * @param {string} params.deletedById - Filter to rows whose `deleted_by_id` is exactly this value. The platform subject of whoever moved it to the trash. Kept beside the name so the person can be pseudonymised later without losing who acted. Null while it is live, and for the system.
     * @param {string} params.trashBatch - Filter to rows whose `trash_batch` is exactly this value. The trash action this record went with. An organization and the contacts it took along share one; a restore brings back exactly the records that carry it.
     * @param {string} params.purgeAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the daily purge deletes it for good unless it is restored first: `deleted_at` plus the tenant's trash retention (90 days unless the tenant says otherwise). Null while it is live.
     * @param {string} params.purgeBlockedReason - Filter to rows whose `purge_blocked_reason` is exactly this value. Why the purge could not delete it for good — an open order, a quote, a price list another app still holds. Null when nothing stopped it. Cleared by a restore.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this person record was created in this app.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {Trashed} params.trashed - Whether the trash is part of the answer. `exclude` (the default) leaves records in the trash out, `only` answers the trash itself, `include` both. A call acting for a buyer is always `exclude`.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    customersContactsList(params?: { id?: string, organizationId?: string, email?: string, username?: string, firstName?: string, lastName?: string, phone?: string, jobTitle?: string, role?: string, status?: CustomersContactsListStatus, shopAccess?: ShopAccess, invitedAt?: string, accessBlockedReason?: string, orderApprovalMode?: OrderApprovalMode, orderApprovalLimit?: number, registrationStatus?: RegistrationStatus, registrationDecidedAt?: string, registrationDecidedBy?: string, registrationReason?: string, locale?: string, consentMarketing?: boolean, lifecycleStage?: string, lifecycleChangedAt?: string, leadSource?: LeadSource, leadSourceRef?: string, ownerId?: string, leadScore?: number, consentMarketingSyncedAt?: string, isPrimary?: boolean, externalUserId?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. The people list, and the read behind an approval queue: `registration_status=pending` is every application waiting for a decision. Every column is a filter — `external_user_id` in particular is how a storefront turns a platform auth id back into a customer — and the page is `limit`/`offset`/`order`.
     *
     * @param {string} id - Filter to exactly one person.
     * @param {string} organizationId - Filter to one company's people. The company address book.
     * @param {string} email - Filter by exact email — the one lookup that is guaranteed to return at most one person, because the address is unique per tenant.
     * @param {string} username - Filter to rows whose `username` is exactly this value. What this person types instead of an address, unique within the tenant where it is set. Free text the shop assigns or the buyer chooses — a customer number with a name behind it, a works login, whatever the trade already says. It exists because an address is not something every B2B buyer has, and because a customer number alone names a company rather than a person.
     * @param {string} firstName - Filter to rows whose `first_name` is exactly this value. Given name. Optional: an ERP import often has only a mailbox.
     * @param {string} lastName - Filter to rows whose `last_name` is exactly this value. Family name. Optional for the same reason.
     * @param {string} phone - Filter to rows whose `phone` is exactly this value. Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
     * @param {string} jobTitle - Filter to rows whose `job_title` is exactly this value. What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
     * @param {string} role - Filter by role. One of the tenant's own roles (GET /customers/roles) — a tenant that never edited the ledger has viewer, requester, buyer, approver, admin.
     * @param {CustomersContactsListStatus} status - Filter by status.
     * @param {ShopAccess} shopAccess - Filter to rows whose `shop_access` is exactly this value. Whether this person can buy in the shop, in one word: 'can_order', 'invited' (the invitation went out), 'pending' (an application nobody decided), 'blocked' (access revoked) or 'none' (never invited, or rejected). Derived from `status`, `registration_status` and `invited_at`, never written.
     * @param {string} invitedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the last shop invitation was sent. Set by POST …/invite and …/reinvite; null while none went out.
     * @param {string} accessBlockedReason - Filter to rows whose `access_blocked_reason` is exactly this value. Why this person's shop access was revoked, in the tenant's default language. Set by POST …/revoke-access, cleared by …/restore-access.
     * @param {OrderApprovalMode} orderApprovalMode - Filter to rows whose `order_approval_mode` is exactly this value. How far `orders.approve` is meant to reach for this person: 'none' (the default), 'limited' (up to `order_approval_limit`) or 'unlimited'. Meaningful only with a role that grants `orders.approve`; the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount.
     * @param {number} orderApprovalLimit - Filter to rows whose `order_approval_limit` is exactly this value. Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they are meant to sign off. Set exactly when `order_approval_mode` is 'limited', and then above 0; null otherwise. An amount, never a grant — the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount.
     * @param {RegistrationStatus} registrationStatus - Filter by registration state. `pending` IS the approval inbox — there is no second entity for it.
     * @param {string} registrationDecidedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When a merchant approved or rejected the application. Null while nobody has decided.
     * @param {string} registrationDecidedBy - Filter to rows whose `registration_decided_by` is exactly this value. Who decided — free text as the deciding client supplied it (an operator id or an email address), not a resolvable user reference.
     * @param {string} registrationReason - Filter to rows whose `registration_reason` is exactly this value. Why the application was declined. Always recorded here; whether the APPLICANT is ever told it is the tenant's `registration_reason_disclosed` setting, because that is a legal decision and not a template one.
     * @param {string} locale - Filter to rows whose `locale` is exactly this value. The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
     * @param {boolean} consentMarketing - Filter to rows whose `consent_marketing` is exactly this value. Whether this person may be sent marketing email. A MIRROR of the consent app (revenexx/marketing-consents): true while the person holds at least one confirmed email subscription there, written by this app from that app's events and its hourly sweep. What a contact segment for a campaign selects on. False until they say yes. Where the consent app is not installed, an import or an edit may still set it.
     * @param {string} lifecycleStage - Filter to rows whose `lifecycle_stage` is exactly this value. Where this PERSON stands in the marketing and sales funnel — a separate axis from the company's stage and from shop access. One of the tenant's contact lifecycle stages (GET /customers/contact-lifecycle-stages), seeded subscriber, lead, mql, sql, opportunity, customer. Null for a person nobody placed in the funnel. Every change is announced as `contact.lifecycle_changed`.
     * @param {string} lifecycleChangedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When `lifecycle_stage` last changed. Written by this app.
     * @param {LeadSource} leadSource - Filter to rows whose `lead_source` is exactly this value. How the person first came: form, campaign, import, trade_fair, newsletter, referral or manual. Null when nobody said.
     * @param {string} leadSourceRef - Filter to rows whose `lead_source_ref` is exactly this value. What exactly they came through — a campaign id, `form:{form_id}:{submission_id}`, a fair code. Free text the caller supplied; a campaign counts a lead whose ref is its id.
     * @param {string} ownerId - Filter to rows whose `owner_id` is exactly this value. The sales rep who owns this person, as the rep CODE of the sales-reps app. Set by POST /customers/contacts/{contact_id}/handover or an edit.
     * @param {number} leadScore - Filter to rows whose `lead_score` is exactly this value. A score marketing writes — a whole number from 0, higher is warmer. Null until something scores the person; this app computes nothing.
     * @param {string} consentMarketingSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the consent mirror last changed `consent_marketing`. Null while the mirror never touched the row.
     * @param {boolean} isPrimary - Filter to the primary contacts — with `organization_id`, the one person a merchant calls first at that company.
     * @param {string} externalUserId - Find the contact behind a platform user id. What a storefront session resolves with when it has an auth id and needs the customer record.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. Id of this person in the system the record came from — an ERP contact number, a CRM id. Nullable, because a contact created in the shop has none and never will, and unique per tenant where it is set, which is what lets a repeated import find the row it wrote last time instead of adding a second one. Distinct from `external_user_id`, which points at the platform account: this one points OUT of the platform.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this row was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — a row edited in the Cockpit does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a row no source owns.
     * @param {string} deletedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this person was moved to the trash, or null while it is live. A person in the trash is left out of every list unless `trashed` asks for it, cannot sign in or be signed in for, and is deleted for good by a second DELETE or by the daily purge.
     * @param {string} deletedBy - Filter to rows whose `deleted_by` is exactly this value. Who moved it to the trash, as the platform named them — an email, or `system`. Null while it is live.
     * @param {string} deletedById - Filter to rows whose `deleted_by_id` is exactly this value. The platform subject of whoever moved it to the trash. Kept beside the name so the person can be pseudonymised later without losing who acted. Null while it is live, and for the system.
     * @param {string} trashBatch - Filter to rows whose `trash_batch` is exactly this value. The trash action this record went with. An organization and the contacts it took along share one; a restore brings back exactly the records that carry it.
     * @param {string} purgeAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the daily purge deletes it for good unless it is restored first: `deleted_at` plus the tenant's trash retention (90 days unless the tenant says otherwise). Null while it is live.
     * @param {string} purgeBlockedReason - Filter to rows whose `purge_blocked_reason` is exactly this value. Why the purge could not delete it for good — an open order, a quote, a price list another app still holds. Null when nothing stopped it. Cleared by a restore.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this person record was created in this app.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of this row last changed.
     * @param {Trashed} trashed - Whether the trash is part of the answer. `exclude` (the default) leaves records in the trash out, `only` answers the trash itself, `include` both. A call acting for a buyer is always `exclude`.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsList(id?: string, organizationId?: string, email?: string, username?: string, firstName?: string, lastName?: string, phone?: string, jobTitle?: string, role?: string, status?: CustomersContactsListStatus, shopAccess?: ShopAccess, invitedAt?: string, accessBlockedReason?: string, orderApprovalMode?: OrderApprovalMode, orderApprovalLimit?: number, registrationStatus?: RegistrationStatus, registrationDecidedAt?: string, registrationDecidedBy?: string, registrationReason?: string, locale?: string, consentMarketing?: boolean, lifecycleStage?: string, lifecycleChangedAt?: string, leadSource?: LeadSource, leadSourceRef?: string, ownerId?: string, leadScore?: number, consentMarketingSyncedAt?: string, isPrimary?: boolean, externalUserId?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string): Promise<{}>;
    customersContactsList(
        paramsOrFirst?: { id?: string, organizationId?: string, email?: string, username?: string, firstName?: string, lastName?: string, phone?: string, jobTitle?: string, role?: string, status?: CustomersContactsListStatus, shopAccess?: ShopAccess, invitedAt?: string, accessBlockedReason?: string, orderApprovalMode?: OrderApprovalMode, orderApprovalLimit?: number, registrationStatus?: RegistrationStatus, registrationDecidedAt?: string, registrationDecidedBy?: string, registrationReason?: string, locale?: string, consentMarketing?: boolean, lifecycleStage?: string, lifecycleChangedAt?: string, leadSource?: LeadSource, leadSourceRef?: string, ownerId?: string, leadScore?: number, consentMarketingSyncedAt?: string, isPrimary?: boolean, externalUserId?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (CustomersContactsListStatus)?, (ShopAccess)?, (string)?, (string)?, (OrderApprovalMode)?, (number)?, (RegistrationStatus)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (LeadSource)?, (string)?, (string)?, (number)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (Trashed)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, organizationId?: string, email?: string, username?: string, firstName?: string, lastName?: string, phone?: string, jobTitle?: string, role?: string, status?: CustomersContactsListStatus, shopAccess?: ShopAccess, invitedAt?: string, accessBlockedReason?: string, orderApprovalMode?: OrderApprovalMode, orderApprovalLimit?: number, registrationStatus?: RegistrationStatus, registrationDecidedAt?: string, registrationDecidedBy?: string, registrationReason?: string, locale?: string, consentMarketing?: boolean, lifecycleStage?: string, lifecycleChangedAt?: string, leadSource?: LeadSource, leadSourceRef?: string, ownerId?: string, leadScore?: number, consentMarketingSyncedAt?: string, isPrimary?: boolean, externalUserId?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, organizationId?: string, email?: string, username?: string, firstName?: string, lastName?: string, phone?: string, jobTitle?: string, role?: string, status?: CustomersContactsListStatus, shopAccess?: ShopAccess, invitedAt?: string, accessBlockedReason?: string, orderApprovalMode?: OrderApprovalMode, orderApprovalLimit?: number, registrationStatus?: RegistrationStatus, registrationDecidedAt?: string, registrationDecidedBy?: string, registrationReason?: string, locale?: string, consentMarketing?: boolean, lifecycleStage?: string, lifecycleChangedAt?: string, leadSource?: LeadSource, leadSourceRef?: string, ownerId?: string, leadScore?: number, consentMarketingSyncedAt?: string, isPrimary?: boolean, externalUserId?: string, externalId?: string, sourceSyncedAt?: string, deletedAt?: string, deletedBy?: string, deletedById?: string, trashBatch?: string, purgeAt?: string, purgeBlockedReason?: string, createdAt?: string, updatedAt?: string, trashed?: Trashed, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                organizationId: rest[0] as string,
                email: rest[1] as string,
                username: rest[2] as string,
                firstName: rest[3] as string,
                lastName: rest[4] as string,
                phone: rest[5] as string,
                jobTitle: rest[6] as string,
                role: rest[7] as string,
                status: rest[8] as CustomersContactsListStatus,
                shopAccess: rest[9] as ShopAccess,
                invitedAt: rest[10] as string,
                accessBlockedReason: rest[11] as string,
                orderApprovalMode: rest[12] as OrderApprovalMode,
                orderApprovalLimit: rest[13] as number,
                registrationStatus: rest[14] as RegistrationStatus,
                registrationDecidedAt: rest[15] as string,
                registrationDecidedBy: rest[16] as string,
                registrationReason: rest[17] as string,
                locale: rest[18] as string,
                consentMarketing: rest[19] as boolean,
                lifecycleStage: rest[20] as string,
                lifecycleChangedAt: rest[21] as string,
                leadSource: rest[22] as LeadSource,
                leadSourceRef: rest[23] as string,
                ownerId: rest[24] as string,
                leadScore: rest[25] as number,
                consentMarketingSyncedAt: rest[26] as string,
                isPrimary: rest[27] as boolean,
                externalUserId: rest[28] as string,
                externalId: rest[29] as string,
                sourceSyncedAt: rest[30] as string,
                deletedAt: rest[31] as string,
                deletedBy: rest[32] as string,
                deletedById: rest[33] as string,
                trashBatch: rest[34] as string,
                purgeAt: rest[35] as string,
                purgeBlockedReason: rest[36] as string,
                createdAt: rest[37] as string,
                updatedAt: rest[38] as string,
                trashed: rest[39] as Trashed,
                limit: rest[40] as number,
                offset: rest[41] as number,
                order: rest[42] as string            
            };
        }
        
        const id = params.id;
        const organizationId = params.organizationId;
        const email = params.email;
        const username = params.username;
        const firstName = params.firstName;
        const lastName = params.lastName;
        const phone = params.phone;
        const jobTitle = params.jobTitle;
        const role = params.role;
        const status = params.status;
        const shopAccess = params.shopAccess;
        const invitedAt = params.invitedAt;
        const accessBlockedReason = params.accessBlockedReason;
        const orderApprovalMode = params.orderApprovalMode;
        const orderApprovalLimit = params.orderApprovalLimit;
        const registrationStatus = params.registrationStatus;
        const registrationDecidedAt = params.registrationDecidedAt;
        const registrationDecidedBy = params.registrationDecidedBy;
        const registrationReason = params.registrationReason;
        const locale = params.locale;
        const consentMarketing = params.consentMarketing;
        const lifecycleStage = params.lifecycleStage;
        const lifecycleChangedAt = params.lifecycleChangedAt;
        const leadSource = params.leadSource;
        const leadSourceRef = params.leadSourceRef;
        const ownerId = params.ownerId;
        const leadScore = params.leadScore;
        const consentMarketingSyncedAt = params.consentMarketingSyncedAt;
        const isPrimary = params.isPrimary;
        const externalUserId = params.externalUserId;
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


        const apiPath = '/v1/customers/contacts';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof username !== 'undefined') {
            apiPayload['username'] = username;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof jobTitle !== 'undefined') {
            apiPayload['job_title'] = jobTitle;
        }
        if (typeof role !== 'undefined') {
            apiPayload['role'] = role;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof shopAccess !== 'undefined') {
            apiPayload['shop_access'] = shopAccess;
        }
        if (typeof invitedAt !== 'undefined') {
            apiPayload['invited_at'] = invitedAt;
        }
        if (typeof accessBlockedReason !== 'undefined') {
            apiPayload['access_blocked_reason'] = accessBlockedReason;
        }
        if (typeof orderApprovalMode !== 'undefined') {
            apiPayload['order_approval_mode'] = orderApprovalMode;
        }
        if (typeof orderApprovalLimit !== 'undefined') {
            apiPayload['order_approval_limit'] = orderApprovalLimit;
        }
        if (typeof registrationStatus !== 'undefined') {
            apiPayload['registration_status'] = registrationStatus;
        }
        if (typeof registrationDecidedAt !== 'undefined') {
            apiPayload['registration_decided_at'] = registrationDecidedAt;
        }
        if (typeof registrationDecidedBy !== 'undefined') {
            apiPayload['registration_decided_by'] = registrationDecidedBy;
        }
        if (typeof registrationReason !== 'undefined') {
            apiPayload['registration_reason'] = registrationReason;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof consentMarketing !== 'undefined') {
            apiPayload['consent_marketing'] = consentMarketing;
        }
        if (typeof lifecycleStage !== 'undefined') {
            apiPayload['lifecycle_stage'] = lifecycleStage;
        }
        if (typeof lifecycleChangedAt !== 'undefined') {
            apiPayload['lifecycle_changed_at'] = lifecycleChangedAt;
        }
        if (typeof leadSource !== 'undefined') {
            apiPayload['lead_source'] = leadSource;
        }
        if (typeof leadSourceRef !== 'undefined') {
            apiPayload['lead_source_ref'] = leadSourceRef;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof leadScore !== 'undefined') {
            apiPayload['lead_score'] = leadScore;
        }
        if (typeof consentMarketingSyncedAt !== 'undefined') {
            apiPayload['consent_marketing_synced_at'] = consentMarketingSyncedAt;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof externalUserId !== 'undefined') {
            apiPayload['external_user_id'] = externalUserId;
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
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. Creates the person and their platform login together, so a contact that exists can always sign in. `role` names one of this tenant's own roles and decides what they may do; `registration_status` may only be set to `pending` or `approved` here, because a rejection has to carry a reason and that is the reject route's job. Two rows of this tenant may not share `email`, `external_user_id` (while external_user_id IS NOT NULL), `external_id` (while external_id IS NOT NULL) or `username` (while username IS NOT NULL).
     *
     * @param {string} params.email - One of the things this person can sign in with, unique within the tenant where it is set. Changing it changes the platform login with it. It is OPTIONAL: B2B buyers without an address of their own are a routine case, and they sign in by username instead. Two people sharing one address is still not possible — a shared purchasing mailbox is one contact, not several.
     * @param {string} params.createdAt - When this person record was created in this app. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {string} params.externalId - Id of this person in the system the record came from — an ERP contact number, a CRM id. Nullable, because a contact created in the shop has none and never will, and unique per tenant where it is set, which is what lets a repeated import find the row it wrote last time instead of adding a second one. Distinct from `external_user_id`, which points at the platform account: this one points OUT of the platform. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {string} params.firstName - Given name. Optional: an ERP import often has only a mailbox.
     * @param {boolean} params.isPrimary - The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
     * @param {string} params.jobTitle - What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
     * @param {string} params.lastName - Family name. Optional for the same reason.
     * @param {string} params.locale - The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
     * @param {number} params.orderApprovalLimit - Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they are meant to sign off. Set exactly when `order_approval_mode` is 'limited', and then above 0; null otherwise. An amount, never a grant — the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Required with `order_approval_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {OrderApprovalMode} params.orderApprovalMode - How far `orders.approve` is meant to reach for this person: 'none' (the default), 'limited' (up to `order_approval_limit`) or 'unlimited'. Meaningful only with a role that grants `orders.approve`; the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Default 'none'. Leaving 'limited' without sending `order_approval_limit` clears the amount.
     * @param {string} params.organizationId - The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person. Membership is mirrored to the platform team.
     * @param {string} params.phone - Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
     * @param {CustomersContactsCreateRegistrationStatus} params.registrationStatus - Where this person's own application stands: 'approved' (the default, and what an open store creates), 'pending' while a merchant has yet to decide, 'rejected' once they declined. Only the approve/reject routes move it; it is ignored on an ordinary update. On CREATE only, and only to file the contact as an application: 'pending' creates the platform user disabled and routes the contact through approve/reject.
     * @param {string} params.role - The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts. A tenant that never edited the ledger has viewer, requester, buyer, approver, admin; a create without a role gets the one flagged as default, and a role the tenant does not keep is a 400.
     * @param {ContactStatus} params.status - Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'. Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsCreate(params: { email: string, createdAt?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, registrationStatus?: CustomersContactsCreateRegistrationStatus, role?: string, status?: ContactStatus }): Promise<Models.Contact>;
    /**
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. Creates the person and their platform login together, so a contact that exists can always sign in. `role` names one of this tenant's own roles and decides what they may do; `registration_status` may only be set to `pending` or `approved` here, because a rejection has to carry a reason and that is the reject route's job. Two rows of this tenant may not share `email`, `external_user_id` (while external_user_id IS NOT NULL), `external_id` (while external_id IS NOT NULL) or `username` (while username IS NOT NULL).
     *
     * @param {string} email - One of the things this person can sign in with, unique within the tenant where it is set. Changing it changes the platform login with it. It is OPTIONAL: B2B buyers without an address of their own are a routine case, and they sign in by username instead. Two people sharing one address is still not possible — a shared purchasing mailbox is one contact, not several.
     * @param {string} createdAt - When this person record was created in this app. Accepted on create only from a call naming no acting contact — an operator, an import, an ERP carrying a record over with its original date. A buyer sending it, or any update changing it, is a 400 `server_owned_field`.
     * @param {string} externalId - Id of this person in the system the record came from — an ERP contact number, a CRM id. Nullable, because a contact created in the shop has none and never will, and unique per tenant where it is set, which is what lets a repeated import find the row it wrote last time instead of adding a second one. Distinct from `external_user_id`, which points at the platform account: this one points OUT of the platform. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {string} firstName - Given name. Optional: an ERP import often has only a mailbox.
     * @param {boolean} isPrimary - The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
     * @param {string} jobTitle - What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
     * @param {string} lastName - Family name. Optional for the same reason.
     * @param {string} locale - The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
     * @param {number} orderApprovalLimit - Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they are meant to sign off. Set exactly when `order_approval_mode` is 'limited', and then above 0; null otherwise. An amount, never a grant — the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Required with `order_approval_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {OrderApprovalMode} orderApprovalMode - How far `orders.approve` is meant to reach for this person: 'none' (the default), 'limited' (up to `order_approval_limit`) or 'unlimited'. Meaningful only with a role that grants `orders.approve`; the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Default 'none'. Leaving 'limited' without sending `order_approval_limit` clears the amount.
     * @param {string} organizationId - The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person. Membership is mirrored to the platform team.
     * @param {string} phone - Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
     * @param {CustomersContactsCreateRegistrationStatus} registrationStatus - Where this person's own application stands: 'approved' (the default, and what an open store creates), 'pending' while a merchant has yet to decide, 'rejected' once they declined. Only the approve/reject routes move it; it is ignored on an ordinary update. On CREATE only, and only to file the contact as an application: 'pending' creates the platform user disabled and routes the contact through approve/reject.
     * @param {string} role - The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts. A tenant that never edited the ledger has viewer, requester, buyer, approver, admin; a create without a role gets the one flagged as default, and a role the tenant does not keep is a 400.
     * @param {ContactStatus} status - Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'. Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsCreate(email: string, createdAt?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, registrationStatus?: CustomersContactsCreateRegistrationStatus, role?: string, status?: ContactStatus): Promise<Models.Contact>;
    customersContactsCreate(
        paramsOrFirst: { email: string, createdAt?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, registrationStatus?: CustomersContactsCreateRegistrationStatus, role?: string, status?: ContactStatus } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (number)?, (OrderApprovalMode)?, (string)?, (string)?, (CustomersContactsCreateRegistrationStatus)?, (string)?, (ContactStatus)?]    
    ): Promise<Models.Contact> {
        let params: { email: string, createdAt?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, registrationStatus?: CustomersContactsCreateRegistrationStatus, role?: string, status?: ContactStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, createdAt?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, registrationStatus?: CustomersContactsCreateRegistrationStatus, role?: string, status?: ContactStatus };
        } else {
            params = {
                email: paramsOrFirst as string,
                createdAt: rest[0] as string,
                externalId: rest[1] as string,
                firstName: rest[2] as string,
                isPrimary: rest[3] as boolean,
                jobTitle: rest[4] as string,
                lastName: rest[5] as string,
                locale: rest[6] as string,
                orderApprovalLimit: rest[7] as number,
                orderApprovalMode: rest[8] as OrderApprovalMode,
                organizationId: rest[9] as string,
                phone: rest[10] as string,
                registrationStatus: rest[11] as CustomersContactsCreateRegistrationStatus,
                role: rest[12] as string,
                status: rest[13] as ContactStatus            
            };
        }
        
        const email = params.email;
        const createdAt = params.createdAt;
        const externalId = params.externalId;
        const firstName = params.firstName;
        const isPrimary = params.isPrimary;
        const jobTitle = params.jobTitle;
        const lastName = params.lastName;
        const locale = params.locale;
        const orderApprovalLimit = params.orderApprovalLimit;
        const orderApprovalMode = params.orderApprovalMode;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const registrationStatus = params.registrationStatus;
        const role = params.role;
        const status = params.status;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }

        const apiPath = '/v1/customers/contacts';
        const apiPayload: Payload = {};
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof jobTitle !== 'undefined') {
            apiPayload['job_title'] = jobTitle;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof orderApprovalLimit !== 'undefined') {
            apiPayload['order_approval_limit'] = orderApprovalLimit;
        }
        if (typeof orderApprovalMode !== 'undefined') {
            apiPayload['order_approval_mode'] = orderApprovalMode;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof registrationStatus !== 'undefined') {
            apiPayload['registration_status'] = registrationStatus;
        }
        if (typeof role !== 'undefined') {
            apiPayload['role'] = role;
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

    /**
     * Deletes every contact in the trash for good, oldest first and at most fifty per call, each checked on its own exactly like a second DELETE. A contact something still blocks stays in the trash and is listed with the reason; the rest go. POST again while `more` is true. An administrator's right, never a buyer's.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactTrashEmptyResult>}
     */
    customersContactsTrashEmpty(): Promise<Models.ContactTrashEmptyResult> {

        const apiPath = '/v1/customers/contacts/trash/empty';
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
     * This is how a call, a visit, a meeting, an email or a plain note reaches one person's timeline. It writes a contact_events row with kind != 'system' and emits contact_event.created, so an activity travels on the same bus as a registration decision and a timeline is one query rather than a union. organization_id is DERIVED from the contact, never taken from the body — an activity cannot be filed under a company the person does not belong to.
     *
     * @param {string} params.contactId - The person the entry is about. The organization is derived from them.
     * @param {string} params.subject - One line a person can scan in a timeline. Required — an entry nobody can read at a glance is not worth the row.
     * @param {string} params.actor - Who logged it (operator id or email). Free text; this app does not resolve it.
     * @param {ContactActivityKind} params.kind - What happened. 'system' is deliberately NOT accepted — those rows are the registration decision trail and are written by the approve/reject routes. Default 'note'.
     * @param {string} params.note - The long form. Stored inside the event payload as `note`, not as a column of its own.
     * @param {string} params.occurredAt - When it actually happened. Defaults to now — a call logged on Monday about Friday should say Friday.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     */
    customersContactsEventsCreate(params: { contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string }): Promise<Models.ContactEvent>;
    /**
     * This is how a call, a visit, a meeting, an email or a plain note reaches one person's timeline. It writes a contact_events row with kind != 'system' and emits contact_event.created, so an activity travels on the same bus as a registration decision and a timeline is one query rather than a union. organization_id is DERIVED from the contact, never taken from the body — an activity cannot be filed under a company the person does not belong to.
     *
     * @param {string} contactId - The person the entry is about. The organization is derived from them.
     * @param {string} subject - One line a person can scan in a timeline. Required — an entry nobody can read at a glance is not worth the row.
     * @param {string} actor - Who logged it (operator id or email). Free text; this app does not resolve it.
     * @param {ContactActivityKind} kind - What happened. 'system' is deliberately NOT accepted — those rows are the registration decision trail and are written by the approve/reject routes. Default 'note'.
     * @param {string} note - The long form. Stored inside the event payload as `note`, not as a column of its own.
     * @param {string} occurredAt - When it actually happened. Defaults to now — a call logged on Monday about Friday should say Friday.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsEventsCreate(contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string): Promise<Models.ContactEvent>;
    customersContactsEventsCreate(
        paramsOrFirst: { contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string } | string,
        ...rest: [(string)?, (string)?, (ContactActivityKind)?, (string)?, (string)?]    
    ): Promise<Models.ContactEvent> {
        let params: { contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                subject: rest[0] as string,
                actor: rest[1] as string,
                kind: rest[2] as ContactActivityKind,
                note: rest[3] as string,
                occurredAt: rest[4] as string            
            };
        }
        
        const contactId = params.contactId;
        const subject = params.subject;
        const actor = params.actor;
        const kind = params.kind;
        const note = params.note;
        const occurredAt = params.occurredAt;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof subject === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subject"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/events'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof occurredAt !== 'undefined') {
            apiPayload['occurred_at'] = occurredAt;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
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
     * Repair the one contact an import leaves unable to sign in. A contact created through this API is mirrored as a platform login in the same call; a contact written straight into the record by a migration or an ERP feed is not, and reads as a customer everywhere while being able to do nothing — no password, no recovery, and "no account found for that address" as the only explanation. This call creates the missing login and links it. It is idempotent: a contact that already has one is answered with it and `created` false, and nothing is touched, so a whole import is healed with one call per contact and is safe to re-run. It takes no password — the person is handed to `POST /customers/auth/recovery` and mints their own. It mirrors the state it finds: a blocked contact, or one whose registration is still pending or rejected, gets its login created DISABLED, so a repair can never hand access to somebody who was refused it. And it delivers nothing at all — telling the person is what the invitation is for.
     *
     * @param {string} params.contactId - The person whose login is missing.
     * @param {string} params.createdBy - Who ordered the repair, for the timeline entry. An automated sweep names itself here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactIdentityResponse>}
     */
    customersContactsIdentity(params: { contactId: string, createdBy?: string }): Promise<Models.ContactIdentityResponse>;
    /**
     * Repair the one contact an import leaves unable to sign in. A contact created through this API is mirrored as a platform login in the same call; a contact written straight into the record by a migration or an ERP feed is not, and reads as a customer everywhere while being able to do nothing — no password, no recovery, and "no account found for that address" as the only explanation. This call creates the missing login and links it. It is idempotent: a contact that already has one is answered with it and `created` false, and nothing is touched, so a whole import is healed with one call per contact and is safe to re-run. It takes no password — the person is handed to `POST /customers/auth/recovery` and mints their own. It mirrors the state it finds: a blocked contact, or one whose registration is still pending or rejected, gets its login created DISABLED, so a repair can never hand access to somebody who was refused it. And it delivers nothing at all — telling the person is what the invitation is for.
     *
     * @param {string} contactId - The person whose login is missing.
     * @param {string} createdBy - Who ordered the repair, for the timeline entry. An automated sweep names itself here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactIdentityResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsIdentity(contactId: string, createdBy?: string): Promise<Models.ContactIdentityResponse>;
    customersContactsIdentity(
        paramsOrFirst: { contactId: string, createdBy?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ContactIdentityResponse> {
        let params: { contactId: string, createdBy?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, createdBy?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                createdBy: rest[0] as string            
            };
        }
        
        const contactId = params.contactId;
        const createdBy = params.createdBy;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/identity'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof createdBy !== 'undefined') {
            apiPayload['created_by'] = createdBy;
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
     * Tell somebody they were added to a company. A deliberate act rather than a side effect of creating the contact: a merchant entering a colleague from a business card is not always ready to mail them, and "added" and "told" are different decisions. No secret travels — the platform team membership is confirmed as it is created, so there is nothing to accept; the message says "you are in, here is the way in". Unlike the auth mails, a failure here IS a failure: the identity service sends nothing for this occasion, so this is the only message the person gets.
     *
     * @param {string} params.contactId - The person being told. They are already a member — this only sends the message.
     * @param {string} params.invitedBy - Who did the inviting, as the recipient should read it. Absent, the company name is used — "Beispiel GmbH invited you" reads better than the name of somebody they have never heard of. Ignored on a buyer's call: the mail then names the buyer, because a name in the shop's own mail is a claim the shop makes.
     * @param {string} params.url - Where the invitation points — the storefront sign-in, normally. There is no token in it: the person is already a member and only has to sign in. Absent, the shop's first link origin is used, and `invited_at` is stamped either way.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactInviteResponse>}
     */
    customersContactsInvite(params: { contactId: string, invitedBy?: string, url?: string }): Promise<Models.ContactInviteResponse>;
    /**
     * Tell somebody they were added to a company. A deliberate act rather than a side effect of creating the contact: a merchant entering a colleague from a business card is not always ready to mail them, and "added" and "told" are different decisions. No secret travels — the platform team membership is confirmed as it is created, so there is nothing to accept; the message says "you are in, here is the way in". Unlike the auth mails, a failure here IS a failure: the identity service sends nothing for this occasion, so this is the only message the person gets.
     *
     * @param {string} contactId - The person being told. They are already a member — this only sends the message.
     * @param {string} invitedBy - Who did the inviting, as the recipient should read it. Absent, the company name is used — "Beispiel GmbH invited you" reads better than the name of somebody they have never heard of. Ignored on a buyer's call: the mail then names the buyer, because a name in the shop's own mail is a claim the shop makes.
     * @param {string} url - Where the invitation points — the storefront sign-in, normally. There is no token in it: the person is already a member and only has to sign in. Absent, the shop's first link origin is used, and `invited_at` is stamped either way.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactInviteResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsInvite(contactId: string, invitedBy?: string, url?: string): Promise<Models.ContactInviteResponse>;
    customersContactsInvite(
        paramsOrFirst: { contactId: string, invitedBy?: string, url?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.ContactInviteResponse> {
        let params: { contactId: string, invitedBy?: string, url?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, invitedBy?: string, url?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                invitedBy: rest[0] as string,
                url: rest[1] as string            
            };
        }
        
        const contactId = params.contactId;
        const invitedBy = params.invitedBy;
        const url = params.url;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/invite'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof invitedBy !== 'undefined') {
            apiPayload['invited_by'] = invitedBy;
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
     * Computed from contacts.role on every call — the grants are never persisted, so this always reflects the role the contact holds right now.
     *
     * @param {string} params.contactId - The person whose grants are being read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPermissions>}
     */
    customersContactsPermissions(params: { contactId: string }): Promise<Models.ContactPermissions>;
    /**
     * Computed from contacts.role on every call — the grants are never persisted, so this always reflects the role the contact holds right now.
     *
     * @param {string} contactId - The person whose grants are being read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactPermissions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsPermissions(contactId: string): Promise<Models.ContactPermissions>;
    customersContactsPermissions(
        paramsOrFirst: { contactId: string } | string    
    ): Promise<Models.ContactPermissions> {
        let params: { contactId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string };
        } else {
            params = {
                contactId: paramsOrFirst as string            
            };
        }
        
        const contactId = params.contactId;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/permissions'.replace('{contact_id}', contactId);
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
     * Only reachable for a contact whose registration_status is 'pending' or 'rejected' (approving a rejection reinstates it). Enables the platform user FIRST — the password the applicant chose at submit time works immediately, no new credential is issued — then sets registration_status='approved' and status='active', and un-blocks the organization this registration itself founded. Approving an already-approved registration is a no-op that emits nothing, so a retry is safe. Writes a contact_events row named 'registration.approved'.
     *
     * @param {string} params.contactId - The applicant. It is the CONTACT that is approved — the organization it founded is unblocked with it.
     * @param {string} params.decidedBy - Who approved it — recorded on the contact and carried in the event. Free text (operator id or email). An operator the gateway authenticated is recorded as themselves instead, so the Cockpit sends none.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersRegistrationsApprove(params: { contactId: string, decidedBy?: string }): Promise<Models.Contact>;
    /**
     * Only reachable for a contact whose registration_status is 'pending' or 'rejected' (approving a rejection reinstates it). Enables the platform user FIRST — the password the applicant chose at submit time works immediately, no new credential is issued — then sets registration_status='approved' and status='active', and un-blocks the organization this registration itself founded. Approving an already-approved registration is a no-op that emits nothing, so a retry is safe. Writes a contact_events row named 'registration.approved'.
     *
     * @param {string} contactId - The applicant. It is the CONTACT that is approved — the organization it founded is unblocked with it.
     * @param {string} decidedBy - Who approved it — recorded on the contact and carried in the event. Free text (operator id or email). An operator the gateway authenticated is recorded as themselves instead, so the Cockpit sends none.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRegistrationsApprove(contactId: string, decidedBy?: string): Promise<Models.Contact>;
    customersRegistrationsApprove(
        paramsOrFirst: { contactId: string, decidedBy?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Contact> {
        let params: { contactId: string, decidedBy?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, decidedBy?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                decidedBy: rest[0] as string            
            };
        }
        
        const contactId = params.contactId;
        const decidedBy = params.decidedBy;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/registration/approve'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof decidedBy !== 'undefined') {
            apiPayload['decided_by'] = decidedBy;
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
     * Only reachable from 'pending'. Sets registration_status='rejected' and status='blocked', keeps the platform user in place but disabled — the email must not fall free for a silent second identity, and the merchant keeps the record. Delete the contact to remove both. 'reason' is mandatory and is stored on the contact plus carried in the event payload, so the applicant can be told why. Rejecting an already-rejected registration is a no-op. Writes a contact_events row named 'registration.rejected'.
     *
     * @param {string} params.contactId - The applicant being declined.
     * @param {string} params.reason - Why the application was declined. Always stored on the contact. It only reaches the APPLICANT when the tenant's registration_reason_disclosed setting is on — the event payload then carries it, and so does the 403 the login answers.
     * @param {string} params.decidedBy - Who rejected it — recorded on the contact and carried in the event. An operator the gateway authenticated is recorded as themselves instead.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersRegistrationsReject(params: { contactId: string, reason: string, decidedBy?: string }): Promise<Models.Contact>;
    /**
     * Only reachable from 'pending'. Sets registration_status='rejected' and status='blocked', keeps the platform user in place but disabled — the email must not fall free for a silent second identity, and the merchant keeps the record. Delete the contact to remove both. 'reason' is mandatory and is stored on the contact plus carried in the event payload, so the applicant can be told why. Rejecting an already-rejected registration is a no-op. Writes a contact_events row named 'registration.rejected'.
     *
     * @param {string} contactId - The applicant being declined.
     * @param {string} reason - Why the application was declined. Always stored on the contact. It only reaches the APPLICANT when the tenant's registration_reason_disclosed setting is on — the event payload then carries it, and so does the 403 the login answers.
     * @param {string} decidedBy - Who rejected it — recorded on the contact and carried in the event. An operator the gateway authenticated is recorded as themselves instead.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersRegistrationsReject(contactId: string, reason: string, decidedBy?: string): Promise<Models.Contact>;
    customersRegistrationsReject(
        paramsOrFirst: { contactId: string, reason: string, decidedBy?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Contact> {
        let params: { contactId: string, reason: string, decidedBy?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, reason: string, decidedBy?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                reason: rest[0] as string,
                decidedBy: rest[1] as string            
            };
        }
        
        const contactId = params.contactId;
        const reason = params.reason;
        const decidedBy = params.decidedBy;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/registration/reject'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof decidedBy !== 'undefined') {
            apiPayload['decided_by'] = decidedBy;
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

    /**
     * For somebody who has not taken the first invitation up: the same mail again, and `invited_at` moves. Only while the shop access says 'invited'. Without a `url` the shop's first link origin is where it points.
     *
     * @param {string} params.contactId - The person whose invitation is sent again.
     * @param {string} params.url - Where the invitation points. The first link origin when absent.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsReinvite(params: { contactId: string, url?: string }): Promise<Models.Contact>;
    /**
     * For somebody who has not taken the first invitation up: the same mail again, and `invited_at` moves. Only while the shop access says 'invited'. Without a `url` the shop's first link origin is where it points.
     *
     * @param {string} contactId - The person whose invitation is sent again.
     * @param {string} url - Where the invitation points. The first link origin when absent.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsReinvite(contactId: string, url?: string): Promise<Models.Contact>;
    customersContactsReinvite(
        paramsOrFirst: { contactId: string, url?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Contact> {
        let params: { contactId: string, url?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, url?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                url: rest[0] as string            
            };
        }
        
        const contactId = params.contactId;
        const url = params.url;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/reinvite'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
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
     * The status returns to 'active', the reason is cleared, and the login is switched on again — unless the person is an application nobody decided, whose login stays off until approval.
     *
     * @param {string} params.contactId - The person whose access comes back.
     * @param {string} params.actor - Who gave it back.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsRestoreAccess(params: { contactId: string, actor?: string }): Promise<Models.Contact>;
    /**
     * The status returns to 'active', the reason is cleared, and the login is switched on again — unless the person is an application nobody decided, whose login stays off until approval.
     *
     * @param {string} contactId - The person whose access comes back.
     * @param {string} actor - Who gave it back.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsRestoreAccess(contactId: string, actor?: string): Promise<Models.Contact>;
    customersContactsRestoreAccess(
        paramsOrFirst: { contactId: string, actor?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Contact> {
        let params: { contactId: string, actor?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, actor?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                actor: rest[0] as string            
            };
        }
        
        const contactId = params.contactId;
        const actor = params.actor;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/restore-access'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
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
     * The login is switched off, the status becomes 'blocked' with the reason, and `contact.blocked` is published — the same as an edit to 'blocked', with the reason on the record and on the timeline. The record, the role and the history stay.
     *
     * @param {string} params.contactId - The person whose access is revoked.
     * @param {Reason} params.reason - Why the access is revoked. Stored as its words in the tenant's default language.
     * @param {string} params.actor - Who revoked it.
     * @param {string} params.note - What happened, in the merchant's own words. Stored on the timeline entry.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsRevokeAccess(params: { contactId: string, reason: Reason, actor?: string, note?: string }): Promise<Models.Contact>;
    /**
     * The login is switched off, the status becomes 'blocked' with the reason, and `contact.blocked` is published — the same as an edit to 'blocked', with the reason on the record and on the timeline. The record, the role and the history stay.
     *
     * @param {string} contactId - The person whose access is revoked.
     * @param {Reason} reason - Why the access is revoked. Stored as its words in the tenant's default language.
     * @param {string} actor - Who revoked it.
     * @param {string} note - What happened, in the merchant's own words. Stored on the timeline entry.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsRevokeAccess(contactId: string, reason: Reason, actor?: string, note?: string): Promise<Models.Contact>;
    customersContactsRevokeAccess(
        paramsOrFirst: { contactId: string, reason: Reason, actor?: string, note?: string } | string,
        ...rest: [(Reason)?, (string)?, (string)?]    
    ): Promise<Models.Contact> {
        let params: { contactId: string, reason: Reason, actor?: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, reason: Reason, actor?: string, note?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                reason: rest[0] as Reason,
                actor: rest[1] as string,
                note: rest[2] as string            
            };
        }
        
        const contactId = params.contactId;
        const reason = params.reason;
        const actor = params.actor;
        const note = params.note;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/revoke-access'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
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

    /**
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. The first DELETE moves the contact to the trash: it keeps everything that points at it, leaves every list, and can no longer sign in or be signed in for. The person's platform login is switched off and every session ended, but kept — so a restore needs no new invitation. A second DELETE on a contact already in the trash deletes it for good, with its platform user — refused while another app still holds an open order, quote, purchase request or approval, an enabled punchout account, a punchout account naming the person as its fallback contact, a customer price list, an active cost centre or a personal voucher. An app that does not answer blocks too. The daily purge runs the same delete once the tenant's trash retention has run out.
     *
     * @param {string} params.id - The contact to delete.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactDeleteResult>}
     */
    customersContactsDelete(params: { id: string }): Promise<Models.ContactDeleteResult>;
    /**
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. The first DELETE moves the contact to the trash: it keeps everything that points at it, leaves every list, and can no longer sign in or be signed in for. The person's platform login is switched off and every session ended, but kept — so a restore needs no new invitation. A second DELETE on a contact already in the trash deletes it for good, with its platform user — refused while another app still holds an open order, quote, purchase request or approval, an enabled punchout account, a punchout account naming the person as its fallback contact, a customer price list, an active cost centre or a personal voucher. An app that does not answer blocks too. The daily purge runs the same delete once the tenant's trash retention has run out.
     *
     * @param {string} id - The contact to delete.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactDeleteResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsDelete(id: string): Promise<Models.ContactDeleteResult>;
    customersContactsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactDeleteResult> {
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

        const apiPath = '/v1/customers/contacts/{id}'.replace('{id}', id);
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
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. One person by id. What they are ALLOWED to do is not in here: permissions are derived from `role` at read time and answered by `GET /customers/contacts/{contact_id}/permissions`.
     *
     * @param {string} params.id - The contact to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsGet(params: { id: string }): Promise<Models.Contact>;
    /**
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. One person by id. What they are ALLOWED to do is not in here: permissions are derived from `role` at read time and answered by `GET /customers/contacts/{contact_id}/permissions`.
     *
     * @param {string} id - The contact to read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsGet(id: string): Promise<Models.Contact>;
    customersContactsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Contact> {
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

        const apiPath = '/v1/customers/contacts/{id}'.replace('{id}', id);
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
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. A partial update — send only what changes. `external_user_id` and every `registration_*` column are ignored: the link to platform auth is mirror-managed, and registration state is only ever moved by the approve and reject routes, which record why. Two rows of this tenant may not share `email`, `external_user_id` (while external_user_id IS NOT NULL), `external_id` (while external_id IS NOT NULL) or `username` (while username IS NOT NULL).
     *
     * @param {string} params.id - The contact to update.
     * @param {string} params.email - One of the things this person can sign in with, unique within the tenant where it is set. Changing it changes the platform login with it. It is OPTIONAL: B2B buyers without an address of their own are a routine case, and they sign in by username instead. Two people sharing one address is still not possible — a shared purchasing mailbox is one contact, not several.
     * @param {string} params.externalId - Id of this person in the system the record came from — an ERP contact number, a CRM id. Nullable, because a contact created in the shop has none and never will, and unique per tenant where it is set, which is what lets a repeated import find the row it wrote last time instead of adding a second one. Distinct from `external_user_id`, which points at the platform account: this one points OUT of the platform. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {string} params.firstName - Given name. Optional: an ERP import often has only a mailbox.
     * @param {boolean} params.isPrimary - The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
     * @param {string} params.jobTitle - What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
     * @param {string} params.lastName - Family name. Optional for the same reason.
     * @param {string} params.locale - The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
     * @param {number} params.orderApprovalLimit - Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they are meant to sign off. Set exactly when `order_approval_mode` is 'limited', and then above 0; null otherwise. An amount, never a grant — the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Required with `order_approval_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {OrderApprovalMode} params.orderApprovalMode - How far `orders.approve` is meant to reach for this person: 'none' (the default), 'limited' (up to `order_approval_limit`) or 'unlimited'. Meaningful only with a role that grants `orders.approve`; the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Default 'none'. Leaving 'limited' without sending `order_approval_limit` clears the amount.
     * @param {string} params.organizationId - The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person. Membership is mirrored to the platform team.
     * @param {string} params.phone - Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
     * @param {string} params.role - The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts. A tenant that never edited the ledger has viewer, requester, buyer, approver, admin; a create without a role gets the one flagged as default, and a role the tenant does not keep is a 400.
     * @param {ContactStatus} params.status - Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'. Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     */
    customersContactsUpdate(params: { id: string, email?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, role?: string, status?: ContactStatus }): Promise<Models.Contact>;
    /**
     * A contact is a PERSON, and the unit that logs in: one platform user, one email address, one role held inside its organization. A contact without an organization is a standalone buyer rather than an error, and two people at the same company are two contacts sharing an `organization_id`. A partial update — send only what changes. `external_user_id` and every `registration_*` column are ignored: the link to platform auth is mirror-managed, and registration state is only ever moved by the approve and reject routes, which record why. Two rows of this tenant may not share `email`, `external_user_id` (while external_user_id IS NOT NULL), `external_id` (while external_id IS NOT NULL) or `username` (while username IS NOT NULL).
     *
     * @param {string} id - The contact to update.
     * @param {string} email - One of the things this person can sign in with, unique within the tenant where it is set. Changing it changes the platform login with it. It is OPTIONAL: B2B buyers without an address of their own are a routine case, and they sign in by username instead. Two people sharing one address is still not possible — a shared purchasing mailbox is one contact, not several.
     * @param {string} externalId - Id of this person in the system the record came from — an ERP contact number, a CRM id. Nullable, because a contact created in the shop has none and never will, and unique per tenant where it is set, which is what lets a repeated import find the row it wrote last time instead of adding a second one. Distinct from `external_user_id`, which points at the platform account: this one points OUT of the platform. Writable, so a record can be adopted or a wrong id corrected — but it is the key a repeated import matches on, so changing it on a row an import owns makes the next run create a second one rather than update this.
     * @param {string} firstName - Given name. Optional: an ERP import often has only a mailbox.
     * @param {boolean} isPrimary - The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
     * @param {string} jobTitle - What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
     * @param {string} lastName - Family name. Optional for the same reason.
     * @param {string} locale - The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
     * @param {number} orderApprovalLimit - Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they are meant to sign off. Set exactly when `order_approval_mode` is 'limited', and then above 0; null otherwise. An amount, never a grant — the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Required with `order_approval_mode` 'limited' and refused with any other mode (400 `limited_mode_requires_limit` / `limit_requires_limited_mode`).
     * @param {OrderApprovalMode} orderApprovalMode - How far `orders.approve` is meant to reach for this person: 'none' (the default), 'limited' (up to `order_approval_limit`) or 'unlimited'. Meaningful only with a role that grants `orders.approve`; the grant comes from the role. Recorded for the merchant and for procurement's tiered sign-off; the orders app does not read it — whoever holds orders.approve approves or rejects a colleague's order of any amount. Default 'none'. Leaving 'limited' without sending `order_approval_limit` clears the amount.
     * @param {string} organizationId - The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person. Membership is mirrored to the platform team.
     * @param {string} phone - Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
     * @param {string} role - The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts. A tenant that never edited the ledger has viewer, requester, buyer, approver, admin; a create without a role gets the one flagged as default, and a role the tenant does not keep is a 400.
     * @param {ContactStatus} status - Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'. Default 'invited' on create.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Contact>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsUpdate(id: string, email?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, role?: string, status?: ContactStatus): Promise<Models.Contact>;
    customersContactsUpdate(
        paramsOrFirst: { id: string, email?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, role?: string, status?: ContactStatus } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (number)?, (OrderApprovalMode)?, (string)?, (string)?, (string)?, (ContactStatus)?]    
    ): Promise<Models.Contact> {
        let params: { id: string, email?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, role?: string, status?: ContactStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, email?: string, externalId?: string, firstName?: string, isPrimary?: boolean, jobTitle?: string, lastName?: string, locale?: string, orderApprovalLimit?: number, orderApprovalMode?: OrderApprovalMode, organizationId?: string, phone?: string, role?: string, status?: ContactStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                email: rest[0] as string,
                externalId: rest[1] as string,
                firstName: rest[2] as string,
                isPrimary: rest[3] as boolean,
                jobTitle: rest[4] as string,
                lastName: rest[5] as string,
                locale: rest[6] as string,
                orderApprovalLimit: rest[7] as number,
                orderApprovalMode: rest[8] as OrderApprovalMode,
                organizationId: rest[9] as string,
                phone: rest[10] as string,
                role: rest[11] as string,
                status: rest[12] as ContactStatus            
            };
        }
        
        const id = params.id;
        const email = params.email;
        const externalId = params.externalId;
        const firstName = params.firstName;
        const isPrimary = params.isPrimary;
        const jobTitle = params.jobTitle;
        const lastName = params.lastName;
        const locale = params.locale;
        const orderApprovalLimit = params.orderApprovalLimit;
        const orderApprovalMode = params.orderApprovalMode;
        const organizationId = params.organizationId;
        const phone = params.phone;
        const role = params.role;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/customers/contacts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof isPrimary !== 'undefined') {
            apiPayload['is_primary'] = isPrimary;
        }
        if (typeof jobTitle !== 'undefined') {
            apiPayload['job_title'] = jobTitle;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof orderApprovalLimit !== 'undefined') {
            apiPayload['order_approval_limit'] = orderApprovalLimit;
        }
        if (typeof orderApprovalMode !== 'undefined') {
            apiPayload['order_approval_mode'] = orderApprovalMode;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof role !== 'undefined') {
            apiPayload['role'] = role;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     * „Personendaten löschen“ — a person's erasure request under Art. 17 GDPR. It skips the trash: the contact is deleted for good right away, in the trash or not, with its platform user, its addresses and its timeline. The same checks as a final delete apply, because an open order keeps its buyer until it is closed (Art. 17(3)(b)); documents already issued keep their own snapshot in the apps that hold them. Pseudonymising the person in the record history is not done by this call yet — `history_pseudonymised` says so.
     *
     * @param {string} params.id - The person to erase.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEraseResult>}
     */
    customersContactsErase(params: { id: string }): Promise<Models.ContactEraseResult>;
    /**
     * „Personendaten löschen“ — a person's erasure request under Art. 17 GDPR. It skips the trash: the contact is deleted for good right away, in the trash or not, with its platform user, its addresses and its timeline. The same checks as a final delete apply, because an open order keeps its buyer until it is closed (Art. 17(3)(b)); documents already issued keep their own snapshot in the apps that hold them. Pseudonymising the person in the record history is not done by this call yet — `history_pseudonymised` says so.
     *
     * @param {string} id - The person to erase.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEraseResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsErase(id: string): Promise<Models.ContactEraseResult>;
    customersContactsErase(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactEraseResult> {
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

        const apiPath = '/v1/customers/contacts/{id}/erase'.replace('{id}', id);
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
     * Brings a contact back from the trash and switches its login back on unless the record itself says no (blocked, or an undecided registration). Refused while its organization is in the trash: restoring the organization brings back the contacts that went with it. Needs the same right as the delete.
     *
     * @param {string} params.id - The contact to restore.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactRestoreResult>}
     */
    customersContactsRestore(params: { id: string }): Promise<Models.ContactRestoreResult>;
    /**
     * Brings a contact back from the trash and switches its login back on unless the record itself says no (blocked, or an undecided registration). Refused while its organization is in the trash: restoring the organization brings back the contacts that went with it. Needs the same right as the delete.
     *
     * @param {string} id - The contact to restore.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsRestore(id: string): Promise<Models.ContactRestoreResult>;
    customersContactsRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactRestoreResult> {
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

        const apiPath = '/v1/customers/contacts/{id}/restore'.replace('{id}', id);
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
     * Same row as the contact route, reached from the organization. 'contact_id' is required and must belong to THIS organization — the picker offering the contacts is not filtered, so the membership check here is what stops a call with one company being filed under someone else's person.
     *
     * @param {string} params.organizationId - The company the entry is filed under. The `contact_id` in the body has to belong to it.
     * @param {string} params.contactId - The person dealt with. Must be a contact of this organization.
     * @param {string} params.subject - One line a person can scan in a timeline. Required — an entry nobody can read at a glance is not worth the row.
     * @param {string} params.actor - Who logged it (operator id or email). Free text; this app does not resolve it.
     * @param {ContactActivityKind} params.kind - What happened. 'system' is deliberately NOT accepted — those rows are the registration decision trail and are written by the approve/reject routes. Default 'note'.
     * @param {string} params.note - The long form. Stored inside the event payload as `note`, not as a column of its own.
     * @param {string} params.occurredAt - When it actually happened. Defaults to now — a call logged on Monday about Friday should say Friday.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     */
    customersOrganizationsEventsCreate(params: { organizationId: string, contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string }): Promise<Models.ContactEvent>;
    /**
     * Same row as the contact route, reached from the organization. 'contact_id' is required and must belong to THIS organization — the picker offering the contacts is not filtered, so the membership check here is what stops a call with one company being filed under someone else's person.
     *
     * @param {string} organizationId - The company the entry is filed under. The `contact_id` in the body has to belong to it.
     * @param {string} contactId - The person dealt with. Must be a contact of this organization.
     * @param {string} subject - One line a person can scan in a timeline. Required — an entry nobody can read at a glance is not worth the row.
     * @param {string} actor - Who logged it (operator id or email). Free text; this app does not resolve it.
     * @param {ContactActivityKind} kind - What happened. 'system' is deliberately NOT accepted — those rows are the registration decision trail and are written by the approve/reject routes. Default 'note'.
     * @param {string} note - The long form. Stored inside the event payload as `note`, not as a column of its own.
     * @param {string} occurredAt - When it actually happened. Defaults to now — a call logged on Monday about Friday should say Friday.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersOrganizationsEventsCreate(organizationId: string, contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string): Promise<Models.ContactEvent>;
    customersOrganizationsEventsCreate(
        paramsOrFirst: { organizationId: string, contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (ContactActivityKind)?, (string)?, (string)?]    
    ): Promise<Models.ContactEvent> {
        let params: { organizationId: string, contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { organizationId: string, contactId: string, subject: string, actor?: string, kind?: ContactActivityKind, note?: string, occurredAt?: string };
        } else {
            params = {
                organizationId: paramsOrFirst as string,
                contactId: rest[0] as string,
                subject: rest[1] as string,
                actor: rest[2] as string,
                kind: rest[3] as ContactActivityKind,
                note: rest[4] as string,
                occurredAt: rest[5] as string            
            };
        }
        
        const organizationId = params.organizationId;
        const contactId = params.contactId;
        const subject = params.subject;
        const actor = params.actor;
        const kind = params.kind;
        const note = params.note;
        const occurredAt = params.occurredAt;

        if (typeof organizationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "organizationId"');
        }
        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof subject === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subject"');
        }

        const apiPath = '/v1/customers/organizations/{organization_id}/events'.replace('{organization_id}', organizationId);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof occurredAt !== 'undefined') {
            apiPayload['occurred_at'] = occurredAt;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
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
