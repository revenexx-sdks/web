# customers.leads

## customers-consent-mirror-run

Bring the marketing consent flag up to date

```javascript
import { Client, CustomersLeads } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersLeads = new CustomersLeads(client);

const result = await customersLeads.customersConsentMirrorRun();

console.log(result);
```

## customers-contacts-handover

Hand a lead to a sales rep

```javascript
import { Client, CustomersLeads } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersLeads = new CustomersLeads(client);

const result = await customersLeads.customersContactsHandover({
    contactId: '',
    ownerId: 'AD-07',
    actor: '', // optional
    dueAt: '2026-01-01T12:00:00Z', // optional
    note: '', // optional
    subject: '' // optional
});

console.log(result);
```

## customers-contacts-lifecycle

Move a person to another funnel stage

```javascript
import { Client, CustomersLeads, LeadSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersLeads = new CustomersLeads(client);

const result = await customersLeads.customersContactsLifecycle({
    contactId: '',
    stage: 'mql',
    actor: '', // optional
    leadSource: LeadSource.Form, // optional
    leadSourceRef: '', // optional
    reason: 'Downloaded the catalogue twice' // optional
});

console.log(result);
```
