```javascript
import { Client, Io, Format, Mode, CreateImportTarget } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.createImport({
    app: '',
    entity: '',
    objectKey: '',
    vendor: '',
    format: Format.Csv, // optional
    keys: [], // optional
    maxRejects: 1, // optional
    mode: Mode.Upsert, // optional
    profileId: '', // optional
    target: CreateImportTarget.Live // optional
});

console.log(result);
```
