# consent-manager.records

## consent-manager-records-list

List the evidence

```javascript
import { Client, ConsentManagerRecords, Action, Surface } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsList({
    id: '', // optional
    consentId: '', // optional
    action: Action.AcceptAll, // optional
    surface: Surface.FirstLayer, // optional
    policyVersionId: '', // optional
    policyNumber: 7, // optional
    policySha256: 'e903c6b98c176311018c0f737505ecd7cd992728f71b48ec65a2074c79572472', // optional
    locale: 'de', // optional
    market: 'de', // optional
    recordedAt: '2026-01-01T12:00:00Z', // optional
    clientTs: '2026-01-01T12:00:00Z', // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    userAgentClass: 'Firefox 131', // optional
    pagePath: '/produkte/schrauben', // optional
    contactId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## consent-manager-records-create

Record one visitor decision

```javascript
import { Client, ConsentManagerRecords, Action, Surface } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsCreate({
    action: Action.AcceptAll,
    consentId: '',
    locale: 'de',
    policyVersionId: '',
    surface: Surface.FirstLayer,
    clientTs: '2026-01-01T12:00:00Z', // optional
    decisions: {}, // optional
    pagePath: '/produkte/schrauben', // optional
    userAgentClass: 'Firefox 131' // optional
});

console.log(result);
```

## consent-manager-records-history

Read one browser's decisions, oldest first

```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsHistory({
    consentId: ''
});

console.log(result);
```

## consent-manager-records-export

Export the records of a period for a DPO

```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsExport({
    from: '2026-01-01T00:00:00Z', // optional
    to: '2026-02-01T00:00:00Z', // optional
    market: 'de', // optional
    limit: 1000, // optional
    offset: 0 // optional
});

console.log(result);
```

## consent-manager-records-prune

Remove records past their retention (previews by default)

```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsPrune({
    dryRun: true // optional
});

console.log(result);
```

## consent-manager-records-summary

Count decisions per purpose, naming nobody

```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsSummary({
    market: 'de', // optional
    from: '2026-01-01T00:00:00Z', // optional
    to: '2026-02-01T00:00:00Z' // optional
});

console.log(result);
```

## consent-manager-records-unlink-contact

Unlink a contact from their records on erasure

```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsUnlinkContact({
    contactId: ''
});

console.log(result);
```

## consent-manager-records-get

Read one record

```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsGet({
    id: ''
});

console.log(result);
```
