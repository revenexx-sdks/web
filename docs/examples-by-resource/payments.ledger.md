# payments.ledger

## payments-list

List payments

```javascript
import { Client, PaymentsLedger, PaymentStatus, PaymentMethodKind, PaymentDunningStage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    cartId: '', // optional
    contactId: '', // optional
    orderId: '', // optional
    organizationId: '', // optional
    status: PaymentStatus.Created, // optional
    orderRef: 'ORD-10042', // optional
    methodCode: 'invoice', // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    provider: 'stripe', // optional
    dunningStage: PaymentDunningStage.None, // optional
    idempotencyKey: 'checkout-2f9c41', // optional
    externalId: 'ZAHL-4711', // optional
    reference: 'pi_29f4c1b7a3d24e10', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## payments-create

Create and authorize a payment

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsCreate({
    amount: 49.9,
    methodCode: 'invoice',
    cartId: '', // optional
    contactId: '', // optional
    country: 'DE', // optional
    currency: 'EUR', // optional
    externalId: 'ZAHL-4711', // optional
    externalRefs: {
        "bank_statement": "AZ-88120",
        "erp_ledger": "BEL-2026-004417"
    }, // optional
    idempotencyKey: 'checkout-2f9c41', // optional
    metadata: {
        "order_source": "web"
    }, // optional
    orderId: '', // optional
    orderRef: 'ORD-10042', // optional
    returnUrl: 'https://shop.example.com/checkout/return', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Journal_Batch_Name": "ZAHLUNG",
            "Payment_Method_Code": "RECHNUNG"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## payments-dunning-scan

Scan the dunning and webhook clocks

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsDunningScan();

console.log(result);
```

## payments-errors-redact

Reclassify pre-taxonomy error messages

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsErrorsRedact({
    apply: true, // optional
    limit: 500 // optional
});

console.log(result);
```

## payments-orders-relink

Link payments to the order their reference names

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsOrdersRelink({
    after: '2026-06-14T12:38:33.246Z', // optional
    apply: true, // optional
    limit: 100 // optional
});

console.log(result);
```

## payments-orders-capture

Capture what an order owes

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsOrdersCapture({
    orderRef: 'ORD-10042'
});

console.log(result);
```

## payments-vocabularies-list

List vocabularies

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsVocabulariesList();

console.log(result);
```

## payments-vocabularies-get

Read one vocabulary

```javascript
import { Client, PaymentsLedger, PaymentsVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsVocabulariesGet({
    name: PaymentsVocabulariesGetName.Connectionstates
});

console.log(result);
```

## payments-webhooks-ingest

Ingest a PSP webhook callback

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsWebhooksIngest({
    provider: 'stripe',
    id: null, // optional
    request: {}, // optional
    verified: null // optional
});

console.log(result);
```

## payments-get

Read one payment

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsGet({
    id: ''
});

console.log(result);
```

## payments-cancel

Cancel a payment before capture

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsCancel({
    id: '',
    reason: 'Buyer cancelled by phone' // optional
});

console.log(result);
```

## payments-capture

Capture an authorized payment

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsCapture({
    id: ''
});

console.log(result);
```

## payments-confirm

Finish a payment after the PSP redirect

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsConfirm({
    id: ''
});

console.log(result);
```

## payments-refund

Refund a captured payment in full

```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsRefund({
    id: '',
    reason: 'Buyer cancelled by phone' // optional
});

console.log(result);
```
