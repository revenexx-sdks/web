```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesList();

console.log(result);
```
