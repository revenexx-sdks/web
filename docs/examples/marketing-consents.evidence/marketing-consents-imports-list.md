```javascript
import { Client, MarketingConsentsEvidence, ChannelEnum, MarketingConsentsImportsListLegalBasis, State } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsImportsList({
    id: '', // optional
    subscriptionTypeId: '', // optional
    channel: ChannelEnum.Email, // optional
    legalBasis: MarketingConsentsImportsListLegalBasis.ConsentSingle, // optional
    fileRef: '', // optional
    proofNote: '', // optional
    rows: 1, // optional
    accepted: 1, // optional
    rejected: 1, // optional
    state: State.Running, // optional
    createdBy: '', // optional
    finishedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
