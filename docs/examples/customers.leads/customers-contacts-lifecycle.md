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
