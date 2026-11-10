# sites

## sites-list

List sites

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesList({
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## sites-create

Create site

```javascript
import { Client, Sites, BuildRuntime, Framework, Adapter } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreate({
    buildRuntime: BuildRuntime.Node180,
    framework: Framework.Analog,
    name: '',
    siteId: '',
    adapter: Adapter.Static, // optional
    buildCommand: 'npm run build', // optional
    enabled: true, // optional
    fallbackFile: 'index.html', // optional
    installCommand: 'npm install', // optional
    installationId: '', // optional
    logging: true, // optional
    outputDirectory: '', // optional
    providerBranch: 'main', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    specification: 's-1vcpu-512mb', // optional
    timeout: 1 // optional
});

console.log(result);
```

## sites-list-frameworks

List frameworks

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesListFrameworks();

console.log(result);
```

## sites-list-specifications

List specifications

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesListSpecifications();

console.log(result);
```

## sites-delete

Delete site

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesDelete({
    siteId: ''
});

console.log(result);
```

## sites-get

Get site

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesGet({
    siteId: ''
});

console.log(result);
```

## sites-update

Update site

```javascript
import { Client, Sites, Framework, Adapter, BuildRuntime } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesUpdate({
    siteId: '',
    framework: Framework.Analog,
    name: '',
    adapter: Adapter.Static, // optional
    buildCommand: 'npm run build', // optional
    buildRuntime: BuildRuntime.Node180, // optional
    enabled: true, // optional
    fallbackFile: 'index.html', // optional
    installCommand: 'npm install', // optional
    installationId: '', // optional
    logging: true, // optional
    outputDirectory: '', // optional
    providerBranch: 'main', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    specification: 's-1vcpu-512mb', // optional
    timeout: 1 // optional
});

console.log(result);
```

## sites-update-site-deployment

Update site's deployment

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesUpdateSiteDeployment({
    siteId: '',
    deploymentId: ''
});

console.log(result);
```

## sites-list-deployments

List deployments

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesListDeployments({
    siteId: '',
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## sites-create-deployment

Create deployment

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreateDeployment({
    siteId: '',
    activate: true,
    code: document.getElementById('uploader').files[0],
    buildCommand: '', // optional
    installCommand: '', // optional
    outputDirectory: '' // optional
});

console.log(result);
```

## sites-create-duplicate-deployment

Create duplicate deployment

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreateDuplicateDeployment({
    siteId: '',
    deploymentId: ''
});

console.log(result);
```

## sites-create-template-deployment

Create template deployment

```javascript
import { Client, Sites, CubesCreateVcsDeploymentType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreateTemplateDeployment({
    siteId: '',
    owner: '',
    reference: '',
    repository: '',
    rootDirectory: '',
    type: CubesCreateVcsDeploymentType.Branch,
    activate: true // optional
});

console.log(result);
```

## sites-create-vcs-deployment

Create VCS deployment

```javascript
import { Client, Sites, CubesCreateVcsDeploymentType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreateVcsDeployment({
    siteId: '',
    reference: 'main',
    type: CubesCreateVcsDeploymentType.Branch,
    activate: true // optional
});

console.log(result);
```

## sites-delete-deployment

Delete deployment

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesDeleteDeployment({
    siteId: '',
    deploymentId: ''
});

console.log(result);
```

## sites-get-deployment

Get deployment

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesGetDeployment({
    siteId: '',
    deploymentId: ''
});

console.log(result);
```

## sites-get-deployment-download

Get deployment download

```javascript
import { Client, Sites, AppsGetDeploymentDownloadType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesGetDeploymentDownload({
    siteId: '',
    deploymentId: '',
    type: AppsGetDeploymentDownloadType.Source // optional
});

console.log(result);
```

## sites-update-deployment-status

Update deployment status

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesUpdateDeploymentStatus({
    siteId: '',
    deploymentId: ''
});

console.log(result);
```

## sites-list-logs

List logs

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesListLogs({
    siteId: '',
    queries: [], // optional
    total: true // optional
});

console.log(result);
```

## sites-delete-log

Delete log

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesDeleteLog({
    siteId: '',
    logId: ''
});

console.log(result);
```

## sites-get-log

Get log

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesGetLog({
    siteId: '',
    logId: ''
});

console.log(result);
```

## sites-list-variables

List variables

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesListVariables({
    siteId: ''
});

console.log(result);
```

## sites-create-variable

Create variable

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreateVariable({
    siteId: '',
    key: '',
    value: '',
    secret: true // optional
});

console.log(result);
```

## sites-delete-variable

Delete variable

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesDeleteVariable({
    siteId: '',
    variableId: ''
});

console.log(result);
```

## sites-get-variable

Get variable

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesGetVariable({
    siteId: '',
    variableId: ''
});

console.log(result);
```

## sites-update-variable

Update variable

```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesUpdateVariable({
    siteId: '',
    variableId: '',
    key: '',
    secret: true, // optional
    value: '' // optional
});

console.log(result);
```
