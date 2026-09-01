```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersUpdate({
    id: '',
    credentials: {}, // optional
    enabled: true, // optional
    name: 'Stripe', // optional
    options: {
        "capture_method": "automatic",
        "logo_url": "https:\/\/apps.example.com\/payments\/logos\/stripe",
        "three_ds": false
    }, // optional
    provider: 'stripe', // optional
    testMode: true, // optional
    webhookSecret: '' // optional
});

console.log(result);
```
