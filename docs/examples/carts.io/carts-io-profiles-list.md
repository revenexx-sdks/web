```javascript
import { Client, CartsIo, CartIoDirection, CartIoEntity, CartIoFormat, CartIoApplyMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesList({
    id: '', // optional
    name: 'cart-export-csv', // optional
    direction: CartIoDirection.Import, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    applyMode: CartIoApplyMode.Insert, // optional
    isTemplate: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
