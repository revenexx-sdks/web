# orders

## orders-list

Find orders

```javascript
import { Client, Orders, OrderStatus, OrderPaymentStatus, OrderFulfillmentStatus, OrderCancellationKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersList({
    id: '', // optional
    number: 'ORD-000123', // optional
    customerOrderNumber: 'PO-2026-0042', // optional
    externalRef: 'ERP-4711', // optional
    acknowledgedAt: '2026-01-01T12:00:00Z', // optional
    cartId: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    status: OrderStatus.Pending, // optional
    paymentStatus: OrderPaymentStatus.Open, // optional
    fulfillmentStatus: OrderFulfillmentStatus.Unfulfilled, // optional
    onHold: true, // optional
    holdReason: 'Credit check pending', // optional
    itemCount: 3, // optional
    subtotal: 149.7, // optional
    discountTotal: 7.85, // optional
    shippingTotal: 5.9, // optional
    shippingTaxRate: 19, // optional
    shippingTaxAmount: 1.12, // optional
    paymentFeeAmount: 2.5, // optional
    paymentFeeTaxRate: 19, // optional
    paymentFeeTaxAmount: 0.48, // optional
    taxTotal: 29.56, // optional
    grandTotal: 185.16, // optional
    placedAt: '2026-01-01T12:00:00Z', // optional
    placedOn: '2026-01-01', // optional
    completedAt: '2026-01-01T12:00:00Z', // optional
    cancelledAt: '2026-01-01T12:00:00Z', // optional
    cancellationKind: OrderCancellationKind.Cancellation, // optional
    cancelledBy: '66666666-6666-4666-8666-666666666666', // optional
    cancellationReason: 'Over the quarterly budget', // optional
    externalId: 'SO-004711', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    requestedDeliveryDate: '2026-01-01', // optional
    utmCampaign: 'herbst-2026', // optional
    campaignRef: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orders-migrations-requested-delivery-date

Lift the wanted delivery date into its own field

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersMigrationsRequestedDeliveryDate({
    cursor: '', // optional
    limit: 500 // optional
});

console.log(result);
```

## orders-number-ranges-list

