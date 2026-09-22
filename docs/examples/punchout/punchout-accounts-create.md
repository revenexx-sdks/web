```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsCreate({
    channelCode: '',
    code: '',
    name: '',
    protocol: '',
    authStrategy: '', // optional
    behaviour: {}, // optional
    credentialDomain: '', // optional
    credentialIdentity: '', // optional
    credentialSecret: '', // optional
    enabled: true, // optional
    fallbackContactId: '', // optional
    idsCustomerName: '', // optional
    loginToken: '', // optional
    organizationId: '', // optional
    protocolVersion: '', // optional
    secureOci: true, // optional
    sessionTtlMinutes: 1, // optional
    sharedSecret: '', // optional
    startPageUrl: '', // optional
    unknownUserPolicy: '', // optional
    urlThreading: true // optional
});

console.log(result);
```
