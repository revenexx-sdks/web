```javascript
import { Client, MarketingConsentsEvidence, MarketingConsentsImportsListLegalBasis, ChannelEnum } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsEvidence = new MarketingConsentsEvidence(client);

const result = await marketingConsentsEvidence.marketingConsentsImportsCreate({
    legalBasis: MarketingConsentsImportsListLegalBasis.ConsentSingle,
    proofNote: 'Altsystem Shopware, Double-Opt-in-Log 2019–2026',
    rows: [],
    subscriptionType: 'newsletter',
    channel: ChannelEnum.Email, // optional
    fileRef: 'newsletter-export-2026-09.csv' // optional
});

console.log(result);
```
