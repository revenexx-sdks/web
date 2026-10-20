```javascript
import { Client, JourneysTemplates } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysTemplates = new JourneysTemplates(client);

const result = await journeysTemplates.journeysTemplatesGet({
    id: ''
});

console.log(result);
```
