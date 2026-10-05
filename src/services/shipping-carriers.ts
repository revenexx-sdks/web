import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { ShippingCarriersListStatus } from '../enums/shipping-carriers-list-status';
import { ShippingCarrierStatus } from '../enums/shipping-carrier-status';

export class ShippingCarriers {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filterable by exact column value — `?code=`, `?status=` and `?service_level=` are applied as equalities and echoed back in `filter`. A query key that names no column of this entity is SILENTLY IGNORED: the page comes back unfiltered, 200, with an empty `filter`, so compare the echo against what you sent rather than trusting the status.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} params.offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc' — a bare 'column' sorts ascending. The column must be one this entity has; anything else is a 400 from the data plane.
     * @param {string} params.code - Exact-match filter on `code`. Unique per tenant, so this resolves a code an order shipment already stores without paging the whole list.
     * @param {ShippingCarriersListStatus} params.status - Exact-match filter on `status`. Quoting state — the cheap way to list only the carriers that may currently be quoted.
     * @param {string} params.serviceLevel - Exact-match filter on `service_level`. A code into the tenant's own service levels (GET /shipping/service-levels).
     * @param {string} params.externalId - Exact-match filter on `external_id`. The carrier one foreign system owns, by the key that system knows it by — how an import finds the row it wrote last run instead of creating a second one. Unique per tenant, so this answers at most one carrier; a carrier nobody imported matches nothing.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingCarriersList(params?: { limit?: number, offset?: number, order?: string, code?: string, status?: ShippingCarriersListStatus, serviceLevel?: string, externalId?: string }): Promise<{}>;
    /**
     * Filterable by exact column value — `?code=`, `?status=` and `?service_level=` are applied as equalities and echoed back in `filter`. A query key that names no column of this entity is SILENTLY IGNORED: the page comes back unfiltered, 200, with an empty `filter`, so compare the echo against what you sent rather than trusting the status.
     *
     * @param {number} limit - Page size (default 50, max 200). A value outside the range is clamped rather than refused, and `page.limit` echoes what was applied.
     * @param {number} offset - Row offset for pagination (default 0). The next page is `page.offset + page.returned`.
     * @param {string} order - Sort as 'column.asc' | 'column.desc' — a bare 'column' sorts ascending. The column must be one this entity has; anything else is a 400 from the data plane.
     * @param {string} code - Exact-match filter on `code`. Unique per tenant, so this resolves a code an order shipment already stores without paging the whole list.
     * @param {ShippingCarriersListStatus} status - Exact-match filter on `status`. Quoting state — the cheap way to list only the carriers that may currently be quoted.
     * @param {string} serviceLevel - Exact-match filter on `service_level`. A code into the tenant's own service levels (GET /shipping/service-levels).
     * @param {string} externalId - Exact-match filter on `external_id`. The carrier one foreign system owns, by the key that system knows it by — how an import finds the row it wrote last run instead of creating a second one. Unique per tenant, so this answers at most one carrier; a carrier nobody imported matches nothing.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingCarriersList(limit?: number, offset?: number, order?: string, code?: string, status?: ShippingCarriersListStatus, serviceLevel?: string, externalId?: string): Promise<{}>;
    shippingCarriersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, code?: string, status?: ShippingCarriersListStatus, serviceLevel?: string, externalId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (ShippingCarriersListStatus)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, code?: string, status?: ShippingCarriersListStatus, serviceLevel?: string, externalId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, code?: string, status?: ShippingCarriersListStatus, serviceLevel?: string, externalId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                code: rest[2] as string,
                status: rest[3] as ShippingCarriersListStatus,
                serviceLevel: rest[4] as string,
                externalId: rest[5] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const code = params.code;
        const status = params.status;
        const serviceLevel = params.serviceLevel;
        const externalId = params.externalId;


        const apiPath = '/v1/shipping/carriers';
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
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof serviceLevel !== 'undefined') {
            apiPayload['service_level'] = serviceLevel;
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
     * A carrier row is one company shipping one class of service: it owns the tracking-URL template, the service level, the transit days, the pickup cut-off and the handling days, and every method that ships with it inherits all of those unless it states its own. A carrier selling both a parcel and an express product is two rows. Reach for it for a carrier this app does not describe — a regional courier, a forwarder, an own fleet; for the DACH networks read GET /shipping/carriers/catalog and let POST /shipping/carriers/defaults write them. A create cannot omit `code` and `name`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` — that is the 409. `service_level` has to name one of the tenant's own levels and `cutoff_time` has to be HH:MM in 24-hour UTC — both are refused rather than stored, because a cut-off the estimator cannot read would be dropped in silence and the shop would keep promising a ship date nobody computed. Creating a carrier quotes nothing on its own: a method has to reference it (`carrier_id`, or a `carrier` text equal to this code) before any of it is inherited.
     *
     * @param {string} params.code - Stable carrier code, unique per tenant (e.g. dhl, dpd, gls), in lower case. A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field — and a tracking request finds it by code without regard to case. A code with a capital letter is refused with 400 `invalid_carrier_code`; a carrier stored with one before 1.0 keeps it and keeps resolving.
     * @param {string} params.name - Display name, as an operator typed it.
     * @param {string[]} params.countries - The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the method's own restriction: a method may not be offered into a country its carrier does not reach.
     * @param {string} params.cutoffTime - This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
     * @param {number} params.etaDaysMax - Transit time upper bound, in calendar days from the ship date.
     * @param {number} params.etaDaysMin - Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
     * @param {string} params.externalId - The key this carrier has in the system that OWNS it — the shipping agent as an ERP numbers it, which is rarely the `code` a merchant types here. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a carrier created in the Cockpit carries none and never will.
     * @param {object} params.externalRefs - Every OTHER system that knows this carrier, keyed by system name — a second ERP, a TMS, the label printer's own agent list. `external_id` names the leading system; this is the rest, and the next one costs no column. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} params.handlingDays - Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days — a whole number, 0 or more. Overrides the tenant's handling_days.
     * @param {object} params.labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {object} params.metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {number} params.position - Sort order among the carriers; ties fall back to whatever the database returns.
     * @param {string} params.serviceLevel - The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} params.sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {ShippingCarrierStatus} params.status - Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
     * @param {string} params.trackingUrlTemplate - Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingCarrier>}
     */
    shippingCarriersCreate(params: { code: string, name: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string }): Promise<Models.ShippingCarrier>;
    /**
     * A carrier row is one company shipping one class of service: it owns the tracking-URL template, the service level, the transit days, the pickup cut-off and the handling days, and every method that ships with it inherits all of those unless it states its own. A carrier selling both a parcel and an express product is two rows. Reach for it for a carrier this app does not describe — a regional courier, a forwarder, an own fleet; for the DACH networks read GET /shipping/carriers/catalog and let POST /shipping/carriers/defaults write them. A create cannot omit `code` and `name`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` or `external_id` — that is the 409. `service_level` has to name one of the tenant's own levels and `cutoff_time` has to be HH:MM in 24-hour UTC — both are refused rather than stored, because a cut-off the estimator cannot read would be dropped in silence and the shop would keep promising a ship date nobody computed. Creating a carrier quotes nothing on its own: a method has to reference it (`carrier_id`, or a `carrier` text equal to this code) before any of it is inherited.
     *
     * @param {string} code - Stable carrier code, unique per tenant (e.g. dhl, dpd, gls), in lower case. A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field — and a tracking request finds it by code without regard to case. A code with a capital letter is refused with 400 `invalid_carrier_code`; a carrier stored with one before 1.0 keeps it and keeps resolving.
     * @param {string} name - Display name, as an operator typed it.
     * @param {string[]} countries - The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the method's own restriction: a method may not be offered into a country its carrier does not reach.
     * @param {string} cutoffTime - This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
     * @param {number} etaDaysMax - Transit time upper bound, in calendar days from the ship date.
     * @param {number} etaDaysMin - Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
     * @param {string} externalId - The key this carrier has in the system that OWNS it — the shipping agent as an ERP numbers it, which is rarely the `code` a merchant types here. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a carrier created in the Cockpit carries none and never will.
     * @param {object} externalRefs - Every OTHER system that knows this carrier, keyed by system name — a second ERP, a TMS, the label printer's own agent list. `external_id` names the leading system; this is the rest, and the next one costs no column. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} handlingDays - Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days — a whole number, 0 or more. Overrides the tenant's handling_days.
     * @param {object} labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {object} metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {number} position - Sort order among the carriers; ties fall back to whatever the database returns.
     * @param {string} serviceLevel - The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {ShippingCarrierStatus} status - Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
     * @param {string} trackingUrlTemplate - Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingCarrier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingCarriersCreate(code: string, name: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string): Promise<Models.ShippingCarrier>;
    shippingCarriersCreate(
        paramsOrFirst: { code: string, name: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (number)?, (number)?, (string)?, (object)?, (number)?, (object)?, (object)?, (number)?, (string)?, (object)?, (string)?, (ShippingCarrierStatus)?, (string)?]    
    ): Promise<Models.ShippingCarrier> {
        let params: { code: string, name: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                countries: rest[1] as string[],
                cutoffTime: rest[2] as string,
                etaDaysMax: rest[3] as number,
                etaDaysMin: rest[4] as number,
                externalId: rest[5] as string,
                externalRefs: rest[6] as object,
                handlingDays: rest[7] as number,
                labels: rest[8] as object,
                metadata: rest[9] as object,
                position: rest[10] as number,
                serviceLevel: rest[11] as string,
                sourceData: rest[12] as object,
                sourceSyncedAt: rest[13] as string,
                status: rest[14] as ShippingCarrierStatus,
                trackingUrlTemplate: rest[15] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const countries = params.countries;
        const cutoffTime = params.cutoffTime;
        const etaDaysMax = params.etaDaysMax;
        const etaDaysMin = params.etaDaysMin;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const handlingDays = params.handlingDays;
        const labels = params.labels;
        const metadata = params.metadata;
        const position = params.position;
        const serviceLevel = params.serviceLevel;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const status = params.status;
        const trackingUrlTemplate = params.trackingUrlTemplate;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/shipping/carriers';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof cutoffTime !== 'undefined') {
            apiPayload['cutoff_time'] = cutoffTime;
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
        if (typeof handlingDays !== 'undefined') {
            apiPayload['handling_days'] = handlingDays;
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
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof serviceLevel !== 'undefined') {
            apiPayload['service_level'] = serviceLevel;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof trackingUrlTemplate !== 'undefined') {
            apiPayload['tracking_url_template'] = trackingUrlTemplate;
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
     * The DACH set — the three German parcel networks, the express carriers, the AT/CH incumbents and the pallet forwarders — each with the tracking template, service level, transit time and pickup cut-off it would be created with. `seeded` marks the four a fresh install already has. Adding a carrier is a data change, never a code change, and a merchant may of course create one that is not in here at all.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingCarriersCatalog(): Promise<{}> {

        const apiPath = '/v1/shipping/carriers/catalog';
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
     * The four networks a DACH shop is expected to have — DHL, DPD, GLS and UPS — created by code, and only the ones that are missing. The app runs this itself on `app.installed`, so a fresh install already has them; calling it by hand afterwards is how a tenant that predates a catalog entry catches up, and calling it twice costs nothing, because it reconciles rather than seeds. An existing row belongs to the merchant: only columns that are genuinely EMPTY are filled in (a tracking template added to the catalog after their install), never a value they set. Nothing is deleted.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingCarriersDefaults(): Promise<{}> {

        const apiPath = '/v1/shipping/carriers/defaults';
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
     * Deleting one clears `shipping_methods.carrier_id` rather than deleting those rows — the foreign keys decide that, not this route. So a method that referenced this carrier keeps working and resolves through its `carrier` code instead, which is also why this never answers a conflict — and it is the reason to prefer `status: 'retired'` where the carrier is merely finished. What the method silently LOSES is everything it was inheriting: the tracking template, the pickup cut-off, the handling days and the transit days. Unless its `carrier` text still matches another carrier, its ship date is recomputed on the market's own cut-off and handling settings, and a method that stated no `eta_days_min`/`max` of its own stops carrying a `delivery` estimate altogether. Nothing errors; the promise in the checkout just changes.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingCarriersDelete(params: { id: string }): Promise<{}>;
    /**
     * Deleting one clears `shipping_methods.carrier_id` rather than deleting those rows — the foreign keys decide that, not this route. So a method that referenced this carrier keeps working and resolves through its `carrier` code instead, which is also why this never answers a conflict — and it is the reason to prefer `status: 'retired'` where the carrier is merely finished. What the method silently LOSES is everything it was inheriting: the tracking template, the pickup cut-off, the handling days and the transit days. Unless its `carrier` text still matches another carrier, its ship date is recomputed on the market's own cut-off and handling settings, and a method that stated no `eta_days_min`/`max` of its own stops carrying a `delivery` estimate altogether. Nothing errors; the promise in the checkout just changes.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingCarriersDelete(id: string): Promise<{}>;
    shippingCarriersDelete(
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

        const apiPath = '/v1/shipping/carriers/{id}'.replace('{id}', id);
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
     * A carrier row is one company shipping one class of service: it owns the tracking-URL template, the service level, the transit days, the pickup cut-off and the handling days, and every method that ships with it inherits all of those unless it states its own. A carrier selling both a parcel and an express product is two rows. Read it when you need to know what a method's delivery promise really is: `cutoff_time`, `handling_days` and `eta_days_min`/`max` are inherited from here, so a shop that seems to promise the wrong ship date is usually explained by this row rather than by the method. It does NOT say which methods ship with it — that is GET /shipping/methods?carrier_id=… for the ones holding a reference and ?carrier=… for the ones still resolving through the legacy code text.
     *
     * @param {string} params.id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingCarrier>}
     */
    shippingCarriersGet(params: { id: string }): Promise<Models.ShippingCarrier>;
    /**
     * A carrier row is one company shipping one class of service: it owns the tracking-URL template, the service level, the transit days, the pickup cut-off and the handling days, and every method that ships with it inherits all of those unless it states its own. A carrier selling both a parcel and an express product is two rows. Read it when you need to know what a method's delivery promise really is: `cutoff_time`, `handling_days` and `eta_days_min`/`max` are inherited from here, so a shop that seems to promise the wrong ship date is usually explained by this row rather than by the method. It does NOT say which methods ship with it — that is GET /shipping/methods?carrier_id=… for the ones holding a reference and ?carrier=… for the ones still resolving through the legacy code text.
     *
     * @param {string} id - The row id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingCarrier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingCarriersGet(id: string): Promise<Models.ShippingCarrier>;
    shippingCarriersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ShippingCarrier> {
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

        const apiPath = '/v1/shipping/carriers/{id}'.replace('{id}', id);
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
     * A carrier row is one company shipping one class of service: it owns the tracking-URL template, the service level, the transit days, the pickup cut-off and the handling days, and every method that ships with it inherits all of those unless it states its own. A carrier selling both a parcel and an express product is two rows. A partial update — send only what changes, which is where a carrier is paused, given a different tracking template, or moved to another pickup cut-off or transit time. This is the one switch that acts on several methods at once, in both directions. Moving `status` off 'active' takes every method that ships with this carrier out of POST /shipping/rates with a reason, which beats disabling each of them and forgetting one; tracking links are deliberately not gated on it, so a retired carrier's old shipments stay resolvable. Editing `cutoff_time`, `handling_days` or `eta_days_min`/`max` MOVES THE PROMISED SHIP DATE of every method that states none of its own: the estimator adds the handling days, then one further day when the cut-off has already passed at the instant being evaluated — compared at or after, in UTC, and as calendar days that do not skip a weekend. Two rows of this tenant may not share `code` or `external_id` — that is the 409.
     *
     * @param {string} params.id - The row id.
     * @param {string} params.code - Stable carrier code, unique per tenant (e.g. dhl, dpd, gls), in lower case. A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field — and a tracking request finds it by code without regard to case. A code with a capital letter is refused with 400 `invalid_carrier_code`; a carrier stored with one before 1.0 keeps it and keeps resolving.
     * @param {string[]} params.countries - The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the method's own restriction: a method may not be offered into a country its carrier does not reach.
     * @param {string} params.cutoffTime - This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
     * @param {number} params.etaDaysMax - Transit time upper bound, in calendar days from the ship date.
     * @param {number} params.etaDaysMin - Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
     * @param {string} params.externalId - The key this carrier has in the system that OWNS it — the shipping agent as an ERP numbers it, which is rarely the `code` a merchant types here. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a carrier created in the Cockpit carries none and never will.
     * @param {object} params.externalRefs - Every OTHER system that knows this carrier, keyed by system name — a second ERP, a TMS, the label printer's own agent list. `external_id` names the leading system; this is the rest, and the next one costs no column. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} params.handlingDays - Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days — a whole number, 0 or more. Overrides the tenant's handling_days.
     * @param {object} params.labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {object} params.metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {string} params.name - Display name, as an operator typed it.
     * @param {number} params.position - Sort order among the carriers; ties fall back to whatever the database returns.
     * @param {string} params.serviceLevel - The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} params.sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {ShippingCarrierStatus} params.status - Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
     * @param {string} params.trackingUrlTemplate - Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingCarrier>}
     */
    shippingCarriersUpdate(params: { id: string, code?: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, name?: string, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string }): Promise<Models.ShippingCarrier>;
    /**
     * A carrier row is one company shipping one class of service: it owns the tracking-URL template, the service level, the transit days, the pickup cut-off and the handling days, and every method that ships with it inherits all of those unless it states its own. A carrier selling both a parcel and an express product is two rows. A partial update — send only what changes, which is where a carrier is paused, given a different tracking template, or moved to another pickup cut-off or transit time. This is the one switch that acts on several methods at once, in both directions. Moving `status` off 'active' takes every method that ships with this carrier out of POST /shipping/rates with a reason, which beats disabling each of them and forgetting one; tracking links are deliberately not gated on it, so a retired carrier's old shipments stay resolvable. Editing `cutoff_time`, `handling_days` or `eta_days_min`/`max` MOVES THE PROMISED SHIP DATE of every method that states none of its own: the estimator adds the handling days, then one further day when the cut-off has already passed at the instant being evaluated — compared at or after, in UTC, and as calendar days that do not skip a weekend. Two rows of this tenant may not share `code` or `external_id` — that is the 409.
     *
     * @param {string} id - The row id.
     * @param {string} code - Stable carrier code, unique per tenant (e.g. dhl, dpd, gls), in lower case. A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field — and a tracking request finds it by code without regard to case. A code with a capital letter is refused with 400 `invalid_carrier_code`; a carrier stored with one before 1.0 keeps it and keeps resolving.
     * @param {string[]} countries - The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared without regard to case, so a lower-case entry still matches; anything but a two-letter code is refused with 400 `invalid_countries`. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the method's own restriction: a method may not be offered into a country its carrier does not reach.
     * @param {string} cutoffTime - This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
     * @param {number} etaDaysMax - Transit time upper bound, in calendar days from the ship date.
     * @param {number} etaDaysMin - Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
     * @param {string} externalId - The key this carrier has in the system that OWNS it — the shipping agent as an ERP numbers it, which is rarely the `code` a merchant types here. Unique per tenant where it is set, so a repeated import upserts on it instead of matching on a name; a carrier created in the Cockpit carries none and never will.
     * @param {object} externalRefs - Every OTHER system that knows this carrier, keyed by system name — a second ERP, a TMS, the label printer's own agent list. `external_id` names the leading system; this is the rest, and the next one costs no column. Answered on read and carrying no query parameter: a jsonb column is compared as a WHOLE document, so a filter over part of one is refused. Look the row up by `external_id` and read this off the answer.
     * @param {number} handlingDays - Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days — a whole number, 0 or more. Overrides the tenant's handling_days.
     * @param {object} labels - Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
     * @param {object} metadata - Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
     * @param {string} name - Display name, as an operator typed it.
     * @param {number} position - Sort order among the carriers; ties fall back to whatever the database returns.
     * @param {string} serviceLevel - The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so an edit here does not silently throw them away.
     * @param {string} sourceSyncedAt - When this row was last confirmed against its source. A delta run asks the source for what changed since it, and an operator reads it to see that a feed has gone quiet. An edit made HERE does not touch it — it records when the source was last seen, not when the row changed — so a stale value beside a fresh `updated_at` means somebody is maintaining by hand what a feed has stopped delivering.
     * @param {ShippingCarrierStatus} status - Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
     * @param {string} trackingUrlTemplate - Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ShippingCarrier>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingCarriersUpdate(id: string, code?: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, name?: string, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string): Promise<Models.ShippingCarrier>;
    shippingCarriersUpdate(
        paramsOrFirst: { id: string, code?: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, name?: string, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (number)?, (number)?, (string)?, (object)?, (number)?, (object)?, (object)?, (string)?, (number)?, (string)?, (object)?, (string)?, (ShippingCarrierStatus)?, (string)?]    
    ): Promise<Models.ShippingCarrier> {
        let params: { id: string, code?: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, name?: string, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, countries?: string[], cutoffTime?: string, etaDaysMax?: number, etaDaysMin?: number, externalId?: string, externalRefs?: object, handlingDays?: number, labels?: object, metadata?: object, name?: string, position?: number, serviceLevel?: string, sourceData?: object, sourceSyncedAt?: string, status?: ShippingCarrierStatus, trackingUrlTemplate?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                countries: rest[1] as string[],
                cutoffTime: rest[2] as string,
                etaDaysMax: rest[3] as number,
                etaDaysMin: rest[4] as number,
                externalId: rest[5] as string,
                externalRefs: rest[6] as object,
                handlingDays: rest[7] as number,
                labels: rest[8] as object,
                metadata: rest[9] as object,
                name: rest[10] as string,
                position: rest[11] as number,
                serviceLevel: rest[12] as string,
                sourceData: rest[13] as object,
                sourceSyncedAt: rest[14] as string,
                status: rest[15] as ShippingCarrierStatus,
                trackingUrlTemplate: rest[16] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const countries = params.countries;
        const cutoffTime = params.cutoffTime;
        const etaDaysMax = params.etaDaysMax;
        const etaDaysMin = params.etaDaysMin;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const handlingDays = params.handlingDays;
        const labels = params.labels;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const serviceLevel = params.serviceLevel;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const status = params.status;
        const trackingUrlTemplate = params.trackingUrlTemplate;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/shipping/carriers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof cutoffTime !== 'undefined') {
            apiPayload['cutoff_time'] = cutoffTime;
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
        if (typeof handlingDays !== 'undefined') {
            apiPayload['handling_days'] = handlingDays;
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
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof serviceLevel !== 'undefined') {
            apiPayload['service_level'] = serviceLevel;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof trackingUrlTemplate !== 'undefined') {
            apiPayload['tracking_url_template'] = trackingUrlTemplate;
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
     * Hand in a carrier code and the tracking number printed on the label, and this answers the URL a buyer follows. The carrier owns the URL format, so nobody else has to. `order_shipments` stores a tracking_url per shipment today, which is one carrier's URL shape copied into every row — the day it changes, every historic link is wrong. Ask here instead. Tracking is NOT gated on carrier status: a retired carrier's old shipments stay resolvable.
     *
     * @param {string} params.carrier - Carrier code (what an order shipment already stores) or the carrier row id — a value matching the uuid form is read as the id, anything else as a code, case-insensitively. Must name a carrier THIS tenant keeps; one that does not is a 404.
     * @param {string} params.country - Destination ISO 3166-1 alpha-2 code — only needed by a template that names {country}. Upper-cased before substitution.
     * @param {string} params.postalCode - Destination postcode — only needed by a template that names {postal_code}.
     * @param {string} params.trackingCode - The carrier's tracking number. Required by every template that names {tracking_code}, which is all of them in the shipped catalog. URL-encoded before substitution, so a code with a space or a slash cannot reshape the link.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    shippingTracking(params: { carrier: string, country?: string, postalCode?: string, trackingCode?: string }): Promise<{}>;
    /**
     * Hand in a carrier code and the tracking number printed on the label, and this answers the URL a buyer follows. The carrier owns the URL format, so nobody else has to. `order_shipments` stores a tracking_url per shipment today, which is one carrier's URL shape copied into every row — the day it changes, every historic link is wrong. Ask here instead. Tracking is NOT gated on carrier status: a retired carrier's old shipments stay resolvable.
     *
     * @param {string} carrier - Carrier code (what an order shipment already stores) or the carrier row id — a value matching the uuid form is read as the id, anything else as a code, case-insensitively. Must name a carrier THIS tenant keeps; one that does not is a 404.
     * @param {string} country - Destination ISO 3166-1 alpha-2 code — only needed by a template that names {country}. Upper-cased before substitution.
     * @param {string} postalCode - Destination postcode — only needed by a template that names {postal_code}.
     * @param {string} trackingCode - The carrier's tracking number. Required by every template that names {tracking_code}, which is all of them in the shipped catalog. URL-encoded before substitution, so a code with a space or a slash cannot reshape the link.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    shippingTracking(carrier: string, country?: string, postalCode?: string, trackingCode?: string): Promise<{}>;
    shippingTracking(
        paramsOrFirst: { carrier: string, country?: string, postalCode?: string, trackingCode?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { carrier: string, country?: string, postalCode?: string, trackingCode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { carrier: string, country?: string, postalCode?: string, trackingCode?: string };
        } else {
            params = {
                carrier: paramsOrFirst as string,
                country: rest[0] as string,
                postalCode: rest[1] as string,
                trackingCode: rest[2] as string            
            };
        }
        
        const carrier = params.carrier;
        const country = params.country;
        const postalCode = params.postalCode;
        const trackingCode = params.trackingCode;

        if (typeof carrier === 'undefined') {
            throw new RevenexxException('Missing required parameter: "carrier"');
        }

        const apiPath = '/v1/shipping/tracking';
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof postalCode !== 'undefined') {
            apiPayload['postal_code'] = postalCode;
        }
        if (typeof trackingCode !== 'undefined') {
            apiPayload['tracking_code'] = trackingCode;
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
