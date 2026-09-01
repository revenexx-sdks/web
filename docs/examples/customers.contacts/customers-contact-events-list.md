```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactEventsList({
    id: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    kind: 'call', // optional
    name: 'activity.call', // optional
    subject: 'Called about the annual requirement', // optional
    actor: 'vertrieb@example.com', // optional
    occurredAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
