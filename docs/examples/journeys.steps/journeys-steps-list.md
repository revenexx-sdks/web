```javascript
import { Client, JourneysSteps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysSteps = new JourneysSteps(client);

const result = await journeysSteps.journeysStepsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    journeyVersionId: '', // optional
    journeyId: '', // optional
    version: '', // optional
    key: '', // optional
    kind: '', // optional
    label: '', // optional
    nextKey: '', // optional
    yesKey: '', // optional
    noKey: '', // optional
    position: '' // optional
});

console.log(result);
```
