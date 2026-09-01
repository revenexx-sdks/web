```javascript
import { Client, CartsIo, CartIoDirection, CartIoApplyMode, CartIoEntity, CartIoFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesCreate({
    direction: CartIoDirection.Import,
    name: 'cart-export-csv',
    applyMode: CartIoApplyMode.Insert, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    isTemplate: true, // optional
    mapping: {}, // optional
    options: {} // optional
});

console.log(result);
```
