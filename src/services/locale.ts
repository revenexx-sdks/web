import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Locale {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
     * 
     * ([IP Geolocation by DB-IP](https://db-ip.com))
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.Locale>}
     */
    localeGet(): Promise<Models.Locale> {

        const apiPath = '/v1/locale';
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
     * List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.LocaleCodeList>}
     */
    localeListCodes(): Promise<Models.LocaleCodeList> {

        const apiPath = '/v1/locale/codes';
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
     * List of all continents. You can use the locale header to get the data in a supported language.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContinentList>}
     */
    localeListContinents(): Promise<Models.ContinentList> {

        const apiPath = '/v1/locale/continents';
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
     * List of all countries. You can use the locale header to get the data in a supported language.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.CountryList>}
     */
    localeListCountries(): Promise<Models.CountryList> {

        const apiPath = '/v1/locale/countries';
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
     * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.CountryList>}
     */
    localeListCountriesEU(): Promise<Models.CountryList> {

        const apiPath = '/v1/locale/countries/eu';
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
     * List of all countries phone codes. You can use the locale header to get the data in a supported language.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.PhoneList>}
     */
    localeListCountriesPhones(): Promise<Models.PhoneList> {

        const apiPath = '/v1/locale/countries/phones';
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
     * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.CurrencyList>}
     */
    localeListCurrencies(): Promise<Models.CurrencyList> {

        const apiPath = '/v1/locale/currencies';
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
     * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.LanguageList>}
     */
    localeListLanguages(): Promise<Models.LanguageList> {

        const apiPath = '/v1/locale/languages';
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
