# io

## list-bulk-jobs

List bulk jobs for the tenant

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.listBulkJobs({
    type: null, // optional
    status: null, // optional
    vendor: '', // optional
    app: '', // optional
    entity: '', // optional
    limit: 1 // optional
});

console.log(result);
```

## get-bulk-job

Get a bulk job's status

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.getBulkJob({
    id: ''
});

console.log(result);
```

## list-io-entities

Catalogue of importable / exportable entities

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.listIoEntities();

console.log(result);
```

## create-export

Export a tenant's entity to object storage

```javascript
import { Client, Io, Format } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.createExport({
    app: '',
    entity: '',
    vendor: '',
    format: Format.Csv, // optional
    profileId: '' // optional
});

console.log(result);
```

## get-export-url

Signed download URL for a finished export

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.getExportUrl({
    id: ''
});

console.log(result);
```

## create-import

Register an uploaded object as an import job

```javascript
import { Client, Io, Format, Mode, CreateImportTarget } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.createImport({
    app: '',
    entity: '',
    objectKey: '',
    vendor: '',
    format: Format.Csv, // optional
    keys: [], // optional
    maxRejects: 1, // optional
    mode: Mode.Upsert, // optional
    profileId: '', // optional
    target: CreateImportTarget.Live // optional
});

console.log(result);
```

## list-profiles

List the tenant's import/export profiles

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.listProfiles();

console.log(result);
```

## create-profile

Create an import/export profile

```javascript
import { Client, Io, Direction, ApplyMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.createProfile({
    app: '',
    direction: Direction.Import,
    entity: '',
    format: '',
    name: '',
    vendor: '',
    applyMode: ApplyMode.Upsert, // optional
    mapping: {}, // optional
    markets: [], // optional
    options: {} // optional
});

console.log(result);
```

## delete-profile

Delete an import/export profile

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.deleteProfile({
    id: ''
});

console.log(result);
```

## show-profile

Get one import/export profile

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.showProfile({
    id: ''
});

console.log(result);
```

## update-profile

Update an import/export profile

```javascript
import { Client, Io, Direction, ApplyMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.updateProfile({
    id: '',
    app: '',
    direction: Direction.Import,
    entity: '',
    format: '',
    name: '',
    vendor: '',
    applyMode: ApplyMode.Upsert, // optional
    mapping: {}, // optional
    markets: [], // optional
    options: {} // optional
});

console.log(result);
```

## run-profile

Run a saved profile (on-click import/export)

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.runProfile({
    id: '',
    markets: [], // optional
    objectKey: '' // optional
});

console.log(result);
```

## create-upload

Mint a tenant-scoped signed upload URL

```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.createUpload({
    extension: 'csv' // optional
});

console.log(result);
```
