import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { FormStatus } from '../enums/form-status';
import { FormSubmissionStatus } from '../enums/form-submission-status';
import { FormsSubmissionsPruneStatus } from '../enums/forms-submissions-prune-status';
import { FormsVocabulariesGetName } from '../enums/forms-vocabularies-get-name';

export class Forms {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The catalogue of forms this tenant has authored, a page at a time. A row is the whole form — `definition`, `settings`, `status`, `slug` — so a list read is not a summary view that has to be followed by a read per row.
     * 
     * Every column of a form except the three jsonb ones is an exact-match filter, and they combine: `?slug=contact&status=live&limit=1` is how the storefront resolves the form for a page, and it is why a page never needs the form's id. The jsonb columns are the deliberate exception — a comparison against `definition`, `settings` or `metadata` can only be equality against the WHOLE document, which matches only for a caller who already holds it, so there is no searching inside a form's fields from here. (Sending one anyway is not a silent failure: `?definition={}` is honoured as that whole-document equality, and `?definition=x` is refused with 400 `invalid_value` naming the parameter.) A query key that is not a filterable column is dropped rather than refused, and the `filter` echo in the answer is what tells you which of the two happened: an empty echo beside a query string that carried a filter means the filter was misspelled.
     * 
     * Paging is `limit`/`offset` with a single-column `order`. The default page is 50 and 200 is the ceiling — a larger `limit` is clamped rather than refused, and `page.limit` reports what was applied — while `page.total` is the figure to show a merchant and `page.hasMore` answers whether another page follows instead of leaving it to be inferred from a short one. `order=created_at.desc` is the newest-first reading an editor wants.
     *
     * @param {string} params.id - Filter to one form by id, which answers a one-row page rather than the row — `GET /v1/forms/{id}` is the addressed form of the same read. It exists because it composes: `?id=…&status=live` answers "is this form live?" in one call. A value that is not a uuid is refused with 400 `invalid_value`.
     * @param {string} params.name - Filter to one form by its exact name. Whole-value equality and case-sensitive — there is no substring search on this API.
     * @param {string} params.slug - Filter to one form by its slug — unique per tenant, so this is how a storefront resolves a form without knowing its id. `?slug=contact&status=live&limit=1` is the call the cover BFF makes for every rendered form.
     * @param {FormStatus} params.status - Filter to one lifecycle status. `?status=live` is the set the storefront may render; `?status=draft` is what is still being built.
     * @param {string} params.createdAt - Filter to forms created at EXACTLY this instant. Equality, not a range: a date alone matches only a row whose timestamp is exactly that, so it selects nothing for a whole day. To read by time, sort instead (`order=created_at.desc`) and page. A value the data plane cannot read as a timestamp is refused with 400 `invalid_value`.
     * @param {string} params.updatedAt - Filter to forms last written at EXACTLY this instant — the same equality-not-range caveat as `created_at`.
     * @param {number} params.limit - Page size. Default 50; a value above 200 is clamped to 200 rather than refused, and `page.limit` says what was applied.
     * @param {number} params.offset - How many matching rows to skip. Page N is `offset = (N - 1) * limit`; `page.hasMore` says whether there is a next one.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsList(params?: { id?: string, name?: string, slug?: string, status?: FormStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * The catalogue of forms this tenant has authored, a page at a time. A row is the whole form — `definition`, `settings`, `status`, `slug` — so a list read is not a summary view that has to be followed by a read per row.
     * 
     * Every column of a form except the three jsonb ones is an exact-match filter, and they combine: `?slug=contact&status=live&limit=1` is how the storefront resolves the form for a page, and it is why a page never needs the form's id. The jsonb columns are the deliberate exception — a comparison against `definition`, `settings` or `metadata` can only be equality against the WHOLE document, which matches only for a caller who already holds it, so there is no searching inside a form's fields from here. (Sending one anyway is not a silent failure: `?definition={}` is honoured as that whole-document equality, and `?definition=x` is refused with 400 `invalid_value` naming the parameter.) A query key that is not a filterable column is dropped rather than refused, and the `filter` echo in the answer is what tells you which of the two happened: an empty echo beside a query string that carried a filter means the filter was misspelled.
     * 
     * Paging is `limit`/`offset` with a single-column `order`. The default page is 50 and 200 is the ceiling — a larger `limit` is clamped rather than refused, and `page.limit` reports what was applied — while `page.total` is the figure to show a merchant and `page.hasMore` answers whether another page follows instead of leaving it to be inferred from a short one. `order=created_at.desc` is the newest-first reading an editor wants.
     *
     * @param {string} id - Filter to one form by id, which answers a one-row page rather than the row — `GET /v1/forms/{id}` is the addressed form of the same read. It exists because it composes: `?id=…&status=live` answers "is this form live?" in one call. A value that is not a uuid is refused with 400 `invalid_value`.
     * @param {string} name - Filter to one form by its exact name. Whole-value equality and case-sensitive — there is no substring search on this API.
     * @param {string} slug - Filter to one form by its slug — unique per tenant, so this is how a storefront resolves a form without knowing its id. `?slug=contact&status=live&limit=1` is the call the cover BFF makes for every rendered form.
     * @param {FormStatus} status - Filter to one lifecycle status. `?status=live` is the set the storefront may render; `?status=draft` is what is still being built.
     * @param {string} createdAt - Filter to forms created at EXACTLY this instant. Equality, not a range: a date alone matches only a row whose timestamp is exactly that, so it selects nothing for a whole day. To read by time, sort instead (`order=created_at.desc`) and page. A value the data plane cannot read as a timestamp is refused with 400 `invalid_value`.
     * @param {string} updatedAt - Filter to forms last written at EXACTLY this instant — the same equality-not-range caveat as `created_at`.
     * @param {number} limit - Page size. Default 50; a value above 200 is clamped to 200 rather than refused, and `page.limit` says what was applied.
     * @param {number} offset - How many matching rows to skip. Page N is `offset = (N - 1) * limit`; `page.hasMore` says whether there is a next one.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsList(id?: string, name?: string, slug?: string, status?: FormStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    formsList(
        paramsOrFirst?: { id?: string, name?: string, slug?: string, status?: FormStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (FormStatus)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id?: string, name?: string, slug?: string, status?: FormStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, name?: string, slug?: string, status?: FormStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                slug: rest[1] as string,
                status: rest[2] as FormStatus,
                createdAt: rest[3] as string,
                updatedAt: rest[4] as string,
                limit: rest[5] as number,
                offset: rest[6] as number,
                order: rest[7] as string            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const slug = params.slug;
        const status = params.status;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/forms';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     * A form is born a `draft` and stays off the storefront until somebody moves it to `live`, so creating one is safe: the cover BFF resolves live forms only, and nothing renders until the status says it may. `definition` may be omitted entirely — the row is then the empty shell the Form Builder fills in.
     * 
     * `slug` is the one field that is not free. It is unique per tenant and it is what a storefront resolves a form by, so a create that reuses one is a 409 rather than a second form answering to the same page — and the collision is often with a form the caller has never opened. `name` is operator-facing only and may be anything.
     * 
     * An unbounded definition is a storefront page nobody can load, so the tenant sets a ceiling on how many named inputs one form may declare. Only nodes carrying a non-empty `name` count against it: a form with twenty paragraphs of legal text and three inputs is a three-field form. A definition over the ceiling is a 422 and not a 400 — the payload is well formed and would have been accepted under a higher limit — and the body names both the count and the limit.
     *
     * @param {string} params.name - What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
     * @param {string} params.slug - URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens. Taken already? That is the 409 — one slug answers for one form.
     * @param {object[]} params.definition - The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.

On the way IN a node is any object: this is unconstrained jsonb, FormKit owns the grammar, and the one rule this app applies is the tenant's `max_form_fields` ceiling counted over the nodes with a non-empty `name`. Anything that is not an array at all is a 400.
     * @param {object} params.metadata - Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
     * @param {object} params.settings - Submit label, success message, per-form notify email, post-submit actions, translations — see the `FormSettings` schema for every key that is read. Unconstrained jsonb on the way in: nothing here is required and no key is refused.
     * @param {FormStatus} params.status - Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsCreate(params: { name: string, slug: string, definition?: object[], metadata?: object, settings?: object, status?: FormStatus }): Promise<Models.Error>;
    /**
     * A form is born a `draft` and stays off the storefront until somebody moves it to `live`, so creating one is safe: the cover BFF resolves live forms only, and nothing renders until the status says it may. `definition` may be omitted entirely — the row is then the empty shell the Form Builder fills in.
     * 
     * `slug` is the one field that is not free. It is unique per tenant and it is what a storefront resolves a form by, so a create that reuses one is a 409 rather than a second form answering to the same page — and the collision is often with a form the caller has never opened. `name` is operator-facing only and may be anything.
     * 
     * An unbounded definition is a storefront page nobody can load, so the tenant sets a ceiling on how many named inputs one form may declare. Only nodes carrying a non-empty `name` count against it: a form with twenty paragraphs of legal text and three inputs is a three-field form. A definition over the ceiling is a 422 and not a 400 — the payload is well formed and would have been accepted under a higher limit — and the body names both the count and the limit.
     *
     * @param {string} name - What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
     * @param {string} slug - URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens. Taken already? That is the 409 — one slug answers for one form.
     * @param {object[]} definition - The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.

On the way IN a node is any object: this is unconstrained jsonb, FormKit owns the grammar, and the one rule this app applies is the tenant's `max_form_fields` ceiling counted over the nodes with a non-empty `name`. Anything that is not an array at all is a 400.
     * @param {object} metadata - Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
     * @param {object} settings - Submit label, success message, per-form notify email, post-submit actions, translations — see the `FormSettings` schema for every key that is read. Unconstrained jsonb on the way in: nothing here is required and no key is refused.
     * @param {FormStatus} status - Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsCreate(name: string, slug: string, definition?: object[], metadata?: object, settings?: object, status?: FormStatus): Promise<Models.Error>;
    formsCreate(
        paramsOrFirst: { name: string, slug: string, definition?: object[], metadata?: object, settings?: object, status?: FormStatus } | string,
        ...rest: [(string)?, (object[])?, (object)?, (object)?, (FormStatus)?]    
    ): Promise<Models.Error> {
        let params: { name: string, slug: string, definition?: object[], metadata?: object, settings?: object, status?: FormStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, slug: string, definition?: object[], metadata?: object, settings?: object, status?: FormStatus };
        } else {
            params = {
                name: paramsOrFirst as string,
                slug: rest[0] as string,
                definition: rest[1] as object[],
                metadata: rest[2] as object,
                settings: rest[3] as object,
                status: rest[4] as FormStatus            
            };
        }
        
        const name = params.name;
        const slug = params.slug;
        const definition = params.definition;
        const metadata = params.metadata;
        const settings = params.settings;
        const status = params.status;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof slug === 'undefined') {
            throw new RevenexxException('Missing required parameter: "slug"');
        }

        const apiPath = '/v1/forms';
        const apiPayload: Payload = {};
        if (typeof definition !== 'undefined') {
            apiPayload['definition'] = definition;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof settings !== 'undefined') {
            apiPayload['settings'] = settings;
        }
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
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
     * Every tenant starts with one sample form so the Form Builder is never empty and there is a live render and submit target from the first minute — the `contact` slug the read examples throughout this document resolve against.
     * 
     * Normally nobody calls it. The same seeding runs on `app.installed`, so a tenant that has had the app for more than a moment already has the sample; this route is the manual re-run, for a tenant installed before the sample existed or one that removed it and wants it back.
     * 
     * It is idempotent, and keyed on the SLUG rather than on content: a slug that is already taken is left exactly as it stands, so a sample form the merchant has since rewritten is never overwritten and a second call creates nothing at all. The answer says which of the two happened, slug by slug — `created` names what this call wrote, `existing` what was already there — and on a settled tenant `created` is empty.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.FormDefaultsResult>}
     */
    formsDefaults(): Promise<Models.FormDefaultsResult> {

        const apiPath = '/v1/forms/defaults';
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
     * The inbox: every submission this tenant has received, a page at a time. A row is the whole submission, `data` included, so the list is the inbox and the detail view at once — nothing has to be fetched per row to show what somebody wrote. Treat all of it as END-USER data.
     * 
     * Every column except the two jsonb ones is an exact-match filter and they combine, so `?form_slug=contact&status=new&order=created_at.desc` is the unread inbox of one form, newest first. Two of those filters ask the same question differently: `form_id` is the reliable one and survives a rename of the form, while `form_slug` is the denormalised copy and needs neither a join nor a prior lookup. What was SUBMITTED is not searchable here — `data` is jsonb, and the only comparison available on it is equality against the whole document, which matches only for a caller who already holds the entire submission (`?data=x`, not being a JSON document at all, is refused with 400 `invalid_value`) — so an inbox search belongs on top of the rows this returns.
     * 
     * Paging is `limit`/`offset` with a single-column `order`: the default page is 50, 200 is the ceiling, and a larger `limit` is clamped rather than refused. `page.total` is the count to put in front of a merchant while `page.returned` is only what fitted on this page, and `page.hasMore` says whether to ask for another.
     *
     * @param {string} params.id - Filter to one submission by id, as a one-row page. `GET /v1/forms/submissions/{id}` is the addressed form of the same read. A value that is not a uuid is refused with 400 `invalid_value`.
     * @param {string} params.formId - Filter to one form's inbox, by id — the reliable one, because it survives a rename of the slug.
     * @param {string} params.formSlug - Filter to one form's inbox by slug — the denormalised copy, so neither a join nor a prior lookup of the form is needed.
     * @param {string} params.source - Filter to one origin, exactly as it was recorded — normally the page path the storefront sent. Whole-value equality, so it selects one page and not a prefix.
     * @param {FormSubmissionStatus} params.status - Filter to one inbox status. `?status=new` is the unread inbox; `?status=spam` is what the honeypot caught.
     * @param {string} params.createdAt - Filter to submissions that arrived at EXACTLY this instant. Equality, not a range, so this is not how a date span is read — sort (`order=created_at.desc`) and page for that, and use POST /forms/submissions/prune for anything age-based.
     * @param {string} params.updatedAt - Filter to submissions last written at EXACTLY this instant — the same equality-not-range caveat as `created_at`.
     * @param {number} params.limit - Page size. Default 50; a value above 200 is clamped to 200 rather than refused, and `page.limit` says what was applied.
     * @param {number} params.offset - How many matching rows to skip. Page N is `offset = (N - 1) * limit`; `page.hasMore` says whether there is a next one.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsSubmissionsList(params?: { id?: string, formId?: string, formSlug?: string, source?: string, status?: FormSubmissionStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * The inbox: every submission this tenant has received, a page at a time. A row is the whole submission, `data` included, so the list is the inbox and the detail view at once — nothing has to be fetched per row to show what somebody wrote. Treat all of it as END-USER data.
     * 
     * Every column except the two jsonb ones is an exact-match filter and they combine, so `?form_slug=contact&status=new&order=created_at.desc` is the unread inbox of one form, newest first. Two of those filters ask the same question differently: `form_id` is the reliable one and survives a rename of the form, while `form_slug` is the denormalised copy and needs neither a join nor a prior lookup. What was SUBMITTED is not searchable here — `data` is jsonb, and the only comparison available on it is equality against the whole document, which matches only for a caller who already holds the entire submission (`?data=x`, not being a JSON document at all, is refused with 400 `invalid_value`) — so an inbox search belongs on top of the rows this returns.
     * 
     * Paging is `limit`/`offset` with a single-column `order`: the default page is 50, 200 is the ceiling, and a larger `limit` is clamped rather than refused. `page.total` is the count to put in front of a merchant while `page.returned` is only what fitted on this page, and `page.hasMore` says whether to ask for another.
     *
     * @param {string} id - Filter to one submission by id, as a one-row page. `GET /v1/forms/submissions/{id}` is the addressed form of the same read. A value that is not a uuid is refused with 400 `invalid_value`.
     * @param {string} formId - Filter to one form's inbox, by id — the reliable one, because it survives a rename of the slug.
     * @param {string} formSlug - Filter to one form's inbox by slug — the denormalised copy, so neither a join nor a prior lookup of the form is needed.
     * @param {string} source - Filter to one origin, exactly as it was recorded — normally the page path the storefront sent. Whole-value equality, so it selects one page and not a prefix.
     * @param {FormSubmissionStatus} status - Filter to one inbox status. `?status=new` is the unread inbox; `?status=spam` is what the honeypot caught.
     * @param {string} createdAt - Filter to submissions that arrived at EXACTLY this instant. Equality, not a range, so this is not how a date span is read — sort (`order=created_at.desc`) and page for that, and use POST /forms/submissions/prune for anything age-based.
     * @param {string} updatedAt - Filter to submissions last written at EXACTLY this instant — the same equality-not-range caveat as `created_at`.
     * @param {number} limit - Page size. Default 50; a value above 200 is clamped to 200 rather than refused, and `page.limit` says what was applied.
     * @param {number} offset - How many matching rows to skip. Page N is `offset = (N - 1) * limit`; `page.hasMore` says whether there is a next one.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsSubmissionsList(id?: string, formId?: string, formSlug?: string, source?: string, status?: FormSubmissionStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    formsSubmissionsList(
        paramsOrFirst?: { id?: string, formId?: string, formSlug?: string, source?: string, status?: FormSubmissionStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (FormSubmissionStatus)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id?: string, formId?: string, formSlug?: string, source?: string, status?: FormSubmissionStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, formId?: string, formSlug?: string, source?: string, status?: FormSubmissionStatus, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                formId: rest[0] as string,
                formSlug: rest[1] as string,
                source: rest[2] as string,
                status: rest[3] as FormSubmissionStatus,
                createdAt: rest[4] as string,
                updatedAt: rest[5] as string,
                limit: rest[6] as number,
                offset: rest[7] as number,
                order: rest[8] as string            
            };
        }
        
        const id = params.id;
        const formId = params.formId;
        const formSlug = params.formSlug;
        const source = params.source;
        const status = params.status;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/forms/submissions';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof formId !== 'undefined') {
            apiPayload['form_id'] = formId;
        }
        if (typeof formSlug !== 'undefined') {
            apiPayload['form_slug'] = formSlug;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     * The storefront's path, and the moment a lead enters the platform. A stored submission emits `form.submitted` onto the tenant event bus with the row itself as the payload — that is the event an Integration Studio workflow or a notification email listens to, and it is the only event this app raises about a submission. A call that is refused therefore leaves no trace anywhere: no row, and no automation that ever hears about it.
     * 
     * It is also the only moment anything is known about a submission, so the tenant's policy is applied here. If honeypot_field names a decoy and the submission filled it in, the field is stripped — it is a trap, not an answer the visitor gave, so it never reaches `data` — and spam_handling (flag | reject) decides between storing the row as 'spam' and refusing outright with 422.
     * 
     * The notification recipient is resolved once, here: the form's own notify_email, else the tenant's, stamped into metadata.notify_email with metadata.notify_source naming which of the two won. It is resolved at insert rather than at delivery because the row IS the event payload — a workflow reads the address off the event instead of re-resolving a form's settings that may since have changed.
     *
     * @param {object} params.data - What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
     * @param {string} params.formId - The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read. Required on a create: it is the only thing that says which form was filled in.
     * @param {string} params.formSlug - The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in. So: OPTIONAL — send it and it is stored as sent, even if it disagrees with the form; omit it and the form's own slug is filled in from `form_id`.
     * @param {object} params.metadata - Free-form metadata, yours to key as an integration needs. The resolved notification recipient is merged OVER it at insert, so `notify_email` and `notify_source` sent here are overwritten — see the `FormSubmissionMetadata` schema.
     * @param {string} params.source - Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
     * @param {FormSubmissionStatus} params.status - Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'. A create may set it — an inbox importer records a submission that is already read — but nothing needs to: omit it and the row is 'new'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsSubmissionsCreate(params: { data: object, formId: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus }): Promise<Models.Error>;
    /**
     * The storefront's path, and the moment a lead enters the platform. A stored submission emits `form.submitted` onto the tenant event bus with the row itself as the payload — that is the event an Integration Studio workflow or a notification email listens to, and it is the only event this app raises about a submission. A call that is refused therefore leaves no trace anywhere: no row, and no automation that ever hears about it.
     * 
     * It is also the only moment anything is known about a submission, so the tenant's policy is applied here. If honeypot_field names a decoy and the submission filled it in, the field is stripped — it is a trap, not an answer the visitor gave, so it never reaches `data` — and spam_handling (flag | reject) decides between storing the row as 'spam' and refusing outright with 422.
     * 
     * The notification recipient is resolved once, here: the form's own notify_email, else the tenant's, stamped into metadata.notify_email with metadata.notify_source naming which of the two won. It is resolved at insert rather than at delivery because the row IS the event payload — a workflow reads the address off the event instead of re-resolving a form's settings that may since have changed.
     *
     * @param {object} data - What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
     * @param {string} formId - The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read. Required on a create: it is the only thing that says which form was filled in.
     * @param {string} formSlug - The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in. So: OPTIONAL — send it and it is stored as sent, even if it disagrees with the form; omit it and the form's own slug is filled in from `form_id`.
     * @param {object} metadata - Free-form metadata, yours to key as an integration needs. The resolved notification recipient is merged OVER it at insert, so `notify_email` and `notify_source` sent here are overwritten — see the `FormSubmissionMetadata` schema.
     * @param {string} source - Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
     * @param {FormSubmissionStatus} status - Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'. A create may set it — an inbox importer records a submission that is already read — but nothing needs to: omit it and the row is 'new'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsSubmissionsCreate(data: object, formId: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus): Promise<Models.Error>;
    formsSubmissionsCreate(
        paramsOrFirst: { data: object, formId: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus } | object,
        ...rest: [(string)?, (string)?, (object)?, (string)?, (FormSubmissionStatus)?]    
    ): Promise<Models.Error> {
        let params: { data: object, formId: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('data' in paramsOrFirst || 'formId' in paramsOrFirst || 'formSlug' in paramsOrFirst || 'metadata' in paramsOrFirst || 'source' in paramsOrFirst || 'status' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { data: object, formId: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus };
        } else {
            params = {
                data: paramsOrFirst as object,
                formId: rest[0] as string,
                formSlug: rest[1] as string,
                metadata: rest[2] as object,
                source: rest[3] as string,
                status: rest[4] as FormSubmissionStatus            
            };
        }
        
        const data = params.data;
        const formId = params.formId;
        const formSlug = params.formSlug;
        const metadata = params.metadata;
        const source = params.source;
        const status = params.status;

        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }
        if (typeof formId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "formId"');
        }

        const apiPath = '/v1/forms/submissions';
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof formId !== 'undefined') {
            apiPayload['form_id'] = formId;
        }
        if (typeof formSlug !== 'undefined') {
            apiPayload['form_slug'] = formSlug;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
     * The retention sweep. It deletes submissions the tenant has stopped promising to keep — everything older than `submission_retention_days` — and it is the one route in this app that reads that promise at all.
     * 
     * Nothing runs on a timer — an app that quietly deletes a merchant's leads on a schedule nobody watched is the failure mode worth avoiding. This is the only thing that acts on submission_retention_days, it previews unless dry_run is explicitly false, and it deletes at most 500 rows per call (`remaining` says whether to call again).
     * 
     * The sweep is TENANT-WIDE and cannot be narrowed to a market. A submission carries no market: there is no such column, and the platform's scope register is written by a best-effort trigger that only fires when the writer sent `X-Revenexx-Market` — which the storefront omits whenever the visitor has selected no market, and the Cockpit never sends. So an unassigned row means "nobody recorded it" at least as often as it means "global", and attributing it either way would risk deleting one market's leads on another market's schedule.
     * 
     * `submission_retention_days` is per market, because a retention period is a legal answer and the law is territorial. The floor this sweep applies is therefore the STRICTEST one in the tenant — the longest value configured anywhere, baseline or market — and not the one the calling market sees. `retention_days` reports it and `retention_market` names whose it was. The consequence worth knowing: one market cannot prune on a shorter schedule than another market promised, because the one sweep would take both markets' rows.
     * 
     * The floor is established, never assumed. If the tenant's markets cannot be listed, or a settings read falls back to its declared defaults (which for retention is 0 — no floor at all), the answer is 503 and nothing is deleted.
     *
     * @param {boolean} params.dryRun - Default TRUE. Nothing is deleted until this is explicitly false.
     * @param {string} params.formSlug - Narrow the sweep to one form.
     * @param {number} params.olderThanDays - Age threshold. Omit to use the retention floor. A value BELOW the floor is raised to it — the setting is the floor, not a default, and the floor is the LONGEST submission_retention_days configured anywhere in the tenant (see the operation description).
     * @param {FormsSubmissionsPruneStatus} params.status - Narrow the sweep to one inbox status, e.g. 'spam'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsSubmissionsPrune(params?: { dryRun?: boolean, formSlug?: string, olderThanDays?: number, status?: FormsSubmissionsPruneStatus }): Promise<Models.Error>;
    /**
     * The retention sweep. It deletes submissions the tenant has stopped promising to keep — everything older than `submission_retention_days` — and it is the one route in this app that reads that promise at all.
     * 
     * Nothing runs on a timer — an app that quietly deletes a merchant's leads on a schedule nobody watched is the failure mode worth avoiding. This is the only thing that acts on submission_retention_days, it previews unless dry_run is explicitly false, and it deletes at most 500 rows per call (`remaining` says whether to call again).
     * 
     * The sweep is TENANT-WIDE and cannot be narrowed to a market. A submission carries no market: there is no such column, and the platform's scope register is written by a best-effort trigger that only fires when the writer sent `X-Revenexx-Market` — which the storefront omits whenever the visitor has selected no market, and the Cockpit never sends. So an unassigned row means "nobody recorded it" at least as often as it means "global", and attributing it either way would risk deleting one market's leads on another market's schedule.
     * 
     * `submission_retention_days` is per market, because a retention period is a legal answer and the law is territorial. The floor this sweep applies is therefore the STRICTEST one in the tenant — the longest value configured anywhere, baseline or market — and not the one the calling market sees. `retention_days` reports it and `retention_market` names whose it was. The consequence worth knowing: one market cannot prune on a shorter schedule than another market promised, because the one sweep would take both markets' rows.
     * 
     * The floor is established, never assumed. If the tenant's markets cannot be listed, or a settings read falls back to its declared defaults (which for retention is 0 — no floor at all), the answer is 503 and nothing is deleted.
     *
     * @param {boolean} dryRun - Default TRUE. Nothing is deleted until this is explicitly false.
     * @param {string} formSlug - Narrow the sweep to one form.
     * @param {number} olderThanDays - Age threshold. Omit to use the retention floor. A value BELOW the floor is raised to it — the setting is the floor, not a default, and the floor is the LONGEST submission_retention_days configured anywhere in the tenant (see the operation description).
     * @param {FormsSubmissionsPruneStatus} status - Narrow the sweep to one inbox status, e.g. 'spam'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsSubmissionsPrune(dryRun?: boolean, formSlug?: string, olderThanDays?: number, status?: FormsSubmissionsPruneStatus): Promise<Models.Error>;
    formsSubmissionsPrune(
        paramsOrFirst?: { dryRun?: boolean, formSlug?: string, olderThanDays?: number, status?: FormsSubmissionsPruneStatus } | boolean,
        ...rest: [(string)?, (number)?, (FormsSubmissionsPruneStatus)?]    
    ): Promise<Models.Error> {
        let params: { dryRun?: boolean, formSlug?: string, olderThanDays?: number, status?: FormsSubmissionsPruneStatus };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { dryRun?: boolean, formSlug?: string, olderThanDays?: number, status?: FormsSubmissionsPruneStatus };
        } else {
            params = {
                dryRun: paramsOrFirst as boolean,
                formSlug: rest[0] as string,
                olderThanDays: rest[1] as number,
                status: rest[2] as FormsSubmissionsPruneStatus            
            };
        }
        
        const dryRun = params.dryRun;
        const formSlug = params.formSlug;
        const olderThanDays = params.olderThanDays;
        const status = params.status;


        const apiPath = '/v1/forms/submissions/prune';
        const apiPayload: Payload = {};
        if (typeof dryRun !== 'undefined') {
            apiPayload['dry_run'] = dryRun;
        }
        if (typeof formSlug !== 'undefined') {
            apiPayload['form_slug'] = formSlug;
        }
        if (typeof olderThanDays !== 'undefined') {
            apiPayload['older_than_days'] = olderThanDays;
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
     * Removes one submission permanently. There is no soft delete anywhere in this app — no `deleted_at`, no trash, no undo — so the row and the end-user data in it are gone when this answers.
     * 
     * Nothing is emitted when they go. This app publishes `form.submitted` on insert and has no delete event, so an automation that already acted on the submission is never told it was withdrawn; if that matters, the withdrawal has to be carried by whatever raised it.
     * 
     * Nothing else is touched: the form keeps its `definition` and its other submissions. Reach for this for the one-off — an erasure request, a test row, a duplicate. For the many, use `POST /v1/forms/submissions/prune`, which previews before it acts and cannot go below the tenant's `submission_retention_days`; that floor does NOT apply here, so this route deletes a submission the retention policy would still be keeping. And if the point is to get a lead out of the inbox rather than out of the database, PUT its `status` to `archived` instead.
     *
     * @param {string} params.id - The submission, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsSubmissionsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * Removes one submission permanently. There is no soft delete anywhere in this app — no `deleted_at`, no trash, no undo — so the row and the end-user data in it are gone when this answers.
     * 
     * Nothing is emitted when they go. This app publishes `form.submitted` on insert and has no delete event, so an automation that already acted on the submission is never told it was withdrawn; if that matters, the withdrawal has to be carried by whatever raised it.
     * 
     * Nothing else is touched: the form keeps its `definition` and its other submissions. Reach for this for the one-off — an erasure request, a test row, a duplicate. For the many, use `POST /v1/forms/submissions/prune`, which previews before it acts and cannot go below the tenant's `submission_retention_days`; that floor does NOT apply here, so this route deletes a submission the retention policy would still be keeping. And if the point is to get a lead out of the inbox rather than out of the database, PUT its `status` to `archived` instead.
     *
     * @param {string} id - The submission, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsSubmissionsDelete(id: string): Promise<Models.Error>;
    formsSubmissionsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/forms/submissions/{id}'.replace('{id}', id);
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
     * One received submission, whole — the detail view behind a row of `GET /v1/forms/submissions`.
     * 
     * `data` is the substance: what the visitor actually typed, keyed by the `name` of each node in the form's `definition`. Around it are `source` (the page that carried the form), the inbox `status`, and the `metadata` this app stamped at insert — `notify_email` and `notify_source`, the recipient the `form.submitted` event carried, so a workflow and a human reading the inbox see the same answer.
     * 
     * Treat what comes back as END-USER data: a name, an address, an enquiry, whatever the operator asked for. This is also the call the retention preview points at — `POST /v1/forms/submissions/prune` deliberately samples only id, form and date, so this route is where you look to see what a sweep would actually take.
     * 
     * What you read here is what was sent: under the shipped `submission_edit` policy a PUT may move `status` and `metadata` and nothing else, so the submitted values, the form and the arrival time are the record rather than a draft.
     *
     * @param {string} params.id - The submission, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsSubmissionsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * One received submission, whole — the detail view behind a row of `GET /v1/forms/submissions`.
     * 
     * `data` is the substance: what the visitor actually typed, keyed by the `name` of each node in the form's `definition`. Around it are `source` (the page that carried the form), the inbox `status`, and the `metadata` this app stamped at insert — `notify_email` and `notify_source`, the recipient the `form.submitted` event carried, so a workflow and a human reading the inbox see the same answer.
     * 
     * Treat what comes back as END-USER data: a name, an address, an enquiry, whatever the operator asked for. This is also the call the retention preview points at — `POST /v1/forms/submissions/prune` deliberately samples only id, form and date, so this route is where you look to see what a sweep would actually take.
     * 
     * What you read here is what was sent: under the shipped `submission_edit` policy a PUT may move `status` and `metadata` and nothing else, so the submitted values, the form and the arrival time are the record rather than a draft.
     *
     * @param {string} id - The submission, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsSubmissionsGet(id: string): Promise<Models.Error>;
    formsSubmissionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/forms/submissions/{id}'.replace('{id}', id);
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
     * Triage, not correction. What this route is FOR is moving the inbox `status` — 'new' to 'read' as somebody opens the lead, 'archived' once it is dealt with, 'spam' for what the honeypot did not catch — and stamping whatever an integration keeps in `metadata`.
     * 
     * A received submission is a record of what somebody sent, so under submission_edit = 'status_only' (the default) those two are the only columns that may move. A patch that would alter the submitted data, its form or its timestamp is refused with 403, and the message names the columns it refused. A patch that merely echoes the stored value back is not a change and passes, so a client that PUTs the whole row still works.
     * 
     * `updated_at` moves with the triage, which makes it evidence about the handling and never about the submitted values. And if the point is to get a lead out of the inbox rather than out of the database, this is the route for it: set `status` to `archived` here instead of reaching for the delete, which is permanent and has no undo.
     *
     * @param {string} params.id - The submission, by id.
     * @param {object} params.data - What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
     * @param {string} params.formId - The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read. Required on a create: it is the only thing that says which form was filled in.
     * @param {string} params.formSlug - The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in. So: OPTIONAL — send it and it is stored as sent, even if it disagrees with the form; omit it and the form's own slug is filled in from `form_id`.
     * @param {object} params.metadata - Free-form metadata, yours to key as an integration needs. The resolved notification recipient is merged OVER it at insert, so `notify_email` and `notify_source` sent here are overwritten — see the `FormSubmissionMetadata` schema.
     * @param {string} params.source - Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
     * @param {FormSubmissionStatus} params.status - Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'. A create may set it — an inbox importer records a submission that is already read — but nothing needs to: omit it and the row is 'new'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsSubmissionsUpdate(params: { id: string, data?: object, formId?: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus }): Promise<Models.Error>;
    /**
     * Triage, not correction. What this route is FOR is moving the inbox `status` — 'new' to 'read' as somebody opens the lead, 'archived' once it is dealt with, 'spam' for what the honeypot did not catch — and stamping whatever an integration keeps in `metadata`.
     * 
     * A received submission is a record of what somebody sent, so under submission_edit = 'status_only' (the default) those two are the only columns that may move. A patch that would alter the submitted data, its form or its timestamp is refused with 403, and the message names the columns it refused. A patch that merely echoes the stored value back is not a change and passes, so a client that PUTs the whole row still works.
     * 
     * `updated_at` moves with the triage, which makes it evidence about the handling and never about the submitted values. And if the point is to get a lead out of the inbox rather than out of the database, this is the route for it: set `status` to `archived` here instead of reaching for the delete, which is permanent and has no undo.
     *
     * @param {string} id - The submission, by id.
     * @param {object} data - What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
     * @param {string} formId - The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read. Required on a create: it is the only thing that says which form was filled in.
     * @param {string} formSlug - The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in. So: OPTIONAL — send it and it is stored as sent, even if it disagrees with the form; omit it and the form's own slug is filled in from `form_id`.
     * @param {object} metadata - Free-form metadata, yours to key as an integration needs. The resolved notification recipient is merged OVER it at insert, so `notify_email` and `notify_source` sent here are overwritten — see the `FormSubmissionMetadata` schema.
     * @param {string} source - Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
     * @param {FormSubmissionStatus} status - Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'. A create may set it — an inbox importer records a submission that is already read — but nothing needs to: omit it and the row is 'new'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsSubmissionsUpdate(id: string, data?: object, formId?: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus): Promise<Models.Error>;
    formsSubmissionsUpdate(
        paramsOrFirst: { id: string, data?: object, formId?: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus } | string,
        ...rest: [(object)?, (string)?, (string)?, (object)?, (string)?, (FormSubmissionStatus)?]    
    ): Promise<Models.Error> {
        let params: { id: string, data?: object, formId?: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data?: object, formId?: string, formSlug?: string, metadata?: object, source?: string, status?: FormSubmissionStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object,
                formId: rest[1] as string,
                formSlug: rest[2] as string,
                metadata: rest[3] as object,
                source: rest[4] as string,
                status: rest[5] as FormSubmissionStatus            
            };
        }
        
        const id = params.id;
        const data = params.data;
        const formId = params.formId;
        const formSlug = params.formSlug;
        const metadata = params.metadata;
        const source = params.source;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/forms/submissions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof formId !== 'undefined') {
            apiPayload['form_id'] = formId;
        }
        if (typeof formSlug !== 'undefined') {
            apiPayload['form_slug'] = formSlug;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
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
     * The enums this app publishes, so a client can discover them instead of holding a copy. Names: form-statuses, submission-statuses.
     * 
     * An entry carries the three things a menu needs — the `name` a URL is built from, the human `title`, and a `description` of what the set decides — and deliberately NOT the values. Enough to build a menu, not enough to fill a select: `GET /forms/vocabularies/{name}` is the call for that, and a client holding the qualified pair 'forms.<name>' builds that URL from the pair alone, which is what makes reading this index worth more than hard-coding two names.
     * 
     * Both `title` and `description` come back either as a plain string or as a locale map keyed by language tag; read the tag you want and fall back to `en`.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.FormsVocabularyIndex>}
     */
    formsVocabulariesList(): Promise<Models.FormsVocabularyIndex> {

        const apiPath = '/v1/forms/vocabularies';
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
     * One vocabulary WITH its values: every value the column permits, each carrying the `key` the database stores, the `title` and `description` a human reads, a semantic badge `tone`, and a `final` flag for the values that end the lifecycle. This is the call that fills a select or renders a status badge. Names: form-statuses, submission-statuses.
     * 
     * The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key and falling back to `default_tone` for its badge. That is the whole reason to come here rather than hard-code three statuses in a UI.
     * 
     * Values come back in constraint order, which is lifecycle order, and therefore the order a select should offer them in. `closed` says the set is exhaustive: there is no value outside it this API will accept. `title` and `description` are each either a plain string or a locale map keyed by language tag — read the tag you want and fall back to `en` — and a value nobody has translated is a bare string rather than an error.
     *
     * @param {FormsVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsVocabulariesGet(params: { name: FormsVocabulariesGetName }): Promise<Models.Error>;
    /**
     * One vocabulary WITH its values: every value the column permits, each carrying the `key` the database stores, the `title` and `description` a human reads, a semantic badge `tone`, and a `final` flag for the values that end the lifecycle. This is the call that fills a select or renders a status badge. Names: form-statuses, submission-statuses.
     * 
     * The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key and falling back to `default_tone` for its badge. That is the whole reason to come here rather than hard-code three statuses in a UI.
     * 
     * Values come back in constraint order, which is lifecycle order, and therefore the order a select should offer them in. `closed` says the set is exhaustive: there is no value outside it this API will accept. `title` and `description` are each either a plain string or a locale map keyed by language tag — read the tag you want and fall back to `en` — and a value nobody has translated is a bare string rather than an error.
     *
     * @param {FormsVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsVocabulariesGet(name: FormsVocabulariesGetName): Promise<Models.Error>;
    formsVocabulariesGet(
        paramsOrFirst: { name: FormsVocabulariesGetName } | FormsVocabulariesGetName    
    ): Promise<Models.Error> {
        let params: { name: FormsVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: FormsVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as FormsVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/forms/vocabularies/{name}'.replace('{name}', name);
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
     * Deleting a form deletes every submission it ever received.
     * 
     * `submissions.form_id` is ON DELETE CASCADE — the one foreign key on this app's tables — so the inbox goes with the form, in the database, permanently. Nothing is archived on the way out, no event is emitted for the submissions that vanish, and there is no soft delete in this app to recover them from. A submission is an end user's data, which is why this is the first sentence rather than a footnote.
     * 
     * That is what the tenant setting form_delete_policy (block | archive | cascade, default 'block') stands in front of: REFUSE with 409 and the count, ARCHIVE the form and keep everything, or CASCADE on purpose. A form with no submissions always deletes, under every policy.
     * 
     * That setting is the one in this app with ONE value for the whole tenant. The other six are per-market, because what they decide is market-local; this one is not, so `X-Revenexx-Market` does not change the answer this route gives. A market that could set 'cascade' for itself would be deleting leads that belong to markets which had said 'block'.
     * 
     * Both the 409 body and the 200 body carry `submissions`, the number of rows at stake. It counts the form's WHOLE inbox — every market, not the share belonging to the one a request names — because that is what the cascade takes. It is the only figure a merchant has to judge this by, so read it before allowing the cascade, and `GET /v1/forms/submissions?form_id=…` is how to see what they are first.
     * 
     * The policy is a guard on THIS route, not a database constraint: the cascade is what the database does on its own, and a client that removes the row by some other path gets it with nothing in front of it.
     *
     * @param {string} params.id - The form, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * Deleting a form deletes every submission it ever received.
     * 
     * `submissions.form_id` is ON DELETE CASCADE — the one foreign key on this app's tables — so the inbox goes with the form, in the database, permanently. Nothing is archived on the way out, no event is emitted for the submissions that vanish, and there is no soft delete in this app to recover them from. A submission is an end user's data, which is why this is the first sentence rather than a footnote.
     * 
     * That is what the tenant setting form_delete_policy (block | archive | cascade, default 'block') stands in front of: REFUSE with 409 and the count, ARCHIVE the form and keep everything, or CASCADE on purpose. A form with no submissions always deletes, under every policy.
     * 
     * That setting is the one in this app with ONE value for the whole tenant. The other six are per-market, because what they decide is market-local; this one is not, so `X-Revenexx-Market` does not change the answer this route gives. A market that could set 'cascade' for itself would be deleting leads that belong to markets which had said 'block'.
     * 
     * Both the 409 body and the 200 body carry `submissions`, the number of rows at stake. It counts the form's WHOLE inbox — every market, not the share belonging to the one a request names — because that is what the cascade takes. It is the only figure a merchant has to judge this by, so read it before allowing the cascade, and `GET /v1/forms/submissions?form_id=…` is how to see what they are first.
     * 
     * The policy is a guard on THIS route, not a database constraint: the cascade is what the database does on its own, and a client that removes the row by some other path gets it with nothing in front of it.
     *
     * @param {string} id - The form, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsDelete(id: string): Promise<Models.Error>;
    formsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/forms/{id}'.replace('{id}', id);
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
     * The whole form: `definition` — the flat FormKit node array the storefront renders verbatim — plus `settings`, `status` and `slug`.
     * 
     * This is the route for an id you are already holding: a submission's `form_id`, a row the Cockpit list handed you. A storefront resolving a PAGE does not come here, because it has a slug and not an id — `GET /v1/forms?slug=contact&status=live&limit=1` is the call that answers that, and the `status` filter is what keeps a half-built form off a live page. There is no filtering on this route at all: a `draft` form comes back exactly like a published one, so a caller that must not render a draft has to check `status` itself.
     * 
     * Nothing is folded in on the way out. The `definition` is returned in the language it was authored in — the per-form `i18n` overlay is applied by the storefront BFF, not by this API — and the submissions the form has collected are neither included nor counted here. The inbox for one form is `GET /v1/forms/submissions?form_id=…`, and it is worth asking for before a delete: see `DELETE /v1/forms/{id}`.
     *
     * @param {string} params.id - The form, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * The whole form: `definition` — the flat FormKit node array the storefront renders verbatim — plus `settings`, `status` and `slug`.
     * 
     * This is the route for an id you are already holding: a submission's `form_id`, a row the Cockpit list handed you. A storefront resolving a PAGE does not come here, because it has a slug and not an id — `GET /v1/forms?slug=contact&status=live&limit=1` is the call that answers that, and the `status` filter is what keeps a half-built form off a live page. There is no filtering on this route at all: a `draft` form comes back exactly like a published one, so a caller that must not render a draft has to check `status` itself.
     * 
     * Nothing is folded in on the way out. The `definition` is returned in the language it was authored in — the per-form `i18n` overlay is applied by the storefront BFF, not by this API — and the submissions the form has collected are neither included nor counted here. The inbox for one form is `GET /v1/forms/submissions?form_id=…`, and it is worth asking for before a delete: see `DELETE /v1/forms/{id}`.
     *
     * @param {string} id - The form, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsGet(id: string): Promise<Models.Error>;
    formsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/forms/{id}'.replace('{id}', id);
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
     * A partial update over everything a create may set — `definition`, `settings`, `status`, `name`, `slug`, `metadata` — where an omitted field keeps the value it has. It is the write behind the Form Builder's save, and equally behind the one-field change that publishes a form by moving `status` from `draft` to `live`. `updated_at` is stamped on every call, so it is the column an editor sorts by.
     * 
     * The same field ceiling applies as on the create, or a form would simply grow past it later: the tenant's `max_form_fields` is counted over the nodes of the NEW `definition` that carry a non-empty `name`, and a definition above it is refused with 422 rather than stored truncated.
     * 
     * Moving `slug` is the edit to think about twice. It is unique per tenant, so a rename onto a slug another form holds is a 409 — but it is the rename that SUCCEEDS that changes behaviour, because the slug is how a storefront page resolves this form: change it and the page naming the old one resolves nothing. The submissions already collected are unaffected either way; each keeps the slug it arrived under in its own `form_slug`, which is exactly what that copy is for.
     *
     * @param {string} params.id - The form, by id.
     * @param {object[]} params.definition - The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.

On the way IN a node is any object: this is unconstrained jsonb, FormKit owns the grammar, and the one rule this app applies is the tenant's `max_form_fields` ceiling counted over the nodes with a non-empty `name`. Anything that is not an array at all is a 400.
     * @param {object} params.metadata - Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
     * @param {string} params.name - What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
     * @param {object} params.settings - Submit label, success message, per-form notify email, post-submit actions, translations — see the `FormSettings` schema for every key that is read. Unconstrained jsonb on the way in: nothing here is required and no key is refused.
     * @param {string} params.slug - URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens. Taken already? That is the 409 — one slug answers for one form.
     * @param {FormStatus} params.status - Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    formsUpdate(params: { id: string, definition?: object[], metadata?: object, name?: string, settings?: object, slug?: string, status?: FormStatus }): Promise<Models.Error>;
    /**
     * A partial update over everything a create may set — `definition`, `settings`, `status`, `name`, `slug`, `metadata` — where an omitted field keeps the value it has. It is the write behind the Form Builder's save, and equally behind the one-field change that publishes a form by moving `status` from `draft` to `live`. `updated_at` is stamped on every call, so it is the column an editor sorts by.
     * 
     * The same field ceiling applies as on the create, or a form would simply grow past it later: the tenant's `max_form_fields` is counted over the nodes of the NEW `definition` that carry a non-empty `name`, and a definition above it is refused with 422 rather than stored truncated.
     * 
     * Moving `slug` is the edit to think about twice. It is unique per tenant, so a rename onto a slug another form holds is a 409 — but it is the rename that SUCCEEDS that changes behaviour, because the slug is how a storefront page resolves this form: change it and the page naming the old one resolves nothing. The submissions already collected are unaffected either way; each keeps the slug it arrived under in its own `form_slug`, which is exactly what that copy is for.
     *
     * @param {string} id - The form, by id.
     * @param {object[]} definition - The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.

On the way IN a node is any object: this is unconstrained jsonb, FormKit owns the grammar, and the one rule this app applies is the tenant's `max_form_fields` ceiling counted over the nodes with a non-empty `name`. Anything that is not an array at all is a 400.
     * @param {object} metadata - Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
     * @param {string} name - What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
     * @param {object} settings - Submit label, success message, per-form notify email, post-submit actions, translations — see the `FormSettings` schema for every key that is read. Unconstrained jsonb on the way in: nothing here is required and no key is refused.
     * @param {string} slug - URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens. Taken already? That is the 409 — one slug answers for one form.
     * @param {FormStatus} status - Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    formsUpdate(id: string, definition?: object[], metadata?: object, name?: string, settings?: object, slug?: string, status?: FormStatus): Promise<Models.Error>;
    formsUpdate(
        paramsOrFirst: { id: string, definition?: object[], metadata?: object, name?: string, settings?: object, slug?: string, status?: FormStatus } | string,
        ...rest: [(object[])?, (object)?, (string)?, (object)?, (string)?, (FormStatus)?]    
    ): Promise<Models.Error> {
        let params: { id: string, definition?: object[], metadata?: object, name?: string, settings?: object, slug?: string, status?: FormStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, definition?: object[], metadata?: object, name?: string, settings?: object, slug?: string, status?: FormStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                definition: rest[0] as object[],
                metadata: rest[1] as object,
                name: rest[2] as string,
                settings: rest[3] as object,
                slug: rest[4] as string,
                status: rest[5] as FormStatus            
            };
        }
        
        const id = params.id;
        const definition = params.definition;
        const metadata = params.metadata;
        const name = params.name;
        const settings = params.settings;
        const slug = params.slug;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/forms/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof definition !== 'undefined') {
            apiPayload['definition'] = definition;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof settings !== 'undefined') {
            apiPayload['settings'] = settings;
        }
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
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
}
