# pages.delivery

## pages-delivery-menus

List navigation menus for the renderer

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryMenus({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## pages-delivery-page

Resolve a published page by slug or id

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPage({
    slug: 'about-us', // optional
    id: '', // optional
    langcode: 'de', // optional
    audiences: 'newsletter-de,stammkunden', // optional
    consents: 'marketing,analytics' // optional
});

console.log(result);
```

## pages-delivery-pages

List published pages

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPages({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    bundle: 'standard' // optional
});

console.log(result);
```

## pages-delivery-popups

List the pop-ups a visitor may see

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPopups({
    langcode: 'de', // optional
    audiences: 'newsletter-de,stammkunden', // optional
    consents: 'marketing,analytics' // optional
});

console.log(result);
```

## pages-delivery-preview

Resolve a preview token to a page

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPreview({
    token: '',
    langcode: 'de' // optional
});

console.log(result);
```

## pages-delivery-site-settings

Read the site settings for rendering

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliverySiteSettings();

console.log(result);
```

## pages-delivery-template

Resolve the template page of a record

```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryTemplate({
    type: 'product', // optional
    id: '5137' // optional
});

console.log(result);
```
