import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Sort } from '../enums/sort';

export class ReviewsProducts {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {string} params.productId - The product.
     * @param {string} params.market - Only reviews written in this market, with its figures. Without it: all markets.
     * @param {Sort} params.sort - Default newest.
     * @param {number} params.limit - Page size (default 10).
     * @param {number} params.offset - Row offset.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductReviews>}
     */
    reviewsProductsGet(params: { productId: string, market?: string, sort?: Sort, limit?: number, offset?: number }): Promise<Models.ProductReviews>;
    /**
     *
     * @param {string} productId - The product.
     * @param {string} market - Only reviews written in this market, with its figures. Without it: all markets.
     * @param {Sort} sort - Default newest.
     * @param {number} limit - Page size (default 10).
     * @param {number} offset - Row offset.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProductReviews>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    reviewsProductsGet(productId: string, market?: string, sort?: Sort, limit?: number, offset?: number): Promise<Models.ProductReviews>;
    reviewsProductsGet(
        paramsOrFirst: { productId: string, market?: string, sort?: Sort, limit?: number, offset?: number } | string,
        ...rest: [(string)?, (Sort)?, (number)?, (number)?]    
    ): Promise<Models.ProductReviews> {
        let params: { productId: string, market?: string, sort?: Sort, limit?: number, offset?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { productId: string, market?: string, sort?: Sort, limit?: number, offset?: number };
        } else {
            params = {
                productId: paramsOrFirst as string,
                market: rest[0] as string,
                sort: rest[1] as Sort,
                limit: rest[2] as number,
                offset: rest[3] as number            
            };
        }
        
        const productId = params.productId;
        const market = params.market;
        const sort = params.sort;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof productId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "productId"');
        }

        const apiPath = '/v1/reviews/products/{product_id}'.replace('{product_id}', productId);
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof sort !== 'undefined') {
            apiPayload['sort'] = sort;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
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
}
