```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactEventKindsUpdate({
    id: '',
    description: 'Somebody spoke to this person on the phone.', // optional
    descriptions: {
        "de": "Es wurde mit dieser Person telefoniert.",
        "en": "Somebody spoke to this person on the phone."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Telefonat",
        "en": "Phone call"
    }, // optional
    position: 1, // optional
    title: 'Phone call', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```
