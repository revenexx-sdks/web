```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesCopy({
    key: 'buyer',
    title: 'Einkäufer Werk 2',
    description: '', // optional
    keyBody: '' // optional
});

console.log(result);
```
