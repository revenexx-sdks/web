import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PaymentStatus } from '../enums/payment-status';
import { PaymentMethodKind } from '../enums/payment-method-kind';
import { PaymentDunningStage } from '../enums/payment-dunning-stage';
import { PaymentsVocabulariesGetName } from '../enums/payments-vocabularies-get-name';

export class PaymentsLedger {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The ledger, paged and filtered — the Payments screen, the reconciliation query and the way an order or a cart finds out what has been paid against it. Every column of the entity is an exact-match filter, which is what makes it useful: `?cart_id=` and `?contact_id=` are indexed, `?status=authorized&kind=self_managed` is the awaiting-payment queue the dunning scan classifies, and `?order_ref=` is the only way to resolve a payment by its external reference. Rows come back in the database's own order, so a newest-first list needs `?order=created_at.desc`. `error_message` is answered from the failure taxonomy rather than echoed out of the column, so what a driver or a PSP actually wrote is never serialized here. On a buyer's own call the list holds that buyer's payments only, and a `contact_id` naming anyone else answers 400 `buyer_mismatch`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @param {string} params.cartId - The cart a payment pays for. Indexed.
     * @param {string} params.contactId - The paying customer contact. Indexed.
     * @param {string} params.orderId - The order a payment is for, as the orders app knows it. Indexed — this is how an order finds what has been paid against it.
     * @param {PaymentStatus} params.status - Restrict to one lifecycle state. Indexed.
     * @param {string} params.orderRef - Exact external order reference.
     * @param {string} params.methodCode - Exact code of the method the payment was made with.
     * @param {PaymentMethodKind} params.kind - Restrict to self-managed or PSP-backed payments.
     * @param {string} params.provider - Exact PSP code.
     * @param {PaymentDunningStage} params.dunningStage - Restrict to one dunning stage — what the daily scan wrote.
     * @param {string} params.idempotencyKey - Exact idempotency key. Unique per tenant, so this answers at most one row.
     * @param {string} params.externalId - Exact key of the system that booked the payment — the ERP's document number, not the provider's own transaction id. This is the reconciliation lookup. Not unique: a payment cannot be updated here, so several rows may legitimately carry one key, and this may answer more than one.
     * @param {string} params.sourceSyncedAt - Exact instant a payment was last confirmed against its source. The index behind it is what makes a delta run cheap, and a delta run SORTS (`?order=source_synced_at.desc`) rather than naming one instant — `external_refs` and `source_data` carry no parameter at all, because such a column is compared as a whole document.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsList(params?: { limit?: number, offset?: number, order?: string, cartId?: string, contactId?: string, orderId?: string, status?: PaymentStatus, orderRef?: string, methodCode?: string, kind?: PaymentMethodKind, provider?: string, dunningStage?: PaymentDunningStage, idempotencyKey?: string, externalId?: string, sourceSyncedAt?: string }): Promise<{}>;
    /**
     * The ledger, paged and filtered — the Payments screen, the reconciliation query and the way an order or a cart finds out what has been paid against it. Every column of the entity is an exact-match filter, which is what makes it useful: `?cart_id=` and `?contact_id=` are indexed, `?status=authorized&kind=self_managed` is the awaiting-payment queue the dunning scan classifies, and `?order_ref=` is the only way to resolve a payment by its external reference. Rows come back in the database's own order, so a newest-first list needs `?order=created_at.desc`. `error_message` is answered from the failure taxonomy rather than echoed out of the column, so what a driver or a PSP actually wrote is never serialized here. On a buyer's own call the list holds that buyer's payments only, and a `contact_id` naming anyone else answers 400 `buyer_mismatch`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @param {string} cartId - The cart a payment pays for. Indexed.
     * @param {string} contactId - The paying customer contact. Indexed.
     * @param {string} orderId - The order a payment is for, as the orders app knows it. Indexed — this is how an order finds what has been paid against it.
     * @param {PaymentStatus} status - Restrict to one lifecycle state. Indexed.
     * @param {string} orderRef - Exact external order reference.
     * @param {string} methodCode - Exact code of the method the payment was made with.
     * @param {PaymentMethodKind} kind - Restrict to self-managed or PSP-backed payments.
     * @param {string} provider - Exact PSP code.
     * @param {PaymentDunningStage} dunningStage - Restrict to one dunning stage — what the daily scan wrote.
     * @param {string} idempotencyKey - Exact idempotency key. Unique per tenant, so this answers at most one row.
     * @param {string} externalId - Exact key of the system that booked the payment — the ERP's document number, not the provider's own transaction id. This is the reconciliation lookup. Not unique: a payment cannot be updated here, so several rows may legitimately carry one key, and this may answer more than one.
     * @param {string} sourceSyncedAt - Exact instant a payment was last confirmed against its source. The index behind it is what makes a delta run cheap, and a delta run SORTS (`?order=source_synced_at.desc`) rather than naming one instant — `external_refs` and `source_data` carry no parameter at all, because such a column is compared as a whole document.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsList(limit?: number, offset?: number, order?: string, cartId?: string, contactId?: string, orderId?: string, status?: PaymentStatus, orderRef?: string, methodCode?: string, kind?: PaymentMethodKind, provider?: string, dunningStage?: PaymentDunningStage, idempotencyKey?: string, externalId?: string, sourceSyncedAt?: string): Promise<{}>;
    paymentsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, cartId?: string, contactId?: string, orderId?: string, status?: PaymentStatus, orderRef?: string, methodCode?: string, kind?: PaymentMethodKind, provider?: string, dunningStage?: PaymentDunningStage, idempotencyKey?: string, externalId?: string, sourceSyncedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (PaymentStatus)?, (string)?, (string)?, (PaymentMethodKind)?, (string)?, (PaymentDunningStage)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, cartId?: string, contactId?: string, orderId?: string, status?: PaymentStatus, orderRef?: string, methodCode?: string, kind?: PaymentMethodKind, provider?: string, dunningStage?: PaymentDunningStage, idempotencyKey?: string, externalId?: string, sourceSyncedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, cartId?: string, contactId?: string, orderId?: string, status?: PaymentStatus, orderRef?: string, methodCode?: string, kind?: PaymentMethodKind, provider?: string, dunningStage?: PaymentDunningStage, idempotencyKey?: string, externalId?: string, sourceSyncedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                cartId: rest[2] as string,
                contactId: rest[3] as string,
                orderId: rest[4] as string,
                status: rest[5] as PaymentStatus,
                orderRef: rest[6] as string,
                methodCode: rest[7] as string,
                kind: rest[8] as PaymentMethodKind,
                provider: rest[9] as string,
                dunningStage: rest[10] as PaymentDunningStage,
                idempotencyKey: rest[11] as string,
                externalId: rest[12] as string,
                sourceSyncedAt: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const orderId = params.orderId;
        const status = params.status;
        const orderRef = params.orderRef;
        const methodCode = params.methodCode;
        const kind = params.kind;
        const provider = params.provider;
        const dunningStage = params.dunningStage;
        const idempotencyKey = params.idempotencyKey;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;


        const apiPath = '/v1/payments';
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
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof methodCode !== 'undefined') {
            apiPayload['method_code'] = methodCode;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof dunningStage !== 'undefined') {
            apiPayload['dunning_stage'] = dunningStage;
        }
        if (typeof idempotencyKey !== 'undefined') {
            apiPayload['idempotency_key'] = idempotencyKey;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
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
     * The checkout's write: it opens the ledger row and takes it as far as the named method allows, in one call. A create cannot omit `method_code` and `amount`; every other column is optional or defaulted by the database. Nothing else about the money is the caller's to choose: `kind`, `provider` and `fee_amount` are read off the method that `method_code` names, so a caller can neither pick an acquirer nor discount its own fee. `amount: 0` is legal (free orders); negative is 400. Eligibility is enforced HERE and not only in the checkout UI — the same country and order-value rules POST /payments/methods/eligible applies answer 422 if the method does not apply to this buyer. What comes back depends on the method: a self-managed one (invoice, prepayment) is `authorized` at once with the dunning clock already started, and a PSP one is `captured` or `authorized`, or `requires_action` with `next_action` — the instruction the storefront must carry out, typically a redirect, set at that status and at no other. Send an `idempotency_key` and a repeat of the same call answers 200 with the payment that key already named, unchanged and not re-authorized; the same key with another method, amount or currency is 409 `idempotency_key_reused`. On a buyer's own call — the gateway resolved a contact — only the checkout's routes answer (eligibility, creating and confirming a payment, the buyer's own payments, vocabularies, catalog, logos); every other route answers 403 `buyer_not_permitted`. What is never stored: the `instrument`, `token` or `card` is handed to the driver in-process and no token or PAN is written to the row.
     *
     * @param {number} params.amount - What the provider is asked to authorize, in `currency`. 0 is legal (a free order) and negative is refused by the handler and by the CHECK behind it. `fee_amount` is recorded beside this and is NOT added to it — a checkout that charges its payment surcharge sends a total that already includes it.
     * @param {string} params.methodCode - The `code` of the payment method this payment was made with, copied at creation. Deliberately a code and not a foreign key: the ledger records what happened and has to outlive the configuration it happened under. It must name a method this tenant has configured; eligibility for the buyer context below is re-checked here, whatever the checkout showed.
     * @param {string} params.cartId - The cart this payment pays for. Not a foreign key: the payment is a record of what happened and outlives the cart. Indexed, so it is the cheap way to find the payment behind a checkout.
     * @param {string} params.contactId - The paying customer contact. Not a foreign key — a payment must survive a contact being merged or erased. Indexed.
     * @param {string} params.country - The buyer's ISO 3166-1 alpha-2 country code, for the eligibility check. A method restricted to countries is refused with 422 without it.
     * @param {string} params.currency - ISO 4217 code the amount and the fee are in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR.
     * @param {string} params.externalId - The key this payment has in the system that BOOKED it — the ERP's own document number for the receipt. A different thing from `psp_payment_id`, which is the provider's own transaction id: one payment is known to two systems and this is the merchant's side of that pair, which is what makes a reconciliation run possible at all. Free text, nullable, and deliberately NOT unique — a payment cannot be updated here, so there is no upsert for a uniqueness rule to serve, and an import that must not book twice sends its key as `idempotency_key` too and gets the same payment back with 200. null for a payment a checkout made, which is the ordinary case.
     * @param {object} params.externalRefs - Every OTHER system that knows this payment, keyed by system name — a second ERP, a bank statement reference, a dunning platform. `external_id` is the leading system and `psp_payment_id` is the provider's own; this is the rest. Free jsonb: the database constrains neither the keys nor the values. Not a query parameter — such a column is compared as a WHOLE document, so a filter over part of one is refused rather than answered.
     * @param {string} params.idempotencyKey - The caller's own key for this creation attempt. Sending it again answers the SAME payment with 200 instead of creating a second one — which is what makes a retried checkout safe. Unique per tenant, so a filter on it answers at most one row. The replay answers 200, not 201.
     * @param {object} params.metadata - Free-form data to keep on the payment. Merged with the keys this app writes itself (`provider_method`, `return_url`, later the cancel/refund reasons), which win on a collision.
     * @param {string} params.orderId - The order this payment is for, as the orders app knows it (its uuid). Optional. When it is sent, the payment is checked against the order before anything is written: its currency must be the order's (409 `currency_mismatch`), and together with every payment of the order that is created, requires_action, authorized or captured it must not exceed the order's `grand_total` (409 `amount_exceeds_order`) — several payments per order are fine. A `cancelled` order takes no payment (409 `order_not_payable`); every other order status passes. An order that does not exist is 400 `unknown_order`; an orders app that cannot be asked is 502 `orders_unavailable` and nothing is created. On a buyer's own call the order must be the buyer's (400 `buyer_mismatch`). Left out, the payment is accepted unchecked, as before 1.0 — a purchase under approval has no order yet.
     * @param {string} params.orderRef - The external order reference the checkout wrote onto the payment. It is what POST /payments/orders/{order_ref}/capture resolves and the fallback key a PSP webhook is matched on when it carries no transaction id — so an integration that leaves it null gives up both. Free text with no uniqueness: several payments may share one reference.
     * @param {string} params.returnUrl - Where the PSP sends the buyer back after a redirect or a 3-D Secure challenge. Kept in `metadata.return_url` and handed to the driver — a PSP method that needs a redirect and has none leaves the buyer stranded at the provider.
     * @param {object} params.sourceData - What the source said about this payment, kept as it said it. `system` names it, `etag` is the token an `If-Match` write-back has to hand back — there is nowhere else to keep it between two runs — and `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost. Free jsonb; nothing here is read by this app.
     * @param {string} params.sourceSyncedAt - When this payment was last confirmed against the system that booked it. What a delta run asks for changes since, and what tells an operator a feed has gone quiet — a capture or a refund does not touch it, because it says when the SOURCE was last seen and not when the row moved. Indexed, and null for a payment no source owns.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsCreate(params: { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, externalId?: string, externalRefs?: object, idempotencyKey?: string, metadata?: object, orderId?: string, orderRef?: string, returnUrl?: string, sourceData?: object, sourceSyncedAt?: string }): Promise<Models.Payment>;
    /**
     * The checkout's write: it opens the ledger row and takes it as far as the named method allows, in one call. A create cannot omit `method_code` and `amount`; every other column is optional or defaulted by the database. Nothing else about the money is the caller's to choose: `kind`, `provider` and `fee_amount` are read off the method that `method_code` names, so a caller can neither pick an acquirer nor discount its own fee. `amount: 0` is legal (free orders); negative is 400. Eligibility is enforced HERE and not only in the checkout UI — the same country and order-value rules POST /payments/methods/eligible applies answer 422 if the method does not apply to this buyer. What comes back depends on the method: a self-managed one (invoice, prepayment) is `authorized` at once with the dunning clock already started, and a PSP one is `captured` or `authorized`, or `requires_action` with `next_action` — the instruction the storefront must carry out, typically a redirect, set at that status and at no other. Send an `idempotency_key` and a repeat of the same call answers 200 with the payment that key already named, unchanged and not re-authorized; the same key with another method, amount or currency is 409 `idempotency_key_reused`. On a buyer's own call — the gateway resolved a contact — only the checkout's routes answer (eligibility, creating and confirming a payment, the buyer's own payments, vocabularies, catalog, logos); every other route answers 403 `buyer_not_permitted`. What is never stored: the `instrument`, `token` or `card` is handed to the driver in-process and no token or PAN is written to the row.
     *
     * @param {number} amount - What the provider is asked to authorize, in `currency`. 0 is legal (a free order) and negative is refused by the handler and by the CHECK behind it. `fee_amount` is recorded beside this and is NOT added to it — a checkout that charges its payment surcharge sends a total that already includes it.
     * @param {string} methodCode - The `code` of the payment method this payment was made with, copied at creation. Deliberately a code and not a foreign key: the ledger records what happened and has to outlive the configuration it happened under. It must name a method this tenant has configured; eligibility for the buyer context below is re-checked here, whatever the checkout showed.
     * @param {string} cartId - The cart this payment pays for. Not a foreign key: the payment is a record of what happened and outlives the cart. Indexed, so it is the cheap way to find the payment behind a checkout.
     * @param {string} contactId - The paying customer contact. Not a foreign key — a payment must survive a contact being merged or erased. Indexed.
     * @param {string} country - The buyer's ISO 3166-1 alpha-2 country code, for the eligibility check. A method restricted to countries is refused with 422 without it.
     * @param {string} currency - ISO 4217 code the amount and the fee are in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR.
     * @param {string} externalId - The key this payment has in the system that BOOKED it — the ERP's own document number for the receipt. A different thing from `psp_payment_id`, which is the provider's own transaction id: one payment is known to two systems and this is the merchant's side of that pair, which is what makes a reconciliation run possible at all. Free text, nullable, and deliberately NOT unique — a payment cannot be updated here, so there is no upsert for a uniqueness rule to serve, and an import that must not book twice sends its key as `idempotency_key` too and gets the same payment back with 200. null for a payment a checkout made, which is the ordinary case.
     * @param {object} externalRefs - Every OTHER system that knows this payment, keyed by system name — a second ERP, a bank statement reference, a dunning platform. `external_id` is the leading system and `psp_payment_id` is the provider's own; this is the rest. Free jsonb: the database constrains neither the keys nor the values. Not a query parameter — such a column is compared as a WHOLE document, so a filter over part of one is refused rather than answered.
     * @param {string} idempotencyKey - The caller's own key for this creation attempt. Sending it again answers the SAME payment with 200 instead of creating a second one — which is what makes a retried checkout safe. Unique per tenant, so a filter on it answers at most one row. The replay answers 200, not 201.
     * @param {object} metadata - Free-form data to keep on the payment. Merged with the keys this app writes itself (`provider_method`, `return_url`, later the cancel/refund reasons), which win on a collision.
     * @param {string} orderId - The order this payment is for, as the orders app knows it (its uuid). Optional. When it is sent, the payment is checked against the order before anything is written: its currency must be the order's (409 `currency_mismatch`), and together with every payment of the order that is created, requires_action, authorized or captured it must not exceed the order's `grand_total` (409 `amount_exceeds_order`) — several payments per order are fine. A `cancelled` order takes no payment (409 `order_not_payable`); every other order status passes. An order that does not exist is 400 `unknown_order`; an orders app that cannot be asked is 502 `orders_unavailable` and nothing is created. On a buyer's own call the order must be the buyer's (400 `buyer_mismatch`). Left out, the payment is accepted unchecked, as before 1.0 — a purchase under approval has no order yet.
     * @param {string} orderRef - The external order reference the checkout wrote onto the payment. It is what POST /payments/orders/{order_ref}/capture resolves and the fallback key a PSP webhook is matched on when it carries no transaction id — so an integration that leaves it null gives up both. Free text with no uniqueness: several payments may share one reference.
     * @param {string} returnUrl - Where the PSP sends the buyer back after a redirect or a 3-D Secure challenge. Kept in `metadata.return_url` and handed to the driver — a PSP method that needs a redirect and has none leaves the buyer stranded at the provider.
     * @param {object} sourceData - What the source said about this payment, kept as it said it. `system` names it, `etag` is the token an `If-Match` write-back has to hand back — there is nowhere else to keep it between two runs — and `raw` holds the source fields this app does not model, so they survive a round trip instead of being lost. Free jsonb; nothing here is read by this app.
     * @param {string} sourceSyncedAt - When this payment was last confirmed against the system that booked it. What a delta run asks for changes since, and what tells an operator a feed has gone quiet — a capture or a refund does not touch it, because it says when the SOURCE was last seen and not when the row moved. Indexed, and null for a payment no source owns.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCreate(amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, externalId?: string, externalRefs?: object, idempotencyKey?: string, metadata?: object, orderId?: string, orderRef?: string, returnUrl?: string, sourceData?: object, sourceSyncedAt?: string): Promise<Models.Payment>;
    paymentsCreate(
        paramsOrFirst: { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, externalId?: string, externalRefs?: object, idempotencyKey?: string, metadata?: object, orderId?: string, orderRef?: string, returnUrl?: string, sourceData?: object, sourceSyncedAt?: string } | number,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (object)?, (string)?, (string)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.Payment> {
        let params: { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, externalId?: string, externalRefs?: object, idempotencyKey?: string, metadata?: object, orderId?: string, orderRef?: string, returnUrl?: string, sourceData?: object, sourceSyncedAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, externalId?: string, externalRefs?: object, idempotencyKey?: string, metadata?: object, orderId?: string, orderRef?: string, returnUrl?: string, sourceData?: object, sourceSyncedAt?: string };
        } else {
            params = {
                amount: paramsOrFirst as number,
                methodCode: rest[0] as string,
                cartId: rest[1] as string,
                contactId: rest[2] as string,
                country: rest[3] as string,
                currency: rest[4] as string,
                externalId: rest[5] as string,
                externalRefs: rest[6] as object,
                idempotencyKey: rest[7] as string,
                metadata: rest[8] as object,
                orderId: rest[9] as string,
                orderRef: rest[10] as string,
                returnUrl: rest[11] as string,
                sourceData: rest[12] as object,
                sourceSyncedAt: rest[13] as string            
            };
        }
        
        const amount = params.amount;
        const methodCode = params.methodCode;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const country = params.country;
        const currency = params.currency;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const idempotencyKey = params.idempotencyKey;
        const metadata = params.metadata;
        const orderId = params.orderId;
        const orderRef = params.orderRef;
        const returnUrl = params.returnUrl;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;

        if (typeof amount === 'undefined') {
            throw new RevenexxException('Missing required parameter: "amount"');
        }
        if (typeof methodCode === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodCode"');
        }

        const apiPath = '/v1/payments';
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
        }
        if (typeof idempotencyKey !== 'undefined') {
            apiPayload['idempotency_key'] = idempotencyKey;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof methodCode !== 'undefined') {
            apiPayload['method_code'] = methodCode;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof returnUrl !== 'undefined') {
            apiPayload['return_url'] = returnUrl;
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
     * Classifies every unpaid self-managed payment (invoice, prepayment) as on time / reminder due / overdue from payment_reminder_after_days and overdue_after_days, writes the stage and the next due date, and reports PSP payments still waiting on a callback longer than webhook_stale_after_minutes. Pure function of each payment's age, so it is idempotent — it also runs daily as the 'dunning-scan' schedule. It classifies and does not send: a stage change emits payment.updated, and what a reminder looks like is the merchant's workflow.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsDunningScan(): Promise<{}> {

        const apiPath = '/v1/payments/dunning/scan';
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
     * Rows written before the failure taxonomy still store the provider's/runtime's raw text in error_message. API responses never repeat it (the read path projects), but the column is also read directly through Baseline, so it needs rewriting once per tenant. Dry-run by default — reports what it would touch and changes nothing until apply:true. Idempotent: rows already carrying a taxonomy message are skipped.
     *
     * @param {boolean} params.apply - Write the reclassified values. Defaults to false, which reports what WOULD change and touches nothing.
     * @param {number} params.limit - How many payments to scan, oldest first. Defaults to 500, capped at 5000 — a tenant with more pre-taxonomy rows needs several runs, and re-running is free.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsErrorsRedact(params?: { apply?: boolean, limit?: number }): Promise<{}>;
    /**
     * Rows written before the failure taxonomy still store the provider's/runtime's raw text in error_message. API responses never repeat it (the read path projects), but the column is also read directly through Baseline, so it needs rewriting once per tenant. Dry-run by default — reports what it would touch and changes nothing until apply:true. Idempotent: rows already carrying a taxonomy message are skipped.
     *
     * @param {boolean} apply - Write the reclassified values. Defaults to false, which reports what WOULD change and touches nothing.
     * @param {number} limit - How many payments to scan, oldest first. Defaults to 500, capped at 5000 — a tenant with more pre-taxonomy rows needs several runs, and re-running is free.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsErrorsRedact(apply?: boolean, limit?: number): Promise<{}>;
    paymentsErrorsRedact(
        paramsOrFirst?: { apply?: boolean, limit?: number } | boolean,
        ...rest: [(number)?]    
    ): Promise<{}> {
        let params: { apply?: boolean, limit?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { apply?: boolean, limit?: number };
        } else {
            params = {
                apply: paramsOrFirst as boolean,
                limit: rest[0] as number            
            };
        }
        
        const apply = params.apply;
        const limit = params.limit;


        const apiPath = '/v1/payments/errors/redact';
        const apiPayload: Payload = {};
        if (typeof apply !== 'undefined') {
            apiPayload['apply'] = apply;
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
     * This is the hook the tenant's `auto_capture_policy: 'on_ship'` was written for: fulfilment knows the order it shipped and not the payment ids behind it, so the shipment calls this one route with the reference it already holds and the money for that order is collected in a single request. Resolves payments by their order_ref (the same key the PSP webhooks fall back to), captures every authorized one and reports the rest instead of failing — an order whose payment was already captured is a successful no-op, and a provider that refuses one payment lands in `skipped` rather than failing the call. Note that payments.order_ref is nullable with no foreign key: this route is exactly as good as the reference the checkout writes onto the payment.
     *
     * @param {string} params.orderRef - The external order reference the checkout wrote onto the payment, trimmed before it is resolved. Free text — the example is an invented shape, not a reference any tenant holds, and one no payment carries answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsOrdersCapture(params: { orderRef: string }): Promise<{}>;
    /**
     * This is the hook the tenant's `auto_capture_policy: 'on_ship'` was written for: fulfilment knows the order it shipped and not the payment ids behind it, so the shipment calls this one route with the reference it already holds and the money for that order is collected in a single request. Resolves payments by their order_ref (the same key the PSP webhooks fall back to), captures every authorized one and reports the rest instead of failing — an order whose payment was already captured is a successful no-op, and a provider that refuses one payment lands in `skipped` rather than failing the call. Note that payments.order_ref is nullable with no foreign key: this route is exactly as good as the reference the checkout writes onto the payment.
     *
     * @param {string} orderRef - The external order reference the checkout wrote onto the payment, trimmed before it is resolved. Free text — the example is an invented shape, not a reference any tenant holds, and one no payment carries answers 404.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsOrdersCapture(orderRef: string): Promise<{}>;
    paymentsOrdersCapture(
        paramsOrFirst: { orderRef: string } | string    
    ): Promise<{}> {
        let params: { orderRef: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { orderRef: string };
        } else {
            params = {
                orderRef: paramsOrFirst as string            
            };
        }
        
        const orderRef = params.orderRef;

        if (typeof orderRef === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderRef"');
        }

        const apiPath = '/v1/payments/orders/{order_ref}/capture'.replace('{order_ref}', orderRef);
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
     * The enums this app owns, four of them: statuses, method kinds, fee types and dunning stages. This is the index and carries a name and a title per set and nothing more — the values themselves, with their labels and badge tones, are one call further down at GET /payments/vocabularies/{name}, so a client that only needs to know which sets exist does not pay for all of them. Values come out of the CHECK constraints, so what is served is what the database enforces — a client renders a status this app adds without a release of its own.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsVocabulariesList(): Promise<{}> {

        const apiPath = '/v1/payments/vocabularies';
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
     * One set in full: every value it permits, the label to show for each and the badge tone to render it in, which is what a client needs to draw a status chip without hard-coding this app's enums. The value set is parsed out of the CHECK constraint in schema.json, so what is served IS what the database enforces. Labels are curated on top and can only add words and colour — a permitted value nobody labelled still appears, titled from its own key, which is why `title` and `description` are a locale map on a labelled value and a plain string on an unlabelled one.
     *
     * @param {PaymentsVocabulariesGetName} params.name - Which vocabulary to read. The set is closed: GET /payments/vocabularies lists exactly these.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentVocabulary>}
     */
    paymentsVocabulariesGet(params: { name: PaymentsVocabulariesGetName }): Promise<Models.PaymentVocabulary>;
    /**
     * One set in full: every value it permits, the label to show for each and the badge tone to render it in, which is what a client needs to draw a status chip without hard-coding this app's enums. The value set is parsed out of the CHECK constraint in schema.json, so what is served IS what the database enforces. Labels are curated on top and can only add words and colour — a permitted value nobody labelled still appears, titled from its own key, which is why `title` and `description` are a locale map on a labelled value and a plain string on an unlabelled one.
     *
     * @param {PaymentsVocabulariesGetName} name - Which vocabulary to read. The set is closed: GET /payments/vocabularies lists exactly these.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsVocabulariesGet(name: PaymentsVocabulariesGetName): Promise<Models.PaymentVocabulary>;
    paymentsVocabulariesGet(
        paramsOrFirst: { name: PaymentsVocabulariesGetName } | PaymentsVocabulariesGetName    
    ): Promise<Models.PaymentVocabulary> {
        let params: { name: PaymentsVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: PaymentsVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as PaymentsVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/payments/vocabularies/{name}'.replace('{name}', name);
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
     * The sink a PSP callback ends up in, and an inbound ingress endpoint in the sense of ADR-0066: the provider never posts here directly, it posts to webhooks.revenexx.com, which verifies and captures the delivery and dispatches its envelope to this route through the gateway. That indirection is also what makes this the one override point for PSP callback handling — everything a callback does to the ledger happens here and nowhere else, so a deployment that needs a provider's callbacks normalized differently replaces this operation instead of touching the lifecycle routes. Consumes the dispatch envelope from webhooks.revenexx.com: normalizes the provider callback (stripe payment intents + a generic shape), resolves the payment by psp_payment_id or order_ref and moves the ledger. Facts only move forward — provider retries and redeliveries are idempotent no-ops; unverified envelopes are refused.
     *
     * @param {string} params.provider - The catalog provider code whose callback shape to normalize. Anything the normalizer does not recognise is read as the generic {event, psp_payment_id?, order_ref?, error?} envelope rather than refused.
     * @param {any} params.id - The dispatcher's delivery id. Echoed back as `delivery_id` so a delivery and what the ledger did can be correlated.
     * @param {object} params.request - The captured HTTP request as the PSP sent it.
     * @param {any} params.verified - Whether the ingress verified the callback signature against the provider's `webhook_secret`. Only `true` is applied; false, missing or anything else is refused with 422: an endpoint may run in annotate mode, and the ledger stays sovereign over one that does.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsWebhooksIngest(params: { provider: string, id?: any, request?: object, verified?: any }): Promise<{}>;
    /**
     * The sink a PSP callback ends up in, and an inbound ingress endpoint in the sense of ADR-0066: the provider never posts here directly, it posts to webhooks.revenexx.com, which verifies and captures the delivery and dispatches its envelope to this route through the gateway. That indirection is also what makes this the one override point for PSP callback handling — everything a callback does to the ledger happens here and nowhere else, so a deployment that needs a provider's callbacks normalized differently replaces this operation instead of touching the lifecycle routes. Consumes the dispatch envelope from webhooks.revenexx.com: normalizes the provider callback (stripe payment intents + a generic shape), resolves the payment by psp_payment_id or order_ref and moves the ledger. Facts only move forward — provider retries and redeliveries are idempotent no-ops; unverified envelopes are refused.
     *
     * @param {string} provider - The catalog provider code whose callback shape to normalize. Anything the normalizer does not recognise is read as the generic {event, psp_payment_id?, order_ref?, error?} envelope rather than refused.
     * @param {any} id - The dispatcher's delivery id. Echoed back as `delivery_id` so a delivery and what the ledger did can be correlated.
     * @param {object} request - The captured HTTP request as the PSP sent it.
     * @param {any} verified - Whether the ingress verified the callback signature against the provider's `webhook_secret`. Only `true` is applied; false, missing or anything else is refused with 422: an endpoint may run in annotate mode, and the ledger stays sovereign over one that does.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsWebhooksIngest(provider: string, id?: any, request?: object, verified?: any): Promise<{}>;
    paymentsWebhooksIngest(
        paramsOrFirst: { provider: string, id?: any, request?: object, verified?: any } | string,
        ...rest: [(any)?, (object)?, (any)?]    
    ): Promise<{}> {
        let params: { provider: string, id?: any, request?: object, verified?: any };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { provider: string, id?: any, request?: object, verified?: any };
        } else {
            params = {
                provider: paramsOrFirst as string,
                id: rest[0] as any,
                request: rest[1] as object,
                verified: rest[2] as any            
            };
        }
        
        const provider = params.provider;
        const id = params.id;
        const request = params.request;
        const verified = params.verified;

        if (typeof provider === 'undefined') {
            throw new RevenexxException('Missing required parameter: "provider"');
        }

        const apiPath = '/v1/payments/webhooks/{provider}'.replace('{provider}', provider);
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof request !== 'undefined') {
            apiPayload['request'] = request;
        }
        if (typeof verified !== 'undefined') {
            apiPayload['verified'] = verified;
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
     * One ledger row in full: the amount and the fee that were computed at creation, the method code and PSP it was made through, where it stands in the lifecycle, the timestamp of each transition it has been through (`authorized_at`, `captured_at`, `failed_at`, `refunded_at`), the dunning columns the daily scan maintains and, while the buyer still has something to do, `next_action`. This is the call to poll after sending a buyer to a PSP redirect. Two things it does not do: `error_message` is answered from the failure taxonomy and never carries the provider's or the runtime's own words, and there is no route that resolves a payment by `order_ref` — that column is nullable and not unique, so it is a filter on the list (`GET /payments?order_ref=…`) which may legitimately answer several rows. On a buyer's own call a payment of another contact answers 404.
     *
     * @param {string} params.id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsGet(params: { id: string }): Promise<Models.Payment>;
    /**
     * One ledger row in full: the amount and the fee that were computed at creation, the method code and PSP it was made through, where it stands in the lifecycle, the timestamp of each transition it has been through (`authorized_at`, `captured_at`, `failed_at`, `refunded_at`), the dunning columns the daily scan maintains and, while the buyer still has something to do, `next_action`. This is the call to poll after sending a buyer to a PSP redirect. Two things it does not do: `error_message` is answered from the failure taxonomy and never carries the provider's or the runtime's own words, and there is no route that resolves a payment by `order_ref` — that column is nullable and not unique, so it is a filter on the list (`GET /payments?order_ref=…`) which may legitimately answer several rows. On a buyer's own call a payment of another contact answers 404.
     *
     * @param {string} id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsGet(id: string): Promise<Models.Payment>;
    paymentsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}'.replace('{id}', id);
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
     * Drops the claim before any money has been taken — the abandoned basket, the buyer who never came back from the redirect, the invoice an operator writes off. It is the only transition that starts from three statuses rather than one, because everything short of captured can still be released. A captured payment is not cancellable at all: that is a refund, and the lattice answers 400 rather than pretending. Unlike capture and refund this transition has no time window — the merchant's `capture_expiry_days` and `refund_window_days` do not apply, so a stale authorization can always be released even once it is too old to collect. On a PSP payment the provider is called and the `reason` in the body is passed to it, so it reaches the PSP's own cancellation-reason field as well as being stored under `metadata.cancel_reason`. Cancelling stops the dunning clock: the stage goes back to `none` and the due date is cleared.
     *
     * @param {string} params.id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {string} params.reason - The operator's own words for why. Kept on the payment (`metadata.cancel_reason` / `metadata.refund_reason`) AND handed to the provider's own cancellation or refund reason field, so it is readable in the PSP's dashboard too. Trimmed and cut at 500 characters.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsCancel(params: { id: string, reason?: string }): Promise<Models.Payment>;
    /**
     * Drops the claim before any money has been taken — the abandoned basket, the buyer who never came back from the redirect, the invoice an operator writes off. It is the only transition that starts from three statuses rather than one, because everything short of captured can still be released. A captured payment is not cancellable at all: that is a refund, and the lattice answers 400 rather than pretending. Unlike capture and refund this transition has no time window — the merchant's `capture_expiry_days` and `refund_window_days` do not apply, so a stale authorization can always be released even once it is too old to collect. On a PSP payment the provider is called and the `reason` in the body is passed to it, so it reaches the PSP's own cancellation-reason field as well as being stored under `metadata.cancel_reason`. Cancelling stops the dunning clock: the stage goes back to `none` and the due date is cleared.
     *
     * @param {string} id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {string} reason - The operator's own words for why. Kept on the payment (`metadata.cancel_reason` / `metadata.refund_reason`) AND handed to the provider's own cancellation or refund reason field, so it is readable in the PSP's dashboard too. Trimmed and cut at 500 characters.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCancel(id: string, reason?: string): Promise<Models.Payment>;
    paymentsCancel(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/cancel'.replace('{id}', id);
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
     * Collects money that is currently only reserved. It starts from `authorized` and from nothing else — under `auto_capture_policy: 'immediate'` a payment is captured in the same request that created it and never passes through here, so this is the route for the 'manual' and 'on_ship' policies, and POST /payments/orders/{order_ref}/capture is the same operation addressed by the order reference a warehouse actually holds. There is no request body and no amount: the ledger carries one amount and one status, so a capture is the whole authorization or nothing. On a self-managed payment it takes no PSP anywhere near it — it records that an invoice or a prepayment was paid, and stops the dunning clock. Refused with 422 once the authorization is older than the tenant's `capture_expiry_days` (the message carries both numbers), because an expired authorization is declined by the provider anyway and a 422 here is the cheap version of finding out later.
     *
     * @param {string} params.id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsCapture(params: { id: string }): Promise<Models.Payment>;
    /**
     * Collects money that is currently only reserved. It starts from `authorized` and from nothing else — under `auto_capture_policy: 'immediate'` a payment is captured in the same request that created it and never passes through here, so this is the route for the 'manual' and 'on_ship' policies, and POST /payments/orders/{order_ref}/capture is the same operation addressed by the order reference a warehouse actually holds. There is no request body and no amount: the ledger carries one amount and one status, so a capture is the whole authorization or nothing. On a self-managed payment it takes no PSP anywhere near it — it records that an invoice or a prepayment was paid, and stops the dunning clock. Refused with 422 once the authorization is older than the tenant's `capture_expiry_days` (the message carries both numbers), because an expired authorization is declined by the provider anyway and a 422 here is the cheap version of finding out later.
     *
     * @param {string} id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCapture(id: string): Promise<Models.Payment>;
    paymentsCapture(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/capture'.replace('{id}', id);
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
     * The other half of a redirect. POST /payments answered `requires_action` with a `next_action` the storefront carried out — a 3-D Secure step, a wallet approval, a bank login — and this is the call that asks the PSP how it went and writes the answer to the ledger. It starts from `requires_action` and from nothing else, so a payment that already came back authorized needs no confirm and the lattice answers 400 rather than repeating one. `next_action` is cleared by this call whatever the outcome. Where the tenant's `auto_capture_policy` is 'immediate' the money is taken straight after the authorization, in the same request, so a successful confirm can come back `captured` rather than `authorized`; a failed auto-capture does not fail the confirm, because a good authorization is worth more than a tidy status. On a buyer's own call a payment of another contact answers 404.
     *
     * @param {string} params.id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsConfirm(params: { id: string }): Promise<Models.Payment>;
    /**
     * The other half of a redirect. POST /payments answered `requires_action` with a `next_action` the storefront carried out — a 3-D Secure step, a wallet approval, a bank login — and this is the call that asks the PSP how it went and writes the answer to the ledger. It starts from `requires_action` and from nothing else, so a payment that already came back authorized needs no confirm and the lattice answers 400 rather than repeating one. `next_action` is cleared by this call whatever the outcome. Where the tenant's `auto_capture_policy` is 'immediate' the money is taken straight after the authorization, in the same request, so a successful confirm can come back `captured` rather than `authorized`; a failed auto-capture does not fail the confirm, because a good authorization is worth more than a tidy status. On a buyer's own call a payment of another contact answers 404.
     *
     * @param {string} id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsConfirm(id: string): Promise<Models.Payment>;
    paymentsConfirm(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/confirm'.replace('{id}', id);
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
     * Gives captured money back. It starts from `captured` and from nothing else — money that was only authorized is cancelled, not refunded, and the lattice answers 400 rather than guessing which was meant. All or nothing: the ledger carries one amount and one status, so there is no partial refund and no second one to express — a refunded payment is refunded in full, and a repeat is a 400 because `refunded` is not a status a refund starts from. The `reason` in the body is handed to the driver in the same call, so it reaches the PSP's own refund-reason field rather than being a note only this database ever sees, and it is stored under `metadata.refund_reason`. On a self-managed payment nothing is sent anywhere: it records that the merchant paid the buyer back by their own means. Refused with 422 once the capture is older than the tenant's `refund_window_days` (the message carries both numbers) — past that the provider stops accepting a refund against the transaction and it has to be made by bank transfer.
     *
     * @param {string} params.id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {string} params.reason - The operator's own words for why. Kept on the payment (`metadata.cancel_reason` / `metadata.refund_reason`) AND handed to the provider's own cancellation or refund reason field, so it is readable in the PSP's dashboard too. Trimmed and cut at 500 characters.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsRefund(params: { id: string, reason?: string }): Promise<Models.Payment>;
    /**
     * Gives captured money back. It starts from `captured` and from nothing else — money that was only authorized is cancelled, not refunded, and the lattice answers 400 rather than guessing which was meant. All or nothing: the ledger carries one amount and one status, so there is no partial refund and no second one to express — a refunded payment is refunded in full, and a repeat is a 400 because `refunded` is not a status a refund starts from. The `reason` in the body is handed to the driver in the same call, so it reaches the PSP's own refund-reason field rather than being a note only this database ever sees, and it is stored under `metadata.refund_reason`. On a self-managed payment nothing is sent anywhere: it records that the merchant paid the buyer back by their own means. Refused with 422 once the capture is older than the tenant's `refund_window_days` (the message carries both numbers) — past that the provider stops accepting a refund against the transaction and it has to be made by bank transfer.
     *
     * @param {string} id - The payment. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {string} reason - The operator's own words for why. Kept on the payment (`metadata.cancel_reason` / `metadata.refund_reason`) AND handed to the provider's own cancellation or refund reason field, so it is readable in the PSP's dashboard too. Trimmed and cut at 500 characters.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsRefund(id: string, reason?: string): Promise<Models.Payment>;
    paymentsRefund(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/refund'.replace('{id}', id);
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
}
