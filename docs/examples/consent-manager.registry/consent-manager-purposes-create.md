```javascript
import { Client, ConsentManagerRegistry, LegalBasis, GoogleSignals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRegistry = new ConsentManagerRegistry(client);

const result = await consentManagerRegistry.consentManagerPurposesCreate({
    code: 'statistics',
    legalBasis: LegalBasis.Consent,
    name: {
        "de": "Statistik",
        "en": "Statistics"
    },
    description: {}, // optional
    googleSignals: [GoogleSignals.AnalyticsStorage], // optional
    isActive: true, // optional
    position: 1 // optional
});

console.log(result);
```
