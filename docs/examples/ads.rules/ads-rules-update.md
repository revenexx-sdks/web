```javascript
import { Client, AdsRules, Event, ValueSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsRules = new AdsRules(client);

const result = await adsRules.adsRulesUpdate({
    id: '',
    active: true, // optional
    adAccountId: '', // optional
    consentPurpose: '', // optional
    event: Event.OrderPlaced, // optional
    externalConversionRef: '', // optional
    fixedValue: 9.99, // optional
    metadata: null, // optional
    name: '', // optional
    valueSource: ValueSource.OrderNet // optional
});

console.log(result);
```
