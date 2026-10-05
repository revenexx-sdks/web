import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { OrderStatus } from '../enums/order-status';
import { OrderPaymentStatus } from '../enums/order-payment-status';
import { OrderFulfillmentStatus } from '../enums/order-fulfillment-status';
import { OrderVocabularyTone } from '../enums/order-vocabulary-tone';
import { OrdersVocabulariesGetName } from '../enums/orders-vocabularies-get-name';
import { OrderCommentVisibility } from '../enums/order-comment-visibility';
import { OrderReturnSettlement } from '../enums/order-return-settlement';
import { OrderReturnRefusal } from '../enums/order-return-refusal';

export class Orders {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The route behind every order overview: the open orders of one customer, everything on hold, everything a market placed last week, or the one order somebody is quoting a number for (?number=ORD-000123 — the number is not the id, and this is how one becomes the other). The order LIST: the order rows without their positions, shipments, returns or cancellations — read GET /orders/{id} for the aggregate of one. Every parameter below is an exact match on the column it names, and combining them is an AND. Two kinds of key are not offered: one that names NO column is not a filter — the SDK release after app-sdks#30 answers it 400 unknown_filter, and until then a mistyped ?stauts=placed is dropped and answers the whole list (compare the 'filter' echo against what you sent) — and the jsonb columns buyer, billing_address, shipping_address, payment, shipping, user_data and metadata reach the database as a text comparison and answer 400 invalid_value for anything that is not a whole JSON document.
     *
     * @param {string} params.id - Filter to exactly one order. GET /orders/{id} is the direct form and answers the aggregate; this exists because the list honours it too. Primary key of the order, and the id every other route takes. Not the order number.
     * @param {string} params.number - Look an order up by its NUMBER — the one filter a service desk starts from, and the way to turn the number a customer quotes into the uuid every other route wants. Exact match; there is no substring search on this API. The order number a human quotes — drawn from the tenant's order range at place-time, unique per tenant and never reused. It is NOT the id: every route addresses an order by uuid, and GET /orders?number=… is how a number becomes one.
     * @param {string} params.customerOrderNumber - Look an order up by the BUYER's own PO number. Not unique: the same buyer reference can legitimately sit on several orders. The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
     * @param {string} params.externalRef - Find the order behind a reference in the fulfilling system — the ERP order number. Exact match, and null on everything not yet acknowledged. The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it.
     * @param {string} params.acknowledgedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the fulfilling system took the order over. Written once. While it is null the order can still be modified here; afterwards modification goes through that system, unless the tenant sets allow_modification_after_acknowledge.
     * @param {string} params.cartId - Find the order a given cart became. The reverse of the carts hand-over, and how a storefront checks whether a checkout already went through. The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created.
     * @param {string} params.contactId - Filter to one person's orders — their order history. The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout.
     * @param {string} params.organizationId - Filter to one company's orders, across everyone who ordered for it. The B2B view, and the same attribution orders.reports.customer-rollup aggregates by. The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it.
     * @param {string} params.channelId - Filter to rows whose `channel_id` is exactly this value. The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
     * @param {string} params.currency - Filter by ISO 4217 code. Worth remembering before summing `grand_total` over a mixed list: nothing on an order is ever converted. ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting.
     * @param {OrderStatus} params.status - Filter by lifecycle status. `pending` IS the approval queue — there is no second entity for it. Where the order stands in its LIFECYCLE, and one of three independent status dimensions. 'pending' = created but not placed, an order waiting for approval; 'placed' = accepted, nothing shipped; 'in_fulfillment' = part of it has gone out, or all of it has and the tenant does not close on shipment; 'completed' and 'cancelled' end it. Moved by the action routes only — it is not writable through PUT /orders/{id}.
     * @param {OrderPaymentStatus} params.paymentStatus - Filter by the payment dimension, independently of the lifecycle: `payment_status=open&status=completed` is the delivered-but-unpaid list. Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
     * @param {OrderFulfillmentStatus} params.fulfillmentStatus - Filter by the derived shipping dimension. `unfulfilled` with `status=placed` is the work queue a warehouse picks from. Whether the order has SHIPPED, and the one dimension nobody writes: it is DERIVED after every quantity change from the positions' own bookkeeping. 'fulfilled' means shipped >= ordered − cancelled across all positions, 'partial' means something went out. Sending it has no effect; ship, cancel or return something and it moves.
     * @param {boolean} params.onHold - Filter to the held orders — the list somebody has to work through before anything of theirs can ship. A business stop, ORTHOGONAL to status: a held order keeps its lifecycle state and is refused at the guards. How far the hold reaches is the tenant's call (on_hold_blocks: shipping only, shipping and cancellation, or nothing at all).
     * @param {string} params.holdReason - Filter to rows whose `hold_reason` is exactly this value. Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
     * @param {number} params.itemCount - Filter to rows whose `item_count` is exactly this value. The summed ORDERED quantity over all positions, rounded to a whole number — a headline figure for a list, computed once at place-time. It is deliberately not reduced when something is cancelled or returned; the positions carry that arithmetic.
     * @param {number} params.subtotal - Filter to rows whose `subtotal` is exactly this value. NET total of the positions (the sum of their line_total), COMPUTED here at place-time. In `currency`, four decimal places. A caller cannot set it.
     * @param {number} params.discountTotal - Filter to rows whose `discount_total` is exactly this value. Every discount a promotion took off this order, summed: the positions' discounts, a head-level voucher distributed across them, a discount placed as its own position, and any reduction of the shipping charge. COMPUTED here from the components the caller evaluated — a caller cannot set it. `subtotal` stays the UNDISCOUNTED sum, so the two together say what was charged and what was given away.
     * @param {number} params.shippingTotal - Filter to rows whose `shipping_total` is exactly this value. NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`. This is the price BEFORE any promotion reduced it; the reduction is a row in the discount components.
     * @param {number} params.shippingTaxRate - Filter to rows whose `shipping_tax_rate` is exactly this value. The tax percentage the shipping charge was taxed at, frozen at place-time (19 means 19 %). Stored rather than only used, because otherwise nobody could say afterwards how much of tax_total was shipping — which an ERP export of a discounted shipping charge needs.
     * @param {number} params.shippingTaxAmount - Filter to rows whose `shipping_tax_amount` is exactly this value. Tax on the shipping charge, computed on what is OWED after any promotion reduced it. Part of tax_total, and stored separately so the shipping line can be stated on its own.
     * @param {number} params.paymentFeeAmount - Filter to rows whose `payment_fee_amount` is exactly this value. The payment surcharge this order was placed with, NET — what the payments app computed for the chosen method (a fixed amount, or a share of the order). Zero for a method that charges nothing, which is most of them. Passed in with the payment arrangement the way the shipping price is, and stored rather than folded into the `payment` blob: a grand_total that silently included a fee nobody could point at is a reconciliation nobody can finish.
     * @param {number} params.paymentFeeTaxRate - Filter to rows whose `payment_fee_tax_rate` is exactly this value. The rate the payment surcharge was taxed at, frozen at place-time (19 means 19 %). A surcharge is a Nebenleistung and is taxed like one.
     * @param {number} params.paymentFeeTaxAmount - Filter to rows whose `payment_fee_tax_amount` is exactly this value. Tax on the payment surcharge, part of tax_total and stored separately so the fee can be stated on its own line of an invoice or an export.
     * @param {number} params.taxTotal - Filter to rows whose `tax_total` is exactly this value. All tax on this order: the positions' tax_amount plus the tax on shipping (shipping_total × shipping.tax_rate). COMPUTED here — a caller cannot set it.
     * @param {number} params.grandTotal - Filter to rows whose `grand_total` is exactly this value. What the buyer owes: the positions' discounted totals plus the discounted shipping charge plus the payment surcharge plus tax_total, COMPUTED by this app and NEVER taken from the caller — trusting a supplied total is how inconsistent orders happened. This is the number the approval threshold is compared against and the number the revenue rollup sums.
     * @param {string} params.placedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order was PLACED. Null while it is pending approval: an order awaiting sign-off exists but was never placed, and that is exactly the difference this field records.
     * @param {string} params.completedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order was closed — by a full shipment, by payment or by hand, depending on the tenant's auto_complete_on. Null until then.
     * @param {string} params.cancelledAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order was cancelled, whether by a full cancel or by the last open quantity being cancelled position by position. Null otherwise.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns.
     * @param {string} params.sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns.
     * @param {string} params.requestedDeliveryDate - The dispatch list for one day: every order the buyer asked to have on it. Exact equality on the DAY — there is no range filter here, so a week is seven calls or a sort with `order=requested_delivery_date.asc` and paging. It answers about the ORDER's date; a position that named its own is not found this way. The calendar day the BUYER asked to be delivered on, as a date and not a moment — a buyer asks for Tuesday, not for Tuesday at 14:03 in a timezone nobody named. It is a wish and nothing here judges it: a date in the past, a weekend or a day inside the lead time is stored as sent, because what is deliverable is the merchant's answer and this app reads neither stock nor carrier calendar. The positions carry their own, and A POSITION'S DATE WINS over this one — this is the proposal for every position that names none. Null on an order that asked for nothing, which is the ordinary case. It was collected in `user_data.requested_date` before this column existed and is still echoed there by callers that have not moved over; the column is what is compared, sorted and mapped.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order row was written. For a placed order this is placed_at; for a requested one it is when the request was submitted.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of the order last changed — every status move, every re-derived fulfillment, every modification.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersList(params?: { id?: string, number?: string, customerOrderNumber?: string, externalRef?: string, acknowledgedAt?: string, cartId?: string, contactId?: string, organizationId?: string, channelId?: string, currency?: string, status?: OrderStatus, paymentStatus?: OrderPaymentStatus, fulfillmentStatus?: OrderFulfillmentStatus, onHold?: boolean, holdReason?: string, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, shippingTaxRate?: number, shippingTaxAmount?: number, paymentFeeAmount?: number, paymentFeeTaxRate?: number, paymentFeeTaxAmount?: number, taxTotal?: number, grandTotal?: number, placedAt?: string, completedAt?: string, cancelledAt?: string, externalId?: string, sourceSyncedAt?: string, requestedDeliveryDate?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * The route behind every order overview: the open orders of one customer, everything on hold, everything a market placed last week, or the one order somebody is quoting a number for (?number=ORD-000123 — the number is not the id, and this is how one becomes the other). The order LIST: the order rows without their positions, shipments, returns or cancellations — read GET /orders/{id} for the aggregate of one. Every parameter below is an exact match on the column it names, and combining them is an AND. Two kinds of key are not offered: one that names NO column is not a filter — the SDK release after app-sdks#30 answers it 400 unknown_filter, and until then a mistyped ?stauts=placed is dropped and answers the whole list (compare the 'filter' echo against what you sent) — and the jsonb columns buyer, billing_address, shipping_address, payment, shipping, user_data and metadata reach the database as a text comparison and answer 400 invalid_value for anything that is not a whole JSON document.
     *
     * @param {string} id - Filter to exactly one order. GET /orders/{id} is the direct form and answers the aggregate; this exists because the list honours it too. Primary key of the order, and the id every other route takes. Not the order number.
     * @param {string} number - Look an order up by its NUMBER — the one filter a service desk starts from, and the way to turn the number a customer quotes into the uuid every other route wants. Exact match; there is no substring search on this API. The order number a human quotes — drawn from the tenant's order range at place-time, unique per tenant and never reused. It is NOT the id: every route addresses an order by uuid, and GET /orders?number=… is how a number becomes one.
     * @param {string} customerOrderNumber - Look an order up by the BUYER's own PO number. Not unique: the same buyer reference can legitimately sit on several orders. The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
     * @param {string} externalRef - Find the order behind a reference in the fulfilling system — the ERP order number. Exact match, and null on everything not yet acknowledged. The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it.
     * @param {string} acknowledgedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the fulfilling system took the order over. Written once. While it is null the order can still be modified here; afterwards modification goes through that system, unless the tenant sets allow_modification_after_acknowledge.
     * @param {string} cartId - Find the order a given cart became. The reverse of the carts hand-over, and how a storefront checks whether a checkout already went through. The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created.
     * @param {string} contactId - Filter to one person's orders — their order history. The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout.
     * @param {string} organizationId - Filter to one company's orders, across everyone who ordered for it. The B2B view, and the same attribution orders.reports.customer-rollup aggregates by. The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it.
     * @param {string} channelId - Filter to rows whose `channel_id` is exactly this value. The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
     * @param {string} currency - Filter by ISO 4217 code. Worth remembering before summing `grand_total` over a mixed list: nothing on an order is ever converted. ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting.
     * @param {OrderStatus} status - Filter by lifecycle status. `pending` IS the approval queue — there is no second entity for it. Where the order stands in its LIFECYCLE, and one of three independent status dimensions. 'pending' = created but not placed, an order waiting for approval; 'placed' = accepted, nothing shipped; 'in_fulfillment' = part of it has gone out, or all of it has and the tenant does not close on shipment; 'completed' and 'cancelled' end it. Moved by the action routes only — it is not writable through PUT /orders/{id}.
     * @param {OrderPaymentStatus} paymentStatus - Filter by the payment dimension, independently of the lifecycle: `payment_status=open&status=completed` is the delivered-but-unpaid list. Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
     * @param {OrderFulfillmentStatus} fulfillmentStatus - Filter by the derived shipping dimension. `unfulfilled` with `status=placed` is the work queue a warehouse picks from. Whether the order has SHIPPED, and the one dimension nobody writes: it is DERIVED after every quantity change from the positions' own bookkeeping. 'fulfilled' means shipped >= ordered − cancelled across all positions, 'partial' means something went out. Sending it has no effect; ship, cancel or return something and it moves.
     * @param {boolean} onHold - Filter to the held orders — the list somebody has to work through before anything of theirs can ship. A business stop, ORTHOGONAL to status: a held order keeps its lifecycle state and is refused at the guards. How far the hold reaches is the tenant's call (on_hold_blocks: shipping only, shipping and cancellation, or nothing at all).
     * @param {string} holdReason - Filter to rows whose `hold_reason` is exactly this value. Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
     * @param {number} itemCount - Filter to rows whose `item_count` is exactly this value. The summed ORDERED quantity over all positions, rounded to a whole number — a headline figure for a list, computed once at place-time. It is deliberately not reduced when something is cancelled or returned; the positions carry that arithmetic.
     * @param {number} subtotal - Filter to rows whose `subtotal` is exactly this value. NET total of the positions (the sum of their line_total), COMPUTED here at place-time. In `currency`, four decimal places. A caller cannot set it.
     * @param {number} discountTotal - Filter to rows whose `discount_total` is exactly this value. Every discount a promotion took off this order, summed: the positions' discounts, a head-level voucher distributed across them, a discount placed as its own position, and any reduction of the shipping charge. COMPUTED here from the components the caller evaluated — a caller cannot set it. `subtotal` stays the UNDISCOUNTED sum, so the two together say what was charged and what was given away.
     * @param {number} shippingTotal - Filter to rows whose `shipping_total` is exactly this value. NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`. This is the price BEFORE any promotion reduced it; the reduction is a row in the discount components.
     * @param {number} shippingTaxRate - Filter to rows whose `shipping_tax_rate` is exactly this value. The tax percentage the shipping charge was taxed at, frozen at place-time (19 means 19 %). Stored rather than only used, because otherwise nobody could say afterwards how much of tax_total was shipping — which an ERP export of a discounted shipping charge needs.
     * @param {number} shippingTaxAmount - Filter to rows whose `shipping_tax_amount` is exactly this value. Tax on the shipping charge, computed on what is OWED after any promotion reduced it. Part of tax_total, and stored separately so the shipping line can be stated on its own.
     * @param {number} paymentFeeAmount - Filter to rows whose `payment_fee_amount` is exactly this value. The payment surcharge this order was placed with, NET — what the payments app computed for the chosen method (a fixed amount, or a share of the order). Zero for a method that charges nothing, which is most of them. Passed in with the payment arrangement the way the shipping price is, and stored rather than folded into the `payment` blob: a grand_total that silently included a fee nobody could point at is a reconciliation nobody can finish.
     * @param {number} paymentFeeTaxRate - Filter to rows whose `payment_fee_tax_rate` is exactly this value. The rate the payment surcharge was taxed at, frozen at place-time (19 means 19 %). A surcharge is a Nebenleistung and is taxed like one.
     * @param {number} paymentFeeTaxAmount - Filter to rows whose `payment_fee_tax_amount` is exactly this value. Tax on the payment surcharge, part of tax_total and stored separately so the fee can be stated on its own line of an invoice or an export.
     * @param {number} taxTotal - Filter to rows whose `tax_total` is exactly this value. All tax on this order: the positions' tax_amount plus the tax on shipping (shipping_total × shipping.tax_rate). COMPUTED here — a caller cannot set it.
     * @param {number} grandTotal - Filter to rows whose `grand_total` is exactly this value. What the buyer owes: the positions' discounted totals plus the discounted shipping charge plus the payment surcharge plus tax_total, COMPUTED by this app and NEVER taken from the caller — trusting a supplied total is how inconsistent orders happened. This is the number the approval threshold is compared against and the number the revenue rollup sums.
     * @param {string} placedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order was PLACED. Null while it is pending approval: an order awaiting sign-off exists but was never placed, and that is exactly the difference this field records.
     * @param {string} completedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order was closed — by a full shipment, by payment or by hand, depending on the tenant's auto_complete_on. Null until then.
     * @param {string} cancelledAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order was cancelled, whether by a full cancel or by the last open quantity being cancelled position by position. Null otherwise.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns.
     * @param {string} sourceSyncedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns.
     * @param {string} requestedDeliveryDate - The dispatch list for one day: every order the buyer asked to have on it. Exact equality on the DAY — there is no range filter here, so a week is seven calls or a sort with `order=requested_delivery_date.asc` and paging. It answers about the ORDER's date; a position that named its own is not found this way. The calendar day the BUYER asked to be delivered on, as a date and not a moment — a buyer asks for Tuesday, not for Tuesday at 14:03 in a timezone nobody named. It is a wish and nothing here judges it: a date in the past, a weekend or a day inside the lead time is stored as sent, because what is deliverable is the merchant's answer and this app reads neither stock nor carrier calendar. The positions carry their own, and A POSITION'S DATE WINS over this one — this is the proposal for every position that names none. Null on an order that asked for nothing, which is the ordinary case. It was collected in `user_data.requested_date` before this column existed and is still echoed there by callers that have not moved over; the column is what is compared, sorted and mapped.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the order row was written. For a placed order this is placed_at; for a requested one it is when the request was submitted.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When any column of the order last changed — every status move, every re-derived fulfillment, every modification.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersList(id?: string, number?: string, customerOrderNumber?: string, externalRef?: string, acknowledgedAt?: string, cartId?: string, contactId?: string, organizationId?: string, channelId?: string, currency?: string, status?: OrderStatus, paymentStatus?: OrderPaymentStatus, fulfillmentStatus?: OrderFulfillmentStatus, onHold?: boolean, holdReason?: string, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, shippingTaxRate?: number, shippingTaxAmount?: number, paymentFeeAmount?: number, paymentFeeTaxRate?: number, paymentFeeTaxAmount?: number, taxTotal?: number, grandTotal?: number, placedAt?: string, completedAt?: string, cancelledAt?: string, externalId?: string, sourceSyncedAt?: string, requestedDeliveryDate?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    ordersList(
        paramsOrFirst?: { id?: string, number?: string, customerOrderNumber?: string, externalRef?: string, acknowledgedAt?: string, cartId?: string, contactId?: string, organizationId?: string, channelId?: string, currency?: string, status?: OrderStatus, paymentStatus?: OrderPaymentStatus, fulfillmentStatus?: OrderFulfillmentStatus, onHold?: boolean, holdReason?: string, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, shippingTaxRate?: number, shippingTaxAmount?: number, paymentFeeAmount?: number, paymentFeeTaxRate?: number, paymentFeeTaxAmount?: number, taxTotal?: number, grandTotal?: number, placedAt?: string, completedAt?: string, cancelledAt?: string, externalId?: string, sourceSyncedAt?: string, requestedDeliveryDate?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (OrderStatus)?, (OrderPaymentStatus)?, (OrderFulfillmentStatus)?, (boolean)?, (string)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, number?: string, customerOrderNumber?: string, externalRef?: string, acknowledgedAt?: string, cartId?: string, contactId?: string, organizationId?: string, channelId?: string, currency?: string, status?: OrderStatus, paymentStatus?: OrderPaymentStatus, fulfillmentStatus?: OrderFulfillmentStatus, onHold?: boolean, holdReason?: string, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, shippingTaxRate?: number, shippingTaxAmount?: number, paymentFeeAmount?: number, paymentFeeTaxRate?: number, paymentFeeTaxAmount?: number, taxTotal?: number, grandTotal?: number, placedAt?: string, completedAt?: string, cancelledAt?: string, externalId?: string, sourceSyncedAt?: string, requestedDeliveryDate?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, number?: string, customerOrderNumber?: string, externalRef?: string, acknowledgedAt?: string, cartId?: string, contactId?: string, organizationId?: string, channelId?: string, currency?: string, status?: OrderStatus, paymentStatus?: OrderPaymentStatus, fulfillmentStatus?: OrderFulfillmentStatus, onHold?: boolean, holdReason?: string, itemCount?: number, subtotal?: number, discountTotal?: number, shippingTotal?: number, shippingTaxRate?: number, shippingTaxAmount?: number, paymentFeeAmount?: number, paymentFeeTaxRate?: number, paymentFeeTaxAmount?: number, taxTotal?: number, grandTotal?: number, placedAt?: string, completedAt?: string, cancelledAt?: string, externalId?: string, sourceSyncedAt?: string, requestedDeliveryDate?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                number: rest[0] as string,
                customerOrderNumber: rest[1] as string,
                externalRef: rest[2] as string,
                acknowledgedAt: rest[3] as string,
                cartId: rest[4] as string,
                contactId: rest[5] as string,
                organizationId: rest[6] as string,
                channelId: rest[7] as string,
                currency: rest[8] as string,
                status: rest[9] as OrderStatus,
                paymentStatus: rest[10] as OrderPaymentStatus,
                fulfillmentStatus: rest[11] as OrderFulfillmentStatus,
                onHold: rest[12] as boolean,
                holdReason: rest[13] as string,
                itemCount: rest[14] as number,
                subtotal: rest[15] as number,
                discountTotal: rest[16] as number,
                shippingTotal: rest[17] as number,
                shippingTaxRate: rest[18] as number,
                shippingTaxAmount: rest[19] as number,
                paymentFeeAmount: rest[20] as number,
                paymentFeeTaxRate: rest[21] as number,
                paymentFeeTaxAmount: rest[22] as number,
                taxTotal: rest[23] as number,
                grandTotal: rest[24] as number,
                placedAt: rest[25] as string,
                completedAt: rest[26] as string,
                cancelledAt: rest[27] as string,
                externalId: rest[28] as string,
                sourceSyncedAt: rest[29] as string,
                requestedDeliveryDate: rest[30] as string,
                createdAt: rest[31] as string,
                updatedAt: rest[32] as string,
                limit: rest[33] as number,
                offset: rest[34] as number,
                order: rest[35] as string            
            };
        }
        
        const id = params.id;
        const number = params.number;
        const customerOrderNumber = params.customerOrderNumber;
        const externalRef = params.externalRef;
        const acknowledgedAt = params.acknowledgedAt;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const channelId = params.channelId;
        const currency = params.currency;
        const status = params.status;
        const paymentStatus = params.paymentStatus;
        const fulfillmentStatus = params.fulfillmentStatus;
        const onHold = params.onHold;
        const holdReason = params.holdReason;
        const itemCount = params.itemCount;
        const subtotal = params.subtotal;
        const discountTotal = params.discountTotal;
        const shippingTotal = params.shippingTotal;
        const shippingTaxRate = params.shippingTaxRate;
        const shippingTaxAmount = params.shippingTaxAmount;
        const paymentFeeAmount = params.paymentFeeAmount;
        const paymentFeeTaxRate = params.paymentFeeTaxRate;
        const paymentFeeTaxAmount = params.paymentFeeTaxAmount;
        const taxTotal = params.taxTotal;
        const grandTotal = params.grandTotal;
        const placedAt = params.placedAt;
        const completedAt = params.completedAt;
        const cancelledAt = params.cancelledAt;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
        const requestedDeliveryDate = params.requestedDeliveryDate;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/orders';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof acknowledgedAt !== 'undefined') {
            apiPayload['acknowledged_at'] = acknowledgedAt;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
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
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof paymentStatus !== 'undefined') {
            apiPayload['payment_status'] = paymentStatus;
        }
        if (typeof fulfillmentStatus !== 'undefined') {
            apiPayload['fulfillment_status'] = fulfillmentStatus;
        }
        if (typeof onHold !== 'undefined') {
            apiPayload['on_hold'] = onHold;
        }
        if (typeof holdReason !== 'undefined') {
            apiPayload['hold_reason'] = holdReason;
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
        if (typeof shippingTaxRate !== 'undefined') {
            apiPayload['shipping_tax_rate'] = shippingTaxRate;
        }
        if (typeof shippingTaxAmount !== 'undefined') {
            apiPayload['shipping_tax_amount'] = shippingTaxAmount;
        }
        if (typeof paymentFeeAmount !== 'undefined') {
            apiPayload['payment_fee_amount'] = paymentFeeAmount;
        }
        if (typeof paymentFeeTaxRate !== 'undefined') {
            apiPayload['payment_fee_tax_rate'] = paymentFeeTaxRate;
        }
        if (typeof paymentFeeTaxAmount !== 'undefined') {
            apiPayload['payment_fee_tax_amount'] = paymentFeeTaxAmount;
        }
        if (typeof taxTotal !== 'undefined') {
            apiPayload['tax_total'] = taxTotal;
        }
        if (typeof grandTotal !== 'undefined') {
            apiPayload['grand_total'] = grandTotal;
        }
        if (typeof placedAt !== 'undefined') {
            apiPayload['placed_at'] = placedAt;
        }
        if (typeof completedAt !== 'undefined') {
            apiPayload['completed_at'] = completedAt;
        }
        if (typeof cancelledAt !== 'undefined') {
            apiPayload['cancelled_at'] = cancelledAt;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof requestedDeliveryDate !== 'undefined') {
            apiPayload['requested_delivery_date'] = requestedDeliveryDate;
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
     * A one-off per tenant, and a MIGRATION rather than a feature: the day a buyer asked to be delivered on was collected long before it had a field of its own, in `user_data.requested_date` — a free-form blob, so the date was present and neither filterable, sortable nor visible to any ERP mapping. This copies what is already there into `requested_delivery_date` on every order that carries no date yet, and it is safe to run again: a second call finds nothing to fill and says so. It reads only the orders with no date, so it is cheap; `filled` is what it changed and `scanned` what it had to look at, and `scanned` never falls to zero, because an order that genuinely asked for no day is read by every later run. THE JSONB KEY IS LEFT WHERE IT IS: `user_data` belongs to the caller and is handed back untouched, so the key stays as a deprecated echo of the column — the column is what is compared, sorted and mapped from here on. `updated_at` is not touched either: it says when the row last changed for the merchant, and stamping the whole table with today would destroy that reading for every reader of it, a delta run included. A value in the key that is not a calendar day is counted under `skipped` and left alone rather than refusing the run. The scan stops itself before the gateway's timeout and hands back a `cursor`; send it back unchanged until `done` is true.
     *
     * @param {string} params.cursor - Continue an unfinished run: the exact value the previous call returned, which is the id of the last order it read. Do not construct one — it is a resume point, not an offset. Omit it on the first call.
     * @param {number} params.limit - Orders read per page of the scan (default 500, clamped to 1000). It is the page size, not a cap on the run: the scan keeps paging until it finishes or runs out of time.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderRequestedDeliveryDateMigration>}
     */
    ordersMigrationsRequestedDeliveryDate(params?: { cursor?: string, limit?: number }): Promise<Models.OrderRequestedDeliveryDateMigration>;
    /**
     * A one-off per tenant, and a MIGRATION rather than a feature: the day a buyer asked to be delivered on was collected long before it had a field of its own, in `user_data.requested_date` — a free-form blob, so the date was present and neither filterable, sortable nor visible to any ERP mapping. This copies what is already there into `requested_delivery_date` on every order that carries no date yet, and it is safe to run again: a second call finds nothing to fill and says so. It reads only the orders with no date, so it is cheap; `filled` is what it changed and `scanned` what it had to look at, and `scanned` never falls to zero, because an order that genuinely asked for no day is read by every later run. THE JSONB KEY IS LEFT WHERE IT IS: `user_data` belongs to the caller and is handed back untouched, so the key stays as a deprecated echo of the column — the column is what is compared, sorted and mapped from here on. `updated_at` is not touched either: it says when the row last changed for the merchant, and stamping the whole table with today would destroy that reading for every reader of it, a delta run included. A value in the key that is not a calendar day is counted under `skipped` and left alone rather than refusing the run. The scan stops itself before the gateway's timeout and hands back a `cursor`; send it back unchanged until `done` is true.
     *
     * @param {string} cursor - Continue an unfinished run: the exact value the previous call returned, which is the id of the last order it read. Do not construct one — it is a resume point, not an offset. Omit it on the first call.
     * @param {number} limit - Orders read per page of the scan (default 500, clamped to 1000). It is the page size, not a cap on the run: the scan keeps paging until it finishes or runs out of time.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderRequestedDeliveryDateMigration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersMigrationsRequestedDeliveryDate(cursor?: string, limit?: number): Promise<Models.OrderRequestedDeliveryDateMigration>;
    ordersMigrationsRequestedDeliveryDate(
        paramsOrFirst?: { cursor?: string, limit?: number } | string,
        ...rest: [(number)?]    
    ): Promise<Models.OrderRequestedDeliveryDateMigration> {
        let params: { cursor?: string, limit?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cursor?: string, limit?: number };
        } else {
            params = {
                cursor: paramsOrFirst as string,
                limit: rest[0] as number            
            };
        }
        
        const cursor = params.cursor;
        const limit = params.limit;


        const apiPath = '/v1/orders/migrations/requested-delivery-date';
        const apiPayload: Payload = {};
        if (typeof cursor !== 'undefined') {
            apiPayload['cursor'] = cursor;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
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
     * The counters this tenant numbers its orders, delivery notes and returns from — what an operator sees on the Number ranges settings page, and what a migration reads to check the prefixes and the padding before it imports anything. Every parameter below is an exact-match filter on the column it names (?code=order finds the order counter). Two things are not: a key that names NO column is not a filter — the SDK release after app-sdks#30 answers it 400 unknown_filter, and until then it is dropped and absent from the 'filter' echo, so compare that echo against what you sent — and the jsonb column 'metadata' is honoured by the router but refused by the database (400 invalid_value) unless the value is a whole JSON document, which is why it is not offered here. It does not draw a number: `counter` is the last number DRAWN, and only placing an order, a shipment or a return moves it.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the number range.
     * @param {string} params.code - Look a range up by its code — 'order', 'delivery', 'return', or whatever a settings key points at. Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
     * @param {string} params.prefix - Filter to rows whose `prefix` is exactly this value. Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default.
     * @param {string} params.suffix - Filter to rows whose `suffix` is exactly this value. Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use.
     * @param {number} params.padding - Filter to rows whose `padding` is exactly this value. How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn.
     * @param {number} params.counter - Filter to rows whose `counter` is exactly this value. The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409).
     * @param {number} params.step - Filter to rows whose `step` is exactly this value. How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice.
     * @param {number} params.positionStep - Filter to rows whose `position_step` is exactly this value. The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only.
     * @param {string} params.channelId - Filter to rows whose `channel_id` is exactly this value. The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the range was created.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the range last changed — which includes every single number draw, because a draw writes the counter.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersNumberRangesList(params?: { id?: string, code?: string, prefix?: string, suffix?: string, padding?: number, counter?: number, step?: number, positionStep?: number, channelId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * The counters this tenant numbers its orders, delivery notes and returns from — what an operator sees on the Number ranges settings page, and what a migration reads to check the prefixes and the padding before it imports anything. Every parameter below is an exact-match filter on the column it names (?code=order finds the order counter). Two things are not: a key that names NO column is not a filter — the SDK release after app-sdks#30 answers it 400 unknown_filter, and until then it is dropped and absent from the 'filter' echo, so compare that echo against what you sent — and the jsonb column 'metadata' is honoured by the router but refused by the database (400 invalid_value) unless the value is a whole JSON document, which is why it is not offered here. It does not draw a number: `counter` is the last number DRAWN, and only placing an order, a shipment or a return moves it.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the number range.
     * @param {string} code - Look a range up by its code — 'order', 'delivery', 'return', or whatever a settings key points at. Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
     * @param {string} prefix - Filter to rows whose `prefix` is exactly this value. Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default.
     * @param {string} suffix - Filter to rows whose `suffix` is exactly this value. Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use.
     * @param {number} padding - Filter to rows whose `padding` is exactly this value. How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn.
     * @param {number} counter - Filter to rows whose `counter` is exactly this value. The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409).
     * @param {number} step - Filter to rows whose `step` is exactly this value. How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice.
     * @param {number} positionStep - Filter to rows whose `position_step` is exactly this value. The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only.
     * @param {string} channelId - Filter to rows whose `channel_id` is exactly this value. The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the range was created.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the range last changed — which includes every single number draw, because a draw writes the counter.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesList(id?: string, code?: string, prefix?: string, suffix?: string, padding?: number, counter?: number, step?: number, positionStep?: number, channelId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    ordersNumberRangesList(
        paramsOrFirst?: { id?: string, code?: string, prefix?: string, suffix?: string, padding?: number, counter?: number, step?: number, positionStep?: number, channelId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (number)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, code?: string, prefix?: string, suffix?: string, padding?: number, counter?: number, step?: number, positionStep?: number, channelId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, prefix?: string, suffix?: string, padding?: number, counter?: number, step?: number, positionStep?: number, channelId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                prefix: rest[1] as string,
                suffix: rest[2] as string,
                padding: rest[3] as number,
                counter: rest[4] as number,
                step: rest[5] as number,
                positionStep: rest[6] as number,
                channelId: rest[7] as string,
                createdAt: rest[8] as string,
                updatedAt: rest[9] as string,
                limit: rest[10] as number,
                offset: rest[11] as number,
                order: rest[12] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const prefix = params.prefix;
        const suffix = params.suffix;
        const padding = params.padding;
        const counter = params.counter;
        const step = params.step;
        const positionStep = params.positionStep;
        const channelId = params.channelId;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/orders/number-ranges';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
        }
        if (typeof suffix !== 'undefined') {
            apiPayload['suffix'] = suffix;
        }
        if (typeof padding !== 'undefined') {
            apiPayload['padding'] = padding;
        }
        if (typeof counter !== 'undefined') {
            apiPayload['counter'] = counter;
        }
        if (typeof step !== 'undefined') {
            apiPayload['step'] = step;
        }
        if (typeof positionStep !== 'undefined') {
            apiPayload['position_step'] = positionStep;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
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
     * Add a counter beyond the three a tenant is seeded with, and give it the shape a merchant's numbers actually have: {prefix}{counter padded to `padding`}{suffix}, moving by `step` per draw. A new range is what the order_number_range_code / delivery_number_range_code / return_number_range_code settings can then be pointed at — the code is the name those settings use, and a setting naming a code no range carries makes placing an order answer 422. `code` is unique per tenant, so this is a 409 for one that is taken rather than a second counter under the same name. It does not renumber anything that already exists, and setting `counter` to a value already issued re-issues those numbers, which the unique index on the order number then refuses. created_at and updated_at are the server's: a body carrying either is 400 server_owned_field.
     *
     * @param {string} params.code - Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
     * @param {string} params.channelId - The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
     * @param {number} params.counter - The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409). Defaults to 0, so the first number drawn is step.
     * @param {object} params.metadata - Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
     * @param {number} params.padding - How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn. Defaults to 6.
     * @param {number} params.positionStep - The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only. Defaults to 10.
     * @param {string} params.prefix - Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default. Defaults to ''.
     * @param {number} params.step - How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice. Defaults to 1.
     * @param {string} params.suffix - Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use. Defaults to ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     */
    ordersNumberRangesCreate(params: { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string }): Promise<Models.NumberRange>;
    /**
     * Add a counter beyond the three a tenant is seeded with, and give it the shape a merchant's numbers actually have: {prefix}{counter padded to `padding`}{suffix}, moving by `step` per draw. A new range is what the order_number_range_code / delivery_number_range_code / return_number_range_code settings can then be pointed at — the code is the name those settings use, and a setting naming a code no range carries makes placing an order answer 422. `code` is unique per tenant, so this is a 409 for one that is taken rather than a second counter under the same name. It does not renumber anything that already exists, and setting `counter` to a value already issued re-issues those numbers, which the unique index on the order number then refuses. created_at and updated_at are the server's: a body carrying either is 400 server_owned_field.
     *
     * @param {string} code - Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
     * @param {string} channelId - The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
     * @param {number} counter - The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409). Defaults to 0, so the first number drawn is step.
     * @param {object} metadata - Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
     * @param {number} padding - How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn. Defaults to 6.
     * @param {number} positionStep - The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only. Defaults to 10.
     * @param {string} prefix - Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default. Defaults to ''.
     * @param {number} step - How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice. Defaults to 1.
     * @param {string} suffix - Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use. Defaults to ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesCreate(code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string): Promise<Models.NumberRange>;
    ordersNumberRangesCreate(
        paramsOrFirst: { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string } | string,
        ...rest: [(string)?, (number)?, (object)?, (number)?, (number)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.NumberRange> {
        let params: { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                channelId: rest[0] as string,
                counter: rest[1] as number,
                metadata: rest[2] as object,
                padding: rest[3] as number,
                positionStep: rest[4] as number,
                prefix: rest[5] as string,
                step: rest[6] as number,
                suffix: rest[7] as string            
            };
        }
        
        const code = params.code;
        const channelId = params.channelId;
        const counter = params.counter;
        const metadata = params.metadata;
        const padding = params.padding;
        const positionStep = params.positionStep;
        const prefix = params.prefix;
        const step = params.step;
        const suffix = params.suffix;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/orders/number-ranges';
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof counter !== 'undefined') {
            apiPayload['counter'] = counter;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof padding !== 'undefined') {
            apiPayload['padding'] = padding;
        }
        if (typeof positionStep !== 'undefined') {
            apiPayload['position_step'] = positionStep;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
        }
        if (typeof step !== 'undefined') {
            apiPayload['step'] = step;
        }
        if (typeof suffix !== 'undefined') {
            apiPayload['suffix'] = suffix;
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
     * Make sure the three codes this app draws from exist: 'order' (ORD-), 'delivery' (DEL-) and 'return' (RET-), each padded to six digits and stepping by one. The app runs it for you on install, so a fresh tenant needs nothing; call it by hand after a range was deleted, or to check what a tenant has. Idempotent: a code that already exists comes back under 'existing' and is left EXACTLY as it is, counter included, so a merchant who changed the prefix keeps their change. Answers 200, never 201 — it is a reconcile, not a create — and it never repairs or renames a range that is already there.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderNumberRangesSeeded>}
     */
    ordersNumberRangesDefaults(): Promise<Models.OrderNumberRangesSeeded> {

        const apiPath = '/v1/orders/number-ranges/defaults';
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
     * Remove a counter a tenant no longer numbers anything from. It touches nothing that was numbered out of it: existing orders, delivery notes and returns keep the numbers they were given, because a number is copied onto the row at place-time and is not a reference to this table. Only a range that has never drawn a number can be removed: one whose counter is above 0 answers 409 range_in_use, because a standard code would come back at 0 on the next draw and hand out numbers that already exist.
     *
     * @param {string} params.id - The number range id (uuid).
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDeleted>}
     */
    ordersNumberRangesDelete(params: { id: string }): Promise<Models.OrderDeleted>;
    /**
     * Remove a counter a tenant no longer numbers anything from. It touches nothing that was numbered out of it: existing orders, delivery notes and returns keep the numbers they were given, because a number is copied onto the row at place-time and is not a reference to this table. Only a range that has never drawn a number can be removed: one whose counter is above 0 answers 409 range_in_use, because a standard code would come back at 0 on the next draw and hand out numbers that already exist.
     *
     * @param {string} id - The number range id (uuid).
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDeleted>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesDelete(id: string): Promise<Models.OrderDeleted>;
    ordersNumberRangesDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrderDeleted> {
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

        const apiPath = '/v1/orders/number-ranges/{id}'.replace('{id}', id);
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
     * One counter with its whole configuration: the prefix and suffix around the number, how wide it is padded, how far each draw moves it, where it currently stands, and the position_step new order lines are numbered in. Reach for it when you hold the id — from the list, or from what a create answered — and want the row as it stands now. Reading does not draw a number and does not move `counter`; the id is the range's uuid, not its `code`, and a code is turned into a range through GET /orders/number-ranges?code=order.
     *
     * @param {string} params.id - The number range id (uuid).
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     */
    ordersNumberRangesGet(params: { id: string }): Promise<Models.NumberRange>;
    /**
     * One counter with its whole configuration: the prefix and suffix around the number, how wide it is padded, how far each draw moves it, where it currently stands, and the position_step new order lines are numbered in. Reach for it when you hold the id — from the list, or from what a create answered — and want the row as it stands now. Reading does not draw a number and does not move `counter`; the id is the range's uuid, not its `code`, and a code is turned into a range through GET /orders/number-ranges?code=order.
     *
     * @param {string} id - The number range id (uuid).
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesGet(id: string): Promise<Models.NumberRange>;
    ordersNumberRangesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.NumberRange> {
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

        const apiPath = '/v1/orders/number-ranges/{id}'.replace('{id}', id);
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
     * Change the format or the state of an existing counter: a new prefix or suffix, a wider padding, a different step, a different position_step for new order lines — or `counter` itself, which is state rather than configuration. Everything takes effect on the NEXT draw only: nothing that was already numbered is renumbered, so widening the padding leaves ORD-000123 and starts writing ORD-0000124. Moving `counter` forward skips numbers; moving it BACK is refused (422 counter_rewind), because it would hand out numbers orders already carry — resending the counter the range already has is fine, only a change is checked. Renaming `code` to one another range of this tenant already holds is a 409. updated_at is stamped by the server; a body carrying created_at or updated_at is 400 server_owned_field.
     *
     * @param {string} params.id - The number range id (uuid).
     * @param {string} params.channelId - The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
     * @param {string} params.code - Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
     * @param {number} params.counter - The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409). Defaults to 0, so the first number drawn is step.
     * @param {object} params.metadata - Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
     * @param {number} params.padding - How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn. Defaults to 6.
     * @param {number} params.positionStep - The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only. Defaults to 10.
     * @param {string} params.prefix - Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default. Defaults to ''.
     * @param {number} params.step - How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice. Defaults to 1.
     * @param {string} params.suffix - Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use. Defaults to ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     */
    ordersNumberRangesUpdate(params: { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string }): Promise<Models.NumberRange>;
    /**
     * Change the format or the state of an existing counter: a new prefix or suffix, a wider padding, a different step, a different position_step for new order lines — or `counter` itself, which is state rather than configuration. Everything takes effect on the NEXT draw only: nothing that was already numbered is renumbered, so widening the padding leaves ORD-000123 and starts writing ORD-0000124. Moving `counter` forward skips numbers; moving it BACK is refused (422 counter_rewind), because it would hand out numbers orders already carry — resending the counter the range already has is fine, only a change is checked. Renaming `code` to one another range of this tenant already holds is a 409. updated_at is stamped by the server; a body carrying created_at or updated_at is 400 server_owned_field.
     *
     * @param {string} id - The number range id (uuid).
     * @param {string} channelId - The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
     * @param {string} code - Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
     * @param {number} counter - The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409). Defaults to 0, so the first number drawn is step.
     * @param {object} metadata - Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
     * @param {number} padding - How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn. Defaults to 6.
     * @param {number} positionStep - The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only. Defaults to 10.
     * @param {string} prefix - Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default. Defaults to ''.
     * @param {number} step - How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice. Defaults to 1.
     * @param {string} suffix - Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use. Defaults to ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesUpdate(id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string): Promise<Models.NumberRange>;
    ordersNumberRangesUpdate(
        paramsOrFirst: { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string } | string,
        ...rest: [(string)?, (string)?, (number)?, (object)?, (number)?, (number)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.NumberRange> {
        let params: { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channelId: rest[0] as string,
                code: rest[1] as string,
                counter: rest[2] as number,
                metadata: rest[3] as object,
                padding: rest[4] as number,
                positionStep: rest[5] as number,
                prefix: rest[6] as string,
                step: rest[7] as number,
                suffix: rest[8] as string            
            };
        }
        
        const id = params.id;
        const channelId = params.channelId;
        const code = params.code;
        const counter = params.counter;
        const metadata = params.metadata;
        const padding = params.padding;
        const positionStep = params.positionStep;
        const prefix = params.prefix;
        const step = params.step;
        const suffix = params.suffix;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/number-ranges/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof counter !== 'undefined') {
            apiPayload['counter'] = counter;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof padding !== 'undefined') {
            apiPayload['padding'] = padding;
        }
        if (typeof positionStep !== 'undefined') {
            apiPayload['position_step'] = positionStep;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
        }
        if (typeof step !== 'undefined') {
            apiPayload['step'] = step;
        }
        if (typeof suffix !== 'undefined') {
            apiPayload['suffix'] = suffix;
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
     * The way an order comes into existence — the call a checkout, a punch-out or an ERP import makes once the basket is final. The body is a SNAPSHOT: items with their product copies, plus the buyer, the addresses and the payment and shipping choices frozen as they were at this moment, so the order stays readable when the catalogue or the customer changes underneath it. The app draws the order number from the tenant's order range, numbers the positions, computes subtotal, tax and grand_total from the lines, and writes the order.placed event that carries the order onto the bus. It does not reserve stock, take payment or talk to an ERP: those are separate capabilities, and this route's job ends when the event is on the bus. Two things can turn a placement into a REQUEST awaiting approval, and both still answer 201 — with status='pending' and no placed_at: a principal holding only orders.request, and an order worth more than the tenant's require_approval_above_value (a principal holding orders.approve is exempt from the threshold). The order.requested event says which, in 'approval_reason'. The currency defaults to the market's default_currency setting and the position cap is the tenant's max_items_per_order. PRICES ARE THE CALLER'S: this app reads no price list, so the unit price, the tax rate, the shipping charge and the promotions a caller evaluated are taken as sent — refused only when they cannot be money (a negative price or shipping charge, a tax rate outside 0–100). Totals, tax amounts and the discount split are computed here.
     *
     * @param {Models.OrderItemCreateRequest[]} params.items - The order positions — at least one, and at most the tenant's max_items_per_order (500 out of the box; a longer list is a 400 naming the limit).
     * @param {object} params.billingAddress - The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to.
     * @param {object} params.buyer - The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it.
     * @param {string} params.cartId - The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created. The carts.order hand-over sets it.
     * @param {string} params.channelId - The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
     * @param {string} params.contactId - The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout. Ignored when the caller carries a principal — the RESOLVED contact wins, and a body value that disagrees is a 400 rather than a silent override.
     * @param {string} params.currency - ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting. Defaults to the market's default_currency setting.
     * @param {string} params.customerOrderNumber - The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
     * @param {string} params.externalId - The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns. Sending it a second time is a 409, not a second order: the key is unique per tenant, which is what makes a retried import safe to run. Recover by reading the order back with GET /orders?external_id=… and correcting that one.
     * @param {object} params.externalRefs - Every OTHER system that knows this order, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer.
     * @param {number} params.grandTotal - Optional, and CHECKED rather than used: the order always computes its own total from the positions, the shipping cost and the tax. Send it as a checksum on that arithmetic — if it agrees the order is placed, and if it disagrees the call is refused with 400 naming both numbers, yours and the computed one. The comparison is at 2 decimal places (this app stores 4, ERPs work to 2, so a difference below a cent is agreement). It is never taken as the order value: the approval threshold and the revenue rollup read the computed number, which is why a total that disagrees is an error rather than an override.
     * @param {object} params.metadata - Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it.
     * @param {string} params.organizationId - The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it. A principal's own organization wins over this when it has one.
     * @param {object} params.payment - The payment arrangement as it was chosen, FROZEN. This app reads exactly two keys and stores the rest untouched: 'status' seeds payment_status at place-time when it names one of the permitted values (anything else is ignored and the order starts 'open'; a buyer's own call may only send 'open'), and 'payment_id' is merged in by POST /orders/{id}/payment-status. The method itself, its provider fields and any redirect state belong to the payments app.
     * @param {string} params.requestedDeliveryDate - The calendar day the BUYER asked to be delivered on, as a date and not a moment — a buyer asks for Tuesday, not for Tuesday at 14:03 in a timezone nobody named. It is a wish and nothing here judges it: a date in the past, a weekend or a day inside the lead time is stored as sent, because what is deliverable is the merchant's answer and this app reads neither stock nor carrier calendar. The positions carry their own, and A POSITION'S DATE WINS over this one — this is the proposal for every position that names none. Null on an order that asked for nothing, which is the ordinary case. It was collected in `user_data.requested_date` before this column existed and is still echoed there by callers that have not moved over; the column is what is compared, sorted and mapped. 'YYYY-MM-DD'. A value that is not a day that exists is a 400. Omit it and `user_data.requested_date` is taken instead, which is where a caller written before this field existed puts it — send the field and that copy is ignored.
     * @param {object} params.shipping - The shipping arrangement as it was chosen, FROZEN. Two keys are READ at place-time and feed the totals: 'price' becomes shipping_total (the shipping_total field is only the fallback when this is absent) and 'tax_rate' is what shipping is taxed at, because shipping is a Nebenleistung and is taxed too. Everything else — the carrier product, the delivery window, the pickup point — is stored untouched and belongs to the shipping app.
     * @param {object} params.shippingAddress - The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection).
     * @param {number} params.shippingTotal - NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`. This is the price BEFORE any promotion reduced it; the reduction is a row in the discount components. Only read when the shipping snapshot carries no 'price'. Below zero is a 400, and so is a 'shipping.price' below zero or a 'shipping.tax_rate' outside 0–100.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it.
     * @param {string} params.sourceSyncedAt - When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns.
     * @param {object} params.userData - Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change. One key of it is read: `requested_date`, which is where the wanted delivery date was collected before it had a column, and which is taken as the date only when `requested_delivery_date` names none. The blob itself is never rewritten by that reading.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderPlaced>}
     */
    ordersPlace(params: { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalId?: string, externalRefs?: object, grandTotal?: number, metadata?: object, organizationId?: string, payment?: object, requestedDeliveryDate?: string, shipping?: object, shippingAddress?: object, shippingTotal?: number, sourceData?: object, sourceSyncedAt?: string, userData?: object }): Promise<Models.OrderPlaced>;
    /**
     * The way an order comes into existence — the call a checkout, a punch-out or an ERP import makes once the basket is final. The body is a SNAPSHOT: items with their product copies, plus the buyer, the addresses and the payment and shipping choices frozen as they were at this moment, so the order stays readable when the catalogue or the customer changes underneath it. The app draws the order number from the tenant's order range, numbers the positions, computes subtotal, tax and grand_total from the lines, and writes the order.placed event that carries the order onto the bus. It does not reserve stock, take payment or talk to an ERP: those are separate capabilities, and this route's job ends when the event is on the bus. Two things can turn a placement into a REQUEST awaiting approval, and both still answer 201 — with status='pending' and no placed_at: a principal holding only orders.request, and an order worth more than the tenant's require_approval_above_value (a principal holding orders.approve is exempt from the threshold). The order.requested event says which, in 'approval_reason'. The currency defaults to the market's default_currency setting and the position cap is the tenant's max_items_per_order. PRICES ARE THE CALLER'S: this app reads no price list, so the unit price, the tax rate, the shipping charge and the promotions a caller evaluated are taken as sent — refused only when they cannot be money (a negative price or shipping charge, a tax rate outside 0–100). Totals, tax amounts and the discount split are computed here.
     *
     * @param {Models.OrderItemCreateRequest[]} items - The order positions — at least one, and at most the tenant's max_items_per_order (500 out of the box; a longer list is a 400 naming the limit).
     * @param {object} billingAddress - The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to.
     * @param {object} buyer - The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it.
     * @param {string} cartId - The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created. The carts.order hand-over sets it.
     * @param {string} channelId - The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
     * @param {string} contactId - The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout. Ignored when the caller carries a principal — the RESOLVED contact wins, and a body value that disagrees is a 400 rather than a silent override.
     * @param {string} currency - ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting. Defaults to the market's default_currency setting.
     * @param {string} customerOrderNumber - The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
     * @param {string} externalId - The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns. Sending it a second time is a 409, not a second order: the key is unique per tenant, which is what makes a retried import safe to run. Recover by reading the order back with GET /orders?external_id=… and correcting that one.
     * @param {object} externalRefs - Every OTHER system that knows this order, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer.
     * @param {number} grandTotal - Optional, and CHECKED rather than used: the order always computes its own total from the positions, the shipping cost and the tax. Send it as a checksum on that arithmetic — if it agrees the order is placed, and if it disagrees the call is refused with 400 naming both numbers, yours and the computed one. The comparison is at 2 decimal places (this app stores 4, ERPs work to 2, so a difference below a cent is agreement). It is never taken as the order value: the approval threshold and the revenue rollup read the computed number, which is why a total that disagrees is an error rather than an override.
     * @param {object} metadata - Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it.
     * @param {string} organizationId - The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it. A principal's own organization wins over this when it has one.
     * @param {object} payment - The payment arrangement as it was chosen, FROZEN. This app reads exactly two keys and stores the rest untouched: 'status' seeds payment_status at place-time when it names one of the permitted values (anything else is ignored and the order starts 'open'; a buyer's own call may only send 'open'), and 'payment_id' is merged in by POST /orders/{id}/payment-status. The method itself, its provider fields and any redirect state belong to the payments app.
     * @param {string} requestedDeliveryDate - The calendar day the BUYER asked to be delivered on, as a date and not a moment — a buyer asks for Tuesday, not for Tuesday at 14:03 in a timezone nobody named. It is a wish and nothing here judges it: a date in the past, a weekend or a day inside the lead time is stored as sent, because what is deliverable is the merchant's answer and this app reads neither stock nor carrier calendar. The positions carry their own, and A POSITION'S DATE WINS over this one — this is the proposal for every position that names none. Null on an order that asked for nothing, which is the ordinary case. It was collected in `user_data.requested_date` before this column existed and is still echoed there by callers that have not moved over; the column is what is compared, sorted and mapped. 'YYYY-MM-DD'. A value that is not a day that exists is a 400. Omit it and `user_data.requested_date` is taken instead, which is where a caller written before this field existed puts it — send the field and that copy is ignored.
     * @param {object} shipping - The shipping arrangement as it was chosen, FROZEN. Two keys are READ at place-time and feed the totals: 'price' becomes shipping_total (the shipping_total field is only the fallback when this is absent) and 'tax_rate' is what shipping is taxed at, because shipping is a Nebenleistung and is taxed too. Everything else — the carrier product, the delivery window, the pickup point — is stored untouched and belongs to the shipping app.
     * @param {object} shippingAddress - The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection).
     * @param {number} shippingTotal - NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`. This is the price BEFORE any promotion reduced it; the reduction is a row in the discount components. Only read when the shipping snapshot carries no 'price'. Below zero is a 400, and so is a 'shipping.price' below zero or a 'shipping.tax_rate' outside 0–100.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it.
     * @param {string} sourceSyncedAt - When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns.
     * @param {object} userData - Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change. One key of it is read: `requested_date`, which is where the wanted delivery date was collected before it had a column, and which is taken as the date only when `requested_delivery_date` names none. The blob itself is never rewritten by that reading.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderPlaced>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersPlace(items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalId?: string, externalRefs?: object, grandTotal?: number, metadata?: object, organizationId?: string, payment?: object, requestedDeliveryDate?: string, shipping?: object, shippingAddress?: object, shippingTotal?: number, sourceData?: object, sourceSyncedAt?: string, userData?: object): Promise<Models.OrderPlaced>;
    ordersPlace(
        paramsOrFirst: { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalId?: string, externalRefs?: object, grandTotal?: number, metadata?: object, organizationId?: string, payment?: object, requestedDeliveryDate?: string, shipping?: object, shippingAddress?: object, shippingTotal?: number, sourceData?: object, sourceSyncedAt?: string, userData?: object } | Models.OrderItemCreateRequest[],
        ...rest: [(object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (number)?, (object)?, (string)?, (object)?, (string)?, (object)?, (object)?, (number)?, (object)?, (string)?, (object)?]    
    ): Promise<Models.OrderPlaced> {
        let params: { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalId?: string, externalRefs?: object, grandTotal?: number, metadata?: object, organizationId?: string, payment?: object, requestedDeliveryDate?: string, shipping?: object, shippingAddress?: object, shippingTotal?: number, sourceData?: object, sourceSyncedAt?: string, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'billingAddress' in paramsOrFirst || 'buyer' in paramsOrFirst || 'cartId' in paramsOrFirst || 'channelId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'customerOrderNumber' in paramsOrFirst || 'externalId' in paramsOrFirst || 'externalRefs' in paramsOrFirst || 'grandTotal' in paramsOrFirst || 'metadata' in paramsOrFirst || 'organizationId' in paramsOrFirst || 'payment' in paramsOrFirst || 'requestedDeliveryDate' in paramsOrFirst || 'shipping' in paramsOrFirst || 'shippingAddress' in paramsOrFirst || 'shippingTotal' in paramsOrFirst || 'sourceData' in paramsOrFirst || 'sourceSyncedAt' in paramsOrFirst || 'userData' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalId?: string, externalRefs?: object, grandTotal?: number, metadata?: object, organizationId?: string, payment?: object, requestedDeliveryDate?: string, shipping?: object, shippingAddress?: object, shippingTotal?: number, sourceData?: object, sourceSyncedAt?: string, userData?: object };
        } else {
            params = {
                items: paramsOrFirst as Models.OrderItemCreateRequest[],
                billingAddress: rest[0] as object,
                buyer: rest[1] as object,
                cartId: rest[2] as string,
                channelId: rest[3] as string,
                contactId: rest[4] as string,
                currency: rest[5] as string,
                customerOrderNumber: rest[6] as string,
                externalId: rest[7] as string,
                externalRefs: rest[8] as object,
                grandTotal: rest[9] as number,
                metadata: rest[10] as object,
                organizationId: rest[11] as string,
                payment: rest[12] as object,
                requestedDeliveryDate: rest[13] as string,
                shipping: rest[14] as object,
                shippingAddress: rest[15] as object,
                shippingTotal: rest[16] as number,
                sourceData: rest[17] as object,
                sourceSyncedAt: rest[18] as string,
                userData: rest[19] as object            
            };
        }
        
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const cartId = params.cartId;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const customerOrderNumber = params.customerOrderNumber;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const grandTotal = params.grandTotal;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const payment = params.payment;
        const requestedDeliveryDate = params.requestedDeliveryDate;
        const shipping = params.shipping;
        const shippingAddress = params.shippingAddress;
        const shippingTotal = params.shippingTotal;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const userData = params.userData;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/orders/place';
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = Client.toWireKeys(buyer, {"contactId":{"wire":"contact_id","children":null},"customerNumber":{"wire":"customer_number","children":null},"organizationId":{"wire":"organization_id","children":null}});
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
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
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof grandTotal !== 'undefined') {
            apiPayload['grand_total'] = grandTotal;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"costCenter":{"wire":"cost_center","children":null},"externalId":{"wire":"external_id","children":null},"externalRefs":{"wire":"external_refs","children":null},"positionText":{"wire":"position_text","children":null},"productId":{"wire":"product_id","children":null},"requestedDeliveryDate":{"wire":"requested_delivery_date","children":null},"sourceData":{"wire":"source_data","children":null},"sourceSyncedAt":{"wire":"source_synced_at","children":null},"taxAmount":{"wire":"tax_amount","children":null},"taxRate":{"wire":"tax_rate","children":null},"unitPrice":{"wire":"unit_price","children":null},"userData":{"wire":"user_data","children":null}});
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof payment !== 'undefined') {
            apiPayload['payment'] = Client.toWireKeys(payment, {"paymentId":{"wire":"payment_id","children":null}});
        }
        if (typeof requestedDeliveryDate !== 'undefined') {
            apiPayload['requested_delivery_date'] = requestedDeliveryDate;
        }
        if (typeof shipping !== 'undefined') {
            apiPayload['shipping'] = Client.toWireKeys(shipping, {"taxRate":{"wire":"tax_rate","children":null}});
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof shippingTotal !== 'undefined') {
            apiPayload['shipping_total'] = shippingTotal;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * What each company has bought, as numbers another app can keep: order count, lifetime revenue, first and last order date, and the same count and revenue over the last 30, 90 and 365 days. This is what a customer segment like "bought for more than 100k last year" is built on, and the customers app materialises it into a local projection its segment rules query. It answers about ORGANIZATIONS only — a private or guest order carries none and is counted in orders_without_organization rather than attributed to anybody — and it converts nothing, so an organization that ordered in two currencies gets both listed and one summed number to read with care. Revenue lives in orders, customer segments live in the customers app, and the two may not join (ADR-0055: no cross-app FK, grant or view). This capability is the hand-over. Every number is additive (count/sum/min/max) so partial answers merge; the average order value is deliberately not returned — it is revenue_total / order_count over the merged parts. Windows are anchored at as_of, which is echoed back so a loop measures one consistent picture.
     *
     * @param {string} params.asOf - Anchor for the rolling windows (default now). Pin it and send it back on every call of a loop, otherwise the windows drift by the duration of the loop.
     * @param {string} params.cursor - Continue an unfinished scan: the exact value the previous call returned, which is the id of the last order it read. Do not construct one — it is a resume point, not an offset. Omit it on the first call. It is honoured in BOTH call shapes, organization_ids included: send the whole batch again alongside it whenever `done` came back false, or the part of the batch after the cursor is simply never read.
     * @param {string[]} params.organizationIds - Roll up exactly these organizations and no others — at most 200, because the ids travel to the data plane as one in.() filter. Naming them does NOT make the answer complete by itself: the scan is the same paged, time-budgeted loop either way, so a batch with more orders than one page can still stop early with `done: false` and a cursor. Small batches finish in one call, which is the normal case, but check `done` rather than assume it. Omitted = scan every order and answer for every organization that appears on one.
     * @param {OrderStatus[]} params.statuses - Which lifecycle statuses count as revenue. Defaults to placed, in_fulfillment and completed: a pending order was never placed, and a cancelled one is not revenue. Widening this is how a merchant who books on approval gets their own definition of the same numbers.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderCustomerRollupResponse>}
     */
    ordersReportsCustomerRollup(params?: { asOf?: string, cursor?: string, organizationIds?: string[], statuses?: OrderStatus[] }): Promise<Models.OrderCustomerRollupResponse>;
    /**
     * What each company has bought, as numbers another app can keep: order count, lifetime revenue, first and last order date, and the same count and revenue over the last 30, 90 and 365 days. This is what a customer segment like "bought for more than 100k last year" is built on, and the customers app materialises it into a local projection its segment rules query. It answers about ORGANIZATIONS only — a private or guest order carries none and is counted in orders_without_organization rather than attributed to anybody — and it converts nothing, so an organization that ordered in two currencies gets both listed and one summed number to read with care. Revenue lives in orders, customer segments live in the customers app, and the two may not join (ADR-0055: no cross-app FK, grant or view). This capability is the hand-over. Every number is additive (count/sum/min/max) so partial answers merge; the average order value is deliberately not returned — it is revenue_total / order_count over the merged parts. Windows are anchored at as_of, which is echoed back so a loop measures one consistent picture.
     *
     * @param {string} asOf - Anchor for the rolling windows (default now). Pin it and send it back on every call of a loop, otherwise the windows drift by the duration of the loop.
     * @param {string} cursor - Continue an unfinished scan: the exact value the previous call returned, which is the id of the last order it read. Do not construct one — it is a resume point, not an offset. Omit it on the first call. It is honoured in BOTH call shapes, organization_ids included: send the whole batch again alongside it whenever `done` came back false, or the part of the batch after the cursor is simply never read.
     * @param {string[]} organizationIds - Roll up exactly these organizations and no others — at most 200, because the ids travel to the data plane as one in.() filter. Naming them does NOT make the answer complete by itself: the scan is the same paged, time-budgeted loop either way, so a batch with more orders than one page can still stop early with `done: false` and a cursor. Small batches finish in one call, which is the normal case, but check `done` rather than assume it. Omitted = scan every order and answer for every organization that appears on one.
     * @param {OrderStatus[]} statuses - Which lifecycle statuses count as revenue. Defaults to placed, in_fulfillment and completed: a pending order was never placed, and a cancelled one is not revenue. Widening this is how a merchant who books on approval gets their own definition of the same numbers.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderCustomerRollupResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReportsCustomerRollup(asOf?: string, cursor?: string, organizationIds?: string[], statuses?: OrderStatus[]): Promise<Models.OrderCustomerRollupResponse>;
    ordersReportsCustomerRollup(
        paramsOrFirst?: { asOf?: string, cursor?: string, organizationIds?: string[], statuses?: OrderStatus[] } | string,
        ...rest: [(string)?, (string[])?, (OrderStatus[])?]    
    ): Promise<Models.OrderCustomerRollupResponse> {
        let params: { asOf?: string, cursor?: string, organizationIds?: string[], statuses?: OrderStatus[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { asOf?: string, cursor?: string, organizationIds?: string[], statuses?: OrderStatus[] };
        } else {
            params = {
                asOf: paramsOrFirst as string,
                cursor: rest[0] as string,
                organizationIds: rest[1] as string[],
                statuses: rest[2] as OrderStatus[]            
            };
        }
        
        const asOf = params.asOf;
        const cursor = params.cursor;
        const organizationIds = params.organizationIds;
        const statuses = params.statuses;


        const apiPath = '/v1/orders/reports/customer-rollup';
        const apiPayload: Payload = {};
        if (typeof asOf !== 'undefined') {
            apiPayload['as_of'] = asOf;
        }
        if (typeof cursor !== 'undefined') {
            apiPayload['cursor'] = cursor;
        }
        if (typeof organizationIds !== 'undefined') {
            apiPayload['organization_ids'] = organizationIds;
        }
        if (typeof statuses !== 'undefined') {
            apiPayload['statuses'] = statuses;
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
     * The reasons a merchant takes goods back under, in their own words and in the order a picker should offer them — what a returns dialog fills its reason select from, and what turns the `reason_code` on a return into a title somebody can read. It is the one vocabulary of this app the MERCHANT keeps rather than the database: why a customer sent something back differs per trade, so it is a table and a merchant gets their own without a release of this app. The set is served whole and seeds itself: a tenant that has never read it is given the nine standard reasons on the way, so this route never answers an empty select. Exactly one row carries `is_default` — the reason a picker preselects, repaired on read if nothing holds it — and it is deliberately 'other' rather than a real reason, because `order_returns.reason_code` is nullable and nothing here falls back to the flag. Every parameter below is an exact match on the column it names, and a key that names no column is 400 unknown_filter; limit, offset and order ('column.asc' | 'column.desc') page and sort it. The jsonb columns `labels` and `descriptions` are not offered, because the data plane answers 400 for anything that is not a whole JSON document. Adding, renaming and retiring a reason has no address here yet.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. Primary key of the reason. The {id} segment of the item route; `code` is what a return stores.
     * @param {string} params.code - Look one reason up by the code a return carries. Exact match, and the way to turn a `reason_code` off a return into the row that titles it. The stable identifier a return carries in `reason_code`, and the one thing about a reason that is not a label: lowercase, starting with a letter, with digits, '-' and '_' after it. It is what a report groups by and what an ERP mapping keys on, so it is fixed once created — the title is what a merchant renames.
     * @param {string} params.title - Filter to rows whose `title` is exactly this value. What an operator reads in the picker, in the tenant's own words. Renaming it rewrites no return, because a return stores the code.
     * @param {string} params.description - Filter to rows whose `description` is exactly this value. One sentence on when to pick this reason, for whoever is choosing between two that sound alike. Null where nobody wrote one.
     * @param {boolean} params.isDefault - Filter to the one reason a picker preselects. Exactly one row of a tenant carries it. Exactly one reason of the tenant carries this: the one a picker preselects. It is NOT a fallback — `order_returns.reason_code` is nullable and a return registered without a code carries none, deliberately, because a default of 'Damaged in transit' would label returns that were never damaged. The seeded flag sits on 'other' for that reason. The set repairs itself on read when no row holds it.
     * @param {OrderVocabularyTone} params.tone - Filter to rows whose `tone` is exactly this value. The semantic badge colour a client renders this reason in — the same five tones every vocabulary of this platform uses. The client owns what each tone looks like.
     * @param {number} params.position - Filter to rows whose `position` is exactly this value. Where the reason sits in the picker, ascending. Ties fall back to whatever the database returns, so a merchant who cares about the order gives every row its own number.
     * @param {boolean} params.isSystem - Filter to rows whose `is_system` is exactly this value. True for a reason the app seeded, and it means only 'we put it there' — not that it is protected. A merchant may rename, re-tone and reorder a seeded reason like any other; nothing here branches on this flag.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the reason was created — the seed writes the nine standard ones on install.
     * @param {string} params.updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the reason last changed.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersReturnReasonsList(params?: { id?: string, code?: string, title?: string, description?: string, isDefault?: boolean, tone?: OrderVocabularyTone, position?: number, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * The reasons a merchant takes goods back under, in their own words and in the order a picker should offer them — what a returns dialog fills its reason select from, and what turns the `reason_code` on a return into a title somebody can read. It is the one vocabulary of this app the MERCHANT keeps rather than the database: why a customer sent something back differs per trade, so it is a table and a merchant gets their own without a release of this app. The set is served whole and seeds itself: a tenant that has never read it is given the nine standard reasons on the way, so this route never answers an empty select. Exactly one row carries `is_default` — the reason a picker preselects, repaired on read if nothing holds it — and it is deliberately 'other' rather than a real reason, because `order_returns.reason_code` is nullable and nothing here falls back to the flag. Every parameter below is an exact match on the column it names, and a key that names no column is 400 unknown_filter; limit, offset and order ('column.asc' | 'column.desc') page and sort it. The jsonb columns `labels` and `descriptions` are not offered, because the data plane answers 400 for anything that is not a whole JSON document. Adding, renaming and retiring a reason has no address here yet.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. Primary key of the reason. The {id} segment of the item route; `code` is what a return stores.
     * @param {string} code - Look one reason up by the code a return carries. Exact match, and the way to turn a `reason_code` off a return into the row that titles it. The stable identifier a return carries in `reason_code`, and the one thing about a reason that is not a label: lowercase, starting with a letter, with digits, '-' and '_' after it. It is what a report groups by and what an ERP mapping keys on, so it is fixed once created — the title is what a merchant renames.
     * @param {string} title - Filter to rows whose `title` is exactly this value. What an operator reads in the picker, in the tenant's own words. Renaming it rewrites no return, because a return stores the code.
     * @param {string} description - Filter to rows whose `description` is exactly this value. One sentence on when to pick this reason, for whoever is choosing between two that sound alike. Null where nobody wrote one.
     * @param {boolean} isDefault - Filter to the one reason a picker preselects. Exactly one row of a tenant carries it. Exactly one reason of the tenant carries this: the one a picker preselects. It is NOT a fallback — `order_returns.reason_code` is nullable and a return registered without a code carries none, deliberately, because a default of 'Damaged in transit' would label returns that were never damaged. The seeded flag sits on 'other' for that reason. The set repairs itself on read when no row holds it.
     * @param {OrderVocabularyTone} tone - Filter to rows whose `tone` is exactly this value. The semantic badge colour a client renders this reason in — the same five tones every vocabulary of this platform uses. The client owns what each tone looks like.
     * @param {number} position - Filter to rows whose `position` is exactly this value. Where the reason sits in the picker, ascending. Ties fall back to whatever the database returns, so a merchant who cares about the order gives every row its own number.
     * @param {boolean} isSystem - Filter to rows whose `is_system` is exactly this value. True for a reason the app seeded, and it means only 'we put it there' — not that it is protected. A merchant may rename, re-tone and reorder a seeded reason like any other; nothing here branches on this flag.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the reason was created — the seed writes the nine standard ones on install.
     * @param {string} updatedAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the reason last changed.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnReasonsList(id?: string, code?: string, title?: string, description?: string, isDefault?: boolean, tone?: OrderVocabularyTone, position?: number, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    ordersReturnReasonsList(
        paramsOrFirst?: { id?: string, code?: string, title?: string, description?: string, isDefault?: boolean, tone?: OrderVocabularyTone, position?: number, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (OrderVocabularyTone)?, (number)?, (boolean)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, code?: string, title?: string, description?: string, isDefault?: boolean, tone?: OrderVocabularyTone, position?: number, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, code?: string, title?: string, description?: string, isDefault?: boolean, tone?: OrderVocabularyTone, position?: number, isSystem?: boolean, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                title: rest[1] as string,
                description: rest[2] as string,
                isDefault: rest[3] as boolean,
                tone: rest[4] as OrderVocabularyTone,
                position: rest[5] as number,
                isSystem: rest[6] as boolean,
                createdAt: rest[7] as string,
                updatedAt: rest[8] as string,
                limit: rest[9] as number,
                offset: rest[10] as number,
                order: rest[11] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const title = params.title;
        const description = params.description;
        const isDefault = params.isDefault;
        const tone = params.tone;
        const position = params.position;
        const isSystem = params.isSystem;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/orders/return-reasons';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof isDefault !== 'undefined') {
            apiPayload['is_default'] = isDefault;
        }
        if (typeof tone !== 'undefined') {
            apiPayload['tone'] = tone;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof isSystem !== 'undefined') {
            apiPayload['is_system'] = isSystem;
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
     * One reason with its code, its title, the labels and descriptions per locale and the badge tone a client renders it in. Reach for it when you hold the id — from the list, or off a Cockpit row. Addressed by uuid and not by code: a `reason_code` read off a return becomes a row through GET /orders/return-reasons?code=… . Unlike the list this route does NOT seed, because an id can only have come from a set that was already read.
     *
     * @param {string} params.id - The return reason id (uuid) — not its code. A code is turned into a row through GET /orders/return-reasons?code=damaged.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturnReason>}
     */
    ordersReturnReasonsGet(params: { id: string }): Promise<Models.OrderReturnReason>;
    /**
     * One reason with its code, its title, the labels and descriptions per locale and the badge tone a client renders it in. Reach for it when you hold the id — from the list, or off a Cockpit row. Addressed by uuid and not by code: a `reason_code` read off a return becomes a row through GET /orders/return-reasons?code=… . Unlike the list this route does NOT seed, because an id can only have come from a set that was already read.
     *
     * @param {string} id - The return reason id (uuid) — not its code. A code is turned into a row through GET /orders/return-reasons?code=damaged.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturnReason>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnReasonsGet(id: string): Promise<Models.OrderReturnReason>;
    ordersReturnReasonsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrderReturnReason> {
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

        const apiPath = '/v1/orders/return-reasons/{id}'.replace('{id}', id);
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
     * Which value sets this app will describe for you, by name — order statuses, payment statuses, fulfillment statuses, item types, return statuses and return resolutions — so a client can discover them instead of shipping its own copy of five statuses that goes stale one release later. The values themselves are deliberately NOT here: this is the index, and each set is fetched on its own. Discovery for the vocabulary routes. Names: cancellation-scopes, comment-visibilities, discount-applies-to, discount-effect-kinds, discount-placements, discount-sources, discount-value-types, fulfillment-statuses, item-types, payment-statuses, refund-modes, return-reason-tones, return-resolutions, return-statuses, statuses. Fetch one with GET /orders/vocabularies/{name}; a client holding the qualified pair 'orders.<name>' builds that URL from the pair alone. 'title' and 'description' are locale maps wherever somebody wrote the copy and plain strings where the fallback did — read both forms.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderVocabularyIndex>}
     */
    ordersVocabulariesList(): Promise<Models.OrderVocabularyIndex> {

        const apiPath = '/v1/orders/vocabularies';
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
     * Everything a UI needs to render one of this app's value sets without knowing it: every permitted value, in order, each with a title and description in the locales somebody wrote and a badge tone to colour it. Fetch it once and a status filter, a status badge and a resolution picker all stay correct through a lifecycle change, because the set served IS the set enforced. It answers about values, not about rows — nothing here says how many orders are in a status. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is lifecycle order for a status, and 'final' marks the values that END the lifecycle (completed, cancelled) so a client can ask "is this order still open?" instead of matching names it guessed. Every set is exhaustive ('closed' is always true); 'source' says who enforces it — 'schema' for a CHECK constraint, 'app' for 'return-resolutions', whose column carries none and whose words the return routes enforce instead. Those values additionally carry 'stage' (complete | reject): the transition that accepts them. 'title' and 'description' are locale maps where the copy was written and plain strings where the key-derived fallback answered, on the vocabulary and on every value alike. Names: cancellation-scopes, comment-visibilities, discount-applies-to, discount-effect-kinds, discount-placements, discount-sources, discount-value-types, fulfillment-statuses, item-types, payment-statuses, refund-modes, return-reason-tones, return-resolutions, return-statuses, statuses.
     *
     * @param {OrdersVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderVocabulary>}
     */
    ordersVocabulariesGet(params: { name: OrdersVocabulariesGetName }): Promise<Models.OrderVocabulary>;
    /**
     * Everything a UI needs to render one of this app's value sets without knowing it: every permitted value, in order, each with a title and description in the locales somebody wrote and a badge tone to colour it. Fetch it once and a status filter, a status badge and a resolution picker all stay correct through a lifecycle change, because the set served IS the set enforced. It answers about values, not about rows — nothing here says how many orders are in a status. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is lifecycle order for a status, and 'final' marks the values that END the lifecycle (completed, cancelled) so a client can ask "is this order still open?" instead of matching names it guessed. Every set is exhaustive ('closed' is always true); 'source' says who enforces it — 'schema' for a CHECK constraint, 'app' for 'return-resolutions', whose column carries none and whose words the return routes enforce instead. Those values additionally carry 'stage' (complete | reject): the transition that accepts them. 'title' and 'description' are locale maps where the copy was written and plain strings where the key-derived fallback answered, on the vocabulary and on every value alike. Names: cancellation-scopes, comment-visibilities, discount-applies-to, discount-effect-kinds, discount-placements, discount-sources, discount-value-types, fulfillment-statuses, item-types, payment-statuses, refund-modes, return-reason-tones, return-resolutions, return-statuses, statuses.
     *
     * @param {OrdersVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersVocabulariesGet(name: OrdersVocabulariesGetName): Promise<Models.OrderVocabulary>;
    ordersVocabulariesGet(
        paramsOrFirst: { name: OrdersVocabulariesGetName } | OrdersVocabulariesGetName    
    ): Promise<Models.OrderVocabulary> {
        let params: { name: OrdersVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: OrdersVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as OrdersVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/orders/vocabularies/{name}'.replace('{name}', name);
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
     * The single source of order information, and what an order detail screen is built from: the order row plus its positions, its shipments with the shipment_items each one booked, its returns and its cancellations — one call, no assembling five lists. A cancellation's and a return's 'positions' are ARRAYS of {order_item_id, quantity}; a return's entries additionally carry 'restock'. Two things it does not carry: the comments and the event trail, which are their own paginated routes because both grow without bound. Addressed by uuid — an order number goes through GET /orders?number=… first. The fields currency, grand_total, contact_id and status and the five statuses are read by other apps (payments checks a payment against them) and are stable from 1.0.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDetail>}
     */
    ordersGet(params: { id: string }): Promise<Models.OrderDetail>;
    /**
     * The single source of order information, and what an order detail screen is built from: the order row plus its positions, its shipments with the shipment_items each one booked, its returns and its cancellations — one call, no assembling five lists. A cancellation's and a return's 'positions' are ARRAYS of {order_item_id, quantity}; a return's entries additionally carry 'restock'. Two things it does not carry: the comments and the event trail, which are their own paginated routes because both grow without bound. Addressed by uuid — an order number goes through GET /orders?number=… first. The fields currency, grand_total, contact_id and status and the five statuses are read by other apps (payments checks a payment against them) and are stable from 1.0.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersGet(id: string): Promise<Models.OrderDetail>;
    ordersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrderDetail> {
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

        const apiPath = '/v1/orders/{id}'.replace('{id}', id);
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
     * The narrow correction window a service desk needs: the customer gave the wrong delivery address, the buyer's name is misspelled, their purchase-order number was missing. Ten columns and no others — customer_order_number, buyer, billing_address, shipping_address, user_data, metadata, and the four that say where the order came from (external_id, external_refs, source_synced_at, source_data) — and each is REPLACED whole, not merged, so send the entire address rather than the one line that changed. The last four are the only ones a delta run needs, and this is the only address that refreshes them without moving the order: a new ETag and a new confirmation time arrive here. It moves nothing: status, payment_status, fulfillment_status and the quantities belong to the action routes, and a body carrying them is accepted with those keys quietly dropped — except created_at and updated_at, which are the server's and answer 400 server_owned_field. The window closes when the fulfilling system acknowledges the order, because from then on the ERP holds the copy that ships — unless the tenant set allow_modification_after_acknowledge. Every accepted change writes an order.updated event naming the columns it touched.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {object} params.billingAddress - The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to. Replaced wholesale — send the whole address, not a patch of it.
     * @param {object} params.buyer - The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it. Replaced wholesale — send the whole snapshot, not a patch of it.
     * @param {string} params.customerOrderNumber - The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
     * @param {string} params.externalId - The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns. Replaced wholesale, and null disowns the order — no source then answers for it. Moving it to a key another order of this tenant holds is a 409.
     * @param {object} params.externalRefs - Every OTHER system that knows this order, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer. Replaced wholesale — send the whole map, not the one system that changed.
     * @param {object} params.metadata - Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it. Replaced wholesale.
     * @param {string} params.requestedDeliveryDate - The calendar day the BUYER asked to be delivered on, as a date and not a moment — a buyer asks for Tuesday, not for Tuesday at 14:03 in a timezone nobody named. It is a wish and nothing here judges it: a date in the past, a weekend or a day inside the lead time is stored as sent, because what is deliverable is the merchant's answer and this app reads neither stock nor carrier calendar. The positions carry their own, and A POSITION'S DATE WINS over this one — this is the proposal for every position that names none. Null on an order that asked for nothing, which is the ordinary case. It was collected in `user_data.requested_date` before this column existed and is still echoed there by callers that have not moved over; the column is what is compared, sorted and mapped. The buyer rang up and asked for a different day. 'YYYY-MM-DD', and null withdraws the request entirely. It moves the ORDER's date only — a position that named its own keeps it, because the line wins. It is not held to any lead time here: a date the merchant cannot serve is a conversation, not a 400.
     * @param {object} params.shippingAddress - The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection). Replaced wholesale. This is the one correction that actually matters after placement: the label of every shipment still to go out is printed from it.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it. Replaced wholesale, which is how a fresh ETag arrives: send what the source said THIS time, not a patch of what it said last time.
     * @param {string} params.sourceSyncedAt - When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns. This is where a delta run stamps the run it confirmed the order in.
     * @param {object} params.userData - Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change. One key of it is read: `requested_date`, which is where the wanted delivery date was collected before it had a column, and which is taken as the date only when `requested_delivery_date` names none. The blob itself is never rewritten by that reading. Replaced wholesale — the `requested_date` key included, so a body that rewrites this blob without it drops that echo. The typed column is unaffected either way.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersUpdate(params: { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, externalId?: string, externalRefs?: object, metadata?: object, requestedDeliveryDate?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string, userData?: object }): Promise<Models.Order>;
    /**
     * The narrow correction window a service desk needs: the customer gave the wrong delivery address, the buyer's name is misspelled, their purchase-order number was missing. Ten columns and no others — customer_order_number, buyer, billing_address, shipping_address, user_data, metadata, and the four that say where the order came from (external_id, external_refs, source_synced_at, source_data) — and each is REPLACED whole, not merged, so send the entire address rather than the one line that changed. The last four are the only ones a delta run needs, and this is the only address that refreshes them without moving the order: a new ETag and a new confirmation time arrive here. It moves nothing: status, payment_status, fulfillment_status and the quantities belong to the action routes, and a body carrying them is accepted with those keys quietly dropped — except created_at and updated_at, which are the server's and answer 400 server_owned_field. The window closes when the fulfilling system acknowledges the order, because from then on the ERP holds the copy that ships — unless the tenant set allow_modification_after_acknowledge. Every accepted change writes an order.updated event naming the columns it touched.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {object} billingAddress - The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to. Replaced wholesale — send the whole address, not a patch of it.
     * @param {object} buyer - The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it. Replaced wholesale — send the whole snapshot, not a patch of it.
     * @param {string} customerOrderNumber - The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
     * @param {string} externalId - The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns. Replaced wholesale, and null disowns the order — no source then answers for it. Moving it to a key another order of this tenant holds is a 409.
     * @param {object} externalRefs - Every OTHER system that knows this order, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer. Replaced wholesale — send the whole map, not the one system that changed.
     * @param {object} metadata - Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it. Replaced wholesale.
     * @param {string} requestedDeliveryDate - The calendar day the BUYER asked to be delivered on, as a date and not a moment — a buyer asks for Tuesday, not for Tuesday at 14:03 in a timezone nobody named. It is a wish and nothing here judges it: a date in the past, a weekend or a day inside the lead time is stored as sent, because what is deliverable is the merchant's answer and this app reads neither stock nor carrier calendar. The positions carry their own, and A POSITION'S DATE WINS over this one — this is the proposal for every position that names none. Null on an order that asked for nothing, which is the ordinary case. It was collected in `user_data.requested_date` before this column existed and is still echoed there by callers that have not moved over; the column is what is compared, sorted and mapped. The buyer rang up and asked for a different day. 'YYYY-MM-DD', and null withdraws the request entirely. It moves the ORDER's date only — a position that named its own keeps it, because the line wins. It is not held to any lead time here: a date the merchant cannot serve is a conversation, not a 400.
     * @param {object} shippingAddress - The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection). Replaced wholesale. This is the one correction that actually matters after placement: the label of every shipment still to go out is printed from it.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it. Replaced wholesale, which is how a fresh ETag arrives: send what the source said THIS time, not a patch of what it said last time.
     * @param {string} sourceSyncedAt - When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns. This is where a delta run stamps the run it confirmed the order in.
     * @param {object} userData - Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change. One key of it is read: `requested_date`, which is where the wanted delivery date was collected before it had a column, and which is taken as the date only when `requested_delivery_date` names none. The blob itself is never rewritten by that reading. Replaced wholesale — the `requested_date` key included, so a body that rewrites this blob without it drops that echo. The typed column is unaffected either way.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersUpdate(id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, externalId?: string, externalRefs?: object, metadata?: object, requestedDeliveryDate?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string, userData?: object): Promise<Models.Order>;
    ordersUpdate(
        paramsOrFirst: { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, externalId?: string, externalRefs?: object, metadata?: object, requestedDeliveryDate?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string, userData?: object } | string,
        ...rest: [(object)?, (object)?, (string)?, (string)?, (object)?, (object)?, (string)?, (object)?, (object)?, (string)?, (object)?]    
    ): Promise<Models.Order> {
        let params: { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, externalId?: string, externalRefs?: object, metadata?: object, requestedDeliveryDate?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, externalId?: string, externalRefs?: object, metadata?: object, requestedDeliveryDate?: string, shippingAddress?: object, sourceData?: object, sourceSyncedAt?: string, userData?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                billingAddress: rest[0] as object,
                buyer: rest[1] as object,
                customerOrderNumber: rest[2] as string,
                externalId: rest[3] as string,
                externalRefs: rest[4] as object,
                metadata: rest[5] as object,
                requestedDeliveryDate: rest[6] as string,
                shippingAddress: rest[7] as object,
                sourceData: rest[8] as object,
                sourceSyncedAt: rest[9] as string,
                userData: rest[10] as object            
            };
        }
        
        const id = params.id;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const customerOrderNumber = params.customerOrderNumber;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const requestedDeliveryDate = params.requestedDeliveryDate;
        const shippingAddress = params.shippingAddress;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const userData = params.userData;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = Client.toWireKeys(buyer, {"contactId":{"wire":"contact_id","children":null},"customerNumber":{"wire":"customer_number","children":null},"organizationId":{"wire":"organization_id","children":null}});
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof requestedDeliveryDate !== 'undefined') {
            apiPayload['requested_delivery_date'] = requestedDeliveryDate;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * The return channel for whatever fulfils the order. An Integration Studio workflow picks up order.placed, books the order into the ERP, and calls this with what the ERP gave it — the readable order number in external_ref, the ERP's own key in external_id, and the token a later write-back has to hand back in source_data. That is what makes the two systems mutually findable, and an external_id another order of this tenant already holds is a 409 rather than a silent second claim on the same ERP record. It stamps acknowledged_at from the server's clock, and that timestamp is what closes the correction window: PUT /orders/{id} refuses afterwards, because the copy that ships now lives elsewhere. It is a handshake and nothing more — it does not change status, payment_status or fulfillment_status, and it does not ship anything. Once only: a second call is a 422 rather than a silent overwrite of the first system's reference.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.externalId - The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns. The key beside the document number, and the one a write-back addresses. Keeps the existing value when omitted; a key another order of this tenant already holds is a 409.
     * @param {string} params.externalRef - The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it. Keeps the existing value when omitted.
     * @param {object} params.externalRefs - Every OTHER system that knows this order, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer. Keeps the existing value when omitted.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it. Where the ETag of the handover belongs. Keeps the existing value when omitted.
     * @param {string} params.sourceSyncedAt - When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns. Keeps the existing value when omitted — the acknowledgement itself is stamped in acknowledged_at, which is a different fact.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersAcknowledge(params: { id: string, externalId?: string, externalRef?: string, externalRefs?: object, sourceData?: object, sourceSyncedAt?: string }): Promise<Models.Order>;
    /**
     * The return channel for whatever fulfils the order. An Integration Studio workflow picks up order.placed, books the order into the ERP, and calls this with what the ERP gave it — the readable order number in external_ref, the ERP's own key in external_id, and the token a later write-back has to hand back in source_data. That is what makes the two systems mutually findable, and an external_id another order of this tenant already holds is a 409 rather than a silent second claim on the same ERP record. It stamps acknowledged_at from the server's clock, and that timestamp is what closes the correction window: PUT /orders/{id} refuses afterwards, because the copy that ships now lives elsewhere. It is a handshake and nothing more — it does not change status, payment_status or fulfillment_status, and it does not ship anything. Once only: a second call is a 422 rather than a silent overwrite of the first system's reference.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} externalId - The key this order has in the system that OWNS it — the ERP's own handle on the sales order, which is what a write-back addresses. Distinct from `external_ref`, which is the readable ORDER NUMBER that system quotes at a human, and from `number`, which is the one this app issued. Unique per tenant where set, so a retried import that sends the same key again is refused rather than founding a second order. Null for an order the shop owns. The key beside the document number, and the one a write-back addresses. Keeps the existing value when omitted; a key another order of this tenant already holds is a 409.
     * @param {string} externalRef - The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it. Keeps the existing value when omitted.
     * @param {object} externalRefs - Every OTHER system that knows this order, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer. Keeps the existing value when omitted.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it. Where the ETag of the handover belongs. Keeps the existing value when omitted.
     * @param {string} sourceSyncedAt - When this order was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a order no source owns. Keeps the existing value when omitted — the acknowledgement itself is stamped in acknowledged_at, which is a different fact.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersAcknowledge(id: string, externalId?: string, externalRef?: string, externalRefs?: object, sourceData?: object, sourceSyncedAt?: string): Promise<Models.Order>;
    ordersAcknowledge(
        paramsOrFirst: { id: string, externalId?: string, externalRef?: string, externalRefs?: object, sourceData?: object, sourceSyncedAt?: string } | string,
        ...rest: [(string)?, (string)?, (object)?, (object)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, externalId?: string, externalRef?: string, externalRefs?: object, sourceData?: object, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, externalId?: string, externalRef?: string, externalRefs?: object, sourceData?: object, sourceSyncedAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                externalId: rest[0] as string,
                externalRef: rest[1] as string,
                externalRefs: rest[2] as object,
                sourceData: rest[3] as object,
                sourceSyncedAt: rest[4] as string            
            };
        }
        
        const id = params.id;
        const externalId = params.externalId;
        const externalRef = params.externalRef;
        const externalRefs = params.externalRefs;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/acknowledge'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * Call the whole order off: every position's full quantity is booked as cancelled, the order moves to 'cancelled', a cancellation record is written with the reason and who gave it, and an order.cancelled event goes onto the bus. Only while NOTHING has shipped — once a single position has gone out the order is partly real and this answers 422; take the remaining quantities off with POST /orders/{id}/items/cancel instead, and handle what already shipped as a return. It refunds nothing and returns nothing to stock: payment travels through /payment-status and restocking is an explicit inventories call by the orchestrator. A tenant may require a reason (cancel_requires_reason), and a hold may block it (on_hold_blocks = 'shipping_and_cancel'). A pending order may be cancelled. A BUYER's own call reaches further back only: the buyer cancels while the order is pending or placed, not acknowledged by a fulfilling system and with nothing shipped — otherwise 422 order_not_cancellable, and the merchant decides.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.cancelledBy - Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
     * @param {string} params.reason - Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersCancel(params: { id: string, cancelledBy?: string, reason?: string }): Promise<Models.Order>;
    /**
     * Call the whole order off: every position's full quantity is booked as cancelled, the order moves to 'cancelled', a cancellation record is written with the reason and who gave it, and an order.cancelled event goes onto the bus. Only while NOTHING has shipped — once a single position has gone out the order is partly real and this answers 422; take the remaining quantities off with POST /orders/{id}/items/cancel instead, and handle what already shipped as a return. It refunds nothing and returns nothing to stock: payment travels through /payment-status and restocking is an explicit inventories call by the orchestrator. A tenant may require a reason (cancel_requires_reason), and a hold may block it (on_hold_blocks = 'shipping_and_cancel'). A pending order may be cancelled. A BUYER's own call reaches further back only: the buyer cancels while the order is pending or placed, not acknowledged by a fulfilling system and with nothing shipped — otherwise 422 order_not_cancellable, and the merchant decides.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} cancelledBy - Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
     * @param {string} reason - Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersCancel(id: string, cancelledBy?: string, reason?: string): Promise<Models.Order>;
    ordersCancel(
        paramsOrFirst: { id: string, cancelledBy?: string, reason?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, cancelledBy?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, cancelledBy?: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                cancelledBy: rest[0] as string,
                reason: rest[1] as string            
            };
        }
        
        const id = params.id;
        const cancelledBy = params.cancelledBy;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/cancel'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cancelledBy !== 'undefined') {
            apiPayload['cancelled_by'] = cancelledBy;
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
     * What people have written about this order, oldest first: the service desk's own notes and the messages meant for the customer, in one list. Filter by ?visibility=customer to build the version a customer may see, and by ?visibility=internal for the desk's own — on a back-office call the route does NOT decide that for you; on a buyer's own call it does, and only the customer-visible ones exist (asking for ?visibility=internal is 403 buyer_not_permitted). Comments are prose about the order and never move it; the lifecycle lives in the event trail. Every parameter below is an exact match on the column it names. `order_id` is deliberately absent: the route fixes it from the path AFTER the query filter is read, so sending one is accepted and then overwritten — it filters nothing.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.idQuery - Filter to rows whose `id` is exactly this value. Primary key of the comment.
     * @param {string} params.body - Filter to rows whose `body` is exactly this value. The comment itself. Plain text; this app neither renders nor sanitizes it.
     * @param {OrderCommentVisibility} params.visibility - Filter to internal notes or to the customer-visible ones. `visibility=customer` is what a customer order view should read. Who may see it: 'internal' is a note between operators, 'customer' is meant to be shown in the customer's order view. Nothing here enforces that — this app labels the comment and the client showing it decides. Defaults to the tenant's default_comment_visibility.
     * @param {string} params.author - Filter by exact author, as it was reported. Free text — this is not resolved against a user directory, so it matches only what was written. Who wrote it, as the caller reported it. Free text; not resolved against a user directory.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the comment was written. Comments come back oldest first.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersCommentsList(params: { id: string, idQuery?: string, body?: string, visibility?: OrderCommentVisibility, author?: string, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * What people have written about this order, oldest first: the service desk's own notes and the messages meant for the customer, in one list. Filter by ?visibility=customer to build the version a customer may see, and by ?visibility=internal for the desk's own — on a back-office call the route does NOT decide that for you; on a buyer's own call it does, and only the customer-visible ones exist (asking for ?visibility=internal is 403 buyer_not_permitted). Comments are prose about the order and never move it; the lifecycle lives in the event trail. Every parameter below is an exact match on the column it names. `order_id` is deliberately absent: the route fixes it from the path AFTER the query filter is read, so sending one is accepted and then overwritten — it filters nothing.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} idQuery - Filter to rows whose `id` is exactly this value. Primary key of the comment.
     * @param {string} body - Filter to rows whose `body` is exactly this value. The comment itself. Plain text; this app neither renders nor sanitizes it.
     * @param {OrderCommentVisibility} visibility - Filter to internal notes or to the customer-visible ones. `visibility=customer` is what a customer order view should read. Who may see it: 'internal' is a note between operators, 'customer' is meant to be shown in the customer's order view. Nothing here enforces that — this app labels the comment and the client showing it decides. Defaults to the tenant's default_comment_visibility.
     * @param {string} author - Filter by exact author, as it was reported. Free text — this is not resolved against a user directory, so it matches only what was written. Who wrote it, as the caller reported it. Free text; not resolved against a user directory.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When the comment was written. Comments come back oldest first.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersCommentsList(id: string, idQuery?: string, body?: string, visibility?: OrderCommentVisibility, author?: string, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    ordersCommentsList(
        paramsOrFirst: { id: string, idQuery?: string, body?: string, visibility?: OrderCommentVisibility, author?: string, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (OrderCommentVisibility)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, idQuery?: string, body?: string, visibility?: OrderCommentVisibility, author?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, idQuery?: string, body?: string, visibility?: OrderCommentVisibility, author?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                idQuery: rest[0] as string,
                body: rest[1] as string,
                visibility: rest[2] as OrderCommentVisibility,
                author: rest[3] as string,
                createdAt: rest[4] as string,
                limit: rest[5] as number,
                offset: rest[6] as number,
                order: rest[7] as string            
            };
        }
        
        const id = params.id;
        const idQuery = params.idQuery;
        const body = params.body;
        const visibility = params.visibility;
        const author = params.author;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/comments'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof idQuery !== 'undefined') {
            apiPayload['id'] = idQuery;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
        }
        if (typeof author !== 'undefined') {
            apiPayload['author'] = author;
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
     * Write down what happened that the state machine cannot record: what the customer said on the phone, why an exception was made, what the warehouse found in the box. `visibility` decides who the note is for — 'internal' for the service desk, 'customer' for text meant to be shown to the buyer — and it defaults to the tenant's default_comment_visibility, which is 'internal' out of the box, so a note is never accidentally customer-facing. Adding one writes an order.comment.added event, so the trail shows that a note was made and its visibility, without copying the text onto the bus. It changes nothing about the order, and it sends nothing to anybody: this stores a comment, it does not email the customer. On a buyer's own call the note is always 'customer' — a buyer writes to the merchant, not into the desk's internal notes, and asking for 'internal' is 403 buyer_not_permitted.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.body - The comment itself. Plain text; this app neither renders nor sanitizes it.
     * @param {string} params.author - Who wrote it, as the caller reported it. Free text; not resolved against a user directory.
     * @param {OrderCommentVisibility} params.visibility - Who may see it: 'internal' is a note between operators, 'customer' is meant to be shown in the customer's order view. Nothing here enforces that — this app labels the comment and the client showing it decides. Defaults to the tenant's default_comment_visibility. Defaults to the tenant's default_comment_visibility setting, which is 'internal' out of the box.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderComment>}
     */
    ordersCommentsCreate(params: { id: string, body: string, author?: string, visibility?: OrderCommentVisibility }): Promise<Models.OrderComment>;
    /**
     * Write down what happened that the state machine cannot record: what the customer said on the phone, why an exception was made, what the warehouse found in the box. `visibility` decides who the note is for — 'internal' for the service desk, 'customer' for text meant to be shown to the buyer — and it defaults to the tenant's default_comment_visibility, which is 'internal' out of the box, so a note is never accidentally customer-facing. Adding one writes an order.comment.added event, so the trail shows that a note was made and its visibility, without copying the text onto the bus. It changes nothing about the order, and it sends nothing to anybody: this stores a comment, it does not email the customer. On a buyer's own call the note is always 'customer' — a buyer writes to the merchant, not into the desk's internal notes, and asking for 'internal' is 403 buyer_not_permitted.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} body - The comment itself. Plain text; this app neither renders nor sanitizes it.
     * @param {string} author - Who wrote it, as the caller reported it. Free text; not resolved against a user directory.
     * @param {OrderCommentVisibility} visibility - Who may see it: 'internal' is a note between operators, 'customer' is meant to be shown in the customer's order view. Nothing here enforces that — this app labels the comment and the client showing it decides. Defaults to the tenant's default_comment_visibility. Defaults to the tenant's default_comment_visibility setting, which is 'internal' out of the box.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderComment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersCommentsCreate(id: string, body: string, author?: string, visibility?: OrderCommentVisibility): Promise<Models.OrderComment>;
    ordersCommentsCreate(
        paramsOrFirst: { id: string, body: string, author?: string, visibility?: OrderCommentVisibility } | string,
        ...rest: [(string)?, (string)?, (OrderCommentVisibility)?]    
    ): Promise<Models.OrderComment> {
        let params: { id: string, body: string, author?: string, visibility?: OrderCommentVisibility };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, body: string, author?: string, visibility?: OrderCommentVisibility };
        } else {
            params = {
                id: paramsOrFirst as string,
                body: rest[0] as string,
                author: rest[1] as string,
                visibility: rest[2] as OrderCommentVisibility            
            };
        }
        
        const id = params.id;
        const body = params.body;
        const author = params.author;
        const visibility = params.visibility;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/orders/{id}/comments'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof author !== 'undefined') {
            apiPayload['author'] = author;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
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
     * Declare the order finished, whatever the quantities say — the service was delivered, the download was fetched, or an operator has decided the rest is not coming. status moves to 'completed' and completed_at is stamped from the server's clock. It does NOT ship anything or change the quantities, so fulfillment_status stays whatever the positions make it, and an order completed with lines still open shows exactly that. A completed order is final: modification, shipping and cancellation all refuse afterwards, and only a return may still be registered against it. The counterpart of auto_complete_on = 'payment' | 'manual': something has to close an order that shipping no longer closes by itself, and it is also the honest end for a service or digital order that never ships. Writes an order_events row 'order.completed' with via='manual'.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.completedBy - Who closed the order, as the caller reports it. Not stored on the order: it is carried in the order.completed event's payload, which is where the audit trail keeps who did what. Free text, not resolved against a user directory.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersComplete(params: { id: string, completedBy?: string }): Promise<Models.Order>;
    /**
     * Declare the order finished, whatever the quantities say — the service was delivered, the download was fetched, or an operator has decided the rest is not coming. status moves to 'completed' and completed_at is stamped from the server's clock. It does NOT ship anything or change the quantities, so fulfillment_status stays whatever the positions make it, and an order completed with lines still open shows exactly that. A completed order is final: modification, shipping and cancellation all refuse afterwards, and only a return may still be registered against it. The counterpart of auto_complete_on = 'payment' | 'manual': something has to close an order that shipping no longer closes by itself, and it is also the honest end for a service or digital order that never ships. Writes an order_events row 'order.completed' with via='manual'.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} completedBy - Who closed the order, as the caller reports it. Not stored on the order: it is carried in the order.completed event's payload, which is where the audit trail keeps who did what. Free text, not resolved against a user directory.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersComplete(id: string, completedBy?: string): Promise<Models.Order>;
    ordersComplete(
        paramsOrFirst: { id: string, completedBy?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, completedBy?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, completedBy?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                completedBy: rest[0] as string            
            };
        }
        
        const id = params.id;
        const completedBy = params.completedBy;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/complete'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof completedBy !== 'undefined') {
            apiPayload['completed_by'] = completedBy;
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
     * Everything that has ever happened to this order, oldest first: placed or requested, updated, acknowledged, shipped, held, paid, returned, completed, cancelled — each with the payload the action carried. This is the audit trail an operator reads to answer "why is this order in this state", and it is the same row the platform publishes as a domain event, so what a workflow reacted to and what a person sees here cannot diverge. It is append-only and this route is read-only: rows are written by the action routes and there is no way to add, edit or remove one. An order's trail grows for as long as the order lives, so it is paginated like every other list — 'page.hasMore' says whether more of it exists. Every parameter below is an exact match on the column it names; `order_id` is deliberately absent, because the route fixes it from the path after the query filter is read and a value sent for it is overwritten rather than honoured. The jsonb column 'payload' is not offered for the same reason it is not offered on the order list: the data plane answers 400 for anything that is not a whole JSON document.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.idQuery - Filter to rows whose `id` is exactly this value. Primary key of the event row.
     * @param {string} params.name - Filter the trail to one kind of event — `order.shipment.created` for the dispatch history, `order.return.completed` for the settled returns. WHAT happened, and this is the domain event: the manifest emits order_event.created on insert and this value is the event name on the bus. The names this app writes are order.placed, order.requested, order.updated, order.acknowledged, order.cancelled, order.item.cancelled, order.shipment.created, order.completed, order.held, order.unheld, order.payment_status.changed, order.comment.added, order.return.registered, order.return.received, order.return.completed and order.return.rejected.
     * @param {string} params.actor - Filter to the events one principal caused. Only order.placed and order.requested carry an actor, so this filters to those two names by construction. Who caused it: the resolved contact id of the acting principal. Only order.placed and order.requested carry one today — every other row is null — so filtering on it filters to those two names. The database constrains nothing here (the column is text); the uuid shape is what this app WRITES, which is also why no example is published: no id an app invents names a row a tenant holds.
     * @param {string} params.createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When it happened. The trail comes back oldest first, which is the order a human reads a history in.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersEventsList(params: { id: string, idQuery?: string, name?: string, actor?: string, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * Everything that has ever happened to this order, oldest first: placed or requested, updated, acknowledged, shipped, held, paid, returned, completed, cancelled — each with the payload the action carried. This is the audit trail an operator reads to answer "why is this order in this state", and it is the same row the platform publishes as a domain event, so what a workflow reacted to and what a person sees here cannot diverge. It is append-only and this route is read-only: rows are written by the action routes and there is no way to add, edit or remove one. An order's trail grows for as long as the order lives, so it is paginated like every other list — 'page.hasMore' says whether more of it exists. Every parameter below is an exact match on the column it names; `order_id` is deliberately absent, because the route fixes it from the path after the query filter is read and a value sent for it is overwritten rather than honoured. The jsonb column 'payload' is not offered for the same reason it is not offered on the order list: the data plane answers 400 for anything that is not a whole JSON document.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} idQuery - Filter to rows whose `id` is exactly this value. Primary key of the event row.
     * @param {string} name - Filter the trail to one kind of event — `order.shipment.created` for the dispatch history, `order.return.completed` for the settled returns. WHAT happened, and this is the domain event: the manifest emits order_event.created on insert and this value is the event name on the bus. The names this app writes are order.placed, order.requested, order.updated, order.acknowledged, order.cancelled, order.item.cancelled, order.shipment.created, order.completed, order.held, order.unheld, order.payment_status.changed, order.comment.added, order.return.registered, order.return.received, order.return.completed and order.return.rejected.
     * @param {string} actor - Filter to the events one principal caused. Only order.placed and order.requested carry an actor, so this filters to those two names by construction. Who caused it: the resolved contact id of the acting principal. Only order.placed and order.requested carry one today — every other row is null — so filtering on it filters to those two names. The database constrains nothing here (the column is text); the uuid shape is what this app WRITES, which is also why no example is published: no id an app invents names a row a tenant holds.
     * @param {string} createdAt - Exact timestamp equality — this API has no range filter. To bound a period, sort with `order` and page. When it happened. The trail comes back oldest first, which is the order a human reads a history in.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped to 200 rather than refused.
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending, the direction is lower case, and the column has to exist — the value reaches the data plane verbatim and anything else is a 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersEventsList(id: string, idQuery?: string, name?: string, actor?: string, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    ordersEventsList(
        paramsOrFirst: { id: string, idQuery?: string, name?: string, actor?: string, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, idQuery?: string, name?: string, actor?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, idQuery?: string, name?: string, actor?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                idQuery: rest[0] as string,
                name: rest[1] as string,
                actor: rest[2] as string,
                createdAt: rest[3] as string,
                limit: rest[4] as number,
                offset: rest[5] as number,
                order: rest[6] as string            
            };
        }
        
        const id = params.id;
        const idQuery = params.idQuery;
        const name = params.name;
        const actor = params.actor;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/events'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof idQuery !== 'undefined') {
            apiPayload['id'] = idQuery;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
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
     * Stop an order from moving while a human sorts something out — a credit check, a suspected fraud, an address nobody can deliver to. It sets a flag with the reason attached, and the flag is deliberately ORTHOGONAL to the lifecycle: the order keeps its status, its payment status and its quantities, and appears on a worklist as 'held' rather than being pushed into a state it will have to come back out of. How far the hold reaches is the tenant's setting on_hold_blocks: shipping only, shipping and cancellation (the credit-check case, where the order must move in neither direction), or nothing at all, which leaves the flag advisory. Holding an order twice is allowed and simply replaces the reason; releasing it is POST /orders/{id}/unhold.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.reason - Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersHold(params: { id: string, reason?: string }): Promise<Models.Order>;
    /**
     * Stop an order from moving while a human sorts something out — a credit check, a suspected fraud, an address nobody can deliver to. It sets a flag with the reason attached, and the flag is deliberately ORTHOGONAL to the lifecycle: the order keeps its status, its payment status and its quantities, and appears on a worklist as 'held' rather than being pushed into a state it will have to come back out of. How far the hold reaches is the tenant's setting on_hold_blocks: shipping only, shipping and cancellation (the credit-check case, where the order must move in neither direction), or nothing at all, which leaves the flag advisory. Holding an order twice is allowed and simply replaces the reason; releasing it is POST /orders/{id}/unhold.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} reason - Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersHold(id: string, reason?: string): Promise<Models.Order>;
    ordersHold(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/hold'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * Take quantities off an order that is otherwise going ahead — three of the ten are discontinued, one line is out of stock and the customer would rather not wait. Each named quantity is booked onto its position as cancelled and guarded against the OPEN quantity (ordered − shipped − cancelled), so nothing already shipped can be cancelled away underneath a shipment. The order's fulfillment_status is re-derived afterwards, and when every position ends up fully cancelled the order itself moves to 'cancelled' — which is how this becomes a full cancel by arithmetic rather than by a second call. Positions are REQUIRED here, unlike on /ship and /return: cancelling an entire order by omitting a field is not something anybody should be able to do by accident; that is what POST /orders/{id}/cancel is for. Read GET /orders/{id}/shippable for the open quantity per position before calling.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {Models.OrderCancelPosition[]} params.positions - The quantities to take off the order. Required here, unlike on /ship and /return: cancelling everything by default is not a thing anybody should be able to do by omission — that is what /cancel is for.
     * @param {string} params.cancelledBy - Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
     * @param {string} params.reason - Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersItemsCancel(params: { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string }): Promise<Models.Order>;
    /**
     * Take quantities off an order that is otherwise going ahead — three of the ten are discontinued, one line is out of stock and the customer would rather not wait. Each named quantity is booked onto its position as cancelled and guarded against the OPEN quantity (ordered − shipped − cancelled), so nothing already shipped can be cancelled away underneath a shipment. The order's fulfillment_status is re-derived afterwards, and when every position ends up fully cancelled the order itself moves to 'cancelled' — which is how this becomes a full cancel by arithmetic rather than by a second call. Positions are REQUIRED here, unlike on /ship and /return: cancelling an entire order by omitting a field is not something anybody should be able to do by accident; that is what POST /orders/{id}/cancel is for. Read GET /orders/{id}/shippable for the open quantity per position before calling.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {Models.OrderCancelPosition[]} positions - The quantities to take off the order. Required here, unlike on /ship and /return: cancelling everything by default is not a thing anybody should be able to do by omission — that is what /cancel is for.
     * @param {string} cancelledBy - Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
     * @param {string} reason - Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersItemsCancel(id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string): Promise<Models.Order>;
    ordersItemsCancel(
        paramsOrFirst: { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string } | string,
        ...rest: [(Models.OrderCancelPosition[])?, (string)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                positions: rest[0] as Models.OrderCancelPosition[],
                cancelledBy: rest[1] as string,
                reason: rest[2] as string            
            };
        }
        
        const id = params.id;
        const positions = params.positions;
        const cancelledBy = params.cancelledBy;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof positions === 'undefined') {
            throw new RevenexxException('Missing required parameter: "positions"');
        }

        const apiPath = '/v1/orders/{id}/items/cancel'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cancelledBy !== 'undefined') {
            apiPayload['cancelled_by'] = cancelledBy;
        }
        if (typeof positions !== 'undefined') {
            apiPayload['positions'] = Client.toWireKeys(positions, {"orderItemId":{"wire":"order_item_id","children":null}});
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
     * Payment is the one status dimension this app does not decide for itself: it is FED IN from whatever took the money — the payments app, a PSP webhook relayed by a workflow, or a finance clerk marking an invoice settled. This route writes that word onto the order and records the change as an order.payment_status.changed event carrying the previous value, so the trail shows the sequence and not just the current state. Optionally attach the payment_id of the transaction it came from. It takes no money, refunds none and validates nothing about the amount — it records a fact somebody else established, and any of the seven words may follow any other. The other half of auto_complete_on = 'payment': an order that has shipped in full is completed by this call when the status becomes 'paid'.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {OrderPaymentStatus} params.status - The new value of the payment dimension. Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
     * @param {string} params.paymentId - The reference into the payment system. MERGED into the order's payment snapshot under 'payment_id' — the rest of the snapshot is left alone — and carried in the order.payment_status.changed event. Omitted leaves the snapshot untouched.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersPaymentStatusUpdate(params: { id: string, status: OrderPaymentStatus, paymentId?: string }): Promise<Models.Order>;
    /**
     * Payment is the one status dimension this app does not decide for itself: it is FED IN from whatever took the money — the payments app, a PSP webhook relayed by a workflow, or a finance clerk marking an invoice settled. This route writes that word onto the order and records the change as an order.payment_status.changed event carrying the previous value, so the trail shows the sequence and not just the current state. Optionally attach the payment_id of the transaction it came from. It takes no money, refunds none and validates nothing about the amount — it records a fact somebody else established, and any of the seven words may follow any other. The other half of auto_complete_on = 'payment': an order that has shipped in full is completed by this call when the status becomes 'paid'.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {OrderPaymentStatus} status - The new value of the payment dimension. Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
     * @param {string} paymentId - The reference into the payment system. MERGED into the order's payment snapshot under 'payment_id' — the rest of the snapshot is left alone — and carried in the order.payment_status.changed event. Omitted leaves the snapshot untouched.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersPaymentStatusUpdate(id: string, status: OrderPaymentStatus, paymentId?: string): Promise<Models.Order>;
    ordersPaymentStatusUpdate(
        paramsOrFirst: { id: string, status: OrderPaymentStatus, paymentId?: string } | string,
        ...rest: [(OrderPaymentStatus)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, status: OrderPaymentStatus, paymentId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, status: OrderPaymentStatus, paymentId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                status: rest[0] as OrderPaymentStatus,
                paymentId: rest[1] as string            
            };
        }
        
        const id = params.id;
        const status = params.status;
        const paymentId = params.paymentId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof status === 'undefined') {
            throw new RevenexxException('Missing required parameter: "status"');
        }

        const apiPath = '/v1/orders/{id}/payment-status'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof paymentId !== 'undefined') {
            apiPayload['payment_id'] = paymentId;
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
     * Open a return case: the customer has announced goods are coming back, and this is where that becomes a tracked thing with a return number of its own, drawn from the tenant's return range. Positions are guarded against what actually SHIPPED and is neither back nor already claimed by another open return, so two returns cannot claim the same pieces. Each position carries a `restock` flag saying whether the item is expected to be sellable again — recorded now, acted on only when the return completes. Omitting `positions` registers everything still returnable, the 'the customer sent the whole delivery back' case. Nothing is booked yet: quantity_returned stays where it is and the order does not move — the return starts as 'registered' and travels through receive and complete or reject. Allowed on a completed order, refused on a cancelled one.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.externalId - The key this return case has in the system that owns it — an ERP return order, an RMA portal's case handle. `number` beside it is the return number the customer writes on the parcel; this is what a write-back addresses. Unique per tenant where set. Null for a return registered here. Send it when the case was opened in an RMA portal or an ERP — that system then finds this return again by its own key. The three transitions below do not take it: a return is registered once, and its provenance is set there.
     * @param {object} params.externalRefs - Every OTHER system that knows this return, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer.
     * @param {object} params.metadata - Free-form data for the caller — the returns portal's own reference. Stored and returned untouched.
     * @param {Models.OrderReturnPosition[]} params.positions - What is coming back. Omitted = every position with a returnable (shipped, not yet returned) quantity, in full.
     * @param {string} params.reason - Why the goods are coming back, free text as the customer or the desk stated it — the sentence beside the code, not a replacement for it. Also what /reject stores when it is given no resolution out of the published set.
     * @param {string} params.reasonCode - Why the goods are coming back, as a code out of the set THIS TENANT keeps — GET /orders/return-reasons lists them. This is the field a report groups by; `reason` beside it is the sentence somebody wrote about this one return, and the two are separate because 'Damaged', 'damaged' and 'arrived broken' were one reason counted three times. Null on a return registered without one, which is allowed. There is no foreign key behind it: the registration refuses a code the tenant does not keep, and a code retired afterwards leaves the return carrying it rather than breaking it. Read the codes from GET /orders/return-reasons. Lowercased on the way in. A code this tenant does not keep is a 400 that names the ones it does; omit it and the return is registered without a code, which is allowed. Send `reason` beside it for the sentence — the two are not alternatives.
     * @param {boolean} params.restock - The default restock flag for positions that carry none of their own — and the only way to say "put it all back into stock" when the positions are defaulted. It does not restock anything itself: it decides what the completion REPORTS for the orchestrator's inventories.restock call.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it.
     * @param {string} params.sourceSyncedAt - When this return was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a return no source owns.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturn(params: { id: string, externalId?: string, externalRefs?: object, metadata?: object, positions?: Models.OrderReturnPosition[], reason?: string, reasonCode?: string, restock?: boolean, sourceData?: object, sourceSyncedAt?: string }): Promise<Models.OrderReturn>;
    /**
     * Open a return case: the customer has announced goods are coming back, and this is where that becomes a tracked thing with a return number of its own, drawn from the tenant's return range. Positions are guarded against what actually SHIPPED and is neither back nor already claimed by another open return, so two returns cannot claim the same pieces. Each position carries a `restock` flag saying whether the item is expected to be sellable again — recorded now, acted on only when the return completes. Omitting `positions` registers everything still returnable, the 'the customer sent the whole delivery back' case. Nothing is booked yet: quantity_returned stays where it is and the order does not move — the return starts as 'registered' and travels through receive and complete or reject. Allowed on a completed order, refused on a cancelled one.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} externalId - The key this return case has in the system that owns it — an ERP return order, an RMA portal's case handle. `number` beside it is the return number the customer writes on the parcel; this is what a write-back addresses. Unique per tenant where set. Null for a return registered here. Send it when the case was opened in an RMA portal or an ERP — that system then finds this return again by its own key. The three transitions below do not take it: a return is registered once, and its provenance is set there.
     * @param {object} externalRefs - Every OTHER system that knows this return, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer.
     * @param {object} metadata - Free-form data for the caller — the returns portal's own reference. Stored and returned untouched.
     * @param {Models.OrderReturnPosition[]} positions - What is coming back. Omitted = every position with a returnable (shipped, not yet returned) quantity, in full.
     * @param {string} reason - Why the goods are coming back, free text as the customer or the desk stated it — the sentence beside the code, not a replacement for it. Also what /reject stores when it is given no resolution out of the published set.
     * @param {string} reasonCode - Why the goods are coming back, as a code out of the set THIS TENANT keeps — GET /orders/return-reasons lists them. This is the field a report groups by; `reason` beside it is the sentence somebody wrote about this one return, and the two are separate because 'Damaged', 'damaged' and 'arrived broken' were one reason counted three times. Null on a return registered without one, which is allowed. There is no foreign key behind it: the registration refuses a code the tenant does not keep, and a code retired afterwards leaves the return carrying it rather than breaking it. Read the codes from GET /orders/return-reasons. Lowercased on the way in. A code this tenant does not keep is a 400 that names the ones it does; omit it and the return is registered without a code, which is allowed. Send `reason` beside it for the sentence — the two are not alternatives.
     * @param {boolean} restock - The default restock flag for positions that carry none of their own — and the only way to say "put it all back into stock" when the positions are defaulted. It does not restock anything itself: it decides what the completion REPORTS for the orchestrator's inventories.restock call.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it.
     * @param {string} sourceSyncedAt - When this return was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a return no source owns.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturn(id: string, externalId?: string, externalRefs?: object, metadata?: object, positions?: Models.OrderReturnPosition[], reason?: string, reasonCode?: string, restock?: boolean, sourceData?: object, sourceSyncedAt?: string): Promise<Models.OrderReturn>;
    ordersReturn(
        paramsOrFirst: { id: string, externalId?: string, externalRefs?: object, metadata?: object, positions?: Models.OrderReturnPosition[], reason?: string, reasonCode?: string, restock?: boolean, sourceData?: object, sourceSyncedAt?: string } | string,
        ...rest: [(string)?, (object)?, (object)?, (Models.OrderReturnPosition[])?, (string)?, (string)?, (boolean)?, (object)?, (string)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, externalId?: string, externalRefs?: object, metadata?: object, positions?: Models.OrderReturnPosition[], reason?: string, reasonCode?: string, restock?: boolean, sourceData?: object, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, externalId?: string, externalRefs?: object, metadata?: object, positions?: Models.OrderReturnPosition[], reason?: string, reasonCode?: string, restock?: boolean, sourceData?: object, sourceSyncedAt?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                externalId: rest[0] as string,
                externalRefs: rest[1] as object,
                metadata: rest[2] as object,
                positions: rest[3] as Models.OrderReturnPosition[],
                reason: rest[4] as string,
                reasonCode: rest[5] as string,
                restock: rest[6] as boolean,
                sourceData: rest[7] as object,
                sourceSyncedAt: rest[8] as string            
            };
        }
        
        const id = params.id;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const positions = params.positions;
        const reason = params.reason;
        const reasonCode = params.reasonCode;
        const restock = params.restock;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/return'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof positions !== 'undefined') {
            apiPayload['positions'] = Client.toWireKeys(positions, {"orderItemId":{"wire":"order_item_id","children":null}});
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof reasonCode !== 'undefined') {
            apiPayload['reason_code'] = reasonCode;
        }
        if (typeof restock !== 'undefined') {
            apiPayload['restock'] = restock;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * Accept the return and close the case: the goods are taken back on the order's books and the settlement is recorded as one of the published words — refunded, credited, replaced and so on. This is the step a refund or a credit note hangs off, and the only step that moves quantity_returned. It does not refund money and does not put stock back itself: the answer's 'restock' array names what the orchestrator should hand to inventories.restock, and payment travels through /payment-status. Once completed the return is final — receive, complete and reject all refuse afterwards. The goods accounting moves here and nowhere else: quantity_returned is booked onto each position, completed_at is stamped by the SERVER, and positions flagged restock are reported back in the answer's 'restock' array for the orchestrator's inventories.restock call. 'resolution' is validated against the settlement words this app publishes (refund, partial_refund, replacement, repair, store_credit — see GET /orders/vocabularies/return-resolutions); anything else is refused rather than stored as a word no reader knows. It is checked before the positions are booked, so a rejected value leaves nothing behind. The refunds of all completed returns of one order together never exceed its grand_total: a refund_total that would cross it is 422 refund_exceeds_order, checked before anything is booked.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.rid - The return id (uuid). It must belong to the order in {id} — a return of another order is a 404, not a cross-order write.
     * @param {OrderReturnSettlement} params.resolution - How the return was settled. Omitted = settled without recording how.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturnCompleted>}
     */
    ordersReturnsComplete(params: { id: string, rid: string, resolution?: OrderReturnSettlement }): Promise<Models.OrderReturnCompleted>;
    /**
     * Accept the return and close the case: the goods are taken back on the order's books and the settlement is recorded as one of the published words — refunded, credited, replaced and so on. This is the step a refund or a credit note hangs off, and the only step that moves quantity_returned. It does not refund money and does not put stock back itself: the answer's 'restock' array names what the orchestrator should hand to inventories.restock, and payment travels through /payment-status. Once completed the return is final — receive, complete and reject all refuse afterwards. The goods accounting moves here and nowhere else: quantity_returned is booked onto each position, completed_at is stamped by the SERVER, and positions flagged restock are reported back in the answer's 'restock' array for the orchestrator's inventories.restock call. 'resolution' is validated against the settlement words this app publishes (refund, partial_refund, replacement, repair, store_credit — see GET /orders/vocabularies/return-resolutions); anything else is refused rather than stored as a word no reader knows. It is checked before the positions are booked, so a rejected value leaves nothing behind. The refunds of all completed returns of one order together never exceed its grand_total: a refund_total that would cross it is 422 refund_exceeds_order, checked before anything is booked.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} rid - The return id (uuid). It must belong to the order in {id} — a return of another order is a 404, not a cross-order write.
     * @param {OrderReturnSettlement} resolution - How the return was settled. Omitted = settled without recording how.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturnCompleted>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnsComplete(id: string, rid: string, resolution?: OrderReturnSettlement): Promise<Models.OrderReturnCompleted>;
    ordersReturnsComplete(
        paramsOrFirst: { id: string, rid: string, resolution?: OrderReturnSettlement } | string,
        ...rest: [(string)?, (OrderReturnSettlement)?]    
    ): Promise<Models.OrderReturnCompleted> {
        let params: { id: string, rid: string, resolution?: OrderReturnSettlement };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, rid: string, resolution?: OrderReturnSettlement };
        } else {
            params = {
                id: paramsOrFirst as string,
                rid: rest[0] as string,
                resolution: rest[1] as OrderReturnSettlement            
            };
        }
        
        const id = params.id;
        const rid = params.rid;
        const resolution = params.resolution;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof rid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rid"');
        }

        const apiPath = '/v1/orders/{id}/returns/{rid}/complete'.replace('{id}', id).replace('{rid}', rid);
        const apiPayload: Payload = {};
        if (typeof resolution !== 'undefined') {
            apiPayload['resolution'] = resolution;
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
     * The goods-in scan: the parcel is physically back, warehouse staff have it in their hands, and nobody has decided yet whether the customer gets their money. It moves the return from 'registered' to 'received' and stamps received_at, which is what separates 'announced' from 'here' on a returns worklist. It books nothing — quantity_returned is written by the complete step and by nothing else — so a return that arrives damaged can still be rejected afterwards. Only a registered return can be received; a second call, or one against a settled return, is a 422. This step is skippable: a return may be completed straight from 'registered' where a merchant does not scan goods in.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.rid - The return id (uuid). It must belong to the order in {id} — a return of another order is a 404, not a cross-order write.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturnsReceive(params: { id: string, rid: string, data: object }): Promise<Models.OrderReturn>;
    /**
     * The goods-in scan: the parcel is physically back, warehouse staff have it in their hands, and nobody has decided yet whether the customer gets their money. It moves the return from 'registered' to 'received' and stamps received_at, which is what separates 'announced' from 'here' on a returns worklist. It books nothing — quantity_returned is written by the complete step and by nothing else — so a return that arrives damaged can still be rejected afterwards. Only a registered return can be received; a second call, or one against a settled return, is a 422. This step is skippable: a return may be completed straight from 'registered' where a merchant does not scan goods in.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} rid - The return id (uuid). It must belong to the order in {id} — a return of another order is a 404, not a cross-order write.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnsReceive(id: string, rid: string, data: object): Promise<Models.OrderReturn>;
    ordersReturnsReceive(
        paramsOrFirst: { id: string, rid: string, data: object } | string,
        ...rest: [(string)?, (object)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, rid: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, rid: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                rid: rest[0] as string,
                data: rest[1] as object            
            };
        }
        
        const id = params.id;
        const rid = params.rid;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof rid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rid"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/orders/{id}/returns/{rid}/receive'.replace('{id}', id).replace('{rid}', rid);
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
     * Close the case against the customer: the goods came back used, outside the window, or were never covered in the first place. The return moves to 'rejected', rejected_at is stamped, and the refusal is recorded either as one of the published refusal words or as a sentence somebody wrote about this one return. The order is untouched — the quantities still count as shipped and not returned, which is the point: a rejected return must leave the books exactly as they were. Rejection is final, and it says nothing about where the physical goods go. Nothing is booked onto the positions. 'resolution' is validated against the refusal words (wear_and_tear, not_returnable); 'reason' stays free text — a sentence about this one return rather than a value out of a set — and is what is stored when no resolution is named.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.rid - The return id (uuid). It must belong to the order in {id} — a return of another order is a 404, not a cross-order write.
     * @param {string} params.reason - Free-text fallback for 'resolution' — a sentence about this one return, not a value out of the set.
     * @param {OrderReturnRefusal} params.resolution - Why the return was refused.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturnsReject(params: { id: string, rid: string, reason?: string, resolution?: OrderReturnRefusal }): Promise<Models.OrderReturn>;
    /**
     * Close the case against the customer: the goods came back used, outside the window, or were never covered in the first place. The return moves to 'rejected', rejected_at is stamped, and the refusal is recorded either as one of the published refusal words or as a sentence somebody wrote about this one return. The order is untouched — the quantities still count as shipped and not returned, which is the point: a rejected return must leave the books exactly as they were. Rejection is final, and it says nothing about where the physical goods go. Nothing is booked onto the positions. 'resolution' is validated against the refusal words (wear_and_tear, not_returnable); 'reason' stays free text — a sentence about this one return rather than a value out of a set — and is what is stored when no resolution is named.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} rid - The return id (uuid). It must belong to the order in {id} — a return of another order is a 404, not a cross-order write.
     * @param {string} reason - Free-text fallback for 'resolution' — a sentence about this one return, not a value out of the set.
     * @param {OrderReturnRefusal} resolution - Why the return was refused.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnsReject(id: string, rid: string, reason?: string, resolution?: OrderReturnRefusal): Promise<Models.OrderReturn>;
    ordersReturnsReject(
        paramsOrFirst: { id: string, rid: string, reason?: string, resolution?: OrderReturnRefusal } | string,
        ...rest: [(string)?, (string)?, (OrderReturnRefusal)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, rid: string, reason?: string, resolution?: OrderReturnRefusal };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, rid: string, reason?: string, resolution?: OrderReturnRefusal };
        } else {
            params = {
                id: paramsOrFirst as string,
                rid: rest[0] as string,
                reason: rest[1] as string,
                resolution: rest[2] as OrderReturnRefusal            
            };
        }
        
        const id = params.id;
        const rid = params.rid;
        const reason = params.reason;
        const resolution = params.resolution;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof rid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rid"');
        }

        const apiPath = '/v1/orders/{id}/returns/{rid}/reject'.replace('{id}', id).replace('{rid}', rid);
        const apiPayload: Payload = {};
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof resolution !== 'undefined') {
            apiPayload['resolution'] = resolution;
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
     * Book goods out: which positions and how much of each, with the carrier and the tracking code that go to the customer. It draws a delivery-note number from the tenant's delivery range, books quantity_shipped onto every named position, re-derives the order's fulfillment_status from the arithmetic (unfulfilled → partial → fulfilled) and emits order.shipment.created. Omitting `positions` means everything still open, in full, which is the ordinary 'send the rest' case and the only one a UI without a line editor can express; the answer always names the quantities that actually went out. It does not print a label, buy postage or notify anybody — a shipping workflow reacts to the event. Whether a full shipment CLOSES the order is the tenant's call (setting auto_complete_on): 'shipment' completes it here, 'payment' leaves it in_fulfillment until payment_status becomes paid, 'manual' waits for orders.complete. The order.completed event follows the order, so it is only emitted when the order actually completed.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} params.carrier - Who is carrying it, in the merchant's own words. Free text — this app neither validates it nor knows the carrier's API.
     * @param {string} params.externalId - The key this shipment has in the system that issued it — the ERP's or the warehouse's handle on the delivery. `number` beside it is the DELIVERY NOTE number, which is what a customer asking after their parcel quotes; this is what a write-back addresses. Unique per tenant where set. Null for a shipment booked here. Send it when the delivery was issued elsewhere — `number` then carries that system's delivery-note number and this carries its key. A key another shipment of this tenant holds is a 409.
     * @param {object} params.externalRefs - Every OTHER system that knows this shipment, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer.
     * @param {object} params.metadata - Free-form data for the caller — the warehouse system's own reference for this handover. Stored and returned untouched.
     * @param {string} params.number - The DELIVERY NOTE number — drawn from the tenant's delivery range, unique per tenant, and a different series from the order number. A caller may supply its own when the number is issued by the warehouse system instead. Drawn from the 'delivery' range when omitted; supply one only when the number is issued elsewhere.
     * @param {Models.OrderShipmentPosition[]} params.positions - What this shipment carries. Omitted = every position with an open quantity, in full. GET /orders/{id}/shippable answers exactly the budget each one is guarded against.
     * @param {string} params.shippedAt - When the goods actually left. Defaults to now, and a caller may backdate it — a shipment booked on Monday for a Friday handover says Friday.
     * @param {object} params.sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it.
     * @param {string} params.sourceSyncedAt - When this shipment was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a shipment no source owns.
     * @param {string} params.trackingCode - The consignment number the carrier issued. Free text: every carrier formats it differently and this app stores whatever it is given.
     * @param {string} params.trackingUrl - Where a human can follow the parcel. Supplied by the caller — this app does not build it, because only the caller knows the carrier's tracking address.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderShipmentCreated>}
     */
    ordersShip(params: { id: string, carrier?: string, externalId?: string, externalRefs?: object, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, sourceData?: object, sourceSyncedAt?: string, trackingCode?: string, trackingUrl?: string }): Promise<Models.OrderShipmentCreated>;
    /**
     * Book goods out: which positions and how much of each, with the carrier and the tracking code that go to the customer. It draws a delivery-note number from the tenant's delivery range, books quantity_shipped onto every named position, re-derives the order's fulfillment_status from the arithmetic (unfulfilled → partial → fulfilled) and emits order.shipment.created. Omitting `positions` means everything still open, in full, which is the ordinary 'send the rest' case and the only one a UI without a line editor can express; the answer always names the quantities that actually went out. It does not print a label, buy postage or notify anybody — a shipping workflow reacts to the event. Whether a full shipment CLOSES the order is the tenant's call (setting auto_complete_on): 'shipment' completes it here, 'payment' leaves it in_fulfillment until payment_status becomes paid, 'manual' waits for orders.complete. The order.completed event follows the order, so it is only emitted when the order actually completed.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {string} carrier - Who is carrying it, in the merchant's own words. Free text — this app neither validates it nor knows the carrier's API.
     * @param {string} externalId - The key this shipment has in the system that issued it — the ERP's or the warehouse's handle on the delivery. `number` beside it is the DELIVERY NOTE number, which is what a customer asking after their parcel quotes; this is what a write-back addresses. Unique per tenant where set. Null for a shipment booked here. Send it when the delivery was issued elsewhere — `number` then carries that system's delivery-note number and this carries its key. A key another shipment of this tenant holds is a 409.
     * @param {object} externalRefs - Every OTHER system that knows this shipment, keyed by system name — a second ERP, a procurement platform, a portal. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document, so look the row up by `external_id` and read this off the answer.
     * @param {object} metadata - Free-form data for the caller — the warehouse system's own reference for this handover. Stored and returned untouched.
     * @param {string} number - The DELIVERY NOTE number — drawn from the tenant's delivery range, unique per tenant, and a different series from the order number. A caller may supply its own when the number is issued by the warehouse system instead. Drawn from the 'delivery' range when omitted; supply one only when the number is issued elsewhere.
     * @param {Models.OrderShipmentPosition[]} positions - What this shipment carries. Omitted = every position with an open quantity, in full. GET /orders/{id}/shippable answers exactly the budget each one is guarded against.
     * @param {string} shippedAt - When the goods actually left. Defaults to now, and a caller may backdate it — a shipment booked on Monday for a Friday handover says Friday.
     * @param {object} sourceData - What the source said about this row, kept as it said it: `{"system": …, "etag": …, "raw": {…}}`. The `etag` is what a write-back has to send back in `If-Match`, and there is nowhere else to keep it between two runs. `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost on the first edit. Nothing here reads it, and no transition clears it.
     * @param {string} sourceSyncedAt - When this shipment was last confirmed against its source. What a delta run asks for changes since, and what tells an operator that a feed has gone quiet — an edit made here does not touch it, because it says when the SOURCE was last seen, not when the row changed. Null for a shipment no source owns.
     * @param {string} trackingCode - The consignment number the carrier issued. Free text: every carrier formats it differently and this app stores whatever it is given.
     * @param {string} trackingUrl - Where a human can follow the parcel. Supplied by the caller — this app does not build it, because only the caller knows the carrier's tracking address.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderShipmentCreated>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersShip(id: string, carrier?: string, externalId?: string, externalRefs?: object, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, sourceData?: object, sourceSyncedAt?: string, trackingCode?: string, trackingUrl?: string): Promise<Models.OrderShipmentCreated>;
    ordersShip(
        paramsOrFirst: { id: string, carrier?: string, externalId?: string, externalRefs?: object, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, sourceData?: object, sourceSyncedAt?: string, trackingCode?: string, trackingUrl?: string } | string,
        ...rest: [(string)?, (string)?, (object)?, (object)?, (string)?, (Models.OrderShipmentPosition[])?, (string)?, (object)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.OrderShipmentCreated> {
        let params: { id: string, carrier?: string, externalId?: string, externalRefs?: object, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, sourceData?: object, sourceSyncedAt?: string, trackingCode?: string, trackingUrl?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, carrier?: string, externalId?: string, externalRefs?: object, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, sourceData?: object, sourceSyncedAt?: string, trackingCode?: string, trackingUrl?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                carrier: rest[0] as string,
                externalId: rest[1] as string,
                externalRefs: rest[2] as object,
                metadata: rest[3] as object,
                number: rest[4] as string,
                positions: rest[5] as Models.OrderShipmentPosition[],
                shippedAt: rest[6] as string,
                sourceData: rest[7] as object,
                sourceSyncedAt: rest[8] as string,
                trackingCode: rest[9] as string,
                trackingUrl: rest[10] as string            
            };
        }
        
        const id = params.id;
        const carrier = params.carrier;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const metadata = params.metadata;
        const number = params.number;
        const positions = params.positions;
        const shippedAt = params.shippedAt;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const trackingCode = params.trackingCode;
        const trackingUrl = params.trackingUrl;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/ship'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof positions !== 'undefined') {
            apiPayload['positions'] = Client.toWireKeys(positions, {"orderItemId":{"wire":"order_item_id","children":null}});
        }
        if (typeof shippedAt !== 'undefined') {
            apiPayload['shipped_at'] = shippedAt;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof trackingCode !== 'undefined') {
            apiPayload['tracking_code'] = trackingCode;
        }
        if (typeof trackingUrl !== 'undefined') {
            apiPayload['tracking_url'] = trackingUrl;
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
     * What a shipment dialog needs before it can offer anything: the open quantity per position, and one boolean saying whether a shipment would be accepted at all. Reach for it to fill a picking screen or to decide whether a 'create shipment' button is enabled, instead of subtracting the quantities client-side. It changes nothing and books nothing — it is the question POST /orders/{id}/ship answers with an action. The read half of orders.ship. The open quantity per position and the two guards (cancelled/completed order, hold) are the SAME code the ship route runs, so what this answers and what that accepts cannot drift — a client subtracting the quantities itself eventually offers a shipment the server refuses, or one it should have refused. 'shippable' is false with a 'blocked_reason' when the order is held, cancelled, completed, still pending approval or has nothing open. A discount placed as a position of its own is money, not goods, and is not listed.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderShippable>}
     */
    ordersShippable(params: { id: string }): Promise<Models.OrderShippable>;
    /**
     * What a shipment dialog needs before it can offer anything: the open quantity per position, and one boolean saying whether a shipment would be accepted at all. Reach for it to fill a picking screen or to decide whether a 'create shipment' button is enabled, instead of subtracting the quantities client-side. It changes nothing and books nothing — it is the question POST /orders/{id}/ship answers with an action. The read half of orders.ship. The open quantity per position and the two guards (cancelled/completed order, hold) are the SAME code the ship route runs, so what this answers and what that accepts cannot drift — a client subtracting the quantities itself eventually offers a shipment the server refuses, or one it should have refused. 'shippable' is false with a 'blocked_reason' when the order is held, cancelled, completed, still pending approval or has nothing open. A discount placed as a position of its own is money, not goods, and is not listed.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderShippable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersShippable(id: string): Promise<Models.OrderShippable>;
    ordersShippable(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrderShippable> {
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

        const apiPath = '/v1/orders/{id}/shippable'.replace('{id}', id);
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
     * The whole of the release: the flag comes off, the reason is cleared, and an order.unheld event says the order may move again. Whatever the hold was blocking — shipping, and cancellation on tenants configured that way — is accepted from this call on. It restores nothing else and skips nothing: the order continues from exactly the status and quantities it had when it was held, and any shipping that was due meanwhile still has to be done by hand. An order that is not on hold answers 422 rather than pretending to release one, so this is safe to give to a worklist and not to a loop that calls it blindly.
     *
     * @param {string} params.id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersUnhold(params: { id: string, data: object }): Promise<Models.Order>;
    /**
     * The whole of the release: the flag comes off, the reason is cleared, and an order.unheld event says the order may move again. Whatever the hold was blocking — shipping, and cancellation on tenants configured that way — is accepted from this call on. It restores nothing else and skips nothing: the order continues from exactly the status and quantities it had when it was held, and any shipping that was due meanwhile still has to be done by hand. An order that is not on hold answers 422 rather than pretending to release one, so this is safe to give to a worklist and not to a loop that calls it blindly.
     *
     * @param {string} id - The order id (uuid). This segment reaches a uuid column: an order NUMBER is not accepted here — filter GET /orders by ?number= to resolve one.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersUnhold(id: string, data: object): Promise<Models.Order>;
    ordersUnhold(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Order> {
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

        const apiPath = '/v1/orders/{id}/unhold'.replace('{id}', id);
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
}
