import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class MailingsBlocks {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The product, voucher and footer blocks: the keys each carries in a design and the variables that fill it per recipient.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    mailingsBlocksRead(): Promise<{}> {

        const apiPath = '/v1/mailings/blocks';
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
