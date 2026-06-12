```javascript
import { Client, Customers, AddressType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAddressesUpdate({
    id: '',
    city: '', // optional
    company: '', // optional
    contactId: '', // optional
    country: '', // optional
    isDefault: null, // optional
    name: '', // optional
    organizationId: '', // optional
    phone: '', // optional
    region: '', // optional
    street: '', // optional
    street2: '', // optional
    type: AddressType.Billing, // optional
    zip: '' // optional
});

console.log(result);
```
