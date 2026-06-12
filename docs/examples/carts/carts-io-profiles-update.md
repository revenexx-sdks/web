```javascript
import { Client, Carts, CartIoApplyMode, CartIoDirection, CartIoEntity, CartIoFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsIoProfilesUpdate({
    id: '',
    applyMode: CartIoApplyMode.Insert, // optional
    direction: CartIoDirection.Import, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    isTemplate: null, // optional
    mapping: {}, // optional
    name: '', // optional
    options: {} // optional
});

console.log(result);
```
