import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class CampaignsCalendar {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Campaign windows and due tasks from this app; mail send times, promotion windows, automation live periods and page publish dates read from their own apps on every call. `sources` says which app answered.
     *
     * @param {string} params.from - Start of the range, a date or a time. Required.
     * @param {string} params.to - End of the range; a bare date means the whole day. At most 400 days after from.
     * @param {string} params.type - Comma-separated kinds: campaign, mailing, promotion, journey, page, task.
     * @param {string} params.market - Only campaigns in this market, or in no market.
     * @param {string} params.status - Only campaigns with this status.
     * @param {string} params.ownerId - Only campaigns of this owner.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    campaignsCalendarRead(params?: { from?: string, to?: string, type?: string, market?: string, status?: string, ownerId?: string }): Promise<{}>;
    /**
     * Campaign windows and due tasks from this app; mail send times, promotion windows, automation live periods and page publish dates read from their own apps on every call. `sources` says which app answered.
     *
     * @param {string} from - Start of the range, a date or a time. Required.
     * @param {string} to - End of the range; a bare date means the whole day. At most 400 days after from.
     * @param {string} type - Comma-separated kinds: campaign, mailing, promotion, journey, page, task.
     * @param {string} market - Only campaigns in this market, or in no market.
     * @param {string} status - Only campaigns with this status.
     * @param {string} ownerId - Only campaigns of this owner.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    campaignsCalendarRead(from?: string, to?: string, type?: string, market?: string, status?: string, ownerId?: string): Promise<{}>;
    campaignsCalendarRead(
        paramsOrFirst?: { from?: string, to?: string, type?: string, market?: string, status?: string, ownerId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { from?: string, to?: string, type?: string, market?: string, status?: string, ownerId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { from?: string, to?: string, type?: string, market?: string, status?: string, ownerId?: string };
        } else {
            params = {
                from: paramsOrFirst as string,
                to: rest[0] as string,
                type: rest[1] as string,
                market: rest[2] as string,
                status: rest[3] as string,
                ownerId: rest[4] as string            
            };
        }
        
        const from = params.from;
        const to = params.to;
        const type = params.type;
        const market = params.market;
        const status = params.status;
        const ownerId = params.ownerId;


        const apiPath = '/v1/campaigns/calendar';
        const apiPayload: Payload = {};
        if (typeof from !== 'undefined') {
            apiPayload['from'] = from;
        }
        if (typeof to !== 'undefined') {
            apiPayload['to'] = to;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
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
