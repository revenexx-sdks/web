import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { MarketsListStatus } from '../enums/markets-list-status';
import { MarketStatus } from '../enums/market-status';
import { MarketsVocabularyName } from '../enums/markets-vocabulary-name';

export class Markets {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every column is an exact-match filter and they combine with AND (?code=northwind); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing.
     *
     * @param {string} params.id - Exact match on `id`. Primary key. Note that OTHER apps do not store this: the market scope dimension is keyed on `code` (manifest `provides_scopes.slug_source = markets.code`), so a row elsewhere that is "in this market" carries the code, not this uuid. It is the item routes and /context that want this value.
     * @param {string} params.code - Exact match on `code`. Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
     * @param {string} params.name - Exact match on `name`. Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
     * @param {string} params.labels - Exact match on `labels`. Exact whole-document equality on the jsonb: the value is a whole JSON document and has to match every key, so this is not a path or a containment query. Key order and whitespace are irrelevant — the comparison is semantic. A value that does not parse as JSON is refused with 400 `invalid_value` rather than answered with zero rows. Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
     * @param {string} params.currency - Exact match on `currency`. Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
     * @param {MarketsListStatus} params.status - Exact match on `status`. Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
     * @param {boolean} params.isDefault - Exact match on `is_default`. The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
     * @param {number} params.position - Exact match on `position`. Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
     * @param {string} params.createdAt - Exact match on `created_at`. When the market row was inserted. Set by the database; never writable.
     * @param {string} params.updatedAt - Exact match on `updated_at`. When the market row was last written. Set by the database on every update; never writable.
     * @param {number} params.limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} params.offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} params.order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, code, name, labels, currency, status, is_default, position, created_at, updated_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketList>}
     */
    marketsList(params?: { id?: string, code?: string, name?: string, labels?: string, currency?: string, status?: MarketsListStatus, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.MarketList>;
    /**
     * Every column is an exact-match filter and they combine with AND (?code=northwind); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing.
     *
     * @param {string} id - Exact match on `id`. Primary key. Note that OTHER apps do not store this: the market scope dimension is keyed on `code` (manifest `provides_scopes.slug_source = markets.code`), so a row elsewhere that is "in this market" carries the code, not this uuid. It is the item routes and /context that want this value.
     * @param {string} code - Exact match on `code`. Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
     * @param {string} name - Exact match on `name`. Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
     * @param {string} labels - Exact match on `labels`. Exact whole-document equality on the jsonb: the value is a whole JSON document and has to match every key, so this is not a path or a containment query. Key order and whitespace are irrelevant — the comparison is semantic. A value that does not parse as JSON is refused with 400 `invalid_value` rather than answered with zero rows. Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
     * @param {string} currency - Exact match on `currency`. Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
     * @param {MarketsListStatus} status - Exact match on `status`. Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
     * @param {boolean} isDefault - Exact match on `is_default`. The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
     * @param {number} position - Exact match on `position`. Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
     * @param {string} createdAt - Exact match on `created_at`. When the market row was inserted. Set by the database; never writable.
     * @param {string} updatedAt - Exact match on `updated_at`. When the market row was last written. Set by the database on every update; never writable.
     * @param {number} limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, code, name, labels, currency, status, is_default, position, created_at, updated_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsList(id?: string, code?: string, name?: string, labels?: string, currency?: string, status?: MarketsListStatus, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.MarketList>;
    marketsList(
        paramsOrFirst?: { id?: string, code?: string, name?: string, labels?: string, currency?: string, status?: MarketsListStatus, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (MarketsListStatus)?, (boolean)?, (number)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.MarketList> {
        let params: { id?: string, code?: string, name?: string, labels?: string, currency?: string, status?: MarketsListStatus, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, name?: string, labels?: string, currency?: string, status?: MarketsListStatus, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                labels: rest[2] as string,
                currency: rest[3] as string,
                status: rest[4] as MarketsListStatus,
                isDefault: rest[5] as boolean,
                position: rest[6] as number,
                createdAt: rest[7] as string,
                updatedAt: rest[8] as string,
                limit: rest[9] as number,
                offset: rest[10] as number,
                order: rest[11] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const labels = params.labels;
        const currency = params.currency;
        const status = params.status;
        const isDefault = params.isDefault;
        const position = params.position;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/markets';
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
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * A market needs a 'code' and a 'name' — currency defaults to EUR, status to active. To get a market that can actually trade, clone an existing one instead: POST /markets/{id}/clone.
     *
     * @param {string} params.code - Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
     * @param {string} params.name - Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
     * @param {string} params.currency - Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
     * @param {boolean} params.isDefault - The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
     * @param {object} params.labels - Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
     * @param {number} params.position - Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
     * @param {MarketStatus} params.status - Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsCreate(params: { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus }): Promise<Models.Market>;
    /**
     * A market needs a 'code' and a 'name' — currency defaults to EUR, status to active. To get a market that can actually trade, clone an existing one instead: POST /markets/{id}/clone.
     *
     * @param {string} code - Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
     * @param {string} name - Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
     * @param {string} currency - Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
     * @param {boolean} isDefault - The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
     * @param {object} labels - Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
     * @param {number} position - Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
     * @param {MarketStatus} status - Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCreate(code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus): Promise<Models.Market>;
    marketsCreate(
        paramsOrFirst: { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (number)?, (MarketStatus)?]    
    ): Promise<Models.Market> {
        let params: { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, currency?: string, isDefault?: boolean, labels?: object, position?: number, status?: MarketStatus };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                currency: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                status: rest[5] as MarketStatus            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const currency = params.currency;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const status = params.status;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/markets';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * How this tenant keys its translations, resolved for a surface that stands in no market at all. The Cockpit edits a tenant BASELINE when no market is selected, and a baseline value has to be readable by every market — so the locale set answered here is the UNION of every market's locales, each one already resolved to the key it is written under, not one market's list and not a pair of setting names to re-implement. Each entry names the markets that asked for that locale: an editor listing six inputs without saying who needs them invites translations nobody will ever read. Write/read keys follow the same two settings as the per-market answer, so a baseline and a market value can never be keyed differently.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TenantLocalePolicy>}
     */
    marketsLocalePolicy(): Promise<Models.TenantLocalePolicy> {

        const apiPath = '/v1/markets/locale-policy';
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
     * Every closed value set this app owns, listed by name with its title and its description but WITHOUT its values — enough to build a menu of them, and a name to fetch one by when a select box actually needs the values. Static per app version; nothing about a tenant changes it. It reads no table and takes no parameter, so 200 is the only answer it has beyond the gateway's own.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketsVocabularyIndex>}
     */
    marketsVocabularies(): Promise<Models.MarketsVocabularyIndex> {

        const apiPath = '/v1/markets/vocabularies';
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
     * One value set in full: every value the column may hold, in the order it may hold them, with the copy and the badge tone a client renders each one as. The values are not kept in a list beside the database, they are parsed out of the CHECK constraint in this app's own schema.json — so the set served here IS the set enforced on a write, and a select box built from it cannot offer a value the write would then refuse. A name outside the declared enum is a 404 rather than an empty list — an empty vocabulary and an unknown one mean different things to a select box.
     *
     * @param {MarketsVocabularyName} params.name - Which vocabulary to read. The enum is exhaustive — these are every value set this app owns, and anything else is a 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketsVocabulary>}
     */
    marketsVocabulary(params: { name: MarketsVocabularyName }): Promise<Models.MarketsVocabulary>;
    /**
     * One value set in full: every value the column may hold, in the order it may hold them, with the copy and the badge tone a client renders each one as. The values are not kept in a list beside the database, they are parsed out of the CHECK constraint in this app's own schema.json — so the set served here IS the set enforced on a write, and a select box built from it cannot offer a value the write would then refuse. A name outside the declared enum is a 404 rather than an empty list — an empty vocabulary and an unknown one mean different things to a select box.
     *
     * @param {MarketsVocabularyName} name - Which vocabulary to read. The enum is exhaustive — these are every value set this app owns, and anything else is a 404.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketsVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsVocabulary(name: MarketsVocabularyName): Promise<Models.MarketsVocabulary>;
    marketsVocabulary(
        paramsOrFirst: { name: MarketsVocabularyName } | MarketsVocabularyName    
    ): Promise<Models.MarketsVocabulary> {
        let params: { name: MarketsVocabularyName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: MarketsVocabularyName };
        } else {
            params = {
                name: paramsOrFirst as MarketsVocabularyName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/markets/vocabularies/{name}'.replace('{name}', name);
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
     * Deleting a market takes its locales, currencies and tax classes with it: all three carry an ON DELETE CASCADE onto markets.id, so this is never refused for having children.
     *
     * @param {string} params.id - The market, by its primary key. A uuid — this route does not resolve a market code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketDeleted>}
     */
    marketsDelete(params: { id: string }): Promise<Models.MarketDeleted>;
    /**
     * Deleting a market takes its locales, currencies and tax classes with it: all three carry an ON DELETE CASCADE onto markets.id, so this is never refused for having children.
     *
     * @param {string} id - The market, by its primary key. A uuid — this route does not resolve a market code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketDeleted>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsDelete(id: string): Promise<Models.MarketDeleted>;
    marketsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MarketDeleted> {
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

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
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
     * Resolved by uuid only — unlike /readiness, /clone, /backfill and /make-default, a market CODE here is a 400 rather than a lookup.
     *
     * @param {string} params.id - The market, by its primary key. A uuid — this route does not resolve a market code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsGet(params: { id: string }): Promise<Models.Market>;
    /**
     * Resolved by uuid only — unlike /readiness, /clone, /backfill and /make-default, a market CODE here is a 400 rather than a lookup.
     *
     * @param {string} id - The market, by its primary key. A uuid — this route does not resolve a market code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsGet(id: string): Promise<Models.Market>;
    marketsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Market> {
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

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
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
     * Partial: omitted fields keep their value.
     *
     * @param {string} params.id - The market, by its primary key. A uuid — this route does not resolve a market code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} params.code - Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
     * @param {string} params.currency - Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
     * @param {boolean} params.isDefault - The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
     * @param {object} params.labels - Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
     * @param {string} params.name - Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
     * @param {number} params.position - Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
     * @param {MarketStatus} params.status - Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     */
    marketsUpdate(params: { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus }): Promise<Models.Market>;
    /**
     * Partial: omitted fields keep their value.
     *
     * @param {string} id - The market, by its primary key. A uuid — this route does not resolve a market code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} code - Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
     * @param {string} currency - Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
     * @param {boolean} isDefault - The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
     * @param {object} labels - Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
     * @param {string} name - Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
     * @param {number} position - Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
     * @param {MarketStatus} status - Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Market>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsUpdate(id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus): Promise<Models.Market>;
    marketsUpdate(
        paramsOrFirst: { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (string)?, (number)?, (MarketStatus)?]    
    ): Promise<Models.Market> {
        let params: { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, currency?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, status?: MarketStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                currency: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                status: rest[6] as MarketStatus            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const currency = params.currency;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const name = params.name;
        const position = params.position;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Repairs the market in the path out of a source market that is already right. The two are compared by CODE, collection by collection, and only the codes this market does not already carry are added — so a locale, a currency or a tax class it already holds is left exactly as the merchant left it, rate included, and is never overwritten. Both the path id and `source` are resolved by uuid OR by market code. Idempotent: running it twice adds nothing the second time.
     *
     * @param {string} params.id - The market being REPAIRED — a uuid or a market code.
     * @param {string} params.source - The market to copy the missing pieces FROM — a uuid or a market code. Must not be the market in the path. Pick a market that is already right; nothing about it is changed.
     * @param {boolean} params.currencies - Take the source's traded currencies for codes this market does not already carry. Default true.
     * @param {boolean} params.locales - Take the source's locales for codes this market does not already carry. Default true.
     * @param {boolean} params.taxClasses - Take the source's tax classes for codes this market does not already carry. An existing code keeps ITS rate — a backfill never re-rates a class the merchant already set. Default true.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketBackfillResult>}
     */
    marketsBackfill(params: { id: string, source: string, currencies?: boolean, locales?: boolean, taxClasses?: boolean }): Promise<Models.MarketBackfillResult>;
    /**
     * Repairs the market in the path out of a source market that is already right. The two are compared by CODE, collection by collection, and only the codes this market does not already carry are added — so a locale, a currency or a tax class it already holds is left exactly as the merchant left it, rate included, and is never overwritten. Both the path id and `source` are resolved by uuid OR by market code. Idempotent: running it twice adds nothing the second time.
     *
     * @param {string} id - The market being REPAIRED — a uuid or a market code.
     * @param {string} source - The market to copy the missing pieces FROM — a uuid or a market code. Must not be the market in the path. Pick a market that is already right; nothing about it is changed.
     * @param {boolean} currencies - Take the source's traded currencies for codes this market does not already carry. Default true.
     * @param {boolean} locales - Take the source's locales for codes this market does not already carry. Default true.
     * @param {boolean} taxClasses - Take the source's tax classes for codes this market does not already carry. An existing code keeps ITS rate — a backfill never re-rates a class the merchant already set. Default true.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketBackfillResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsBackfill(id: string, source: string, currencies?: boolean, locales?: boolean, taxClasses?: boolean): Promise<Models.MarketBackfillResult>;
    marketsBackfill(
        paramsOrFirst: { id: string, source: string, currencies?: boolean, locales?: boolean, taxClasses?: boolean } | string,
        ...rest: [(string)?, (boolean)?, (boolean)?, (boolean)?]    
    ): Promise<Models.MarketBackfillResult> {
        let params: { id: string, source: string, currencies?: boolean, locales?: boolean, taxClasses?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, source: string, currencies?: boolean, locales?: boolean, taxClasses?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                source: rest[0] as string,
                currencies: rest[1] as boolean,
                locales: rest[2] as boolean,
                taxClasses: rest[3] as boolean            
            };
        }
        
        const id = params.id;
        const source = params.source;
        const currencies = params.currencies;
        const locales = params.locales;
        const taxClasses = params.taxClasses;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof source === 'undefined') {
            throw new RevenexxException('Missing required parameter: "source"');
        }

        const apiPath = '/v1/markets/{id}/backfill'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof currencies !== 'undefined') {
            apiPayload['currencies'] = currencies;
        }
        if (typeof locales !== 'undefined') {
            apiPayload['locales'] = locales;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof taxClasses !== 'undefined') {
            apiPayload['tax_classes'] = taxClasses;
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
     * Creates a NEW market out of an existing one, taking its locales, its traded currencies and its tax classes with it in a single call. That is the difference between this and POST /markets: a plain create leaves a row that cannot serve anybody, while what comes back here is a market with a language to render in, a currency to price in and a rate to tax with. The path id is the SOURCE market, resolved by uuid OR by market code.
     *
     * @param {string} params.id - The SOURCE market to copy — a uuid or a market code.
     * @param {string} params.code - Code of the NEW market (unique per tenant).
     * @param {boolean} params.copyCurrencies - Copy the source's traded currencies. Default true. The new market's own base currency is registered and marked default either way.
     * @param {boolean} params.copyLocales - Copy the source's locales. Default true. False leaves the new market with no language of its own, so the tenant fallback_locale is seeded instead — it is never left with none.
     * @param {boolean} params.copyTaxClasses - Copy the source's tax classes, rates and all. Default true. False leaves the market unable to tax anything, which readiness reports as blocking.
     * @param {string} params.currency - Base currency of the new market (ISO 4217). Defaults to the source market's, and is registered and marked default on the new one either way.
     * @param {string} params.name - Display name of the new market. Defaults to its code.
     * @param {MarketStatus} params.status - Status of the new market. Defaults to 'active'; clone it 'inactive' to build it out before it serves anyone.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCloneResult>}
     */
    marketsClone(params: { id: string, code: string, copyCurrencies?: boolean, copyLocales?: boolean, copyTaxClasses?: boolean, currency?: string, name?: string, status?: MarketStatus }): Promise<Models.MarketCloneResult>;
    /**
     * Creates a NEW market out of an existing one, taking its locales, its traded currencies and its tax classes with it in a single call. That is the difference between this and POST /markets: a plain create leaves a row that cannot serve anybody, while what comes back here is a market with a language to render in, a currency to price in and a rate to tax with. The path id is the SOURCE market, resolved by uuid OR by market code.
     *
     * @param {string} id - The SOURCE market to copy — a uuid or a market code.
     * @param {string} code - Code of the NEW market (unique per tenant).
     * @param {boolean} copyCurrencies - Copy the source's traded currencies. Default true. The new market's own base currency is registered and marked default either way.
     * @param {boolean} copyLocales - Copy the source's locales. Default true. False leaves the new market with no language of its own, so the tenant fallback_locale is seeded instead — it is never left with none.
     * @param {boolean} copyTaxClasses - Copy the source's tax classes, rates and all. Default true. False leaves the market unable to tax anything, which readiness reports as blocking.
     * @param {string} currency - Base currency of the new market (ISO 4217). Defaults to the source market's, and is registered and marked default on the new one either way.
     * @param {string} name - Display name of the new market. Defaults to its code.
     * @param {MarketStatus} status - Status of the new market. Defaults to 'active'; clone it 'inactive' to build it out before it serves anyone.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCloneResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsClone(id: string, code: string, copyCurrencies?: boolean, copyLocales?: boolean, copyTaxClasses?: boolean, currency?: string, name?: string, status?: MarketStatus): Promise<Models.MarketCloneResult>;
    marketsClone(
        paramsOrFirst: { id: string, code: string, copyCurrencies?: boolean, copyLocales?: boolean, copyTaxClasses?: boolean, currency?: string, name?: string, status?: MarketStatus } | string,
        ...rest: [(string)?, (boolean)?, (boolean)?, (boolean)?, (string)?, (string)?, (MarketStatus)?]    
    ): Promise<Models.MarketCloneResult> {
        let params: { id: string, code: string, copyCurrencies?: boolean, copyLocales?: boolean, copyTaxClasses?: boolean, currency?: string, name?: string, status?: MarketStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code: string, copyCurrencies?: boolean, copyLocales?: boolean, copyTaxClasses?: boolean, currency?: string, name?: string, status?: MarketStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                copyCurrencies: rest[1] as boolean,
                copyLocales: rest[2] as boolean,
                copyTaxClasses: rest[3] as boolean,
                currency: rest[4] as string,
                name: rest[5] as string,
                status: rest[6] as MarketStatus            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const copyCurrencies = params.copyCurrencies;
        const copyLocales = params.copyLocales;
        const copyTaxClasses = params.copyTaxClasses;
        const currency = params.currency;
        const name = params.name;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/markets/{id}/clone'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof copyCurrencies !== 'undefined') {
            apiPayload['copy_currencies'] = copyCurrencies;
        }
        if (typeof copyLocales !== 'undefined') {
            apiPayload['copy_locales'] = copyLocales;
        }
        if (typeof copyTaxClasses !== 'undefined') {
            apiPayload['copy_tax_classes'] = copyTaxClasses;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
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
     * The storefront bootstrap: everything a frontend needs to render one market, resolved server-side so no client re-derives it — the market row, its locales, the currencies it trades in and its tax classes; WHICH locale to actually render in and where that answer came from; which key to read and write a translation under; whether the prices it will be handed are gross or net; and whether any of it is trustworthy. One call rather than five, and — more to the point — one place the resolution rules live, instead of a slightly different copy of them in every storefront. This one resolves the market by id only: unlike /readiness, /clone and /backfill, a market CODE here is a 400, not a lookup.
     *
     * @param {string} params.id - The market. A uuid — this route does not accept a market code.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketContext>}
     */
    marketsContext(params: { id: string }): Promise<Models.MarketContext>;
    /**
     * The storefront bootstrap: everything a frontend needs to render one market, resolved server-side so no client re-derives it — the market row, its locales, the currencies it trades in and its tax classes; WHICH locale to actually render in and where that answer came from; which key to read and write a translation under; whether the prices it will be handed are gross or net; and whether any of it is trustworthy. One call rather than five, and — more to the point — one place the resolution rules live, instead of a slightly different copy of them in every storefront. This one resolves the market by id only: unlike /readiness, /clone and /backfill, a market CODE here is a 400, not a lookup.
     *
     * @param {string} id - The market. A uuid — this route does not accept a market code.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketContext>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsContext(id: string): Promise<Models.MarketContext>;
    marketsContext(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MarketContext> {
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

        const apiPath = '/v1/markets/{id}/context'.replace('{id}', id);
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
     * A tenant has ONE default market: it is what every call naming none falls back to. Moving the flag from a client was promote-then-demote, two PATCHes that leave two defaults when the second does not land and none when the first does. This is the one call instead — it promotes the market in the path and demotes whoever held the flag in the same operation, writing once per row that was actually wrong and not touching the rest. Accepts an id or a market CODE. Answers the market plus the codes it demoted; repeating the call writes nothing.
     *
     * @param {string} params.id - The market to promote — a uuid or a market code.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketMakeDefaultResponse>}
     */
    marketsMakeDefault(params: { id: string, data: object }): Promise<Models.MarketMakeDefaultResponse>;
    /**
     * A tenant has ONE default market: it is what every call naming none falls back to. Moving the flag from a client was promote-then-demote, two PATCHes that leave two defaults when the second does not land and none when the first does. This is the one call instead — it promotes the market in the path and demotes whoever held the flag in the same operation, writing once per row that was actually wrong and not touching the rest. Accepts an id or a market CODE. Answers the market plus the codes it demoted; repeating the call writes nothing.
     *
     * @param {string} id - The market to promote — a uuid or a market code.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketMakeDefaultResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsMakeDefault(id: string, data: object): Promise<Models.MarketMakeDefaultResponse>;
    marketsMakeDefault(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.MarketMakeDefaultResponse> {
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

        const apiPath = '/v1/markets/{id}/make-default'.replace('{id}', id);
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
     * Whether this market can actually trade, and if not, what is missing. Every check runs on every call and comes back with its own severity, so the answer is a diagnosis rather than a yes or a no: a market with no currency registered has nothing to price in and a market with no tax class has nothing to tax with, and both of those fail BLOCKING, which is what turns `ready` false. A check that is merely degraded — no locale of its own, while the tenant declares a fallback_locale that covers for it — fails as a warning and leaves the market serviceable. Resolves the market by uuid OR by market code.
     *
     * @param {string} params.id - The market — a uuid or a market code.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketReadinessReport>}
     */
    marketsReadiness(params: { id: string }): Promise<Models.MarketReadinessReport>;
    /**
     * Whether this market can actually trade, and if not, what is missing. Every check runs on every call and comes back with its own severity, so the answer is a diagnosis rather than a yes or a no: a market with no currency registered has nothing to price in and a market with no tax class has nothing to tax with, and both of those fail BLOCKING, which is what turns `ready` false. A check that is merely degraded — no locale of its own, while the tenant declares a fallback_locale that covers for it — fails as a warning and leaves the market serviceable. Resolves the market by uuid OR by market code.
     *
     * @param {string} id - The market — a uuid or a market code.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketReadinessReport>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsReadiness(id: string): Promise<Models.MarketReadinessReport>;
    marketsReadiness(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.MarketReadinessReport> {
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

        const apiPath = '/v1/markets/{id}/readiness'.replace('{id}', id);
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
     * Every column is an exact-match filter and they combine with AND (?code=EUR); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing. `market_id` is not among them: the owning market comes from the path and overwrites anything the query says. An unknown but well-formed market lists empty rather than 404 — the parent is filtered on, not verified.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - Exact match on `id`. Primary key of this currency registration. The currency is named by `code` everywhere else.
     * @param {string} params.code - Exact match on `code`. ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
     * @param {boolean} params.isDefault - Exact match on `is_default`. The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
     * @param {number} params.position - Exact match on `position`. Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
     * @param {string} params.createdAt - Exact match on `created_at`. When the currency was registered on this market. Set by the database; never writable.
     * @param {number} params.limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} params.offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} params.order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, market_id, code, is_default, position, created_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrencyList>}
     */
    marketsCurrenciesList(params: { marketId: string, id?: string, code?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.MarketCurrencyList>;
    /**
     * Every column is an exact-match filter and they combine with AND (?code=EUR); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing. `market_id` is not among them: the owning market comes from the path and overwrites anything the query says. An unknown but well-formed market lists empty rather than 404 — the parent is filtered on, not verified.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - Exact match on `id`. Primary key of this currency registration. The currency is named by `code` everywhere else.
     * @param {string} code - Exact match on `code`. ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
     * @param {boolean} isDefault - Exact match on `is_default`. The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
     * @param {number} position - Exact match on `position`. Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
     * @param {string} createdAt - Exact match on `created_at`. When the currency was registered on this market. Set by the database; never writable.
     * @param {number} limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, market_id, code, is_default, position, created_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrencyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCurrenciesList(marketId: string, id?: string, code?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.MarketCurrencyList>;
    marketsCurrenciesList(
        paramsOrFirst: { marketId: string, id?: string, code?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.MarketCurrencyList> {
        let params: { marketId: string, id?: string, code?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id?: string, code?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                isDefault: rest[2] as boolean,
                position: rest[3] as number,
                createdAt: rest[4] as string,
                limit: rest[5] as number,
                offset: rest[6] as number,
                order: rest[7] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const isDefault = params.isDefault;
        const position = params.position;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/currencies'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * The owning market comes from the path and overrides anything in the body.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.code - ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
     * @param {boolean} params.isDefault - The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
     * @param {number} params.position - Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrency>}
     */
    marketsCurrenciesCreate(params: { marketId: string, code: string, isDefault?: boolean, position?: number }): Promise<Models.MarketCurrency>;
    /**
     * The owning market comes from the path and overrides anything in the body.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} code - ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
     * @param {boolean} isDefault - The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
     * @param {number} position - Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrency>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCurrenciesCreate(marketId: string, code: string, isDefault?: boolean, position?: number): Promise<Models.MarketCurrency>;
    marketsCurrenciesCreate(
        paramsOrFirst: { marketId: string, code: string, isDefault?: boolean, position?: number } | string,
        ...rest: [(string)?, (boolean)?, (number)?]    
    ): Promise<Models.MarketCurrency> {
        let params: { marketId: string, code: string, isDefault?: boolean, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, code: string, isDefault?: boolean, position?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                code: rest[0] as string,
                isDefault: rest[1] as boolean,
                position: rest[2] as number            
            };
        }
        
        const marketId = params.marketId;
        const code = params.code;
        const isDefault = params.isDefault;
        const position = params.position;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/markets/{market_id}/currencies'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Scoped to the market in the path — a row belonging to another market is a 404 here, and is never deleted.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The currency of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrencyDeleted>}
     */
    marketsCurrenciesDelete(params: { marketId: string, id: string }): Promise<Models.MarketCurrencyDeleted>;
    /**
     * Scoped to the market in the path — a row belonging to another market is a 404 here, and is never deleted.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The currency of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrencyDeleted>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCurrenciesDelete(marketId: string, id: string): Promise<Models.MarketCurrencyDeleted>;
    marketsCurrenciesDelete(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketCurrencyDeleted> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/currencies/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * Scoped strictly to the market in the path: a row belonging to another market is a 404 here, never a 200.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The currency of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrency>}
     */
    marketsCurrenciesGet(params: { marketId: string, id: string }): Promise<Models.MarketCurrency>;
    /**
     * Scoped strictly to the market in the path: a row belonging to another market is a 404 here, never a 200.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The currency of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrency>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCurrenciesGet(marketId: string, id: string): Promise<Models.MarketCurrency>;
    marketsCurrenciesGet(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketCurrency> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/currencies/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * Partial: omitted fields keep their value.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The currency of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} params.code - ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
     * @param {boolean} params.isDefault - The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
     * @param {number} params.position - Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrency>}
     */
    marketsCurrenciesUpdate(params: { marketId: string, id: string, code?: string, isDefault?: boolean, position?: number }): Promise<Models.MarketCurrency>;
    /**
     * Partial: omitted fields keep their value.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The currency of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} code - ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
     * @param {boolean} isDefault - The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
     * @param {number} position - Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketCurrency>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsCurrenciesUpdate(marketId: string, id: string, code?: string, isDefault?: boolean, position?: number): Promise<Models.MarketCurrency>;
    marketsCurrenciesUpdate(
        paramsOrFirst: { marketId: string, id: string, code?: string, isDefault?: boolean, position?: number } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (number)?]    
    ): Promise<Models.MarketCurrency> {
        let params: { marketId: string, id: string, code?: string, isDefault?: boolean, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string, code?: string, isDefault?: boolean, position?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                isDefault: rest[2] as boolean,
                position: rest[3] as number            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const isDefault = params.isDefault;
        const position = params.position;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/currencies/{id}'.replace('{market_id}', marketId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Every column is an exact-match filter and they combine with AND (?code=de-DE); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing. `market_id` is not among them: the owning market comes from the path and overwrites anything the query says. An unknown but well-formed market lists empty rather than 404 — the parent is filtered on, not verified.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - Exact match on `id`. Primary key of this locale registration. The locale is named by `code` everywhere else.
     * @param {string} params.code - Exact match on `code`. Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
     * @param {string} params.language - Exact match on `language`. ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
     * @param {string} params.country - Exact match on `country`. ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
     * @param {boolean} params.isDefault - Exact match on `is_default`. The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
     * @param {number} params.position - Exact match on `position`. Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
     * @param {string} params.createdAt - Exact match on `created_at`. When the locale was registered on this market. Set by the database; never writable.
     * @param {number} params.limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} params.offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} params.order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, market_id, code, language, country, is_default, position, created_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocaleList>}
     */
    marketsLocalesList(params: { marketId: string, id?: string, code?: string, language?: string, country?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.MarketLocaleList>;
    /**
     * Every column is an exact-match filter and they combine with AND (?code=de-DE); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing. `market_id` is not among them: the owning market comes from the path and overwrites anything the query says. An unknown but well-formed market lists empty rather than 404 — the parent is filtered on, not verified.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - Exact match on `id`. Primary key of this locale registration. The locale is named by `code` everywhere else.
     * @param {string} code - Exact match on `code`. Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
     * @param {string} language - Exact match on `language`. ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
     * @param {string} country - Exact match on `country`. ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
     * @param {boolean} isDefault - Exact match on `is_default`. The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
     * @param {number} position - Exact match on `position`. Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
     * @param {string} createdAt - Exact match on `created_at`. When the locale was registered on this market. Set by the database; never writable.
     * @param {number} limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, market_id, code, language, country, is_default, position, created_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocaleList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesList(marketId: string, id?: string, code?: string, language?: string, country?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.MarketLocaleList>;
    marketsLocalesList(
        paramsOrFirst: { marketId: string, id?: string, code?: string, language?: string, country?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (boolean)?, (number)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.MarketLocaleList> {
        let params: { marketId: string, id?: string, code?: string, language?: string, country?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id?: string, code?: string, language?: string, country?: string, isDefault?: boolean, position?: number, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                language: rest[2] as string,
                country: rest[3] as string,
                isDefault: rest[4] as boolean,
                position: rest[5] as number,
                createdAt: rest[6] as string,
                limit: rest[7] as number,
                offset: rest[8] as number,
                order: rest[9] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const language = params.language;
        const country = params.country;
        const isDefault = params.isDefault;
        const position = params.position;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/locales'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof language !== 'undefined') {
            apiPayload['language'] = language;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * The owning market comes from the path and overrides anything in the body.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.code - Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
     * @param {string} params.country - ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
     * @param {string} params.language - ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
     * @param {boolean} params.isDefault - The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
     * @param {number} params.position - Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesCreate(params: { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number }): Promise<Models.MarketLocale>;
    /**
     * The owning market comes from the path and overrides anything in the body.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} code - Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
     * @param {string} country - ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
     * @param {string} language - ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
     * @param {boolean} isDefault - The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
     * @param {number} position - Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesCreate(marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number): Promise<Models.MarketLocale>;
    marketsLocalesCreate(
        paramsOrFirst: { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (number)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, code: string, country: string, language: string, isDefault?: boolean, position?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                code: rest[0] as string,
                country: rest[1] as string,
                language: rest[2] as string,
                isDefault: rest[3] as boolean,
                position: rest[4] as number            
            };
        }
        
        const marketId = params.marketId;
        const code = params.code;
        const country = params.country;
        const language = params.language;
        const isDefault = params.isDefault;
        const position = params.position;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof country === 'undefined') {
            throw new RevenexxException('Missing required parameter: "country"');
        }
        if (typeof language === 'undefined') {
            throw new RevenexxException('Missing required parameter: "language"');
        }

        const apiPath = '/v1/markets/{market_id}/locales'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof language !== 'undefined') {
            apiPayload['language'] = language;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Scoped to the market in the path — a row belonging to another market is a 404 here, and is never deleted.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The locale of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocaleDeleted>}
     */
    marketsLocalesDelete(params: { marketId: string, id: string }): Promise<Models.MarketLocaleDeleted>;
    /**
     * Scoped to the market in the path — a row belonging to another market is a 404 here, and is never deleted.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The locale of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocaleDeleted>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesDelete(marketId: string, id: string): Promise<Models.MarketLocaleDeleted>;
    marketsLocalesDelete(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketLocaleDeleted> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * Scoped strictly to the market in the path: a row belonging to another market is a 404 here, never a 200.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The locale of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesGet(params: { marketId: string, id: string }): Promise<Models.MarketLocale>;
    /**
     * Scoped strictly to the market in the path: a row belonging to another market is a 404 here, never a 200.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The locale of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesGet(marketId: string, id: string): Promise<Models.MarketLocale>;
    marketsLocalesGet(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * Partial: omitted fields keep their value.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The locale of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} params.code - Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
     * @param {string} params.country - ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
     * @param {boolean} params.isDefault - The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
     * @param {string} params.language - ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
     * @param {number} params.position - Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     */
    marketsLocalesUpdate(params: { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number }): Promise<Models.MarketLocale>;
    /**
     * Partial: omitted fields keep their value.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The locale of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} code - Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
     * @param {string} country - ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
     * @param {boolean} isDefault - The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
     * @param {string} language - ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
     * @param {number} position - Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketLocale>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsLocalesUpdate(marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number): Promise<Models.MarketLocale>;
    marketsLocalesUpdate(
        paramsOrFirst: { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (number)?]    
    ): Promise<Models.MarketLocale> {
        let params: { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string, code?: string, country?: string, isDefault?: boolean, language?: string, position?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                country: rest[2] as string,
                isDefault: rest[3] as boolean,
                language: rest[4] as string,
                position: rest[5] as number            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const country = params.country;
        const isDefault = params.isDefault;
        const language = params.language;
        const position = params.position;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/locales/{id}'.replace('{market_id}', marketId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof language !== 'undefined') {
            apiPayload['language'] = language;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * Every column is an exact-match filter and they combine with AND (?code=standard); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing. `market_id` is not among them: the owning market comes from the path and overwrites anything the query says. An unknown but well-formed market lists empty rather than 404 — the parent is filtered on, not verified.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - Exact match on `id`. Primary key of this tax class. The class is named by `code` everywhere else, including by other apps.
     * @param {string} params.code - Exact match on `code`. Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
     * @param {string} params.name - Exact match on `name`. Display name of the rate bucket, in the operator's own language.
     * @param {string} params.labels - Exact match on `labels`. Exact whole-document equality on the jsonb: the value is a whole JSON document and has to match every key, so this is not a path or a containment query. Key order and whitespace are irrelevant — the comparison is semantic. A value that does not parse as JSON is refused with 400 `invalid_value` rather than answered with zero rows. Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
     * @param {number} params.rate - Exact match on `rate`. Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
     * @param {boolean} params.isDefault - Exact match on `is_default`. The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
     * @param {number} params.position - Exact match on `position`. Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
     * @param {string} params.createdAt - Exact match on `created_at`. When the tax class was created on this market. Set by the database; never writable.
     * @param {string} params.updatedAt - Exact match on `updated_at`. When the tax class was last written. Set by the database on every update; never writable.
     * @param {number} params.limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} params.offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} params.order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, market_id, code, name, labels, rate, is_default, position, created_at, updated_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClassList>}
     */
    marketsTaxClassesList(params: { marketId: string, id?: string, code?: string, name?: string, labels?: string, rate?: number, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.MarketTaxClassList>;
    /**
     * Every column is an exact-match filter and they combine with AND (?code=standard); each one is declared as a query parameter above. A `?column=value` this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list — and `filter` echoes what was actually applied, which is the only way to tell that apart from a filter that matched nothing. `market_id` is not among them: the owning market comes from the path and overwrites anything the query says. An unknown but well-formed market lists empty rather than 404 — the parent is filtered on, not verified.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - Exact match on `id`. Primary key of this tax class. The class is named by `code` everywhere else, including by other apps.
     * @param {string} code - Exact match on `code`. Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
     * @param {string} name - Exact match on `name`. Display name of the rate bucket, in the operator's own language.
     * @param {string} labels - Exact match on `labels`. Exact whole-document equality on the jsonb: the value is a whole JSON document and has to match every key, so this is not a path or a containment query. Key order and whitespace are irrelevant — the comparison is semantic. A value that does not parse as JSON is refused with 400 `invalid_value` rather than answered with zero rows. Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
     * @param {number} rate - Exact match on `rate`. Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
     * @param {boolean} isDefault - Exact match on `is_default`. The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
     * @param {number} position - Exact match on `position`. Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
     * @param {string} createdAt - Exact match on `created_at`. When the tax class was created on this market. Set by the database; never writable.
     * @param {string} updatedAt - Exact match on `updated_at`. When the tax class was last written. Set by the database on every update; never writable.
     * @param {number} limit - Page size (default 50, max 200). Out of range is CLAMPED, not refused — ?limit=999 answers 200 with 200 rows, and `page.limit` says so.
     * @param {number} offset - Row offset for pagination (default 0). A negative offset is clamped to 0 rather than refused.
     * @param {string} order - Sort as 'column' | 'column.asc' | 'column.desc'. The direction is lower case, and the column has to exist: id, market_id, code, name, labels, rate, is_default, position, created_at, updated_at.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClassList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesList(marketId: string, id?: string, code?: string, name?: string, labels?: string, rate?: number, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.MarketTaxClassList>;
    marketsTaxClassesList(
        paramsOrFirst: { marketId: string, id?: string, code?: string, name?: string, labels?: string, rate?: number, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (boolean)?, (number)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.MarketTaxClassList> {
        let params: { marketId: string, id?: string, code?: string, name?: string, labels?: string, rate?: number, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id?: string, code?: string, name?: string, labels?: string, rate?: number, isDefault?: boolean, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                name: rest[2] as string,
                labels: rest[3] as string,
                rate: rest[4] as number,
                isDefault: rest[5] as boolean,
                position: rest[6] as number,
                createdAt: rest[7] as string,
                updatedAt: rest[8] as string,
                limit: rest[9] as number,
                offset: rest[10] as number,
                order: rest[11] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const name = params.name;
        const labels = params.labels;
        const rate = params.rate;
        const isDefault = params.isDefault;
        const position = params.position;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes'.replace('{market_id}', marketId);
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
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof rate !== 'undefined') {
            apiPayload['rate'] = rate;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * The owning market comes from the path and overrides anything in the body.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.code - Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
     * @param {string} params.name - Display name of the rate bucket, in the operator's own language.
     * @param {boolean} params.isDefault - The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
     * @param {object} params.labels - Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
     * @param {number} params.position - Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
     * @param {number} params.rate - Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesCreate(params: { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number }): Promise<Models.MarketTaxClass>;
    /**
     * The owning market comes from the path and overrides anything in the body.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} code - Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
     * @param {string} name - Display name of the rate bucket, in the operator's own language.
     * @param {boolean} isDefault - The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
     * @param {object} labels - Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
     * @param {number} position - Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
     * @param {number} rate - Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesCreate(marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number): Promise<Models.MarketTaxClass>;
    marketsTaxClassesCreate(
        paramsOrFirst: { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (number)?, (number)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, code: string, name: string, isDefault?: boolean, labels?: object, position?: number, rate?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                code: rest[0] as string,
                name: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                position: rest[4] as number,
                rate: rest[5] as number            
            };
        }
        
        const marketId = params.marketId;
        const code = params.code;
        const name = params.name;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const position = params.position;
        const rate = params.rate;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes'.replace('{market_id}', marketId);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof rate !== 'undefined') {
            apiPayload['rate'] = rate;
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
     * Refused with a 409 for as long as another app still points at this tax class by its code. A tax class is the source of record for a rate, and other apps name it by CODE with no foreign key behind it — a cross-app FK is what ADR-0055 forbids. So this asks the shipping app what still uses the code (shipping.tax-classes.usage) and answers 409 with the count and the first few names rather than leaving methods quoting a rate nobody defines. The check FAILS OPEN: a tenant without the shipping app, or an unreachable one, deletes as before, and the answer says which happened in 'usage_checked'. Matched on the code, which is shared across markets — the refusal message says so.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The tax class of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClassDeleted>}
     */
    marketsTaxClassesDelete(params: { marketId: string, id: string }): Promise<Models.MarketTaxClassDeleted>;
    /**
     * Refused with a 409 for as long as another app still points at this tax class by its code. A tax class is the source of record for a rate, and other apps name it by CODE with no foreign key behind it — a cross-app FK is what ADR-0055 forbids. So this asks the shipping app what still uses the code (shipping.tax-classes.usage) and answers 409 with the count and the first few names rather than leaving methods quoting a rate nobody defines. The check FAILS OPEN: a tenant without the shipping app, or an unreachable one, deletes as before, and the answer says which happened in 'usage_checked'. Matched on the code, which is shared across markets — the refusal message says so.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The tax class of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClassDeleted>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesDelete(marketId: string, id: string): Promise<Models.MarketTaxClassDeleted>;
    marketsTaxClassesDelete(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketTaxClassDeleted> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * Scoped strictly to the market in the path: a row belonging to another market is a 404 here, never a 200.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The tax class of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesGet(params: { marketId: string, id: string }): Promise<Models.MarketTaxClass>;
    /**
     * Scoped strictly to the market in the path: a row belonging to another market is a 404 here, never a 200.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The tax class of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesGet(marketId: string, id: string): Promise<Models.MarketTaxClass>;
    marketsTaxClassesGet(
        paramsOrFirst: { marketId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{market_id}', marketId).replace('{id}', id);
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
     * Partial: omitted fields keep their value.
     *
     * @param {string} params.marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} params.id - The tax class of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} params.code - Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
     * @param {boolean} params.isDefault - The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
     * @param {object} params.labels - Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
     * @param {string} params.name - Display name of the rate bucket, in the operator's own language.
     * @param {number} params.position - Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
     * @param {number} params.rate - Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     */
    marketsTaxClassesUpdate(params: { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number }): Promise<Models.MarketTaxClass>;
    /**
     * Partial: omitted fields keep their value.
     *
     * @param {string} marketId - The owning market. A uuid — this route does not accept a market code. An unknown market lists empty rather than 404.
     * @param {string} id - The tax class of a market, by its primary key. A uuid — this route does not resolve a code, so a segment that will not cast is a 400 before any row is read.
     * @param {string} code - Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
     * @param {boolean} isDefault - The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
     * @param {object} labels - Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
     * @param {string} name - Display name of the rate bucket, in the operator's own language.
     * @param {number} position - Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
     * @param {number} rate - Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MarketTaxClass>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketsTaxClassesUpdate(marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number): Promise<Models.MarketTaxClass>;
    marketsTaxClassesUpdate(
        paramsOrFirst: { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (object)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.MarketTaxClass> {
        let params: { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { marketId: string, id: string, code?: string, isDefault?: boolean, labels?: object, name?: string, position?: number, rate?: number };
        } else {
            params = {
                marketId: paramsOrFirst as string,
                id: rest[0] as string,
                code: rest[1] as string,
                isDefault: rest[2] as boolean,
                labels: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                rate: rest[6] as number            
            };
        }
        
        const marketId = params.marketId;
        const id = params.id;
        const code = params.code;
        const isDefault = params.isDefault;
        const labels = params.labels;
        const name = params.name;
        const position = params.position;
        const rate = params.rate;

        if (typeof marketId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "marketId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/markets/{market_id}/tax_classes/{id}'.replace('{market_id}', marketId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof rate !== 'undefined') {
            apiPayload['rate'] = rate;
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
