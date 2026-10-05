```javascript
import { Client, PaymentsLedger, PaymentsVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsVocabulariesGet({
    name: PaymentsVocabulariesGetName.Dunningstages
});

console.log(result);
```
