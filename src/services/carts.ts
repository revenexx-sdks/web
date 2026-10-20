import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CartStatus } from '../enums/cart-status';
import { CartMergeStrategy } from '../enums/cart-merge-strategy';
import { CartOrderingChannel } from '../enums/cart-ordering-channel';
import { Name } from '../enums/name';

export class Carts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The cart index, and the route a storefront resumes a session with: `?contact_id=…` for a customer's carts, `?session_key=…` for a guest's, and `?is_current=true` alongside one of those two for the single cart carts.activate last marked — this list is the ONLY place that flag can be read back, and on its own the filter selects every current cart in the tenant. Filters are exact equality and never a search, unknown keys are dropped rather than refused, and `filter` echoes what was understood. Each row carries its own stored totals — `item_count` is the sum of the line QUANTITIES, not the number of lines — but never its lines: those are one call per cart. With no filter at all this is every cart the tenant holds, paged, which is a report rather than a session lookup.
     *
     * @param {string} params.id - One cart, in list form — the same row carts.get answers, but inside the page envelope.
     * @param {string} params.name - Exact name, not a search: 'Weekly' does not find 'Weekly order'. Useful with contact_id, to resume a named cart a buyer keeps.
     * @param {CartStatus} params.status - By lifecycle status — the abandoned queue, the ordered ones, the merged trail.
     * @param {string} params.contactId - Every cart of one customer. With multi_cart_enabled this is a list, not a row.
     * @param {string} params.organizationId - Every cart of one company — the Cockpit's organisation column and filter.
     * @param {string} params.sessionKey - Every cart of one guest session — what a storefront asks for before anybody logs in, and what carts.claim then hands over.
     * @param {boolean} params.isGuest - Only guest carts (`true`) or only customer carts (`false`).
     * @param {string} params.channelId - Carts opened in one sales channel.
     * @param {string} params.currency - Carts priced in one currency.
     * @param {boolean} params.isCurrent - The owner's current cart — the flag carts.activate sets, and the only way to read what it wrote. Pair it with contact_id or session_key; on its own it selects every current cart in the tenant.
     * @param {number} params.itemCount - Exact total quantity. `?item_count=0` is the one that earns its place: the empty carts.
     * @param {number} params.subtotal - Exact subtotal. Equality only — there is no range form on this route, so this finds `0` and little else.
     * @param {number} params.discountTotal - Exact discount. `?discount_total=0` finds the carts nothing has been taken off.
     * @param {number} params.shippingTotal - Exact shipping amount. `?shipping_total=0` finds the carts shipping free, or not quoted yet.
     * @param {number} params.taxTotal - Exact tax. Equality only, like every amount here.
     * @param {number} params.grandTotal - Exact total. Equality only — for sums over carts, ask the data plane for an aggregate instead of paging through rows.
     * @param {string} params.shippingMethod - Carts quoted with one shipping method.
     * @param {string} params.totalsComputedAt - Exact instant, not a range.
     * @param {string} params.abandonedAt - Exact instant, not a range. Of little use on its own; `status=abandoned` is the question people actually have.
     * @param {string} params.orderedAt - Exact instant, not a range. `status=ordered` is usually the question.
     * @param {string} params.orderRef - The cart behind an order number — the join order management and support both need.
     * @param {string} params.mergedIntoCartId - Every cart that was merged INTO this one: the other half of the trail, and the answer to "what did this cart absorb".
     * @param {string} params.createdAt - Exact instant, not a range: this matches a timestamp to the microsecond, so it is for reproducing a row, not for reporting on a day.
     * @param {string} params.updatedAt - Exact instant, not a range. Idleness is the sweep's business, not a filter's.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsList(params?: { id?: string, name?: string, status?: CartStatus, contactId?: string, organizationId?: string, sessionKey?: string, isGuest?: boolean, channelId?: string, currency?: string, isCurrent?: boolean, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, taxTotal?: number, grandTotal?: number, shippingMethod?: string, totalsComputedAt?: string, abandonedAt?: string, orderedAt?: string, orderRef?: string, mergedIntoCartId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * The cart index, and the route a storefront resumes a session with: `?contact_id=…` for a customer's carts, `?session_key=…` for a guest's, and `?is_current=true` alongside one of those two for the single cart carts.activate last marked — this list is the ONLY place that flag can be read back, and on its own the filter selects every current cart in the tenant. Filters are exact equality and never a search, unknown keys are dropped rather than refused, and `filter` echoes what was understood. Each row carries its own stored totals — `item_count` is the sum of the line QUANTITIES, not the number of lines — but never its lines: those are one call per cart. With no filter at all this is every cart the tenant holds, paged, which is a report rather than a session lookup.
     *
     * @param {string} id - One cart, in list form — the same row carts.get answers, but inside the page envelope.
     * @param {string} name - Exact name, not a search: 'Weekly' does not find 'Weekly order'. Useful with contact_id, to resume a named cart a buyer keeps.
     * @param {CartStatus} status - By lifecycle status — the abandoned queue, the ordered ones, the merged trail.
     * @param {string} contactId - Every cart of one customer. With multi_cart_enabled this is a list, not a row.
     * @param {string} organizationId - Every cart of one company — the Cockpit's organisation column and filter.
     * @param {string} sessionKey - Every cart of one guest session — what a storefront asks for before anybody logs in, and what carts.claim then hands over.
     * @param {boolean} isGuest - Only guest carts (`true`) or only customer carts (`false`).
     * @param {string} channelId - Carts opened in one sales channel.
     * @param {string} currency - Carts priced in one currency.
     * @param {boolean} isCurrent - The owner's current cart — the flag carts.activate sets, and the only way to read what it wrote. Pair it with contact_id or session_key; on its own it selects every current cart in the tenant.
     * @param {number} itemCount - Exact total quantity. `?item_count=0` is the one that earns its place: the empty carts.
     * @param {number} subtotal - Exact subtotal. Equality only — there is no range form on this route, so this finds `0` and little else.
     * @param {number} discountTotal - Exact discount. `?discount_total=0` finds the carts nothing has been taken off.
     * @param {number} shippingTotal - Exact shipping amount. `?shipping_total=0` finds the carts shipping free, or not quoted yet.
     * @param {number} taxTotal - Exact tax. Equality only, like every amount here.
     * @param {number} grandTotal - Exact total. Equality only — for sums over carts, ask the data plane for an aggregate instead of paging through rows.
     * @param {string} shippingMethod - Carts quoted with one shipping method.
     * @param {string} totalsComputedAt - Exact instant, not a range.
     * @param {string} abandonedAt - Exact instant, not a range. Of little use on its own; `status=abandoned` is the question people actually have.
     * @param {string} orderedAt - Exact instant, not a range. `status=ordered` is usually the question.
     * @param {string} orderRef - The cart behind an order number — the join order management and support both need.
     * @param {string} mergedIntoCartId - Every cart that was merged INTO this one: the other half of the trail, and the answer to "what did this cart absorb".
     * @param {string} createdAt - Exact instant, not a range: this matches a timestamp to the microsecond, so it is for reproducing a row, not for reporting on a day.
     * @param {string} updatedAt - Exact instant, not a range. Idleness is the sweep's business, not a filter's.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsList(id?: string, name?: string, status?: CartStatus, contactId?: string, organizationId?: string, sessionKey?: string, isGuest?: boolean, channelId?: string, currency?: string, isCurrent?: boolean, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, taxTotal?: number, grandTotal?: number, shippingMethod?: string, totalsComputedAt?: string, abandonedAt?: string, orderedAt?: string, orderRef?: string, mergedIntoCartId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    cartsList(
        paramsOrFirst?: { id?: string, name?: string, status?: CartStatus, contactId?: string, organizationId?: string, sessionKey?: string, isGuest?: boolean, channelId?: string, currency?: string, isCurrent?: boolean, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, taxTotal?: number, grandTotal?: number, shippingMethod?: string, totalsComputedAt?: string, abandonedAt?: string, orderedAt?: string, orderRef?: string, mergedIntoCartId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (CartStatus)?, (string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (boolean)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, name?: string, status?: CartStatus, contactId?: string, organizationId?: string, sessionKey?: string, isGuest?: boolean, channelId?: string, currency?: string, isCurrent?: boolean, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, taxTotal?: number, grandTotal?: number, shippingMethod?: string, totalsComputedAt?: string, abandonedAt?: string, orderedAt?: string, orderRef?: string, mergedIntoCartId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, name?: string, status?: CartStatus, contactId?: string, organizationId?: string, sessionKey?: string, isGuest?: boolean, channelId?: string, currency?: string, isCurrent?: boolean, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, taxTotal?: number, grandTotal?: number, shippingMethod?: string, totalsComputedAt?: string, abandonedAt?: string, orderedAt?: string, orderRef?: string, mergedIntoCartId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                status: rest[1] as CartStatus,
                contactId: rest[2] as string,
                organizationId: rest[3] as string,
                sessionKey: rest[4] as string,
                isGuest: rest[5] as boolean,
                channelId: rest[6] as string,
                currency: rest[7] as string,
                isCurrent: rest[8] as boolean,
                itemCount: rest[9] as number,
                subtotal: rest[10] as number,
                discountTotal: rest[11] as number,
                shippingTotal: rest[12] as number,
                taxTotal: rest[13] as number,
                grandTotal: rest[14] as number,
                shippingMethod: rest[15] as string,
                totalsComputedAt: rest[16] as string,
                abandonedAt: rest[17] as string,
                orderedAt: rest[18] as string,
                orderRef: rest[19] as string,
                mergedIntoCartId: rest[20] as string,
                createdAt: rest[21] as string,
                updatedAt: rest[22] as string,
                limit: rest[23] as number,
                offset: rest[24] as number,
                order: rest[25] as string            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const status = params.status;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const sessionKey = params.sessionKey;
        const isGuest = params.isGuest;
        const channelId = params.channelId;
        const currency = params.currency;
        const isCurrent = params.isCurrent;
        const itemCount = params.itemCount;
        const subtotal = params.subtotal;
        const discountTotal = params.discountTotal;
        const shippingTotal = params.shippingTotal;
        const taxTotal = params.taxTotal;
        const grandTotal = params.grandTotal;
        const shippingMethod = params.shippingMethod;
        const totalsComputedAt = params.totalsComputedAt;
        const abandonedAt = params.abandonedAt;
        const orderedAt = params.orderedAt;
        const orderRef = params.orderRef;
        const mergedIntoCartId = params.mergedIntoCartId;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/carts';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof isGuest !== 'undefined') {
            apiPayload['is_guest'] = isGuest;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof isCurrent !== 'undefined') {
            apiPayload['is_current'] = isCurrent;
        }
        if (typeof itemCount !== 'undefined') {
            apiPayload['item_count'] = itemCount;
        }
        if (typeof subtotal !== 'undefined') {
            apiPayload['subtotal'] = subtotal;
        }
        if (typeof discountTotal !== 'undefined') {
            apiPayload['discount_total'] = discountTotal;
        }
        if (typeof shippingTotal !== 'undefined') {
            apiPayload['shipping_total'] = shippingTotal;
        }
        if (typeof taxTotal !== 'undefined') {
            apiPayload['tax_total'] = taxTotal;
        }
        if (typeof grandTotal !== 'undefined') {
            apiPayload['grand_total'] = grandTotal;
        }
        if (typeof shippingMethod !== 'undefined') {
            apiPayload['shipping_method'] = shippingMethod;
        }
        if (typeof totalsComputedAt !== 'undefined') {
            apiPayload['totals_computed_at'] = totalsComputedAt;
        }
        if (typeof abandonedAt !== 'undefined') {
            apiPayload['abandoned_at'] = abandonedAt;
        }
        if (typeof orderedAt !== 'undefined') {
            apiPayload['ordered_at'] = orderedAt;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof mergedIntoCartId !== 'undefined') {
            apiPayload['merged_into_cart_id'] = mergedIntoCartId;
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
     * Opens an empty cart. The one thing it requires is an OWNER — `contact_id` for a signed-in customer or `session_key` for a guest, never neither: that is a database check on the table, and this route refuses it first with a 400 so the caller gets a sentence rather than a constraint name. Everything else is defaulted: the name 'Cart', status 'active', both totals 0, and the currency from the market's `default_currency` setting — resolved once and WRITTEN to the cart, so every amount the cart ever holds is read in the code it was opened in. No column of a cart is unique, so one owner may hold as many carts as they like — unless the tenant's `multi_cart_enabled` is off, in which case a second ACTIVE cart for the same owner answers 409 naming the cart that already exists, because a storefront that hit that wants to fill THAT cart. Send `is_current: true` to have the new cart made current in the same call, which clears the flag on every sibling of the same owner. Lines are added afterwards, one call each or one bulk replace.
     *
     * @param {object} params.attribution - Where the cart came from (RAD-287): the UTM values of the visit, the campaign, the ad click id, the landing page and referrer, first and last touch, the consent state of the consent manager and whether the objection notice for existing-customer mail was shown. The storefront writes it whole on every touch while the cart is open; it is frozen once the cart is ordered, and the order copies it at placement. A merge keeps the survivor's, or adopts the merged cart's when the survivor has none. Null until written.
     * @param {string} params.channelId - The sales channel this cart is being opened in, as a channel of the channels app. Stored for attribution; nothing in this app reads it.
     * @param {string} params.contactId - The customer who owns this cart, as a contact of the customers app. Send this OR session_key — a cart with neither owner is refused.
     * @param {string} params.currency - ISO 4217 code EVERY amount in this cart will be read in, lines included — a line carries no currency of its own. Omit it and the cart is opened in the market's `default_currency` setting (EUR unless a market says otherwise), which is resolved once here and written to the row: changing that setting later never re-denominates a cart that already exists.
     * @param {boolean} params.isCurrent - Make this THE current cart of its owner as it is created — the same thing carts.activate does later, and it clears the flag on every sibling cart of the same owner.
     * @param {object} params.metadata - Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
     * @param {string} params.name - What the buyer calls this cart (default 'Cart'). An empty string is legal and lands on the default.
     * @param {string} params.organizationId - The buyer's company, as an organization of the customers app. Stored as sent; this app never looks it up.
     * @param {string} params.sessionKey - The guest session that owns this cart — the key the storefront already keeps in its own session or cookie. Any non-empty string is accepted; this app issues none and parses none, so the example shows a shape and not a format. Send this OR contact_id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsCreate(params?: { attribution?: object, channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, metadata?: object, name?: string, organizationId?: string, sessionKey?: string }): Promise<Models.Cart>;
    /**
     * Opens an empty cart. The one thing it requires is an OWNER — `contact_id` for a signed-in customer or `session_key` for a guest, never neither: that is a database check on the table, and this route refuses it first with a 400 so the caller gets a sentence rather than a constraint name. Everything else is defaulted: the name 'Cart', status 'active', both totals 0, and the currency from the market's `default_currency` setting — resolved once and WRITTEN to the cart, so every amount the cart ever holds is read in the code it was opened in. No column of a cart is unique, so one owner may hold as many carts as they like — unless the tenant's `multi_cart_enabled` is off, in which case a second ACTIVE cart for the same owner answers 409 naming the cart that already exists, because a storefront that hit that wants to fill THAT cart. Send `is_current: true` to have the new cart made current in the same call, which clears the flag on every sibling of the same owner. Lines are added afterwards, one call each or one bulk replace.
     *
     * @param {object} attribution - Where the cart came from (RAD-287): the UTM values of the visit, the campaign, the ad click id, the landing page and referrer, first and last touch, the consent state of the consent manager and whether the objection notice for existing-customer mail was shown. The storefront writes it whole on every touch while the cart is open; it is frozen once the cart is ordered, and the order copies it at placement. A merge keeps the survivor's, or adopts the merged cart's when the survivor has none. Null until written.
     * @param {string} channelId - The sales channel this cart is being opened in, as a channel of the channels app. Stored for attribution; nothing in this app reads it.
     * @param {string} contactId - The customer who owns this cart, as a contact of the customers app. Send this OR session_key — a cart with neither owner is refused.
     * @param {string} currency - ISO 4217 code EVERY amount in this cart will be read in, lines included — a line carries no currency of its own. Omit it and the cart is opened in the market's `default_currency` setting (EUR unless a market says otherwise), which is resolved once here and written to the row: changing that setting later never re-denominates a cart that already exists.
     * @param {boolean} isCurrent - Make this THE current cart of its owner as it is created — the same thing carts.activate does later, and it clears the flag on every sibling cart of the same owner.
     * @param {object} metadata - Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
     * @param {string} name - What the buyer calls this cart (default 'Cart'). An empty string is legal and lands on the default.
     * @param {string} organizationId - The buyer's company, as an organization of the customers app. Stored as sent; this app never looks it up.
     * @param {string} sessionKey - The guest session that owns this cart — the key the storefront already keeps in its own session or cookie. Any non-empty string is accepted; this app issues none and parses none, so the example shows a shape and not a format. Send this OR contact_id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsCreate(attribution?: object, channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, metadata?: object, name?: string, organizationId?: string, sessionKey?: string): Promise<Models.Cart>;
    cartsCreate(
        paramsOrFirst?: { attribution?: object, channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, metadata?: object, name?: string, organizationId?: string, sessionKey?: string } | object,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (object)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Cart> {
        let params: { attribution?: object, channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, metadata?: object, name?: string, organizationId?: string, sessionKey?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('attribution' in paramsOrFirst || 'channelId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'isCurrent' in paramsOrFirst || 'metadata' in paramsOrFirst || 'name' in paramsOrFirst || 'organizationId' in paramsOrFirst || 'sessionKey' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { attribution?: object, channelId?: string, contactId?: string, currency?: string, isCurrent?: boolean, metadata?: object, name?: string, organizationId?: string, sessionKey?: string };
        } else {
            params = {
                attribution: paramsOrFirst as object,
                channelId: rest[0] as string,
                contactId: rest[1] as string,
                currency: rest[2] as string,
                isCurrent: rest[3] as boolean,
                metadata: rest[4] as object,
                name: rest[5] as string,
                organizationId: rest[6] as string,
                sessionKey: rest[7] as string            
            };
        }
        
        const attribution = params.attribution;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const isCurrent = params.isCurrent;
        const metadata = params.metadata;
        const name = params.name;
        const organizationId = params.organizationId;
        const sessionKey = params.sessionKey;


        const apiPath = '/v1/carts';
        const apiPayload: Payload = {};
        if (typeof attribution !== 'undefined') {
            apiPayload['attribution'] = Client.toWireKeys(attribution, {"campaignRef":{"wire":"campaign_ref","children":null},"clickId":{"wire":"click_id","children":null},"clickIdKind":{"wire":"click_id_kind","children":null},"consent":{"wire":"consent","children":{"policyVersion":{"wire":"policy_version","children":null}}},"firstTouchAt":{"wire":"first_touch_at","children":null},"landingUrl":{"wire":"landing_url","children":null},"lastTouchAt":{"wire":"last_touch_at","children":null},"objectionNoticeShown":{"wire":"objection_notice_shown","children":null},"utmCampaign":{"wire":"utm_campaign","children":null},"utmContent":{"wire":"utm_content","children":null},"utmMedium":{"wire":"utm_medium","children":null},"utmSource":{"wire":"utm_source","children":null},"utmTerm":{"wire":"utm_term","children":null}});
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
        if (typeof isCurrent !== 'undefined') {
            apiPayload['is_current'] = isCurrent;
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
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
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
     * The login call, and the one route that turns a guest into a customer: every ACTIVE cart of one session_key is handed to a contact_id, which is what a storefront fires the moment somebody signs in with a basket already filled. There are two ways it can land, and the body picks between them. Without a target_cart_id the session carts are ADOPTED as they stand — same carts, same lines, contact_id set and session_key cleared, nothing copied and nothing closed. With a target_cart_id they are instead folded into that cart, which survives while each session cart is closed as status merged; 'adopted' and 'merged' in the answer say which of the two happened to each one. With a target cart, cart_merge_strategy decides what happens to the target's OWN lines: 'merge' keeps them and folds the session lines in, 'replace' clears them first. 'strategy' overrides it for one call (merge | replace); the answer always echoes which one ran and how many lines a replace removed.
     *
     * @param {string} params.contactId - The contact taking ownership. Every active cart of that session ends up with this contact — adopted as it stands, or folded into `target_cart_id`.
     * @param {string} params.sessionKey - The guest session whose active carts are handed over — the key the storefront keeps in its own session or cookie and has been sending on every anonymous call. This app neither issues nor parses it, so the example shows the shape of an opaque token and not a format anything enforces.
     * @param {string} params.organizationId - The contact's company, written onto every cart that is adopted as it stands. Omit it and an adopted cart keeps what it had.
     * @param {CartMergeStrategy} params.strategy - Override the tenant's cart_merge_strategy for this call: 'merge' keeps the target cart's own lines, 'replace' clears them first. Omit to use the setting.
     * @param {string} params.targetCartId - Merge the session carts into this cart instead of adopting them.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsClaim(params: { contactId: string, sessionKey: string, organizationId?: string, strategy?: CartMergeStrategy, targetCartId?: string }): Promise<{}>;
    /**
     * The login call, and the one route that turns a guest into a customer: every ACTIVE cart of one session_key is handed to a contact_id, which is what a storefront fires the moment somebody signs in with a basket already filled. There are two ways it can land, and the body picks between them. Without a target_cart_id the session carts are ADOPTED as they stand — same carts, same lines, contact_id set and session_key cleared, nothing copied and nothing closed. With a target_cart_id they are instead folded into that cart, which survives while each session cart is closed as status merged; 'adopted' and 'merged' in the answer say which of the two happened to each one. With a target cart, cart_merge_strategy decides what happens to the target's OWN lines: 'merge' keeps them and folds the session lines in, 'replace' clears them first. 'strategy' overrides it for one call (merge | replace); the answer always echoes which one ran and how many lines a replace removed.
     *
     * @param {string} contactId - The contact taking ownership. Every active cart of that session ends up with this contact — adopted as it stands, or folded into `target_cart_id`.
     * @param {string} sessionKey - The guest session whose active carts are handed over — the key the storefront keeps in its own session or cookie and has been sending on every anonymous call. This app neither issues nor parses it, so the example shows the shape of an opaque token and not a format anything enforces.
     * @param {string} organizationId - The contact's company, written onto every cart that is adopted as it stands. Omit it and an adopted cart keeps what it had.
     * @param {CartMergeStrategy} strategy - Override the tenant's cart_merge_strategy for this call: 'merge' keeps the target cart's own lines, 'replace' clears them first. Omit to use the setting.
     * @param {string} targetCartId - Merge the session carts into this cart instead of adopting them.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsClaim(contactId: string, sessionKey: string, organizationId?: string, strategy?: CartMergeStrategy, targetCartId?: string): Promise<{}>;
    cartsClaim(
        paramsOrFirst: { contactId: string, sessionKey: string, organizationId?: string, strategy?: CartMergeStrategy, targetCartId?: string } | string,
        ...rest: [(string)?, (string)?, (CartMergeStrategy)?, (string)?]    
    ): Promise<{}> {
        let params: { contactId: string, sessionKey: string, organizationId?: string, strategy?: CartMergeStrategy, targetCartId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, sessionKey: string, organizationId?: string, strategy?: CartMergeStrategy, targetCartId?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                sessionKey: rest[0] as string,
                organizationId: rest[1] as string,
                strategy: rest[2] as CartMergeStrategy,
                targetCartId: rest[3] as string            
            };
        }
        
        const contactId = params.contactId;
        const sessionKey = params.sessionKey;
        const organizationId = params.organizationId;
        const strategy = params.strategy;
        const targetCartId = params.targetCartId;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof sessionKey === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sessionKey"');
        }

        const apiPath = '/v1/carts/claim';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof strategy !== 'undefined') {
            apiPayload['strategy'] = strategy;
        }
        if (typeof targetCartId !== 'undefined') {
            apiPayload['target_cart_id'] = targetCartId;
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
     * Which promotion and voucher codes the buyers' open carts still hold, and how many carts hold each. Promotions asks this before it deletes a promotion for good (RAD-247): a code typed into a cart that can still become an order would point at nothing once the promotion is gone. Open means `active` or `abandoned` (abandoned is reversible) unless `status` says otherwise. A code is matched trimmed and case-insensitively and reported in that form, upper-cased — a tenant whose codes are case-sensitive gets a count that is at worst too high. `code` narrows the answer to the codes asked about; without it every held code is listed. `carts` counts the distinct carts behind the listed codes across all pages. Codes come sorted, paged like every list here. A read for the back office and for other apps: the answer names no cart and no owner.
     *
     * @param {string} params.code - One code, or several separated by commas — at most 200. Matched trimmed and case-insensitively. Left out, every code an open cart holds is listed.
     * @param {string} params.status - Which carts count as holding a code, as cart statuses separated by commas. Default `active,abandoned`.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartHeldCodes>}
     */
    cartsHeldCodes(params?: { code?: string, status?: string, limit?: number, offset?: number }): Promise<Models.CartHeldCodes>;
    /**
     * Which promotion and voucher codes the buyers' open carts still hold, and how many carts hold each. Promotions asks this before it deletes a promotion for good (RAD-247): a code typed into a cart that can still become an order would point at nothing once the promotion is gone. Open means `active` or `abandoned` (abandoned is reversible) unless `status` says otherwise. A code is matched trimmed and case-insensitively and reported in that form, upper-cased — a tenant whose codes are case-sensitive gets a count that is at worst too high. `code` narrows the answer to the codes asked about; without it every held code is listed. `carts` counts the distinct carts behind the listed codes across all pages. Codes come sorted, paged like every list here. A read for the back office and for other apps: the answer names no cart and no owner.
     *
     * @param {string} code - One code, or several separated by commas — at most 200. Matched trimmed and case-insensitively. Left out, every code an open cart holds is listed.
     * @param {string} status - Which carts count as holding a code, as cart statuses separated by commas. Default `active,abandoned`.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartHeldCodes>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsHeldCodes(code?: string, status?: string, limit?: number, offset?: number): Promise<Models.CartHeldCodes>;
    cartsHeldCodes(
        paramsOrFirst?: { code?: string, status?: string, limit?: number, offset?: number } | string,
        ...rest: [(string)?, (number)?, (number)?]    
    ): Promise<Models.CartHeldCodes> {
        let params: { code?: string, status?: string, limit?: number, offset?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code?: string, status?: string, limit?: number, offset?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                status: rest[0] as string,
                limit: rest[1] as number,
                offset: rest[2] as number            
            };
        }
        
        const code = params.code;
        const status = params.status;
        const limit = params.limit;
        const offset = params.offset;


        const apiPath = '/v1/carts/held-codes';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
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
     * Two sweeps in one pass. abandon_after_minutes marks active carts that have sat untouched past the window as abandoned (stamping abandoned_at, which nothing else in the platform ever sets — without this the abandonment funnel is empty by construction, not empty because nobody abandons carts). cart_ttl_days / guest_cart_ttl_days then DELETE carts past their retention window, line items included; both default to 0 (never), and an 'ordered' cart is never touched at any setting because it is the source record of a sale. Send dry_run to get the same counts and cart ids while writing nothing. The platform runs this per installed tenant on the schedule; it is idempotent, so calling it by hand between ticks is safe.
     *
     * @param {boolean} params.dryRun - Report what the sweep WOULD do and write nothing. Worth doing before a first retention run: cart_ttl_days deletes carts and their lines.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartMaintenanceResult>}
     */
    cartsMaintenanceRun(params?: { dryRun?: boolean }): Promise<Models.CartMaintenanceResult>;
    /**
     * Two sweeps in one pass. abandon_after_minutes marks active carts that have sat untouched past the window as abandoned (stamping abandoned_at, which nothing else in the platform ever sets — without this the abandonment funnel is empty by construction, not empty because nobody abandons carts). cart_ttl_days / guest_cart_ttl_days then DELETE carts past their retention window, line items included; both default to 0 (never), and an 'ordered' cart is never touched at any setting because it is the source record of a sale. Send dry_run to get the same counts and cart ids while writing nothing. The platform runs this per installed tenant on the schedule; it is idempotent, so calling it by hand between ticks is safe.
     *
     * @param {boolean} dryRun - Report what the sweep WOULD do and write nothing. Worth doing before a first retention run: cart_ttl_days deletes carts and their lines.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartMaintenanceResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsMaintenanceRun(dryRun?: boolean): Promise<Models.CartMaintenanceResult>;
    cartsMaintenanceRun(
        paramsOrFirst?: { dryRun?: boolean } | boolean    
    ): Promise<Models.CartMaintenanceResult> {
        let params: { dryRun?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { dryRun?: boolean };
        } else {
            params = {
                dryRun: paramsOrFirst as boolean            
            };
        }
        
        const dryRun = params.dryRun;


        const apiPath = '/v1/carts/maintenance/run';
        const apiPayload: Payload = {};
        if (typeof dryRun !== 'undefined') {
            apiPayload['dry_run'] = dryRun;
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
     * Which of the two carts survives is the whole question, and the answer is the TARGET: the source's lines are COPIED into the target, the target keeps every line it already had, its totals are recomputed, and it is the cart the caller goes on using. Nothing is replaced and nothing is moved — the source keeps its own line rows and is closed with status 'merged' and `merged_into_cart_id` pointing at the target, so a merged cart stays readable as the record of what went where. On the way in, a plain product line with the same product/sku AND the same `unit_price` as a line already in the target adds its quantity to that line; configured and custom lines always land as new ones. Both carts must be active, must differ and must be priced in the same currency — the lines carry their amounts across and nothing converts them (409) — and the tenant's line limits are enforced on the target as the copies land (422). Reach for carts.merge_into where the caller holds one cart id and not two.
     *
     * @param {string} params.sourceCartId - The cart being folded in. It must be active, and it does NOT survive as a workspace: its lines are copied into the target, it becomes status merged, and merged_into_cart_id points at the target. Its own lines stay on it as the record of what was moved.
     * @param {string} params.targetCartId - The cart that SURVIVES. Must be active; it gains the source's lines (identical product lines at the same price adding up) and its totals are recomputed.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartMergeResult>}
     */
    cartsMerge(params: { sourceCartId: string, targetCartId: string, sessionKey?: string }): Promise<Models.CartMergeResult>;
    /**
     * Which of the two carts survives is the whole question, and the answer is the TARGET: the source's lines are COPIED into the target, the target keeps every line it already had, its totals are recomputed, and it is the cart the caller goes on using. Nothing is replaced and nothing is moved — the source keeps its own line rows and is closed with status 'merged' and `merged_into_cart_id` pointing at the target, so a merged cart stays readable as the record of what went where. On the way in, a plain product line with the same product/sku AND the same `unit_price` as a line already in the target adds its quantity to that line; configured and custom lines always land as new ones. Both carts must be active, must differ and must be priced in the same currency — the lines carry their amounts across and nothing converts them (409) — and the tenant's line limits are enforced on the target as the copies land (422). Reach for carts.merge_into where the caller holds one cart id and not two.
     *
     * @param {string} sourceCartId - The cart being folded in. It must be active, and it does NOT survive as a workspace: its lines are copied into the target, it becomes status merged, and merged_into_cart_id points at the target. Its own lines stay on it as the record of what was moved.
     * @param {string} targetCartId - The cart that SURVIVES. Must be active; it gains the source's lines (identical product lines at the same price adding up) and its totals are recomputed.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartMergeResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsMerge(sourceCartId: string, targetCartId: string, sessionKey?: string): Promise<Models.CartMergeResult>;
    cartsMerge(
        paramsOrFirst: { sourceCartId: string, targetCartId: string, sessionKey?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.CartMergeResult> {
        let params: { sourceCartId: string, targetCartId: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { sourceCartId: string, targetCartId: string, sessionKey?: string };
        } else {
            params = {
                sourceCartId: paramsOrFirst as string,
                targetCartId: rest[0] as string,
                sessionKey: rest[1] as string            
            };
        }
        
        const sourceCartId = params.sourceCartId;
        const targetCartId = params.targetCartId;
        const sessionKey = params.sessionKey;

        if (typeof sourceCartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sourceCartId"');
        }
        if (typeof targetCartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "targetCartId"');
        }

        const apiPath = '/v1/carts/merge';
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof sourceCartId !== 'undefined') {
            apiPayload['source_cart_id'] = sourceCartId;
        }
        if (typeof targetCartId !== 'undefined') {
            apiPayload['target_cart_id'] = targetCartId;
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
     * The operator's create: an order taken by phone, fax, mail or in the field starts here. It opens an ordinary active cart OWNED BY THE CONTACT, booked to the organization, with how the order arrived and the operator's note in `metadata` (`on_behalf`, `ordering_channel`, `note`, `opened_at`). Every rule of carts.create applies unchanged — the currency resolved once and written, and a second active cart refused with 409 while `multi_cart_enabled` is off. The cart is never made current, so the buyer's own basket stays where it was. Lines follow through carts.items.priced, which prices them for this customer as the shop would; the checkout is the one every stored cart takes, procurement's submit-cart, which applies the customer's approval rules and budgets and places the order. A request acting FOR a contact is refused with 403: a buyer opens their own carts through carts.create.
     *
     * @param {string} params.contactId - The customer the cart is for, as a contact of the customers app. The cart is theirs: it is checked out under their approval rules and budgets, as in the shop.
     * @param {CartOrderingChannel} params.channel - How the order reached the operator (default 'phone'). Kept in the cart's metadata as `ordering_channel`, and it names the cart when no `name` is sent.
     * @param {string} params.channelId - The sales channel, as a channel of the channels app. Stored for attribution.
     * @param {string} params.currency - ISO 4217 code the cart is priced in. Omitted, the market's `default_currency` applies, as on carts.create.
     * @param {string} params.name - What the cart is called. Defaults to the channel: 'Phone order', 'Fax order', 'Email order' or 'Field sales order'.
     * @param {string} params.note - The operator's note — a call-back time, a delivery wish. Kept in the cart's metadata as `note`.
     * @param {string} params.organizationId - The customer's company, as an organization of the customers app. Stored as sent; this app never looks it up.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsOnBehalf(params: { contactId: string, channel?: CartOrderingChannel, channelId?: string, currency?: string, name?: string, note?: string, organizationId?: string }): Promise<Models.Cart>;
    /**
     * The operator's create: an order taken by phone, fax, mail or in the field starts here. It opens an ordinary active cart OWNED BY THE CONTACT, booked to the organization, with how the order arrived and the operator's note in `metadata` (`on_behalf`, `ordering_channel`, `note`, `opened_at`). Every rule of carts.create applies unchanged — the currency resolved once and written, and a second active cart refused with 409 while `multi_cart_enabled` is off. The cart is never made current, so the buyer's own basket stays where it was. Lines follow through carts.items.priced, which prices them for this customer as the shop would; the checkout is the one every stored cart takes, procurement's submit-cart, which applies the customer's approval rules and budgets and places the order. A request acting FOR a contact is refused with 403: a buyer opens their own carts through carts.create.
     *
     * @param {string} contactId - The customer the cart is for, as a contact of the customers app. The cart is theirs: it is checked out under their approval rules and budgets, as in the shop.
     * @param {CartOrderingChannel} channel - How the order reached the operator (default 'phone'). Kept in the cart's metadata as `ordering_channel`, and it names the cart when no `name` is sent.
     * @param {string} channelId - The sales channel, as a channel of the channels app. Stored for attribution.
     * @param {string} currency - ISO 4217 code the cart is priced in. Omitted, the market's `default_currency` applies, as on carts.create.
     * @param {string} name - What the cart is called. Defaults to the channel: 'Phone order', 'Fax order', 'Email order' or 'Field sales order'.
     * @param {string} note - The operator's note — a call-back time, a delivery wish. Kept in the cart's metadata as `note`.
     * @param {string} organizationId - The customer's company, as an organization of the customers app. Stored as sent; this app never looks it up.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsOnBehalf(contactId: string, channel?: CartOrderingChannel, channelId?: string, currency?: string, name?: string, note?: string, organizationId?: string): Promise<Models.Cart>;
    cartsOnBehalf(
        paramsOrFirst: { contactId: string, channel?: CartOrderingChannel, channelId?: string, currency?: string, name?: string, note?: string, organizationId?: string } | string,
        ...rest: [(CartOrderingChannel)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Cart> {
        let params: { contactId: string, channel?: CartOrderingChannel, channelId?: string, currency?: string, name?: string, note?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, channel?: CartOrderingChannel, channelId?: string, currency?: string, name?: string, note?: string, organizationId?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                channel: rest[0] as CartOrderingChannel,
                channelId: rest[1] as string,
                currency: rest[2] as string,
                name: rest[3] as string,
                note: rest[4] as string,
                organizationId: rest[5] as string            
            };
        }
        
        const contactId = params.contactId;
        const channel = params.channel;
        const channelId = params.channelId;
        const currency = params.currency;
        const name = params.name;
        const note = params.note;
        const organizationId = params.organizationId;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/carts/on-behalf';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
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
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
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
     * Discovery for the vocabulary routes: every enum this app publishes, each as its name, its title and its description and nothing else. The VALUES are deliberately not here — this is the index a client builds a menu from, and one call per vocabulary fills it. Names: io-apply-modes, io-directions, io-entities, io-formats, item-types, statuses. Fetch one with GET /carts/vocabularies/{name}; a client holding the qualified pair 'carts.<name>' builds that URL from the pair alone.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartVocabularyIndex>}
     */
    cartsVocabulariesList(): Promise<Models.CartVocabularyIndex> {

        const apiPath = '/v1/carts/vocabularies';
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
     * One vocabulary with its values filled in — every value permitted by the column behind it, each carrying the key the database stores, a human title, a description where one was written and the badge tone a UI should render it in, which is everything a select or a status chip needs from one call. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is the order a select should offer. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Names: io-apply-modes, io-directions, io-entities, io-formats, item-types, statuses.
     *
     * @param {Name} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartVocabulary>}
     */
    cartsVocabulariesGet(params: { name: Name }): Promise<Models.CartVocabulary>;
    /**
     * One vocabulary with its values filled in — every value permitted by the column behind it, each carrying the key the database stores, a human title, a description where one was written and the badge tone a UI should render it in, which is everything a select or a status chip needs from one call. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is the order a select should offer. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Names: io-apply-modes, io-directions, io-entities, io-formats, item-types, statuses.
     *
     * @param {Name} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsVocabulariesGet(name: Name): Promise<Models.CartVocabulary>;
    cartsVocabulariesGet(
        paramsOrFirst: { name: Name } | Name    
    ): Promise<Models.CartVocabulary> {
        let params: { name: Name };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: Name };
        } else {
            params = {
                name: paramsOrFirst as Name            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/carts/vocabularies/{name}'.replace('{name}', name);
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
     * Removes the cart row and, through the `on delete cascade` on `cart_items.cart_id`, every line in it. There is no soft delete and no undo. One status is protected and it is protected permanently: an 'ordered' cart is the source record of a sale — the order carries its id in `cart_id` and the order.placed event records it — so this route refuses it with 400 and there is no flag, no force and no lifecycle route that makes it deletable. Do not go looking for one. 'active', 'abandoned' and 'merged' are all deletable, which is deliberate and is the same set the cart-maintenance sweep removes on a retention window: clearing out abandoned guest carts is the main thing anyone deletes a cart for, and a merged cart's lines were COPIED into the target, which still holds them. What the delete does NOT take with it is the trail: `merged_into_cart_id` is a plain uuid column and not a foreign key, so deleting a cart that other carts were merged INTO leaves those carts pointing at a row that no longer exists, and nothing refuses the delete or clears the pointer — the retention sweep does the same, so this is a property of the column and not of this route. For a cart a buyer simply walked away from, carts.abandon keeps the row and the funnel; for deleting on a retention window, the cart-maintenance sweep does it per market and can be asked first with `dry_run`.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    cartsDelete(params: { id: string, sessionKey?: string }): Promise<{}>;
    /**
     * Removes the cart row and, through the `on delete cascade` on `cart_items.cart_id`, every line in it. There is no soft delete and no undo. One status is protected and it is protected permanently: an 'ordered' cart is the source record of a sale — the order carries its id in `cart_id` and the order.placed event records it — so this route refuses it with 400 and there is no flag, no force and no lifecycle route that makes it deletable. Do not go looking for one. 'active', 'abandoned' and 'merged' are all deletable, which is deliberate and is the same set the cart-maintenance sweep removes on a retention window: clearing out abandoned guest carts is the main thing anyone deletes a cart for, and a merged cart's lines were COPIED into the target, which still holds them. What the delete does NOT take with it is the trail: `merged_into_cart_id` is a plain uuid column and not a foreign key, so deleting a cart that other carts were merged INTO leaves those carts pointing at a row that no longer exists, and nothing refuses the delete or clears the pointer — the retention sweep does the same, so this is a property of the column and not of this route. For a cart a buyer simply walked away from, carts.abandon keeps the row and the funnel; for deleting on a retention window, the cart-maintenance sweep does it per market and can be asked first with `dry_run`.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsDelete(id: string, sessionKey?: string): Promise<{}>;
    cartsDelete(
        paramsOrFirst: { id: string, sessionKey?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
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
     * One cart with its owner, its totals and its lifecycle stamps — and none of its lines: those are a separate call (`GET /carts/{cart_id}/items`), because a cart row is small and a filled cart is not. The two totals are derived and stored, never taken from a caller: `item_count` is the sum of the line QUANTITIES rather than the number of lines (two lines of five pieces answer 10, not 2) and `subtotal` the sum of the line totals, net of shipping and tax; both are recomputed after every line write. `status` says what may still be done — only an 'active' cart accepts a write of any kind, 'abandoned' is the one reversible ending, and a 'merged' cart carries `merged_into_cart_id`, which is the trail to the cart its lines were copied into.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsGet(params: { id: string, sessionKey?: string }): Promise<Models.Cart>;
    /**
     * One cart with its owner, its totals and its lifecycle stamps — and none of its lines: those are a separate call (`GET /carts/{cart_id}/items`), because a cart row is small and a filled cart is not. The two totals are derived and stored, never taken from a caller: `item_count` is the sum of the line QUANTITIES rather than the number of lines (two lines of five pieces answer 10, not 2) and `subtotal` the sum of the line totals, net of shipping and tax; both are recomputed after every line write. `status` says what may still be done — only an 'active' cart accepts a write of any kind, 'abandoned' is the one reversible ending, and a 'merged' cart carries `merged_into_cart_id`, which is the trail to the cart its lines were copied into.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsGet(id: string, sessionKey?: string): Promise<Models.Cart>;
    cartsGet(
        paramsOrFirst: { id: string, sessionKey?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Cart> {
        let params: { id: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
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
     * The columns a cart's own editing screen owns — `name`, `currency`, `channel_id`, `metadata` and `voucher_codes` — and the pricing the storefront hands in after asking promotions and shipping: `discount_lines`, `shipping_total`, `shipping_method`. A change to the vouchers or the pricing recomputes `discount_total`, `tax_total`, `grand_total` and `totals_computed_at`; those four are the cart's own and a payload naming one answers 400 `server_owned_field`. Everything else about a cart is either derived or a lifecycle move, and both are deliberately out of reach here — `item_count` and `subtotal` are recomputed from the lines, `status` travels through the action routes (activate, abandon, reopen, order, merge) so that every transition is guarded, and `market_id` is the platform's scope on the row rather than a column this app writes. A payload carrying none of the four answers 400 rather than storing nothing quietly, so a caller never believes an ignored field was saved. The owner is not updatable either: a guest cart becomes a customer's through carts.claim. One of the four has a guard behind it: `currency` re-denominates every amount in the cart, lines included, so it is accepted only while the cart holds no money and answers 409 once it does.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @param {object} params.attribution - Where the cart came from (RAD-287): the UTM values of the visit, the campaign, the ad click id, the landing page and referrer, first and last touch, the consent state of the consent manager and whether the objection notice for existing-customer mail was shown. The storefront writes it whole on every touch while the cart is open; it is frozen once the cart is ordered, and the order copies it at placement. A merge keeps the survivor's, or adopts the merged cart's when the survivor has none. Null until written. Replaced whole; `null` clears it. An ordered or merged cart answers 409 `attribution_frozen`.
     * @param {string} params.channelId - Move the cart to another sales channel.
     * @param {string} params.currency - Re-denominate the cart — which re-denominates every amount in it, because the lines are read in this code and hold none of their own. Only while the cart is still empty of money: a cart whose subtotal or any line price is non-zero answers 409 `currency_mismatch`, since nothing here converts and a changed code would restate a history in a currency it was never in. `null` is refused: a cart is always priced in one.
     * @param {object[]} params.discountLines - The discounts the storefront evaluated for this cart with the promotions app, replacing the stored ones. An entry naming a voucher must name one the cart holds (400 `voucher_not_held`). The cart recomputes discount_total, tax_total and grand_total from them. Only on an active cart. `null` clears them.
     * @param {object} params.metadata - Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
     * @param {string} params.name - Rename the cart. Unlike on create, this is written verbatim — `null` and `''` are refused by the database.
     * @param {string} params.organizationId - Set or correct the buyer's company. `null` clears it.
     * @param {string} params.shippingMethod - The method shipping_total was quoted for.
     * @param {number} params.shippingTotal - Shipping for this cart as the shipping app quoted it, net. The cart recomputes its tax and total. Only on an active cart.
     * @param {string[]} params.voucherCodes - Replace the codes the buyer entered. A discount line naming a code that is no longer in the list is dropped, and the totals are recomputed.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsUpdate(params: { id: string, sessionKey?: string, attribution?: object, channelId?: string, currency?: string, discountLines?: object[], metadata?: object, name?: string, organizationId?: string, shippingMethod?: string, shippingTotal?: number, voucherCodes?: string[] }): Promise<Models.Cart>;
    /**
     * The columns a cart's own editing screen owns — `name`, `currency`, `channel_id`, `metadata` and `voucher_codes` — and the pricing the storefront hands in after asking promotions and shipping: `discount_lines`, `shipping_total`, `shipping_method`. A change to the vouchers or the pricing recomputes `discount_total`, `tax_total`, `grand_total` and `totals_computed_at`; those four are the cart's own and a payload naming one answers 400 `server_owned_field`. Everything else about a cart is either derived or a lifecycle move, and both are deliberately out of reach here — `item_count` and `subtotal` are recomputed from the lines, `status` travels through the action routes (activate, abandon, reopen, order, merge) so that every transition is guarded, and `market_id` is the platform's scope on the row rather than a column this app writes. A payload carrying none of the four answers 400 rather than storing nothing quietly, so a caller never believes an ignored field was saved. The owner is not updatable either: a guest cart becomes a customer's through carts.claim. One of the four has a guard behind it: `currency` re-denominates every amount in the cart, lines included, so it is accepted only while the cart holds no money and answers 409 once it does.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @param {object} attribution - Where the cart came from (RAD-287): the UTM values of the visit, the campaign, the ad click id, the landing page and referrer, first and last touch, the consent state of the consent manager and whether the objection notice for existing-customer mail was shown. The storefront writes it whole on every touch while the cart is open; it is frozen once the cart is ordered, and the order copies it at placement. A merge keeps the survivor's, or adopts the merged cart's when the survivor has none. Null until written. Replaced whole; `null` clears it. An ordered or merged cart answers 409 `attribution_frozen`.
     * @param {string} channelId - Move the cart to another sales channel.
     * @param {string} currency - Re-denominate the cart — which re-denominates every amount in it, because the lines are read in this code and hold none of their own. Only while the cart is still empty of money: a cart whose subtotal or any line price is non-zero answers 409 `currency_mismatch`, since nothing here converts and a changed code would restate a history in a currency it was never in. `null` is refused: a cart is always priced in one.
     * @param {object[]} discountLines - The discounts the storefront evaluated for this cart with the promotions app, replacing the stored ones. An entry naming a voucher must name one the cart holds (400 `voucher_not_held`). The cart recomputes discount_total, tax_total and grand_total from them. Only on an active cart. `null` clears them.
     * @param {object} metadata - Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
     * @param {string} name - Rename the cart. Unlike on create, this is written verbatim — `null` and `''` are refused by the database.
     * @param {string} organizationId - Set or correct the buyer's company. `null` clears it.
     * @param {string} shippingMethod - The method shipping_total was quoted for.
     * @param {number} shippingTotal - Shipping for this cart as the shipping app quoted it, net. The cart recomputes its tax and total. Only on an active cart.
     * @param {string[]} voucherCodes - Replace the codes the buyer entered. A discount line naming a code that is no longer in the list is dropped, and the totals are recomputed.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsUpdate(id: string, sessionKey?: string, attribution?: object, channelId?: string, currency?: string, discountLines?: object[], metadata?: object, name?: string, organizationId?: string, shippingMethod?: string, shippingTotal?: number, voucherCodes?: string[]): Promise<Models.Cart>;
    cartsUpdate(
        paramsOrFirst: { id: string, sessionKey?: string, attribution?: object, channelId?: string, currency?: string, discountLines?: object[], metadata?: object, name?: string, organizationId?: string, shippingMethod?: string, shippingTotal?: number, voucherCodes?: string[] } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?, (object[])?, (object)?, (string)?, (string)?, (string)?, (number)?, (string[])?]    
    ): Promise<Models.Cart> {
        let params: { id: string, sessionKey?: string, attribution?: object, channelId?: string, currency?: string, discountLines?: object[], metadata?: object, name?: string, organizationId?: string, shippingMethod?: string, shippingTotal?: number, voucherCodes?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string, attribution?: object, channelId?: string, currency?: string, discountLines?: object[], metadata?: object, name?: string, organizationId?: string, shippingMethod?: string, shippingTotal?: number, voucherCodes?: string[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string,
                attribution: rest[1] as object,
                channelId: rest[2] as string,
                currency: rest[3] as string,
                discountLines: rest[4] as object[],
                metadata: rest[5] as object,
                name: rest[6] as string,
                organizationId: rest[7] as string,
                shippingMethod: rest[8] as string,
                shippingTotal: rest[9] as number,
                voucherCodes: rest[10] as string[]            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;
        const attribution = params.attribution;
        const channelId = params.channelId;
        const currency = params.currency;
        const discountLines = params.discountLines;
        const metadata = params.metadata;
        const name = params.name;
        const organizationId = params.organizationId;
        const shippingMethod = params.shippingMethod;
        const shippingTotal = params.shippingTotal;
        const voucherCodes = params.voucherCodes;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof attribution !== 'undefined') {
            apiPayload['attribution'] = Client.toWireKeys(attribution, {"campaignRef":{"wire":"campaign_ref","children":null},"clickId":{"wire":"click_id","children":null},"clickIdKind":{"wire":"click_id_kind","children":null},"consent":{"wire":"consent","children":{"policyVersion":{"wire":"policy_version","children":null}}},"firstTouchAt":{"wire":"first_touch_at","children":null},"landingUrl":{"wire":"landing_url","children":null},"lastTouchAt":{"wire":"last_touch_at","children":null},"objectionNoticeShown":{"wire":"objection_notice_shown","children":null},"utmCampaign":{"wire":"utm_campaign","children":null},"utmContent":{"wire":"utm_content","children":null},"utmMedium":{"wire":"utm_medium","children":null},"utmSource":{"wire":"utm_source","children":null},"utmTerm":{"wire":"utm_term","children":null}});
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof discountLines !== 'undefined') {
            apiPayload['discount_lines'] = Client.toWireKeys(discountLines, {"promotionId":{"wire":"promotion_id","children":null},"voucherCode":{"wire":"voucher_code","children":null}});
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
        if (typeof shippingMethod !== 'undefined') {
            apiPayload['shipping_method'] = shippingMethod;
        }
        if (typeof shippingTotal !== 'undefined') {
            apiPayload['shipping_total'] = shippingTotal;
        }
        if (typeof voucherCodes !== 'undefined') {
            apiPayload['voucher_codes'] = voucherCodes;
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
     * The by-hand half of the abandonment funnel: an active cart becomes 'abandoned', `abandoned_at` is stamped, and `is_current` is cleared — so its owner is left with no current cart until another one is activated. Nothing else in the platform writes `abandoned_at`; the only other writer is the cart-maintenance sweep, which does exactly this once a cart has sat untouched past the market's `abandon_after_minutes`. This is the one reversible ending: the lines are untouched throughout and carts.reopen takes the cart back. Only an active cart can be abandoned — an ordered or merged cart is already finished and answers 400 naming the status it actually holds.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsAbandon(params: { id: string, sessionKey?: string }): Promise<Models.Cart>;
    /**
     * The by-hand half of the abandonment funnel: an active cart becomes 'abandoned', `abandoned_at` is stamped, and `is_current` is cleared — so its owner is left with no current cart until another one is activated. Nothing else in the platform writes `abandoned_at`; the only other writer is the cart-maintenance sweep, which does exactly this once a cart has sat untouched past the market's `abandon_after_minutes`. This is the one reversible ending: the lines are untouched throughout and carts.reopen takes the cart back. Only an active cart can be abandoned — an ordered or merged cart is already finished and answers 400 naming the status it actually holds.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsAbandon(id: string, sessionKey?: string): Promise<Models.Cart>;
    cartsAbandon(
        paramsOrFirst: { id: string, sessionKey?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Cart> {
        let params: { id: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}/abandon'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
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
     * Activate writes exactly one thing: `is_current` on this cart, cleared on every other cart of the same owner (the same contact_id, or the same session_key). It does NOT change the status — an active cart stays active, and only an active cart may be made current. Read it back with `GET /carts?is_current=true` plus the owner: that filter is the only way to see what this route wrote, and a storefront resuming a session is its main caller. The flag is cleared again by abandoning, ordering or merging the cart, so an owner can legitimately have no current cart at all.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsActivate(params: { id: string, sessionKey?: string }): Promise<Models.Cart>;
    /**
     * Activate writes exactly one thing: `is_current` on this cart, cleared on every other cart of the same owner (the same contact_id, or the same session_key). It does NOT change the status — an active cart stays active, and only an active cart may be made current. Read it back with `GET /carts?is_current=true` plus the owner: that filter is the only way to see what this route wrote, and a storefront resuming a session is its main caller. The flag is cleared again by abandoning, ordering or merging the cart, so an owner can legitimately have no current cart at all.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsActivate(id: string, sessionKey?: string): Promise<Models.Cart>;
    cartsActivate(
        paramsOrFirst: { id: string, sessionKey?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Cart> {
        let params: { id: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}/activate'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
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
     * Identical to carts.merge, with the SOURCE taken from the path — which is what makes the merge reachable from anything holding one cart and only one: a Cockpit row action, a detail page, a storefront session. The cart in the path is therefore the one that ends: its lines are copied into the `target_cart_id` named in the body, that target keeps its own lines and survives, and the path cart is closed with status 'merged' and `merged_into_cart_id` pointing at it. Getting the two the wrong way round is the mistake this route exists to make hard, so read the path id as "the cart I am giving away". Both carts must be active, must differ and must be priced in the same currency.
     *
     * @param {string} params.id - The SOURCE cart — the one whose lines move and which becomes status merged.
     * @param {string} params.targetCartId - Receiving cart (must be active). The cart in the path is the source and becomes status merged.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartMergeResult>}
     */
    cartsMergeInto(params: { id: string, targetCartId: string, sessionKey?: string }): Promise<Models.CartMergeResult>;
    /**
     * Identical to carts.merge, with the SOURCE taken from the path — which is what makes the merge reachable from anything holding one cart and only one: a Cockpit row action, a detail page, a storefront session. The cart in the path is therefore the one that ends: its lines are copied into the `target_cart_id` named in the body, that target keeps its own lines and survives, and the path cart is closed with status 'merged' and `merged_into_cart_id` pointing at it. Getting the two the wrong way round is the mistake this route exists to make hard, so read the path id as "the cart I am giving away". Both carts must be active, must differ and must be priced in the same currency.
     *
     * @param {string} id - The SOURCE cart — the one whose lines move and which becomes status merged.
     * @param {string} targetCartId - Receiving cart (must be active). The cart in the path is the source and becomes status merged.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartMergeResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsMergeInto(id: string, targetCartId: string, sessionKey?: string): Promise<Models.CartMergeResult>;
    cartsMergeInto(
        paramsOrFirst: { id: string, targetCartId: string, sessionKey?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.CartMergeResult> {
        let params: { id: string, targetCartId: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, targetCartId: string, sessionKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                targetCartId: rest[0] as string,
                sessionKey: rest[1] as string            
            };
        }
        
        const id = params.id;
        const targetCartId = params.targetCartId;
        const sessionKey = params.sessionKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof targetCartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "targetCartId"');
        }

        const apiPath = '/v1/carts/{id}/merge-into'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof targetCartId !== 'undefined') {
            apiPayload['target_cart_id'] = targetCartId;
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
     * The hand-over to order management, and the end of the cart as a workspace: an ACTIVE cart becomes 'ordered', ordered_at is stamped, and the order_ref the call carries — order management's own number for the order this cart became — is stored on the cart, which is what lets anyone filter their way from an order number back to the cart behind it. Nothing moves out of 'ordered' afterwards, and no route will delete it. The conversion applies the two tenant decisions a cart cannot make for itself. price_snapshot_mode (snapshot | live) settles which of a line's two prices is charged — the snapshot the buyer was shown, or the current unit_price — and the cart's subtotal is rewritten to match, so cart and order can never disagree; 'pricing' reports the mode, the lines it rewrote and the subtotal on both sides. convert_reserves_stock (never | request | require) decides whether inventories is asked to hold the lines; at 'require' a refusal answers 409 and the cart stays active and unchanged. The reservation is attempted BEFORE anything is written.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @param {string} params.orderRef - The order number this cart becomes, in order management's own numbering. Stored on the cart — filtering on it is how anyone gets from an order back to the cart behind it — and it is also the reference the stock reservation is booked under. Omit it and the cart id is used for the reservation instead.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartConversion>}
     */
    cartsOrder(params: { id: string, sessionKey?: string, orderRef?: string }): Promise<Models.CartConversion>;
    /**
     * The hand-over to order management, and the end of the cart as a workspace: an ACTIVE cart becomes 'ordered', ordered_at is stamped, and the order_ref the call carries — order management's own number for the order this cart became — is stored on the cart, which is what lets anyone filter their way from an order number back to the cart behind it. Nothing moves out of 'ordered' afterwards, and no route will delete it. The conversion applies the two tenant decisions a cart cannot make for itself. price_snapshot_mode (snapshot | live) settles which of a line's two prices is charged — the snapshot the buyer was shown, or the current unit_price — and the cart's subtotal is rewritten to match, so cart and order can never disagree; 'pricing' reports the mode, the lines it rewrote and the subtotal on both sides. convert_reserves_stock (never | request | require) decides whether inventories is asked to hold the lines; at 'require' a refusal answers 409 and the cart stays active and unchanged. The reservation is attempted BEFORE anything is written.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @param {string} orderRef - The order number this cart becomes, in order management's own numbering. Stored on the cart — filtering on it is how anyone gets from an order back to the cart behind it — and it is also the reference the stock reservation is booked under. Omit it and the cart id is used for the reservation instead.
     * @throws {RevenexxException}
     * @returns {Promise<Models.CartConversion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsOrder(id: string, sessionKey?: string, orderRef?: string): Promise<Models.CartConversion>;
    cartsOrder(
        paramsOrFirst: { id: string, sessionKey?: string, orderRef?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.CartConversion> {
        let params: { id: string, sessionKey?: string, orderRef?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string, orderRef?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string,
                orderRef: rest[1] as string            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;
        const orderRef = params.orderRef;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}/order'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
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
     * Takes an abandoned cart back to 'active' with its lines exactly as they were — what a storefront calls when a buyer follows a recovery mail, and the way out of the 400 a write gets on a cart the maintenance sweep closed while nobody was looking. It also CLEARS `abandoned_at`, so a cart that was abandoned and reopened leaves nothing behind in the funnel: the funnel counts carts that are still abandoned, not carts that ever were. It does not restore `is_current` — a reopened cart is active but not current until carts.activate says so. Only an abandoned cart may be reopened; 'ordered' and 'merged' are final and answer 400 naming the status the cart holds.
     *
     * @param {string} params.id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} params.sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     */
    cartsReopen(params: { id: string, sessionKey?: string }): Promise<Models.Cart>;
    /**
     * Takes an abandoned cart back to 'active' with its lines exactly as they were — what a storefront calls when a buyer follows a recovery mail, and the way out of the 400 a write gets on a cart the maintenance sweep closed while nobody was looking. It also CLEARS `abandoned_at`, so a cart that was abandoned and reopened leaves nothing behind in the funnel: the funnel counts carts that are still abandoned, not carts that ever were. It does not restore `is_current` — a reopened cart is active but not current until carts.activate says so. Only an abandoned cart may be reopened; 'ordered' and 'merged' are final and answer 400 naming the status the cart holds.
     *
     * @param {string} id - The cart, by its id — the `id` every cart answer carries. A uuid: the data plane casts the segment, so a code or a slug is refused before the cart is looked up.
     * @param {string} sessionKey - The session key of a cart owned by no contact — a guest's, or a punchout visit's pSid. Accepted and not yet checked; from 3.0.0 on, a call acting for a contact reaches such a cart only with it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Cart>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsReopen(id: string, sessionKey?: string): Promise<Models.Cart>;
    cartsReopen(
        paramsOrFirst: { id: string, sessionKey?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Cart> {
        let params: { id: string, sessionKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sessionKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                sessionKey: rest[0] as string            
            };
        }
        
        const id = params.id;
        const sessionKey = params.sessionKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{id}/reopen'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sessionKey !== 'undefined') {
            apiPayload['session_key'] = sessionKey;
        }
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
}
