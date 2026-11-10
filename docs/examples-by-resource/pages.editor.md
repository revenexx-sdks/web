# pages.editor

## pages-editor-edit-states

Search open edit states across pages

```javascript
import { Client, PagesEditor, PageEditStateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorEditStates({
    status: PageEditStateStatus.Active, // optional
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```

## pages-editor-translate

Machine-translate text fields

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorTranslate({
    items: [] // optional
});

console.log(result);
```

## pages-editor-user-settings-get

Load the current user's editor settings

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorUserSettingsGet();

console.log(result);
```

## pages-editor-user-settings-put

Persist the current user's editor settings

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorUserSettingsPut({
    settings: {} // optional
});

console.log(result);
```

## pages-editor-history

Move the undo/redo pointer

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorHistory({
    pageId: '',
    index: 1,
    langcode: 'de' // optional
});

console.log(result);
```

## pages-editor-last-changed

Poll the edit state's last change

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorLastChanged({
    pageId: ''
});

console.log(result);
```

## pages-editor-mutation-status

Soft-enable/disable a single mutation in the log

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorMutationStatus({
    pageId: '',
    enabled: true,
    index: 1,
    langcode: 'de' // optional
});

console.log(result);
```

## pages-editor-mutate

Append a mutation to the edit state

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorMutate({
    pageId: '',
    plugin: 'add',
    langcode: 'de', // optional
    payload: {} // optional
});

console.log(result);
```

## pages-editor-preview-grant

Create a preview share token

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorPreviewGrant({
    pageId: '',
    ttlHours: 1 // optional
});

console.log(result);
```

## pages-editor-publish

Publish the edit state

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorPublish({
    pageId: '',
    force: true, // optional
    label: 'Autumn campaign' // optional
});

console.log(result);
```

## pages-editor-revert

Discard all unpublished changes

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorRevert({
    pageId: ''
});

console.log(result);
```

## pages-editor-schedule

Park the edit state for a future publication date

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorSchedule({
    pageId: '',
    scheduledAt: '2026-01-01T12:00:00Z'
});

console.log(result);
```

## pages-editor-state

Load the editor state for a page

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorState({
    pageId: '',
    langcode: 'de', // optional
    index: 1 // optional
});

console.log(result);
```

## pages-editor-take-ownership

Take ownership of the edit state

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorTakeOwnership({
    pageId: ''
});

console.log(result);
```

## pages-editor-templates-create

Create a template from the edit state

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorTemplatesCreate({
    pageId: '',
    label: 'Hero with two teasers',
    uuids: [],
    description: 'Full-width hero followed by a two-column teaser row.', // optional
    fieldName: 'content', // optional
    isDefault: true, // optional
    pageBundle: 'standard' // optional
});

console.log(result);
```

## pages-editor-unschedule

Cancel a scheduled publish

```javascript
import { Client, PagesEditor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesEditor = new PagesEditor(client);

const result = await pagesEditor.pagesEditorUnschedule({
    pageId: ''
});

console.log(result);
```
