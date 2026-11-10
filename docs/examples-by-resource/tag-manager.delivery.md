# tag-manager.delivery

## tag-manager-delivery-container

Read the storefront's published container

```javascript
import { Client, TagManagerDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerDelivery = new TagManagerDelivery(client);

const result = await tagManagerDelivery.tagManagerDeliveryContainer();

console.log(result);
```

## tag-manager-delivery-preview

Read the draft container by preview token

```javascript
import { Client, TagManagerDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerDelivery = new TagManagerDelivery(client);

const result = await tagManagerDelivery.tagManagerDeliveryPreview({
    token: ''
});

console.log(result);
```
