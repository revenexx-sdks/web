```javascript
import { Client, Carts, CartItemType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsItemsUpdate({
    cartId: '',
    id: '',
    configuration: {}, // optional
    currency: '', // optional
    metadata: {}, // optional
    name: '', // optional
    position: null, // optional
    productId: '', // optional
    quantity: null, // optional
    sku: '', // optional
    snapshot: {}, // optional
    taxRate: null, // optional
    type: CartItemType.Product, // optional
    unit: '', // optional
    unitPrice: null // optional
});

console.log(result);
```
