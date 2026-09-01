```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthRegister({
    email: 'einkauf@example.com',
    password: '',
    firstName: 'Anna', // optional
    lastName: 'Berger', // optional
    locale: 'de-DE', // optional
    organizationId: '', // optional
    organizationName: 'Beispiel Industrietechnik GmbH', // optional
    url: 'https://shop.example.com/account', // optional
    vatId: 'DE123456789', // optional
    verificationUrl: 'https://shop.example.com/bestaetigen' // optional
});

console.log(result);
```
