```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactLifecycleStagesUpdate({
    id: '',
    active: true, // optional
    description: 'Showed an interest of their own — a form, a fair, a call.', // optional
    descriptions: {
        "de": "Hat selbst Interesse gezeigt.",
        "en": "Showed an interest of their own."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Lead",
        "en": "Lead"
    }, // optional
    position: 1, // optional
    title: 'Lead', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```
