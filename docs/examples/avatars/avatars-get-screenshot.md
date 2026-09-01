```javascript
import { Client, Avatars, Theme, Timezone, Permissions, Output } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetScreenshot({
    url: 'https://example.com',
    headers: {}, // optional
    viewportWidth: 1, // optional
    viewportHeight: 1, // optional
    scale: 1, // optional
    theme: Theme.Light, // optional
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15', // optional
    fullpage: true, // optional
    locale: 'en-US', // optional
    timezone: Timezone.AfricaAbidjan, // optional
    latitude: 9.99, // optional
    longitude: 9.99, // optional
    accuracy: 9.99, // optional
    touch: true, // optional
    permissions: [Permissions.Geolocation], // optional
    sleep: 1, // optional
    width: 1, // optional
    height: 1, // optional
    quality: 1, // optional
    output: Output.Jpg // optional
});

console.log(result);
```
