```javascript
import { Client, Carts, CartOrderingChannel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsOnBehalf({
    contactId: '',
    channel: CartOrderingChannel.Phone, // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    name: 'Phone order', // optional
    note: 'Call back at 2 pm, deliver to plant north', // optional
    organizationId: '' // optional
});

console.log(result);
```
