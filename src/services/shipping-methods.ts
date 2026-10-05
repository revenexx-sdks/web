import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PricingType } from '../enums/pricing-type';
import { ShippingMethodMatrixBasis } from '../enums/shipping-method-matrix-basis';
import { ShippingMethodPricingType } from '../enums/shipping-method-pricing-type';

export class ShippingMethods {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filterable by exact column value — `?code=`, `?enabled=`, `?pricing_type=`, `?carrier_id=`, `?carrier=` and `?tax_class=` are applied as equalities and echoed back in `filter`. `?carrier_id=` and `?carrier=` are the two halves of one question: the first finds the methods holding a reference, the second the ones still resolving through the legacy code text. A query key that names no column of this entity is SILENTLY IGNORED — `?status=` on this route is the trap, since carriers have a status and methods do not: the page comes back unfiltered, 200, with an empty `filter`.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} params.offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc' — a bare 'column' sorts ascending. The column must be one this entity has; anything else is a 400 from the data plane.
     * @param {string} params.code - Exact-match filter on `code`. Unique per tenant, so this resolves a code a checkout already holds without paging the whole list.
     * @param {boolean} params.enabled - Exact-match filter on `enabled`. Only enabled methods are ever quoted, so this is the storefront-facing subset.
     * @param {PricingType} params.pricingType - Exact-match filter on `pricing_type`. Pricing model — `matrix` is the set whose tiers a rate-matrix editor has to load.
     * @param {string} params.carrierId - Exact-match filter on `carrier_id`. The methods that ship with one carrier — what a merchant needs before pausing it. Matches `carrier_id` only, never the legacy `carrier` text.
     * @param {string} params.carrier - Exact-match filter on `carrier`. The other half of that question: the methods still resolving their carrier through the legacy free-text CODE rather than a reference. Together with `?carrier_id=` this is how a merchant finds what a carrier is still holding before retiring it.
     * @param {string} params.externalId - Exact-match filter on `external_id`. The method one foreign system owns, by the key that system knows it by — how an import finds the row it wrote last run instead of creating a second one. Unique per tenant, so this answers at most one method; a method nobody imported matches nothing.
     * @param {string} params.taxClass - Exact-match filter on `tax_class`. The methods naming one tax class — the same question GET /shipping/tax-classes/{code}/usage counts, when the caller wants the rows rather than the count. Only a method's OWN class; a method falling back to the tenant setting does not match.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsList(params?: { limit?: number, offset?: number, order?: string, code?: string, enabled?: boolean, pricingType?: PricingType, carrierId?: string, carrier?: string, externalId?: string, taxClass?: string }): Promise<{}>;
    /**
     * Filterable by exact column value — `?code=`, `?enabled=`, `?pricing_type=`, `?carrier_id=`, `?carrier=` and `?tax_class=` are applied as equalities and echoed back in `filter`. `?carrier_id=` and `?carrier=` are the two halves of one question: the first finds the methods holding a reference, the second the ones still resolving through the legacy code text. A query key that names no column of this entity is SILENTLY IGNORED — `?status=` on this route is the trap, since carriers have a status and methods do not: the page comes back unfiltered, 200, with an empty `filter`.
     *
     * @param {number} limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @param {string} order - Sort as 'column.asc' | 'column.desc' — a bare 'column' sorts ascending. The column must be one this entity has; anything else is a 400 from the data plane.
     * @param {string} code - Exact-match filter on `code`. Unique per tenant, so this resolves a code a checkout already holds without paging the whole list.
     * @param {boolean} enabled - Exact-match filter on `enabled`. Only enabled methods are ever quoted, so this is the storefront-facing subset.
     * @param {PricingType} pricingType - Exact-match filter on `pricing_type`. Pricing model — `matrix` is the set whose tiers a rate-matrix editor has to load.
     * @param {string} carrierId - Exact-match filter on `carrier_id`. The methods that ship with one carrier — what a merchant needs before pausing it. Matches `carrier_id` only, never the legacy `carrier` text.
     * @param {string} carrier - Exact-match filter on `carrier`. The other half of that question: the methods still resolving their carrier through the legacy free-text CODE rather than a reference. Together with `?carrier_id=` this is how a merchant finds what a carrier is still holding before retiring it.
     * @param {string} externalId - Exact-match filter on `external_id`. The method one foreign system owns, by the key that system knows it by — how an import finds the row it wrote last run instead of creating a second one. Unique per tenant, so this answers at most one method; a method nobody imported matches nothing.
     * @param {string} taxClass - Exact-match filter on `tax_class`. The methods naming one tax class — the same question GET /shipping/tax-classes/{code}/usage counts, when the caller wants the rows rather than the count. Only a method's OWN class; a method falling back to the tenant setting does not match.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsList(limit?: number, offset?: number, order?: string, code?: string, enabled?: boolean, pricingType?: PricingType, carrierId?: string, carrier?: string, externalId?: string, taxClass?: string): Promise<{}>;
    shippingMethodsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, code?: string, enabled?: boolean, pricingType?: PricingType, carrierId?: string, carrier?: string, externalId?: string, taxClass?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (boolean)?, (PricingType)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, code?: string, enabled?: boolean, pricingType?: PricingType, carrierId?: string, carrier?: string, externalId?: string, taxClass?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, code?: string, enabled?: boolean, pricingType?: PricingType, carrierId?: string, carrier?: string, externalId?: string, taxClass?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                code: rest[2] as string,
                enabled: rest[3] as boolean,
                pricingType: rest[4] as PricingType,
                carrierId: rest[5] as string,
                carrier: rest[6] as string,
                externalId: rest[7] as string,
                taxClass: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const code = params.code;
        const enabled = params.enabled;
        const pricingType = params.pricingType;
        const carrierId = params.carrierId;
        const carrier = params.carrier;
        const externalId = params.externalId;
        const taxClass = params.taxClass;


        const apiPath = '/v1/shipping/methods';
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
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof pricingType !== 'undefined') {
            apiPayload['pricing_type'] = pricingType;
        }
        if (typeof carrierId !== 'undefined') {
            apiPayload['carrier_id'] = carrierId;
        }
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof taxClass !== 'undefined') {
            apiPayload['tax_class'] = taxClass;
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
     * A shipping method is the line a buyer picks in the checkout: a pricing model ('fixed', 'free' or 'matrix'), the countries it may be offered into, a free-above threshold, and the carrier it ships with. The method owns the PRICE; the delivery promise — tracking template, cut-off, handling and transit days — is inherited from the carrier wherever the method states none of its own. A create cannot omit `code` and `name`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` — that is the 409. The new method is quoted by nobody until two further things are true: `enabled` defaults to FALSE, and a 'matrix' method has no tiers yet — until POST or PUT …/tiers gives it some it appears in `excluded` with 'matrix has no rate tiers configured' rather than in the rates. `carrier_id` and the legacy `carrier` code are both accepted and neither is verified against the carrier table here: an unmatched code is a plain carrier name on the rate, not an error.
     *
     * @param {string} params.code - Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
     * @param {string} params.name - Display name shown in the checkout.
     * @param {string} params.carrier - Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
     * @param {string} params.carrierId - The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
     * @param {string[]} params.countries - The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the carrier's own reach.
     * @param {string} params.currency - ISO 4217 code (default EUR) the price, the free-above threshold and the tiers are in. Exactly three characters — the column says so. Every rate carries it, and a rate request naming another currency is not offered this method: this app converts nothing.
     * @param {string} params.description - The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
     * @param {boolean} params.enabled - Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
     * @param {number} params.etaDaysMax - Transit time upper bound in calendar days. Falls back to the carrier's when null.
     * @param {number} params.etaDaysMin - Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
     * @param {string} params.externalId - The key this method has in the system that OWNS it — the shipment method as an ERP numbers it, which is rarely the `code` a checkout stores. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a method a merchant maintains here carries none.
     * @param {object} params.externalRefs - Every OTHER system that knows this method, keyed by system name — a second ERP, a marketplace's own carrier code, the shop this catalogue was migrated from. `external_id` names the leading system; this is the rest. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} params.freeAbove - Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold; a negative amount is refused with 400 `invalid_free_above`.
     * @param {object} params.labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {string} params.matrixAttribute - Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at, and required with that basis (400 `matrix_attribute_required`). Free text: the set of attributes is the catalogue's, not this app's.
     * @param {ShippingMethodMatrixBasis} params.matrixBasis - The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value (the net or gross figure the market's free_above_compares names, else the bare order_value), or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
     * @param {object} params.metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {number} params.position - Sort order in the checkout (default 0) — a rate answer is returned in this order.
     * @param {number} params.price - The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} params.pricingType - Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
     * @param {number} params.quoteAbove - Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically. A 'matrix' method only: set on any other, or left in place while the method moves off 'matrix', it is refused with 400 `quote_above_not_matrix`.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} params.sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {string} params.taxClass - This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsCreate(params: { code: string, name: string, carrier?: string, carrierId?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string }): Promise<Models.ShippingMethod>;
    /**
     * A shipping method is the line a buyer picks in the checkout: a pricing model ('fixed', 'free' or 'matrix'), the countries it may be offered into, a free-above threshold, and the carrier it ships with. The method owns the PRICE; the delivery promise — tracking template, cut-off, handling and transit days — is inherited from the carrier wherever the method states none of its own. A create cannot omit `code` and `name`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` — that is the 409. The new method is quoted by nobody until two further things are true: `enabled` defaults to FALSE, and a 'matrix' method has no tiers yet — until POST or PUT …/tiers gives it some it appears in `excluded` with 'matrix has no rate tiers configured' rather than in the rates. `carrier_id` and the legacy `carrier` code are both accepted and neither is verified against the carrier table here: an unmatched code is a plain carrier name on the rate, not an error.
     *
     * @param {string} code - Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
     * @param {string} name - Display name shown in the checkout.
     * @param {string} carrier - Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
     * @param {string} carrierId - The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
     * @param {string[]} countries - The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the carrier's own reach.
     * @param {string} currency - ISO 4217 code (default EUR) the price, the free-above threshold and the tiers are in. Exactly three characters — the column says so. Every rate carries it, and a rate request naming another currency is not offered this method: this app converts nothing.
     * @param {string} description - The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
     * @param {boolean} enabled - Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
     * @param {number} etaDaysMax - Transit time upper bound in calendar days. Falls back to the carrier's when null.
     * @param {number} etaDaysMin - Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
     * @param {string} externalId - The key this method has in the system that OWNS it — the shipment method as an ERP numbers it, which is rarely the `code` a checkout stores. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a method a merchant maintains here carries none.
     * @param {object} externalRefs - Every OTHER system that knows this method, keyed by system name — a second ERP, a marketplace's own carrier code, the shop this catalogue was migrated from. `external_id` names the leading system; this is the rest. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} freeAbove - Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold; a negative amount is refused with 400 `invalid_free_above`.
     * @param {object} labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {string} matrixAttribute - Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at, and required with that basis (400 `matrix_attribute_required`). Free text: the set of attributes is the catalogue's, not this app's.
     * @param {ShippingMethodMatrixBasis} matrixBasis - The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value (the net or gross figure the market's free_above_compares names, else the bare order_value), or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
     * @param {object} metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {number} position - Sort order in the checkout (default 0) — a rate answer is returned in this order.
     * @param {number} price - The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} pricingType - Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
     * @param {number} quoteAbove - Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically. A 'matrix' method only: set on any other, or left in place while the method moves off 'matrix', it is refused with 400 `quote_above_not_matrix`.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {string} taxClass - This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsCreate(code: string, name: string, carrier?: string, carrierId?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string): Promise<Models.ShippingMethod>;
    shippingMethodsCreate(
        paramsOrFirst: { code: string, name: string, carrier?: string, carrierId?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (boolean)?, (number)?, (number)?, (string)?, (object)?, (number)?, (object)?, (string)?, (ShippingMethodMatrixBasis)?, (object)?, (number)?, (number)?, (ShippingMethodPricingType)?, (number)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.ShippingMethod> {
        let params: { code: string, name: string, carrier?: string, carrierId?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, carrier?: string, carrierId?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                carrier: rest[1] as string,
                carrierId: rest[2] as string,
                countries: rest[3] as string[],
                currency: rest[4] as string,
                description: rest[5] as string,
                enabled: rest[6] as boolean,
                etaDaysMax: rest[7] as number,
                etaDaysMin: rest[8] as number,
                externalId: rest[9] as string,
                externalRefs: rest[10] as object,
                freeAbove: rest[11] as number,
                labels: rest[12] as object,
                matrixAttribute: rest[13] as string,
                matrixBasis: rest[14] as ShippingMethodMatrixBasis,
                metadata: rest[15] as object,
                position: rest[16] as number,
                price: rest[17] as number,
                pricingType: rest[18] as ShippingMethodPricingType,
                quoteAbove: rest[19] as number,
                sourceData: rest[20] as object,
                sourceSyncedAt: rest[21] as string,
                taxClass: rest[22] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const carrier = params.carrier;
        const carrierId = params.carrierId;
        const countries = params.countries;
        const currency = params.currency;
        const description = params.description;
        const enabled = params.enabled;
        const etaDaysMax = params.etaDaysMax;
        const etaDaysMin = params.etaDaysMin;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const freeAbove = params.freeAbove;
        const labels = params.labels;
        const matrixAttribute = params.matrixAttribute;
        const matrixBasis = params.matrixBasis;
        const metadata = params.metadata;
        const position = params.position;
        const price = params.price;
        const pricingType = params.pricingType;
        const quoteAbove = params.quoteAbove;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const taxClass = params.taxClass;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/shipping/methods';
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof carrierId !== 'undefined') {
            apiPayload['carrier_id'] = carrierId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof etaDaysMax !== 'undefined') {
            apiPayload['eta_days_max'] = etaDaysMax;
        }
        if (typeof etaDaysMin !== 'undefined') {
            apiPayload['eta_days_min'] = etaDaysMin;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof freeAbove !== 'undefined') {
            apiPayload['free_above'] = freeAbove;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof matrixAttribute !== 'undefined') {
            apiPayload['matrix_attribute'] = matrixAttribute;
        }
        if (typeof matrixBasis !== 'undefined') {
            apiPayload['matrix_basis'] = matrixBasis;
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
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof pricingType !== 'undefined') {
            apiPayload['pricing_type'] = pricingType;
        }
        if (typeof quoteAbove !== 'undefined') {
            apiPayload['quote_above'] = quoteAbove;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof taxClass !== 'undefined') {
            apiPayload['tax_class'] = taxClass;
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
     * Runs the carrier seed first, then creates any missing method: the three lines a shop is expected to offer — standard, express and pickup. The app runs this itself on `app.installed`, so a fresh install already has them; calling it by hand afterwards is how a tenant that deleted one gets it back, and calling it twice costs nothing, because it reconciles rather than seeds. The seeded methods deliberately name no carrier: which carrier carries the standard method is a contract, not a default, and a method that says 'dhl' resolves to the seeded DHL row anyway.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsDefaults(): Promise<{}> {

        const apiPath = '/v1/shipping/methods/defaults';
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
     * Deleting one takes every `shipping_rate_tiers` row that points at it with it — the foreign keys decide that, not this route. So the whole rate matrix goes with the method, which is also why this never answers a conflict and why there is no way to recover the table afterwards — for a method a checkout may still be holding in a session, `enabled: false` is the safer edit.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingMethodsDelete(params: { id: string }): Promise<{}>;
    /**
     * Deleting one takes every `shipping_rate_tiers` row that points at it with it — the foreign keys decide that, not this route. So the whole rate matrix goes with the method, which is also why this never answers a conflict and why there is no way to recover the table afterwards — for a method a checkout may still be holding in a session, `enabled: false` is the safer edit.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsDelete(id: string): Promise<{}>;
    shippingMethodsDelete(
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

        const apiPath = '/v1/shipping/methods/{id}'.replace('{id}', id);
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
     * A shipping method is the line a buyer picks in the checkout: a pricing model ('fixed', 'free' or 'matrix'), the countries it may be offered into, a free-above threshold, and the carrier it ships with. The method owns the PRICE; the delivery promise — tracking template, cut-off, handling and transit days — is inherited from the carrier wherever the method states none of its own. This is the CONFIGURATION of one, by row id — not what a buyer would be charged. A matrix method's prices are not in here at all: they are its rate tiers, GET /shipping/methods/{method_id}/tiers, and the price for a given basket is POST /shipping/rates, which is the only place free-above thresholds, country restrictions, the carrier's reach and tax are applied. A checkout that reads `price` off this row prices a matrix method at 0.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsGet(params: { id: string }): Promise<Models.ShippingMethod>;
    /**
     * A shipping method is the line a buyer picks in the checkout: a pricing model ('fixed', 'free' or 'matrix'), the countries it may be offered into, a free-above threshold, and the carrier it ships with. The method owns the PRICE; the delivery promise — tracking template, cut-off, handling and transit days — is inherited from the carrier wherever the method states none of its own. This is the CONFIGURATION of one, by row id — not what a buyer would be charged. A matrix method's prices are not in here at all: they are its rate tiers, GET /shipping/methods/{method_id}/tiers, and the price for a given basket is POST /shipping/rates, which is the only place free-above thresholds, country restrictions, the carrier's reach and tax are applied. A checkout that reads `price` off this row prices a matrix method at 0.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsGet(id: string): Promise<Models.ShippingMethod>;
    shippingMethodsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ShippingMethod> {
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

        const apiPath = '/v1/shipping/methods/{id}'.replace('{id}', id);
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
     * A shipping method is the line a buyer picks in the checkout: a pricing model ('fixed', 'free' or 'matrix'), the countries it may be offered into, a free-above threshold, and the carrier it ships with. The method owns the PRICE; the delivery promise — tracking template, cut-off, handling and transit days — is inherited from the carrier wherever the method states none of its own. A partial update — send only what changes, whether that is taking the method in or out of the checkout, its pricing, the countries it is restricted to or the delivery estimate it states of its own; a payload carrying no column at all is refused rather than answering a row it did not touch. Flipping `enabled` is what puts the method in front of a buyer or takes it away, and a disabled method is reported in the rate answer's `excluded` rather than hidden. Changing `pricing_type` away from 'matrix' does NOT delete the tier table — it stops being read, and changing back reinstates the old prices, so a method switched to 'fixed' and back quotes what it quoted before. Two rows of this tenant may not share `code` or `external_id` — that is the 409.
     *
     * @param {string} params.id - The row id.
     * @param {string} params.carrier - Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
     * @param {string} params.carrierId - The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
     * @param {string} params.code - Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
     * @param {string[]} params.countries - The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the carrier's own reach.
     * @param {string} params.currency - ISO 4217 code (default EUR) the price, the free-above threshold and the tiers are in. Exactly three characters — the column says so. Every rate carries it, and a rate request naming another currency is not offered this method: this app converts nothing.
     * @param {string} params.description - The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
     * @param {boolean} params.enabled - Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
     * @param {number} params.etaDaysMax - Transit time upper bound in calendar days. Falls back to the carrier's when null.
     * @param {number} params.etaDaysMin - Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
     * @param {string} params.externalId - The key this method has in the system that OWNS it — the shipment method as an ERP numbers it, which is rarely the `code` a checkout stores. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a method a merchant maintains here carries none.
     * @param {object} params.externalRefs - Every OTHER system that knows this method, keyed by system name — a second ERP, a marketplace's own carrier code, the shop this catalogue was migrated from. `external_id` names the leading system; this is the rest. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} params.freeAbove - Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold; a negative amount is refused with 400 `invalid_free_above`.
     * @param {object} params.labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {string} params.matrixAttribute - Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at, and required with that basis (400 `matrix_attribute_required`). Free text: the set of attributes is the catalogue's, not this app's.
     * @param {ShippingMethodMatrixBasis} params.matrixBasis - The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value (the net or gross figure the market's free_above_compares names, else the bare order_value), or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
     * @param {object} params.metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {string} params.name - Display name shown in the checkout.
     * @param {number} params.position - Sort order in the checkout (default 0) — a rate answer is returned in this order.
     * @param {number} params.price - The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} params.pricingType - Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
     * @param {number} params.quoteAbove - Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically. A 'matrix' method only: set on any other, or left in place while the method moves off 'matrix', it is refused with 400 `quote_above_not_matrix`.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} params.sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {string} params.taxClass - This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     */
    shippingMethodsUpdate(params: { id: string, carrier?: string, carrierId?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string }): Promise<Models.ShippingMethod>;
    /**
     * A shipping method is the line a buyer picks in the checkout: a pricing model ('fixed', 'free' or 'matrix'), the countries it may be offered into, a free-above threshold, and the carrier it ships with. The method owns the PRICE; the delivery promise — tracking template, cut-off, handling and transit days — is inherited from the carrier wherever the method states none of its own. A partial update — send only what changes, whether that is taking the method in or out of the checkout, its pricing, the countries it is restricted to or the delivery estimate it states of its own; a payload carrying no column at all is refused rather than answering a row it did not touch. Flipping `enabled` is what puts the method in front of a buyer or takes it away, and a disabled method is reported in the rate answer's `excluded` rather than hidden. Changing `pricing_type` away from 'matrix' does NOT delete the tier table — it stops being read, and changing back reinstates the old prices, so a method switched to 'fixed' and back quotes what it quoted before. Two rows of this tenant may not share `code` or `external_id` — that is the 409.
     *
     * @param {string} id - The row id.
     * @param {string} carrier - Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
     * @param {string} carrierId - The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
     * @param {string} code - Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
     * @param {string[]} countries - The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the carrier's own reach.
     * @param {string} currency - ISO 4217 code (default EUR) the price, the free-above threshold and the tiers are in. Exactly three characters — the column says so. Every rate carries it, and a rate request naming another currency is not offered this method: this app converts nothing.
     * @param {string} description - The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
     * @param {boolean} enabled - Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
     * @param {number} etaDaysMax - Transit time upper bound in calendar days. Falls back to the carrier's when null.
     * @param {number} etaDaysMin - Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
     * @param {string} externalId - The key this method has in the system that OWNS it — the shipment method as an ERP numbers it, which is rarely the `code` a checkout stores. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a method a merchant maintains here carries none.
     * @param {object} externalRefs - Every OTHER system that knows this method, keyed by system name — a second ERP, a marketplace's own carrier code, the shop this catalogue was migrated from. `external_id` names the leading system; this is the rest. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} freeAbove - Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold; a negative amount is refused with 400 `invalid_free_above`.
     * @param {object} labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {string} matrixAttribute - Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at, and required with that basis (400 `matrix_attribute_required`). Free text: the set of attributes is the catalogue's, not this app's.
     * @param {ShippingMethodMatrixBasis} matrixBasis - The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value (the net or gross figure the market's free_above_compares names, else the bare order_value), or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
     * @param {object} metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {string} name - Display name shown in the checkout.
     * @param {number} position - Sort order in the checkout (default 0) — a rate answer is returned in this order.
     * @param {number} price - The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
     * @param {ShippingMethodPricingType} pricingType - Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
     * @param {number} quoteAbove - Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically. A 'matrix' method only: set on any other, or left in place while the method moves off 'matrix', it is refused with 400 `quote_above_not_matrix`.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {string} taxClass - This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingMethodsUpdate(id: string, carrier?: string, carrierId?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string): Promise<Models.ShippingMethod>;
    shippingMethodsUpdate(
        paramsOrFirst: { id: string, carrier?: string, carrierId?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (boolean)?, (number)?, (number)?, (string)?, (object)?, (number)?, (object)?, (string)?, (ShippingMethodMatrixBasis)?, (object)?, (string)?, (number)?, (number)?, (ShippingMethodPricingType)?, (number)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.ShippingMethod> {
        let params: { id: string, carrier?: string, carrierId?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, carrier?: string, carrierId?: string, code?: string, countries?: string[], currency?: string, description?: string, enabled?: boolean, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, freeAbove?: number, labels?: object, matrixAttribute?: string, matrixBasis?: ShippingMethodMatrixBasis, metadata?: object, name?: string, position?: number, price?: number, pricingType?: ShippingMethodPricingType, quoteAbove?: number, sourceData?: object, sourceSyncedAt?: string, taxClass?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                carrier: rest[0] as string,
                carrierId: rest[1] as string,
                code: rest[2] as string,
                countries: rest[3] as string[],
                currency: rest[4] as string,
                description: rest[5] as string,
                enabled: rest[6] as boolean,
                etaDaysMax: rest[7] as number,
                etaDaysMin: rest[8] as number,
                externalId: rest[9] as string,
                externalRefs: rest[10] as object,
                freeAbove: rest[11] as number,
                labels: rest[12] as object,
                matrixAttribute: rest[13] as string,
                matrixBasis: rest[14] as ShippingMethodMatrixBasis,
                metadata: rest[15] as object,
                name: rest[16] as string,
                position: rest[17] as number,
                price: rest[18] as number,
                pricingType: rest[19] as ShippingMethodPricingType,
                quoteAbove: rest[20] as number,
                sourceData: rest[21] as object,
                sourceSyncedAt: rest[22] as string,
                taxClass: rest[23] as string            
            };
        }
        
        const id = params.id;
        const carrier = params.carrier;
        const carrierId = params.carrierId;
        const code = params.code;
        const countries = params.countries;
        const currency = params.currency;
        const description = params.description;
        const enabled = params.enabled;
        const etaDaysMax = params.etaDaysMax;
        const etaDaysMin = params.etaDaysMin;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const freeAbove = params.freeAbove;
        const labels = params.labels;
        const matrixAttribute = params.matrixAttribute;
        const matrixBasis = params.matrixBasis;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const price = params.price;
        const pricingType = params.pricingType;
        const quoteAbove = params.quoteAbove;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const taxClass = params.taxClass;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof carrierId !== 'undefined') {
            apiPayload['carrier_id'] = carrierId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof etaDaysMax !== 'undefined') {
            apiPayload['eta_days_max'] = etaDaysMax;
        }
        if (typeof etaDaysMin !== 'undefined') {
            apiPayload['eta_days_min'] = etaDaysMin;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof freeAbove !== 'undefined') {
            apiPayload['free_above'] = freeAbove;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof matrixAttribute !== 'undefined') {
            apiPayload['matrix_attribute'] = matrixAttribute;
        }
        if (typeof matrixBasis !== 'undefined') {
            apiPayload['matrix_basis'] = matrixBasis;
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
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
        }
        if (typeof pricingType !== 'undefined') {
            apiPayload['pricing_type'] = pricingType;
        }
        if (typeof quoteAbove !== 'undefined') {
            apiPayload['quote_above'] = quoteAbove;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof taxClass !== 'undefined') {
            apiPayload['tax_class'] = taxClass;
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
     * The rate matrix of one method — every `from_value` threshold with the price charged at or above it — lowest threshold first. Filterable by `?from_value=` — the unique index is (tenant_id, method_id, from_value), so that addresses one row of the matrix by the threshold it prices rather than by an id a bulk replace has already discarded. The applied filters are echoed in `filter`, which always carries the `method_id` taken from the path.
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {number} params.limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} params.offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc' — a bare 'column' sorts ascending. The column must be one this entity has; anything else is a 400 from the data plane.
     * @param {number} params.fromValue - Exact-match filter on `from_value`. The tier at exactly this threshold. (tenant_id, method_id, from_value) is unique, so this addresses one row of the matrix by what it MEANS rather than by an id a bulk replace has already thrown away.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersList(params: { methodId: string, limit?: number, offset?: number, order?: string, fromValue?: number }): Promise<{}>;
    /**
     * The rate matrix of one method — every `from_value` threshold with the price charged at or above it — lowest threshold first. Filterable by `?from_value=` — the unique index is (tenant_id, method_id, from_value), so that addresses one row of the matrix by the threshold it prices rather than by an id a bulk replace has already discarded. The applied filters are echoed in `filter`, which always carries the `method_id` taken from the path.
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {number} limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @param {string} order - Sort as 'column.asc' | 'column.desc' — a bare 'column' sorts ascending. The column must be one this entity has; anything else is a 400 from the data plane.
     * @param {number} fromValue - Exact-match filter on `from_value`. The tier at exactly this threshold. (tenant_id, method_id, from_value) is unique, so this addresses one row of the matrix by what it MEANS rather than by an id a bulk replace has already thrown away.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersList(methodId: string, limit?: number, offset?: number, order?: string, fromValue?: number): Promise<{}>;
    shippingTiersList(
        paramsOrFirst: { methodId: string, limit?: number, offset?: number, order?: string, fromValue?: number } | string,
        ...rest: [(number)?, (number)?, (string)?, (number)?]    
    ): Promise<{}> {
        let params: { methodId: string, limit?: number, offset?: number, order?: string, fromValue?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, limit?: number, offset?: number, order?: string, fromValue?: number };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                limit: rest[0] as number,
                offset: rest[1] as number,
                order: rest[2] as string,
                fromValue: rest[3] as number            
            };
        }
        
        const methodId = params.methodId;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const fromValue = params.fromValue;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{method_id}', methodId);
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
        if (typeof fromValue !== 'undefined') {
            apiPayload['from_value'] = fromValue;
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
     * A rate tier is one row of a matrix method's price table: a `from_value` threshold and the price charged at or above it. The bound is INCLUSIVE and the winning tier is the one with the highest `from_value` at or below the measured value, so a measure of exactly 10 is priced by the tier at 10. What the number measures is the method's `matrix_basis` — kilograms in the market's own weight unit, items, money in the method's currency, or a named attribute — and the last tier has no upper bound. This adds ONE row to the table of the method in the path, leaving the rest alone — the edit for a merchant who has added a heavier bracket. To lay a whole table down at once use PUT …/tiers (set semantics) or POST …/tiers/ladder (evenly stepped), and note that both of those DISCARD the ids of the rows they replace. Two rows of this tenant may not share the combination of `method_id` + `from_value` — that is the 409. `method_id` is taken from the path on every write, so a body naming a different method is ignored rather than obeyed.
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {number} params.fromValue - Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Defaults to 0.
     * @param {number} params.position - Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
     * @param {number} params.price - What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Defaults to 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersCreate(params: { methodId: string, fromValue?: number, position?: number, price?: number }): Promise<Models.ShippingRateTier>;
    /**
     * A rate tier is one row of a matrix method's price table: a `from_value` threshold and the price charged at or above it. The bound is INCLUSIVE and the winning tier is the one with the highest `from_value` at or below the measured value, so a measure of exactly 10 is priced by the tier at 10. What the number measures is the method's `matrix_basis` — kilograms in the market's own weight unit, items, money in the method's currency, or a named attribute — and the last tier has no upper bound. This adds ONE row to the table of the method in the path, leaving the rest alone — the edit for a merchant who has added a heavier bracket. To lay a whole table down at once use PUT …/tiers (set semantics) or POST …/tiers/ladder (evenly stepped), and note that both of those DISCARD the ids of the rows they replace. Two rows of this tenant may not share the combination of `method_id` + `from_value` — that is the 409. `method_id` is taken from the path on every write, so a body naming a different method is ignored rather than obeyed.
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {number} fromValue - Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Defaults to 0.
     * @param {number} position - Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
     * @param {number} price - What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Defaults to 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersCreate(methodId: string, fromValue?: number, position?: number, price?: number): Promise<Models.ShippingRateTier>;
    shippingTiersCreate(
        paramsOrFirst: { methodId: string, fromValue?: number, position?: number, price?: number } | string,
        ...rest: [(number)?, (number)?, (number)?]    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string, fromValue?: number, position?: number, price?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, fromValue?: number, position?: number, price?: number };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                fromValue: rest[0] as number,
                position: rest[1] as number,
                price: rest[2] as number            
            };
        }
        
        const methodId = params.methodId;
        const fromValue = params.fromValue;
        const position = params.position;
        const price = params.price;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{method_id}', methodId);
        const apiPayload: Payload = {};
        if (typeof fromValue !== 'undefined') {
            apiPayload['from_value'] = fromValue;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
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
     * The write behind a table editor: a merchant edits the whole matrix on screen and saves it in one call, rather than diffing it into a row added here and a row deleted there. Set semantics, and it replaces EVERY tier the method had: the tiers this method has afterwards are exactly the ones handed in, positions derived from the array order. An empty `tiers` array clears the table — and a matrix method with no tiers quotes nothing, with a reason.
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {Models.ShippingRateTierReplaceItem[]} params.tiers - The complete new tier set (set semantics) — positions are derived from the array order. An empty array clears the matrix, and a matrix method with no tiers quotes nothing.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersReplace(params: { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] }): Promise<{}>;
    /**
     * The write behind a table editor: a merchant edits the whole matrix on screen and saves it in one call, rather than diffing it into a row added here and a row deleted there. Set semantics, and it replaces EVERY tier the method had: the tiers this method has afterwards are exactly the ones handed in, positions derived from the array order. An empty `tiers` array clears the table — and a matrix method with no tiers quotes nothing, with a reason.
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {Models.ShippingRateTierReplaceItem[]} tiers - The complete new tier set (set semantics) — positions are derived from the array order. An empty array clears the matrix, and a matrix method with no tiers quotes nothing.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersReplace(methodId: string, tiers: Models.ShippingRateTierReplaceItem[]): Promise<{}>;
    shippingTiersReplace(
        paramsOrFirst: { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] } | string,
        ...rest: [(Models.ShippingRateTierReplaceItem[])?]    
    ): Promise<{}> {
        let params: { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, tiers: Models.ShippingRateTierReplaceItem[] };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                tiers: rest[0] as Models.ShippingRateTierReplaceItem[]            
            };
        }
        
        const methodId = params.methodId;
        const tiers = params.tiers;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof tiers === 'undefined') {
            throw new RevenexxException('Missing required parameter: "tiers"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers'.replace('{method_id}', methodId);
        const apiPayload: Payload = {};
        if (typeof tiers !== 'undefined') {
            apiPayload['tiers'] = Client.toWireKeys(tiers, {"fromValue":{"wire":"from_value","children":null}});
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
     * The tier table a merchant describes in words — "0 to 30 kg, every 5 kg, €4.90 plus €2 a step" — without typing every row. Replaces the method's tiers by default (set replace=false to append).
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {number} params.basePrice - Price of the first tier.
     * @param {number} params.step - Distance between two tiers. Must be > 0.
     * @param {number} params.toValue - Last tier threshold. The final tier keeps applying above it — a matrix has no upper bound. Must be >= from_value.
     * @param {number} params.fromValue - First tier threshold (default 0), in the method's matrix measure.
     * @param {boolean} params.replace - Replace the whole table (default true) or append to it.
     * @param {number} params.stepPrice - Added to each subsequent tier (default 0). A negative value is allowed as long as no tier ends up below 0.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersLadder(params: { methodId: string, basePrice: number, step: number, toValue: number, fromValue?: number, replace?: boolean, stepPrice?: number }): Promise<{}>;
    /**
     * The tier table a merchant describes in words — "0 to 30 kg, every 5 kg, €4.90 plus €2 a step" — without typing every row. Replaces the method's tiers by default (set replace=false to append).
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {number} basePrice - Price of the first tier.
     * @param {number} step - Distance between two tiers. Must be > 0.
     * @param {number} toValue - Last tier threshold. The final tier keeps applying above it — a matrix has no upper bound. Must be >= from_value.
     * @param {number} fromValue - First tier threshold (default 0), in the method's matrix measure.
     * @param {boolean} replace - Replace the whole table (default true) or append to it.
     * @param {number} stepPrice - Added to each subsequent tier (default 0). A negative value is allowed as long as no tier ends up below 0.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersLadder(methodId: string, basePrice: number, step: number, toValue: number, fromValue?: number, replace?: boolean, stepPrice?: number): Promise<{}>;
    shippingTiersLadder(
        paramsOrFirst: { methodId: string, basePrice: number, step: number, toValue: number, fromValue?: number, replace?: boolean, stepPrice?: number } | string,
        ...rest: [(number)?, (number)?, (number)?, (number)?, (boolean)?, (number)?]    
    ): Promise<{}> {
        let params: { methodId: string, basePrice: number, step: number, toValue: number, fromValue?: number, replace?: boolean, stepPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, basePrice: number, step: number, toValue: number, fromValue?: number, replace?: boolean, stepPrice?: number };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                basePrice: rest[0] as number,
                step: rest[1] as number,
                toValue: rest[2] as number,
                fromValue: rest[3] as number,
                replace: rest[4] as boolean,
                stepPrice: rest[5] as number            
            };
        }
        
        const methodId = params.methodId;
        const basePrice = params.basePrice;
        const step = params.step;
        const toValue = params.toValue;
        const fromValue = params.fromValue;
        const replace = params.replace;
        const stepPrice = params.stepPrice;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof basePrice === 'undefined') {
            throw new RevenexxException('Missing required parameter: "basePrice"');
        }
        if (typeof step === 'undefined') {
            throw new RevenexxException('Missing required parameter: "step"');
        }
        if (typeof toValue === 'undefined') {
            throw new RevenexxException('Missing required parameter: "toValue"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/ladder'.replace('{method_id}', methodId);
        const apiPayload: Payload = {};
        if (typeof basePrice !== 'undefined') {
            apiPayload['base_price'] = basePrice;
        }
        if (typeof fromValue !== 'undefined') {
            apiPayload['from_value'] = fromValue;
        }
        if (typeof replace !== 'undefined') {
            apiPayload['replace'] = replace;
        }
        if (typeof step !== 'undefined') {
            apiPayload['step'] = step;
        }
        if (typeof stepPrice !== 'undefined') {
            apiPayload['step_price'] = stepPrice;
        }
        if (typeof toValue !== 'undefined') {
            apiPayload['to_value'] = toValue;
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
     * A rate tier is one row of a matrix method's price table: a `from_value` threshold and the price charged at or above it. The bound is INCLUSIVE and the winning tier is the one with the highest `from_value` at or below the measured value, so a measure of exactly 10 is priced by the tier at 10. What the number measures is the method's `matrix_basis` — kilograms in the market's own weight unit, items, money in the method's currency, or a named attribute — and the last tier has no upper bound. Removing a tier in the MIDDLE of a table is harmless — the measures it used to cover fall to the highest remaining threshold below them. Removing the LOWEST one is not: a measure under the new lowest threshold matches no tier at all, and the method is then left out of POST /shipping/rates with 'no tier covers measure …' instead of being quoted at 0, so an entire band of baskets silently stops being offered this method. Deleting the last tier takes the method out of the checkout altogether. Rebuilding the table wholesale is PUT …/tiers or POST …/tiers/ladder; deleting the method deletes its tiers on its own.
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTiersDelete(params: { methodId: string, id: string }): Promise<{}>;
    /**
     * A rate tier is one row of a matrix method's price table: a `from_value` threshold and the price charged at or above it. The bound is INCLUSIVE and the winning tier is the one with the highest `from_value` at or below the measured value, so a measure of exactly 10 is priced by the tier at 10. What the number measures is the method's `matrix_basis` — kilograms in the market's own weight unit, items, money in the method's currency, or a named attribute — and the last tier has no upper bound. Removing a tier in the MIDDLE of a table is harmless — the measures it used to cover fall to the highest remaining threshold below them. Removing the LOWEST one is not: a measure under the new lowest threshold matches no tier at all, and the method is then left out of POST /shipping/rates with 'no tier covers measure …' instead of being quoted at 0, so an entire band of baskets silently stops being offered this method. Deleting the last tier takes the method out of the checkout altogether. Rebuilding the table wholesale is PUT …/tiers or POST …/tiers/ladder; deleting the method deletes its tiers on its own.
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersDelete(methodId: string, id: string): Promise<{}>;
    shippingTiersDelete(
        paramsOrFirst: { methodId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { methodId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, id: string };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const methodId = params.methodId;
        const id = params.id;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{method_id}', methodId).replace('{id}', id);
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
     * A rate tier is one row of a matrix method's price table: a `from_value` threshold and the price charged at or above it. The bound is INCLUSIVE and the winning tier is the one with the highest `from_value` at or below the measured value, so a measure of exactly 10 is priced by the tier at 10. What the number measures is the method's `matrix_basis` — kilograms in the market's own weight unit, items, money in the method's currency, or a named attribute — and the last tier has no upper bound. This reads one row of that table by id, under the method that owns it; a tier id belonging to another method is a 404 rather than somebody else's price. A tier id is not durable: PUT …/tiers and POST …/tiers/ladder replace the table by deleting and recreating it, so an id read before either of them names nothing afterwards. Where a caller wants a stable handle, address the row by what it MEANS — GET …/tiers?from_value=… — since (method_id, from_value) is unique.
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersGet(params: { methodId: string, id: string }): Promise<Models.ShippingRateTier>;
    /**
     * A rate tier is one row of a matrix method's price table: a `from_value` threshold and the price charged at or above it. The bound is INCLUSIVE and the winning tier is the one with the highest `from_value` at or below the measured value, so a measure of exactly 10 is priced by the tier at 10. What the number measures is the method's `matrix_basis` — kilograms in the market's own weight unit, items, money in the method's currency, or a named attribute — and the last tier has no upper bound. This reads one row of that table by id, under the method that owns it; a tier id belonging to another method is a 404 rather than somebody else's price. A tier id is not durable: PUT …/tiers and POST …/tiers/ladder replace the table by deleting and recreating it, so an id read before either of them names nothing afterwards. Where a caller wants a stable handle, address the row by what it MEANS — GET …/tiers?from_value=… — since (method_id, from_value) is unique.
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersGet(methodId: string, id: string): Promise<Models.ShippingRateTier>;
    shippingTiersGet(
        paramsOrFirst: { methodId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, id: string };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const methodId = params.methodId;
        const id = params.id;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{method_id}', methodId).replace('{id}', id);
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
     * A tier id is not stable across a bulk edit: `PUT …/tiers` and `POST …/tiers/ladder` replace the table by deleting and recreating it, so an id read before either of them is gone afterwards.
     *
     * @param {string} params.methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {string} params.id - The row id.
     * @param {number} params.fromValue - Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Defaults to 0.
     * @param {number} params.position - Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
     * @param {number} params.price - What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Defaults to 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     */
    shippingTiersUpdate(params: { methodId: string, id: string, fromValue?: number, position?: number, price?: number }): Promise<Models.ShippingRateTier>;
    /**
     * A tier id is not stable across a bulk edit: `PUT …/tiers` and `POST …/tiers/ladder` replace the table by deleting and recreating it, so an id read before either of them is gone afterwards.
     *
     * @param {string} methodId - The shipping method these tiers belong to. A method this tenant does not have is a 404, never an empty page.
     * @param {string} id - The row id.
     * @param {number} fromValue - Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Defaults to 0.
     * @param {number} position - Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
     * @param {number} price - What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Defaults to 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingRateTier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTiersUpdate(methodId: string, id: string, fromValue?: number, position?: number, price?: number): Promise<Models.ShippingRateTier>;
    shippingTiersUpdate(
        paramsOrFirst: { methodId: string, id: string, fromValue?: number, position?: number, price?: number } | string,
        ...rest: [(string)?, (number)?, (number)?, (number)?]    
    ): Promise<Models.ShippingRateTier> {
        let params: { methodId: string, id: string, fromValue?: number, position?: number, price?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { methodId: string, id: string, fromValue?: number, position?: number, price?: number };
        } else {
            params = {
                methodId: paramsOrFirst as string,
                id: rest[0] as string,
                fromValue: rest[1] as number,
                position: rest[2] as number,
                price: rest[3] as number            
            };
        }
        
        const methodId = params.methodId;
        const id = params.id;
        const fromValue = params.fromValue;
        const position = params.position;
        const price = params.price;

        if (typeof methodId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/methods/{method_id}/tiers/{id}'.replace('{method_id}', methodId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof fromValue !== 'undefined') {
            apiPayload['from_value'] = fromValue;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof price !== 'undefined') {
            apiPayload['price'] = price;
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
     * The question a checkout asks, and the only route that answers a PRICE. Hand in the buyer context — the destination country, the order value, and whatever the matrix methods measure: a weight, a quantity or a named product attribute — and this comes back with the methods that may be offered and what each of them costs, free-above thresholds, country restrictions, the carrier's delivery promise and tax already applied. A method that does not apply is never an error: it moves to `excluded` with a reason. So is a tax rate that cannot be resolved — `tax.resolved: false` means the rates are UNKNOWN, not untaxed.
     *
     * @param {string} params.at - The instant to evaluate the delivery estimate at (ISO 8601). Omitted: now. Lets a storefront compute the cut-off in its own timezone.
     * @param {object} params.attributes - Measure values for attribute matrices, keyed by attribute NAME — the key a matrix method names in its matrix_attribute, and the value the number its tiers are matched against. Summed over the basket by the caller, not by this app. Only the key a method asks for is read; anything else in the map is carried along and ignored, and a value that is not a finite number excludes that method with a reason rather than failing the quote.
     * @param {string} params.country - Destination ISO 3166-1 alpha-2 code — compared upper-cased against method and carrier country restrictions. Omitted or null: every method that restricts by country is excluded, with a reason.
     * @param {string} params.currency - ISO 4217 code the checkout prices in, compared without regard to case. A method priced in another currency is excluded with a reason — this app converts nothing. Omitted or null: every method is offered, and each rate carries its method's own currency.
     * @param {string} params.marketId - Buyer market for tax resolution. Omitted: the market matching `country`, else the tenant's sole market — never an arbitrary one. An id naming no market of this tenant quotes no tax, with the reason `unknown_market`.
     * @param {number} params.orderValue - Order value (default 0) — the fallback figure for order_value matrices and free-above thresholds when the sided value the market's free_above_compares names is not sent. Taken to be on that basis. Below 0 is refused with 400 `negative_measure`.
     * @param {number} params.orderValueGross - Order value including tax. Compared against free-above thresholds, and measured by order_value matrices, when free_above_compares is 'gross'.
     * @param {number} params.orderValueNet - Order value excluding tax. Compared against free-above thresholds, and measured by order_value matrices, when free_above_compares is 'net'.
     * @param {number} params.quantity - Total quantity — measure for quantity matrices. Below 0 is refused with 400 `negative_measure`.
     * @param {number} params.weight - Total weight — measure for weight matrices. Read in weight_unit and converted to the unit the tiers are keyed in. Below 0 is refused with 400 `negative_measure`.
     * @param {string} params.weightUnit - The unit `weight` is expressed in, as a CODE into the tenant's own weight units (GET /shipping/weight-units). Omitted, it is the unit this market quotes in. A unit the tenant does not keep is a 400 — a mis-read weight prices the wrong bracket silently, and guessing is worse than refusing.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingRates(params?: { at?: string, attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, orderValueGross?: number, orderValueNet?: number, quantity?: number, weight?: number, weightUnit?: string }): Promise<{}>;
    /**
     * The question a checkout asks, and the only route that answers a PRICE. Hand in the buyer context — the destination country, the order value, and whatever the matrix methods measure: a weight, a quantity or a named product attribute — and this comes back with the methods that may be offered and what each of them costs, free-above thresholds, country restrictions, the carrier's delivery promise and tax already applied. A method that does not apply is never an error: it moves to `excluded` with a reason. So is a tax rate that cannot be resolved — `tax.resolved: false` means the rates are UNKNOWN, not untaxed.
     *
     * @param {string} at - The instant to evaluate the delivery estimate at (ISO 8601). Omitted: now. Lets a storefront compute the cut-off in its own timezone.
     * @param {object} attributes - Measure values for attribute matrices, keyed by attribute NAME — the key a matrix method names in its matrix_attribute, and the value the number its tiers are matched against. Summed over the basket by the caller, not by this app. Only the key a method asks for is read; anything else in the map is carried along and ignored, and a value that is not a finite number excludes that method with a reason rather than failing the quote.
     * @param {string} country - Destination ISO 3166-1 alpha-2 code — compared upper-cased against method and carrier country restrictions. Omitted or null: every method that restricts by country is excluded, with a reason.
     * @param {string} currency - ISO 4217 code the checkout prices in, compared without regard to case. A method priced in another currency is excluded with a reason — this app converts nothing. Omitted or null: every method is offered, and each rate carries its method's own currency.
     * @param {string} marketId - Buyer market for tax resolution. Omitted: the market matching `country`, else the tenant's sole market — never an arbitrary one. An id naming no market of this tenant quotes no tax, with the reason `unknown_market`.
     * @param {number} orderValue - Order value (default 0) — the fallback figure for order_value matrices and free-above thresholds when the sided value the market's free_above_compares names is not sent. Taken to be on that basis. Below 0 is refused with 400 `negative_measure`.
     * @param {number} orderValueGross - Order value including tax. Compared against free-above thresholds, and measured by order_value matrices, when free_above_compares is 'gross'.
     * @param {number} orderValueNet - Order value excluding tax. Compared against free-above thresholds, and measured by order_value matrices, when free_above_compares is 'net'.
     * @param {number} quantity - Total quantity — measure for quantity matrices. Below 0 is refused with 400 `negative_measure`.
     * @param {number} weight - Total weight — measure for weight matrices. Read in weight_unit and converted to the unit the tiers are keyed in. Below 0 is refused with 400 `negative_measure`.
     * @param {string} weightUnit - The unit `weight` is expressed in, as a CODE into the tenant's own weight units (GET /shipping/weight-units). Omitted, it is the unit this market quotes in. A unit the tenant does not keep is a 400 — a mis-read weight prices the wrong bracket silently, and guessing is worse than refusing.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingRates(at?: string, attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, orderValueGross?: number, orderValueNet?: number, quantity?: number, weight?: number, weightUnit?: string): Promise<{}>;
    shippingRates(
        paramsOrFirst?: { at?: string, attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, orderValueGross?: number, orderValueNet?: number, quantity?: number, weight?: number, weightUnit?: string } | string,
        ...rest: [(object)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { at?: string, attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, orderValueGross?: number, orderValueNet?: number, quantity?: number, weight?: number, weightUnit?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { at?: string, attributes?: object, country?: string, currency?: string, marketId?: string, orderValue?: number, orderValueGross?: number, orderValueNet?: number, quantity?: number, weight?: number, weightUnit?: string };
        } else {
            params = {
                at: paramsOrFirst as string,
                attributes: rest[0] as object,
                country: rest[1] as string,
                currency: rest[2] as string,
                marketId: rest[3] as string,
                orderValue: rest[4] as number,
                orderValueGross: rest[5] as number,
                orderValueNet: rest[6] as number,
                quantity: rest[7] as number,
                weight: rest[8] as number,
                weightUnit: rest[9] as string            
            };
        }
        
        const at = params.at;
        const attributes = params.attributes;
        const country = params.country;
        const currency = params.currency;
        const marketId = params.marketId;
        const orderValue = params.orderValue;
        const orderValueGross = params.orderValueGross;
        const orderValueNet = params.orderValueNet;
        const quantity = params.quantity;
        const weight = params.weight;
        const weightUnit = params.weightUnit;


        const apiPath = '/v1/shipping/rates';
        const apiPayload: Payload = {};
        if (typeof at !== 'undefined') {
            apiPayload['at'] = at;
        }
        if (typeof attributes !== 'undefined') {
            apiPayload['attributes'] = attributes;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof orderValue !== 'undefined') {
            apiPayload['order_value'] = orderValue;
        }
        if (typeof orderValueGross !== 'undefined') {
            apiPayload['order_value_gross'] = orderValueGross;
        }
        if (typeof orderValueNet !== 'undefined') {
            apiPayload['order_value_net'] = orderValueNet;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof weight !== 'undefined') {
            apiPayload['weight'] = weight;
        }
        if (typeof weightUnit !== 'undefined') {
            apiPayload['weight_unit'] = weightUnit;
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
     * markets.tax_classes is the source of record for the rate and this app points at it by CODE from two places: a method's own tax_class and the tenant's shipping_tax_class fallback. Neither is a foreign key and neither could be — a cross-app FK is what ADR-0055 forbids — so integrity is a question one app asks the other, and this is the answering half. It is asked before a destructive edit: markets calls it when an operator tries to delete a tax class, and a count above zero is what stops the delete rather than leaving these methods pointing at a code nobody serves. Matched as a CODE, not a row: a tax class is unique per market, so 'reduced' may exist in several and a method naming it does not say which one it meant. Reports at most 500 methods and names the first 20. Every code answers, used or not — a code nobody points at is `in_use: false`, never a 404.
     *
     * @param {string} params.code - The tax-class CODE, as markets spells it — not a row id. Matched against every shipping method's `tax_class` and against this market's `shipping_tax_class` setting.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingTaxClassUsage>}
     */
    shippingTaxClassesUsage(params: { code: string }): Promise<Models.ShippingTaxClassUsage>;
    /**
     * markets.tax_classes is the source of record for the rate and this app points at it by CODE from two places: a method's own tax_class and the tenant's shipping_tax_class fallback. Neither is a foreign key and neither could be — a cross-app FK is what ADR-0055 forbids — so integrity is a question one app asks the other, and this is the answering half. It is asked before a destructive edit: markets calls it when an operator tries to delete a tax class, and a count above zero is what stops the delete rather than leaving these methods pointing at a code nobody serves. Matched as a CODE, not a row: a tax class is unique per market, so 'reduced' may exist in several and a method naming it does not say which one it meant. Reports at most 500 methods and names the first 20. Every code answers, used or not — a code nobody points at is `in_use: false`, never a 404.
     *
     * @param {string} code - The tax-class CODE, as markets spells it — not a row id. Matched against every shipping method's `tax_class` and against this market's `shipping_tax_class` setting.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingTaxClassUsage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTaxClassesUsage(code: string): Promise<Models.ShippingTaxClassUsage>;
    shippingTaxClassesUsage(
        paramsOrFirst: { code: string } | string    
    ): Promise<Models.ShippingTaxClassUsage> {
        let params: { code: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string };
        } else {
            params = {
                code: paramsOrFirst as string            
            };
        }
        
        const code = params.code;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/shipping/tax-classes/{code}/usage'.replace('{code}', code);
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
