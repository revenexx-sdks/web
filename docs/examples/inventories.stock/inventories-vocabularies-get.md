```javascript
import { Client, InventoriesStock, InventoriesVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesVocabulariesGet({
    name: InventoriesVocabulariesGetName.Availabilitystates
});

console.log(result);
```
