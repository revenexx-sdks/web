```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorMutationStatus({
    pageId: '',
    enabled: true,
    index: 1,
    langcode: 'de' // optional
});

console.log(result);
```
