# loyalty.vocabularies

## loyalty-vocabularies-list

List the closed vocabularies this app enforces

```javascript
import { Client, LoyaltyVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyVocabularies = new LoyaltyVocabularies(client);

const result = await loyaltyVocabularies.loyaltyVocabulariesList();

console.log(result);
```

## loyalty-vocabularies-get

Read one vocabulary with its values and labels

```javascript
import { Client, LoyaltyVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyVocabularies = new LoyaltyVocabularies(client);

const result = await loyaltyVocabularies.loyaltyVocabulariesGet({
    name: ''
});

console.log(result);
```
