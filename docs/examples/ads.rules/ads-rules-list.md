```javascript
import { Client, AdsRules } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsRules = new AdsRules(client);

const result = await adsRules.adsRulesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    adAccountId: '', // optional
    name: '', // optional
    event: '', // optional
    valueSource: '', // optional
    externalConversionRef: '', // optional
    consentPurpose: '', // optional
    active: '' // optional
});

console.log(result);
```
