# pages.collaboration

## pages-editor-notifications-list

List the current user's notifications

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorNotificationsList({
    after: '', // optional
    markAsRead: 'true' // optional
});

console.log(result);
```

## pages-editor-notifications-mark-all-read

Mark all notifications read

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorNotificationsMarkAllRead();

console.log(result);
```

## pages-editor-notifications-unread-count

Unread notification count

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorNotificationsUnreadCount();

console.log(result);
```

## pages-editor-users

List users for @mentions

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorUsers();

console.log(result);
```

## pages-editor-comments-list

List a page's comments

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsList({
    pageId: ''
});

console.log(result);
```

## pages-editor-comments-create

Add a comment or reply

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsCreate({
    pageId: '',
    body: '<p>Please shorten this headline.</p>',
    blockUuids: [], // optional
    parentUuid: '' // optional
});

console.log(result);
```

## pages-editor-comments-delete

Delete a comment

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsDelete({
    pageId: '',
    uuid: ''
});

console.log(result);
```

## pages-editor-comments-update

Edit a comment body

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsUpdate({
    pageId: '',
    uuid: '',
    body: '<p>Please shorten this headline.</p>'
});

console.log(result);
```

## pages-editor-comments-resolve

Resolve a comment thread

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsResolve({
    pageId: '',
    uuid: ''
});

console.log(result);
```

## pages-editor-comments-toggle-task

Toggle a task checkbox in a comment

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsToggleTask({
    pageId: '',
    uuid: '',
    taskIndex: 1
});

console.log(result);
```

## pages-editor-comments-unresolve

Reopen a resolved thread

```javascript
import { Client, PagesCollaboration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesCollaboration = new PagesCollaboration(client);

const result = await pagesCollaboration.pagesEditorCommentsUnresolve({
    pageId: '',
    uuid: ''
});

console.log(result);
```
