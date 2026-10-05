```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactPointKindsUpdate({
    id: '',
    description: 'Where the invoice is sent.', // optional
    descriptions: {
        "de": "Wohin die Rechnung geschickt wird.",
        "en": "Where the invoice is sent."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    position: 1, // optional
    title: 'Invoice', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```
