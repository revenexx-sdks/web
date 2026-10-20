```javascript
import { Client, CampaignsCalendar } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCalendar = new CampaignsCalendar(client);

const result = await campaignsCalendar.campaignsCalendarRead({
    from: '', // optional
    to: '', // optional
    type: '', // optional
    market: '', // optional
    status: '', // optional
    ownerId: '' // optional
});

console.log(result);
```
