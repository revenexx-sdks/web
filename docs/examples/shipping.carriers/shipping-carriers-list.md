```javascript
import { Client, ShippingCarriers, ShippingCarriersListStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingCarriers = new ShippingCarriers(client);

const result = await shippingCarriers.shippingCarriersList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'position.asc', // optional
    code: 'acme-parcel', // optional
    status: ShippingCarriersListStatus.Active, // optional
    serviceLevel: 'express' // optional
});

console.log(result);
```
