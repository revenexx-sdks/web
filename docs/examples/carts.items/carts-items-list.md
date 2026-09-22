```javascript
import { Client, CartsItems, CartItemType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsList({
    cartId: '',
    id: '', // optional
    type: CartItemType.Product, // optional
    productId: '', // optional
    sku: 'BOLT-M8-30', // optional
    name: 'Hex bolt M8', // optional
    quantity: 100, // optional
    unit: 'pcs', // optional
    unitPrice: 0.12, // optional
    taxRate: 19, // optional
    lineTotal: 12, // optional
    position: 0, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
