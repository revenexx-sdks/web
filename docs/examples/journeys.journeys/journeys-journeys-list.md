```javascript
import { Client, JourneysJourneys, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    name: '', // optional
    description: '', // optional
    status: '', // optional
    triggerKind: '', // optional
    reenrol: '', // optional
    reenrolGapDays: '', // optional
    campaignRef: '', // optional
    templateCode: '', // optional
    currentVersion: '', // optional
    draftVersion: '', // optional
    triggerRanOn: '', // optional
    enrolledCount: '', // optional
    activeCount: '' // optional
});

console.log(result);
```
