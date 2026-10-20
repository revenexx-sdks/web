import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { Starter } from '../enums/starter';
import { TimezoneMode } from '../enums/timezone-mode';
import { Device } from '../enums/device';

export class MailingsMailings {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every mailing of this tenant. Filter `?folder=drafts|scheduled|sent|archived` for the four views, `?campaign_ref=` for the mailings a campaign claimed, `?state=` for one state.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.state - Keep only rows whose `state` equals this.
     * @param {string} params.folder - Keep only rows whose `folder` equals this.
     * @param {string} params.campaignRef - Keep only rows whose `campaign_ref` equals this.
     * @param {string} params.audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} params.subscriptionType - Keep only rows whose `subscription_type` equals this.
     * @param {string} params.templateKey - Keep only rows whose `template_key` equals this.
     * @param {string} params.starter - Keep only rows whose `starter` equals this.
     * @param {string} params.timezoneMode - Keep only rows whose `timezone_mode` equals this.
     * @param {string} params.duplicatedFromId - Keep only rows whose `duplicated_from_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, state?: string, folder?: string, campaignRef?: string, audienceId?: string, subscriptionType?: string, templateKey?: string, starter?: string, timezoneMode?: string, duplicatedFromId?: string }): Promise<{}>;
    /**
     * Every mailing of this tenant. Filter `?folder=drafts|scheduled|sent|archived` for the four views, `?campaign_ref=` for the mailings a campaign claimed, `?state=` for one state.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} state - Keep only rows whose `state` equals this.
     * @param {string} folder - Keep only rows whose `folder` equals this.
     * @param {string} campaignRef - Keep only rows whose `campaign_ref` equals this.
     * @param {string} audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} subscriptionType - Keep only rows whose `subscription_type` equals this.
     * @param {string} templateKey - Keep only rows whose `template_key` equals this.
     * @param {string} starter - Keep only rows whose `starter` equals this.
     * @param {string} timezoneMode - Keep only rows whose `timezone_mode` equals this.
     * @param {string} duplicatedFromId - Keep only rows whose `duplicated_from_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, state?: string, folder?: string, campaignRef?: string, audienceId?: string, subscriptionType?: string, templateKey?: string, starter?: string, timezoneMode?: string, duplicatedFromId?: string): Promise<{}>;
    mailingsMailingsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, state?: string, folder?: string, campaignRef?: string, audienceId?: string, subscriptionType?: string, templateKey?: string, starter?: string, timezoneMode?: string, duplicatedFromId?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, state?: string, folder?: string, campaignRef?: string, audienceId?: string, subscriptionType?: string, templateKey?: string, starter?: string, timezoneMode?: string, duplicatedFromId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, state?: string, folder?: string, campaignRef?: string, audienceId?: string, subscriptionType?: string, templateKey?: string, starter?: string, timezoneMode?: string, duplicatedFromId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                state: rest[4] as string,
                folder: rest[5] as string,
                campaignRef: rest[6] as string,
                audienceId: rest[7] as string,
                subscriptionType: rest[8] as string,
                templateKey: rest[9] as string,
                starter: rest[10] as string,
                timezoneMode: rest[11] as string,
                duplicatedFromId: rest[12] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const state = params.state;
        const folder = params.folder;
        const campaignRef = params.campaignRef;
        const audienceId = params.audienceId;
        const subscriptionType = params.subscriptionType;
        const templateKey = params.templateKey;
        const starter = params.starter;
        const timezoneMode = params.timezoneMode;
        const duplicatedFromId = params.duplicatedFromId;


        const apiPath = '/v1/mailings/mailings';
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
        if (typeof state !== 'undefined') {
            apiPayload['state'] = state;
        }
        if (typeof folder !== 'undefined') {
            apiPayload['folder'] = folder;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
        }
        if (typeof templateKey !== 'undefined') {
            apiPayload['template_key'] = templateKey;
        }
        if (typeof starter !== 'undefined') {
            apiPayload['starter'] = starter;
        }
        if (typeof timezoneMode !== 'undefined') {
            apiPayload['timezone_mode'] = timezoneMode;
        }
        if (typeof duplicatedFromId !== 'undefined') {
            apiPayload['duplicated_from_id'] = duplicatedFromId;
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
     * A new draft. The sender and its name default to the market settings when not given.
     *
     * @param {string} params.name - What the marketer calls the mailing, e.g. Black Week Newsletter. Not shown to recipients.
     * @param {string} params.audienceId - The audiences app audience the mailing goes to.
     * @param {string} params.campaignRef - The campaign that claimed this mailing. Written by the campaigns app; filter `?campaign_ref=` to list a campaign mails.
     * @param {string} params.currency - Three-letter currency code, e.g. EUR.
     * @param {string[]} params.excludeAudienceIds - Audiences whose members do not receive the mailing, as a list of ids (at most 10).
     * @param {boolean} params.graymail - Hold back recipients who received many marketing mails without a click. On by default.
     * @param {number} params.graymailSends - Overrides the graymail threshold of the settings for this mailing.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.previewText - The line mail clients show after the subject. At most 200 characters.
     * @param {string} params.replyTo - Where replies go, if not to the sender.
     * @param {string} params.sendAt - When the mailing goes out. Empty: as soon as it is scheduled.
     * @param {string} params.sender - The From address. Empty: the market default sender from the settings.
     * @param {string} params.senderName - The name shown next to the From address.
     * @param {Starter} params.starter - Where the design started from: blank, simple, newsletter or promotion.
     * @param {string} params.subject - The subject line recipients see. At most 150 characters.
     * @param {string} params.subscriptionType - The marketing-consents subscription type code recipients must be allowed for.
     * @param {string} params.templateKey - The key of the sequencer template of message class marketing the mailing renders.
     * @param {TimezoneMode} params.timezoneMode - `tenant`: everybody at send_at. `recipient`: send_at read as wall-clock time and applied in each recipient market time zone.
     * @param {string} params.voucherBatchId - The promotions voucher batch every recipient draws one code from at send time.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsCreate(params: { name: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string }): Promise<Models.Mailing>;
    /**
     * A new draft. The sender and its name default to the market settings when not given.
     *
     * @param {string} name - What the marketer calls the mailing, e.g. Black Week Newsletter. Not shown to recipients.
     * @param {string} audienceId - The audiences app audience the mailing goes to.
     * @param {string} campaignRef - The campaign that claimed this mailing. Written by the campaigns app; filter `?campaign_ref=` to list a campaign mails.
     * @param {string} currency - Three-letter currency code, e.g. EUR.
     * @param {string[]} excludeAudienceIds - Audiences whose members do not receive the mailing, as a list of ids (at most 10).
     * @param {boolean} graymail - Hold back recipients who received many marketing mails without a click. On by default.
     * @param {number} graymailSends - Overrides the graymail threshold of the settings for this mailing.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} previewText - The line mail clients show after the subject. At most 200 characters.
     * @param {string} replyTo - Where replies go, if not to the sender.
     * @param {string} sendAt - When the mailing goes out. Empty: as soon as it is scheduled.
     * @param {string} sender - The From address. Empty: the market default sender from the settings.
     * @param {string} senderName - The name shown next to the From address.
     * @param {Starter} starter - Where the design started from: blank, simple, newsletter or promotion.
     * @param {string} subject - The subject line recipients see. At most 150 characters.
     * @param {string} subscriptionType - The marketing-consents subscription type code recipients must be allowed for.
     * @param {string} templateKey - The key of the sequencer template of message class marketing the mailing renders.
     * @param {TimezoneMode} timezoneMode - `tenant`: everybody at send_at. `recipient`: send_at read as wall-clock time and applied in each recipient market time zone.
     * @param {string} voucherBatchId - The promotions voucher batch every recipient draws one code from at send time.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsCreate(name: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string): Promise<Models.Mailing>;
    mailingsMailingsCreate(
        paramsOrFirst: { name: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (boolean)?, (number)?, (any)?, (string)?, (string)?, (string)?, (string)?, (string)?, (Starter)?, (string)?, (string)?, (string)?, (TimezoneMode)?, (string)?]    
    ): Promise<Models.Mailing> {
        let params: { name: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                audienceId: rest[0] as string,
                campaignRef: rest[1] as string,
                currency: rest[2] as string,
                excludeAudienceIds: rest[3] as string[],
                graymail: rest[4] as boolean,
                graymailSends: rest[5] as number,
                metadata: rest[6] as any,
                previewText: rest[7] as string,
                replyTo: rest[8] as string,
                sendAt: rest[9] as string,
                sender: rest[10] as string,
                senderName: rest[11] as string,
                starter: rest[12] as Starter,
                subject: rest[13] as string,
                subscriptionType: rest[14] as string,
                templateKey: rest[15] as string,
                timezoneMode: rest[16] as TimezoneMode,
                voucherBatchId: rest[17] as string            
            };
        }
        
        const name = params.name;
        const audienceId = params.audienceId;
        const campaignRef = params.campaignRef;
        const currency = params.currency;
        const excludeAudienceIds = params.excludeAudienceIds;
        const graymail = params.graymail;
        const graymailSends = params.graymailSends;
        const metadata = params.metadata;
        const previewText = params.previewText;
        const replyTo = params.replyTo;
        const sendAt = params.sendAt;
        const sender = params.sender;
        const senderName = params.senderName;
        const starter = params.starter;
        const subject = params.subject;
        const subscriptionType = params.subscriptionType;
        const templateKey = params.templateKey;
        const timezoneMode = params.timezoneMode;
        const voucherBatchId = params.voucherBatchId;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/mailings/mailings';
        const apiPayload: Payload = {};
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof excludeAudienceIds !== 'undefined') {
            apiPayload['exclude_audience_ids'] = excludeAudienceIds;
        }
        if (typeof graymail !== 'undefined') {
            apiPayload['graymail'] = graymail;
        }
        if (typeof graymailSends !== 'undefined') {
            apiPayload['graymail_sends'] = graymailSends;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof previewText !== 'undefined') {
            apiPayload['preview_text'] = previewText;
        }
        if (typeof replyTo !== 'undefined') {
            apiPayload['reply_to'] = replyTo;
        }
        if (typeof sendAt !== 'undefined') {
            apiPayload['send_at'] = sendAt;
        }
        if (typeof sender !== 'undefined') {
            apiPayload['sender'] = sender;
        }
        if (typeof senderName !== 'undefined') {
            apiPayload['sender_name'] = senderName;
        }
        if (typeof starter !== 'undefined') {
            apiPayload['starter'] = starter;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
        }
        if (typeof templateKey !== 'undefined') {
            apiPayload['template_key'] = templateKey;
        }
        if (typeof timezoneMode !== 'undefined') {
            apiPayload['timezone_mode'] = timezoneMode;
        }
        if (typeof voucherBatchId !== 'undefined') {
            apiPayload['voucher_batch_id'] = voucherBatchId;
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
     * Every mailing in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    mailingsMailingsEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/mailings/mailings/trash/empty';
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
     * What the nightly purge does, callable by hand: every mailing in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsPurge(): Promise<{}> {

        const apiPath = '/v1/mailings/mailings/trash/purge';
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
     * The first DELETE moves the mailing into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Only a mailing nobody received goes into the trash; a scheduled, sending or sent one is refused (`trash_blocked`, blocker `mailing_sent`) — cancel or archive it instead. A DELETE on a mailing already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the mailing into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Only a mailing nobody received goes into the trash; a scheduled, sending or sent one is refused (`trash_blocked`, blocker `mailing_sent`) — cancel or archive it instead. A DELETE on a mailing already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsDelete(id: string): Promise<{}>;
    mailingsMailingsDelete(
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

        const apiPath = '/v1/mailings/mailings/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsGet(params: { id: string }): Promise<Models.Mailing>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsGet(id: string): Promise<Models.Mailing>;
    mailingsMailingsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Mailing> {
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

        const apiPath = '/v1/mailings/mailings/{id}'.replace('{id}', id);
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
     * A draft (or a cancelled or failed mailing nobody received) changes freely. In every other state only `name`, `campaign_ref` and `metadata` change — the campaigns app claims a mailing in any state.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.audienceId - The audiences app audience the mailing goes to.
     * @param {string} params.campaignRef - The campaign that claimed this mailing. Written by the campaigns app; filter `?campaign_ref=` to list a campaign mails.
     * @param {string} params.currency - Three-letter currency code, e.g. EUR.
     * @param {string[]} params.excludeAudienceIds - Audiences whose members do not receive the mailing, as a list of ids (at most 10).
     * @param {boolean} params.graymail - Hold back recipients who received many marketing mails without a click. On by default.
     * @param {number} params.graymailSends - Overrides the graymail threshold of the settings for this mailing.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - What the marketer calls the mailing, e.g. Black Week Newsletter. Not shown to recipients.
     * @param {string} params.previewText - The line mail clients show after the subject. At most 200 characters.
     * @param {string} params.replyTo - Where replies go, if not to the sender.
     * @param {string} params.sendAt - When the mailing goes out. Empty: as soon as it is scheduled.
     * @param {string} params.sender - The From address. Empty: the market default sender from the settings.
     * @param {string} params.senderName - The name shown next to the From address.
     * @param {Starter} params.starter - Where the design started from: blank, simple, newsletter or promotion.
     * @param {string} params.subject - The subject line recipients see. At most 150 characters.
     * @param {string} params.subscriptionType - The marketing-consents subscription type code recipients must be allowed for.
     * @param {string} params.templateKey - The key of the sequencer template of message class marketing the mailing renders.
     * @param {TimezoneMode} params.timezoneMode - `tenant`: everybody at send_at. `recipient`: send_at read as wall-clock time and applied in each recipient market time zone.
     * @param {string} params.voucherBatchId - The promotions voucher batch every recipient draws one code from at send time.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsUpdate(params: { id: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, name?: string, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string }): Promise<Models.Mailing>;
    /**
     * A draft (or a cancelled or failed mailing nobody received) changes freely. In every other state only `name`, `campaign_ref` and `metadata` change — the campaigns app claims a mailing in any state.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} audienceId - The audiences app audience the mailing goes to.
     * @param {string} campaignRef - The campaign that claimed this mailing. Written by the campaigns app; filter `?campaign_ref=` to list a campaign mails.
     * @param {string} currency - Three-letter currency code, e.g. EUR.
     * @param {string[]} excludeAudienceIds - Audiences whose members do not receive the mailing, as a list of ids (at most 10).
     * @param {boolean} graymail - Hold back recipients who received many marketing mails without a click. On by default.
     * @param {number} graymailSends - Overrides the graymail threshold of the settings for this mailing.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - What the marketer calls the mailing, e.g. Black Week Newsletter. Not shown to recipients.
     * @param {string} previewText - The line mail clients show after the subject. At most 200 characters.
     * @param {string} replyTo - Where replies go, if not to the sender.
     * @param {string} sendAt - When the mailing goes out. Empty: as soon as it is scheduled.
     * @param {string} sender - The From address. Empty: the market default sender from the settings.
     * @param {string} senderName - The name shown next to the From address.
     * @param {Starter} starter - Where the design started from: blank, simple, newsletter or promotion.
     * @param {string} subject - The subject line recipients see. At most 150 characters.
     * @param {string} subscriptionType - The marketing-consents subscription type code recipients must be allowed for.
     * @param {string} templateKey - The key of the sequencer template of message class marketing the mailing renders.
     * @param {TimezoneMode} timezoneMode - `tenant`: everybody at send_at. `recipient`: send_at read as wall-clock time and applied in each recipient market time zone.
     * @param {string} voucherBatchId - The promotions voucher batch every recipient draws one code from at send time.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsUpdate(id: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, name?: string, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string): Promise<Models.Mailing>;
    mailingsMailingsUpdate(
        paramsOrFirst: { id: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, name?: string, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (boolean)?, (number)?, (any)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (Starter)?, (string)?, (string)?, (string)?, (TimezoneMode)?, (string)?]    
    ): Promise<Models.Mailing> {
        let params: { id: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, name?: string, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, audienceId?: string, campaignRef?: string, currency?: string, excludeAudienceIds?: string[], graymail?: boolean, graymailSends?: number, metadata?: any, name?: string, previewText?: string, replyTo?: string, sendAt?: string, sender?: string, senderName?: string, starter?: Starter, subject?: string, subscriptionType?: string, templateKey?: string, timezoneMode?: TimezoneMode, voucherBatchId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                audienceId: rest[0] as string,
                campaignRef: rest[1] as string,
                currency: rest[2] as string,
                excludeAudienceIds: rest[3] as string[],
                graymail: rest[4] as boolean,
                graymailSends: rest[5] as number,
                metadata: rest[6] as any,
                name: rest[7] as string,
                previewText: rest[8] as string,
                replyTo: rest[9] as string,
                sendAt: rest[10] as string,
                sender: rest[11] as string,
                senderName: rest[12] as string,
                starter: rest[13] as Starter,
                subject: rest[14] as string,
                subscriptionType: rest[15] as string,
                templateKey: rest[16] as string,
                timezoneMode: rest[17] as TimezoneMode,
                voucherBatchId: rest[18] as string            
            };
        }
        
        const id = params.id;
        const audienceId = params.audienceId;
        const campaignRef = params.campaignRef;
        const currency = params.currency;
        const excludeAudienceIds = params.excludeAudienceIds;
        const graymail = params.graymail;
        const graymailSends = params.graymailSends;
        const metadata = params.metadata;
        const name = params.name;
        const previewText = params.previewText;
        const replyTo = params.replyTo;
        const sendAt = params.sendAt;
        const sender = params.sender;
        const senderName = params.senderName;
        const starter = params.starter;
        const subject = params.subject;
        const subscriptionType = params.subscriptionType;
        const templateKey = params.templateKey;
        const timezoneMode = params.timezoneMode;
        const voucherBatchId = params.voucherBatchId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/mailings/mailings/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof excludeAudienceIds !== 'undefined') {
            apiPayload['exclude_audience_ids'] = excludeAudienceIds;
        }
        if (typeof graymail !== 'undefined') {
            apiPayload['graymail'] = graymail;
        }
        if (typeof graymailSends !== 'undefined') {
            apiPayload['graymail_sends'] = graymailSends;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof previewText !== 'undefined') {
            apiPayload['preview_text'] = previewText;
        }
        if (typeof replyTo !== 'undefined') {
            apiPayload['reply_to'] = replyTo;
        }
        if (typeof sendAt !== 'undefined') {
            apiPayload['send_at'] = sendAt;
        }
        if (typeof sender !== 'undefined') {
            apiPayload['sender'] = sender;
        }
        if (typeof senderName !== 'undefined') {
            apiPayload['sender_name'] = senderName;
        }
        if (typeof starter !== 'undefined') {
            apiPayload['starter'] = starter;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof subscriptionType !== 'undefined') {
            apiPayload['subscription_type'] = subscriptionType;
        }
        if (typeof templateKey !== 'undefined') {
            apiPayload['template_key'] = templateKey;
        }
        if (typeof timezoneMode !== 'undefined') {
            apiPayload['timezone_mode'] = timezoneMode;
        }
        if (typeof voucherBatchId !== 'undefined') {
            apiPayload['voucher_batch_id'] = voucherBatchId;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsArchive(params: { id: string, data: object }): Promise<Models.Mailing>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsArchive(id: string, data: object): Promise<Models.Mailing>;
    mailingsMailingsArchive(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Mailing> {
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

        const apiPath = '/v1/mailings/mailings/{id}/archive'.replace('{id}', id);
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
     * Nothing more is handed to the sequencer. Recipients already handed over keep their mail.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsCancel(params: { id: string, data: object }): Promise<Models.Mailing>;
    /**
     * Nothing more is handed to the sequencer. Recipients already handed over keep their mail.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsCancel(id: string, data: object): Promise<Models.Mailing>;
    mailingsMailingsCancel(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Mailing> {
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

        const apiPath = '/v1/mailings/mailings/{id}/cancel'.replace('{id}', id);
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
     * Every item with ok, severity (error or warning), state (ok, warning or error), its label and the problem as a sentence in the caller language (Accept-Language; German unless English is asked for), and where to put it right (action: route and label); errors first, then warnings: subject, preview text, sender, audience, subscription type, marketing template, footer address, unsubscribe link, links, image descriptions, voucher batch, send time. `ready` is true when no error stands.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsChecklist(params: { id: string }): Promise<{}>;
    /**
     * Every item with ok, severity (error or warning), state (ok, warning or error), its label and the problem as a sentence in the caller language (Accept-Language; German unless English is asked for), and where to put it right (action: route and label); errors first, then warnings: subject, preview text, sender, audience, subscription type, marketing template, footer address, unsubscribe link, links, image descriptions, voucher batch, send time. `ready` is true when no error stands.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsChecklist(id: string): Promise<{}>;
    mailingsMailingsChecklist(
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

        const apiPath = '/v1/mailings/mailings/{id}/checklist'.replace('{id}', id);
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
     * Any mailing, sent ones included. The copy keeps content, audience and settings, and drops the send time and the campaign.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsDuplicate(params: { id: string, data: object }): Promise<Models.Mailing>;
    /**
     * Any mailing, sent ones included. The copy keeps content, audience and settings, and drops the send time and the campaign.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsDuplicate(id: string, data: object): Promise<Models.Mailing>;
    mailingsMailingsDuplicate(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Mailing> {
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

        const apiPath = '/v1/mailings/mailings/{id}/duplicate'.replace('{id}', id);
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
     * Products priced for the market named, the footer of that market, a sample voucher code. No code is drawn and nothing is sent.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.contactId - 
     * @param {Device} params.device - 
     * @param {string} params.email - 
     * @param {string} params.firstName - 
     * @param {string} params.lastName - 
     * @param {string} params.locale - 
     * @param {string} params.market - The market code to price and render for.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsPreview(params: { id: string, contactId?: string, device?: Device, email?: string, firstName?: string, lastName?: string, locale?: string, market?: string }): Promise<{}>;
    /**
     * Products priced for the market named, the footer of that market, a sample voucher code. No code is drawn and nothing is sent.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - 
     * @param {Device} device - 
     * @param {string} email - 
     * @param {string} firstName - 
     * @param {string} lastName - 
     * @param {string} locale - 
     * @param {string} market - The market code to price and render for.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsPreview(id: string, contactId?: string, device?: Device, email?: string, firstName?: string, lastName?: string, locale?: string, market?: string): Promise<{}>;
    mailingsMailingsPreview(
        paramsOrFirst: { id: string, contactId?: string, device?: Device, email?: string, firstName?: string, lastName?: string, locale?: string, market?: string } | string,
        ...rest: [(string)?, (Device)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, contactId?: string, device?: Device, email?: string, firstName?: string, lastName?: string, locale?: string, market?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, device?: Device, email?: string, firstName?: string, lastName?: string, locale?: string, market?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                device: rest[1] as Device,
                email: rest[2] as string,
                firstName: rest[3] as string,
                lastName: rest[4] as string,
                locale: rest[5] as string,
                market: rest[6] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const device = params.device;
        const email = params.email;
        const firstName = params.firstName;
        const lastName = params.lastName;
        const locale = params.locale;
        const market = params.market;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/mailings/mailings/{id}/preview'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof device !== 'undefined') {
            apiPayload['device'] = device;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof firstName !== 'undefined') {
            apiPayload['first_name'] = firstName;
        }
        if (typeof lastName !== 'undefined') {
            apiPayload['last_name'] = lastName;
        }
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
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
     * The audience member and eligible counts, the excluded audiences, and at most how many addresses graymail protection would hold back. `bars` carries the same counts as rows of label and value, worded in the caller language.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsReach(params: { id: string }): Promise<{}>;
    /**
     * The audience member and eligible counts, the excluded audiences, and at most how many addresses graymail protection would hold back. `bars` carries the same counts as rows of label and value, worded in the caller language.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsReach(id: string): Promise<{}>;
    mailingsMailingsReach(
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

        const apiPath = '/v1/mailings/mailings/{id}/reach'.replace('{id}', id);
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
     * Clears the trash marks on the mailing. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    mailingsMailingsRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the mailing. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsRestore(id: string): Promise<Models.TrashRestoreResult>;
    mailingsMailingsRestore(
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

        const apiPath = '/v1/mailings/mailings/{id}/restore'.replace('{id}', id);
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
     * Runs the checklist and refuses while an error stands. `send_at` empty or `now` sends at once (the first chunk is prepared in this call); a time sends then, in the shop or recipient time zone.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.sendAt - An ISO time, `now`, or null for at once. Omitted: the mailing own send_at.
     * @param {boolean} params.start - false leaves even a send-at-once mailing to the next pipeline run.
     * @param {TimezoneMode} params.timezoneMode - Overrides the mailing time zone mode.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsSchedule(params: { id: string, sendAt?: string, start?: boolean, timezoneMode?: TimezoneMode }): Promise<Models.Mailing>;
    /**
     * Runs the checklist and refuses while an error stands. `send_at` empty or `now` sends at once (the first chunk is prepared in this call); a time sends then, in the shop or recipient time zone.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} sendAt - An ISO time, `now`, or null for at once. Omitted: the mailing own send_at.
     * @param {boolean} start - false leaves even a send-at-once mailing to the next pipeline run.
     * @param {TimezoneMode} timezoneMode - Overrides the mailing time zone mode.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsSchedule(id: string, sendAt?: string, start?: boolean, timezoneMode?: TimezoneMode): Promise<Models.Mailing>;
    mailingsMailingsSchedule(
        paramsOrFirst: { id: string, sendAt?: string, start?: boolean, timezoneMode?: TimezoneMode } | string,
        ...rest: [(string)?, (boolean)?, (TimezoneMode)?]    
    ): Promise<Models.Mailing> {
        let params: { id: string, sendAt?: string, start?: boolean, timezoneMode?: TimezoneMode };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, sendAt?: string, start?: boolean, timezoneMode?: TimezoneMode };
        } else {
            params = {
                id: paramsOrFirst as string,
                sendAt: rest[0] as string,
                start: rest[1] as boolean,
                timezoneMode: rest[2] as TimezoneMode            
            };
        }
        
        const id = params.id;
        const sendAt = params.sendAt;
        const start = params.start;
        const timezoneMode = params.timezoneMode;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/mailings/mailings/{id}/schedule'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof sendAt !== 'undefined') {
            apiPayload['send_at'] = sendAt;
        }
        if (typeof start !== 'undefined') {
            apiPayload['start'] = start;
        }
        if (typeof timezoneMode !== 'undefined') {
            apiPayload['timezone_mode'] = timezoneMode;
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
     * At most ten addresses, from the request or the test recipients setting. Marked as a test, with a sample voucher code; counts in no figure.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.locale - 
     * @param {string} params.market - 
     * @param {string[]} params.recipients - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsMailingsTest(params: { id: string, locale?: string, market?: string, recipients?: string[] }): Promise<{}>;
    /**
     * At most ten addresses, from the request or the test recipients setting. Marked as a test, with a sample voucher code; counts in no figure.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} locale - 
     * @param {string} market - 
     * @param {string[]} recipients - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsTest(id: string, locale?: string, market?: string, recipients?: string[]): Promise<{}>;
    mailingsMailingsTest(
        paramsOrFirst: { id: string, locale?: string, market?: string, recipients?: string[] } | string,
        ...rest: [(string)?, (string)?, (string[])?]    
    ): Promise<{}> {
        let params: { id: string, locale?: string, market?: string, recipients?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, locale?: string, market?: string, recipients?: string[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                locale: rest[0] as string,
                market: rest[1] as string,
                recipients: rest[2] as string[]            
            };
        }
        
        const id = params.id;
        const locale = params.locale;
        const market = params.market;
        const recipients = params.recipients;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/mailings/mailings/{id}/test'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof locale !== 'undefined') {
            apiPayload['locale'] = locale;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof recipients !== 'undefined') {
            apiPayload['recipients'] = recipients;
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     */
    mailingsMailingsUnarchive(params: { id: string, data: object }): Promise<Models.Mailing>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.Mailing>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    mailingsMailingsUnarchive(id: string, data: object): Promise<Models.Mailing>;
    mailingsMailingsUnarchive(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<Models.Mailing> {
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

        const apiPath = '/v1/mailings/mailings/{id}/unarchive'.replace('{id}', id);
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
