```javascript
import { Client, Io, Direction, ApplyMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.updateProfile({
    id: '',
    app: '',
    direction: Direction.Import,
    entity: '',
    format: '',
    name: '',
    vendor: '',
    applyMode: ApplyMode.Upsert, // optional
    mapping: {}, // optional
    markets: [], // optional
    options: {} // optional
});

console.log(result);
```
