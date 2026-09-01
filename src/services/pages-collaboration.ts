import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class PagesCollaboration {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The caller's own notifications, newest first, 20 at a time. Paged by an opaque cursor rather than by offset, so new arrivals never shift a page under the reader. It is also the one read in this app that writes: `?markAsRead=true` flags the notifications on the page it just returned as read, which is how a feed that has been looked at empties its badge without a second call — leave it off and reading changes nothing.
     *
     * @param {string} params.after - Continue after this cursor — pass back the `cursor` from the previous page. Omit for the first page. It encodes the last item's timestamp and id, so it is stable while new notifications arrive.
     * @param {string} params.markAsRead - Send the literal `true` to mark the notifications ON THIS PAGE read as a side effect of reading them. Any other value, including `1` and `false`, is accepted and leaves them unread.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsList(params?: { after?: string, markAsRead?: string }): Promise<{}>;
    /**
     * The caller's own notifications, newest first, 20 at a time. Paged by an opaque cursor rather than by offset, so new arrivals never shift a page under the reader. It is also the one read in this app that writes: `?markAsRead=true` flags the notifications on the page it just returned as read, which is how a feed that has been looked at empties its badge without a second call — leave it off and reading changes nothing.
     *
     * @param {string} after - Continue after this cursor — pass back the `cursor` from the previous page. Omit for the first page. It encodes the last item's timestamp and id, so it is stable while new notifications arrive.
     * @param {string} markAsRead - Send the literal `true` to mark the notifications ON THIS PAGE read as a side effect of reading them. Any other value, including `1` and `false`, is accepted and leaves them unread.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorNotificationsList(after?: string, markAsRead?: string): Promise<{}>;
    pagesEditorNotificationsList(
        paramsOrFirst?: { after?: string, markAsRead?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { after?: string, markAsRead?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { after?: string, markAsRead?: string };
        } else {
            params = {
                after: paramsOrFirst as string,
                markAsRead: rest[0] as string            
            };
        }
        
        const after = params.after;
        const markAsRead = params.markAsRead;


        const apiPath = '/v1/pages/editor/notifications';
        const apiPayload: Payload = {};
        if (typeof after !== 'undefined') {
            apiPayload['after'] = after;
        }
        if (typeof markAsRead !== 'undefined') {
            apiPayload['markAsRead'] = markAsRead;
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
     * Empties the badge in one call. Every unread notification of the CURRENT user is flagged read — the user is the one the request's context token names and there is no body with which to name another. Nothing is deleted: `GET /pages/editor/notifications` still returns the same feed, just with `read` set. The answer is the new unread count, so a client can set the badge straight from it without a second read.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsMarkAllRead(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications/mark-all-read';
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
     * The cheap poll behind the badge.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorNotificationsUnreadCount(): Promise<{}> {

        const apiPath = '/v1/pages/editor/notifications/unread-count';
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
     * What the @mention picker is filled from. When the identity service cannot be reached this degrades to the authors who have already commented on this tenant's pages rather than answering an error — a mention list that is short is more useful than one that is missing.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    pagesEditorUsers(): Promise<{}> {

        const apiPath = '/v1/pages/editor/users';
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
     * Every comment on the page in one flat list, oldest first, roots and replies together and resolved threads included — there is no filter and no paging, because the editor nests and filters them itself from `parentUuid` and pins each root to its blocks with `blockUuids`. Comments hang off the PAGE, not off a revision or an edit state, so publishing and reverting leave them standing; that is what makes them usable as a review trail across several rounds of edits.
     *
     * @param {string} params.pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PageCommentList>}
     */
    pagesEditorCommentsList(params: { pageId: string }): Promise<Models.PageCommentList>;
    /**
     * Every comment on the page in one flat list, oldest first, roots and replies together and resolved threads included — there is no filter and no paging, because the editor nests and filters them itself from `parentUuid` and pins each root to its blocks with `blockUuids`. Comments hang off the PAGE, not off a revision or an edit state, so publishing and reverting leave them standing; that is what makes them usable as a review trail across several rounds of edits.
     *
     * @param {string} pageId - The page being edited.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PageCommentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsList(pageId: string): Promise<Models.PageCommentList>;
    pagesEditorCommentsList(
        paramsOrFirst: { pageId: string } | string    
    ): Promise<Models.PageCommentList> {
        let params: { pageId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string };
        } else {
            params = {
                pageId: paramsOrFirst as string            
            };
        }
        
        const pageId = params.pageId;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments'.replace('{page_id}', pageId);
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
     * The same route writes both kinds, and which one you get is decided by the body: `blockUuids` starts a new thread pinned to those blocks, `parentUuid` hangs a reply under an existing root. Everyone named with an @mention in the body is notified, and on a reply so is everybody already in the thread — the actor never notifies themselves.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.body - The comment, as editor HTML. `<span data-type="mention" data-id="USER_ID">` is what this app reads to decide whom to notify; `<li data-type="taskItem" data-checked="false">` makes a checkbox the toggle-task route can flip.
     * @param {string[]} params.blockUuids - The blocks this thread is about, so the editor can draw a marker next to them. Leave empty for a comment about the page as a whole.
     * @param {string} params.parentUuid - The root comment this replies to. Omit for a new thread — only roots can be resolved.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PageCommentList>}
     */
    pagesEditorCommentsCreate(params: { pageId: string, body: string, blockUuids?: string[], parentUuid?: string }): Promise<Models.PageCommentList>;
    /**
     * The same route writes both kinds, and which one you get is decided by the body: `blockUuids` starts a new thread pinned to those blocks, `parentUuid` hangs a reply under an existing root. Everyone named with an @mention in the body is notified, and on a reply so is everybody already in the thread — the actor never notifies themselves.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} body - The comment, as editor HTML. `<span data-type="mention" data-id="USER_ID">` is what this app reads to decide whom to notify; `<li data-type="taskItem" data-checked="false">` makes a checkbox the toggle-task route can flip.
     * @param {string[]} blockUuids - The blocks this thread is about, so the editor can draw a marker next to them. Leave empty for a comment about the page as a whole.
     * @param {string} parentUuid - The root comment this replies to. Omit for a new thread — only roots can be resolved.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PageCommentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsCreate(pageId: string, body: string, blockUuids?: string[], parentUuid?: string): Promise<Models.PageCommentList>;
    pagesEditorCommentsCreate(
        paramsOrFirst: { pageId: string, body: string, blockUuids?: string[], parentUuid?: string } | string,
        ...rest: [(string)?, (string[])?, (string)?]    
    ): Promise<Models.PageCommentList> {
        let params: { pageId: string, body: string, blockUuids?: string[], parentUuid?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, body: string, blockUuids?: string[], parentUuid?: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                body: rest[0] as string,
                blockUuids: rest[1] as string[],
                parentUuid: rest[2] as string            
            };
        }
        
        const pageId = params.pageId;
        const body = params.body;
        const blockUuids = params.blockUuids;
        const parentUuid = params.parentUuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments'.replace('{page_id}', pageId);
        const apiPayload: Payload = {};
        if (typeof blockUuids !== 'undefined') {
            apiPayload['blockUuids'] = blockUuids;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof parentUuid !== 'undefined') {
            apiPayload['parentUuid'] = parentUuid;
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
     * A hard delete, and deleting a root takes its replies with it.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PageCommentList>}
     */
    pagesEditorCommentsDelete(params: { pageId: string, uuid: string }): Promise<Models.PageCommentList>;
    /**
     * A hard delete, and deleting a root takes its replies with it.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @throws {RevenexxException}
     * @returns {Promise<Models.PageCommentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsDelete(pageId: string, uuid: string): Promise<Models.PageCommentList>;
    pagesEditorCommentsDelete(
        paramsOrFirst: { pageId: string, uuid: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.PageCommentList> {
        let params: { pageId: string, uuid: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}'.replace('{page_id}', pageId).replace('{uuid}', uuid);
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
     * Rewrites what a comment says, and only its author may — a comment carries an `author_id` and anybody else is refused with 403. Only the body moves: what the comment is pinned to, whether the thread is resolved and who wrote it are all fixed when it is created. Rewriting a body does NOT re-run the @mention notifications, so mentioning somebody new by editing will not reach them. Answers the page's whole comment list rather than the one row, so a client can re-render from the response.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @param {string} params.body - The comment, as editor HTML. Replaces the old body completely.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pagesEditorCommentsUpdate(params: { pageId: string, uuid: string, body: string }): Promise<Models.Error>;
    /**
     * Rewrites what a comment says, and only its author may — a comment carries an `author_id` and anybody else is refused with 403. Only the body moves: what the comment is pinned to, whether the thread is resolved and who wrote it are all fixed when it is created. Rewriting a body does NOT re-run the @mention notifications, so mentioning somebody new by editing will not reach them. Answers the page's whole comment list rather than the one row, so a client can re-render from the response.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @param {string} body - The comment, as editor HTML. Replaces the old body completely.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsUpdate(pageId: string, uuid: string, body: string): Promise<Models.Error>;
    pagesEditorCommentsUpdate(
        paramsOrFirst: { pageId: string, uuid: string, body: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { pageId: string, uuid: string, body: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string, body: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string,
                body: rest[1] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;
        const body = params.body;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}'.replace('{page_id}', pageId).replace('{uuid}', uuid);
        const apiPayload: Payload = {};
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
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
     * Marks a thread handled, so the editor stops surfacing it on the block it is pinned to. Only a ROOT can be resolved — resolved-ness is a property of the thread and not of a message in it, so pointing this at a reply is refused with 400 rather than quietly resolving its parent. Nothing is deleted, nobody is notified, and the thread stays in the list; `.../unresolve` is the way back. Answers the page's whole comment list.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pagesEditorCommentsResolve(params: { pageId: string, uuid: string }): Promise<Models.Error>;
    /**
     * Marks a thread handled, so the editor stops surfacing it on the block it is pinned to. Only a ROOT can be resolved — resolved-ness is a property of the thread and not of a message in it, so pointing this at a reply is refused with 400 rather than quietly resolving its parent. Nothing is deleted, nobody is notified, and the thread stays in the list; `.../unresolve` is the way back. Answers the page's whole comment list.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsResolve(pageId: string, uuid: string): Promise<Models.Error>;
    pagesEditorCommentsResolve(
        paramsOrFirst: { pageId: string, uuid: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { pageId: string, uuid: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/resolve'.replace('{page_id}', pageId).replace('{uuid}', uuid);
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
     * A comment body may carry a task list. This flips one checkbox by rewriting the body's markup, and answers the single comment rather than the whole list. A `taskIndex` that names no checkbox is refused and nothing is written — the comment's `updated_at` is the editor's "edited" marker, so a call that changes nothing must not move it.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @param {number} params.taskIndex - The task item to toggle, counted in document order from 0. A comment with fewer tasks than that answers 400, and so does anything that is not a whole number at or above 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pagesEditorCommentsToggleTask(params: { pageId: string, uuid: string, taskIndex: number }): Promise<Models.Error>;
    /**
     * A comment body may carry a task list. This flips one checkbox by rewriting the body's markup, and answers the single comment rather than the whole list. A `taskIndex` that names no checkbox is refused and nothing is written — the comment's `updated_at` is the editor's "edited" marker, so a call that changes nothing must not move it.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @param {number} taskIndex - The task item to toggle, counted in document order from 0. A comment with fewer tasks than that answers 400, and so does anything that is not a whole number at or above 0.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsToggleTask(pageId: string, uuid: string, taskIndex: number): Promise<Models.Error>;
    pagesEditorCommentsToggleTask(
        paramsOrFirst: { pageId: string, uuid: string, taskIndex: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.Error> {
        let params: { pageId: string, uuid: string, taskIndex: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string, taskIndex: number };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string,
                taskIndex: rest[1] as number            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;
        const taskIndex = params.taskIndex;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }
        if (typeof taskIndex === 'undefined') {
            throw new RevenexxException('Missing required parameter: "taskIndex"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/toggle-task'.replace('{page_id}', pageId).replace('{uuid}', uuid);
        const apiPayload: Payload = {};
        if (typeof taskIndex !== 'undefined') {
            apiPayload['taskIndex'] = taskIndex;
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
     * Clears the resolved flag and puts the thread back in front of whoever is editing — the mirror of `.../resolve` in every respect, including that only a root can be reopened and that a reply answers 400. A thread that was already open is accepted and stays open. Answers the page's whole comment list.
     *
     * @param {string} params.pageId - The page being edited.
     * @param {string} params.uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    pagesEditorCommentsUnresolve(params: { pageId: string, uuid: string }): Promise<Models.Error>;
    /**
     * Clears the resolved flag and puts the thread back in front of whoever is editing — the mirror of `.../resolve` in every respect, including that only a root can be reopened and that a reply answers 400. A thread that was already open is accepted and stays open. Answers the page's whole comment list.
     *
     * @param {string} pageId - The page being edited.
     * @param {string} uuid - The comment id — the `uuid` of a `PageCommentItem`, not a row id of any other shape.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    pagesEditorCommentsUnresolve(pageId: string, uuid: string): Promise<Models.Error>;
    pagesEditorCommentsUnresolve(
        paramsOrFirst: { pageId: string, uuid: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { pageId: string, uuid: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { pageId: string, uuid: string };
        } else {
            params = {
                pageId: paramsOrFirst as string,
                uuid: rest[0] as string            
            };
        }
        
        const pageId = params.pageId;
        const uuid = params.uuid;

        if (typeof pageId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "pageId"');
        }
        if (typeof uuid === 'undefined') {
            throw new RevenexxException('Missing required parameter: "uuid"');
        }

        const apiPath = '/v1/pages/editor/{page_id}/comments/{uuid}/unresolve'.replace('{page_id}', pageId).replace('{uuid}', uuid);
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
