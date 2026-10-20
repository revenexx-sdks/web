```javascript
import { Client, CartsItems } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsPriced({
    cartId: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    productId: '', // optional
    quantity: 9.99, // optional
    sku: 'BOLT-M8-30', // optional
    taxRate: 19, // optional
    unitPrice: 12.5 // optional
});

console.log(result);
```
