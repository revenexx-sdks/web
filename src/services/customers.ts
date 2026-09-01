import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Customers {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * An email and a password go in; a session and the CONTACT behind it come back, so a storefront knows in one call both that the buyer is signed in and who they are. The session is minted server-side rather than handed back from the credential check, because the account route hides the session secret from non-privileged responses and a trusted BFF needs it. `permissions` carries the buyer's effective grants, so a BFF does not need a second call to decide what to render.
     *
     * @param {string} params.email - The buyer's login address — the same one the contact carries.
     * @param {string} params.password - The password from registration or recovery. Wrong credentials are a 401; a correct one on an undecided application is a 403.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthLogin(params: { email: string, password: string }): Promise<Models.Error>;
    /**
     * An email and a password go in; a session and the CONTACT behind it come back, so a storefront knows in one call both that the buyer is signed in and who they are. The session is minted server-side rather than handed back from the credential check, because the account route hides the session secret from non-privileged responses and a trusted BFF needs it. `permissions` carries the buyer's effective grants, so a BFF does not need a second call to decide what to render.
     *
     * @param {string} email - The buyer's login address — the same one the contact carries.
     * @param {string} password - The password from registration or recovery. Wrong credentials are a 401; a correct one on an undecided application is a 403.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthLogin(email: string, password: string): Promise<Models.Error>;
    customersAuthLogin(
        paramsOrFirst: { email: string, password: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { email: string, password: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, password: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                password: rest[0] as string            
            };
        }
        
        const email = params.email;
        const password = params.password;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new RevenexxException('Missing required parameter: "password"');
        }

        const apiPath = '/v1/customers/auth/login';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
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
     * Ends ONE session — the buyer signs out on this device and stays signed in on the others, because the session id is what is revoked and not the account. The contact row is untouched: signing out is not blocking, and a caller wanting the second thing wants `status: "blocked"` on the contact instead. Both ids come from what `/customers/auth/login` answered, and a BFF should drop its own cookie whatever this answers — the session is unusable afterwards either way.
     *
     * @param {string} params.sessionId - The session to revoke — `session.$id` from the login.
     * @param {string} params.userId - The platform user — `session.userId` from the login.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthLogout(params: { sessionId: string, userId: string }): Promise<Models.Error>;
    /**
     * Ends ONE session — the buyer signs out on this device and stays signed in on the others, because the session id is what is revoked and not the account. The contact row is untouched: signing out is not blocking, and a caller wanting the second thing wants `status: "blocked"` on the contact instead. Both ids come from what `/customers/auth/login` answered, and a BFF should drop its own cookie whatever this answers — the session is unusable afterwards either way.
     *
     * @param {string} sessionId - The session to revoke — `session.$id` from the login.
     * @param {string} userId - The platform user — `session.userId` from the login.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthLogout(sessionId: string, userId: string): Promise<Models.Error>;
    customersAuthLogout(
        paramsOrFirst: { sessionId: string, userId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { sessionId: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { sessionId: string, userId: string };
        } else {
            params = {
                sessionId: paramsOrFirst as string,
                userId: rest[0] as string            
            };
        }
        
        const sessionId = params.sessionId;
        const userId = params.userId;

        if (typeof sessionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sessionId"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/logout';
        const apiPayload: Payload = {};
        if (typeof sessionId !== 'undefined') {
            apiPayload['session_id'] = sessionId;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * Sign in without a password: a link goes to the address, and `PUT /customers/auth/magic-link` turns it into a session. Creates the account when the address is new, which makes this a registration path as much as a sign-in one — and why an address nobody holds is not distinguished in the answer. The mail is this shop's own template through the messaging service; the secret is not in this response, only in the link.
     *
     * @param {string} params.email - Who to send the link to. An address that has never been seen creates an account rather than failing.
     * @param {string} params.url - Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters; the first two are what the confirm call takes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthMagicLink(params: { email: string, url: string }): Promise<Models.Error>;
    /**
     * Sign in without a password: a link goes to the address, and `PUT /customers/auth/magic-link` turns it into a session. Creates the account when the address is new, which makes this a registration path as much as a sign-in one — and why an address nobody holds is not distinguished in the answer. The mail is this shop's own template through the messaging service; the secret is not in this response, only in the link.
     *
     * @param {string} email - Who to send the link to. An address that has never been seen creates an account rather than failing.
     * @param {string} url - Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters; the first two are what the confirm call takes.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthMagicLink(email: string, url: string): Promise<Models.Error>;
    customersAuthMagicLink(
        paramsOrFirst: { email: string, url: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { email: string, url: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, url: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                url: rest[0] as string            
            };
        }
        
        const email = params.email;
        const url = params.url;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof url === 'undefined') {
            throw new RevenexxException('Missing required parameter: "url"');
        }

        const apiPath = '/v1/customers/auth/magic-link';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
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
     * The buyer clicked the link and the storefront read `userId` and `secret` out of it. Answers exactly what a password login answers — session, contact and effective grants — because a shop must not have to branch on how somebody signed in.
     *
     * @param {string} params.secret - The one-time secret the mailed link carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
     * @param {string} params.userId - The `userId` the mailed link carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthMagicLinkConfirm(params: { secret: string, userId: string }): Promise<Models.Error>;
    /**
     * The buyer clicked the link and the storefront read `userId` and `secret` out of it. Answers exactly what a password login answers — session, contact and effective grants — because a shop must not have to branch on how somebody signed in.
     *
     * @param {string} secret - The one-time secret the mailed link carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
     * @param {string} userId - The `userId` the mailed link carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthMagicLinkConfirm(secret: string, userId: string): Promise<Models.Error>;
    customersAuthMagicLinkConfirm(
        paramsOrFirst: { secret: string, userId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { secret: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { secret: string, userId: string };
        } else {
            params = {
                secret: paramsOrFirst as string,
                userId: rest[0] as string            
            };
        }
        
        const secret = params.secret;
        const userId = params.userId;

        if (typeof secret === 'undefined') {
            throw new RevenexxException('Missing required parameter: "secret"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/magic-link';
        const apiPayload: Payload = {};
        if (typeof secret !== 'undefined') {
            apiPayload['secret'] = secret;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * The platform user, the customer record mirrored against it and the effective grants, in one call. The expected caller is a trusted storefront BFF holding the session on the buyer's behalf, which is why the ids travel in the body rather than in a browser-facing header. The grants are derived here on every call rather than returned from anywhere they could be cached, so a role changed a second ago is already reflected.
     *
     * @param {string} params.userId - The platform user to resolve — `session.userId` from the login.
     * @param {string} params.sessionId - Optional session to verify. Pass it to ask "is this session still alive?" (a revoked one is then a 401); omit it to only ask who a user is.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthMe(params: { userId: string, sessionId?: string }): Promise<Models.Error>;
    /**
     * The platform user, the customer record mirrored against it and the effective grants, in one call. The expected caller is a trusted storefront BFF holding the session on the buyer's behalf, which is why the ids travel in the body rather than in a browser-facing header. The grants are derived here on every call rather than returned from anywhere they could be cached, so a role changed a second ago is already reflected.
     *
     * @param {string} userId - The platform user to resolve — `session.userId` from the login.
     * @param {string} sessionId - Optional session to verify. Pass it to ask "is this session still alive?" (a revoked one is then a 401); omit it to only ask who a user is.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthMe(userId: string, sessionId?: string): Promise<Models.Error>;
    customersAuthMe(
        paramsOrFirst: { userId: string, sessionId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { userId: string, sessionId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { userId: string, sessionId?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                sessionId: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const sessionId = params.sessionId;

        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/me';
        const apiPayload: Payload = {};
        if (typeof sessionId !== 'undefined') {
            apiPayload['session_id'] = sessionId;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * Between the password and the finished session: the buyer has proved one thing and is asked for another. Created by user id, because the account route that creates challenges hides the code from whoever may call it — and answered with the half-finished session the sign-in is in the middle of, through `PUT /customers/auth/mfa/challenge`. Needs a platform build that returns the challenge code; without one there is no way to read what to send, and the call answers 502 rather than mailing an empty challenge.
     *
     * @param {string} params.userId - The platform user being challenged.
     * @param {string} params.factor - Which factor to challenge. Defaults to `email`, the only one this route mails.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthMfaChallenge(params: { userId: string, factor?: string }): Promise<Models.Error>;
    /**
     * Between the password and the finished session: the buyer has proved one thing and is asked for another. Created by user id, because the account route that creates challenges hides the code from whoever may call it — and answered with the half-finished session the sign-in is in the middle of, through `PUT /customers/auth/mfa/challenge`. Needs a platform build that returns the challenge code; without one there is no way to read what to send, and the call answers 502 rather than mailing an empty challenge.
     *
     * @param {string} userId - The platform user being challenged.
     * @param {string} factor - Which factor to challenge. Defaults to `email`, the only one this route mails.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthMfaChallenge(userId: string, factor?: string): Promise<Models.Error>;
    customersAuthMfaChallenge(
        paramsOrFirst: { userId: string, factor?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { userId: string, factor?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { userId: string, factor?: string };
        } else {
            params = {
                userId: paramsOrFirst as string,
                factor: rest[0] as string            
            };
        }
        
        const userId = params.userId;
        const factor = params.factor;

        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/mfa/challenge';
        const apiPayload: Payload = {};
        if (typeof factor !== 'undefined') {
            apiPayload['factor'] = factor;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * The code the buyer typed, against the challenge it was sent for. The session becomes fully authenticated when this answers.
     *
     * @param {string} params.challengeId - The `$id` the send answered with.
     * @param {string} params.code - What the buyer typed.
     * @param {string} params.sessionSecret - The same session the challenge was created with.
     * @param {string} params.userId - The platform user, for the caller's own bookkeeping. The challenge already knows whose it is.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthMfaChallengeConfirm(params: { challengeId: string, code: string, sessionSecret: string, userId?: string }): Promise<Models.Error>;
    /**
     * The code the buyer typed, against the challenge it was sent for. The session becomes fully authenticated when this answers.
     *
     * @param {string} challengeId - The `$id` the send answered with.
     * @param {string} code - What the buyer typed.
     * @param {string} sessionSecret - The same session the challenge was created with.
     * @param {string} userId - The platform user, for the caller's own bookkeeping. The challenge already knows whose it is.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthMfaChallengeConfirm(challengeId: string, code: string, sessionSecret: string, userId?: string): Promise<Models.Error>;
    customersAuthMfaChallengeConfirm(
        paramsOrFirst: { challengeId: string, code: string, sessionSecret: string, userId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { challengeId: string, code: string, sessionSecret: string, userId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { challengeId: string, code: string, sessionSecret: string, userId?: string };
        } else {
            params = {
                challengeId: paramsOrFirst as string,
                code: rest[0] as string,
                sessionSecret: rest[1] as string,
                userId: rest[2] as string            
            };
        }
        
        const challengeId = params.challengeId;
        const code = params.code;
        const sessionSecret = params.sessionSecret;
        const userId = params.userId;

        if (typeof challengeId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "challengeId"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof sessionSecret === 'undefined') {
            throw new RevenexxException('Missing required parameter: "sessionSecret"');
        }

        const apiPath = '/v1/customers/auth/mfa/challenge';
        const apiPayload: Payload = {};
        if (typeof challengeId !== 'undefined') {
            apiPayload['challenge_id'] = challengeId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof sessionSecret !== 'undefined') {
            apiPayload['session_secret'] = sessionSecret;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * The same token as the sign-in link, delivered as a short code instead — for a buyer on a phone, where leaving for a mail client and coming back loses the checkout they were in the middle of. Redeemed with `PUT /customers/auth/otp`.
     *
     * @param {string} params.email - Who to send the code to. As with the sign-in link, an unknown address creates an account rather than failing.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthOtp(params: { email: string }): Promise<Models.Error>;
    /**
     * The same token as the sign-in link, delivered as a short code instead — for a buyer on a phone, where leaving for a mail client and coming back loses the checkout they were in the middle of. Redeemed with `PUT /customers/auth/otp`.
     *
     * @param {string} email - Who to send the code to. As with the sign-in link, an unknown address creates an account rather than failing.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthOtp(email: string): Promise<Models.Error>;
    customersAuthOtp(
        paramsOrFirst: { email: string } | string    
    ): Promise<Models.Error> {
        let params: { email: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string };
        } else {
            params = {
                email: paramsOrFirst as string            
            };
        }
        
        const email = params.email;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }

        const apiPath = '/v1/customers/auth/otp';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
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
     * The code the buyer typed, plus the `userId` the send answered with. Answers exactly what a password login answers — session, contact and effective grants — so a storefront never has to branch on how somebody signed in. The code is spent on first use and expires, so a second attempt with the same one is a 401 rather than a second session.
     *
     * @param {string} params.secret - The one-time secret the mailed code carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
     * @param {string} params.userId - The `userId` the mailed code carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthOtpConfirm(params: { secret: string, userId: string }): Promise<Models.Error>;
    /**
     * The code the buyer typed, plus the `userId` the send answered with. Answers exactly what a password login answers — session, contact and effective grants — so a storefront never has to branch on how somebody signed in. The code is spent on first use and expires, so a second attempt with the same one is a 401 rather than a second session.
     *
     * @param {string} secret - The one-time secret the mailed code carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
     * @param {string} userId - The `userId` the mailed code carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthOtpConfirm(secret: string, userId: string): Promise<Models.Error>;
    customersAuthOtpConfirm(
        paramsOrFirst: { secret: string, userId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { secret: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { secret: string, userId: string };
        } else {
            params = {
                secret: paramsOrFirst as string,
                userId: rest[0] as string            
            };
        }
        
        const secret = params.secret;
        const userId = params.userId;

        if (typeof secret === 'undefined') {
            throw new RevenexxException('Missing required parameter: "secret"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/otp';
        const apiPayload: Payload = {};
        if (typeof secret !== 'undefined') {
            apiPayload['secret'] = secret;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * Step one of two: a link goes to the address given, and `PUT /customers/auth/recovery` is what the buyer's browser comes back to. The identity service mints the token; the MAIL is this shop's own — the tenant's template, layout, language and sending domain, through the messaging service. The secret is NOT in this answer: it exists only inside the mailed link, which is the whole point of the two-step shape, and echoing it here would make the mail decorative. Nothing about the contact changes; the password only moves in step two.
     *
     * @param {string} params.email - Who to send the recovery mail to. An address nobody holds is not distinguished here — do not build an account-existence check on the answer.
     * @param {string} params.url - Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters — the first two are what the confirm call takes. Same shape the identity service's own mail used, so a storefront that already handles that link needs no change.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthRecovery(params: { email: string, url: string }): Promise<Models.Error>;
    /**
     * Step one of two: a link goes to the address given, and `PUT /customers/auth/recovery` is what the buyer's browser comes back to. The identity service mints the token; the MAIL is this shop's own — the tenant's template, layout, language and sending domain, through the messaging service. The secret is NOT in this answer: it exists only inside the mailed link, which is the whole point of the two-step shape, and echoing it here would make the mail decorative. Nothing about the contact changes; the password only moves in step two.
     *
     * @param {string} email - Who to send the recovery mail to. An address nobody holds is not distinguished here — do not build an account-existence check on the answer.
     * @param {string} url - Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters — the first two are what the confirm call takes. Same shape the identity service's own mail used, so a storefront that already handles that link needs no change.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthRecovery(email: string, url: string): Promise<Models.Error>;
    customersAuthRecovery(
        paramsOrFirst: { email: string, url: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { email: string, url: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, url: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                url: rest[0] as string            
            };
        }
        
        const email = params.email;
        const url = params.url;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof url === 'undefined') {
            throw new RevenexxException('Missing required parameter: "url"');
        }

        const apiPath = '/v1/customers/auth/recovery';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
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
     * Step two: the `userId` and `secret` the mailed link carried, plus the password the buyer just typed. The secret is spent on first use and expires, so a link cannot be replayed and a second attempt with the same one is a 401 rather than a second password change. The new password is in effect the moment this answers; what happens to sessions opened with the old one is the identity service's policy, not this app's.
     *
     * @param {string} params.password - The new password. It replaces the old one immediately; existing sessions are the identity service's business, not this app's.
     * @param {string} params.secret - The one-time secret from the mailed link. Only that value works — it is spent on first use and expires, and anything else is a 401, so no example here would be anything but a call that fails.
     * @param {string} params.userId - The `userId` the mailed link carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthRecoveryConfirm(params: { password: string, secret: string, userId: string }): Promise<Models.Error>;
    /**
     * Step two: the `userId` and `secret` the mailed link carried, plus the password the buyer just typed. The secret is spent on first use and expires, so a link cannot be replayed and a second attempt with the same one is a 401 rather than a second password change. The new password is in effect the moment this answers; what happens to sessions opened with the old one is the identity service's policy, not this app's.
     *
     * @param {string} password - The new password. It replaces the old one immediately; existing sessions are the identity service's business, not this app's.
     * @param {string} secret - The one-time secret from the mailed link. Only that value works — it is spent on first use and expires, and anything else is a 401, so no example here would be anything but a call that fails.
     * @param {string} userId - The `userId` the mailed link carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthRecoveryConfirm(password: string, secret: string, userId: string): Promise<Models.Error>;
    customersAuthRecoveryConfirm(
        paramsOrFirst: { password: string, secret: string, userId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { password: string, secret: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { password: string, secret: string, userId: string };
        } else {
            params = {
                password: paramsOrFirst as string,
                secret: rest[0] as string,
                userId: rest[1] as string            
            };
        }
        
        const password = params.password;
        const secret = params.secret;
        const userId = params.userId;

        if (typeof password === 'undefined') {
            throw new RevenexxException('Missing required parameter: "password"');
        }
        if (typeof secret === 'undefined') {
            throw new RevenexxException('Missing required parameter: "secret"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/recovery';
        const apiPayload: Payload = {};
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
        }
        if (typeof secret !== 'undefined') {
            apiPayload['secret'] = secret;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * One call writes the whole buyer: the contact this app is the system of record for, and the platform user behind its login. When the body names a company it also FOUNDS one — an organization, mirrored into platform auth as a team, with this contact as its admin. The tenant setting registration_mode decides what a registration IS. 'open' (the default, unchanged behaviour) creates a finished account: registration_status='approved', status='active', login works. 'approval_required' creates an APPLICATION: registration_status='pending', status='invited', the platform user exists with the applicant's own password but is DISABLED, and a newly founded organization is parked as 'blocked' — check `approval_required` in the response and show a 'we will get back to you' screen instead of logging the buyer in. The registration gates below are all evaluated BEFORE anything is written, and a failure after that point rolls the organization and the contact back together.
     *
     * @param {string} params.email - The buyer's address. It becomes the login AND the unique key of the contact, so a second registration with it is a 409 — including while the first one is still waiting for approval.
     * @param {string} params.password - The password the buyer chooses. It is hashed by the identity service at this moment and never travels again: an approval later enables the account, it does not issue a new credential.
     * @param {string} params.firstName - Given name. Optional: an ERP import often has only a mailbox.
     * @param {string} params.lastName - Family name. Optional for the same reason.
     * @param {string} params.locale - The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default. One of the store's own locales, or the call is a 400.
     * @param {string} params.organizationId - JOIN an existing company — the invite shape. Neither b2b_registration_enabled nor b2c_registration_enabled applies to it.
     * @param {string} params.organizationName - FOUND a new company, with this contact as its admin. This is what makes the registration a B2B one; leaving it out registers a standalone buyer.
     * @param {string} params.url - Where the welcome mail's button points — the buyer's first stop in this shop. Absent, the mail still goes out and simply carries no button. Ignored when the registration is an APPLICATION: there is no account to send anybody to yet.
     * @param {string} params.vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU. Required when the tenant's `organization_vat_id_required` is on, and checked BEFORE the company is created so a bad one leaves no half-founded organization behind.
     * @param {string} params.verificationUrl - Where the address-confirmation link points, when the tenant's `email_verification` asks for one on registration. `userId`, `secret` and `expire` are appended, and `PUT /customers/auth/verification` takes the first two. Without it the registration still succeeds and `verification_sent` is false — this app cannot invent a storefront URL, and a link pointing nowhere is worse than none.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthRegister(params: { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string, url?: string, vatId?: string, verificationUrl?: string }): Promise<Models.Error>;
    /**
     * One call writes the whole buyer: the contact this app is the system of record for, and the platform user behind its login. When the body names a company it also FOUNDS one — an organization, mirrored into platform auth as a team, with this contact as its admin. The tenant setting registration_mode decides what a registration IS. 'open' (the default, unchanged behaviour) creates a finished account: registration_status='approved', status='active', login works. 'approval_required' creates an APPLICATION: registration_status='pending', status='invited', the platform user exists with the applicant's own password but is DISABLED, and a newly founded organization is parked as 'blocked' — check `approval_required` in the response and show a 'we will get back to you' screen instead of logging the buyer in. The registration gates below are all evaluated BEFORE anything is written, and a failure after that point rolls the organization and the contact back together.
     *
     * @param {string} email - The buyer's address. It becomes the login AND the unique key of the contact, so a second registration with it is a 409 — including while the first one is still waiting for approval.
     * @param {string} password - The password the buyer chooses. It is hashed by the identity service at this moment and never travels again: an approval later enables the account, it does not issue a new credential.
     * @param {string} firstName - Given name. Optional: an ERP import often has only a mailbox.
     * @param {string} lastName - Family name. Optional for the same reason.
     * @param {string} locale - The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default. One of the store's own locales, or the call is a 400.
     * @param {string} organizationId - JOIN an existing company — the invite shape. Neither b2b_registration_enabled nor b2c_registration_enabled applies to it.
     * @param {string} organizationName - FOUND a new company, with this contact as its admin. This is what makes the registration a B2B one; leaving it out registers a standalone buyer.
     * @param {string} url - Where the welcome mail's button points — the buyer's first stop in this shop. Absent, the mail still goes out and simply carries no button. Ignored when the registration is an APPLICATION: there is no account to send anybody to yet.
     * @param {string} vatId - VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU. Required when the tenant's `organization_vat_id_required` is on, and checked BEFORE the company is created so a bad one leaves no half-founded organization behind.
     * @param {string} verificationUrl - Where the address-confirmation link points, when the tenant's `email_verification` asks for one on registration. `userId`, `secret` and `expire` are appended, and `PUT /customers/auth/verification` takes the first two. Without it the registration still succeeds and `verification_sent` is false — this app cannot invent a storefront URL, and a link pointing nowhere is worse than none.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthRegister(email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string, url?: string, vatId?: string, verificationUrl?: string): Promise<Models.Error>;
    customersAuthRegister(
        paramsOrFirst: { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string, url?: string, vatId?: string, verificationUrl?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string, url?: string, vatId?: string, verificationUrl?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { email: string, password: string, firstName?: string, lastName?: string, locale?: string, organizationId?: string, organizationName?: string, url?: string, vatId?: string, verificationUrl?: string };
        } else {
            params = {
                email: paramsOrFirst as string,
                password: rest[0] as string,
                firstName: rest[1] as string,
                lastName: rest[2] as string,
                locale: rest[3] as string,
                organizationId: rest[4] as string,
                organizationName: rest[5] as string,
                url: rest[6] as string,
                vatId: rest[7] as string,
                verificationUrl: rest[8] as string            
            };
        }
        
        const email = params.email;
        const password = params.password;
        const firstName = params.firstName;
        const lastName = params.lastName;
        const locale = params.locale;
        const organizationId = params.organizationId;
        const organizationName = params.organizationName;
        const url = params.url;
        const vatId = params.vatId;
        const verificationUrl = params.verificationUrl;

        if (typeof email === 'undefined') {
            throw new RevenexxException('Missing required parameter: "email"');
        }
        if (typeof password === 'undefined') {
            throw new RevenexxException('Missing required parameter: "password"');
        }

        const apiPath = '/v1/customers/auth/register';
        const apiPayload: Payload = {};
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
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof organizationName !== 'undefined') {
            apiPayload['organization_name'] = organizationName;
        }
        if (typeof password !== 'undefined') {
            apiPayload['password'] = password;
        }
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof vatId !== 'undefined') {
            apiPayload['vat_id'] = vatId;
        }
        if (typeof verificationUrl !== 'undefined') {
            apiPayload['verification_url'] = verificationUrl;
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
     * Confirm that the address belongs to the buyer. Needs no session: the verification is created through the identity service's users surface, because its account counterpart reads the authenticated user and a caller authenticating AS the user cannot see the secret it just created. The buyer still confirms with their own session, through `PUT /customers/auth/verification` — only the creation moved. Send it right after a registration, or from an account page.
     *
     * @param {string} params.url - Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters; the first two are what the confirm call takes.
     * @param {string} params.userId - The platform user whose address is being confirmed — `user_id` from the registration, or `session.userId` from a login.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthVerification(params: { url: string, userId: string }): Promise<Models.Error>;
    /**
     * Confirm that the address belongs to the buyer. Needs no session: the verification is created through the identity service's users surface, because its account counterpart reads the authenticated user and a caller authenticating AS the user cannot see the secret it just created. The buyer still confirms with their own session, through `PUT /customers/auth/verification` — only the creation moved. Send it right after a registration, or from an account page.
     *
     * @param {string} url - Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters; the first two are what the confirm call takes.
     * @param {string} userId - The platform user whose address is being confirmed — `user_id` from the registration, or `session.userId` from a login.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthVerification(url: string, userId: string): Promise<Models.Error>;
    customersAuthVerification(
        paramsOrFirst: { url: string, userId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { url: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { url: string, userId: string };
        } else {
            params = {
                url: paramsOrFirst as string,
                userId: rest[0] as string            
            };
        }
        
        const url = params.url;
        const userId = params.userId;

        if (typeof url === 'undefined') {
            throw new RevenexxException('Missing required parameter: "url"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/verification';
        const apiPayload: Payload = {};
        if (typeof url !== 'undefined') {
            apiPayload['url'] = url;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * The `userId` and `secret` the mailed link carried. The address counts as confirmed the moment this answers; the secret is spent, so the link cannot be replayed.
     *
     * @param {string} params.secret - The one-time secret the mailed link carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
     * @param {string} params.userId - The `userId` the mailed link carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersAuthVerificationConfirm(params: { secret: string, userId: string }): Promise<Models.Error>;
    /**
     * The `userId` and `secret` the mailed link carried. The address counts as confirmed the moment this answers; the secret is spent, so the link cannot be replayed.
     *
     * @param {string} secret - The one-time secret the mailed link carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
     * @param {string} userId - The `userId` the mailed link carried.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersAuthVerificationConfirm(secret: string, userId: string): Promise<Models.Error>;
    customersAuthVerificationConfirm(
        paramsOrFirst: { secret: string, userId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { secret: string, userId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { secret: string, userId: string };
        } else {
            params = {
                secret: paramsOrFirst as string,
                userId: rest[0] as string            
            };
        }
        
        const secret = params.secret;
        const userId = params.userId;

        if (typeof secret === 'undefined') {
            throw new RevenexxException('Missing required parameter: "secret"');
        }
        if (typeof userId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "userId"');
        }

        const apiPath = '/v1/customers/auth/verification';
        const apiPayload: Payload = {};
        if (typeof secret !== 'undefined') {
            apiPayload['secret'] = secret;
        }
        if (typeof userId !== 'undefined') {
            apiPayload['user_id'] = userId;
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
     * The capability the API gateway calls to turn a caller's X-Revenexx-Principal assertion into the permission set it forwards to every other app as X-Revenexx-Permissions. This app is the platform's role provider (manifest#provides_roles), and this is the hot path of every attributed storefront request — one contact read plus the tenant's role map. A blocked or pending contact always resolves with active=false; what its `permissions` then say is the tenant's blocked_contact_behavior setting — 'keep' (the default, the role's grants), 'catalog_only' or 'deny_all'.
     *
     * @param {string} params.contactId - The contact the caller is acting for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    customersPrincipalResolve(params: { contactId: string }): Promise<Models.Error>;
    /**
     * The capability the API gateway calls to turn a caller's X-Revenexx-Principal assertion into the permission set it forwards to every other app as X-Revenexx-Permissions. This app is the platform's role provider (manifest#provides_roles), and this is the hot path of every attributed storefront request — one contact read plus the tenant's role map. A blocked or pending contact always resolves with active=false; what its `permissions` then say is the tenant's blocked_contact_behavior setting — 'keep' (the default, the role's grants), 'catalog_only' or 'deny_all'.
     *
     * @param {string} contactId - The contact the caller is acting for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersPrincipalResolve(contactId: string): Promise<Models.Error>;
    customersPrincipalResolve(
        paramsOrFirst: { contactId: string } | string    
    ): Promise<Models.Error> {
        let params: { contactId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string };
        } else {
            params = {
                contactId: paramsOrFirst as string            
            };
        }
        
        const contactId = params.contactId;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/customers/principal/resolve';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
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
