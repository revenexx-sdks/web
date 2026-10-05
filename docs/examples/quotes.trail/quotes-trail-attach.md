```javascript
import { Client, QuotesTrail, QuotesTrailAttachDirection, Visibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesTrail = new QuotesTrail(client);

const result = await quotesTrail.quotesTrailAttach({
    id: '',
    fileRef: '',
    filename: '',
    byteSize: 1, // optional
    contentType: '', // optional
    direction: QuotesTrailAttachDirection.Buyer, // optional
    metadata: {}, // optional
    visibility: Visibility.Internal // optional
});

console.log(result);
```
