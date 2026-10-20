```javascript
import { Client, JourneysEnrollments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysEnrollments = new JourneysEnrollments(client);

const result = await journeysEnrollments.journeysEnrollmentsExit({
    id: '',
    data: {}
});

console.log(result);
```
