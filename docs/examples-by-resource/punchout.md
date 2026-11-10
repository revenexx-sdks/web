# punchout

## punchout-accounts-list

List punchout accounts — filter by column, paginate with limit/offset/order

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    fallbackContactId: '' // optional
});

console.log(result);
```

## punchout-accounts-create

Create a punchout account

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsCreate({
    channelCode: '',
    code: '',
    name: '',
    protocol: '',
    authStrategy: '', // optional
    credentialDomain: '', // optional
    credentialIdentity: '', // optional
    credentialSecret: '', // optional
    echoEntryParameters: false, // optional
    enabled: true, // optional
    externalId: 'ARIBA-4711', // optional
    externalRefs: {
        "ariba": "AN01000012345",
        "business-central": "K-10042"
    }, // optional
    fallbackContactId: '', // optional
    idsCustomerName: '', // optional
    loginToken: '', // optional
    metadata: {
        "account_manager": "ma",
        "onboarded": "2026-03-01"
    }, // optional
    organizationId: '', // optional
    protocolVersion: '5.0', // optional
    purchaseMode: '', // optional
    secureOci: true, // optional
    sessionTtlOverrideMinutes: 240, // optional
    sharedSecret: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Vendor_Posting_Group": "HANDEL"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    startPageUrl: 'https://shop.example.com/punchout/start', // optional
    unknownUserPolicy: '' // optional
});

console.log(result);
```

## punchout-accounts-delete

Delete a punchout account by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsDelete({
    id: ''
});

console.log(result);
```

## punchout-accounts-get

Read one punchout account by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsGet({
    id: ''
});

console.log(result);
```

## punchout-accounts-update

Update a punchout account by id — send only the fields that change

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsUpdate({
    id: '',
    authStrategy: '', // optional
    channelCode: '', // optional
    code: '', // optional
    credentialDomain: '', // optional
    credentialIdentity: '', // optional
    credentialSecret: '', // optional
    echoEntryParameters: false, // optional
    enabled: true, // optional
    externalId: 'ARIBA-4711', // optional
    externalRefs: {
        "ariba": "AN01000012345",
        "business-central": "K-10042"
    }, // optional
    fallbackContactId: '', // optional
    idsCustomerName: '', // optional
    loginToken: '', // optional
    metadata: {
        "account_manager": "ma",
        "onboarded": "2026-03-01"
    }, // optional
    name: '', // optional
    organizationId: '', // optional
    protocol: '', // optional
    protocolVersion: '5.0', // optional
    purchaseMode: '', // optional
    secureOci: true, // optional
    sessionTtlOverrideMinutes: 240, // optional
    sharedSecret: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Vendor_Posting_Group": "HANDEL"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    startPageUrl: 'https://shop.example.com/punchout/start', // optional
    unknownUserPolicy: '' // optional
});

console.log(result);
```

## punchout-accounts-preview

Produce what this account's mappings would hand back for a cart, without handing anything back

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsPreview({
    id: '',
    cartId: ''
});

console.log(result);
```

## punchout-accounts-probe

Call this account's entry URL from outside and record whether a storefront answers it

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsProbe({
    id: '',
    data: {}
});

console.log(result);
```

## punchout-accounts-test

Send this account one synthetic entry call and answer the protocol's own response

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsTest({
    id: '',
    data: {}
});

console.log(result);
```

## punchout-defaults

Seed this tenant's shipped defaults, idempotently — safe to call on every install and on every retry

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutDefaults({
    data: {}
});

console.log(result);
```

## punchout-entry-refusals-list

List entry refusals — filter by column, paginate with limit/offset/order

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutEntryRefusalsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## punchout-entry-cxml

cXML entry — authenticate the sender, read the PunchOutSetupRequest and answer the PunchOutSetupResponse in the same HTTP response

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutEntryCxml({
    accountCode: '',
    method: '',
    bodyB64: '', // optional
    clientIp: '', // optional
    contentType: '', // optional
    headers: {}, // optional
    query: {} // optional
});

console.log(result);
```

## punchout-entry-ids

IDS 2.5 entry on one shared endpoint — six of the seven actions answered, two of them before any credential because the standard sends none with them

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutEntryIds({
    method: '',
    bodyB64: '', // optional
    clientIp: '', // optional
    contentType: '', // optional
    headers: {}, // optional
    query: {} // optional
});

