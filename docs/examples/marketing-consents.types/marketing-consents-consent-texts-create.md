```javascript
import { Client, MarketingConsentsTypes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsTypes = new MarketingConsentsTypes(client);

const result = await marketingConsentsTypes.marketingConsentsConsentTextsCreate({
    locale: 'de',
    subscriptionTypeId: '',
    wording: 'Ja, ich möchte den Newsletter mit Neuheiten und Aktionen erhalten. Abmeldung jederzeit über den Link in jeder Mail.'
});

console.log(result);
```
