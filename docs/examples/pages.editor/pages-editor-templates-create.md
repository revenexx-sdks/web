```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorTemplatesCreate({
    pageId: '',
    label: 'Hero with two teasers',
    uuids: [],
    description: 'Full-width hero followed by a two-column teaser row.', // optional
    fieldName: 'content', // optional
    isDefault: true, // optional
    pageBundle: 'standard' // optional
});

console.log(result);
```
