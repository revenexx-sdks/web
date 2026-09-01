```javascript
import { Client, PagesEditor, PageEditStateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorEditStates({
    status: PageEditStateStatus.Active, // optional
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```
