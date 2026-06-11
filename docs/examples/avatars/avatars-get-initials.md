```javascript
import { Client, Avatars } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetInitials({
    name: '', // optional
    width: null, // optional
    height: null, // optional
    background: '' // optional
});

console.log(result);
```
