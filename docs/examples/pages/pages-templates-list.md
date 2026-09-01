```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplatesList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    label: 'Hero with two teasers', // optional
    description: 'Full-width hero followed by a two-column teaser row.', // optional
    pageBundle: 'standard', // optional
    fieldName: 'content', // optional
    isDefault: true, // optional
    createdBy: '', // optional
    createdAt: '', // optional
    updatedAt: '' // optional
});

console.log(result);
```
