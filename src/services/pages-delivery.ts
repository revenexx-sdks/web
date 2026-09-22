import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class PagesDelivery {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * One call gives a theme its whole chrome: header, footer and account navigation, each under the key the theme looks it up by. This route reads no filter — fetch all of them once and index by `id`.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesDeliveryMenus(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * One call gives a theme its whole chrome: header, footer and account navigation, each under the key the theme looks it up by. This route reads no filter — fetch all of them once and index by `id`.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesDeliveryMenus(limit?: number, offset?: number, order?: string): Promise<{}>;
    pagesDeliveryMenus(
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


        const apiPath = '/v1/pages/delivery/menus';
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
     * What a storefront calls to render a URL: `GET /pages/delivery/page?slug=about-us&langcode=de`. Send exactly one selector — `slug` or `id`. `slug` is matched against the page and then against its translations, so a localized URL resolves to its page. Only the PUBLISHED revision is served, so an edit in progress never leaks. What comes back is finished rather than raw: `langcode` is resolved field by field with the page's source language behind it, blocks whose publish window has not opened or has already closed are left out, and every library reference is expanded into the subtree it points at — so a renderer walks the tree it is given and makes no second call for any of it.
     *
     * @param {string} params.slug - The page slug, or the slug of one of its translations, without a leading slash — the path segment the storefront routes. Either this or `id`.
     * @param {string} params.id - The page id, for a storefront that already holds one (from `GET /pages/delivery/pages`). Either this or `slug`.
     * @param {string} params.langcode - Language to resolve the tree for, e.g. `de`. Falls back to the page's source language per field, so a partly translated page still renders whole.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     */
    pagesDeliveryPage(params?: { slug?: string, id?: string, langcode?: string }): Promise<Models.DeliveryPage>;
    /**
     * What a storefront calls to render a URL: `GET /pages/delivery/page?slug=about-us&langcode=de`. Send exactly one selector — `slug` or `id`. `slug` is matched against the page and then against its translations, so a localized URL resolves to its page. Only the PUBLISHED revision is served, so an edit in progress never leaks. What comes back is finished rather than raw: `langcode` is resolved field by field with the page's source language behind it, blocks whose publish window has not opened or has already closed are left out, and every library reference is expanded into the subtree it points at — so a renderer walks the tree it is given and makes no second call for any of it.
     *
     * @param {string} slug - The page slug, or the slug of one of its translations, without a leading slash — the path segment the storefront routes. Either this or `id`.
     * @param {string} id - The page id, for a storefront that already holds one (from `GET /pages/delivery/pages`). Either this or `slug`.
     * @param {string} langcode - Language to resolve the tree for, e.g. `de`. Falls back to the page's source language per field, so a partly translated page still renders whole.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesDeliveryPage(slug?: string, id?: string, langcode?: string): Promise<Models.DeliveryPage>;
    pagesDeliveryPage(
        paramsOrFirst?: { slug?: string, id?: string, langcode?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.DeliveryPage> {
        let params: { slug?: string, id?: string, langcode?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { slug?: string, id?: string, langcode?: string };
        } else {
            params = {
                slug: paramsOrFirst as string,
                id: rest[0] as string,
                langcode: rest[1] as string            
            };
        }
        
        const slug = params.slug;
        const id = params.id;
        const langcode = params.langcode;


        const apiPath = '/v1/pages/delivery/page';
        const apiPayload: Payload = {};
        if (typeof slug !== 'undefined') {
            apiPayload['slug'] = slug;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof langcode !== 'undefined') {
            apiPayload['langcode'] = langcode;
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
     * The route a sitemap, a static build or a link picker is generated from. Only published pages, never a soft-deleted one — `filter` echoes both predicates the route applies on its own. A `?status=` of your own is ignored: this route is the published view by definition.
     *
     * @param {number} params.limit - Page size (default 100, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} params.bundle - Exact page type — how a theme asks for just its landing pages. The value set belongs to the active theme.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesDeliveryPages(params?: { limit?: number, offset?: number, order?: string, bundle?: string }): Promise<{}>;
    /**
     * The route a sitemap, a static build or a link picker is generated from. Only published pages, never a soft-deleted one — `filter` echoes both predicates the route applies on its own. A `?status=` of your own is ignored: this route is the published view by definition.
     *
     * @param {number} limit - Page size (default 100, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. A column this entity does not have, or any other shape, is refused with 400.
     * @param {string} bundle - Exact page type — how a theme asks for just its landing pages. The value set belongs to the active theme.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesDeliveryPages(limit?: number, offset?: number, order?: string, bundle?: string): Promise<{}>;
    pagesDeliveryPages(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, bundle?: string } | number,
        ...rest: [(number)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, bundle?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, bundle?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                bundle: rest[2] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const bundle = params.bundle;


        const apiPath = '/v1/pages/delivery/pages';
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
        if (typeof bundle !== 'undefined') {
            apiPayload['bundle'] = bundle;
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
     * The same shape `GET /pages/delivery/page` answers, built from the UNPUBLISHED working copy instead of the published revision — so a reviewer without an editor account sees exactly what the storefront would render.
     *
     * @param {string} params.token - The token handed out by POST /pages/editor/{page_id}/preview-grant.
     * @param {string} params.langcode - Language to resolve the tree for. Falls back to the page's source language, per field.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     */
    pagesDeliveryPreview(params: { token: string, langcode?: string }): Promise<Models.DeliveryPage>;
    /**
     * The same shape `GET /pages/delivery/page` answers, built from the UNPUBLISHED working copy instead of the published revision — so a reviewer without an editor account sees exactly what the storefront would render.
     *
     * @param {string} token - The token handed out by POST /pages/editor/{page_id}/preview-grant.
     * @param {string} langcode - Language to resolve the tree for. Falls back to the page's source language, per field.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveryPage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesDeliveryPreview(token: string, langcode?: string): Promise<Models.DeliveryPage>;
    pagesDeliveryPreview(
        paramsOrFirst: { token: string, langcode?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DeliveryPage> {
        let params: { token: string, langcode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string, langcode?: string };
        } else {
            params = {
                token: paramsOrFirst as string,
                langcode: rest[0] as string            
            };
        }
        
        const token = params.token;
        const langcode = params.langcode;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/pages/delivery/preview/{token}'.replace('{token}', token);
        const apiPayload: Payload = {};
        if (typeof langcode !== 'undefined') {
            apiPayload['langcode'] = langcode;
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
