# search

## search-list-collections

List the tenant's collections

```javascript
import { Client, Search } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchListCollections();

console.log(result);
```

## search-get-collection

Get a collection's schema

```javascript
import { Client, Search, Collection } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchGetCollection({
    collection: Collection.Categories
});

console.log(result);
```

## search-search-documents-get

Search a collection (query parameters)

```javascript
import { Client, Search, Collection } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchSearchDocumentsGet({
    collection: Collection.Categories,
    q: '', // optional
    queryBy: '', // optional
    filterBy: '', // optional
    sortBy: '', // optional
    facetBy: '', // optional
    maxFacetValues: 1, // optional
    groupBy: '', // optional
    includeFields: '', // optional
    excludeFields: '', // optional
    highlightFullFields: '', // optional
    numTypos: 1, // optional
    prefix: '', // optional
    page: 1, // optional
    perPage: 1 // optional
});

console.log(result);
```

## search-search-documents

Search a collection

```javascript
import { Client, Search, Collection } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchSearchDocuments({
    collection: Collection.Categories,
    excludeFields: '', // optional
    facetBy: '', // optional
    filterBy: '', // optional
    groupBy: '', // optional
    highlightFullFields: '', // optional
    includeFields: '', // optional
    maxFacetValues: 1, // optional
    numTypos: 1, // optional
    page: 1, // optional
    perPage: 1, // optional
    prefix: '', // optional
    q: '', // optional
    queryBy: '', // optional
    sortBy: '' // optional
});

console.log(result);
```

## search-get-document

Get a document

```javascript
import { Client, Search, Collection } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchGetDocument({
    collection: Collection.Categories,
    documentId: ''
});

console.log(result);
```

## search-events

Report what a shopper did with a result

```javascript
import { Client, Search, SearchEventsType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchEvents({
    collection: '',
    type: SearchEventsType.Click,
    docId: '', // optional
    position: 1, // optional
    q: '', // optional
    queryId: '', // optional
    userToken: '' // optional
});

console.log(result);
```

## gateway-facet-resync

Re-sync the tenant's dynamic `attrs.<code>` facet fields

```javascript
import { Client, Search } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.gatewayFacetResync({
    app: '', // optional
    vendor: '' // optional
});

console.log(result);
```

## search-multi-search

Federated multi-search

```javascript
import { Client, Search } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchMultiSearch({
    searches: []
});

console.log(result);
```

## search-query

View-based search

```javascript
import { Client, Search } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchQuery({
    collection: '',
    filters: {}, // optional
    page: 1, // optional
    perPage: 1, // optional
    q: '', // optional
    sort: '', // optional
    view: '' // optional
});

console.log(result);
```

## search-suggest

Quick search over several collections

```javascript
import { Client, Search } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchSuggest({
    q: '',
    collections: [], // optional
    perPage: 1 // optional
});

console.log(result);
```
