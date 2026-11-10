# customers

## customers-auth-handoff

Sign a buyer in for a trusted app

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthHandoff({
    handoffKey: '',
    contactId: '', // optional
    email: 'einkauf@example.com' // optional
});

console.log(result);
```

## customers-auth-login

Create a platform session

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthLogin({
    password: '',
    email: 'einkauf@example.com', // optional
    identifier: 'einkauf@example.com' // optional
});

console.log(result);
```

## customers-auth-logout

Revoke a platform session

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthLogout({
    sessionId: '',
    userId: ''
});

console.log(result);
```

## customers-auth-magic-link

Send a sign-in link

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthMagicLink({
    email: 'einkauf@example.com',
    url: 'https://example.com'
});

console.log(result);
```

## customers-auth-magic-link-confirm

Sign in with a mailed link

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthMagicLinkConfirm({
    secret: '',
    userId: ''
});

console.log(result);
```

## customers-auth-me

Resolve the signed-in buyer

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthMe({
    sessionId: '',
    userId: ''
});

console.log(result);
```

## customers-auth-mfa-challenge

Send a second-factor code

```javascript
import { Client, Customers, Factor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthMfaChallenge({
    userId: '',
    factor: Factor.Email // optional
});

console.log(result);
```

## customers-auth-mfa-challenge-confirm

Answer a second-factor challenge

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthMfaChallengeConfirm({
    challengeId: '',
    code: '',
    sessionSecret: '',
    userId: '' // optional
});

console.log(result);
```

## customers-auth-otp

Send a sign-in code

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthOtp({
    email: 'einkauf@example.com'
});

console.log(result);
```

## customers-auth-otp-confirm

Sign in with a mailed code

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthOtpConfirm({
    secret: '',
    userId: ''
});

console.log(result);
```

## customers-auth-recovery

Start password recovery

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthRecovery({
    email: 'einkauf@example.com',
    url: 'https://example.com'
});

console.log(result);
```

## customers-auth-recovery-confirm

Confirm password recovery

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthRecoveryConfirm({
    password: '',
    secret: '',
    userId: ''
});

console.log(result);
```

## customers-auth-register

Register a buyer

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthRegister({
    email: 'einkauf@example.com',
    password: '',
    firstName: 'Anna', // optional
    lastName: 'Berger', // optional
    locale: 'de-DE', // optional
    organizationId: '', // optional
    organizationName: 'Beispiel Industrietechnik GmbH', // optional
    url: 'https://shop.example.com/account', // optional
    vatId: 'DE123456789', // optional
    verificationUrl: 'https://shop.example.com/bestaetigen' // optional
});

console.log(result);
```

## customers-auth-verification

Send an address verification

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthVerification({
    url: 'https://example.com',
    userId: ''
});

console.log(result);
```

## customers-auth-verification-confirm

Confirm an address

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersAuthVerificationConfirm({
    secret: '',
    userId: ''
});

console.log(result);
```

## customers-principal-resolve

Resolve an acting principal

```javascript
import { Client, Customers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customers = new Customers(client);

const result = await customers.customersPrincipalResolve({
    contactId: '', // optional
    userId: '284392058374652910' // optional
});

console.log(result);
```
