```javascript
import { Client, Forms, FormSubmissionStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsUpdate({
    id: '',
    data: {
        "company": "Example GmbH",
        "email": "buyer@example.com",
        "message": "Please quote 200 units of ACME-4711-BLK, delivered to Hamburg."
    }, // optional
    formId: '', // optional
    formSlug: 'contact', // optional
    metadata: {}, // optional
    source: '/contact', // optional
    status: FormSubmissionStatus.New // optional
});

console.log(result);
```
