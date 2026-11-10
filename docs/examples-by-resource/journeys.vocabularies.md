# journeys.vocabularies

## journeys-vocabularies-list

List the closed vocabularies this app enforces

```javascript
import { Client, JourneysVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysVocabularies = new JourneysVocabularies(client);

const result = await journeysVocabularies.journeysVocabulariesList();

console.log(result);
```

## journeys-vocabularies-get

Read one vocabulary with its values and labels

```javascript
import { Client, JourneysVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysVocabularies = new JourneysVocabularies(client);

const result = await journeysVocabularies.journeysVocabulariesGet({
    name: ''
});

console.log(result);
```
