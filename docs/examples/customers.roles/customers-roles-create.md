```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesCreate({
    title: 'Einkauf Zentrale',
    active: true, // optional
    description: '', // optional
    descriptions: {}, // optional
    isDefault: true, // optional
    key: 'einkauf-zentrale', // optional
    labels: {}, // optional
    permissions: [], // optional
    position: 1 // optional
});

console.log(result);
```
