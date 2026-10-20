```javascript
import { Client, MarketingConsentsTypes, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsTypes = new MarketingConsentsTypes(client);

const result = await marketingConsentsTypes.marketingConsentsSubscriptionTypesUpdate({
    id: '',
    allowsExistingCustomer: true, // optional
    channels: [Channels.Email, Channels.Sms], // optional
    code: 'newsletter', // optional
    descriptions: {}, // optional
    labels: {
        "de": "Newsletter",
        "en": "Newsletter"
    }, // optional
    position: 10, // optional
    requiresDoi: true, // optional
    similarGoodsNote: {
        "de": "Ersatzteile und Zubeh\u00f6r zu gekauften Ger\u00e4ten.",
        "en": "Spare parts and accessories for purchased devices."
    } // optional
});

console.log(result);
```
