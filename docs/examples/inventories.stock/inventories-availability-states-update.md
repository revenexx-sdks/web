```javascript
import { Client, InventoriesStock, AvailabilityStateTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailabilityStatesUpdate({
    id: '',
    code: 'on_order', // optional
    description: 'Replenishment is on its way; the expected date says when.', // optional
    descriptions: {
        "de": "Nachschub ist unterwegs.",
        "en": "Replenishment is on its way."
    }, // optional
    isDefault: true, // optional
    isSystem: true, // optional
    labels: {
        "de": "Bestellt",
        "en": "On order"
    }, // optional
    orderable: true, // optional
    position: 1, // optional
    title: 'On order', // optional
    tone: AvailabilityStateTone.Info // optional
});

console.log(result);
```
