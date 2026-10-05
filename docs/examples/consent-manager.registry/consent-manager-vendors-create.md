```javascript
import { Client, ConsentManagerRegistry, LegalBasisOverride } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRegistry = new ConsentManagerRegistry(client);

const result = await consentManagerRegistry.consentManagerVendorsCreate({
    code: 'google-analytics',
    name: 'Google Analytics 4',
    address: 'Gordon House, Barrow Street, Dublin 4, Ireland', // optional
    category: 'analytics', // optional
    chains: ["google-analytics"], // optional
    company: 'Google Ireland Limited', // optional
    country: 'IE', // optional
    description: {}, // optional
    dpaUrl: 'https://business.safety.google/adsprocessorterms/', // optional
    hosts: ["www.google-analytics.com"], // optional
    isActive: true, // optional
    legalBasisOverride: LegalBasisOverride.LegitimateInterest, // optional
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=', // optional
    position: 1, // optional
    privacyPolicyUrl: 'https://policies.google.com/privacy', // optional
    purposes: ["statistics"], // optional
    registryKey: 'googleAnalytics', // optional
    retentionNote: {}, // optional
    thirdCountryTransfer: true, // optional
    transferBasis: 'EU-US Data Privacy Framework; standard contractual clauses' // optional
});

console.log(result);
```
