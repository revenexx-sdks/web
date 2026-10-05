```javascript
import { Client, ConsentManagerRegistry, Kind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRegistry = new ConsentManagerRegistry(client);

const result = await consentManagerRegistry.consentManagerCookiesCreate({
    name: '_ga',
    vendorId: '',
    description: {}, // optional
    duration: {
        "de": "2 Jahre",
        "en": "2 years"
    }, // optional
    host: 'first-party', // optional
    kind: Kind.Cookie, // optional
    position: 1 // optional
});

console.log(result);
```
