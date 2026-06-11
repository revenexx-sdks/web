```javascript
import { Client, Avatars, Theme, Timezone, Permissions, Output } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetScreenshot({
    url: '',
    headers: {}, // optional
    viewportWidth: null, // optional
    viewportHeight: null, // optional
    scale: null, // optional
    theme: Theme.Light, // optional
    userAgent: '', // optional
    fullpage: null, // optional
    locale: '', // optional
    timezone: Timezone.AfricaAbidjan, // optional
    latitude: null, // optional
    longitude: null, // optional
    accuracy: null, // optional
    touch: null, // optional
    permissions: [Permissions.Geolocation], // optional
    sleep: null, // optional
    width: null, // optional
    height: null, // optional
    quality: null, // optional
    output: Output.Jpg // optional
});

console.log(result);
```