console.log(result);
```

## punchout-entry-oci

OCI 4.0/5.0 entry — authenticate the account, open a punchout session and answer the redirect the buyer follows into the shop

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutEntryOci({
    accountCode: '',
    method: '',
    bodyB64: '', // optional
    clientIp: '', // optional
    contentType: '', // optional
    headers: {}, // optional
    query: {} // optional
});

console.log(result);
```

## punchout-field-mappings-list

List field mappings — filter by column, paginate with limit/offset/order

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## punchout-field-mappings-create

Create a field mapping

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsCreate({
    protocol: '',
    source: '',
    target: '',
    targetKind: '',
    accountId: '', // optional
    document: '', // optional
    emit: '', // optional
    enabled: true, // optional
    mutators: {}, // optional
    position: 1, // optional
    scope: '', // optional
    sourceConfig: {} // optional
});

console.log(result);
```

## punchout-field-mappings-export

Write one account's mappings back in the old platform's shape

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsExport({
    accountId: ''
});

console.log(result);
```

## punchout-field-mappings-import

Read an account's mapping configuration off the old platform into this vocabulary

```javascript
import { Client, Punchout, Protocol } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsImport({
    accountId: '',
    configuration: {},
    protocol: Protocol.Oci // optional
});

console.log(result);
```

## punchout-field-mappings-delete

Delete a field mapping by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsDelete({
    id: ''
});

console.log(result);
```

## punchout-field-mappings-get

Read one field mapping by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsGet({
    id: ''
});

console.log(result);
```

## punchout-field-mappings-update

Update a field mapping by id — send only the fields that change

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsUpdate({
    id: '',
    accountId: '', // optional
    document: '', // optional
    emit: '', // optional
    enabled: true, // optional
    mutators: {}, // optional
    position: 1, // optional
    protocol: '', // optional
    scope: '', // optional
    source: '', // optional
    sourceConfig: {}, // optional
    target: '', // optional
    targetKind: '' // optional
});

console.log(result);
```

## punchout-sessions-list

List punchout sessions — filter by column, paginate with limit/offset/order

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## punchout-sessions-create

Create a punchout session

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsCreate({
    accountId: '',
    channelCode: '',
    expiresAt: '2026-01-01T12:00:00Z',
    protocol: '',
    psid: '',
    cartId: '', // optional
    claimedAt: '2026-01-01T12:00:00Z', // optional
    closedReason: '', // optional
    contactId: '', // optional
    correlationKey: '', // optional
    entryAction: '', // optional
    entryIntent: {}, // optional
    entryPayload: {}, // optional
    externalUserId: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    orderStatus: '', // optional
    orderedAt: '2026-01-01T12:00:00Z', // optional
    organizationId: '', // optional
    origin: '', // optional
    purchaseMode: '', // optional
    returnMethod: '', // optional
    returnUrl: '', // optional
    secureSessionId: '', // optional
    secureSessionUsedAt: '2026-01-01T12:00:00Z', // optional
    secureTransmissionId: '', // optional
    status: '', // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## punchout-sessions-delete

Delete a punchout session by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsDelete({
    id: ''
});

console.log(result);
```

## punchout-sessions-get

Read one punchout session by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsGet({
    id: ''
});

console.log(result);
```

## punchout-sessions-update

Update a punchout session by id — send only the fields that change

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsUpdate({
    id: '',
    accountId: '', // optional
    cartId: '', // optional
    channelCode: '', // optional
    claimedAt: '2026-01-01T12:00:00Z', // optional
    closedReason: '', // optional
    contactId: '', // optional
    correlationKey: '', // optional
    entryAction: '', // optional
    entryIntent: {}, // optional
    entryPayload: {}, // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    externalUserId: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    orderStatus: '', // optional
    orderedAt: '2026-01-01T12:00:00Z', // optional
    organizationId: '', // optional
    origin: '', // optional
    protocol: '', // optional
    psid: '', // optional
    purchaseMode: '', // optional
    returnMethod: '', // optional
    returnUrl: '', // optional
    secureSessionId: '', // optional
    secureSessionUsedAt: '2026-01-01T12:00:00Z', // optional
    secureTransmissionId: '', // optional
    status: '', // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## punchout-sessions-claim

Claim a visit: resolve the buyer to a contact, mint their sign-in secret and answer it once, with the context the shop needs

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsClaim({
    psid: '',
    data: {}
});

console.log(result);
```

