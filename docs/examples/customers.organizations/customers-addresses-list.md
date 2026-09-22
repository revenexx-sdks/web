```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesList({
    id: '', // optional
    organizationId: '', // optional
    contactId: '', // optional
    type: 'shipping', // optional
    company: 'Beispiel Industrietechnik GmbH', // optional
    name: 'Anna Berger', // optional
    street: 'Musterstraße 12', // optional
    street2: 'Gebäude C, 2. OG', // optional
    zip: '10115', // optional
    city: 'Berlin', // optional
    region: 'Berlin', // optional
    country: 'DE', // optional
    phone: '+49 30 5550123', // optional
    isDefault: true, // optional
    externalId: 'R_ADD000005', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
