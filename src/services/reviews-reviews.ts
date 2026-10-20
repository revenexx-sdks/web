import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { ReviewsReviewsCreateSource } from '../enums/reviews-reviews-create-source';
import { ReviewsReviewsCreateState } from '../enums/reviews-reviews-create-state';

export class ReviewsReviews {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every review of this tenant in every state, without the trash unless `trashed` asks for it. Filter `?state=pending` for the moderation queue, `?product_id=`, `?contact_id=` (what the audiences rule reads), `?rating=`, `?verified_purchase=true`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.productId - Keep only rows whose `product_id` equals this.
     * @param {string} params.sku - Keep only rows whose `sku` equals this.
     * @param {string} params.productName - Keep only rows whose `product_name` equals this.
     * @param {string} params.orderId - Keep only rows whose `order_id` equals this.
     * @param {string} params.orderNumber - Keep only rows whose `order_number` equals this.
     * @param {string} params.requestId - Keep only rows whose `request_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.authorFirstName - Keep only rows whose `author_first_name` equals this.
     * @param {string} params.authorLastName - Keep only rows whose `author_last_name` equals this.
     * @param {string} params.rating - Keep only rows whose `rating` equals this.
     * @param {string} params.title - Keep only rows whose `title` equals this.
     * @param {string} params.body - Keep only rows whose `body` equals this.
     * @param {string} params.locale - Keep only rows whose `locale` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.verifiedPurchase - Keep only rows whose `verified_purchase` equals this.
     * @param {string} params.source - Keep only rows whose `source` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.rejectionReason - Keep only rows whose `rejection_reason` equals this.
     * @param {string} params.moderatedBy - Keep only rows whose `moderated_by` equals this.
     * @param {string} params.merchantReply - Keep only rows whose `merchant_reply` equals this.
     * @param {string} params.repliedBy - Keep only rows whose `replied_by` equals this.
     * @param {string} params.externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsReviewsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, productId?: string, sku?: string, productName?: string, orderId?: string, orderNumber?: string, requestId?: string, contactId?: string, organizationId?: string, authorFirstName?: string, authorLastName?: string, rating?: string, title?: string, body?: string, locale?: string, market?: string, verifiedPurchase?: string, source?: string, state?: string, rejectionReason?: string, moderatedBy?: string, merchantReply?: string, repliedBy?: string, externalId?: string }): Promise<{}>;
    /**
     * Every review of this tenant in every state, without the trash unless `trashed` asks for it. Filter `?state=pending` for the moderation queue, `?product_id=`, `?contact_id=` (what the audiences rule reads), `?rating=`, `?verified_purchase=true`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} productId - Keep only rows whose `product_id` equals this.
     * @param {string} sku - Keep only rows whose `sku` equals this.
     * @param {string} productName - Keep only rows whose `product_name` equals this.
     * @param {string} orderId - Keep only rows whose `order_id` equals this.
     * @param {string} orderNumber - Keep only rows whose `order_number` equals this.
     * @param {string} requestId - Keep only rows whose `request_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} authorFirstName - Keep only rows whose `author_first_name` equals this.
     * @param {string} authorLastName - Keep only rows whose `author_last_name` equals this.
     * @param {string} rating - Keep only rows whose `rating` equals this.
     * @param {string} title - Keep only rows whose `title` equals this.
     * @param {string} body - Keep only rows whose `body` equals this.
     * @param {string} locale - Keep only rows whose `locale` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} verifiedPurchase - Keep only rows whose `verified_purchase` equals this.
     * @param {string} source - Keep only rows whose `source` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} rejectionReason - Keep only rows whose `rejection_reason` equals this.
     * @param {string} moderatedBy - Keep only rows whose `moderated_by` equals this.
     * @param {string} merchantReply - Keep only rows whose `merchant_reply` equals this.
     * @param {string} repliedBy - Keep only rows whose `replied_by` equals this.
     * @param {string} externalId - Keep only rows whose `external_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsReviewsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, productId?: string, sku?: string, productName?: string, orderId?: string, orderNumber?: string, requestId?: string, contactId?: string, organizationId?: string, authorFirstName?: string, authorLastName?: string, rating?: string, title?: string, body?: string, locale?: string, market?: string, verifiedPurchase?: string, source?: string, state?: string, rejectionReason?: string, moderatedBy?: string, merchantReply?: string, repliedBy?: string, externalId?: string): Promise<{}>;
    reviewsReviewsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, productId?: string, sku?: string, productName?: string, orderId?: string, orderNumber?: string, requestId?: string, contactId?: string, organizationId?: string, authorFirstName?: string, authorLastName?: string, rating?: string, title?: string, body?: string, locale?: string, market?: string, verifiedPurchase?: string, source?: string, state?: string, rejectionReason?: string, moderatedBy?: string, merchantReply?: string, repliedBy?: string, externalId?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, productId?: string, sku?: string, productName?: string, orderId?: string, orderNumber?: string, requestId?: string, contactId?: string, organizationId?: string, authorFirstName?: string, authorLastName?: string, rating?: string, title?: string, body?: string, locale?: string, market?: string, verifiedPurchase?: string, source?: string, state?: string, rejectionReason?: string, moderatedBy?: string, merchantReply?: string, repliedBy?: string, externalId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, productId?: string, sku?: string, productName?: string, orderId?: string, orderNumber?: string, requestId?: string, contactId?: string, organizationId?: string, authorFirstName?: string, authorLastName?: string, rating?: string, title?: string, body?: string, locale?: string, market?: string, verifiedPurchase?: string, source?: string, state?: string, rejectionReason?: string, moderatedBy?: string, merchantReply?: string, repliedBy?: string, externalId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                productId: rest[4] as string,
                sku: rest[5] as string,
                productName: rest[6] as string,
                orderId: rest[7] as string,
                orderNumber: rest[8] as string,
                requestId: rest[9] as string,
                contactId: rest[10] as string,
                organizationId: rest[11] as string,
                authorFirstName: rest[12] as string,
                authorLastName: rest[13] as string,
                rating: rest[14] as string,
                title: rest[15] as string,
                body: rest[16] as string,
                locale: rest[17] as string,
                market: rest[18] as string,
                verifiedPurchase: rest[19] as string,
                source: rest[20] as string,
                state: rest[21] as string,
                rejectionReason: rest[22] as string,
                moderatedBy: rest[23] as string,
                merchantReply: rest[24] as string,
                repliedBy: rest[25] as string,
                externalId: rest[26] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const productId = params.productId;
        const sku = params.sku;
        const productName = params.productName;
        const orderId = params.orderId;
        const orderNumber = params.orderNumber;
        const requestId = params.requestId;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const authorFirstName = params.authorFirstName;
        const authorLastName = params.authorLastName;
        const rating = params.rating;
        const title = params.title;
        const body = params.body;
        const locale = params.locale;
        const market = params.market;
        const verifiedPurchase = params.verifiedPurchase;
        const source = params.source;
        const state = params.state;
        const rejectionReason = params.rejectionReason;
        const moderatedBy = params.moderatedBy;
        const merchantReply = params.merchantReply;
        const repliedBy = params.repliedBy;
        const externalId = params.externalId;


        const apiPath = '/v1/reviews/reviews';
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
        if (typeof trashed !== 'undefined') {
            apiPayload['trashed'] = trashed;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof productName !== 'undefined') {
            apiPayload['product_name'] = productName;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof orderNumber !== 'undefined') {
            apiPayload['order_number'] = orderNumber;
        }
        if (typeof requestId !== 'undefined') {
            apiPayload['request_id'] = requestId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof authorFirstName !== 'undefined') {
            apiPayload['author_first_name'] = authorFirstName;
        }
        if (typeof authorLastName !== 'undefined') {
            apiPayload['author_last_name'] = authorLastName;
        }
        if (typeof rating !== 'undefined') {
            apiPayload['rating'] = rating;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof verifiedPurchase !== 'undefined') {
            apiPayload['verified_purchase'] = verifiedPurchase;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof rejectionReason !== 'undefined') {
            apiPayload['rejection_reason'] = rejectionReason;
        }
        if (typeof moderatedBy !== 'undefined') {
            apiPayload['moderated_by'] = moderatedBy;
        }
        if (typeof merchantReply !== 'undefined') {
            apiPayload['merchant_reply'] = merchantReply;
        }
        if (typeof repliedBy !== 'undefined') {
            apiPayload['replied_by'] = repliedBy;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
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
     * For reviews collected elsewhere. The purchase is verified only when `order_id` and `contact_id` name a completed order of that contact holding the product — never because a caller says so.
     *
     * @param {string} params.productId - 
     * @param {number} params.rating - Stars, a whole number from 1 to 5. A form may send it as text ("4").
     * @param {string} params.authorFirstName - 
     * @param {string} params.authorLastName - 
     * @param {string} params.body - 
     * @param {string} params.contactId - 
     * @param {string} params.externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {object} params.externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} params.locale - 
     * @param {string} params.market - 
     * @param {string} params.orderId - 
     * @param {string} params.productName - 
     * @param {string} params.publishedAt - 
     * @param {string} params.sku - 
     * @param {ReviewsReviewsCreateSource} params.source - Empty is `admin`.
     * @param {object} params.sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} params.sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {ReviewsReviewsCreateState} params.state - Empty is `pending`.
     * @param {string} params.title - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     */
    reviewsReviewsCreate(params: { productId: string, rating: number, authorFirstName?: string, authorLastName?: string, body?: string, contactId?: string, externalId?: string, externalRefs?: object, locale?: string, market?: string, orderId?: string, productName?: string, publishedAt?: string, sku?: string, source?: ReviewsReviewsCreateSource, sourceData?: object, sourceSyncedAt?: string, state?: ReviewsReviewsCreateState, title?: string }): Promise<Models.Review>;
    /**
     * For reviews collected elsewhere. The purchase is verified only when `order_id` and `contact_id` name a completed order of that contact holding the product — never because a caller says so.
     *
     * @param {string} productId - 
     * @param {number} rating - Stars, a whole number from 1 to 5. A form may send it as text ("4").
     * @param {string} authorFirstName - 
     * @param {string} authorLastName - 
     * @param {string} body - 
     * @param {string} contactId - 
     * @param {string} externalId - The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {object} externalRefs - Every OTHER system that knows this record, keyed by system name. `external_id` is the leading system; this is the rest. Not a query parameter: a jsonb column is compared as a whole document.
     * @param {string} locale - 
     * @param {string} market - 
     * @param {string} orderId - 
     * @param {string} productName - 
     * @param {string} publishedAt - 
     * @param {string} sku - 
     * @param {ReviewsReviewsCreateSource} source - Empty is `admin`.
     * @param {object} sourceData - The source system's own view of the record as the last sync saw it, kept for reconciliation. Nothing in this app reads it.
     * @param {string} sourceSyncedAt - When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {ReviewsReviewsCreateState} state - Empty is `pending`.
     * @param {string} title - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsReviewsCreate(productId: string, rating: number, authorFirstName?: string, authorLastName?: string, body?: string, contactId?: string, externalId?: string, externalRefs?: object, locale?: string, market?: string, orderId?: string, productName?: string, publishedAt?: string, sku?: string, source?: ReviewsReviewsCreateSource, sourceData?: object, sourceSyncedAt?: string, state?: ReviewsReviewsCreateState, title?: string): Promise<Models.Review>;
    reviewsReviewsCreate(
        paramsOrFirst: { productId: string, rating: number, authorFirstName?: string, authorLastName?: string, body?: string, contactId?: string, externalId?: string, externalRefs?: object, locale?: string, market?: string, orderId?: string, productName?: string, publishedAt?: string, sku?: string, source?: ReviewsReviewsCreateSource, sourceData?: object, sourceSyncedAt?: string, state?: ReviewsReviewsCreateState, title?: string } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (ReviewsReviewsCreateSource)?, (object)?, (string)?, (ReviewsReviewsCreateState)?, (string)?]    
    ): Promise<Models.Review> {
        let params: { productId: string, rating: number, authorFirstName?: string, authorLastName?: string, body?: string, contactId?: string, externalId?: string, externalRefs?: object, locale?: string, market?: string, orderId?: string, productName?: string, publishedAt?: string, sku?: string, source?: ReviewsReviewsCreateSource, sourceData?: object, sourceSyncedAt?: string, state?: ReviewsReviewsCreateState, title?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { productId: string, rating: number, authorFirstName?: string, authorLastName?: string, body?: string, contactId?: string, externalId?: string, externalRefs?: object, locale?: string, market?: string, orderId?: string, productName?: string, publishedAt?: string, sku?: string, source?: ReviewsReviewsCreateSource, sourceData?: object, sourceSyncedAt?: string, state?: ReviewsReviewsCreateState, title?: string };
        } else {
            params = {
                productId: paramsOrFirst as string,
                rating: rest[0] as number,
                authorFirstName: rest[1] as string,
                authorLastName: rest[2] as string,
                body: rest[3] as string,
                contactId: rest[4] as string,
                externalId: rest[5] as string,
                externalRefs: rest[6] as object,
                locale: rest[7] as string,
                market: rest[8] as string,
                orderId: rest[9] as string,
                productName: rest[10] as string,
                publishedAt: rest[11] as string,
                sku: rest[12] as string,
                source: rest[13] as ReviewsReviewsCreateSource,
                sourceData: rest[14] as object,
                sourceSyncedAt: rest[15] as string,
                state: rest[16] as ReviewsReviewsCreateState,
                title: rest[17] as string            
            };
        }
        
        const productId = params.productId;
        const rating = params.rating;
        const authorFirstName = params.authorFirstName;
        const authorLastName = params.authorLastName;
        const body = params.body;
        const contactId = params.contactId;
        const externalId = params.externalId;
        const externalRefs = params.externalRefs;
        const locale = params.locale;
        const market = params.market;
        const orderId = params.orderId;
        const productName = params.productName;
        const publishedAt = params.publishedAt;
        const sku = params.sku;
        const source = params.source;
        const sourceData = params.sourceData;
        const sourceSyncedAt = params.sourceSyncedAt;
        const state = params.state;
        const title = params.title;

        if (typeof productId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "productId"');
        }
        if (typeof rating === 'undefined') {
            throw new RevenexxException('Missing required parameter: "rating"');
        }

        const apiPath = '/v1/reviews/reviews';
        const apiPayload: Payload = {};
        if (typeof authorFirstName !== 'undefined') {
            apiPayload['author_first_name'] = authorFirstName;
        }
        if (typeof authorLastName !== 'undefined') {
            apiPayload['author_last_name'] = authorLastName;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof externalRefs !== 'undefined') {
            apiPayload['external_refs'] = externalRefs;
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
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof productName !== 'undefined') {
            apiPayload['product_name'] = productName;
        }
        if (typeof publishedAt !== 'undefined') {
            apiPayload['published_at'] = publishedAt;
        }
        if (typeof rating !== 'undefined') {
            apiPayload['rating'] = rating;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof sourceData !== 'undefined') {
            apiPayload['source_data'] = sourceData;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
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
     * Every review in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    reviewsReviewsEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/reviews/reviews/trash/empty';
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
     * What the nightly purge does, callable by hand: every review in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsReviewsPurge(): Promise<{}> {

        const apiPath = '/v1/reviews/reviews/trash/purge';
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
     * The first DELETE moves the review into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Any review may go in, published or not; while it is in the trash it leaves the product page and the figures, which are recomputed. A DELETE on a review already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsReviewsDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the review into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Any review may go in, published or not; while it is in the trash it leaves the product page and the figures, which are recomputed. A DELETE on a review already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsReviewsDelete(id: string): Promise<{}>;
    reviewsReviewsDelete(
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

        const apiPath = '/v1/reviews/reviews/{id}'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     */
    reviewsReviewsGet(params: { id: string }): Promise<Models.Review>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Review>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsReviewsGet(id: string): Promise<Models.Review>;
    reviewsReviewsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Review> {
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

        const apiPath = '/v1/reviews/reviews/{id}'.replace('{id}', id);
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
     * Clears the trash marks on the review. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    reviewsReviewsRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the review. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsReviewsRestore(id: string): Promise<Models.TrashRestoreResult>;
    reviewsReviewsRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TrashRestoreResult> {
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

        const apiPath = '/v1/reviews/reviews/{id}/restore'.replace('{id}', id);
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
