```javascript
import { Client, MailingsVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsVocabularies = new MailingsVocabularies(client);

const result = await mailingsVocabularies.mailingsVocabulariesGet({
    name: ''
});

console.log(result);
```
