# avatars

## avatars-get-browser

Get browser icon

```javascript
import { Client, Avatars, Code } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetBrowser({
    code: Code.Aa,
    width: 1, // optional
    height: 1, // optional
    quality: 1 // optional
});

console.log(result);
```

## avatars-get-credit-card

Get credit card icon

```javascript
import { Client, Avatars, AvatarsGetCreditCardCode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetCreditCard({
    code: AvatarsGetCreditCardCode.Amex,
    width: 1, // optional
    height: 1, // optional
    quality: 1 // optional
});

console.log(result);
```

## avatars-get-flag

Get country flag

```javascript
import { Client, Avatars, AvatarsGetFlagCode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetFlag({
    code: AvatarsGetFlagCode.Af,
    width: 1, // optional
    height: 1, // optional
    quality: 1 // optional
});

console.log(result);
```

## avatars-get-image

Get image from URL

```javascript
import { Client, Avatars } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetImage({
    url: 'https://www.revenexx.com/img/hero-revenexx-poster.webp',
    width: 1, // optional
    height: 1 // optional
});

console.log(result);
```

## avatars-get-initials

Get user initials

```javascript
import { Client, Avatars } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetInitials({
    name: 'Ada Lovelace', // optional
    width: 1, // optional
    height: 1, // optional
    background: '1a73e8' // optional
});

console.log(result);
```

## avatars-get-qr

Get QR code

```javascript
import { Client, Avatars } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const avatars = new Avatars(client);

const result = await avatars.avatarsGetQR({
    text: '',
    size: 1, // optional
    margin: 1, // optional
    download: true // optional
});

console.log(result);
```

## avatars-get-screenshot

Get webpage screenshot

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
