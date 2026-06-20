import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { OrderCommentVisibility } from '../enums/order-comment-visibility';
import { OrderPaymentStatus } from '../enums/order-payment-status';

export class Orders {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {string} params.status - Filter by order status (exact match): pending | placed | in_fulfillment | completed | cancelled.
     * @param {string} params.paymentStatus - Filter by payment status (exact match): open | pending | authorized | paid | partially_paid | refunded | failed.
     * @param {string} params.fulfillmentStatus - Filter by fulfillment status (exact match): unfulfilled | partial | fulfilled.
     * @param {string} params.contactId - Filter to one ordering contact.
     * @param {string} params.organizationId - Filter to one B2B organization.
     * @param {string} params.channelId - Filter to one sales channel.
     * @param {string} params.marketId - Filter to one market.
     * @param {string} params.number - Filter by exact order number.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersList(params?: { status?: string, paymentStatus?: string, fulfillmentStatus?: string, contactId?: string, organizationId?: string, channelId?: string, marketId?: string, number?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {string} status - Filter by order status (exact match): pending | placed | in_fulfillment | completed | cancelled.
     * @param {string} paymentStatus - Filter by payment status (exact match): open | pending | authorized | paid | partially_paid | refunded | failed.
     * @param {string} fulfillmentStatus - Filter by fulfillment status (exact match): unfulfilled | partial | fulfilled.
     * @param {string} contactId - Filter to one ordering contact.
     * @param {string} organizationId - Filter to one B2B organization.
     * @param {string} channelId - Filter to one sales channel.
     * @param {string} marketId - Filter to one market.
     * @param {string} number - Filter by exact order number.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersList(status?: string, paymentStatus?: string, fulfillmentStatus?: string, contactId?: string, organizationId?: string, channelId?: string, marketId?: string, number?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    ordersList(
        paramsOrFirst?: { status?: string, paymentStatus?: string, fulfillmentStatus?: string, contactId?: string, organizationId?: string, channelId?: string, marketId?: string, number?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { status?: string, paymentStatus?: string, fulfillmentStatus?: string, contactId?: string, organizationId?: string, channelId?: string, marketId?: string, number?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { status?: string, paymentStatus?: string, fulfillmentStatus?: string, contactId?: string, organizationId?: string, channelId?: string, marketId?: string, number?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                status: paramsOrFirst as string,
                paymentStatus: rest[0] as string,
                fulfillmentStatus: rest[1] as string,
                contactId: rest[2] as string,
                organizationId: rest[3] as string,
                channelId: rest[4] as string,
                marketId: rest[5] as string,
                number: rest[6] as string,
                limit: rest[7] as number,
                offset: rest[8] as number,
                order: rest[9] as string            
            };
        }
        
        const status = params.status;
        const paymentStatus = params.paymentStatus;
        const fulfillmentStatus = params.fulfillmentStatus;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const channelId = params.channelId;
        const marketId = params.marketId;
        const number = params.number;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/orders';
        const apiPayload: Payload = {};
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof paymentStatus !== 'undefined') {
            apiPayload['payment_status'] = paymentStatus;
        }
        if (typeof fulfillmentStatus !== 'undefined') {
            apiPayload['fulfillment_status'] = fulfillmentStatus;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersNumberRangesList(): Promise<{}> {

        const apiPath = '/v1/orders/number-ranges';
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
     * @param {string} params.code - Range key drawn by the app ('order', 'delivery', 'return') — unique per tenant.
     * @param {string} params.channelId - 
     * @param {number} params.counter - Current counter value (default 0) — the next number draws counter+step.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.padding - Zero-padding width of the counter (default 6).
     * @param {number} params.positionStep - Position numbering increment for order items (default 10).
     * @param {string} params.prefix - Default ''.
     * @param {number} params.step - Counter increment per drawn number (default 1).
     * @param {string} params.suffix - Default ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     */
    ordersNumberRangesCreate(params: { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string }): Promise<Models.NumberRange>;
    /**
     *
     * @param {string} code - Range key drawn by the app ('order', 'delivery', 'return') — unique per tenant.
     * @param {string} channelId - 
     * @param {number} counter - Current counter value (default 0) — the next number draws counter+step.
     * @param {object} metadata - Free-form metadata.
     * @param {number} padding - Zero-padding width of the counter (default 6).
     * @param {number} positionStep - Position numbering increment for order items (default 10).
     * @param {string} prefix - Default ''.
     * @param {number} step - Counter increment per drawn number (default 1).
     * @param {string} suffix - Default ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesCreate(code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string): Promise<Models.NumberRange>;
    ordersNumberRangesCreate(
        paramsOrFirst: { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string } | string,
        ...rest: [(string)?, (number)?, (object)?, (number)?, (number)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.NumberRange> {
        let params: { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, channelId?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                channelId: rest[0] as string,
                counter: rest[1] as number,
                metadata: rest[2] as object,
                padding: rest[3] as number,
                positionStep: rest[4] as number,
                prefix: rest[5] as string,
                step: rest[6] as number,
                suffix: rest[7] as string            
            };
        }
        
        const code = params.code;
        const channelId = params.channelId;
        const counter = params.counter;
        const metadata = params.metadata;
        const padding = params.padding;
        const positionStep = params.positionStep;
        const prefix = params.prefix;
        const step = params.step;
        const suffix = params.suffix;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }

        const apiPath = '/v1/orders/number-ranges';
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof counter !== 'undefined') {
            apiPayload['counter'] = counter;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof padding !== 'undefined') {
            apiPayload['padding'] = padding;
        }
        if (typeof positionStep !== 'undefined') {
            apiPayload['position_step'] = positionStep;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
        }
        if (typeof step !== 'undefined') {
            apiPayload['step'] = step;
        }
        if (typeof suffix !== 'undefined') {
            apiPayload['suffix'] = suffix;
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
    ordersNumberRangesDefaults(): Promise<{}> {

        const apiPath = '/v1/orders/number-ranges/defaults';
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
     * @returns {Promise<{}>}
     */
    ordersNumberRangesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesDelete(id: string): Promise<{}>;
    ordersNumberRangesDelete(
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

        const apiPath = '/v1/orders/number-ranges/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.NumberRange>}
     */
    ordersNumberRangesGet(params: { id: string }): Promise<Models.NumberRange>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesGet(id: string): Promise<Models.NumberRange>;
    ordersNumberRangesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.NumberRange> {
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

        const apiPath = '/v1/orders/number-ranges/{id}'.replace('{id}', id);
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
     * @param {string} params.channelId - 
     * @param {string} params.code - Range key drawn by the app ('order', 'delivery', 'return') — unique per tenant.
     * @param {number} params.counter - Current counter value (default 0) — the next number draws counter+step.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.padding - Zero-padding width of the counter (default 6).
     * @param {number} params.positionStep - Position numbering increment for order items (default 10).
     * @param {string} params.prefix - Default ''.
     * @param {number} params.step - Counter increment per drawn number (default 1).
     * @param {string} params.suffix - Default ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     */
    ordersNumberRangesUpdate(params: { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string }): Promise<Models.NumberRange>;
    /**
     *
     * @param {string} id - 
     * @param {string} channelId - 
     * @param {string} code - Range key drawn by the app ('order', 'delivery', 'return') — unique per tenant.
     * @param {number} counter - Current counter value (default 0) — the next number draws counter+step.
     * @param {object} metadata - Free-form metadata.
     * @param {number} padding - Zero-padding width of the counter (default 6).
     * @param {number} positionStep - Position numbering increment for order items (default 10).
     * @param {string} prefix - Default ''.
     * @param {number} step - Counter increment per drawn number (default 1).
     * @param {string} suffix - Default ''.
     * @throws {RevenexxException}
     * @returns {Promise<Models.NumberRange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersNumberRangesUpdate(id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string): Promise<Models.NumberRange>;
    ordersNumberRangesUpdate(
        paramsOrFirst: { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string } | string,
        ...rest: [(string)?, (string)?, (number)?, (object)?, (number)?, (number)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.NumberRange> {
        let params: { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channelId?: string, code?: string, counter?: number, metadata?: object, padding?: number, positionStep?: number, prefix?: string, step?: number, suffix?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channelId: rest[0] as string,
                code: rest[1] as string,
                counter: rest[2] as number,
                metadata: rest[3] as object,
                padding: rest[4] as number,
                positionStep: rest[5] as number,
                prefix: rest[6] as string,
                step: rest[7] as number,
                suffix: rest[8] as string            
            };
        }
        
        const id = params.id;
        const channelId = params.channelId;
        const code = params.code;
        const counter = params.counter;
        const metadata = params.metadata;
        const padding = params.padding;
        const positionStep = params.positionStep;
        const prefix = params.prefix;
        const step = params.step;
        const suffix = params.suffix;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/number-ranges/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof counter !== 'undefined') {
            apiPayload['counter'] = counter;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof padding !== 'undefined') {
            apiPayload['padding'] = padding;
        }
        if (typeof positionStep !== 'undefined') {
            apiPayload['position_step'] = positionStep;
        }
        if (typeof prefix !== 'undefined') {
            apiPayload['prefix'] = prefix;
        }
        if (typeof step !== 'undefined') {
            apiPayload['step'] = step;
        }
        if (typeof suffix !== 'undefined') {
            apiPayload['suffix'] = suffix;
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
     * @param {Models.OrderItemCreateRequest[]} params.items - The order positions (at most 500).
     * @param {object} params.billingAddress - Frozen billing address.
     * @param {object} params.buyer - Frozen buyer snapshot (name, email, …).
     * @param {string} params.cartId - Source cart (the carts.order hand-over).
     * @param {string} params.channelId - 
     * @param {string} params.contactId - Ordering customer contact.
     * @param {string} params.currency - ISO 4217 code (default EUR).
     * @param {string} params.customerOrderNumber - The buyer's own order/PO number.
     * @param {number} params.grandTotal - Override — computed as subtotal + shipping + tax when omitted.
     * @param {string} params.marketId - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.organizationId - B2B organization.
     * @param {object} params.payment - Frozen payment snapshot — a known 'payment.status' seeds payment_status (otherwise 'open').
     * @param {object} params.shipping - Frozen shipping snapshot — 'shipping.price' seeds shipping_total.
     * @param {object} params.shippingAddress - Frozen shipping address.
     * @param {number} params.shippingTotal - Shipping total (fallback when 'shipping.price' is absent).
     * @param {object} params.userData - Free-form user data.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDetail>}
     */
    ordersPlace(params: { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, grandTotal?: number, marketId?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, userData?: object }): Promise<Models.OrderDetail>;
    /**
     *
     * @param {Models.OrderItemCreateRequest[]} items - The order positions (at most 500).
     * @param {object} billingAddress - Frozen billing address.
     * @param {object} buyer - Frozen buyer snapshot (name, email, …).
     * @param {string} cartId - Source cart (the carts.order hand-over).
     * @param {string} channelId - 
     * @param {string} contactId - Ordering customer contact.
     * @param {string} currency - ISO 4217 code (default EUR).
     * @param {string} customerOrderNumber - The buyer's own order/PO number.
     * @param {number} grandTotal - Override — computed as subtotal + shipping + tax when omitted.
     * @param {string} marketId - 
     * @param {object} metadata - Free-form metadata.
     * @param {string} organizationId - B2B organization.
     * @param {object} payment - Frozen payment snapshot — a known 'payment.status' seeds payment_status (otherwise 'open').
     * @param {object} shipping - Frozen shipping snapshot — 'shipping.price' seeds shipping_total.
     * @param {object} shippingAddress - Frozen shipping address.
     * @param {number} shippingTotal - Shipping total (fallback when 'shipping.price' is absent).
     * @param {object} userData - Free-form user data.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersPlace(items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, grandTotal?: number, marketId?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, userData?: object): Promise<Models.OrderDetail>;
    ordersPlace(
        paramsOrFirst: { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, grandTotal?: number, marketId?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, userData?: object } | Models.OrderItemCreateRequest[],
        ...rest: [(object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (object)?, (string)?, (object)?, (object)?, (object)?, (number)?, (object)?]    
    ): Promise<Models.OrderDetail> {
        let params: { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, grandTotal?: number, marketId?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'billingAddress' in paramsOrFirst || 'buyer' in paramsOrFirst || 'cartId' in paramsOrFirst || 'channelId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'customerOrderNumber' in paramsOrFirst || 'grandTotal' in paramsOrFirst || 'marketId' in paramsOrFirst || 'metadata' in paramsOrFirst || 'organizationId' in paramsOrFirst || 'payment' in paramsOrFirst || 'shipping' in paramsOrFirst || 'shippingAddress' in paramsOrFirst || 'shippingTotal' in paramsOrFirst || 'userData' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.OrderItemCreateRequest[], billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, grandTotal?: number, marketId?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, userData?: object };
        } else {
            params = {
                items: paramsOrFirst as Models.OrderItemCreateRequest[],
                billingAddress: rest[0] as object,
                buyer: rest[1] as object,
                cartId: rest[2] as string,
                channelId: rest[3] as string,
                contactId: rest[4] as string,
                currency: rest[5] as string,
                customerOrderNumber: rest[6] as string,
                grandTotal: rest[7] as number,
                marketId: rest[8] as string,
                metadata: rest[9] as object,
                organizationId: rest[10] as string,
                payment: rest[11] as object,
                shipping: rest[12] as object,
                shippingAddress: rest[13] as object,
                shippingTotal: rest[14] as number,
                userData: rest[15] as object            
            };
        }
        
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const cartId = params.cartId;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const customerOrderNumber = params.customerOrderNumber;
        const grandTotal = params.grandTotal;
        const marketId = params.marketId;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const payment = params.payment;
        const shipping = params.shipping;
        const shippingAddress = params.shippingAddress;
        const shippingTotal = params.shippingTotal;
        const userData = params.userData;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/orders/place';
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = buyer;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof grandTotal !== 'undefined') {
            apiPayload['grand_total'] = grandTotal;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof marketId !== 'undefined') {
            apiPayload['market_id'] = marketId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof payment !== 'undefined') {
            apiPayload['payment'] = payment;
        }
        if (typeof shipping !== 'undefined') {
            apiPayload['shipping'] = shipping;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof shippingTotal !== 'undefined') {
            apiPayload['shipping_total'] = shippingTotal;
        }
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * @returns {Promise<Models.OrderDetail>}
     */
    ordersGet(params: { id: string }): Promise<Models.OrderDetail>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderDetail>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersGet(id: string): Promise<Models.OrderDetail>;
    ordersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.OrderDetail> {
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

        const apiPath = '/v1/orders/{id}'.replace('{id}', id);
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
     * @param {object} params.billingAddress - 
     * @param {object} params.buyer - 
     * @param {string} params.customerOrderNumber - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {object} params.shippingAddress - 
     * @param {object} params.userData - Free-form user data.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersUpdate(params: { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, metadata?: object, shippingAddress?: object, userData?: object }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {object} billingAddress - 
     * @param {object} buyer - 
     * @param {string} customerOrderNumber - 
     * @param {object} metadata - Free-form metadata.
     * @param {object} shippingAddress - 
     * @param {object} userData - Free-form user data.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersUpdate(id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, metadata?: object, shippingAddress?: object, userData?: object): Promise<Models.Order>;
    ordersUpdate(
        paramsOrFirst: { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, metadata?: object, shippingAddress?: object, userData?: object } | string,
        ...rest: [(object)?, (object)?, (string)?, (object)?, (object)?, (object)?]    
    ): Promise<Models.Order> {
        let params: { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, metadata?: object, shippingAddress?: object, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, billingAddress?: object, buyer?: object, customerOrderNumber?: string, metadata?: object, shippingAddress?: object, userData?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                billingAddress: rest[0] as object,
                buyer: rest[1] as object,
                customerOrderNumber: rest[2] as string,
                metadata: rest[3] as object,
                shippingAddress: rest[4] as object,
                userData: rest[5] as object            
            };
        }
        
        const id = params.id;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const customerOrderNumber = params.customerOrderNumber;
        const metadata = params.metadata;
        const shippingAddress = params.shippingAddress;
        const userData = params.userData;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = buyer;
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * @param {string} params.id - 
     * @param {string} params.externalRef - The fulfilling system's order reference (e.g. the ERP order number).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersAcknowledge(params: { id: string, externalRef?: string }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {string} externalRef - The fulfilling system's order reference (e.g. the ERP order number).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersAcknowledge(id: string, externalRef?: string): Promise<Models.Order>;
    ordersAcknowledge(
        paramsOrFirst: { id: string, externalRef?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, externalRef?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, externalRef?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                externalRef: rest[0] as string            
            };
        }
        
        const id = params.id;
        const externalRef = params.externalRef;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/acknowledge'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
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
     * @param {string} params.cancelledBy - Acting user/system.
     * @param {string} params.reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersCancel(params: { id: string, cancelledBy?: string, reason?: string }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {string} cancelledBy - Acting user/system.
     * @param {string} reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersCancel(id: string, cancelledBy?: string, reason?: string): Promise<Models.Order>;
    ordersCancel(
        paramsOrFirst: { id: string, cancelledBy?: string, reason?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, cancelledBy?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, cancelledBy?: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                cancelledBy: rest[0] as string,
                reason: rest[1] as string            
            };
        }
        
        const id = params.id;
        const cancelledBy = params.cancelledBy;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/cancel'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cancelledBy !== 'undefined') {
            apiPayload['cancelled_by'] = cancelledBy;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
    ordersCommentsList(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersCommentsList(id: string): Promise<{}>;
    ordersCommentsList(
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

        const apiPath = '/v1/orders/{id}/comments'.replace('{id}', id);
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
     * @param {string} params.body - 
     * @param {string} params.author - 
     * @param {OrderCommentVisibility} params.visibility - Default 'internal'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderComment>}
     */
    ordersCommentsCreate(params: { id: string, body: string, author?: string, visibility?: OrderCommentVisibility }): Promise<Models.OrderComment>;
    /**
     *
     * @param {string} id - 
     * @param {string} body - 
     * @param {string} author - 
     * @param {OrderCommentVisibility} visibility - Default 'internal'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderComment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersCommentsCreate(id: string, body: string, author?: string, visibility?: OrderCommentVisibility): Promise<Models.OrderComment>;
    ordersCommentsCreate(
        paramsOrFirst: { id: string, body: string, author?: string, visibility?: OrderCommentVisibility } | string,
        ...rest: [(string)?, (string)?, (OrderCommentVisibility)?]    
    ): Promise<Models.OrderComment> {
        let params: { id: string, body: string, author?: string, visibility?: OrderCommentVisibility };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, body: string, author?: string, visibility?: OrderCommentVisibility };
        } else {
            params = {
                id: paramsOrFirst as string,
                body: rest[0] as string,
                author: rest[1] as string,
                visibility: rest[2] as OrderCommentVisibility            
            };
        }
        
        const id = params.id;
        const body = params.body;
        const author = params.author;
        const visibility = params.visibility;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/orders/{id}/comments'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof author !== 'undefined') {
            apiPayload['author'] = author;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
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
    ordersEventsList(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersEventsList(id: string): Promise<{}>;
    ordersEventsList(
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

        const apiPath = '/v1/orders/{id}/events'.replace('{id}', id);
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
     * @param {string} params.reason - Why the order is blocked (shown on the shipping guard).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersHold(params: { id: string, reason?: string }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {string} reason - Why the order is blocked (shown on the shipping guard).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersHold(id: string, reason?: string): Promise<Models.Order>;
    ordersHold(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/hold'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @param {Models.OrderCancelPosition[]} params.positions - 
     * @param {string} params.cancelledBy - Acting user/system.
     * @param {string} params.reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersItemsCancel(params: { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {Models.OrderCancelPosition[]} positions - 
     * @param {string} cancelledBy - Acting user/system.
     * @param {string} reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersItemsCancel(id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string): Promise<Models.Order>;
    ordersItemsCancel(
        paramsOrFirst: { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string } | string,
        ...rest: [(Models.OrderCancelPosition[])?, (string)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, positions: Models.OrderCancelPosition[], cancelledBy?: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                positions: rest[0] as Models.OrderCancelPosition[],
                cancelledBy: rest[1] as string,
                reason: rest[2] as string            
            };
        }
        
        const id = params.id;
        const positions = params.positions;
        const cancelledBy = params.cancelledBy;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof positions === 'undefined') {
            throw new RevenexxException('Missing required parameter: "positions"');
        }

        const apiPath = '/v1/orders/{id}/items/cancel'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof cancelledBy !== 'undefined') {
            apiPayload['cancelled_by'] = cancelledBy;
        }
        if (typeof positions !== 'undefined') {
            apiPayload['positions'] = positions;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @param {OrderPaymentStatus} params.status - The new payment dimension value.
     * @param {string} params.paymentId - Reference into the payment system — merged into the order's payment snapshot.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersPaymentStatusUpdate(params: { id: string, status: OrderPaymentStatus, paymentId?: string }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {OrderPaymentStatus} status - The new payment dimension value.
     * @param {string} paymentId - Reference into the payment system — merged into the order's payment snapshot.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersPaymentStatusUpdate(id: string, status: OrderPaymentStatus, paymentId?: string): Promise<Models.Order>;
    ordersPaymentStatusUpdate(
        paramsOrFirst: { id: string, status: OrderPaymentStatus, paymentId?: string } | string,
        ...rest: [(OrderPaymentStatus)?, (string)?]    
    ): Promise<Models.Order> {
        let params: { id: string, status: OrderPaymentStatus, paymentId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, status: OrderPaymentStatus, paymentId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                status: rest[0] as OrderPaymentStatus,
                paymentId: rest[1] as string            
            };
        }
        
        const id = params.id;
        const status = params.status;
        const paymentId = params.paymentId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof status === 'undefined') {
            throw new RevenexxException('Missing required parameter: "status"');
        }

        const apiPath = '/v1/orders/{id}/payment-status'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof paymentId !== 'undefined') {
            apiPayload['payment_id'] = paymentId;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     * @param {Models.OrderReturnPosition[]} params.positions - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturn(params: { id: string, positions: Models.OrderReturnPosition[], metadata?: object, reason?: string }): Promise<Models.OrderReturn>;
    /**
     *
     * @param {string} id - 
     * @param {Models.OrderReturnPosition[]} positions - 
     * @param {object} metadata - Free-form metadata.
     * @param {string} reason - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturn(id: string, positions: Models.OrderReturnPosition[], metadata?: object, reason?: string): Promise<Models.OrderReturn>;
    ordersReturn(
        paramsOrFirst: { id: string, positions: Models.OrderReturnPosition[], metadata?: object, reason?: string } | string,
        ...rest: [(Models.OrderReturnPosition[])?, (object)?, (string)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, positions: Models.OrderReturnPosition[], metadata?: object, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, positions: Models.OrderReturnPosition[], metadata?: object, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                positions: rest[0] as Models.OrderReturnPosition[],
                metadata: rest[1] as object,
                reason: rest[2] as string            
            };
        }
        
        const id = params.id;
        const positions = params.positions;
        const metadata = params.metadata;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof positions === 'undefined') {
            throw new RevenexxException('Missing required parameter: "positions"');
        }

        const apiPath = '/v1/orders/{id}/return'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof positions !== 'undefined') {
            apiPayload['positions'] = positions;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @param {string} params.rid - 
     * @param {string} params.resolution - How the return was settled (refund, replacement, …).
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturnsComplete(params: { id: string, rid: string, resolution?: string }): Promise<Models.OrderReturn>;
    /**
     *
     * @param {string} id - 
     * @param {string} rid - 
     * @param {string} resolution - How the return was settled (refund, replacement, …).
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnsComplete(id: string, rid: string, resolution?: string): Promise<Models.OrderReturn>;
    ordersReturnsComplete(
        paramsOrFirst: { id: string, rid: string, resolution?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, rid: string, resolution?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, rid: string, resolution?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                rid: rest[0] as string,
                resolution: rest[1] as string            
            };
        }
        
        const id = params.id;
        const rid = params.rid;
        const resolution = params.resolution;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof rid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rid"');
        }

        const apiPath = '/v1/orders/{id}/returns/{rid}/complete'.replace('{id}', id).replace('{rid}', rid);
        const apiPayload: Payload = {};
        if (typeof resolution !== 'undefined') {
            apiPayload['resolution'] = resolution;
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
     * @param {string} params.rid - 
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturnsReceive(params: { id: string, rid: string, data: object }): Promise<Models.OrderReturn>;
    /**
     *
     * @param {string} id - 
     * @param {string} rid - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnsReceive(id: string, rid: string, data: object): Promise<Models.OrderReturn>;
    ordersReturnsReceive(
        paramsOrFirst: { id: string, rid: string, data: object } | string,
        ...rest: [(string)?, (object)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, rid: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, rid: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                rid: rest[0] as string,
                data: rest[1] as object            
            };
        }
        
        const id = params.id;
        const rid = params.rid;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof rid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rid"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/orders/{id}/returns/{rid}/receive'.replace('{id}', id).replace('{rid}', rid);
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
     * @param {string} params.rid - 
     * @param {string} params.reason - Fallback for 'resolution'.
     * @param {string} params.resolution - Why the return was rejected.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     */
    ordersReturnsReject(params: { id: string, rid: string, reason?: string, resolution?: string }): Promise<Models.OrderReturn>;
    /**
     *
     * @param {string} id - 
     * @param {string} rid - 
     * @param {string} reason - Fallback for 'resolution'.
     * @param {string} resolution - Why the return was rejected.
     * @throws {RevenexxException}
     * @returns {Promise<Models.OrderReturn>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersReturnsReject(id: string, rid: string, reason?: string, resolution?: string): Promise<Models.OrderReturn>;
    ordersReturnsReject(
        paramsOrFirst: { id: string, rid: string, reason?: string, resolution?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.OrderReturn> {
        let params: { id: string, rid: string, reason?: string, resolution?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, rid: string, reason?: string, resolution?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                rid: rest[0] as string,
                reason: rest[1] as string,
                resolution: rest[2] as string            
            };
        }
        
        const id = params.id;
        const rid = params.rid;
        const reason = params.reason;
        const resolution = params.resolution;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof rid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rid"');
        }

        const apiPath = '/v1/orders/{id}/returns/{rid}/reject'.replace('{id}', id).replace('{rid}', rid);
        const apiPayload: Payload = {};
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof resolution !== 'undefined') {
            apiPayload['resolution'] = resolution;
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
     * @param {string} params.carrier - 
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.number - Delivery note number — drawn from the 'delivery' range when omitted.
     * @param {Models.OrderShipmentPosition[]} params.positions - Omitted = every position with open quantity, in full.
     * @param {string} params.shippedAt - Defaults to now.
     * @param {string} params.trackingCode - 
     * @param {string} params.trackingUrl - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    ordersShip(params: { id: string, carrier?: string, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, trackingCode?: string, trackingUrl?: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @param {string} carrier - 
     * @param {object} metadata - Free-form metadata.
     * @param {string} number - Delivery note number — drawn from the 'delivery' range when omitted.
     * @param {Models.OrderShipmentPosition[]} positions - Omitted = every position with open quantity, in full.
     * @param {string} shippedAt - Defaults to now.
     * @param {string} trackingCode - 
     * @param {string} trackingUrl - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersShip(id: string, carrier?: string, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, trackingCode?: string, trackingUrl?: string): Promise<{}>;
    ordersShip(
        paramsOrFirst: { id: string, carrier?: string, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, trackingCode?: string, trackingUrl?: string } | string,
        ...rest: [(string)?, (object)?, (string)?, (Models.OrderShipmentPosition[])?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, carrier?: string, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, trackingCode?: string, trackingUrl?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, carrier?: string, metadata?: object, number?: string, positions?: Models.OrderShipmentPosition[], shippedAt?: string, trackingCode?: string, trackingUrl?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                carrier: rest[0] as string,
                metadata: rest[1] as object,
                number: rest[2] as string,
                positions: rest[3] as Models.OrderShipmentPosition[],
                shippedAt: rest[4] as string,
                trackingCode: rest[5] as string,
                trackingUrl: rest[6] as string            
            };
        }
        
        const id = params.id;
        const carrier = params.carrier;
        const metadata = params.metadata;
        const number = params.number;
        const positions = params.positions;
        const shippedAt = params.shippedAt;
        const trackingCode = params.trackingCode;
        const trackingUrl = params.trackingUrl;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/orders/{id}/ship'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof carrier !== 'undefined') {
            apiPayload['carrier'] = carrier;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof positions !== 'undefined') {
            apiPayload['positions'] = positions;
        }
        if (typeof shippedAt !== 'undefined') {
            apiPayload['shipped_at'] = shippedAt;
        }
        if (typeof trackingCode !== 'undefined') {
            apiPayload['tracking_code'] = trackingCode;
        }
        if (typeof trackingUrl !== 'undefined') {
            apiPayload['tracking_url'] = trackingUrl;
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
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     */
    ordersUnhold(params: { id: string, data: object }): Promise<Models.Order>;
    /**
     *
     * @param {string} id - 
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Order>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    ordersUnhold(id: string, data: object): Promise<Models.Order>;
    ordersUnhold(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Order> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/orders/{id}/unhold'.replace('{id}', id);
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
}
