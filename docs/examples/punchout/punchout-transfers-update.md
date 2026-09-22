```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransfersUpdate({
    id: '',
    accountId: '', // optional
    cartId: '', // optional
    contactId: '', // optional
    correlationKey: '', // optional
    currency: '', // optional
    itemCount: 1, // optional
    matchedAt: '2026-01-01T12:00:00Z', // optional
    matchedOrderId: '', // optional
    organizationId: '', // optional
    payload: {}, // optional
    protocol: '', // optional
    sessionId: '', // optional
    targetUrl: '', // optional
    totalGross: 9.99, // optional
    totalNet: 9.99, // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
