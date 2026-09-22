import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class PaymentsProviders {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Answers the SVG document for a catalog provider code (a shipped assets/logos/{code}.svg, otherwise a generated monogram tile), with content-type image/svg+xml and a one-day cache. It is the one route in this app that needs no tenant identity: the logos are bundled with the app rather than owned by anyone, so nothing here is tenant data and no key or tenant header is required to fetch one — which is what lets a storefront or a Cockpit screen point an <img> straight at it. Called directly on the app domain (https://revenexx-payments.apps.revenexx.io/payments/logos/stripe) the response carries its real content-type; through the gateway the body is passed through but labelled application/json, so use the app domain for <img> sources.
     *
     * @param {string} params.slug - A catalog provider code, as GET /payments/providers/catalog lists it. Case-insensitive, and a trailing '.svg' is ignored. Not tenant data: the logos ship with the app and are identical for everyone.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsLogosGet(params: { slug: string }): Promise<{}>;
    /**
     * Answers the SVG document for a catalog provider code (a shipped assets/logos/{code}.svg, otherwise a generated monogram tile), with content-type image/svg+xml and a one-day cache. It is the one route in this app that needs no tenant identity: the logos are bundled with the app rather than owned by anyone, so nothing here is tenant data and no key or tenant header is required to fetch one — which is what lets a storefront or a Cockpit screen point an <img> straight at it. Called directly on the app domain (https://revenexx-payments.apps.revenexx.io/payments/logos/stripe) the response carries its real content-type; through the gateway the body is passed through but labelled application/json, so use the app domain for <img> sources.
     *
     * @param {string} slug - A catalog provider code, as GET /payments/providers/catalog lists it. Case-insensitive, and a trailing '.svg' is ignored. Not tenant data: the logos ship with the app and are identical for everyone.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsLogosGet(slug: string): Promise<{}>;
    paymentsLogosGet(
        paramsOrFirst: { slug: string } | string    
    ): Promise<{}> {
        let params: { slug: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { slug: string };
        } else {
            params = {
                slug: paramsOrFirst as string            
            };
        }
        
        const slug = params.slug;

        if (typeof slug === 'undefined') {
            throw new RevenexxException('Missing required parameter: "slug"');
        }

        const apiPath = '/v1/payments/logos/{slug}'.replace('{slug}', slug);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @param {string} params.provider - Exact provider code.
     * @param {boolean} params.enabled - Restrict to enabled or disabled providers.
     * @param {boolean} params.testMode - Restrict to sandbox or live configurations.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsProvidersList(params?: { limit?: number, offset?: number, order?: string, provider?: string, enabled?: boolean, testMode?: boolean }): Promise<{}>;
    /**
     * PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @param {string} provider - Exact provider code.
     * @param {boolean} enabled - Restrict to enabled or disabled providers.
     * @param {boolean} testMode - Restrict to sandbox or live configurations.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersList(limit?: number, offset?: number, order?: string, provider?: string, enabled?: boolean, testMode?: boolean): Promise<{}>;
    paymentsProvidersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, provider?: string, enabled?: boolean, testMode?: boolean } | number,
        ...rest: [(number)?, (string)?, (string)?, (boolean)?, (boolean)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, provider?: string, enabled?: boolean, testMode?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, provider?: string, enabled?: boolean, testMode?: boolean };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                provider: rest[2] as string,
                enabled: rest[3] as boolean,
                testMode: rest[4] as boolean            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const provider = params.provider;
        const enabled = params.enabled;
        const testMode = params.testMode;


        const apiPath = '/v1/payments/providers';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof testMode !== 'undefined') {
            apiPayload['test_mode'] = testMode;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Activates one PSP account of this tenant. The `provider` code is not free text: it has to be one the catalog carries, and anything else is refused with 400 and a message listing the codes that are — so GET /payments/providers/catalog is the call that comes first, both for the code itself and for the credential field names this provider expects. PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back.
     *
     * @param {string} params.provider - The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does. Required on create, and refused with 400 when the catalog does not carry it.
     * @param {object} params.credentials - The PSP's own API credentials, under the key names its auth scheme expects — `GET /payments/providers/catalog` publishes them per provider as `credential_fields` (Stripe: `api_key`; PayPal: `client_id` + `client_secret`; Novalnet: `api_key` + `payment_access_key` + `tariff_id`). They come from the provider's own dashboard, are handed to the driver in-process, and are never read back by any route. Write-only: to rotate one, write the new value. Whatever a document shows here is a placeholder.
     * @param {boolean} params.enabled - Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one. Defaults to false — finish the credentials before switching it on.
     * @param {string} params.name - Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP. null, omitted or empty falls back to the catalog label.
     * @param {object} params.options - Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
     * @param {boolean} params.testMode - Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money. Unstated takes the tenant's own `test_mode_default` setting.
     * @param {string} params.webhookSecret - The signing secret the PSP issues when its webhook endpoint is created, in the provider's own dashboard. webhooks.revenexx.com verifies each callback against it before the dispatcher hands the envelope to this app. Write-only, like `credentials`: it is stored, used, and never read back by any route, so there is nothing to compare a value against — to rotate it, write the new one. Whatever a document shows here is a generated placeholder, not a usable secret — writing it verbatim leaves every callback failing verification.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersCreate(params: { provider: string, credentials?: object, enabled?: boolean, name?: string, options?: object, testMode?: boolean, webhookSecret?: string }): Promise<Models.PaymentProvider>;
    /**
     * Activates one PSP account of this tenant. The `provider` code is not free text: it has to be one the catalog carries, and anything else is refused with 400 and a message listing the codes that are — so GET /payments/providers/catalog is the call that comes first, both for the code itself and for the credential field names this provider expects. PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back.
     *
     * @param {string} provider - The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does. Required on create, and refused with 400 when the catalog does not carry it.
     * @param {object} credentials - The PSP's own API credentials, under the key names its auth scheme expects — `GET /payments/providers/catalog` publishes them per provider as `credential_fields` (Stripe: `api_key`; PayPal: `client_id` + `client_secret`; Novalnet: `api_key` + `payment_access_key` + `tariff_id`). They come from the provider's own dashboard, are handed to the driver in-process, and are never read back by any route. Write-only: to rotate one, write the new value. Whatever a document shows here is a placeholder.
     * @param {boolean} enabled - Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one. Defaults to false — finish the credentials before switching it on.
     * @param {string} name - Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP. null, omitted or empty falls back to the catalog label.
     * @param {object} options - Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
     * @param {boolean} testMode - Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money. Unstated takes the tenant's own `test_mode_default` setting.
     * @param {string} webhookSecret - The signing secret the PSP issues when its webhook endpoint is created, in the provider's own dashboard. webhooks.revenexx.com verifies each callback against it before the dispatcher hands the envelope to this app. Write-only, like `credentials`: it is stored, used, and never read back by any route, so there is nothing to compare a value against — to rotate it, write the new one. Whatever a document shows here is a generated placeholder, not a usable secret — writing it verbatim leaves every callback failing verification.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersCreate(provider: string, credentials?: object, enabled?: boolean, name?: string, options?: object, testMode?: boolean, webhookSecret?: string): Promise<Models.PaymentProvider>;
    paymentsProvidersCreate(
        paramsOrFirst: { provider: string, credentials?: object, enabled?: boolean, name?: string, options?: object, testMode?: boolean, webhookSecret?: string } | string,
        ...rest: [(object)?, (boolean)?, (string)?, (object)?, (boolean)?, (string)?]    
    ): Promise<Models.PaymentProvider> {
        let params: { provider: string, credentials?: object, enabled?: boolean, name?: string, options?: object, testMode?: boolean, webhookSecret?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { provider: string, credentials?: object, enabled?: boolean, name?: string, options?: object, testMode?: boolean, webhookSecret?: string };
        } else {
            params = {
                provider: paramsOrFirst as string,
                credentials: rest[0] as object,
                enabled: rest[1] as boolean,
                name: rest[2] as string,
                options: rest[3] as object,
                testMode: rest[4] as boolean,
                webhookSecret: rest[5] as string            
            };
        }
        
        const provider = params.provider;
        const credentials = params.credentials;
        const enabled = params.enabled;
        const name = params.name;
        const options = params.options;
        const testMode = params.testMode;
        const webhookSecret = params.webhookSecret;

        if (typeof provider === 'undefined') {
            throw new RevenexxException('Missing required parameter: "provider"');
        }

        const apiPath = '/v1/payments/providers';
        const apiPayload: Payload = {};
        if (typeof credentials !== 'undefined') {
            apiPayload['credentials'] = credentials;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = Client.toWireKeys(options, {"captureMethod":{"wire":"capture_method","children":null},"logoUrl":{"wire":"logo_url","children":null},"threeDs":{"wire":"three_ds","children":null}});
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof testMode !== 'undefined') {
            apiPayload['test_mode'] = testMode;
        }
        if (typeof webhookSecret !== 'undefined') {
            apiPayload['webhook_secret'] = webhookSecret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The closed set of `provider` codes POST /payments/providers accepts — anything else is refused with 400 and a message listing these. It runs to roughly thirty connectors, and each entry says which `driver` moves the money for it: nearly all of them go through the one connector layer this app embeds, hyperswitch-prism, with the built-in mock PSP alongside for demos and E2E. Read it to build the picker on an "add provider" form and to know what a credentials form has to ask for: `auth_type` is the scheme the connector authenticates with and `credential_fields` are the KEY NAMES to put inside `credentials` (never values, which come from the PSP's own dashboard). It says nothing about this tenant: no credential, no enabled flag, no test mode — that is GET /payments/providers. Watch `available`: a code with `false` has no driver in this deployment yet, so it can be created and stored and every transaction through it fails with `provider_unavailable`. The list is app-shipped and identical for everyone, so it is safe to cache hard and it changes only with a release of this app.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsProvidersCatalog(): Promise<{}> {

        const apiPath = '/v1/payments/providers/catalog';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Removes the PSP account row and its stored secrets, once nothing depends on it any more. The three tables of this app carry no foreign keys at all: a payment names its method by `method_code` and its acquirer by `provider`, both plain text, because a payment records what happened and has to survive the configuration it was made with. So the database will not stop this — whatever the ledger still names, it goes on naming. So the database will not stop this and the count is taken HERE, exactly as DELETE /payments/methods/{id} takes it, and answered as one 409 carrying both numbers. Counted first: every payment still in a status a transition starts from — created, requires_action, authorized or captured — because capture, cancel and refund all resolve the provider BY CODE and would answer 422 `provider_not_configured` with the row gone, leaving an authorization that can neither be collected nor released and a captured payment that can no longer be refunded here at all. Counted second: every payment method naming this provider, because POST /payments/methods/eligible does not check providers, so a checkout would go on offering a method whose next POST /payments fails at authorization unless the tenant's `fallback_provider` names one that is still configured. What is deliberately NOT counted is a settled payment — failed, cancelled or refunded: no transition starts there, so nothing will ask this provider about it again, and a `provider` code is closed catalog data that goes on meaning Stripe or PayPal with no configuration behind it. The refusal names `enabled: false` because that is usually what was meant: a disabled provider stops taking NEW payments exactly as a deleted one does, and every transition on the payments it already holds keeps working, since only the create path asks whether it is enabled.
     *
     * @param {string} params.id - The PSP configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsProvidersDelete(params: { id: string }): Promise<{}>;
    /**
     * Removes the PSP account row and its stored secrets, once nothing depends on it any more. The three tables of this app carry no foreign keys at all: a payment names its method by `method_code` and its acquirer by `provider`, both plain text, because a payment records what happened and has to survive the configuration it was made with. So the database will not stop this — whatever the ledger still names, it goes on naming. So the database will not stop this and the count is taken HERE, exactly as DELETE /payments/methods/{id} takes it, and answered as one 409 carrying both numbers. Counted first: every payment still in a status a transition starts from — created, requires_action, authorized or captured — because capture, cancel and refund all resolve the provider BY CODE and would answer 422 `provider_not_configured` with the row gone, leaving an authorization that can neither be collected nor released and a captured payment that can no longer be refunded here at all. Counted second: every payment method naming this provider, because POST /payments/methods/eligible does not check providers, so a checkout would go on offering a method whose next POST /payments fails at authorization unless the tenant's `fallback_provider` names one that is still configured. What is deliberately NOT counted is a settled payment — failed, cancelled or refunded: no transition starts there, so nothing will ask this provider about it again, and a `provider` code is closed catalog data that goes on meaning Stripe or PayPal with no configuration behind it. The refusal names `enabled: false` because that is usually what was meant: a disabled provider stops taking NEW payments exactly as a deleted one does, and every transition on the payments it already holds keeps working, since only the create path asks whether it is enabled.
     *
     * @param {string} id - The PSP configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersDelete(id: string): Promise<{}>;
    paymentsProvidersDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/payments/providers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back.
     *
     * @param {string} params.id - The PSP configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersGet(params: { id: string }): Promise<Models.PaymentProvider>;
    /**
     * PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back.
     *
     * @param {string} id - The PSP configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersGet(id: string): Promise<Models.PaymentProvider>;
    paymentsProvidersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentProvider> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/payments/providers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * A partial write: omitted fields keep their value. Three things are changed here in practice — the `credentials` (and `webhook_secret`) when a key is rotated, `test_mode` when an account moves from the PSP's sandbox to live, and `enabled` when it is switched on or taken out of service. PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back. One field is not like the others: `provider` is the CODE every payment and every method resolves this PSP by, so writing a different one is the delete through another door and is refused with the same 409 while anything still names the current code. Switching acquirer is a second configuration plus `enabled: false` on this one, never a rename.
     *
     * @param {string} params.id - The PSP configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {object} params.credentials - The PSP's own API credentials, under the key names its auth scheme expects — `GET /payments/providers/catalog` publishes them per provider as `credential_fields` (Stripe: `api_key`; PayPal: `client_id` + `client_secret`; Novalnet: `api_key` + `payment_access_key` + `tariff_id`). They come from the provider's own dashboard, are handed to the driver in-process, and are never read back by any route. Write-only: to rotate one, write the new value. Whatever a document shows here is a placeholder.
     * @param {boolean} params.enabled - Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one. Defaults to false — finish the credentials before switching it on.
     * @param {string} params.name - Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP. Written straight to the database, which refuses an empty one.
     * @param {object} params.options - Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
     * @param {string} params.provider - The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does. Required on create, and refused with 400 when the catalog does not carry it.
     * @param {boolean} params.testMode - Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money. Unstated takes the tenant's own `test_mode_default` setting.
     * @param {string} params.webhookSecret - The signing secret the PSP issues when its webhook endpoint is created, in the provider's own dashboard. webhooks.revenexx.com verifies each callback against it before the dispatcher hands the envelope to this app. Write-only, like `credentials`: it is stored, used, and never read back by any route, so there is nothing to compare a value against — to rotate it, write the new one. Whatever a document shows here is a generated placeholder, not a usable secret — writing it verbatim leaves every callback failing verification.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersUpdate(params: { id: string, credentials?: object, enabled?: boolean, name?: string, options?: object, provider?: string, testMode?: boolean, webhookSecret?: string }): Promise<Models.PaymentProvider>;
    /**
     * A partial write: omitted fields keep their value. Three things are changed here in practice — the `credentials` (and `webhook_secret`) when a key is rotated, `test_mode` when an account moves from the PSP's sandbox to live, and `enabled` when it is switched on or taken out of service. PSP secrets are write-only: 'credentials' and 'webhook_secret' are accepted on create/update, stored for the drivers, and never returned by any route — the responses carry the public columns only (id, provider, name, enabled, test_mode, options, timestamps). To rotate a secret, write the new value; there is no way to read the current one back. One field is not like the others: `provider` is the CODE every payment and every method resolves this PSP by, so writing a different one is the delete through another door and is refused with the same 409 while anything still names the current code. Switching acquirer is a second configuration plus `enabled: false` on this one, never a rename.
     *
     * @param {string} id - The PSP configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {object} credentials - The PSP's own API credentials, under the key names its auth scheme expects — `GET /payments/providers/catalog` publishes them per provider as `credential_fields` (Stripe: `api_key`; PayPal: `client_id` + `client_secret`; Novalnet: `api_key` + `payment_access_key` + `tariff_id`). They come from the provider's own dashboard, are handed to the driver in-process, and are never read back by any route. Write-only: to rotate one, write the new value. Whatever a document shows here is a placeholder.
     * @param {boolean} enabled - Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one. Defaults to false — finish the credentials before switching it on.
     * @param {string} name - Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP. Written straight to the database, which refuses an empty one.
     * @param {object} options - Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
     * @param {string} provider - The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does. Required on create, and refused with 400 when the catalog does not carry it.
     * @param {boolean} testMode - Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money. Unstated takes the tenant's own `test_mode_default` setting.
     * @param {string} webhookSecret - The signing secret the PSP issues when its webhook endpoint is created, in the provider's own dashboard. webhooks.revenexx.com verifies each callback against it before the dispatcher hands the envelope to this app. Write-only, like `credentials`: it is stored, used, and never read back by any route, so there is nothing to compare a value against — to rotate it, write the new one. Whatever a document shows here is a generated placeholder, not a usable secret — writing it verbatim leaves every callback failing verification.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersUpdate(id: string, credentials?: object, enabled?: boolean, name?: string, options?: object, provider?: string, testMode?: boolean, webhookSecret?: string): Promise<Models.PaymentProvider>;
    paymentsProvidersUpdate(
        paramsOrFirst: { id: string, credentials?: object, enabled?: boolean, name?: string, options?: object, provider?: string, testMode?: boolean, webhookSecret?: string } | string,
        ...rest: [(object)?, (boolean)?, (string)?, (object)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.PaymentProvider> {
        let params: { id: string, credentials?: object, enabled?: boolean, name?: string, options?: object, provider?: string, testMode?: boolean, webhookSecret?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, credentials?: object, enabled?: boolean, name?: string, options?: object, provider?: string, testMode?: boolean, webhookSecret?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                credentials: rest[0] as object,
                enabled: rest[1] as boolean,
                name: rest[2] as string,
                options: rest[3] as object,
                provider: rest[4] as string,
                testMode: rest[5] as boolean,
                webhookSecret: rest[6] as string            
            };
        }
        
        const id = params.id;
        const credentials = params.credentials;
        const enabled = params.enabled;
        const name = params.name;
        const options = params.options;
        const provider = params.provider;
        const testMode = params.testMode;
        const webhookSecret = params.webhookSecret;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/payments/providers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof credentials !== 'undefined') {
            apiPayload['credentials'] = credentials;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof options !== 'undefined') {
            apiPayload['options'] = Client.toWireKeys(options, {"captureMethod":{"wire":"capture_method","children":null},"logoUrl":{"wire":"logo_url","children":null},"threeDs":{"wire":"three_ds","children":null}});
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof testMode !== 'undefined') {
            apiPayload['test_mode'] = testMode;
        }
        if (typeof webhookSecret !== 'undefined') {
            apiPayload['webhook_secret'] = webhookSecret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
