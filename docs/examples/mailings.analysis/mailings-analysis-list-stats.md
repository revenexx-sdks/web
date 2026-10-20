```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisListStats({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    mailingId: '' // optional
});

console.log(result);
```
