```javascript
import { Client, Carts, CartMergeStrategy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsClaim({
    contactId: '',
    sessionKey: 'a1b2c3d4e5f6',
    strategy: CartMergeStrategy.Merge, // optional
    targetCartId: '' // optional
});

console.log(result);
```
