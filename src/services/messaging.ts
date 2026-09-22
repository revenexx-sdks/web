import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { ResourceType } from '../enums/resource-type';
import { Scope } from '../enums/scope';
import { Reason } from '../enums/reason';
import { MessageClass } from '../enums/message-class';
import { WhatsappCategory } from '../enums/whatsapp-category';

export class Messaging {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Filterable by `resource_type`, `resource_id` and `subject` — the last one
     * being the human-readable name a row was recorded under (a template's key,
     * a layout's name), which is what an operator has to hand six weeks later
     * when the id means nothing to them.
     * 
     * There is no write route and no delete route: an append-only log with an
     * editor is a log that says whatever the last editor wanted.
     *
     * @param {ResourceType} params.resourceType - 
     * @param {string} params.resourceId - 
     * @param {string} params.subject - 
     * @param {number} params.limit - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    auditIndex(params?: { resourceType?: ResourceType, resourceId?: string, subject?: string, limit?: number }): Promise<{}>;
    /**
     * Filterable by `resource_type`, `resource_id` and `subject` — the last one
     * being the human-readable name a row was recorded under (a template's key,
     * a layout's name), which is what an operator has to hand six weeks later
     * when the id means nothing to them.
     * 
     * There is no write route and no delete route: an append-only log with an
     * editor is a log that says whatever the last editor wanted.
     *
     * @param {ResourceType} resourceType - 
     * @param {string} resourceId - 
     * @param {string} subject - 
     * @param {number} limit - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    auditIndex(resourceType?: ResourceType, resourceId?: string, subject?: string, limit?: number): Promise<{}>;
    auditIndex(
        paramsOrFirst?: { resourceType?: ResourceType, resourceId?: string, subject?: string, limit?: number } | ResourceType,
        ...rest: [(string)?, (string)?, (number)?]    
    ): Promise<{}> {
        let params: { resourceType?: ResourceType, resourceId?: string, subject?: string, limit?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('resourceType' in paramsOrFirst || 'resourceId' in paramsOrFirst || 'subject' in paramsOrFirst || 'limit' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { resourceType?: ResourceType, resourceId?: string, subject?: string, limit?: number };
        } else {
            params = {
                resourceType: paramsOrFirst as ResourceType,
                resourceId: rest[0] as string,
                subject: rest[1] as string,
                limit: rest[2] as number            
            };
        }
        
        const resourceType = params.resourceType;
        const resourceId = params.resourceId;
        const subject = params.subject;
        const limit = params.limit;


        const apiPath = '/v1/messaging/audit';
        const apiPayload: Payload = {};
        if (typeof resourceType !== 'undefined') {
            apiPayload['resource_type'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            apiPayload['resource_id'] = resourceId;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
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
     * `?event_topic=` narrows to one topic, which is the question worth asking
     * of this list: "what does this event actually do".
     *
     * @param {string} params.eventTopic - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    bindingIndex(params?: { eventTopic?: string }): Promise<{}>;
    /**
     * `?event_topic=` narrows to one topic, which is the question worth asking
     * of this list: "what does this event actually do".
     *
     * @param {string} eventTopic - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    bindingIndex(eventTopic?: string): Promise<{}>;
    bindingIndex(
        paramsOrFirst?: { eventTopic?: string } | string    
    ): Promise<{}> {
        let params: { eventTopic?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { eventTopic?: string };
        } else {
            params = {
                eventTopic: paramsOrFirst as string            
            };
        }
        
        const eventTopic = params.eventTopic;


        const apiPath = '/v1/messaging/bindings';
        const apiPayload: Payload = {};
        if (typeof eventTopic !== 'undefined') {
            apiPayload['event_topic'] = eventTopic;
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
     * `recipient` is a template, not an address: `{{ customer.email }}` is
     * rendered against the event payload when the event arrives, which is the
     * only way one binding can serve every customer. An event that renders it
     * empty is skipped and logged rather than sent to nobody.
     * 
     * `locale` is what the OPERATOR said this route speaks, and it outranks the
     * tenant's default. Leave it null when nobody has made that decision, so
     * that the recipient's own language is still allowed to decide.
     *
     * @param {string} params.channel - 
     * @param {string} params.eventTopic - 
     * @param {string} params.recipient - 
     * @param {string} params.templateKey - 
     * @param {boolean} params.enabled - 
     * @param {number} params.fallbackOrder - 
     * @param {string} params.locale - Nullable: a binding's locale is what the OPERATOR said this
route speaks, and it outranks the tenant's own default
(LocaleResolver). "No opinion" has to be expressible, or a route
nobody made a language decision about silently makes one.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    bindingStore(params: { channel: string, eventTopic: string, recipient: string, templateKey: string, enabled?: boolean, fallbackOrder?: number, locale?: string }): Promise<{}>;
    /**
     * `recipient` is a template, not an address: `{{ customer.email }}` is
     * rendered against the event payload when the event arrives, which is the
     * only way one binding can serve every customer. An event that renders it
     * empty is skipped and logged rather than sent to nobody.
     * 
     * `locale` is what the OPERATOR said this route speaks, and it outranks the
     * tenant's default. Leave it null when nobody has made that decision, so
     * that the recipient's own language is still allowed to decide.
     *
     * @param {string} channel - 
     * @param {string} eventTopic - 
     * @param {string} recipient - 
     * @param {string} templateKey - 
     * @param {boolean} enabled - 
     * @param {number} fallbackOrder - 
     * @param {string} locale - Nullable: a binding's locale is what the OPERATOR said this
route speaks, and it outranks the tenant's own default
(LocaleResolver). "No opinion" has to be expressible, or a route
nobody made a language decision about silently makes one.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    bindingStore(channel: string, eventTopic: string, recipient: string, templateKey: string, enabled?: boolean, fallbackOrder?: number, locale?: string): Promise<{}>;
    bindingStore(
        paramsOrFirst: { channel: string, eventTopic: string, recipient: string, templateKey: string, enabled?: boolean, fallbackOrder?: number, locale?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { channel: string, eventTopic: string, recipient: string, templateKey: string, enabled?: boolean, fallbackOrder?: number, locale?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, eventTopic: string, recipient: string, templateKey: string, enabled?: boolean, fallbackOrder?: number, locale?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                eventTopic: rest[0] as string,
                recipient: rest[1] as string,
                templateKey: rest[2] as string,
                enabled: rest[3] as boolean,
                fallbackOrder: rest[4] as number,
                locale: rest[5] as string            
            };
        }
        
        const channel = params.channel;
        const eventTopic = params.eventTopic;
        const recipient = params.recipient;
        const templateKey = params.templateKey;
        const enabled = params.enabled;
        const fallbackOrder = params.fallbackOrder;
        const locale = params.locale;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }
        if (typeof eventTopic === 'undefined') {
            throw new RevenexxException('Missing required parameter: "eventTopic"');
        }
        if (typeof recipient === 'undefined') {
            throw new RevenexxException('Missing required parameter: "recipient"');
        }
        if (typeof templateKey === 'undefined') {
            throw new RevenexxException('Missing required parameter: "templateKey"');
        }

        const apiPath = '/v1/messaging/bindings';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof eventTopic !== 'undefined') {
            apiPayload['event_topic'] = eventTopic;
        }
        if (typeof fallbackOrder !== 'undefined') {
            apiPayload['fallback_order'] = fallbackOrder;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof recipient !== 'undefined') {
            apiPayload['recipient'] = recipient;
        }
        if (typeof templateKey !== 'undefined') {
            apiPayload['template_key'] = templateKey;
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
     * The event it answered goes back to doing nothing. Prefer `enabled: false`
     * when the intent is to pause rather than to forget.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    bindingDestroy(params: { id: string }): Promise<{}>;
    /**
     * The event it answered goes back to doing nothing. Prefer `enabled: false`
     * when the intent is to pause rather than to forget.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    bindingDestroy(id: string): Promise<{}>;
    bindingDestroy(
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

        const apiPath = '/v1/messaging/bindings/{id}'.replace('{id}', id);
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
     * 404 for a binding belonging to another tenant, not 403 — an id that
     * answered differently would say whether it exists.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    bindingShow(params: { id: string }): Promise<{}>;
    /**
     * 404 for a binding belonging to another tenant, not 403 — an id that
     * answered differently would say whether it exists.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    bindingShow(id: string): Promise<{}>;
    bindingShow(
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

        const apiPath = '/v1/messaging/bindings/{id}'.replace('{id}', id);
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
     * Every field is optional; only what is sent is written. `enabled: false`
     * is how a binding is taken out of service without losing what it said —
     * the alternative is deleting it and typing the payload path back in
     * correctly from memory later.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.id - 
     * @param {string} params.channel - 
     * @param {boolean} params.enabled - 
     * @param {string} params.eventTopic - 
     * @param {number} params.fallbackOrder - 
     * @param {string} params.locale - Nullable: a binding's locale is what the OPERATOR said this
route speaks, and it outranks the tenant's own default
(LocaleResolver). "No opinion" has to be expressible, or a route
nobody made a language decision about silently makes one.
     * @param {string} params.recipient - 
     * @param {string} params.templateKey - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    bindingUpdatePatch(params: { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string }): Promise<{}>;
    /**
     * Every field is optional; only what is sent is written. `enabled: false`
     * is how a binding is taken out of service without losing what it said —
     * the alternative is deleting it and typing the payload path back in
     * correctly from memory later.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} id - 
     * @param {string} channel - 
     * @param {boolean} enabled - 
     * @param {string} eventTopic - 
     * @param {number} fallbackOrder - 
     * @param {string} locale - Nullable: a binding's locale is what the OPERATOR said this
route speaks, and it outranks the tenant's own default
(LocaleResolver). "No opinion" has to be expressible, or a route
nobody made a language decision about silently makes one.
     * @param {string} recipient - 
     * @param {string} templateKey - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    bindingUpdatePatch(id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string): Promise<{}>;
    bindingUpdatePatch(
        paramsOrFirst: { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channel: rest[0] as string,
                enabled: rest[1] as boolean,
                eventTopic: rest[2] as string,
                fallbackOrder: rest[3] as number,
                locale: rest[4] as string,
                recipient: rest[5] as string,
                templateKey: rest[6] as string            
            };
        }
        
        const id = params.id;
        const channel = params.channel;
        const enabled = params.enabled;
        const eventTopic = params.eventTopic;
        const fallbackOrder = params.fallbackOrder;
        const locale = params.locale;
        const recipient = params.recipient;
        const templateKey = params.templateKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/messaging/bindings/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof eventTopic !== 'undefined') {
            apiPayload['event_topic'] = eventTopic;
        }
        if (typeof fallbackOrder !== 'undefined') {
            apiPayload['fallback_order'] = fallbackOrder;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof recipient !== 'undefined') {
            apiPayload['recipient'] = recipient;
        }
        if (typeof templateKey !== 'undefined') {
            apiPayload['template_key'] = templateKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Every field is optional; only what is sent is written. `enabled: false`
     * is how a binding is taken out of service without losing what it said —
     * the alternative is deleting it and typing the payload path back in
     * correctly from memory later.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.id - 
     * @param {string} params.channel - 
     * @param {boolean} params.enabled - 
     * @param {string} params.eventTopic - 
     * @param {number} params.fallbackOrder - 
     * @param {string} params.locale - Nullable: a binding's locale is what the OPERATOR said this
route speaks, and it outranks the tenant's own default
(LocaleResolver). "No opinion" has to be expressible, or a route
nobody made a language decision about silently makes one.
     * @param {string} params.recipient - 
     * @param {string} params.templateKey - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    bindingUpdate(params: { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string }): Promise<{}>;
    /**
     * Every field is optional; only what is sent is written. `enabled: false`
     * is how a binding is taken out of service without losing what it said —
     * the alternative is deleting it and typing the payload path back in
     * correctly from memory later.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} id - 
     * @param {string} channel - 
     * @param {boolean} enabled - 
     * @param {string} eventTopic - 
     * @param {number} fallbackOrder - 
     * @param {string} locale - Nullable: a binding's locale is what the OPERATOR said this
route speaks, and it outranks the tenant's own default
(LocaleResolver). "No opinion" has to be expressible, or a route
nobody made a language decision about silently makes one.
     * @param {string} recipient - 
     * @param {string} templateKey - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    bindingUpdate(id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string): Promise<{}>;
    bindingUpdate(
        paramsOrFirst: { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, channel?: string, enabled?: boolean, eventTopic?: string, fallbackOrder?: number, locale?: string, recipient?: string, templateKey?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                channel: rest[0] as string,
                enabled: rest[1] as boolean,
                eventTopic: rest[2] as string,
                fallbackOrder: rest[3] as number,
                locale: rest[4] as string,
                recipient: rest[5] as string,
                templateKey: rest[6] as string            
            };
        }
        
        const id = params.id;
        const channel = params.channel;
        const enabled = params.enabled;
        const eventTopic = params.eventTopic;
        const fallbackOrder = params.fallbackOrder;
        const locale = params.locale;
        const recipient = params.recipient;
        const templateKey = params.templateKey;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/messaging/bindings/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof eventTopic !== 'undefined') {
            apiPayload['event_topic'] = eventTopic;
        }
        if (typeof fallbackOrder !== 'undefined') {
            apiPayload['fallback_order'] = fallbackOrder;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof recipient !== 'undefined') {
            apiPayload['recipient'] = recipient;
        }
        if (typeof templateKey !== 'undefined') {
            apiPayload['template_key'] = templateKey;
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
     * Answers per channel with: which fields the chosen provider wants and
     * which of them are SET (never their values — secrets go in and do not come
     * back), which markets hold an override, which providers this build offers,
     * whether the deployment has the channel switched on at all, the URL to
     * paste into the provider's own console so bounces and opens come back, and
     * whether callbacks are actually arriving.
     * 
     * Admin tier on the read as well as the write: the identifiers alone —
     * which Twilio account, which sender number — are more than a read-only
     * operator has reason to see, and the webhook URL served here contains the
     * tenant's callback token.
     *
     * @param {string} params.market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @param {string} params.markets - Set to `all` to get every market's credentials in one answer: each channel gains an
`overrides` object keyed by market code, holding that market's own resolved view of the
channel — its provider, which of that provider's fields are set, its callback URL, and
whether callbacks are arriving. Only markets with credentials of their OWN appear; a market
that inherits has nothing to add.

The channel's top-level entry is the GLOBAL one whenever this is set, and `?market=` is
ignored: `all` is not a market to resolve against, and honouring both would leave the
base entry meaning something different depending on a header.

The override entries carry no `providers` catalogue, `enabled` flag or `markets` list.
Those are properties of the channel, identical in every market, and repeating
twenty-six providers' field specifications per market would be most of the response.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelCredentialIndex(params?: { market?: string, markets?: string }): Promise<{}>;
    /**
     * Answers per channel with: which fields the chosen provider wants and
     * which of them are SET (never their values — secrets go in and do not come
     * back), which markets hold an override, which providers this build offers,
     * whether the deployment has the channel switched on at all, the URL to
     * paste into the provider's own console so bounces and opens come back, and
     * whether callbacks are actually arriving.
     * 
     * Admin tier on the read as well as the write: the identifiers alone —
     * which Twilio account, which sender number — are more than a read-only
     * operator has reason to see, and the webhook URL served here contains the
     * tenant's callback token.
     *
     * @param {string} market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @param {string} markets - Set to `all` to get every market's credentials in one answer: each channel gains an
`overrides` object keyed by market code, holding that market's own resolved view of the
channel — its provider, which of that provider's fields are set, its callback URL, and
whether callbacks are arriving. Only markets with credentials of their OWN appear; a market
that inherits has nothing to add.

The channel's top-level entry is the GLOBAL one whenever this is set, and `?market=` is
ignored: `all` is not a market to resolve against, and honouring both would leave the
base entry meaning something different depending on a header.

The override entries carry no `providers` catalogue, `enabled` flag or `markets` list.
Those are properties of the channel, identical in every market, and repeating
twenty-six providers' field specifications per market would be most of the response.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelCredentialIndex(market?: string, markets?: string): Promise<{}>;
    channelCredentialIndex(
        paramsOrFirst?: { market?: string, markets?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { market?: string, markets?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { market?: string, markets?: string };
        } else {
            params = {
                market: paramsOrFirst as string,
                markets: rest[0] as string            
            };
        }
        
        const market = params.market;
        const markets = params.markets;


        const apiPath = '/v1/messaging/channel-credentials';
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
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
     * With `?market=`, only that market's override goes and the global
     * credentials stand — the market then sends over the global provider again,
     * which is what it did before anybody configured it. Without a market the
     * channel goes entirely, overrides and all: a caller asking for a channel
     * to hold no credentials means all of them.
     * 
     * 204 whether or not anything was there. The caller wants this channel to
     * hold no credentials, and it does.
     *
     * @param {string} params.channel - 
     * @param {string} params.market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelCredentialDestroy(params: { channel: string, market?: string }): Promise<{}>;
    /**
     * With `?market=`, only that market's override goes and the global
     * credentials stand — the market then sends over the global provider again,
     * which is what it did before anybody configured it. Without a market the
     * channel goes entirely, overrides and all: a caller asking for a channel
     * to hold no credentials means all of them.
     * 
     * 204 whether or not anything was there. The caller wants this channel to
     * hold no credentials, and it does.
     *
     * @param {string} channel - 
     * @param {string} market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelCredentialDestroy(channel: string, market?: string): Promise<{}>;
    channelCredentialDestroy(
        paramsOrFirst: { channel: string, market?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { channel: string, market?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, market?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                market: rest[0] as string            
            };
        }
        
        const channel = params.channel;
        const market = params.market;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }

        const apiPath = '/v1/messaging/channel-credentials/{channel}'.replace('{channel}', channel);
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
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
     * A PATCH in spirit whichever verb is used: only the fields present in the
     * body are written, and the answer says which of them actually CHANGED, so
     * a form that resent everything it had on screen does not report a change
     * that did not happen.
     * 
     * Three refusals, all 422 and all deliberate rather than ignored. A field
     * the channel's provider does not have (`unknown_credential_field`) — a
     * typo sitting in the bag looking like configuration fails later with a
     * message about a MISSING field the operator can see they filled in. A
     * field the platform issues (`managed_credential`) — ignoring it would have
     * the caller believe they set something. A channel with nothing to
     * configure (`channel_not_configurable`), which is push: its VAPID keypair
     * is generated at provisioning, and pasting a new one would orphan every
     * browser registration the tenant has collected.
     * 
     * Switching provider is `driver`, and the fields in the same request are
     * validated against the provider being switched TO — validating Postmark's
     * key against Mailgun's field list is how a switch loses everything the
     * operator just typed.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.channel - 
     * @param {string} params.market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @param {string} params.driver - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelCredentialUpdatePatch(params: { channel: string, market?: string, driver?: string }): Promise<{}>;
    /**
     * A PATCH in spirit whichever verb is used: only the fields present in the
     * body are written, and the answer says which of them actually CHANGED, so
     * a form that resent everything it had on screen does not report a change
     * that did not happen.
     * 
     * Three refusals, all 422 and all deliberate rather than ignored. A field
     * the channel's provider does not have (`unknown_credential_field`) — a
     * typo sitting in the bag looking like configuration fails later with a
     * message about a MISSING field the operator can see they filled in. A
     * field the platform issues (`managed_credential`) — ignoring it would have
     * the caller believe they set something. A channel with nothing to
     * configure (`channel_not_configurable`), which is push: its VAPID keypair
     * is generated at provisioning, and pasting a new one would orphan every
     * browser registration the tenant has collected.
     * 
     * Switching provider is `driver`, and the fields in the same request are
     * validated against the provider being switched TO — validating Postmark's
     * key against Mailgun's field list is how a switch loses everything the
     * operator just typed.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} channel - 
     * @param {string} market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @param {string} driver - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelCredentialUpdatePatch(channel: string, market?: string, driver?: string): Promise<{}>;
    channelCredentialUpdatePatch(
        paramsOrFirst: { channel: string, market?: string, driver?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { channel: string, market?: string, driver?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, market?: string, driver?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                market: rest[0] as string,
                driver: rest[1] as string            
            };
        }
        
        const channel = params.channel;
        const market = params.market;
        const driver = params.driver;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }

        const apiPath = '/v1/messaging/channel-credentials/{channel}'.replace('{channel}', channel);
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof driver !== 'undefined') {
            apiPayload['driver'] = driver;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * A PATCH in spirit whichever verb is used: only the fields present in the
     * body are written, and the answer says which of them actually CHANGED, so
     * a form that resent everything it had on screen does not report a change
     * that did not happen.
     * 
     * Three refusals, all 422 and all deliberate rather than ignored. A field
     * the channel's provider does not have (`unknown_credential_field`) — a
     * typo sitting in the bag looking like configuration fails later with a
     * message about a MISSING field the operator can see they filled in. A
     * field the platform issues (`managed_credential`) — ignoring it would have
     * the caller believe they set something. A channel with nothing to
     * configure (`channel_not_configurable`), which is push: its VAPID keypair
     * is generated at provisioning, and pasting a new one would orphan every
     * browser registration the tenant has collected.
     * 
     * Switching provider is `driver`, and the fields in the same request are
     * validated against the provider being switched TO — validating Postmark's
     * key against Mailgun's field list is how a switch loses everything the
     * operator just typed.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.channel - 
     * @param {string} params.market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @param {string} params.driver - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelCredentialUpdate(params: { channel: string, market?: string, driver?: string }): Promise<{}>;
    /**
     * A PATCH in spirit whichever verb is used: only the fields present in the
     * body are written, and the answer says which of them actually CHANGED, so
     * a form that resent everything it had on screen does not report a change
     * that did not happen.
     * 
     * Three refusals, all 422 and all deliberate rather than ignored. A field
     * the channel's provider does not have (`unknown_credential_field`) — a
     * typo sitting in the bag looking like configuration fails later with a
     * message about a MISSING field the operator can see they filled in. A
     * field the platform issues (`managed_credential`) — ignoring it would have
     * the caller believe they set something. A channel with nothing to
     * configure (`channel_not_configurable`), which is push: its VAPID keypair
     * is generated at provisioning, and pasting a new one would orphan every
     * browser registration the tenant has collected.
     * 
     * Switching provider is `driver`, and the fields in the same request are
     * validated against the provider being switched TO — validating Postmark's
     * key against Mailgun's field list is how a switch loses everything the
     * operator just typed.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} channel - 
     * @param {string} market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @param {string} driver - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelCredentialUpdate(channel: string, market?: string, driver?: string): Promise<{}>;
    channelCredentialUpdate(
        paramsOrFirst: { channel: string, market?: string, driver?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { channel: string, market?: string, driver?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, market?: string, driver?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                market: rest[0] as string,
                driver: rest[1] as string            
            };
        }
        
        const channel = params.channel;
        const market = params.market;
        const driver = params.driver;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }

        const apiPath = '/v1/messaging/channel-credentials/{channel}'.replace('{channel}', channel);
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof driver !== 'undefined') {
            apiPayload['driver'] = driver;
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
     * The one thing that turns this screen from a form into a tool. Credentials
     * that only fail at send time cost a customer their first order
     * confirmation, and by then nobody connects the failure to the afternoon
     * somebody pasted a key with a trailing space.
     * 
     * **Always 200.** The answer is `{ok, message}` in the body, including when
     * the credentials are wrong: the REQUEST was fine, the credentials are not,
     * and a 4xx here would have the cockpit's own error handling swallow the
     * one sentence worth reading. A channel that asks for no credentials at all
     * (push, in-app) answers `ok: true` — "nothing to verify" is a finished
     * check, not a failed one, and reporting it as an error painted a channel
     * that has worked since provisioning in the same red as a wrong token.
     *
     * @param {string} params.channel - 
     * @param {string} params.market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelCredentialVerify(params: { channel: string, market?: string }): Promise<{}>;
    /**
     * The one thing that turns this screen from a form into a tool. Credentials
     * that only fail at send time cost a customer their first order
     * confirmation, and by then nobody connects the failure to the afternoon
     * somebody pasted a key with a trailing space.
     * 
     * **Always 200.** The answer is `{ok, message}` in the body, including when
     * the credentials are wrong: the REQUEST was fine, the credentials are not,
     * and a 4xx here would have the cockpit's own error handling swallow the
     * one sentence worth reading. A channel that asks for no credentials at all
     * (push, in-app) answers `ok: true` — "nothing to verify" is a finished
     * check, not a failed one, and reporting it as an error painted a channel
     * that has worked since provisioning in the same red as a wrong token.
     *
     * @param {string} channel - 
     * @param {string} market - Which market's credentials this call is about. Absent means the GLOBAL bag — what every
send used before markets reached this path, and what a market with no override of its own
still uses.

Lowercase, opening with a letter, 63 characters at most (Baseline's market slug rule,
mirrored exactly). A code that does not match is refused with 422 rather than read as
"no market": on the write paths, silently falling back to global would have an operator
point every market's traffic at one market's provider while looking at a screen that said
they had not.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    channelCredentialVerify(channel: string, market?: string): Promise<{}>;
    channelCredentialVerify(
        paramsOrFirst: { channel: string, market?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { channel: string, market?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, market?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                market: rest[0] as string            
            };
        }
        
        const channel = params.channel;
        const market = params.market;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }

        const apiPath = '/v1/messaging/channel-credentials/{channel}/verify'.replace('{channel}', channel);
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
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
     * Each entry says whether the channel is switched on and which provider
     * carries it by default. A channel that is off will refuse a send, so a UI
     * that offers a channel picker should build it from this rather than from a
     * list of its own — a channel added to the service then appears without a
     * release of the client.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    channelIndex(): Promise<{}> {

        const apiPath = '/v1/messaging/channels';
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
     * A tenant that was never provisioned has no row and still gets an answer:
     * an empty shape rather than a 404, so the Cockpit's panels open on
     * editable blanks instead of an error.
     * 
     * `meta.push_public_key` is the VAPID public key, and only the public one.
     * A storefront cannot call `PushManager.subscribe()` without it, so it has
     * to leave the service; the private half and every provider secret stay
     * hidden on the model, where they are protected on every route rather than
     * on this one.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    configShow(): Promise<{}> {

        const apiPath = '/v1/messaging/config';
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
     * Reaches every message this tenant sends, including templates saved months
     * ago — content placeholders resolve at send time, not at save time — which
     * is why writing is admin tier while reading is not.
     * 
     * Two refusals worth knowing about. `defaults.brand` is 422, not ignored:
     * the letterhead moved to /v1/layouts when a tenant gained more than one of
     * them, and a letterhead edit that appears to save and changes nothing is
     * the worst of the three possible behaviours. A half-written `quiet_hours`
     * is 422 as well — a tenant that typed a start and forgot the end has an
     * opinion about when not to message people, and silently sending through
     * the night is the one answer that is definitely wrong.
     * 
     * Provider credentials cannot be written here. That path is
     * /v1/channel-credentials, so the one route that handles secrets stays the
     * one that was built for it.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.defaultLocale - The house language — step 4 of the send path's resolution order,
reached only when neither the caller, the event payload nor the
binding said anything. A column of its own and not a key in
`defaults` below, because everything in that bag is merged into
the render model: a `locale` key there would start filling
`{{ locale }}` inside template bodies, which is a routing
decision leaking into content.
     * @param {string[]} params.defaults - The saved modules live in here. The shape is the Cockpit's
contract and is not pinned down further: adding a block type
would otherwise be a service deploy. The one key that IS pinned
down is `brand`, because it moved out — and it is refused with a
closure rather than a `defaults.brand` rule, since a nested rule
makes the validator drop the parent and quietly discard every
other key in the bag along with it.
     * @param {string} params.product - 
     * @param {string[]} params.quietHours - 
     * @param {string} params.supportEmail - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    configUpdatePatch(params?: { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string }): Promise<{}>;
    /**
     * Reaches every message this tenant sends, including templates saved months
     * ago — content placeholders resolve at send time, not at save time — which
     * is why writing is admin tier while reading is not.
     * 
     * Two refusals worth knowing about. `defaults.brand` is 422, not ignored:
     * the letterhead moved to /v1/layouts when a tenant gained more than one of
     * them, and a letterhead edit that appears to save and changes nothing is
     * the worst of the three possible behaviours. A half-written `quiet_hours`
     * is 422 as well — a tenant that typed a start and forgot the end has an
     * opinion about when not to message people, and silently sending through
     * the night is the one answer that is definitely wrong.
     * 
     * Provider credentials cannot be written here. That path is
     * /v1/channel-credentials, so the one route that handles secrets stays the
     * one that was built for it.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} defaultLocale - The house language — step 4 of the send path's resolution order,
reached only when neither the caller, the event payload nor the
binding said anything. A column of its own and not a key in
`defaults` below, because everything in that bag is merged into
the render model: a `locale` key there would start filling
`{{ locale }}` inside template bodies, which is a routing
decision leaking into content.
     * @param {string[]} defaults - The saved modules live in here. The shape is the Cockpit's
contract and is not pinned down further: adding a block type
would otherwise be a service deploy. The one key that IS pinned
down is `brand`, because it moved out — and it is refused with a
closure rather than a `defaults.brand` rule, since a nested rule
makes the validator drop the parent and quietly discard every
other key in the bag along with it.
     * @param {string} product - 
     * @param {string[]} quietHours - 
     * @param {string} supportEmail - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    configUpdatePatch(defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string): Promise<{}>;
    configUpdatePatch(
        paramsOrFirst?: { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string } | string,
        ...rest: [(string[])?, (string)?, (string[])?, (string)?]    
    ): Promise<{}> {
        let params: { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string };
        } else {
            params = {
                defaultLocale: paramsOrFirst as string,
                defaults: rest[0] as string[],
                product: rest[1] as string,
                quietHours: rest[2] as string[],
                supportEmail: rest[3] as string            
            };
        }
        
        const defaultLocale = params.defaultLocale;
        const defaults = params.defaults;
        const product = params.product;
        const quietHours = params.quietHours;
        const supportEmail = params.supportEmail;


        const apiPath = '/v1/messaging/config';
        const apiPayload: Payload = {};
        if (typeof defaultLocale !== 'undefined') {
            apiPayload['default_locale'] = defaultLocale;
        }
        if (typeof defaults !== 'undefined') {
            apiPayload['defaults'] = defaults;
        }
        if (typeof product !== 'undefined') {
            apiPayload['product'] = product;
        }
        if (typeof quietHours !== 'undefined') {
            apiPayload['quiet_hours'] = quietHours;
        }
        if (typeof supportEmail !== 'undefined') {
            apiPayload['support_email'] = supportEmail;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Reaches every message this tenant sends, including templates saved months
     * ago — content placeholders resolve at send time, not at save time — which
     * is why writing is admin tier while reading is not.
     * 
     * Two refusals worth knowing about. `defaults.brand` is 422, not ignored:
     * the letterhead moved to /v1/layouts when a tenant gained more than one of
     * them, and a letterhead edit that appears to save and changes nothing is
     * the worst of the three possible behaviours. A half-written `quiet_hours`
     * is 422 as well — a tenant that typed a start and forgot the end has an
     * opinion about when not to message people, and silently sending through
     * the night is the one answer that is definitely wrong.
     * 
     * Provider credentials cannot be written here. That path is
     * /v1/channel-credentials, so the one route that handles secrets stays the
     * one that was built for it.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.defaultLocale - The house language — step 4 of the send path's resolution order,
reached only when neither the caller, the event payload nor the
binding said anything. A column of its own and not a key in
`defaults` below, because everything in that bag is merged into
the render model: a `locale` key there would start filling
`{{ locale }}` inside template bodies, which is a routing
decision leaking into content.
     * @param {string[]} params.defaults - The saved modules live in here. The shape is the Cockpit's
contract and is not pinned down further: adding a block type
would otherwise be a service deploy. The one key that IS pinned
down is `brand`, because it moved out — and it is refused with a
closure rather than a `defaults.brand` rule, since a nested rule
makes the validator drop the parent and quietly discard every
other key in the bag along with it.
     * @param {string} params.product - 
     * @param {string[]} params.quietHours - 
     * @param {string} params.supportEmail - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    configUpdate(params?: { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string }): Promise<{}>;
    /**
     * Reaches every message this tenant sends, including templates saved months
     * ago — content placeholders resolve at send time, not at save time — which
     * is why writing is admin tier while reading is not.
     * 
     * Two refusals worth knowing about. `defaults.brand` is 422, not ignored:
     * the letterhead moved to /v1/layouts when a tenant gained more than one of
     * them, and a letterhead edit that appears to save and changes nothing is
     * the worst of the three possible behaviours. A half-written `quiet_hours`
     * is 422 as well — a tenant that typed a start and forgot the end has an
     * opinion about when not to message people, and silently sending through
     * the night is the one answer that is definitely wrong.
     * 
     * Provider credentials cannot be written here. That path is
     * /v1/channel-credentials, so the one route that handles secrets stays the
     * one that was built for it.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} defaultLocale - The house language — step 4 of the send path's resolution order,
reached only when neither the caller, the event payload nor the
binding said anything. A column of its own and not a key in
`defaults` below, because everything in that bag is merged into
the render model: a `locale` key there would start filling
`{{ locale }}` inside template bodies, which is a routing
decision leaking into content.
     * @param {string[]} defaults - The saved modules live in here. The shape is the Cockpit's
contract and is not pinned down further: adding a block type
would otherwise be a service deploy. The one key that IS pinned
down is `brand`, because it moved out — and it is refused with a
closure rather than a `defaults.brand` rule, since a nested rule
makes the validator drop the parent and quietly discard every
other key in the bag along with it.
     * @param {string} product - 
     * @param {string[]} quietHours - 
     * @param {string} supportEmail - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    configUpdate(defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string): Promise<{}>;
    configUpdate(
        paramsOrFirst?: { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string } | string,
        ...rest: [(string[])?, (string)?, (string[])?, (string)?]    
    ): Promise<{}> {
        let params: { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { defaultLocale?: string, defaults?: string[], product?: string, quietHours?: string[], supportEmail?: string };
        } else {
            params = {
                defaultLocale: paramsOrFirst as string,
                defaults: rest[0] as string[],
                product: rest[1] as string,
                quietHours: rest[2] as string[],
                supportEmail: rest[3] as string            
            };
        }
        
        const defaultLocale = params.defaultLocale;
        const defaults = params.defaults;
        const product = params.product;
        const quietHours = params.quietHours;
        const supportEmail = params.supportEmail;


        const apiPath = '/v1/messaging/config';
        const apiPayload: Payload = {};
        if (typeof defaultLocale !== 'undefined') {
            apiPayload['default_locale'] = defaultLocale;
        }
        if (typeof defaults !== 'undefined') {
            apiPayload['defaults'] = defaults;
        }
        if (typeof product !== 'undefined') {
            apiPayload['product'] = product;
        }
        if (typeof quietHours !== 'undefined') {
            apiPayload['quiet_hours'] = quietHours;
        }
        if (typeof supportEmail !== 'undefined') {
            apiPayload['support_email'] = supportEmail;
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
     * The order is the list's purpose: it is a picker, and the entry most
     * templates are actually on belongs at the top of it.
     * 
     * Market-scoped as a browsing filter — see the parameters. `GET /layouts/{id}`
     * deliberately is not: somebody holding an id may read it.
     *
     * @param {string} params.markets - Set to `all` for the unscoped read: every row whatever its markets, ignoring the `X-Revenexx-Market` header. The deliberate admin case, spelled in the query string so it is asked for rather than fallen into. No other value has any effect.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    layoutIndex(params?: { markets?: string }): Promise<{}>;
    /**
     * The order is the list's purpose: it is a picker, and the entry most
     * templates are actually on belongs at the top of it.
     * 
     * Market-scoped as a browsing filter — see the parameters. `GET /layouts/{id}`
     * deliberately is not: somebody holding an id may read it.
     *
     * @param {string} markets - Set to `all` for the unscoped read: every row whatever its markets, ignoring the `X-Revenexx-Market` header. The deliberate admin case, spelled in the query string so it is asked for rather than fallen into. No other value has any effect.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    layoutIndex(markets?: string): Promise<{}>;
    layoutIndex(
        paramsOrFirst?: { markets?: string } | string    
    ): Promise<{}> {
        let params: { markets?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { markets?: string };
        } else {
            params = {
                markets: paramsOrFirst as string            
            };
        }
        
        const markets = params.markets;


        const apiPath = '/v1/messaging/layouts';
        const apiPayload: Payload = {};
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
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
     * A tenant's FIRST layout becomes the default whatever the request says: a
     * tenant with no default cannot compile a template that does not name one.
     * 
     * The default may hold neither a validity window nor `enabled: false`, and
     * asking for both in one request is refused with 422
     * `layout_default_always_in_force`. There is no fallback behind the default
     * — every template that names no layout is framed by it — so a window set
     * today would take a tenant's whole letterhead away on a morning months
     * from now, with nobody left who remembers typing the date.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    layoutStore(): Promise<{}> {

        const apiPath = '/v1/messaging/layouts';
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
     * Answers 200 with a body rather than the 204 the other resources use: the
     * count of reassigned templates is the part an operator needs, and a
     * deletion that silently moved eleven templates onto another letterhead is
     * one they would only discover from the next mail that went out.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    layoutDestroy(params: { id: string }): Promise<{}>;
    /**
     * Answers 200 with a body rather than the 204 the other resources use: the
     * count of reassigned templates is the part an operator needs, and a
     * deletion that silently moved eleven templates onto another letterhead is
     * one they would only discover from the next mail that went out.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    layoutDestroy(id: string): Promise<{}>;
    layoutDestroy(
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

        const apiPath = '/v1/messaging/layouts/{id}'.replace('{id}', id);
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
     * Not market-filtered, deliberately: market scoping is a browsing concern,
     * and somebody holding an id may read the row. A template pinned to a
     * layout keeps mailing on it whatever market the reader is looking at.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    layoutShow(params: { id: string }): Promise<{}>;
    /**
     * Not market-filtered, deliberately: market scoping is a browsing concern,
     * and somebody holding an id may read the row. A template pinned to a
     * layout keeps mailing on it whatever market the reader is looking at.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    layoutShow(id: string): Promise<{}>;
    layoutShow(
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

        const apiPath = '/v1/messaging/layouts/{id}'.replace('{id}', id);
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
     * The change reaches every template on this layout, including ones saved
     * months ago and never opened since — which is exactly the change nobody
     * remembers making when the mails start looking wrong. It is audited for
     * that reason, and only when something actually changed: an audit line on
     * every save teaches its readers to ignore the log.
     * 
     * Two 422s. Clearing `is_default` on the current default is
     * `layout_default_required` — promoting another layout is the operation
     * that exists for this, and it clears this one as a side effect, which is
     * the only way the count stays at exactly one. Giving the default a
     * validity window or switching it off is `layout_default_always_in_force`,
     * and the check is made of the OUTCOME, so promoting a layout and dating it
     * in the same request is caught.
     * 
     * The structural half of a layout — colours, width, font — is baked into
     * each template's compiled body, so templates already on it keep the old
     * one until they are recompiled.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    layoutUpdate(params: { id: string }): Promise<{}>;
    /**
     * The change reaches every template on this layout, including ones saved
     * months ago and never opened since — which is exactly the change nobody
     * remembers making when the mails start looking wrong. It is audited for
     * that reason, and only when something actually changed: an audit line on
     * every save teaches its readers to ignore the log.
     * 
     * Two 422s. Clearing `is_default` on the current default is
     * `layout_default_required` — promoting another layout is the operation
     * that exists for this, and it clears this one as a side effect, which is
     * the only way the count stays at exactly one. Giving the default a
     * validity window or switching it off is `layout_default_always_in_force`,
     * and the check is made of the OUTCOME, so promoting a layout and dating it
     * in the same request is caught.
     * 
     * The structural half of a layout — colours, width, font — is baked into
     * each template's compiled body, so templates already on it keep the old
     * one until they are recompiled.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    layoutUpdate(id: string): Promise<{}>;
    layoutUpdate(
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

        const apiPath = '/v1/messaging/layouts/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * What the Cockpit's "start from a template" gallery is built from. These
     * are not the tenant's rows and cannot be edited here: provisioning clones
     * them into `/v1/templates`, and it is the clone that a tenant owns.
     *
     * @param {string} params.channel - 
     * @param {string} params.locale - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    libraryIndex(params?: { channel?: string, locale?: string }): Promise<{}>;
    /**
     * What the Cockpit's "start from a template" gallery is built from. These
     * are not the tenant's rows and cannot be edited here: provisioning clones
     * them into `/v1/templates`, and it is the clone that a tenant owns.
     *
     * @param {string} channel - 
     * @param {string} locale - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    libraryIndex(channel?: string, locale?: string): Promise<{}>;
    libraryIndex(
        paramsOrFirst?: { channel?: string, locale?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { channel?: string, locale?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel?: string, locale?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                locale: rest[0] as string            
            };
        }
        
        const channel = params.channel;
        const locale = params.locale;


        const apiPath = '/v1/messaging/library';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
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
     * `?channel=` and `?status=` narrow it; `?limit=` is clamped to 200 and
     * defaults to 50. `?channel=inapp` is the tenant's in-app inbox — the
     * Message row IS the inbox item, so there is no second store for it.
     * 
     * Rows are subject to the deployment's retention window and to erasure
     * requests, so this is not an archive.
     *
     * @param {string} params.channel - 
     * @param {string} params.status - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    messageIndex(params?: { channel?: string, status?: string }): Promise<{}>;
    /**
     * `?channel=` and `?status=` narrow it; `?limit=` is clamped to 200 and
     * defaults to 50. `?channel=inapp` is the tenant's in-app inbox — the
     * Message row IS the inbox item, so there is no second store for it.
     * 
     * Rows are subject to the deployment's retention window and to erasure
     * requests, so this is not an archive.
     *
     * @param {string} channel - 
     * @param {string} status - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messageIndex(channel?: string, status?: string): Promise<{}>;
    messageIndex(
        paramsOrFirst?: { channel?: string, status?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { channel?: string, status?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel?: string, status?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                status: rest[0] as string            
            };
        }
        
        const channel = params.channel;
        const status = params.status;


        const apiPath = '/v1/messaging/messages';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     * Carries the render model it was sent with, so "why did this mail say
     *      * that" is answerable after the fact. That is also why the row is personal
     * data and why it can be erased — see POST /v1/privacy/erasures.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    messageShow(params: { id: string }): Promise<{}>;
    /**
     * Carries the render model it was sent with, so "why did this mail say
     *      * that" is answerable after the fact. That is also why the row is personal
     * data and why it can be erased — see POST /v1/privacy/erasures.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messageShow(id: string): Promise<{}>;
    messageShow(
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

        const apiPath = '/v1/messaging/messages/{id}'.replace('{id}', id);
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
     * Answers with the resolved subject, HTML and text exactly as a real send
     * would produce them, so an editor can show a faithful preview without a
     * message row, a provider call or a suppression check.
     * 
     * Takes no `market`, deliberately: rendering picks no provider, so there is
     * nothing here for a market to change. Nor `send_at`, `draft` or
     * `attachments` — all of them are properties of a dispatch, not of a render.
     *
     * @param {string} params.channel - 
     * @param {string} params.template - 
     * @param {object} params.data - The render model: a free map of variable name to value, resolved against the template's
placeholders. Values may be strings, numbers, booleans, or nested objects and arrays —
`{{ order.number }}` reads a nested one.

Not the only source. A tenant's `defaults`, its layout, and the template's own
`variable_defaults` are merged underneath, so a placeholder an event did not carry can
still resolve. Anything named here wins over all of them.
     * @param {string} params.locale - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sendPreview(params: { channel: string, template: string, data?: object, locale?: string }): Promise<{}>;
    /**
     * Answers with the resolved subject, HTML and text exactly as a real send
     * would produce them, so an editor can show a faithful preview without a
     * message row, a provider call or a suppression check.
     * 
     * Takes no `market`, deliberately: rendering picks no provider, so there is
     * nothing here for a market to change. Nor `send_at`, `draft` or
     * `attachments` — all of them are properties of a dispatch, not of a render.
     *
     * @param {string} channel - 
     * @param {string} template - 
     * @param {object} data - The render model: a free map of variable name to value, resolved against the template's
placeholders. Values may be strings, numbers, booleans, or nested objects and arrays —
`{{ order.number }}` reads a nested one.

Not the only source. A tenant's `defaults`, its layout, and the template's own
`variable_defaults` are merged underneath, so a placeholder an event did not carry can
still resolve. Anything named here wins over all of them.
     * @param {string} locale - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sendPreview(channel: string, template: string, data?: object, locale?: string): Promise<{}>;
    sendPreview(
        paramsOrFirst: { channel: string, template: string, data?: object, locale?: string } | string,
        ...rest: [(string)?, (object)?, (string)?]    
    ): Promise<{}> {
        let params: { channel: string, template: string, data?: object, locale?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, template: string, data?: object, locale?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                template: rest[0] as string,
                data: rest[1] as object,
                locale: rest[2] as string            
            };
        }
        
        const channel = params.channel;
        const template = params.template;
        const data = params.data;
        const locale = params.locale;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }
        if (typeof template === 'undefined') {
            throw new RevenexxException('Missing required parameter: "template"');
        }

        const apiPath = '/v1/messaging/preview';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof template !== 'undefined') {
            apiPayload['template'] = template;
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
     * Per (channel, address), because an address is channel-shaped and the rows
     * it has to line up with are keyed that way. Matching is done on the
     * normalised form on both sides, so a request for `ada@acme.test` finds a
     * log written for `Ada@Acme.test` — an erasure that misses on
     * capitalisation is an erasure that did not happen and reports success.
     * 
     * Message rows and unsubscribe tokens are DELETED. Suppressions are KEPT
     * with the clear-text address nulled: matching runs on a keyed hash, so the
     * row can still block and can no longer identify. Deleting it instead is
     * the obvious reading of "erase everything about them", and it is the
     * reading that mails a dead address again next week — or mails somebody who
     * complained, which is how a sending domain gets blocked.
     * 
     * Answers with the counts, `suppressions_kept` among them, so the design is
     * stated in the response rather than only in this paragraph.
     *
     * @param {string} params.address - 
     * @param {string} params.channel - Per (channel, address), not per address: an address is
channel-shaped, and the suppression and token rows it has to line
up with are keyed that way.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    erasureStore(params: { address: string, channel: string }): Promise<{}>;
    /**
     * Per (channel, address), because an address is channel-shaped and the rows
     * it has to line up with are keyed that way. Matching is done on the
     * normalised form on both sides, so a request for `ada@acme.test` finds a
     * log written for `Ada@Acme.test` — an erasure that misses on
     * capitalisation is an erasure that did not happen and reports success.
     * 
     * Message rows and unsubscribe tokens are DELETED. Suppressions are KEPT
     * with the clear-text address nulled: matching runs on a keyed hash, so the
     * row can still block and can no longer identify. Deleting it instead is
     * the obvious reading of "erase everything about them", and it is the
     * reading that mails a dead address again next week — or mails somebody who
     * complained, which is how a sending domain gets blocked.
     * 
     * Answers with the counts, `suppressions_kept` among them, so the design is
     * stated in the response rather than only in this paragraph.
     *
     * @param {string} address - 
     * @param {string} channel - Per (channel, address), not per address: an address is
channel-shaped, and the suppression and token rows it has to line
up with are keyed that way.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    erasureStore(address: string, channel: string): Promise<{}>;
    erasureStore(
        paramsOrFirst: { address: string, channel: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { address: string, channel: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { address: string, channel: string };
        } else {
            params = {
                address: paramsOrFirst as string,
                channel: rest[0] as string            
            };
        }
        
        const address = params.address;
        const channel = params.channel;

        if (typeof address === 'undefined') {
            throw new RevenexxException('Missing required parameter: "address"');
        }
        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }

        const apiPath = '/v1/messaging/privacy/erasures';
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
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
     * By endpoint and not by id, because the browser knows its endpoint and has
     * never seen our id — this is called from a service worker reacting to
     * `pushsubscriptionchange`, or from a "turn off notifications" button.
     *
     * @param {string} params.endpoint - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pushSubscriptionDestroy(params: { endpoint: string }): Promise<{}>;
    /**
     * By endpoint and not by id, because the browser knows its endpoint and has
     * never seen our id — this is called from a service worker reacting to
     * `pushsubscriptionchange`, or from a "turn off notifications" button.
     *
     * @param {string} endpoint - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pushSubscriptionDestroy(endpoint: string): Promise<{}>;
    pushSubscriptionDestroy(
        paramsOrFirst: { endpoint: string } | string    
    ): Promise<{}> {
        let params: { endpoint: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { endpoint: string };
        } else {
            params = {
                endpoint: paramsOrFirst as string            
            };
        }
        
        const endpoint = params.endpoint;

        if (typeof endpoint === 'undefined') {
            throw new RevenexxException('Missing required parameter: "endpoint"');
        }

        const apiPath = '/v1/messaging/push/subscriptions';
        const apiPayload: Payload = {};
        if (typeof endpoint !== 'undefined') {
            apiPayload['endpoint'] = endpoint;
        }
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
     * `subscriber_id` is required: this is not a list of everybody, and there
     * is no route that is. The caller is a storefront acting for one visitor
     * and has no business enumerating the rest.
     * 
     * The client key material is never returned — see the `$hidden` list on the
     * model. A registration that can be read back is a registration somebody
     * else can push with.
     *
     * @param {string} params.subscriberId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pushSubscriptionIndex(params: { subscriberId: string }): Promise<{}>;
    /**
     * `subscriber_id` is required: this is not a list of everybody, and there
     * is no route that is. The caller is a storefront acting for one visitor
     * and has no business enumerating the rest.
     * 
     * The client key material is never returned — see the `$hidden` list on the
     * model. A registration that can be read back is a registration somebody
     * else can push with.
     *
     * @param {string} subscriberId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pushSubscriptionIndex(subscriberId: string): Promise<{}>;
    pushSubscriptionIndex(
        paramsOrFirst: { subscriberId: string } | string    
    ): Promise<{}> {
        let params: { subscriberId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { subscriberId: string };
        } else {
            params = {
                subscriberId: paramsOrFirst as string            
            };
        }
        
        const subscriberId = params.subscriberId;

        if (typeof subscriberId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/v1/messaging/push/subscriptions';
        const apiPayload: Payload = {};
        if (typeof subscriberId !== 'undefined') {
            apiPayload['subscriber_id'] = subscriberId;
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
     * Send what `PushManager.subscribe()` handed back — the endpoint and the
     * two keys — plus the id you know that person by. The VAPID public key the
     * browser needs to produce it comes from `GET /v1/config`
     * (`meta.push_public_key`).
     * 
     * **Idempotent by endpoint**, and the two statuses say which happened: 201
     * for a browser seen for the first time, 200 for one already registered. A
     * browser calls `subscribe()` on every page load and hands back the same
     * endpoint each time; treating that as a new device would give one laptop a
     * thousand rows and push to it a thousand times.
     *
     * @param {string} params.endpoint - 
     * @param {object} params.keys - 
     * @param {string} params.subscriberId - 
     * @param {string} params.userAgent - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pushSubscriptionStore(params: { endpoint: string, keys: object, subscriberId: string, userAgent?: string }): Promise<{}>;
    /**
     * Send what `PushManager.subscribe()` handed back — the endpoint and the
     * two keys — plus the id you know that person by. The VAPID public key the
     * browser needs to produce it comes from `GET /v1/config`
     * (`meta.push_public_key`).
     * 
     * **Idempotent by endpoint**, and the two statuses say which happened: 201
     * for a browser seen for the first time, 200 for one already registered. A
     * browser calls `subscribe()` on every page load and hands back the same
     * endpoint each time; treating that as a new device would give one laptop a
     * thousand rows and push to it a thousand times.
     *
     * @param {string} endpoint - 
     * @param {object} keys - 
     * @param {string} subscriberId - 
     * @param {string} userAgent - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pushSubscriptionStore(endpoint: string, keys: object, subscriberId: string, userAgent?: string): Promise<{}>;
    pushSubscriptionStore(
        paramsOrFirst: { endpoint: string, keys: object, subscriberId: string, userAgent?: string } | string,
        ...rest: [(object)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { endpoint: string, keys: object, subscriberId: string, userAgent?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { endpoint: string, keys: object, subscriberId: string, userAgent?: string };
        } else {
            params = {
                endpoint: paramsOrFirst as string,
                keys: rest[0] as object,
                subscriberId: rest[1] as string,
                userAgent: rest[2] as string            
            };
        }
        
        const endpoint = params.endpoint;
        const keys = params.keys;
        const subscriberId = params.subscriberId;
        const userAgent = params.userAgent;

        if (typeof endpoint === 'undefined') {
            throw new RevenexxException('Missing required parameter: "endpoint"');
        }
        if (typeof keys === 'undefined') {
            throw new RevenexxException('Missing required parameter: "keys"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/v1/messaging/push/subscriptions';
        const apiPayload: Payload = {};
        if (typeof endpoint !== 'undefined') {
            apiPayload['endpoint'] = endpoint;
        }
        if (typeof keys !== 'undefined') {
            apiPayload['keys'] = keys;
        }
        if (typeof subscriberId !== 'undefined') {
            apiPayload['subscriber_id'] = subscriberId;
        }
        if (typeof userAgent !== 'undefined') {
            apiPayload['user_agent'] = userAgent;
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
     * Renders a tenant template and dispatches it — now, at `send_at`, or at
     * the end of the tenant's quiet hours.
     * 
     * The first line is deliberately a title, not a sentence about the
     * mechanism: Scramble takes it as the operation's `summary`, and a summary
     * is what an API explorer prints in its route list. The paragraph that used
     * to be here ran to 119 characters across two lines, which the gateway's
     * fragment tests reject for exactly that reason.
     * 
     * Retry-safe when the caller sends an `Idempotency-Key` header. The two
     * answers are deliberately different:
     * 
     *   201 — a message was created by THIS call
     *   200 — this key was already used; here is the message it produced
     * 
     * A caller has to be able to tell those apart. "Your mail went out" and
     * "your mail had already gone out" are the same outcome and different
     * facts, and a client reconciling its own records needs the second one.
     * Same key with a different body is a 422 — see IdempotencyConflict.
     * 
     * A recipient on the tenant's suppression list is not sent to, and that is
     * reported as a refusal rather than as a silent success.
     *
     * @param {string} params.channel - 
     * @param {string} params.template - 
     * @param {string} params.to - 
     * @param {object[]} params.attachments - Files travelling with the message. Base64 content, never a URL:
fetching an address that arrives in a request body would make
this service a request-forwarder inside the platform network —
see App\Support\Attachment.
     * @param {object} params.data - The render model: a free map of variable name to value, resolved against the template's
placeholders. Values may be strings, numbers, booleans, or nested objects and arrays —
`{{ order.number }}` reads a nested one.

Not the only source. A tenant's `defaults`, its layout, and the template's own
`variable_defaults` are merged underneath, so a placeholder an event did not carry can
still resolve. Anything named here wins over all of them.
     * @param {boolean} params.draft - A TEST SEND. Renders the draft instead of the published snapshot,
which is the only way an author can check a correction in a real
mail client before it goes live to everybody. Deliberately a flag on this route and not a route of its own:
everything else about it — suppression, quiet hours, the
language chain, idempotency — has to behave exactly as a real
send, and a second endpoint is a second set of those rules that
drifts. The one difference is which fassung is rendered.
     * @param {string} params.locale - The language the CALLER states — step 1 of the resolution order,
ahead of anything in the payload. Absent is normal and is not
"English": it means the recipient's own language decides.
     * @param {string} params.market - Which market this send belongs to. Absent means the GLOBAL
market, which is what every send was before markets reached this
path — so a caller that never heard of them keeps working and
gets the credentials it always had. The caller states it; nothing here derives it. A country code on
a phone number is a fact and a domain on an address is a guess,
and a guess that decides which carrier carries a message would
look exactly like a decision somebody made.

Not on `preview`: rendering picks no provider, so there is
nothing there for a market to change.
     * @param {string} params.sendAt - Send later. A time in the past is accepted and means now — a
client retrying a request it built ten minutes ago is asking for
the same send, and refusing it turns a late retry into a lost
message.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    sendSend(params: { channel: string, template: string, to: string, attachments?: object[], data?: object, draft?: boolean, locale?: string, market?: string, sendAt?: string }): Promise<{}>;
    /**
     * Renders a tenant template and dispatches it — now, at `send_at`, or at
     * the end of the tenant's quiet hours.
     * 
     * The first line is deliberately a title, not a sentence about the
     * mechanism: Scramble takes it as the operation's `summary`, and a summary
     * is what an API explorer prints in its route list. The paragraph that used
     * to be here ran to 119 characters across two lines, which the gateway's
     * fragment tests reject for exactly that reason.
     * 
     * Retry-safe when the caller sends an `Idempotency-Key` header. The two
     * answers are deliberately different:
     * 
     *   201 — a message was created by THIS call
     *   200 — this key was already used; here is the message it produced
     * 
     * A caller has to be able to tell those apart. "Your mail went out" and
     * "your mail had already gone out" are the same outcome and different
     * facts, and a client reconciling its own records needs the second one.
     * Same key with a different body is a 422 — see IdempotencyConflict.
     * 
     * A recipient on the tenant's suppression list is not sent to, and that is
     * reported as a refusal rather than as a silent success.
     *
     * @param {string} channel - 
     * @param {string} template - 
     * @param {string} to - 
     * @param {object[]} attachments - Files travelling with the message. Base64 content, never a URL:
fetching an address that arrives in a request body would make
this service a request-forwarder inside the platform network —
see App\Support\Attachment.
     * @param {object} data - The render model: a free map of variable name to value, resolved against the template's
placeholders. Values may be strings, numbers, booleans, or nested objects and arrays —
`{{ order.number }}` reads a nested one.

Not the only source. A tenant's `defaults`, its layout, and the template's own
`variable_defaults` are merged underneath, so a placeholder an event did not carry can
still resolve. Anything named here wins over all of them.
     * @param {boolean} draft - A TEST SEND. Renders the draft instead of the published snapshot,
which is the only way an author can check a correction in a real
mail client before it goes live to everybody. Deliberately a flag on this route and not a route of its own:
everything else about it — suppression, quiet hours, the
language chain, idempotency — has to behave exactly as a real
send, and a second endpoint is a second set of those rules that
drifts. The one difference is which fassung is rendered.
     * @param {string} locale - The language the CALLER states — step 1 of the resolution order,
ahead of anything in the payload. Absent is normal and is not
"English": it means the recipient's own language decides.
     * @param {string} market - Which market this send belongs to. Absent means the GLOBAL
market, which is what every send was before markets reached this
path — so a caller that never heard of them keeps working and
gets the credentials it always had. The caller states it; nothing here derives it. A country code on
a phone number is a fact and a domain on an address is a guess,
and a guess that decides which carrier carries a message would
look exactly like a decision somebody made.

Not on `preview`: rendering picks no provider, so there is
nothing there for a market to change.
     * @param {string} sendAt - Send later. A time in the past is accepted and means now — a
client retrying a request it built ten minutes ago is asking for
the same send, and refusing it turns a late retry into a lost
message.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    sendSend(channel: string, template: string, to: string, attachments?: object[], data?: object, draft?: boolean, locale?: string, market?: string, sendAt?: string): Promise<{}>;
    sendSend(
        paramsOrFirst: { channel: string, template: string, to: string, attachments?: object[], data?: object, draft?: boolean, locale?: string, market?: string, sendAt?: string } | string,
        ...rest: [(string)?, (string)?, (object[])?, (object)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { channel: string, template: string, to: string, attachments?: object[], data?: object, draft?: boolean, locale?: string, market?: string, sendAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, template: string, to: string, attachments?: object[], data?: object, draft?: boolean, locale?: string, market?: string, sendAt?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                template: rest[0] as string,
                to: rest[1] as string,
                attachments: rest[2] as object[],
                data: rest[3] as object,
                draft: rest[4] as boolean,
                locale: rest[5] as string,
                market: rest[6] as string,
                sendAt: rest[7] as string            
            };
        }
        
        const channel = params.channel;
        const template = params.template;
        const to = params.to;
        const attachments = params.attachments;
        const data = params.data;
        const draft = params.draft;
        const locale = params.locale;
        const market = params.market;
        const sendAt = params.sendAt;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }
        if (typeof template === 'undefined') {
            throw new RevenexxException('Missing required parameter: "template"');
        }
        if (typeof to === 'undefined') {
            throw new RevenexxException('Missing required parameter: "to"');
        }

        const apiPath = '/v1/messaging/send';
        const apiPayload: Payload = {};
        if (typeof attachments !== 'undefined') {
            apiPayload['attachments'] = Client.toWireKeys(attachments, {"contentType":{"wire":"content_type","children":null}});
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof draft !== 'undefined') {
            apiPayload['draft'] = draft;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof sendAt !== 'undefined') {
            apiPayload['send_at'] = sendAt;
        }
        if (typeof template !== 'undefined') {
            apiPayload['template'] = template;
        }
        if (typeof to !== 'undefined') {
            apiPayload['to'] = to;
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
     * Either `days` (a window ending now, default 30) or an explicit `from`/`to`
     * span. Both ends of the span or neither: `from` alone would be an open
     * range and the service would have to guess which end was meant.
     * 
     * Three numbers are deliberately not the naive ones, and the `window` block
     * says so rather than leaving a chart to imply otherwise. The window is
     * CLAMPED to the tenant's retention, and `clamped_by_retention` says when
     * that happened — 90 days on a 30-day retention is 30 days of data wearing
     * a 90-day label, and the trend line it draws invents a collapse that never
     * happened. Opens are counted only over channels that can report them; SMS
     * and push have no such thing, so dividing opens by all messages would
     * quietly halve every open rate the moment a tenant adds a second channel.
     * The delivery rate is sent ÷ (sent + failed): suppressed is the service
     * doing what it was told, and counting it as a failure would punish a
     * tenant for having a working unsubscribe list.
     * 
     * `previous` is the same window again immediately before this one, which is
     * what turns a figure into a direction. **It is null** whenever the
     * preceding window is not entirely inside retention: the query would answer
     * zero rather than fail, and zero against 1,337 renders as a triumphant
     * +100 % beside every tile on the screen. Show no trend rather than a
     * flattering one.
     * 
     * Nothing here names a recipient. That is the delivery log, which is a
     * different endpoint with a different question.
     *
     * @param {number} params.days - Clamped and possibly shortened by retention inside the service,
which reports what it actually used.
     * @param {string} params.from - An explicit span, for a window that does not end today. Both
ends or neither: `from` alone would be an open range, and the
service would have to guess which end was meant.
`nullable` rather than `sometimes`, so `required_with` still
runs when the OTHER end is missing. With `sometimes` an absent
field is skipped entirely, and `?from=` alone sailed through to
become a window nobody asked for.
     * @param {string} params.to - The other end of the same span, inclusive: the whole of this day
is inside the window whatever time its rows carry. A span running
past today ends today — there is no data ahead of now, and a
window with a future edge draws the series short against an axis
claiming a month nobody has lived through.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    statsIndex(params?: { days?: number, from?: string, to?: string }): Promise<{}>;
    /**
     * Either `days` (a window ending now, default 30) or an explicit `from`/`to`
     * span. Both ends of the span or neither: `from` alone would be an open
     * range and the service would have to guess which end was meant.
     * 
     * Three numbers are deliberately not the naive ones, and the `window` block
     * says so rather than leaving a chart to imply otherwise. The window is
     * CLAMPED to the tenant's retention, and `clamped_by_retention` says when
     * that happened — 90 days on a 30-day retention is 30 days of data wearing
     * a 90-day label, and the trend line it draws invents a collapse that never
     * happened. Opens are counted only over channels that can report them; SMS
     * and push have no such thing, so dividing opens by all messages would
     * quietly halve every open rate the moment a tenant adds a second channel.
     * The delivery rate is sent ÷ (sent + failed): suppressed is the service
     * doing what it was told, and counting it as a failure would punish a
     * tenant for having a working unsubscribe list.
     * 
     * `previous` is the same window again immediately before this one, which is
     * what turns a figure into a direction. **It is null** whenever the
     * preceding window is not entirely inside retention: the query would answer
     * zero rather than fail, and zero against 1,337 renders as a triumphant
     * +100 % beside every tile on the screen. Show no trend rather than a
     * flattering one.
     * 
     * Nothing here names a recipient. That is the delivery log, which is a
     * different endpoint with a different question.
     *
     * @param {number} days - Clamped and possibly shortened by retention inside the service,
which reports what it actually used.
     * @param {string} from - An explicit span, for a window that does not end today. Both
ends or neither: `from` alone would be an open range, and the
service would have to guess which end was meant.
`nullable` rather than `sometimes`, so `required_with` still
runs when the OTHER end is missing. With `sometimes` an absent
field is skipped entirely, and `?from=` alone sailed through to
become a window nobody asked for.
     * @param {string} to - The other end of the same span, inclusive: the whole of this day
is inside the window whatever time its rows carry. A span running
past today ends today — there is no data ahead of now, and a
window with a future edge draws the series short against an axis
claiming a month nobody has lived through.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    statsIndex(days?: number, from?: string, to?: string): Promise<{}>;
    statsIndex(
        paramsOrFirst?: { days?: number, from?: string, to?: string } | number,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { days?: number, from?: string, to?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { days?: number, from?: string, to?: string };
        } else {
            params = {
                days: paramsOrFirst as number,
                from: rest[0] as string,
                to: rest[1] as string            
            };
        }
        
        const days = params.days;
        const from = params.from;
        const to = params.to;


        const apiPath = '/v1/messaging/stats';
        const apiPayload: Payload = {};
        if (typeof days !== 'undefined') {
            apiPayload['days'] = days;
        }
        if (typeof from !== 'undefined') {
            apiPayload['from'] = from;
        }
        if (typeof to !== 'undefined') {
            apiPayload['to'] = to;
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
     * Filterable by `channel`, `scope`, `reason` and `address`. The address
     * filter is looked up by FINGERPRINT rather than against the address
     * column, which is what makes "why did this person stop getting our mail"
     * answerable for somebody who has since been erased: the row has no
     * address left to match on, and the question is still the same question.
     *
     * @param {string} params.channel - 
     * @param {Scope} params.scope - 
     * @param {Reason} params.reason - 
     * @param {string} params.address - 
     * @param {number} params.limit - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    suppressionIndex(params?: { channel?: string, scope?: Scope, reason?: Reason, address?: string, limit?: number }): Promise<{}>;
    /**
     * Filterable by `channel`, `scope`, `reason` and `address`. The address
     * filter is looked up by FINGERPRINT rather than against the address
     * column, which is what makes "why did this person stop getting our mail"
     * answerable for somebody who has since been erased: the row has no
     * address left to match on, and the question is still the same question.
     *
     * @param {string} channel - 
     * @param {Scope} scope - 
     * @param {Reason} reason - 
     * @param {string} address - 
     * @param {number} limit - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suppressionIndex(channel?: string, scope?: Scope, reason?: Reason, address?: string, limit?: number): Promise<{}>;
    suppressionIndex(
        paramsOrFirst?: { channel?: string, scope?: Scope, reason?: Reason, address?: string, limit?: number } | string,
        ...rest: [(Scope)?, (Reason)?, (string)?, (number)?]    
    ): Promise<{}> {
        let params: { channel?: string, scope?: Scope, reason?: Reason, address?: string, limit?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel?: string, scope?: Scope, reason?: Reason, address?: string, limit?: number };
        } else {
            params = {
                channel: paramsOrFirst as string,
                scope: rest[0] as Scope,
                reason: rest[1] as Reason,
                address: rest[2] as string,
                limit: rest[3] as number            
            };
        }
        
        const channel = params.channel;
        const scope = params.scope;
        const reason = params.reason;
        const address = params.address;
        const limit = params.limit;


        const apiPath = '/v1/messaging/suppressions';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof scope !== 'undefined') {
            apiPayload['scope'] = scope;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
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
     * 201 for a row this call created, 200 for an address that was already on
     * the list — so a client can tell whether it changed anything.
     * 
     * The `scope` follows from the `reason` for every reason but `manual`, and
     * asking for a different one is 422 `suppression_scope_fixed` rather than
     * being quietly corrected: a caller who asked for `marketing` on a hard
     * bounce has the model wrong, and a silent upgrade to `all` would leave
     * them believing transactional mail still flows to an address that does not
     * exist.
     *
     * @param {string} params.address - 
     * @param {string} params.channel - 
     * @param {Reason} params.reason - 
     * @param {string} params.expiresAt - 
     * @param {string} params.note - 
     * @param {Scope} params.scope - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    suppressionStore(params: { address: string, channel: string, reason: Reason, expiresAt?: string, note?: string, scope?: Scope }): Promise<{}>;
    /**
     * 201 for a row this call created, 200 for an address that was already on
     * the list — so a client can tell whether it changed anything.
     * 
     * The `scope` follows from the `reason` for every reason but `manual`, and
     * asking for a different one is 422 `suppression_scope_fixed` rather than
     * being quietly corrected: a caller who asked for `marketing` on a hard
     * bounce has the model wrong, and a silent upgrade to `all` would leave
     * them believing transactional mail still flows to an address that does not
     * exist.
     *
     * @param {string} address - 
     * @param {string} channel - 
     * @param {Reason} reason - 
     * @param {string} expiresAt - 
     * @param {string} note - 
     * @param {Scope} scope - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suppressionStore(address: string, channel: string, reason: Reason, expiresAt?: string, note?: string, scope?: Scope): Promise<{}>;
    suppressionStore(
        paramsOrFirst: { address: string, channel: string, reason: Reason, expiresAt?: string, note?: string, scope?: Scope } | string,
        ...rest: [(string)?, (Reason)?, (string)?, (string)?, (Scope)?]    
    ): Promise<{}> {
        let params: { address: string, channel: string, reason: Reason, expiresAt?: string, note?: string, scope?: Scope };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { address: string, channel: string, reason: Reason, expiresAt?: string, note?: string, scope?: Scope };
        } else {
            params = {
                address: paramsOrFirst as string,
                channel: rest[0] as string,
                reason: rest[1] as Reason,
                expiresAt: rest[2] as string,
                note: rest[3] as string,
                scope: rest[4] as Scope            
            };
        }
        
        const address = params.address;
        const channel = params.channel;
        const reason = params.reason;
        const expiresAt = params.expiresAt;
        const note = params.note;
        const scope = params.scope;

        if (typeof address === 'undefined') {
            throw new RevenexxException('Missing required parameter: "address"');
        }
        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/messaging/suppressions';
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof scope !== 'undefined') {
            apiPayload['scope'] = scope;
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
     * Audited, unlike most deletes in this service. Removing a row here is the
     * one operation that makes the service mail an address something decided
     * not to mail — if a complaint turns into a spam report later, "who took
     *      * this off the list, and when" is the whole investigation.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    suppressionDestroy(params: { id: string }): Promise<{}>;
    /**
     * Audited, unlike most deletes in this service. Removing a row here is the
     * one operation that makes the service mail an address something decided
     * not to mail — if a complaint turns into a spam report later, "who took
     *      * this off the list, and when" is the whole investigation.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suppressionDestroy(id: string): Promise<{}>;
    suppressionDestroy(
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

        const apiPath = '/v1/messaging/suppressions/{id}'.replace('{id}', id);
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
     * `address` may be null: that is a person who has been erased
     * (POST /v1/privacy/erasures). The row survives as a hash, which is the
     * point — the clear text is gone and the address is still blocked.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    suppressionShow(params: { id: string }): Promise<{}>;
    /**
     * `address` may be null: that is a person who has been erased
     * (POST /v1/privacy/erasures). The row survives as a hash, which is the
     * point — the clear text is gone and the address is still blocked.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    suppressionShow(id: string): Promise<{}>;
    suppressionShow(
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

        const apiPath = '/v1/messaging/suppressions/{id}'.replace('{id}', id);
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
     * `?channel=` narrows to one channel. Market-scoped as a BROWSING filter:
     * with `X-Revenexx-Market` the list is the global rows plus that market's,
     * without it the global rows only, and `?markets=all` is the unscoped read.
     * Never a boundary — the tenant is fixed by the credential and by row-level
     * security, and no value of either parameter reaches another tenant's rows.
     *
     * @param {string} params.channel - 
     * @param {string} params.markets - Set to `all` for the unscoped read: every row whatever its markets, ignoring the `X-Revenexx-Market` header. The deliberate admin case, spelled in the query string so it is asked for rather than fallen into. No other value has any effect.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateIndex(params?: { channel?: string, markets?: string }): Promise<{}>;
    /**
     * `?channel=` narrows to one channel. Market-scoped as a BROWSING filter:
     * with `X-Revenexx-Market` the list is the global rows plus that market's,
     * without it the global rows only, and `?markets=all` is the unscoped read.
     * Never a boundary — the tenant is fixed by the credential and by row-level
     * security, and no value of either parameter reaches another tenant's rows.
     *
     * @param {string} channel - 
     * @param {string} markets - Set to `all` for the unscoped read: every row whatever its markets, ignoring the `X-Revenexx-Market` header. The deliberate admin case, spelled in the query string so it is asked for rather than fallen into. No other value has any effect.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateIndex(channel?: string, markets?: string): Promise<{}>;
    templateIndex(
        paramsOrFirst?: { channel?: string, markets?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { channel?: string, markets?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel?: string, markets?: string };
        } else {
            params = {
                channel: paramsOrFirst as string,
                markets: rest[0] as string            
            };
        }
        
        const channel = params.channel;
        const markets = params.markets;


        const apiPath = '/v1/messaging/templates';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
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
     * Send a `design` document and the service compiles it against the
     * template's layout — or send `body_html` and `body_text` yourself and skip
     * compilation entirely.
     * 
     * A design that the compiler refuses is 422 and NOTHING is written, with
     * `error.details` naming the offending block. That order is deliberate: a
     * save whose compile failed must leave the row alone, because storing the
     * design while keeping a stale body would hand the next send a mail that no
     * longer matches the document it claims to be built from, and nothing would
     * ever surface it. A sidecar that is down is 503 `mjml_unavailable`, which
     * is worth retrying; a rejected design is not.
     * 
     * The row this creates is a DRAFT and sends nothing until it is published.
     *
     * @param {string} params.channel - 
     * @param {string} params.key - 
     * @param {string} params.bodyHtml - 
     * @param {string} params.bodyText - 
     * @param {string} params.contentSid - The Meta-approved template this one is sent as. Outside the
24-hour service window it is the only thing WhatsApp carries.
     * @param {string[]} params.design - The design document (v2). Validated as "an array" and no further:
the compiler is the authority on the block schema and answers with
the offending block, which is a better error than anything a
validation rule list could restate here.
     * @param {boolean} params.enabled - 
     * @param {string} params.layoutId - Which letterhead this template is mailed on. Null (or absent) is
not "no layout" — it means the tenant's default, resolved on
every compile and every send, so the template keeps following
that default when it changes.
     * @param {string} params.locale - 
     * @param {string[]} params.markets - Which markets this template is browsed in. `[]` — the default —
is global, so this is never nullable: null would be a second
empty next to the one that already carries the meaning.
     * @param {MessageClass} params.messageClass - What messages from this template ARE. Defaulted in the column
rather than here, so a client that has never heard of the field
keeps sending transactional mail — which is what every template
written before this field existed was.
     * @param {string} params.subject - 
     * @param {boolean} params.testMode - When this template is in force — see App\Models\Template. `after_or_equal` and not `after`: a window of a single instant is
a legitimate thing to write while somebody is lining two
templates up back to back, and rejecting it would only make them
add a second nobody can see. A window that runs BACKWARDS is
refused, because it is a template that can never send and looks
from the list exactly like one that can.
     * @param {string} params.title - What the template is CALLED, as opposed to `key`, which is what
it is addressed by. Without it a list has to derive a name from
the key, and `order-confirmation` becomes "Order Confirmation" —
passable English by accident and wrong in every other language.
     * @param {string} params.validFrom - 
     * @param {string} params.validUntil - 
     * @param {string[]} params.variableDefaults - Fallbacks for the placeholders an event did not fill — a map of
variable name → string. Nullable, unlike `markets`: an empty map
and no map are the same thing (nothing to fall back to), so there
is no second state for a null to confuse anybody with.
     * @param {string[]} params.variables - 
     * @param {WhatsappCategory} params.whatsappCategory - What a WhatsApp template is to Meta, which is what every message
from it COSTS: marketing runs about five times utility, and in
Germany that is roughly $0.12 against $0.025 a message. Refused
rather than coerced when it is not one of Meta's four — a
misspelled category that quietly became the default would be
wrong on an invoice nobody reads until the quarter closes.
Nullable: it is not a fact about an e-mail template, and what an
unset one means is decided on read (Template::whatsappCategory).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateStore(params: { channel: string, key: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, locale?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory }): Promise<{}>;
    /**
     * Send a `design` document and the service compiles it against the
     * template's layout — or send `body_html` and `body_text` yourself and skip
     * compilation entirely.
     * 
     * A design that the compiler refuses is 422 and NOTHING is written, with
     * `error.details` naming the offending block. That order is deliberate: a
     * save whose compile failed must leave the row alone, because storing the
     * design while keeping a stale body would hand the next send a mail that no
     * longer matches the document it claims to be built from, and nothing would
     * ever surface it. A sidecar that is down is 503 `mjml_unavailable`, which
     * is worth retrying; a rejected design is not.
     * 
     * The row this creates is a DRAFT and sends nothing until it is published.
     *
     * @param {string} channel - 
     * @param {string} key - 
     * @param {string} bodyHtml - 
     * @param {string} bodyText - 
     * @param {string} contentSid - The Meta-approved template this one is sent as. Outside the
24-hour service window it is the only thing WhatsApp carries.
     * @param {string[]} design - The design document (v2). Validated as "an array" and no further:
the compiler is the authority on the block schema and answers with
the offending block, which is a better error than anything a
validation rule list could restate here.
     * @param {boolean} enabled - 
     * @param {string} layoutId - Which letterhead this template is mailed on. Null (or absent) is
not "no layout" — it means the tenant's default, resolved on
every compile and every send, so the template keeps following
that default when it changes.
     * @param {string} locale - 
     * @param {string[]} markets - Which markets this template is browsed in. `[]` — the default —
is global, so this is never nullable: null would be a second
empty next to the one that already carries the meaning.
     * @param {MessageClass} messageClass - What messages from this template ARE. Defaulted in the column
rather than here, so a client that has never heard of the field
keeps sending transactional mail — which is what every template
written before this field existed was.
     * @param {string} subject - 
     * @param {boolean} testMode - When this template is in force — see App\Models\Template. `after_or_equal` and not `after`: a window of a single instant is
a legitimate thing to write while somebody is lining two
templates up back to back, and rejecting it would only make them
add a second nobody can see. A window that runs BACKWARDS is
refused, because it is a template that can never send and looks
from the list exactly like one that can.
     * @param {string} title - What the template is CALLED, as opposed to `key`, which is what
it is addressed by. Without it a list has to derive a name from
the key, and `order-confirmation` becomes "Order Confirmation" —
passable English by accident and wrong in every other language.
     * @param {string} validFrom - 
     * @param {string} validUntil - 
     * @param {string[]} variableDefaults - Fallbacks for the placeholders an event did not fill — a map of
variable name → string. Nullable, unlike `markets`: an empty map
and no map are the same thing (nothing to fall back to), so there
is no second state for a null to confuse anybody with.
     * @param {string[]} variables - 
     * @param {WhatsappCategory} whatsappCategory - What a WhatsApp template is to Meta, which is what every message
from it COSTS: marketing runs about five times utility, and in
Germany that is roughly $0.12 against $0.025 a message. Refused
rather than coerced when it is not one of Meta's four — a
misspelled category that quietly became the default would be
wrong on an invoice nobody reads until the quarter closes.
Nullable: it is not a fact about an e-mail template, and what an
unset one means is decided on read (Template::whatsappCategory).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateStore(channel: string, key: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, locale?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory): Promise<{}>;
    templateStore(
        paramsOrFirst: { channel: string, key: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, locale?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string[])?, (boolean)?, (string)?, (string)?, (string[])?, (MessageClass)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string[])?, (string[])?, (WhatsappCategory)?]    
    ): Promise<{}> {
        let params: { channel: string, key: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, locale?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { channel: string, key: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, locale?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory };
        } else {
            params = {
                channel: paramsOrFirst as string,
                key: rest[0] as string,
                bodyHtml: rest[1] as string,
                bodyText: rest[2] as string,
                contentSid: rest[3] as string,
                design: rest[4] as string[],
                enabled: rest[5] as boolean,
                layoutId: rest[6] as string,
                locale: rest[7] as string,
                markets: rest[8] as string[],
                messageClass: rest[9] as MessageClass,
                subject: rest[10] as string,
                testMode: rest[11] as boolean,
                title: rest[12] as string,
                validFrom: rest[13] as string,
                validUntil: rest[14] as string,
                variableDefaults: rest[15] as string[],
                variables: rest[16] as string[],
                whatsappCategory: rest[17] as WhatsappCategory            
            };
        }
        
        const channel = params.channel;
        const key = params.key;
        const bodyHtml = params.bodyHtml;
        const bodyText = params.bodyText;
        const contentSid = params.contentSid;
        const design = params.design;
        const enabled = params.enabled;
        const layoutId = params.layoutId;
        const locale = params.locale;
        const markets = params.markets;
        const messageClass = params.messageClass;
        const subject = params.subject;
        const testMode = params.testMode;
        const title = params.title;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;
        const variableDefaults = params.variableDefaults;
        const variables = params.variables;
        const whatsappCategory = params.whatsappCategory;

        if (typeof channel === 'undefined') {
            throw new RevenexxException('Missing required parameter: "channel"');
        }
        if (typeof key === 'undefined') {
            throw new RevenexxException('Missing required parameter: "key"');
        }

        const apiPath = '/v1/messaging/templates';
        const apiPayload: Payload = {};
        if (typeof bodyHtml !== 'undefined') {
            apiPayload['body_html'] = bodyHtml;
        }
        if (typeof bodyText !== 'undefined') {
            apiPayload['body_text'] = bodyText;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof contentSid !== 'undefined') {
            apiPayload['content_sid'] = contentSid;
        }
        if (typeof design !== 'undefined') {
            apiPayload['design'] = design;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof layoutId !== 'undefined') {
            apiPayload['layout_id'] = layoutId;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
        }
        if (typeof messageClass !== 'undefined') {
            apiPayload['message_class'] = messageClass;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof testMode !== 'undefined') {
            apiPayload['test_mode'] = testMode;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
        }
        if (typeof variableDefaults !== 'undefined') {
            apiPayload['variable_defaults'] = variableDefaults;
        }
        if (typeof variables !== 'undefined') {
            apiPayload['variables'] = variables;
        }
        if (typeof whatsappCategory !== 'undefined') {
            apiPayload['whatsapp_category'] = whatsappCategory;
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
     * Any binding still naming this template's key will find nothing when its
     * event next arrives. Audited under the KEY as well as the id: after the
     * delete the id resolves to nothing, and "deleted tmpl_01J…" is not
     * something an operator can act on six weeks later.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateDestroy(params: { id: string }): Promise<{}>;
    /**
     * Any binding still naming this template's key will find nothing when its
     * event next arrives. Audited under the KEY as well as the id: after the
     * delete the id resolves to nothing, and "deleted tmpl_01J…" is not
     * something an operator can act on six weeks later.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateDestroy(id: string): Promise<{}>;
    templateDestroy(
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

        const apiPath = '/v1/messaging/templates/{id}'.replace('{id}', id);
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
     * What customers are receiving is the published snapshot; see
     * `GET /v1/templates/{id}/versions`, whose `meta.has_unpublished_changes`
     * says whether the two differ.
     * 
     * Not market-filtered, deliberately: market scoping is a browsing concern
     * and somebody holding an id may read the row.
     *
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateShow(params: { id: string }): Promise<{}>;
    /**
     * What customers are receiving is the published snapshot; see
     * `GET /v1/templates/{id}/versions`, whose `meta.has_unpublished_changes`
     * says whether the two differ.
     * 
     * Not market-filtered, deliberately: market scoping is a browsing concern
     * and somebody holding an id may read the row.
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateShow(id: string): Promise<{}>;
    templateShow(
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

        const apiPath = '/v1/messaging/templates/{id}'.replace('{id}', id);
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
     * Only the fields sent are written, and the change is audited only when
     * something actually changed — a PATCH that resent the same values records
     * nothing, because an audit line on every save teaches its readers to
     * ignore the log.
     * 
     * Moving a template to another layout recompiles it against the NEW one,
     * even when nothing else changed: colours, width and font come from the
     * layout and are already inlined, so a template that merely changed hands
     * would otherwise keep showing the old letterhead until somebody happened
     * to press save on it again.
     * 
     * Changes nothing customers receive until the template is published.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.id - 
     * @param {string} params.bodyHtml - 
     * @param {string} params.bodyText - 
     * @param {string} params.contentSid - 
     * @param {string[]} params.design - 
     * @param {boolean} params.enabled - 
     * @param {string} params.layoutId - 
     * @param {string[]} params.markets - 
     * @param {MessageClass} params.messageClass - 
     * @param {string} params.subject - 
     * @param {boolean} params.testMode - When this template is in force — see App\Models\Template. `after_or_equal` and not `after`: a window of a single instant is
a legitimate thing to write while somebody is lining two
templates up back to back, and rejecting it would only make them
add a second nobody can see. A window that runs BACKWARDS is
refused, because it is a template that can never send and looks
from the list exactly like one that can.
     * @param {string} params.title - Reclassifying is allowed and changes nothing that already went
out: `messages.message_class` was copied onto each row at
dispatch, so the log keeps saying what each message was.
     * @param {string} params.validFrom - 
     * @param {string} params.validUntil - 
     * @param {string[]} params.variableDefaults - 
     * @param {string[]} params.variables - 
     * @param {WhatsappCategory} params.whatsappCategory - Recategorising is allowed and takes effect on the next send: Meta
move templates between categories on their own schedule, and a
row that could not follow them would go on quoting a price that
stopped being true.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateUpdatePatch(params: { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory }): Promise<{}>;
    /**
     * Only the fields sent are written, and the change is audited only when
     * something actually changed — a PATCH that resent the same values records
     * nothing, because an audit line on every save teaches its readers to
     * ignore the log.
     * 
     * Moving a template to another layout recompiles it against the NEW one,
     * even when nothing else changed: colours, width and font come from the
     * layout and are already inlined, so a template that merely changed hands
     * would otherwise keep showing the old letterhead until somebody happened
     * to press save on it again.
     * 
     * Changes nothing customers receive until the template is published.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} id - 
     * @param {string} bodyHtml - 
     * @param {string} bodyText - 
     * @param {string} contentSid - 
     * @param {string[]} design - 
     * @param {boolean} enabled - 
     * @param {string} layoutId - 
     * @param {string[]} markets - 
     * @param {MessageClass} messageClass - 
     * @param {string} subject - 
     * @param {boolean} testMode - When this template is in force — see App\Models\Template. `after_or_equal` and not `after`: a window of a single instant is
a legitimate thing to write while somebody is lining two
templates up back to back, and rejecting it would only make them
add a second nobody can see. A window that runs BACKWARDS is
refused, because it is a template that can never send and looks
from the list exactly like one that can.
     * @param {string} title - Reclassifying is allowed and changes nothing that already went
out: `messages.message_class` was copied onto each row at
dispatch, so the log keeps saying what each message was.
     * @param {string} validFrom - 
     * @param {string} validUntil - 
     * @param {string[]} variableDefaults - 
     * @param {string[]} variables - 
     * @param {WhatsappCategory} whatsappCategory - Recategorising is allowed and takes effect on the next send: Meta
move templates between categories on their own schedule, and a
row that could not follow them would go on quoting a price that
stopped being true.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateUpdatePatch(id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory): Promise<{}>;
    templateUpdatePatch(
        paramsOrFirst: { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (boolean)?, (string)?, (string[])?, (MessageClass)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string[])?, (string[])?, (WhatsappCategory)?]    
    ): Promise<{}> {
        let params: { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory };
        } else {
            params = {
                id: paramsOrFirst as string,
                bodyHtml: rest[0] as string,
                bodyText: rest[1] as string,
                contentSid: rest[2] as string,
                design: rest[3] as string[],
                enabled: rest[4] as boolean,
                layoutId: rest[5] as string,
                markets: rest[6] as string[],
                messageClass: rest[7] as MessageClass,
                subject: rest[8] as string,
                testMode: rest[9] as boolean,
                title: rest[10] as string,
                validFrom: rest[11] as string,
                validUntil: rest[12] as string,
                variableDefaults: rest[13] as string[],
                variables: rest[14] as string[],
                whatsappCategory: rest[15] as WhatsappCategory            
            };
        }
        
        const id = params.id;
        const bodyHtml = params.bodyHtml;
        const bodyText = params.bodyText;
        const contentSid = params.contentSid;
        const design = params.design;
        const enabled = params.enabled;
        const layoutId = params.layoutId;
        const markets = params.markets;
        const messageClass = params.messageClass;
        const subject = params.subject;
        const testMode = params.testMode;
        const title = params.title;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;
        const variableDefaults = params.variableDefaults;
        const variables = params.variables;
        const whatsappCategory = params.whatsappCategory;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/messaging/templates/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof bodyHtml !== 'undefined') {
            apiPayload['body_html'] = bodyHtml;
        }
        if (typeof bodyText !== 'undefined') {
            apiPayload['body_text'] = bodyText;
        }
        if (typeof contentSid !== 'undefined') {
            apiPayload['content_sid'] = contentSid;
        }
        if (typeof design !== 'undefined') {
            apiPayload['design'] = design;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof layoutId !== 'undefined') {
            apiPayload['layout_id'] = layoutId;
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
        }
        if (typeof messageClass !== 'undefined') {
            apiPayload['message_class'] = messageClass;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof testMode !== 'undefined') {
            apiPayload['test_mode'] = testMode;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
        }
        if (typeof variableDefaults !== 'undefined') {
            apiPayload['variable_defaults'] = variableDefaults;
        }
        if (typeof variables !== 'undefined') {
            apiPayload['variables'] = variables;
        }
        if (typeof whatsappCategory !== 'undefined') {
            apiPayload['whatsapp_category'] = whatsappCategory;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Only the fields sent are written, and the change is audited only when
     * something actually changed — a PATCH that resent the same values records
     * nothing, because an audit line on every save teaches its readers to
     * ignore the log.
     * 
     * Moving a template to another layout recompiles it against the NEW one,
     * even when nothing else changed: colours, width and font come from the
     * layout and are already inlined, so a template that merely changed hands
     * would otherwise keep showing the old letterhead until somebody happened
     * to press save on it again.
     * 
     * Changes nothing customers receive until the template is published.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} params.id - 
     * @param {string} params.bodyHtml - 
     * @param {string} params.bodyText - 
     * @param {string} params.contentSid - 
     * @param {string[]} params.design - 
     * @param {boolean} params.enabled - 
     * @param {string} params.layoutId - 
     * @param {string[]} params.markets - 
     * @param {MessageClass} params.messageClass - 
     * @param {string} params.subject - 
     * @param {boolean} params.testMode - When this template is in force — see App\Models\Template. `after_or_equal` and not `after`: a window of a single instant is
a legitimate thing to write while somebody is lining two
templates up back to back, and rejecting it would only make them
add a second nobody can see. A window that runs BACKWARDS is
refused, because it is a template that can never send and looks
from the list exactly like one that can.
     * @param {string} params.title - Reclassifying is allowed and changes nothing that already went
out: `messages.message_class` was copied onto each row at
dispatch, so the log keeps saying what each message was.
     * @param {string} params.validFrom - 
     * @param {string} params.validUntil - 
     * @param {string[]} params.variableDefaults - 
     * @param {string[]} params.variables - 
     * @param {WhatsappCategory} params.whatsappCategory - Recategorising is allowed and takes effect on the next send: Meta
move templates between categories on their own schedule, and a
row that could not follow them would go on quoting a price that
stopped being true.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateUpdate(params: { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory }): Promise<{}>;
    /**
     * Only the fields sent are written, and the change is audited only when
     * something actually changed — a PATCH that resent the same values records
     * nothing, because an audit line on every save teaches its readers to
     * ignore the log.
     * 
     * Moving a template to another layout recompiles it against the NEW one,
     * even when nothing else changed: colours, width and font come from the
     * layout and are already inlined, so a template that merely changed hands
     * would otherwise keep showing the old letterhead until somebody happened
     * to press save on it again.
     * 
     * Changes nothing customers receive until the template is published.
     * 
     * This path answers on `PUT` and `PATCH`, both routed to the same action.
     *
     * @param {string} id - 
     * @param {string} bodyHtml - 
     * @param {string} bodyText - 
     * @param {string} contentSid - 
     * @param {string[]} design - 
     * @param {boolean} enabled - 
     * @param {string} layoutId - 
     * @param {string[]} markets - 
     * @param {MessageClass} messageClass - 
     * @param {string} subject - 
     * @param {boolean} testMode - When this template is in force — see App\Models\Template. `after_or_equal` and not `after`: a window of a single instant is
a legitimate thing to write while somebody is lining two
templates up back to back, and rejecting it would only make them
add a second nobody can see. A window that runs BACKWARDS is
refused, because it is a template that can never send and looks
from the list exactly like one that can.
     * @param {string} title - Reclassifying is allowed and changes nothing that already went
out: `messages.message_class` was copied onto each row at
dispatch, so the log keeps saying what each message was.
     * @param {string} validFrom - 
     * @param {string} validUntil - 
     * @param {string[]} variableDefaults - 
     * @param {string[]} variables - 
     * @param {WhatsappCategory} whatsappCategory - Recategorising is allowed and takes effect on the next send: Meta
move templates between categories on their own schedule, and a
row that could not follow them would go on quoting a price that
stopped being true.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateUpdate(id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory): Promise<{}>;
    templateUpdate(
        paramsOrFirst: { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (boolean)?, (string)?, (string[])?, (MessageClass)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string[])?, (string[])?, (WhatsappCategory)?]    
    ): Promise<{}> {
        let params: { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, bodyHtml?: string, bodyText?: string, contentSid?: string, design?: string[], enabled?: boolean, layoutId?: string, markets?: string[], messageClass?: MessageClass, subject?: string, testMode?: boolean, title?: string, validFrom?: string, validUntil?: string, variableDefaults?: string[], variables?: string[], whatsappCategory?: WhatsappCategory };
        } else {
            params = {
                id: paramsOrFirst as string,
                bodyHtml: rest[0] as string,
                bodyText: rest[1] as string,
                contentSid: rest[2] as string,
                design: rest[3] as string[],
                enabled: rest[4] as boolean,
                layoutId: rest[5] as string,
                markets: rest[6] as string[],
                messageClass: rest[7] as MessageClass,
                subject: rest[8] as string,
                testMode: rest[9] as boolean,
                title: rest[10] as string,
                validFrom: rest[11] as string,
                validUntil: rest[12] as string,
                variableDefaults: rest[13] as string[],
                variables: rest[14] as string[],
                whatsappCategory: rest[15] as WhatsappCategory            
            };
        }
        
        const id = params.id;
        const bodyHtml = params.bodyHtml;
        const bodyText = params.bodyText;
        const contentSid = params.contentSid;
        const design = params.design;
        const enabled = params.enabled;
        const layoutId = params.layoutId;
        const markets = params.markets;
        const messageClass = params.messageClass;
        const subject = params.subject;
        const testMode = params.testMode;
        const title = params.title;
        const validFrom = params.validFrom;
        const validUntil = params.validUntil;
        const variableDefaults = params.variableDefaults;
        const variables = params.variables;
        const whatsappCategory = params.whatsappCategory;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/messaging/templates/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof bodyHtml !== 'undefined') {
            apiPayload['body_html'] = bodyHtml;
        }
        if (typeof bodyText !== 'undefined') {
            apiPayload['body_text'] = bodyText;
        }
        if (typeof contentSid !== 'undefined') {
            apiPayload['content_sid'] = contentSid;
        }
        if (typeof design !== 'undefined') {
            apiPayload['design'] = design;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof layoutId !== 'undefined') {
            apiPayload['layout_id'] = layoutId;
        }
        if (typeof markets !== 'undefined') {
            apiPayload['markets'] = markets;
        }
        if (typeof messageClass !== 'undefined') {
            apiPayload['message_class'] = messageClass;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof testMode !== 'undefined') {
            apiPayload['test_mode'] = testMode;
        }
        if (typeof title !== 'undefined') {
            apiPayload['title'] = title;
        }
        if (typeof validFrom !== 'undefined') {
            apiPayload['valid_from'] = validFrom;
        }
        if (typeof validUntil !== 'undefined') {
            apiPayload['valid_until'] = validUntil;
        }
        if (typeof variableDefaults !== 'undefined') {
            apiPayload['variable_defaults'] = variableDefaults;
        }
        if (typeof variables !== 'undefined') {
            apiPayload['variables'] = variables;
        }
        if (typeof whatsappCategory !== 'undefined') {
            apiPayload['whatsapp_category'] = whatsappCategory;
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
     * Answers 200 with the version already live when there was nothing to
     * publish, and 201 when a new one was written — so a client can tell
     * whether its press did anything without diffing the payload.
     *
     * @param {string} params.templateId - 
     * @param {string} params.note - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateVersionStore(params: { templateId: string, note?: string }): Promise<{}>;
    /**
     * Answers 200 with the version already live when there was nothing to
     * publish, and 201 when a new one was written — so a client can tell
     * whether its press did anything without diffing the payload.
     *
     * @param {string} templateId - 
     * @param {string} note - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateVersionStore(templateId: string, note?: string): Promise<{}>;
    templateVersionStore(
        paramsOrFirst: { templateId: string, note?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { templateId: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: string, note?: string };
        } else {
            params = {
                templateId: paramsOrFirst as string,
                note: rest[0] as string            
            };
        }
        
        const templateId = params.templateId;
        const note = params.note;

        if (typeof templateId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "templateId"');
        }

        const apiPath = '/v1/messaging/templates/{templateId}/publish'.replace('{templateId}', templateId);
        const apiPayload: Payload = {};
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

    /**
     * Summaries only: version, subject, message class, layout, who published it
     * and when, and their note. The BODIES are deliberately absent — a compiled
     * `body_html` runs to tens of kilobytes, and a template with forty versions
     * would make this a several-megabyte download that nobody scrolls to the
     * end of. `GET /v1/templates/{id}/versions/{version}` serves the full
     * snapshot for the one somebody actually opened.
     * 
     * `meta.published_version_id` says which of them is live — a property of
     * the template, said once, rather than a flag repeated on every row that
     * two rows could then claim. `meta.has_unpublished_changes` says whether
     * the draft has moved on since.
     *
     * @param {string} params.templateId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateVersionIndex(params: { templateId: string }): Promise<{}>;
    /**
     * Summaries only: version, subject, message class, layout, who published it
     * and when, and their note. The BODIES are deliberately absent — a compiled
     * `body_html` runs to tens of kilobytes, and a template with forty versions
     * would make this a several-megabyte download that nobody scrolls to the
     * end of. `GET /v1/templates/{id}/versions/{version}` serves the full
     * snapshot for the one somebody actually opened.
     * 
     * `meta.published_version_id` says which of them is live — a property of
     * the template, said once, rather than a flag repeated on every row that
     * two rows could then claim. `meta.has_unpublished_changes` says whether
     * the draft has moved on since.
     *
     * @param {string} templateId - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateVersionIndex(templateId: string): Promise<{}>;
    templateVersionIndex(
        paramsOrFirst: { templateId: string } | string    
    ): Promise<{}> {
        let params: { templateId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: string };
        } else {
            params = {
                templateId: paramsOrFirst as string            
            };
        }
        
        const templateId = params.templateId;

        if (typeof templateId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "templateId"');
        }

        const apiPath = '/v1/messaging/templates/{templateId}/versions'.replace('{templateId}', templateId);
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
     * Addressed by its VERSION NUMBER — the small integer on the history row,
     * not the snapshot's id — because that is the number an author has in front
     * of them.
     * 
     * This is what sends actually rendered while that version was live, so it
     * is the thing to read when the question is "what did the mail we sent in
     *      * March say".
     *
     * @param {string} params.templateId - 
     * @param {string} params.version - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateVersionShow(params: { templateId: string, version: string }): Promise<{}>;
    /**
     * Addressed by its VERSION NUMBER — the small integer on the history row,
     * not the snapshot's id — because that is the number an author has in front
     * of them.
     * 
     * This is what sends actually rendered while that version was live, so it
     * is the thing to read when the question is "what did the mail we sent in
     *      * March say".
     *
     * @param {string} templateId - 
     * @param {string} version - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateVersionShow(templateId: string, version: string): Promise<{}>;
    templateVersionShow(
        paramsOrFirst: { templateId: string, version: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { templateId: string, version: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: string, version: string };
        } else {
            params = {
                templateId: paramsOrFirst as string,
                version: rest[0] as string            
            };
        }
        
        const templateId = params.templateId;
        const version = params.version;

        if (typeof templateId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "templateId"');
        }
        if (typeof version === 'undefined') {
            throw new RevenexxException('Missing required parameter: "version"');
        }

        const apiPath = '/v1/messaging/templates/{templateId}/versions/{version}'.replace('{templateId}', templateId).replace('{version}', version);
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
     * `publish: true` makes it live in the same transaction — see
     * TemplatePublisher::restore for why that flag exists rather than asking
     * the caller for a second round trip.
     *
     * @param {string} params.templateId - 
     * @param {string} params.version - 
     * @param {boolean} params.publish - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    templateVersionRestore(params: { templateId: string, version: string, publish?: boolean }): Promise<{}>;
    /**
     * `publish: true` makes it live in the same transaction — see
     * TemplatePublisher::restore for why that flag exists rather than asking
     * the caller for a second round trip.
     *
     * @param {string} templateId - 
     * @param {string} version - 
     * @param {boolean} publish - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    templateVersionRestore(templateId: string, version: string, publish?: boolean): Promise<{}>;
    templateVersionRestore(
        paramsOrFirst: { templateId: string, version: string, publish?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<{}> {
        let params: { templateId: string, version: string, publish?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { templateId: string, version: string, publish?: boolean };
        } else {
            params = {
                templateId: paramsOrFirst as string,
                version: rest[0] as string,
                publish: rest[1] as boolean            
            };
        }
        
        const templateId = params.templateId;
        const version = params.version;
        const publish = params.publish;

        if (typeof templateId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "templateId"');
        }
        if (typeof version === 'undefined') {
            throw new RevenexxException('Missing required parameter: "version"');
        }

        const apiPath = '/v1/messaging/templates/{templateId}/versions/{version}/restore'.replace('{templateId}', templateId).replace('{version}', version);
        const apiPayload: Payload = {};
        if (typeof publish !== 'undefined') {
            apiPayload['publish'] = publish;
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
