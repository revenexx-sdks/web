```javascript
import { Client, Channels, ChannelStatus, ChannelType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsCreate({
    code: '',
    name: '',
    isDefault: null, // optional
    labels: {}, // optional
    position: null, // optional
    status: ChannelStatus.Active, // optional
    type: ChannelType.Storefront // optional
});

console.log(result);
```
