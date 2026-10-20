```javascript
import { Client, AudiencesRules } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    audienceId: '', // optional
    parentId: '', // optional
    kind: '', // optional
    matchMode: '', // optional
    negate: '', // optional
    subject: '', // optional
    field: '', // optional
    operator: '', // optional
    windowDays: '', // optional
    channel: '', // optional
    position: '' // optional
});

console.log(result);
```
