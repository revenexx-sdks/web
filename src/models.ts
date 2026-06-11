import { AttributeBooleanStatus } from "./enums/attribute-boolean-status"
import { AttributeDatetimeStatus } from "./enums/attribute-datetime-status"
import { AttributeEmailStatus } from "./enums/attribute-email-status"
import { AttributeEnumStatus } from "./enums/attribute-enum-status"
import { AttributeFloatStatus } from "./enums/attribute-float-status"
import { AttributeIntegerStatus } from "./enums/attribute-integer-status"
import { AttributeIpStatus } from "./enums/attribute-ip-status"
import { AttributeLineStatus } from "./enums/attribute-line-status"
import { AttributeLongtextStatus } from "./enums/attribute-longtext-status"
import { AttributeMediumtextStatus } from "./enums/attribute-mediumtext-status"
import { AttributePointStatus } from "./enums/attribute-point-status"
import { AttributePolygonStatus } from "./enums/attribute-polygon-status"
import { AttributeRelationshipStatus } from "./enums/attribute-relationship-status"
import { AttributeStringStatus } from "./enums/attribute-string-status"
import { AttributeTextStatus } from "./enums/attribute-text-status"
import { AttributeUrlStatus } from "./enums/attribute-url-status"
import { AttributeVarcharStatus } from "./enums/attribute-varchar-status"
import { ColumnBooleanStatus } from "./enums/column-boolean-status"
import { ColumnDatetimeStatus } from "./enums/column-datetime-status"
import { ColumnEmailStatus } from "./enums/column-email-status"
import { ColumnEnumStatus } from "./enums/column-enum-status"
import { ColumnFloatStatus } from "./enums/column-float-status"
import { ColumnIntegerStatus } from "./enums/column-integer-status"
import { ColumnIpStatus } from "./enums/column-ip-status"
import { ColumnLineStatus } from "./enums/column-line-status"
import { ColumnLongtextStatus } from "./enums/column-longtext-status"
import { ColumnMediumtextStatus } from "./enums/column-mediumtext-status"
import { ColumnPointStatus } from "./enums/column-point-status"
import { ColumnPolygonStatus } from "./enums/column-polygon-status"
import { ColumnRelationshipStatus } from "./enums/column-relationship-status"
import { ColumnStringStatus } from "./enums/column-string-status"
import { ColumnTextStatus } from "./enums/column-text-status"
import { ColumnUrlStatus } from "./enums/column-url-status"
import { ColumnVarcharStatus } from "./enums/column-varchar-status"
import { DatabaseType } from "./enums/database-type"
import { DeploymentStatus } from "./enums/deployment-status"
import { ExecutionStatus } from "./enums/execution-status"
import { ExecutionTrigger } from "./enums/execution-trigger"
import { HealthAntivirusStatus } from "./enums/health-antivirus-status"
import { HealthStatusStatus } from "./enums/health-status-status"
import { IndexStatus } from "./enums/index-status"
import { MessageStatus } from "./enums/message-status"

/**
 * Revenexx Models
 */
export namespace Models {

    declare const __default: unique symbol;

    /**
     * 
     */
    export type Address = {
        /**
         * 
         */
        city?: string;
        /**
         * 
         */
        company?: string | null;
        /**
         * 
         */
        contact_id?: string | null;
        /**
         * 
         */
        country?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_default?: boolean;
        /**
         * 
         */
        name?: string | null;
        /**
         * 
         */
        organization_id?: string | null;
        /**
         * 
         */
        phone?: string | null;
        /**
         * 
         */
        region?: string | null;
        /**
         * 
         */
        street?: string;
        /**
         * 
         */
        street2?: string | null;
        /**
         * 
         */
        type?: string;
        /**
         * 
         */
        updated_at?: string;
        /**
         * 
         */
        zip?: string;
    }

    /**
     * 
     */
    export type AssetFamilies = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        naming_convention?: object | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type Assets = {
        /**
         * 
         */
        asset_family_id?: string;
        /**
         * 
         */
        attribute_values?: object;
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        media_uuid?: string | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type AssociationTypes = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_quantified?: boolean;
        /**
         * 
         */
        is_two_way?: boolean;
        /**
         * 
         */
        labels?: object | null;
    }

    /**
     * 
     */
    export type AttributeGroups = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type AttributeOptions = {
        /**
         * 
         */
        attribute_id?: string;
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        swatch?: object | null;
    }

