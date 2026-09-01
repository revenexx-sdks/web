```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesDefaults();

console.log(result);
```
