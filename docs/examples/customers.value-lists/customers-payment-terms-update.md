```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersPaymentTermsUpdate({
    id: '',
    description: 'Invoice due 30 days after the delivery note.', // optional
    descriptions: {
        "de": "Rechnung 30 Tage nach Lieferschein f\u00e4llig.",
        "en": "Invoice due 30 days after the delivery note."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Zahlbar in 30 Tagen",
        "en": "Net 30 days"
    }, // optional
    position: 1, // optional
    title: 'Net 30 days', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```
