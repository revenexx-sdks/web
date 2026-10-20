import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class MailingsHealth {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Sent, delivered, bounced, complained and unsubscribed over the mailings of the last 30 days, the rates, and `alert` when the complaint rate passes the setting. `bars` are the three rates as bar-list rows in the language of Accept-Language, with the counts behind them and the alert sentence on the complaint row.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsHealthRead(): Promise<{}> {

        const apiPath = '/v1/mailings/health';
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
}
