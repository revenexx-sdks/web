```javascript
import { Client, Channels, ChannelStatus, ChannelUnassignedVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsCreate({
    code: 'shop',
    name: 'Shop',
    isDefault: true, // optional
    labels: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    position: 1, // optional
    status: ChannelStatus.Active, // optional
    type: 'storefront', // optional
    unassignedVisibility: ChannelUnassignedVisibility.Inherit // optional
});

console.log(result);
```
