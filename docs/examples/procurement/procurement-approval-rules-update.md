```javascript
import { Client, Procurement, ApproverType, Condition, Effect } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesUpdate({
    id: '',
    active: true, // optional
    approverContactId: '', // optional
    approverRole: '', // optional
    approverType: ApproverType.Contact, // optional
    condition: Condition.Always, // optional
    conditionParameters: {}, // optional
    costCenterId: '', // optional
    effect: Effect.PendingOrder, // optional
    effectParameters: {}, // optional
    metadata: {}, // optional
    name: '', // optional
    sequence: 1, // optional
    showCondition: true // optional
});

console.log(result);
```
