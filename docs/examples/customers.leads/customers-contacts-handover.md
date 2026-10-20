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
