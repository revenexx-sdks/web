```javascript
import { Client, Forms, FormsSubmissionsPruneStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsPrune({
    dryRun: true, // optional
    formSlug: 'contact', // optional
    olderThanDays: 1, // optional
    status: FormsSubmissionsPruneStatus.New // optional
});

console.log(result);
```
