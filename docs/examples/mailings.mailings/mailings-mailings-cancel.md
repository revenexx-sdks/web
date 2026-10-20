```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsCancel({
    id: '',
    data: {}
});

console.log(result);
```
