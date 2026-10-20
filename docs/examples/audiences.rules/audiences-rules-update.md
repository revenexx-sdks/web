```javascript
import { Client, AudiencesRules, ChannelEnum, AudiencesRulesCreateKind, MatchMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesUpdate({
    id: '',
    audienceId: '', // optional
    channel: ChannelEnum.Email, // optional
    field: '', // optional
    kind: AudiencesRulesCreateKind.Group, // optional
    matchMode: MatchMode.All, // optional
    negate: true, // optional
    operator: '', // optional
    parentId: '', // optional
    position: 1, // optional
    subject: '', // optional
    value: null, // optional
    valueTo: null, // optional
    windowDays: 1 // optional
});

console.log(result);
```
