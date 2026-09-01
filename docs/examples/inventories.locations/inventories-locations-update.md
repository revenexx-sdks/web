```javascript
import { Client, InventoriesLocations, LocationType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsUpdate({
    id: '',
    address: {
        "city": "Nuremberg",
        "country": "DE",
        "postal_code": "90402",
        "street": "Industriering 4"
    }, // optional
    code: 'main', // optional
    enabled: true, // optional
    labels: {
        "de": "Hauptlager",
        "en": "Main warehouse"
    }, // optional
    metadata: {
        "erp_site": "1000"
    }, // optional
    name: 'Main warehouse', // optional
    priority: 0, // optional
    type: LocationType.Warehouse // optional
});

console.log(result);
```
