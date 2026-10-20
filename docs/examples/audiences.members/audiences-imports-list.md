```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesImportsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    audienceId: '', // optional
    filename: '', // optional
    rows: '', // optional
    accepted: '', // optional
    rejected: '', // optional
    state: '' // optional
});

console.log(result);
```
