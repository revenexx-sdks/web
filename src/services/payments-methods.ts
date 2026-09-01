import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PaymentMethodKind } from '../enums/payment-method-kind';
import { PaymentFeeType } from '../enums/payment-fee-type';

export class PaymentsMethods {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every method this tenant has configured, enabled or not — what the Cockpit's Payment methods screen shows and how an integration finds out which codes exist. It answers CONFIGURATION, never an offer: nothing here is evaluated against a buyer, so a method restricted to Germany, one whose order-value bounds exclude this basket and one whose PSP was never set up all come back the same way. The call a checkout makes is POST /payments/methods/eligible. Rows come back in whatever order the database returns them, so a storefront-shaped list needs `?order=position.asc` — `position` is the merchant's intended sequence and nothing sorts by it here on its own.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @param {string} params.code - Exact method code.
     * @param {PaymentMethodKind} params.kind - Restrict to self-managed or PSP-backed methods.
     * @param {boolean} params.enabled - Restrict to enabled or disabled methods. Indexed.
     * @param {string} params.provider - Exact PSP code.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsList(params?: { limit?: number, offset?: number, order?: string, code?: string, kind?: PaymentMethodKind, enabled?: boolean, provider?: string }): Promise<{}>;
    /**
     * Every method this tenant has configured, enabled or not — what the Cockpit's Payment methods screen shows and how an integration finds out which codes exist. It answers CONFIGURATION, never an offer: nothing here is evaluated against a buyer, so a method restricted to Germany, one whose order-value bounds exclude this basket and one whose PSP was never set up all come back the same way. The call a checkout makes is POST /payments/methods/eligible. Rows come back in whatever order the database returns them, so a storefront-shaped list needs `?order=position.asc` — `position` is the merchant's intended sequence and nothing sorts by it here on its own.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @param {string} code - Exact method code.
     * @param {PaymentMethodKind} kind - Restrict to self-managed or PSP-backed methods.
     * @param {boolean} enabled - Restrict to enabled or disabled methods. Indexed.
     * @param {string} provider - Exact PSP code.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsList(limit?: number, offset?: number, order?: string, code?: string, kind?: PaymentMethodKind, enabled?: boolean, provider?: string): Promise<{}>;
    paymentsMethodsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, code?: string, kind?: PaymentMethodKind, enabled?: boolean, provider?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (PaymentMethodKind)?, (boolean)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, code?: string, kind?: PaymentMethodKind, enabled?: boolean, provider?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, code?: string, kind?: PaymentMethodKind, enabled?: boolean, provider?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                code: rest[2] as string,
                kind: rest[3] as PaymentMethodKind,
                enabled: rest[4] as boolean,
                provider: rest[5] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const code = params.code;
        const kind = params.kind;
        const enabled = params.enabled;
        const provider = params.provider;


        const apiPath = '/v1/payments/methods';
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
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
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
     * Adds a line a checkout can offer. A create cannot omit `code` and `name`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` — that is the 409. Two defaults are worth knowing before the first call: `enabled` is false, so a new method reaches no checkout until it is switched on, and `kind` is 'self_managed' — a card or wallet method needs `kind: "psp"` plus a `provider` the catalog carries, or it falls back to the tenant's `default_provider` at payment time and fails there if none is set. The `code` is the value every payment, every checkout and every ERP will name this method by from now on, and once a single payment has been made under it a rename is refused with 409: choose it once.
     *
     * @param {string} params.code - The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it. Required on create.
     * @param {string} params.name - Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`. Required on create.
     * @param {string[]} params.countries - Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
     * @param {string} params.description - One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
     * @param {boolean} params.enabled - A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409. Defaults to false, so a half-configured method cannot reach a checkout by accident.
     * @param {number} params.feeAmount - The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here. Defaults to 0.
     * @param {string} params.feeCurrency - ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR, and lower case is accepted here exactly as the handlers accept it.
     * @param {PaymentFeeType} params.feeType - How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount). Defaults to 'none'.
     * @param {PaymentMethodKind} params.kind - Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it. Defaults to 'self_managed'; 'psp' needs a 'provider' to transact.
     * @param {object} params.labels - Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
     * @param {number} params.maxOrderValue - Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
     * @param {object} params.metadata - Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
     * @param {number} params.minOrderValue - Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
     * @param {number} params.position - Sort order at checkout, ascending — the merchant's preferred payment method first. Defaults to 0.
     * @param {string} params.provider - The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting. Must be a code GET /payments/providers/catalog carries.
     * @param {string} params.providerMethod - The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    paymentsMethodsCreate(params: { code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string }): Promise<Models.Error>;
    /**
     * Adds a line a checkout can offer. A create cannot omit `code` and `name`; every other column is optional or defaulted by the database. Two rows of this tenant may not share `code` — that is the 409. Two defaults are worth knowing before the first call: `enabled` is false, so a new method reaches no checkout until it is switched on, and `kind` is 'self_managed' — a card or wallet method needs `kind: "psp"` plus a `provider` the catalog carries, or it falls back to the tenant's `default_provider` at payment time and fails there if none is set. The `code` is the value every payment, every checkout and every ERP will name this method by from now on, and once a single payment has been made under it a rename is refused with 409: choose it once.
     *
     * @param {string} code - The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it. Required on create.
     * @param {string} name - Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`. Required on create.
     * @param {string[]} countries - Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
     * @param {string} description - One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
     * @param {boolean} enabled - A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409. Defaults to false, so a half-configured method cannot reach a checkout by accident.
     * @param {number} feeAmount - The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here. Defaults to 0.
     * @param {string} feeCurrency - ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR, and lower case is accepted here exactly as the handlers accept it.
     * @param {PaymentFeeType} feeType - How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount). Defaults to 'none'.
     * @param {PaymentMethodKind} kind - Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it. Defaults to 'self_managed'; 'psp' needs a 'provider' to transact.
     * @param {object} labels - Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
     * @param {number} maxOrderValue - Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
     * @param {object} metadata - Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
     * @param {number} minOrderValue - Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
     * @param {number} position - Sort order at checkout, ascending — the merchant's preferred payment method first. Defaults to 0.
     * @param {string} provider - The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting. Must be a code GET /payments/providers/catalog carries.
     * @param {string} providerMethod - The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsCreate(code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string): Promise<Models.Error>;
    paymentsMethodsCreate(
        paramsOrFirst: { code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (boolean)?, (number)?, (string)?, (PaymentFeeType)?, (PaymentMethodKind)?, (object)?, (number)?, (object)?, (number)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                countries: rest[1] as string[],
                description: rest[2] as string,
                enabled: rest[3] as boolean,
                feeAmount: rest[4] as number,
                feeCurrency: rest[5] as string,
                feeType: rest[6] as PaymentFeeType,
                kind: rest[7] as PaymentMethodKind,
                labels: rest[8] as object,
                maxOrderValue: rest[9] as number,
                metadata: rest[10] as object,
                minOrderValue: rest[11] as number,
                position: rest[12] as number,
                provider: rest[13] as string,
                providerMethod: rest[14] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const countries = params.countries;
        const description = params.description;
        const enabled = params.enabled;
        const feeAmount = params.feeAmount;
        const feeCurrency = params.feeCurrency;
        const feeType = params.feeType;
        const kind = params.kind;
        const labels = params.labels;
        const maxOrderValue = params.maxOrderValue;
        const metadata = params.metadata;
        const minOrderValue = params.minOrderValue;
        const position = params.position;
        const provider = params.provider;
        const providerMethod = params.providerMethod;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/payments/methods';
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof feeAmount !== 'undefined') {
            apiPayload['fee_amount'] = feeAmount;
        }
        if (typeof feeCurrency !== 'undefined') {
            apiPayload['fee_currency'] = feeCurrency;
        }
        if (typeof feeType !== 'undefined') {
            apiPayload['fee_type'] = feeType;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof maxOrderValue !== 'undefined') {
            apiPayload['max_order_value'] = maxOrderValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof minOrderValue !== 'undefined') {
            apiPayload['min_order_value'] = minOrderValue;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof providerMethod !== 'undefined') {
            apiPayload['provider_method'] = providerMethod;
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
     * Writes the four methods a shop starts with — invoice and prepayment as self-managed, card and PayPal routed at the mock PSP so a fresh install can complete a checkout end to end — together with the four provider rows behind them: the built-in mock plus Stripe, PayPal and Novalnet, the three connectors this app opens outbound. The app already runs this for itself when it is installed (it listens on app.installed), so calling the route is for the second time and after: a method someone deleted, or a row a later release added that an existing install never got. Stripe, PayPal and Novalnet arrive disabled, in test mode and without credentials — the operator fills those in — while the mock arrives enabled, because it moves no money. Re-running is safe by design: it never duplicates a row and never overwrites an existing one, so nothing an operator has set can be undone by calling it again. Only genuinely missing option keys (a logo added after the first install) are filled, and those rows are reported as "updated" rather than created.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsDefaults(): Promise<{}> {

        const apiPath = '/v1/payments/methods/defaults';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The checkout's question — "what can THIS buyer pay with?" — answered server-side before any PSP is involved, so the storefront never renders a method the create would then refuse with 422. It evaluates the buyer context against every configured method: disabled, a country outside `countries`, an amount outside `min_order_value`/`max_order_value`. Restriction dimensions are ANDed and entries within one are ORed, and an empty dimension means unrestricted. Eligible methods come back sorted by `position` with their fee already computed for this amount; everything else lands in `excluded` with the reason in words, which is what makes a support question answerable. It reads only — nothing is written and no provider is called. Two things it does NOT check: whether the method's PSP is configured and enabled (a method whose provider is switched off is still offered here and fails at POST /payments — a provider a method names can no longer be deleted, which closes the other half of the same gap), and anything about the buyer beyond country and amount. A context that matches nothing is 200 with an empty `methods` list, never 404.
     *
     * @param {number} params.amount - The order amount the order-value bounds are checked against and the percentage fees are computed from. Defaults to 0, which excludes every method carrying a minimum. Nothing is written, so the ledger's own amount bound does not apply here.
     * @param {string} params.country - The buyer's ISO 3166-1 alpha-2 country code. A method restricted to countries is excluded without it — an unknown buyer sees only the unrestricted methods, which is the safe default and not a bug.
     * @param {string} params.currency - ISO 4217 code the amount is in, echoed onto every computed fee. Defaults to EUR. This app does no conversion: the fee comes back in the currency it was asked with.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsEligible(params?: { amount?: number, country?: string, currency?: string }): Promise<{}>;
    /**
     * The checkout's question — "what can THIS buyer pay with?" — answered server-side before any PSP is involved, so the storefront never renders a method the create would then refuse with 422. It evaluates the buyer context against every configured method: disabled, a country outside `countries`, an amount outside `min_order_value`/`max_order_value`. Restriction dimensions are ANDed and entries within one are ORed, and an empty dimension means unrestricted. Eligible methods come back sorted by `position` with their fee already computed for this amount; everything else lands in `excluded` with the reason in words, which is what makes a support question answerable. It reads only — nothing is written and no provider is called. Two things it does NOT check: whether the method's PSP is configured and enabled (a method whose provider is switched off is still offered here and fails at POST /payments — a provider a method names can no longer be deleted, which closes the other half of the same gap), and anything about the buyer beyond country and amount. A context that matches nothing is 200 with an empty `methods` list, never 404.
     *
     * @param {number} amount - The order amount the order-value bounds are checked against and the percentage fees are computed from. Defaults to 0, which excludes every method carrying a minimum. Nothing is written, so the ledger's own amount bound does not apply here.
     * @param {string} country - The buyer's ISO 3166-1 alpha-2 country code. A method restricted to countries is excluded without it — an unknown buyer sees only the unrestricted methods, which is the safe default and not a bug.
     * @param {string} currency - ISO 4217 code the amount is in, echoed onto every computed fee. Defaults to EUR. This app does no conversion: the fee comes back in the currency it was asked with.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsEligible(amount?: number, country?: string, currency?: string): Promise<{}>;
    paymentsMethodsEligible(
        paramsOrFirst?: { amount?: number, country?: string, currency?: string } | number,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { amount?: number, country?: string, currency?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { amount?: number, country?: string, currency?: string };
        } else {
            params = {
                amount: paramsOrFirst as number,
                country: rest[0] as string,
                currency: rest[1] as string            
            };
        }
        
        const amount = params.amount;
        const country = params.country;
        const currency = params.currency;


        const apiPath = '/v1/payments/methods/eligible';
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
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
     * payments.method_code is a CODE, not a foreign key: a payment records what happened and has to survive the configuration it was made with. The cost of that looseness is that deleting a method turns every payment made with it into a row naming something that no longer exists. So the count is taken HERE and answered as 409 with the number, rather than left to whoever is about to click delete — a client that pre-counts asks a second question whose answer disagrees the moment a payment lands between the two calls. Disabling the method (enabled: false) is what an operator usually meant and stays available.
     *
     * @param {string} params.id - The payment method configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    paymentsMethodsDelete(params: { id: string }): Promise<Models.Error>;
    /**
     * payments.method_code is a CODE, not a foreign key: a payment records what happened and has to survive the configuration it was made with. The cost of that looseness is that deleting a method turns every payment made with it into a row naming something that no longer exists. So the count is taken HERE and answered as 409 with the number, rather than left to whoever is about to click delete — a client that pre-counts asks a second question whose answer disagrees the moment a payment lands between the two calls. Disabling the method (enabled: false) is what an operator usually meant and stays available.
     *
     * @param {string} id - The payment method configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsDelete(id: string): Promise<Models.Error>;
    paymentsMethodsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/payments/methods/{id}'.replace('{id}', id);
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
     * One configuration, every column, addressed by its row id — the edit form's read. It is addressed by ID and there is no route that takes a `code`, which matters because the CODE is what a checkout, a payment and an ERP name a method by: to resolve one, filter the list (`GET /payments/methods?code=invoice`), which answers a page of at most one row because (tenant_id, code) is unique. Reading a method says nothing about whether a buyer may use it — that is POST /payments/methods/eligible — and nothing about whether its PSP can transact, which is under the provider configuration.
     *
     * @param {string} params.id - The payment method configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    paymentsMethodsGet(params: { id: string }): Promise<Models.Error>;
    /**
     * One configuration, every column, addressed by its row id — the edit form's read. It is addressed by ID and there is no route that takes a `code`, which matters because the CODE is what a checkout, a payment and an ERP name a method by: to resolve one, filter the list (`GET /payments/methods?code=invoice`), which answers a page of at most one row because (tenant_id, code) is unique. Reading a method says nothing about whether a buyer may use it — that is POST /payments/methods/eligible — and nothing about whether its PSP can transact, which is under the provider configuration.
     *
     * @param {string} id - The payment method configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsGet(id: string): Promise<Models.Error>;
    paymentsMethodsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Error> {
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

        const apiPath = '/v1/payments/methods/{id}'.replace('{id}', id);
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
     * A PUT that PATCHES: only the keys in the body are written and every omitted column keeps its value, so `{"enabled": false}` is the whole request for taking a method out of checkout. A body with no writable key is refused with 400 rather than treated as a no-op. This is the route for all three things an operator changes about a method after it exists — the `enabled` switch that puts it in or out of checkout, the fee it charges (`fee_type`, `fee_amount`, `fee_currency`) and the restrictions that decide who is offered it (`countries`, `min_order_value`, `max_order_value`) — alongside its labels, description and `position`. `enabled: false` is the safe way to retire one — it disappears from POST /payments/methods/eligible immediately and stays on every payment ever made with it. The one write this route refuses is a rename of `code` while the ledger still names the old one. The three tables of this app carry no foreign keys at all: a payment names its method by `method_code` and its acquirer by `provider`, both plain text, because a payment records what happened and has to survive the configuration it was made with. So the database will not stop this — whatever the ledger still names, it goes on naming. A rename would therefore leave every recorded payment pointing at a code no configuration carries, which is the same harm DELETE on this row answers 409 for — so it answers the same 409, with the same `method_in_use` code and the same count. Renaming a method nothing has been paid with is still free, and so is every other column at any time.
     *
     * @param {string} params.id - The payment method configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {string} params.code - The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it. Required on create.
     * @param {string[]} params.countries - Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
     * @param {string} params.description - One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
     * @param {boolean} params.enabled - A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409. Defaults to false, so a half-configured method cannot reach a checkout by accident.
     * @param {number} params.feeAmount - The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here. Defaults to 0.
     * @param {string} params.feeCurrency - ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR, and lower case is accepted here exactly as the handlers accept it.
     * @param {PaymentFeeType} params.feeType - How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount). Defaults to 'none'.
     * @param {PaymentMethodKind} params.kind - Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it. Defaults to 'self_managed'; 'psp' needs a 'provider' to transact.
     * @param {object} params.labels - Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
     * @param {number} params.maxOrderValue - Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
     * @param {object} params.metadata - Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
     * @param {number} params.minOrderValue - Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
     * @param {string} params.name - Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`. Required on create.
     * @param {number} params.position - Sort order at checkout, ascending — the merchant's preferred payment method first. Defaults to 0.
     * @param {string} params.provider - The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting. Must be a code GET /payments/providers/catalog carries.
     * @param {string} params.providerMethod - The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    paymentsMethodsUpdate(params: { id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string }): Promise<Models.Error>;
    /**
     * A PUT that PATCHES: only the keys in the body are written and every omitted column keeps its value, so `{"enabled": false}` is the whole request for taking a method out of checkout. A body with no writable key is refused with 400 rather than treated as a no-op. This is the route for all three things an operator changes about a method after it exists — the `enabled` switch that puts it in or out of checkout, the fee it charges (`fee_type`, `fee_amount`, `fee_currency`) and the restrictions that decide who is offered it (`countries`, `min_order_value`, `max_order_value`) — alongside its labels, description and `position`. `enabled: false` is the safe way to retire one — it disappears from POST /payments/methods/eligible immediately and stays on every payment ever made with it. The one write this route refuses is a rename of `code` while the ledger still names the old one. The three tables of this app carry no foreign keys at all: a payment names its method by `method_code` and its acquirer by `provider`, both plain text, because a payment records what happened and has to survive the configuration it was made with. So the database will not stop this — whatever the ledger still names, it goes on naming. A rename would therefore leave every recorded payment pointing at a code no configuration carries, which is the same harm DELETE on this row answers 409 for — so it answers the same 409, with the same `method_in_use` code and the same count. Renaming a method nothing has been paid with is still free, and so is every other column at any time.
     *
     * @param {string} id - The payment method configuration. A uuid — the data plane casts this segment and answers 400, not 404, for anything else.
     * @param {string} code - The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it. Required on create.
     * @param {string[]} countries - Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
     * @param {string} description - One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
     * @param {boolean} enabled - A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409. Defaults to false, so a half-configured method cannot reach a checkout by accident.
     * @param {number} feeAmount - The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here. Defaults to 0.
     * @param {string} feeCurrency - ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR, and lower case is accepted here exactly as the handlers accept it.
     * @param {PaymentFeeType} feeType - How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount). Defaults to 'none'.
     * @param {PaymentMethodKind} kind - Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it. Defaults to 'self_managed'; 'psp' needs a 'provider' to transact.
     * @param {object} labels - Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
     * @param {number} maxOrderValue - Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
     * @param {object} metadata - Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
     * @param {number} minOrderValue - Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
     * @param {string} name - Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`. Required on create.
     * @param {number} position - Sort order at checkout, ascending — the merchant's preferred payment method first. Defaults to 0.
     * @param {string} provider - The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting. Must be a code GET /payments/providers/catalog carries.
     * @param {string} providerMethod - The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsUpdate(id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string): Promise<Models.Error>;
    paymentsMethodsUpdate(
        paramsOrFirst: { id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (boolean)?, (number)?, (string)?, (PaymentFeeType)?, (PaymentMethodKind)?, (object)?, (number)?, (object)?, (number)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                countries: rest[1] as string[],
                description: rest[2] as string,
                enabled: rest[3] as boolean,
                feeAmount: rest[4] as number,
                feeCurrency: rest[5] as string,
                feeType: rest[6] as PaymentFeeType,
                kind: rest[7] as PaymentMethodKind,
                labels: rest[8] as object,
                maxOrderValue: rest[9] as number,
                metadata: rest[10] as object,
                minOrderValue: rest[11] as number,
                name: rest[12] as string,
                position: rest[13] as number,
                provider: rest[14] as string,
                providerMethod: rest[15] as string            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const countries = params.countries;
        const description = params.description;
        const enabled = params.enabled;
        const feeAmount = params.feeAmount;
        const feeCurrency = params.feeCurrency;
        const feeType = params.feeType;
        const kind = params.kind;
        const labels = params.labels;
        const maxOrderValue = params.maxOrderValue;
        const metadata = params.metadata;
        const minOrderValue = params.minOrderValue;
        const name = params.name;
        const position = params.position;
        const provider = params.provider;
        const providerMethod = params.providerMethod;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/payments/methods/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof countries !== 'undefined') {
            apiPayload['countries'] = countries;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof feeAmount !== 'undefined') {
            apiPayload['fee_amount'] = feeAmount;
        }
        if (typeof feeCurrency !== 'undefined') {
            apiPayload['fee_currency'] = feeCurrency;
        }
        if (typeof feeType !== 'undefined') {
            apiPayload['fee_type'] = feeType;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof maxOrderValue !== 'undefined') {
            apiPayload['max_order_value'] = maxOrderValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof minOrderValue !== 'undefined') {
            apiPayload['min_order_value'] = minOrderValue;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof provider !== 'undefined') {
            apiPayload['provider'] = provider;
        }
        if (typeof providerMethod !== 'undefined') {
            apiPayload['provider_method'] = providerMethod;
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
