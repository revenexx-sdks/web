```javascript
import { Client, ConsentManagerRegistry, GoogleSignals, LegalBasis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRegistry = new ConsentManagerRegistry(client);

const result = await consentManagerRegistry.consentManagerPurposesUpdate({
    id: '',
    code: 'statistics', // optional
    description: {}, // optional
    googleSignals: [GoogleSignals.AnalyticsStorage], // optional
    isActive: true, // optional
    legalBasis: LegalBasis.Consent, // optional
    name: {
        "de": "Statistik",
        "en": "Statistics"
    }, // optional
    position: 1 // optional
});

console.log(result);
```
