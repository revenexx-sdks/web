import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Priority } from '../enums/priority';

export class Messaging {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all messages from the current Revenexx project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MessageList>}
     */
    messagingListMessages(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.MessageList>;
    /**
     * Get a list of all messages from the current Revenexx project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.MessageList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListMessages(queries?: string[], search?: string, total?: boolean): Promise<Models.MessageList>;
    messagingListMessages(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.MessageList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/v1/messaging/messages';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new email message.
     *
     * @param {string} params.content - Email Content.
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.subject - Email Subject.
     * @param {string[]} params.attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string[]} params.bcc - Array of target IDs to be added as BCC.
     * @param {string[]} params.cc - Array of target IDs to be added as CC.
     * @param {boolean} params.draft - Is message a draft
     * @param {boolean} params.html - Is content of type HTML
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     */
    messagingCreateEmail(params: { content: string, messageId: string, subject: string, attachments?: string[], bcc?: string[], cc?: string[], draft?: boolean, html?: boolean, scheduledAt?: string, targets?: string[], topics?: string[], users?: string[] }): Promise<Models.Message>;
    /**
     * Create a new email message.
     *
     * @param {string} content - Email Content.
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} subject - Email Subject.
     * @param {string[]} attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string[]} bcc - Array of target IDs to be added as BCC.
     * @param {string[]} cc - Array of target IDs to be added as CC.
     * @param {boolean} draft - Is message a draft
     * @param {boolean} html - Is content of type HTML
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateEmail(content: string, messageId: string, subject: string, attachments?: string[], bcc?: string[], cc?: string[], draft?: boolean, html?: boolean, scheduledAt?: string, targets?: string[], topics?: string[], users?: string[]): Promise<Models.Message>;
    messagingCreateEmail(
        paramsOrFirst: { content: string, messageId: string, subject: string, attachments?: string[], bcc?: string[], cc?: string[], draft?: boolean, html?: boolean, scheduledAt?: string, targets?: string[], topics?: string[], users?: string[] } | string,
        ...rest: [(string)?, (string)?, (string[])?, (string[])?, (string[])?, (boolean)?, (boolean)?, (string)?, (string[])?, (string[])?, (string[])?]    
    ): Promise<Models.Message> {
        let params: { content: string, messageId: string, subject: string, attachments?: string[], bcc?: string[], cc?: string[], draft?: boolean, html?: boolean, scheduledAt?: string, targets?: string[], topics?: string[], users?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { content: string, messageId: string, subject: string, attachments?: string[], bcc?: string[], cc?: string[], draft?: boolean, html?: boolean, scheduledAt?: string, targets?: string[], topics?: string[], users?: string[] };
        } else {
            params = {
                content: paramsOrFirst as string,
                messageId: rest[0] as string,
                subject: rest[1] as string,
                attachments: rest[2] as string[],
                bcc: rest[3] as string[],
                cc: rest[4] as string[],
                draft: rest[5] as boolean,
                html: rest[6] as boolean,
                scheduledAt: rest[7] as string,
                targets: rest[8] as string[],
                topics: rest[9] as string[],
                users: rest[10] as string[]            
            };
        }
        
        const content = params.content;
        const messageId = params.messageId;
        const subject = params.subject;
        const attachments = params.attachments;
        const bcc = params.bcc;
        const cc = params.cc;
        const draft = params.draft;
        const html = params.html;
        const scheduledAt = params.scheduledAt;
        const targets = params.targets;
        const topics = params.topics;
        const users = params.users;

        if (typeof content === 'undefined') {
            throw new RevenexxException('Missing required parameter: "content"');
        }
        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }
        if (typeof subject === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subject"');
        }

        const apiPath = '/v1/messaging/messages/email';
        const payload: Payload = {};
        if (typeof attachments !== 'undefined') {
            payload['attachments'] = attachments;
        }
        if (typeof bcc !== 'undefined') {
            payload['bcc'] = bcc;
        }
        if (typeof cc !== 'undefined') {
            payload['cc'] = cc;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof html !== 'undefined') {
            payload['html'] = html;
        }
        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string[]} params.bcc - Array of target IDs to be added as BCC.
     * @param {string[]} params.cc - Array of target IDs to be added as CC.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {boolean} params.html - Is content of type HTML
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string} params.subject - Email Subject.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     */
    messagingUpdateEmail(params: { messageId: string, attachments?: string[], bcc?: string[], cc?: string[], content?: string, draft?: boolean, html?: boolean, scheduledAt?: string, subject?: string, targets?: string[], topics?: string[], users?: string[] }): Promise<Models.Message>;
    /**
     * Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string[]} bcc - Array of target IDs to be added as BCC.
     * @param {string[]} cc - Array of target IDs to be added as CC.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {boolean} html - Is content of type HTML
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string} subject - Email Subject.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateEmail(messageId: string, attachments?: string[], bcc?: string[], cc?: string[], content?: string, draft?: boolean, html?: boolean, scheduledAt?: string, subject?: string, targets?: string[], topics?: string[], users?: string[]): Promise<Models.Message>;
    messagingUpdateEmail(
        paramsOrFirst: { messageId: string, attachments?: string[], bcc?: string[], cc?: string[], content?: string, draft?: boolean, html?: boolean, scheduledAt?: string, subject?: string, targets?: string[], topics?: string[], users?: string[] } | string,
        ...rest: [(string[])?, (string[])?, (string[])?, (string)?, (boolean)?, (boolean)?, (string)?, (string)?, (string[])?, (string[])?, (string[])?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, attachments?: string[], bcc?: string[], cc?: string[], content?: string, draft?: boolean, html?: boolean, scheduledAt?: string, subject?: string, targets?: string[], topics?: string[], users?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, attachments?: string[], bcc?: string[], cc?: string[], content?: string, draft?: boolean, html?: boolean, scheduledAt?: string, subject?: string, targets?: string[], topics?: string[], users?: string[] };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                attachments: rest[0] as string[],
                bcc: rest[1] as string[],
                cc: rest[2] as string[],
                content: rest[3] as string,
                draft: rest[4] as boolean,
                html: rest[5] as boolean,
                scheduledAt: rest[6] as string,
                subject: rest[7] as string,
                targets: rest[8] as string[],
                topics: rest[9] as string[],
                users: rest[10] as string[]            
            };
        }
        
        const messageId = params.messageId;
        const attachments = params.attachments;
        const bcc = params.bcc;
        const cc = params.cc;
        const content = params.content;
        const draft = params.draft;
        const html = params.html;
        const scheduledAt = params.scheduledAt;
        const subject = params.subject;
        const targets = params.targets;
        const topics = params.topics;
        const users = params.users;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/email/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof attachments !== 'undefined') {
            payload['attachments'] = attachments;
        }
        if (typeof bcc !== 'undefined') {
            payload['bcc'] = bcc;
        }
        if (typeof cc !== 'undefined') {
            payload['cc'] = cc;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof html !== 'undefined') {
            payload['html'] = html;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new push notification.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.action - Action for push notification.
     * @param {number} params.badge - Badge for push notification. Available only for iOS Platform.
     * @param {string} params.body - Body for push notification.
     * @param {string} params.color - Color for push notification. Available only for Android Platform.
     * @param {boolean} params.contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} params.critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {object} params.data - Additional key-value pair data for push notification.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.icon - Icon for push notification. Available only for Android and Web Platform.
     * @param {string} params.image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {Priority} params.priority - Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string} params.sound - Sound for push notification. Available only for Android and iOS Platform.
     * @param {string} params.tag - Tag for push notification. Available only for Android Platform.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.title - Title for push notification.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     */
    messagingCreatePush(params: { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] }): Promise<Models.Message>;
    /**
     * Create a new push notification.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} action - Action for push notification.
     * @param {number} badge - Badge for push notification. Available only for iOS Platform.
     * @param {string} body - Body for push notification.
     * @param {string} color - Color for push notification. Available only for Android Platform.
     * @param {boolean} contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {object} data - Additional key-value pair data for push notification.
     * @param {boolean} draft - Is message a draft
     * @param {string} icon - Icon for push notification. Available only for Android and Web Platform.
     * @param {string} image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {Priority} priority - Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string} sound - Sound for push notification. Available only for Android and iOS Platform.
     * @param {string} tag - Tag for push notification. Available only for Android Platform.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} title - Title for push notification.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreatePush(messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[]): Promise<Models.Message>;
    messagingCreatePush(
        paramsOrFirst: { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] } | string,
        ...rest: [(string)?, (number)?, (string)?, (string)?, (boolean)?, (boolean)?, (object)?, (boolean)?, (string)?, (string)?, (Priority)?, (string)?, (string)?, (string)?, (string[])?, (string)?, (string[])?, (string[])?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                action: rest[0] as string,
                badge: rest[1] as number,
                body: rest[2] as string,
                color: rest[3] as string,
                contentAvailable: rest[4] as boolean,
                critical: rest[5] as boolean,
                data: rest[6] as object,
                draft: rest[7] as boolean,
                icon: rest[8] as string,
                image: rest[9] as string,
                priority: rest[10] as Priority,
                scheduledAt: rest[11] as string,
                sound: rest[12] as string,
                tag: rest[13] as string,
                targets: rest[14] as string[],
                title: rest[15] as string,
                topics: rest[16] as string[],
                users: rest[17] as string[]            
            };
        }
        
        const messageId = params.messageId;
        const action = params.action;
        const badge = params.badge;
        const body = params.body;
        const color = params.color;
        const contentAvailable = params.contentAvailable;
        const critical = params.critical;
        const data = params.data;
        const draft = params.draft;
        const icon = params.icon;
        const image = params.image;
        const priority = params.priority;
        const scheduledAt = params.scheduledAt;
        const sound = params.sound;
        const tag = params.tag;
        const targets = params.targets;
        const title = params.title;
        const topics = params.topics;
        const users = params.users;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/push';
        const payload: Payload = {};
        if (typeof action !== 'undefined') {
            payload['action'] = action;
        }
        if (typeof badge !== 'undefined') {
            payload['badge'] = badge;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof contentAvailable !== 'undefined') {
            payload['contentAvailable'] = contentAvailable;
        }
        if (typeof critical !== 'undefined') {
            payload['critical'] = critical;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof icon !== 'undefined') {
            payload['icon'] = icon;
        }
        if (typeof image !== 'undefined') {
            payload['image'] = image;
        }
        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof sound !== 'undefined') {
            payload['sound'] = sound;
        }
        if (typeof tag !== 'undefined') {
            payload['tag'] = tag;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof title !== 'undefined') {
            payload['title'] = title;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @param {string} params.action - Action for push notification.
     * @param {number} params.badge - Badge for push notification. Available only for iOS platforms.
     * @param {string} params.body - Body for push notification.
     * @param {string} params.color - Color for push notification. Available only for Android platforms.
     * @param {boolean} params.contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} params.critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {object} params.data - Additional Data for push notification.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.icon - Icon for push notification. Available only for Android and Web platforms.
     * @param {string} params.image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {Priority} params.priority - Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string} params.sound - Sound for push notification. Available only for Android and iOS platforms.
     * @param {string} params.tag - Tag for push notification. Available only for Android platforms.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.title - Title for push notification.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     */
    messagingUpdatePush(params: { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] }): Promise<Models.Message>;
    /**
     * Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId - Message ID.
     * @param {string} action - Action for push notification.
     * @param {number} badge - Badge for push notification. Available only for iOS platforms.
     * @param {string} body - Body for push notification.
     * @param {string} color - Color for push notification. Available only for Android platforms.
     * @param {boolean} contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {object} data - Additional Data for push notification.
     * @param {boolean} draft - Is message a draft
     * @param {string} icon - Icon for push notification. Available only for Android and Web platforms.
     * @param {string} image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {Priority} priority - Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string} sound - Sound for push notification. Available only for Android and iOS platforms.
     * @param {string} tag - Tag for push notification. Available only for Android platforms.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} title - Title for push notification.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdatePush(messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[]): Promise<Models.Message>;
    messagingUpdatePush(
        paramsOrFirst: { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] } | string,
        ...rest: [(string)?, (number)?, (string)?, (string)?, (boolean)?, (boolean)?, (object)?, (boolean)?, (string)?, (string)?, (Priority)?, (string)?, (string)?, (string)?, (string[])?, (string)?, (string[])?, (string[])?]    
    ): Promise<Models.Message> {
        let params: { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, action?: string, badge?: number, body?: string, color?: string, contentAvailable?: boolean, critical?: boolean, data?: object, draft?: boolean, icon?: string, image?: string, priority?: Priority, scheduledAt?: string, sound?: string, tag?: string, targets?: string[], title?: string, topics?: string[], users?: string[] };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                action: rest[0] as string,
                badge: rest[1] as number,
                body: rest[2] as string,
                color: rest[3] as string,
                contentAvailable: rest[4] as boolean,
                critical: rest[5] as boolean,
                data: rest[6] as object,
                draft: rest[7] as boolean,
                icon: rest[8] as string,
                image: rest[9] as string,
                priority: rest[10] as Priority,
                scheduledAt: rest[11] as string,
                sound: rest[12] as string,
                tag: rest[13] as string,
                targets: rest[14] as string[],
                title: rest[15] as string,
                topics: rest[16] as string[],
                users: rest[17] as string[]            
            };
        }
        
        const messageId = params.messageId;
        const action = params.action;
        const badge = params.badge;
        const body = params.body;
        const color = params.color;
        const contentAvailable = params.contentAvailable;
        const critical = params.critical;
        const data = params.data;
        const draft = params.draft;
        const icon = params.icon;
        const image = params.image;
        const priority = params.priority;
        const scheduledAt = params.scheduledAt;
        const sound = params.sound;
        const tag = params.tag;
        const targets = params.targets;
        const title = params.title;
        const topics = params.topics;
        const users = params.users;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/push/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof action !== 'undefined') {
            payload['action'] = action;
        }
        if (typeof badge !== 'undefined') {
            payload['badge'] = badge;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof contentAvailable !== 'undefined') {
            payload['contentAvailable'] = contentAvailable;
        }
        if (typeof critical !== 'undefined') {
            payload['critical'] = critical;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof icon !== 'undefined') {
            payload['icon'] = icon;
        }
        if (typeof image !== 'undefined') {
            payload['image'] = image;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof sound !== 'undefined') {
            payload['sound'] = sound;
        }
        if (typeof tag !== 'undefined') {
            payload['tag'] = tag;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof title !== 'undefined') {
            payload['title'] = title;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.
     *
     * @param {string} params.messageId - Message ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    messagingDelete(params: { messageId: string }): Promise<{}>;
    /**
     * Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.
     *
     * @param {string} messageId - Message ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingDelete(messageId: string): Promise<{}>;
    messagingDelete(
        paramsOrFirst: { messageId: string } | string    
    ): Promise<{}> {
        let params: { messageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string };
        } else {
            params = {
                messageId: paramsOrFirst as string            
            };
        }
        
        const messageId = params.messageId;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a message by its unique ID.
     * 
     *
     * @param {string} params.messageId - Message ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     */
    messagingGetMessage(params: { messageId: string }): Promise<Models.Message>;
    /**
     * Get a message by its unique ID.
     * 
     *
     * @param {string} messageId - Message ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingGetMessage(messageId: string): Promise<Models.Message>;
    messagingGetMessage(
        paramsOrFirst: { messageId: string } | string    
    ): Promise<Models.Message> {
        let params: { messageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string };
        } else {
            params = {
                messageId: paramsOrFirst as string            
            };
        }
        
        const messageId = params.messageId;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     */
    messagingListMessageLogs(params: { messageId: string, queries?: string[], total?: boolean }): Promise<Models.LogList>;
    /**
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListMessageLogs(messageId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    messagingListMessageLogs(
        paramsOrFirst: { messageId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.LogList> {
        let params: { messageId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const messageId = params.messageId;
        const queries = params.queries;
        const total = params.total;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/{messageId}/logs'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of the targets associated with a message.
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TargetList>}
     */
    messagingListTargets(params: { messageId: string, queries?: string[], total?: boolean }): Promise<Models.TargetList>;
    /**
     * Get a list of the targets associated with a message.
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TargetList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListTargets(messageId: string, queries?: string[], total?: boolean): Promise<Models.TargetList>;
    messagingListTargets(
        paramsOrFirst: { messageId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.TargetList> {
        let params: { messageId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { messageId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                messageId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const messageId = params.messageId;
        const queries = params.queries;
        const total = params.total;

        if (typeof messageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "messageId"');
        }

        const apiPath = '/v1/messaging/messages/{messageId}/targets'.replace('{messageId}', messageId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all providers from the current Revenexx project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProviderList>}
     */
    messagingListProviders(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.ProviderList>;
    /**
     * Get a list of all providers from the current Revenexx project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProviderList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListProviders(queries?: string[], search?: string, total?: boolean): Promise<Models.ProviderList>;
    messagingListProviders(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.ProviderList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/v1/messaging/providers';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Mailgun provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.apiKey - Mailgun API Key.
     * @param {string} params.domain - Mailgun Domain.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.fromName - Sender Name.
     * @param {boolean} params.isEuRegion - Set as EU region.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateMailgunProvider(params: { name: string, providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, replyToEmail?: string, replyToName?: string }): Promise<Models.Provider>;
    /**
     * Create a new Mailgun provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} apiKey - Mailgun API Key.
     * @param {string} domain - Mailgun Domain.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromEmail - Sender email address.
     * @param {string} fromName - Sender Name.
     * @param {boolean} isEuRegion - Set as EU region.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateMailgunProvider(name: string, providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, replyToEmail?: string, replyToName?: string): Promise<Models.Provider>;
    messagingCreateMailgunProvider(
        paramsOrFirst: { name: string, providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, replyToEmail?: string, replyToName?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                apiKey: rest[1] as string,
                domain: rest[2] as string,
                enabled: rest[3] as boolean,
                fromEmail: rest[4] as string,
                fromName: rest[5] as string,
                isEuRegion: rest[6] as boolean,
                replyToEmail: rest[7] as string,
                replyToName: rest[8] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const domain = params.domain;
        const enabled = params.enabled;
        const fromEmail = params.fromEmail;
        const fromName = params.fromName;
        const isEuRegion = params.isEuRegion;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/mailgun';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof isEuRegion !== 'undefined') {
            payload['isEuRegion'] = isEuRegion;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.apiKey - Mailgun API Key.
     * @param {string} params.domain - Mailgun Domain.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.fromName - Sender Name.
     * @param {boolean} params.isEuRegion - Set as EU region.
     * @param {string} params.name - Provider name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateMailgunProvider(params: { providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, name?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.Provider>;
    /**
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} apiKey - Mailgun API Key.
     * @param {string} domain - Mailgun Domain.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromEmail - Sender email address.
     * @param {string} fromName - Sender Name.
     * @param {boolean} isEuRegion - Set as EU region.
     * @param {string} name - Provider name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateMailgunProvider(providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, name?: string, replyToEmail?: string, replyToName?: string): Promise<Models.Provider>;
    messagingUpdateMailgunProvider(
        paramsOrFirst: { providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, name?: string, replyToEmail?: string, replyToName?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, name?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, apiKey?: string, domain?: string, enabled?: boolean, fromEmail?: string, fromName?: string, isEuRegion?: boolean, name?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                apiKey: rest[0] as string,
                domain: rest[1] as string,
                enabled: rest[2] as boolean,
                fromEmail: rest[3] as string,
                fromName: rest[4] as string,
                isEuRegion: rest[5] as boolean,
                name: rest[6] as string,
                replyToEmail: rest[7] as string,
                replyToName: rest[8] as string            
            };
        }
        
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const domain = params.domain;
        const enabled = params.enabled;
        const fromEmail = params.fromEmail;
        const fromName = params.fromName;
        const isEuRegion = params.isEuRegion;
        const name = params.name;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/mailgun/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof isEuRegion !== 'undefined') {
            payload['isEuRegion'] = isEuRegion;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new MSG91 provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.authKey - Msg91 auth key.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.senderId - Msg91 sender ID.
     * @param {string} params.templateId - Msg91 template ID
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateMsg91Provider(params: { name: string, providerId: string, authKey?: string, enabled?: boolean, senderId?: string, templateId?: string }): Promise<Models.Provider>;
    /**
     * Create a new MSG91 provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} authKey - Msg91 auth key.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} senderId - Msg91 sender ID.
     * @param {string} templateId - Msg91 template ID
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateMsg91Provider(name: string, providerId: string, authKey?: string, enabled?: boolean, senderId?: string, templateId?: string): Promise<Models.Provider>;
    messagingCreateMsg91Provider(
        paramsOrFirst: { name: string, providerId: string, authKey?: string, enabled?: boolean, senderId?: string, templateId?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, authKey?: string, enabled?: boolean, senderId?: string, templateId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, authKey?: string, enabled?: boolean, senderId?: string, templateId?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                authKey: rest[1] as string,
                enabled: rest[2] as boolean,
                senderId: rest[3] as string,
                templateId: rest[4] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const authKey = params.authKey;
        const enabled = params.enabled;
        const senderId = params.senderId;
        const templateId = params.templateId;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/msg91';
        const payload: Payload = {};
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof senderId !== 'undefined') {
            payload['senderId'] = senderId;
        }
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.authKey - Msg91 auth key.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.name - Provider name.
     * @param {string} params.senderId - Msg91 sender ID.
     * @param {string} params.templateId - Msg91 template ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateMsg91Provider(params: { providerId: string, authKey?: string, enabled?: boolean, name?: string, senderId?: string, templateId?: string }): Promise<Models.Provider>;
    /**
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} authKey - Msg91 auth key.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} name - Provider name.
     * @param {string} senderId - Msg91 sender ID.
     * @param {string} templateId - Msg91 template ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateMsg91Provider(providerId: string, authKey?: string, enabled?: boolean, name?: string, senderId?: string, templateId?: string): Promise<Models.Provider>;
    messagingUpdateMsg91Provider(
        paramsOrFirst: { providerId: string, authKey?: string, enabled?: boolean, name?: string, senderId?: string, templateId?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, authKey?: string, enabled?: boolean, name?: string, senderId?: string, templateId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, authKey?: string, enabled?: boolean, name?: string, senderId?: string, templateId?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                authKey: rest[0] as string,
                enabled: rest[1] as boolean,
                name: rest[2] as string,
                senderId: rest[3] as string,
                templateId: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const authKey = params.authKey;
        const enabled = params.enabled;
        const name = params.name;
        const senderId = params.senderId;
        const templateId = params.templateId;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/msg91/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof senderId !== 'undefined') {
            payload['senderId'] = senderId;
        }
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Resend provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.apiKey - Resend API key.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateResendProvider(params: { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.Provider>;
    /**
     * Create a new Resend provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} apiKey - Resend API key.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromEmail - Sender email address.
     * @param {string} fromName - Sender Name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateResendProvider(name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string): Promise<Models.Provider>;
    messagingCreateResendProvider(
        paramsOrFirst: { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                apiKey: rest[1] as string,
                enabled: rest[2] as boolean,
                fromEmail: rest[3] as string,
                fromName: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;
        const fromEmail = params.fromEmail;
        const fromName = params.fromName;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/resend';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Resend provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.apiKey - Resend API key.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.name - Provider name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateResendProvider(params: { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.Provider>;
    /**
     * Update a Resend provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} apiKey - Resend API key.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromEmail - Sender email address.
     * @param {string} fromName - Sender Name.
     * @param {string} name - Provider name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateResendProvider(providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string): Promise<Models.Provider>;
    messagingUpdateResendProvider(
        paramsOrFirst: { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                apiKey: rest[0] as string,
                enabled: rest[1] as boolean,
                fromEmail: rest[2] as string,
                fromName: rest[3] as string,
                name: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string            
            };
        }
        
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;
        const fromEmail = params.fromEmail;
        const fromName = params.fromName;
        const name = params.name;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/resend/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Sendgrid provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.apiKey - Sendgrid API key.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateSendgridProvider(params: { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.Provider>;
    /**
     * Create a new Sendgrid provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} apiKey - Sendgrid API key.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromEmail - Sender email address.
     * @param {string} fromName - Sender Name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateSendgridProvider(name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string): Promise<Models.Provider>;
    messagingCreateSendgridProvider(
        paramsOrFirst: { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                apiKey: rest[1] as string,
                enabled: rest[2] as boolean,
                fromEmail: rest[3] as string,
                fromName: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;
        const fromEmail = params.fromEmail;
        const fromName = params.fromName;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/sendgrid';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.apiKey - Sendgrid API key.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.name - Provider name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateSendgridProvider(params: { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string }): Promise<Models.Provider>;
    /**
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} apiKey - Sendgrid API key.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromEmail - Sender email address.
     * @param {string} fromName - Sender Name.
     * @param {string} name - Provider name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateSendgridProvider(providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string): Promise<Models.Provider>;
    messagingUpdateSendgridProvider(
        paramsOrFirst: { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, apiKey?: string, enabled?: boolean, fromEmail?: string, fromName?: string, name?: string, replyToEmail?: string, replyToName?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                apiKey: rest[0] as string,
                enabled: rest[1] as boolean,
                fromEmail: rest[2] as string,
                fromName: rest[3] as string,
                name: rest[4] as string,
                replyToEmail: rest[5] as string,
                replyToName: rest[6] as string            
            };
        }
        
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;
        const fromEmail = params.fromEmail;
        const fromName = params.fromName;
        const name = params.name;
        const replyToEmail = params.replyToEmail;
        const replyToName = params.replyToName;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/sendgrid/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Telesign provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.apiKey - Telesign API key.
     * @param {string} params.customerId - Telesign customer ID.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateTelesignProvider(params: { name: string, providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string }): Promise<Models.Provider>;
    /**
     * Create a new Telesign provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} apiKey - Telesign API key.
     * @param {string} customerId - Telesign customer ID.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateTelesignProvider(name: string, providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string): Promise<Models.Provider>;
    messagingCreateTelesignProvider(
        paramsOrFirst: { name: string, providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                apiKey: rest[1] as string,
                customerId: rest[2] as string,
                enabled: rest[3] as boolean,
                from: rest[4] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const customerId = params.customerId;
        const enabled = params.enabled;
        const from = params.from;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/telesign';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof customerId !== 'undefined') {
            payload['customerId'] = customerId;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.apiKey - Telesign API key.
     * @param {string} params.customerId - Telesign customer ID.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender number.
     * @param {string} params.name - Provider name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateTelesignProvider(params: { providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string, name?: string }): Promise<Models.Provider>;
    /**
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} apiKey - Telesign API key.
     * @param {string} customerId - Telesign customer ID.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender number.
     * @param {string} name - Provider name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateTelesignProvider(providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string, name?: string): Promise<Models.Provider>;
    messagingUpdateTelesignProvider(
        paramsOrFirst: { providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, apiKey?: string, customerId?: string, enabled?: boolean, from?: string, name?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                apiKey: rest[0] as string,
                customerId: rest[1] as string,
                enabled: rest[2] as boolean,
                from: rest[3] as string,
                name: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const customerId = params.customerId;
        const enabled = params.enabled;
        const from = params.from;
        const name = params.name;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/telesign/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof customerId !== 'undefined') {
            payload['customerId'] = customerId;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Textmagic provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.apiKey - Textmagic apiKey.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.username - Textmagic username.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateTextmagicProvider(params: { name: string, providerId: string, apiKey?: string, enabled?: boolean, from?: string, username?: string }): Promise<Models.Provider>;
    /**
     * Create a new Textmagic provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} apiKey - Textmagic apiKey.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} username - Textmagic username.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateTextmagicProvider(name: string, providerId: string, apiKey?: string, enabled?: boolean, from?: string, username?: string): Promise<Models.Provider>;
    messagingCreateTextmagicProvider(
        paramsOrFirst: { name: string, providerId: string, apiKey?: string, enabled?: boolean, from?: string, username?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, apiKey?: string, enabled?: boolean, from?: string, username?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, apiKey?: string, enabled?: boolean, from?: string, username?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                apiKey: rest[1] as string,
                enabled: rest[2] as boolean,
                from: rest[3] as string,
                username: rest[4] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;
        const from = params.from;
        const username = params.username;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/textmagic';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.apiKey - Textmagic apiKey.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender number.
     * @param {string} params.name - Provider name.
     * @param {string} params.username - Textmagic username.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateTextmagicProvider(params: { providerId: string, apiKey?: string, enabled?: boolean, from?: string, name?: string, username?: string }): Promise<Models.Provider>;
    /**
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} apiKey - Textmagic apiKey.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender number.
     * @param {string} name - Provider name.
     * @param {string} username - Textmagic username.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateTextmagicProvider(providerId: string, apiKey?: string, enabled?: boolean, from?: string, name?: string, username?: string): Promise<Models.Provider>;
    messagingUpdateTextmagicProvider(
        paramsOrFirst: { providerId: string, apiKey?: string, enabled?: boolean, from?: string, name?: string, username?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, apiKey?: string, enabled?: boolean, from?: string, name?: string, username?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, apiKey?: string, enabled?: boolean, from?: string, name?: string, username?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                apiKey: rest[0] as string,
                enabled: rest[1] as boolean,
                from: rest[2] as string,
                name: rest[3] as string,
                username: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const enabled = params.enabled;
        const from = params.from;
        const name = params.name;
        const username = params.username;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/textmagic/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Twilio provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.accountSid - Twilio account secret ID.
     * @param {string} params.authToken - Twilio authentication token.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateTwilioProvider(params: { name: string, providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string }): Promise<Models.Provider>;
    /**
     * Create a new Twilio provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} accountSid - Twilio account secret ID.
     * @param {string} authToken - Twilio authentication token.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateTwilioProvider(name: string, providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string): Promise<Models.Provider>;
    messagingCreateTwilioProvider(
        paramsOrFirst: { name: string, providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                accountSid: rest[1] as string,
                authToken: rest[2] as string,
                enabled: rest[3] as boolean,
                from: rest[4] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const accountSid = params.accountSid;
        const authToken = params.authToken;
        const enabled = params.enabled;
        const from = params.from;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/twilio';
        const payload: Payload = {};
        if (typeof accountSid !== 'undefined') {
            payload['accountSid'] = accountSid;
        }
        if (typeof authToken !== 'undefined') {
            payload['authToken'] = authToken;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.accountSid - Twilio account secret ID.
     * @param {string} params.authToken - Twilio authentication token.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender number.
     * @param {string} params.name - Provider name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateTwilioProvider(params: { providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string, name?: string }): Promise<Models.Provider>;
    /**
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} accountSid - Twilio account secret ID.
     * @param {string} authToken - Twilio authentication token.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender number.
     * @param {string} name - Provider name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateTwilioProvider(providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string, name?: string): Promise<Models.Provider>;
    messagingUpdateTwilioProvider(
        paramsOrFirst: { providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, accountSid?: string, authToken?: string, enabled?: boolean, from?: string, name?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                accountSid: rest[0] as string,
                authToken: rest[1] as string,
                enabled: rest[2] as boolean,
                from: rest[3] as string,
                name: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const accountSid = params.accountSid;
        const authToken = params.authToken;
        const enabled = params.enabled;
        const from = params.from;
        const name = params.name;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/twilio/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof accountSid !== 'undefined') {
            payload['accountSid'] = accountSid;
        }
        if (typeof authToken !== 'undefined') {
            payload['authToken'] = authToken;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new Vonage provider.
     *
     * @param {string} params.name - Provider name.
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.apiKey - Vonage API key.
     * @param {string} params.apiSecret - Vonage API secret.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingCreateVonageProvider(params: { name: string, providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string }): Promise<Models.Provider>;
    /**
     * Create a new Vonage provider.
     *
     * @param {string} name - Provider name.
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} apiKey - Vonage API key.
     * @param {string} apiSecret - Vonage API secret.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateVonageProvider(name: string, providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string): Promise<Models.Provider>;
    messagingCreateVonageProvider(
        paramsOrFirst: { name: string, providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (boolean)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { name: string, providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string };
        } else {
            params = {
                name: paramsOrFirst as string,
                providerId: rest[0] as string,
                apiKey: rest[1] as string,
                apiSecret: rest[2] as string,
                enabled: rest[3] as boolean,
                from: rest[4] as string            
            };
        }
        
        const name = params.name;
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const apiSecret = params.apiSecret;
        const enabled = params.enabled;
        const from = params.from;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/vonage';
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.apiKey - Vonage API key.
     * @param {string} params.apiSecret - Vonage API secret.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.from - Sender number.
     * @param {string} params.name - Provider name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingUpdateVonageProvider(params: { providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string, name?: string }): Promise<Models.Provider>;
    /**
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} apiKey - Vonage API key.
     * @param {string} apiSecret - Vonage API secret.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} from - Sender number.
     * @param {string} name - Provider name.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateVonageProvider(providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string, name?: string): Promise<Models.Provider>;
    messagingUpdateVonageProvider(
        paramsOrFirst: { providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string, name?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (string)?]    
    ): Promise<Models.Provider> {
        let params: { providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string, name?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, apiKey?: string, apiSecret?: string, enabled?: boolean, from?: string, name?: string };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                apiKey: rest[0] as string,
                apiSecret: rest[1] as string,
                enabled: rest[2] as boolean,
                from: rest[3] as string,
                name: rest[4] as string            
            };
        }
        
        const providerId = params.providerId;
        const apiKey = params.apiKey;
        const apiSecret = params.apiSecret;
        const enabled = params.enabled;
        const from = params.from;
        const name = params.name;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/vonage/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    messagingDeleteProvider(params: { providerId: string }): Promise<{}>;
    /**
     * Delete a provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingDeleteProvider(providerId: string): Promise<{}>;
    messagingDeleteProvider(
        paramsOrFirst: { providerId: string } | string    
    ): Promise<{}> {
        let params: { providerId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string };
        } else {
            params = {
                providerId: paramsOrFirst as string            
            };
        }
        
        const providerId = params.providerId;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a provider by its unique ID.
     * 
     *
     * @param {string} params.providerId - Provider ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     */
    messagingGetProvider(params: { providerId: string }): Promise<Models.Provider>;
    /**
     * Get a provider by its unique ID.
     * 
     *
     * @param {string} providerId - Provider ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingGetProvider(providerId: string): Promise<Models.Provider>;
    messagingGetProvider(
        paramsOrFirst: { providerId: string } | string    
    ): Promise<Models.Provider> {
        let params: { providerId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string };
        } else {
            params = {
                providerId: paramsOrFirst as string            
            };
        }
        
        const providerId = params.providerId;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     */
    messagingListProviderLogs(params: { providerId: string, queries?: string[], total?: boolean }): Promise<Models.LogList>;
    /**
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListProviderLogs(providerId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    messagingListProviderLogs(
        paramsOrFirst: { providerId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.LogList> {
        let params: { providerId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { providerId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                providerId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const providerId = params.providerId;
        const queries = params.queries;
        const total = params.total;

        if (typeof providerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "providerId"');
        }

        const apiPath = '/v1/messaging/providers/{providerId}/logs'.replace('{providerId}', providerId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} params.subscriberId - Subscriber ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     */
    messagingListSubscriberLogs(params: { subscriberId: string, queries?: string[], total?: boolean }): Promise<Models.LogList>;
    /**
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} subscriberId - Subscriber ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListSubscriberLogs(subscriberId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    messagingListSubscriberLogs(
        paramsOrFirst: { subscriberId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.LogList> {
        let params: { subscriberId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { subscriberId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                subscriberId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const subscriberId = params.subscriberId;
        const queries = params.queries;
        const total = params.total;

        if (typeof subscriberId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/v1/messaging/subscribers/{subscriberId}/logs'.replace('{subscriberId}', subscriberId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all topics from the current Revenexx project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TopicList>}
     */
    messagingListTopics(params?: { queries?: string[], search?: string, total?: boolean }): Promise<Models.TopicList>;
    /**
     * Get a list of all topics from the current Revenexx project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TopicList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListTopics(queries?: string[], search?: string, total?: boolean): Promise<Models.TopicList>;
    messagingListTopics(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.TopicList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/v1/messaging/topics';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new topic.
     *
     * @param {string} params.name - Topic Name.
     * @param {string} params.topicId - Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @param {string[]} params.subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Topic>}
     */
    messagingCreateTopic(params: { name: string, topicId: string, subscribe?: string[] }): Promise<Models.Topic>;
    /**
     * Create a new topic.
     *
     * @param {string} name - Topic Name.
     * @param {string} topicId - Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @param {string[]} subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateTopic(name: string, topicId: string, subscribe?: string[]): Promise<Models.Topic>;
    messagingCreateTopic(
        paramsOrFirst: { name: string, topicId: string, subscribe?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.Topic> {
        let params: { name: string, topicId: string, subscribe?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, topicId: string, subscribe?: string[] };
        } else {
            params = {
                name: paramsOrFirst as string,
                topicId: rest[0] as string,
                subscribe: rest[1] as string[]            
            };
        }
        
        const name = params.name;
        const topicId = params.topicId;
        const subscribe = params.subscribe;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }

        const apiPath = '/v1/messaging/topics';
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof subscribe !== 'undefined') {
            payload['subscribe'] = subscribe;
        }
        if (typeof topicId !== 'undefined') {
            payload['topicId'] = topicId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a topic by its unique ID.
     *
     * @param {string} params.topicId - Topic ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    messagingDeleteTopic(params: { topicId: string }): Promise<{}>;
    /**
     * Delete a topic by its unique ID.
     *
     * @param {string} topicId - Topic ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingDeleteTopic(topicId: string): Promise<{}>;
    messagingDeleteTopic(
        paramsOrFirst: { topicId: string } | string    
    ): Promise<{}> {
        let params: { topicId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string            
            };
        }
        
        const topicId = params.topicId;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}'.replace('{topicId}', topicId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a topic by its unique ID.
     * 
     *
     * @param {string} params.topicId - Topic ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Topic>}
     */
    messagingGetTopic(params: { topicId: string }): Promise<Models.Topic>;
    /**
     * Get a topic by its unique ID.
     * 
     *
     * @param {string} topicId - Topic ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingGetTopic(topicId: string): Promise<Models.Topic>;
    messagingGetTopic(
        paramsOrFirst: { topicId: string } | string    
    ): Promise<Models.Topic> {
        let params: { topicId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string            
            };
        }
        
        const topicId = params.topicId;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}'.replace('{topicId}', topicId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a topic by its unique ID.
     * 
     *
     * @param {string} params.topicId - Topic ID.
     * @param {string} params.name - Topic Name.
     * @param {string[]} params.subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Topic>}
     */
    messagingUpdateTopic(params: { topicId: string, name?: string, subscribe?: string[] }): Promise<Models.Topic>;
    /**
     * Update a topic by its unique ID.
     * 
     *
     * @param {string} topicId - Topic ID.
     * @param {string} name - Topic Name.
     * @param {string[]} subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingUpdateTopic(topicId: string, name?: string, subscribe?: string[]): Promise<Models.Topic>;
    messagingUpdateTopic(
        paramsOrFirst: { topicId: string, name?: string, subscribe?: string[] } | string,
        ...rest: [(string)?, (string[])?]    
    ): Promise<Models.Topic> {
        let params: { topicId: string, name?: string, subscribe?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, name?: string, subscribe?: string[] };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                name: rest[0] as string,
                subscribe: rest[1] as string[]            
            };
        }
        
        const topicId = params.topicId;
        const name = params.name;
        const subscribe = params.subscribe;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof subscribe !== 'undefined') {
            payload['subscribe'] = subscribe;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} params.topicId - Topic ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     */
    messagingListTopicLogs(params: { topicId: string, queries?: string[], total?: boolean }): Promise<Models.LogList>;
    /**
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} topicId - Topic ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListTopicLogs(topicId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    messagingListTopicLogs(
        paramsOrFirst: { topicId: string, queries?: string[], total?: boolean } | string,
        ...rest: [(string[])?, (boolean)?]    
    ): Promise<Models.LogList> {
        let params: { topicId: string, queries?: string[], total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, queries?: string[], total?: boolean };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                queries: rest[0] as string[],
                total: rest[1] as boolean            
            };
        }
        
        const topicId = params.topicId;
        const queries = params.queries;
        const total = params.total;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}/logs'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a list of all subscribers from the current Revenexx project.
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SubscriberList>}
     */
    messagingListSubscribers(params: { topicId: string, queries?: string[], search?: string, total?: boolean }): Promise<Models.SubscriberList>;
    /**
     * Get a list of all subscribers from the current Revenexx project.
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {RevenexxException}
     * @returns {Promise<Models.SubscriberList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingListSubscribers(topicId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.SubscriberList>;
    messagingListSubscribers(
        paramsOrFirst: { topicId: string, queries?: string[], search?: string, total?: boolean } | string,
        ...rest: [(string[])?, (string)?, (boolean)?]    
    ): Promise<Models.SubscriberList> {
        let params: { topicId: string, queries?: string[], search?: string, total?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                queries: rest[0] as string[],
                search: rest[1] as string,
                total: rest[2] as boolean            
            };
        }
        
        const topicId = params.topicId;
        const queries = params.queries;
        const search = params.search;
        const total = params.total;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new subscriber.
     *
     * @param {string} params.topicId - Topic ID. The topic ID to subscribe to.
     * @param {string} params.subscriberId - Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.
     * @param {string} params.targetId - Target ID. The target ID to link to the specified Topic ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Subscriber>}
     */
    messagingCreateSubscriber(params: { topicId: string, subscriberId: string, targetId: string }): Promise<Models.Subscriber>;
    /**
     * Create a new subscriber.
     *
     * @param {string} topicId - Topic ID. The topic ID to subscribe to.
     * @param {string} subscriberId - Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.
     * @param {string} targetId - Target ID. The target ID to link to the specified Topic ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Subscriber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingCreateSubscriber(topicId: string, subscriberId: string, targetId: string): Promise<Models.Subscriber>;
    messagingCreateSubscriber(
        paramsOrFirst: { topicId: string, subscriberId: string, targetId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Subscriber> {
        let params: { topicId: string, subscriberId: string, targetId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, subscriberId: string, targetId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                subscriberId: rest[0] as string,
                targetId: rest[1] as string            
            };
        }
        
        const topicId = params.topicId;
        const subscriberId = params.subscriberId;
        const targetId = params.targetId;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriberId"');
        }
        if (typeof targetId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "targetId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
        const payload: Payload = {};
        if (typeof subscriberId !== 'undefined') {
            payload['subscriberId'] = subscriberId;
        }
        if (typeof targetId !== 'undefined') {
            payload['targetId'] = targetId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a subscriber by its unique ID.
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string} params.subscriberId - Subscriber ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    messagingDeleteSubscriber(params: { topicId: string, subscriberId: string }): Promise<{}>;
    /**
     * Delete a subscriber by its unique ID.
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string} subscriberId - Subscriber ID.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingDeleteSubscriber(topicId: string, subscriberId: string): Promise<{}>;
    messagingDeleteSubscriber(
        paramsOrFirst: { topicId: string, subscriberId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { topicId: string, subscriberId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, subscriberId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                subscriberId: rest[0] as string            
            };
        }
        
        const topicId = params.topicId;
        const subscriberId = params.subscriberId;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a subscriber by its unique ID.
     * 
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string} params.subscriberId - Subscriber ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Subscriber>}
     */
    messagingGetSubscriber(params: { topicId: string, subscriberId: string }): Promise<Models.Subscriber>;
    /**
     * Get a subscriber by its unique ID.
     * 
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string} subscriberId - Subscriber ID.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Subscriber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    messagingGetSubscriber(topicId: string, subscriberId: string): Promise<Models.Subscriber>;
    messagingGetSubscriber(
        paramsOrFirst: { topicId: string, subscriberId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Subscriber> {
        let params: { topicId: string, subscriberId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { topicId: string, subscriberId: string };
        } else {
            params = {
                topicId: paramsOrFirst as string,
                subscriberId: rest[0] as string            
            };
        }
        
        const topicId = params.topicId;
        const subscriberId = params.subscriberId;

        if (typeof topicId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "topicId"');
        }
        if (typeof subscriberId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/v1/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
