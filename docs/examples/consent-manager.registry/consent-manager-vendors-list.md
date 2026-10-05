```javascript
import { Client, ConsentManagerRegistry, LegalBasisOverride } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRegistry = new ConsentManagerRegistry(client);

const result = await consentManagerRegistry.consentManagerVendorsList({
    id: '', // optional
    code: 'google-analytics', // optional
    name: 'Google Analytics 4', // optional
    category: 'analytics', // optional
    company: 'Google Ireland Limited', // optional
    address: 'Gordon House, Barrow Street, Dublin 4, Ireland', // optional
    country: 'IE', // optional
    privacyPolicyUrl: 'https://policies.google.com/privacy', // optional
    dpaUrl: 'https://business.safety.google/adsprocessorterms/', // optional
    thirdCountryTransfer: true, // optional
    transferBasis: 'EU-US Data Privacy Framework; standard contractual clauses', // optional
    registryKey: 'googleAnalytics', // optional
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=', // optional
    legalBasisOverride: LegalBasisOverride.Consent, // optional
    catalogKey: 'google-analytics', // optional
    catalogVersion: '2026.10.1', // optional
    position: 1, // optional
    isActive: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
