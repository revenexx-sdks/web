```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisListEngagements({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    mailingId: '', // optional
    kind: '', // optional
    email: '', // optional
    contactId: '', // optional
    messageId: '', // optional
    isMachine: '' // optional
});

console.log(result);
```
