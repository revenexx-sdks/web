import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { OrderListKindTone } from '../enums/order-list-kind-tone';
import { OrderlistsVocabulariesGetName } from '../enums/orderlists-vocabularies-get-name';
import { OrderListCartMode } from '../enums/order-list-cart-mode';

export class Orderlists {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * What a caller may see is a UNION, not an intersection: the lists this contact owns, plus the lists their organization shares — `owner_id = X OR (organization_id = Y AND shared)`. A list that satisfies both sides is merged by id and counted once. Where the gateway resolved an acting contact, that contact and their organization ARE the scope and neither `owner_id` nor `organization_id` in the query can widen it; without a resolved principal — a back-office caller holding the tenant key — the two are read from the query, and a call that names neither sees every list the tenant keeps. Three filters are read in all — `owner_id`, `organization_id`, `kind` — and any OTHER query key is ignored rather than refused, which is what the `filter` echo makes visible: a key that is missing there was not applied. When only one side of the predicate is in play the database pages the rows and reports the true total; when both are, each side is read separately and bounded at a thousand rows, merged, and paged after the merge, so `total` is the size of the merged set rather than a database count. The default sort is `updated_at.desc`, which is why adding a position moves its list to the front of the page. Every row carries `item_count`. Without it the only way to render a per-list badge was to read the positions of every list on the page — thousands of rows to draw twenty numbers. The count is bounded the way the page is: at most 200 lists, each capped by the tenant's max_items_per_list.
     *
     * @param {string} params.ownerId - Exact-match filter on `owner_id`. Every list one contact owns. Ignored when the gateway resolved an acting contact — the scope is then that contact and a query parameter cannot widen it.
     * @param {string} params.organizationId - Exact-match filter on `organization_id`. The SHARED lists of one organization. Combined with `owner_id` this is a union, not an intersection: own lists ∪ that organization's shared ones.
     * @param {string} params.kind - Filter by list kind — a `code` from GET /orderlists/kinds. A code this tenant does not keep is a 400 naming the ones it does, so this is the one filter here that can fail.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsList(params?: { ownerId?: string, organizationId?: string, kind?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * What a caller may see is a UNION, not an intersection: the lists this contact owns, plus the lists their organization shares — `owner_id = X OR (organization_id = Y AND shared)`. A list that satisfies both sides is merged by id and counted once. Where the gateway resolved an acting contact, that contact and their organization ARE the scope and neither `owner_id` nor `organization_id` in the query can widen it; without a resolved principal — a back-office caller holding the tenant key — the two are read from the query, and a call that names neither sees every list the tenant keeps. Three filters are read in all — `owner_id`, `organization_id`, `kind` — and any OTHER query key is ignored rather than refused, which is what the `filter` echo makes visible: a key that is missing there was not applied. When only one side of the predicate is in play the database pages the rows and reports the true total; when both are, each side is read separately and bounded at a thousand rows, merged, and paged after the merge, so `total` is the size of the merged set rather than a database count. The default sort is `updated_at.desc`, which is why adding a position moves its list to the front of the page. Every row carries `item_count`. Without it the only way to render a per-list badge was to read the positions of every list on the page — thousands of rows to draw twenty numbers. The count is bounded the way the page is: at most 200 lists, each capped by the tenant's max_items_per_list.
     *
     * @param {string} ownerId - Exact-match filter on `owner_id`. Every list one contact owns. Ignored when the gateway resolved an acting contact — the scope is then that contact and a query parameter cannot widen it.
     * @param {string} organizationId - Exact-match filter on `organization_id`. The SHARED lists of one organization. Combined with `owner_id` this is a union, not an intersection: own lists ∪ that organization's shared ones.
     * @param {string} kind - Filter by list kind — a `code` from GET /orderlists/kinds. A code this tenant does not keep is a 400 naming the ones it does, so this is the one filter here that can fail.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsList(ownerId?: string, organizationId?: string, kind?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    orderlistsList(
        paramsOrFirst?: { ownerId?: string, organizationId?: string, kind?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { ownerId?: string, organizationId?: string, kind?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ownerId?: string, organizationId?: string, kind?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                ownerId: paramsOrFirst as string,
                organizationId: rest[0] as string,
                kind: rest[1] as string,
                limit: rest[2] as number,
                offset: rest[3] as number,
                order: rest[4] as string            
            };
        }
        
        const ownerId = params.ownerId;
        const organizationId = params.organizationId;
        const kind = params.kind;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/orderlists';
        const apiPayload: Payload = {};
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
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
     * Three fields are required, and they are exactly the columns the database will not fill in: `name`, `owner_id` and `owner_name`. Everything else has an answer already — `kind` resolves to the caller's value, else the market's `default_kind` setting, else the kind the tenant flagged; `shared` is false; `organization_id` is null, which makes `shared` meaningless because there is then nobody to share with. Nothing about a list is unique: one owner may keep two lists with the same name, and the same article may appear in as many lists as the buyer wants. The list may be created empty or pre-filled in the same call: an optional `items` array is written as the list's positions with the row, so a twenty-line list is one request rather than a create followed by twenty adds, and the array order is the position order. Those initial `items` are normalized and article-checked BEFORE the list row is written, and both caps are checked first as well — the tenant's `max_items_per_list` against the array, and its `max_lists_per_owner` against what this contact already keeps — so a rejected position never leaves an empty list behind and a contact at their limit is refused before anything is inserted. The owner is set once — no route moves a list to another contact.
     *
     * @param {string} params.name - What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
     * @param {string} params.ownerId - The contact who owns the list. Ownership IS the authorization here: a caller the gateway resolved to a contact sees their own lists plus their organization's shared ones, and may write only their own — unless `shared_lists_editable` opens a shared list to the whole owning organization. Set once at create; no route moves a list to another owner.
     * @param {string} params.ownerName - The owner's display name as it stood when the list was created — a snapshot, so renaming the contact does not rewrite it. Carried so a shared list can say whose it is without a call to the contacts app.
     * @param {Models.OrderListItemInput[]} params.items - Optional initial positions. Every one is validated — and article-checked where `reject_unknown_articles` is on — BEFORE the list row is written, so a rejected position never leaves an empty list behind.
     * @param {string} params.kind - List kind — the `code` of one of the tenant's own kinds (GET /orderlists/kinds); defaults to the flagged one, or the market's 'default_kind' setting.
     * @param {object} params.metadata - Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
     * @param {string} params.organizationId - The organization the sharing is scoped to. Null means the list can only ever be the owner's own: `shared` is meaningless without it, because there is no set of people to share with. It is also what the order conversion hands the orders app as the buying organization.
     * @param {boolean} params.shared - Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsCreate(params: { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: string, metadata?: object, organizationId?: string, shared?: boolean }): Promise<Models.Error>;
    /**
     * Three fields are required, and they are exactly the columns the database will not fill in: `name`, `owner_id` and `owner_name`. Everything else has an answer already — `kind` resolves to the caller's value, else the market's `default_kind` setting, else the kind the tenant flagged; `shared` is false; `organization_id` is null, which makes `shared` meaningless because there is then nobody to share with. Nothing about a list is unique: one owner may keep two lists with the same name, and the same article may appear in as many lists as the buyer wants. The list may be created empty or pre-filled in the same call: an optional `items` array is written as the list's positions with the row, so a twenty-line list is one request rather than a create followed by twenty adds, and the array order is the position order. Those initial `items` are normalized and article-checked BEFORE the list row is written, and both caps are checked first as well — the tenant's `max_items_per_list` against the array, and its `max_lists_per_owner` against what this contact already keeps — so a rejected position never leaves an empty list behind and a contact at their limit is refused before anything is inserted. The owner is set once — no route moves a list to another contact.
     *
     * @param {string} name - What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
     * @param {string} ownerId - The contact who owns the list. Ownership IS the authorization here: a caller the gateway resolved to a contact sees their own lists plus their organization's shared ones, and may write only their own — unless `shared_lists_editable` opens a shared list to the whole owning organization. Set once at create; no route moves a list to another owner.
     * @param {string} ownerName - The owner's display name as it stood when the list was created — a snapshot, so renaming the contact does not rewrite it. Carried so a shared list can say whose it is without a call to the contacts app.
     * @param {Models.OrderListItemInput[]} items - Optional initial positions. Every one is validated — and article-checked where `reject_unknown_articles` is on — BEFORE the list row is written, so a rejected position never leaves an empty list behind.
     * @param {string} kind - List kind — the `code` of one of the tenant's own kinds (GET /orderlists/kinds); defaults to the flagged one, or the market's 'default_kind' setting.
     * @param {object} metadata - Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
     * @param {string} organizationId - The organization the sharing is scoped to. Null means the list can only ever be the owner's own: `shared` is meaningless without it, because there is no set of people to share with. It is also what the order conversion hands the orders app as the buying organization.
     * @param {boolean} shared - Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsCreate(name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: string, metadata?: object, organizationId?: string, shared?: boolean): Promise<Models.Error>;
    orderlistsCreate(
        paramsOrFirst: { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: string, metadata?: object, organizationId?: string, shared?: boolean } | string,
        ...rest: [(string)?, (string)?, (Models.OrderListItemInput[])?, (string)?, (object)?, (string)?, (boolean)?]    
    ): Promise<Models.Error> {
        let params: { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: string, metadata?: object, organizationId?: string, shared?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, ownerId: string, ownerName: string, items?: Models.OrderListItemInput[], kind?: string, metadata?: object, organizationId?: string, shared?: boolean };
        } else {
            params = {
                name: paramsOrFirst as string,
                ownerId: rest[0] as string,
                ownerName: rest[1] as string,
                items: rest[2] as Models.OrderListItemInput[],
                kind: rest[3] as string,
                metadata: rest[4] as object,
                organizationId: rest[5] as string,
                shared: rest[6] as boolean            
            };
        }
        
        const name = params.name;
        const ownerId = params.ownerId;
        const ownerName = params.ownerName;
        const items = params.items;
        const kind = params.kind;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const shared = params.shared;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof ownerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "ownerId"');
        }
        if (typeof ownerName === 'undefined') {
            throw new RevenexxException('Missing required parameter: "ownerName"');
        }

        const apiPath = '/v1/orderlists';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"categorySlug":{"wire":"category_slug","children":null},"costCenterId":{"wire":"cost_center_id","children":null},"customSku":{"wire":"custom_sku","children":null},"positionTexts":{"wire":"position_texts","children":null},"productId":{"wire":"product_id","children":null},"subcategorySlug":{"wire":"subcategory_slug","children":null},"taxRate":{"wire":"tax_rate","children":null}});
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof ownerName !== 'undefined') {
            apiPayload['owner_name'] = ownerName;
        }
        if (typeof shared !== 'undefined') {
            apiPayload['shared'] = shared;
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
     * Seeds the two kinds a fresh tenant starts with — `shopping` and `label` — and gives `shopping` the default flag. Idempotent by code: `created` names the kinds this call wrote, `existing` the ones that were already there and were left exactly as the tenant keeps them, renamed, retoned and reordered included. On a settled tenant `created` is empty. It is rarely the call you need — the `app.installed` event runs the same seed, and the first read of GET /orderlists/kinds on an empty table seeds before it answers. It never removes a kind and never restores one a merchant deleted.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsDefaults(): Promise<Models.Error> {

        const apiPath = '/v1/orderlists/defaults';
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
     * What a saved list may be FOR — the tenant's own taxonomy, and the set every `kind` on a list is drawn from. This used to be a CHECK constraint, which meant a merchant who keeps reagent lists or sample lists needed a release of this app to say so — and the app never branched on the value, it only checked membership. The set is the tenant's rows now. Reading this route on a tenant that has none seeds them, so it never answers an empty set on a fresh install and a client may treat the first read as the install step it no longer has to make. Rows come back in `position` order, ascending, which is the order a select should offer them in, and each carries the `is_default` flag that decides what a create with no `kind` falls back to. It takes NO filters: `limit` and `offset` are the only query keys it reads, and any other is ignored rather than refused — which is also why this collection alone answers no `filter` echo, since echoing an empty one would be noise. The `code` on each row, not the `id`, is what `lists.kind` stores and what `?kind=` on GET /orderlists matches.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    orderlistsKindsList(params?: { limit?: number, offset?: number }): Promise<{}>;
    /**
     * What a saved list may be FOR — the tenant's own taxonomy, and the set every `kind` on a list is drawn from. This used to be a CHECK constraint, which meant a merchant who keeps reagent lists or sample lists needed a release of this app to say so — and the app never branched on the value, it only checked membership. The set is the tenant's rows now. Reading this route on a tenant that has none seeds them, so it never answers an empty set on a fresh install and a client may treat the first read as the install step it no longer has to make. Rows come back in `position` order, ascending, which is the order a select should offer them in, and each carries the `is_default` flag that decides what a create with no `kind` falls back to. It takes NO filters: `limit` and `offset` are the only query keys it reads, and any other is ignored rather than refused — which is also why this collection alone answers no `filter` echo, since echoing an empty one would be noise. The `code` on each row, not the `id`, is what `lists.kind` stores and what `?kind=` on GET /orderlists matches.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsKindsList(limit?: number, offset?: number): Promise<{}>;
    orderlistsKindsList(
        paramsOrFirst?: { limit?: number, offset?: number } | number,
        ...rest: [(number)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;


        const apiPath = '/v1/orderlists/kinds';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
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
     * Adds a kind to the tenant's own taxonomy — reagent lists, sample lists, whatever a merchant sorts their saved lists by — without a release of this app, because nothing here branches on the value. `code` and `title` are required, and they are exactly the two columns of `list_kinds` the database will not fill in. The code is lowercased on the way in and immutable afterwards: renaming it would orphan every list carrying it, since a list stores the code and not the id. `is_default: true` promotes the new kind and demotes whoever held the flag. Creating a kind changes no existing list.
     *
     * @param {string} params.code - What `lists.kind` will store. Lowercased on the way in and immutable afterwards — a merchant who wants a different code creates a new kind and moves the lists over.
     * @param {string} params.title - What a person reads. `labels` adds the localized forms on top; this one is the fallback.
     * @param {string} params.description - What this kind is for, in one sentence — the line a select shows under the title.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag.
     * @param {boolean} params.isDefault - Promote this kind; the previous default is demoted.
     * @param {object} params.labels - Localized titles, keyed by language tag.
     * @param {number} params.position - Where the kind sits in a select, ascending. Omitted means 0, which puts it first among the unpositioned.
     * @param {OrderListKindTone} params.tone - Semantic badge colour. The client owns what each tone looks like; omitted means `neutral`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsKindsCreate(params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: OrderListKindTone }): Promise<Models.Error>;
    /**
     * Adds a kind to the tenant's own taxonomy — reagent lists, sample lists, whatever a merchant sorts their saved lists by — without a release of this app, because nothing here branches on the value. `code` and `title` are required, and they are exactly the two columns of `list_kinds` the database will not fill in. The code is lowercased on the way in and immutable afterwards: renaming it would orphan every list carrying it, since a list stores the code and not the id. `is_default: true` promotes the new kind and demotes whoever held the flag. Creating a kind changes no existing list.
     *
     * @param {string} code - What `lists.kind` will store. Lowercased on the way in and immutable afterwards — a merchant who wants a different code creates a new kind and moves the lists over.
     * @param {string} title - What a person reads. `labels` adds the localized forms on top; this one is the fallback.
     * @param {string} description - What this kind is for, in one sentence — the line a select shows under the title.
     * @param {object} descriptions - Localized descriptions, keyed by language tag.
     * @param {boolean} isDefault - Promote this kind; the previous default is demoted.
     * @param {object} labels - Localized titles, keyed by language tag.
     * @param {number} position - Where the kind sits in a select, ascending. Omitted means 0, which puts it first among the unpositioned.
     * @param {OrderListKindTone} tone - Semantic badge colour. The client owns what each tone looks like; omitted means `neutral`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsKindsCreate(code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: OrderListKindTone): Promise<Models.Error>;
    orderlistsKindsCreate(
        paramsOrFirst: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: OrderListKindTone } | string,
        ...rest: [(string)?, (string)?, (object)?, (boolean)?, (object)?, (number)?, (OrderListKindTone)?]    
    ): Promise<Models.Error> {
        let params: { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: OrderListKindTone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, title: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, tone?: OrderListKindTone };
        } else {
            params = {
                code: paramsOrFirst as string,
                title: rest[0] as string,
                description: rest[1] as string,
                descriptions: rest[2] as object,
                isDefault: rest[3] as boolean,
                labels: rest[4] as object,
                position: rest[5] as number,
                tone: rest[6] as OrderListKindTone            
            };
        }
        
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const tone = params.tone;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof title === 'undefined') {
            throw new RevenexxException('Missing required parameter: "title"');
        }

        const apiPath = '/v1/orderlists/kinds';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * There is no foreign key behind `lists.kind` — it is a plain text column holding a code, and nothing in the database points at `list_kinds` — so this route's own 409 is the whole of the referential integrity. It reads whether any list still carries the code and refuses if one does, and refuses again when this is the last kind left, because a list must have one. Nothing cascades and no list is rewritten. Two gaps the guard leaves: it is a read followed by a delete with no lock between them, so a list written with the code in that window survives it; and the market-scoped `default_kind` SETTING is neither consulted nor cleared, so deleting the kind it names leaves the setting pointing at nothing while creates fall through to whichever kind holds the default flag. A list that does end up naming a code nothing defines is not broken, only stranded: it is still returned by GET /orderlists and GET /orderlists/{id} carrying the bare code, the vocabulary no longer offers that value so a UI renders the code itself, `?kind=` refuses it with a 400 naming the codes that remain, and the way back is PUT /orderlists/{id} with a kind the tenant keeps. Deleting the flag-holder hands the flag to the first remaining kind. The answer is the `code`, not the `{deleted, id}` the other deletes here return.
     *
     * @param {string} params.id - The list kind, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsKindsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * There is no foreign key behind `lists.kind` — it is a plain text column holding a code, and nothing in the database points at `list_kinds` — so this route's own 409 is the whole of the referential integrity. It reads whether any list still carries the code and refuses if one does, and refuses again when this is the last kind left, because a list must have one. Nothing cascades and no list is rewritten. Two gaps the guard leaves: it is a read followed by a delete with no lock between them, so a list written with the code in that window survives it; and the market-scoped `default_kind` SETTING is neither consulted nor cleared, so deleting the kind it names leaves the setting pointing at nothing while creates fall through to whichever kind holds the default flag. A list that does end up naming a code nothing defines is not broken, only stranded: it is still returned by GET /orderlists and GET /orderlists/{id} carrying the bare code, the vocabulary no longer offers that value so a UI renders the code itself, `?kind=` refuses it with a 400 naming the codes that remain, and the way back is PUT /orderlists/{id} with a kind the tenant keeps. Deleting the flag-holder hands the flag to the first remaining kind. The answer is the `code`, not the `{deleted, id}` the other deletes here return.
     *
     * @param {string} id - The list kind, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsKindsDelete(id: string): Promise<Models.Error>;
    orderlistsKindsDelete(
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

        const apiPath = '/v1/orderlists/kinds/{id}'.replace('{id}', id);
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
     * One kind, by the id this route takes. The `code` is the OTHER identity and the one that matters to the data: `lists.kind` stores the code and never this id, so a list is joined to its kind by code while every /orderlists/kinds/{id} route is addressed by uuid. A fresh tenant starts with two — `shopping` and `label`, seeded on install — and everything beyond them is the merchant's own. A kind seeded before 0.15.0 may hold a serialized locale map in `title` and `description` where plain text belongs; those rows were left as they stand, because repairing them is a data change.
     *
     * @param {string} params.id - The list kind, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsKindsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * One kind, by the id this route takes. The `code` is the OTHER identity and the one that matters to the data: `lists.kind` stores the code and never this id, so a list is joined to its kind by code while every /orderlists/kinds/{id} route is addressed by uuid. A fresh tenant starts with two — `shopping` and `label`, seeded on install — and everything beyond them is the merchant's own. A kind seeded before 0.15.0 may hold a serialized locale map in `title` and `description` where plain text belongs; those rows were left as they stand, because repairing them is a data change.
     *
     * @param {string} id - The list kind, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsKindsGet(id: string): Promise<Models.Error>;
    orderlistsKindsGet(
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

        const apiPath = '/v1/orderlists/kinds/{id}'.replace('{id}', id);
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
     * Everything a kind has except its code: the title a person reads, the sentence underneath it, the localized forms of both, the badge tone, and where it sits in a select. The code is not among them and cannot be reached from here at all: sending a different one is a 400 rather than a silent no-op, because `lists.kind` stores the code and a rename would orphan every list that carries it with no foreign key to stop it. So a rename is never how a list comes to name a code nothing defines — only a delete can do that. Renaming the TITLE touches no list, for the same reason. A blank title is ignored rather than stored; an explicit null clears the description; `labels` and `descriptions` replace the whole map rather than merging into it. `is_default: true` makes the same move POST /orderlists/kinds/{id}/make-default makes on its own. A system kind is editable like any other.
     *
     * @param {string} params.id - The list kind, by id.
     * @param {string} params.description - What this kind is for, in one sentence. Explicit null clears it.
     * @param {object} params.descriptions - Localized descriptions, keyed by language tag. Replaces the whole map rather than merging into it.
     * @param {boolean} params.isDefault - True promotes this kind and demotes the previous default — the same move POST /orderlists/kinds/{id}/make-default makes on its own.
     * @param {object} params.labels - Localized titles, keyed by language tag. Replaces the whole map rather than merging into it.
     * @param {number} params.position - Where the kind sits in a select, ascending.
     * @param {string} params.title - What a person reads. A blank title is ignored rather than stored — a kind with no words is unreadable in every UI.
     * @param {OrderListKindTone} params.tone - Semantic badge colour. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsKindsUpdate(params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: OrderListKindTone }): Promise<Models.Error>;
    /**
     * Everything a kind has except its code: the title a person reads, the sentence underneath it, the localized forms of both, the badge tone, and where it sits in a select. The code is not among them and cannot be reached from here at all: sending a different one is a 400 rather than a silent no-op, because `lists.kind` stores the code and a rename would orphan every list that carries it with no foreign key to stop it. So a rename is never how a list comes to name a code nothing defines — only a delete can do that. Renaming the TITLE touches no list, for the same reason. A blank title is ignored rather than stored; an explicit null clears the description; `labels` and `descriptions` replace the whole map rather than merging into it. `is_default: true` makes the same move POST /orderlists/kinds/{id}/make-default makes on its own. A system kind is editable like any other.
     *
     * @param {string} id - The list kind, by id.
     * @param {string} description - What this kind is for, in one sentence. Explicit null clears it.
     * @param {object} descriptions - Localized descriptions, keyed by language tag. Replaces the whole map rather than merging into it.
     * @param {boolean} isDefault - True promotes this kind and demotes the previous default — the same move POST /orderlists/kinds/{id}/make-default makes on its own.
     * @param {object} labels - Localized titles, keyed by language tag. Replaces the whole map rather than merging into it.
     * @param {number} position - Where the kind sits in a select, ascending.
     * @param {string} title - What a person reads. A blank title is ignored rather than stored — a kind with no words is unreadable in every UI.
     * @param {OrderListKindTone} tone - Semantic badge colour. The client owns what each tone looks like.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsKindsUpdate(id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: OrderListKindTone): Promise<Models.Error>;
    orderlistsKindsUpdate(
        paramsOrFirst: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: OrderListKindTone } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (number)?, (string)?, (OrderListKindTone)?]    
    ): Promise<Models.Error> {
        let params: { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: OrderListKindTone };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, description?: string, descriptions?: object, isDefault?: boolean, labels?: object, position?: number, title?: string, tone?: OrderListKindTone };
        } else {
            params = {
                id: paramsOrFirst as string,
                description: rest[0] as string,
                descriptions: rest[1] as object,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                title: rest[5] as string,
                tone: rest[6] as OrderListKindTone            
            };
        }
        
        const id = params.id;
        const description = params.description;
        const descriptions = params.descriptions;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const title = params.title;
        const tone = params.tone;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/kinds/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof descriptions !== 'undefined') {
            apiPayload['descriptions'] = descriptions;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
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
     * One call MOVES the flag: the kind in the path is promoted and whoever held the flag before is demoted in the same request, because the flag is a single answer and not a per-row opinion. It is what a list created without a kind falls back to, so two defaults leave the result to row order and none leaves it to whatever sorts first — which is exactly why promotion and demotion cannot be two calls a client makes in sequence. PUT with is_default already moved it, but only as a side effect of an edit, and a client promoting and then demoting by hand produces those two broken states whenever one of the pair does not land. Every kind the tenant keeps is walked, and only the rows whose flag is wrong are written — the new default if it was not already set, the old one if it was — so the call costs at most two writes and repeating it costs none, which makes it safe to retry. The kind's other fields are untouched and no existing list is rewritten: lists that already name a kind keep it, since the flag decides only what a FUTURE create with no `kind` resolves to. The market-scoped `default_kind` setting still wins where it is set; this flag is the tenant-wide answer underneath it.
     *
     * @param {string} params.id - The list kind, by id.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsKindsMakeDefault(params: { id: string, data: object }): Promise<Models.Error>;
    /**
     * One call MOVES the flag: the kind in the path is promoted and whoever held the flag before is demoted in the same request, because the flag is a single answer and not a per-row opinion. It is what a list created without a kind falls back to, so two defaults leave the result to row order and none leaves it to whatever sorts first — which is exactly why promotion and demotion cannot be two calls a client makes in sequence. PUT with is_default already moved it, but only as a side effect of an edit, and a client promoting and then demoting by hand produces those two broken states whenever one of the pair does not land. Every kind the tenant keeps is walked, and only the rows whose flag is wrong are written — the new default if it was not already set, the old one if it was — so the call costs at most two writes and repeating it costs none, which makes it safe to retry. The kind's other fields are untouched and no existing list is rewritten: lists that already name a kind keep it, since the flag decides only what a FUTURE create with no `kind` resolves to. The market-scoped `default_kind` setting still wins where it is set; this flag is the tenant-wide answer underneath it.
     *
     * @param {string} id - The list kind, by id.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsKindsMakeDefault(id: string, data: object): Promise<Models.Error>;
    orderlistsKindsMakeDefault(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/orderlists/kinds/{id}/make-default'.replace('{id}', id);
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
     * Discovery for the vocabulary routes, and nothing more: every enum this app publishes, each as a name plus the words a person reads for it — its title and its description — and never the values, which are one call further down at GET /orderlists/vocabularies/{name}. It exists so that a client holding a qualified pair like 'orderlists.kinds' can build that URL from the pair alone and keep no copy of an enum of its own. Names: kinds. The split is deliberate rather than an economy: the set of NAMES is fixed by a release of this app, so a client may cache this answer for as long as it caches the contract, while the values under 'kinds' are the tenant's own rows and change without a release — which is why this route says nothing about them and why a UI building a select must make the second call rather than read the values off here. Title and description come back either as a plain string or as a locale map keyed by language tag, so a client reads the tag it wants and falls back to `en` — the same shape every localized field in this app carries.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderListVocabularyIndex>}
     */
    orderlistsVocabulariesList(): Promise<Models.OrderListVocabularyIndex> {

        const apiPath = '/v1/orderlists/vocabularies';
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
     * One named enum with every value it permits, and enough about each value to render it without a second source: the `key` the database stores and enforces, the title and the description a person reads, and the semantic badge `tone` a UI colours it with — which is why no client needs a colour map of its own, and why the Cockpit's hand-kept one could go. A value that names no tone of its own inherits the vocabulary's `default_tone`, so the field is never empty. 'kinds' is table-backed: the tenant's own rows ARE the value set, so a value they added appears here without a release of this app, and each value carries its `labels`, `descriptions` and the `is_default` flag besides. Values come back in `position` order, which is the order a select should offer. 'closed' says the set is exhaustive at this moment, so a value outside it is stale data rather than a missing label — what changed with the move to a table is WHO may extend it, not whether the set is closed. `source` says which: 'schema' where a CHECK constraint owns the values, 'table' where the tenant's rows do. Names: kinds.
     *
     * @param {OrderlistsVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsVocabulariesGet(params: { name: OrderlistsVocabulariesGetName }): Promise<Models.Error>;
    /**
     * One named enum with every value it permits, and enough about each value to render it without a second source: the `key` the database stores and enforces, the title and the description a person reads, and the semantic badge `tone` a UI colours it with — which is why no client needs a colour map of its own, and why the Cockpit's hand-kept one could go. A value that names no tone of its own inherits the vocabulary's `default_tone`, so the field is never empty. 'kinds' is table-backed: the tenant's own rows ARE the value set, so a value they added appears here without a release of this app, and each value carries its `labels`, `descriptions` and the `is_default` flag besides. Values come back in `position` order, which is the order a select should offer. 'closed' says the set is exhaustive at this moment, so a value outside it is stale data rather than a missing label — what changed with the move to a table is WHO may extend it, not whether the set is closed. `source` says which: 'schema' where a CHECK constraint owns the values, 'table' where the tenant's rows do. Names: kinds.
     *
     * @param {OrderlistsVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsVocabulariesGet(name: OrderlistsVocabulariesGetName): Promise<Models.Error>;
    orderlistsVocabulariesGet(
        paramsOrFirst: { name: OrderlistsVocabulariesGetName } | OrderlistsVocabulariesGetName    
    ): Promise<Models.Error> {
        let params: { name: OrderlistsVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: OrderlistsVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as OrderlistsVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/orderlists/vocabularies/{name}'.replace('{name}', name);
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
     * Takes every position with it, in the database: `items.list_id` is the app's only foreign key and it is ON DELETE CASCADE, and the handler removes the positions explicitly first besides. Nothing survives the list, there is no soft delete and no undo — and the answer carries no count, so read the list (or its `item_count`) BEFORE the call if you need to know how much went. What it does NOT take is what the list has already produced: a cart line or an order position built by the conversions carries `order_list_id`, `order_list_name` and `order_list_item_id` in its snapshot, and those are jsonb values inside another app rather than foreign keys — ADR-0055 forbids a cross-app FK, so nothing cascades there and nothing is nulled. The cart and the order are unharmed, because every position was copied as a snapshot rather than referenced; the provenance link is what dangles, permanently.
     *
     * @param {string} params.id - The order list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * Takes every position with it, in the database: `items.list_id` is the app's only foreign key and it is ON DELETE CASCADE, and the handler removes the positions explicitly first besides. Nothing survives the list, there is no soft delete and no undo — and the answer carries no count, so read the list (or its `item_count`) BEFORE the call if you need to know how much went. What it does NOT take is what the list has already produced: a cart line or an order position built by the conversions carries `order_list_id`, `order_list_name` and `order_list_item_id` in its snapshot, and those are jsonb values inside another app rather than foreign keys — ADR-0055 forbids a cross-app FK, so nothing cascades there and nothing is nulled. The cart and the order are unharmed, because every position was copied as a snapshot rather than referenced; the provenance link is what dangles, permanently.
     *
     * @param {string} id - The order list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsDelete(id: string): Promise<Models.Error>;
    orderlistsDelete(
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

        const apiPath = '/v1/orderlists/{id}'.replace('{id}', id);
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
     * The whole list in one call: the row plus every position inline, in `position` order, up to a thousand of them. The nested positions collection exists to CHANGE the positions, not to page them, so this is the read a detail view makes. Reading is wider than writing here — an acting contact sees their own lists and their organization's shared ones, and a list that is neither answers 404 rather than 403, so an outsider learns nothing from the difference. The row carries the dead `public` column next to `shared`; read `shared`.
     *
     * @param {string} params.id - The order list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * The whole list in one call: the row plus every position inline, in `position` order, up to a thousand of them. The nested positions collection exists to CHANGE the positions, not to page them, so this is the read a detail view makes. Reading is wider than writing here — an acting contact sees their own lists and their organization's shared ones, and a list that is neither answers 404 rather than 403, so an outsider learns nothing from the difference. The row carries the dead `public` column next to `shared`; read `shared`.
     *
     * @param {string} id - The order list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsGet(id: string): Promise<Models.Error>;
    orderlistsGet(
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

        const apiPath = '/v1/orderlists/{id}'.replace('{id}', id);
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
     * Rename, share or reclassify — the whole of what a list says about itself, plus `metadata`. Positions go through the items routes and the owner cannot be changed by anything. `shared` is what the column `public` was renamed to in June 2026; `public` is still on the wire because the provisioner is additive, is false on every row written since, and says nothing about who may see the list. One trap: a `kind` this tenant does not keep is IGNORED rather than refused, so the list quietly keeps the kind it had and a client that cares must read the answer back. An empty body is a 400 rather than a no-op.
     *
     * @param {string} params.id - The order list, by id.
     * @param {string} params.kind - List kind — the `code` of one of the tenant's own kinds (GET /orderlists/kinds); defaults to the flagged one, or the market's 'default_kind' setting.
     * @param {object} params.metadata - Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
     * @param {string} params.name - What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
     * @param {boolean} params.shared - Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsUpdate(params: { id: string, kind?: string, metadata?: object, name?: string, shared?: boolean }): Promise<Models.Error>;
    /**
     * Rename, share or reclassify — the whole of what a list says about itself, plus `metadata`. Positions go through the items routes and the owner cannot be changed by anything. `shared` is what the column `public` was renamed to in June 2026; `public` is still on the wire because the provisioner is additive, is false on every row written since, and says nothing about who may see the list. One trap: a `kind` this tenant does not keep is IGNORED rather than refused, so the list quietly keeps the kind it had and a client that cares must read the answer back. An empty body is a 400 rather than a no-op.
     *
     * @param {string} id - The order list, by id.
     * @param {string} kind - List kind — the `code` of one of the tenant's own kinds (GET /orderlists/kinds); defaults to the flagged one, or the market's 'default_kind' setting.
     * @param {object} metadata - Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
     * @param {string} name - What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
     * @param {boolean} shared - Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsUpdate(id: string, kind?: string, metadata?: object, name?: string, shared?: boolean): Promise<Models.Error>;
    orderlistsUpdate(
        paramsOrFirst: { id: string, kind?: string, metadata?: object, name?: string, shared?: boolean } | string,
        ...rest: [(string)?, (object)?, (string)?, (boolean)?]    
    ): Promise<Models.Error> {
        let params: { id: string, kind?: string, metadata?: object, name?: string, shared?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, kind?: string, metadata?: object, name?: string, shared?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                kind: rest[0] as string,
                metadata: rest[1] as object,
                name: rest[2] as string,
                shared: rest[3] as boolean            
            };
        }
        
        const id = params.id;
        const kind = params.kind;
        const metadata = params.metadata;
        const name = params.name;
        const shared = params.shared;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof shared !== 'undefined') {
            apiPayload['shared'] = shared;
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
     * The reason a buyer keeps a list at all: every position of the list goes into a cart in one call. The cart is either one the caller names or one this call makes. Sending 'cart_id' adds to that existing cart; omitting it creates a cart for the LIST'S OWNER — not for whoever called — names it after the list, and makes it that owner's current cart, because a cart the buyer cannot see is not 'added to cart'. Which of the two happened is not left to be inferred: `cart_created` says so and `cart_id` names the cart either way. 'append' (the default, tenant-configurable through `cart_merge_mode`) lets the carts app merge each line by product and price so quantities accumulate, and is sent one line at a time precisely because that merge happens on add; 'replace' makes the list the cart's whole contents in one call. What the cart has no column for — cost centre, custom SKU, position texts — rides in each line's snapshot together with the list it came from. The list itself is never touched: it is read, not emptied, so the same list converts again next month. Cross-app: carts.create, carts.items.create, carts.items.replace.
     *
     * @param {string} params.id - The order list, by id.
     * @param {string} params.cartId - Add to this existing cart. Omit to create one for the list owner and make it their current cart.
     * @param {string} params.currency - ISO 4217 code for the cart and its lines. Omit to let the carts app decide.
     * @param {OrderListCartMode} params.mode - 'append' adds the positions (the carts app merges a line by product and price, so quantities accumulate); 'replace' makes the list the cart's entire contents. Defaults to the tenant's 'cart_merge_mode' setting.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsToCart(params: { id: string, cartId?: string, currency?: string, mode?: OrderListCartMode }): Promise<Models.Error>;
    /**
     * The reason a buyer keeps a list at all: every position of the list goes into a cart in one call. The cart is either one the caller names or one this call makes. Sending 'cart_id' adds to that existing cart; omitting it creates a cart for the LIST'S OWNER — not for whoever called — names it after the list, and makes it that owner's current cart, because a cart the buyer cannot see is not 'added to cart'. Which of the two happened is not left to be inferred: `cart_created` says so and `cart_id` names the cart either way. 'append' (the default, tenant-configurable through `cart_merge_mode`) lets the carts app merge each line by product and price so quantities accumulate, and is sent one line at a time precisely because that merge happens on add; 'replace' makes the list the cart's whole contents in one call. What the cart has no column for — cost centre, custom SKU, position texts — rides in each line's snapshot together with the list it came from. The list itself is never touched: it is read, not emptied, so the same list converts again next month. Cross-app: carts.create, carts.items.create, carts.items.replace.
     *
     * @param {string} id - The order list, by id.
     * @param {string} cartId - Add to this existing cart. Omit to create one for the list owner and make it their current cart.
     * @param {string} currency - ISO 4217 code for the cart and its lines. Omit to let the carts app decide.
     * @param {OrderListCartMode} mode - 'append' adds the positions (the carts app merges a line by product and price, so quantities accumulate); 'replace' makes the list the cart's entire contents. Defaults to the tenant's 'cart_merge_mode' setting.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsToCart(id: string, cartId?: string, currency?: string, mode?: OrderListCartMode): Promise<Models.Error>;
    orderlistsToCart(
        paramsOrFirst: { id: string, cartId?: string, currency?: string, mode?: OrderListCartMode } | string,
        ...rest: [(string)?, (string)?, (OrderListCartMode)?]    
    ): Promise<Models.Error> {
        let params: { id: string, cartId?: string, currency?: string, mode?: OrderListCartMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, cartId?: string, currency?: string, mode?: OrderListCartMode };
        } else {
            params = {
                id: paramsOrFirst as string,
                cartId: rest[0] as string,
                currency: rest[1] as string,
                mode: rest[2] as OrderListCartMode            
            };
        }
        
        const id = params.id;
        const cartId = params.cartId;
        const currency = params.currency;
        const mode = params.mode;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{id}/cart'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof mode !== 'undefined') {
            apiPayload['mode'] = mode;
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
     * The other half of the reason a list exists — and it is the ORDERS app that does it, over the gateway rather than over a shared table, so everything an order means is that app's answer and not this one's. Places the list's positions as an order: buyer and organization come from the list, the cost centre and the position texts land on the order's own columns, and the list is left exactly as it stands so it can be ordered again next month. The acting contact is re-asserted on the call, so the orders app applies ITS rules to the BUYER rather than to this app — a contact holding only orders.request, or an order above the tenant's approval threshold, comes back with status 'pending' and no placed_at instead of being refused. That pending order is the platform's nearest thing to a draft; the orders app owns the state and this one cannot override it, which is why `status` is reported rather than chosen and why the created order is handed back verbatim under `order` beside the three fields lifted out of it. Cross-app: orders.place.
     *
     * @param {string} params.id - The order list, by id.
     * @param {string} params.currency - ISO 4217 code. Omit to let the orders app apply the market default.
     * @param {string} params.customerOrderNumber - The BUYER's own order or purchase-order number, forwarded to the orders app verbatim. Free text and never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsToOrder(params: { id: string, currency?: string, customerOrderNumber?: string }): Promise<Models.Error>;
    /**
     * The other half of the reason a list exists — and it is the ORDERS app that does it, over the gateway rather than over a shared table, so everything an order means is that app's answer and not this one's. Places the list's positions as an order: buyer and organization come from the list, the cost centre and the position texts land on the order's own columns, and the list is left exactly as it stands so it can be ordered again next month. The acting contact is re-asserted on the call, so the orders app applies ITS rules to the BUYER rather than to this app — a contact holding only orders.request, or an order above the tenant's approval threshold, comes back with status 'pending' and no placed_at instead of being refused. That pending order is the platform's nearest thing to a draft; the orders app owns the state and this one cannot override it, which is why `status` is reported rather than chosen and why the created order is handed back verbatim under `order` beside the three fields lifted out of it. Cross-app: orders.place.
     *
     * @param {string} id - The order list, by id.
     * @param {string} currency - ISO 4217 code. Omit to let the orders app apply the market default.
     * @param {string} customerOrderNumber - The BUYER's own order or purchase-order number, forwarded to the orders app verbatim. Free text and never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsToOrder(id: string, currency?: string, customerOrderNumber?: string): Promise<Models.Error>;
    orderlistsToOrder(
        paramsOrFirst: { id: string, currency?: string, customerOrderNumber?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id: string, currency?: string, customerOrderNumber?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, currency?: string, customerOrderNumber?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                currency: rest[0] as string,
                customerOrderNumber: rest[1] as string            
            };
        }
        
        const id = params.id;
        const currency = params.currency;
        const customerOrderNumber = params.customerOrderNumber;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{id}/order'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
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
     * Every column of a position is an exact-match filter — eighteen of them, which is the whole row — and they combine as AND. `list_id` is not among them: it comes from the path and overwrites anything the query says. The default sort is `position.asc`, and `position` is neither dense nor unique: removing a position leaves its number behind while the next add takes the list's current COUNT, so a delete from the middle followed by an add produces two rows sharing a number and the tie falls to whatever the database returns first. Sort by `created_at` where the order has to be unambiguous.
     *
     * @param {string} params.listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} params.id - Exact-match filter on `id`. The position's own id — the same row GET /orderlists/{list_id}/items/{id} answers, reached through the collection.
     * @param {string} params.productId - Exact-match filter on `product_id`. Every position for one catalogue product.
     * @param {string} params.sku - Exact-match filter on `sku`. One article number as the catalogue knows it.
     * @param {string} params.name - Exact-match filter on `name`. The saved article name, matched EXACTLY and case-sensitively — this is equality, not a search.
     * @param {string} params.image - Exact-match filter on `image`. The snapshotted image URL. Exact match, so this is a reconciliation tool rather than something a person types.
     * @param {number} params.quantity - Exact-match filter on `quantity`. An exact quantity, which is a needle-in-a-haystack filter — there is no range filter on this collection.
     * @param {string} params.unit - Exact-match filter on `unit`. One unit, in the tenant's own words. Open text, so the value must match what was written.
     * @param {number} params.price - Exact-match filter on `price`. An exact snapshotted unit price. Equality on a decimal, so it finds the rows written at exactly this price and nothing near it.
     * @param {number} params.taxRate - Exact-match filter on `tax_rate`. An exact VAT rate as a percent (19 = 19 %).
     * @param {string} params.costCenterId - Exact-match filter on `cost_center_id`. Every position booked to one cost centre, as the tenant's ERP names it. The filter a controller uses to see what a department has saved up.
     * @param {string} params.positionTexts - Exact-match filter on `position_texts`. The whole notes ARRAY, serialized as JSON — equality on the document, not a search inside it.
     * @param {string} params.customSku - Exact-match filter on `custom_sku`. The buyer's own article number. The lookup a B2B buyer actually performs: their purchasing system knows this number and not the shop's.
     * @param {string} params.categorySlug - Exact-match filter on `category_slug`. One catalogue category, as a slug.
     * @param {string} params.subcategorySlug - Exact-match filter on `subcategory_slug`. One catalogue subcategory, as a slug.
     * @param {number} params.position - Exact-match filter on `position`. The exact sort position within the list.
     * @param {string} params.metadata - Exact-match filter on `metadata`. The WHOLE metadata document, serialized as JSON — equality, not a key lookup and not a containment query.
     * @param {string} params.createdAt - Exact-match filter on `created_at`. The exact creation timestamp. There is no range filter here; sort with `order=created_at.desc` instead.
     * @param {string} params.updatedAt - Exact-match filter on `updated_at`. The exact timestamp of the last change.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsItemsList(params: { listId: string, id?: string, productId?: string, sku?: string, name?: string, image?: string, quantity?: number, unit?: string, price?: number, taxRate?: number, costCenterId?: string, positionTexts?: string, customSku?: string, categorySlug?: string, subcategorySlug?: string, position?: number, metadata?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * Every column of a position is an exact-match filter — eighteen of them, which is the whole row — and they combine as AND. `list_id` is not among them: it comes from the path and overwrites anything the query says. The default sort is `position.asc`, and `position` is neither dense nor unique: removing a position leaves its number behind while the next add takes the list's current COUNT, so a delete from the middle followed by an add produces two rows sharing a number and the tie falls to whatever the database returns first. Sort by `created_at` where the order has to be unambiguous.
     *
     * @param {string} listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} id - Exact-match filter on `id`. The position's own id — the same row GET /orderlists/{list_id}/items/{id} answers, reached through the collection.
     * @param {string} productId - Exact-match filter on `product_id`. Every position for one catalogue product.
     * @param {string} sku - Exact-match filter on `sku`. One article number as the catalogue knows it.
     * @param {string} name - Exact-match filter on `name`. The saved article name, matched EXACTLY and case-sensitively — this is equality, not a search.
     * @param {string} image - Exact-match filter on `image`. The snapshotted image URL. Exact match, so this is a reconciliation tool rather than something a person types.
     * @param {number} quantity - Exact-match filter on `quantity`. An exact quantity, which is a needle-in-a-haystack filter — there is no range filter on this collection.
     * @param {string} unit - Exact-match filter on `unit`. One unit, in the tenant's own words. Open text, so the value must match what was written.
     * @param {number} price - Exact-match filter on `price`. An exact snapshotted unit price. Equality on a decimal, so it finds the rows written at exactly this price and nothing near it.
     * @param {number} taxRate - Exact-match filter on `tax_rate`. An exact VAT rate as a percent (19 = 19 %).
     * @param {string} costCenterId - Exact-match filter on `cost_center_id`. Every position booked to one cost centre, as the tenant's ERP names it. The filter a controller uses to see what a department has saved up.
     * @param {string} positionTexts - Exact-match filter on `position_texts`. The whole notes ARRAY, serialized as JSON — equality on the document, not a search inside it.
     * @param {string} customSku - Exact-match filter on `custom_sku`. The buyer's own article number. The lookup a B2B buyer actually performs: their purchasing system knows this number and not the shop's.
     * @param {string} categorySlug - Exact-match filter on `category_slug`. One catalogue category, as a slug.
     * @param {string} subcategorySlug - Exact-match filter on `subcategory_slug`. One catalogue subcategory, as a slug.
     * @param {number} position - Exact-match filter on `position`. The exact sort position within the list.
     * @param {string} metadata - Exact-match filter on `metadata`. The WHOLE metadata document, serialized as JSON — equality, not a key lookup and not a containment query.
     * @param {string} createdAt - Exact-match filter on `created_at`. The exact creation timestamp. There is no range filter here; sort with `order=created_at.desc` instead.
     * @param {string} updatedAt - Exact-match filter on `updated_at`. The exact timestamp of the last change.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsList(listId: string, id?: string, productId?: string, sku?: string, name?: string, image?: string, quantity?: number, unit?: string, price?: number, taxRate?: number, costCenterId?: string, positionTexts?: string, customSku?: string, categorySlug?: string, subcategorySlug?: string, position?: number, metadata?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    orderlistsItemsList(
        paramsOrFirst: { listId: string, id?: string, productId?: string, sku?: string, name?: string, image?: string, quantity?: number, unit?: string, price?: number, taxRate?: number, costCenterId?: string, positionTexts?: string, customSku?: string, categorySlug?: string, subcategorySlug?: string, position?: number, metadata?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (number)?, (number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, id?: string, productId?: string, sku?: string, name?: string, image?: string, quantity?: number, unit?: string, price?: number, taxRate?: number, costCenterId?: string, positionTexts?: string, customSku?: string, categorySlug?: string, subcategorySlug?: string, position?: number, metadata?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id?: string, productId?: string, sku?: string, name?: string, image?: string, quantity?: number, unit?: string, price?: number, taxRate?: number, costCenterId?: string, positionTexts?: string, customSku?: string, categorySlug?: string, subcategorySlug?: string, position?: number, metadata?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string,
                productId: rest[1] as string,
                sku: rest[2] as string,
                name: rest[3] as string,
                image: rest[4] as string,
                quantity: rest[5] as number,
                unit: rest[6] as string,
                price: rest[7] as number,
                taxRate: rest[8] as number,
                costCenterId: rest[9] as string,
                positionTexts: rest[10] as string,
                customSku: rest[11] as string,
                categorySlug: rest[12] as string,
                subcategorySlug: rest[13] as string,
                position: rest[14] as number,
                metadata: rest[15] as string,
                createdAt: rest[16] as string,
                updatedAt: rest[17] as string,
                limit: rest[18] as number,
                offset: rest[19] as number,
                order: rest[20] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;
        const productId = params.productId;
        const sku = params.sku;
        const name = params.name;
        const image = params.image;
        const quantity = params.quantity;
        const unit = params.unit;
        const price = params.price;
        const taxRate = params.taxRate;
        const costCenterId = params.costCenterId;
        const positionTexts = params.positionTexts;
        const customSku = params.customSku;
        const categorySlug = params.categorySlug;
        const subcategorySlug = params.subcategorySlug;
        const position = params.position;
        const metadata = params.metadata;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof positionTexts !== 'undefined') {
            apiPayload['position_texts'] = positionTexts;
        }
        if (typeof customSku !== 'undefined') {
            apiPayload['custom_sku'] = customSku;
        }
        if (typeof categorySlug !== 'undefined') {
            apiPayload['category_slug'] = categorySlug;
        }
        if (typeof subcategorySlug !== 'undefined') {
            apiPayload['subcategory_slug'] = subcategorySlug;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
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
     * A position is a whole saved line, not a pointer at a product. `name` is required and one of `product_id` / `sku` must be set — the two things the database itself insists on — and everything else is a snapshot of what the buyer saw. Nothing here deduplicates: adding the same article twice makes two positions, because it is the CART that merges lines by product and price, not the list. The new row takes the list's current position COUNT unless the payload names a `position` of its own, so it collides with an existing number whenever an earlier position was deleted from the middle. The list's `updated_at` is touched, which is what the default sort of GET /orderlists reads.
     *
     * @param {string} params.listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} params.name - The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
     * @param {string} params.categorySlug - The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
     * @param {string} params.costCenterId - The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
     * @param {string} params.customSku - The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
     * @param {string} params.image - The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
     * @param {object} params.metadata - Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
     * @param {number} params.position - Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
     * @param {string[]} params.positionTexts - Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
     * @param {number} params.price - Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
     * @param {string} params.productId - The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
     * @param {number} params.quantity - How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
     * @param {string} params.sku - The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
     * @param {string} params.subcategorySlug - The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
     * @param {number} params.taxRate - The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
     * @param {string} params.unit - The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsItemsCreate(params: { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string }): Promise<Models.Error>;
    /**
     * A position is a whole saved line, not a pointer at a product. `name` is required and one of `product_id` / `sku` must be set — the two things the database itself insists on — and everything else is a snapshot of what the buyer saw. Nothing here deduplicates: adding the same article twice makes two positions, because it is the CART that merges lines by product and price, not the list. The new row takes the list's current position COUNT unless the payload names a `position` of its own, so it collides with an existing number whenever an earlier position was deleted from the middle. The list's `updated_at` is touched, which is what the default sort of GET /orderlists reads.
     *
     * @param {string} listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} name - The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
     * @param {string} categorySlug - The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
     * @param {string} costCenterId - The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
     * @param {string} customSku - The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
     * @param {string} image - The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
     * @param {object} metadata - Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
     * @param {number} position - Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
     * @param {string[]} positionTexts - Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
     * @param {number} price - Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
     * @param {string} productId - The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
     * @param {number} quantity - How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
     * @param {string} sku - The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
     * @param {string} subcategorySlug - The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
     * @param {number} taxRate - The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
     * @param {string} unit - The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsCreate(listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string): Promise<Models.Error>;
    orderlistsItemsCreate(
        paramsOrFirst: { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (number)?, (string[])?, (number)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, name: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                name: rest[0] as string,
                categorySlug: rest[1] as string,
                costCenterId: rest[2] as string,
                customSku: rest[3] as string,
                image: rest[4] as string,
                metadata: rest[5] as object,
                position: rest[6] as number,
                positionTexts: rest[7] as string[],
                price: rest[8] as number,
                productId: rest[9] as string,
                quantity: rest[10] as number,
                sku: rest[11] as string,
                subcategorySlug: rest[12] as string,
                taxRate: rest[13] as number,
                unit: rest[14] as string            
            };
        }
        
        const listId = params.listId;
        const name = params.name;
        const categorySlug = params.categorySlug;
        const costCenterId = params.costCenterId;
        const customSku = params.customSku;
        const image = params.image;
        const metadata = params.metadata;
        const position = params.position;
        const positionTexts = params.positionTexts;
        const price = params.price;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const subcategorySlug = params.subcategorySlug;
        const taxRate = params.taxRate;
        const unit = params.unit;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof categorySlug !== 'undefined') {
            apiPayload['category_slug'] = categorySlug;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof customSku !== 'undefined') {
            apiPayload['custom_sku'] = customSku;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof positionTexts !== 'undefined') {
            apiPayload['position_texts'] = positionTexts;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof subcategorySlug !== 'undefined') {
            apiPayload['subcategory_slug'] = subcategorySlug;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
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
     * Set semantics: what you send becomes the list's positions and everything else is deleted. Ids are NOT preserved — every row is dropped and rewritten, so a client holding position ids must re-read them — and an empty array empties the list. Both guards run before the first delete, so an oversized or unknown-article replace answers 400 with the list still holding exactly what it held. It is not a renumbering call: an entry that names no `position` takes its array index, one that names its own keeps it, so the array order is the default rather than an override. Writing is narrower than reading: the owner may always replace, and anyone else only when the list is shared with their own organization AND the tenant turned `shared_lists_editable` on — otherwise a caller who can READ the list through the sharing rule is answered 403 here. The delete-then-insert is not wrapped in a transaction of its own, so a client should treat a failed replace as a list of unknown contents and re-read it rather than retry blind. The answer is the whole new set in the same paged envelope every other collection uses, with `limit`, `offset` and `total` describing exactly what was written; the list's `updated_at` is touched, which moves it to the front of the default GET /orderlists page.
     *
     * @param {string} params.listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {Models.OrderListItemInput[]} params.items - The new full set of positions, in the order they should carry. An empty array empties the list. Every existing position is deleted and rewritten, so ids are NOT preserved. The array order is the DEFAULT and not an override: an entry that names no `position` takes its index, one that names its own keeps it — so a replace does not by itself renumber the list from zero.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsItemsReplace(params: { listId: string, items: Models.OrderListItemInput[] }): Promise<Models.Error>;
    /**
     * Set semantics: what you send becomes the list's positions and everything else is deleted. Ids are NOT preserved — every row is dropped and rewritten, so a client holding position ids must re-read them — and an empty array empties the list. Both guards run before the first delete, so an oversized or unknown-article replace answers 400 with the list still holding exactly what it held. It is not a renumbering call: an entry that names no `position` takes its array index, one that names its own keeps it, so the array order is the default rather than an override. Writing is narrower than reading: the owner may always replace, and anyone else only when the list is shared with their own organization AND the tenant turned `shared_lists_editable` on — otherwise a caller who can READ the list through the sharing rule is answered 403 here. The delete-then-insert is not wrapped in a transaction of its own, so a client should treat a failed replace as a list of unknown contents and re-read it rather than retry blind. The answer is the whole new set in the same paged envelope every other collection uses, with `limit`, `offset` and `total` describing exactly what was written; the list's `updated_at` is touched, which moves it to the front of the default GET /orderlists page.
     *
     * @param {string} listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {Models.OrderListItemInput[]} items - The new full set of positions, in the order they should carry. An empty array empties the list. Every existing position is deleted and rewritten, so ids are NOT preserved. The array order is the DEFAULT and not an override: an entry that names no `position` takes its index, one that names its own keeps it — so a replace does not by itself renumber the list from zero.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsReplace(listId: string, items: Models.OrderListItemInput[]): Promise<Models.Error>;
    orderlistsItemsReplace(
        paramsOrFirst: { listId: string, items: Models.OrderListItemInput[] } | string,
        ...rest: [(Models.OrderListItemInput[])?]    
    ): Promise<Models.Error> {
        let params: { listId: string, items: Models.OrderListItemInput[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, items: Models.OrderListItemInput[] };
        } else {
            params = {
                listId: paramsOrFirst as string,
                items: rest[0] as Models.OrderListItemInput[]            
            };
        }
        
        const listId = params.listId;
        const items = params.items;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"categorySlug":{"wire":"category_slug","children":null},"costCenterId":{"wire":"cost_center_id","children":null},"customSku":{"wire":"custom_sku","children":null},"positionTexts":{"wire":"position_texts","children":null},"productId":{"wire":"product_id","children":null},"subcategorySlug":{"wire":"subcategory_slug","children":null},"taxRate":{"wire":"tax_rate","children":null}});
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
     * Removes one saved line and takes nothing with it — no foreign key in this app points at a position. What it leaves behind is the gap: every remaining row keeps the number it had, and the next add takes the list's COUNT as its `position`, so a removal from the middle sets up a later collision. A bulk replace is the only call that rewrites the sequence. Outside this app, a cart line or order position built from this row still carries `order_list_item_id` in its snapshot — a jsonb value, not a reference — so it is simply left naming a row that is gone. The list's `updated_at` is touched.
     *
     * @param {string} params.listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} params.id - The position, by id. A position that belongs to another list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsItemsDelete(params: { listId: string, id: string }): Promise<Models.Error>;
    /**
     * Removes one saved line and takes nothing with it — no foreign key in this app points at a position. What it leaves behind is the gap: every remaining row keeps the number it had, and the next add takes the list's COUNT as its `position`, so a removal from the middle sets up a later collision. A bulk replace is the only call that rewrites the sequence. Outside this app, a cart line or order position built from this row still carries `order_list_item_id` in its snapshot — a jsonb value, not a reference — so it is simply left naming a row that is gone. The list's `updated_at` is touched.
     *
     * @param {string} listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} id - The position, by id. A position that belongs to another list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsDelete(listId: string, id: string): Promise<Models.Error>;
    orderlistsItemsDelete(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * One saved line by its own id, in exactly the shape the collection returns — there is nothing here the collection does not already give you, so this is the read for a client that holds a position id and nothing else. The list in the path is enforced rather than decorative: a position that belongs to a different list answers 404 rather than the row, which is what stops an id lifting a position out of a list the caller may not read. An unknown or unreadable list is a 404 before the position is looked at.
     *
     * @param {string} params.listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} params.id - The position, by id. A position that belongs to another list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsItemsGet(params: { listId: string, id: string }): Promise<Models.Error>;
    /**
     * One saved line by its own id, in exactly the shape the collection returns — there is nothing here the collection does not already give you, so this is the read for a client that holds a position id and nothing else. The list in the path is enforced rather than decorative: a position that belongs to a different list answers 404 rather than the row, which is what stops an id lifting a position out of a list the caller may not read. An unknown or unreadable list is a 404 before the position is looked at.
     *
     * @param {string} listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} id - The position, by id. A position that belongs to another list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsGet(listId: string, id: string): Promise<Models.Error>;
    orderlistsItemsGet(
        paramsOrFirst: { listId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * A partial update: omitted fields keep the value they have, and an explicit null is the only way to clear one. `quantity` is re-checked (> 0), and where `reject_unknown_articles` is on the article is re-checked against the MERGED row rather than the payload — so changing only the name cannot smuggle an unknown article past the guard that the create applied. `position` is set, not shifted: writing 3 puts this row at 3 and moves nothing else, which is the other way two positions come to share a number. The list's `updated_at` is touched.
     *
     * @param {string} params.listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} params.id - The position, by id. A position that belongs to another list answers 404.
     * @param {string} params.categorySlug - The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
     * @param {string} params.costCenterId - The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
     * @param {string} params.customSku - The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
     * @param {string} params.image - The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
     * @param {object} params.metadata - Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
     * @param {string} params.name - The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
     * @param {number} params.position - Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
     * @param {string[]} params.positionTexts - Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
     * @param {number} params.price - Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
     * @param {string} params.productId - The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
     * @param {number} params.quantity - How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
     * @param {string} params.sku - The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
     * @param {string} params.subcategorySlug - The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
     * @param {number} params.taxRate - The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
     * @param {string} params.unit - The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    orderlistsItemsUpdate(params: { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string }): Promise<Models.Error>;
    /**
     * A partial update: omitted fields keep the value they have, and an explicit null is the only way to clear one. `quantity` is re-checked (> 0), and where `reject_unknown_articles` is on the article is re-checked against the MERGED row rather than the payload — so changing only the name cannot smuggle an unknown article past the guard that the create applied. `position` is set, not shifted: writing 3 puts this row at 3 and moves nothing else, which is the other way two positions come to share a number. The list's `updated_at` is touched.
     *
     * @param {string} listId - The list the position belongs to. An id no list in this tenant has — or one the caller may not read — answers 404.
     * @param {string} id - The position, by id. A position that belongs to another list answers 404.
     * @param {string} categorySlug - The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
     * @param {string} costCenterId - The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
     * @param {string} customSku - The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
     * @param {string} image - The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
     * @param {object} metadata - Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
     * @param {string} name - The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
     * @param {number} position - Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
     * @param {string[]} positionTexts - Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
     * @param {number} price - Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
     * @param {string} productId - The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
     * @param {number} quantity - How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
     * @param {string} sku - The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
     * @param {string} subcategorySlug - The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
     * @param {number} taxRate - The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
     * @param {string} unit - The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    orderlistsItemsUpdate(listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string): Promise<Models.Error>;
    orderlistsItemsUpdate(
        paramsOrFirst: { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (number)?, (string[])?, (number)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string, categorySlug?: string, costCenterId?: string, customSku?: string, image?: string, metadata?: object, name?: string, position?: number, positionTexts?: string[], price?: number, productId?: string, quantity?: number, sku?: string, subcategorySlug?: string, taxRate?: number, unit?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string,
                categorySlug: rest[1] as string,
                costCenterId: rest[2] as string,
                customSku: rest[3] as string,
                image: rest[4] as string,
                metadata: rest[5] as object,
                name: rest[6] as string,
                position: rest[7] as number,
                positionTexts: rest[8] as string[],
                price: rest[9] as number,
                productId: rest[10] as string,
                quantity: rest[11] as number,
                sku: rest[12] as string,
                subcategorySlug: rest[13] as string,
                taxRate: rest[14] as number,
                unit: rest[15] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;
        const categorySlug = params.categorySlug;
        const costCenterId = params.costCenterId;
        const customSku = params.customSku;
        const image = params.image;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const positionTexts = params.positionTexts;
        const price = params.price;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const subcategorySlug = params.subcategorySlug;
        const taxRate = params.taxRate;
        const unit = params.unit;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orderlists/{list_id}/items/{id}'.replace('{list_id}', listId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof categorySlug !== 'undefined') {
            apiPayload['category_slug'] = categorySlug;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof customSku !== 'undefined') {
            apiPayload['custom_sku'] = customSku;
        }
        if (typeof image !== 'undefined') {
            apiPayload['image'] = image;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof positionTexts !== 'undefined') {
            apiPayload['position_texts'] = positionTexts;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof subcategorySlug !== 'undefined') {
            apiPayload['subcategory_slug'] = subcategorySlug;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
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
