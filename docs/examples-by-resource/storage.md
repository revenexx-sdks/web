# storage

## asset-index

List assets

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetIndex({
    search: '' // optional
});

console.log(result);
```

## asset-store

Upload an asset

```javascript
import { Client, Storage, AssetStoreVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetStore({
    file: document.getElementById('uploader').files[0],
    altText: '', // optional
    description: '', // optional
    displayName: '', // optional
    folderId: '', // optional
    keepArchive: true, // optional
    tags: [], // optional
    unpack: true, // optional
    visibility: AssetStoreVisibility.Public // optional
});

console.log(result);
```

## asset-bulk

Upload several assets

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetBulk({
    folderId: '', // optional
    visibility: '' // optional
});

console.log(result);
```

## asset-destroy

Delete an asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetDestroy({
    id: ''
});

console.log(result);
```

## asset-show

Get an asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetShow({
    id: ''
});

console.log(result);
```

## asset-update

Update an asset

```javascript
import { Client, Storage, AssetStoreVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetUpdate({
    id: '',
    altText: '', // optional
    description: '', // optional
    displayName: '', // optional
    folderId: '', // optional
    name: '', // optional
    tags: [], // optional
    visibility: AssetStoreVisibility.Public // optional
});

console.log(result);
```

## asset-download

Download an asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetDownload({
    id: ''
});

console.log(result);
```

## asset-permanent

Permanently delete an asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetPermanent({
    id: ''
});

console.log(result);
```

## asset-reprocess

Reprocess an asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetReprocess({
    id: ''
});

console.log(result);
```

## asset-restore

Restore a deleted asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetRestore({
    id: ''
});

console.log(result);
```

## asset-sign

Create a signed asset URL

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetSign({
    id: '',
    ttlSeconds: 1 // optional
});

console.log(result);
```

## asset-unpack

Unpack an archive asset

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetUnpack({
    id: '',
    keepArchive: true, // optional
    targetFolderId: '' // optional
});

console.log(result);
```

## folder-index

List folders

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.folderIndex();

console.log(result);
```

## folder-store

Create a folder

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.folderStore({
    name: '',
    parentId: '' // optional
});

console.log(result);
```

## folder-destroy

Delete a folder

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.folderDestroy({
    id: '',
    recursive: true // optional
});

console.log(result);
```

## folder-show

Get a folder

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.folderShow({
    id: ''
});

console.log(result);
```

## folder-update

Rename or move a folder

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.folderUpdate({
    id: '',
    name: '', // optional
    parentId: '' // optional
});

console.log(result);
```

## sync-rule-index

List SFTP sync rules

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleIndex();

console.log(result);
```

## sync-rule-store

Create an SFTP sync rule

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleStore({
    sftpAccountId: '',
    sourcePath: '/uploads',
    enabled: true, // optional
    options: [], // optional
    schedule: '0 3 * * *', // optional
    targetFolderId: '' // optional
});

console.log(result);
```

## sync-rule-destroy

Delete an SFTP sync rule

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleDestroy({
    id: ''
});

console.log(result);
```

## sync-rule-show

Get an SFTP sync rule

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleShow({
    id: ''
});

console.log(result);
```

## sync-rule-update

Update an SFTP sync rule

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleUpdate({
    id: '',
    enabled: true, // optional
    options: [], // optional
    schedule: '0 3 * * *', // optional
    sftpAccountId: '', // optional
    sourcePath: '/uploads', // optional
    targetFolderId: '' // optional
});

console.log(result);
```

## sync-rule-run

Run an SFTP sync rule now

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleRun({
    id: ''
});

console.log(result);
```

## sync-rule-run-protocol

Get an SFTP sync run protocol

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleRunProtocol({
    id: '',
    runId: ''
});

console.log(result);
```

## sync-rule-history

List SFTP sync history

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.syncRuleHistory({
    ruleId: '', // optional
    from: '2026-01-01T12:00:00Z', // optional
    to: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## tenant-stats

Get storage statistics

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.tenantStats();

console.log(result);
```

## tenant-usage

Get storage usage

```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.tenantUsage();

console.log(result);
```
