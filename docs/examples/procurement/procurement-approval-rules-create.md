```javascript
import { Client, Procurement, Condition, Effect, ApproverType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesCreate({
    condition: Condition.Always,
    effect: Effect.PendingOrder,
    name: '',
    active: true, // optional
    approverContactId: '', // optional
    approverRole: '', // optional
    approverType: ApproverType.Contact, // optional
    conditionParameters: {}, // optional
    costCenterId: '', // optional
    effectParameters: {}, // optional
    metadata: {}, // optional
    sequence: 1, // optional
    showCondition: true // optional
});

console.log(result);
```
