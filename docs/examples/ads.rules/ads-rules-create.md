```javascript
import { Client, AdsRules, Event, ValueSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsRules = new AdsRules(client);

const result = await adsRules.adsRulesCreate({
    adAccountId: '',
    event: Event.OrderPlaced,
    name: '',
    active: true, // optional
    consentPurpose: '', // optional
    externalConversionRef: '', // optional
    fixedValue: 9.99, // optional
    metadata: null, // optional
    valueSource: ValueSource.OrderNet // optional
});

console.log(result);
```
