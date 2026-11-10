# pages

## pages-library-list

Search the reusable-block library

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesLibraryList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    bundles: 'hero,teaser', // optional
    text: 'hero' // optional
});

console.log(result);
```

## pages-library-delete

Soft-delete a library item

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesLibraryDelete({
    id: ''
});

console.log(result);
```

## pages-library-get

Read one library item

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesLibraryGet({
    id: ''
});

console.log(result);
```

## pages-library-update

Update a library item

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesLibraryUpdate({
    id: '',
    bundle: 'teaser', // optional
    label: 'Newsletter teaser', // optional
    metadata: {}, // optional
    tree: {} // optional
});

console.log(result);
```

## pages-menus-list

List navigation menus

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesMenusList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## pages-menus-upsert

Create or replace a menu by key

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesMenusUpsert({
    label: 'Main navigation',
    menuKey: 'main',
    items: [] // optional
});

console.log(result);
```

## pages-menus-delete

Soft-delete a menu

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesMenusDelete({
    id: ''
});

console.log(result);
```

## pages-menus-get

Read one menu by id

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesMenusGet({
    id: ''
});

console.log(result);
```

## pages-menus-update

Update a menu's label and items

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesMenusUpdate({
    id: '',
    items: [], // optional
    label: 'Main navigation', // optional
    metadata: {} // optional
});

console.log(result);
```

## pages-pages-list

List pages

```javascript
import { Client, Pages, PageStatus, Deleted } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    bundle: 'standard', // optional
    status: PageStatus.Draft, // optional
    q: 'contact', // optional
    deleted: Deleted.Only // optional
});

console.log(result);
```

## pages-pages-create

Create a page

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesCreate({
    title: 'About us',
    bundle: 'standard', // optional
    hostOptions: {}, // optional
    meta: {}, // optional
    slug: 'about-us', // optional
    sourceLanguage: 'de', // optional
    templateId: '' // optional
});

console.log(result);
```

## pages-pages-delete

Soft-delete a page

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesDelete({
    id: ''
});

console.log(result);
```

## pages-pages-get

Read one page by id

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesGet({
    id: ''
});

console.log(result);
```

## pages-pages-update

Update page metadata

```javascript
import { Client, Pages, PageStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesUpdate({
    id: '',
    bundle: 'standard', // optional
    meta: {}, // optional
    slug: 'about-us', // optional
    status: PageStatus.Draft, // optional
    title: 'About us' // optional
});

console.log(result);
```

## pages-pages-duplicate

Duplicate a page

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesDuplicate({
    id: '',
    slug: 'about-us-2', // optional
    title: 'About us (copy)' // optional
});

console.log(result);
```

## pages-pages-restore

Restore a soft-deleted page

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesRestore({
    id: ''
});

console.log(result);
```

## pages-pages-revisions

List a page's publish history

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesRevisions({
    id: '',
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    label: 'Autumn campaign', // optional
    createdBy: '', // optional
    createdByName: '', // optional
    createdAt: '' // optional
});

console.log(result);
```

## pages-popups-list

List pop-ups

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPopupsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    campaignRef: '' // optional
});

console.log(result);
```

## pages-popups-create

Create a pop-up

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPopupsCreate({
    label: 'Newsletter-Anmeldung Herbst',
    campaignRef: '', // optional
    metadata: {}, // optional
    popup: {}, // optional
    tree: {} // optional
});

console.log(result);
```

## pages-popups-update

Change a pop-up

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPopupsUpdate({
    id: '',
    campaignRef: '', // optional
    label: 'Newsletter-Anmeldung Winter', // optional
    metadata: {}, // optional
    popup: {}, // optional
    tree: {} // optional
});

console.log(result);
```

## pages-seed

Seed a theme's default content

```javascript
import { Client, Pages, PagesSeedMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesSeed({
    library: [], // optional
    menus: [], // optional
    mode: PagesSeedMode.Fill, // optional
    pages: [], // optional
    settings: {} // optional
});

console.log(result);
```

## pages-settings-site-list

List site settings

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesSettingsSiteList();

console.log(result);
```

## pages-settings-site-delete

Remove a site setting

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesSettingsSiteDelete({
    key: ''
});

console.log(result);
```

## pages-settings-site-get

Read one site setting

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesSettingsSiteGet({
    key: ''
});

console.log(result);
```

## pages-settings-site-put

Set a site setting

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesSettingsSitePut({
    key: '',
    value: {}
});

console.log(result);
```

## pages-template-assignments-list

List template assignments

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplateAssignmentsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    resourceType: 'product', // optional
    pageSlug: 'product-detail' // optional
});

console.log(result);
```

## pages-template-assignments-delete

Remove a template assignment

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplateAssignmentsDelete({
    resourceType: '',
    resourceId: ''
});

console.log(result);
```

## pages-template-assignments-put

Assign a template page to a record

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplateAssignmentsPut({
    resourceType: '',
    resourceId: '',
    pageSlug: 'product-detail'
});

console.log(result);
```

## pages-templates-list

List block templates

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplatesList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    label: 'Hero with two teasers', // optional
    description: 'Full-width hero followed by a two-column teaser row.', // optional
    pageBundle: 'standard', // optional
    fieldName: 'content', // optional
    isDefault: true, // optional
    createdBy: '', // optional
    createdAt: '', // optional
    updatedAt: '' // optional
});

console.log(result);
```

## pages-templates-delete

Delete a template

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplatesDelete({
    id: ''
});

console.log(result);
```

## pages-templates-get

Read one template

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplatesGet({
    id: ''
});

console.log(result);
```

## pages-templates-update

Update a template

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplatesUpdate({
    id: '',
    description: 'Full-width hero followed by a two-column teaser row.', // optional
    fieldName: 'content', // optional
    isDefault: true, // optional
    label: 'Hero with two teasers', // optional
    pageBundle: 'standard', // optional
    tree: [] // optional
});

console.log(result);
```

## pages-vocabularies-list

List vocabularies

```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesVocabulariesList();

console.log(result);
```

## pages-vocabularies-get

Read one vocabulary

```javascript
import { Client, Pages, PagesVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesVocabulariesGet({
    name: PagesVocabulariesGetName.Editstatestatuses
});

console.log(result);
```
