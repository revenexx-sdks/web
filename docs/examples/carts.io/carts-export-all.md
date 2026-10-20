```javascript
import { Client, CartsIo, CartExportFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsExportAll({
    contactId: '', // optional
    createdFrom: '2026-09-01', // optional
    createdTo: '2026-09-30', // optional
    cursor: '', // optional
    format: CartExportFormat.Json, // optional
    limit: 1, // optional
    market: 'de', // optional
    profileId: '', // optional
    status: null // optional
});

console.log(result);
```
