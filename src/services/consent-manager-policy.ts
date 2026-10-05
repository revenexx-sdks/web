import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Layout } from '../enums/layout';

export class ConsentManagerPolicy {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The draft for the market in `x-revenexx-market`. A market without its own answers the shop's draft with `inherited: true`. A tenant with no draft at all gets the default one created.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.BannerDraft>}
     */
    consentManagerBannerGet(): Promise<Models.BannerDraft> {

        const apiPath = '/v1/consent-manager/banner';
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
     * Save the draft for the market in `x-revenexx-market` ('' = the shop). A market's first save starts from a copy of the shop's draft. Nothing a visitor sees changes until the next publish.
     *
     * @param {string} params.imprintUrl - The shop's imprint, linked from the first layer.
     * @param {Layout} params.layout - The layout this draft asks for — box, bar or modal — or null to follow the `banner_layout` setting.
     * @param {string} params.privacyUrl - The shop's privacy policy, linked from the first layer.
     * @param {object} params.texts - The banner's labels per language: { "de": { "title": …, "body": …, "accept_all": …, "reject_all": …, "settings": …, "save": … } }. Required per language before publishing: title, body, accept_all, reject_all, settings, save. Optional: preferences_title, preferences_body, object, load_once, gate_text, privacy_link, cookie_details, always_active, close.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BannerDraft>}
     */
    consentManagerBannerUpdate(params?: { imprintUrl?: string, layout?: Layout, privacyUrl?: string, texts?: object }): Promise<Models.BannerDraft>;
    /**
     * Save the draft for the market in `x-revenexx-market` ('' = the shop). A market's first save starts from a copy of the shop's draft. Nothing a visitor sees changes until the next publish.
     *
     * @param {string} imprintUrl - The shop's imprint, linked from the first layer.
     * @param {Layout} layout - The layout this draft asks for — box, bar or modal — or null to follow the `banner_layout` setting.
     * @param {string} privacyUrl - The shop's privacy policy, linked from the first layer.
     * @param {object} texts - The banner's labels per language: { "de": { "title": …, "body": …, "accept_all": …, "reject_all": …, "settings": …, "save": … } }. Required per language before publishing: title, body, accept_all, reject_all, settings, save. Optional: preferences_title, preferences_body, object, load_once, gate_text, privacy_link, cookie_details, always_active, close.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BannerDraft>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerBannerUpdate(imprintUrl?: string, layout?: Layout, privacyUrl?: string, texts?: object): Promise<Models.BannerDraft>;
    consentManagerBannerUpdate(
        paramsOrFirst?: { imprintUrl?: string, layout?: Layout, privacyUrl?: string, texts?: object } | string,
        ...rest: [(Layout)?, (string)?, (object)?]    
    ): Promise<Models.BannerDraft> {
        let params: { imprintUrl?: string, layout?: Layout, privacyUrl?: string, texts?: object };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { imprintUrl?: string, layout?: Layout, privacyUrl?: string, texts?: object };
        } else {
            params = {
                imprintUrl: paramsOrFirst as string,
                layout: rest[0] as Layout,
                privacyUrl: rest[1] as string,
                texts: rest[2] as object            
            };
        }
        
        const imprintUrl = params.imprintUrl;
        const layout = params.layout;
        const privacyUrl = params.privacyUrl;
        const texts = params.texts;


        const apiPath = '/v1/consent-manager/banner';
        const apiPayload: Payload = {};
        if (typeof imprintUrl !== 'undefined') {
            apiPayload['imprint_url'] = imprintUrl;
        }
        if (typeof layout !== 'undefined') {
            apiPayload['layout'] = layout;
        }
        if (typeof privacyUrl !== 'undefined') {
            apiPayload['privacy_url'] = privacyUrl;
        }
        if (typeof texts !== 'undefined') {
            apiPayload['texts'] = texts;
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
     * Every published version. There is no route that edits or deletes one — both answer 405 — because a version is the evidence of what visitors read.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {number} params.number - Filter to rows whose `number` is exactly this value. The version's number. It rises with every publish across what the publishing call can see, and the visitor's cookie remembers the number it was asked under.
     * @param {string} params.market - Filter to rows whose `market` is exactly this value. The market this row belongs to, by code — '' (empty) is the shop as a whole. Taken from the `x-revenexx-market` header of the call that wrote it, never from a body.
     * @param {boolean} params.material - Filter to rows whose `material` is exactly this value. Whether this publish asks every visitor again. Set by the publish, or forced on by the `reconsent_on_publish` setting.
     * @param {number} params.materialNumber - Filter to rows whose `material_number` is exactly this value. The number of the latest material version up to and including this one. A storefront asks again when the number in the visitor's cookie is lower.
     * @param {string} params.sha256 - Filter to rows whose `sha256` is exactly this value. SHA-256 over the canonical JSON of `content` (object keys sorted, recursively). Recomputing it proves the content has not moved since it was published.
     * @param {string} params.note - Filter to rows whose `note` is exactly this value. What changed, in the publisher's words. Optional.
     * @param {string} params.publishedAt - Filter to rows whose `published_at` is exactly this value. When the version was published. Server time.
     * @param {string} params.publishedBy - Filter to rows whose `published_by` is exactly this value. The subject of the identity that published it, when the call carried one.
     * @param {string} params.createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} params.offset - Row offset (default 0).
     * @param {string} params.order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    consentManagerPolicyVersionsList(params?: { id?: string, number?: number, market?: string, material?: boolean, materialNumber?: number, sha256?: string, note?: string, publishedAt?: string, publishedBy?: string, createdAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * Every published version. There is no route that edits or deletes one — both answer 405 — because a version is the evidence of what visitors read.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {number} number - Filter to rows whose `number` is exactly this value. The version's number. It rises with every publish across what the publishing call can see, and the visitor's cookie remembers the number it was asked under.
     * @param {string} market - Filter to rows whose `market` is exactly this value. The market this row belongs to, by code — '' (empty) is the shop as a whole. Taken from the `x-revenexx-market` header of the call that wrote it, never from a body.
     * @param {boolean} material - Filter to rows whose `material` is exactly this value. Whether this publish asks every visitor again. Set by the publish, or forced on by the `reconsent_on_publish` setting.
     * @param {number} materialNumber - Filter to rows whose `material_number` is exactly this value. The number of the latest material version up to and including this one. A storefront asks again when the number in the visitor's cookie is lower.
     * @param {string} sha256 - Filter to rows whose `sha256` is exactly this value. SHA-256 over the canonical JSON of `content` (object keys sorted, recursively). Recomputing it proves the content has not moved since it was published.
     * @param {string} note - Filter to rows whose `note` is exactly this value. What changed, in the publisher's words. Optional.
     * @param {string} publishedAt - Filter to rows whose `published_at` is exactly this value. When the version was published. Server time.
     * @param {string} publishedBy - Filter to rows whose `published_by` is exactly this value. The subject of the identity that published it, when the call carried one.
     * @param {string} createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} offset - Row offset (default 0).
     * @param {string} order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPolicyVersionsList(id?: string, number?: number, market?: string, material?: boolean, materialNumber?: number, sha256?: string, note?: string, publishedAt?: string, publishedBy?: string, createdAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    consentManagerPolicyVersionsList(
        paramsOrFirst?: { id?: string, number?: number, market?: string, material?: boolean, materialNumber?: number, sha256?: string, note?: string, publishedAt?: string, publishedBy?: string, createdAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(number)?, (string)?, (boolean)?, (number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, number?: number, market?: string, material?: boolean, materialNumber?: number, sha256?: string, note?: string, publishedAt?: string, publishedBy?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, number?: number, market?: string, material?: boolean, materialNumber?: number, sha256?: string, note?: string, publishedAt?: string, publishedBy?: string, createdAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                number: rest[0] as number,
                market: rest[1] as string,
                material: rest[2] as boolean,
                materialNumber: rest[3] as number,
                sha256: rest[4] as string,
                note: rest[5] as string,
                publishedAt: rest[6] as string,
                publishedBy: rest[7] as string,
                createdAt: rest[8] as string,
                limit: rest[9] as number,
                offset: rest[10] as number,
                order: rest[11] as string            
            };
        }
        
        const id = params.id;
        const number = params.number;
        const market = params.market;
        const material = params.material;
        const materialNumber = params.materialNumber;
        const sha256 = params.sha256;
        const note = params.note;
        const publishedAt = params.publishedAt;
        const publishedBy = params.publishedBy;
        const createdAt = params.createdAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/consent-manager/policy-versions';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof material !== 'undefined') {
            apiPayload['material'] = material;
        }
        if (typeof materialNumber !== 'undefined') {
            apiPayload['material_number'] = materialNumber;
        }
        if (typeof sha256 !== 'undefined') {
            apiPayload['sha256'] = sha256;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof publishedAt !== 'undefined') {
            apiPayload['published_at'] = publishedAt;
        }
        if (typeof publishedBy !== 'undefined') {
            apiPayload['published_by'] = publishedBy;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
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
     * One version with its full frozen content and hash.
     *
     * @param {string} params.id - The version.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PolicyVersion>}
     */
    consentManagerPolicyVersionsGet(params: { id: string }): Promise<Models.PolicyVersion>;
    /**
     * One version with its full frozen content and hash.
     *
     * @param {string} id - The version.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PolicyVersion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPolicyVersionsGet(id: string): Promise<Models.PolicyVersion>;
    consentManagerPolicyVersionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PolicyVersion> {
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

        const apiPath = '/v1/consent-manager/policy-versions/{id}'.replace('{id}', id);
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
     * Renders the draft exactly as publishing would, without publishing it, and answers a token that reads it at GET /consent-manager/delivery/preview/{token} until it expires (72 hours by default, at most 168). The same refusals as a publish apply.
     *
     * @param {number} params.ttlHours - How long the token answers.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PolicyPreview>}
     */
    consentManagerPolicyPreview(params?: { ttlHours?: number }): Promise<Models.PolicyPreview>;
    /**
     * Renders the draft exactly as publishing would, without publishing it, and answers a token that reads it at GET /consent-manager/delivery/preview/{token} until it expires (72 hours by default, at most 168). The same refusals as a publish apply.
     *
     * @param {number} ttlHours - How long the token answers.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PolicyPreview>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPolicyPreview(ttlHours?: number): Promise<Models.PolicyPreview>;
    consentManagerPolicyPreview(
        paramsOrFirst?: { ttlHours?: number } | number    
    ): Promise<Models.PolicyPreview> {
        let params: { ttlHours?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { ttlHours?: number };
        } else {
            params = {
                ttlHours: paramsOrFirst as number            
            };
        }
        
        const ttlHours = params.ttlHours;


        const apiPath = '/v1/consent-manager/policy/preview';
        const apiPayload: Payload = {};
        if (typeof ttlHours !== 'undefined') {
            apiPayload['ttl_hours'] = ttlHours;
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
     * Renders the draft, the active purposes and vendors and the settings in every language the draft speaks, and stores them as a new immutable version with a SHA-256 hash over the canonical content. The version is for the market in `x-revenexx-market` ('' = the shop). `material: false` keeps visitors' earlier decisions valid — unless the `reconsent_on_publish` setting is `always`, or there is no earlier version.
     *
     * @param {boolean} params.material - Whether visitors are asked again. Defaults to true.
     * @param {string} params.note - What changed.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PolicyVersion>}
     */
    consentManagerPolicyPublish(params?: { material?: boolean, note?: string }): Promise<Models.PolicyVersion>;
    /**
     * Renders the draft, the active purposes and vendors and the settings in every language the draft speaks, and stores them as a new immutable version with a SHA-256 hash over the canonical content. The version is for the market in `x-revenexx-market` ('' = the shop). `material: false` keeps visitors' earlier decisions valid — unless the `reconsent_on_publish` setting is `always`, or there is no earlier version.
     *
     * @param {boolean} material - Whether visitors are asked again. Defaults to true.
     * @param {string} note - What changed.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PolicyVersion>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerPolicyPublish(material?: boolean, note?: string): Promise<Models.PolicyVersion>;
    consentManagerPolicyPublish(
        paramsOrFirst?: { material?: boolean, note?: string } | boolean,
        ...rest: [(string)?]    
    ): Promise<Models.PolicyVersion> {
        let params: { material?: boolean, note?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { material?: boolean, note?: string };
        } else {
            params = {
                material: paramsOrFirst as boolean,
                note: rest[0] as string            
            };
        }
        
        const material = params.material;
        const note = params.note;


        const apiPath = '/v1/consent-manager/policy/publish';
        const apiPayload: Payload = {};
        if (typeof material !== 'undefined') {
            apiPayload['material'] = material;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
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
