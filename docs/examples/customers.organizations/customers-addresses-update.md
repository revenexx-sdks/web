```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesUpdate({
    id: '',
    city: 'Berlin', // optional
    company: 'Beispiel Industrietechnik GmbH', // optional
    contactId: '', // optional
    country: 'DE', // optional
    externalId: 'R_ADD000005', // optional
    isDefault: true, // optional
    name: 'Anna Berger', // optional
    organizationId: '', // optional
    phone: '+49 30 5550123', // optional
    region: 'Berlin', // optional
    street: 'Musterstraße 12', // optional
    street2: 'Gebäude C, 2. OG', // optional
    type: 'shipping', // optional
    zip: '10115' // optional
});

console.log(result);
```
