```javascript
import { Client, Channels, ChannelTypeTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsTypesCreate({
    code: 'feed',
    title: 'Product feed',
    description: 'A web shop a human browses.', // optional
    descriptions: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    position: 1, // optional
    tone: ChannelTypeTone.Neutral // optional
});

console.log(result);
```
