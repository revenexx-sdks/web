```javascript
import { Client, Procurement, ProcurementPurchaseRequestItemsCreateType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsCreate({
    name: '',
    purchaseRequestId: '',
    quantity: 9.99,
    configuration: {}, // optional
    costCenter: '', // optional
    lineTotal: 9.99, // optional
    metadata: {}, // optional
    position: 1, // optional
    positionText: '', // optional
    product: {}, // optional
    productId: '', // optional
    sku: '', // optional
    taxAmount: 9.99, // optional
    taxRate: 9.99, // optional
    type: ProcurementPurchaseRequestItemsCreateType.Product, // optional
    unit: '', // optional
    unitPrice: 9.99, // optional
    userData: {} // optional
});

console.log(result);
```
