```javascript
import { Client, AudiencesAudiences, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesPreview({
    id: '',
    ruleMatch: RuleMatch.All, // optional
    rules: [] // optional
});

console.log(result);
```
