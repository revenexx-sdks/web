import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Channel } from '../enums/channel';
import { MarketingConsentsSubscriptionsListState } from '../enums/marketing-consents-subscriptions-list-state';
import { MarketingConsentsConsentEventsListLegalBasis } from '../enums/marketing-consents-consent-events-list-legal-basis';
import { MarketingConsentsSubscriptionsListSource } from '../enums/marketing-consents-subscriptions-list-source';
import { MarketingConsentsSubscriptionsRequestSource } from '../enums/marketing-consents-subscriptions-request-source';

export class MarketingConsentsSubscriptions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The double opt-in click, called by the storefront's confirmation page. Turns the pending subscription confirmed on the consent_doi basis and writes the proof with the person's IP and browser. A second click answers the same without writing anything. An expired link lapses the sign-up.
     *
     * @param {string} params.token - The token from the confirmation message.
     * @param {string} params.purchaseRequestId - 
     * @param {object[]} params.allocations - Optional: the request's allocations (the reserve's shape; an empty array is the same as none, and only cost_center_id is read), used only to classify its cost centres by budget type. A request holding no reservation whose every centre is tracking-only is then settled with nothing written; one naming a monetary centre, or naming none, is refused with 409 as before. Amounts are read from the ledger, never from here.
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @param {string} params.orderId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConfirmResponse>}
     */
    marketingConsentsSubscriptionsConfirm(params: { token: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string, orderId?: string }): Promise<Models.ConfirmResponse>;
    /**
     * The double opt-in click, called by the storefront's confirmation page. Turns the pending subscription confirmed on the consent_doi basis and writes the proof with the person's IP and browser. A second click answers the same without writing anything. An expired link lapses the sign-up.
     *
     * @param {string} token - The token from the confirmation message.
     * @param {string} purchaseRequestId - 
     * @param {object[]} allocations - Optional: the request's allocations (the reserve's shape; an empty array is the same as none, and only cost_center_id is read), used only to classify its cost centres by budget type. A request holding no reservation whose every centre is tracking-only is then settled with nothing written; one naming a monetary centre, or naming none, is refused with 409 as before. Amounts are read from the ledger, never from here.
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @param {string} orderId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConfirmResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsSubscriptionsConfirm(token: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string, orderId?: string): Promise<Models.ConfirmResponse>;
    marketingConsentsSubscriptionsConfirm(
        paramsOrFirst: { token: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string, orderId?: string } | string,
        ...rest: [(string)?, (object[])?, (string)?, (string)?, (string)?]    
    ): Promise<Models.ConfirmResponse> {
        let params: { token: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string, orderId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string, orderId?: string };
        } else {
            params = {
                token: paramsOrFirst as string,
                purchaseRequestId: rest[0] as string,
                allocations: rest[1] as object[],
                currency: rest[2] as string,
                note: rest[3] as string,
                orderId: rest[4] as string            
            };
        }
        
        const token = params.token;
        const purchaseRequestId = params.purchaseRequestId;
        const allocations = params.allocations;
        const currency = params.currency;
        const note = params.note;
        const orderId = params.orderId;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }
        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }

        const apiPath = '/v1/marketing-consents/confirm/{token}'.replace('{token}', token);
        const apiPayload: Payload = {};
        if (typeof allocations !== 'undefined') {
            apiPayload['allocations'] = Client.toWireKeys(allocations, {"costCenterId":{"wire":"cost_center_id","children":null}});
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
     * The one call `mailings` and `journeys` make before every batch. Per recipient: allowed or not, with the legal basis or the reason. Only a confirmed subscription allows; `contract` never does; `existing_customer` only on a type that allows it; an erased address answers `erased`. At most 500 recipients per call. The sequencer's suppression stays the last refusal at send time.
     *
     * @param {object[]} params.recipients - Up to 500 recipients.
     * @param {string} params.subscriptionType - The code of the type the send is under.
     * @param {Channel} params.channel - Defaults to email.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EligibilityResponse>}
     */
    marketingConsentsEligibilityCheck(params: { recipients: object[], subscriptionType: string, channel?: Channel }): Promise<Models.EligibilityResponse>;
    /**
     * The one call `mailings` and `journeys` make before every batch. Per recipient: allowed or not, with the legal basis or the reason. Only a confirmed subscription allows; `contract` never does; `existing_customer` only on a type that allows it; an erased address answers `erased`. At most 500 recipients per call. The sequencer's suppression stays the last refusal at send time.
     *
     * @param {object[]} recipients - Up to 500 recipients.
     * @param {string} subscriptionType - The code of the type the send is under.
     * @param {Channel} channel - Defaults to email.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EligibilityResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsEligibilityCheck(recipients: object[], subscriptionType: string, channel?: Channel): Promise<Models.EligibilityResponse>;
    marketingConsentsEligibilityCheck(
        paramsOrFirst: { recipients: object[], subscriptionType: string, channel?: Channel } | object[],
        ...rest: [(string)?, (Channel)?]    
    ): Promise<Models.EligibilityResponse> {
        let params: { recipients: object[], subscriptionType: string, channel?: Channel };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('recipients' in paramsOrFirst || 'subscriptionType' in paramsOrFirst || 'channel' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { recipients: object[], subscriptionType: string, channel?: Channel };
        } else {
            params = {
                recipients: paramsOrFirst as object[],
                subscriptionType: rest[0] as string,
                channel: rest[1] as Channel            
            };
        }
        
        const recipients = params.recipients;
        const subscriptionType = params.subscriptionType;
        const channel = params.channel;

        if (typeof recipients === 'undefined') {
            throw new RevenexxException('Missing required parameter: "recipients"');
        }
        if (typeof subscriptionType === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriptionType"');
        }

        const apiPath = '/v1/marketing-consents/eligibility';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof recipients !== 'undefined') {
            apiPayload['recipients'] = Client.toWireKeys(recipients, {"contactId":{"wire":"contact_id","children":null}});
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
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
     * One stable personal link per address and channel, for the mandatory footer of every marketing message. The same address gets the same token every time. At most 500 per call.
     *
     * @param {object[]} params.recipients - Up to 500.
     * @param {Channel} params.channel - Defaults to email.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PreferenceLinksResponse>}
     */
    marketingConsentsPreferencesLinks(params: { recipients: object[], channel?: Channel }): Promise<Models.PreferenceLinksResponse>;
    /**
     * One stable personal link per address and channel, for the mandatory footer of every marketing message. The same address gets the same token every time. At most 500 per call.
     *
     * @param {object[]} recipients - Up to 500.
     * @param {Channel} channel - Defaults to email.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PreferenceLinksResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsPreferencesLinks(recipients: object[], channel?: Channel): Promise<Models.PreferenceLinksResponse>;
    marketingConsentsPreferencesLinks(
        paramsOrFirst: { recipients: object[], channel?: Channel } | object[],
        ...rest: [(Channel)?]    
    ): Promise<Models.PreferenceLinksResponse> {
        let params: { recipients: object[], channel?: Channel };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('recipients' in paramsOrFirst || 'channel' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { recipients: object[], channel?: Channel };
        } else {
            params = {
                recipients: paramsOrFirst as object[],
                channel: rest[0] as Channel            
            };
        }
        
        const recipients = params.recipients;
        const channel = params.channel;

        if (typeof recipients === 'undefined') {
            throw new RevenexxException('Missing required parameter: "recipients"');
        }

        const apiPath = '/v1/marketing-consents/preferences/links';
        const apiPayload: Payload = {};
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof recipients !== 'undefined') {
            apiPayload['recipients'] = Client.toWireKeys(recipients, {"contactId":{"wire":"contact_id","children":null}});
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
     * Behind a personal link: every active type the channel offers, where the address stands on each, and the wording to show. The storefront renders the page.
     *
     * @param {string} params.token - The personal token.
     * @param {string} params.locale - The language for labels and wording (default de).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PreferenceCentre>}
     */
    marketingConsentsPreferencesGet(params: { token: string, locale?: string }): Promise<Models.PreferenceCentre>;
    /**
     * Behind a personal link: every active type the channel offers, where the address stands on each, and the wording to show. The storefront renders the page.
     *
     * @param {string} token - The personal token.
     * @param {string} locale - The language for labels and wording (default de).
     * @throws {RevenexxException}
     * @returns {Promise<Models.PreferenceCentre>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsPreferencesGet(token: string, locale?: string): Promise<Models.PreferenceCentre>;
    marketingConsentsPreferencesGet(
        paramsOrFirst: { token: string, locale?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PreferenceCentre> {
        let params: { token: string, locale?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string, locale?: string };
        } else {
            params = {
                token: paramsOrFirst as string,
                locale: rest[0] as string            
            };
        }
        
        const token = params.token;
        const locale = params.locale;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/marketing-consents/preferences/{token}'.replace('{token}', token);
        const apiPayload: Payload = {};
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
     * Per type: `subscribed: false` withdraws at once (source preference_centre, pushed to the sequencer); `subscribed: true` signs up — with a confirmation first when the type requires double opt-in. `unsubscribe_all: true` withdraws every type of the channel. Answers the page as it now stands, with what changed.
     *
     * @param {string} params.token - The personal token.
     * @param {object[]} params.choices - The choices.
     * @param {string} params.ip - The person's IP address.
     * @param {string} params.locale - The language of the page.
     * @param {boolean} params.unsubscribeAll - Withdraw every type of the channel.
     * @param {string} params.userAgent - The person's browser.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PreferenceUpdateResponse>}
     */
    marketingConsentsPreferencesUpdate(params: { token: string, choices?: object[], ip?: string, locale?: string, unsubscribeAll?: boolean, userAgent?: string }): Promise<Models.PreferenceUpdateResponse>;
    /**
     * Per type: `subscribed: false` withdraws at once (source preference_centre, pushed to the sequencer); `subscribed: true` signs up — with a confirmation first when the type requires double opt-in. `unsubscribe_all: true` withdraws every type of the channel. Answers the page as it now stands, with what changed.
     *
     * @param {string} token - The personal token.
     * @param {object[]} choices - The choices.
     * @param {string} ip - The person's IP address.
     * @param {string} locale - The language of the page.
     * @param {boolean} unsubscribeAll - Withdraw every type of the channel.
     * @param {string} userAgent - The person's browser.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PreferenceUpdateResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsPreferencesUpdate(token: string, choices?: object[], ip?: string, locale?: string, unsubscribeAll?: boolean, userAgent?: string): Promise<Models.PreferenceUpdateResponse>;
    marketingConsentsPreferencesUpdate(
        paramsOrFirst: { token: string, choices?: object[], ip?: string, locale?: string, unsubscribeAll?: boolean, userAgent?: string } | string,
        ...rest: [(object[])?, (string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.PreferenceUpdateResponse> {
        let params: { token: string, choices?: object[], ip?: string, locale?: string, unsubscribeAll?: boolean, userAgent?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string, choices?: object[], ip?: string, locale?: string, unsubscribeAll?: boolean, userAgent?: string };
        } else {
            params = {
                token: paramsOrFirst as string,
                choices: rest[0] as object[],
                ip: rest[1] as string,
                locale: rest[2] as string,
                unsubscribeAll: rest[3] as boolean,
                userAgent: rest[4] as string            
            };
        }
        
        const token = params.token;
        const choices = params.choices;
        const ip = params.ip;
        const locale = params.locale;
        const unsubscribeAll = params.unsubscribeAll;
        const userAgent = params.userAgent;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/marketing-consents/preferences/{token}'.replace('{token}', token);
        const apiPayload: Payload = {};
        if (typeof choices !== 'undefined') {
            apiPayload['choices'] = Client.toWireKeys(choices, {"consentTextId":{"wire":"consent_text_id","children":null},"subscriptionType":{"wire":"subscription_type","children":null}});
        }
        if (typeof ip !== 'undefined') {
            apiPayload['ip'] = ip;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof unsubscribeAll !== 'undefined') {
            apiPayload['unsubscribe_all'] = unsubscribeAll;
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
     * Every subscription. Filter by `subscription_type_id`, `state`, `channel`, `contact_id`, `address`.
     *
     * @param {string} params.id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} params.contactId - Filter to rows whose `contact_id` is exactly this value. The `customers` contact holding the address. Null until one exists — a sign-up creates one at lifecycle stage `subscriber` — and after an erasure.
     * @param {Channel} params.channel - Filter to rows whose `channel` is exactly this value. How the address is reached: email, sms or whatsapp.
     * @param {string} params.address - Filter to rows whose `address` is exactly this value. The address: a lower-cased email or an E.164 phone number. Null after an erasure.
     * @param {string} params.addressHash - Filter to rows whose `address_hash` is exactly this value. SHA-256 of the normalised address, hex. Every lookup goes through it, and it is the only part of the address an erasure keeps.
     * @param {string} params.subscriptionTypeId - Filter to rows whose `subscription_type_id` is exactly this value. The subscription type this row belongs to.
     * @param {MarketingConsentsSubscriptionsListState} params.state - Filter to rows whose `state` is exactly this value. Where the subscription stands: pending (waiting for the click), confirmed, withdrawn or lapsed (the click never came). Only confirmed can make a send allowed.
     * @param {MarketingConsentsConsentEventsListLegalBasis} params.legalBasis - Filter to rows whose `legal_basis` is exactly this value. Why a send is allowed: consent_doi (double opt-in), consent_single (imported single opt-in, weaker proof), existing_customer (§7 (3) UWG) or contract (never a basis for advertising).
     * @param {string} params.consentTextId - Filter to rows whose `consent_text_id` is exactly this value. The published consent text — wording and version — the person agreed to. Null for the existing-customer basis and for imports, which saw no wording.
     * @param {string} params.locale - Filter to rows whose `locale` is exactly this value. The language of the sign-up, used for the confirmation mail and the preference centre.
     * @param {string} params.market - Filter to rows whose `market` is exactly this value. The market code the row was written in, taken from `x-revenexx-market`; '' is the shop as a whole.
     * @param {string} params.campaignRef - Filter to rows whose `campaign_ref` is exactly this value. The campaign the sign-up came from, as the caller named it (a campaigns id). Attribution only.
     * @param {MarketingConsentsSubscriptionsListSource} params.source - Filter to rows whose `source` is exactly this value. Where it came from: form, storefront (a shop sign-up box), import, admin, unsubscribe_header (RFC 8058 one-click), preference_centre, order, complaint (a spam report) — and, on events only, system (the lapse job).
     * @param {string} params.sourceRef - Filter to rows whose `source_ref` is exactly this value. What exactly it came from: a form id, an order id, a message id, an import id.
     * @param {string} params.requestedAt - Filter to rows whose `requested_at` is exactly this value. When the latest sign-up for this address and type arrived.
     * @param {string} params.confirmationSentAt - Filter to rows whose `confirmation_sent_at` is exactly this value. When the sequencer accepted the confirmation message. Null while none went out — the sign-up stands, the person can ask again.
     * @param {string} params.confirmedAt - Filter to rows whose `confirmed_at` is exactly this value. When the subscription became confirmed: the click, an order (existing customer), an import, or the sign-up itself on a type without double opt-in.
     * @param {string} params.withdrawnAt - Filter to rows whose `withdrawn_at` is exactly this value. When it was withdrawn.
     * @param {string} params.lapseAt - Filter to rows whose `lapse_at` is exactly this value. When a pending sign-up lapses if nobody clicks.
     * @param {string} params.erasedAt - Filter to rows whose `erased_at` is exactly this value. When the address was erased on request. The row keeps type, basis, times and the address hash.
     * @param {string} params.suppressionWrittenAt - Filter to rows whose `suppression_written_at` is exactly this value. When the sequencer's suppression received the withdrawal. Null on a withdrawn row means the hourly job will try again.
     * @param {string} params.suppressionRef - Filter to rows whose `suppression_ref` is exactly this value. The id of the suppression this app wrote into the sequencer for the withdrawal, so the sweep can tell this app's own rows from unsubscribes it has to act on.
     * @param {string} params.externalId - Filter to rows whose `external_id` is exactly this value. The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {string} params.sourceSyncedAt - Filter to rows whose `source_synced_at` is exactly this value. When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} params.createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} params.updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set.
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} params.offset - Row offset (default 0).
     * @param {string} params.order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    marketingConsentsSubscriptionsList(params?: { id?: string, contactId?: string, channel?: Channel, address?: string, addressHash?: string, subscriptionTypeId?: string, state?: MarketingConsentsSubscriptionsListState, legalBasis?: MarketingConsentsConsentEventsListLegalBasis, consentTextId?: string, locale?: string, market?: string, campaignRef?: string, source?: MarketingConsentsSubscriptionsListSource, sourceRef?: string, requestedAt?: string, confirmationSentAt?: string, confirmedAt?: string, withdrawnAt?: string, lapseAt?: string, erasedAt?: string, suppressionWrittenAt?: string, suppressionRef?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     * Every subscription. Filter by `subscription_type_id`, `state`, `channel`, `contact_id`, `address`.
     *
     * @param {string} id - Filter to rows whose `id` is exactly this value. The row's own id, generated by the database. A caller never sends one; it reads one back and puts it in the path of later calls.
     * @param {string} contactId - Filter to rows whose `contact_id` is exactly this value. The `customers` contact holding the address. Null until one exists — a sign-up creates one at lifecycle stage `subscriber` — and after an erasure.
     * @param {Channel} channel - Filter to rows whose `channel` is exactly this value. How the address is reached: email, sms or whatsapp.
     * @param {string} address - Filter to rows whose `address` is exactly this value. The address: a lower-cased email or an E.164 phone number. Null after an erasure.
     * @param {string} addressHash - Filter to rows whose `address_hash` is exactly this value. SHA-256 of the normalised address, hex. Every lookup goes through it, and it is the only part of the address an erasure keeps.
     * @param {string} subscriptionTypeId - Filter to rows whose `subscription_type_id` is exactly this value. The subscription type this row belongs to.
     * @param {MarketingConsentsSubscriptionsListState} state - Filter to rows whose `state` is exactly this value. Where the subscription stands: pending (waiting for the click), confirmed, withdrawn or lapsed (the click never came). Only confirmed can make a send allowed.
     * @param {MarketingConsentsConsentEventsListLegalBasis} legalBasis - Filter to rows whose `legal_basis` is exactly this value. Why a send is allowed: consent_doi (double opt-in), consent_single (imported single opt-in, weaker proof), existing_customer (§7 (3) UWG) or contract (never a basis for advertising).
     * @param {string} consentTextId - Filter to rows whose `consent_text_id` is exactly this value. The published consent text — wording and version — the person agreed to. Null for the existing-customer basis and for imports, which saw no wording.
     * @param {string} locale - Filter to rows whose `locale` is exactly this value. The language of the sign-up, used for the confirmation mail and the preference centre.
     * @param {string} market - Filter to rows whose `market` is exactly this value. The market code the row was written in, taken from `x-revenexx-market`; '' is the shop as a whole.
     * @param {string} campaignRef - Filter to rows whose `campaign_ref` is exactly this value. The campaign the sign-up came from, as the caller named it (a campaigns id). Attribution only.
     * @param {MarketingConsentsSubscriptionsListSource} source - Filter to rows whose `source` is exactly this value. Where it came from: form, storefront (a shop sign-up box), import, admin, unsubscribe_header (RFC 8058 one-click), preference_centre, order, complaint (a spam report) — and, on events only, system (the lapse job).
     * @param {string} sourceRef - Filter to rows whose `source_ref` is exactly this value. What exactly it came from: a form id, an order id, a message id, an import id.
     * @param {string} requestedAt - Filter to rows whose `requested_at` is exactly this value. When the latest sign-up for this address and type arrived.
     * @param {string} confirmationSentAt - Filter to rows whose `confirmation_sent_at` is exactly this value. When the sequencer accepted the confirmation message. Null while none went out — the sign-up stands, the person can ask again.
     * @param {string} confirmedAt - Filter to rows whose `confirmed_at` is exactly this value. When the subscription became confirmed: the click, an order (existing customer), an import, or the sign-up itself on a type without double opt-in.
     * @param {string} withdrawnAt - Filter to rows whose `withdrawn_at` is exactly this value. When it was withdrawn.
     * @param {string} lapseAt - Filter to rows whose `lapse_at` is exactly this value. When a pending sign-up lapses if nobody clicks.
     * @param {string} erasedAt - Filter to rows whose `erased_at` is exactly this value. When the address was erased on request. The row keeps type, basis, times and the address hash.
     * @param {string} suppressionWrittenAt - Filter to rows whose `suppression_written_at` is exactly this value. When the sequencer's suppression received the withdrawal. Null on a withdrawn row means the hourly job will try again.
     * @param {string} suppressionRef - Filter to rows whose `suppression_ref` is exactly this value. The id of the suppression this app wrote into the sequencer for the withdrawal, so the sweep can tell this app's own rows from unsubscribes it has to act on.
     * @param {string} externalId - Filter to rows whose `external_id` is exactly this value. The key of this record in the system that leads it — a marketing tool, an ERP, an ad platform. Unique per tenant when set; an import matches on it.
     * @param {string} sourceSyncedAt - Filter to rows whose `source_synced_at` is exactly this value. When a sync last wrote this record from its source system. Null for a record only ever kept here.
     * @param {string} createdAt - Filter to rows whose `created_at` is exactly this value. When the row was created. Server-set.
     * @param {string} updatedAt - Filter to rows whose `updated_at` is exactly this value. When the row was last written. Server-set.
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped.
     * @param {number} offset - Row offset (default 0).
     * @param {string} order - Sort by one column: 'column', 'column.asc' or 'column.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsSubscriptionsList(id?: string, contactId?: string, channel?: Channel, address?: string, addressHash?: string, subscriptionTypeId?: string, state?: MarketingConsentsSubscriptionsListState, legalBasis?: MarketingConsentsConsentEventsListLegalBasis, consentTextId?: string, locale?: string, market?: string, campaignRef?: string, source?: MarketingConsentsSubscriptionsListSource, sourceRef?: string, requestedAt?: string, confirmationSentAt?: string, confirmedAt?: string, withdrawnAt?: string, lapseAt?: string, erasedAt?: string, suppressionWrittenAt?: string, suppressionRef?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<{}>;
    marketingConsentsSubscriptionsList(
        paramsOrFirst?: { id?: string, contactId?: string, channel?: Channel, address?: string, addressHash?: string, subscriptionTypeId?: string, state?: MarketingConsentsSubscriptionsListState, legalBasis?: MarketingConsentsConsentEventsListLegalBasis, consentTextId?: string, locale?: string, market?: string, campaignRef?: string, source?: MarketingConsentsSubscriptionsListSource, sourceRef?: string, requestedAt?: string, confirmationSentAt?: string, confirmedAt?: string, withdrawnAt?: string, lapseAt?: string, erasedAt?: string, suppressionWrittenAt?: string, suppressionRef?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (Channel)?, (string)?, (string)?, (string)?, (MarketingConsentsSubscriptionsListState)?, (MarketingConsentsConsentEventsListLegalBasis)?, (string)?, (string)?, (string)?, (string)?, (MarketingConsentsSubscriptionsListSource)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { id?: string, contactId?: string, channel?: Channel, address?: string, addressHash?: string, subscriptionTypeId?: string, state?: MarketingConsentsSubscriptionsListState, legalBasis?: MarketingConsentsConsentEventsListLegalBasis, consentTextId?: string, locale?: string, market?: string, campaignRef?: string, source?: MarketingConsentsSubscriptionsListSource, sourceRef?: string, requestedAt?: string, confirmationSentAt?: string, confirmedAt?: string, withdrawnAt?: string, lapseAt?: string, erasedAt?: string, suppressionWrittenAt?: string, suppressionRef?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id?: string, contactId?: string, channel?: Channel, address?: string, addressHash?: string, subscriptionTypeId?: string, state?: MarketingConsentsSubscriptionsListState, legalBasis?: MarketingConsentsConsentEventsListLegalBasis, consentTextId?: string, locale?: string, market?: string, campaignRef?: string, source?: MarketingConsentsSubscriptionsListSource, sourceRef?: string, requestedAt?: string, confirmationSentAt?: string, confirmedAt?: string, withdrawnAt?: string, lapseAt?: string, erasedAt?: string, suppressionWrittenAt?: string, suppressionRef?: string, externalId?: string, sourceSyncedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                channel: rest[1] as Channel,
                address: rest[2] as string,
                addressHash: rest[3] as string,
                subscriptionTypeId: rest[4] as string,
                state: rest[5] as MarketingConsentsSubscriptionsListState,
                legalBasis: rest[6] as MarketingConsentsConsentEventsListLegalBasis,
                consentTextId: rest[7] as string,
                locale: rest[8] as string,
                market: rest[9] as string,
                campaignRef: rest[10] as string,
                source: rest[11] as MarketingConsentsSubscriptionsListSource,
                sourceRef: rest[12] as string,
                requestedAt: rest[13] as string,
                confirmationSentAt: rest[14] as string,
                confirmedAt: rest[15] as string,
                withdrawnAt: rest[16] as string,
                lapseAt: rest[17] as string,
                erasedAt: rest[18] as string,
                suppressionWrittenAt: rest[19] as string,
                suppressionRef: rest[20] as string,
                externalId: rest[21] as string,
                sourceSyncedAt: rest[22] as string,
                createdAt: rest[23] as string,
                updatedAt: rest[24] as string,
                limit: rest[25] as number,
                offset: rest[26] as number,
                order: rest[27] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const channel = params.channel;
        const address = params.address;
        const addressHash = params.addressHash;
        const subscriptionTypeId = params.subscriptionTypeId;
        const state = params.state;
        const legalBasis = params.legalBasis;
        const consentTextId = params.consentTextId;
        const locale = params.locale;
        const market = params.market;
        const campaignRef = params.campaignRef;
        const source = params.source;
        const sourceRef = params.sourceRef;
        const requestedAt = params.requestedAt;
        const confirmationSentAt = params.confirmationSentAt;
        const confirmedAt = params.confirmedAt;
        const withdrawnAt = params.withdrawnAt;
        const lapseAt = params.lapseAt;
        const erasedAt = params.erasedAt;
        const suppressionWrittenAt = params.suppressionWrittenAt;
        const suppressionRef = params.suppressionRef;
        const externalId = params.externalId;
        const sourceSyncedAt = params.sourceSyncedAt;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/marketing-consents/subscriptions';
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof addressHash !== 'undefined') {
            apiPayload['address_hash'] = addressHash;
        }
        if (typeof subscriptionTypeId !== 'undefined') {
            apiPayload['subscription_type_id'] = subscriptionTypeId;
        }
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof legalBasis !== 'undefined') {
            apiPayload['legal_basis'] = legalBasis;
        }
        if (typeof consentTextId !== 'undefined') {
            apiPayload['consent_text_id'] = consentTextId;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof sourceRef !== 'undefined') {
            apiPayload['source_ref'] = sourceRef;
        }
        if (typeof requestedAt !== 'undefined') {
            apiPayload['requested_at'] = requestedAt;
        }
        if (typeof confirmationSentAt !== 'undefined') {
            apiPayload['confirmation_sent_at'] = confirmationSentAt;
        }
        if (typeof confirmedAt !== 'undefined') {
            apiPayload['confirmed_at'] = confirmedAt;
        }
        if (typeof withdrawnAt !== 'undefined') {
            apiPayload['withdrawn_at'] = withdrawnAt;
        }
        if (typeof lapseAt !== 'undefined') {
            apiPayload['lapse_at'] = lapseAt;
        }
        if (typeof erasedAt !== 'undefined') {
            apiPayload['erased_at'] = erasedAt;
        }
        if (typeof suppressionWrittenAt !== 'undefined') {
            apiPayload['suppression_written_at'] = suppressionWrittenAt;
        }
        if (typeof suppressionRef !== 'undefined') {
            apiPayload['suppression_ref'] = suppressionRef;
        }
        if (typeof externalId !== 'undefined') {
            apiPayload['external_id'] = externalId;
        }
        if (typeof sourceSyncedAt !== 'undefined') {
            apiPayload['source_synced_at'] = sourceSyncedAt;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * Used by the forms listener and the storefront. Opens (or reopens) a pending subscription, creates the `customers` contact when the address has none (stage `subscriber`), writes the `requested` proof and asks the sequencer for the advertising-free confirmation. The token is in that message only — never in this answer. A confirmed address is answered as it is; a pending one asked again within ten minutes gets no second mail. A type without double opt-in is confirmed at once on the single-opt-in basis.
     *
     * @param {string} params.subscriptionType - The code of the subscription type.
     * @param {string} params.address - Alias for `email` or `phone`, whichever the channel takes.
     * @param {string} params.campaignRef - The campaign the sign-up came from, as the caller named it (a campaigns id). Attribution only.
     * @param {Channel} params.channel - Defaults to email, or sms when only `phone` is sent.
     * @param {string} params.consentTextId - The published wording the person saw. Without it the newest published version of the type in `locale` is recorded.
     * @param {string} params.contactId - The contact, when the caller knows it (a signed-in buyer). Skips the lookup.
     * @param {string} params.email - The email address (email channel).
     * @param {string} params.firstName - For a new contact.
     * @param {string} params.ip - The person's IP address, as the storefront saw it.
     * @param {string} params.lastName - For a new contact.
     * @param {string} params.locale - The language of the sign-up (default de).
     * @param {string} params.pageUrl - The page the sign-up was made on.
     * @param {string} params.phone - The phone number in international form (sms, whatsapp).
     * @param {MarketingConsentsSubscriptionsRequestSource} params.source - Where the sign-up was made (default storefront).
     * @param {string} params.sourceRef - What exactly it came from: a form id, an order id, a message id, an import id.
     * @param {string} params.userAgent - The person's browser.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SubscriptionRequestResponse>}
     */
    marketingConsentsSubscriptionsRequest(params: { subscriptionType: string, address?: string, campaignRef?: string, channel?: Channel, consentTextId?: string, contactId?: string, email?: string, firstName?: string, ip?: string, lastName?: string, locale?: string, pageUrl?: string, phone?: string, source?: MarketingConsentsSubscriptionsRequestSource, sourceRef?: string, userAgent?: string }): Promise<Models.SubscriptionRequestResponse>;
    /**
     * Used by the forms listener and the storefront. Opens (or reopens) a pending subscription, creates the `customers` contact when the address has none (stage `subscriber`), writes the `requested` proof and asks the sequencer for the advertising-free confirmation. The token is in that message only — never in this answer. A confirmed address is answered as it is; a pending one asked again within ten minutes gets no second mail. A type without double opt-in is confirmed at once on the single-opt-in basis.
     *
     * @param {string} subscriptionType - The code of the subscription type.
     * @param {string} address - Alias for `email` or `phone`, whichever the channel takes.
     * @param {string} campaignRef - The campaign the sign-up came from, as the caller named it (a campaigns id). Attribution only.
     * @param {Channel} channel - Defaults to email, or sms when only `phone` is sent.
     * @param {string} consentTextId - The published wording the person saw. Without it the newest published version of the type in `locale` is recorded.
     * @param {string} contactId - The contact, when the caller knows it (a signed-in buyer). Skips the lookup.
     * @param {string} email - The email address (email channel).
     * @param {string} firstName - For a new contact.
     * @param {string} ip - The person's IP address, as the storefront saw it.
     * @param {string} lastName - For a new contact.
     * @param {string} locale - The language of the sign-up (default de).
     * @param {string} pageUrl - The page the sign-up was made on.
     * @param {string} phone - The phone number in international form (sms, whatsapp).
     * @param {MarketingConsentsSubscriptionsRequestSource} source - Where the sign-up was made (default storefront).
     * @param {string} sourceRef - What exactly it came from: a form id, an order id, a message id, an import id.
     * @param {string} userAgent - The person's browser.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SubscriptionRequestResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsSubscriptionsRequest(subscriptionType: string, address?: string, campaignRef?: string, channel?: Channel, consentTextId?: string, contactId?: string, email?: string, firstName?: string, ip?: string, lastName?: string, locale?: string, pageUrl?: string, phone?: string, source?: MarketingConsentsSubscriptionsRequestSource, sourceRef?: string, userAgent?: string): Promise<Models.SubscriptionRequestResponse>;
    marketingConsentsSubscriptionsRequest(
        paramsOrFirst: { subscriptionType: string, address?: string, campaignRef?: string, channel?: Channel, consentTextId?: string, contactId?: string, email?: string, firstName?: string, ip?: string, lastName?: string, locale?: string, pageUrl?: string, phone?: string, source?: MarketingConsentsSubscriptionsRequestSource, sourceRef?: string, userAgent?: string } | string,
        ...rest: [(string)?, (string)?, (Channel)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (MarketingConsentsSubscriptionsRequestSource)?, (string)?, (string)?]    
    ): Promise<Models.SubscriptionRequestResponse> {
        let params: { subscriptionType: string, address?: string, campaignRef?: string, channel?: Channel, consentTextId?: string, contactId?: string, email?: string, firstName?: string, ip?: string, lastName?: string, locale?: string, pageUrl?: string, phone?: string, source?: MarketingConsentsSubscriptionsRequestSource, sourceRef?: string, userAgent?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { subscriptionType: string, address?: string, campaignRef?: string, channel?: Channel, consentTextId?: string, contactId?: string, email?: string, firstName?: string, ip?: string, lastName?: string, locale?: string, pageUrl?: string, phone?: string, source?: MarketingConsentsSubscriptionsRequestSource, sourceRef?: string, userAgent?: string };
        } else {
            params = {
                subscriptionType: paramsOrFirst as string,
                address: rest[0] as string,
                campaignRef: rest[1] as string,
                channel: rest[2] as Channel,
                consentTextId: rest[3] as string,
                contactId: rest[4] as string,
                email: rest[5] as string,
                firstName: rest[6] as string,
                ip: rest[7] as string,
                lastName: rest[8] as string,
                locale: rest[9] as string,
                pageUrl: rest[10] as string,
                phone: rest[11] as string,
                source: rest[12] as MarketingConsentsSubscriptionsRequestSource,
                sourceRef: rest[13] as string,
                userAgent: rest[14] as string            
            };
        }
        
        const subscriptionType = params.subscriptionType;
        const address = params.address;
        const campaignRef = params.campaignRef;
        const channel = params.channel;
        const consentTextId = params.consentTextId;
        const contactId = params.contactId;
        const email = params.email;
        const firstName = params.firstName;
        const ip = params.ip;
        const lastName = params.lastName;
        const locale = params.locale;
        const pageUrl = params.pageUrl;
        const phone = params.phone;
        const source = params.source;
        const sourceRef = params.sourceRef;
        const userAgent = params.userAgent;

        if (typeof subscriptionType === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriptionType"');
        }

        const apiPath = '/v1/marketing-consents/subscriptions/request';
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof consentTextId !== 'undefined') {
            apiPayload['consent_text_id'] = consentTextId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof ip !== 'undefined') {
            apiPayload['ip'] = ip;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof pageUrl !== 'undefined') {
            apiPayload['page_url'] = pageUrl;
        }
        if (typeof phone !== 'undefined') {
            apiPayload['phone'] = phone;
        }
        if (typeof source !== 'undefined') {
            apiPayload['source'] = source;
        }
        if (typeof sourceRef !== 'undefined') {
            apiPayload['source_ref'] = sourceRef;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
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
     * One subscription by id.
     *
     * @param {string} params.id - The subscription.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Subscription>}
     */
    marketingConsentsSubscriptionsGet(params: { id: string }): Promise<Models.Subscription>;
    /**
     * One subscription by id.
     *
     * @param {string} id - The subscription.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Subscription>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsSubscriptionsGet(id: string): Promise<Models.Subscription>;
    marketingConsentsSubscriptionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Subscription> {
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

        const apiPath = '/v1/marketing-consents/subscriptions/{id}'.replace('{id}', id);
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
     * Ends the subscription at once, writes the `withdrawn` proof (source admin) and pushes the address into the sequencer's suppression for the type. Withdrawing twice changes nothing.
     *
     * @param {string} params.id - The subscription.
     * @param {string} params.purchaseRequestId - 
     * @param {object[]} params.allocations - Optional: the request's allocations (the reserve's shape; an empty array is the same as none, and only cost_center_id is read), used only to classify its cost centres by budget type. A request holding no reservation whose every centre is tracking-only is then settled with nothing written; one naming a monetary centre, or naming none, is refused with 409 as before. Amounts are read from the ledger, never from here.
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.WithdrawResponse>}
     */
    marketingConsentsSubscriptionsWithdraw(params: { id: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string }): Promise<Models.WithdrawResponse>;
    /**
     * Ends the subscription at once, writes the `withdrawn` proof (source admin) and pushes the address into the sequencer's suppression for the type. Withdrawing twice changes nothing.
     *
     * @param {string} id - The subscription.
     * @param {string} purchaseRequestId - 
     * @param {object[]} allocations - Optional: the request's allocations (the reserve's shape; an empty array is the same as none, and only cost_center_id is read), used only to classify its cost centres by budget type. A request holding no reservation whose every centre is tracking-only is then settled with nothing written; one naming a monetary centre, or naming none, is refused with 409 as before. Amounts are read from the ledger, never from here.
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.WithdrawResponse>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    marketingConsentsSubscriptionsWithdraw(id: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string): Promise<Models.WithdrawResponse>;
    marketingConsentsSubscriptionsWithdraw(
        paramsOrFirst: { id: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string } | string,
        ...rest: [(string)?, (object[])?, (string)?, (string)?]    
    ): Promise<Models.WithdrawResponse> {
        let params: { id: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, purchaseRequestId: string, allocations?: object[], currency?: string, note?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                purchaseRequestId: rest[0] as string,
                allocations: rest[1] as object[],
                currency: rest[2] as string,
                note: rest[3] as string            
            };
        }
        
        const id = params.id;
        const purchaseRequestId = params.purchaseRequestId;
        const allocations = params.allocations;
        const currency = params.currency;
        const note = params.note;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }

        const apiPath = '/v1/marketing-consents/subscriptions/{id}/withdraw'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof allocations !== 'undefined') {
            apiPayload['allocations'] = Client.toWireKeys(allocations, {"costCenterId":{"wire":"cost_center_id","children":null}});
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
