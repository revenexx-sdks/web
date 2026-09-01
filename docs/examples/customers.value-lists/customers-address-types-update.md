```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersAddressTypesUpdate({
    id: '',
    description: 'Where the goods go.', // optional
    descriptions: {
        "de": "Wohin die Ware geliefert wird.",
        "en": "Where the goods go."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Lieferadresse",
        "en": "Shipping address"
    }, // optional
    position: 1, // optional
    title: 'Shipping address', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```
