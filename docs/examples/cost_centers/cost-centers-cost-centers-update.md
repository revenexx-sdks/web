```javascript
import { Client, CostCenters, BudgetType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersUpdate({
    id: '',
    accountableContactId: '', // optional
    active: true, // optional
    budgetType: BudgetType.Monetary, // optional
    code: '', // optional
    currency: '', // optional
    externalId: 'KOSTENSTELLE-4711', // optional
    externalRefs: {
        "business-central": "KOSTENSTELLE-4711",
        "legacy_shop": "kst-4711"
    }, // optional
    metadata: {}, // optional
    name: '', // optional
    organizationId: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Blocked": false,
            "Dimension_Code": "KOSTENSTELLE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
