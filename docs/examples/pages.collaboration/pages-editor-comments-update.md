```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsUpdate({
    pageId: '',
    uuid: '',
    body: '<p>Please shorten this headline.</p>'
});

console.log(result);
```
