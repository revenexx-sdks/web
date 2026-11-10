# marketing-consents.evidence

## marketing-consents-consent-events-list

List the consent events

```javascript
import { Client, MarketingConsentsEvidence, ChannelEnum, MarketingConsentsConsentEventsListKind, MarketingConsentsConsentEventsListSource, MarketingConsentsConsentEventsListLegalBasis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsConsentEventsList({
    id: '', // optional
    subscriptionId: '', // optional
    contactId: '', // optional
    subscriptionTypeId: '', // optional
    channel: ChannelEnum.Email, // optional
    addressHash: '', // optional
    kind: MarketingConsentsConsentEventsListKind.Requested, // optional
    source: MarketingConsentsConsentEventsListSource.Form, // optional
    sourceRef: '', // optional
    legalBasis: MarketingConsentsConsentEventsListLegalBasis.ConsentDoi, // optional
    consentTextId: '', // optional
    campaignRef: '', // optional
    pageUrl: '', // optional
    ip: '', // optional
    userAgent: '', // optional
    ipTruncatedAt: '2026-01-01T12:00:00Z', // optional
    at: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## marketing-consents-consent-events-get

Read one consent event

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsConsentEventsGet({
    id: ''
});

console.log(result);
```

## marketing-consents-contacts-get

Read one contact's consent record

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsContactsGet({
    contactId: ''
});

console.log(result);
```

## marketing-consents-contacts-erase

Erase one contact's consents, keeping minimal proof

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsContactsErase({
    contactId: '',
    data: {}
});

console.log(result);
```

## marketing-consents-contacts-export

Export one contact's consent record for an access request

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsContactsExport({
    contactId: ''
});

console.log(result);
```

## marketing-consents-imports-list

List the imports

```javascript
import { Client, MarketingConsentsEvidence, ChannelEnum, MarketingConsentsImportsListLegalBasis, State } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsImportsList({
    id: '', // optional
    subscriptionTypeId: '', // optional
    channel: ChannelEnum.Email, // optional
    legalBasis: MarketingConsentsImportsListLegalBasis.ConsentSingle, // optional
    fileRef: '', // optional
    proofNote: '', // optional
    rows: 1, // optional
    accepted: 1, // optional
    rejected: 1, // optional
    state: State.Running, // optional
    createdBy: '', // optional
    finishedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## marketing-consents-imports-create

Import an existing list with its recorded basis

```javascript
import { Client, MarketingConsentsEvidence, MarketingConsentsImportsListLegalBasis, ChannelEnum } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsImportsCreate({
    legalBasis: MarketingConsentsImportsListLegalBasis.ConsentSingle,
    proofNote: 'Altsystem Shopware, Double-Opt-in-Log 2019–2026',
    rows: [],
    subscriptionType: 'newsletter',
    channel: ChannelEnum.Email, // optional
    fileRef: 'newsletter-export-2026-09.csv' // optional
});

console.log(result);
```

## marketing-consents-imports-get

Read one import

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsImportsGet({
    id: ''
});

console.log(result);
```

## marketing-consents-ip-retention-run

Shorten IP addresses past their retention

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsIpRetentionRun({
    data: {}
});

console.log(result);
```

## marketing-consents-lapse-run

Lapse unconfirmed sign-ups past their expiry

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsLapseRun({
    data: {}
});

console.log(result);
```

## marketing-consents-sweep-run

Read what the event bus does not deliver yet

```javascript
import { Client, MarketingConsentsEvidence } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsSweepRun({
    data: {}
});

console.log(result);
```
