```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutSessionsUpdate({
    id: '',
    accountId: '', // optional
    cartId: '', // optional
    channelCode: '', // optional
    claimedAt: '2026-01-01T12:00:00Z', // optional
    closedReason: '', // optional
    contactId: '', // optional
    correlationKey: '', // optional
    entryAction: '', // optional
    entryIntent: {}, // optional
    entryPayload: {}, // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    externalUserId: '', // optional
    organizationId: '', // optional
    origin: '', // optional
    protocol: '', // optional
    psid: '', // optional
    returnMethod: '', // optional
    returnUrl: '', // optional
    secureSessionId: '', // optional
    secureSessionUsedAt: '2026-01-01T12:00:00Z', // optional
    secureTransmissionId: '', // optional
    status: '', // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
