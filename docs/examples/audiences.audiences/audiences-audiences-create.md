```javascript
import { Client, AudiencesAudiences, Kind, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesCreate({
    code: '',
    active: true, // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    kind: Kind.Active, // optional
    labels: null, // optional
    metadata: null, // optional
    ruleMatch: RuleMatch.All, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
