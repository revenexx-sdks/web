```javascript
import { Client, JourneysJourneys, TriggerKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysUpdate({
    id: '',
    campaignRef: '', // optional
    currency: '', // optional
    description: '', // optional
    goalConfig: null, // optional
    metadata: null, // optional
    name: '', // optional
    reenrol: true, // optional
    reenrolGapDays: 1, // optional
    triggerConfig: null, // optional
    triggerKind: TriggerKind.Event // optional
});

console.log(result);
```
