```javascript
import { Client, JourneysJourneys, TriggerKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysCreate({
    name: '',
    campaignRef: '', // optional
    currency: '', // optional
    description: '', // optional
    entry: '', // optional
    goalConfig: null, // optional
    metadata: null, // optional
    reenrol: true, // optional
    reenrolGapDays: 1, // optional
    steps: [], // optional
    triggerConfig: null, // optional
    triggerKind: TriggerKind.Event // optional
});

console.log(result);
```