## punchout-sessions-ordered

End an IDS visit in an order: confirm with the orders app that its cart was ordered, record the order, close the visit

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsOrdered({
    psid: '',
    data: {}
});

console.log(result);
```

## punchout-sessions-return

Hand the cart back: answer the payload for the buyer's browser to submit, record the transfer, close the visit

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsReturn({
    psid: '',
    data: {}
});

console.log(result);
```

## punchout-setup-get

Say which of the setup steps the Cockpit lists are done for this tenant

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSetupGet();

console.log(result);
```

## punchout-transfer-items-list

List transfer lines — filter by column, paginate with limit/offset/order

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransferItemsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## punchout-transfer-items-create

Create a transfer line

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransferItemsCreate({
    name: '',
    quantity: 9.99,
    transferId: '',
    currency: '', // optional
    externalRef: '', // optional
    lineGross: 9.99, // optional
    lineNet: 9.99, // optional
    metadata: {}, // optional
    position: 1, // optional
    productId: '', // optional
    sku: '', // optional
    taxRate: 9.99, // optional
    unit: '', // optional
    unitPrice: 9.99 // optional
});

console.log(result);
```

## punchout-transfer-items-get

Read one transfer line by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransferItemsGet({
    id: ''
});

console.log(result);
```

## punchout-transfers-list

List transfers — filter by column, paginate with limit/offset/order

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransfersList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## punchout-transfers-create

Create a transfer

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransfersCreate({
    accountId: '',
    correlationKey: '',
    protocol: '',
    sessionId: '',
    cartId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    externalId: '1474033675640.12345@ariba.example.com', // optional
    externalRefs: {
        "ariba": "DOC-8817264",
        "business-central": "SO-104882"
    }, // optional
    itemCount: 1, // optional
    matchedAt: '2026-01-01T12:00:00Z', // optional
    matchedOrderId: '', // optional
    organizationId: '', // optional
    payload: {}, // optional
    problems: [{"kind":"dropped","line":1,"reason":"not a GTIN-8, -12 or -13, and not a GTIN-14 with indicator 0","scope":"line","target":"EAN","value":"14012345678908"}], // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "status": "accepted"
        },
        "system": "ariba"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    targetUrl: '', // optional
    totalGross: 9.99, // optional
    totalNet: 9.99, // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## punchout-transfers-get

Read one transfer by id

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransfersGet({
    id: ''
});

console.log(result);
```

## punchout-transfers-update

Update a transfer by id — send only the fields that change

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransfersUpdate({
    id: '',
    accountId: '', // optional
    cartId: '', // optional
    contactId: '', // optional
    correlationKey: '', // optional
    currency: '', // optional
    externalId: '1474033675640.12345@ariba.example.com', // optional
    externalRefs: {
        "ariba": "DOC-8817264",
        "business-central": "SO-104882"
    }, // optional
    itemCount: 1, // optional
    matchedAt: '2026-01-01T12:00:00Z', // optional
    matchedOrderId: '', // optional
    organizationId: '', // optional
    payload: {}, // optional
    problems: [{"kind":"dropped","line":1,"reason":"not a GTIN-8, -12 or -13, and not a GTIN-14 with indicator 0","scope":"line","target":"EAN","value":"14012345678908"}], // optional
    protocol: '', // optional
    sessionId: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "status": "accepted"
        },
        "system": "ariba"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    targetUrl: '', // optional
    totalGross: 9.99, // optional
    totalNet: 9.99, // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## punchout-vocabularies-list

List the vocabularies this app owns — names and titles, without the values

```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutVocabulariesList();

console.log(result);
```

## punchout-vocabularies-get

Read one vocabulary in full — every permitted value, with the words a human reads for it

```javascript
import { Client, Punchout, PunchoutVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutVocabulariesGet({
    name: PunchoutVocabulariesGetName.Authstrategies
});

console.log(result);
```
