```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsOpen({
    productId: '',
    status: 'pending,approved', // optional
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```