    /**
     * 
     */
    export type Attributes = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        config?: object | null;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        entity_ref?: string | null;
        /**
         * 
         */
        entity_type?: string;
        /**
         * 
         */
        group_id?: string | null;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_filterable?: boolean;
        /**
         * 
         */
        is_unique?: boolean;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        localizable?: boolean;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        scopable?: boolean;
        /**
         * 
         */
        type?: string;
        /**
         * 
         */
        updated_at?: string;
        /**
         * 
         */
        usable_in_grid?: boolean;
        /**
         * 
         */
        validation?: object | null;
    }

    /**
     * 
     */
    export type AuthLoginRequest = {
        /**
         * 
         */
        email: string;
        /**
         * 
         */
        password: string;
    }

    /**
     * 
     */
    export type AuthLoginResponse = {
        /**
         * 
         */
        contact?: Contact;
        /**
         * 
         */
        session?: AuthSession;
    }

    /**
     * 
     */
    export type AuthLogoutRequest = {
        /**
         * 
         */
        session_id: string;
        /**
         * 
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthMeRequest = {
        /**
         * 
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthMeResponse = {
        /**
         * 
         */
        contact?: Contact;
        /**
         * 
         */
        user?: object;
    }

    /**
     * 
     */
    export type AuthRecoveryConfirmRequest = {
        /**
         * 
         */
        password: string;
        /**
         * 
         */
        secret: string;
        /**
         * 
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthRecoveryRequest = {
        /**
         * 
         */
        email: string;
        /**
         * Redirect URL carrying userId + secret.
         */
        url: string;
    }

    /**
     * 
     */
    export type AuthRegisterRequest = {
        /**
         * 
         */
        email: string;
        /**
         * 
         */
        first_name?: string;
        /**
         * 
         */
        last_name?: string;
        /**
         * BCP 47, e.g. de-DE
         */
        locale?: string;
        /**
         * Join an existing organization.
         */
        organization_id?: string;
        /**
         * Found a new organization; the contact becomes its admin.
         */
        organization_name?: string;
        /**
         * 
         */
        password: string;
    }

    /**
     * 
     */
    export type AuthRegisterResponse = {
        /**
         * 
         */
        contact?: Contact;
        /**
         * 
         */
        user_id?: string;
    }

    /**
     * Platform auth session. Treat `secret` as a credential — the trusted BFF stores it server-side (HTTP-only cookie), never in the browser.
     */
    export type AuthSession = {
        /**
         * 
         */
        $id?: string;
        /**
         * 
         */
        expire?: string;
        /**
         * 
         */
        provider?: string;
        /**
         * 
         */
        secret?: string;
        /**
         * 
         */
        userId?: string;
    }

    /**
     * 
     */
    export type Cart = {
        /**
         * 
         */
        abandoned_at?: string | null;
        /**
         * 
         */
        channel_id?: string | null;
        /**
         * 
         */
        contact_id?: string | null;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        currency?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_current?: boolean;
        /**
         * 
         */
        item_count?: number;
        /**
         * 
         */
        market_id?: string | null;
        /**
         * 
         */
        merged_into_cart_id?: string | null;
        /**
         * 
         */
        metadata?: object | null;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        order_ref?: string | null;
        /**
         * 
         */
        ordered_at?: string | null;
        /**
         * 
         */
        session_key?: string | null;
        /**
         * 
         */
        status?: string;
        /**
         * 
         */
        subtotal?: number;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type CartItem = {
        /**
         * 
         */
        cart_id?: string;
        /**
         * 
         */
        configuration?: object | null;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        currency?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        line_total?: number;
        /**
         * 
         */
        metadata?: object | null;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        product_id?: string | null;
        /**
         * 
         */
        quantity?: number;
        /**
         * 
         */
        sku?: string | null;
        /**
         * 
         */
        snapshot?: object | null;
        /**
         * 
         */
        tax_rate?: number;
        /**
         * 
         */
        type?: string;
        /**
         * 
         */
        unit?: string | null;
        /**
         * 
         */
        unit_price?: number;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type Categories = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        parent_id?: string | null;
        /**
         * 
         */
        path?: string | null;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        updated_at?: string;
        /**
         * 
         */
        values?: object | null;
    }

    /**
     * 
     */
    export type Channel = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_default?: boolean;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        status?: string;
        /**
         * 
         */
        type?: string;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ChannelDefaults = {
        /**
         * Channel codes created by this call.
         */
        created?: string[];
        /**
         * Default channel codes that already existed.
         */
        existing?: string[];
    }

    /**
     * 
     */
    export type Contact = {
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        email?: string;
        /**
         * 
         */
        external_user_id?: string | null;
        /**
         * 
         */
        first_name?: string | null;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_primary?: boolean;
        /**
         * 
         */
        last_name?: string | null;
        /**
         * 
         */
        locale?: string | null;
        /**
         * 
         */
        organization_id?: string | null;
        /**
         * 
         */
        phone?: string | null;
        /**
         * 
         */
        role?: string;
        /**
         * 
         */
        status?: string;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * Uniform gateway error response.
     */
    export type Error = {
        /**
         * 
         */
        error: boolean;
        /**
         * 
         */
        message: string;
    }

    /**
     * 
     */
    export type Families = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        image_attribute?: string | null;
        /**
         * 
         */
        label_attribute?: string | null;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type FamilyAttributes = {
        /**
         * 
         */
        attribute_id?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        family_id?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_required?: boolean;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        required_channels?: object | null;
    }

    /**
     * 
     */
    export type FamilyVariants = {
        /**
         * 
         */
        axes?: object | null;
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        family_id?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type Greeting = {
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        locale?: string;
        /**
         * 
         */
        message?: string;
        /**
         * 
         */
        metadata?: object | null;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        tenant_id?: string;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type IoProfile = {
        /**
         * 
         */
        apply_mode?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        direction?: string;
        /**
         * 
         */
        entity?: string;
        /**
         * 
         */
        format?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_template?: boolean;
        /**
         * 
         */
        mapping?: object | null;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        options?: object | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type Market = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        currency?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_default?: boolean;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        status?: string;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type MarketContext = {
        /**
         * 
         */
        locales?: MarketLocale[];
        /**
         * 
         */
        market?: Market;
        /**
         * 
         */
        tax_classes?: MarketTaxClass[];
    }

    /**
     * 
     */
    export type MarketLocale = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        country?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_default?: boolean;
        /**
         * 
         */
        language?: string;
        /**
         * 
         */
        market_id?: string;
        /**
         * 
         */
        position?: number;
    }

    /**
     * 
     */
    export type MarketTaxClass = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        is_default?: boolean;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        market_id?: string;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        rate?: number;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type MeasurementFamilies = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        standard_unit?: string;
        /**
         * 
         */
        units?: object | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type Organization = {
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        external_team_id?: string | null;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        name?: string;
        /**
         * 
         */
        settings?: object | null;
        /**
         * 
         */
        status?: string;
        /**
         * 
         */
        updated_at?: string;
        /**
         * 
         */
        vat_id?: string | null;
    }

    /**
     * 
     */
    export type ProductAssociations = {
        /**
         * 
         */
        association_type_id?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        product_id?: string;
        /**
         * 
         */
        quantity?: number | null;
        /**
         * 
         */
        target_product_id?: string;
    }

    /**
     * 
     */
    export type ProductCategories = {
        /**
         * 
         */
        category_id?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        position?: number;
        /**
         * 
         */
        product_id?: string;
    }

    /**
     * 
     */
    export type Products = {
        /**
         * 
         */
        attribute_values?: object;
        /**
         * 
         */
        completeness?: object | null;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        deleted_at?: string | null;
        /**
         * 
         */
        enabled?: boolean;
        /**
         * 
         */
        family_id?: string | null;
        /**
         * 
         */
        family_variant_id?: string | null;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        kind?: string;
        /**
         * 
         */
        parent_id?: string | null;
        /**
         * 
         */
        quantified_associations?: object | null;
        /**
         * 
         */
        sku?: string;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ReferenceEntities = {
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        image?: string | null;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ReferenceEntityRecords = {
        /**
         * 
         */
        attribute_values?: object;
        /**
         * 
         */
        code?: string;
        /**
         * 
         */
        created_at?: string;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        labels?: object | null;
        /**
         * 
         */
        reference_entity_id?: string;
        /**
         * 
         */
        updated_at?: string;
    }

    /**
     * AlgoArgon2
     */
    export type AlgoArgon2 = {
        /**
         * Memory used to compute hash.
         */
        memoryCost: number;
        /**
         * Number of threads used to compute hash.
         */
        threads: number;
        /**
         * Amount of time consumed to compute hash
         */
        timeCost: number;
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoBcrypt
     */
    export type AlgoBcrypt = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoMD5
     */
    export type AlgoMd5 = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoPHPass
     */
    export type AlgoPhpass = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoScrypt
     */
    export type AlgoScrypt = {
        /**
         * CPU complexity of computed hash.
         */
        costCpu: number;
        /**
         * Memory complexity of computed hash.
         */
        costMemory: number;
        /**
         * Parallelization of computed hash.
         */
        costParallel: number;
        /**
         * Length used to compute hash.
         */
        length: number;
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoScryptModified
     */
    export type AlgoScryptModified = {
        /**
         * Salt used to compute hash.
         */
        salt: string;
        /**
         * Separator used to compute hash.
         */
        saltSeparator: string;
        /**
         * Key used to compute hash.
         */
        signerKey: string;
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AlgoSHA
     */
    export type AlgoSha = {
        /**
         * Algo type.
         */
        type: string;
    }

    /**
     * AttributeBoolean
     */
    export type AttributeBoolean = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeBooleanStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeDatetime
     */
    export type AttributeDatetime = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * ISO 8601 format.
         */
        format: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeDatetimeStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeEmail
     */
    export type AttributeEmail = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeEmailStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeEnum
     */
    export type AttributeEnum = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Array of elements in enumerated type.
         */
        elements: string[];
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeEnumStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeFloat
     */
    export type AttributeFloat = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeFloatStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeInteger
     */
    export type AttributeInteger = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number | bigint;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number | bigint;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeIntegerStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeIP
     */
    export type AttributeIp = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeIpStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeLine
     */
    export type AttributeLine = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeLineStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * Attributes List
     */
    export type AttributeList = {
        /**
         * List of attributes.
         */
        attributes: any[];
        /**
         * Total number of attributes in the given collection.
         */
        total: number;
    }

    /**
     * AttributeLongtext
     */
    export type AttributeLongtext = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeLongtextStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeMediumtext
     */
    export type AttributeMediumtext = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeMediumtextStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributePoint
     */
    export type AttributePoint = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributePointStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributePolygon
     */
    export type AttributePolygon = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributePolygonStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeRelationship
     */
    export type AttributeRelationship = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * How deleting the parent document will propagate to child documents.
         */
        onDelete: string;
        /**
         * The ID of the related collection.
         */
        relatedCollection: string;
        /**
         * The type of the relationship.
         */
        relationType: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Whether this is the parent or child side of the relationship
         */
        side: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeRelationshipStatus;
        /**
         * Is the relationship two-way?
         */
        twoWay: boolean;
        /**
         * The key of the two-way relationship.
         */
        twoWayKey: string;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeString
     */
    export type AttributeString = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Defines whether this attribute is encrypted or not.
         */
        encrypt?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeStringStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeText
     */
    export type AttributeText = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeTextStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeURL
     */
    export type AttributeUrl = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeUrlStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * AttributeVarchar
     */
    export type AttributeVarchar = {
        /**
         * Attribute creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Attribute update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an attribute.
         */
        error: string;
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: AttributeVarcharStatus;
        /**
         * Attribute type.
         */
        type: string;
    }

    /**
     * Bucket
     */
    export type Bucket = {
        /**
         * Bucket creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Bucket ID.
         */
        $id: string;
        /**
         * Bucket permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Bucket update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Allowed file extensions.
         */
        allowedFileExtensions: string[];
        /**
         * Virus scanning is enabled.
         */
        antivirus: boolean;
        /**
         * Compression algorithm chosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).
         */
        compression: string;
        /**
         * Bucket enabled.
         */
        enabled: boolean;
        /**
         * Bucket is encrypted.
         */
        encryption: boolean;
        /**
         * Whether file-level security is enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        fileSecurity: boolean;
        /**
         * Maximum file size supported.
         */
        maximumFileSize: number;
        /**
         * Bucket name.
         */
        name: string;
        /**
         * Total size of this bucket in bytes.
         */
        totalSize: number;
        /**
         * Image transformations are enabled.
         */
        transformations: boolean;
    }

    /**
     * Buckets List
     */
    export type BucketList = {
        /**
         * List of buckets.
         */
        buckets: Bucket[];
        /**
         * Total number of buckets that matched your query.
         */
        total: number;
    }

    /**
     * Collection
     */
    export type Collection = {
        /**
         * Collection creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Collection ID.
         */
        $id: string;
        /**
         * Collection permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Collection update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Collection attributes.
         */
        attributes: any[];
        /**
         * Maximum document size in bytes. Returns 0 when no limit applies.
         */
        bytesMax: number;
        /**
         * Currently used document size in bytes based on defined attributes.
         */
        bytesUsed: number;
        /**
         * Database ID.
         */
        databaseId: string;
        /**
         * Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        documentSecurity: boolean;
        /**
         * Collection enabled. Can be 'enabled' or 'disabled'. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Collection indexes.
         */
        indexes: Index[];
        /**
         * Collection name.
         */
        name: string;
    }

    /**
     * Collections List
     */
    export type CollectionList = {
        /**
         * List of collections.
         */
        collections: Collection[];
        /**
         * Total number of collections that matched your query.
         */
        total: number;
    }

    /**
     * ColumnBoolean
     */
    export type ColumnBoolean = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnBooleanStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnDatetime
     */
    export type ColumnDatetime = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * ISO 8601 format.
         */
        format: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnDatetimeStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnEmail
     */
    export type ColumnEmail = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnEmailStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnEnum
     */
    export type ColumnEnum = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Array of elements in enumerated type.
         */
        elements: string[];
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnEnumStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnFloat
     */
    export type ColumnFloat = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnFloatStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * Index
     */
    export type ColumnIndex = {
        /**
         * Index creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Index ID.
         */
        $id: string;
        /**
         * Index update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Index columns.
         */
        columns: string[];
        /**
         * Error message. Displays error generated on failure of creating or deleting an index.
         */
        error: string;
        /**
         * Index Key.
         */
        key: string;
        /**
         * Index columns length.
         */
        lengths: number[];
        /**
         * Index orders.
         */
        orders?: string[];
        /**
         * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Index type.
         */
        type: string;
    }

    /**
     * Column Indexes List
     */
    export type ColumnIndexList = {
        /**
         * List of indexes.
         */
        indexes: ColumnIndex[];
        /**
         * Total number of indexes that matched your query.
         */
        total: number;
    }

    /**
     * ColumnInteger
     */
    export type ColumnInteger = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number | bigint;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number | bigint;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnIntegerStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnIP
     */
    export type ColumnIp = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnIpStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnLine
     */
    export type ColumnLine = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnLineStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * Columns List
     */
    export type ColumnList = {
        /**
         * List of columns.
         */
        columns: any[];
        /**
         * Total number of columns in the given table.
         */
        total: number;
    }

    /**
     * ColumnLongtext
     */
    export type ColumnLongtext = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnLongtextStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnMediumtext
     */
    export type ColumnMediumtext = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnMediumtextStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnPoint
     */
    export type ColumnPoint = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnPointStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnPolygon
     */
    export type ColumnPolygon = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnPolygonStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnRelationship
     */
    export type ColumnRelationship = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * How deleting the parent document will propagate to child documents.
         */
        onDelete: string;
        /**
         * The ID of the related table.
         */
        relatedTable: string;
        /**
         * The type of the relationship.
         */
        relationType: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Whether this is the parent or child side of the relationship
         */
        side: string;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnRelationshipStatus;
        /**
         * Is the relationship two-way?
         */
        twoWay: boolean;
        /**
         * The key of the two-way relationship.
         */
        twoWayKey: string;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnString
     */
    export type ColumnString = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Defines whether this column is encrypted or not.
         */
        encrypt?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column size.
         */
        size: number;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnStringStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnText
     */
    export type ColumnText = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnTextStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnURL
     */
    export type ColumnUrl = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * String format.
         */
        format: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnUrlStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * ColumnVarchar
     */
    export type ColumnVarchar = {
        /**
         * Column creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Column update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is column an array?
         */
        array?: boolean;
        /**
         * Error message. Displays error generated on failure of creating or deleting an column.
         */
        error: string;
        /**
         * Column Key.
         */
        key: string;
        /**
         * Is column required?
         */
        required: boolean;
        /**
         * Column size.
         */
        size: number;
        /**
         * Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: ColumnVarcharStatus;
        /**
         * Column type.
         */
        type: string;
    }

    /**
     * Continent
     */
    export type Continent = {
        /**
         * Continent two letter code.
         */
        code: string;
        /**
         * Continent name.
         */
        name: string;
    }

    /**
     * Continents List
     */
    export type ContinentList = {
        /**
         * List of continents.
         */
        continents: Continent[];
        /**
         * Total number of continents that matched your query.
         */
        total: number;
    }

    /**
     * Country
     */
    export type Country = {
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        code: string;
        /**
         * Country name.
         */
        name: string;
    }

    /**
     * Countries List
     */
    export type CountryList = {
        /**
         * List of countries.
         */
        countries: Country[];
        /**
         * Total number of countries that matched your query.
         */
        total: number;
    }

    /**
     * Currency
     */
    export type Currency = {
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
         */
        code: string;
        /**
         * Number of decimal digits.
         */
        decimalDigits: number;
        /**
         * Currency name.
         */
        name: string;
        /**
         * Currency plural name
         */
        namePlural: string;
        /**
         * Currency digit rounding.
         */
        rounding: number;
        /**
         * Currency symbol.
         */
        symbol: string;
        /**
         * Currency native symbol.
         */
        symbolNative: string;
    }

    /**
     * Currencies List
     */
    export type CurrencyList = {
        /**
         * List of currencies.
         */
        currencies: Currency[];
        /**
         * Total number of currencies that matched your query.
         */
        total: number;
    }

    /**
     * Database
     */
    export type Database = {
        /**
         * Database creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Database ID.
         */
        $id: string;
        /**
         * Database update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * If database is enabled. Can be 'enabled' or 'disabled'. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Database name.
         */
        name: string;
        /**
         * Database type.
         */
        type: DatabaseType;
    }

    /**
     * Databases List
     */
    export type DatabaseList = {
        /**
         * List of databases.
         */
        databases: Database[];
        /**
         * Total number of databases that matched your query.
         */
        total: number;
    }

    /**
     * Deployment
     */
    export type Deployment = {
        /**
         * Deployment creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Deployment ID.
         */
        $id: string;
        /**
         * Deployment update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Whether the deployment should be automatically activated.
         */
        activate: boolean;
        /**
         * Raw billing.json bytes captured from the source archive at deploy time. Empty when no billing.json was shipped (private app).
         */
        billingJson: string;
        /**
         * The current build time in seconds.
         */
        buildDuration: number;
        /**
         * The current build ID.
         */
        buildId: string;
        /**
         * The build logs.
         */
        buildLogs: string;
        /**
         * The build output size in bytes.
         */
        buildSize: number;
        /**
         * The entrypoint file to use to execute the deployment code.
         */
        entrypoint: string;
        /**
         * Raw manifest.json bytes captured from the source archive at deploy time. Empty for legacy Function/Site deployments without a manifest.
         */
        manifestJson: string;
        /**
         * The branch of the vcs repository
         */
        providerBranch: string;
        /**
         * The branch of the vcs repository
         */
        providerBranchUrl: string;
        /**
         * The name of vcs commit author
         */
        providerCommitAuthor: string;
        /**
         * The url of vcs commit author
         */
        providerCommitAuthorUrl: string;
        /**
         * The commit hash of the vcs commit
         */
        providerCommitHash: string;
        /**
         * The commit message
         */
        providerCommitMessage: string;
        /**
         * The url of the vcs commit
         */
        providerCommitUrl: string;
        /**
         * The name of the vcs provider repository
         */
        providerRepositoryName: string;
        /**
         * The name of the vcs provider repository owner
         */
        providerRepositoryOwner: string;
        /**
         * The url of the vcs provider repository
         */
        providerRepositoryUrl: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * Screenshot with dark theme preference file ID.
         */
        screenshotDark: string;
        /**
         * Screenshot with light theme preference file ID.
         */
        screenshotLight: string;
        /**
         * The code size in bytes.
         */
        sourceSize: number;
        /**
         * The deployment status. Possible values are "waiting", "processing", "building", "ready", "canceled" and "failed".
         */
        status: DeploymentStatus;
        /**
         * The total size in bytes (source and build output).
         */
        totalSize: number;
        /**
         * Type of deployment.
         */
        type: string;
    }

    /**
     * Deployments List
     */
    export type DeploymentList = {
        /**
         * List of deployments.
         */
        deployments: Deployment[];
        /**
         * Total number of deployments that matched your query.
         */
        total: number;
    }

    /**
     * Document
     */
    export type Document = {
        /**
         * Collection ID.
         */
        $collectionId: string;
        /**
         * Document creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Database ID.
         */
        $databaseId: string;
        /**
         * Document ID.
         */
        $id: string;
        /**
         * Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Document automatically incrementing ID.
         */
        $sequence: number;
        /**
         * Document update date in ISO 8601 format.
         */
        $updatedAt: string;
    }

    export type DefaultDocument = Document & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Documents List
     */
    export type DocumentList<Document extends Models.Document = Models.DefaultDocument> = {
        /**
         * List of documents.
         */
        documents: Document[];
        /**
         * Total number of documents that matched your query.
         */
        total: number;
    }

    /**
     * Execution
     */
    export type Execution = {
        /**
         * Execution creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Execution ID.
         */
        $id: string;
        /**
         * Execution roles.
         */
        $permissions: string[];
        /**
         * Execution update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Function's deployment ID used to create the execution.
         */
        deploymentId: string;
        /**
         * Resource(function/site) execution duration in seconds.
         */
        duration: number;
        /**
         * Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        errors: string;
        /**
         * Function ID.
         */
        functionId: string;
        /**
         * Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        logs: string;
        /**
         * HTTP request headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
         */
        requestHeaders: Headers[];
        /**
         * HTTP request method type.
         */
        requestMethod: string;
        /**
         * HTTP request path and query.
         */
        requestPath: string;
        /**
         * HTTP response body. This will return empty unless execution is created as synchronous.
         */
        responseBody: string;
        /**
         * HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.
         */
        responseHeaders: Headers[];
        /**
         * HTTP response status code.
         */
        responseStatusCode: number;
        /**
         * The scheduled time for execution. If left empty, execution will be queued immediately.
         */
        scheduledAt?: string;
        /**
         * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, `failed`, or `scheduled`.
         */
        status: ExecutionStatus;
        /**
         * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
         */
        trigger: ExecutionTrigger;
    }

    /**
     * Executions List
     */
    export type ExecutionList = {
        /**
         * List of executions.
         */
        executions: Execution[];
        /**
         * Total number of executions that matched your query.
         */
        total: number;
    }

    /**
     * File
     */
    export type File = {
        /**
         * File creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * File ID.
         */
        $id: string;
        /**
         * File permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * File update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Bucket ID.
         */
        bucketId: string;
        /**
         * Total number of chunks available
         */
        chunksTotal: number;
        /**
         * Total number of chunks uploaded
         */
        chunksUploaded: number;
        /**
         * Compression algorithm used for the file. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).
         */
        compression: string;
        /**
         * Whether file contents are encrypted at rest.
         */
        encryption: boolean;
        /**
         * File mime type.
         */
        mimeType: string;
        /**
         * File name.
         */
        name: string;
        /**
         * File MD5 signature.
         */
        signature: string;
        /**
         * File original size in bytes.
         */
        sizeOriginal: number;
    }

    /**
     * Files List
     */
    export type FileList = {
        /**
         * List of files.
         */
        files: File[];
        /**
         * Total number of files that matched your query.
         */
        total: number;
    }

    /**
     * Framework
     */
    export type Framework = {
        /**
         * List of supported adapters.
         */
        adapters: FrameworkAdapter[];
        /**
         * Default runtime version.
         */
        buildRuntime: string;
        /**
         * Framework key.
         */
        key: string;
        /**
         * Framework Name.
         */
        name: string;
        /**
         * List of supported runtime versions.
         */
        runtimes: string[];
    }

    /**
     * Framework Adapter
     */
    export type FrameworkAdapter = {
        /**
         * Default command to build site into output directory.
         */
        buildCommand: string;
        /**
         * Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.
         */
        fallbackFile: string;
        /**
         * Default command to download dependencies.
         */
        installCommand: string;
        /**
         * Adapter key.
         */
        key: string;
        /**
         * Default output directory of build.
         */
        outputDirectory: string;
    }

    /**
     * Frameworks List
     */
    export type FrameworkList = {
        /**
         * List of frameworks.
         */
        frameworks: Framework[];
        /**
         * Total number of frameworks that matched your query.
         */
        total: number;
    }

    /**
     * Function
     */
    export type Function = {
        /**
         * Function creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Function ID.
         */
        $id: string;
        /**
         * Function update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The build command used to build the deployment.
         */
        commands: string;
        /**
         * Active deployment creation date in ISO 8601 format.
         */
        deploymentCreatedAt: string;
        /**
         * Function's active deployment ID.
         */
        deploymentId: string;
        /**
         * Function enabled.
         */
        enabled: boolean;
        /**
         * The entrypoint file used to execute the deployment.
         */
        entrypoint: string;
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Execution permissions.
         */
        execute: string[];
        /**
         * Function VCS (Version Control System) installation id.
         */
        installationId: string;
        /**
         * Latest deployment creation date in ISO 8601 format.
         */
        latestDeploymentCreatedAt: string;
        /**
         * Function's latest deployment ID.
         */
        latestDeploymentId: string;
        /**
         * Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".
         */
        latestDeploymentStatus: string;
        /**
         * Is the function deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.
         */
        live: boolean;
        /**
         * When disabled, executions will exclude logs and errors, and will be slightly faster.
         */
        logging: boolean;
        /**
         * Function name.
         */
        name: string;
        /**
         * VCS (Version Control System) branch name
         */
        providerBranch: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * Path to function in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
         */
        providerSilentMode: boolean;
        /**
         * Function execution and build runtime.
         */
        runtime: string;
        /**
         * Function execution schedule in CRON format.
         */
        schedule: string;
        /**
         * Allowed permission scopes.
         */
        scopes: string[];
        /**
         * Machine specification for builds and executions.
         */
        specification: string;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
        /**
         * Function variables.
         */
        vars: Variable[];
        /**
         * Version of Open Runtimes used for the function.
         */
        version: string;
    }

    /**
     * Functions List
     */
    export type FunctionList = {
        /**
         * List of functions.
         */
        functions: Function[];
        /**
         * Total number of functions that matched your query.
         */
        total: number;
    }

    /**
     * Headers
     */
    export type Headers = {
        /**
         * Header name.
         */
        name: string;
        /**
         * Header value.
         */
        value: string;
    }

    /**
     * Health Antivirus
     */
    export type HealthAntivirus = {
        /**
         * Antivirus status. Possible values are: `disabled`, `offline`, `online`
         */
        status: HealthAntivirusStatus;
        /**
         * Antivirus version.
         */
        version: string;
    }

    /**
     * Health Certificate
     */
    export type HealthCertificate = {
        /**
         * Issuer organisation
         */
        issuerOrganisation: string;
        /**
         * Certificate name
         */
        name: string;
        /**
         * Signature type SN
         */
        signatureTypeSN: string;
        /**
         * Subject SN
         */
        subjectSN: string;
        /**
         * Valid from
         */
        validFrom: string;
        /**
         * Valid to
         */
        validTo: string;
    }

    /**
     * Health Queue
     */
    export type HealthQueue = {
        /**
         * Amount of actions in the queue.
         */
        size: number;
    }

    /**
     * Health Status
     */
    export type HealthStatus = {
        /**
         * Name of the service.
         */
        name: string;
        /**
         * Duration in milliseconds how long the health check took.
         */
        ping: number;
        /**
         * Service status. Possible values are: `pass`, `fail`
         */
        status: HealthStatusStatus;
    }

    /**
     * Status List
     */
    export type HealthStatusList = {
        /**
         * List of statuses.
         */
        statuses: HealthStatus[];
        /**
         * Total number of statuses that matched your query.
         */
        total: number;
    }

    /**
     * Health Time
     */
    export type HealthTime = {
        /**
         * Difference of unix remote and local timestamps in milliseconds.
         */
        diff: number;
        /**
         * Current unix timestamp of local server where Appwrite runs.
         */
        localTime: number;
        /**
         * Current unix timestamp on trustful remote server.
         */
        remoteTime: number;
    }

    /**
     * Identity
     */
    export type Identity = {
        /**
         * Identity creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Identity ID.
         */
        $id: string;
        /**
         * Identity update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Identity Provider.
         */
        provider: string;
        /**
         * Identity Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * The date of when the access token expires in ISO 8601 format.
         */
        providerAccessTokenExpiry: string;
        /**
         * Email of the User in the Identity Provider.
         */
        providerEmail: string;
        /**
         * Identity Provider Refresh Token.
         */
        providerRefreshToken: string;
        /**
         * ID of the User in the Identity Provider.
         */
        providerUid: string;
        /**
         * User ID.
         */
        userId: string;
    }

    /**
     * Identities List
     */
    export type IdentityList = {
        /**
         * List of identities.
         */
        identities: Identity[];
        /**
         * Total number of identities that matched your query.
         */
        total: number;
    }

    /**
     * Index
     */
    export type Index = {
        /**
         * Index creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Index ID.
         */
        $id: string;
        /**
         * Index update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Index attributes.
         */
        attributes: string[];
        /**
         * Error message. Displays error generated on failure of creating or deleting an index.
         */
        error: string;
        /**
         * Index key.
         */
        key: string;
        /**
         * Index attributes length.
         */
        lengths: number[];
        /**
         * Index orders.
         */
        orders?: string[];
        /**
         * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: IndexStatus;
        /**
         * Index type.
         */
        type: string;
    }

    /**
     * Indexes List
     */
    export type IndexList = {
        /**
         * List of indexes.
         */
        indexes: Index[];
        /**
         * Total number of indexes that matched your query.
         */
        total: number;
    }

    /**
     * JWT
     */
    export type Jwt = {
        /**
         * JWT encoded string.
         */
        jwt: string;
    }

    /**
     * Language
     */
    export type Language = {
        /**
         * Language two-character ISO 639-1 codes.
         */
        code: string;
        /**
         * Language name.
         */
        name: string;
        /**
         * Language native name.
         */
        nativeName: string;
    }

    /**
     * Languages List
     */
    export type LanguageList = {
        /**
         * List of languages.
         */
        languages: Language[];
        /**
         * Total number of languages that matched your query.
         */
        total: number;
    }

    /**
     * Locale
     */
    export type Locale = {
        /**
         * Continent name. This field support localization.
         */
        continent: string;
        /**
         * Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.
         */
        continentCode: string;
        /**
         * Country name. This field support localization.
         */
        country: string;
        /**
         * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
         */
        countryCode: string;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
         */
        currency: string;
        /**
         * True if country is part of the European Union.
         */
        eu: boolean;
        /**
         * User IP address.
         */
        ip: string;
    }

    /**
     * LocaleCode
     */
    export type LocaleCode = {
        /**
         * Locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
         */
        code: string;
        /**
         * Locale name
         */
        name: string;
    }

    /**
     * Locale codes list
     */
    export type LocaleCodeList = {
        /**
         * List of localeCodes.
         */
        localeCodes: LocaleCode[];
        /**
         * Total number of localeCodes that matched your query.
         */
        total: number;
    }

    /**
     * Log
     */
    export type Log = {
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Event name.
         */
        event: string;
        /**
         * IP session in use when the session was created.
         */
        ip: string;
        /**
         * API mode when event triggered.
         */
        mode: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Log creation date in ISO 8601 format.
         */
        time: string;
        /**
         * User Email.
         */
        userEmail: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * User Name.
         */
        userName: string;
    }

    /**
     * Logs List
     */
    export type LogList = {
        /**
         * List of logs.
         */
        logs: Log[];
        /**
         * Total number of logs that matched your query.
         */
        total: number;
    }

    /**
     * Membership
     */
    export type Membership = {
        /**
         * Membership creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Membership ID.
         */
        $id: string;
        /**
         * Membership update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * User confirmation status, true if the user has joined the team or false otherwise.
         */
        confirm: boolean;
        /**
         * Date, the user has been invited to join the team in ISO 8601 format.
         */
        invited: string;
        /**
         * Date, the user has accepted the invitation to join the team in ISO 8601 format.
         */
        joined: string;
        /**
         * Multi factor authentication status, true if the user has MFA enabled or false otherwise. Hide this attribute by toggling membership privacy in the Console.
         */
        mfa: boolean;
        /**
         * User list of roles
         */
        roles: string[];
        /**
         * Team ID.
         */
        teamId: string;
        /**
         * Team name.
         */
        teamName: string;
        /**
         * User email address. Hide this attribute by toggling membership privacy in the Console.
         */
        userEmail: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * User name. Hide this attribute by toggling membership privacy in the Console.
         */
        userName: string;
    }

    /**
     * Memberships List
     */
    export type MembershipList = {
        /**
         * List of memberships.
         */
        memberships: Membership[];
        /**
         * Total number of memberships that matched your query.
         */
        total: number;
    }

    /**
     * Message
     */
    export type Message = {
        /**
         * Message creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Message ID.
         */
        $id: string;
        /**
         * Message update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Data of the message.
         */
        data: object;
        /**
         * The time when the message was delivered.
         */
        deliveredAt?: string;
        /**
         * Number of recipients the message was delivered to.
         */
        deliveredTotal: number;
        /**
         * Delivery errors if any.
         */
        deliveryErrors?: string[];
        /**
         * Message provider type.
         */
        providerType: string;
        /**
         * The scheduled time for message.
         */
        scheduledAt?: string;
        /**
         * Status of delivery.
         */
        status: MessageStatus;
        /**
         * Target IDs set as recipients.
         */
        targets: string[];
        /**
         * Topic IDs set as recipients.
         */
        topics: string[];
        /**
         * User IDs set as recipients.
         */
        users: string[];
    }

    /**
     * Message list
     */
    export type MessageList = {
        /**
         * List of messages.
         */
        messages: Message[];
        /**
         * Total number of messages that matched your query.
         */
        total: number;
    }

    /**
     * Metric
     */
    export type Metric = {
        /**
         * The date at which this metric was aggregated in ISO 8601 format.
         */
        date: string;
        /**
         * The value of this metric at the timestamp.
         */
        value: number;
    }

    /**
     * MFA Challenge
     */
    export type MfaChallenge = {
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * User ID.
         */
        userId: string;
    }

    /**
     * MFAFactors
     */
    export type MfaFactors = {
        /**
         * Can email be used for MFA challenge for this account.
         */
        email: boolean;
        /**
         * Can phone (SMS) be used for MFA challenge for this account.
         */
        phone: boolean;
        /**
         * Can recovery code be used for MFA challenge for this account.
         */
        recoveryCode: boolean;
        /**
         * Can TOTP be used for MFA challenge for this account.
         */
        totp: boolean;
    }

    /**
     * MFA Recovery Codes
     */
    export type MfaRecoveryCodes = {
        /**
         * Recovery codes.
         */
        recoveryCodes: string[];
    }

    /**
     * MFAType
     */
    export type MfaType = {
        /**
         * Secret token used for TOTP factor.
         */
        secret: string;
        /**
         * URI for authenticator apps.
         */
        uri: string;
    }

    /**
     * Phone
     */
    export type Phone = {
        /**
         * Phone code.
         */
        code: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }

    /**
     * Phones List
     */
    export type PhoneList = {
        /**
         * List of phones.
         */
        phones: Phone[];
        /**
         * Total number of phones that matched your query.
         */
        total: number;
    }

    /**
     * Preferences
     */
    export type Preferences = {
    }

    export type DefaultPreferences = Preferences & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Provider
     */
    export type Provider = {
        /**
         * Provider creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Provider ID.
         */
        $id: string;
        /**
         * Provider update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Provider credentials.
         */
        credentials: object;
        /**
         * Is provider enabled?
         */
        enabled: boolean;
        /**
         * The name for the provider instance.
         */
        name: string;
        /**
         * Provider options.
         */
        options?: object;
        /**
         * The name of the provider service.
         */
        provider: string;
        /**
         * Type of provider.
         */
        type: string;
    }

    /**
     * Provider list
     */
    export type ProviderList = {
        /**
         * List of providers.
         */
        providers: Provider[];
        /**
         * Total number of providers that matched your query.
         */
        total: number;
    }

    /**
     * ResourceToken
     */
    export type ResourceToken = {
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * JWT encoded string.
         */
        secret: string;
    }

    /**
     * Resource Tokens List
     */
    export type ResourceTokenList = {
        /**
         * List of tokens.
         */
        tokens: ResourceToken[];
        /**
         * Total number of tokens that matched your query.
         */
        total: number;
    }

    /**
     * Row
     */
    export type Row = {
        /**
         * Row creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Database ID.
         */
        $databaseId: string;
        /**
         * Row ID.
         */
        $id: string;
        /**
         * Row permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Row automatically incrementing ID.
         */
        $sequence: number;
        /**
         * Table ID.
         */
        $tableId: string;
        /**
         * Row update date in ISO 8601 format.
         */
        $updatedAt: string;
    }

    export type DefaultRow = Row & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Rows List
     */
    export type RowList<Row extends Models.Row = Models.DefaultRow> = {
        /**
         * List of rows.
         */
        rows: Row[];
        /**
         * Total number of rows that matched your query.
         */
        total: number;
    }

    /**
     * Runtime
     */
    export type Runtime = {
        /**
         * Runtime ID.
         */
        $id: string;
        /**
         * Base Docker image used to build the runtime.
         */
        base: string;
        /**
         * Image name of Docker Hub.
         */
        image: string;
        /**
         * Parent runtime key.
         */
        key: string;
        /**
         * Name of the logo image.
         */
        logo: string;
        /**
         * Runtime Name.
         */
        name: string;
        /**
         * List of supported architectures.
         */
        supports: string[];
        /**
         * Runtime version.
         */
        version: string;
    }

    /**
     * Runtimes List
     */
    export type RuntimeList = {
        /**
         * List of runtimes.
         */
        runtimes: Runtime[];
        /**
         * Total number of runtimes that matched your query.
         */
        total: number;
    }

    /**
     * Session
     */
    export type Session = {
        /**
         * Session creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Session ID.
         */
        $id: string;
        /**
         * Session update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
        /**
         * Returns true if this the current user session.
         */
        current: boolean;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Session expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Returns a list of active session factors.
         */
        factors: string[];
        /**
         * IP in use when the session was created.
         */
        ip: string;
        /**
         * Most recent date in ISO 8601 format when the session successfully passed MFA challenge.
         */
        mfaUpdatedAt: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Session Provider.
         */
        provider: string;
        /**
         * Session Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * The date of when the access token expires in ISO 8601 format.
         */
        providerAccessTokenExpiry: string;
        /**
         * Session Provider Refresh Token.
         */
        providerRefreshToken: string;
        /**
         * Session Provider User ID.
         */
        providerUid: string;
        /**
         * Secret used to authenticate the user. Only included if the request was made with an API key
         */
        secret: string;
        /**
         * User ID.
         */
        userId: string;
    }

    /**
     * Sessions List
     */
    export type SessionList = {
        /**
         * List of sessions.
         */
        sessions: Session[];
        /**
         * Total number of sessions that matched your query.
         */
        total: number;
    }

    /**
     * Site
     */
    export type Site = {
        /**
         * Site creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Site ID.
         */
        $id: string;
        /**
         * Site update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Site framework adapter.
         */
        adapter: string;
        /**
         * The build command used to build the site.
         */
        buildCommand: string;
        /**
         * Site build runtime.
         */
        buildRuntime: string;
        /**
         * Active deployment creation date in ISO 8601 format.
         */
        deploymentCreatedAt: string;
        /**
         * Site's active deployment ID.
         */
        deploymentId: string;
        /**
         * Screenshot of active deployment with dark theme preference file ID.
         */
        deploymentScreenshotDark: string;
        /**
         * Screenshot of active deployment with light theme preference file ID.
         */
        deploymentScreenshotLight: string;
        /**
         * Site enabled.
         */
        enabled: boolean;
        /**
         * Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.
         */
        fallbackFile: string;
        /**
         * Site framework.
         */
        framework: string;
        /**
         * The install command used to install the site dependencies.
         */
        installCommand: string;
        /**
         * Site VCS (Version Control System) installation id.
         */
        installationId: string;
        /**
         * Latest deployment creation date in ISO 8601 format.
         */
        latestDeploymentCreatedAt: string;
        /**
         * Site's latest deployment ID.
         */
        latestDeploymentId: string;
        /**
         * Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".
         */
        latestDeploymentStatus: string;
        /**
         * Is the site deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the site to update it with the latest configuration.
         */
        live: boolean;
        /**
         * When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
         */
        logging: boolean;
        /**
         * Site name.
         */
        name: string;
        /**
         * The directory where the site build output is located.
         */
        outputDirectory: string;
        /**
         * VCS (Version Control System) branch name
         */
        providerBranch: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * Path to site in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
        /**
         * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
         */
        providerSilentMode: boolean;
        /**
         * Machine specification for builds and executions.
         */
        specification: string;
        /**
         * Site request timeout in seconds.
         */
        timeout: number;
        /**
         * Site variables.
         */
        vars: Variable[];
    }

    /**
     * Sites List
     */
    export type SiteList = {
        /**
         * List of sites.
         */
        sites: Site[];
        /**
         * Total number of sites that matched your query.
         */
        total: number;
    }

    /**
     * Specification
     */
    export type Specification = {
        /**
         * Number of CPUs.
         */
        cpus: number;
        /**
         * Is size enabled.
         */
        enabled: boolean;
        /**
         * Memory size in MB.
         */
        memory: number;
        /**
         * Size slug.
         */
        slug: string;
    }

    /**
     * Specifications List
     */
    export type SpecificationList = {
        /**
         * List of specifications.
         */
        specifications: Specification[];
        /**
         * Total number of specifications that matched your query.
         */
        total: number;
    }

    /**
     * Subscriber
     */
    export type Subscriber = {
        /**
         * Subscriber creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Subscriber ID.
         */
        $id: string;
        /**
         * Subscriber update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * The target provider type. Can be one of the following: `email`, `sms` or `push`.
         */
        providerType: string;
        /**
         * Target.
         */
        target: Target;
        /**
         * Target ID.
         */
        targetId: string;
        /**
         * Topic ID.
         */
        topicId: string;
        /**
         * Topic ID.
         */
        userId: string;
        /**
         * User Name.
         */
        userName: string;
    }

    /**
     * Subscriber list
     */
    export type SubscriberList = {
        /**
         * List of subscribers.
         */
        subscribers: Subscriber[];
        /**
         * Total number of subscribers that matched your query.
         */
        total: number;
    }

    /**
     * Table
     */
    export type Table = {
        /**
         * Table creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Table ID.
         */
        $id: string;
        /**
         * Table permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        $permissions: string[];
        /**
         * Table update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Maximum row size in bytes. Returns 0 when no limit applies.
         */
        bytesMax: number;
        /**
         * Currently used row size in bytes based on defined columns.
         */
        bytesUsed: number;
        /**
         * Table columns.
         */
        columns: any[];
        /**
         * Database ID.
         */
        databaseId: string;
        /**
         * Table enabled. Can be 'enabled' or 'disabled'. When disabled, the table is inaccessible to users, but remains accessible to Server SDKs using API keys.
         */
        enabled: boolean;
        /**
         * Table indexes.
         */
        indexes: ColumnIndex[];
        /**
         * Table name.
         */
        name: string;
        /**
         * Whether row-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).
         */
        rowSecurity: boolean;
    }

    /**
     * Tables List
     */
    export type TableList = {
        /**
         * List of tables.
         */
        tables: Table[];
        /**
         * Total number of tables that matched your query.
         */
        total: number;
    }

    /**
     * Target
     */
    export type Target = {
        /**
         * Target creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Target ID.
         */
        $id: string;
        /**
         * Target update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Is the target expired.
         */
        expired: boolean;
        /**
         * The target identifier.
         */
        identifier: string;
        /**
         * Target Name.
         */
        name: string;
        /**
         * Provider ID.
         */
        providerId?: string;
        /**
         * The target provider type. Can be one of the following: `email`, `sms` or `push`.
         */
        providerType: string;
        /**
         * User ID.
         */
        userId: string;
    }

    /**
     * Target list
     */
    export type TargetList = {
        /**
         * List of targets.
         */
        targets: Target[];
        /**
         * Total number of targets that matched your query.
         */
        total: number;
    }

    /**
     * Team
     */
    export type Team<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * Team creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Team ID.
         */
        $id: string;
        /**
         * Team update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Team name.
         */
        name: string;
        /**
         * Team preferences as a key-value object
         */
        prefs: Preferences;
        /**
         * Total number of team members.
         */
        total: number;
    }

    /**
     * Teams List
     */
    export type TeamList<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * List of teams.
         */
        teams: Team<Preferences>[];
        /**
         * Total number of teams that matched your query.
         */
        total: number;
    }

    /**
     * Template Function
     */
    export type TemplateFunction = {
        /**
         * Function execution schedult in CRON format.
         */
        cron: string;
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Function Template Icon.
         */
        icon: string;
        /**
         * Function Template ID.
         */
        id: string;
        /**
         * Function Template Instructions.
         */
        instructions: string;
        /**
         * Function Template Name.
         */
        name: string;
        /**
         * Execution permissions.
         */
        permissions: string[];
        /**
         * VCS (Version Control System) Owner.
         */
        providerOwner: string;
        /**
         * VCS (Version Control System) Repository ID
         */
        providerRepositoryId: string;
        /**
         * VCS (Version Control System) branch version (tag).
         */
        providerVersion: string;
        /**
         * List of runtimes that can be used with this template.
         */
        runtimes: TemplateRuntime[];
        /**
         * Function scopes.
         */
        scopes: string[];
        /**
         * Function Template Tagline.
         */
        tagline: string;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
        /**
         * Function use cases.
         */
        useCases: string[];
        /**
         * Function variables.
         */
        variables: TemplateVariable[];
        /**
         * VCS (Version Control System) Provider.
         */
        vcsProvider: string;
    }

    /**
     * Function Templates List
     */
    export type TemplateFunctionList = {
        /**
         * List of templates.
         */
        templates: TemplateFunction[];
        /**
         * Total number of templates that matched your query.
         */
        total: number;
    }

    /**
     * Template Runtime
     */
    export type TemplateRuntime = {
        /**
         * The build command used to build the deployment.
         */
        commands: string;
        /**
         * The entrypoint file used to execute the deployment.
         */
        entrypoint: string;
        /**
         * Runtime Name.
         */
        name: string;
        /**
         * Path to function in VCS (Version Control System) repository
         */
        providerRootDirectory: string;
    }

    /**
     * Template Variable
     */
    export type TemplateVariable = {
        /**
         * Variable Description.
         */
        description: string;
        /**
         * Variable Name.
         */
        name: string;
        /**
         * Variable Placeholder.
         */
        placeholder: string;
        /**
         * Is the variable required?
         */
        required: boolean;
        /**
         * Variable secret flag. Secret variables can only be updated or deleted, but never read.
         */
        secret: boolean;
        /**
         * Variable Type.
         */
        type: string;
        /**
         * Variable Value.
         */
        value: string;
    }

    /**
     * Token
     */
    export type Token = {
        /**
         * Token creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Token ID.
         */
        $id: string;
        /**
         * Token expiration date in ISO 8601 format.
         */
        expire: string;
        /**
         * Security phrase of a token. Empty if security phrase was not requested when creating a token. It includes randomly generated phrase which is also sent in the external resource such as email.
         */
        phrase: string;
        /**
         * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        secret: string;
        /**
         * User ID.
         */
        userId: string;
    }

    /**
     * Topic
     */
    export type Topic = {
        /**
         * Topic creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Topic ID.
         */
        $id: string;
        /**
         * Topic update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Total count of email subscribers subscribed to the topic.
         */
        emailTotal: number;
        /**
         * The name of the topic.
         */
        name: string;
        /**
         * Total count of push subscribers subscribed to the topic.
         */
        pushTotal: number;
        /**
         * Total count of SMS subscribers subscribed to the topic.
         */
        smsTotal: number;
        /**
         * Subscribe permissions.
         */
        subscribe: string[];
    }

    /**
     * Topic list
     */
    export type TopicList = {
        /**
         * List of topics.
         */
        topics: Topic[];
        /**
         * Total number of topics that matched your query.
         */
        total: number;
    }

    /**
     * Transaction
     */
    export type Transaction = {
        /**
         * Transaction creation time in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Transaction ID.
         */
        $id: string;
        /**
         * Transaction update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Expiration time in ISO 8601 format.
         */
        expiresAt: string;
        /**
         * Number of operations in the transaction.
         */
        operations: number;
        /**
         * Current status of the transaction. One of: pending, committing, committed, rolled_back, failed.
         */
        status: string;
    }

    /**
     * Transaction List
     */
    export type TransactionList = {
        /**
         * Total number of transactions that matched your query.
         */
        total: number;
        /**
         * List of transactions.
         */
        transactions: Transaction[];
    }

    /**
     * UsageFunction
     */
    export type UsageFunction = {
        /**
         * Aggregated number of function builds per period.
         */
        builds: Metric[];
        /**
         * Aggregated number of failed builds per period.
         */
        buildsFailed: Metric[];
        /**
         * Total aggregated number of failed function builds.
         */
        buildsFailedTotal: number;
        /**
         * Aggregated number of function builds mbSeconds per period.
         */
        buildsMbSeconds: Metric[];
        /**
         * Total aggregated sum of function builds mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Aggregated sum of function builds storage per period.
         */
        buildsStorage: Metric[];
        /**
         * total aggregated sum of function builds storage.
         */
        buildsStorageTotal: number;
        /**
         * Aggregated number of successful builds per period.
         */
        buildsSuccess: Metric[];
        /**
         * Total aggregated number of successful function builds.
         */
        buildsSuccessTotal: number;
        /**
         * Aggregated sum of function builds compute time per period.
         */
        buildsTime: Metric[];
        /**
         * Average builds compute time.
         */
        buildsTimeAverage: number;
        /**
         * Total aggregated sum of function builds compute time.
         */
        buildsTimeTotal: number;
        /**
         * Total aggregated number of function builds.
         */
        buildsTotal: number;
        /**
         * Aggregated number of function deployments per period.
         */
        deployments: Metric[];
        /**
         * Aggregated number of  function deployments storage per period.
         */
        deploymentsStorage: Metric[];
        /**
         * Total aggregated sum of function deployments storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of function deployments.
         */
        deploymentsTotal: number;
        /**
         * Aggregated number of function executions per period.
         */
        executions: Metric[];
        /**
         * Aggregated number of function mbSeconds per period.
         */
        executionsMbSeconds: Metric[];
        /**
         * Total aggregated sum of function executions mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Aggregated number of function executions compute time per period.
         */
        executionsTime: Metric[];
        /**
         * Total aggregated sum of function  executions compute time.
         */
        executionsTimeTotal: number;
        /**
         * Total  aggregated number of function executions.
         */
        executionsTotal: number;
        /**
         * The time range of the usage stats.
         */
        range: string;
    }

    /**
     * UsageFunctions
     */
    export type UsageFunctions = {
        /**
         * Aggregated number of functions build per period.
         */
        builds: Metric[];
        /**
         * Aggregated number of failed function builds per period.
         */
        buildsFailed: Metric[];
        /**
         * Total aggregated number of failed function builds.
         */
        buildsFailedTotal: number;
        /**
         * Aggregated sum of functions build mbSeconds per period.
         */
        buildsMbSeconds: Metric[];
        /**
         * Total aggregated sum of functions build mbSeconds.
         */
        buildsMbSecondsTotal: number;
        /**
         * Aggregated sum of functions build storage per period.
         */
        buildsStorage: Metric[];
        /**
         * total aggregated sum of functions build storage.
         */
        buildsStorageTotal: number;
        /**
         * Aggregated number of successful function builds per period.
         */
        buildsSuccess: Metric[];
        /**
         * Total aggregated number of successful function builds.
         */
        buildsSuccessTotal: number;
        /**
         * Aggregated sum of  functions build compute time per period.
         */
        buildsTime: Metric[];
        /**
         * Total aggregated sum of functions build compute time.
         */
        buildsTimeTotal: number;
        /**
         * Total aggregated number of functions build.
         */
        buildsTotal: number;
        /**
         * Aggregated number of functions deployment per period.
         */
        deployments: Metric[];
        /**
         * Aggregated number of  functions deployment storage per period.
         */
        deploymentsStorage: Metric[];
        /**
         * Total aggregated sum of functions deployment storage.
         */
        deploymentsStorageTotal: number;
        /**
         * Total aggregated number of functions deployments.
         */
        deploymentsTotal: number;
        /**
         * Aggregated number of  functions execution per period.
         */
        executions: Metric[];
        /**
         * Aggregated number of functions mbSeconds per period.
         */
        executionsMbSeconds: Metric[];
        /**
         * Total aggregated sum of functions execution mbSeconds.
         */
        executionsMbSecondsTotal: number;
        /**
         * Aggregated number of functions execution compute time per period.
         */
        executionsTime: Metric[];
        /**
         * Total aggregated sum of functions  execution compute time.
         */
        executionsTimeTotal: number;
        /**
         * Total  aggregated number of functions execution.
         */
        executionsTotal: number;
        /**
         * Aggregated number of functions per period.
         */
        functions: Metric[];
        /**
         * Total aggregated number of functions.
         */
        functionsTotal: number;
        /**
         * Time range of the usage stats.
         */
        range: string;
    }

    /**
     * User
     */
    export type User<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * User creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * User ID.
         */
        $id: string;
        /**
         * User update date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.
         */
        accessedAt: string;
        /**
         * User email address.
         */
        email: string;
        /**
         * Email verification status.
         */
        emailVerification: boolean;
        /**
         * Password hashing algorithm.
         */
        hash?: string;
        /**
         * Password hashing algorithm configuration.
         */
        hashOptions?: object;
        /**
         * Labels for the user.
         */
        labels: string[];
        /**
         * Multi factor authentication status.
         */
        mfa: boolean;
        /**
         * User name.
         */
        name: string;
        /**
         * Hashed user password.
         */
        password?: string;
        /**
         * Password update time in ISO 8601 format.
         */
        passwordUpdate: string;
        /**
         * User phone number in E.164 format.
         */
        phone: string;
        /**
         * Phone verification status.
         */
        phoneVerification: boolean;
        /**
         * User preferences as a key-value object
         */
        prefs: Preferences;
        /**
         * User registration date in ISO 8601 format.
         */
        registration: string;
        /**
         * User status. Pass `true` for enabled and `false` for disabled.
         */
        status: boolean;
        /**
         * A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider.
         */
        targets: Target[];
    }

    /**
     * Users List
     */
    export type UserList<Preferences extends Models.Preferences = Models.DefaultPreferences> = {
        /**
         * Total number of users that matched your query.
         */
        total: number;
        /**
         * List of users.
         */
        users: User<Preferences>[];
    }

    /**
     * Variable
     */
    export type Variable = {
        /**
         * Variable creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Variable ID.
         */
        $id: string;
        /**
         * Variable creation date in ISO 8601 format.
         */
        $updatedAt: string;
        /**
         * Variable key.
         */
        key: string;
        /**
         * ID of resource to which the variable belongs. If resourceType is "project", it is empty. If resourceType is "function", it is ID of the function.
         */
        resourceId: string;
        /**
         * Service to which the variable belongs. Possible values are "project", "function"
         */
        resourceType: string;
        /**
         * Variable secret flag. Secret variables can only be updated or deleted, but never read.
         */
        secret: boolean;
        /**
         * Variable value.
         */
        value: string;
    }

    /**
     * Variables List
     */
    export type VariableList = {
        /**
         * Total number of variables that matched your query.
         */
        total: number;
        /**
         * List of variables.
         */
        variables: Variable[];
    }
}
