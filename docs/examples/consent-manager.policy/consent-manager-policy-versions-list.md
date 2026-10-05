```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerPolicyVersionsList({
    id: '', // optional
    number: 7, // optional
    market: 'de', // optional
    material: true, // optional
    materialNumber: 7, // optional
    sha256: 'e903c6b98c176311018c0f737505ecd7cd992728f71b48ec65a2074c79572472', // optional
    note: 'Added HubSpot under marketing', // optional
    publishedAt: '2026-01-01T12:00:00Z', // optional
    publishedBy: 'usr_7c19f4a2e0', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
