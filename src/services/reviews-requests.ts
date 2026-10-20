import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class ReviewsRequests {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filter `?state=`, `?order_id=`, `?contact_id=`, `?journey_ref=`. A token is never part of the answer and cannot be filtered on.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.orderNumber - Keep only rows whose `order_number` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.journeyRef - Keep only rows whose `journey_ref` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.locale - Keep only rows whose `locale` equals this.
     * @param {string} params.reviewedCount - Keep only rows whose `reviewed_count` equals this.
     * @param {string} params.issuedCount - Keep only rows whose `issued_count` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsRequestsList(params?: { limit?: number, offset?: number, order?: string, id?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, state?: string, journeyRef?: string, market?: string, locale?: string, reviewedCount?: string, issuedCount?: string }): Promise<{}>;
    /**
     * Filter `?state=`, `?order_id=`, `?contact_id=`, `?journey_ref=`. A token is never part of the answer and cannot be filtered on.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} orderNumber - Keep only rows whose `order_number` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} journeyRef - Keep only rows whose `journey_ref` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} locale - Keep only rows whose `locale` equals this.
     * @param {string} reviewedCount - Keep only rows whose `reviewed_count` equals this.
     * @param {string} issuedCount - Keep only rows whose `issued_count` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsRequestsList(limit?: number, offset?: number, order?: string, id?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, state?: string, journeyRef?: string, market?: string, locale?: string, reviewedCount?: string, issuedCount?: string): Promise<{}>;
    reviewsRequestsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, state?: string, journeyRef?: string, market?: string, locale?: string, reviewedCount?: string, issuedCount?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, state?: string, journeyRef?: string, market?: string, locale?: string, reviewedCount?: string, issuedCount?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, orderId?: string, orderNumber?: string, contactId?: string, organizationId?: string, state?: string, journeyRef?: string, market?: string, locale?: string, reviewedCount?: string, issuedCount?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                orderId: rest[3] as string,
                orderNumber: rest[4] as string,
                contactId: rest[5] as string,
                organizationId: rest[6] as string,
                state: rest[7] as string,
                journeyRef: rest[8] as string,
                market: rest[9] as string,
                locale: rest[10] as string,
                reviewedCount: rest[11] as string,
                issuedCount: rest[12] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const orderId = params.orderId;
        const orderNumber = params.orderNumber;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const state = params.state;
        const journeyRef = params.journeyRef;
        const market = params.market;
        const locale = params.locale;
        const reviewedCount = params.reviewedCount;
        const issuedCount = params.issuedCount;


        const apiPath = '/v1/reviews/requests';
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
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof orderNumber !== 'undefined') {
            apiPayload['order_number'] = orderNumber;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof journeyRef !== 'undefined') {
            apiPayload['journey_ref'] = journeyRef;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof reviewedCount !== 'undefined') {
            apiPayload['reviewed_count'] = reviewedCount;
        }
        if (typeof issuedCount !== 'undefined') {
            apiPayload['issued_count'] = issuedCount;
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
     * Called by the journeys `request_review` step. The same order and contact answer the same link while it is valid; an expired link is replaced. The link names the order's products the contact has not reviewed yet.
     *
     * @param {string} params.contactId - 
     * @param {string} params.orderId - 
     * @param {string} params.journeyRef - 
     * @param {string} params.locale - 
     * @param {string} params.market - The market whose form address builds the link.
     * @param {string[]} params.productIds - Ask only for these products of the order.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewLink>}
     */
    reviewsRequestsIssue(params: { contactId: string, orderId: string, journeyRef?: string, locale?: string, market?: string, productIds?: string[] }): Promise<Models.ReviewLink>;
    /**
     * Called by the journeys `request_review` step. The same order and contact answer the same link while it is valid; an expired link is replaced. The link names the order's products the contact has not reviewed yet.
     *
     * @param {string} contactId - 
     * @param {string} orderId - 
     * @param {string} journeyRef - 
     * @param {string} locale - 
     * @param {string} market - The market whose form address builds the link.
     * @param {string[]} productIds - Ask only for these products of the order.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewLink>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsRequestsIssue(contactId: string, orderId: string, journeyRef?: string, locale?: string, market?: string, productIds?: string[]): Promise<Models.ReviewLink>;
    reviewsRequestsIssue(
        paramsOrFirst: { contactId: string, orderId: string, journeyRef?: string, locale?: string, market?: string, productIds?: string[] } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string[])?]    
    ): Promise<Models.ReviewLink> {
        let params: { contactId: string, orderId: string, journeyRef?: string, locale?: string, market?: string, productIds?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, orderId: string, journeyRef?: string, locale?: string, market?: string, productIds?: string[] };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                orderId: rest[0] as string,
                journeyRef: rest[1] as string,
                locale: rest[2] as string,
                market: rest[3] as string,
                productIds: rest[4] as string[]            
            };
        }
        
        const contactId = params.contactId;
        const orderId = params.orderId;
        const journeyRef = params.journeyRef;
        const locale = params.locale;
        const market = params.market;
        const productIds = params.productIds;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof orderId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderId"');
        }

        const apiPath = '/v1/reviews/requests';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof journeyRef !== 'undefined') {
            apiPayload['journey_ref'] = journeyRef;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof productIds !== 'undefined') {
            apiPayload['product_ids'] = productIds;
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
     * The products of the link and which of them are reviewed. The storefront renders the form from it.
     *
     * @param {string} params.token - The token of the review link.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewForm>}
     */
    reviewsRequestsForm(params: { token: string }): Promise<Models.ReviewForm>;
    /**
     * The products of the link and which of them are reviewed. The storefront renders the form from it.
     *
     * @param {string} token - The token of the review link.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewForm>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsRequestsForm(token: string): Promise<Models.ReviewForm>;
    reviewsRequestsForm(
        paramsOrFirst: { token: string } | string    
    ): Promise<Models.ReviewForm> {
        let params: { token: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string };
        } else {
            params = {
                token: paramsOrFirst as string            
            };
        }
        
        const token = params.token;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/reviews/requests/{token}'.replace('{token}', token);
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
     * One review per product of the link. Entries that cannot be accepted are named in `rejected` while the others are written. Reviews wait for moderation unless the tenant publishes high ratings at once.
     *
     * @param {string} params.token - The token of the review link.
     * @param {string} params.locale - 
     * @param {object[]} params.reviews - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewSubmitResult>}
     */
    reviewsRequestsSubmit(params: { token: string, locale?: string, reviews?: object[] }): Promise<Models.ReviewSubmitResult>;
    /**
     * One review per product of the link. Entries that cannot be accepted are named in `rejected` while the others are written. Reviews wait for moderation unless the tenant publishes high ratings at once.
     *
     * @param {string} token - The token of the review link.
     * @param {string} locale - 
     * @param {object[]} reviews - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewSubmitResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsRequestsSubmit(token: string, locale?: string, reviews?: object[]): Promise<Models.ReviewSubmitResult>;
    reviewsRequestsSubmit(
        paramsOrFirst: { token: string, locale?: string, reviews?: object[] } | string,
        ...rest: [(string)?, (object[])?]    
    ): Promise<Models.ReviewSubmitResult> {
        let params: { token: string, locale?: string, reviews?: object[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string, locale?: string, reviews?: object[] };
        } else {
            params = {
                token: paramsOrFirst as string,
                locale: rest[0] as string,
                reviews: rest[1] as object[]            
            };
        }
        
        const token = params.token;
        const locale = params.locale;
        const reviews = params.reviews;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/reviews/submit/{token}'.replace('{token}', token);
        const apiPayload: Payload = {};
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof reviews !== 'undefined') {
            apiPayload['reviews'] = Client.toWireKeys(reviews, {"productId":{"wire":"product_id","children":null}});
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