List number ranges

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesList({
    id: '', // optional
    code: 'order', // optional
    prefix: 'ORD-', // optional
    suffix: '', // optional
    padding: 6, // optional
    counter: 123, // optional
    step: 1, // optional
    positionStep: 10, // optional
    title: 'Order numbers', // optional
    active: true, // optional
    channelId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orders-number-ranges-create

Create a number range

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesCreate({
    code: 'order',
    active: true, // optional
    channelId: '', // optional
    counter: 123, // optional
    labels: {
        "de": "Bestellnummern",
        "en": "Order numbers"
    }, // optional
    metadata: {
        "owner": "erp-sync"
    }, // optional
    padding: 6, // optional
    positionStep: 10, // optional
    prefix: 'ORD-', // optional
    step: 1, // optional
    suffix: '', // optional
    title: 'Order numbers' // optional
});

console.log(result);
```

## orders-number-ranges-defaults

Seed the standard number ranges

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesDefaults();

console.log(result);
```

## orders-number-ranges-delete

Delete a number range

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesDelete({
    id: ''
});

console.log(result);
```

## orders-number-ranges-get

Read one number range

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesGet({
    id: ''
});

console.log(result);
```

## orders-number-ranges-update

Change how a range numbers

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesUpdate({
    id: '',
    active: true, // optional
    channelId: '', // optional
    code: 'order', // optional
    counter: 123, // optional
    labels: {
        "de": "Bestellnummern",
        "en": "Order numbers"
    }, // optional
    metadata: {
        "owner": "erp-sync"
    }, // optional
    padding: 6, // optional
    positionStep: 10, // optional
    prefix: 'ORD-', // optional
    step: 1, // optional
    suffix: '', // optional
    title: 'Order numbers' // optional
});

console.log(result);
```

## orders-place

Place an order

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersPlace({
    items: [],
    attribution: {
        "campaign_ref": "c0ffee00-0000-4000-8000-000000000001",
        "consent": {
            "ads": false,
            "analytics": true,
            "policy_version": "2026-07"
        },
        "objection_notice_shown": true,
        "utm_campaign": "herbst-2026",
        "utm_medium": "email",
        "utm_source": "newsletter"
    }, // optional
    billingAddress: {
        "address_line1": "Musterstra\u00dfe 12",
        "country_code": "DE",
        "formatted": [
            "Anna Berger",
            "Beispiel Industrietechnik GmbH",
            "Musterstra\u00dfe 12",
            "10115 Berlin",
            "GERMANY"
        ],
        "locality": "Berlin",
        "organization_name": "Beispiel Industrietechnik GmbH",
        "postal_code": "10115",
        "recipient_name": "Anna Berger"
    }, // optional
    buyer: {
        "company": "Beispiel Industrietechnik GmbH",
        "customer_number": "K-10042",
        "email": "anna.berger@example.com",
        "name": "Anna Berger"
    }, // optional
    cartId: '', // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    customerOrderNumber: 'PO-2026-0042', // optional
    externalId: 'SO-004711', // optional
    externalRefs: {
        "legacy_shop": "88231",
        "procurement_platform": "PO-2026-0042"
    }, // optional
    grandTotal: 243.9, // optional
    metadata: {
        "erp_batch": "2026-W32"
    }, // optional
    organizationId: '', // optional
    payment: {
        "method": "invoice",
        "status": "open"
    }, // optional
    requestedDeliveryDate: '2026-03-17', // optional
    senderCountry: 'DE', // optional
    shipping: {
        "method": "standard",
        "price": 5.9,
        "tax_rate": 19
    }, // optional
    shippingAddress: {
        "address_line1": "Musterstra\u00dfe 12",
        "country_code": "DE",
        "formatted": [
            "Anna Berger",
            "Beispiel Industrietechnik GmbH",
            "Musterstra\u00dfe 12",
            "10115 Berlin",
            "GERMANY"
        ],
        "locality": "Berlin",
        "organization_name": "Beispiel Industrietechnik GmbH",
        "postal_code": "10115",
        "recipient_name": "Anna Berger"
    }, // optional
    shippingTotal: 5.9, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Document_Type": "Order",
            "Payment_Terms_Code": "14 TAGE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    userData: {
        "campaign": "spring-catalogue",
        "requested_date": "2026-03-17",
        "source": "webshop"
    } // optional
});

console.log(result);
```

## orders-reports-customer-rollup

Roll up order facts per organization

```javascript
import { Client, Orders, OrderStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReportsCustomerRollup({
    asOf: '2026-01-01T12:00:00Z', // optional
    cursor: '', // optional
    organizationIds: [], // optional
    statuses: [OrderStatus.Pending] // optional
});

console.log(result);
```

## orders-return-reasons-list

List the return reasons this tenant keeps

```javascript
import { Client, Orders, OrderVocabularyTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnReasonsList({
    id: '', // optional
    code: 'damaged', // optional
    title: 'Damaged in transit', // optional
    description: 'The goods arrived broken. A carrier claim usually follows.', // optional
    isDefault: true, // optional
    tone: OrderVocabularyTone.Neutral, // optional
    position: 3, // optional
    isSystem: true, // optional
    active: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orders-return-reasons-get

Read one return reason

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnReasonsGet({
    id: ''
});

console.log(result);
```

## orders-returns-list

List the returns across all orders

```javascript
import { Client, Orders, OrderReturnStatus, OrderReturnRefundMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnsList({
    id: '', // optional
    orderId: '', // optional
    number: 'RET-000123', // optional
    status: OrderReturnStatus.Registered, // optional
    reasonCode: 'damaged', // optional
    reason: 'Two of the four arrived with a cracked housing', // optional
    registeredAt: 'gte.2026-10-01T00:00:00Z', // optional
    receivedAt: 'gte.2026-10-01T00:00:00Z', // optional
    completedAt: 'gte.2026-10-01T00:00:00Z', // optional
    rejectedAt: 'gte.2026-10-01T00:00:00Z', // optional
    resolution: 'refund', // optional
    refundMode: OrderReturnRefundMode.Proportional, // optional
    refundTotal: 64.67, // optional
    discountReturned: 5.23, // optional
    externalId: 'RMA-000271', // optional
    sourceSyncedAt: 'gte.2026-10-01T00:00:00Z', // optional
    createdAt: 'gte.2026-10-01T00:00:00Z', // optional
    updatedAt: 'gte.2026-10-01T00:00:00Z', // optional
    organizationId: '', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orders-shipments-mark-delivered

Mark a shipment delivered by hand

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersShipmentsMarkDelivered({
    id: '',
    deliveredAt: '2026-01-01T12:00:00Z', // optional
    note: 'Signed for by M. Weber at goods-in' // optional
});

console.log(result);
```

## orders-vocabularies-list

List the enums this app publishes

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersVocabulariesList();

console.log(result);
```

## orders-vocabularies-get

Read one vocabulary and its values

```javascript
import { Client, Orders, OrdersVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersVocabulariesGet({
    name: OrdersVocabulariesGetName.Cancellationkinds
});

console.log(result);
```

## orders-get

Read one order with everything on it

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersGet({
    id: ''
});

console.log(result);
```

## orders-update

Correct an order after placement

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersUpdate({
    id: '',
    billingAddress: {
        "address_line1": "Musterstra\u00dfe 12",
        "country_code": "DE",
        "formatted": [
            "Anna Berger",
            "Beispiel Industrietechnik GmbH",
            "Musterstra\u00dfe 12",
            "10115 Berlin",
            "GERMANY"
        ],
        "locality": "Berlin",
        "organization_name": "Beispiel Industrietechnik GmbH",
        "postal_code": "10115",
        "recipient_name": "Anna Berger"
    }, // optional
    buyer: {
        "company": "Beispiel Industrietechnik GmbH",
        "customer_number": "K-10042",
        "email": "anna.berger@example.com",
        "name": "Anna Berger"
    }, // optional
    customerOrderNumber: 'PO-2026-0042', // optional
    externalId: 'SO-004711', // optional
    externalRefs: {
        "legacy_shop": "88231",
        "procurement_platform": "PO-2026-0042"
    }, // optional
    metadata: {
        "erp_batch": "2026-W32"
    }, // optional
    requestedDeliveryDate: '2026-03-17', // optional
    senderCountry: 'DE', // optional
    shippingAddress: {
        "address_line1": "Musterstra\u00dfe 12",
        "country_code": "DE",
        "formatted": [
            "Anna Berger",
            "Beispiel Industrietechnik GmbH",
            "Musterstra\u00dfe 12",
            "10115 Berlin",
            "GERMANY"
        ],
        "locality": "Berlin",
        "organization_name": "Beispiel Industrietechnik GmbH",
        "postal_code": "10115",
        "recipient_name": "Anna Berger"
    }, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Document_Type": "Order",
            "Payment_Terms_Code": "14 TAGE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    userData: {
        "campaign": "spring-catalogue",
        "requested_date": "2026-03-17",
        "source": "webshop"
    } // optional
});

console.log(result);
```

## orders-acknowledge

Confirm the ERP has taken the order

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersAcknowledge({
    id: '',
    externalId: 'SO-004711', // optional
    externalRef: 'ERP-4711', // optional
    externalRefs: {
        "legacy_shop": "88231",
        "procurement_platform": "PO-2026-0042"
    }, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Document_Type": "Order",
            "Payment_Terms_Code": "14 TAGE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## orders-approve

Approve an order awaiting approval

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersApprove({
    id: ''
});

console.log(result);
```

## orders-cancel

Cancel the whole order

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersCancel({
    id: '',
    cancelledBy: 'service-desk', // optional
    reason: 'Customer withdrew the order' // optional
});

console.log(result);
```

## orders-comments-list

Read the notes on an order

```javascript
import { Client, Orders, OrderCommentVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersCommentsList({
    id: '',
    idQuery: '', // optional
    body: 'Called the customer, delivery agreed for next week.', // optional
    visibility: OrderCommentVisibility.Internal, // optional
    author: 'service-desk', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orders-comments-create

Add a note to an order

```javascript
import { Client, Orders, OrderCommentVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersCommentsCreate({
    id: '',
    body: 'Called the customer, delivery agreed for next week.',
    author: 'service-desk', // optional
    visibility: OrderCommentVisibility.Internal // optional
});

console.log(result);
```

## orders-complete

Close the order by hand

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersComplete({
    id: '',
    completedBy: 'service-desk' // optional
});

console.log(result);
```

## orders-events-list

Read an order's history

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersEventsList({
    id: '',
    idQuery: '', // optional
    name: 'order.shipment.created', // optional
    actor: '', // optional
    idempotencyKey: 'order.cancelled:7f3a9c1e-0000-4000-8000-000000000001', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orders-hold

Put an order on hold

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersHold({
    id: '',
    reason: 'Credit check pending' // optional
});

console.log(result);
```

## orders-items-cancel

Cancel quantities off single positions

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersItemsCancel({
    id: '',
    positions: [],
    cancelledBy: 'service-desk', // optional
    reason: 'Out of stock, customer agreed' // optional
});

console.log(result);
```

## orders-payment-status-update

Tell the order where its money stands

```javascript
import { Client, Orders, OrderPaymentStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersPaymentStatusUpdate({
    id: '',
    status: OrderPaymentStatus.Open,
    paymentId: 'pay_000000000001', // optional
    transactionReference: 'pay_000000000001' // optional
});

console.log(result);
```

## orders-reject

Reject an order awaiting approval

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReject({
    id: '',
    reason: 'Over the quarterly budget for this cost centre'
});

console.log(result);
```

## orders-return

Register a return

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturn({
    id: '',
    externalId: 'RMA-000271', // optional
    externalRefs: {
        "rma_portal": "C-2026-0917"
    }, // optional
    metadata: {
        "rma_portal_case": "C-2026-0917"
    }, // optional
    positions: [], // optional
    reason: 'Two of the four arrived with a cracked housing', // optional
    reasonCode: 'damaged', // optional
    restock: true, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Credit_Memo_No": "GS-004411",
            "Return_Reason_Code": "TRANSPORT"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## orders-returnable

Ask what may still be returned

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnable({
    id: ''
});

console.log(result);
```

## orders-returns-complete

Settle a return in the customer's favour

```javascript
import { Client, Orders, OrderReturnSettlement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnsComplete({
    id: '',
    rid: '',
    resolution: OrderReturnSettlement.Refund // optional
});

console.log(result);
```

## orders-returns-receive

Record that returned goods arrived

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnsReceive({
    id: '',
    rid: '',
    data: {}
});

console.log(result);
```

## orders-returns-reject

Refuse a return

```javascript
import { Client, Orders, OrderReturnRefusal } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnsReject({
    id: '',
    rid: '',
    reason: 'Returned outside the agreed window', // optional
    resolution: OrderReturnRefusal.WearAndTear // optional
});

console.log(result);
```

## orders-ship

Record a shipment

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersShip({
    id: '',
    carrier: 'DHL', // optional
    carrierCode: 'dhl-paket', // optional
    externalId: 'WS-000815', // optional
    externalRefs: {
        "carrier_portal": "DHL-2026-77120"
    }, // optional
    metadata: {
        "warehouse": "HAM-1"
    }, // optional
    number: 'DEL-000123', // optional
    positions: [], // optional
    shippedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Posting_Date": "2026-09-28",
            "Shipment_Method_Code": "EXW"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    trackingCode: '00340434161234567890', // optional
    trackingUrl: 'https://example.com/track/00340434161234567890' // optional
});

console.log(result);
```

## orders-shippable

Ask what may still be shipped

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersShippable({
    id: ''
});

console.log(result);
```

## orders-unhold

Release a hold

```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersUnhold({
    id: '',
    data: {}
});

console.log(result);
```
