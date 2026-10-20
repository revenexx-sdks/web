```javascript
import { Client, CartsIo, CartExportFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsExport({
    id: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    format: CartExportFormat.Json, // optional
    profileId: '' // optional
});

console.log(result);
```
