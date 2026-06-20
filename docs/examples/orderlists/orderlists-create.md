```javascript
import { Client, Orderlists, OrderListKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsCreate({
    name: '',
    ownerId: '',
    ownerName: '',
    items: [], // optional
    kind: OrderListKind.Shopping, // optional
    metadata: {}, // optional
    organizationId: '', // optional
    public: null // optional
});

console.log(result);
```
