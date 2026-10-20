```javascript
import { Client, AudiencesAudiences, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    code: '', // optional
    description: '', // optional
    kind: '', // optional
    ruleMatch: '', // optional
    active: '', // optional
    memberCount: '', // optional
    eligibleCount: '', // optional
    rulesSummary: '', // optional
    recomputeState: '', // optional
    recomputeError: '', // optional
    frozenFromId: '' // optional
});

console.log(result);
```
