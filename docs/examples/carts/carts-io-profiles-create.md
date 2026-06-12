```javascript
import { Client, Carts, CartIoDirection, CartIoApplyMode, CartIoEntity, CartIoFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsIoProfilesCreate({
    direction: CartIoDirection.Import,
    name: '',
    applyMode: CartIoApplyMode.Insert, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    isTemplate: null, // optional
    mapping: {}, // optional
    options: {} // optional
});

console.log(result);
```
