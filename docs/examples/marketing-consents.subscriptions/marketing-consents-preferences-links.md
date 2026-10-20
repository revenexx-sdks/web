```javascript
import { Client, MarketingConsentsSubscriptions, ChannelEnum } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsSubscriptions = new MarketingConsentsSubscriptions(client);

const result = await marketingConsentsSubscriptions.marketingConsentsPreferencesLinks({
    recipients: [],
    channel: ChannelEnum.Email // optional
});

console.log(result);
```
