```javascript
import { Client, AdsAccounts, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    platform: '', // optional
    externalAccountId: '', // optional
    name: '', // optional
    connectionRef: '', // optional
    status: '', // optional
    currency: '', // optional
    lastError: '', // optional
    clicksTotal: '', // optional
    conversionsTotal: '', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeBlockedReason: '' // optional
});

console.log(result);
```
