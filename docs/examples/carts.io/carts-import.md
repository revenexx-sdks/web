```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsImport({
    contactId: '', // optional
    csv: 'sku,name,quantity,unit_price
BOLT-M8-30,Hex bolt M8,100,0.12
NUT-M8,Hex nut M8,100,0.04
', // optional
    name: 'Weekly order', // optional
    payload: {
        "cart": {
            "currency": "EUR",
            "name": "Weekly order"
        },
        "items": [
            {
                "name": "Hex bolt M8",
                "quantity": 100,
                "sku": "BOLT-M8-30",
                "unit_price": 0.12
            }
        ]
    }, // optional
    profileId: '', // optional
    sessionKey: 'a1b2c3d4e5f6', // optional
    targetCartId: '' // optional
});

console.log(result);
```
