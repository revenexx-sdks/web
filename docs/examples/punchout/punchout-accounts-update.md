```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsUpdate({
    id: '',
    authStrategy: '', // optional
    channelCode: '', // optional
    code: '', // optional
    credentialDomain: '', // optional
    credentialIdentity: '', // optional
    credentialSecret: '', // optional
    echoEntryParameters: false, // optional
    enabled: true, // optional
    externalId: 'ARIBA-4711', // optional
    externalRefs: {
        "ariba": "AN01000012345",
        "business-central": "K-10042"
    }, // optional
    fallbackContactId: '', // optional
    idsCustomerName: '', // optional
    loginToken: '', // optional
    metadata: {
        "account_manager": "ma",
        "onboarded": "2026-03-01"
    }, // optional
    name: '', // optional
    organizationId: '', // optional
    protocol: '', // optional
    protocolVersion: '5.0', // optional
    purchaseMode: '', // optional
    secureOci: true, // optional
    sessionTtlOverrideMinutes: 240, // optional
    sharedSecret: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Vendor_Posting_Group": "HANDEL"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    startPageUrl: 'https://shop.example.com/punchout/start', // optional
    unknownUserPolicy: '' // optional
});

console.log(result);
```
