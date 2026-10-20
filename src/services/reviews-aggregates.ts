import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class ReviewsAggregates {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * With `product_ids` (comma-separated, at most 200): one entry per product, zero for a product nobody reviewed. Without: the stored figures, paged, most reviewed first.
     *
     * @param {string} params.productIds - Comma-separated product ids.
     * @param {string} params.market - A market code; default `*`, all markets together.
     * @param {string} params.productId - Without product_ids: one product.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsAggregatesList(params?: { productIds?: string, market?: string, productId?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * With `product_ids` (comma-separated, at most 200): one entry per product, zero for a product nobody reviewed. Without: the stored figures, paged, most reviewed first.
     *
     * @param {string} productIds - Comma-separated product ids.
     * @param {string} market - A market code; default `*`, all markets together.
     * @param {string} productId - Without product_ids: one product.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsAggregatesList(productIds?: string, market?: string, productId?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    reviewsAggregatesList(
        paramsOrFirst?: { productIds?: string, market?: string, productId?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { productIds?: string, market?: string, productId?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { productIds?: string, market?: string, productId?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                productIds: paramsOrFirst as string,
                market: rest[0] as string,
                productId: rest[1] as string,
                limit: rest[2] as number,
                offset: rest[3] as number,
                order: rest[4] as string            
            };
        }
        
        const productIds = params.productIds;
        const market = params.market;
        const productId = params.productId;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/reviews/aggregates';
        const apiPayload: Payload = {};
        if (typeof productIds !== 'undefined') {
            apiPayload['product_ids'] = productIds;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
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
     * For the named products, or for every product with reviews or figures (up to 1000 per call).
     *
     * @param {string[]} params.productIds - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    reviewsAggregatesRebuild(params?: { productIds?: string[] }): Promise<{}>;
    /**
     * For the named products, or for every product with reviews or figures (up to 1000 per call).
     *
     * @param {string[]} productIds - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsAggregatesRebuild(productIds?: string[]): Promise<{}>;
    reviewsAggregatesRebuild(
        paramsOrFirst?: { productIds?: string[] } | string[]    
    ): Promise<{}> {
        let params: { productIds?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { productIds?: string[] };
        } else {
            params = {
                productIds: paramsOrFirst as string[]            
            };
        }
        
        const productIds = params.productIds;


        const apiPath = '/v1/reviews/aggregates/rebuild';
        const apiPayload: Payload = {};
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
     * The stars of the review's product across all markets, five stars down to one, each with its count and share of the published reviews, worded in the caller language (Accept-Language; German unless English is asked for); average, count and verified purchases are `footer` rows, no published review answers no rows; the row of the review's own stars says so in `sub`.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewStarBars>}
     */
    reviewsAggregatesReviewStars(params: { id: string }): Promise<Models.ReviewStarBars>;
    /**
     * The stars of the review's product across all markets, five stars down to one, each with its count and share of the published reviews, worded in the caller language (Accept-Language; German unless English is asked for); average, count and verified purchases are `footer` rows, no published review answers no rows; the row of the review's own stars says so in `sub`.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReviewStarBars>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsAggregatesReviewStars(id: string): Promise<Models.ReviewStarBars>;
    reviewsAggregatesReviewStars(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ReviewStarBars> {
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

        const apiPath = '/v1/reviews/reviews/{id}/stars'.replace('{id}', id);
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
}
