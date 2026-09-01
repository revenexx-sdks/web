```javascript
import { Client, CustomersContacts, ContactActivityKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersOrganizationsEventsCreate({
    organizationId: '',
    contactId: '',
    subject: 'Called about the annual requirement',
    actor: 'vertrieb@example.com', // optional
    kind: ContactActivityKind.Note, // optional
    note: 'Asked for a quote on the annual bolt requirement; call back in week 34.', // optional
    occurredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
