```javascript
import { Client, Customers, ContactRole, ContactStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersContactsUpdate({
    id: '',
    email: '', // optional
    firstName: '', // optional
    isPrimary: null, // optional
    lastName: '', // optional
    locale: '', // optional
    organizationId: '', // optional
    phone: '', // optional
    role: ContactRole.Buyer, // optional
    status: ContactStatus.Invited // optional
});

console.log(result);
```
