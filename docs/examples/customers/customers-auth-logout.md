```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthLogout({
    sessionId: '',
    userId: ''
});

console.log(result);
```
