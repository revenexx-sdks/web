```javascript
import { Client, MailingsMailings, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    state: '', // optional
    folder: '', // optional
    campaignRef: '', // optional
    audienceId: '', // optional
    subscriptionType: '', // optional
    templateKey: '', // optional
    starter: '', // optional
    timezoneMode: '', // optional
    duplicatedFromId: '' // optional
});

console.log(result);
```
