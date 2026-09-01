import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PriceListStatus } from '../enums/price-list-status';
import { PriceListTaxBasis } from '../enums/price-list-tax-basis';
import { PriceEntryType } from '../enums/price-entry-type';
import { PriceEndingRule } from '../enums/price-ending-rule';
import { PriceEntriesBulkMode } from '../enums/price-entries-bulk-mode';
import { PricesVocabulariesGetName } from '../enums/prices-vocabularies-get-name';

export class Prices {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * One page of the tenant's price list HEADERS — code, currency, tax basis, status, priority, validity window, buyer scope and the default flag. Never the prices themselves: those are a separate page per list (`GET /prices/lists/{list_id}/entries`).
     * 
     * Every filter is an EXACT match on a column, ANDed together; a query key that is not a column is dropped in silence, which is why the answer echoes `filter`. The scope, currency and status filters are the useful ones, because between them they narrow the set to the candidates a resolve call in a given currency for a given buyer can draw on at all.
     * 
     * Market is deliberately not among them: a list is scoped to a market by an assignment, not a column, and the `X-Revenexx-Market` header is what narrows the set — this admin listing shows the tenant's lists whatever their market.
     *
     * @param {string} params.id - Filter to one list by id. The same row `GET /prices/lists/{id}` returns, in page form.
     * @param {string} params.code - Filter by the exact list code — the unique per-tenant handle every integration joins on.
     * @param {string} params.name - Filter by the exact operator-facing name. Exact match, not a search: prefer `code`.
     * @param {string} params.description - Filter by the exact description text. Exact match, not a search.
     * @param {string} params.currency - Filter to one ISO 4217 currency. Resolution only ever considers lists in the currency of the call, so this is how to see the set a given quote can draw on.
     * @param {PriceListStatus} params.status - Filter by status. Only `active` lists take part in resolution, so `?status=active` is the candidate set.
     * @param {number} params.priority - Filter to one exact priority value — the tie-break within a specificity group.
     * @param {boolean} params.isDefault - Filter to the default list — the one `prices.lists.make-default` moves the flag onto. `?is_default=true` should answer exactly one row; two is the state that leaves a tie unsettled.
     * @param {PriceListTaxBasis} params.taxBasis - Filter by declared basis. `?tax_basis=` cannot select the lists that state NONE (a filter is an equality, never a null test) — those are the lists that inherit the tenant’s `tax_inclusive_default`, and the resolve answer names them with `tax_basis_source: "tenant"`.
     * @param {boolean} params.taxIncluded - Filter by the legacy gross mirror. `?tax_included=true` finds the lists whose basis was stated the old way.
     * @param {boolean} params.requiresAuth - Filter to the lists that resolve only for an authenticated buyer — what an anonymous storefront will never see.
     * @param {string} params.contactId - Filter to the lists scoped to one contact — the most specific buyer scope there is.
     * @param {string} params.organizationId - Filter to the lists scoped to one organization.
     * @param {string} params.channelId - Filter to the lists scoped to one sales channel.
     * @param {string} params.validFrom - Exact equality on the start of the list’s validity window — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} params.validUntil - Exact equality on the end of the list’s validity window — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} params.createdAt - Exact equality on the creation instant — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} params.updatedAt - Exact equality on the last change — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesListsList(params?: { id?: string, code?: string, name?: string, description?: string, currency?: string, status?: PriceListStatus, priority?: number, isDefault?: boolean, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, requiresAuth?: boolean, contactId?: string, organizationId?: string, channelId?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * One page of the tenant's price list HEADERS — code, currency, tax basis, status, priority, validity window, buyer scope and the default flag. Never the prices themselves: those are a separate page per list (`GET /prices/lists/{list_id}/entries`).
     * 
     * Every filter is an EXACT match on a column, ANDed together; a query key that is not a column is dropped in silence, which is why the answer echoes `filter`. The scope, currency and status filters are the useful ones, because between them they narrow the set to the candidates a resolve call in a given currency for a given buyer can draw on at all.
     * 
     * Market is deliberately not among them: a list is scoped to a market by an assignment, not a column, and the `X-Revenexx-Market` header is what narrows the set — this admin listing shows the tenant's lists whatever their market.
     *
     * @param {string} id - Filter to one list by id. The same row `GET /prices/lists/{id}` returns, in page form.
     * @param {string} code - Filter by the exact list code — the unique per-tenant handle every integration joins on.
     * @param {string} name - Filter by the exact operator-facing name. Exact match, not a search: prefer `code`.
     * @param {string} description - Filter by the exact description text. Exact match, not a search.
     * @param {string} currency - Filter to one ISO 4217 currency. Resolution only ever considers lists in the currency of the call, so this is how to see the set a given quote can draw on.
     * @param {PriceListStatus} status - Filter by status. Only `active` lists take part in resolution, so `?status=active` is the candidate set.
     * @param {number} priority - Filter to one exact priority value — the tie-break within a specificity group.
     * @param {boolean} isDefault - Filter to the default list — the one `prices.lists.make-default` moves the flag onto. `?is_default=true` should answer exactly one row; two is the state that leaves a tie unsettled.
     * @param {PriceListTaxBasis} taxBasis - Filter by declared basis. `?tax_basis=` cannot select the lists that state NONE (a filter is an equality, never a null test) — those are the lists that inherit the tenant’s `tax_inclusive_default`, and the resolve answer names them with `tax_basis_source: "tenant"`.
     * @param {boolean} taxIncluded - Filter by the legacy gross mirror. `?tax_included=true` finds the lists whose basis was stated the old way.
     * @param {boolean} requiresAuth - Filter to the lists that resolve only for an authenticated buyer — what an anonymous storefront will never see.
     * @param {string} contactId - Filter to the lists scoped to one contact — the most specific buyer scope there is.
     * @param {string} organizationId - Filter to the lists scoped to one organization.
     * @param {string} channelId - Filter to the lists scoped to one sales channel.
     * @param {string} validFrom - Exact equality on the start of the list’s validity window — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} validUntil - Exact equality on the end of the list’s validity window — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} createdAt - Exact equality on the creation instant — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} updatedAt - Exact equality on the last change — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsList(id?: string, code?: string, name?: string, description?: string, currency?: string, status?: PriceListStatus, priority?: number, isDefault?: boolean, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, requiresAuth?: boolean, contactId?: string, organizationId?: string, channelId?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    pricesListsList(
        paramsOrFirst?: { id?: string, code?: string, name?: string, description?: string, currency?: string, status?: PriceListStatus, priority?: number, isDefault?: boolean, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, requiresAuth?: boolean, contactId?: string, organizationId?: string, channelId?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (PriceListStatus)?, (number)?, (boolean)?, (PriceListTaxBasis)?, (boolean)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id?: string, code?: string, name?: string, description?: string, currency?: string, status?: PriceListStatus, priority?: number, isDefault?: boolean, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, requiresAuth?: boolean, contactId?: string, organizationId?: string, channelId?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, name?: string, description?: string, currency?: string, status?: PriceListStatus, priority?: number, isDefault?: boolean, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, requiresAuth?: boolean, contactId?: string, organizationId?: string, channelId?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                description: rest[2] as string,
                currency: rest[3] as string,
                status: rest[4] as PriceListStatus,
                priority: rest[5] as number,
                isDefault: rest[6] as boolean,
                taxBasis: rest[7] as PriceListTaxBasis,
                taxIncluded: rest[8] as boolean,
                requiresAuth: rest[9] as boolean,
                contactId: rest[10] as string,
                organizationId: rest[11] as string,
                channelId: rest[12] as string,
                validFrom: rest[13] as string,
                validUntil: rest[14] as string,
                createdAt: rest[15] as string,
                updatedAt: rest[16] as string,
                limit: rest[17] as number,
                offset: rest[18] as number,
                order: rest[19] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const description = params.description;
        const currency = params.currency;
        const status = params.status;
        const priority = params.priority;
        const isDefault = params.isDefault;
        const taxBasis = params.taxBasis;
        const taxIncluded = params.taxIncluded;
        const requiresAuth = params.requiresAuth;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const channelId = params.channelId;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/prices/lists';
        const apiPayload: Payload = {};
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
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof taxBasis !== 'undefined') {
            apiPayload['tax_basis'] = taxBasis;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
        }
        if (typeof requiresAuth !== 'undefined') {
            apiPayload['requires_auth'] = requiresAuth;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * Opens an empty book, and states in one row the four things that decide whether it will ever price anything: its currency, its priority within a specificity group, its validity window, and its buyer scope (contact, organization or channel — leave all three empty for a list open to everyone).
     * 
     * `code` and `name` are the only fields required — they are the two columns with no default — and `code` is unique per tenant, so a code already in use is a 409 rather than an overwrite of prices somebody is selling on.
     * 
     * Everything else has a default, and two of them are worth choosing rather than accepting. `currency` defaults to EUR and is the currency of every amount in the list, since entries carry none; a resolve call only considers lists in the currency it is asked about, and nothing is ever converted. `tax_basis` defaults to NOTHING, which means the amounts inherit the tenant's `tax_inclusive_default` — state net or gross here and the answer stops depending on a tenant setting somebody may change later.
     * 
     * `is_default: true` here does NOT demote the list that currently holds the flag: you end up with two defaults, and which of them prices an item is left to the tenant's tie-break. Create the list, then move the flag with `POST /prices/lists/{list_id}/make-default`.
     * 
     * A new list prices nothing at all until it has entries, so it is inert until you add them — which makes it safe to create one ahead of the prices that will fill it.
     *
     * @param {string} params.code - Unique list code per tenant — the handle every import and integration addresses this list by. A code already in use answers 409.
     * @param {string} params.name - Operator-facing name, shown wherever a human picks a list.
     * @param {string} params.channelId - Scope: only this sales channel. Beats the open lists, loses to contact and organization.
     * @param {string} params.contactId - Scope: only this contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
     * @param {string} params.currency - ISO 4217 code (default EUR) — the currency of EVERY amount in this list, since entries carry none of their own. Resolution only considers lists matching the currency of the call; nothing is ever converted.
     * @param {string} params.description - Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
     * @param {boolean} params.isDefault - The fallback list. Within its group it sorts LAST, so it wins only where nothing more specific priced the item. Use prices.lists.make-default to move the flag rather than setting it here — two defaults leave a tie to row order.
     * @param {object} params.labels - Localised names, keyed by language tag — {"de": "Händlerpreise", "en": "Dealer prices"}. Omit to show `name` everywhere.
     * @param {object} params.metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours — ERP provenance is the usual content.
     * @param {string} params.organizationId - Scope: only buyers of this organization. Beats channel-scoped and open lists.
     * @param {number} params.priority - Tie-break WITHIN a specificity group (higher wins, default 0). It never beats scope: an organization list at 0 still wins over an open list at 100.
     * @param {boolean} params.requiresAuth - Gate: when true the list resolves only for an authenticated buyer (contact or organization context); anonymous resolve calls get on_request. Default false (open to everyone).
     * @param {PriceListStatus} params.status - Default 'active' — only active lists resolve. 'inactive' retires a list without deleting its prices.
     * @param {PriceListTaxBasis} params.taxBasis - Whether the amounts in this list are net (tax excluded) or gross (tax included) — the one fact a price cannot be without. Omit (null) to inherit the tenant's tax_inclusive_default setting; the resolve answer names which of the two decided under tax_basis_source.
     * @param {boolean} params.taxIncluded - LEGACY mirror of tax_basis. false is the column default and is NOT read as a statement of intent; true is read as gross, and only where tax_basis is null. Prefer tax_basis.
     * @param {string} params.validFrom - Start of the validity window of the WHOLE list (ISO 8601); null = open-ended. Outside it the list is not a candidate at all.
     * @param {string} params.validUntil - End of the validity window of the whole list; null = open-ended. Lets a season expire on its own instead of being deactivated by hand.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesListsCreate(params: { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string }): Promise<Models.Error>;
    /**
     * Opens an empty book, and states in one row the four things that decide whether it will ever price anything: its currency, its priority within a specificity group, its validity window, and its buyer scope (contact, organization or channel — leave all three empty for a list open to everyone).
     * 
     * `code` and `name` are the only fields required — they are the two columns with no default — and `code` is unique per tenant, so a code already in use is a 409 rather than an overwrite of prices somebody is selling on.
     * 
     * Everything else has a default, and two of them are worth choosing rather than accepting. `currency` defaults to EUR and is the currency of every amount in the list, since entries carry none; a resolve call only considers lists in the currency it is asked about, and nothing is ever converted. `tax_basis` defaults to NOTHING, which means the amounts inherit the tenant's `tax_inclusive_default` — state net or gross here and the answer stops depending on a tenant setting somebody may change later.
     * 
     * `is_default: true` here does NOT demote the list that currently holds the flag: you end up with two defaults, and which of them prices an item is left to the tenant's tie-break. Create the list, then move the flag with `POST /prices/lists/{list_id}/make-default`.
     * 
     * A new list prices nothing at all until it has entries, so it is inert until you add them — which makes it safe to create one ahead of the prices that will fill it.
     *
     * @param {string} code - Unique list code per tenant — the handle every import and integration addresses this list by. A code already in use answers 409.
     * @param {string} name - Operator-facing name, shown wherever a human picks a list.
     * @param {string} channelId - Scope: only this sales channel. Beats the open lists, loses to contact and organization.
     * @param {string} contactId - Scope: only this contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
     * @param {string} currency - ISO 4217 code (default EUR) — the currency of EVERY amount in this list, since entries carry none of their own. Resolution only considers lists matching the currency of the call; nothing is ever converted.
     * @param {string} description - Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
     * @param {boolean} isDefault - The fallback list. Within its group it sorts LAST, so it wins only where nothing more specific priced the item. Use prices.lists.make-default to move the flag rather than setting it here — two defaults leave a tie to row order.
     * @param {object} labels - Localised names, keyed by language tag — {"de": "Händlerpreise", "en": "Dealer prices"}. Omit to show `name` everywhere.
     * @param {object} metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours — ERP provenance is the usual content.
     * @param {string} organizationId - Scope: only buyers of this organization. Beats channel-scoped and open lists.
     * @param {number} priority - Tie-break WITHIN a specificity group (higher wins, default 0). It never beats scope: an organization list at 0 still wins over an open list at 100.
     * @param {boolean} requiresAuth - Gate: when true the list resolves only for an authenticated buyer (contact or organization context); anonymous resolve calls get on_request. Default false (open to everyone).
     * @param {PriceListStatus} status - Default 'active' — only active lists resolve. 'inactive' retires a list without deleting its prices.
     * @param {PriceListTaxBasis} taxBasis - Whether the amounts in this list are net (tax excluded) or gross (tax included) — the one fact a price cannot be without. Omit (null) to inherit the tenant's tax_inclusive_default setting; the resolve answer names which of the two decided under tax_basis_source.
     * @param {boolean} taxIncluded - LEGACY mirror of tax_basis. false is the column default and is NOT read as a statement of intent; true is read as gross, and only where tax_basis is null. Prefer tax_basis.
     * @param {string} validFrom - Start of the validity window of the WHOLE list (ISO 8601); null = open-ended. Outside it the list is not a candidate at all.
     * @param {string} validUntil - End of the validity window of the whole list; null = open-ended. Lets a season expire on its own instead of being deactivated by hand.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsCreate(code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string): Promise<Models.Error>;
    pricesListsCreate(
        paramsOrFirst: { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (object)?, (object)?, (string)?, (number)?, (boolean)?, (PriceListStatus)?, (PriceListTaxBasis)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, channelId?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                channelId: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                description: rest[4] as string,
                isDefault: rest[5] as boolean,
                labels: rest[6] as object,
                metadata: rest[7] as object,
                organizationId: rest[8] as string,
                priority: rest[9] as number,
                requiresAuth: rest[10] as boolean,
                status: rest[11] as PriceListStatus,
                taxBasis: rest[12] as PriceListTaxBasis,
                taxIncluded: rest[13] as boolean,
                validFrom: rest[14] as string,
                validUntil: rest[15] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const description = params.description;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const priority = params.priority;
        const requiresAuth = params.requiresAuth;
        const status = params.status;
        const taxBasis = params.taxBasis;
        const taxIncluded = params.taxIncluded;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/prices/lists';
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof requiresAuth !== 'undefined') {
            apiPayload['requires_auth'] = requiresAuth;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof taxBasis !== 'undefined') {
            apiPayload['tax_basis'] = taxBasis;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * Gives a tenant the one open list every tenant needs, so nothing has to exist before the first price can be written. Almost nobody calls it: the app runs it by itself on `app.installed`, and the route is the manual re-run — for a tenant installed before that hook existed, or one whose standard list was deleted. Because it is idempotent it is also safe to call from a provisioning script that cannot know which of the two is the case.
     * 
     * What it writes comes from settings, not from constants: the code is the tenant's `default_price_list_code`, the currency its `default_currency`, and the seeded list STATES its tax basis from `tax_inclusive_default` instead of inheriting it, because the one list every tenant gets should not be the ambiguous one.
     * 
     * Idempotent twice over — by that code, and by the existence of ANY default list. So calling it repeatedly is free, changing `default_price_list_code` later never produces a second list, and a tenant that has made some other list the default is left exactly as it is (the answer names that list under `existing`). It writes nothing else: it never demotes, never touches entries, and never repairs a list that is already there.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceListDefaultsResponse>}
     */
    pricesListsDefaults(): Promise<Models.PriceListDefaultsResponse> {

        const apiPath = '/v1/prices/lists/defaults';
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
     * Deletes the list AND every price in it. `price_entries.price_list_id` references this row ON DELETE CASCADE, so the entries go in the same statement: nothing asks, nothing blocks, a book of 40 000 prices deletes exactly as fast as an empty one, and the answer is a bare `{deleted, id}` that never says how many prices went with it.
     * 
     * What that means while a storefront is quoting: from the next resolve call the items this list priced fall through to the next candidate list, and where there is none the answer is `on_request` — "price on request" for something that had a price a second ago, never €0. If the deleted list held the default flag the tenant has no default until one is moved onto another list; re-running `POST /prices/lists/defaults` recreates the standard list only while no other default exists.
     * 
     * This is not the way to take a list out of circulation. `status: "inactive"` does that immediately and reversibly and keeps the prices; deleting is for a list whose contents you are prepared to import again, because nothing here is recoverable.
     *
     * @param {string} params.id - The price list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesListsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * Deletes the list AND every price in it. `price_entries.price_list_id` references this row ON DELETE CASCADE, so the entries go in the same statement: nothing asks, nothing blocks, a book of 40 000 prices deletes exactly as fast as an empty one, and the answer is a bare `{deleted, id}` that never says how many prices went with it.
     * 
     * What that means while a storefront is quoting: from the next resolve call the items this list priced fall through to the next candidate list, and where there is none the answer is `on_request` — "price on request" for something that had a price a second ago, never €0. If the deleted list held the default flag the tenant has no default until one is moved onto another list; re-running `POST /prices/lists/defaults` recreates the standard list only while no other default exists.
     * 
     * This is not the way to take a list out of circulation. `status: "inactive"` does that immediately and reversibly and keeps the prices; deleting is for a list whose contents you are prepared to import again, because nothing here is recoverable.
     *
     * @param {string} id - The price list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsDelete(id: string): Promise<Models.Error>;
    pricesListsDelete(
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * The list HEADER, never its prices: currency, tax basis, buyer scope, priority, validity window and the default flag — the settings that decide WHETHER this list prices a given buyer, before any amount is looked at. Its entries are a separate page (`GET /prices/lists/{list_id}/entries`), because a price book runs to thousands of rows and no read of a list should carry them. This is the admin view and it reads the base table rather than the market-scoped one the resolve call uses, so a list that is invisible in the active market is still returned here.
     *
     * @param {string} params.id - The price list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesListsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * The list HEADER, never its prices: currency, tax basis, buyer scope, priority, validity window and the default flag — the settings that decide WHETHER this list prices a given buyer, before any amount is looked at. Its entries are a separate page (`GET /prices/lists/{list_id}/entries`), because a price book runs to thousands of rows and no read of a list should carry them. This is the admin view and it reads the base table rather than the market-scoped one the resolve call uses, so a list that is invisible in the active market is still returned here.
     *
     * @param {string} id - The price list, by id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsGet(id: string): Promise<Models.Error>;
    pricesListsGet(
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

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
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
     * A partial update: send only what changes, omitted fields keep their value, and a payload with no updatable column at all is refused rather than answered with an unchanged row. There is no draft and no publish step — the next resolve call reads what this one wrote.
     * 
     * Three edits do more than their field names suggest. `currency` re-denominates without converting: entries carry no currency of their own, so 19.90 EUR becomes 19.90 CHF and the whole book is re-priced by one edit. `status: "inactive"` takes the list out of every quote immediately while keeping its prices — the reversible way to stop selling on a list, and the one to reach for instead of deleting it. `code` is the handle imports and integrations address the list by, and a code another list already holds is a 409.
     * 
     * `is_default` behaves here exactly as it does on create: setting it true leaves the incumbent default in place, so use `POST /prices/lists/{list_id}/make-default`, which demotes in the same call.
     *
     * @param {string} params.id - The price list, by id.
     * @param {string} params.channelId - Scope: only this sales channel. Beats the open lists, loses to contact and organization.
     * @param {string} params.code - Unique list code per tenant — the handle every import and integration addresses this list by. A code already in use answers 409.
     * @param {string} params.contactId - Scope: only this contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
     * @param {string} params.currency - ISO 4217 code (default EUR) — the currency of EVERY amount in this list, since entries carry none of their own. Resolution only considers lists matching the currency of the call; nothing is ever converted.
     * @param {string} params.description - Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
     * @param {boolean} params.isDefault - The fallback list. Within its group it sorts LAST, so it wins only where nothing more specific priced the item. Use prices.lists.make-default to move the flag rather than setting it here — two defaults leave a tie to row order.
     * @param {object} params.labels - Localised names, keyed by language tag — {"de": "Händlerpreise", "en": "Dealer prices"}. Omit to show `name` everywhere.
     * @param {object} params.metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours — ERP provenance is the usual content.
     * @param {string} params.name - Operator-facing name, shown wherever a human picks a list.
     * @param {string} params.organizationId - Scope: only buyers of this organization. Beats channel-scoped and open lists.
     * @param {number} params.priority - Tie-break WITHIN a specificity group (higher wins, default 0). It never beats scope: an organization list at 0 still wins over an open list at 100.
     * @param {boolean} params.requiresAuth - Gate: when true the list resolves only for an authenticated buyer (contact or organization context); anonymous resolve calls get on_request. Default false (open to everyone).
     * @param {PriceListStatus} params.status - Default 'active' — only active lists resolve. 'inactive' retires a list without deleting its prices.
     * @param {PriceListTaxBasis} params.taxBasis - Whether the amounts in this list are net (tax excluded) or gross (tax included) — the one fact a price cannot be without. Omit (null) to inherit the tenant's tax_inclusive_default setting; the resolve answer names which of the two decided under tax_basis_source.
     * @param {boolean} params.taxIncluded - LEGACY mirror of tax_basis. false is the column default and is NOT read as a statement of intent; true is read as gross, and only where tax_basis is null. Prefer tax_basis.
     * @param {string} params.validFrom - Start of the validity window of the WHOLE list (ISO 8601); null = open-ended. Outside it the list is not a candidate at all.
     * @param {string} params.validUntil - End of the validity window of the whole list; null = open-ended. Lets a season expire on its own instead of being deactivated by hand.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesListsUpdate(params: { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, name?: string, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string }): Promise<Models.Error>;
    /**
     * A partial update: send only what changes, omitted fields keep their value, and a payload with no updatable column at all is refused rather than answered with an unchanged row. There is no draft and no publish step — the next resolve call reads what this one wrote.
     * 
     * Three edits do more than their field names suggest. `currency` re-denominates without converting: entries carry no currency of their own, so 19.90 EUR becomes 19.90 CHF and the whole book is re-priced by one edit. `status: "inactive"` takes the list out of every quote immediately while keeping its prices — the reversible way to stop selling on a list, and the one to reach for instead of deleting it. `code` is the handle imports and integrations address the list by, and a code another list already holds is a 409.
     * 
     * `is_default` behaves here exactly as it does on create: setting it true leaves the incumbent default in place, so use `POST /prices/lists/{list_id}/make-default`, which demotes in the same call.
     *
     * @param {string} id - The price list, by id.
     * @param {string} channelId - Scope: only this sales channel. Beats the open lists, loses to contact and organization.
     * @param {string} code - Unique list code per tenant — the handle every import and integration addresses this list by. A code already in use answers 409.
     * @param {string} contactId - Scope: only this contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
     * @param {string} currency - ISO 4217 code (default EUR) — the currency of EVERY amount in this list, since entries carry none of their own. Resolution only considers lists matching the currency of the call; nothing is ever converted.
     * @param {string} description - Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
     * @param {boolean} isDefault - The fallback list. Within its group it sorts LAST, so it wins only where nothing more specific priced the item. Use prices.lists.make-default to move the flag rather than setting it here — two defaults leave a tie to row order.
     * @param {object} labels - Localised names, keyed by language tag — {"de": "Händlerpreise", "en": "Dealer prices"}. Omit to show `name` everywhere.
     * @param {object} metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours — ERP provenance is the usual content.
     * @param {string} name - Operator-facing name, shown wherever a human picks a list.
     * @param {string} organizationId - Scope: only buyers of this organization. Beats channel-scoped and open lists.
     * @param {number} priority - Tie-break WITHIN a specificity group (higher wins, default 0). It never beats scope: an organization list at 0 still wins over an open list at 100.
     * @param {boolean} requiresAuth - Gate: when true the list resolves only for an authenticated buyer (contact or organization context); anonymous resolve calls get on_request. Default false (open to everyone).
     * @param {PriceListStatus} status - Default 'active' — only active lists resolve. 'inactive' retires a list without deleting its prices.
     * @param {PriceListTaxBasis} taxBasis - Whether the amounts in this list are net (tax excluded) or gross (tax included) — the one fact a price cannot be without. Omit (null) to inherit the tenant's tax_inclusive_default setting; the resolve answer names which of the two decided under tax_basis_source.
     * @param {boolean} taxIncluded - LEGACY mirror of tax_basis. false is the column default and is NOT read as a statement of intent; true is read as gross, and only where tax_basis is null. Prefer tax_basis.
     * @param {string} validFrom - Start of the validity window of the WHOLE list (ISO 8601); null = open-ended. Outside it the list is not a candidate at all.
     * @param {string} validUntil - End of the validity window of the whole list; null = open-ended. Lets a season expire on its own instead of being deactivated by hand.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsUpdate(id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, name?: string, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string): Promise<Models.Error>;
    pricesListsUpdate(
        paramsOrFirst: { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, name?: string, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (boolean)?, (object)?, (object)?, (string)?, (string)?, (number)?, (boolean)?, (PriceListStatus)?, (PriceListTaxBasis)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, name?: string, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channelId?: string, code?: string, contactId?: string, currency?: string, description?: string, isDefault?: boolean, labels?: object, metadata?: object, name?: string, organizationId?: string, priority?: number, requiresAuth?: boolean, status?: PriceListStatus, taxBasis?: PriceListTaxBasis, taxIncluded?: boolean, validFrom?: string, validUntil?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channelId: rest[0] as string,
                code: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                description: rest[4] as string,
                isDefault: rest[5] as boolean,
                labels: rest[6] as object,
                metadata: rest[7] as object,
                name: rest[8] as string,
                organizationId: rest[9] as string,
                priority: rest[10] as number,
                requiresAuth: rest[11] as boolean,
                status: rest[12] as PriceListStatus,
                taxBasis: rest[13] as PriceListTaxBasis,
                taxIncluded: rest[14] as boolean,
                validFrom: rest[15] as string,
                validUntil: rest[16] as string            
            };
        }
        
        const id = params.id;
        const channelId = params.channelId;
        const code = params.code;
        const contactId = params.contactId;
        const currency = params.currency;
        const description = params.description;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const metadata = params.metadata;
        const name = params.name;
        const organizationId = params.organizationId;
        const priority = params.priority;
        const requiresAuth = params.requiresAuth;
        const status = params.status;
        const taxBasis = params.taxBasis;
        const taxIncluded = params.taxIncluded;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
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
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof requiresAuth !== 'undefined') {
            apiPayload['requires_auth'] = requiresAuth;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof taxBasis !== 'undefined') {
            apiPayload['tax_basis'] = taxBasis;
        }
        if (typeof taxIncluded !== 'undefined') {
            apiPayload['tax_included'] = taxIncluded;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * The prices inside one list, a page at a time. An entry is a rung rather than "the price of a product": it carries a quantity threshold, an amount and a unit, its own validity window, and — where the answer is deliberately no number at all — an `on_request` marker instead of one. So this page is where the quantity tiers, the promo windows and the "ask us" markers of a book are read.
     * 
     * The ladder of one item is the set of entries sharing an identity, so `?product_id=…` (or `?sku=…`) is how a caller reads the Staffel a resolve answer was built from, and `?price_type=on_request` is how the markers are audited. The response also carries `page` and `filter` like every other list, and an unknown list_id answers 404 instead of an empty page.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} params.id - Filter to one entry by id, within this list.
     * @param {string} params.productId - Filter to one product — the whole tier ladder that prices it, in this list.
     * @param {string} params.sku - Filter by exact SKU. Not a prefix and not case-insensitive — the bulk adjust route is where `sku_prefix` lives.
     * @param {PriceEntryType} params.priceType - Filter by entry type. `on_request` selects the explicit no-price markers, which is how to audit what a list refuses to quote.
     * @param {number} params.quantityMin - Filter to one exact tier threshold — `?quantity_min=1` is the base rung of every ladder in the list.
     * @param {number} params.unitPrice - Filter to entries at one exact amount, in the list’s currency and on its tax basis. Equality, not a range — `?unit_price=0` finds the rows nobody has priced yet.
     * @param {string} params.unit - Filter by exact unit of measure.
     * @param {string} params.validFrom - Exact equality on the start of the entry’s own validity — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} params.validUntil - Exact equality on the end of the entry’s own validity — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} params.createdAt - Exact equality on the creation instant — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} params.updatedAt - Exact equality on the last change — a bulk adjust only writes the rows whose price actually moved — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesList(params: { listId: string, id?: string, productId?: string, sku?: string, priceType?: PriceEntryType, quantityMin?: number, unitPrice?: number, unit?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * The prices inside one list, a page at a time. An entry is a rung rather than "the price of a product": it carries a quantity threshold, an amount and a unit, its own validity window, and — where the answer is deliberately no number at all — an `on_request` marker instead of one. So this page is where the quantity tiers, the promo windows and the "ask us" markers of a book are read.
     * 
     * The ladder of one item is the set of entries sharing an identity, so `?product_id=…` (or `?sku=…`) is how a caller reads the Staffel a resolve answer was built from, and `?price_type=on_request` is how the markers are audited. The response also carries `page` and `filter` like every other list, and an unknown list_id answers 404 instead of an empty page.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} id - Filter to one entry by id, within this list.
     * @param {string} productId - Filter to one product — the whole tier ladder that prices it, in this list.
     * @param {string} sku - Filter by exact SKU. Not a prefix and not case-insensitive — the bulk adjust route is where `sku_prefix` lives.
     * @param {PriceEntryType} priceType - Filter by entry type. `on_request` selects the explicit no-price markers, which is how to audit what a list refuses to quote.
     * @param {number} quantityMin - Filter to one exact tier threshold — `?quantity_min=1` is the base rung of every ladder in the list.
     * @param {number} unitPrice - Filter to entries at one exact amount, in the list’s currency and on its tax basis. Equality, not a range — `?unit_price=0` finds the rows nobody has priced yet.
     * @param {string} unit - Filter by exact unit of measure.
     * @param {string} validFrom - Exact equality on the start of the entry’s own validity — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} validUntil - Exact equality on the end of the entry’s own validity — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} createdAt - Exact equality on the creation instant — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {string} updatedAt - Exact equality on the last change — a bulk adjust only writes the rows whose price actually moved — matched to the stored microsecond, not a range. This app publishes no from/until query; narrow a period client-side, or by `order` plus `limit`.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesList(listId: string, id?: string, productId?: string, sku?: string, priceType?: PriceEntryType, quantityMin?: number, unitPrice?: number, unit?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    pricesEntriesList(
        paramsOrFirst: { listId: string, id?: string, productId?: string, sku?: string, priceType?: PriceEntryType, quantityMin?: number, unitPrice?: number, unit?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (PriceEntryType)?, (number)?, (number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, id?: string, productId?: string, sku?: string, priceType?: PriceEntryType, quantityMin?: number, unitPrice?: number, unit?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id?: string, productId?: string, sku?: string, priceType?: PriceEntryType, quantityMin?: number, unitPrice?: number, unit?: string, validFrom?: string, validUntil?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string,
                productId: rest[1] as string,
                sku: rest[2] as string,
                priceType: rest[3] as PriceEntryType,
                quantityMin: rest[4] as number,
                unitPrice: rest[5] as number,
                unit: rest[6] as string,
                validFrom: rest[7] as string,
                validUntil: rest[8] as string,
                createdAt: rest[9] as string,
                updatedAt: rest[10] as string,
                limit: rest[11] as number,
                offset: rest[12] as number,
                order: rest[13] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;
        const productId = params.productId;
        const sku = params.sku;
        const priceType = params.priceType;
        const quantityMin = params.quantityMin;
        const unitPrice = params.unitPrice;
        const unit = params.unit;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{list_id}', listId);
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
        if (typeof priceType !== 'undefined') {
            apiPayload['price_type'] = priceType;
        }
        if (typeof quantityMin !== 'undefined') {
            apiPayload['quantity_min'] = quantityMin;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * Adds ONE rung to one item's quantity ladder in this list. The only thing an entry must have is an identity — `product_id` or `sku`, which the row CHECK enforces; everything else defaults, and one of those defaults deserves a warning.
     * 
     * `unit_price` defaults to **0**. That is the one door through which a zero price enters an app whose whole doctrine is that a missing price is `on_request` and never €0: a create that forgets the amount publishes a free item, and the storefront shows 0.00 instead of "price on request". Send the amount, or send `price_type: "on_request"` where there genuinely is none. The amount is per ONE unit of `unit`, in the LIST's currency (entries carry none) and on the LIST's tax basis, as a decimal in major units — 19.90, never 1990.
     * 
     * Nothing enforces one rung per (item, quantity): create the same `quantity_min` twice and both rows come back in the resolved `tiers`, with the last of them setting the price — an ambiguous ladder no error ever mentions. `quantity_min` defaults to 1 and `price_type` to `standard`.
     * 
     * This route is for a rung at a time. A whole ladder in one call is `POST …/entries/ladder`, an import is `POST …/entries/bulk`, and a complete rewrite of the book is `PUT …/entries`. An unknown `list_id` answers 404 rather than attaching a price to nothing.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {object} params.metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
     * @param {PriceEntryType} params.priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
     * @param {string} params.productId - The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
     * @param {number} params.quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
     * @param {string} params.sku - The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
     * @param {string} params.unit - Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
     * @param {number} params.unitPrice - Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
     * @param {string} params.validFrom - Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
     * @param {string} params.validUntil - End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesCreate(params: { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string }): Promise<Models.Error>;
    /**
     * Adds ONE rung to one item's quantity ladder in this list. The only thing an entry must have is an identity — `product_id` or `sku`, which the row CHECK enforces; everything else defaults, and one of those defaults deserves a warning.
     * 
     * `unit_price` defaults to **0**. That is the one door through which a zero price enters an app whose whole doctrine is that a missing price is `on_request` and never €0: a create that forgets the amount publishes a free item, and the storefront shows 0.00 instead of "price on request". Send the amount, or send `price_type: "on_request"` where there genuinely is none. The amount is per ONE unit of `unit`, in the LIST's currency (entries carry none) and on the LIST's tax basis, as a decimal in major units — 19.90, never 1990.
     * 
     * Nothing enforces one rung per (item, quantity): create the same `quantity_min` twice and both rows come back in the resolved `tiers`, with the last of them setting the price — an ambiguous ladder no error ever mentions. `quantity_min` defaults to 1 and `price_type` to `standard`.
     * 
     * This route is for a rung at a time. A whole ladder in one call is `POST …/entries/ladder`, an import is `POST …/entries/bulk`, and a complete rewrite of the book is `PUT …/entries`. An unknown `list_id` answers 404 rather than attaching a price to nothing.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {object} metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
     * @param {PriceEntryType} priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
     * @param {string} productId - The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
     * @param {number} quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
     * @param {string} sku - The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
     * @param {string} unit - Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
     * @param {number} unitPrice - Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
     * @param {string} validFrom - Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
     * @param {string} validUntil - End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesCreate(listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string): Promise<Models.Error>;
    pricesEntriesCreate(
        paramsOrFirst: { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string } | string,
        ...rest: [(object)?, (PriceEntryType)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                metadata: rest[0] as object,
                priceType: rest[1] as PriceEntryType,
                productId: rest[2] as string,
                quantityMin: rest[3] as number,
                sku: rest[4] as string,
                unit: rest[5] as string,
                unitPrice: rest[6] as number,
                validFrom: rest[7] as string,
                validUntil: rest[8] as string            
            };
        }
        
        const listId = params.listId;
        const metadata = params.metadata;
        const priceType = params.priceType;
        const productId = params.productId;
        const quantityMin = params.quantityMin;
        const sku = params.sku;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof priceType !== 'undefined') {
            apiPayload['price_type'] = priceType;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantityMin !== 'undefined') {
            apiPayload['quantity_min'] = quantityMin;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * Set semantics over the WHOLE list, not over one item: every entry of the list is deleted and the payload becomes the complete new book. It exists for the two callers that genuinely hold the whole book in hand — the Cockpit's table editor, whose save is this call, and a small import. `entries: []` is a legal payload and empties the list — the items it priced then resolve from the next candidate list, or come back `on_request`.
     * 
     * Two consequences of "delete, then insert". Every row is inserted fresh, so all entry ids change and anything holding one is stale afterwards. And it is not a transaction: the deletes go out before the inserts, so a payload that fails part-way through leaves the list holding the rows that landed and none of the ones it had. What protects you is that the whole payload is normalized and validated BEFORE the first delete — a malformed row is a 400 with the list untouched.
     * 
     * For a book of any size, or for adding to one you want to keep, use `POST …/entries/bulk`: it upserts in chunks and never wipes.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {Models.PriceEntryReplaceItem[]} params.entries - The complete new entry set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesReplace(params: { listId: string, entries: Models.PriceEntryReplaceItem[] }): Promise<Models.Error>;
    /**
     * Set semantics over the WHOLE list, not over one item: every entry of the list is deleted and the payload becomes the complete new book. It exists for the two callers that genuinely hold the whole book in hand — the Cockpit's table editor, whose save is this call, and a small import. `entries: []` is a legal payload and empties the list — the items it priced then resolve from the next candidate list, or come back `on_request`.
     * 
     * Two consequences of "delete, then insert". Every row is inserted fresh, so all entry ids change and anything holding one is stale afterwards. And it is not a transaction: the deletes go out before the inserts, so a payload that fails part-way through leaves the list holding the rows that landed and none of the ones it had. What protects you is that the whole payload is normalized and validated BEFORE the first delete — a malformed row is a 400 with the list untouched.
     * 
     * For a book of any size, or for adding to one you want to keep, use `POST …/entries/bulk`: it upserts in chunks and never wipes.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {Models.PriceEntryReplaceItem[]} entries - The complete new entry set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesReplace(listId: string, entries: Models.PriceEntryReplaceItem[]): Promise<Models.Error>;
    pricesEntriesReplace(
        paramsOrFirst: { listId: string, entries: Models.PriceEntryReplaceItem[] } | string,
        ...rest: [(Models.PriceEntryReplaceItem[])?]    
    ): Promise<Models.Error> {
        let params: { listId: string, entries: Models.PriceEntryReplaceItem[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, entries: Models.PriceEntryReplaceItem[] };
        } else {
            params = {
                listId: paramsOrFirst as string,
                entries: rest[0] as Models.PriceEntryReplaceItem[]            
            };
        }
        
        const listId = params.listId;
        const entries = params.entries;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof entries === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entries"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof entries !== 'undefined') {
            apiPayload['entries'] = Client.toWireKeys(entries, {"priceType":{"wire":"price_type","children":null},"productId":{"wire":"product_id","children":null},"quantityMin":{"wire":"quantity_min","children":null},"unitPrice":{"wire":"unit_price","children":null},"validFrom":{"wire":"valid_from","children":null},"validUntil":{"wire":"valid_until","children":null}});
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
     * Moves every priced entry of the list at once, in whichever of the two ways a merchant thinks about a price change: `percent` for a relative one (5 raises everything by 5 %) or `amount` for a flat one added to every unit price. One or the other, never both, and `sku_prefix` narrows the change to part of the book. On-request entries are never touched, because a percentage of "ask us" is not a number.
     * 
     * The other half of a bulk change is what the arithmetic leaves behind: a 7 % increase turns 19.90 into 21.293, which no merchant prints. Results are therefore rounded to the tenant's price_precision/rounding_mode and then snapped to a declared merchant price ending — x.99, x.95, a whole number — either the one this call names or the tenant's `bulk_adjust_rounding`. dry_run answers the same preview and writes nothing, which is what the Cockpit dialog shows before it commits.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {number} params.amount - Absolute change added to every unit price, in the list's currency.
     * @param {boolean} params.dryRun - true writes nothing and answers the same preview — what the Cockpit dialog shows before it commits.
     * @param {number} params.percent - Relative change in percent: 5 raises by 5 %, -10 cuts by 10 %.
     * @param {PriceEndingRule} params.rounding - Ending the computed prices snap to (nearest match). Omit to use the tenant's bulk_adjust_rounding setting.
     * @param {string} params.skuPrefix - Restrict the change to entries whose SKU starts with this (a prefix, case-sensitive, no wildcards). Entries identified only by product_id never match a prefix. Omit to change the whole list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesAdjust(params: { listId: string, amount?: number, dryRun?: boolean, percent?: number, rounding?: PriceEndingRule, skuPrefix?: string }): Promise<Models.Error>;
    /**
     * Moves every priced entry of the list at once, in whichever of the two ways a merchant thinks about a price change: `percent` for a relative one (5 raises everything by 5 %) or `amount` for a flat one added to every unit price. One or the other, never both, and `sku_prefix` narrows the change to part of the book. On-request entries are never touched, because a percentage of "ask us" is not a number.
     * 
     * The other half of a bulk change is what the arithmetic leaves behind: a 7 % increase turns 19.90 into 21.293, which no merchant prints. Results are therefore rounded to the tenant's price_precision/rounding_mode and then snapped to a declared merchant price ending — x.99, x.95, a whole number — either the one this call names or the tenant's `bulk_adjust_rounding`. dry_run answers the same preview and writes nothing, which is what the Cockpit dialog shows before it commits.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {number} amount - Absolute change added to every unit price, in the list's currency.
     * @param {boolean} dryRun - true writes nothing and answers the same preview — what the Cockpit dialog shows before it commits.
     * @param {number} percent - Relative change in percent: 5 raises by 5 %, -10 cuts by 10 %.
     * @param {PriceEndingRule} rounding - Ending the computed prices snap to (nearest match). Omit to use the tenant's bulk_adjust_rounding setting.
     * @param {string} skuPrefix - Restrict the change to entries whose SKU starts with this (a prefix, case-sensitive, no wildcards). Entries identified only by product_id never match a prefix. Omit to change the whole list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesAdjust(listId: string, amount?: number, dryRun?: boolean, percent?: number, rounding?: PriceEndingRule, skuPrefix?: string): Promise<Models.Error>;
    pricesEntriesAdjust(
        paramsOrFirst: { listId: string, amount?: number, dryRun?: boolean, percent?: number, rounding?: PriceEndingRule, skuPrefix?: string } | string,
        ...rest: [(number)?, (boolean)?, (number)?, (PriceEndingRule)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, amount?: number, dryRun?: boolean, percent?: number, rounding?: PriceEndingRule, skuPrefix?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, amount?: number, dryRun?: boolean, percent?: number, rounding?: PriceEndingRule, skuPrefix?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                amount: rest[0] as number,
                dryRun: rest[1] as boolean,
                percent: rest[2] as number,
                rounding: rest[3] as PriceEndingRule,
                skuPrefix: rest[4] as string            
            };
        }
        
        const listId = params.listId;
        const amount = params.amount;
        const dryRun = params.dryRun;
        const percent = params.percent;
        const rounding = params.rounding;
        const skuPrefix = params.skuPrefix;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/adjust'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof dryRun !== 'undefined') {
            apiPayload['dry_run'] = dryRun;
        }
        if (typeof percent !== 'undefined') {
            apiPayload['percent'] = percent;
        }
        if (typeof rounding !== 'undefined') {
            apiPayload['rounding'] = rounding;
        }
        if (typeof skuPrefix !== 'undefined') {
            apiPayload['sku_prefix'] = skuPrefix;
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
     * Adds entries to a list without wiping it, and UPSERTS rather than inserts: a row naming a rung the list already has (same product_id/sku AND quantity_min) updates that rung, so re-running an import corrects prices instead of duplicating the ladder. `mode: 'append'` keeps the old insert-everything behaviour. Inserts go out as one PostgREST bulk write per 1000 rows.
     * 
     * This is the route for a large price book, and a large book arrives in chunks: a call carries at most 5000 entries and a longer payload is refused with 400 rather than truncated, so an importer of 200 000 prices sends forty calls. Because the upsert is keyed on the rung rather than on a row id, the chunks may be re-sent and re-ordered freely — a chunk that lands twice writes the same prices twice.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {Models.PriceEntryReplaceItem[]} params.entries - At most 5000 rows per call — send a large book in chunks.
     * @param {PriceEntriesBulkMode} params.mode - Default 'upsert': a row naming a rung the list already has (same product/sku AND quantity_min) updates it. 'append' always inserts — a re-run then duplicates the ladder, which is what makes an ambiguous tier table.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesBulk(params: { listId: string, entries: Models.PriceEntryReplaceItem[], mode?: PriceEntriesBulkMode }): Promise<Models.Error>;
    /**
     * Adds entries to a list without wiping it, and UPSERTS rather than inserts: a row naming a rung the list already has (same product_id/sku AND quantity_min) updates that rung, so re-running an import corrects prices instead of duplicating the ladder. `mode: 'append'` keeps the old insert-everything behaviour. Inserts go out as one PostgREST bulk write per 1000 rows.
     * 
     * This is the route for a large price book, and a large book arrives in chunks: a call carries at most 5000 entries and a longer payload is refused with 400 rather than truncated, so an importer of 200 000 prices sends forty calls. Because the upsert is keyed on the rung rather than on a row id, the chunks may be re-sent and re-ordered freely — a chunk that lands twice writes the same prices twice.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {Models.PriceEntryReplaceItem[]} entries - At most 5000 rows per call — send a large book in chunks.
     * @param {PriceEntriesBulkMode} mode - Default 'upsert': a row naming a rung the list already has (same product/sku AND quantity_min) updates it. 'append' always inserts — a re-run then duplicates the ladder, which is what makes an ambiguous tier table.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesBulk(listId: string, entries: Models.PriceEntryReplaceItem[], mode?: PriceEntriesBulkMode): Promise<Models.Error>;
    pricesEntriesBulk(
        paramsOrFirst: { listId: string, entries: Models.PriceEntryReplaceItem[], mode?: PriceEntriesBulkMode } | string,
        ...rest: [(Models.PriceEntryReplaceItem[])?, (PriceEntriesBulkMode)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, entries: Models.PriceEntryReplaceItem[], mode?: PriceEntriesBulkMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, entries: Models.PriceEntryReplaceItem[], mode?: PriceEntriesBulkMode };
        } else {
            params = {
                listId: paramsOrFirst as string,
                entries: rest[0] as Models.PriceEntryReplaceItem[],
                mode: rest[1] as PriceEntriesBulkMode            
            };
        }
        
        const listId = params.listId;
        const entries = params.entries;
        const mode = params.mode;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof entries === 'undefined') {
            throw new RevenexxException('Missing required parameter: "entries"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/bulk'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof entries !== 'undefined') {
            apiPayload['entries'] = Client.toWireKeys(entries, {"priceType":{"wire":"price_type","children":null},"productId":{"wire":"product_id","children":null},"quantityMin":{"wire":"quantity_min","children":null},"unitPrice":{"wire":"unit_price","children":null},"validFrom":{"wire":"valid_from","children":null},"validUntil":{"wire":"valid_until","children":null}});
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
     * Writes a whole quantity-tier ladder (Staffelpreise) for ONE item in one call, instead of typing a rung at a time. Tiers are a flat quantity_min column on purpose — the ladder IS the set of entries sharing an identity, and resolve returns it sorted as one array. What was missing was the gesture: "19.90 from 1, 5 % off per tier at 10 and 50". Prices are rounded and snapped exactly as a bulk adjust is.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {number} params.basePrice - Price for ONE unit at the FIRST tier, in the list’s currency and on the list’s tax basis — a decimal amount in major units (19.90), never minor units/cents.
     * @param {number} params.discountPercent - Discount applied per tier, COMPOUNDED down the ladder rather than off the base price: 5 gives 19.90 / 18.91 / 17.96. Default 0.
     * @param {string} params.productId - The item the ladder prices.
     * @param {number[]} params.quantities - Tier thresholds, ascending — an array of numbers or a comma-separated string ('1, 10, 50'). Duplicates are collapsed and the set is sorted. Default [1, 10, 50], at most 50 tiers.
     * @param {boolean} params.replace - Default true: the item's existing entries in this list are removed first, so the ladder IS the ladder. false appends.
     * @param {PriceEndingRule} params.rounding - Ending the computed prices snap to (nearest match). Omit to use the tenant's bulk_adjust_rounding setting.
     * @param {string} params.sku - The item the ladder prices (alternative to product_id).
     * @param {string} params.unit - Unit of measure carried onto every generated tier. Free text, neither validated nor converted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesLadder(params: { listId: string, basePrice: number, discountPercent?: number, productId?: string, quantities?: number[], replace?: boolean, rounding?: PriceEndingRule, sku?: string, unit?: string }): Promise<Models.Error>;
    /**
     * Writes a whole quantity-tier ladder (Staffelpreise) for ONE item in one call, instead of typing a rung at a time. Tiers are a flat quantity_min column on purpose — the ladder IS the set of entries sharing an identity, and resolve returns it sorted as one array. What was missing was the gesture: "19.90 from 1, 5 % off per tier at 10 and 50". Prices are rounded and snapped exactly as a bulk adjust is.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {number} basePrice - Price for ONE unit at the FIRST tier, in the list’s currency and on the list’s tax basis — a decimal amount in major units (19.90), never minor units/cents.
     * @param {number} discountPercent - Discount applied per tier, COMPOUNDED down the ladder rather than off the base price: 5 gives 19.90 / 18.91 / 17.96. Default 0.
     * @param {string} productId - The item the ladder prices.
     * @param {number[]} quantities - Tier thresholds, ascending — an array of numbers or a comma-separated string ('1, 10, 50'). Duplicates are collapsed and the set is sorted. Default [1, 10, 50], at most 50 tiers.
     * @param {boolean} replace - Default true: the item's existing entries in this list are removed first, so the ladder IS the ladder. false appends.
     * @param {PriceEndingRule} rounding - Ending the computed prices snap to (nearest match). Omit to use the tenant's bulk_adjust_rounding setting.
     * @param {string} sku - The item the ladder prices (alternative to product_id).
     * @param {string} unit - Unit of measure carried onto every generated tier. Free text, neither validated nor converted.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesLadder(listId: string, basePrice: number, discountPercent?: number, productId?: string, quantities?: number[], replace?: boolean, rounding?: PriceEndingRule, sku?: string, unit?: string): Promise<Models.Error>;
    pricesEntriesLadder(
        paramsOrFirst: { listId: string, basePrice: number, discountPercent?: number, productId?: string, quantities?: number[], replace?: boolean, rounding?: PriceEndingRule, sku?: string, unit?: string } | string,
        ...rest: [(number)?, (number)?, (string)?, (number[])?, (boolean)?, (PriceEndingRule)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, basePrice: number, discountPercent?: number, productId?: string, quantities?: number[], replace?: boolean, rounding?: PriceEndingRule, sku?: string, unit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, basePrice: number, discountPercent?: number, productId?: string, quantities?: number[], replace?: boolean, rounding?: PriceEndingRule, sku?: string, unit?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                basePrice: rest[0] as number,
                discountPercent: rest[1] as number,
                productId: rest[2] as string,
                quantities: rest[3] as number[],
                replace: rest[4] as boolean,
                rounding: rest[5] as PriceEndingRule,
                sku: rest[6] as string,
                unit: rest[7] as string            
            };
        }
        
        const listId = params.listId;
        const basePrice = params.basePrice;
        const discountPercent = params.discountPercent;
        const productId = params.productId;
        const quantities = params.quantities;
        const replace = params.replace;
        const rounding = params.rounding;
        const sku = params.sku;
        const unit = params.unit;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof basePrice === 'undefined') {
            throw new RevenexxException('Missing required parameter: "basePrice"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/ladder'.replace('{list_id}', listId);
        const apiPayload: Payload = {};
        if (typeof basePrice !== 'undefined') {
            apiPayload['base_price'] = basePrice;
        }
        if (typeof discountPercent !== 'undefined') {
            apiPayload['discount_percent'] = discountPercent;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantities !== 'undefined') {
            apiPayload['quantities'] = quantities;
        }
        if (typeof replace !== 'undefined') {
            apiPayload['replace'] = replace;
        }
        if (typeof rounding !== 'undefined') {
            apiPayload['rounding'] = rounding;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
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
     * Removes ONE rung. The item keeps its other rungs and stays priced — which is exactly what makes the lowest rung the dangerous one to delete.
     * 
     * Below the first threshold the FIRST rung's price applies (a minimum quantity belongs to the catalog, not to the price ladder). So deleting the "from 1" rung of a 1/10/50 ladder does not make single units unpriced: it sells them at the 10-up volume price, silently, from the next resolve call onwards. Nothing in the answer marks that the ladder no longer starts where it used to.
     * 
     * Delete an item's LAST rung and this list stops pricing it altogether: the item falls through to the next candidate list, or comes back `on_request` — never €0. To retire a price without losing it, set the rung's `price_type` to `on_request` instead, or deactivate the list. An entry belonging to another list answers 404 rather than being deleted through the wrong parent.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} params.id - The price entry, by id. An entry that belongs to a different list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesDelete(params: { listId: string, id: string }): Promise<Models.Error>;
    /**
     * Removes ONE rung. The item keeps its other rungs and stays priced — which is exactly what makes the lowest rung the dangerous one to delete.
     * 
     * Below the first threshold the FIRST rung's price applies (a minimum quantity belongs to the catalog, not to the price ladder). So deleting the "from 1" rung of a 1/10/50 ladder does not make single units unpriced: it sells them at the 10-up volume price, silently, from the next resolve call onwards. Nothing in the answer marks that the ladder no longer starts where it used to.
     * 
     * Delete an item's LAST rung and this list stops pricing it altogether: the item falls through to the next candidate list, or comes back `on_request` — never €0. To retire a price without losing it, set the rung's `price_type` to `on_request` instead, or deactivate the list. An entry belonging to another list answers 404 rather than being deleted through the wrong parent.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} id - The price entry, by id. An entry that belongs to a different list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesDelete(listId: string, id: string): Promise<Models.Error>;
    pricesEntriesDelete(
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

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * One rung of one ladder, exactly as stored — nothing is rounded, converted or taxed on the way out. `unit_price` is per ONE unit of `unit`, in the LIST's currency and on the LIST's tax basis; the entry itself carries neither, which is why a rung read on its own is not yet a price you can show a buyer. `POST /prices/resolve` is what turns it into one: it picks the rung that applies to a quantity, names the basis, and adds the net/gross pair and the tax rate. The id is checked against the list in the path, so an entry belonging to another list answers 404 rather than being read through the wrong parent.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} params.id - The price entry, by id. An entry that belongs to a different list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesGet(params: { listId: string, id: string }): Promise<Models.Error>;
    /**
     * One rung of one ladder, exactly as stored — nothing is rounded, converted or taxed on the way out. `unit_price` is per ONE unit of `unit`, in the LIST's currency and on the LIST's tax basis; the entry itself carries neither, which is why a rung read on its own is not yet a price you can show a buyer. `POST /prices/resolve` is what turns it into one: it picks the rung that applies to a quantity, names the basis, and adds the net/gross pair and the tax rate. The id is checked against the list in the path, so an entry belonging to another list answers 404 rather than being read through the wrong parent.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} id - The price entry, by id. An entry that belongs to a different list answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesGet(listId: string, id: string): Promise<Models.Error>;
    pricesEntriesGet(
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

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{list_id}', listId).replace('{id}', id);
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
     * A partial update of one rung: send only what changes, a payload with no updatable column at all is refused, and the next resolve call reads what this one wrote.
     * 
     * Two edits reach further than the field they touch. Moving `quantity_min` moves the rung within the ladder and may land on a threshold the item already has — nothing stops it, and both rows then sit in the resolved `tiers`. Setting `price_type: "on_request"` on ONE rung takes the WHOLE item off price in this list: resolution stops there and answers "price on request" even though the other rungs still carry amounts, and even where a less specific list would have priced it. That is the intended way to say "ask us" for an item, and a surprise if you meant to retire a single tier.
     * 
     * What this route cannot change is what the amount MEANS: currency and tax basis belong to the list, so re-denominating or switching net/gross is a list edit, not an entry edit. An entry of another list answers 404.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} params.id - The price entry, by id. An entry that belongs to a different list answers 404.
     * @param {object} params.metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
     * @param {PriceEntryType} params.priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
     * @param {string} params.productId - The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
     * @param {number} params.quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
     * @param {string} params.sku - The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
     * @param {string} params.unit - Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
     * @param {number} params.unitPrice - Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
     * @param {string} params.validFrom - Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
     * @param {string} params.validUntil - End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesEntriesUpdate(params: { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string }): Promise<Models.Error>;
    /**
     * A partial update of one rung: send only what changes, a payload with no updatable column at all is refused, and the next resolve call reads what this one wrote.
     * 
     * Two edits reach further than the field they touch. Moving `quantity_min` moves the rung within the ladder and may land on a threshold the item already has — nothing stops it, and both rows then sit in the resolved `tiers`. Setting `price_type: "on_request"` on ONE rung takes the WHOLE item off price in this list: resolution stops there and answers "price on request" even though the other rungs still carry amounts, and even where a less specific list would have priced it. That is the intended way to say "ask us" for an item, and a surprise if you meant to retire a single tier.
     * 
     * What this route cannot change is what the amount MEANS: currency and tax basis belong to the list, so re-denominating or switching net/gross is a list edit, not an entry edit. An entry of another list answers 404.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {string} id - The price entry, by id. An entry that belongs to a different list answers 404.
     * @param {object} metadata - Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
     * @param {PriceEntryType} priceType - Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
     * @param {string} productId - The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
     * @param {number} quantityMin - Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
     * @param {string} sku - The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
     * @param {string} unit - Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
     * @param {number} unitPrice - Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
     * @param {string} validFrom - Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
     * @param {string} validUntil - End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesEntriesUpdate(listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string): Promise<Models.Error>;
    pricesEntriesUpdate(
        paramsOrFirst: { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string } | string,
        ...rest: [(string)?, (object)?, (PriceEntryType)?, (string)?, (number)?, (string)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, id: string, metadata?: object, priceType?: PriceEntryType, productId?: string, quantityMin?: number, sku?: string, unit?: string, unitPrice?: number, validFrom?: string, validUntil?: string };
        } else {
            params = {
                listId: paramsOrFirst as string,
                id: rest[0] as string,
                metadata: rest[1] as object,
                priceType: rest[2] as PriceEntryType,
                productId: rest[3] as string,
                quantityMin: rest[4] as number,
                sku: rest[5] as string,
                unit: rest[6] as string,
                unitPrice: rest[7] as number,
                validFrom: rest[8] as string,
                validUntil: rest[9] as string            
            };
        }
        
        const listId = params.listId;
        const id = params.id;
        const metadata = params.metadata;
        const priceType = params.priceType;
        const productId = params.productId;
        const quantityMin = params.quantityMin;
        const sku = params.sku;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/entries/{id}'.replace('{list_id}', listId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof priceType !== 'undefined') {
            apiPayload['price_type'] = priceType;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantityMin !== 'undefined') {
            apiPayload['quantity_min'] = quantityMin;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
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
     * Promotes this list AND demotes whoever held the flag, in one call. The flag is a single answer, not a per-row opinion: resolution uses it as the last tie-break, so two defaults leave the winner to row order and none leaves a tie unsettled. Promote-then-demote as two PATCHes from a client produces exactly those two states whenever the second call does not land.
     * 
     * The write is as small as the change: exactly one write per row whose flag was wrong, and none at all for the rows that were already right. A tenant already in this state is therefore not written to, which is what makes repeating the call free. The answer is this list as it now stands plus the codes it demoted — empty when it already held the flag.
     *
     * @param {string} params.listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesListsMakeDefault(params: { listId: string, data: object }): Promise<Models.Error>;
    /**
     * Promotes this list AND demotes whoever held the flag, in one call. The flag is a single answer, not a per-row opinion: resolution uses it as the last tie-break, so two defaults leave the winner to row order and none leaves a tie unsettled. Promote-then-demote as two PATCHes from a client produces exactly those two states whenever the second call does not land.
     * 
     * The write is as small as the change: exactly one write per row whose flag was wrong, and none at all for the rows that were already right. A tenant already in this state is therefore not written to, which is what makes repeating the call free. The answer is this list as it now stands plus the codes it demoted — empty when it already held the flag.
     *
     * @param {string} listId - The price list the entries belong to. An id no list in this tenant has answers 404 rather than an empty page.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesListsMakeDefault(listId: string, data: object): Promise<Models.Error>;
    pricesListsMakeDefault(
        paramsOrFirst: { listId: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Error> {
        let params: { listId: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { listId: string, data: object };
        } else {
            params = {
                listId: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const listId = params.listId;
        const data = params.data;

        if (typeof listId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "listId"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/prices/lists/{list_id}/make-default'.replace('{list_id}', listId);
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
     * The live price call. Everything else in this app configures prices; this is the one route that ANSWERS them, and a storefront reaches it on every listing, every product page and every cart. Send up to 200 items and the buyer context they are for — contact, organization, market and channel — and get back, per item, the unit price this buyer pays, the net/gross pair, the tax rate, the list that decided it and that item's full quantity ladder.
     * 
     * Which price wins when several match is the whole value of this app, and it is not guessable from the field types. The order, in full:
     * 
     * 1. **Candidates.** A list is a candidate when it is `active`, its currency EQUALS the currency of the call (nothing is ever converted — a list in another currency simply does not price the item), the instant `at` falls inside its validity window, it is visible in the buyer’s market (the `X-Revenexx-Market` header scopes the list view; lists assigned to no market are global and always visible), and its buyer scope matches or is open. A `requires_auth` list is dropped for a buyer with neither `contact_id` nor `organization_id`.
     * 2. **Specificity decides first, and priority never overrules it.** contact-scoped (4) beats organization-scoped (3) beats channel-scoped (2) beats open (0). An organization list at `priority: 0` therefore wins over an open list at `priority: 100`.
     * 3. **Within one specificity level:** `priority` descending, then non-default before default — the default list is deliberately last, so it prices only what nothing else did.
     * 4. **A genuine tie** (same specificity, same priority, same default flag) is settled by the tenant’s `price_list_priority_tiebreak` setting — `lowest_price`, `highest_price`, `newest` or `code` — never by the order the database happened to return rows in. The setting in force is echoed in `basis.price_list_priority_tiebreak`.
     * 5. **The first list that prices the item wins, and the search stops there** — even if a later, less specific list is cheaper. Its FULL tier ladder comes back in `tiers`; the rung with the highest `quantity_min` at or below the requested `quantity` sets `unit_price`, and below the first rung the first rung applies.
     * 6. **An `on_request` entry stops the search too**, and inside a tie it outranks every price: a list that says "ask us" for this buyer is authoritative, and cannot be undercut by a list that happens to sort after it.
     * 7. **Nothing found → `on_request`, never 0**, with a reason (`not_priced`, `on_request_entry`, `anonymous_denied`, `no_identity`). A storefront shows "price on request"; it must never show €0.
     * 
     * Amounts: `unit_price` is per ONE unit of the entry’s `unit`, in `currency`, as a decimal in MAJOR units (19.90) — never minor units/cents — and on the basis `tax_basis` names. `tax_basis` comes from the list’s own column, else from a legacy `tax_included: true` on it, else from the tenant’s `tax_inclusive_default`; `tax_basis_source` says which of the three. Read `unit_price_net`/`unit_price_gross` where you need an unambiguous number.
     * 
     * Tax is never guessed. The market comes from the `X-Revenexx-Market` header (a market CODE) or from `market_id` in the body; with several markets whose rates differ and no signal, the answer is `tax.resolved: false`, `reason: market_required` rather than another market’s VAT. `tax_rate: null` means UNKNOWN, not 0 %.
     * 
     * An item that cannot be priced never fails the call: it comes back on_request with its reason, so one bad line in a cart does not cost the other lines their prices.
     * 
     * One last thing worth knowing before you build on it. This is the most customised surface this app has in the field: pricing is where a tenant's ERP usually has the last word, and a tenant whose prices are computed there does not want this app's resolution order at all. So the route is deliberately shaped to be REPLACED — one required field, no rejection of an item the caller got wrong, an answer that stands on its own — and it is designed to be swapped 1:1 for a custom app through the gateway's capability override. An ERP-priced tenant overrides `prices.resolve` alone: the same path, the same request and the same response, answered by their own service, while every configuration route here (lists, entries, ladders, bulk changes, vocabularies) stays standard and keeps working. That is why the contract below is smaller than the machinery behind it, and why it changes reluctantly.
     *
     * @param {Models.PriceResolveItem[]} params.items - Items to price, at most 200 per call — a whole cart or a whole product listing in one round trip. The answer holds one entry per item, in this order.
     * @param {string} params.at - The instant every validity window — list and entry — is evaluated at (ISO 8601). Default now. This is how a promo price is previewed before it starts, and it is echoed as `basis.evaluated_at`.
     * @param {string} params.channelId - Buyer context: the sales channel. Third scope — beats the open lists, loses to contact and organization.
     * @param {string} params.contactId - Buyer context: the contact this quote is for. The most specific scope — a list naming this contact beats every other list, whatever their priority. Sending it (or organization_id) is also what makes the buyer AUTHENTICATED for `requires_auth` lists and for the tenant’s anonymous_resolve_allowed setting.
     * @param {string} params.currency - ISO 4217 code the quote is wanted in. ONLY lists in this currency are candidates and nothing is ever converted, so a wrong value here is not a rounding difference — it is no price at all. Omit to take the buyer market’s currency, then the tenant’s default_currency; `basis.currency_source` names which applied.
     * @param {string} params.marketId - Buyer context: the market, as a uuid pin for older callers. Prefer the `X-Revenexx-Market` header, which carries a market CODE and is what scopes the visible price lists. The market decides the tax rates AND which per-market settings (rounding, tie-break, anonymous access) apply — with several markets and no signal at all the answer says `tax.resolved: false`, `reason: market_required` rather than quoting another market’s VAT.
     * @param {string} params.organizationId - Buyer context: the organization the buyer belongs to. Second most specific scope; also counts as authenticated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesResolve(params: { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string }): Promise<Models.Error>;
    /**
     * The live price call. Everything else in this app configures prices; this is the one route that ANSWERS them, and a storefront reaches it on every listing, every product page and every cart. Send up to 200 items and the buyer context they are for — contact, organization, market and channel — and get back, per item, the unit price this buyer pays, the net/gross pair, the tax rate, the list that decided it and that item's full quantity ladder.
     * 
     * Which price wins when several match is the whole value of this app, and it is not guessable from the field types. The order, in full:
     * 
     * 1. **Candidates.** A list is a candidate when it is `active`, its currency EQUALS the currency of the call (nothing is ever converted — a list in another currency simply does not price the item), the instant `at` falls inside its validity window, it is visible in the buyer’s market (the `X-Revenexx-Market` header scopes the list view; lists assigned to no market are global and always visible), and its buyer scope matches or is open. A `requires_auth` list is dropped for a buyer with neither `contact_id` nor `organization_id`.
     * 2. **Specificity decides first, and priority never overrules it.** contact-scoped (4) beats organization-scoped (3) beats channel-scoped (2) beats open (0). An organization list at `priority: 0` therefore wins over an open list at `priority: 100`.
     * 3. **Within one specificity level:** `priority` descending, then non-default before default — the default list is deliberately last, so it prices only what nothing else did.
     * 4. **A genuine tie** (same specificity, same priority, same default flag) is settled by the tenant’s `price_list_priority_tiebreak` setting — `lowest_price`, `highest_price`, `newest` or `code` — never by the order the database happened to return rows in. The setting in force is echoed in `basis.price_list_priority_tiebreak`.
     * 5. **The first list that prices the item wins, and the search stops there** — even if a later, less specific list is cheaper. Its FULL tier ladder comes back in `tiers`; the rung with the highest `quantity_min` at or below the requested `quantity` sets `unit_price`, and below the first rung the first rung applies.
     * 6. **An `on_request` entry stops the search too**, and inside a tie it outranks every price: a list that says "ask us" for this buyer is authoritative, and cannot be undercut by a list that happens to sort after it.
     * 7. **Nothing found → `on_request`, never 0**, with a reason (`not_priced`, `on_request_entry`, `anonymous_denied`, `no_identity`). A storefront shows "price on request"; it must never show €0.
     * 
     * Amounts: `unit_price` is per ONE unit of the entry’s `unit`, in `currency`, as a decimal in MAJOR units (19.90) — never minor units/cents — and on the basis `tax_basis` names. `tax_basis` comes from the list’s own column, else from a legacy `tax_included: true` on it, else from the tenant’s `tax_inclusive_default`; `tax_basis_source` says which of the three. Read `unit_price_net`/`unit_price_gross` where you need an unambiguous number.
     * 
     * Tax is never guessed. The market comes from the `X-Revenexx-Market` header (a market CODE) or from `market_id` in the body; with several markets whose rates differ and no signal, the answer is `tax.resolved: false`, `reason: market_required` rather than another market’s VAT. `tax_rate: null` means UNKNOWN, not 0 %.
     * 
     * An item that cannot be priced never fails the call: it comes back on_request with its reason, so one bad line in a cart does not cost the other lines their prices.
     * 
     * One last thing worth knowing before you build on it. This is the most customised surface this app has in the field: pricing is where a tenant's ERP usually has the last word, and a tenant whose prices are computed there does not want this app's resolution order at all. So the route is deliberately shaped to be REPLACED — one required field, no rejection of an item the caller got wrong, an answer that stands on its own — and it is designed to be swapped 1:1 for a custom app through the gateway's capability override. An ERP-priced tenant overrides `prices.resolve` alone: the same path, the same request and the same response, answered by their own service, while every configuration route here (lists, entries, ladders, bulk changes, vocabularies) stays standard and keeps working. That is why the contract below is smaller than the machinery behind it, and why it changes reluctantly.
     *
     * @param {Models.PriceResolveItem[]} items - Items to price, at most 200 per call — a whole cart or a whole product listing in one round trip. The answer holds one entry per item, in this order.
     * @param {string} at - The instant every validity window — list and entry — is evaluated at (ISO 8601). Default now. This is how a promo price is previewed before it starts, and it is echoed as `basis.evaluated_at`.
     * @param {string} channelId - Buyer context: the sales channel. Third scope — beats the open lists, loses to contact and organization.
     * @param {string} contactId - Buyer context: the contact this quote is for. The most specific scope — a list naming this contact beats every other list, whatever their priority. Sending it (or organization_id) is also what makes the buyer AUTHENTICATED for `requires_auth` lists and for the tenant’s anonymous_resolve_allowed setting.
     * @param {string} currency - ISO 4217 code the quote is wanted in. ONLY lists in this currency are candidates and nothing is ever converted, so a wrong value here is not a rounding difference — it is no price at all. Omit to take the buyer market’s currency, then the tenant’s default_currency; `basis.currency_source` names which applied.
     * @param {string} marketId - Buyer context: the market, as a uuid pin for older callers. Prefer the `X-Revenexx-Market` header, which carries a market CODE and is what scopes the visible price lists. The market decides the tax rates AND which per-market settings (rounding, tie-break, anonymous access) apply — with several markets and no signal at all the answer says `tax.resolved: false`, `reason: market_required` rather than quoting another market’s VAT.
     * @param {string} organizationId - Buyer context: the organization the buyer belongs to. Second most specific scope; also counts as authenticated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesResolve(items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string): Promise<Models.Error>;
    pricesResolve(
        paramsOrFirst: { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string } | Models.PriceResolveItem[],
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'at' in paramsOrFirst || 'channelId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'marketId' in paramsOrFirst || 'organizationId' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.PriceResolveItem[], at?: string, channelId?: string, contactId?: string, currency?: string, marketId?: string, organizationId?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.PriceResolveItem[],
                at: rest[0] as string,
                channelId: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                marketId: rest[4] as string,
                organizationId: rest[5] as string            
            };
        }
        
        const items = params.items;
        const at = params.at;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const marketId = params.marketId;
        const organizationId = params.organizationId;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/prices/resolve';
        const apiPayload: Payload = {};
        if (typeof at !== 'undefined') {
            apiPayload['at'] = at;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null}});
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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
     * Discovery for the vocabulary routes: the enums this app enforces, each with its name, its title and its description — and deliberately WITHOUT its values, so a UI can cache this one small answer and then fetch only the value sets it actually renders. Names: list-statuses, price-types, tax-bases. Fetch one with GET /prices/vocabularies/{name}; a client holding the qualified pair 'prices.<name>' builds that URL from the pair alone.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PriceVocabularyIndex>}
     */
    pricesVocabulariesList(): Promise<Models.PriceVocabularyIndex> {

        const apiPath = '/v1/prices/vocabularies';
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
     * One vocabulary in full: every permitted value, each with the title and description a human reads for it and the badge tone a UI colours it with — enough to render a select or a status chip without keeping a private copy of an enum this app enforces. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is the order a select should offer. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Answers 404 for an unknown name. Names: list-statuses, price-types, tax-bases.
     *
     * @param {PricesVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pricesVocabulariesGet(params: { name: PricesVocabulariesGetName }): Promise<Models.Error>;
    /**
     * One vocabulary in full: every permitted value, each with the title and description a human reads for it and the badge tone a UI colours it with — enough to render a select or a status chip without keeping a private copy of an enum this app enforces. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is the order a select should offer. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Answers 404 for an unknown name. Names: list-statuses, price-types, tax-bases.
     *
     * @param {PricesVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pricesVocabulariesGet(name: PricesVocabulariesGetName): Promise<Models.Error>;
    pricesVocabulariesGet(
        paramsOrFirst: { name: PricesVocabulariesGetName } | PricesVocabulariesGetName    
    ): Promise<Models.Error> {
        let params: { name: PricesVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: PricesVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as PricesVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/prices/vocabularies/{name}'.replace('{name}', name);
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
