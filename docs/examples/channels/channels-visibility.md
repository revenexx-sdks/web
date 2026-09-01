```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsVisibility({
    items: [],
    channel: 'shop', // optional
    channelBody: 'shop' // optional
});

console.log(result);
```
