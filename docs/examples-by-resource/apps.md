# apps

## apps-list

List apps

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsList({
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## apps-create

Create app

```javascript
import { Client, Apps, Runtime, Scopes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreate({
    functionId: '',
    name: '',
    runtime: Runtime.Node180,
    commands: 'npm install', // optional
    enabled: true, // optional
    entrypoint: 'src/main.js', // optional
    events: [], // optional
    execute: ["any"], // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: 'main', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    schedule: '0 3 * * *', // optional
    scopes: [Scopes.SessionsWrite], // optional
    specification: 's-1vcpu-512mb', // optional
    timeout: 1 // optional
});

console.log(result);
```

## apps-list-marketplace

List marketplace apps

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListMarketplace({
    search: '', // optional
    perPage: 1, // optional
    page: 1 // optional
});

console.log(result);
```

## apps-install-from-marketplace

Install app from marketplace

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsInstallFromMarketplace({
    name: '',
    owner: ''
});

console.log(result);
```

## apps-list-runtimes

List app runtimes

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListRuntimes();

console.log(result);
```

## apps-list-specifications

List app specifications

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListSpecifications();

console.log(result);
```

## apps-list-templates

List app templates

```javascript
import { Client, Apps, Runtimes, UseCases } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListTemplates({
    runtimes: [Runtimes.Node180], // optional
    useCases: [UseCases.Starter], // optional
    limit: 1, // optional
    offset: 1, // optional
    total: true // optional
});

console.log(result);
```

## apps-get-template

Get app template

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetTemplate({
    templateId: ''
});

console.log(result);
```

## apps-list-usage

List apps usage

```javascript
import { Client, Apps, Range } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListUsage({
    range: Range._24h // optional
});

console.log(result);
```

## apps-delete

Delete app

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsDelete({
    functionId: ''
});

console.log(result);
```

## apps-get

Get app

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGet({
    functionId: ''
});

console.log(result);
```

## apps-update

Update app

```javascript
import { Client, Apps, Runtime, Scopes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsUpdate({
    functionId: '',
    name: '',
    commands: 'npm install', // optional
    enabled: true, // optional
    entrypoint: 'src/main.js', // optional
    events: [], // optional
    execute: ["any"], // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: 'main', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    runtime: Runtime.Node180, // optional
    schedule: '0 3 * * *', // optional
    scopes: [Scopes.SessionsWrite], // optional
    specification: 's-1vcpu-512mb', // optional
    timeout: 1 // optional
});

console.log(result);
```

## apps-update-deployment

Update app active deployment

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsUpdateDeployment({
    functionId: '',
    deploymentId: ''
});

console.log(result);
```

## apps-list-deployments

List app deployments

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListDeployments({
    functionId: '',
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## apps-create-deployment

Create app deployment

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateDeployment({
    functionId: '',
    activate: true,
    code: document.getElementById('uploader').files[0],
    commands: '', // optional
    entrypoint: '' // optional
});

console.log(result);
```

## apps-create-duplicate-deployment

Create app duplicate deployment

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateDuplicateDeployment({
    functionId: '',
    deploymentId: '',
    buildId: '' // optional
});

console.log(result);
```

## apps-create-template-deployment

Create app template deployment

```javascript
import { Client, Apps, Type } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateTemplateDeployment({
    functionId: '',
    owner: '',
    reference: '',
    repository: '',
    rootDirectory: '',
    type: Type.Commit,
    activate: true // optional
});

console.log(result);
```

## apps-create-vcs-deployment

Create app VCS deployment

```javascript
import { Client, Apps, AppsCreateVcsDeploymentType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateVcsDeployment({
    functionId: '',
    reference: 'main',
    type: AppsCreateVcsDeploymentType.Branch,
    activate: true // optional
});

console.log(result);
```

## apps-delete-deployment

Delete app deployment

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsDeleteDeployment({
    functionId: '',
    deploymentId: ''
});

console.log(result);
```

## apps-get-deployment

Get app deployment

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetDeployment({
    functionId: '',
    deploymentId: ''
});

console.log(result);
```

## apps-get-deployment-download

Get app deployment download

```javascript
import { Client, Apps, AppsGetDeploymentDownloadType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetDeploymentDownload({
    functionId: '',
    deploymentId: '',
    type: AppsGetDeploymentDownloadType.Source // optional
});

console.log(result);
```

## apps-update-deployment-status

Update app deployment status

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsUpdateDeploymentStatus({
    functionId: '',
    deploymentId: ''
});

console.log(result);
```

## apps-list-executions

List app executions

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListExecutions({
    functionId: '',
    queries: [], // optional
    total: true // optional
});

console.log(result);
```

## apps-create-execution

Create app execution

```javascript
import { Client, Apps, Method } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateExecution({
    functionId: '',
    async: true, // optional
    body: '', // optional
    headers: {}, // optional
    method: Method.GET, // optional
    path: '/', // optional
    scheduledAt: '' // optional
});

console.log(result);
```

## apps-delete-execution

Delete app execution

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsDeleteExecution({
    functionId: '',
    executionId: ''
});

console.log(result);
```

## apps-get-execution

Get app execution

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetExecution({
    functionId: '',
    executionId: ''
});

console.log(result);
```

## apps-get-marketplace-status

Get app marketplace status

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetMarketplaceStatus({
    functionId: ''
});

console.log(result);
```

## apps-unpublish

Unpublish app from Marketplace

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsUnpublish({
    functionId: ''
});

console.log(result);
```

## apps-publish

Publish app to Marketplace

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsPublish({
    functionId: ''
});

console.log(result);
```

## apps-get-usage

Get app usage

```javascript
import { Client, Apps, Range } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetUsage({
    functionId: '',
    range: Range._24h // optional
});

console.log(result);
```

## apps-list-variables

List app variables

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListVariables({
    functionId: ''
});

console.log(result);
```

## apps-create-variable

Create app variable

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateVariable({
    functionId: '',
    key: '',
    value: '',
    secret: true // optional
});

console.log(result);
```

## apps-delete-variable

Delete app variable

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsDeleteVariable({
    functionId: '',
    variableId: ''
});

console.log(result);
```

## apps-get-variable

Get app variable

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsGetVariable({
    functionId: '',
    variableId: ''
});

console.log(result);
```

## apps-update-variable

Update app variable

```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsUpdateVariable({
    functionId: '',
    variableId: '',
    key: '',
    secret: true, // optional
    value: '' // optional
});

console.log(result);
```
