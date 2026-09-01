```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsDelete({
    id: ''
});

console.log(result);
```
