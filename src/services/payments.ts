import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PaymentFeeType } from '../enums/payment-fee-type';
import { PaymentMethodKind } from '../enums/payment-method-kind';

export class Payments {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    paymentsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/payments';
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
     *
     * @param {number} params.amount - Order amount — 0 is legal (free orders), negative is not.
     * @param {string} params.methodCode - Code of a configured payment method.
     * @param {string} params.cartId - The cart this payment pays for.
     * @param {string} params.contactId - Paying customer contact.
     * @param {string} params.country - Buyer ISO country code for the eligibility check.
     * @param {string} params.currency - ISO 4217 code (default EUR).
     * @param {string} params.idempotencyKey - Same key answers the same payment instead of a duplicate.
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.orderRef - External order reference — also the webhook fallback key.
     * @param {string} params.returnUrl - Where the PSP redirect flow returns the buyer to.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsCreate(params: { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, idempotencyKey?: string, metadata?: object, orderRef?: string, returnUrl?: string }): Promise<Models.Payment>;
    /**
     *
     * @param {number} amount - Order amount — 0 is legal (free orders), negative is not.
     * @param {string} methodCode - Code of a configured payment method.
     * @param {string} cartId - The cart this payment pays for.
     * @param {string} contactId - Paying customer contact.
     * @param {string} country - Buyer ISO country code for the eligibility check.
     * @param {string} currency - ISO 4217 code (default EUR).
     * @param {string} idempotencyKey - Same key answers the same payment instead of a duplicate.
     * @param {object} metadata - Free-form metadata.
     * @param {string} orderRef - External order reference — also the webhook fallback key.
     * @param {string} returnUrl - Where the PSP redirect flow returns the buyer to.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCreate(amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, idempotencyKey?: string, metadata?: object, orderRef?: string, returnUrl?: string): Promise<Models.Payment>;
    paymentsCreate(
        paramsOrFirst: { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, idempotencyKey?: string, metadata?: object, orderRef?: string, returnUrl?: string } | number,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.Payment> {
        let params: { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, idempotencyKey?: string, metadata?: object, orderRef?: string, returnUrl?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { amount: number, methodCode: string, cartId?: string, contactId?: string, country?: string, currency?: string, idempotencyKey?: string, metadata?: object, orderRef?: string, returnUrl?: string };
        } else {
            params = {
                amount: paramsOrFirst as number,
                methodCode: rest[0] as string,
                cartId: rest[1] as string,
                contactId: rest[2] as string,
                country: rest[3] as string,
                currency: rest[4] as string,
                idempotencyKey: rest[5] as string,
                metadata: rest[6] as object,
                orderRef: rest[7] as string,
                returnUrl: rest[8] as string            
            };
        }
        
        const amount = params.amount;
        const methodCode = params.methodCode;
        const cartId = params.cartId;
        const contactId = params.contactId;
        const country = params.country;
        const currency = params.currency;
        const idempotencyKey = params.idempotencyKey;
        const metadata = params.metadata;
        const orderRef = params.orderRef;
        const returnUrl = params.returnUrl;

        if (typeof amount === 'undefined') {
            throw new RevenexxException('Missing required parameter: "amount"');
        }
        if (typeof methodCode === 'undefined') {
            throw new RevenexxException('Missing required parameter: "methodCode"');
        }

        const apiPath = '/v1/payments';
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof country !== 'undefined') {
            apiPayload['country'] = country;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof idempotencyKey !== 'undefined') {
            apiPayload['idempotency_key'] = idempotencyKey;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof methodCode !== 'undefined') {
            apiPayload['method_code'] = methodCode;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof returnUrl !== 'undefined') {
            apiPayload['return_url'] = returnUrl;
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
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    paymentsMethodsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


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
     *
     * @param {string} params.code - Stable method code (unique per tenant, e.g. 'invoice', 'card').
     * @param {string} params.name - Display name.
     * @param {string[]} params.countries - Allowed ISO country codes — empty/omitted = unrestricted.
     * @param {string} params.description - 
     * @param {boolean} params.enabled - Disabled methods are never eligible (default false).
     * @param {number} params.feeAmount - Fixed amount or percent value, per fee_type (default 0).
     * @param {string} params.feeCurrency - ISO 4217 code (default EUR).
     * @param {PaymentFeeType} params.feeType - How 'fee_amount' applies (default 'none').
     * @param {PaymentMethodKind} params.kind - Self-managed (merchant fulfils, default) or PSP-backed ('provider' required to transact).
     * @param {object} params.labels - Localized display names ({ de, en, … }).
     * @param {number} params.maxOrderValue - Maximum order amount — omitted = no upper bound.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.minOrderValue - Minimum order amount — omitted = no lower bound.
     * @param {number} params.position - Sort position in the checkout (default 0).
     * @param {string} params.provider - PSP code from the catalog — only for kind 'psp'.
     * @param {string} params.providerMethod - The provider's payment method id (e.g. 'card', 'paypal').
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    paymentsMethodsCreate(params: { code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string }): Promise<Models.PaymentMethod>;
    /**
     *
     * @param {string} code - Stable method code (unique per tenant, e.g. 'invoice', 'card').
     * @param {string} name - Display name.
     * @param {string[]} countries - Allowed ISO country codes — empty/omitted = unrestricted.
     * @param {string} description - 
     * @param {boolean} enabled - Disabled methods are never eligible (default false).
     * @param {number} feeAmount - Fixed amount or percent value, per fee_type (default 0).
     * @param {string} feeCurrency - ISO 4217 code (default EUR).
     * @param {PaymentFeeType} feeType - How 'fee_amount' applies (default 'none').
     * @param {PaymentMethodKind} kind - Self-managed (merchant fulfils, default) or PSP-backed ('provider' required to transact).
     * @param {object} labels - Localized display names ({ de, en, … }).
     * @param {number} maxOrderValue - Maximum order amount — omitted = no upper bound.
     * @param {object} metadata - Free-form metadata.
     * @param {number} minOrderValue - Minimum order amount — omitted = no lower bound.
     * @param {number} position - Sort position in the checkout (default 0).
     * @param {string} provider - PSP code from the catalog — only for kind 'psp'.
     * @param {string} providerMethod - The provider's payment method id (e.g. 'card', 'paypal').
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsCreate(code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string): Promise<Models.PaymentMethod>;
    paymentsMethodsCreate(
        paramsOrFirst: { code: string, name: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, position?: number, provider?: string, providerMethod?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (boolean)?, (number)?, (string)?, (PaymentFeeType)?, (PaymentMethodKind)?, (object)?, (number)?, (object)?, (number)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PaymentMethod> {
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
     *
     * @param {number} params.amount - Order amount the fees are computed against (default 0).
     * @param {string} params.country - Buyer ISO country code — methods with country restrictions need it.
     * @param {string} params.currency - ISO 4217 code (default EUR).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsEligible(params?: { amount?: number, country?: string, currency?: string }): Promise<{}>;
    /**
     *
     * @param {number} amount - Order amount the fees are computed against (default 0).
     * @param {string} country - Buyer ISO country code — methods with country restrictions need it.
     * @param {string} currency - ISO 4217 code (default EUR).
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsMethodsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsDelete(id: string): Promise<{}>;
    paymentsMethodsDelete(
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    paymentsMethodsGet(params: { id: string }): Promise<Models.PaymentMethod>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsGet(id: string): Promise<Models.PaymentMethod>;
    paymentsMethodsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PaymentMethod> {
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
     *
     * @param {string} params.id - 
     * @param {string} params.code - Stable method code (unique per tenant, e.g. 'invoice', 'card').
     * @param {string[]} params.countries - Allowed ISO country codes — empty/omitted = unrestricted.
     * @param {string} params.description - 
     * @param {boolean} params.enabled - Disabled methods are never eligible (default false).
     * @param {number} params.feeAmount - Fixed amount or percent value, per fee_type (default 0).
     * @param {string} params.feeCurrency - ISO 4217 code (default EUR).
     * @param {PaymentFeeType} params.feeType - How 'fee_amount' applies (default 'none').
     * @param {PaymentMethodKind} params.kind - Self-managed (merchant fulfils, default) or PSP-backed ('provider' required to transact).
     * @param {object} params.labels - Localized display names ({ de, en, … }).
     * @param {number} params.maxOrderValue - Maximum order amount — omitted = no upper bound.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.minOrderValue - Minimum order amount — omitted = no lower bound.
     * @param {string} params.name - Display name.
     * @param {number} params.position - Sort position in the checkout (default 0).
     * @param {string} params.provider - PSP code from the catalog — only for kind 'psp'.
     * @param {string} params.providerMethod - The provider's payment method id (e.g. 'card', 'paypal').
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    paymentsMethodsUpdate(params: { id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string }): Promise<Models.PaymentMethod>;
    /**
     *
     * @param {string} id - 
     * @param {string} code - Stable method code (unique per tenant, e.g. 'invoice', 'card').
     * @param {string[]} countries - Allowed ISO country codes — empty/omitted = unrestricted.
     * @param {string} description - 
     * @param {boolean} enabled - Disabled methods are never eligible (default false).
     * @param {number} feeAmount - Fixed amount or percent value, per fee_type (default 0).
     * @param {string} feeCurrency - ISO 4217 code (default EUR).
     * @param {PaymentFeeType} feeType - How 'fee_amount' applies (default 'none').
     * @param {PaymentMethodKind} kind - Self-managed (merchant fulfils, default) or PSP-backed ('provider' required to transact).
     * @param {object} labels - Localized display names ({ de, en, … }).
     * @param {number} maxOrderValue - Maximum order amount — omitted = no upper bound.
     * @param {object} metadata - Free-form metadata.
     * @param {number} minOrderValue - Minimum order amount — omitted = no lower bound.
     * @param {string} name - Display name.
     * @param {number} position - Sort position in the checkout (default 0).
     * @param {string} provider - PSP code from the catalog — only for kind 'psp'.
     * @param {string} providerMethod - The provider's payment method id (e.g. 'card', 'paypal').
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentMethod>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsMethodsUpdate(id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string): Promise<Models.PaymentMethod>;
    paymentsMethodsUpdate(
        paramsOrFirst: { id: string, code?: string, countries?: string[], description?: string, enabled?: boolean, feeAmount?: number, feeCurrency?: string, feeType?: PaymentFeeType, kind?: PaymentMethodKind, labels?: object, maxOrderValue?: number, metadata?: object, minOrderValue?: number, name?: string, position?: number, provider?: string, providerMethod?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?, (boolean)?, (number)?, (string)?, (PaymentFeeType)?, (PaymentMethodKind)?, (object)?, (number)?, (object)?, (number)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<Models.PaymentMethod> {
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

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsProvidersList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsProvidersList(limit?: number, offset?: number, order?: string): Promise<{}>;
    paymentsProvidersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


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
     *
     * @param {string} params.provider - Provider code — must exist in the catalog (GET /payments/providers/catalog).
     * @param {object} params.credentials - PSP credentials — the catalog's credential_fields say which keys the auth scheme expects.
     * @param {boolean} params.enabled - Only enabled providers transact (default false).
     * @param {string} params.name - Display name — defaults to the catalog label.
     * @param {object} params.options - Free-form provider options.
     * @param {boolean} params.testMode - Sandbox/test credentials (default true).
     * @param {string} params.webhookSecret - Shared secret for PSP callback verification.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersCreate(params: { provider: string, credentials?: object, enabled?: boolean, name?: string, options?: object, testMode?: boolean, webhookSecret?: string }): Promise<Models.PaymentProvider>;
    /**
     *
     * @param {string} provider - Provider code — must exist in the catalog (GET /payments/providers/catalog).
     * @param {object} credentials - PSP credentials — the catalog's credential_fields say which keys the auth scheme expects.
     * @param {boolean} enabled - Only enabled providers transact (default false).
     * @param {string} name - Display name — defaults to the catalog label.
     * @param {object} options - Free-form provider options.
     * @param {boolean} testMode - Sandbox/test credentials (default true).
     * @param {string} webhookSecret - Shared secret for PSP callback verification.
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
            apiPayload['options'] = options;
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsProvidersDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersGet(params: { id: string }): Promise<Models.PaymentProvider>;
    /**
     *
     * @param {string} id - 
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
     *
     * @param {string} params.id - 
     * @param {object} params.credentials - PSP credentials — the catalog's credential_fields say which keys the auth scheme expects.
     * @param {boolean} params.enabled - Only enabled providers transact (default false).
     * @param {string} params.name - Display name — defaults to the catalog label.
     * @param {object} params.options - Free-form provider options.
     * @param {string} params.provider - Provider code — must exist in the catalog (GET /payments/providers/catalog).
     * @param {boolean} params.testMode - Sandbox/test credentials (default true).
     * @param {string} params.webhookSecret - Shared secret for PSP callback verification.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PaymentProvider>}
     */
    paymentsProvidersUpdate(params: { id: string, credentials?: object, enabled?: boolean, name?: string, options?: object, provider?: string, testMode?: boolean, webhookSecret?: string }): Promise<Models.PaymentProvider>;
    /**
     *
     * @param {string} id - 
     * @param {object} credentials - PSP credentials — the catalog's credential_fields say which keys the auth scheme expects.
     * @param {boolean} enabled - Only enabled providers transact (default false).
     * @param {string} name - Display name — defaults to the catalog label.
     * @param {object} options - Free-form provider options.
     * @param {string} provider - Provider code — must exist in the catalog (GET /payments/providers/catalog).
     * @param {boolean} testMode - Sandbox/test credentials (default true).
     * @param {string} webhookSecret - Shared secret for PSP callback verification.
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
            apiPayload['options'] = options;
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

    /**
     * Consumes the dispatch envelope from webhooks.revenexx.com: normalizes the provider callback (stripe payment intents + a generic shape), resolves the payment by psp_payment_id or order_ref and moves the ledger. Facts only move forward — provider retries and redeliveries are idempotent no-ops; unverified envelopes are refused.
     *
     * @param {string} params.provider - 
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    paymentsWebhooksIngest(params: { provider: string, data: object }): Promise<{}>;
    /**
     * Consumes the dispatch envelope from webhooks.revenexx.com: normalizes the provider callback (stripe payment intents + a generic shape), resolves the payment by psp_payment_id or order_ref and moves the ledger. Facts only move forward — provider retries and redeliveries are idempotent no-ops; unverified envelopes are refused.
     *
     * @param {string} provider - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsWebhooksIngest(provider: string, data: object): Promise<{}>;
    paymentsWebhooksIngest(
        paramsOrFirst: { provider: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { provider: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { provider: string, data: object };
        } else {
            params = {
                provider: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const provider = params.provider;
        const data = params.data;

        if (typeof provider === 'undefined') {
            throw new RevenexxException('Missing required parameter: "provider"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/payments/webhooks/{provider}'.replace('{provider}', provider);
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            Object.assign(apiPayload, data);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsGet(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsGet(id: string): Promise<Models.Payment>;
    paymentsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsCancel(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCancel(id: string): Promise<Models.Payment>;
    paymentsCancel(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/cancel'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsCapture(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsCapture(id: string): Promise<Models.Payment>;
    paymentsCapture(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/capture'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsConfirm(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsConfirm(id: string): Promise<Models.Payment>;
    paymentsConfirm(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/confirm'.replace('{id}', id);
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
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     */
    paymentsRefund(params: { id: string }): Promise<Models.Payment>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Payment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    paymentsRefund(id: string): Promise<Models.Payment>;
    paymentsRefund(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Payment> {
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

        const apiPath = '/v1/payments/{id}/refund'.replace('{id}', id);
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
}
