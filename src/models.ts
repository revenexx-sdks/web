import { AddressTypeRowTone } from "./enums/address-type-row-tone"
import { AddressTypeRowCreateRequestTone } from "./enums/address-type-row-create-request-tone"
import { AddressTypeRowUpdateRequestTone } from "./enums/address-type-row-update-request-tone"
import { AssetsSource } from "./enums/assets-source"
import { AttributeValueBucket } from "./enums/attribute-value-bucket"
import { AuthMailSource } from "./enums/auth-mail-source"
import { RecoveryMailSource } from "./enums/recovery-mail-source"
import { RegistrationStatus } from "./enums/registration-status"
import { CartStatus } from "./enums/cart-status"
import { CartMergeStrategy } from "./enums/cart-merge-strategy"
import { CartPriceSnapshotMode } from "./enums/cart-price-snapshot-mode"
import { CartIoFormat } from "./enums/cart-io-format"
import { CartExportFormat } from "./enums/cart-export-format"
import { CartItemType } from "./enums/cart-item-type"
import { CartVocabularyTone } from "./enums/cart-vocabulary-tone"
import { CartVocabularyName } from "./enums/cart-vocabulary-name"
import { CartVocabularySource } from "./enums/cart-vocabulary-source"
import { CartVocabularyRefName } from "./enums/cart-vocabulary-ref-name"
import { CategoriesRuleMatch } from "./enums/categories-rule-match"
import { CategoryRuleOperator } from "./enums/category-rule-operator"
import { CategoryRuleMatch } from "./enums/category-rule-match"
import { ChannelStatus } from "./enums/channel-status"
import { ChannelUnassignedVisibility } from "./enums/channel-unassigned-visibility"
import { ChannelUnresolvedReason } from "./enums/channel-unresolved-reason"
import { ChannelContextSource } from "./enums/channel-context-source"
import { ChannelInactiveBehavior } from "./enums/channel-inactive-behavior"
import { ChannelPolicySource } from "./enums/channel-policy-source"
import { ChannelPolicyTenantDefault } from "./enums/channel-policy-tenant-default"
import { ChannelUnassignedPolicy } from "./enums/channel-unassigned-policy"
import { ChannelTypeTone } from "./enums/channel-type-tone"
import { ChannelVisibilityReason } from "./enums/channel-visibility-reason"
import { ChannelVocabularyTone } from "./enums/channel-vocabulary-tone"
import { ChannelVocabularyName } from "./enums/channel-vocabulary-name"
import { ChannelVocabularySource } from "./enums/channel-vocabulary-source"
import { ChannelVocabularyRefName } from "./enums/channel-vocabulary-ref-name"
import { ContactRegistrationStatus } from "./enums/contact-registration-status"
import { ContactStatus } from "./enums/contact-status"
import { ContactActivityKind } from "./enums/contact-activity-kind"
import { ContactCreateRequestRegistrationStatus } from "./enums/contact-create-request-registration-status"
import { ContactEventKindTone } from "./enums/contact-event-kind-tone"
import { ContactEventKindCreateRequestTone } from "./enums/contact-event-kind-create-request-tone"
import { ContactEventKindUpdateRequestTone } from "./enums/contact-event-kind-update-request-tone"
import { ContactPermissionsPermissions } from "./enums/contact-permissions-permissions"
import { ContactUpdateRequestRegistrationStatus } from "./enums/contact-update-request-registration-status"
import { PaymentFeeType } from "./enums/payment-fee-type"
import { PaymentMethodKind } from "./enums/payment-method-kind"
import { FormStatus } from "./enums/form-status"
import { FormSubmissionStatus } from "./enums/form-submission-status"
import { FormNotifySource } from "./enums/form-notify-source"
import { FormSubmissionPruneRequestStatus } from "./enums/form-submission-prune-request-status"
import { FormsVocabularyTone } from "./enums/forms-vocabulary-tone"
import { FormsVocabularyName } from "./enums/forms-vocabulary-name"
import { FormsVocabularySummaryName } from "./enums/forms-vocabulary-summary-name"
import { InventoryVocabularyDefaultTone } from "./enums/inventory-vocabulary-default-tone"
import { InventoryVocabularySource } from "./enums/inventory-vocabulary-source"
import { CartIoApplyMode } from "./enums/cart-io-apply-mode"
import { CartIoDirection } from "./enums/cart-io-direction"
import { CartIoEntity } from "./enums/cart-io-entity"
import { IoProfileResourceApplyMode } from "./enums/io-profile-resource-apply-mode"
import { IoProfileResourceDirection } from "./enums/io-profile-resource-direction"
import { LifecycleStageTone } from "./enums/lifecycle-stage-tone"
import { LifecycleStageCreateRequestTone } from "./enums/lifecycle-stage-create-request-tone"
import { LifecycleStageUpdateRequestTone } from "./enums/lifecycle-stage-update-request-tone"
import { LocationType } from "./enums/location-type"
import { MarketStatus } from "./enums/market-status"
import { MarketDefaultLocaleSource } from "./enums/market-default-locale-source"
import { MarketLocaleFallback } from "./enums/market-locale-fallback"
import { MarketLocaleGranularity } from "./enums/market-locale-granularity"
import { MarketPricingSource } from "./enums/market-pricing-source"
import { MarketTaxBasis } from "./enums/market-tax-basis"
import { MarketReadinessBlocking } from "./enums/market-readiness-blocking"
import { MarketReadinessWarnings } from "./enums/market-readiness-warnings"
import { MarketReadinessCheckId } from "./enums/market-readiness-check-id"
import { MarketReadinessSeverity } from "./enums/market-readiness-severity"
import { MarketReadinessReportBlocking } from "./enums/market-readiness-report-blocking"
import { MarketReadinessReportWarnings } from "./enums/market-readiness-report-warnings"
import { MarketsVocabularyTone } from "./enums/markets-vocabulary-tone"
import { MarketsVocabularyName } from "./enums/markets-vocabulary-name"
import { MarketsVocabularySource } from "./enums/markets-vocabulary-source"
import { MarketsVocabularySummaryName } from "./enums/markets-vocabulary-summary-name"
import { OrderFulfillmentStatus } from "./enums/order-fulfillment-status"
import { OrderPaymentStatus } from "./enums/order-payment-status"
import { OrderStatus } from "./enums/order-status"
import { OrderCancellationScope } from "./enums/order-cancellation-scope"
import { OrderCommentVisibility } from "./enums/order-comment-visibility"
import { OrderCustomerRollupRequestStatuses } from "./enums/order-customer-rollup-request-statuses"
import { OrderCustomerRollupResponseStatuses } from "./enums/order-customer-rollup-response-statuses"
import { OrderItemType } from "./enums/order-item-type"
import { OrderListKindTone } from "./enums/order-list-kind-tone"
import { OrderListKindRowTone } from "./enums/order-list-kind-row-tone"
import { OrderListCartMode } from "./enums/order-list-cart-mode"
import { OrderListVocabularyDefaultTone } from "./enums/order-list-vocabulary-default-tone"
import { OrderListVocabularyName } from "./enums/order-list-vocabulary-name"
import { OrderListVocabularySource } from "./enums/order-list-vocabulary-source"
import { OrderListVocabularyTone } from "./enums/order-list-vocabulary-tone"
import { OrderReturnStatus } from "./enums/order-return-status"
import { OrderReturnSettlement } from "./enums/order-return-settlement"
import { OrderReturnRefusal } from "./enums/order-return-refusal"
import { OrderVocabularyTone } from "./enums/order-vocabulary-tone"
import { OrderVocabularyName } from "./enums/order-vocabulary-name"
import { OrderVocabularySource } from "./enums/order-vocabulary-source"
import { OrderVocabularySummaryName } from "./enums/order-vocabulary-summary-name"
import { OrderResolutionStage } from "./enums/order-resolution-stage"
import { OrganizationStatus } from "./enums/organization-status"
import { PageStatus } from "./enums/page-status"
import { PagesVocabularyApp } from "./enums/pages-vocabulary-app"
import { PagesVocabularyTone } from "./enums/pages-vocabulary-tone"
import { PagesVocabularyName } from "./enums/pages-vocabulary-name"
import { PagesVocabularySource } from "./enums/pages-vocabulary-source"
import { PagesVocabularyIndexApp } from "./enums/pages-vocabulary-index-app"
import { PaymentDunningStage } from "./enums/payment-dunning-stage"
import { PaymentFailureCode } from "./enums/payment-failure-code"
import { PaymentStatus } from "./enums/payment-status"
import { PaymentTermTone } from "./enums/payment-term-tone"
import { PaymentTermCreateRequestTone } from "./enums/payment-term-create-request-tone"
import { PaymentTermUpdateRequestTone } from "./enums/payment-term-update-request-tone"
import { PaymentVocabularyTone } from "./enums/payment-vocabulary-tone"
import { PriceEndingRule } from "./enums/price-ending-rule"
import { PriceEntriesAdjustResponseRounding } from "./enums/price-entries-adjust-response-rounding"
import { PriceEntriesAdjustResponseRoundingMode } from "./enums/price-entries-adjust-response-rounding-mode"
import { PriceEntriesBulkMode } from "./enums/price-entries-bulk-mode"
import { PriceRoundingMode } from "./enums/price-rounding-mode"
import { PriceEntryType } from "./enums/price-entry-type"
import { PriceListStatus } from "./enums/price-list-status"
import { PriceListTaxBasis } from "./enums/price-list-tax-basis"
import { PriceCurrencySource } from "./enums/price-currency-source"
import { PriceListTiebreak } from "./enums/price-list-tiebreak"
import { PriceTaxInclusiveDefault } from "./enums/price-tax-inclusive-default"
import { PriceTaxUnresolvedReason } from "./enums/price-tax-unresolved-reason"
import { PriceTaxMarketSource } from "./enums/price-tax-market-source"
import { PriceVocabularyTone } from "./enums/price-vocabulary-tone"
import { PriceVocabularyName } from "./enums/price-vocabulary-name"
import { PriceVocabularySource } from "./enums/price-vocabulary-source"
import { PriceVocabularyRefName } from "./enums/price-vocabulary-ref-name"
import { ProductCategoriesSource } from "./enums/product-categories-source"
import { ProductGridColumnSource } from "./enums/product-grid-column-source"
import { ProductLabelSource } from "./enums/product-label-source"
import { ProductLabelAttributeSource } from "./enums/product-label-attribute-source"
import { ProductsKind } from "./enums/products-kind"
import { ReorderPointSource } from "./enums/reorder-point-source"
import { ReservationStatus } from "./enums/reservation-status"
import { PriceOnRequestReason } from "./enums/price-on-request-reason"
import { PriceTaxBasis } from "./enums/price-tax-basis"
import { PriceTaxBasisSource } from "./enums/price-tax-basis-source"
import { RoleCatalogResponseSource } from "./enums/role-catalog-response-source"
import { SegmentRuleMatch } from "./enums/segment-rule-match"
import { SegmentMemberSource } from "./enums/segment-member-source"
import { SegmentRuleOperator } from "./enums/segment-rule-operator"
import { SegmentRulePreviewRequestRuleMatch } from "./enums/segment-rule-preview-request-rule-match"
import { SegmentRulePreviewRequestTarget } from "./enums/segment-rule-preview-request-target"
import { SegmentRulePreviewResponseRuleMatch } from "./enums/segment-rule-preview-response-rule-match"
import { SegmentRulePreviewResponseTarget } from "./enums/segment-rule-preview-response-target"
import { SegmentRulesTarget } from "./enums/segment-rules-target"
import { ShippingCarrierStatus } from "./enums/shipping-carrier-status"
import { ShippingMethodMatrixBasis } from "./enums/shipping-method-matrix-basis"
import { ShippingMethodPricingType } from "./enums/shipping-method-pricing-type"
import { ShippingCarrierSource } from "./enums/shipping-carrier-source"
import { ShippingRatePricingType } from "./enums/shipping-rate-pricing-type"
import { ShippingTaxSource } from "./enums/shipping-tax-source"
import { ShippingFreeAboveBasis } from "./enums/shipping-free-above-basis"
import { ShippingRatesBasisMatrixBasisDefault } from "./enums/shipping-rates-basis-matrix-basis-default"
import { ShippingServiceLevelCreateRequestTone } from "./enums/shipping-service-level-create-request-tone"
import { ShippingServiceLevelRowTone } from "./enums/shipping-service-level-row-tone"
import { ShippingServiceLevelUpdateRequestTone } from "./enums/shipping-service-level-update-request-tone"
import { ShippingTaxUnresolvedReason } from "./enums/shipping-tax-unresolved-reason"
import { ShippingTaxMarketSource } from "./enums/shipping-tax-market-source"
import { ShippingTaxContextVia } from "./enums/shipping-tax-context-via"
import { ShippingTrackingCarrierStatus } from "./enums/shipping-tracking-carrier-status"
import { ShippingVocabularyDefaultTone } from "./enums/shipping-vocabulary-default-tone"
import { ShippingVocabularySource } from "./enums/shipping-vocabulary-source"
import { ShippingVocabularyTone } from "./enums/shipping-vocabulary-tone"
import { ShippingWeightUnitCreateRequestTone } from "./enums/shipping-weight-unit-create-request-tone"
import { ShippingWeightUnitRowTone } from "./enums/shipping-weight-unit-row-tone"
import { ShippingWeightUnitUpdateRequestTone } from "./enums/shipping-weight-unit-update-request-tone"
import { StockMovementType } from "./enums/stock-movement-type"
import { StoreAssetRequestVisibility } from "./enums/store-asset-request-visibility"
import { ValidationFailedResponseStatus } from "./enums/validation-failed-response-status"
import { VocabularyDefaultTone } from "./enums/vocabulary-default-tone"
import { VocabularySource } from "./enums/vocabulary-source"
import { VocabularyTone } from "./enums/vocabulary-tone"
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
import { Message2Status } from "./enums/message-2-status"

/**
 * Revenexx Models
 */
export namespace Models {

    declare const __default: unique symbol;

    /**
     * A postal address belonging to an organization or to a contact, used for billing or shipping. Ownership is exactly one of the two.
     */
    export type Address = {
        /**
         * City or town.
         */
        city?: string;
        /**
         * Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
         */
        company?: string | null;
        /**
         * Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
         */
        contact_id?: string | null;
        /**
         * ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
         */
        country?: string;
        /**
         * When the address was created.
         */
        created_at?: string;
        /**
         * Primary key of the address.
         */
        id?: string;
        /**
         * The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder.
         */
        is_default?: boolean;
        /**
         * Recipient line on the label — the person or department the parcel is addressed to.
         */
        name?: string | null;
        /**
         * Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
         */
        organization_id?: string | null;
        /**
         * Phone number for the carrier to reach at this address — often a different one from the contact's own.
         */
        phone?: string | null;
        /**
         * State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
         */
        region?: string | null;
        /**
         * Street and house number, on one line, as the local post expects it.
         */
        street?: string;
        /**
         * The second address line: building, floor, gate, c/o. Null when there is none.
         */
        street2?: string | null;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app.
         */
        type?: string;
        /**
         * When any column of this row last changed.
         */
        updated_at?: string;
        /**
         * Postal code, as text — leading zeros are real in most countries.
         */
        zip?: string;
    }

    /**
     * An address needs an owner: &#039;organization_id&#039; or &#039;contact_id&#039;.
     */
    export type AddressCreateRequest = {
        /**
         * City or town.
         */
        city: string;
        /**
         * Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
         */
        company?: string | null;
        /**
         * Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
         */
        contact_id?: string | null;
        /**
         * ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
         */
        country: string;
        /**
         * The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
         */
        is_default?: boolean;
        /**
         * Recipient line on the label — the person or department the parcel is addressed to.
         */
        name?: string | null;
        /**
         * Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
         */
        organization_id?: string | null;
        /**
         * Phone number for the carrier to reach at this address — often a different one from the contact's own.
         */
        phone?: string | null;
        /**
         * State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
         */
        region?: string | null;
        /**
         * Street and house number, on one line, as the local post expects it.
         */
        street: string;
        /**
         * The second address line: building, floor, gate, c/o. Null when there is none.
         */
        street2?: string | null;
        /**
         * What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
         */
        type?: string;
        /**
         * Postal code, as text — leading zeros are real in most countries.
         */
        zip: string;
    }

    /**
     * One value of the address types set. What an address is used for. Billing and shipping are what a checkout needs; a works entrance or a central accounts office is the tenant&#039;s own.
     */
    export type AddressTypeRow = {
        /**
         * What `addresses.type` stores, and the only part of this row other data depends on. Immutable once created: renaming it would orphan every record carrying it.
         */
        code?: string;
        /**
         * When the value was added to this set.
         */
        created_at?: string;
        /**
         * One line of help for an operator choosing this value. Null when there is nothing to add. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443).
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Primary key of this value. What the update and delete routes address it by — the CODE is what records store.
         */
        id?: string;
        /**
         * The value a create falls back to when the caller names none. Exactly one row of the set carries it; promoting another one demotes this.
         */
        is_default?: boolean;
        /**
         * True for a value this app seeded on install. Still renameable and still removable — it only records where the value came from.
         */
        is_system?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where this value sits in the set, ascending. It is the order a select should offer.
         */
        position?: number;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * The fallback name — what a client shows when no locale in `labels` matches. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443) — those rows were seeded with no `labels` at all.
         */
        title?: string;
        /**
         * Semantic badge colour. The palette stays fixed — it is a render concern, not a merchant decision.
         */
        tone?: AddressTypeRowTone;
        /**
         * When it was last edited.
         */
        updated_at?: string;
    }

    /**
     * Add one value to the address types set. It is available to `addresses.type` immediately.
     */
    export type AddressTypeRowCreateRequest = {
        /**
         * What `addresses.type` will store. Lowercase, starting with a letter; immutable afterwards.
         */
        code: string;
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted in the same call.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending. Default 0.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title: string;
        /**
         * Semantic badge colour.
         */
        tone?: AddressTypeRowCreateRequestTone;
    }

    /**
     * Everything but `code`. Sending a different one is a 400 rather than a silent no-op, because records already store it.
     */
    export type AddressTypeRowUpdateRequest = {
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title?: string;
        /**
         * Semantic badge colour.
         */
        tone?: AddressTypeRowUpdateRequestTone;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AddressUpdateRequest = {
        /**
         * City or town.
         */
        city?: string;
        /**
         * Company line on the label. Often the owning organization's name, but not always — a delivery to a construction site carries the site.
         */
        company?: string | null;
        /**
         * Owning person — a personal address only that contact uses. Exactly one of organization_id / contact_id is set.
         */
        contact_id?: string | null;
        /**
         * ISO 3166-1 alpha-2 country code, exactly two letters. Uppercase by convention; it is what shipping and tax both key off.
         */
        country?: string;
        /**
         * The default address of its owner AND type: one default billing and one default shipping address per owner. Setting it moves the flag off the previous holder. Default false.
         */
        is_default?: boolean;
        /**
         * Recipient line on the label — the person or department the parcel is addressed to.
         */
        name?: string | null;
        /**
         * Owning company — a company address, shared by everyone in it. Exactly one of organization_id / contact_id is set.
         */
        organization_id?: string | null;
        /**
         * Phone number for the carrier to reach at this address — often a different one from the contact's own.
         */
        phone?: string | null;
        /**
         * State, province or Bundesland. Required by some destinations (US, CA), unused by most European ones.
         */
        region?: string | null;
        /**
         * Street and house number, on one line, as the local post expects it.
         */
        street?: string;
        /**
         * The second address line: building, floor, gate, c/o. Null when there is none.
         */
        street2?: string | null;
        /**
         * What the address is FOR — one of the tenant's own address types (GET /customers/address-types), seeded with billing and shipping. A merchant may add their own (a works entrance, a central accounts office) without a release of this app. A create without it gets the type flagged as default; a type the tenant does not keep is a 400.
         */
        type?: string;
        /**
         * Postal code, as text — leading zeros are real in most countries.
         */
        zip?: string;
    }

    /**
     * 
     */
    export type AssetFamilies = {
        /**
         * The asset family's stable identifier — a class of media with one shared shape. Unique per tenant.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * What the asset family is called, per language tag.
         */
        labels?: object | null;
        /**
         * How a file of this family is named, so an import can bind a file to a product without a mapping table. `source` is the product value the file name is built from, `pattern` how it is assembled, `allowed_extensions` what may be uploaded.
         */
        naming_convention?: object | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type AssetFamiliesCreateRequest = {
        /**
         * The asset family's stable identifier — a class of media with one shared shape. Unique per tenant.
         */
        code: string;
        /**
         * What the asset family is called, per language tag.
         */
        labels?: object | null;
        /**
         * How a file of this family is named, so an import can bind a file to a product without a mapping table. `source` is the product value the file name is built from, `pattern` how it is assembled, `allowed_extensions` what may be uploaded.
         */
        naming_convention?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `asset_families` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type AssetFamiliesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?naming_convention=` value this call was understood to carry.
         */
        naming_convention?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultAssetFamiliesFilter = AssetFamiliesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AssetFamiliesUpdateRequest = {
        /**
         * The asset family's stable identifier — a class of media with one shared shape. Unique per tenant.
         */
        code?: string;
        /**
         * What the asset family is called, per language tag.
         */
        labels?: object | null;
        /**
         * How a file of this family is named, so an import can bind a file to a product without a mapping table. `source` is the product value the file name is built from, `pattern` how it is assembled, `allowed_extensions` what may be uploaded.
         */
        naming_convention?: object | null;
    }

    /**
     * 
     */
    export type AssetResource = {
        /**
         * 
         */
        alt_text: string | null;
        /**
         * 
         */
        content_hash: string | null;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        deleted_at: string | null;
        /**
         * 
         */
        description: string | null;
        /**
         * 
         */
        display_name: string | null;
        /**
         * 
         */
        dominant_color: string | null;
        /**
         * 
         */
        duration_ms: number | null;
        /**
         * 
         */
        folder_id: string | null;
        /**
         * 
         */
        height: number | null;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        kind: string;
        /**
         * 
         */
        metadata: any[];
        /**
         * 
         */
        mime_type: string;
        /**
         * 
         */
        model_url: string | null;
        /**
         * 
         */
        original_name: string;
        /**
         * 
         */
        page_count: number | null;
        /**
         * 
         */
        path_name: string;
        /**
         * 3D derivatives (null unless rendered): preview image + .glb mesh.
         */
        preview_url: string | null;
        /**
         * 
         */
        processed_at: string | null;
        /**
         * 
         */
        size_bytes: number;
        /**
         * 
         */
        status: string;
        /**
         * 
         */
        tags: any[];
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
        /**
         * Null for a private asset — it is only reachable through a signed
URL, so there is no path-addressed public URL to hand out.
         */
        url: string | null;
        /**
         * 
         */
        usdz_url: string | null;
        /**
         * 
         */
        visibility: string;
        /**
         * 
         */
        width: number | null;
    }

    /**
     * 
     */
    export type Assets = {
        /**
         * The asset family this asset belongs to — which attributes it carries and how its file is named. A create falls back to the `default_asset_family` tenant setting when the body names none.
         */
        asset_family_id?: string;
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.

Which attributes an asset of this family has comes from `attributes` rows with `entity_type: "asset"` and `entity_ref` equal to the family's code — alt text, copyright, an expiry date.
         */
        attribute_values?: object;
        /**
         * The asset's stable identifier within its family — the value a product's media attribute stores. Unique per family.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The path the CDN serves this asset under — the convenient value for rendering. It changes when the file is moved, so never join on it.
         */
        delivery_path?: string | null;
        /**
         * Absolute URL of an externally hosted file. Required when `source` is `external`, and accepted only when the tenant has `allow_external_media` on and the host is on its `external_media_allowed_hosts` list — `POST /products/assets` is the only place an external URL can enter the catalog, so it is the only place those are enforced.
         */
        external_url?: string | null;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Where the bytes live: 'storage' is this platform's object store and needs `storage_asset_id`, 'external' is somebody else's host and needs `external_url`. The database enforces the pair, so neither half can be stored on its own.
         */
        source?: string;
        /**
         * The stable `ast_…` id of the storage object. It survives a rename or a folder move, which is exactly why it and not the delivery path is the identifier. Required when `source` is `storage`.
         */
        storage_asset_id?: string | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * An asset is bound to its bytes on creation: source &#039;storage&#039; needs `storage_asset_id`, source &#039;external&#039; needs `external_url` AND an explicit `source` — the column defaults to &#039;storage&#039;, so an `external_url` on its own is refused by the database with a bare &quot;a value is not allowed here&quot;.
     */
    export type AssetsCreateRequest = {
        /**
         * The asset family this asset belongs to — which attributes it carries and how its file is named. A create falls back to the `default_asset_family` tenant setting when the body names none.
         */
        asset_family_id: string;
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.

Which attributes an asset of this family has comes from `attributes` rows with `entity_type: "asset"` and `entity_ref` equal to the family's code — alt text, copyright, an expiry date.
         */
        attribute_values?: object;
        /**
         * The asset's stable identifier within its family — the value a product's media attribute stores. Unique per family.
         */
        code: string;
        /**
         * The path the CDN serves this asset under — the convenient value for rendering. It changes when the file is moved, so never join on it.
         */
        delivery_path?: string | null;
        /**
         * Absolute URL of an externally hosted file. Required when `source` is `external`, and accepted only when the tenant has `allow_external_media` on and the host is on its `external_media_allowed_hosts` list — `POST /products/assets` is the only place an external URL can enter the catalog, so it is the only place those are enforced.
         */
        external_url?: string | null;
        /**
         * Where the bytes live: 'storage' is this platform's object store and needs `storage_asset_id`, 'external' is somebody else's host and needs `external_url`. The database enforces the pair, so neither half can be stored on its own.
         */
        source?: AssetsSource;
        /**
         * The stable `ast_…` id of the storage object. It survives a rename or a folder move, which is exactly why it and not the delivery path is the identifier. Required when `source` is `storage`.
         */
        storage_asset_id?: string | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `assets` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type AssetsFilter = {
        /**
         * The literal `?asset_family_id=` value this call was understood to carry.
         */
        asset_family_id?: string;
        /**
         * The literal `?attribute_values=` value this call was understood to carry.
         */
        attribute_values?: string;
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?delivery_path=` value this call was understood to carry.
         */
        delivery_path?: string;
        /**
         * The literal `?external_url=` value this call was understood to carry.
         */
        external_url?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?source=` value this call was understood to carry.
         */
        source?: string;
        /**
         * The literal `?storage_asset_id=` value this call was understood to carry.
         */
        storage_asset_id?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultAssetsFilter = AssetsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AssetsUpdateRequest = {
        /**
         * The asset family this asset belongs to — which attributes it carries and how its file is named. A create falls back to the `default_asset_family` tenant setting when the body names none.
         */
        asset_family_id?: string;
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.

Which attributes an asset of this family has comes from `attributes` rows with `entity_type: "asset"` and `entity_ref` equal to the family's code — alt text, copyright, an expiry date.
         */
        attribute_values?: object;
        /**
         * The asset's stable identifier within its family — the value a product's media attribute stores. Unique per family.
         */
        code?: string;
        /**
         * The path the CDN serves this asset under — the convenient value for rendering. It changes when the file is moved, so never join on it.
         */
        delivery_path?: string | null;
        /**
         * Absolute URL of an externally hosted file. Required when `source` is `external`, and accepted only when the tenant has `allow_external_media` on and the host is on its `external_media_allowed_hosts` list — `POST /products/assets` is the only place an external URL can enter the catalog, so it is the only place those are enforced.
         */
        external_url?: string | null;
        /**
         * Where the bytes live: 'storage' is this platform's object store and needs `storage_asset_id`, 'external' is somebody else's host and needs `external_url`. The database enforces the pair, so neither half can be stored on its own.
         */
        source?: AssetsSource;
        /**
         * The stable `ast_…` id of the storage object. It survives a rename or a folder move, which is exactly why it and not the delivery path is the identifier. Required when `source` is `storage`.
         */
        storage_asset_id?: string | null;
    }

    /**
     * 
     */
    export type AssociationTypes = {
        /**
         * The kind of relation between two products. Unique per tenant.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Declares that a relation of this kind carries a quantity — a bundle, a bill of materials. `product_associations.quantity` is where that number goes, and it is meaningless without this flag.
         */
        is_quantified?: boolean;
        /**
         * Declares the relation symmetric — an accessory of A is an accessory of B. It is a declaration a client reads: this app stores one row per direction and does not create the mirror for you.
         */
        is_two_way?: boolean;
        /**
         * What the relation is called in a product form, per language tag.
         */
        labels?: object | null;
    }

    /**
     * 
     */
    export type AssociationTypesCreateRequest = {
        /**
         * The kind of relation between two products. Unique per tenant.
         */
        code: string;
        /**
         * Declares that a relation of this kind carries a quantity — a bundle, a bill of materials. `product_associations.quantity` is where that number goes, and it is meaningless without this flag.
         */
        is_quantified?: boolean;
        /**
         * Declares the relation symmetric — an accessory of A is an accessory of B. It is a declaration a client reads: this app stores one row per direction and does not create the mirror for you.
         */
        is_two_way?: boolean;
        /**
         * What the relation is called in a product form, per language tag.
         */
        labels?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `association_types` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type AssociationTypesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?is_quantified=` value this call was understood to carry.
         */
        is_quantified?: string;
        /**
         * The literal `?is_two_way=` value this call was understood to carry.
         */
        is_two_way?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
    }

    export type DefaultAssociationTypesFilter = AssociationTypesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AssociationTypesUpdateRequest = {
        /**
         * The kind of relation between two products. Unique per tenant.
         */
        code?: string;
        /**
         * Declares that a relation of this kind carries a quantity — a bundle, a bill of materials. `product_associations.quantity` is where that number goes, and it is meaningless without this flag.
         */
        is_quantified?: boolean;
        /**
         * Declares the relation symmetric — an accessory of A is an accessory of B. It is a declaration a client reads: this app stores one row per direction and does not create the mirror for you.
         */
        is_two_way?: boolean;
        /**
         * What the relation is called in a product form, per language tag.
         */
        labels?: object | null;
    }

    /**
     * One renderable field. A superset of the manifest&#039;s `Field`: the three additions (`localized`, `channel_scoped`, `storage`) carry what a static manifest never has to say, because a manifest&#039;s fields are columns and these are keys inside one.
     */
    export type AttributeField = {
        /**
         * One value per channel rather than one value.
         */
        channel_scoped?: boolean;
        /**
         * Dotted read paths, most specific first — the documented precedence (channel+locale → locale → channel → common). `common` is always last and always present, because early imports wrote there whatever the attribute's flags say.
         */
        from?: string[];
        /**
         * Attribute-group code — the section this field belongs in.
         */
        group?: string;
        /**
         * That section's heading, resolved for the requested locale — so a form can be built without reading `attribute_groups` as well.
         */
        group_label?: string;
        /**
         * Resolved for the requested locale, falling back to English, then to the code.
         */
        label?: string;
        /**
         * One value per locale rather than one value.
         */
        localized?: boolean;
        /**
         * The attribute code — the key the value is stored under.
         */
        name?: string;
        /**
         * Present on select / multi-select. Two sources, one shape: rows of `attribute_options` for an enumeration the attribute owns, or the records of a reference entity for an attribute that points at one. Empty is an answer: the list has no members yet.
         */
        options?: AttributeFieldOption[];
        /**
         * The family's ordering of this attribute, falling back to the attribute's own.
         */
        position?: number;
        /**
         * The field must not be edited in this context. Today the one cause is a variant axis on a product model; `readonly_reason` says which.
         */
        readonly?: boolean;
        /**
         * Why the field is locked — a variant axis on a product model is set on its variants.
         */
        readonly_reason?: string;
        /**
         * Present when the options ARE a reference entity's records: the code of that entity, so a client can offer to manage the values rather than only pick from them.
         */
        reference_entity?: string;
        /**
         * The family's `is_required`, narrowed to the requested channel when `required_channels` names any.
         */
        required?: boolean;
        /**
         * Where the value lives. Absent on an app whose custom fields are plain columns — then the field name IS the column.
         */
        storage?: AttributeFieldStorage;
        /**
         * The control to draw. Mapped from `attributes.type`, which carries no CHECK on purpose — an unknown type answers 'text' rather than nothing.
         */
        type?: string;
        /**
         * The attribute's `is_unique` — the value is meant to identify the product. Advisory: no index enforces it, so a client that cares has to check.
         */
        unique?: boolean;
        /**
         * Offered units of a `measure` field, from the attribute's `config.units`.
         */
        units?: string[];
        /**
         * The limits the value has to satisfy, ready to hand to a form validator. Only the seven keys below are republished; anything else the tenant stored in `attributes.validation` stays there.
         */
        validation?: AttributeFieldValidation;
    }

    /**
     * 
     */
    export type AttributeFieldOption = {
        /**
         * What to show in the picker, already resolved for the requested locale.
         */
        label?: string;
        /**
         * Colour/texture chip, when the option carries one — `{"hex": "#c0c0c0"}`.
         */
        swatch?: object | null;
        /**
         * The stored value — an `attribute_options.code`, or a `reference_entity_records.code` when the options ARE a reference entity. This, never the label, is what goes into `attribute_values`.
         */
        value?: string;
    }

    /**
     * Where the value lives. Absent on an app whose custom fields are plain columns — then the field name IS the column.
     */
    export type AttributeFieldStorage = {
        /**
         * Which scope bucket this attribute writes to, implied by localizable/scopable.
         */
        bucket?: AttributeValueBucket;
        /**
         * The jsonb column holding the values (`attribute_values`).
         */
        column?: string;
        /**
         * The exact key path for the requested context, or null when the request named no locale/channel and the bucket needs one. Null means: read-only until a context is chosen.
         */
        path?: string[] | null;
    }

    /**
     * The limits the value has to satisfy, ready to hand to a form validator. Only the seven keys below are republished; anything else the tenant stored in `attributes.validation` stays there.
     */
    export type AttributeFieldValidation = {
        /**
         * Largest permitted number.
         */
        max?: number;
        /**
         * Most entries.
         */
        max_items?: number;
        /**
         * Longest permitted text.
         */
        max_length?: number;
        /**
         * Smallest permitted number, for a number or measure field.
         */
        min?: number;
        /**
         * Fewest entries, for a multi-select or a collection.
         */
        min_items?: number;
        /**
         * Shortest permitted text.
         */
        min_length?: number;
        /**
         * A regular expression the text has to match.
         */
        pattern?: string;
    }

    /**
     * 
     */
    export type AttributeGroups = {
        /**
         * The group's stable identifier, and the value an `AttributeField` carries as its `group` — a SECTION of the product form, not a label. Unique per tenant and the key an import joins on.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * The section heading a person sees, keyed by language tag. The code is never shown to an operator; a tag nobody translated falls back to the next filled one, then to English.
         */
        labels?: object | null;
        /**
         * Where this section sits in a form, ascending. Sections that tie keep the order the database returns them in.
         */
        position?: number;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type AttributeGroupsCreateRequest = {
        /**
         * The group's stable identifier, and the value an `AttributeField` carries as its `group` — a SECTION of the product form, not a label. Unique per tenant and the key an import joins on.
         */
        code: string;
        /**
         * The section heading a person sees, keyed by language tag. The code is never shown to an operator; a tag nobody translated falls back to the next filled one, then to English.
         */
        labels?: object | null;
        /**
         * Where this section sits in a form, ascending. Sections that tie keep the order the database returns them in.
         */
        position?: number;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `attribute_groups` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type AttributeGroupsFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultAttributeGroupsFilter = AttributeGroupsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AttributeGroupsUpdateRequest = {
        /**
         * The group's stable identifier, and the value an `AttributeField` carries as its `group` — a SECTION of the product form, not a label. Unique per tenant and the key an import joins on.
         */
        code?: string;
        /**
         * The section heading a person sees, keyed by language tag. The code is never shown to an operator; a tag nobody translated falls back to the next filled one, then to English.
         */
        labels?: object | null;
        /**
         * Where this section sits in a form, ascending. Sections that tie keep the order the database returns them in.
         */
        position?: number;
    }

    /**
     * 
     */
    export type AttributeOptions = {
        /**
         * The select / multi-select attribute these are the permitted values of. Deleting the attribute deletes its options with it.
         */
        attribute_id?: string;
        /**
         * The value actually STORED in a record's `attribute_values` when this option is picked — never the label. Unique within the attribute.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * What the option is called, per language tag. Two tenants may label the same code differently; only the code is ever written into a record.
         */
        labels?: object | null;
        /**
         * Order in the dropdown, ascending. Options that tie keep the order the database returns them in, so give every option a position if the order matters.
         */
        position?: number;
        /**
         * A colour or texture chip for the picker. Null for an option that is not visual.
         */
        swatch?: object | null;
    }

    /**
     * 
     */
    export type AttributeOptionsCreateRequest = {
        /**
         * The select / multi-select attribute these are the permitted values of. Deleting the attribute deletes its options with it.
         */
        attribute_id: string;
        /**
         * The value actually STORED in a record's `attribute_values` when this option is picked — never the label. Unique within the attribute.
         */
        code: string;
        /**
         * What the option is called, per language tag. Two tenants may label the same code differently; only the code is ever written into a record.
         */
        labels?: object | null;
        /**
         * Order in the dropdown, ascending. Options that tie keep the order the database returns them in, so give every option a position if the order matters.
         */
        position?: number;
        /**
         * A colour or texture chip for the picker. Null for an option that is not visual.
         */
        swatch?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `attribute_options` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type AttributeOptionsFilter = {
        /**
         * The literal `?attribute_id=` value this call was understood to carry.
         */
        attribute_id?: string;
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?swatch=` value this call was understood to carry.
         */
        swatch?: string;
    }

    export type DefaultAttributeOptionsFilter = AttributeOptionsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AttributeOptionsUpdateRequest = {
        /**
         * The select / multi-select attribute these are the permitted values of. Deleting the attribute deletes its options with it.
         */
        attribute_id?: string;
        /**
         * The value actually STORED in a record's `attribute_values` when this option is picked — never the label. Unique within the attribute.
         */
        code?: string;
        /**
         * What the option is called, per language tag. Two tenants may label the same code differently; only the code is ever written into a record.
         */
        labels?: object | null;
        /**
         * Order in the dropdown, ascending. Options that tie keep the order the database returns them in, so give every option a position if the order matters.
         */
        position?: number;
        /**
         * A colour or texture chip for the picker. Null for an option that is not visual.
         */
        swatch?: object | null;
    }

    /**
     * The family the fields belong to, or null when none was named — then the answer is every attribute of the `entity_type`, which is what a reference entity or an asset family has instead of a family.
     */
    export type AttributeSchemaFamily = {
        /**
         * The family's code — the value `?family_code=` takes.
         */
        code?: string;
        /**
         * The family's id.
         */
        id?: string;
        /**
         * The family name, resolved for the requested locale.
         */
        label?: string;
        /**
         * Which of these fields is the product's display name.
         */
        label_attribute?: string | null;
    }

    /**
     * 
     */
    export type AttributeSchemaGroup = {
        /**
         * The group code, which is what every field in the section carries as its `group`.
         */
        code?: string;
        /**
         * The section heading, resolved for the requested locale.
         */
        label?: string;
        /**
         * Where the section sits, ascending. The array is already in this order.
         */
        position?: number;
    }

    /**
     * 
     */
    export type Attributes = {
        /**
         * The attribute's stable identifier — the KEY its value is stored under inside `attribute_values`, and the name a category rule addresses as `attribute:<code>`. Unique per (`entity_type`, `entity_ref`) in this tenant.
         */
        code?: string;
        /**
         * Type-specific settings; which keys apply depends on `type`. The ones this app reads: `units` (the unit list a measure attribute offers) and `reference_entity` (which entity a reference attribute draws its options from). The ones the cockpit edits alongside them: `unit`, `metric_family`, `decimals_allowed`, `asset_family`, `max_file_size`, `allowed_extensions`.
         */
        config?: object | null;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * Narrows `entity_type` to ONE reference entity or asset family, by its code — the attributes of `brand` rather than of every reference entity. Null for a plain product attribute.
         */
        entity_ref?: string | null;
        /**
         * Which kind of record carries this attribute: 'product' for the catalog itself, 'reference_entity', 'asset' or 'category' for the other things in this app that have attributes. Deliberately carries no CHECK — a tenant that models a fifth kind is served on it too.
         */
        entity_type?: string;
        /**
         * The `attribute_groups` row this attribute is filed under — the form section it appears in. Null is ungrouped, and an ungrouped field is rendered after every section that has a name.
         */
        group_id?: string | null;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Offer this attribute as a filter in a product list. `GET /products/grid` reports exactly these attributes in its `filters` array, and nothing else reads the flag.
         */
        is_filterable?: boolean;
        /**
         * Declares that the value identifies the product — an EAN, a manufacturer part number. It is metadata a form and an importer read: no database index enforces it, because the value lives inside jsonb rather than in a column.
         */
        is_unique?: boolean;
        /**
         * The field label a person sees, keyed by language tag. Resolution falls back to English and then to the code, so an untranslated attribute is still renderable.
         */
        labels?: object | null;
        /**
         * True → the record holds ONE VALUE PER LOCALE, under `attribute_values.locale_specific.<locale>.<code>`. False → one value, under `attribute_values.common.<code>`. This flag is what decides where a write goes.
         */
        localizable?: boolean;
        /**
         * Where the field sits inside its group. A family may override it for its own form through `family_attributes.position`; this is the attribute's default.
         */
        position?: number;
        /**
         * True → one value PER CHANNEL, under `attribute_values.channel_specific.<channel>.<code>`. Set together with `localizable` it means one value per channel AND locale, in `channel_locale_specific`.
         */
        scopable?: boolean;
        /**
         * Which editor the value asks for — 'text', 'select', 'metric', 'price', 'asset_collection', 'reference_entity'. Carries no CHECK on purpose: an integrator adds a type, and `GET /products/attribute-schema` maps an unknown one onto a text field rather than refusing to answer.
         */
        type?: string;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
        /**
         * Show this attribute as a COLUMN in the product grid. `GET /products/grid` returns a column definition and a per-row value for exactly these.
         */
        usable_in_grid?: boolean;
        /**
         * Limits a value has to satisfy, as a flat object. The seven keys a client can act on are `min`, `max`, `min_length`, `max_length`, `pattern`, `min_items`, `max_items` — `GET /products/attribute-schema` republishes those and leaves anything else the tenant stored untouched.
         */
        validation?: object | null;
    }

    /**
     * 
     */
    export type AttributesCreateRequest = {
        /**
         * The attribute's stable identifier — the KEY its value is stored under inside `attribute_values`, and the name a category rule addresses as `attribute:<code>`. Unique per (`entity_type`, `entity_ref`) in this tenant.
         */
        code: string;
        /**
         * Type-specific settings; which keys apply depends on `type`. The ones this app reads: `units` (the unit list a measure attribute offers) and `reference_entity` (which entity a reference attribute draws its options from). The ones the cockpit edits alongside them: `unit`, `metric_family`, `decimals_allowed`, `asset_family`, `max_file_size`, `allowed_extensions`.
         */
        config?: object | null;
        /**
         * Narrows `entity_type` to ONE reference entity or asset family, by its code — the attributes of `brand` rather than of every reference entity. Null for a plain product attribute.
         */
        entity_ref?: string | null;
        /**
         * Which kind of record carries this attribute: 'product' for the catalog itself, 'reference_entity', 'asset' or 'category' for the other things in this app that have attributes. Deliberately carries no CHECK — a tenant that models a fifth kind is served on it too.
         */
        entity_type?: string;
        /**
         * The `attribute_groups` row this attribute is filed under — the form section it appears in. Null is ungrouped, and an ungrouped field is rendered after every section that has a name.
         */
        group_id?: string | null;
        /**
         * Offer this attribute as a filter in a product list. `GET /products/grid` reports exactly these attributes in its `filters` array, and nothing else reads the flag.
         */
        is_filterable?: boolean;
        /**
         * Declares that the value identifies the product — an EAN, a manufacturer part number. It is metadata a form and an importer read: no database index enforces it, because the value lives inside jsonb rather than in a column.
         */
        is_unique?: boolean;
        /**
         * The field label a person sees, keyed by language tag. Resolution falls back to English and then to the code, so an untranslated attribute is still renderable.
         */
        labels?: object | null;
        /**
         * True → the record holds ONE VALUE PER LOCALE, under `attribute_values.locale_specific.<locale>.<code>`. False → one value, under `attribute_values.common.<code>`. This flag is what decides where a write goes.
         */
        localizable?: boolean;
        /**
         * Where the field sits inside its group. A family may override it for its own form through `family_attributes.position`; this is the attribute's default.
         */
        position?: number;
        /**
         * True → one value PER CHANNEL, under `attribute_values.channel_specific.<channel>.<code>`. Set together with `localizable` it means one value per channel AND locale, in `channel_locale_specific`.
         */
        scopable?: boolean;
        /**
         * Which editor the value asks for — 'text', 'select', 'metric', 'price', 'asset_collection', 'reference_entity'. Carries no CHECK on purpose: an integrator adds a type, and `GET /products/attribute-schema` maps an unknown one onto a text field rather than refusing to answer.
         */
        type: string;
        /**
         * Show this attribute as a COLUMN in the product grid. `GET /products/grid` returns a column definition and a per-row value for exactly these.
         */
        usable_in_grid?: boolean;
        /**
         * Limits a value has to satisfy, as a flat object. The seven keys a client can act on are `min`, `max`, `min_length`, `max_length`, `pattern`, `min_items`, `max_items` — `GET /products/attribute-schema` republishes those and leaves anything else the tenant stored untouched.
         */
        validation?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `attributes` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type AttributesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?config=` value this call was understood to carry.
         */
        config?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?entity_ref=` value this call was understood to carry.
         */
        entity_ref?: string;
        /**
         * The literal `?entity_type=` value this call was understood to carry.
         */
        entity_type?: string;
        /**
         * The literal `?group_id=` value this call was understood to carry.
         */
        group_id?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?is_filterable=` value this call was understood to carry.
         */
        is_filterable?: string;
        /**
         * The literal `?is_unique=` value this call was understood to carry.
         */
        is_unique?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?localizable=` value this call was understood to carry.
         */
        localizable?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?scopable=` value this call was understood to carry.
         */
        scopable?: string;
        /**
         * The literal `?type=` value this call was understood to carry.
         */
        type?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
        /**
         * The literal `?usable_in_grid=` value this call was understood to carry.
         */
        usable_in_grid?: string;
        /**
         * The literal `?validation=` value this call was understood to carry.
         */
        validation?: string;
    }

    export type DefaultAttributesFilter = AttributesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type AttributesUpdateRequest = {
        /**
         * The attribute's stable identifier — the KEY its value is stored under inside `attribute_values`, and the name a category rule addresses as `attribute:<code>`. Unique per (`entity_type`, `entity_ref`) in this tenant.
         */
        code?: string;
        /**
         * Type-specific settings; which keys apply depends on `type`. The ones this app reads: `units` (the unit list a measure attribute offers) and `reference_entity` (which entity a reference attribute draws its options from). The ones the cockpit edits alongside them: `unit`, `metric_family`, `decimals_allowed`, `asset_family`, `max_file_size`, `allowed_extensions`.
         */
        config?: object | null;
        /**
         * Narrows `entity_type` to ONE reference entity or asset family, by its code — the attributes of `brand` rather than of every reference entity. Null for a plain product attribute.
         */
        entity_ref?: string | null;
        /**
         * Which kind of record carries this attribute: 'product' for the catalog itself, 'reference_entity', 'asset' or 'category' for the other things in this app that have attributes. Deliberately carries no CHECK — a tenant that models a fifth kind is served on it too.
         */
        entity_type?: string;
        /**
         * The `attribute_groups` row this attribute is filed under — the form section it appears in. Null is ungrouped, and an ungrouped field is rendered after every section that has a name.
         */
        group_id?: string | null;
        /**
         * Offer this attribute as a filter in a product list. `GET /products/grid` reports exactly these attributes in its `filters` array, and nothing else reads the flag.
         */
        is_filterable?: boolean;
        /**
         * Declares that the value identifies the product — an EAN, a manufacturer part number. It is metadata a form and an importer read: no database index enforces it, because the value lives inside jsonb rather than in a column.
         */
        is_unique?: boolean;
        /**
         * The field label a person sees, keyed by language tag. Resolution falls back to English and then to the code, so an untranslated attribute is still renderable.
         */
        labels?: object | null;
        /**
         * True → the record holds ONE VALUE PER LOCALE, under `attribute_values.locale_specific.<locale>.<code>`. False → one value, under `attribute_values.common.<code>`. This flag is what decides where a write goes.
         */
        localizable?: boolean;
        /**
         * Where the field sits inside its group. A family may override it for its own form through `family_attributes.position`; this is the attribute's default.
         */
        position?: number;
        /**
         * True → one value PER CHANNEL, under `attribute_values.channel_specific.<channel>.<code>`. Set together with `localizable` it means one value per channel AND locale, in `channel_locale_specific`.
         */
        scopable?: boolean;
        /**
         * Which editor the value asks for — 'text', 'select', 'metric', 'price', 'asset_collection', 'reference_entity'. Carries no CHECK on purpose: an integrator adds a type, and `GET /products/attribute-schema` maps an unknown one onto a text field rather than refusing to answer.
         */
        type?: string;
        /**
         * Show this attribute as a COLUMN in the product grid. `GET /products/grid` returns a column definition and a per-row value for exactly these.
         */
        usable_in_grid?: boolean;
        /**
         * Limits a value has to satisfy, as a flat object. The seven keys a client can act on are `min`, `max`, `min_length`, `max_length`, `pattern`, `min_items`, `max_items` — `GET /products/attribute-schema` republishes those and leaves anything else the tenant stored untouched.
         */
        validation?: object | null;
    }

    /**
     * 
     */
    export type AuditEntry = {
        /**
         * 
         */
        action: string;
        /**
         * 
         */
        changes: any[] | null;
        /**
         * 
         */
        created_at: string;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        resource_id: string;
        /**
         * 
         */
        resource_key: string | null;
        /**
         * 
         */
        resource_type: string;
        /**
         * 
         */
        subject: string | null;
        /**
         * 
         */
        tenant_id: string;
    }

    /**
     * 
     */
    export type AuthLoginRequest = {
        /**
         * The buyer's login address — the same one the contact carries.
         */
        email: string;
        /**
         * The password from registration or recovery. Wrong credentials are a 401; a correct one on an undecided application is a 403.
         */
        password: string;
    }

    /**
     * 
     */
    export type AuthLoginResponse = {
        /**
         * The challenge to answer, when one was required. Send it back as `challenge_id`.
         */
        challenge_id?: string | null;
        /**
         * The customer record behind the login. Null when a platform user has no contact mirrored against it — a storefront should treat that as "signed in, but not a customer of this app".
         */
        contact?: Contact;
        /**
         * Present and true when the tenant's `mfa_mode` is 'required'. The password was one of two things this buyer has to prove: a challenge has already been created and mailed, and the session above must NOT be treated as signed in until `PUT /customers/auth/mfa/challenge` confirms the code. The session travels anyway because answering needs it — the expected caller holds session material server-side, and this is the point at which that trust is used.
         */
        mfa_required?: boolean | null;
        /**
         * A contact's effective grants, derived from its role on every read — nothing here is stored, so a role change can never leave a stale grant behind. Carried here so a BFF does not need a second call to decide what to render.
         */
        permissions?: ContactPermissions;
        /**
         * Platform auth session. Treat `secret` as a credential — the trusted BFF stores it server-side (HTTP-only cookie), never in the browser.
         */
        session?: AuthSession;
    }

    /**
     * 
     */
    export type AuthLogoutRequest = {
        /**
         * The session to revoke — `session.$id` from the login.
         */
        session_id: string;
        /**
         * The platform user — `session.userId` from the login.
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthMagicLinkConfirmRequest = {
        /**
         * The one-time secret the mailed link carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
         */
        secret: string;
        /**
         * The `userId` the mailed link carried.
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthMagicLinkConfirmResponse = {
        /**
         * The customer record behind the login. Null when no contact is mirrored against the platform user yet — a sign-in link creates the account, not the customer.
         */
        contact?: Contact;
        /**
         * A contact's effective grants, derived from its role on every read — nothing here is stored, so a role change can never leave a stale grant behind. Null when there is no contact to derive them from.
         */
        permissions?: ContactPermissions;
        /**
         * Platform auth session. Treat `secret` as a credential — the trusted BFF stores it server-side (HTTP-only cookie), never in the browser.
         */
        session?: AuthSession;
    }

    /**
     * 
     */
    export type AuthMagicLinkRequest = {
        /**
         * Who to send the link to. An address that has never been seen creates an account rather than failing.
         */
        email: string;
        /**
         * Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters; the first two are what the confirm call takes.
         */
        url: string;
    }

    /**
     * The token, minus its secret. The secret travels only in the mailed link — a caller holding both would not need the mail at all.
     */
    export type AuthMagicLinkResponse = {
        /**
         * The token that was created.
         */
        $id?: string;
        /**
         * When the link stops working. The mail says the same in words.
         */
        expire?: string;
        /**
         * Which template the buyer received: 'tenant' is this shop's own, 'platform' the identity service's built-in one — the fallback when messaging could not be reached. The value is the same either way, so the flow works in both cases.
         */
        mail?: AuthMailSource;
        /**
         * The platform user it belongs to — new when the address was.
         */
        userId?: string;
    }

    export type DefaultAuthMagicLinkResponse = AuthMagicLinkResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthMeRequest = {
        /**
         * Optional session to verify. Pass it to ask "is this session still alive?" (a revoked one is then a 401); omit it to only ask who a user is.
         */
        session_id?: string | null;
        /**
         * The platform user to resolve — `session.userId` from the login.
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthMeResponse = {
        /**
         * The customer record mirrored against this user, or null. A user with no contact resolves perfectly well — that is not the 404.
         */
        contact?: Contact;
        /**
         * A contact's effective grants, derived from its role on every read — nothing here is stored, so a role change can never leave a stale grant behind. Null when there is no contact to derive them from.
         */
        permissions?: ContactPermissions;
        /**
         * The platform identity record, forwarded verbatim from the identity service. This app neither reshapes nor validates it, so treat unknown fields as forward-compatible; the ones named here are the ones this app itself writes and reads.
         */
        user?: object;
    }

    /**
     * 
     */
    export type AuthMfaChallengeConfirmRequest = {
        /**
         * The `$id` the send answered with.
         */
        challenge_id: string;
        /**
         * What the buyer typed.
         */
        code: string;
        /**
         * The same session the challenge was created with.
         */
        session_secret: string;
        /**
         * The platform user, for the caller's own bookkeeping. The challenge already knows whose it is.
         */
        user_id?: string | null;
    }

    /**
     * The identity service&#039;s answer, forwarded verbatim.
     */
    export type AuthMfaChallengeConfirmResponse = {
        /**
         * The challenge that was answered.
         */
        $id?: string;
    }

    export type DefaultAuthMfaChallengeConfirmResponse = AuthMfaChallengeConfirmResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthMfaChallengeRequest = {
        /**
         * Which factor to challenge. Defaults to `email`, the only one this route mails.
         */
        factor?: string | null;
        /**
         * The platform user being challenged.
         */
        user_id: string;
    }

    /**
     * The challenge, minus the code. The code is in the mail; a storefront that also received it would not be asking for a second factor.
     */
    export type AuthMfaChallengeResponse = {
        /**
         * The challenge — send it back as `challenge_id` with the code the buyer types.
         */
        $id?: string;
        /**
         * When the code stops working.
         */
        expire?: string;
        /**
         * Which template the buyer received: 'tenant' is this shop's own, 'platform' the identity service's built-in one — the fallback when messaging could not be reached. The value is the same either way, so the flow works in both cases.
         */
        mail?: AuthMailSource;
        /**
         * The platform user it belongs to.
         */
        userId?: string;
    }

    export type DefaultAuthMfaChallengeResponse = AuthMfaChallengeResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthOtpConfirmRequest = {
        /**
         * The one-time secret the mailed code carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
         */
        secret: string;
        /**
         * The `userId` the mailed code carried.
         */
        user_id: string;
    }

    /**
     * 
     */
    export type AuthOtpConfirmResponse = {
        /**
         * The customer record behind the login, or null when none is mirrored yet.
         */
        contact?: Contact;
        /**
         * A contact's effective grants, derived from its role on every read — nothing here is stored, so a role change can never leave a stale grant behind. Null when there is no contact to derive them from.
         */
        permissions?: ContactPermissions;
        /**
         * Platform auth session. Treat `secret` as a credential — the trusted BFF stores it server-side (HTTP-only cookie), never in the browser.
         */
        session?: AuthSession;
    }

    /**
     * 
     */
    export type AuthOtpRequest = {
        /**
         * Who to send the code to. As with the sign-in link, an unknown address creates an account rather than failing.
         */
        email: string;
    }

    /**
     * The token, minus the code. The code is in the mail and nowhere else.
     */
    export type AuthOtpResponse = {
        /**
         * The token that was created.
         */
        $id?: string;
        /**
         * When the code stops working.
         */
        expire?: string;
        /**
         * Which template the buyer received: 'tenant' is this shop's own, 'platform' the identity service's built-in one — the fallback when messaging could not be reached. The value is the same either way, so the flow works in both cases.
         */
        mail?: AuthMailSource;
        /**
         * The platform user it belongs to — send it back with the code the buyer types.
         */
        userId?: string;
    }

    export type DefaultAuthOtpResponse = AuthOtpResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthRecoveryConfirmRequest = {
        /**
         * The new password. It replaces the old one immediately; existing sessions are the identity service's business, not this app's.
         */
        password: string;
        /**
         * The one-time secret from the mailed link. Only that value works — it is spent on first use and expires, and anything else is a 401, so no example here would be anything but a call that fails.
         */
        secret: string;
        /**
         * The `userId` the mailed link carried.
         */
        user_id: string;
    }

    /**
     * The identity service&#039;s answer, forwarded verbatim: the spent recovery token. The new password is already in effect when this arrives.
     */
    export type AuthRecoveryConfirmResponse = {
        /**
         * The recovery that was confirmed.
         */
        $id?: string;
        /**
         * The platform user whose password was set.
         */
        userId?: string;
    }

    export type DefaultAuthRecoveryConfirmResponse = AuthRecoveryConfirmResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthRecoveryRequest = {
        /**
         * Who to send the recovery mail to. An address nobody holds is not distinguished here — do not build an account-existence check on the answer.
         */
        email: string;
        /**
         * Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters — the first two are what the confirm call takes. Same shape the identity service's own mail used, so a storefront that already handles that link needs no change.
         */
        url: string;
    }

    /**
     * The identity service&#039;s recovery token, minus its secret, plus which mail the customer got. The secret is stripped deliberately — it travels only in the mailed link, and a caller that had both would not need the mail at all. `mail` is `tenant` when this shop&#039;s own template went out and `platform` when the messaging service could not be reached and the identity service&#039;s built-in mail is the copy the buyer has; the link is the same either way.
     */
    export type AuthRecoveryResponse = {
        /**
         * The recovery that was created.
         */
        $id?: string;
        /**
         * When the link stops working. The mail says the same thing in words.
         */
        expire?: string;
        /**
         * Which template the buyer received: 'tenant' is this shop's own, 'platform' the identity service's built-in one — the fallback when messaging could not be reached. The link is identical either way, so a reset works in both cases.
         */
        mail?: RecoveryMailSource;
        /**
         * The platform user it belongs to.
         */
        userId?: string;
    }

    export type DefaultAuthRecoveryResponse = AuthRecoveryResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthRegisterRequest = {
        /**
         * The buyer's address. It becomes the login AND the unique key of the contact, so a second registration with it is a 409 — including while the first one is still waiting for approval.
         */
        email: string;
        /**
         * Given name. Optional: an ERP import often has only a mailbox.
         */
        first_name?: string | null;
        /**
         * Family name. Optional for the same reason.
         */
        last_name?: string | null;
        /**
         * The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default. One of the store's own locales, or the call is a 400.
         */
        locale?: string | null;
        /**
         * JOIN an existing company — the invite shape. Neither b2b_registration_enabled nor b2c_registration_enabled applies to it.
         */
        organization_id?: string | null;
        /**
         * FOUND a new company, with this contact as its admin. This is what makes the registration a B2B one; leaving it out registers a standalone buyer.
         */
        organization_name?: string | null;
        /**
         * The password the buyer chooses. It is hashed by the identity service at this moment and never travels again: an approval later enables the account, it does not issue a new credential.
         */
        password: string;
        /**
         * Where the welcome mail's button points — the buyer's first stop in this shop. Absent, the mail still goes out and simply carries no button. Ignored when the registration is an APPLICATION: there is no account to send anybody to yet.
         */
        url?: string | null;
        /**
         * VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU. Required when the tenant's `organization_vat_id_required` is on, and checked BEFORE the company is created so a bad one leaves no half-founded organization behind.
         */
        vat_id?: string | null;
        /**
         * Where the address-confirmation link points, when the tenant's `email_verification` asks for one on registration. `userId`, `secret` and `expire` are appended, and `PUT /customers/auth/verification` takes the first two. Without it the registration still succeeds and `verification_sent` is false — this app cannot invent a storefront URL, and a link pointing nowhere is worse than none.
         */
        verification_url?: string | null;
    }

    /**
     * 
     */
    export type AuthRegisterResponse = {
        /**
         * True when the tenant runs registration_mode='approval_required' — do NOT log the buyer in.
         */
        approval_required?: boolean;
        /**
         * The stored customer record — this app is its system of record.
         */
        contact?: Contact;
        /**
         * 'pending' means the login is disabled until a merchant approves.
         */
        registration_status?: RegistrationStatus;
        /**
         * The platform user that was created. Keep it: logout, /auth/me and the recovery confirm all take it.
         */
        user_id?: string;
        /**
         * Whether an address confirmation went out. True only when the tenant's `email_verification` asks for one on registration, the registration is a finished account rather than an application, and `verification_url` was supplied.
         */
        verification_sent?: boolean;
        /**
         * Whether the tenant's welcome mail went out. Best effort on purpose: the account exists either way, and a registration is not undone because a message service was unreachable. False for an APPLICATION, which is not an account yet and is announced by `registration.submitted` instead.
         */
        welcome_sent?: boolean;
    }

    /**
     * Platform auth session. Treat `secret` as a credential — the trusted BFF stores it server-side (HTTP-only cookie), never in the browser.
     */
    export type AuthSession = {
        /**
         * The session id. Send it back as `session_id` to log out, or to have `/auth/me` check that the session is still alive.
         */
        $id?: string;
        /**
         * When the session stops being valid on its own.
         */
        expire?: string;
        /**
         * How the session was created. Server-minted sessions from this route are not the browser-facing email/password ones, so this says which mechanism issued it.
         */
        provider?: string;
        /**
         * The session CREDENTIAL. Whoever holds it is logged in — the BFF keeps it server-side (an HTTP-only cookie), never in the browser and never in a log.
         */
        secret?: string;
        /**
         * The platform user this session belongs to — the `user_id` every other auth route takes. NOT the contact id: the contact is in `contact`.
         */
        userId?: string;
    }

    /**
     * 
     */
    export type AuthVerificationConfirmRequest = {
        /**
         * The one-time secret the mailed link carried. Spent on first use and expiring, so a second attempt with the same one is a 401 rather than a second session.
         */
        secret: string;
        /**
         * The `userId` the mailed link carried.
         */
        user_id: string;
    }

    /**
     * The identity service&#039;s answer, forwarded verbatim: the spent verification token.
     */
    export type AuthVerificationConfirmResponse = {
        /**
         * The verification that was confirmed.
         */
        $id?: string;
        /**
         * The platform user whose address is now confirmed.
         */
        userId?: string;
    }

    export type DefaultAuthVerificationConfirmResponse = AuthVerificationConfirmResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type AuthVerificationRequest = {
        /**
         * Where the mailed link points. `userId`, `secret` and `expire` are appended as query parameters; the first two are what the confirm call takes.
         */
        url: string;
        /**
         * The platform user whose address is being confirmed — `user_id` from the registration, or `session.userId` from a login.
         */
        user_id: string;
    }

    /**
     * The verification token, minus its secret.
     */
    export type AuthVerificationResponse = {
        /**
         * The verification that was created.
         */
        $id?: string;
        /**
         * When the link stops working.
         */
        expire?: string;
        /**
         * Which template the buyer received: 'tenant' is this shop's own, 'platform' the identity service's built-in one — the fallback when messaging could not be reached. The value is the same either way, so the flow works in both cases.
         */
        mail?: AuthMailSource;
        /**
         * The platform user it belongs to.
         */
        userId?: string;
    }

    export type DefaultAuthVerificationResponse = AuthVerificationResponse & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type Binding = {
        /**
         * 
         */
        channel: string;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        enabled: boolean;
        /**
         * 
         */
        event_topic: string;
        /**
         * 
         */
        fallback_order: number;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        locale: string | null;
        /**
         * 
         */
        recipient: string;
        /**
         * 
         */
        template_key: string;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
    }

    /**
     * A bulk job as returned by `/bulk-jobs`. Note that the row counts are
nested under `counts` — they are not top-level fields — and that the
response carries no `tenant_id` (the listing envelope does) and no
`updated_at`.

     */
    export type BulkJob = {
        /**
         * 
         */
        app?: string;
        /**
         * 
         */
        correlation_id?: string | null;
        /**
         * 
         */
        counts?: object;
        /**
         * 
         */
        created_at?: string | null;
        /**
         * 
         */
        created_by?: string | null;
        /**
         * 
         */
        duration_ms?: number | null;
        /**
         * 
         */
        entity?: string | null;
        /**
         * 
         */
        error_message?: string | null;
        /**
         * 
         */
        finished_at?: string | null;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        profile_id?: string | null;
        /**
         * Engine-reported progress. For an export this carries the
`object_key` and `format` the result is written to.

         */
        progress?: object | null;
        /**
         * 
         */
        started_at?: string | null;
        /**
         * 
         */
        status?: BulkJobStatus;
        /**
         * 
         */
        type?: BulkJobType;
        /**
         * 
         */
        vendor?: string;
    }

    /**
     * Lifecycle of a `baseline.bulk_jobs` row:
`pending → running → completed`, or `partial` (finished with
`counts.rejected &gt; 0`), `failed`, or `canceled`.

     */
    export type BulkJobStatus = {
    }

    /**
     * One value per PE-102 block that moves data.
     */
    export type BulkJobType = {
    }

    /**
     * 
     */
    export type Cart = {
        /**
         * When the cart was abandoned — by hand, or by the cart-maintenance sweep. This is the only instant the abandonment funnel has, and nothing else in the platform writes it. carts.reopen clears it.
         */
        abandoned_at?: string | null;
        /**
         * The sales channel the cart was opened in (web shop, app, agent desk), as a channel of the channels app. Carried to the order for attribution; nothing in this app reads it.
         */
        channel_id?: string | null;
        /**
         * The customer who owns this cart, as a contact of the customers app. Null on a guest cart: the database requires one of contact_id and session_key, never neither.
         */
        contact_id?: string | null;
        /**
         * When the cart was opened.
         */
        created_at?: string;
        /**
         * ISO 4217 code the whole cart is priced in. A line added without a currency of its own inherits this one.
         */
        currency?: string;
        /**
         * The cart, as every other route addresses it. Stable for the cart's whole life: a merge closes a cart, it never renumbers one.
         */
        id?: string;
        /**
         * THE current cart of this owner — the flag carts.activate writes, and reading it back is what `?is_current=true` is for. At most one cart per owner carries it: activating one clears it on every sibling, and abandoning, ordering or merging a cart clears it. A storefront resuming a session asks for it together with contact_id or session_key.
         */
        is_current?: boolean;
        /**
         * Total QUANTITY in the cart, not the number of lines: the sum of every line's quantity, rounded. Two lines of five pieces each answer 10, not 2. Recomputed by this app after every line write — a value a client sends is ignored.
         */
        item_count?: number;
        /**
         * The market this cart is scoped to, stamped by the platform. It decides which market's settings apply — including the retention windows the sweep deletes on. Null on a cart that belongs to no market, which runs on the tenant baseline. Cart lines and io profiles carry no market of their own; a line's market is its cart's.
         */
        market_id?: string | null;
        /**
         * The cart this one was merged into, written together with status 'merged'. The lines are in the target now and this is the trail back — the answer to 'where did my cart go'. Null on every cart that was never merged.
         */
        merged_into_cart_id?: string | null;
        /**
         * Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this cart. B2B customers keep several named carts side by side — 'Weekly order', 'Site B', 'Q3 budget' — which is what multi_cart_enabled turns on; a storefront with one cart per buyer leaves it at the default 'Cart'.
         */
        name?: string;
        /**
         * The order this cart became, in whatever numbering order management uses. Free text: this app stores what it is handed and never resolves it. Filtering on it is how a support agent gets from an order number back to the cart behind it.
         */
        order_ref?: string | null;
        /**
         * When the cart was handed to order management. Written once, with the status, and never cleared.
         */
        ordered_at?: string | null;
        /**
         * How a cart is identified BEFORE anyone logs in — the opaque key the storefront already keeps in its own session or cookie and sends back on every anonymous call. This app neither issues nor parses it; any non-empty string is a valid key, so its format is the storefront's own. On login carts.claim hands every active cart of one session_key to a contact, and this becomes null.
         */
        session_key?: string | null;
        /**
         * Where the cart stands in its lifecycle. 'active' is the only status that accepts a write of any kind. 'abandoned' is set by hand or by the cart-maintenance sweep and is the one reversible ending (carts.reopen). 'ordered' and 'merged' are final — the cart is a record now, not a workspace.
         */
        status?: CartStatus;
        /**
         * Sum of every line's line_total, in the cart's currency, net — before shipping, before tax. Recomputed after every line write, and written once more by carts.order when price_snapshot_mode settles which of a line's two prices is charged.
         */
        subtotal?: number;
        /**
         * The tenant this row belongs to, echoed by the data plane. Always the tenant the request was made for — it is not a way to reach another one.
         */
        tenant_id?: string;
        /**
         * The last time anything about this cart or its lines changed — every write path in this app stamps it. It is also what the maintenance sweep measures idleness with, which is why the abandonment sweep is the one write that deliberately does not touch it: noticing that a cart is idle must not reset the clock that decides how long it is kept.
         */
        updated_at?: string;
    }

    /**
     * The first sweep: active carts nobody has touched since their market&#039;s window become abandoned. Nothing else in the platform ever stamps abandoned_at, so without this the abandonment funnel is empty by construction rather than empty because nobody abandons carts.
     */
    export type CartAbandonSweep = {
        /**
         * Carts actually marked. 0 on a dry run — see `found`.
         */
        abandoned?: number;
        /**
         * The abandon_after_minutes of the TENANT baseline — what a cart in no market ran on. 0 disables the sweep. Carts in a market were each held against their own market's window, which may differ from this.
         */
        after_minutes?: number;
        /**
         * This pass looked at as many carts as one pass looks at, so there may be more behind them. The rest go on the next tick, oldest first — a backlog is visible here rather than merely slow.
         */
        capped?: boolean;
        /**
         * The carts this sweep touched, so a merchant can look at them before or after.
         */
        cart_ids?: string[];
        /**
         * Carts untouched since this instant were swept — the BASELINE cutoff. A run no longer has one cutoff, because each cart was held against its own market's clock; this is the one unassigned carts ran on.
         */
        cutoff?: string | null;
        /**
         * At least one window in force (the baseline, or some market's). False means every applicable window was 0 and nothing was even considered.
         */
        enabled?: boolean;
        /**
         * Carts past their window. On a dry run this is the whole answer — `abandoned` stays 0.
         */
        found?: number;
        /**
         * The market codes this pass came across, so an operator can see whose windows were actually in play. Empty when no examined cart belongs to a market.
         */
        markets?: string[];
    }

    /**
     * 
     */
    export type CartClaimRequest = {
        /**
         * The contact taking ownership. Every active cart of that session ends up with this contact — adopted as it stands, or folded into `target_cart_id`.
         */
        contact_id: string;
        /**
         * The guest session whose active carts are handed over — the key the storefront keeps in its own session or cookie and has been sending on every anonymous call. This app neither issues nor parses it, so the example shows the shape of an opaque token and not a format anything enforces.
         */
        session_key: string;
        /**
         * Override the tenant's cart_merge_strategy for this call: 'merge' keeps the target cart's own lines, 'replace' clears them first. Omit to use the setting.
         */
        strategy?: CartMergeStrategy;
        /**
         * Merge the session carts into this cart instead of adopting them.
         */
        target_cart_id?: string | null;
    }

    /**
     * 
     */
    export type CartConversion = {
        /**
         * When the cart was abandoned — by hand, or by the cart-maintenance sweep. This is the only instant the abandonment funnel has, and nothing else in the platform writes it. carts.reopen clears it.
         */
        abandoned_at?: string | null;
        /**
         * The sales channel the cart was opened in (web shop, app, agent desk), as a channel of the channels app. Carried to the order for attribution; nothing in this app reads it.
         */
        channel_id?: string | null;
        /**
         * The customer who owns this cart, as a contact of the customers app. Null on a guest cart: the database requires one of contact_id and session_key, never neither.
         */
        contact_id?: string | null;
        /**
         * When the cart was opened.
         */
        created_at?: string;
        /**
         * ISO 4217 code the whole cart is priced in. A line added without a currency of its own inherits this one.
         */
        currency?: string;
        /**
         * The cart, as every other route addresses it. Stable for the cart's whole life: a merge closes a cart, it never renumbers one.
         */
        id?: string;
        /**
         * THE current cart of this owner — the flag carts.activate writes, and reading it back is what `?is_current=true` is for. At most one cart per owner carries it: activating one clears it on every sibling, and abandoning, ordering or merging a cart clears it. A storefront resuming a session asks for it together with contact_id or session_key.
         */
        is_current?: boolean;
        /**
         * Total QUANTITY in the cart, not the number of lines: the sum of every line's quantity, rounded. Two lines of five pieces each answer 10, not 2. Recomputed by this app after every line write — a value a client sends is ignored.
         */
        item_count?: number;
        /**
         * The market this cart is scoped to, stamped by the platform. It decides which market's settings apply — including the retention windows the sweep deletes on. Null on a cart that belongs to no market, which runs on the tenant baseline. Cart lines and io profiles carry no market of their own; a line's market is its cart's.
         */
        market_id?: string | null;
        /**
         * The cart this one was merged into, written together with status 'merged'. The lines are in the target now and this is the trail back — the answer to 'where did my cart go'. Null on every cart that was never merged.
         */
        merged_into_cart_id?: string | null;
        /**
         * Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this cart. B2B customers keep several named carts side by side — 'Weekly order', 'Site B', 'Q3 budget' — which is what multi_cart_enabled turns on; a storefront with one cart per buyer leaves it at the default 'Cart'.
         */
        name?: string;
        /**
         * The order this cart became, in whatever numbering order management uses. Free text: this app stores what it is handed and never resolves it. Filtering on it is how a support agent gets from an order number back to the cart behind it.
         */
        order_ref?: string | null;
        /**
         * When the cart was handed to order management. Written once, with the status, and never cleared.
         */
        ordered_at?: string | null;
        /**
         * How price_snapshot_mode settled the two prices every line carries.
         */
        pricing?: CartConversionPricing;
        /**
         * What this app ASKED inventories for, and what it answered. This app holds no stock: inventories picks the location, applies the backorder policy and owns the hold's expiry.
         */
        reservation?: CartConversionReservation;
        /**
         * How a cart is identified BEFORE anyone logs in — the opaque key the storefront already keeps in its own session or cookie and sends back on every anonymous call. This app neither issues nor parses it; any non-empty string is a valid key, so its format is the storefront's own. On login carts.claim hands every active cart of one session_key to a contact, and this becomes null.
         */
        session_key?: string | null;
        /**
         * Where the cart stands in its lifecycle. 'active' is the only status that accepts a write of any kind. 'abandoned' is set by hand or by the cart-maintenance sweep and is the one reversible ending (carts.reopen). 'ordered' and 'merged' are final — the cart is a record now, not a workspace.
         */
        status?: CartStatus;
        /**
         * Sum of every line's line_total, in the cart's currency, net — before shipping, before tax. Recomputed after every line write, and written once more by carts.order when price_snapshot_mode settles which of a line's two prices is charged.
         */
        subtotal?: number;
        /**
         * The tenant this row belongs to, echoed by the data plane. Always the tenant the request was made for — it is not a way to reach another one.
         */
        tenant_id?: string;
        /**
         * The last time anything about this cart or its lines changed — every write path in this app stamps it. It is also what the maintenance sweep measures idleness with, which is why the abandonment sweep is the one write that deliberately does not touch it: noticing that a cart is idle must not reset the clock that decides how long it is kept.
         */
        updated_at?: string;
    }

    /**
     * How price_snapshot_mode settled the two prices every line carries.
     */
    export type CartConversionPricing = {
        /**
         * Lines in the cart when it converted.
         */
        lines?: number;
        /**
         * Lines the mode had to rewrite because snapshot and unit_price disagreed — repriced in 'snapshot' mode, re-snapshotted in 'live' mode. A line whose snapshot carries no readable price is never touched in either mode.
         */
        lines_changed?: number;
        /**
         * The tenant's price_snapshot_mode, as it ran. 'snapshot' books the order on the price the buyer was shown; 'live' books it on the line's current unit_price and rewrites the snapshot to agree, so the frozen line never claims a price nobody was charged.
         */
        mode?: CartPriceSnapshotMode;
        /**
         * The cart's frozen subtotal, and what the order is booked on.
         */
        subtotal_after?: number;
        /**
         * The cart's subtotal as it stood before the mode was applied. Compare it with subtotal_after and 'why is the order €4 off the cart' is answered by the response instead of by an argument.
         */
        subtotal_before?: number;
    }

    /**
     * What this app ASKED inventories for, and what it answered. This app holds no stock: inventories picks the location, applies the backorder policy and owns the hold&#039;s expiry.
     */
    export type CartConversionReservation = {
        /**
         * Lines inventories accepted without stock behind them, under the tenant's backorder policy — its policy, not this app's.
         */
        backordered?: number;
        /**
         * inventories' hold deadline — its TTL, not this app's.
         */
        expires_at?: string | null;
        /**
         * A hold exists. False with `requested: true` means inventories was asked and refused — `reason` says why, and only convert_reserves_stock = require turns that into a 409.
         */
        ok?: boolean;
        /**
         * The reference the reservation was booked under: the `order_ref` of the request, or the cart id when the call carried none. This is the string to hand inventories when releasing the hold.
         */
        order_ref?: string;
        /**
         * Why no hold exists — stated, never implied. Present whenever `ok` is false, and also on the never case.
         */
        reason?: string;
        /**
         * False when convert_reserves_stock is 'never' — no call was made at all, which is reported rather than dressed up as a silent success.
         */
        requested?: boolean;
        /**
         * Lines inventories confirmed a hold for.
         */
        reservations?: number;
        /**
         * The HTTP status inventories answered with, present only when it refused. 404 is its own case: the tenant has no inventories app at all, which is a different problem from not enough stock.
         */
        status?: number;
    }

    /**
     * A cart needs an owner: &#039;contact_id&#039; (customer) or &#039;session_key&#039; (guest).
     */
    export type CartCreateRequest = {
        /**
         * The sales channel this cart is being opened in, as a channel of the channels app. Stored for attribution; nothing in this app reads it.
         */
        channel_id?: string | null;
        /**
         * The customer who owns this cart, as a contact of the customers app. Send this OR session_key — a cart with neither owner is refused.
         */
        contact_id?: string | null;
        /**
         * ISO 4217 code the cart is priced in (default EUR). Lines added without a currency inherit it.
         */
        currency?: string | null;
        /**
         * Make this THE current cart of its owner as it is created — the same thing carts.activate does later, and it clears the flag on every sibling cart of the same owner.
         */
        is_current?: boolean | null;
        /**
         * Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this cart (default 'Cart'). An empty string is legal and lands on the default.
         */
        name?: string | null;
        /**
         * The guest session that owns this cart — the key the storefront already keeps in its own session or cookie. Any non-empty string is accepted; this app issues none and parses none, so the example shows a shape and not a format. Send this OR contact_id.
         */
        session_key?: string | null;
    }

    /**
     * 
     */
    export type CartExport = {
        /**
         * The export itself. For json: `{ "cart": { name, status, currency, channel_id, item_count, subtotal }, "items": [ … ] }` — exactly what carts.import takes back, so an export round-trips. For csv: the lines as a CSV string, header first, with jsonb columns serialized as JSON text. Deliberately untyped, because a profile's mapping renames the columns and that mapping is the caller's own.
         */
        content?: string;
        /**
         * A suggested download name, built as `cart-<cart id>.<format>`. Nothing is stored under it; it is there so a browser download has a name that says which cart it is.
         */
        filename?: string;
        /**
         * The format that ran — the profile's, or the ad-hoc one.
         */
        format?: CartIoFormat;
    }

    /**
     * 
     */
    export type CartExportRequest = {
        /**
         * Format of an ad-hoc export, read only when no profile_id is sent. 'json' returns the whole `{cart, items}` document, 'csv' the lines alone. Default 'json'.
         */
        format?: CartExportFormat;
        /**
         * The export profile to run — one of the ids `GET /carts/io/profiles?direction=export` lists. Omit it for an ad-hoc export in the canonical shape, which is what `format` is for.
         */
        profile_id?: string | null;
    }

    /**
     * `cart` is the cart as it now stands, totals already recomputed — the newly created one, or the target with the imported lines folded in.
     */
    export type CartImport = {
        /**
         * 
         */
        cart?: Cart;
        /**
         * Lines read out of the payload. Identical product lines merge, so the cart may have gained fewer rows than this.
         */
        imported_lines?: number;
    }

    /**
     * Import into an existing cart (&#039;target_cart_id&#039;) or a new cart (owner &#039;contact_id&#039;/&#039;session_key&#039; required).
     */
    export type CartImportRequest = {
        /**
         * Owner of the cart this import creates. Ignored when target_cart_id is sent.
         */
        contact_id?: string | null;
        /**
         * The CSV rows, when that is easier than putting them in `payload`. First line is the header, and its names are the ones the profile's mapping expects (the bundled quick-order template reads sku, name, quantity, unit_price). Numbers are coerced; a JSON column survives as a JSON string.
         */
        csv?: string;
        /**
         * Name for the cart this import creates. A name in the payload's own `cart` block wins over it; without either the cart is called 'Imported cart'.
         */
        name?: string;
        /**
         * The import itself. As an object: `{ "cart": { name, status, currency, channel_id, metadata }, "items": [ … ] }` — the same document carts.export produces, so an export round-trips. As a string: that document as raw JSON, or CSV rows when the profile is a csv one. A line with neither `name` nor `sku` is dropped, and a payload that leaves no line at all is a 400.
         */
        payload?: object;
        /**
         * The import profile to run — one of the ids `GET /carts/io/profiles?direction=import` lists. Omit it for an ad-hoc import: the payload is then read in the canonical shape, and as CSV if `csv` is what carried it.
         */
        profile_id?: string | null;
        /**
         * Guest owner of the cart this import creates — the storefront's own session key. Ignored when target_cart_id is sent.
         */
        session_key?: string;
        /**
         * An existing ACTIVE cart to import into. The lines are added to it (merging identical product lines), unless the profile says `apply_mode: replace`, which clears it first. Without this a new cart is created and an owner is required.
         */
        target_cart_id?: string | null;
    }

    /**
     * Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
     */
    export type CartIoMapping = {
        /**
         * Renames, in order. On export the row is narrowed to these columns; on import a column that is not listed is ignored. Omit or leave empty for identity.
         */
        columns?: CartIoMappingColumn[];
        /**
         * Fields that identify a line in the payload — what the bundled quick-order template sets to ['sku'].
         */
        keys?: string[];
    }

    /**
     * 
     */
    export type CartIoMappingColumn = {
        /**
         * The cart or line field, spelled as this app spells it — one of the canonical column names.
         */
        from: string;
        /**
         * What that field is called on the outside: the CSV header, or the JSON key of the system on the other end.
         */
        to: string;
    }

    /**
     * 
     */
    export type CartItem<CartItemSnapshot extends Models.CartItemSnapshot = Models.DefaultCartItemSnapshot> = {
        /**
         * The cart this line belongs to. A line never moves between carts — a merge copies it into the target and closes the source cart.
         */
        cart_id?: string;
        /**
         * What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
         */
        configuration?: object | null;
        /**
         * When the line was added. A merge into an existing line keeps the original — the quantity moved, the line did not.
         */
        created_at?: string;
        /**
         * ISO 4217 code this line is priced in. Defaults to the cart's currency when a line is added without one.
         */
        currency?: string;
        /**
         * The line, as carts.items.get/update/delete address it.
         */
        id?: string;
        /**
         * quantity × unit_price, net, always derived. A line_total in a payload is ignored: the cart may not disagree with its own arithmetic.
         */
        line_total?: number;
        /**
         * Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
         */
        metadata?: object | null;
        /**
         * What the line reads as on the cart page. Falls back to the SKU when a caller sends none, so a line always has something to show.
         */
        name?: string;
        /**
         * Sort order within the cart, ascending. Lines come back in this order unless `order` says otherwise, and a bulk replace numbers them by their place in the payload.
         */
        position?: number;
        /**
         * The catalogue product this line came from, when it came from one. Null on a custom line, and null on a product line the storefront identified by SKU alone.
         */
        product_id?: string | null;
        /**
         * How much of it. Fractional on purpose — 2.5 metres of cable is a line, not a rounding error — and always greater than zero: removing a line is a DELETE, not a quantity of 0.
         */
        quantity?: number;
        /**
         * The article number the merchant sorts by in the ERP — the value every integration joins on. Free text here: this app does not resolve it against the catalogue, so it is exactly what the storefront wrote into the line. Together with product_id and unit_price it decides whether adding the same article again lands on this line or opens a new one.
         */
        sku?: string | null;
        /**
         * The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
         */
        snapshot?: CartItemSnapshot;
        /**
         * VAT percent for this line, as a number (19 means 19 %). Stored with the line for the order to use — no total in this app includes tax.
         */
        tax_rate?: number;
        /**
         * The tenant this row belongs to, echoed by the data plane.
         */
        tenant_id?: string;
        /**
         * What kind of line this is. 'product' is a catalogue line and the only type that ever merges with another. 'configuration' is a configured product — it carries its configuration and always stands alone, because two differently configured units of the same article are not the same line. 'custom' is a free line nobody has to find in a catalogue: a service, a surcharge, a hand-typed position.
         */
        type?: CartItemType;
        /**
         * The unit the quantity is counted in ('pcs', 'm', 'kg', 'h'). Display and ERP hand-over only; this app converts nothing.
         */
        unit?: string | null;
        /**
         * Net price of ONE unit, in the line's currency. This is the working price — a resync, a PUT on the line or a repricing job may have moved it since the buyer saw it. The price the buyer WAS shown lives in snapshot, and carts.order decides which of the two the order is booked on.
         */
        unit_price?: number;
        /**
         * When the line last changed — including a quantity another add merged into it.
         */
        updated_at?: string;
    }

    /**
     * An item needs an identity: &#039;name&#039; or &#039;sku&#039;.
     */
    export type CartItemCreateRequest<CartItemSnapshot extends Models.CartItemSnapshot = Models.DefaultCartItemSnapshot> = {
        /**
         * What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
         */
        configuration?: object | null;
        /**
         * ISO 4217 code. Defaults to the cart's currency.
         */
        currency?: string | null;
        /**
         * Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
         */
        metadata?: object | null;
        /**
         * What the line reads as on the cart page. Falls back to 'sku' when omitted, so a line always has something to show.
         */
        name?: string | null;
        /**
         * Sort order within the cart, ascending. Default 0 when adding a line; in a bulk replace the payload order fills it in.
         */
        position?: number | null;
        /**
         * The catalogue product, when the line comes from one. Part of the merge identity: same product, same price, one line.
         */
        product_id?: string | null;
        /**
         * How much of it — default 1. Fractional is legal (2.5 m of cable); zero and negative are not. On a plain product line that merges into an existing one, this is ADDED to what is already there, and max_quantity_per_line is checked on the result.
         */
        quantity?: number | null;
        /**
         * The article number, exactly as the merchant knows it. Free text — this app does not resolve it against the catalogue — and part of the merge identity together with product_id and unit_price. The example only shows the shape of a real article number; nothing here enforces one.
         */
        sku?: string | null;
        /**
         * The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
         */
        snapshot?: CartItemSnapshot;
        /**
         * VAT percent for this line, as a number (19 means 19 %). Stored for the order to use — no total in this app includes tax.
         */
        tax_rate?: number | null;
        /**
         * Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
         */
        type?: CartItemType;
        /**
         * The unit the quantity is counted in. Display and ERP hand-over only — this app converts nothing.
         */
        unit?: string | null;
        /**
         * Net price of one unit — line_total is always derived from it, never sent. Part of the merge identity: the same article at a different price opens a new line rather than averaging into the old one.
         */
        unit_price?: number | null;
    }

    /**
     * The product as the buyer was shown it when this line was added — the cart&#039;s own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as &quot;free&quot;.
     */
    export type CartItemSnapshot = {
        /**
         * The older spelling of the same thing, read only when `unit_price` is absent.
         */
        price?: number | null;
        /**
         * The net unit price the buyer was shown. This is what carts.order books the line on under price_snapshot_mode = snapshot, and what it rewrites under = live.
         */
        unit_price?: number | null;
    }

    export type DefaultCartItemSnapshot = CartItemSnapshot & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type CartItemUpdateRequest<CartItemSnapshot extends Models.CartItemSnapshot = Models.DefaultCartItemSnapshot> = {
        /**
         * What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
         */
        configuration?: object | null;
        /**
         * ISO 4217 code. Defaults to the cart's currency.
         */
        currency?: string | null;
        /**
         * Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
         */
        metadata?: object | null;
        /**
         * What the line reads as on the cart page. Falls back to 'sku' when omitted, so a line always has something to show.
         */
        name?: string | null;
        /**
         * Sort order within the cart, ascending. Default 0 when adding a line; in a bulk replace the payload order fills it in.
         */
        position?: number | null;
        /**
         * The catalogue product, when the line comes from one. Part of the merge identity: same product, same price, one line.
         */
        product_id?: string | null;
        /**
         * How much of it — default 1. Fractional is legal (2.5 m of cable); zero and negative are not. On a plain product line that merges into an existing one, this is ADDED to what is already there, and max_quantity_per_line is checked on the result.
         */
        quantity?: number | null;
        /**
         * The article number, exactly as the merchant knows it. Free text — this app does not resolve it against the catalogue — and part of the merge identity together with product_id and unit_price. The example only shows the shape of a real article number; nothing here enforces one.
         */
        sku?: string | null;
        /**
         * The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
         */
        snapshot?: CartItemSnapshot;
        /**
         * VAT percent for this line, as a number (19 means 19 %). Stored for the order to use — no total in this app includes tax.
         */
        tax_rate?: number | null;
        /**
         * Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
         */
        type?: CartItemType;
        /**
         * The unit the quantity is counted in. Display and ERP hand-over only — this app converts nothing.
         */
        unit?: string | null;
        /**
         * Net price of one unit — line_total is always derived from it, never sent. Part of the merge identity: the same article at a different price opens a new line rather than averaging into the old one.
         */
        unit_price?: number | null;
    }

    /**
     * 
     */
    export type CartItemsReplaceRequest<CartItemSnapshot extends Models.CartItemSnapshot = Models.DefaultCartItemSnapshot> = {
        /**
         * The complete new item set (set semantics).
         */
        items: CartItemCreateRequest[];
    }

    /**
     * 
     */
    export type CartMaintenanceRequest = {
        /**
         * Report what the sweep WOULD do and write nothing. Worth doing before a first retention run: cart_ttl_days deletes carts and their lines.
         */
        dry_run?: boolean | null;
    }

    /**
     * 
     */
    export type CartMaintenanceResult = {
        /**
         * The first sweep: active carts nobody has touched since their market's window become abandoned. Nothing else in the platform ever stamps abandoned_at, so without this the abandonment funnel is empty by construction rather than empty because nobody abandons carts.
         */
        abandon?: CartAbandonSweep;
        /**
         * This pass wrote nothing. The counts and cart ids are the same ones the wet run would produce.
         */
        dry_run?: boolean;
        /**
         * The second sweep, and the only destructive thing this app does: carts past their retention window are deleted, their lines with them. An ordered cart is never touched at any setting — it is the source record of a sale.
         */
        purge?: CartPurgeSweep;
        /**
         * The instant this pass measured every window against. One clock for both sweeps, so a cart cannot be judged idle by one and fresh by the other.
         */
        swept_at?: string;
    }

    /**
     * 
     */
    export type CartMergeIntoRequest = {
        /**
         * Receiving cart (must be active). The cart in the path is the source and becomes status merged.
         */
        target_cart_id: string;
    }

    /**
     * 
     */
    export type CartMergeRequest = {
        /**
         * The cart being folded in. It must be active, and it does NOT survive as a workspace: its lines are copied into the target, it becomes status merged, and merged_into_cart_id points at the target. Its own lines stay on it as the record of what was moved.
         */
        source_cart_id: string;
        /**
         * The cart that SURVIVES. Must be active; it gains the source's lines (identical product lines at the same price adding up) and its totals are recomputed.
         */
        target_cart_id: string;
    }

    /**
     * Which cart survived, and what it cost. `target` is the cart that SURVIVES, already recomputed — that is the one to render. The source cart still exists and still holds its own lines: a merge copies them into the target and closes the source, it does not move them.
     */
    export type CartMergeResult = {
        /**
         * The source cart, now status merged, with merged_into_cart_id pointing at the target. It still exists and still holds its own lines: the merge copies, it does not move.
         */
        merged_cart_id?: string;
        /**
         * Lines read out of the source. Identical product lines at the same price add up rather than duplicating, so the target may have gained fewer rows than this.
         */
        merged_lines?: number;
        /**
         * 
         */
        target?: Cart;
    }

    /**
     * 
     */
    export type CartOrderRequest = {
        /**
         * The order number this cart becomes, in order management's own numbering. Stored on the cart — filtering on it is how anyone gets from an order back to the cart behind it — and it is also the reference the stock reservation is booked under. Omit it and the cart id is used for the reservation instead.
         */
        order_ref?: string | null;
    }

    /**
     * The second sweep, and the only destructive thing this app does: carts past their retention window are deleted, their lines with them. An ordered cart is never touched at any setting — it is the source record of a sale.
     */
    export type CartPurgeSweep = {
        /**
         * More carts were available to examine than one pass examines; the rest go next tick, oldest first.
         */
        capped?: boolean;
        /**
         * The carts this sweep touched, so a merchant can look at them before or after.
         */
        cart_ids?: string[];
        /**
         * The tenant baseline's window for CUSTOMER carts, in days. 0 is 'never delete' — the default, and also where an unparsable value lands, so no settings outage can start a purge.
         */
        cart_ttl_days?: number;
        /**
         * The baseline cutoff, for carts belonging to no market. Null when the baseline keeps everything.
         */
        cutoff?: string | null;
        /**
         * Carts actually deleted. 0 on a dry run — see `found`.
         */
        deleted?: number;
        /**
         * Retention was in force for at least one cart this pass looked at — the baseline, or some market that sets a window while the baseline leaves it off. False means nothing could have been deleted.
         */
        enabled?: boolean;
        /**
         * Carts past their retention window. On a dry run this is what the wet run would remove.
         */
        found?: number;
        /**
         * The same for GUEST carts — a cart with a session key and no contact behind it. Kept separate because the two are worth different amounts: a named B2B cart may be a quote somebody is still thinking about.
         */
        guest_cart_ttl_days?: number;
        /**
         * Lines actually deleted with them. 0 on a dry run.
         */
        items_deleted?: number;
        /**
         * The market codes this pass came across. Each cart was held against ITS market's window, not the baseline's.
         */
        markets?: string[];
        /**
         * Lines the wet run would remove. Always present, on a wet run too, so a client never has to tell "nothing to delete" apart from "this build did not report it".
         */
        would_delete_items?: number;
    }

    /**
     * Only safe columns are updatable — status moves through the lifecycle routes.
     */
    export type CartUpdateRequest = {
        /**
         * Move the cart to another sales channel.
         */
        channel_id?: string | null;
        /**
         * ISO 4217 code. Changes what NEW lines inherit; lines already in the cart keep the currency they were added with.
         */
        currency?: string | null;
        /**
         * Free-form data the storefront hangs on the cart. Stored and returned verbatim; no key in here is read by this app, and none is indexed.
         */
        metadata?: object | null;
        /**
         * Rename the cart. Unlike on create, this is written verbatim — `null` and `''` are refused by the database.
         */
        name?: string;
    }

    /**
     * 
     */
    export type CartVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Always true here: the values come from a CHECK constraint, so the list is exhaustive and a value outside it is stale data rather than a missing label.
         */
        closed?: boolean;
        /**
         * The tone a value that carries none falls back to.
         */
        default_tone?: CartVocabularyTone;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: CartVocabularyName;
        /**
         * Where the values came from. 'schema' = a CHECK constraint in this app's own schema.json.
         */
        source?: CartVocabularySource;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in the order the CHECK constraint lists them — which is the order a select should offer them in.
         */
        values?: CartVocabularyValue[];
    }

    /**
     * 
     */
    export type CartVocabularyIndex = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, without its values — enough to build a menu, and one call per vocabulary to fill it.
         */
        vocabularies?: CartVocabularyRef[];
    }

    /**
     * 
     */
    export type CartVocabularyRef = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: CartVocabularyRefName;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
    }

    /**
     * 
     */
    export type CartVocabularyValue = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The value ends the lifecycle — nothing moves out of it.
         */
        final?: boolean;
        /**
         * The value as the database stores and enforces it.
         */
        key?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: CartVocabularyTone;
    }

    /**
     * 
     */
    export type Categories = {
        /**
         * The category's stable identifier — what an import and a storefront join on, and what survives a rename of the label. Unique per tenant.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * The category name a person sees, per language tag. The catalog reads by name, not by code — a locale left blank falls back to the next filled one.
         */
        labels?: object | null;
        /**
         * The category this one hangs under. Null is a root of the tree. Deleting a parent lifts its children to the root rather than deleting them, so a mis-click never takes a subtree with it.
         */
        parent_id?: string | null;
        /**
         * A materialized position in the tree, kept for importers that carry one (`tools/power_tools/cordless_drills`). Nothing in this app writes or reads it — `parent_id` is the structure this app navigates.
         */
        path?: string | null;
        /**
         * Order among the siblings under the same parent, ascending.
         */
        position?: number;
        /**
         * How the conditions combine: 'all' ANDs them (the default), 'any' ORs them. It is a column of its own rather than a key of `rules` because the compiler reads the two separately.
         */
        rule_match?: string | null;
        /**
         * The selector that makes this a RULE-DRIVEN category. Null means hand-picked. Matching products are MATERIALIZED as `product_categories` rows with source `rule`, next to the hand-picked ones a recompute never touches; `POST /products/categories/{category_id}/rules/preview` dry-runs this exact document before it is stored. Conditions address the `common` bucket of a product's values — a value held per locale or per channel has no single answer for a rule to test.
         */
        rules?: object | null;
        /**
         * When the rule last ran TO COMPLETION and its memberships were synced. Null means no pass has ever finished — a recompute is chunked, so a half-finished pass leaves this untouched.
         */
        rules_computed_at?: string | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
        /**
         * Whatever this catalog keeps on a category beyond the model — the keys belong to the tenant, not to this app, and nothing here reads them.
         */
        values?: object | null;
    }

    /**
     * 
     */
    export type CategoriesCreateRequest = {
        /**
         * The category's stable identifier — what an import and a storefront join on, and what survives a rename of the label. Unique per tenant.
         */
        code: string;
        /**
         * The category name a person sees, per language tag. The catalog reads by name, not by code — a locale left blank falls back to the next filled one.
         */
        labels?: object | null;
        /**
         * The category this one hangs under. Null is a root of the tree. Deleting a parent lifts its children to the root rather than deleting them, so a mis-click never takes a subtree with it.
         */
        parent_id?: string | null;
        /**
         * A materialized position in the tree, kept for importers that carry one (`tools/power_tools/cordless_drills`). Nothing in this app writes or reads it — `parent_id` is the structure this app navigates.
         */
        path?: string | null;
        /**
         * Order among the siblings under the same parent, ascending.
         */
        position?: number;
        /**
         * How the conditions combine: 'all' ANDs them (the default), 'any' ORs them. It is a column of its own rather than a key of `rules` because the compiler reads the two separately.
         */
        rule_match?: CategoriesRuleMatch;
        /**
         * The selector that makes this a RULE-DRIVEN category. Null means hand-picked. Matching products are MATERIALIZED as `product_categories` rows with source `rule`, next to the hand-picked ones a recompute never touches; `POST /products/categories/{category_id}/rules/preview` dry-runs this exact document before it is stored. Conditions address the `common` bucket of a product's values — a value held per locale or per channel has no single answer for a rule to test.
         */
        rules?: object | null;
        /**
         * When the rule last ran TO COMPLETION and its memberships were synced. Null means no pass has ever finished — a recompute is chunked, so a half-finished pass leaves this untouched.
         */
        rules_computed_at?: string | null;
        /**
         * Whatever this catalog keeps on a category beyond the model — the keys belong to the tenant, not to this app, and nothing here reads them.
         */
        values?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `categories` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type CategoriesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?parent_id=` value this call was understood to carry.
         */
        parent_id?: string;
        /**
         * The literal `?path=` value this call was understood to carry.
         */
        path?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?rule_match=` value this call was understood to carry.
         */
        rule_match?: string;
        /**
         * The literal `?rules=` value this call was understood to carry.
         */
        rules?: string;
        /**
         * The literal `?rules_computed_at=` value this call was understood to carry.
         */
        rules_computed_at?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
        /**
         * The literal `?values=` value this call was understood to carry.
         */
        values?: string;
    }

    export type DefaultCategoriesFilter = CategoriesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type CategoriesUpdateRequest = {
        /**
         * The category's stable identifier — what an import and a storefront join on, and what survives a rename of the label. Unique per tenant.
         */
        code?: string;
        /**
         * The category name a person sees, per language tag. The catalog reads by name, not by code — a locale left blank falls back to the next filled one.
         */
        labels?: object | null;
        /**
         * The category this one hangs under. Null is a root of the tree. Deleting a parent lifts its children to the root rather than deleting them, so a mis-click never takes a subtree with it.
         */
        parent_id?: string | null;
        /**
         * A materialized position in the tree, kept for importers that carry one (`tools/power_tools/cordless_drills`). Nothing in this app writes or reads it — `parent_id` is the structure this app navigates.
         */
        path?: string | null;
        /**
         * Order among the siblings under the same parent, ascending.
         */
        position?: number;
        /**
         * How the conditions combine: 'all' ANDs them (the default), 'any' ORs them. It is a column of its own rather than a key of `rules` because the compiler reads the two separately.
         */
        rule_match?: CategoriesRuleMatch;
        /**
         * The selector that makes this a RULE-DRIVEN category. Null means hand-picked. Matching products are MATERIALIZED as `product_categories` rows with source `rule`, next to the hand-picked ones a recompute never touches; `POST /products/categories/{category_id}/rules/preview` dry-runs this exact document before it is stored. Conditions address the `common` bucket of a product's values — a value held per locale or per channel has no single answer for a rule to test.
         */
        rules?: object | null;
        /**
         * When the rule last ran TO COMPLETION and its memberships were synced. Null means no pass has ever finished — a recompute is chunked, so a half-finished pass leaves this untouched.
         */
        rules_computed_at?: string | null;
        /**
         * Whatever this catalog keeps on a category beyond the model — the keys belong to the tenant, not to this app, and nothing here reads them.
         */
        values?: object | null;
    }

    /**
     * 
     */
    export type CategoryRecomputeAllRequest = {
    }

    /**
     * Omit the body entirely to resume an unfinished pass, or start a fresh one when the last completed.
     */
    export type CategoryRecomputeRequest = {
        /**
         * The `cursor` a previous call returned, to continue that pass. Send `null` explicitly to restart from the beginning; omit the field to let the app decide (resume if a pass is in flight, otherwise start fresh). Anything that is not a string or null is a 400.
         */
        cursor?: string | null;
    }

    /**
     * 
     */
    export type CategoryRecomputeResult = {
        /**
         * Membership rows inserted with source='rule' by this call.
         */
        added?: number;
        /**
         * False → the bulk insert was refused and the call fell back to one request per row. A performance fact, not an error.
         */
        batched?: boolean;
        /**
         * The category this pass belongs to, echoed back — a caller driving several loops keys its state by it.
         */
        category_id?: string;
        /**
         * When the pass completed, and what `categories.rules_computed_at` was stamped with. Null while `done` is false.
         */
        computed_at?: string | null;
        /**
         * The product id this call reconciled up to, to hand back on the next one. Null when `done`.
         */
        cursor?: string | null;
        /**
         * False → this call spent its budget mid-pass. Send `cursor` back to continue; the counters below are THIS call only, so a caller looping to completion sums them itself.
         */
        done?: boolean;
        /**
         * Matching products examined by this call.
         */
        processed?: number;
        /**
         * Stale rule rows deleted by this call.
         */
        removed?: number;
        /**
         * Products the rule currently selects. Null while `done` is false — the pass has not seen the whole catalog yet, so there is no total to report.
         */
        total?: number | null;
    }

    /**
     * 
     */
    export type CategoryRecomputeSummary = {
        /**
         * Membership rows inserted with source='rule' by this call.
         */
        added?: number;
        /**
         * False → the bulk insert was refused and the call fell back to one request per row. A performance fact, not an error.
         */
        batched?: boolean;
        /**
         * The category this pass belongs to, echoed back — a caller driving several loops keys its state by it.
         */
        category_id?: string;
        /**
         * The category's code, so a nightly log names something a person recognises.
         */
        code?: string | null;
        /**
         * When the pass completed, and what `categories.rules_computed_at` was stamped with. Null while `done` is false.
         */
        computed_at?: string | null;
        /**
         * The product id this call reconciled up to, to hand back on the next one. Null when `done`.
         */
        cursor?: string | null;
        /**
         * False → this call spent its budget mid-pass. Send `cursor` back to continue; the counters below are THIS call only, so a caller looping to completion sums them itself.
         */
        done?: boolean;
        /**
         * Present instead of the counters when this category failed.
         */
        error?: string | null;
        /**
         * Matching products examined by this call.
         */
        processed?: number;
        /**
         * Stale rule rows deleted by this call.
         */
        removed?: number;
        /**
         * True → the budget ran out before this category was reached; it carries no counters.
         */
        skipped?: boolean | null;
        /**
         * The HTTP status this category WOULD have answered on its own — 400 for a rule that does not compile, 404 for one that vanished mid-run. Null when it succeeded.
         */
        status?: number | null;
        /**
         * Products the rule currently selects. Null while `done` is false — the pass has not seen the whole catalog yet, so there is no total to report.
         */
        total?: number | null;
    }

    /**
     * 
     */
    export type CategoryRuleCondition = {
        /**
         * A product column (sku, kind, enabled, family_id, parent_id) or 'attribute:<code>' for the common bucket of attribute_values. An attribute code is [A-Za-z0-9_]+. Locale-/channel-scoped attributes are not supported.
         */
        field: string;
        /**
         * How to compare. 'eq'/'neq' are equality, 'gt'/'gte'/'lt'/'lte' order (numerically for a number, as text for a string), 'in' membership, 'contains'/'starts_with'/'ends_with' substring, 'is_empty'/'is_not_empty' presence — those last two take no `value`.
         */
        operator: CategoryRuleOperator;
        /**
         * Comparison value. An array for 'in' — non-empty, at most 200 entries, all of the same type; omitted for 'is_empty'/'is_not_empty'; a non-empty string for 'contains'/'starts_with'/'ends_with'; a string or number for gt/gte/lt/lte. Numbers compare numerically (jsonb), strings as text.
         */
        value?: string | null;
    }

    /**
     * 
     */
    export type CategoryRuleSample = {
        /**
         * A matching product.
         */
        id?: string;
        /**
         * Its SKU, so the sample is readable. Null only for a row whose SKU is unset, which the database does not allow.
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type CategoryRulesRequest = {
        /**
         * Between 1 and 25 conditions — a rule is a selector, not a query language. An empty list is a 400, not "everything".
         */
        conditions: CategoryRuleCondition[];
        /**
         * 'all' ANDs every condition (default), 'any' ORs them.
         */
        rule_match?: CategoryRuleMatch;
    }

    /**
     * 
     */
    export type Channel = {
        /**
         * The scope slug Baseline matches channel assignments on (manifest.provides_scopes[].slug_source). Unique per tenant and, in practice, immutable — changing it orphans every assignment made against it.
         */
        code?: string;
        /**
         * When the row was inserted, set by the database.
         */
        created_at?: string;
        /**
         * Row id, and the only handle GET/PUT/DELETE /channels/{id} accept. Not the scope slug — that is `code`. No example is published because no id this app could invent names a row a tenant holds.
         */
        id?: string;
        /**
         * The channel a request that names none falls back to. At most one channel carries it.
         */
        is_default?: boolean;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * Display name. `labels` carries the per-locale ones.
         */
        name?: string;
        /**
         * Sort position — ascending, and the tiebreak when two channels both claim is_default.
         */
        position?: number;
        /**
         * Whether the channel is in service. What 'inactive' DOES is the tenant's inactive_channel_behavior setting: on 'serve' it is a label and the channel still resolves, on 'block' /channels/context answers resolved:false with reason 'channel_inactive'. Served as the 'channels.statuses' vocabulary.
         */
        status?: ChannelStatus;
        /**
         * The tenant that owns this row. Added by the data plane, not by this app: it is not a column of schema.json, so it is read-only and `?tenant_id=` is not a filter — the key is silently dropped and never reaches the `filter` echo.
         */
        tenant_id?: string;
        /**
         * One of the codes the tenant keeps under GET /channels/types — served with labels as the 'channels.types' vocabulary. Deliberately NOT an enum: the set is the tenant's own rows, not a CHECK constraint this repo could quote. A fresh install starts with storefront, punchout, marketplace, api, pos, which is why 'storefront' is the example here, but a merchant may rename or retire any of them and add their own (a feed or a print channel), so read the list rather than assuming it.
         */
        type?: string;
        /**
         * What it means, IN THIS CHANNEL, that a row carries no channel assignment at all — the per-channel override of the tenant-wide unassigned_channel_visibility setting. 'inherit' (the default) takes the tenant's answer and changes nothing. 'all' shows unassigned rows: everything is on sale unless somebody carved it out, which is what an open storefront wants and what Baseline's is_visible() does today. 'assigned_only' hides them until they are explicitly assigned — the negotiated assortment a punchout contract describes, and the one answer the generated _scoped view has no way to express, which is why POST /channels/visibility exists to apply it. Rows that DO carry assignments are unaffected either way. Served with its labels as the 'channels.unassigned-visibility' vocabulary.
         */
        unassigned_visibility?: ChannelUnassignedVisibility;
        /**
         * When the row was last written, set by the database.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ChannelContext = {
        /**
         * The channel that resolved, or null. Null on every answer where `resolved` is false — including the everyday one on a tenant that has not created a channel yet.
         */
        channel?: string;
        /**
         * More than one channel claims is_default; the lowest position wins and this says so.
         */
        default_ambiguous?: boolean;
        /**
         * The visibility policy in force for the resolved channel.
         */
        policy?: ChannelPolicy;
        /**
         * Why not, when resolved is false. Null when it resolved.
         */
        reason?: ChannelUnresolvedReason;
        /**
         * The channel code the request named, if any — lowercased and trimmed as it was matched.
         */
        requested?: string | null;
        /**
         * Whether a channel could be resolved for this request.
         */
        resolved?: boolean;
        /**
         * Where the channel came from, in the order they are tried: 'body' (the `channel` field, POST /channels/visibility only), 'query' (`?channel=`), 'header' (x-revenexx-channel), 'jwt' (the scope_context.channel claim), then 'default' (the channel flagged is_default). Null when nothing resolved. Note that 'header' is not reachable through api.revenexx.com: the gateway builds a fresh request to the app and copies a fixed set of headers into it, and x-revenexx-channel is not among them — see `policy.header`.
         */
        source?: ChannelContextSource;
    }

    /**
     * 
     */
    export type ChannelCreateRequest = {
        /**
         * Stable channel code, unique per tenant (e.g. shop, punchout-acme). It is the scope slug Baseline matches channel assignments on, so it is held to Baseline's own shape: lowercase a-z/0-9 first, then a-z/0-9/_/-, up to 63 characters. Anything else is refused — a code that cannot be a scope slug leaves the channel unable to filter.
         */
        code: string;
        /**
         * Mark as the default channel (default false). At most one channel carries it — setting it demotes the previous holder.
         */
        is_default?: boolean;
        /**
         * Localized display names. A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * Display name.
         */
        name: string;
        /**
         * Sort position (default 0).
         */
        position?: number;
        /**
         * Lifecycle status (default 'active'). Whether the channel is in service. What 'inactive' DOES is the tenant's inactive_channel_behavior setting: on 'serve' it is a label and the channel still resolves, on 'block' /channels/context answers resolved:false with reason 'channel_inactive'. Served as the 'channels.statuses' vocabulary.
         */
        status?: ChannelStatus;
        /**
         * Which channel type this is. One of the codes the tenant keeps under GET /channels/types — served with labels as the 'channels.types' vocabulary. Deliberately NOT an enum: the set is the tenant's own rows, not a CHECK constraint this repo could quote. A fresh install starts with storefront, punchout, marketplace, api, pos, which is why 'storefront' is the example here, but a merchant may rename or retire any of them and add their own (a feed or a print channel), so read the list rather than assuming it. Omitted on create it falls back to the type the tenant flagged as their default, never to a hardcoded value; a code the tenant does not keep is a 400 that names the ones they do.
         */
        type?: string;
        /**
         * Default 'inherit'. What it means, IN THIS CHANNEL, that a row carries no channel assignment at all — the per-channel override of the tenant-wide unassigned_channel_visibility setting. 'inherit' (the default) takes the tenant's answer and changes nothing. 'all' shows unassigned rows: everything is on sale unless somebody carved it out, which is what an open storefront wants and what Baseline's is_visible() does today. 'assigned_only' hides them until they are explicitly assigned — the negotiated assortment a punchout contract describes, and the one answer the generated _scoped view has no way to express, which is why POST /channels/visibility exists to apply it. Rows that DO carry assignments are unaffected either way. Served with its labels as the 'channels.unassigned-visibility' vocabulary.
         */
        unassigned_visibility?: ChannelUnassignedVisibility;
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
        /**
         * The same answer for the channel types, which are seeded first because the seeded channel carries one.
         */
        types?: ChannelTypeDefaults;
    }

    /**
     * The visibility policy in force for the resolved channel.
     */
    export type ChannelPolicy = {
        /**
         * Always 'channel' — the scope dimension this app provides.
         */
        dimension?: string;
        /**
         * The header name Baseline uses for this dimension. Through api.revenexx.com it does NOT reach the app — the gateway builds a fresh request downstream and forwards only its own headers — so use `?channel=` (or `channel` in the body of POST /channels/visibility) instead. The header path applies to a direct in-cluster call to the app.
         */
        header?: string;
        /**
         * The tenant setting, echoed: what `status = 'inactive'` DOES. 'serve' makes it a label and the channel still resolves; 'block' makes resolution fail with reason 'channel_inactive', and the policy then falls back to the tenant answer.
         */
        inactive_channel_behavior?: ChannelInactiveBehavior;
        /**
         * The claim path in the forwarded identity token that names the active channel, tried after the query and the header and before the default channel.
         */
        jwt_path?: string;
        /**
         * How Baseline matches the dimension — 'single': a request is in exactly one channel at a time, never a set.
         */
        match_mode?: string;
        /**
         * The tenant setting, echoed: whether a request naming no channel is refused rather than falling back to the default channel. On POST /channels/visibility that refusal is the single 400 this app makes of its own accord.
         */
        require_channel_context?: boolean;
        /**
         * Whether the answer came from the tenant setting or this channel's own override. Only a channel that actually resolved gets a say — a blocked or unknown channel falls back to 'tenant'.
         */
        source?: ChannelPolicySource;
        /**
         * The tenant-wide baseline, so a caller can see what this channel overrode. Equal to `unassigned_visibility` whenever `source` is 'tenant'.
         */
        tenant_default?: ChannelPolicyTenantDefault;
        /**
         * What a row with NO channel assignment means. 'all' is Baseline's open-by-default semantic, reproduced exactly; 'assigned_only' is the closed assortment the _scoped view cannot express.
         */
        unassigned_visibility?: ChannelUnassignedPolicy;
    }

    /**
     * 
     */
    export type ChannelTypeCreateRequest = {
        /**
         * What `channels.type` will store. Lowercased and trimmed before it is written, and fixed from then on — a rename would orphan every channel carrying it.
         */
        code: string;
        /**
         * One sentence on what kind of place this type of channel is, for the merchant choosing between them. Plain text, in the tenant's primary language; `descriptions` carries the per-locale ones.
         */
        description?: string | null;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        descriptions?: object | null;
        /**
         * Promote this type; the previous default is demoted. The default is the type a channel created without one gets.
         */
        is_default?: boolean;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * Sort position (default 0). GET /channels/types answers in this order; ties fall back to the code.
         */
        position?: number;
        /**
         * The fallback name. `labels` carries the per-locale ones.
         */
        title: string;
        /**
         * Badge colour (default 'neutral'). A value outside the palette is ignored rather than refused.
         */
        tone?: ChannelTypeTone;
    }

    /**
     * The same answer for the channel types, which are seeded first because the seeded channel carries one.
     */
    export type ChannelTypeDefaults = {
        /**
         * Channel type codes this call wrote. A fresh tenant gets all 5; a settled one gets none.
         */
        created?: string[];
        /**
         * Seeded type codes that were already there. Note the consequence of "idempotent" being keyed on the code: a seeded type the merchant deliberately retired is re-created by the next call and comes back under `created`. Types the merchant added themselves are never touched.
         */
        existing?: string[];
    }

    /**
     * 
     */
    export type ChannelTypeRow = {
        /**
         * What `channels.type` stores. Immutable once created — renaming it would orphan every channel that carries it, and there is no FK behind `channels.type` to cascade. A fresh install seeds storefront, punchout, marketplace, api, pos; a merchant may retire any of them and add their own.
         */
        code?: string;
        /**
         * When the row was inserted, set by the database.
         */
        created_at?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        descriptions?: object | null;
        /**
         * Row id, and the only handle GET/PUT/DELETE /channels/types/{id} accept. Not the type `code`. No example is published because no id this app could invent names a row a tenant holds.
         */
        id?: string;
        /**
         * The type a channel created without one gets. Exactly one row carries it.
         */
        is_default?: boolean;
        /**
         * Seeded on install rather than added by the merchant. A flag about origin only — a system type is still renameable, reorderable and retirable.
         */
        is_system?: boolean;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * Sort position. GET /channels/types always answers in this order and takes no `order` parameter. It is not unique and defaults to 0, so ties are broken by `code` — the order is total, which is what makes paging the list safe to walk.
         */
        position?: number;
        /**
         * The tenant that owns this row. Added by the data plane, not by this app: it is not a column of schema.json, so it is read-only and `?tenant_id=` is not a filter — the key is silently dropped and never reaches the `filter` echo.
         */
        tenant_id?: string;
        /**
         * The fallback name. `labels` carries the per-locale ones. Rows seeded before 0.7.0 hold a serialized locale map here instead (PE-452).
         */
        title?: object;
        /**
         * Semantic badge colour for this type, for a client that renders the list. The client owns what each tone looks like; the value only says what it MEANS.
         */
        tone?: ChannelTypeTone;
        /**
         * When the row was last written, set by the database.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ChannelTypeUpdateRequest = {
        /**
         * Replace the one-sentence description. Sent as null it is cleared; omitted it is kept. `descriptions` carries the per-locale ones.
         */
        description?: string | null;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        descriptions?: object | null;
        /**
         * Promote this type; the previous default is demoted. Only `true` does anything — sending false does not demote this type, because some type must hold the flag.
         */
        is_default?: boolean;
        /**
         * A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * Move the type in the order GET /channels/types answers in.
         */
        position?: number;
        /**
         * Rename the type. A blank or non-string title is ignored, not refused — the stored one is kept.
         */
        title?: string;
        /**
         * Change the badge colour. A value outside the palette is ignored rather than refused, and the stored tone is kept.
         */
        tone?: ChannelTypeTone;
    }

    /**
     * Partial update — omitted fields keep their current value. At least one field is required.
     */
    export type ChannelUpdateRequest = {
        /**
         * Stable channel code, unique per tenant (e.g. shop, punchout-acme). It is the scope slug Baseline matches channel assignments on, so it is held to Baseline's own shape: lowercase a-z/0-9 first, then a-z/0-9/_/-, up to 63 characters. Anything else is refused — a code that cannot be a scope slug leaves the channel unable to filter.
         */
        code?: string;
        /**
         * Mark as the default channel (default false). At most one channel carries it — setting it demotes the previous holder.
         */
        is_default?: boolean;
        /**
         * Localized display names. A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * Display name.
         */
        name?: string;
        /**
         * Sort position (default 0).
         */
        position?: number;
        /**
         * Lifecycle status (default 'active'). Whether the channel is in service. What 'inactive' DOES is the tenant's inactive_channel_behavior setting: on 'serve' it is a label and the channel still resolves, on 'block' /channels/context answers resolved:false with reason 'channel_inactive'. Served as the 'channels.statuses' vocabulary.
         */
        status?: ChannelStatus;
        /**
         * Which channel type this is. One of the codes the tenant keeps under GET /channels/types — served with labels as the 'channels.types' vocabulary. Deliberately NOT an enum: the set is the tenant's own rows, not a CHECK constraint this repo could quote. A fresh install starts with storefront, punchout, marketplace, api, pos, which is why 'storefront' is the example here, but a merchant may rename or retire any of them and add their own (a feed or a print channel), so read the list rather than assuming it. Omitted on create it falls back to the type the tenant flagged as their default, never to a hardcoded value; a code the tenant does not keep is a 400 that names the ones they do.
         */
        type?: string;
        /**
         * Default 'inherit'. What it means, IN THIS CHANNEL, that a row carries no channel assignment at all — the per-channel override of the tenant-wide unassigned_channel_visibility setting. 'inherit' (the default) takes the tenant's answer and changes nothing. 'all' shows unassigned rows: everything is on sale unless somebody carved it out, which is what an open storefront wants and what Baseline's is_visible() does today. 'assigned_only' hides them until they are explicitly assigned — the negotiated assortment a punchout contract describes, and the one answer the generated _scoped view has no way to express, which is why POST /channels/visibility exists to apply it. Rows that DO carry assignments are unaffected either way. Served with its labels as the 'channels.unassigned-visibility' vocabulary.
         */
        unassigned_visibility?: ChannelUnassignedVisibility;
    }

    /**
     * 
     */
    export type ChannelVisibility = {
        /**
         * The channel that resolved, or null. Null on every answer where `resolved` is false — including the everyday one on a tenant that has not created a channel yet.
         */
        channel?: string;
        /**
         * The three tallies, so a caller can log or alert on a batch without walking it.
         */
        counts?: ChannelVisibilityCounts;
        /**
         * More than one channel claims is_default; the lowest position wins and this says so.
         */
        default_ambiguous?: boolean;
        /**
         * Just the ids that must NOT be shown. The complement of `visible`; together they are every id sent, so a caller can assert nothing was dropped.
         */
        hidden?: string[];
        /**
         * One decision per row sent, in the order they were sent, so a caller can zip it back onto its own list without matching on id.
         */
        items?: ChannelVisibilityDecision[];
        /**
         * The visibility policy in force for the resolved channel.
         */
        policy?: ChannelPolicy;
        /**
         * Why not, when resolved is false. Null when it resolved.
         */
        reason?: ChannelUnresolvedReason;
        /**
         * The channel code the request named, if any — lowercased and trimmed as it was matched.
         */
        requested?: string | null;
        /**
         * Whether a channel could be resolved for this request.
         */
        resolved?: boolean;
        /**
         * Where the channel came from, in the order they are tried: 'body' (the `channel` field, POST /channels/visibility only), 'query' (`?channel=`), 'header' (x-revenexx-channel), 'jwt' (the scope_context.channel claim), then 'default' (the channel flagged is_default). Null when nothing resolved. Note that 'header' is not reachable through api.revenexx.com: the gateway builds a fresh request to the app and copies a fixed set of headers into it, and x-revenexx-channel is not among them — see `policy.header`.
         */
        source?: ChannelContextSource;
        /**
         * Just the ids that may be shown, ready to filter a result set with — the same rows `items` marks visible:true, without the reasons.
         */
        visible?: string[];
    }

    /**
     * The three tallies, so a caller can log or alert on a batch without walking it.
     */
    export type ChannelVisibilityCounts = {
        /**
         * How many must not be. A batch where this equals `total` and the reason is no_channel_context means the channel did not resolve, not that the assortment is empty.
         */
        hidden?: number;
        /**
         * How many rows were decided — the length of the `items` sent.
         */
        total?: number;
        /**
         * How many may be shown.
         */
        visible?: number;
    }

    /**
     * 
     */
    export type ChannelVisibilityDecision = {
        /**
         * The id as it was sent, verbatim.
         */
        id?: string;
        /**
         * Why the row was shown or hidden — the answer is auditable, not a bare boolean.
         */
        reason?: ChannelVisibilityReason;
        /**
         * Whether this row may be shown in the resolved channel. The same answer as membership in `visible`; `reason` says why.
         */
        visible?: boolean;
    }

    /**
     * 
     */
    export type ChannelVisibilityItem = {
        /**
         * The row's channel scope slugs. Empty or absent means unassigned — the case the policy decides.
         */
        channels?: string[];
        /**
         * The row id, echoed back on the decision. Opaque to this app — it is never looked up, so any non-empty string is accepted and nothing has to exist. In practice it is the entity id POST /api/v1/scopes/lookup answered with, which is what the example shows.
         */
        id: string;
    }

    /**
     * 
     */
    export type ChannelVisibilityRequest = {
        /**
         * The channel `code` (the scope slug) to evaluate against, trimmed and lowercased before it is matched. Optional, and through api.revenexx.com it is the ONLY way to name a channel explicitly: the x-revenexx-channel header is not forwarded to the app, so without this the resolution falls through to the scope_context.channel claim and then to the tenant's default channel. A code no channel carries is not an error — the answer is resolved:false with reason 'unknown_channel', so a caller can tell it from an outage.
         */
        channel?: string;
        /**
         * The rows to decide on, each with the channel assignments Baseline holds for it. POST /api/v1/scopes/lookup?dimension=channel answers in exactly this shape. At most 500 — Baseline's own lookup ceiling.
         */
        items: ChannelVisibilityItem[];
    }

    /**
     * 
     */
    export type ChannelVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Always true: the set is exhaustive at this moment, so a value outside it is stale data rather than a missing label. For a table-backed vocabulary that is a statement about now, not forever — the tenant may add to it.
         */
        closed?: boolean;
        /**
         * The tone a value that carries none falls back to.
         */
        default_tone?: ChannelVocabularyTone;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: ChannelVocabularyName;
        /**
         * Who owns the value set. 'schema' = a CHECK constraint in this app's own schema.json; 'table' = the tenant's own rows.
         */
        source?: ChannelVocabularySource;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in author order — the order a select should offer, not alphabetical. For a CHECK-backed vocabulary that is the constraint's own order; for the table-backed `types` it is the tenant's `position` order.
         */
        values?: ChannelVocabularyValue[];
    }

    /**
     * 
     */
    export type ChannelVocabularyIndex = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Every vocabulary this app owns, alphabetically: statuses, types, unassigned-visibility. Names only — fetch the values with GET /channels/vocabularies/{name}.
         */
        vocabularies?: ChannelVocabularyRef[];
    }

    /**
     * 
     */
    export type ChannelVocabularyRef = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: ChannelVocabularyRefName;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
    }

    /**
     * 
     */
    export type ChannelVocabularyValue = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Table-backed vocabularies only: the localized descriptions. A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        descriptions?: object | null;
        /**
         * The value ends the lifecycle.
         */
        final?: boolean;
        /**
         * Table-backed vocabularies only: the value a create falls back to.
         */
        is_default?: boolean;
        /**
         * Table-backed vocabularies only: seeded on install rather than added by the tenant. Still renameable and retirable.
         */
        is_system?: boolean;
        /**
         * The value as the database stores and enforces it.
         */
        key?: string;
        /**
         * Table-backed vocabularies only: the localized titles. `title` stays the fallback. A locale map keyed by language tag: {"en": …, "de": …}. Read the requested tag and fall back to the plain column beside it.
         */
        labels?: object | null;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: ChannelVocabularyTone;
    }

    /**
     * A Typesense collection definition, passed through from Typesense. `name` is rewritten back to the tenant&#039;s public collection name.
     */
    export type Collection<CollectionField extends Models.CollectionField = Models.DefaultCollectionField> = {
        /**
         * 
         */
        default_sorting_field?: string;
        /**
         * 
         */
        enable_nested_fields?: boolean;
        /**
         * 
         */
        fields?: CollectionField[];
        /**
         * The public collection name.
         */
        name?: string;
        /**
         * Documents currently indexed.
         */
        num_documents?: number;
    }

    export type DefaultCollection<CollectionField extends Models.CollectionField = Models.DefaultCollectionField> = Collection<CollectionField> & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * One field in a collection schema.
     */
    export type CollectionField = {
        /**
         * Whether the field can be faceted on.
         */
        facet?: boolean;
        /**
         * 
         */
        index?: boolean;
        /**
         * 
         */
        name: string;
        /**
         * 
         */
        optional?: boolean;
        /**
         * 
         */
        sort?: boolean;
        /**
         * Typesense field type, e.g. `string`, `int64`, `string[]`, `object`.
         */
        type: string;
    }

    export type DefaultCollectionField = CollectionField & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type CollectionList = {
        /**
         * Public collection names the tenant owns. These are the values accepted for the `collection` path parameter.
         */
        collections: string[];
    }

    /**
     * A PERSON, and the unit that logs in: one platform user, one email, one role inside its organization. A contact without an organization is a standalone buyer, not an error.
     */
    export type Contact = {
        /**
         * When this person record was created in this app.
         */
        created_at?: string;
        /**
         * Login identity and the unique key of a person within the tenant. Changing it changes the platform login with it. Two people at the same company therefore need two addresses — a shared purchasing mailbox is one contact, not several.
         */
        email?: string;
        /**
         * Id of the platform USER this contact is mirrored as — the account that actually holds the password and the sessions. Written by the mirror and ignored on every write a caller sends.
         */
        external_user_id?: string | null;
        /**
         * Given name. Optional: an ERP import often has only a mailbox.
         */
        first_name?: string | null;
        /**
         * Primary key of the person record. What the timeline, the permission routes and the principal resolution all name.
         */
        id?: string;
        /**
         * The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
         */
        is_primary?: boolean;
        /**
         * What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
         */
        job_title?: string | null;
        /**
         * Family name. Optional for the same reason.
         */
        last_name?: string | null;
        /**
         * The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
         */
        locale?: string | null;
        /**
         * Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they may sign off. Null means no ceiling. An amount, never a grant — the grant comes from the role.
         */
        order_approval_limit?: number | null;
        /**
         * The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person.
         */
        organization_id?: string | null;
        /**
         * Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
         */
        phone?: string | null;
        /**
         * When a merchant approved or rejected the application. Null while nobody has decided.
         */
        registration_decided_at?: string | null;
        /**
         * Who decided — free text as the deciding client supplied it (an operator id or an email address), not a resolvable user reference.
         */
        registration_decided_by?: string | null;
        /**
         * Why the application was declined. Always recorded here; whether the APPLICANT is ever told it is the tenant's `registration_reason_disclosed` setting, because that is a legal decision and not a template one.
         */
        registration_reason?: string | null;
        /**
         * Where this person's own application stands: 'approved' (the default, and what an open store creates), 'pending' while a merchant has yet to decide, 'rejected' once they declined. Only the approve/reject routes move it; it is ignored on an ordinary update.
         */
        registration_status?: ContactRegistrationStatus;
        /**
         * The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts.
         */
        role?: string;
        /**
         * Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'.
         */
        status?: ContactStatus;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * When any column of this row last changed.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ContactActivityRequest = {
        /**
         * Who logged it (operator id or email). Free text; this app does not resolve it.
         */
        actor?: string | null;
        /**
         * What happened. 'system' is deliberately NOT accepted — those rows are the registration decision trail and are written by the approve/reject routes. Default 'note'.
         */
        kind?: ContactActivityKind;
        /**
         * The long form. Stored inside the event payload as `note`, not as a column of its own.
         */
        note?: string | null;
        /**
         * When it actually happened. Defaults to now — a call logged on Monday about Friday should say Friday.
         */
        occurred_at?: string | null;
        /**
         * One line a person can scan in a timeline. Required — an entry nobody can read at a glance is not worth the row.
         */
        subject: string;
    }

    /**
     * Creates the contact (system of record) and mirrors it as a platform user (status defaults to invited).
     */
    export type ContactCreateRequest = {
        /**
         * Login identity and the unique key of a person within the tenant. Changing it changes the platform login with it. Two people at the same company therefore need two addresses — a shared purchasing mailbox is one contact, not several.
         */
        email: string;
        /**
         * Given name. Optional: an ERP import often has only a mailbox.
         */
        first_name?: string | null;
        /**
         * The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
         */
        is_primary?: boolean;
        /**
         * What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
         */
        job_title?: string | null;
        /**
         * Family name. Optional for the same reason.
         */
        last_name?: string | null;
        /**
         * The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
         */
        locale?: string | null;
        /**
         * Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they may sign off. Null means no ceiling. An amount, never a grant — the grant comes from the role.
         */
        order_approval_limit?: number | null;
        /**
         * The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person. Membership is mirrored to the platform team.
         */
        organization_id?: string | null;
        /**
         * Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
         */
        phone?: string | null;
        /**
         * Where this person's own application stands: 'approved' (the default, and what an open store creates), 'pending' while a merchant has yet to decide, 'rejected' once they declined. Only the approve/reject routes move it; it is ignored on an ordinary update. On CREATE only, and only to file the contact as an application: 'pending' creates the platform user disabled and routes the contact through approve/reject. Ignored on update.
         */
        registration_status?: ContactCreateRequestRegistrationStatus;
        /**
         * The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts. A tenant that never edited the ledger has viewer, requester, buyer, approver, admin; a create without a role gets the one flagged as default, and a role the tenant does not keep is a 400.
         */
        role?: string;
        /**
         * Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'. Default 'invited' on create.
         */
        status?: ContactStatus;
    }

    /**
     * One entry on a customer&#039;s timeline: an activity somebody logged (call, visit, note) or a registration decision this app recorded. Append-only — nothing here is ever edited.
     */
    export type ContactEvent = {
        /**
         * Who logged the entry — free text as the client supplied it (operator id or email). Null for a row the app wrote itself.
         */
        actor?: string | null;
        /**
         * The person this entry is about. Always set: even a company-level activity is filed against somebody, so a timeline never has anonymous rows.
         */
        contact_id?: string;
        /**
         * When the row was written. Together with `occurred_at` this is what tells a late entry from a live one.
         */
        created_at?: string;
        /**
         * Primary key of the timeline entry.
         */
        id?: string;
        /**
         * What kind of entry this is — one of the tenant's own activity types (GET /customers/contact-event-kinds), seeded with note, call, email, meeting, visit, task. 'system' is reserved: those rows are this app's own registration decision trail and no caller may file one.
         */
        kind?: string;
        /**
         * The event name, and the one vocabulary here that is THIS APP's rather than the tenant's: `registration.submitted` | `registration.approved` | `registration.rejected` for decisions, `activity.<kind>` for everything somebody logged. It is also what travels on the bus as `contact_event.created`.
         */
        name?: string;
        /**
         * When the thing actually HAPPENED, which is not when it was written down: a call logged on Monday about Friday says Friday. Defaults to now.
         */
        occurred_at?: string | null;
        /**
         * The company this entry belongs to, DERIVED from the contact and never taken from a request body — which is what stops a call with one company being filed under someone else's person. Null when the contact has no organization.
         */
        organization_id?: string | null;
        /**
         * The machine-readable body, and its shape follows `name`. `activity.<kind>` carries `{ note }` — the long form of `subject`. `registration.submitted` carries the application itself: email, organization_id, organization_name, role, locale, vat_id, and `notify`, the recipients the approval mail goes to. `registration.approved` carries `{ decided_by }`; `registration.rejected` adds `reason`. Nothing validates it beyond that — a client writing its own entries decides what belongs in here.
         */
        payload?: object | null;
        /**
         * One line a person can scan in a timeline. Required for an activity; a decision row carries the app's own wording.
         */
        subject?: string | null;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
    }

    /**
     * One value of the activity types set. What kind of entry lands on a customer timeline. &#039;system&#039; is the app&#039;s own decision trail and a caller may not file one, whatever the set says.
     */
    export type ContactEventKind = {
        /**
         * What `contact_events.kind` stores, and the only part of this row other data depends on. Immutable once created: renaming it would orphan every record carrying it.
         */
        code?: string;
        /**
         * When the value was added to this set.
         */
        created_at?: string;
        /**
         * One line of help for an operator choosing this value. Null when there is nothing to add. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443).
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Primary key of this value. What the update and delete routes address it by — the CODE is what records store.
         */
        id?: string;
        /**
         * The value a create falls back to when the caller names none. Exactly one row of the set carries it; promoting another one demotes this.
         */
        is_default?: boolean;
        /**
         * True for a value this app seeded on install. Still renameable and still removable — it only records where the value came from.
         */
        is_system?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where this value sits in the set, ascending. It is the order a select should offer.
         */
        position?: number;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * The fallback name — what a client shows when no locale in `labels` matches. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443) — those rows were seeded with no `labels` at all.
         */
        title?: string;
        /**
         * Semantic badge colour. The palette stays fixed — it is a render concern, not a merchant decision.
         */
        tone?: ContactEventKindTone;
        /**
         * When it was last edited.
         */
        updated_at?: string;
    }

    /**
     * Add one value to the activity types set. It is available to `contact_events.kind` immediately.
     */
    export type ContactEventKindCreateRequest = {
        /**
         * What `contact_events.kind` will store. Lowercase, starting with a letter; immutable afterwards.
         */
        code: string;
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted in the same call.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending. Default 0.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title: string;
        /**
         * Semantic badge colour.
         */
        tone?: ContactEventKindCreateRequestTone;
    }

    /**
     * Everything but `code`. Sending a different one is a 400 rather than a silent no-op, because records already store it.
     */
    export type ContactEventKindUpdateRequest = {
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title?: string;
        /**
         * Semantic badge colour.
         */
        tone?: ContactEventKindUpdateRequestTone;
    }

    /**
     * 
     */
    export type ContactInviteRequest = {
        /**
         * Who did the inviting, as the recipient should read it. Absent, the company name is used — "Beispiel GmbH invited you" reads better than the name of somebody they have never heard of.
         */
        invited_by?: string | null;
        /**
         * Where the invitation points — the storefront sign-in, normally. There is no token in it: the person is already a member and only has to sign in.
         */
        url: string;
    }

    /**
     * 
     */
    export type ContactInviteResponse = {
        /**
         * Who was invited.
         */
        contact_id?: string;
        /**
         * Always true when this answers — a failure to send is a 502, not a false here.
         */
        invited?: boolean;
        /**
         * The company they were invited into.
         */
        organization_id?: string;
    }

    /**
     * A contact&#039;s effective grants, derived from its role on every read — nothing here is stored, so a role change can never leave a stale grant behind. Carried here so a BFF does not need a second call to decide what to render.
     */
    export type ContactPermissions = {
        /**
         * False while the contact is blocked or its registration is still pending/rejected — it holds the role but must not act on it.
         */
        active?: boolean;
        /**
         * The person these grants belong to. Null when the answer describes nobody — a user with no contact mirrored against it.
         */
        contact_id?: string | null;
        /**
         * Amount ceiling in the market's currency; null means no ceiling. Only meaningful together with the 'orders.approve' permission.
         */
        order_approval_limit?: number | null;
        /**
         * The organization the role applies inside. Null for a standalone (B2C) contact — a role with no company to hold it in.
         */
        organization_id?: string | null;
        /**
         * What this role may do. Derived from the role — see GET /customers/roles.
         */
        permissions?: string[];
        /**
         * The role this contact holds in its organization, and the only input to `permissions`.
         */
        role?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value. external_user_id is mirror-managed and ignored, and so are the registration_* columns: registration state is only ever changed by the approve/reject routes.
     */
    export type ContactUpdateRequest = {
        /**
         * Login identity and the unique key of a person within the tenant. Changing it changes the platform login with it. Two people at the same company therefore need two addresses — a shared purchasing mailbox is one contact, not several.
         */
        email?: string;
        /**
         * Given name. Optional: an ERP import often has only a mailbox.
         */
        first_name?: string | null;
        /**
         * The main contact of its organization — who a merchant calls first. At most one per company is the intent; the tenant's `primary_contact_required` setting decides whether the last one may be demoted or deleted.
         */
        is_primary?: boolean;
        /**
         * What this person does at the company — free text on purpose, because it is a title and not a grant. The permission ladder is `role`; overloading a job title with authority silently un-grants everyone the day the ledger is enforced.
         */
        job_title?: string | null;
        /**
         * Family name. Optional for the same reason.
         */
        last_name?: string | null;
        /**
         * The language this person is written to in — BCP 47, and one of the store's configured locales. Null falls back to the store default.
         */
        locale?: string | null;
        /**
         * Amount ceiling for this person, in the market's currency: with the `orders.approve` permission it is the most they may sign off. Null means no ceiling. An amount, never a grant — the grant comes from the role.
         */
        order_approval_limit?: number | null;
        /**
         * The company this person belongs to. NULL is a legitimate state, not a defect: a standalone buyer with no company behind them. Deleting the organization sets this null and keeps the person. Membership is mirrored to the platform team.
         */
        organization_id?: string | null;
        /**
         * Direct number of this person, as somebody typed it — free text, no format is enforced or normalized. E.164 is what an integration should send.
         */
        phone?: string | null;
        /**
         * Where this person's own application stands: 'approved' (the default, and what an open store creates), 'pending' while a merchant has yet to decide, 'rejected' once they declined. Only the approve/reject routes move it; it is ignored on an ordinary update. On CREATE only, and only to file the contact as an application: 'pending' creates the platform user disabled and routes the contact through approve/reject. Ignored on update.
         */
        registration_status?: ContactUpdateRequestRegistrationStatus;
        /**
         * The person's role INSIDE its organization, and the only thing permissions are derived from. One of the tenant's own roles (GET /customers/roles); a tenant that never edited the ledger has viewer, requester, buyer, approver, admin. Also the team role on the platform mirror. There is no global role — the same person in two companies is two contacts. A tenant that never edited the ledger has viewer, requester, buyer, approver, admin; a create without a role gets the one flagged as default, and a role the tenant does not keep is a 400.
         */
        role?: string;
        /**
         * Whether this person may act: 'invited' has been created but has not accepted, 'active' works, 'blocked' cannot log in. A create through the API defaults to 'invited'; a self-registration in an open store lands 'active'. Default 'invited' on create.
         */
        status?: ContactStatus;
    }

    /**
     * No fields — send {}.
     */
    export type CustomersDefaultsRequest = {
    }

    /**
     * 
     */
    export type CustomersDefaultsResponse = {
        /**
         * One entry per value set, keyed by its route name — `payment-terms`, `address-types`, `lifecycle-stages`, `contact-event-kinds`. Each says what THIS call did: `created` are the codes it inserted, `existing` the seeded codes it found already there and left completely alone (a merchant's rename included). A second call therefore answers with everything under `existing` and nothing under `created`.
         */
        sets?: object;
    }

    /**
     * One block, ready to render: props resolved for the requested language, library references already expanded, scheduled blocks already filtered out.
     */
    export type DeliveryBlock = {
        /**
         * The block type. This is what a theme switches its component on.
         */
        bundle?: string;
        /**
         * Nested blocks keyed by the field they sit in — `{ "columns": [...] }`. Empty object on a leaf block.
         */
        children?: object;
        /**
         * The theme fragment to render instead of a props-driven component. Theme-defined, like a bundle.
         */
        fragmentName?: string | null;
        /**
         * The library item this block came from, or `null`. Its content is already inlined above — this is for cache invalidation and editor links, not for a second fetch.
         */
        libraryItemId?: string | null;
        /**
         * Display options for this block, as a flat `option key → value` map.
         */
        options?: object;
        /**
         * The block's field values for the requested language, source values already overlaid with that language's overrides. Theme-defined keys.
         */
        props?: object;
        /**
         * The block uuid — stable across publishes, so it is safe to use as a render key or an anchor.
         */
        uuid?: string;
    }

    /**
     * One navigation menu, ready to render.
     */
    export type DeliveryMenu<PageMenuItem extends Models.PageMenuItem = Models.DefaultPageMenuItem> = {
        /**
         * The menu KEY (`main`, `footer`, `account`), not the row id — this is the handle a theme hard-codes.
         */
        id?: string;
        /**
         * The ordered navigation tree, exactly as it is stored. Render it in order; nesting is `items` inside an entry.
         */
        items?: PageMenuItem[];
        /**
         * What the menu is called for the people who edit it. A theme rarely renders it.
         */
        label?: string;
    }

    /**
     * One published page resolved for one language, ready to render: i18n fallback applied per field, blocks outside their publish window removed, library references expanded inline.
     */
    export type DeliveryPage = {
        /**
         * The page's block tree, keyed by field name — `{ "content": [ … ] }`. A theme renders the field it knows and ignores the rest.
         */
        fields?: object;
        /**
         * The page frame — everything a theme needs before it starts rendering blocks.
         */
        page?: object;
    }

    /**
     * Just enough of a published page to link to it. The block tree is not here — fetch it with `GET /pages/delivery/page`.
     */
    export type DeliveryPageRef = {
        /**
         * The page type, so a sitemap can group or a picker can filter.
         */
        bundle?: string;
        /**
         * The page id, usable as `?id=` on the delivery route.
         */
        id?: string;
        /**
         * The path segment to build the URL from. `null` for a page reachable only by id, which a sitemap should skip.
         */
        slug?: string | null;
        /**
         * The page title in its source language — this projection is not language-resolved.
         */
        title?: string;
    }

    /**
     * Everything the blökkli editor runs on, for one page in one language, materialized at the current point of the undo history. The theme adapter maps it 1:1 onto blökkli&#039;s MappedState.
     */
    export type EditorState = {
        /**
         * Whether the caller may write. False means every write answers 409 until `POST …/take-ownership` — so the editor should go read-only rather than let someone type into a refusal.
         */
        currentUserIsOwner?: boolean;
        /**
         * Every entity-reference field of every block — the fields an editor drags a product or a media item into.
         */
        droppableFieldValues?: object[];
        /**
         * The open working copy, or `null` when nobody has started editing — in which case the state shown is simply the published one.
         */
        editState?: object | null;
        /**
         * What the tenant's settings allow, so a client hides a control instead of discovering the refusal.
         */
        features?: object;
        /**
         * The block tree, flattened into one entry per (host, field) pair. This is the list the editor renders and drops into.
         */
        fields?: object[];
        /**
         * Analyze findings that were dismissed for this page, so the editor stops reporting them.
         */
        ignoredAnalyzeIdentifiers?: string[];
        /**
         * The language this whole state was resolved for — the `?langcode` that was applied, or the page's source language.
         */
        langcode?: string;
        /**
         * The page-level field values the edit state changed, merged source-then-language — `{ "title": …, "slug": …, "meta": … }`. Empty when nobody edited the page itself, only its blocks.
         */
        mutatedEntity?: object;
        /**
         * The PAGE-level display options after the unpublished changes, as a flat `option key → value` map. Theme-defined.
         */
        mutatedHostOptions?: object;
        /**
         * Every block's display options after the unpublished changes, keyed by block uuid: `{ "<uuid>": { "background": "grey" } }`.
         */
        mutatedOptions?: object;
        /**
         * The undo/redo history, oldest first. Its length and `editState.currentIndex` are what an undo button and a history sidebar are drawn from.
         */
        mutations?: object[];
        /**
         * The page itself, with the unpublished edits already applied — so the title here is what publishing would store, not what is stored now.
         */
        page?: object;
        /**
         * Every string field of every block, flattened. It is what the translation view and the CSV export are built on — one row per translatable string.
         */
        textFieldValues?: object[];
        /**
         * Every language this page exists in, so the editor can offer a language switcher that shows what is missing.
         */
        translations?: object[];
        /**
         * Why publishing would be refused right now. Empty means `POST …/publish` succeeds without `force`.
         */
        violations?: object[];
    }

    /**
     * One method as a checkout should render it: identity, wording, and what it costs this buyer.
     */
    export type EligiblePaymentMethod = {
        /**
         * The code to send back as `method_code` when the payment is created.
         */
        code?: string;
        /**
         * The currency `fee` is in — the one the request asked with, echoed.
         */
        currency?: string | null;
        /**
         * The merchant's line about this method, to show beside it at checkout.
         */
        description?: string | null;
        /**
         * The surcharge this method costs THIS buyer, already computed against the requested amount — a fixed fee as it stands, a percentage resolved into an amount. Not a column: no CHECK bounds it, so none is declared.
         */
        fee?: number;
        /**
         * How `fee` was arrived at, for a checkout that wants to show "2 % surcharge" rather than the amount.
         */
        fee_type?: PaymentFeeType;
        /**
         * Whether choosing this method starts a PSP flow ('psp') or authorizes immediately ('self_managed').
         */
        kind?: PaymentMethodKind;
        /**
         * Buyer-facing names keyed by language tag, or null when the merchant configured none — then `name` is all there is.
         */
        labels?: object | null;
        /**
         * The operator-facing name. Prefer `labels` for anything a buyer reads.
         */
        name?: string;
        /**
         * The merchant's sort order. The list is already sorted by it; it is carried so a client that re-sorts can put it back.
         */
        position?: number;
        /**
         * The PSP behind it, for a checkout that has to load a provider SDK before it can collect an instrument. null for self-managed methods.
         */
        provider?: string | null;
    }

    /**
     * Uniform error response. The same shape is emitted by the gateway and by the apps behind it, so one parser covers the whole API.
     */
    export type Error = {
        /**
         * Machine-readable discriminator, e.g. not_found, invalid_value, unique_violation.
         */
        code?: string;
        /**
         * Human-readable message. Was a boolean on gateway-emitted errors before; it is a string everywhere now.
         */
        error: string;
        /**
         * Deprecated duplicate of `error`, kept so existing readers keep working. Read `error`.
         */
        message?: string;
    }

    /**
     * Facet values and their counts for one faceted field.
     */
    export type FacetCount = {
        /**
         * 
         */
        counts?: object[];
        /**
         * 
         */
        field_name?: string;
    }

    export type DefaultFacetCount = FacetCount & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type Families = {
        /**
         * The family's stable identifier — which set of attributes a product of this family HAS. Unique per tenant, and the value `GET /products/attribute-schema?family_code=` resolves.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Which attribute code carries the product's main image — the one a grid thumbnail and a picker read.
         */
        image_attribute?: string | null;
        /**
         * Which attribute CODE carries the display name of a product in this family. A product's name is an attribute, not a column, and which attribute it is, is per family. Null falls back to the `default_label_attribute` setting and then to the conventional `name`.
         */
        label_attribute?: string | null;
        /**
         * What the family is called, per language tag — the name an operator picks from, while the code is what everything else joins on.
         */
        labels?: object | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type FamiliesCreateRequest = {
        /**
         * The family's stable identifier — which set of attributes a product of this family HAS. Unique per tenant, and the value `GET /products/attribute-schema?family_code=` resolves.
         */
        code: string;
        /**
         * Which attribute code carries the product's main image — the one a grid thumbnail and a picker read.
         */
        image_attribute?: string | null;
        /**
         * Which attribute CODE carries the display name of a product in this family. A product's name is an attribute, not a column, and which attribute it is, is per family. Null falls back to the `default_label_attribute` setting and then to the conventional `name`.
         */
        label_attribute?: string | null;
        /**
         * What the family is called, per language tag — the name an operator picks from, while the code is what everything else joins on.
         */
        labels?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `families` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type FamiliesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?image_attribute=` value this call was understood to carry.
         */
        image_attribute?: string;
        /**
         * The literal `?label_attribute=` value this call was understood to carry.
         */
        label_attribute?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultFamiliesFilter = FamiliesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type FamiliesUpdateRequest = {
        /**
         * The family's stable identifier — which set of attributes a product of this family HAS. Unique per tenant, and the value `GET /products/attribute-schema?family_code=` resolves.
         */
        code?: string;
        /**
         * Which attribute code carries the product's main image — the one a grid thumbnail and a picker read.
         */
        image_attribute?: string | null;
        /**
         * Which attribute CODE carries the display name of a product in this family. A product's name is an attribute, not a column, and which attribute it is, is per family. Null falls back to the `default_label_attribute` setting and then to the conventional `name`.
         */
        label_attribute?: string | null;
        /**
         * What the family is called, per language tag — the name an operator picks from, while the code is what everything else joins on.
         */
        labels?: object | null;
    }

    /**
     * 
     */
    export type FamilyAttributes = {
        /**
         * The attribute the family carries. One row per (family, attribute); deleting either side deletes the link.
         */
        attribute_id?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The family this link belongs to — one side of the pair that makes an attribute part of a family's form.
         */
        family_id?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * The attribute has to carry a value for a product of this family to count as complete. `POST /products/{id}/completeness` measures exactly these and nothing else.
         */
        is_required?: boolean;
        /**
         * The family's own ordering of this attribute, which overrides the attribute's default `position` in this family's form.
         */
        position?: number;
        /**
         * Narrows `is_required` to named channels. NULL or an empty list means required EVERYWHERE, not nowhere — that is how every required link in the wild is stored, and reading an empty list as "nowhere" reports a fully configured family as demanding nothing.
         */
        required_channels?: object | null;
    }

    /**
     * 
     */
    export type FamilyAttributesCreateRequest = {
        /**
         * The attribute the family carries. One row per (family, attribute); deleting either side deletes the link.
         */
        attribute_id: string;
        /**
         * The family this link belongs to — one side of the pair that makes an attribute part of a family's form.
         */
        family_id: string;
        /**
         * The attribute has to carry a value for a product of this family to count as complete. `POST /products/{id}/completeness` measures exactly these and nothing else.
         */
        is_required?: boolean;
        /**
         * The family's own ordering of this attribute, which overrides the attribute's default `position` in this family's form.
         */
        position?: number;
        /**
         * Narrows `is_required` to named channels. NULL or an empty list means required EVERYWHERE, not nowhere — that is how every required link in the wild is stored, and reading an empty list as "nowhere" reports a fully configured family as demanding nothing.
         */
        required_channels?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `family_attributes` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type FamilyAttributesFilter = {
        /**
         * The literal `?attribute_id=` value this call was understood to carry.
         */
        attribute_id?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?family_id=` value this call was understood to carry.
         */
        family_id?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?is_required=` value this call was understood to carry.
         */
        is_required?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?required_channels=` value this call was understood to carry.
         */
        required_channels?: string;
    }

    export type DefaultFamilyAttributesFilter = FamilyAttributesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type FamilyAttributesUpdateRequest = {
        /**
         * The attribute the family carries. One row per (family, attribute); deleting either side deletes the link.
         */
        attribute_id?: string;
        /**
         * The family this link belongs to — one side of the pair that makes an attribute part of a family's form.
         */
        family_id?: string;
        /**
         * The attribute has to carry a value for a product of this family to count as complete. `POST /products/{id}/completeness` measures exactly these and nothing else.
         */
        is_required?: boolean;
        /**
         * The family's own ordering of this attribute, which overrides the attribute's default `position` in this family's form.
         */
        position?: number;
        /**
         * Narrows `is_required` to named channels. NULL or an empty list means required EVERYWHERE, not nowhere — that is how every required link in the wild is stored, and reading an empty list as "nowhere" reports a fully configured family as demanding nothing.
         */
        required_channels?: object | null;
    }

    /**
     * 
     */
    export type FamilyVariants = {
        /**
         * The attribute codes a product model splits its variants on. Two shapes are in the wild and both are read: a bare list of codes, or one entry per level, outermost first — `[{"level": 1, "axes": ["colour"]}, {"level": 2, "axes": ["size"]}]`. An attribute named here is READ-ONLY on the model and set on each variant, which is what `AttributeField.readonly_reason` reports.
         */
        axes?: object | null;
        /**
         * The variant structure's stable identifier — how this family splits, not which product it splits. Unique per tenant.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The family this variant structure belongs to. A family may carry several, and a product names the one it follows through `family_variant_id`.
         */
        family_id?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * What the variant structure is called, per language tag.
         */
        labels?: object | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type FamilyVariantsCreateRequest = {
        /**
         * The attribute codes a product model splits its variants on. Two shapes are in the wild and both are read: a bare list of codes, or one entry per level, outermost first — `[{"level": 1, "axes": ["colour"]}, {"level": 2, "axes": ["size"]}]`. An attribute named here is READ-ONLY on the model and set on each variant, which is what `AttributeField.readonly_reason` reports.
         */
        axes?: object | null;
        /**
         * The variant structure's stable identifier — how this family splits, not which product it splits. Unique per tenant.
         */
        code: string;
        /**
         * The family this variant structure belongs to. A family may carry several, and a product names the one it follows through `family_variant_id`.
         */
        family_id: string;
        /**
         * What the variant structure is called, per language tag.
         */
        labels?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `family_variants` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type FamilyVariantsFilter = {
        /**
         * The literal `?axes=` value this call was understood to carry.
         */
        axes?: string;
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?family_id=` value this call was understood to carry.
         */
        family_id?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultFamilyVariantsFilter = FamilyVariantsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type FamilyVariantsUpdateRequest = {
        /**
         * The attribute codes a product model splits its variants on. Two shapes are in the wild and both are read: a bare list of codes, or one entry per level, outermost first — `[{"level": 1, "axes": ["colour"]}, {"level": 2, "axes": ["size"]}]`. An attribute named here is READ-ONLY on the model and set on each variant, which is what `AttributeField.readonly_reason` reports.
         */
        axes?: object | null;
        /**
         * The variant structure's stable identifier — how this family splits, not which product it splits. Unique per tenant.
         */
        code?: string;
        /**
         * The family this variant structure belongs to. A family may carry several, and a product names the one it follows through `family_variant_id`.
         */
        family_id?: string;
        /**
         * What the variant structure is called, per language tag.
         */
        labels?: object | null;
    }

    /**
     * 
     */
    export type FolderResource = {
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        is_system: boolean;
        /**
         * 
         */
        name: string;
        /**
         * 
         */
        parent_id: string | null;
        /**
         * 
         */
        path: string;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
    }

    /**
     * 
     */
    export type Form<FormKitNode extends Models.FormKitNode = Models.DefaultFormKitNode, FormKitStepMarker extends Models.FormKitStepMarker = Models.DefaultFormKitStepMarker, FormSettings extends Models.FormSettings = Models.DefaultFormSettings, FormPostSubmitAction extends Models.FormPostSubmitAction = Models.DefaultFormPostSubmitAction> = {
        /**
         * When the form was first stored.
         */
        created_at?: string;
        /**
         * The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.
         */
        definition?: FormKitNode[];
        /**
         * The form's own id, generated by the database. It is what a submission's `form_id` points at and what the Cockpit and the storefront BFF hold once they have resolved a form, so it outlives a rename of the slug.
         */
        id?: string;
        /**
         * Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
         */
        metadata?: object | null;
        /**
         * What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
         */
        name?: string;
        /**
         * Everything about a form that is not a field: what the storefront renders around the inputs, what happens after a successful submit, and who is told about it. Open jsonb, so an unknown key is stored and handed back rather than refused — the keys below are the ones something actually READS, and each says which reader that is. Null on a form nobody has configured, which is not an error: every one of these has a fallback.
         */
        settings?: FormSettings;
        /**
         * URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens.
         */
        slug?: string;
        /**
         * Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
         */
        status?: FormStatus;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * When the form was last written. This app stamps it on every PUT, so it is the timestamp an editor sorts by.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type FormActionMapping = {
        /**
         * The key in the submission `data` — i.e. the `name` of a definition node.
         */
        source?: string;
        /**
         * The column of the target entity it is written to.
         */
        target?: string;
    }

    /**
     * 
     */
    export type FormCreateRequest = {
        /**
         * The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.

On the way IN a node is any object: this is unconstrained jsonb, FormKit owns the grammar, and the one rule this app applies is the tenant's `max_form_fields` ceiling counted over the nodes with a non-empty `name`. Anything that is not an array at all is a 400.
         */
        definition?: object[];
        /**
         * Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
         */
        metadata?: object | null;
        /**
         * What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
         */
        name: string;
        /**
         * Submit label, success message, per-form notify email, post-submit actions, translations — see the `FormSettings` schema for every key that is read. Unconstrained jsonb on the way in: nothing here is required and no key is refused.
         */
        settings?: object | null;
        /**
         * URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens. Taken already? That is the 409 — one slug answers for one form.
         */
        slug: string;
        /**
         * Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
         */
        status?: FormStatus;
    }

    /**
     * 
     */
    export type FormDefaultsResult = {
        /**
         * Slugs this call created. On a tenant that has had the app installed for more than a moment this is empty — the sample form is seeded on `app.installed`.
         */
        created?: string[];
        /**
         * Slugs that were already there and were left alone. Nothing about them was overwritten — a form the merchant has edited stays edited.
         */
        existing?: string[];
    }

    /**
     * 
     */
    export type FormDeleteResult = {
        /**
         * True when the policy is 'archive' and submissions exist — the form was archived, not deleted.
         */
        archived?: boolean;
        /**
         * The form row was removed — and with it, via the cascade, every submission it had. `submissions` below says how many went, and they are not recoverable.
         */
        deleted?: boolean;
        /**
         * The form in the path.
         */
        id?: string;
        /**
         * The form's status after the call. Only present on the archive branch.
         */
        status?: FormStatus;
        /**
         * How many submissions the form had when the call was weighed — and therefore, when `deleted` is true, how many were deleted with it. The whole inbox, across every market: the cascade is a database operation and takes them all, so an active `X-Revenexx-Market` does not narrow this number.
         */
        submissions?: number;
    }

    /**
     * One node of a form definition.

A definition is a FLAT ARRAY of these, and the storefront hands each one to `&lt;FormKitSchema&gt;` verbatim — it maps nothing, so every key FormKit understands works here whether or not it is named below (`options`, `if`, `rows`, `autocomplete`, `min`, `max`, `$cmp`, …). Three kinds of node occur:

  • an INPUT node (`$formkit`) collects a value and, if it carries a `name`, contributes exactly one key to a submission&#039;s `data`;
  • a CONTENT node (`$el`) renders markup — a paragraph of legal text, a heading — and collects nothing;
  • a STEP MARKER (`$rxStep`) is a Revenexx extension the storefront consumes and strips before FormKit sees the node; it splits the flat array into wizard steps.

Only the four keys `name`, `label`, `placeholder` and `help` are read by Revenexx code at all (the last three are what the per-form i18n overlay translates). Everything else is FormKit&#039;s business.
     */
    export type FormKitNode<FormKitStepMarker extends Models.FormKitStepMarker = Models.DefaultFormKitStepMarker> = {
        /**
         * A CONTENT node instead of an input: a raw element name ('p', 'h2', 'div'). It collects no value and contributes no key to `data`.
         */
        $el?: string;
        /**
         * An INPUT node: the FormKit input type — 'text', 'email', 'textarea', 'number', 'select', 'checkbox', 'radio', 'date', 'group', 'list', … . The set is FormKit's, not this app's, which is why nothing here enforces it and no vocabulary is published for it; the storefront adds one input of its own, `datepicker`, and three validation rules (`zip`, `companyName`, `phoneNumber`).
         */
        $formkit?: string;
        /**
         * A Revenexx step marker. The storefront cuts the flat array at each marker and renders the nodes that follow it as one wizard step, then removes the marker before FormKit renders anything. A definition with no marker is a single-step form.
         */
        $rxStep?: FormKitStepMarker;
        /**
         * The content of an `$el` node: a string of text, or nested nodes.
         */
        children?: string;
        /**
         * The hint under the input. Translatable.
         */
        help?: string;
        /**
         * What the visitor reads above the input. Translatable: the per-form i18n overlay replaces it per locale.
         */
        label?: string;
        /**
         * The key this input writes into a submission's `data` — `{ "$formkit": "email", "name": "email" }` here is the `"email"` key there, and that correspondence is the whole contract between a form and its inbox. A node with a non-empty `name` is a FIELD: only fields count against the tenant's `max_form_fields`, so a form with twenty paragraphs of legal text and three inputs is a three-field form. A `group` or `list` input nests, and its `name` keys the nested object or array.
         */
        name?: string;
        /**
         * Placeholder text inside the input. Translatable.
         */
        placeholder?: string;
        /**
         * A Revenexx hint about where the value comes from rather than what it looks like. 'product' means the storefront prefills this input from the page context or the query string (`?sku=…`) and renders it read-only — how a price request knows which article it is about. Stripped before FormKit renders the node.
         */
        rxKind?: string;
        /**
         * FormKit validation, in either notation FormKit accepts: the pipe string 'required|email', or the array form. It is enforced in the browser by FormKit — this API stores whatever `data` it is sent, so a server-side integration must not treat it as a guarantee.
         */
        validation?: string;
    }

    export type DefaultFormKitNode<FormKitStepMarker extends Models.FormKitStepMarker = Models.DefaultFormKitStepMarker> = FormKitNode<FormKitStepMarker> & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * A Revenexx step marker. The storefront cuts the flat array at each marker and renders the nodes that follow it as one wizard step, then removes the marker before FormKit renders anything. A definition with no marker is a single-step form.
     */
    export type FormKitStepMarker = {
        /**
         * Stable id for the step, so a client can address it.
         */
        id?: string;
        /**
         * What the step is: 'fields' for a normal step, 'thankyou' for the confirmation panel shown after a successful submit.
         */
        kind?: string;
        /**
         * The step heading the visitor reads.
         */
        title?: string;
    }

    export type DefaultFormKitStepMarker = FormKitStepMarker & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * The exact-column filters this call was understood to carry, echoed with the values as they arrived. A query parameter that is not a filterable column of this entity is DROPPED rather than refused, and is simply missing here — so an empty object next to a query string that had a filter in it means the filter was misspelled, and is the only way to tell that from a filter that matched nothing.
     */
    export type FormListFilter = {
        /**
         * The `created_at` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        created_at?: string;
        /**
         * The `id` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        id?: string;
        /**
         * The `name` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        name?: string;
        /**
         * The `slug` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        slug?: string;
        /**
         * The `status` filter, verbatim as the query string carried it. A string here whatever the column's own type — and NOT necessarily one of the permitted values: `?status=zzz` is echoed back unchanged and matches nothing, which is the point of the echo.
         */
        status?: string;
        /**
         * The `updated_at` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        updated_at?: string;
    }

    export type DefaultFormListFilter = FormListFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * One post-submit action. `webhook` POSTs `{form, source, data}` to `url`; `entity` writes the mapped fields into another app&#039;s entity; `event` is a no-op, because `form.submitted` already carries it.
     */
    export type FormPostSubmitAction = {
        /**
         * Entity actions: the app that owns the target entity, e.g. 'crm'.
         */
        app?: string | null;
        /**
         * Disabled actions are skipped. An action with no flag is not run.
         */
        enabled?: boolean;
        /**
         * Entity actions: the entity to write, e.g. 'contacts'.
         */
        entity?: string | null;
        /**
         * Entity actions: which submitted value becomes which column — `{"source": "email", "target": "email"}` reads `data.email` and writes it to the target's `email`.
         */
        mapping?: FormActionMapping[];
        /**
         * Webhook actions: the HTTP method. Defaults to POST.
         */
        method?: string | null;
        /**
         * Entity actions: an explicit route to POST to, instead of the one built from `app` and `entity`.
         */
        path?: string | null;
        /**
         * Which action this is: 'webhook', 'entity' or 'event'.
         */
        type?: string;
        /**
         * Webhook actions: where to POST. It is called with an 8 second timeout and its answer is not shown to the visitor.
         */
        url?: string | null;
    }

    export type DefaultFormPostSubmitAction = FormPostSubmitAction & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Everything about a form that is not a field: what the storefront renders around the inputs, what happens after a successful submit, and who is told about it. Open jsonb, so an unknown key is stored and handed back rather than refused — the keys below are the ones something actually READS, and each says which reader that is. Null on a form nobody has configured, which is not an error: every one of these has a fallback.
     */
    export type FormSettings<FormPostSubmitAction extends Models.FormPostSubmitAction = Models.DefaultFormPostSubmitAction> = {
        /**
         * What the storefront runs after a successful submit, in order. Executed by the cover BFF, not by this API — this app only stores them, and a workflow that wants the same event should listen to `form.submitted` instead.
         */
        actions?: FormPostSubmitAction[];
        /**
         * The language the definition itself is written in. Read by the storefront BFF, which overlays `i18n` on top of it.
         */
        default_locale?: string | null;
        /**
         * Translations for the definition, keyed by language tag and then by field name: `{"en": {"email": {"label": "Email"}}}`. Only `label`, `placeholder` and `help` are overlaid — a translation of anything else is stored and ignored. Applied by the storefront BFF before the definition reaches the browser, so the API always returns the untranslated definition.
         */
        i18n?: object | null;
        /**
         * This form's own notification recipient, read by THIS app at insert. It beats the tenant's `notify_email` setting; null means fall back to the tenant. The storefront never sees it — the BFF hands the browser only the submit label and the success message.
         */
        notify_email?: string | null;
        /**
         * The submit button caption, read by the storefront. Null falls back to 'Submit'.
         */
        submit_label?: string | null;
        /**
         * What the visitor reads after a successful submit, read by the storefront. Null falls back to a generic thank-you.
         */
        success_message?: string | null;
    }

    export type DefaultFormSettings<FormPostSubmitAction extends Models.FormPostSubmitAction = Models.DefaultFormPostSubmitAction> = FormSettings<FormPostSubmitAction> & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type FormSubmission<FormSubmissionMetadata extends Models.FormSubmissionMetadata = Models.DefaultFormSubmissionMetadata> = {
        /**
         * When the submission arrived. This is the age the retention sweep measures against `submission_retention_days`, and the column an inbox sorts by (`order=created_at.desc`).
         */
        created_at?: string;
        /**
         * What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
         */
        data?: object;
        /**
         * The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read.
         */
        form_id?: string;
        /**
         * The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in.
         */
        form_slug?: string;
        /**
         * The submission's own id — what the inbox links to, and what a workflow reading `form.submitted` gets handed.
         */
        id?: string;
        /**
         * Free-form metadata, plus what this app stamped on at insert. The recipient is resolved ONCE, here, because this row is the payload of `form.submitted` — a workflow reads the address off the event instead of re-resolving a form's settings that may since have changed.
         */
        metadata?: FormSubmissionMetadata;
        /**
         * Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
         */
        source?: string | null;
        /**
         * Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'.
         */
        status?: FormSubmissionStatus;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * When the row was last written — a triage status change. It is not evidence about the submitted data, which under the shipped policy cannot change at all.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type FormSubmissionCreateRequest = {
        /**
         * What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
         */
        data: object;
        /**
         * The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read. Required on a create: it is the only thing that says which form was filled in.
         */
        form_id: string;
        /**
         * The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in. So: OPTIONAL — send it and it is stored as sent, even if it disagrees with the form; omit it and the form's own slug is filled in from `form_id`.
         */
        form_slug?: string;
        /**
         * Free-form metadata, yours to key as an integration needs. The resolved notification recipient is merged OVER it at insert, so `notify_email` and `notify_source` sent here are overwritten — see the `FormSubmissionMetadata` schema.
         */
        metadata?: object | null;
        /**
         * Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
         */
        source?: string | null;
        /**
         * Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'. A create may set it — an inbox importer records a submission that is already read — but nothing needs to: omit it and the row is 'new'.
         */
        status?: FormSubmissionStatus;
    }

    /**
     * 
     */
    export type FormSubmissionDeleteResult = {
        /**
         * Always true — the row is gone. A submission that was not there answers 404 instead, so this is never false.
         */
        deleted?: boolean;
        /**
         * The submission that was removed, echoed from the path.
         */
        id?: string;
    }

    /**
     * The exact-column filters this call was understood to carry, echoed with the values as they arrived. A query parameter that is not a filterable column of this entity is DROPPED rather than refused, and is simply missing here — so an empty object next to a query string that had a filter in it means the filter was misspelled, and is the only way to tell that from a filter that matched nothing.
     */
    export type FormSubmissionListFilter = {
        /**
         * The `created_at` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        created_at?: string;
        /**
         * The `form_id` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        form_id?: string;
        /**
         * The `form_slug` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        form_slug?: string;
        /**
         * The `id` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        id?: string;
        /**
         * The `source` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        source?: string;
        /**
         * The `status` filter, verbatim as the query string carried it. A string here whatever the column's own type — and NOT necessarily one of the permitted values: `?status=zzz` is echoed back unchanged and matches nothing, which is the point of the echo.
         */
        status?: string;
        /**
         * The `updated_at` filter, verbatim as the query string carried it. A string here whatever the column's own type.
         */
        updated_at?: string;
    }

    export type DefaultFormSubmissionListFilter = FormSubmissionListFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Free-form metadata, plus what this app stamped on at insert. The recipient is resolved ONCE, here, because this row is the payload of `form.submitted` — a workflow reads the address off the event instead of re-resolving a form&#039;s settings that may since have changed.
     */
    export type FormSubmissionMetadata = {
        /**
         * The resolved notification recipient, or null when neither the form nor the tenant names one.
         */
        notify_email?: string | null;
        /**
         * Which of the two configured recipients won: the form's own, or the tenant setting.
         */
        notify_source?: FormNotifySource;
        /**
         * Present only on a submission the honeypot caught: 'honeypot'.
         */
        spam_reason?: string;
    }

    export type DefaultFormSubmissionMetadata = FormSubmissionMetadata & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Retention sweep. Previews unless `dry_run` is explicitly false.
     */
    export type FormSubmissionPruneRequest = {
        /**
         * Default TRUE. Nothing is deleted until this is explicitly false.
         */
        dry_run?: boolean | null;
        /**
         * Narrow the sweep to one form.
         */
        form_slug?: string | null;
        /**
         * Age threshold. Omit to use the retention floor. A value BELOW the floor is raised to it — the setting is the floor, not a default, and the floor is the LONGEST submission_retention_days configured anywhere in the tenant (see the operation description).
         */
        older_than_days?: number | null;
        /**
         * Narrow the sweep to one inbox status, e.g. 'spam'.
         */
        status?: FormSubmissionPruneRequestStatus;
    }

    /**
     * 
     */
    export type FormSubmissionPruneResult = {
        /**
         * Submissions created before this instant match. It is `now - older_than_days`, computed after the retention floor was applied, so it is the honest answer to "what did this call actually consider".
         */
        cutoff?: string;
        /**
         * How many rows this call actually removed — always 0 on a dry run, and at most the 500-row batch size on a real one.
         */
        deleted?: number;
        /**
         * Whether this call was a preview. True — the default — means nothing was deleted and `matched` is what a real run would take.
         */
        dry_run?: boolean;
        /**
         * True when the request asked for a shorter age than the floor allows.
         */
        floor_applied?: boolean;
        /**
         * How many rows match, ignoring the batch size.
         */
        matched?: number;
        /**
         * The threshold actually applied, after the retention floor.
         */
        older_than_days?: number;
        /**
         * Matched rows left after this batch — call again. Absent on a dry run, which deletes nothing.
         */
        remaining?: number;
        /**
         * The retention floor this sweep honoured: the LONGEST submission_retention_days configured anywhere in the tenant, baseline or market. Not the value the calling market sees — a tenant-wide sweep has to keep the longest promise anybody was given.
         */
        retention_days?: number;
        /**
         * The market whose submission_retention_days set the floor — the merchant's own market CODE — or null when the tenant baseline did. It is there so a merchant can see WHY the sweep would not go younger, since the market that bound it is often not the one the request was made from.
         */
        retention_market?: string | null;
        /**
         * Up to five matching rows (dry runs only) — id, form_slug and created_at, never the submitted data.
         */
        sample?: FormSubmissionPruneSample[];
    }

    /**
     * One row the sweep would delete, shown so a merchant can recognise what is at stake before turning the preview off. Three columns only — never the submitted data.
     */
    export type FormSubmissionPruneSample = {
        /**
         * When it arrived — the age this sweep is judging it on.
         */
        created_at?: string;
        /**
         * The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in.
         */
        form_slug?: string;
        /**
         * The submission that would be deleted. Fetch it with GET /v1/forms/submissions/{id} to see what it holds.
         */
        id?: string;
    }

    /**
     * Partial update — typically the inbox status change.
     */
    export type FormSubmissionUpdateRequest = {
        /**
         * What the visitor typed — the substance of the submission, and the reason this row is the payload of `form.submitted`.

It is an object keyed by the `name` of the definition node that collected each value, so the keys of a submission are the named nodes of its form's `definition` and nothing else. There is no fixed set of keys across forms: a contact form yields `{name, email, message}`, a price request whatever its operator built.

The VALUE type follows the input type, which is why this object is not typed further: a `text`, `email` or `textarea` yields a string, a `number` a number, a single `checkbox` a boolean, a `select`/`radio` the chosen option value, a multi-select or a checkbox set an array of them, and a `group` or `list` input nests an object or an array under its own name. Nothing coerces them — a value arrives as the storefront sent it and is stored as jsonb.

Two values are NOT here: the honeypot field, if the tenant configured one, is stripped before the row is written (it is a trap, not an answer the visitor gave), and the resolved notification recipient lives in `metadata`, not in what somebody typed.
         */
        data?: object;
        /**
         * The form this submission was made against. It is resolved at insert, so an id no form in this tenant holds is a 404 and nothing is stored — a submission with no form is a lead nobody can read. Required on a create: it is the only thing that says which form was filled in.
         */
        form_id?: string;
        /**
         * The form's slug as it stood when this submission arrived, copied onto the row: the inbox filters by form without a join, and a submission still says which form collected it after that form has been renamed. It does not outlive a DELETED form — the foreign key cascades and takes the submission with it. On a write the body's value WINS; omit it and the form's own slug is copied in. So: OPTIONAL — send it and it is stored as sent, even if it disagrees with the form; omit it and the form's own slug is filled in from `form_id`.
         */
        form_slug?: string;
        /**
         * Free-form metadata, yours to key as an integration needs. The resolved notification recipient is merged OVER it at insert, so `notify_email` and `notify_source` sent here are overwritten — see the `FormSubmissionMetadata` schema.
         */
        metadata?: object | null;
        /**
         * Where the submission came from. The storefront sends the `window.location.pathname` of the page that carried the form, so this is normally a path rather than an absolute URL; any other surface (an app, an import) puts its own name here. Null when the caller sent none.
         */
        source?: string | null;
        /**
         * Inbox triage. `new` until somebody opens it, then `read`, and `archived` once it is dealt with. `spam` is set by code in exactly one place — the honeypot, and only while the tenant's spam_handling is 'flag'; under 'reject' the submission is never stored at all. Default 'new'. A create may set it — an inbox importer records a submission that is already read — but nothing needs to: omit it and the row is 'new'.
         */
        status?: FormSubmissionStatus;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type FormUpdateRequest = {
        /**
         * The form itself: a FormKit schema, held as a flat ARRAY of nodes (it defaults to `[]`, never to an object) and rendered verbatim by the storefront.

Read it as the field list. Every node carrying a non-empty `name` collects one value and writes it into a submission's `data` under exactly that name — the example below produces `{"company": …, "email": …, "message": …}` — while `$el` content nodes and `$rxStep` step markers collect nothing. Order is render order, and a `$rxStep` marker starts a new wizard step.

See the `FormKitNode` schema for what a node may carry.

On the way IN a node is any object: this is unconstrained jsonb, FormKit owns the grammar, and the one rule this app applies is the tenant's `max_form_fields` ceiling counted over the nodes with a non-empty `name`. Anything that is not an array at all is a 400.
         */
        definition?: object[];
        /**
         * Free-form metadata on the FORM, which this app neither reads nor writes: yours to key however an integration needs, stored and returned verbatim. (The metadata this app does write is on a SUBMISSION — see `FormSubmissionMetadata`.)
         */
        metadata?: object | null;
        /**
         * What this form is called in the Cockpit's form list. Operator-facing only — the storefront never renders it, so renaming a form breaks no page.
         */
        name?: string;
        /**
         * Submit label, success message, per-form notify email, post-submit actions, translations — see the `FormSettings` schema for every key that is read. Unconstrained jsonb on the way in: nothing here is required and no key is refused.
         */
        settings?: object | null;
        /**
         * URL-safe identifier, unique per tenant. This is the name a storefront resolves a form by (`GET /v1/forms?slug=contact&status=live&limit=1`), so it is part of the page's contract: changing it changes which form a page renders. Lower-case letters, digits and inner hyphens. Taken already? That is the 409 — one slug answers for one form.
         */
        slug?: string;
        /**
         * Lifecycle. `draft` while it is being built; `live` once the storefront may render it — the cover BFF resolves live forms only, so a draft is a 404 on the storefront and never a broken page; `archived` for a form that is kept for its submissions but no longer offered. Default 'draft'.
         */
        status?: FormStatus;
    }

    /**
     * Where this page sits in the result set. Everything needed to fetch the next one is here, so a client never has to guess whether it has seen everything.
     */
    export type FormsPage = {
        /**
         * True while `offset + returned < total`: another page follows, at `offset + returned`.
         */
        hasMore?: boolean;
        /**
         * The page size that was applied — the `limit` parameter after clamping to 1…200, or 50 when none was given.
         */
        limit?: number;
        /**
         * How many matching rows were skipped before this page.
         */
        offset?: number;
        /**
         * How many rows are in `items` — below `limit` exactly on the last page.
         */
        returned?: number;
        /**
         * How many rows match the filter in total, ignoring the page. This is the number to show a merchant; `returned` is only what fitted.
         */
        total?: number;
    }

    /**
     * 
     */
    export type FormsVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * The set is exhaustive.
         */
        closed?: boolean;
        /**
         * The tone a value nobody gave one falls back to — what a badge looks like for a status that was added to the CHECK constraint before anyone styled it.
         */
        default_tone?: FormsVocabularyTone;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: FormsVocabularyName;
        /**
         * Parsed from the CHECK constraint.
         */
        source?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in constraint order — which is the order a select should offer them in, because it is the lifecycle order.
         */
        values?: FormsVocabularyValue[];
    }

    /**
     * 
     */
    export type FormsVocabularyIndex = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, without its values — enough to build a menu, not enough to fill a select. Fetch one by name for that.
         */
        vocabularies?: FormsVocabularySummary[];
    }

    /**
     * 
     */
    export type FormsVocabularySummary = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: FormsVocabularySummaryName;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
    }

    /**
     * 
     */
    export type FormsVocabularyValue = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The value ends the lifecycle.
         */
        final?: boolean;
        /**
         * The value as the database stores and enforces it.
         */
        key?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: FormsVocabularyTone;
    }

    /**
     * One item and its SIGNED correction: &#039;product_id&#039; or &#039;sku&#039;, plus a non-zero delta.
     */
    export type InventoryAdjustItem = {
        /**
         * The product to move, as the products app knows it. Give this OR `sku` — an item that names neither is answered 400. Matching is exact: a stock row keyed by SKU is not found by product id.
         */
        product_id?: string | null;
        /**
         * The SIGNED correction to `on_hand`: −3 writes off three, +3 finds three. It is a delta, not the new balance. Zero is refused (400) because a correction of nothing is a mistake, not a booking — the rule is the handler's, not a database CHECK, which is why it is stated here rather than declared as a bound.
         */
        quantity: number;
        /**
         * The article number to move, when the item has no product id. Give this OR `product_id`.
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type InventoryAdjustRequest = {
        /**
         * The corrections, at most 200 in one call — a stocktake, breakage, shrinkage. Quantities are SIGNED deltas, not new balances.
         */
        items?: InventoryAdjustItem[];
        /**
         * Which location is being corrected. Omitted, the `default_location_code` setting decides. A correction is per location: the same SKU in two warehouses is two corrections.
         */
        location_code?: string | null;
        /**
         * Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
         */
        product_id?: string | null;
        /**
         * Inline single-item form: the SIGNED correction (negative writes stock off, positive finds it). Non-zero.
         */
        quantity?: number | null;
        /**
         * Why the stock is being corrected — this is the audit trail a stocktake leaves behind. Owed unless `movement_reason_required` is 'none' (its default, 'adjustments', asks for one exactly here); missing where it is owed, the call is 400.
         */
        reason?: string | null;
        /**
         * Inline single-item form: the article number to move (instead of `product_id`).
         */
        sku?: string | null;
    }

    /**
     * One item to check: &#039;product_id&#039; or &#039;sku&#039;. Checking is free of consequence — it books nothing and holds nothing.
     */
    export type InventoryAvailabilityItem = {
        /**
         * The product to move, as the products app knows it. Give this OR `sku` — an item that names neither is answered 400. Matching is exact: a stock row keyed by SKU is not found by product id.
         */
        product_id?: string | null;
        /**
         * How many are wanted. It only decides `orderable`; the on_hand / reserved / available figures come back whatever it is. Omit it (or send null) to ask "is this sellable at all?", which is a check against 1.
         */
        quantity?: number | null;
        /**
         * The article number to move, when the item has no product id. Give this OR `product_id`.
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type InventoryAvailabilityRequest = {
        /**
         * The items to check, at most 200 in one call. A cart, a category page, a feed row — one call answers them all, which is why this route is the batch one.
         */
        items?: InventoryAvailabilityItem[];
        /**
         * Restrict the check to ONE location, by its code — the stock a click-and-collect store can promise today. Omitted, every ENABLED location is summed; a disabled one is never counted either way.
         */
        location_code?: string | null;
        /**
         * Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
         */
        product_id?: string | null;
        /**
         * Inline single-item form: how many are wanted (default 1). It decides `orderable` and nothing else.
         */
        quantity?: number | null;
        /**
         * Inline single-item form: the article number to move (instead of `product_id`).
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type InventoryCommitRequest = {
        /**
         * The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Every ACTIVE hold under this reference ships: `on_hand` and `reserved` both fall and a `shipment` booking is written for each. Unlike release, committing an order that has nothing active is a 422 — it means the hold was already released or already shipped, and shipping twice is worth saying out loud.
         */
        order_ref: string;
    }

    /**
     * 
     */
    export type InventoryReceiveRequest = {
        /**
         * The goods that arrived, at most 200 in one call — a delivery, a production batch, an opening balance.
         */
        items?: InventoryStockItem[];
        /**
         * Which location took the delivery. Omitted, the `default_location_code` setting decides; a code no location carries is answered 400 rather than booked somewhere else.
         */
        location_code?: string | null;
        /**
         * Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
         */
        product_id?: string | null;
        /**
         * Inline single-item form: how many arrived. Positive.
         */
        quantity?: number | null;
        /**
         * What the ledger should record about this receipt — a delivery note number, a production order. Owed only when `movement_reason_required` is 'all'; the contract does not require it, because whether it is owed is the tenant's setting and not this route's rule.
         */
        reason?: string | null;
        /**
         * Inline single-item form: the article number to move (instead of `product_id`).
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type InventoryReleaseRequest = {
        /**
         * The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Every ACTIVE hold under this reference is given back; ones already committed or released are left alone. A reference no reservation carries releases nothing and answers `released: 0` — not an error, which is what makes a retried cancellation safe.
         */
        order_ref: string;
    }

    /**
     * 
     */
    export type InventoryReserveRequest = {
        /**
         * When this hold lapses. The sweeper — POST /inventories/reservations/sweep, and the 'expire-reservations' schedule that runs it every 15 minutes — releases everything past this moment exactly as a cancellation would, so an abandoned checkout stops holding stock on its own. Null means the row named no deadline: it is swept on its AGE instead once `reservation_ttl_minutes` is above 0, which is what makes turning that setting on retroactive. Omit it to let the `reservation_ttl_minutes` setting stamp one (0 — its default — means no deadline at all); send one to hold this order for a window of its own, e.g. a quote that stands until Friday.
         */
        expires_at?: string | null;
        /**
         * The items to hold, at most 200 in one call — a whole cart in one request. The call is planned before anything is written, so either every item is placed or nothing is.
         */
        items?: InventoryStockItem[];
        /**
         * Where a BACKORDERED item is booked when no location holds a stock row for it at all — the last fallback, not the allocator: which location serves an item that IS in stock comes from `allocation_strategy`. Omitted, the `default_location_code` setting decides.
         */
        location_code?: string | null;
        /**
         * The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Reserving twice under the same reference ADDS holds rather than replacing them — release first if you mean to replace.
         */
        order_ref: string;
        /**
         * Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
         */
        product_id?: string | null;
        /**
         * Inline single-item form: how many to hold. Positive — the hold is expressed as a positive reservation, while the ledger booking it writes carries the negative.
         */
        quantity?: number | null;
        /**
         * Where the order is going. Read ONLY when the tenant's `allocation_strategy` is 'nearest' — under 'priority' or 'single_location' it is accepted and ignored, so sending it is never wrong, it is just not always heard.
         */
        ship_to?: InventoryShipTo;
        /**
         * Inline single-item form: the article number to move (instead of `product_id`).
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type InventoryRestockRequest = {
        /**
         * The goods that came back, at most 200 in one call. Whether they rejoin sellable stock is `restock`, not this list.
         */
        items?: InventoryStockItem[];
        /**
         * Where the goods came back to — a returns warehouse is a location like any other. Omitted, the `default_location_code` setting decides.
         */
        location_code?: string | null;
        /**
         * The order the goods came back from. It is written onto the ledger booking, so the return shows up in that order's stock history next to its reserve and shipment — no reservation is touched by it.
         */
        order_ref?: string | null;
        /**
         * Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
         */
        product_id?: string | null;
        /**
         * Inline single-item form: how many came back. Positive.
         */
        quantity?: number | null;
        /**
         * Why the goods came back — 'wrong size', 'damaged on arrival'. Owed only when `movement_reason_required` is 'all'.
         */
        reason?: string | null;
        /**
         * Do these goods rejoin SELLABLE stock? A merchant decision, not a fact: apparel usually restocks, hygiene articles never do, many merchants inspect first. Omit it to follow the `restock_on_return_default` setting. `false` answers `restocked: false`, moves nothing and books NOTHING — there is no movement to write, because no stock moved, and that is the branch that makes this route a 200 while its sibling `receive` is a 201.
         */
        restock?: boolean | null;
        /**
         * Inline single-item form: the article number to move (instead of `product_id`).
         */
        sku?: string | null;
    }

    /**
     * Where the order is going. Read ONLY when the tenant&#039;s `allocation_strategy` is &#039;nearest&#039; — under &#039;priority&#039; or &#039;single_location&#039; it is accepted and ignored, so sending it is never wrong, it is just not always heard.
     */
    export type InventoryShipTo = {
        /**
         * ISO country code of the delivery address. Locations whose `address.country` matches are tried before the rest, which is what stops a German order pulling from an overseas warehouse that merely sorts first.
         */
        country?: string | null;
        /**
         * Prefer this location above everything else — a click-and-collect store the customer picked. It is a preference, not a demand: if it cannot cover the item the allocator moves on to the next location.
         */
        location_code?: string | null;
    }

    /**
     * One item and how much of it: &#039;product_id&#039; or &#039;sku&#039;, plus a positive quantity.
     */
    export type InventoryStockItem = {
        /**
         * The product to move, as the products app knows it. Give this OR `sku` — an item that names neither is answered 400. Matching is exact: a stock row keyed by SKU is not found by product id.
         */
        product_id?: string | null;
        /**
         * How many units this booking moves. Always POSITIVE here — the direction is the route (receive adds, reserve holds, restock returns), not the sign. Zero or a negative number is answered 400; a signed correction is what POST /inventories/adjust is for.
         */
        quantity: number;
        /**
         * The article number to move, when the item has no product id. Give this OR `product_id`.
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type InventoryVocabulary = {
        /**
         * This app's name — the part before the dot in the qualified id.
         */
        app?: string;
        /**
         * True when these values are the complete permitted set, because they were read out of a CHECK constraint. A value outside a closed set is therefore stale data, not a missing label — which is what lets a client show it as an error instead of inventing a title for it.
         */
        closed?: boolean;
        /**
         * The tone a value gets when nobody has labelled it — a value added to the CHECK constraint is served with its key humanized and this tone, rather than not being served at all.
         */
        default_tone?: InventoryVocabularyDefaultTone;
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The vocabulary name, echoed — the part after the dot in the qualified id.
         */
        name?: string;
        /**
         * Where the words come from: 'schema' — the app's own, read from the constraint. Nothing here is renameable per tenant, so a client may cache it per app version.
         */
        source?: InventoryVocabularySource;
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, IN CONSTRAINT ORDER — which is lifecycle order for a status, so a UI can render the steps in the order they happen.
         */
        values?: object[];
    }

    /**
     * 
     */
    export type InventoryVocabularyIndex = {
        /**
         * This app's name — the part before the dot in a qualified vocabulary id such as `inventories.movement-types`.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, WITHOUT its values — the index a client reads to discover them. Fetch the values with GET /inventories/vocabularies/{name}.
         */
        vocabularies?: object[];
    }

    /**
     * One importable / exportable entity of an installed app.
     */
    export type IoEntity = {
        /**
         * 
         */
        app?: string;
        /**
         * 
         */
        entity?: string;
        /**
         * Humanised entity name for pickers.
         */
        label?: string;
        /**
         * The physical table name Baseline provisioned.
         */
        table?: string;
        /**
         * 
         */
        vendor?: string;
    }

    /**
     * 
     */
    export type IoProfile = {
        /**
         * What an import does with the lines the target cart already has. 'replace' clears them first; 'insert' and 'append' both add, and behave identically today. Read only by carts.import, and only when the call names a target_cart_id — an import that creates its own cart has nothing to apply a mode to.
         */
        apply_mode?: CartIoApplyMode;
        /**
         * When the profile was created — for the bundled templates, when the app was installed.
         */
        created_at?: string;
        /**
         * Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
         */
        direction?: CartIoDirection;
        /**
         * What the profile carries: whole carts ('carts' — the `{cart, items}` document) or bare cart lines ('cart_items' — the spreadsheet a buyer quick-orders from).
         */
        entity?: CartIoEntity;
        /**
         * The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it.
         */
        format?: CartIoFormat;
        /**
         * The profile, as carts.export and carts.import name it in `profile_id`.
         */
        id?: string;
        /**
         * One of the profiles this app ships with, seeded by carts.io.profiles.defaults. A profile a merchant wrote is not one, so this is how a UI separates "what came with the app" from "what we built".
         */
        is_template?: boolean;
        /**
         * Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
         */
        mapping?: CartIoMapping;
        /**
         * What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409 — and the four bundled templates use it as their identity, so seeding is idempotent by name.
         */
        name?: string;
        /**
         * Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
         */
        options?: object | null;
        /**
         * The tenant this row belongs to, echoed by the data plane.
         */
        tenant_id?: string;
        /**
         * When the profile last changed.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type IoProfileCreateRequest = {
        /**
         * What an import does with the lines the target cart already has: 'replace' clears them first, 'insert' and 'append' both add and behave identically today. Read only when the import names a target_cart_id. Default 'insert'.
         */
        apply_mode?: CartIoApplyMode;
        /**
         * Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
         */
        direction: CartIoDirection;
        /**
         * What the profile carries: whole carts (the `{cart, items}` document) or bare cart lines. Default 'carts'.
         */
        entity?: CartIoEntity;
        /**
         * The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it. Default 'json'.
         */
        format?: CartIoFormat;
        /**
         * One of the bundled templates. Set by carts.io.profiles.defaults; a profile a merchant writes is not one.
         */
        is_template?: boolean;
        /**
         * Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
         */
        mapping?: CartIoMapping;
        /**
         * What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409.
         */
        name: string;
        /**
         * Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
         */
        options?: object | null;
    }

    /**
     * Profile source/sink format. `bmecat` is profile-only — the ad-hoc
`/io/imports` and `/io/exports` endpoints do not accept it.

     */
    export type IoProfileFormat = {
    }

    /**
     * A saved profile. Mirrors the controller&#039;s presenter exactly — there
are no `created_at` / `updated_at` fields on this resource.

     */
    export type IoProfileResource = {
        /**
         * 
         */
        app?: string;
        /**
         * 
         */
        apply_mode?: IoProfileResourceApplyMode;
        /**
         * 
         */
        created_by?: string | null;
        /**
         * 
         */
        direction?: IoProfileResourceDirection;
        /**
         * 
         */
        entity?: string;
        /**
         * 
         */
        format?: IoProfileFormat;
        /**
         * 
         */
        id?: string;
        /**
         * 
         */
        mapping?: object;
        /**
         * `null` means global — offered for every market.
         */
        markets?: string[] | null;
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
        vendor?: string;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type IoProfileUpdateRequest = {
        /**
         * What an import does with the lines the target cart already has: 'replace' clears them first, 'insert' and 'append' both add and behave identically today. Read only when the import names a target_cart_id. Default 'insert'.
         */
        apply_mode?: CartIoApplyMode;
        /**
         * Which way this profile runs. A profile only ever runs in the direction it declares: handing an import profile to carts.export is a 400, and the other way round.
         */
        direction?: CartIoDirection;
        /**
         * What the profile carries: whole carts (the `{cart, items}` document) or bare cart lines. Default 'carts'.
         */
        entity?: CartIoEntity;
        /**
         * The wire format. 'json' is the canonical, re-importable document; 'csv' is the spreadsheet form, and only line fields survive it. Default 'json'.
         */
        format?: CartIoFormat;
        /**
         * One of the bundled templates. Set by carts.io.profiles.defaults; a profile a merchant writes is not one.
         */
        is_template?: boolean;
        /**
         * Baseline-IO-compatible column mapping. An empty object (or null) is identity: the full canonical shape, every field under its own name.
         */
        mapping?: CartIoMapping;
        /**
         * What a merchant picks this profile by. Unique within the tenant — reusing a name is a 409.
         */
        name?: string;
        /**
         * Free-form options carried with the profile. The four bundled templates put one human sentence under `description` and nothing else; no other key is read by this app, so anything a merchant needs alongside a profile can live here.
         */
        options?: object | null;
    }

    /**
     * 
     */
    export type ItemAvailability = {
        /**
         * on_hand − reserved across the locations in scope: available-to-promise, and the number a storefront shows. It can be NEGATIVE once backorders have been reserved beyond stock — nothing floors it, because "sold more than we hold" is a real state a merchant needs to see.
         */
        available?: number;
        /**
         * The per-location breakdown behind the summed figures — which place could actually ship it.
         */
        locations?: LocationAvailability[];
        /**
         * Physically in stock, summed across the locations in scope (every enabled location, or the one `location_code` named). Promised units are included, so this is NOT what may be sold.
         */
        on_hand?: number;
        /**
         * True when the item is tracked and `available >= requested` at this moment. A SNAPSHOT, not a hold: nothing is set aside until POST /inventories/reserve, and two checkouts can both read true for the last unit.
         */
        orderable?: boolean;
        /**
         * The product id as it was asked for, echoed. Null when the item was named by SKU.
         */
        product_id?: string | null;
        /**
         * The quantity the check was made against — the item's own `quantity`, or 1 when none was sent. `orderable` answers "can I have this many?", so it is only as strict as this number.
         */
        requested?: number;
        /**
         * Already promised to orders, summed across the same locations — the part of `on_hand` that is spoken for.
         */
        reserved?: number;
        /**
         * The SKU as it was asked for, echoed. Null when the item was named by product id.
         */
        sku?: string | null;
        /**
         * False when this app has never seen the item: no stock row anywhere in scope. It is not an error and not a zero — the storefront decides whether an untracked item sells freely (a service, a made-to-order piece) or not at all. `on_hand`, `reserved` and `available` are 0 in that case, and `orderable` is false.
         */
        tracked?: boolean;
    }

    /**
     * 
     */
    export type Layout = {
        /**
         * 
         */
        color_accent: string | null;
        /**
         * 
         */
        color_bg: string | null;
        /**
         * 
         */
        color_text: string | null;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        enabled: boolean;
        /**
         * 
         */
        font_family: string | null;
        /**
         * 
         */
        footer_note: string | null;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        is_default: boolean;
        /**
         * 
         */
        legal_name: string | null;
        /**
         * 
         */
        lifecycle_state: string;
        /**
         * 
         */
        logo_url: string | null;
        /**
         * 
         */
        markets: any[];
        /**
         * 
         */
        menu_links: any[] | null;
        /**
         * 
         */
        name: string;
        /**
         * 
         */
        postal_address: string | null;
        /**
         * 
         */
        sender_name: string | null;
        /**
         * 
         */
        social_links: any[] | null;
        /**
         * 
         */
        support_email: string | null;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
        /**
         * 
         */
        valid_from: string | null;
        /**
         * 
         */
        valid_until: string | null;
        /**
         * 
         */
        width: string | null;
    }

    /**
     * One reusable block. Every page that references it renders THIS tree, so editing the item changes every placement at once.
     */
    export type LibraryItem = {
        /**
         * The block type this item instantiates. The library picker filters by it, so an item only ever appears where its bundle is allowed. Theme-defined.
         */
        bundle?: string;
        /**
         * When the item entered the library.
         */
        created_at?: string;
        /**
         * The user id that made the block reusable.
         */
        created_by?: string | null;
        /**
         * The tombstone. A soft-deleted item is never listed or handed out, and a block still referencing it keeps rendering its own last state rather than breaking.
         */
        deleted_at?: string | null;
        /**
         * The library item id. A block references it to become an instance of the item rather than a copy.
         */
        id?: string;
        /**
         * What the item is called in the library picker. This is the only thing an editor sees before inserting it, so it carries the whole description.
         */
        label?: string;
        /**
         * The block and everything under it, serialized. This is the payload: every page that references the item renders THIS tree, so editing it here changes every placement at once.
         */
        tree?: PageBlockTree;
        /**
         * When the item last changed — i.e. when every page referencing it last changed with it.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type LibraryTemplate = {
        /**
         * 
         */
        body_html: string | null;
        /**
         * 
         */
        body_text: string | null;
        /**
         * 
         */
        channel: string;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        description: string | null;
        /**
         * 
         */
        design: any[] | null;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        key: string;
        /**
         * 
         */
        locale: string;
        /**
         * 
         */
        subject: string | null;
        /**
         * 
         */
        suggested_event: string | null;
        /**
         * 
         */
        suggested_recipient: string | null;
        /**
         * 
         */
        title: string | null;
        /**
         * 
         */
        updated_at: string | null;
        /**
         * 
         */
        variables: any[] | null;
    }

    /**
     * One value of the lifecycle stages set. Where a company stands in the sales pipeline — a separate axis from status, and one whose steps are a sales team&#039;s own.
     */
    export type LifecycleStage = {
        /**
         * What `organizations.lifecycle_stage` stores, and the only part of this row other data depends on. Immutable once created: renaming it would orphan every record carrying it.
         */
        code?: string;
        /**
         * When the value was added to this set.
         */
        created_at?: string;
        /**
         * One line of help for an operator choosing this value. Null when there is nothing to add. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443).
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Primary key of this value. What the update and delete routes address it by — the CODE is what records store.
         */
        id?: string;
        /**
         * The value a create falls back to when the caller names none. Exactly one row of the set carries it; promoting another one demotes this.
         */
        is_default?: boolean;
        /**
         * True for a value this app seeded on install. Still renameable and still removable — it only records where the value came from.
         */
        is_system?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where this value sits in the set, ascending. It is the order a select should offer.
         */
        position?: number;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * The fallback name — what a client shows when no locale in `labels` matches. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443) — those rows were seeded with no `labels` at all.
         */
        title?: string;
        /**
         * Semantic badge colour. The palette stays fixed — it is a render concern, not a merchant decision.
         */
        tone?: LifecycleStageTone;
        /**
         * When it was last edited.
         */
        updated_at?: string;
    }

    /**
     * Add one value to the lifecycle stages set. It is available to `organizations.lifecycle_stage` immediately.
     */
    export type LifecycleStageCreateRequest = {
        /**
         * What `organizations.lifecycle_stage` will store. Lowercase, starting with a letter; immutable afterwards.
         */
        code: string;
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted in the same call.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending. Default 0.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title: string;
        /**
         * Semantic badge colour.
         */
        tone?: LifecycleStageCreateRequestTone;
    }

    /**
     * Everything but `code`. Sending a different one is a 400 rather than a silent no-op, because records already store it.
     */
    export type LifecycleStageUpdateRequest = {
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title?: string;
        /**
         * Semantic badge colour.
         */
        tone?: LifecycleStageUpdateRequestTone;
    }

    /**
     * 
     */
    export type Location = {
        /**
         * Where the location physically is. Free-form, and one key is READ: `country`, an ISO country code, which POST /inventories/reserve compares (case-insensitively) against `ship_to.country` when `allocation_strategy` is 'nearest' — that is what stops a German order pulling from the US warehouse because it happens to sort first. The keys the cockpit form writes are `street`, `postal_code`, `city`, `country`; anything else a tenant stores is kept and ignored.
         */
        address?: object | null;
        /**
         * The location's stable identifier, and the name every stock call uses instead of an id: `location_code` on receive / adjust / restock / reserve, and the `default_location_code` setting. Unique per tenant, at least one character (CHECK `length(code) > 0`). Every tenant starts with `main` — POST /inventories/locations/defaults seeds it and the app.installed event runs the same seed — so `main` is the one code that resolves everywhere.
         */
        code?: string;
        /**
         * When the row was created. Server-set: it is in no request body, and a value sent for it is ignored.
         */
        created_at?: string;
        /**
         * Whether this location takes part in stock at all. POST /inventories/availability and POST /inventories/reserve look at enabled locations and nothing else, so switching this off hides a location's stock from the storefront without deleting a row or losing a single ledger booking; its stock stays readable through GET /inventories/stock.
         */
        enabled?: boolean;
        /**
         * The row's own id, generated by the database. A caller never sends one — it reads one back and puts it in the path of every later call.
         */
        id?: string;
        /**
         * The location name per language tag, for a UI that has to render it in the reader's language. Falls back to `name` when a tag is missing. Keys are language tags, values plain strings.
         */
        labels?: object | null;
        /**
         * Free-form data the tenant keeps on the location — an ERP site number, a contact, a cut-off time. No route in this app reads it; it is stored and handed back unchanged.
         */
        metadata?: object | null;
        /**
         * What the place is called for an operator, in the tenant's working language. At least one character (CHECK `length(name) > 0`). It is a label only: nothing addresses a location by name.
         */
        name?: string;
        /**
         * Sourcing order for POST /inventories/reserve while `allocation_strategy` is 'priority': the enabled locations are walked ASCENDING and the first that can cover the item wins, so a LOWER number is preferred. Locations that tie keep the order the database returns them in — give every location a distinct priority if the order matters.
         */
        priority?: number;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * What kind of place holds the stock. 'warehouse' — own stock, the default. 'store' — a retail floor, the stock a click-and-collect order draws on. 'dropship' — a supplier ships it and this row tracks what they say they hold. 'virtual' — a bucket that is not a building (pre-orders, consignment, a quarantine shelf). Descriptive only: sourcing order comes from `priority`, and no route in this app treats one type differently from another.
         */
        type?: LocationType;
        /**
         * When the row was last written. Server-set — every route that changes this row stamps it.
         */
        updated_at?: string;
    }

    /**
     * What one location holds of this item. Only enabled locations appear, and only those with a stock row for the item — a location that has never held it is absent rather than zero.
     */
    export type LocationAvailability = {
        /**
         * on_hand − reserved at this location — what this one place can still promise.
         */
        available?: number;
        /**
         * The location CODE (`locations.code`) — the same value `location_code` takes in a request. Falls back to the raw location id in the rare case where the location row disappeared between the two reads.
         */
        location?: string;
        /**
         * Physically at this location, promised units included.
         */
        on_hand?: number;
        /**
         * Held for orders at this location.
         */
        reserved?: number;
    }

    /**
     * 
     */
    export type LocationCreateRequest = {
        /**
         * Where the location physically is. Free-form, and one key is READ: `country`, an ISO country code, which POST /inventories/reserve compares (case-insensitively) against `ship_to.country` when `allocation_strategy` is 'nearest' — that is what stops a German order pulling from the US warehouse because it happens to sort first. The keys the cockpit form writes are `street`, `postal_code`, `city`, `country`; anything else a tenant stores is kept and ignored.
         */
        address?: object | null;
        /**
         * The location's stable identifier, and the name every stock call uses instead of an id: `location_code` on receive / adjust / restock / reserve, and the `default_location_code` setting. Unique per tenant, at least one character (CHECK `length(code) > 0`). Every tenant starts with `main` — POST /inventories/locations/defaults seeds it and the app.installed event runs the same seed — so `main` is the one code that resolves everywhere.
         */
        code: string;
        /**
         * Whether this location takes part in stock at all. POST /inventories/availability and POST /inventories/reserve look at enabled locations and nothing else, so switching this off hides a location's stock from the storefront without deleting a row or losing a single ledger booking; its stock stays readable through GET /inventories/stock. Defaults to true.
         */
        enabled?: boolean;
        /**
         * The location name per language tag, for a UI that has to render it in the reader's language. Falls back to `name` when a tag is missing. Keys are language tags, values plain strings.
         */
        labels?: object | null;
        /**
         * Free-form data the tenant keeps on the location — an ERP site number, a contact, a cut-off time. No route in this app reads it; it is stored and handed back unchanged.
         */
        metadata?: object | null;
        /**
         * What the place is called for an operator, in the tenant's working language. At least one character (CHECK `length(name) > 0`). It is a label only: nothing addresses a location by name.
         */
        name: string;
        /**
         * Sourcing order for POST /inventories/reserve while `allocation_strategy` is 'priority': the enabled locations are walked ASCENDING and the first that can cover the item wins, so a LOWER number is preferred. Locations that tie keep the order the database returns them in — give every location a distinct priority if the order matters. Defaults to 0.
         */
        priority?: number;
        /**
         * What kind of place holds the stock. 'warehouse' — own stock, the default. 'store' — a retail floor, the stock a click-and-collect order draws on. 'dropship' — a supplier ships it and this row tracks what they say they hold. 'virtual' — a bucket that is not a building (pre-orders, consignment, a quarantine shelf). Descriptive only: sourcing order comes from `priority`, and no route in this app treats one type differently from another. Defaults to 'warehouse'.
         */
        type?: LocationType;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type LocationUpdateRequest = {
        /**
         * Where the location physically is. Free-form, and one key is READ: `country`, an ISO country code, which POST /inventories/reserve compares (case-insensitively) against `ship_to.country` when `allocation_strategy` is 'nearest' — that is what stops a German order pulling from the US warehouse because it happens to sort first. The keys the cockpit form writes are `street`, `postal_code`, `city`, `country`; anything else a tenant stores is kept and ignored.
         */
        address?: object | null;
        /**
         * The location's stable identifier, and the name every stock call uses instead of an id: `location_code` on receive / adjust / restock / reserve, and the `default_location_code` setting. Unique per tenant, at least one character (CHECK `length(code) > 0`). Every tenant starts with `main` — POST /inventories/locations/defaults seeds it and the app.installed event runs the same seed — so `main` is the one code that resolves everywhere.
         */
        code?: string;
        /**
         * Whether this location takes part in stock at all. POST /inventories/availability and POST /inventories/reserve look at enabled locations and nothing else, so switching this off hides a location's stock from the storefront without deleting a row or losing a single ledger booking; its stock stays readable through GET /inventories/stock. Defaults to true.
         */
        enabled?: boolean;
        /**
         * The location name per language tag, for a UI that has to render it in the reader's language. Falls back to `name` when a tag is missing. Keys are language tags, values plain strings.
         */
        labels?: object | null;
        /**
         * Free-form data the tenant keeps on the location — an ERP site number, a contact, a cut-off time. No route in this app reads it; it is stored and handed back unchanged.
         */
        metadata?: object | null;
        /**
         * What the place is called for an operator, in the tenant's working language. At least one character (CHECK `length(name) > 0`). It is a label only: nothing addresses a location by name.
         */
        name?: string;
        /**
         * Sourcing order for POST /inventories/reserve while `allocation_strategy` is 'priority': the enabled locations are walked ASCENDING and the first that can cover the item wins, so a LOWER number is preferred. Locations that tie keep the order the database returns them in — give every location a distinct priority if the order matters. Defaults to 0.
         */
        priority?: number;
        /**
         * What kind of place holds the stock. 'warehouse' — own stock, the default. 'store' — a retail floor, the stock a click-and-collect order draws on. 'dropship' — a supplier ships it and this row tracks what they say they hold. 'virtual' — a bucket that is not a building (pre-orders, consignment, a quarantine shelf). Descriptive only: sourcing order comes from `priority`, and no route in this app treats one type differently from another. Defaults to 'warehouse'.
         */
        type?: LocationType;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `locations` — a typo, a filter another entity has, `?q=` — is DROPPED and cannot appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type LocationsFilter = {
        /**
         * The literal `?address=` value this call was understood to carry.
         */
        address?: string;
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?enabled=` value this call was understood to carry.
         */
        enabled?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?metadata=` value this call was understood to carry.
         */
        metadata?: string;
        /**
         * The literal `?name=` value this call was understood to carry.
         */
        name?: string;
        /**
         * The literal `?priority=` value this call was understood to carry.
         */
        priority?: string;
        /**
         * The literal `?type=` value this call was understood to carry.
         */
        type?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultLocationsFilter = LocationsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * A distinct business context within a tenant — a country, a region, or a storefront segment such as B2C vs B2B — with its own base currency, locales, traded currencies and tax classes. A market is also the platform&#039;s `market` SCOPE dimension: every other commerce app slices its data by one, keyed on this row&#039;s `code`. A market is never just this row: it needs at least one locale, one currency and one tax class before it can serve, which is what /readiness measures and what /clone and /backfill build.
     */
    export type Market = {
        /**
         * Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
         */
        code?: string;
        /**
         * When the market row was inserted. Set by the database; never writable.
         */
        created_at?: string;
        /**
         * Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
         */
        currency?: string;
        /**
         * Primary key. Note that OTHER apps do not store this: the market scope dimension is keyed on `code` (manifest `provides_scopes.slug_source = markets.code`), so a row elsewhere that is "in this market" carries the code, not this uuid. It is the item routes and /context that want this value.
         */
        id?: string;
        /**
         * The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
         */
        is_default?: boolean;
        /**
         * Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
         */
        labels?: object | null;
        /**
         * Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
         */
        name?: string;
        /**
         * Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
         */
        position?: number;
        /**
         * Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
         */
        status?: MarketStatus;
        /**
         * When the market row was last written. Set by the database on every update; never writable.
         */
        updated_at?: string;
    }

    /**
     * Child rows copied in from the source, per collection — only codes this market did not already carry. Zero everywhere on a second run: the call is idempotent.
     */
    export type MarketBackfillAdded = {
        /**
         * Traded currencies added from the source market.
         */
        currencies?: number;
        /**
         * Locales added from the source market.
         */
        locales?: number;
        /**
         * Tax classes added from the source market.
         */
        tax_classes?: number;
    }

    /**
     * What this market already held BEFORE the repair, per collection — the rows that were left exactly as the merchant left them.
     */
    export type MarketBackfillKept = {
        /**
         * Traded currencies this market already held, untouched.
         */
        currencies?: number;
        /**
         * Locales this market already held, untouched.
         */
        locales?: number;
        /**
         * Tax classes this market already held, untouched.
         */
        tax_classes?: number;
    }

    /**
     * The path id is the market being REPAIRED; `source` is the market to copy from (a uuid or a market code). The three flags default to true.
     */
    export type MarketBackfillRequest = {
        /**
         * Take the source's traded currencies for codes this market does not already carry. Default true.
         */
        currencies?: boolean;
        /**
         * Take the source's locales for codes this market does not already carry. Default true.
         */
        locales?: boolean;
        /**
         * The market to copy the missing pieces FROM — a uuid or a market code. Must not be the market in the path. Pick a market that is already right; nothing about it is changed.
         */
        source: string;
        /**
         * Take the source's tax classes for codes this market does not already carry. An existing code keeps ITS rate — a backfill never re-rates a class the merchant already set. Default true.
         */
        tax_classes?: boolean;
    }

    /**
     * What the repair changed. `kept` + `added` + `seeded` is what the market now holds, and separating them is the point: it shows that nothing the merchant had already decided was touched.
     */
    export type MarketBackfillResult = {
        /**
         * Child rows copied in from the source, per collection — only codes this market did not already carry. Zero everywhere on a second run: the call is idempotent.
         */
        added?: MarketBackfillAdded;
        /**
         * What this market already held BEFORE the repair, per collection — the rows that were left exactly as the merchant left them.
         */
        kept?: MarketBackfillKept;
        /**
         * A distinct business context within a tenant — a country, a region, or a storefront segment such as B2C vs B2B — with its own base currency, locales, traded currencies and tax classes. A market is also the platform's `market` SCOPE dimension: every other commerce app slices its data by one, keyed on this row's `code`. A market is never just this row: it needs at least one locale, one currency and one tax class before it can serve, which is what /readiness measures and what /clone and /backfill build.
         */
        market?: Market;
        /**
         * Can this market actually trade? `ready` is false only when a BLOCKING check failed — no currency to quote in, no tax class to tax with. Warnings are degraded-but-serviceable.
         */
        readiness?: MarketReadiness;
        /**
         * Rows this call added that were copied from nowhere, because the new market would otherwise have been left unable to trade: the tenant `fallback_locale` when neither market had a locale, and the base currency when it is not in the copied set. Zero on both is the normal, healthy answer — it means nothing had to be invented.
         */
        seeded?: MarketBackfillSeeded;
        /**
         * The market that was read from, resolved — so a caller who passed a code back gets the uuid, and one who passed a uuid gets the code the rest of the platform stores.
         */
        source?: MarketRef;
    }

    /**
     * Rows this call added that were copied from nowhere, because the new market would otherwise have been left unable to trade: the tenant `fallback_locale` when neither market had a locale, and the base currency when it is not in the copied set. Zero on both is the normal, healthy answer — it means nothing had to be invented.
     */
    export type MarketBackfillSeeded = {
        /**
         * 1 when the market's own base currency was registered because the copied set did not contain it; 0 otherwise.
         */
        currencies?: number;
        /**
         * 1 when the tenant's fallback_locale was written as this market's only locale, marked default; 0 otherwise.
         */
        locales?: number;
    }

    /**
     * Child rows copied from the source, per collection. A flag left false is a zero here, and so is a source that had none of that kind.
     */
    export type MarketCloneCopied = {
        /**
         * Traded currencies copied from the source market.
         */
        currencies?: number;
        /**
         * Locales copied from the source market.
         */
        locales?: number;
        /**
         * Tax classes copied from the source market.
         */
        tax_classes?: number;
    }

    /**
     * The path id is the SOURCE market (a uuid or a market code). Everything the new market does not inherit is here. The copy flags default to true; `is_default` is never copied, and the new market always gets its own base currency registered and marked default.
     */
    export type MarketCloneRequest = {
        /**
         * Code of the NEW market (unique per tenant).
         */
        code: string;
        /**
         * Copy the source's traded currencies. Default true. The new market's own base currency is registered and marked default either way.
         */
        copy_currencies?: boolean;
        /**
         * Copy the source's locales. Default true. False leaves the new market with no language of its own, so the tenant fallback_locale is seeded instead — it is never left with none.
         */
        copy_locales?: boolean;
        /**
         * Copy the source's tax classes, rates and all. Default true. False leaves the market unable to tax anything, which readiness reports as blocking.
         */
        copy_tax_classes?: boolean;
        /**
         * Base currency of the new market (ISO 4217). Defaults to the source market's, and is registered and marked default on the new one either way.
         */
        currency?: string;
        /**
         * Display name of the new market. Defaults to its code.
         */
        name?: string;
        /**
         * Status of the new market. Defaults to 'active'; clone it 'inactive' to build it out before it serves anyone.
         */
        status?: MarketStatus;
    }

    /**
     * What was built. `copied` and `seeded` account for every child row that now exists, and `readiness` is the verdict on the result — so the call that made the market also tells you whether it finished the job.
     */
    export type MarketCloneResult = {
        /**
         * Child rows copied from the source, per collection. A flag left false is a zero here, and so is a source that had none of that kind.
         */
        copied?: MarketCloneCopied;
        /**
         * A distinct business context within a tenant — a country, a region, or a storefront segment such as B2C vs B2B — with its own base currency, locales, traded currencies and tax classes. A market is also the platform's `market` SCOPE dimension: every other commerce app slices its data by one, keyed on this row's `code`. A market is never just this row: it needs at least one locale, one currency and one tax class before it can serve, which is what /readiness measures and what /clone and /backfill build.
         */
        market?: Market;
        /**
         * Can this market actually trade? `ready` is false only when a BLOCKING check failed — no currency to quote in, no tax class to tax with. Warnings are degraded-but-serviceable.
         */
        readiness?: MarketReadiness;
        /**
         * Rows this call added that were copied from nowhere, because the new market would otherwise have been left unable to trade: the tenant `fallback_locale` when neither market had a locale, and the base currency when it is not in the copied set. Zero on both is the normal, healthy answer — it means nothing had to be invented.
         */
        seeded?: MarketCloneSeeded;
        /**
         * The market that was read from, resolved — so a caller who passed a code back gets the uuid, and one who passed a uuid gets the code the rest of the platform stores.
         */
        source?: MarketRef;
    }

    /**
     * Rows this call added that were copied from nowhere, because the new market would otherwise have been left unable to trade: the tenant `fallback_locale` when neither market had a locale, and the base currency when it is not in the copied set. Zero on both is the normal, healthy answer — it means nothing had to be invented.
     */
    export type MarketCloneSeeded = {
        /**
         * 1 when the market's own base currency was registered because the copied set did not contain it; 0 otherwise.
         */
        currencies?: number;
        /**
         * 1 when the tenant's fallback_locale was written as this market's only locale, marked default; 0 otherwise.
         */
        locales?: number;
    }

    /**
     * The whole of one market: the row, its three collections, and the four resolved answers a client would otherwise have to work out for itself.
     */
    export type MarketContext = {
        /**
         * Every currency this market trades in, in position order. Capped at 200. The market's own base currency should be among them; readiness reports it as blocking when it is not.
         */
        currencies?: MarketCurrency[];
        /**
         * The locale a storefront should render this market in. `source` names where it came from: 'market' (a locale flagged is_default), 'market_first' (no flag — first by position) or 'tenant_fallback' (the market registers none; the tenant's fallback_locale setting answered).
         */
        default_locale?: MarketDefaultLocale;
        /**
         * How this tenant keys its translations, resolved rather than named: the key a client WRITES and the order it READS, per locale. Emitting the resolved answer is the point — a client handed only the setting names re-implements the policy and gets it subtly different, which is how a label editor came to ask for de-DE while the row held de.
         */
        locale_policy?: MarketLocalePolicy;
        /**
         * Every locale this market registers, in position order. Capped at 200. Empty is a real answer — read `default_locale` before assuming a language.
         */
        locales?: MarketLocale[];
        /**
         * A distinct business context within a tenant — a country, a region, or a storefront segment such as B2C vs B2B — with its own base currency, locales, traded currencies and tax classes. A market is also the platform's `market` SCOPE dimension: every other commerce app slices its data by one, keyed on this row's `code`. A market is never just this row: it needs at least one locale, one currency and one tax class before it can serve, which is what /readiness measures and what /clone and /backfill build.
         */
        market?: Market;
        /**
         * Whether a stored price in this market is NET or GROSS — the market layer of an answer the prices app also holds. A price list's own tax_basis wins over this; `tax_basis: null` with `source: 'unset'` means this market declares nothing and the reader must fall through to the tenant's own default.
         */
        pricing?: MarketPricing;
        /**
         * Can this market actually trade? `ready` is false only when a BLOCKING check failed — no currency to quote in, no tax class to tax with. Warnings are degraded-but-serviceable.
         */
        readiness?: MarketReadiness;
        /**
         * Every tax class of this market with its rate, in position order. Capped at 200. This is the rate table other apps resolve a line against, by code.
         */
        tax_classes?: MarketTaxClass[];
    }

    /**
     * A market needs a &#039;code&#039; and a &#039;name&#039; — currency defaults to EUR, status to active. To get a market that can actually trade, clone an existing one instead: POST /markets/{id}/clone.
     */
    export type MarketCreateRequest = {
        /**
         * Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
         */
        code: string;
        /**
         * Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
         */
        currency?: string;
        /**
         * The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
         */
        is_default?: boolean;
        /**
         * Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
         */
        labels?: object | null;
        /**
         * Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
         */
        name: string;
        /**
         * Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
         */
        position?: number;
        /**
         * Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
         */
        status?: MarketStatus;
    }

    /**
     * One currency a market accepts, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must be registered here or the market cannot serve.
     */
    export type MarketCurrency = {
        /**
         * ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
         */
        code?: string;
        /**
         * When the currency was registered on this market. Set by the database; never writable.
         */
        created_at?: string;
        /**
         * Primary key of this currency registration. The currency is named by `code` everywhere else.
         */
        id?: string;
        /**
         * The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
         */
        is_default?: boolean;
        /**
         * The market this currency belongs to. Filled from the route path on write and never read out of the body; ON DELETE CASCADE, so deleting the market deletes this row.
         */
        market_id?: string;
        /**
         * Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
         */
        position?: number;
    }

    /**
     * The owning market comes from the route path (&#039;market_id&#039;).
     */
    export type MarketCurrencyCreateRequest = {
        /**
         * ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
         */
        code: string;
        /**
         * The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
         */
        is_default?: boolean;
        /**
         * Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
         */
        position?: number;
    }

    /**
     * Confirmation that the currency of a market is gone. The row itself is not returned — read it before deleting if you need it.
     */
    export type MarketCurrencyDeleted = {
        /**
         * Always true — a row that was not there is a 404, not a false.
         */
        deleted?: boolean;
        /**
         * The id of the row that was deleted.
         */
        id?: string;
    }

    /**
     * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column&#039;s own type: `?is_default=true` comes back as `&quot;true&quot;`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
     */
    export type MarketCurrencyFilter = {
        /**
         * The `code` filter as it arrived, verbatim. Present only when the call sent it.
         */
        code?: string;
        /**
         * The `created_at` filter as it arrived, verbatim. Present only when the call sent it. Any form the database accepts as a timestamp, including a bare date.
         */
        created_at?: string;
        /**
         * The `id` filter as it arrived, verbatim. Present only when the call sent it.
         */
        id?: string;
        /**
         * The `is_default` filter as it arrived, verbatim. Present only when the call sent it.
         */
        is_default?: string;
        /**
         * The owning market, taken from the route path. ALWAYS present, and always the path's market — a `?market_id=` in the query is overwritten by it rather than honoured, so this is never the value a caller sent.
         */
        market_id?: string;
        /**
         * The `position` filter as it arrived, verbatim. Present only when the call sent it.
         */
        position?: string;
    }

    /**
     * One page of currencies of a market, the page it sits on, and the filters that produced it.
     */
    export type MarketCurrencyList = {
        /**
         * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column's own type: `?is_default=true` comes back as `"true"`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
         */
        filter?: MarketCurrencyFilter;
        /**
         * The currencies of a market on this page, in `order` — by `position` ascending unless the call asked otherwise.
         */
        items?: MarketCurrency[];
        /**
         * Where in the result set this answer sits. `limit` and `offset` are the values that were APPLIED, not the ones that were asked for — the data plane clamps rather than refuses, so an out-of-range or unparseable value comes back corrected here instead of as a 400.
         */
        page?: MarketsPage;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type MarketCurrencyUpdateRequest = {
        /**
         * ISO 4217 code, unique per market — one entry in the set of currencies this market TRADES in, as opposed to the single base currency on the market row that its prices are quoted in. The base currency must appear here or the market cannot serve; clone and backfill register it for you.
         */
        code?: string;
        /**
         * The currency offered first to a buyer who states no preference. At most one per market, and it should be the market's base currency — readiness reports it as a warning when it is not.
         */
        is_default?: boolean;
        /**
         * Sort position among this market's currencies, ascending, default 0 — the order a currency switcher lists them in.
         */
        position?: number;
    }

    /**
     * The locale a storefront should render this market in. `source` names where it came from: &#039;market&#039; (a locale flagged is_default), &#039;market_first&#039; (no flag — first by position) or &#039;tenant_fallback&#039; (the market registers none; the tenant&#039;s fallback_locale setting answered).
     */
    export type MarketDefaultLocale = {
        /**
         * Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
         */
        code?: string;
        /**
         * ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
         */
        country?: string;
        /**
         * ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
         */
        language?: string;
        /**
         * Which of the three rules answered. 'market' — a locale of this market carries is_default. 'market_first' — none does, so the first by position was taken. 'tenant_fallback' — the market registers no locale at all and the tenant's fallback_locale setting answered, which means this locale is NOT one of the market's own and nothing here was configured for it.
         */
        source?: MarketDefaultLocaleSource;
    }

    /**
     * Confirmation that the market is gone. The row itself is not returned — read it before deleting if you need it.
     */
    export type MarketDeleted = {
        /**
         * Always true — a row that was not there is a 404, not a false.
         */
        deleted?: boolean;
        /**
         * The id of the row that was deleted.
         */
        id?: string;
    }

    /**
     * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column&#039;s own type: `?is_default=true` comes back as `&quot;true&quot;`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
     */
    export type MarketFilter = {
        /**
         * The `code` filter as it arrived, verbatim. Present only when the call sent it.
         */
        code?: string;
        /**
         * The `created_at` filter as it arrived, verbatim. Present only when the call sent it. Any form the database accepts as a timestamp, including a bare date.
         */
        created_at?: string;
        /**
         * The `currency` filter as it arrived, verbatim. Present only when the call sent it.
         */
        currency?: string;
        /**
         * The `id` filter as it arrived, verbatim. Present only when the call sent it.
         */
        id?: string;
        /**
         * The `is_default` filter as it arrived, verbatim. Present only when the call sent it.
         */
        is_default?: string;
        /**
         * The `labels` filter as it arrived, verbatim. Present only when the call sent it.
         */
        labels?: string;
        /**
         * The `name` filter as it arrived, verbatim. Present only when the call sent it.
         */
        name?: string;
        /**
         * The `position` filter as it arrived, verbatim. Present only when the call sent it.
         */
        position?: string;
        /**
         * The `status` filter as it arrived, verbatim. Present only when the call sent it.
         */
        status?: string;
        /**
         * The `updated_at` filter as it arrived, verbatim. Present only when the call sent it. Any form the database accepts as a timestamp, including a bare date.
         */
        updated_at?: string;
    }

    /**
     * One page of markets, the page it sits on, and the filters that produced it.
     */
    export type MarketList = {
        /**
         * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column's own type: `?is_default=true` comes back as `"true"`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
         */
        filter?: MarketFilter;
        /**
         * The markets on this page, in `order` — by `position` ascending unless the call asked otherwise.
         */
        items?: Market[];
        /**
         * Where in the result set this answer sits. `limit` and `offset` are the values that were APPLIED, not the ones that were asked for — the data plane clamps rather than refuses, so an out-of-range or unparseable value comes back corrected here instead of as a 400.
         */
        page?: MarketsPage;
    }

    /**
     * One language a market is rendered in, and one key its translations are stored under. A market may register several; one of them is the default a storefront falls back to.
     */
    export type MarketLocale = {
        /**
         * Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
         */
        code?: string;
        /**
         * ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
         */
        country?: string;
        /**
         * When the locale was registered on this market. Set by the database; never writable.
         */
        created_at?: string;
        /**
         * Primary key of this locale registration. The locale is named by `code` everywhere else.
         */
        id?: string;
        /**
         * The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
         */
        is_default?: boolean;
        /**
         * ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
         */
        language?: string;
        /**
         * The market this locale belongs to. Filled from the route path on write and never read out of the body; ON DELETE CASCADE, so deleting the market deletes this row.
         */
        market_id?: string;
        /**
         * Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
         */
        position?: number;
    }

    /**
     * The owning market comes from the route path (&#039;market_id&#039;).
     */
    export type MarketLocaleCreateRequest = {
        /**
         * Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
         */
        code: string;
        /**
         * ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
         */
        country: string;
        /**
         * The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
         */
        is_default?: boolean;
        /**
         * ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
         */
        language: string;
        /**
         * Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
         */
        position?: number;
    }

    /**
     * Confirmation that the locale of a market is gone. The row itself is not returned — read it before deleting if you need it.
     */
    export type MarketLocaleDeleted = {
        /**
         * Always true — a row that was not there is a 404, not a false.
         */
        deleted?: boolean;
        /**
         * The id of the row that was deleted.
         */
        id?: string;
    }

    /**
     * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column&#039;s own type: `?is_default=true` comes back as `&quot;true&quot;`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
     */
    export type MarketLocaleFilter = {
        /**
         * The `code` filter as it arrived, verbatim. Present only when the call sent it.
         */
        code?: string;
        /**
         * The `country` filter as it arrived, verbatim. Present only when the call sent it.
         */
        country?: string;
        /**
         * The `created_at` filter as it arrived, verbatim. Present only when the call sent it. Any form the database accepts as a timestamp, including a bare date.
         */
        created_at?: string;
        /**
         * The `id` filter as it arrived, verbatim. Present only when the call sent it.
         */
        id?: string;
        /**
         * The `is_default` filter as it arrived, verbatim. Present only when the call sent it.
         */
        is_default?: string;
        /**
         * The `language` filter as it arrived, verbatim. Present only when the call sent it.
         */
        language?: string;
        /**
         * The owning market, taken from the route path. ALWAYS present, and always the path's market — a `?market_id=` in the query is overwritten by it rather than honoured, so this is never the value a caller sent.
         */
        market_id?: string;
        /**
         * The `position` filter as it arrived, verbatim. Present only when the call sent it.
         */
        position?: string;
    }

    /**
     * The read and write keys for one of the market&#039;s locales, already resolved from the two settings.
     */
    export type MarketLocaleKeys = {
        /**
         * The market's locale this entry is about.
         */
        code?: string;
        /**
         * Its language part, which is also the key under language granularity.
         */
        language?: string;
        /**
         * Keys to try in order until one holds text. Always starts at the exact code: a fallback fills a gap, it never outranks a stored value.
         */
        read?: string[];
        /**
         * A key inside a labels bag: a full locale ('de-DE') under regional granularity, a bare language ('de') under language granularity.
         */
        write?: string;
    }

    /**
     * One page of locales of a market, the page it sits on, and the filters that produced it.
     */
    export type MarketLocaleList = {
        /**
         * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column's own type: `?is_default=true` comes back as `"true"`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
         */
        filter?: MarketLocaleFilter;
        /**
         * The locales of a market on this page, in `order` — by `position` ascending unless the call asked otherwise.
         */
        items?: MarketLocale[];
        /**
         * Where in the result set this answer sits. `limit` and `offset` are the values that were APPLIED, not the ones that were asked for — the data plane clamps rather than refuses, so an out-of-range or unparseable value comes back corrected here instead of as a 400.
         */
        page?: MarketsPage;
    }

    /**
     * How this tenant keys its translations, resolved rather than named: the key a client WRITES and the order it READS, per locale. Emitting the resolved answer is the point — a client handed only the setting names re-implements the policy and gets it subtly different, which is how a label editor came to ask for de-DE while the row held de.
     */
    export type MarketLocalePolicy = {
        /**
         * settings#locale_fallback — what a read tries after the exact key holds nothing.
         */
        fallback?: MarketLocaleFallback;
        /**
         * settings#locale_granularity — whether a value is keyed by the full locale ('regional') or by its language alone.
         */
        granularity?: MarketLocaleGranularity;
        /**
         * One entry per locale this market registers, in position order — the keys to use for that locale. A market with no locale of its own has an empty array here, not the fallback: the fallback answers `default_locale`, and there is nothing to key against.
         */
        locales?: MarketLocaleKeys[];
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type MarketLocaleUpdateRequest = {
        /**
         * Locale code, language-COUNTRY — the language a storefront renders this market in, and the key a translation is stored under. Unique per market. The app's own seeded value is the tenant's `fallback_locale` setting, whose declared default is de-DE.
         */
        code?: string;
        /**
         * ISO 3166-1 alpha-2 country code — the region half of `code`. It is a spelling of the language, not a shipping destination: a market may register de-AT without trading in Austria.
         */
        country?: string;
        /**
         * The locale a storefront renders this market in when the request asks for none. At most one per market; where none carries the flag the first by position is used, and `default_locale.source` on the context says which of the two happened.
         */
        is_default?: boolean;
        /**
         * ISO 639-1 language code — the language half of `code`, stored separately so a client can group markets by language without parsing.
         */
        language?: string;
        /**
         * Sort position among this market's locales, ascending, default 0 — and the tie-break that picks a default when no locale is flagged.
         */
        position?: number;
    }

    /**
     * No payload — send {}. Which market is promoted comes from the path, and there is nothing else to say.
     */
    export type MarketMakeDefaultRequest = {
    }

    /**
     * The market as it now stands, plus what had to move out of its way.
     */
    export type MarketMakeDefaultResponse = {
        /**
         * Codes of the markets that lost the flag. Empty when this market already held it — the call is idempotent and writes nothing on a repeat, so an empty array is a success, not a no-op that failed.
         */
        demoted?: string[];
        /**
         * A distinct business context within a tenant — a country, a region, or a storefront segment such as B2C vs B2B — with its own base currency, locales, traded currencies and tax classes. A market is also the platform's `market` SCOPE dimension: every other commerce app slices its data by one, keyed on this row's `code`. A market is never just this row: it needs at least one locale, one currency and one tax class before it can serve, which is what /readiness measures and what /clone and /backfill build.
         */
        market?: Market;
    }

    /**
     * Whether a stored price in this market is NET or GROSS — the market layer of an answer the prices app also holds. A price list&#039;s own tax_basis wins over this; `tax_basis: null` with `source: &#039;unset&#039;` means this market declares nothing and the reader must fall through to the tenant&#039;s own default.
     */
    export type MarketPricing = {
        /**
         * The raw `prices_include_tax` setting resolved for this market. Null means the market declares nothing — it is NOT a false, and turning it into one is the bug this key exists to prevent.
         */
        prices_include_tax?: boolean | null;
        /**
         * Where the value came from. 'market' — configured on this market. 'tenant' — the market holds no value of its own and the tenant baseline answered. 'unset' — nothing is configured anywhere in this app, and the reader must fall through to the prices app's tax_inclusive_default.
         */
        source?: MarketPricingSource;
        /**
         * The same answer in the prices app's own vocabulary, so the two halves of the platform use one word: 'gross' means a stored price already contains tax, 'net' means tax is added on top. Null means fall through to the tenant's own default.
         */
        tax_basis?: MarketTaxBasis;
    }

    /**
     * Can this market actually trade? `ready` is false only when a BLOCKING check failed — no currency to quote in, no tax class to tax with. Warnings are degraded-but-serviceable.
     */
    export type MarketReadiness = {
        /**
         * Ids of the checks that failed BLOCKING — the market cannot do the job at all until each is fixed. Empty exactly when `ready` is true.
         */
        blocking?: string[];
        /**
         * Every check that ran, passed or failed, in a fixed order: locales, currencies, tax_classes, tax_basis. `blocking` and `warnings` are the failures from this list by id; this is where the reason lives.
         */
        checks?: MarketReadinessCheck[];
        /**
         * `blocking` is empty. Deliberately not "every check passed": a market with one locale and no default flag on it is serviceable, and a verdict that cried wolf about that would be ignored on the day it mattered.
         */
        ready?: boolean;
        /**
         * true when the market's status is 'active'. An active market that is not ready is live and broken — that combination is the one worth an alert.
         */
        serving?: boolean;
        /**
         * Ids of the checks that failed as WARNINGS — degraded but serviceable, because something else covers for them. A missing locale is only a warning while the tenant declares a fallback_locale.
         */
        warnings?: string[];
    }

    /**
     * One question asked of the market, its verdict, and how much the answer costs.
     */
    export type MarketReadinessCheck = {
        /**
         * One sentence naming what was found and, for a warning, what covers for it.
         */
        detail?: string;
        /**
         * Which question. 'locales' — is there a language to render in? 'currencies' — is the base currency registered and marked default? 'tax_classes' — is there a rate to tax with? 'tax_basis' — informational, restating whether stored prices are gross or net.
         */
        id?: MarketReadinessCheckId;
        /**
         * Whether this check passed. A false with severity `info` cannot occur — the informational check always passes.
         */
        ok?: boolean;
        /**
         * What a failure costs. 'blocking' — the market cannot trade. 'warning' — degraded but serviceable, and `detail` names what covers for it. 'info' — a fact worth reporting that is never a failure. The severity is not fixed per check: no locales is blocking without a tenant fallback_locale and a warning with one.
         */
        severity?: MarketReadinessSeverity;
    }

    /**
     * How much of a market this market actually is. All three at zero is a market that is a row and nothing else — the state two of the three live markets on the platform were left in, and the reason /clone and /backfill exist.
     */
    export type MarketReadinessCounts = {
        /**
         * Traded currencies registered on this market.
         */
        currencies?: number;
        /**
         * Locales registered on this market.
         */
        locales?: number;
        /**
         * Tax classes registered on this market.
         */
        tax_classes?: number;
    }

    /**
     * Can this market actually trade? `ready` is false only when a BLOCKING check failed — no currency to quote in, no tax class to tax with. Warnings are degraded-but-serviceable. The market it is about, what it is made of, and the verdict — the readiness block is inlined here rather than nested, so this is MarketReadiness plus two keys.
     */
    export type MarketReadinessReport = {
        /**
         * Ids of the checks that failed BLOCKING — the market cannot do the job at all until each is fixed. Empty exactly when `ready` is true.
         */
        blocking?: string[];
        /**
         * Every check that ran, passed or failed, in a fixed order: locales, currencies, tax_classes, tax_basis. `blocking` and `warnings` are the failures from this list by id; this is where the reason lives.
         */
        checks?: MarketReadinessCheck[];
        /**
         * How much of a market this market actually is. All three at zero is a market that is a row and nothing else — the state two of the three live markets on the platform were left in, and the reason /clone and /backfill exist.
         */
        counts?: MarketReadinessCounts;
        /**
         * The market the verdict is about, identified rather than returned in full — the five columns a reader needs to know which market answered. Read GET /markets/{id} for the rest.
         */
        market?: MarketReadinessSubject;
        /**
         * `blocking` is empty. Deliberately not "every check passed": a market with one locale and no default flag on it is serviceable, and a verdict that cried wolf about that would be ignored on the day it mattered.
         */
        ready?: boolean;
        /**
         * true when the market's status is 'active'. An active market that is not ready is live and broken — that combination is the one worth an alert.
         */
        serving?: boolean;
        /**
         * Ids of the checks that failed as WARNINGS — degraded but serviceable, because something else covers for them. A missing locale is only a warning while the tenant declares a fallback_locale.
         */
        warnings?: string[];
    }

    /**
     * The market the verdict is about, identified rather than returned in full — the five columns a reader needs to know which market answered. Read GET /markets/{id} for the rest.
     */
    export type MarketReadinessSubject = {
        /**
         * Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
         */
        code?: string;
        /**
         * Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
         */
        currency?: string;
        /**
         * The market's primary key — resolved, so a call that named the market by its code gets the uuid back.
         */
        id?: string;
        /**
         * Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
         */
        name?: string;
        /**
         * Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
         */
        status?: MarketStatus;
    }

    /**
     * The market that was read from, resolved — so a caller who passed a code back gets the uuid, and one who passed a uuid gets the code the rest of the platform stores.
     */
    export type MarketRef = {
        /**
         * The source market's code — the value other apps scope by.
         */
        code?: string;
        /**
         * The source market's primary key.
         */
        id?: string;
    }

    /**
     * One rate bucket within a market — &#039;standard&#039;, &#039;reduced&#039;, &#039;zero&#039; — and the source of record for that rate across the platform. Other apps point at it by CODE, with no foreign key behind it.
     */
    export type MarketTaxClass = {
        /**
         * Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
         */
        code?: string;
        /**
         * When the tax class was created on this market. Set by the database; never writable.
         */
        created_at?: string;
        /**
         * Primary key of this tax class. The class is named by `code` everywhere else, including by other apps.
         */
        id?: string;
        /**
         * The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
         */
        is_default?: boolean;
        /**
         * Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
         */
        labels?: object | null;
        /**
         * The market this tax class belongs to. Filled from the route path on write and never read out of the body; ON DELETE CASCADE, so deleting the market deletes this row.
         */
        market_id?: string;
        /**
         * Display name of the rate bucket, in the operator's own language.
         */
        name?: string;
        /**
         * Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
         */
        position?: number;
        /**
         * Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
         */
        rate?: number;
        /**
         * When the tax class was last written. Set by the database on every update; never writable.
         */
        updated_at?: string;
    }

    /**
     * The owning market comes from the route path (&#039;market_id&#039;).
     */
    export type MarketTaxClassCreateRequest = {
        /**
         * Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
         */
        code: string;
        /**
         * The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
         */
        is_default?: boolean;
        /**
         * Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
         */
        labels?: object | null;
        /**
         * Display name of the rate bucket, in the operator's own language.
         */
        name: string;
        /**
         * Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
         */
        position?: number;
        /**
         * Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
         */
        rate?: number;
    }

    /**
     * Confirmation that the tax class of a market is gone. The row itself is not returned — read it before deleting if you need it.
     */
    export type MarketTaxClassDeleted = {
        /**
         * Always true — a row that was not there is a 404, not a false.
         */
        deleted?: boolean;
        /**
         * The id of the row that was deleted.
         */
        id?: string;
        /**
         * False when the cross-app usage question could not be asked (shipping not installed, or unreachable) — the row was deleted without that guarantee.
         */
        usage_checked?: boolean;
    }

    /**
     * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column&#039;s own type: `?is_default=true` comes back as `&quot;true&quot;`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
     */
    export type MarketTaxClassFilter = {
        /**
         * The `code` filter as it arrived, verbatim. Present only when the call sent it.
         */
        code?: string;
        /**
         * The `created_at` filter as it arrived, verbatim. Present only when the call sent it. Any form the database accepts as a timestamp, including a bare date.
         */
        created_at?: string;
        /**
         * The `id` filter as it arrived, verbatim. Present only when the call sent it.
         */
        id?: string;
        /**
         * The `is_default` filter as it arrived, verbatim. Present only when the call sent it.
         */
        is_default?: string;
        /**
         * The `labels` filter as it arrived, verbatim. Present only when the call sent it.
         */
        labels?: string;
        /**
         * The owning market, taken from the route path. ALWAYS present, and always the path's market — a `?market_id=` in the query is overwritten by it rather than honoured, so this is never the value a caller sent.
         */
        market_id?: string;
        /**
         * The `name` filter as it arrived, verbatim. Present only when the call sent it.
         */
        name?: string;
        /**
         * The `position` filter as it arrived, verbatim. Present only when the call sent it.
         */
        position?: string;
        /**
         * The `rate` filter as it arrived, verbatim. Present only when the call sent it.
         */
        rate?: string;
        /**
         * The `updated_at` filter as it arrived, verbatim. Present only when the call sent it. Any form the database accepts as a timestamp, including a bare date.
         */
        updated_at?: string;
    }

    /**
     * One page of tax classes of a market, the page it sits on, and the filters that produced it.
     */
    export type MarketTaxClassList = {
        /**
         * The exact-column filters this call applied, echoed back. Every value is the raw query string, never the column's own type: `?is_default=true` comes back as `"true"`. A `?column=value` naming a column this entity does not have is DROPPED rather than refused — the call answers 200 with the unfiltered list, and the key missing from here is the only way to find out.
         */
        filter?: MarketTaxClassFilter;
        /**
         * The tax classes of a market on this page, in `order` — by `position` ascending unless the call asked otherwise.
         */
        items?: MarketTaxClass[];
        /**
         * Where in the result set this answer sits. `limit` and `offset` are the values that were APPLIED, not the ones that were asked for — the data plane clamps rather than refuses, so an out-of-range or unparseable value comes back corrected here instead of as a 400.
         */
        page?: MarketsPage;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type MarketTaxClassUpdateRequest = {
        /**
         * Tax class code, unique per market — the rate bucket a product or a shipping method is assigned to ('standard', 'reduced', 'zero'). Other apps name a class by THIS and by nothing else: there is no foreign key behind it and there cannot be (ADR-0055), which is why the delete route asks the shipping app what still points at the code before removing it.
         */
        code?: string;
        /**
         * The class applied to a line that names none. At most one per market. A market that stores GROSS prices and marks no default cannot break those prices back down into net, which is why readiness turns that combination from a warning into a blocking failure.
         */
        is_default?: boolean;
        /**
         * Localized display names for storefronts and invoices, keyed by locale: a flat {locale: label} map, one level deep, string values. The key to write is the `locale_policy.write` from GET /markets/{id}/context, exactly as for a market's labels. Null means nothing is translated and `name` is all there is.
         */
        labels?: object | null;
        /**
         * Display name of the rate bucket, in the operator's own language.
         */
        name?: string;
        /**
         * Sort position among this market's tax classes, ascending, default 0 — and the tie-break that picks a class when none is flagged default.
         */
        position?: number;
        /**
         * Tax rate in PERCENT, 0–100 (default 0) — 20 means 20 %, not 0.2. Whether a stored price already contains it is a separate question, answered per market by `pricing.tax_basis` on the context.
         */
        rate?: number;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type MarketUpdateRequest = {
        /**
         * Market code, unique per tenant, and the single most load-bearing string in this app: it IS the market scope slug. The Entity Scoping Engine publishes it as the `market` dimension (`scope_context.market` in the JWT), and every other commerce app — products, prices, orders, customers — stores THIS value to say which market a row belongs to. Renaming it re-keys that scope for everyone, so treat it as permanent. Accepted in place of the uuid on /readiness, /clone, /backfill and /make-default — but not on the item routes or /context, which take a uuid only.
         */
        code?: string;
        /**
         * Base currency this market quotes in — ISO 4217, and schema.json's own default is 'EUR'. This is the single currency prices are STATED in; the currencies collection under the market is the wider set it accepts. A base currency missing from that collection is a blocking readiness failure.
         */
        currency?: string;
        /**
         * The tenant default market — what a call naming no market falls back to. Exactly one market holds it; move it with POST /markets/{id}/make-default rather than by writing this flag, which does not demote the market that currently holds it.
         */
        is_default?: boolean;
        /**
         * Localized display names for storefronts, keyed by locale: a flat {locale: label} map, one level deep, string values. WHICH key to write is not free — GET /markets/{id}/context returns `locale_policy`, whose `write` is the key this tenant keys by (a full locale under regional granularity, a bare language under language granularity) and whose `read` is the order to try. Null means nothing is translated and `name` is all there is.
         */
        labels?: object | null;
        /**
         * Display name, in the operator's own language. Cockpit copy only — nothing resolves a market by it.
         */
        name?: string;
        /**
         * Sort position among the tenant's markets, ascending, default 0. Presentation only — it decides the order the Cockpit and a market picker list them in, and nothing resolves a market by it.
         */
        position?: number;
        /**
         * Default 'active'. Only an active market serves a storefront; 'inactive' keeps the market and all its configuration but takes it out of service. Readiness reports an active market that cannot trade as `serving: true, ready: false` — live and broken.
         */
        status?: MarketStatus;
    }

    /**
     * Where in the result set this answer sits. `limit` and `offset` are the values that were APPLIED, not the ones that were asked for — the data plane clamps rather than refuses, so an out-of-range or unparseable value comes back corrected here instead of as a 400.
     */
    export type MarketsPage = {
        /**
         * True when `offset + returned < total`, i.e. another page exists. Cheaper to branch on than comparing the three numbers yourself.
         */
        hasMore?: boolean;
        /**
         * Page size actually applied. A request over 200 is clamped to 200, one under 1 (or one that is not a number) to the 50-row default.
         */
        limit?: number;
        /**
         * Row offset actually applied. A negative offset is clamped to 0.
         */
        offset?: number;
        /**
         * Rows in `items` on this page. Lower than `limit` on the last page.
         */
        returned?: number;
        /**
         * Rows matching the filter across ALL pages, ignoring limit and offset — the number to paginate against.
         */
        total?: number;
    }

    /**
     * One closed value set this app owns, parsed out of the CHECK constraint in schema.json — the served set IS the enforced set. `closed: true` means a client may treat anything outside `values` as stale data.
     */
    export type MarketsVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Always true here: the values come from a CHECK constraint, so the list is exhaustive.
         */
        closed?: boolean;
        /**
         * The tone a value that carries none falls back to.
         */
        default_tone?: MarketsVocabularyTone;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        description?: string;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: MarketsVocabularyName;
        /**
         * Where the values came from. 'schema' = a CHECK constraint in this app's own schema.json.
         */
        source?: MarketsVocabularySource;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        title?: string;
        /**
         * Every value the column may hold, in the order the CHECK constraint lists them — which is the order a select box should offer them in. Exhaustive, because `closed` is true.
         */
        values?: MarketsVocabularyValue[];
    }

    /**
     * Every closed value set this app owns, by name — enough to build a menu of them without fetching each one.
     */
    export type MarketsVocabularyIndex = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, named and titled but without its values — fetch one by name for those.
         */
        vocabularies?: MarketsVocabularySummary[];
    }

    /**
     * One vocabulary, enough to list it in a menu.
     */
    export type MarketsVocabularySummary = {
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        description?: string;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: MarketsVocabularySummaryName;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        title?: string;
    }

    /**
     * One permitted value, with the copy and the badge tone a client renders it as.
     */
    export type MarketsVocabularyValue = {
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        description?: string;
        /**
         * A terminal state nothing moves out of.
         */
        final?: boolean;
        /**
         * The value as stored in the column.
         */
        key?: string;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        title?: string;
        /**
         * Semantic badge tone — the client decides what it looks like.
         */
        tone?: MarketsVocabularyTone;
    }

    /**
     * 
     */
    export type MeasurementFamilies = {
        /**
         * The measurement family's stable identifier. A `measure` attribute names one and then offers that family's units.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * What the measurement family is called, per language tag.
         */
        labels?: object | null;
        /**
         * The unit every value of this family is converted to before it is compared or sorted — the unit each `convert_factor` is relative to.
         */
        standard_unit?: string;
        /**
         * The units this family offers. `convert_factor` multiplies a value into `standard_unit`, so a gram is 0.001 kilograms; `symbol` is what a form prints next to the number.
         */
        units?: object | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type MeasurementFamiliesCreateRequest = {
        /**
         * The measurement family's stable identifier. A `measure` attribute names one and then offers that family's units.
         */
        code: string;
        /**
         * What the measurement family is called, per language tag.
         */
        labels?: object | null;
        /**
         * The unit every value of this family is converted to before it is compared or sorted — the unit each `convert_factor` is relative to.
         */
        standard_unit: string;
        /**
         * The units this family offers. `convert_factor` multiplies a value into `standard_unit`, so a gram is 0.001 kilograms; `symbol` is what a form prints next to the number.
         */
        units?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `measurement_families` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type MeasurementFamiliesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?standard_unit=` value this call was understood to carry.
         */
        standard_unit?: string;
        /**
         * The literal `?units=` value this call was understood to carry.
         */
        units?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultMeasurementFamiliesFilter = MeasurementFamiliesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type MeasurementFamiliesUpdateRequest = {
        /**
         * The measurement family's stable identifier. A `measure` attribute names one and then offers that family's units.
         */
        code?: string;
        /**
         * What the measurement family is called, per language tag.
         */
        labels?: object | null;
        /**
         * The unit every value of this family is converted to before it is compared or sorted — the unit each `convert_factor` is relative to.
         */
        standard_unit?: string;
        /**
         * The units this family offers. `convert_factor` multiplies a value into `standard_unit`, so a gram is 0.001 kilograms; `symbol` is what a form prints next to the number.
         */
        units?: object | null;
    }

    /**
     * One navigation menu of the tenant, addressed by the stable key a theme looks it up under.
     */
    export type Menu<PageMenuItem extends Models.PageMenuItem = Models.DefaultPageMenuItem> = {
        /**
         * When the menu was created.
         */
        created_at?: string;
        /**
         * The user id that created the menu.
         */
        created_by?: string | null;
        /**
         * The tombstone. A soft-deleted menu disappears from the renderer immediately.
         */
        deleted_at?: string | null;
        /**
         * The menu row id. Used by the management routes; the renderer addresses a menu by its `menu_key` instead, because that is the thing a theme hard-codes.
         */
        id?: string;
        /**
         * The ordered navigation tree itself. Stored exactly as it was sent, so the theme and the editor agree on the shape without this app enforcing one.
         */
        items?: PageMenuItem[];
        /**
         * What this menu is called for the people who edit it. Never rendered in the storefront.
         */
        label?: string;
        /**
         * The stable name the theme asks for a menu by — `main`, `footer`, `account`. It is what makes seeding idempotent and what a header component looks up; renaming it detaches the menu from the theme slot.
         */
        menu_key?: string;
        /**
         * When the menu was last replaced. The upsert rewrites `items` wholesale, so this is the timestamp of the whole navigation, not of one entry.
         */
        updated_at?: string;
    }

    /**
     * Partial update — omitted fields keep their current value. `items` is replaced wholesale when sent.
     */
    export type MenuUpdateRequest<PageMenuItem extends Models.PageMenuItem = Models.DefaultPageMenuItem> = {
        /**
         * The ordered navigation tree. Replaces the stored one completely.
         */
        items?: PageMenuItem[];
        /**
         * What this menu is called for the people who edit it.
         */
        label?: string;
    }

    /**
     * Create or replace the menu identified by menuKey (idempotent per tenant). `items` is written wholesale — there is no per-entry edit, so send the whole tree every time.
     */
    export type MenuUpsertRequest<PageMenuItem extends Models.PageMenuItem = Models.DefaultPageMenuItem> = {
        /**
         * The ordered navigation tree. Replaces the stored one completely.
         */
        items?: PageMenuItem[];
        /**
         * What this menu is called for the people who edit it. Required on a create; an update keeps the label it had when this is left out.
         */
        label: string;
        /**
         * The stable slot the theme asks for this menu by. Idempotency is keyed on it: sending an existing key replaces that menu instead of creating a second one.
         */
        menuKey: string;
    }

    /**
     * 
     */
    export type Message = {
        /**
         * 
         */
        attachments: any[] | null;
        /**
         * 
         */
        attempts: number;
        /**
         * 
         */
        binding_id: string | null;
        /**
         * 
         */
        channel: string;
        /**
         * 
         */
        click_count: number;
        /**
         * 
         */
        clicked_at: string | null;
        /**
         * 
         */
        created_at: string;
        /**
         * 
         */
        data: any[] | null;
        /**
         * 
         */
        delivered_at: string | null;
        /**
         * 
         */
        error: string | null;
        /**
         * 
         */
        from_draft: boolean;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        idempotency_fingerprint: string | null;
        /**
         * 
         */
        idempotency_key: string | null;
        /**
         * 
         */
        locale: string | null;
        /**
         * 
         */
        market: string | null;
        /**
         * 
         */
        message_class: string;
        /**
         * 
         */
        open_count: number;
        /**
         * 
         */
        opened_at: string | null;
        /**
         * 
         */
        provider_message_id: string | null;
        /**
         * 
         */
        scheduled_for: string | null;
        /**
         * 
         */
        sent_at: string | null;
        /**
         * 
         */
        source_event_id: string | null;
        /**
         * 
         */
        status: string;
        /**
         * 
         */
        subject: string | null;
        /**
         * 
         */
        suppression_reason: string | null;
        /**
         * 
         */
        template_key: string | null;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        to: string;
    }

    /**
     * One search inside a federated request. `collection_name` is required on the gateway-trust path; with a `revx_` key it is optional and is forced to the key&#039;s own collection.
     */
    export type MultiSearchEntry = {
        /**
         * A collection the tenant owns.
         */
        collection_name?: string;
        /**
         * Comma-separated document fields to omit.
         */
        exclude_fields?: string;
        /**
         * Comma-separated fields to facet on.
         */
        facet_by?: string;
        /**
         * Filter expression, e.g. `in_stock:=true && price:<100`. ANDed with the tenant filter the proxy injects.
         */
        filter_by?: string;
        /**
         * Comma-separated fields to group results by.
         */
        group_by?: string;
        /**
         * Comma-separated fields to highlight in full.
         */
        highlight_full_fields?: string;
        /**
         * Comma-separated document fields to return.
         */
        include_fields?: string;
        /**
         * Facet values to return per field.
         */
        max_facet_values?: number;
        /**
         * Typos tolerated per query token.
         */
        num_typos?: number;
        /**
         * 1-based page number.
         */
        page?: number;
        /**
         * Hits per page.
         */
        per_page?: number;
        /**
         * Whether the last token is a prefix; per-field when comma-separated.
         */
        prefix?: string;
        /**
         * Query text. Use `*` to match everything.
         */
        q?: string;
        /**
         * Comma-separated fields to search, in weight order.
         */
        query_by?: string;
        /**
         * Sort expression, e.g. `price:desc`.
         */
        sort_by?: string;
    }

    export type DefaultMultiSearchEntry = MultiSearchEntry & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Envelope for a federated search. Top-level search parameters outside `searches` are forwarded to Typesense unchanged and act as defaults for every entry.
     */
    export type MultiSearchRequest<MultiSearchEntry extends Models.MultiSearchEntry = Models.DefaultMultiSearchEntry> = {
        /**
         * The searches to run, in order. Must not be empty.
         */
        searches: MultiSearchEntry[];
    }

    export type DefaultMultiSearchRequest<MultiSearchEntry extends Models.MultiSearchEntry = Models.DefaultMultiSearchEntry> = MultiSearchRequest<MultiSearchEntry> & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type MultiSearchResult<SearchResult extends Models.SearchResult = Models.DefaultSearchResult, FacetCount extends Models.FacetCount = Models.DefaultFacetCount, SearchHit extends Models.SearchHit = Models.DefaultSearchHit> = {
        /**
         * One result per entry in `searches`, in the same order.
         */
        results: SearchResult[];
    }

    /**
     * One change to the page.
     */
    export type MutationRequest = {
        /**
         * Which language the returned state should be resolved for. Not the language the change is written in — that lives in the payload.
         */
        langcode?: string | null;
        /**
         * The arguments of that change; the keys depend on the plugin (`add` takes `{ bundle, hostEntityType, hostEntityUuid, hostField }`, `move` takes `{ uuid, preceedingUuid }`, and so on). Anything non-deterministic in it — new uuids, a library item's tree, a copied subtree — is resolved once here and stored, so replaying the log is deterministic forever.
         */
        payload?: object | null;
        /**
         * Which kind of change this is — `add`, `move`, `delete`, `duplicate`, `update_field_value`, `update_options`, … An id this app does not implement is refused with 400 rather than stored, because the log has to replay.
         */
        plugin: string;
    }

    /**
     * blökkli MutationResponseLike: whether the call was applied, plus the FULL re-materialized editor state — so a client never has to re-fetch after a change.
     */
    export type MutationResponse = {
        /**
         * Everything the blökkli editor runs on, for one page in one language, materialized at the current point of the undo history. The theme adapter maps it 1:1 onto blökkli's MappedState.
         */
        state?: EditorState;
        /**
         * Whether the change was applied.
         */
        success?: boolean;
        /**
         * Why the call was refused, when `success` is false.
         */
        violations?: object[];
    }

    /**
     * A counter that issues human-readable numbers, one per series: orders, delivery notes, returns. The format is {prefix}{counter padded to padding}{suffix}, and drawing a number moves the counter.
     */
    export type NumberRange = {
        /**
         * The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
         */
        channel_id?: string | null;
        /**
         * Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
         */
        code?: string;
        /**
         * The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409).
         */
        counter?: number;
        /**
         * When the range was created.
         */
        created_at?: string;
        /**
         * Primary key of the number range.
         */
        id?: string;
        /**
         * Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
         */
        metadata?: object | null;
        /**
         * How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn.
         */
        padding?: number;
        /**
         * The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only.
         */
        position_step?: number;
        /**
         * Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default.
         */
        prefix?: string;
        /**
         * How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice.
         */
        step?: number;
        /**
         * Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use.
         */
        suffix?: string;
        /**
         * When the range last changed — which includes every single number draw, because a draw writes the counter.
         */
        updated_at?: string;
    }

    /**
     * An ORDER as it was placed: a snapshot. Buyer, addresses, payment and shipping are frozen copies, the totals were computed here, and three independent dimensions say where it stands — status (lifecycle), payment_status (fed from outside) and fulfillment_status (derived from the positions).
     */
    export type Order = {
        /**
         * When the fulfilling system took the order over. Written once. While it is null the order can still be modified here; afterwards modification goes through that system, unless the tenant sets allow_modification_after_acknowledge.
         */
        acknowledged_at?: string | null;
        /**
         * The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to.
         */
        billing_address?: object | null;
        /**
         * The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it.
         */
        buyer?: object | null;
        /**
         * When the order was cancelled, whether by a full cancel or by the last open quantity being cancelled position by position. Null otherwise.
         */
        cancelled_at?: string | null;
        /**
         * The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created.
         */
        cart_id?: string | null;
        /**
         * The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
         */
        channel_id?: string | null;
        /**
         * When the order was closed — by a full shipment, by payment or by hand, depending on the tenant's auto_complete_on. Null until then.
         */
        completed_at?: string | null;
        /**
         * The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout.
         */
        contact_id?: string | null;
        /**
         * When the order row was written. For a placed order this is placed_at; for a requested one it is when the request was submitted.
         */
        created_at?: string;
        /**
         * ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting.
         */
        currency?: string;
        /**
         * The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
         */
        customer_order_number?: string | null;
        /**
         * The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it.
         */
        external_ref?: string | null;
        /**
         * Whether the order has SHIPPED, and the one dimension nobody writes: it is DERIVED after every quantity change from the positions' own bookkeeping. 'fulfilled' means shipped >= ordered − cancelled across all positions, 'partial' means something went out. Sending it has no effect; ship, cancel or return something and it moves.
         */
        fulfillment_status?: OrderFulfillmentStatus;
        /**
         * What the buyer owes: subtotal + shipping_total + tax_total, COMPUTED by this app and NEVER taken from the caller — trusting a supplied total is how inconsistent orders happened. This is the number the approval threshold is compared against and the number the revenue rollup sums.
         */
        grand_total?: number;
        /**
         * Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
         */
        hold_reason?: string | null;
        /**
         * Primary key of the order, and the id every other route takes. Not the order number.
         */
        id?: string;
        /**
         * The summed ORDERED quantity over all positions, rounded to a whole number — a headline figure for a list, computed once at place-time. It is deliberately not reduced when something is cancelled or returned; the positions carry that arithmetic.
         */
        item_count?: number;
        /**
         * Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it.
         */
        metadata?: object | null;
        /**
         * The order number a human quotes — drawn from the tenant's order range at place-time, unique per tenant and never reused. It is NOT the id: every route addresses an order by uuid, and GET /orders?number=… is how a number becomes one.
         */
        number?: string;
        /**
         * A business stop, ORTHOGONAL to status: a held order keeps its lifecycle state and is refused at the guards. How far the hold reaches is the tenant's call (on_hold_blocks: shipping only, shipping and cancellation, or nothing at all).
         */
        on_hold?: boolean;
        /**
         * The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it.
         */
        organization_id?: string | null;
        /**
         * The payment arrangement as it was chosen, FROZEN. This app reads exactly two keys and stores the rest untouched: 'status' seeds payment_status at place-time when it names one of the permitted values (anything else is ignored and the order starts 'open'), and 'payment_id' is merged in by POST /orders/{id}/payment-status. The method itself, its provider fields and any redirect state belong to the payments app.
         */
        payment?: object | null;
        /**
         * Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
         */
        payment_status?: OrderPaymentStatus;
        /**
         * When the order was PLACED. Null while it is pending approval: an order awaiting sign-off exists but was never placed, and that is exactly the difference this field records.
         */
        placed_at?: string | null;
        /**
         * The shipping arrangement as it was chosen, FROZEN. Two keys are READ at place-time and feed the totals: 'price' becomes shipping_total (the shipping_total field is only the fallback when this is absent) and 'tax_rate' is what shipping is taxed at, because shipping is a Nebenleistung and is taxed too. Everything else — the carrier product, the delivery window, the pickup point — is stored untouched and belongs to the shipping app.
         */
        shipping?: object | null;
        /**
         * The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection).
         */
        shipping_address?: object | null;
        /**
         * NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`.
         */
        shipping_total?: number;
        /**
         * Where the order stands in its LIFECYCLE, and one of three independent status dimensions. 'pending' = created but not placed, an order waiting for approval; 'placed' = accepted, nothing shipped; 'in_fulfillment' = part of it has gone out, or all of it has and the tenant does not close on shipment; 'completed' and 'cancelled' end it. Moved by the action routes only — it is not writable through PUT /orders/{id}.
         */
        status?: OrderStatus;
        /**
         * NET total of the positions (the sum of their line_total), COMPUTED here at place-time. In `currency`, four decimal places. A caller cannot set it.
         */
        subtotal?: number;
        /**
         * All tax on this order: the positions' tax_amount plus the tax on shipping (shipping_total × shipping.tax_rate). COMPUTED here — a caller cannot set it.
         */
        tax_total?: number;
        /**
         * When any column of the order last changed — every status move, every re-derived fulfillment, every modification.
         */
        updated_at?: string;
        /**
         * Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change.
         */
        user_data?: object | null;
    }

    /**
     * The acknowledgement carries one field, and it is optional: sending {} still stamps acknowledged_at, which is the point of the call. acknowledged_at is the server&#039;s clock and is never taken from the body.
     */
    export type OrderAcknowledgeRequest = {
        /**
         * The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it. Keeps the existing value when omitted.
         */
        external_ref?: string;
    }

    /**
     * A position quantity to cancel — guarded against the open (unshipped, uncancelled) quantity.
     */
    export type OrderCancelPosition = {
        /**
         * The order item (position) to act on. Read the ids from GET /orders/{id} (items[].id) or GET /orders/{id}/shippable (positions[].order_item_id) — an id this order does not carry is a 400.
         */
        order_item_id: string;
        /**
         * Defaults to the full remaining quantity of the position.
         */
        quantity?: number;
    }

    /**
     * Cancels the WHOLE order, and only while nothing has shipped. Both fields are optional unless the tenant requires a reason.
     */
    export type OrderCancelRequest = {
        /**
         * Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
         */
        cancelled_by?: string;
        /**
         * Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
         */
        reason?: string;
    }

    /**
     * A record of what was taken off an order and why — either the whole order (while nothing had shipped) or named quantities off a partly shipped one.
     */
    export type OrderCancellation = {
        /**
         * Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
         */
        cancelled_by?: string | null;
        /**
         * When the cancellation was recorded.
         */
        created_at?: string;
        /**
         * Primary key of the cancellation record.
         */
        id?: string;
        /**
         * The order that was cancelled from.
         */
        order_id?: string;
        /**
         * What this record removed. A scope 'order' record carries every position in full; a scope 'items' record carries exactly the quantities that were named.
         */
        positions?: OrderCancellationPosition[];
        /**
         * Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
         */
        reason?: string | null;
        /**
         * Which of the two cancellations this was: 'order' is the full cancel (only possible while nothing has shipped, and it cancels every position in full), 'items' is the quantity-based one that takes open quantities off a partly shipped order.
         */
        scope?: OrderCancellationScope;
    }

    /**
     * One position quantity this cancellation removed.
     */
    export type OrderCancellationPosition = {
        /**
         * The order item this quantity was booked against — an id out of the same order, never another one.
         */
        order_item_id?: string;
        /**
         * The quantity booked on that position, in the position's own unit. Three decimal places, so 0.5 m of cable is a real booking.
         */
        quantity?: number;
    }

    /**
     * A note on an order, either internal between operators or meant for the customer to see.
     */
    export type OrderComment = {
        /**
         * Who wrote it, as the caller reported it. Free text; not resolved against a user directory.
         */
        author?: string | null;
        /**
         * The comment itself. Plain text; this app neither renders nor sanitizes it.
         */
        body?: string;
        /**
         * When the comment was written. Comments come back oldest first.
         */
        created_at?: string;
        /**
         * Primary key of the comment.
         */
        id?: string;
        /**
         * The order the comment hangs on.
         */
        order_id?: string;
        /**
         * Who may see it: 'internal' is a note between operators, 'customer' is meant to be shown in the customer's order view. Nothing here enforces that — this app labels the comment and the client showing it decides. Defaults to the tenant's default_comment_visibility.
         */
        visibility?: OrderCommentVisibility;
    }

    /**
     * 
     */
    export type OrderCommentCreateRequest = {
        /**
         * Who wrote it, as the caller reported it. Free text; not resolved against a user directory.
         */
        author?: string;
        /**
         * The comment itself. Plain text; this app neither renders nor sanitizes it.
         */
        body: string;
        /**
         * Who may see it: 'internal' is a note between operators, 'customer' is meant to be shown in the customer's order view. Nothing here enforces that — this app labels the comment and the client showing it decides. Defaults to the tenant's default_comment_visibility. Defaults to the tenant's default_comment_visibility setting, which is 'internal' out of the box.
         */
        visibility?: OrderCommentVisibility;
    }

    /**
     * No required fields — send {}.
     */
    export type OrderCompleteRequest = {
        /**
         * Who closed the order, as the caller reports it. Not stored on the order: it is carried in the order.completed event's payload, which is where the audit trail keeps who did what. Free text, not resolved against a user directory.
         */
        completed_by?: string;
    }

    /**
     * Additive order facts for one organization. Average order value is revenue_total / order_count.
     */
    export type OrderCustomerRollup = {
        /**
         * Every currency seen on the counted orders, sorted. MORE THAN ONE MEANS THE SUMS MIX CURRENCIES — nothing here converts, so a two-currency row's revenue_total is a sum of unlike numbers and should be shown per currency or not at all.
         */
        currencies?: string[];
        /**
         * When this company first ordered — placed_at where there is one, otherwise created_at. Null cannot happen on a row that exists, but the field is nullable because the columns behind it are.
         */
        first_order_at?: string | null;
        /**
         * When they last ordered. Together with as_of this is the recency a churn rule reads.
         */
        last_order_at?: string | null;
        /**
         * How many orders of this company were counted — orders in one of the counted statuses, over all time.
         */
        order_count?: number;
        /**
         * Orders in the 30 days before as_of.
         */
        order_count_30d?: number;
        /**
         * Orders in the 365 days before as_of — the rolling year a "still active" rule usually asks about.
         */
        order_count_365d?: number;
        /**
         * Orders in the 90 days before as_of.
         */
        order_count_90d?: number;
        /**
         * The company these facts belong to — the id the customers app knows it by. Every row of the answer carries one; orders without an organization are counted in orders_without_organization instead.
         */
        organization_id?: string;
        /**
         * Revenue in the 30 days before as_of.
         */
        revenue_30d?: number;
        /**
         * Revenue in the 365 days before as_of.
         */
        revenue_365d?: number;
        /**
         * Revenue in the 90 days before as_of.
         */
        revenue_90d?: number;
        /**
         * Sum of grand_total over the counted orders. Gross: it includes tax and shipping, because grand_total does.
         */
        revenue_total?: number;
    }

    /**
     * Aggregate orders per organization. Send organization_ids to answer for a known batch; omit them to scan every attributable order. Both forms are paged and time-budgeted the same way — read `done` before treating any answer as complete.
     */
    export type OrderCustomerRollupRequest = {
        /**
         * Anchor for the rolling windows (default now). Pin it and send it back on every call of a loop, otherwise the windows drift by the duration of the loop.
         */
        as_of?: string | null;
        /**
         * Continue an unfinished scan: the exact value the previous call returned, which is the id of the last order it read. Do not construct one — it is a resume point, not an offset. Omit it on the first call. It is honoured in BOTH call shapes, organization_ids included: send the whole batch again alongside it whenever `done` came back false, or the part of the batch after the cursor is simply never read.
         */
        cursor?: string | null;
        /**
         * Roll up exactly these organizations and no others — at most 200, because the ids travel to the data plane as one in.() filter. Naming them does NOT make the answer complete by itself: the scan is the same paged, time-budgeted loop either way, so a batch with more orders than one page can still stop early with `done: false` and a cursor. Small batches finish in one call, which is the normal case, but check `done` rather than assume it. Omitted = scan every order and answer for every organization that appears on one.
         */
        organization_ids?: string[] | null;
        /**
         * Which lifecycle statuses count as revenue. Defaults to placed, in_fulfillment and completed: a pending order was never placed, and a cancelled one is not revenue. Widening this is how a merchant who books on approval gets their own definition of the same numbers.
         */
        statuses?: string[] | null;
    }

    /**
     * 
     */
    export type OrderCustomerRollupResponse = {
        /**
         * The anchor the windows were measured from — echoed so a paging caller can pin it.
         */
        as_of?: string;
        /**
         * Where to resume, when `done` is false — the id of the last order this call read. Null once the scan finished. Send it back unchanged, together with the same as_of.
         */
        cursor?: string | null;
        /**
         * True = the whole set was scanned and this answer is complete. False = the scan hit its time budget: send `cursor` back to continue, and MERGE the parts (every number is additive, min for first_order_at, max for last_order_at, union for currencies).
         */
        done?: boolean;
        /**
         * One row per organization that appeared on a counted order, sorted by id. A company with no counted order is absent — this answer does not carry zero rows.
         */
        items?: OrderCustomerRollup[];
        /**
         * How many order rows this call read, attributed or not. It is the cost of the call, and on a partial answer the size of the part.
         */
        orders_scanned?: number;
        /**
         * Orders read that carry no organization_id — private and guest orders. They are real revenue and are deliberately not attributed to anybody, so they appear here and in no row of items.
         */
        orders_without_organization?: number;
        /**
         * How many rows `items` carries. On a partial answer this counts what THIS part saw, not the whole tenant.
         */
        organizations?: number;
        /**
         * The statuses that were counted, echoed — the default set unless the request named its own.
         */
        statuses?: string[];
        /**
         * The rolling windows the *_30d / *_90d / *_365d numbers were measured over, in days. Echoed so a caller reads the numbers with the right labels instead of hard-coding three of them.
         */
        windows?: number[];
    }

    /**
     * The row is gone. Deleting is not idempotent here: a second call answers 404, because the row no longer resolves.
     */
    export type OrderDeleted = {
        /**
         * Always true — a failed delete is a status code, not a false here.
         */
        deleted?: boolean;
        /**
         * The id of the row that was deleted, echoed back.
         */
        id?: string;
    }

    /**
     * The order aggregate: every column of the order plus its items, shipments (with their booked positions), returns and cancellations.
     */
    export type OrderDetail = {
        /**
         * When the fulfilling system took the order over. Written once. While it is null the order can still be modified here; afterwards modification goes through that system, unless the tenant sets allow_modification_after_acknowledge.
         */
        acknowledged_at?: string | null;
        /**
         * The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to.
         */
        billing_address?: object | null;
        /**
         * The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it.
         */
        buyer?: object | null;
        /**
         * What was taken off the order, oldest first — one record per cancel call, whether it emptied the order or removed named quantities. The order-level `cancelled_at` says when it ended; these say what happened.
         */
        cancellations?: OrderCancellation[];
        /**
         * When the order was cancelled, whether by a full cancel or by the last open quantity being cancelled position by position. Null otherwise.
         */
        cancelled_at?: string | null;
        /**
         * The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created.
         */
        cart_id?: string | null;
        /**
         * The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
         */
        channel_id?: string | null;
        /**
         * When the order was closed — by a full shipment, by payment or by hand, depending on the tenant's auto_complete_on. Null until then.
         */
        completed_at?: string | null;
        /**
         * The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout.
         */
        contact_id?: string | null;
        /**
         * When the order row was written. For a placed order this is placed_at; for a requested one it is when the request was submitted.
         */
        created_at?: string;
        /**
         * ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting.
         */
        currency?: string;
        /**
         * The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
         */
        customer_order_number?: string | null;
        /**
         * The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it.
         */
        external_ref?: string | null;
        /**
         * Whether the order has SHIPPED, and the one dimension nobody writes: it is DERIVED after every quantity change from the positions' own bookkeeping. 'fulfilled' means shipped >= ordered − cancelled across all positions, 'partial' means something went out. Sending it has no effect; ship, cancel or return something and it moves.
         */
        fulfillment_status?: OrderFulfillmentStatus;
        /**
         * What the buyer owes: subtotal + shipping_total + tax_total, COMPUTED by this app and NEVER taken from the caller — trusting a supplied total is how inconsistent orders happened. This is the number the approval threshold is compared against and the number the revenue rollup sums.
         */
        grand_total?: number;
        /**
         * Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
         */
        hold_reason?: string | null;
        /**
         * Primary key of the order, and the id every other route takes. Not the order number.
         */
        id?: string;
        /**
         * The summed ORDERED quantity over all positions, rounded to a whole number — a headline figure for a list, computed once at place-time. It is deliberately not reduced when something is cancelled or returned; the positions carry that arithmetic.
         */
        item_count?: number;
        /**
         * The positions of the order, in position order. Everything a caller does to this order names one of these by its `id`.
         */
        items?: OrderItem[];
        /**
         * Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it.
         */
        metadata?: object | null;
        /**
         * The order number a human quotes — drawn from the tenant's order range at place-time, unique per tenant and never reused. It is NOT the id: every route addresses an order by uuid, and GET /orders?number=… is how a number becomes one.
         */
        number?: string;
        /**
         * A business stop, ORTHOGONAL to status: a held order keeps its lifecycle state and is refused at the guards. How far the hold reaches is the tenant's call (on_hold_blocks: shipping only, shipping and cancellation, or nothing at all).
         */
        on_hold?: boolean;
        /**
         * The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it.
         */
        organization_id?: string | null;
        /**
         * The payment arrangement as it was chosen, FROZEN. This app reads exactly two keys and stores the rest untouched: 'status' seeds payment_status at place-time when it names one of the permitted values (anything else is ignored and the order starts 'open'), and 'payment_id' is merged in by POST /orders/{id}/payment-status. The method itself, its provider fields and any redirect state belong to the payments app.
         */
        payment?: object | null;
        /**
         * Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
         */
        payment_status?: OrderPaymentStatus;
        /**
         * When the order was PLACED. Null while it is pending approval: an order awaiting sign-off exists but was never placed, and that is exactly the difference this field records.
         */
        placed_at?: string | null;
        /**
         * What is coming back or has come back, oldest first, in every state including rejected. A return is registered against the SHIPPED quantities, so this list is empty on an order that never shipped.
         */
        returns?: OrderReturn[];
        /**
         * What has gone out, oldest first — each shipment with the position quantities it booked. Empty until something ships; a partial order carries several.
         */
        shipments?: OrderShipment[];
        /**
         * The shipping arrangement as it was chosen, FROZEN. Two keys are READ at place-time and feed the totals: 'price' becomes shipping_total (the shipping_total field is only the fallback when this is absent) and 'tax_rate' is what shipping is taxed at, because shipping is a Nebenleistung and is taxed too. Everything else — the carrier product, the delivery window, the pickup point — is stored untouched and belongs to the shipping app.
         */
        shipping?: object | null;
        /**
         * The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection).
         */
        shipping_address?: object | null;
        /**
         * NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`.
         */
        shipping_total?: number;
        /**
         * Where the order stands in its LIFECYCLE, and one of three independent status dimensions. 'pending' = created but not placed, an order waiting for approval; 'placed' = accepted, nothing shipped; 'in_fulfillment' = part of it has gone out, or all of it has and the tenant does not close on shipment; 'completed' and 'cancelled' end it. Moved by the action routes only — it is not writable through PUT /orders/{id}.
         */
        status?: OrderStatus;
        /**
         * NET total of the positions (the sum of their line_total), COMPUTED here at place-time. In `currency`, four decimal places. A caller cannot set it.
         */
        subtotal?: number;
        /**
         * All tax on this order: the positions' tax_amount plus the tax on shipping (shipping_total × shipping.tax_rate). COMPUTED here — a caller cannot set it.
         */
        tax_total?: number;
        /**
         * When any column of the order last changed — every status move, every re-derived fulfillment, every modification.
         */
        updated_at?: string;
        /**
         * Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change.
         */
        user_data?: object | null;
    }

    /**
     * One entry of the audit trail, which is also the domain event feed: every action writes a row, the manifest emits order_event.created on insert, and the row name IS the event name on the bus.
     */
    export type OrderEvent = {
        /**
         * Who caused it: the resolved contact id of the acting principal. Only order.placed and order.requested carry one today — every other row is null — so filtering on it filters to those two names. The database constrains nothing here (the column is text); the uuid shape is what this app WRITES, which is also why no example is published: no id an app invents names a row a tenant holds.
         */
        actor?: string | null;
        /**
         * When it happened. The trail comes back oldest first, which is the order a human reads a history in.
         */
        created_at?: string;
        /**
         * Primary key of the event row.
         */
        id?: string;
        /**
         * WHAT happened, and this is the domain event: the manifest emits order_event.created on insert and this value is the event name on the bus. The names this app writes are order.placed, order.requested, order.updated, order.acknowledged, order.cancelled, order.item.cancelled, order.shipment.created, order.completed, order.held, order.unheld, order.payment_status.changed, order.comment.added, order.return.registered, order.return.received, order.return.completed and order.return.rejected.
         */
        name?: string;
        /**
         * The order this happened to.
         */
        order_id?: string;
        /**
         * The machine-readable body, and its shape follows `name`. order.placed / order.requested carry number, grand_total, currency, item_count, cart_id — plus approval_reason (permission | value_threshold) and threshold when the order is waiting for sign-off. order.shipment.created carries shipment_id, number, carrier, tracking_code and the booked positions. order.item.cancelled and order.return.* carry positions and the reason or resolution. order.completed carries via (shipment | payment | manual). order.payment_status.changed carries from, to and payment_id. Nothing validates it: it is what the route that wrote the row put there.
         */
        payload?: object | null;
    }

    /**
     * Stop the order. The reason is optional but is what the guard quotes back at whoever tries to ship, so an unexplained hold is a hold nobody can resolve.
     */
    export type OrderHoldRequest = {
        /**
         * Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
         */
        reason?: string;
    }

    /**
     * One POSITION of an order, frozen at place-time: the article as it was, the price as it was, and three running quantities (shipped, cancelled, returned) that everything after placement books against. `quantity` itself never changes.
     */
    export type OrderItem = {
        /**
         * The chosen options of a configured line — what the configurator produced, in whatever shape it produces. Only meaningful for type 'configuration'; null everywhere else.
         */
        configuration?: object | null;
        /**
         * The buyer's own cost centre for this line — a B2B field: the same order is split across several of them and the buyer's finance department needs the split per line, not per order.
         */
        cost_center?: string | null;
        /**
         * When the position was written — the moment the order was placed.
         */
        created_at?: string;
        /**
         * Primary key of the position. This is the id every positions[] payload names: /ship, /items/cancel and /return all take order_item_id.
         */
        id?: string;
        /**
         * quantity × unit_price, NET, always COMPUTED here — a caller cannot set it. The order's subtotal is the sum of these.
         */
        line_total?: number;
        /**
         * Free-form data belonging to the integration side, per position. Stored and returned untouched.
         */
        metadata?: object | null;
        /**
         * The article name as it stood at place-time, frozen. Falls back to the sku when the caller sent none — a position always reads as something.
         */
        name?: string;
        /**
         * The order this position belongs to. Deleting the order deletes its positions.
         */
        order_id?: string;
        /**
         * The line number a human reads, and what the order is sorted by. Numbered in steps of the range's position_step (10, 20, 30) unless the caller set it explicitly — the gap is what lets a line be inserted later without renumbering.
         */
        position?: number;
        /**
         * A free note the buyer attached to this line — an engraving, a delivery instruction, the drawing number the line refers to. Printed on the paperwork, read by nothing.
         */
        position_text?: string | null;
        /**
         * The product as it was at place-time, FROZEN: the copy that makes the order still correct after the catalog changes its price, its name or its attributes. The caller decides how much of the product to freeze; this app stores it and reads nothing out of it.
         */
        product?: object | null;
        /**
         * The catalog product this line was taken from (the products app). Null on a custom line, and it stays a reference — the position keeps working after the product is retired.
         */
        product_id?: string | null;
        /**
         * How much was ORDERED, in `unit`. Three decimal places, so 2.5 m of cable is a real order line. Never changed afterwards — cancelling or returning writes the quantity_* columns instead, which is what keeps the order a truthful record of what was asked for.
         */
        quantity?: number;
        /**
         * How much of this position was cancelled and will never ship. Written by /cancel (all of it) and /items/cancel (a named quantity). Cancelling reduces the effective quantity, so an order whose every position is fully cancelled becomes cancelled itself.
         */
        quantity_cancelled?: number;
        /**
         * How much of this position came BACK, booked when a return is completed — not when it is registered or received. This is the goods accounting: it never reduces quantity_shipped, so a position can be shipped 3 and returned 3.
         */
        quantity_returned?: number;
        /**
         * How much of this position has GONE OUT, summed over the shipments. Written only by POST /orders/{id}/ship; it is what fulfillment_status is derived from, and what a return is guarded against.
         */
        quantity_shipped?: number;
        /**
         * The article number as it stood at place-time, frozen with the rest of the line. The value an ERP and a warehouse both join on, and the one field a picker reads. Null only on a line that never had one.
         */
        sku?: string | null;
        /**
         * Tax on this line in `currency`. Derived from line_total × tax_rate/100 when the caller sent none, which is the normal case — but a caller may send it, for a market whose rounding rules differ from ours.
         */
        tax_amount?: number;
        /**
         * Tax percentage for this line, as a number (19 means 19 %). Frozen at place-time with everything else.
         */
        tax_rate?: number;
        /**
         * What kind of line this is: 'product' is a catalog article, 'configuration' a configured one carrying its configuration, 'custom' a line typed by hand that no catalog knows.
         */
        type?: OrderItemType;
        /**
         * The unit the quantity is counted in — piece, metre, kilogram, package. Free text as the catalog carries it; this app does no conversion.
         */
        unit?: string | null;
        /**
         * NET price per unit, FROZEN at place-time. A later price change in the catalog does not reach this order.
         */
        unit_price?: number;
        /**
         * When the position last changed, which in practice means the last time a quantity was booked onto it.
         */
        updated_at?: string;
        /**
         * Free-form data belonging to the ordering side, per position — carried through from the cart line and handed back untouched.
         */
        user_data?: object | null;
    }

    /**
     * A position of the placed order — needs an identity: &#039;name&#039; or &#039;sku&#039;. Items are SNAPSHOTS: carry the product copy, prices are frozen at place-time.
     */
    export type OrderItemCreateRequest = {
        /**
         * The chosen options of a configured line — what the configurator produced, in whatever shape it produces. Only meaningful for type 'configuration'; null everywhere else.
         */
        configuration?: object | null;
        /**
         * The buyer's own cost centre for this line — a B2B field: the same order is split across several of them and the buyer's finance department needs the split per line, not per order.
         */
        cost_center?: string | null;
        /**
         * Free-form data belonging to the integration side, per position. Stored and returned untouched.
         */
        metadata?: object | null;
        /**
         * The article name as it stood at place-time, frozen. Falls back to the sku when the caller sent none — a position always reads as something. Falls back to 'sku' when omitted; one of the two is required.
         */
        name?: string | null;
        /**
         * The line number a human reads, and what the order is sorted by. Numbered in steps of the range's position_step (10, 20, 30) unless the caller set it explicitly — the gap is what lets a line be inserted later without renumbering. Omitted = numbered in steps of the order range's position_step.
         */
        position?: number | null;
        /**
         * A free note the buyer attached to this line — an engraving, a delivery instruction, the drawing number the line refers to. Printed on the paperwork, read by nothing.
         */
        position_text?: string | null;
        /**
         * The product as it was at place-time, FROZEN: the copy that makes the order still correct after the catalog changes its price, its name or its attributes. The caller decides how much of the product to freeze; this app stores it and reads nothing out of it. 'snapshot' is accepted as an alias for this key.
         */
        product?: object | null;
        /**
         * The catalog product this line was taken from (the products app). Null on a custom line, and it stays a reference — the position keeps working after the product is retired.
         */
        product_id?: string | null;
        /**
         * How much was ORDERED, in `unit`. Three decimal places, so 2.5 m of cable is a real order line. Never changed afterwards — cancelling or returning writes the quantity_* columns instead, which is what keeps the order a truthful record of what was asked for. Defaults to 1.
         */
        quantity?: number | null;
        /**
         * The article number as it stood at place-time, frozen with the rest of the line. The value an ERP and a warehouse both join on, and the one field a picker reads. Null only on a line that never had one.
         */
        sku?: string | null;
        /**
         * The product as it was at place-time, FROZEN: the copy that makes the order still correct after the catalog changes its price, its name or its attributes. The caller decides how much of the product to freeze; this app stores it and reads nothing out of it. Alias for 'product' — send one or the other, not both.
         */
        snapshot?: object | null;
        /**
         * Tax on this line in `currency`. Derived from line_total × tax_rate/100 when the caller sent none, which is the normal case — but a caller may send it, for a market whose rounding rules differ from ours. Send it only where your market rounds differently from line_total × tax_rate/100.
         */
        tax_amount?: number | null;
        /**
         * Tax percentage for this line, as a number (19 means 19 %). Frozen at place-time with everything else. Defaults to 0.
         */
        tax_rate?: number | null;
        /**
         * What kind of line this is: 'product' is a catalog article, 'configuration' a configured one carrying its configuration, 'custom' a line typed by hand that no catalog knows. Defaults to 'product'.
         */
        type?: OrderItemType;
        /**
         * The unit the quantity is counted in — piece, metre, kilogram, package. Free text as the catalog carries it; this app does no conversion.
         */
        unit?: string | null;
        /**
         * NET price per unit, FROZEN at place-time. A later price change in the catalog does not reach this order. Defaults to 0. line_total is always derived from it and never taken from the body.
         */
        unit_price?: number | null;
        /**
         * Free-form data belonging to the ordering side, per position — carried through from the cart line and handed back untouched.
         */
        user_data?: object | null;
    }

    /**
     * 
     */
    export type OrderItemsCancelRequest = {
        /**
         * Who cancelled, as the caller reported it — an operator, a desk, a system. Free text; this app does not resolve it against a user directory.
         */
        cancelled_by?: string;
        /**
         * The quantities to take off the order. Required here, unlike on /ship and /return: cancelling everything by default is not a thing anybody should be able to do by omission — that is what /cancel is for.
         */
        positions: OrderCancelPosition[];
        /**
         * Why it was cancelled, free text. Mandatory when the tenant sets cancel_requires_reason — for those merchants an unexplained cancellation is refused with a 400.
         */
        reason?: string;
    }

    /**
     * 
     */
    export type OrderListCreateRequest = {
        /**
         * Optional initial positions. Every one is validated — and article-checked where `reject_unknown_articles` is on — BEFORE the list row is written, so a rejected position never leaves an empty list behind.
         */
        items?: OrderListItemInput[];
        /**
         * List kind — the `code` of one of the tenant's own kinds (GET /orderlists/kinds); defaults to the flagged one, or the market's 'default_kind' setting.
         */
        kind?: string;
        /**
         * Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
         */
        name: string;
        /**
         * The organization the sharing is scoped to. Null means the list can only ever be the owner's own: `shared` is meaningless without it, because there is no set of people to share with. It is also what the order conversion hands the orders app as the buying organization.
         */
        organization_id?: string | null;
        /**
         * The contact who owns the list. Ownership IS the authorization here: a caller the gateway resolved to a contact sees their own lists plus their organization's shared ones, and may write only their own — unless `shared_lists_editable` opens a shared list to the whole owning organization. Set once at create; no route moves a list to another owner.
         */
        owner_id: string;
        /**
         * The owner's display name as it stood when the list was created — a snapshot, so renaming the contact does not rewrite it. Carried so a shared list can say whose it is without a call to the contacts app.
         */
        owner_name: string;
        /**
         * Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
         */
        shared?: boolean;
    }

    /**
     * 
     */
    export type OrderListItem = {
        /**
         * The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
         */
        category_slug?: string | null;
        /**
         * The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
         */
        cost_center_id?: string | null;
        /**
         * When the position was added to the list.
         */
        created_at?: string;
        /**
         * The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
         */
        custom_sku?: string | null;
        /**
         * The position, by id.
         */
        id?: string;
        /**
         * The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
         */
        image?: string | null;
        /**
         * The list this position belongs to. Taken from the path and never from the payload — a position does not move between lists.
         */
        list_id?: string;
        /**
         * Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
         */
        metadata?: object | null;
        /**
         * The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
         */
        name?: string;
        /**
         * Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
         */
        position?: number;
        /**
         * Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
         */
        position_texts?: object | null;
        /**
         * Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
         */
        price?: number | null;
        /**
         * The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
         */
        product_id?: string | null;
        /**
         * How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
         */
        quantity?: number;
        /**
         * The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
         */
        sku?: string | null;
        /**
         * The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
         */
        subcategory_slug?: string | null;
        /**
         * The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
         */
        tax_rate?: number | null;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
         */
        unit?: string | null;
        /**
         * When the position was last changed.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type OrderListItemInput = {
        /**
         * The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
         */
        category_slug?: string | null;
        /**
         * The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
         */
        cost_center_id?: string | null;
        /**
         * The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
         */
        custom_sku?: string | null;
        /**
         * The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
         */
        image?: string | null;
        /**
         * Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
         */
        metadata?: object | null;
        /**
         * The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
         */
        name: string;
        /**
         * Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
         */
        position?: number;
        /**
         * Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
         */
        position_texts?: string[] | null;
        /**
         * Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
         */
        price?: number | null;
        /**
         * The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
         */
        product_id?: string | null;
        /**
         * How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
         */
        quantity?: number;
        /**
         * The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
         */
        sku?: string | null;
        /**
         * The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
         */
        subcategory_slug?: string | null;
        /**
         * The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
         */
        tax_rate?: number | null;
        /**
         * The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
         */
        unit?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value. `quantity` is still checked (&gt; 0) and the article is still checked against the catalogue where `reject_unknown_articles` is on.
     */
    export type OrderListItemUpdateRequest = {
        /**
         * The catalogue category the article sat in when the position was saved, as a slug. Kept so a long list can be grouped the way the shop groups it without a call to the catalogue.
         */
        category_slug?: string | null;
        /**
         * The cost centre this position books to, as the tenant's ERP names it. Free text and not our enum. It survives into the ORDER position, which has a `cost_center` column; a CART line has none, so the cart conversion carries it in the line snapshot instead.
         */
        cost_center_id?: string | null;
        /**
         * The buyer's OWN article number for this article — what their purchasing system calls it, which is rarely what the shop calls it. Free text, and the field a B2B buyer searches their own lists by.
         */
        custom_sku?: string | null;
        /**
         * The article image at the time the position was saved, as a URL or a path — a snapshot like `name`, and nothing here refreshes it. It rides into the cart line and the order position in their snapshot, because neither has a column for it.
         */
        image?: string | null;
        /**
         * Free-form data the tenant keeps on the position. Never read by this app; it travels into the cart line / order position snapshot untouched. A write replaces the whole document rather than merging into it.
         */
        metadata?: object | null;
        /**
         * The article name AS IT WAS when the position was saved. A snapshot on purpose: the list is the buyer's own record, so a renamed or withdrawn article still reads the way they wrote it down.
         */
        name?: string;
        /**
         * Sort order within the list, ascending — the order the positions collection returns by default and the order the conversions hand the lines over in. Neither dense nor unique: an add with no `position` of its own takes the list's current position COUNT, so removing a position from the middle and adding another leaves two rows sharing a number. A bulk replace assigns the array index the same way, so it renumbers only the positions it is not given explicitly.
         */
        position?: number;
        /**
         * Per-position notes the buyer wrote — an engraving, a delivery instruction, a reference for the picker. An ARRAY OF STRINGS, one entry per line; the order conversion joins them with newlines into the order position's single `position_text`, and the cart conversion carries the array in the line snapshot.
         */
        position_texts?: string[] | null;
        /**
         * Unit price snapshot — what the buyer saw when they saved the position, in whatever way the catalogue quoted it. It is a record, not a live price: the cart and the order reprice on their own terms, so this never becomes what somebody is charged.
         */
        price?: number | null;
        /**
         * The catalogue product this position stands for. One of `product_id` / `sku` must be set (the database enforces it); this is the identity the products app answers to, and the one `reject_unknown_articles` and the conversions check against.
         */
        product_id?: string | null;
        /**
         * How much of the article the list holds. Greater than zero — the database refuses the rest — and fractional to three decimals, because a B2B position may be 2.5 metres or 0.75 kilos.
         */
        quantity?: number;
        /**
         * The article number as the catalogue knows it — the alternative identity to `product_id`, and the one an ERP integration usually joins on.
         */
        sku?: string | null;
        /**
         * The catalogue subcategory, as a slug. Same purpose as `category_slug`, one level down.
         */
        subcategory_slug?: string | null;
        /**
         * The VAT rate that applied when the position was saved, as a PERCENT (19 = 19 %). Four decimals so a rate like 8.25 % survives; carts and orders document the same field the same way, and the conversion forwards the number unchanged.
         */
        tax_rate?: number | null;
        /**
         * The unit `quantity` counts in, in the tenant's own words. Deliberately open text and deliberately NOT a vocabulary: a B2B catalogue units in pieces, metres, kilos, rolls and pallets, and any closed list published here would be a guess.
         */
        unit?: string | null;
    }

    /**
     * Replace ALL positions of the list (set semantics).
     */
    export type OrderListItemsReplaceRequest = {
        /**
         * The new full set of positions, in the order they should carry. An empty array empties the list. Every existing position is deleted and rewritten, so ids are NOT preserved. The array order is the DEFAULT and not an override: an entry that names no `position` takes its index, one that names its own keeps it — so a replace does not by itself renumber the list from zero.
         */
        items: OrderListItemInput[];
    }

    /**
     * 
     */
    export type OrderListKindCreateRequest = {
        /**
         * What `lists.kind` will store. Lowercased on the way in and immutable afterwards — a merchant who wants a different code creates a new kind and moves the lists over.
         */
        code: string;
        /**
         * What this kind is for, in one sentence — the line a select shows under the title.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag.
         */
        descriptions?: object | null;
        /**
         * Promote this kind; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag.
         */
        labels?: object | null;
        /**
         * Where the kind sits in a select, ascending. Omitted means 0, which puts it first among the unpositioned.
         */
        position?: number;
        /**
         * What a person reads. `labels` adds the localized forms on top; this one is the fallback.
         */
        title: string;
        /**
         * Semantic badge colour. The client owns what each tone looks like; omitted means `neutral`.
         */
        tone?: OrderListKindTone;
    }

    /**
     * No payload — send {}. The kind is named by the path, and there is nothing else to decide.
     */
    export type OrderListKindMakeDefaultRequest = {
    }

    /**
     * 
     */
    export type OrderListKindRow = {
        /**
         * What `lists.kind` stores. Lowercase, immutable once created — renaming it would orphan every list that carries it, so a merchant who wants a different code creates a new kind and moves the lists over.
         */
        code?: string;
        /**
         * When the kind was created — the install for a seeded one.
         */
        created_at?: string;
        /**
         * What this kind is FOR, in the tenant's own words — the sentence a select shows underneath the title. `descriptions` carries the localized forms. Same caveat as `title`: a kind seeded before 0.15.0 may hold a serialized locale map here (PE-450).
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag. Same fallback as `labels`: `description` is what a reader gets when their tag is missing.
         */
        descriptions?: object | null;
        /**
         * The kind, by id. Generated by the database and what every /orderlists/kinds/{id} route addresses — the `code` is the identity a LIST carries, the id is the identity a route takes.
         */
        id?: string;
        /**
         * The kind a list created without one gets. Exactly one row carries it — promoting a kind demotes the previous holder — and the market-scoped `default_kind` setting still wins where a tenant set it.
         */
        is_default?: boolean;
        /**
         * Seeded on install rather than created by the merchant. It changes nothing about what may be done to the row: a system kind is still renameable, still retirable, and still deletable once no list carries it.
         */
        is_system?: boolean;
        /**
         * Localized titles, keyed by language tag. `title` is what a reader gets when their tag is missing, so this only ever adds languages — it never replaces the plain one.
         */
        labels?: object | null;
        /**
         * Where this kind sits in a select, ascending. Ties fall back to the code, so the order is stable.
         */
        position?: number;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * What a person reads, in the tenant's own words. `labels` carries the localized forms. Kinds seeded before 0.15.0 hold a serialized locale map here instead — the seed wrote its `{en, de}` map into this `text` column and left `labels` null, and Postgres stores such a map as its JSON text rather than refusing it (PE-450). Those rows are not repaired by the fix; a repair is a data change.
         */
        title?: string;
        /**
         * Semantic badge colour. The client owns what each tone looks like; the kind only says what the value MEANS.
         */
        tone?: OrderListKindRowTone;
        /**
         * When the kind was last written.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type OrderListKindUpdateRequest = {
        /**
         * What this kind is for, in one sentence. Explicit null clears it.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag. Replaces the whole map rather than merging into it.
         */
        descriptions?: object | null;
        /**
         * True promotes this kind and demotes the previous default — the same move POST /orderlists/kinds/{id}/make-default makes on its own.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag. Replaces the whole map rather than merging into it.
         */
        labels?: object | null;
        /**
         * Where the kind sits in a select, ascending.
         */
        position?: number;
        /**
         * What a person reads. A blank title is ignored rather than stored — a kind with no words is unreadable in every UI.
         */
        title?: string;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: OrderListKindTone;
    }

    /**
     * A position left out of the conversion because the catalogue no longer knows its article (only ever non-empty when the tenant&#039;s &#039;on_missing_article&#039; setting is &#039;skip&#039;).
     */
    export type OrderListSkippedPosition = {
        /**
         * The position that was left out, so a client can point at the row in the list.
         */
        id?: string;
        /**
         * The saved article name, so the omission can be reported to the buyer in words they recognise.
         */
        name?: string;
        /**
         * The catalogue product the position named, if it named one.
         */
        product_id?: string | null;
        /**
         * The article number the position named, if it named one.
         */
        sku?: string | null;
    }

    /**
     * 
     */
    export type OrderListSummary = {
        /**
         * When the list was created.
         */
        created_at?: string;
        /**
         * The list, by id. Generated by the database and the only way to address it — every /orderlists/{id} route takes this uuid.
         */
        id?: string;
        /**
         * Positions this list holds. Counted server-side so a badge costs no extra call — the collection deliberately does NOT carry the positions themselves.
         */
        item_count?: number;
        /**
         * What the list is FOR — the `code` of one of the tenant's own kinds (GET /orderlists/kinds). Nothing in this app branches on it: it groups and filters lists, it does not change how positions are stored or how a conversion runs. A merchant may add their own (reagent lists, sample lists) without a release of this app.
         */
        kind?: string;
        /**
         * Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
         */
        name?: string;
        /**
         * The organization the sharing is scoped to. Null means the list can only ever be the owner's own: `shared` is meaningless without it, because there is no set of people to share with. It is also what the order conversion hands the orders app as the buying organization.
         */
        organization_id?: string | null;
        /**
         * The contact who owns the list. Ownership IS the authorization here: a caller the gateway resolved to a contact sees their own lists plus their organization's shared ones, and may write only their own — unless `shared_lists_editable` opens a shared list to the whole owning organization. Set once at create; no route moves a list to another owner.
         */
        owner_id?: string;
        /**
         * The owner's display name as it stood when the list was created — a snapshot, so renaming the contact does not rewrite it. Carried so a shared list can say whose it is without a call to the contacts app.
         */
        owner_name?: string;
        /**
         * Dead column: what `shared` was called before the 2026-06-20 rename (`public` is a reserved word in most SDK target languages). Nothing reads or writes it, so it is `false` on every list written since; it is still returned only because the additive provisioner never dropped the column. Read `shared` — this field says nothing about who may see the list.
         */
        public?: boolean;
        /**
         * Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
         */
        shared?: boolean;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * When the list or ANY of its positions last changed — adding, updating or removing a position touches the list — so this is the timestamp a "recently used" sort should read. It is also the default sort of GET /orderlists (`updated_at.desc`).
         */
        updated_at?: string;
    }

    /**
     * Every field is optional: with an empty body the list goes into a NEW cart for its owner, on the tenant defaults.
     */
    export type OrderListToCartRequest = {
        /**
         * Add to this existing cart. Omit to create one for the list owner and make it their current cart.
         */
        cart_id?: string | null;
        /**
         * ISO 4217 code for the cart and its lines. Omit to let the carts app decide.
         */
        currency?: string | null;
        /**
         * 'append' adds the positions (the carts app merges a line by product and price, so quantities accumulate); 'replace' makes the list the cart's entire contents. Defaults to the tenant's 'cart_merge_mode' setting.
         */
        mode?: OrderListCartMode;
    }

    /**
     * 
     */
    export type OrderListToCartResult = {
        /**
         * Positions written to the cart. Equal to the list's position count minus `skipped`.
         */
        added?: number;
        /**
         * True when this call created the cart. A created cart is the owner's CURRENT cart, because a cart the buyer cannot see is not "added to cart".
         */
        cart_created?: boolean;
        /**
         * The cart the positions landed in: the one that was passed in, or the one this call created.
         */
        cart_id?: string;
        /**
         * The list that was converted. Unchanged by the call — a conversion reads the list, it never empties it.
         */
        list_id?: string;
        /**
         * The mode that was actually applied — the one that was asked for, or the tenant's 'cart_merge_mode' default when the call named none.
         */
        mode?: OrderListCartMode;
        /**
         * Positions left out because the catalogue no longer knows their article. Only ever non-empty when 'on_missing_article' is 'skip' — 'include' converts them anyway and 'fail' answers 400 instead.
         */
        skipped?: OrderListSkippedPosition[];
    }

    /**
     * Every field is optional — the buyer, the organization and the positions all come from the list.
     */
    export type OrderListToOrderRequest = {
        /**
         * ISO 4217 code. Omit to let the orders app apply the market default.
         */
        currency?: string | null;
        /**
         * The BUYER's own order or purchase-order number, forwarded to the orders app verbatim. Free text and never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for.
         */
        customer_order_number?: string | null;
    }

    /**
     * 
     */
    export type OrderListToOrderResult = {
        /**
         * The list that was ordered. Unchanged by the call — the list stays, so it can be ordered again next month.
         */
        list_id?: string;
        /**
         * The orders app's answer, verbatim and unreshaped — the whole created order, whose shape is the orders app's own `Order` schema (GET /v1/orders/{id}) and is deliberately not restated here, because a copy would be the thing that goes stale. `order_id`, `order_number` and `status` are lifted out of it for a client that needs nothing else.
         */
        order?: object;
        /**
         * The order the orders app created. Null only when that app answered without one, which is a fault worth reporting rather than a normal outcome.
         */
        order_id?: string | null;
        /**
         * The order number a human quotes, drawn from the tenant's order range by the orders app. It is NOT the id: every orders route addresses an order by uuid.
         */
        order_number?: string | null;
        /**
         * Positions handed to the orders app — the list's count minus `skipped`.
         */
        positions?: number;
        /**
         * Positions left out because the catalogue no longer knows their article. Only ever non-empty when 'on_missing_article' is 'skip'.
         */
        skipped?: OrderListSkippedPosition[];
        /**
         * Where the new order stands, as the orders app decided: 'placed' when it was accepted outright, 'pending' when it awaits approval — a contact holding only orders.request, or an order above the tenant's approval threshold. This app does not choose it and cannot override it.
         */
        status?: string | null;
    }

    /**
     * Partial update — rename, visibility or kind. Positions go through the items routes, and the owner cannot be changed.
     */
    export type OrderListUpdateRequest = {
        /**
         * List kind — the `code` of one of the tenant's own kinds (GET /orderlists/kinds); defaults to the flagged one, or the market's 'default_kind' setting.
         */
        kind?: string;
        /**
         * Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
         */
        name?: string;
        /**
         * Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
         */
        shared?: boolean;
    }

    /**
     * 
     */
    export type OrderListVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * The set is exhaustive: a value outside it is stale data, not a missing label.
         */
        closed?: boolean;
        /**
         * The badge colour a value carries when it names none of its own.
         */
        default_tone?: OrderListVocabularyDefaultTone;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: OrderListVocabularyName;
        /**
         * 'schema' — a CHECK constraint owns the set; 'table' — the tenant's own rows do.
         */
        source?: OrderListVocabularySource;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in the order a select should offer them.
         */
        values?: OrderListVocabularyValue[];
    }

    /**
     * 
     */
    export type OrderListVocabularyIndex = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, without its values — the values are one call further down, at GET /orderlists/vocabularies/{name}.
         */
        vocabularies?: object[];
    }

    /**
     * 
     */
    export type OrderListVocabularyValue = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Localized descriptions of a tenant-owned value, keyed by locale.
         */
        descriptions?: object | null;
        /**
         * The value ends the lifecycle. Always false for `kinds` — a list kind is not a state.
         */
        final?: boolean;
        /**
         * The value a create falls back to, so a client can mark it without reading the settings as well.
         */
        is_default?: boolean;
        /**
         * Seeded on install rather than created by the tenant. Still renameable and retirable.
         */
        is_system?: boolean;
        /**
         * The value as the database stores and enforces it — for `kinds`, the `code` a list carries.
         */
        key?: string;
        /**
         * Localized titles of a tenant-owned value, keyed by locale.
         */
        labels?: object | null;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: OrderListVocabularyTone;
    }

    /**
     * 
     */
    export type OrderListWithItems = {
        /**
         * When the list was created.
         */
        created_at?: string;
        /**
         * The list, by id. Generated by the database and the only way to address it — every /orderlists/{id} route takes this uuid.
         */
        id?: string;
        /**
         * Every position of the list, in `position` order. Returned inline because a list without its positions is not a list — the nested routes exist to CHANGE them, not to read them one page at a time.
         */
        items?: OrderListItem[];
        /**
         * What the list is FOR — the `code` of one of the tenant's own kinds (GET /orderlists/kinds). Nothing in this app branches on it: it groups and filters lists, it does not change how positions are stored or how a conversion runs. A merchant may add their own (reagent lists, sample lists) without a release of this app.
         */
        kind?: string;
        /**
         * Free-form data the tenant keeps on the list — an ERP requisition number, a department, whatever an integration needs to recognise the list again. Never read by this app, and never merged: a write replaces the whole document.
         */
        metadata?: object | null;
        /**
         * What the buyer calls this list. Free text, at least one character, and not unique: two contacts may both keep a "Weekly office supplies". It is also the name a NEW cart gets when POST /orderlists/{id}/cart creates one.
         */
        name?: string;
        /**
         * The organization the sharing is scoped to. Null means the list can only ever be the owner's own: `shared` is meaningless without it, because there is no set of people to share with. It is also what the order conversion hands the orders app as the buying organization.
         */
        organization_id?: string | null;
        /**
         * The contact who owns the list. Ownership IS the authorization here: a caller the gateway resolved to a contact sees their own lists plus their organization's shared ones, and may write only their own — unless `shared_lists_editable` opens a shared list to the whole owning organization. Set once at create; no route moves a list to another owner.
         */
        owner_id?: string;
        /**
         * The owner's display name as it stood when the list was created — a snapshot, so renaming the contact does not rewrite it. Carried so a shared list can say whose it is without a call to the contacts app.
         */
        owner_name?: string;
        /**
         * Dead column: what `shared` was called before the 2026-06-20 rename (`public` is a reserved word in most SDK target languages). Nothing reads or writes it, so it is `false` on every list written since; it is still returned only because the additive provisioner never dropped the column. Read `shared` — this field says nothing about who may see the list.
         */
        public?: boolean;
        /**
         * Whether the OWNING ORGANIZATION may see this list. False — the default — keeps it private to `owner_id`, and a foreign private list answers 404 rather than 403, so an outsider learns nothing from the difference. True lets every contact of `organization_id` READ it, and write it only where the tenant turned on the `shared_lists_editable` setting. A list with no `organization_id` shares with nobody however this is set.
         */
        shared?: boolean;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * When the list or ANY of its positions last changed — adding, updating or removing a position touches the list — so this is the timestamp a "recently used" sort should read. It is also the default sort of GET /orderlists (`updated_at.desc`).
         */
        updated_at?: string;
    }

    /**
     * Number pattern: &#039;{prefix}{counter padded to padding}{suffix}&#039;.
     */
    export type OrderNumberRangeCreateRequest = {
        /**
         * The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
         */
        channel_id?: string;
        /**
         * Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
         */
        code: string;
        /**
         * The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409). Defaults to 0, so the first number drawn is step.
         */
        counter?: number;
        /**
         * Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
         */
        metadata?: object;
        /**
         * How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn. Defaults to 6.
         */
        padding?: number;
        /**
         * The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only. Defaults to 10.
         */
        position_step?: number;
        /**
         * Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default. Defaults to ''.
         */
        prefix?: string;
        /**
         * How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice. Defaults to 1.
         */
        step?: number;
        /**
         * Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use. Defaults to ''.
         */
        suffix?: string;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type OrderNumberRangeUpdateRequest = {
        /**
         * The sales channel this range was created for, as a label. It does NOT select the range: a draw finds the range by `code` alone, and the unique index (tenant, code) means one code is one range per tenant — so an order on another channel draws from the same range this one names. Null on the three seeded ranges, which is every tenant-wide range.
         */
        channel_id?: string;
        /**
         * Which counter this is, in the app's own words: 'order' numbers orders, 'delivery' numbers delivery notes, 'return' numbers returns. Unique per tenant, and the value the order_number_range_code / delivery_number_range_code / return_number_range_code settings point at — a setting naming a code no range carries is the 422 'number_range_missing'.
         */
        code?: string;
        /**
         * The last number DRAWN — state, not configuration. The next draw is counter + step and writes the new value back, so moving this forward skips numbers and moving it back re-issues them (and the unique index then answers 409). Defaults to 0, so the first number drawn is step.
         */
        counter?: number;
        /**
         * Free-form data for the caller. This app stores it and returns it, and reads nothing out of it.
         */
        metadata?: object;
        /**
         * How wide the counter is written, zero-padded: 6 makes 123 into 000123. 0 writes the bare number. Widening it later does not renumber what was already drawn. Defaults to 6.
         */
        padding?: number;
        /**
         * The gap between the position numbers of a new order: 10 numbers the lines 10, 20, 30 — room to slot a line in between later without renumbering the rest. Read from the ORDER range only. Defaults to 10.
         */
        position_step?: number;
        /**
         * Literal text in front of the counter: 'ORD-' turns counter 123 into ORD-000123. Empty by default. Defaults to ''.
         */
        prefix?: string;
        /**
         * How far the counter moves per draw. 1 is consecutive numbering; a larger step is what a merchant chooses who does not want their order volume readable off an invoice. Defaults to 1.
         */
        step?: number;
        /**
         * Literal text after the counter — a market or year marker on merchants who number that way. Empty by default, which is what most of them use. Defaults to ''.
         */
        suffix?: string;
    }

    /**
     * Which of the three standard codes this call had to create and which were already there.
     */
    export type OrderNumberRangesSeeded = {
        /**
         * The codes that were created just now, with the standard format ORD-/DEL-/RET- and padding 6. Empty on every call after the first.
         */
        created?: string[];
        /**
         * The codes that were already there and were left EXACTLY as they are — a merchant who changed the prefix or the counter keeps their change. That is what makes this call safe to run again.
         */
        existing?: string[];
    }

    /**
     * Where this answer sits in the whole result set.
     */
    export type OrderPage = {
        /**
         * Whether another page exists after this one (offset + returned < total). The one field a "load more" button should read.
         */
        hasMore?: boolean;
        /**
         * The page size that was applied. A requested limit above 200 is CLAMPED to 200 rather than refused, so this is the number to believe, not the one you sent.
         */
        limit?: number;
        /**
         * The row offset that was applied.
         */
        offset?: number;
        /**
         * How many rows are in `items` right here — less than `limit` on the last page.
         */
        returned?: number;
        /**
         * How many rows match the filter in total, ignoring limit and offset. This is what a page count is computed from.
         */
        total?: number;
    }

    /**
     * 
     */
    export type OrderPaymentStatusUpdateRequest = {
        /**
         * The reference into the payment system. MERGED into the order's payment snapshot under 'payment_id' — the rest of the snapshot is left alone — and carried in the order.payment_status.changed event. Omitted leaves the snapshot untouched.
         */
        payment_id?: string;
        /**
         * The new value of the payment dimension. Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
         */
        status: OrderPaymentStatus;
    }

    /**
     * The snapshot payload: items plus frozen buyer/addresses/payment/shipping. The order number is drawn from the order range, totals are computed from the items.
     */
    export type OrderPlaceRequest = {
        /**
         * The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to.
         */
        billing_address?: object | null;
        /**
         * The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it.
         */
        buyer?: object | null;
        /**
         * The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created. The carts.order hand-over sets it.
         */
        cart_id?: string | null;
        /**
         * The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
         */
        channel_id?: string | null;
        /**
         * The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout. Ignored when the caller carries a principal — the RESOLVED contact wins, and a body value that disagrees is a 400 rather than a silent override.
         */
        contact_id?: string | null;
        /**
         * ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting. Defaults to the market's default_currency setting.
         */
        currency?: string | null;
        /**
         * The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
         */
        customer_order_number?: string | null;
        /**
         * Optional, and CHECKED rather than used: the order always computes its own total from the positions, the shipping cost and the tax. Send it as a checksum on that arithmetic — if it agrees the order is placed, and if it disagrees the call is refused with 400 naming both numbers, yours and the computed one. The comparison is at 2 decimal places (this app stores 4, ERPs work to 2, so a difference below a cent is agreement). It is never taken as the order value: the approval threshold and the revenue rollup read the computed number, which is why a total that disagrees is an error rather than an override.
         */
        grand_total?: number | null;
        /**
         * The order positions — at least one, and at most the tenant's max_items_per_order (500 out of the box; a longer list is a 400 naming the limit).
         */
        items: OrderItemCreateRequest[];
        /**
         * Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it.
         */
        metadata?: object | null;
        /**
         * The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it. A principal's own organization wins over this when it has one.
         */
        organization_id?: string | null;
        /**
         * The payment arrangement as it was chosen, FROZEN. This app reads exactly two keys and stores the rest untouched: 'status' seeds payment_status at place-time when it names one of the permitted values (anything else is ignored and the order starts 'open'), and 'payment_id' is merged in by POST /orders/{id}/payment-status. The method itself, its provider fields and any redirect state belong to the payments app.
         */
        payment?: object | null;
        /**
         * The shipping arrangement as it was chosen, FROZEN. Two keys are READ at place-time and feed the totals: 'price' becomes shipping_total (the shipping_total field is only the fallback when this is absent) and 'tax_rate' is what shipping is taxed at, because shipping is a Nebenleistung and is taxed too. Everything else — the carrier product, the delivery window, the pickup point — is stored untouched and belongs to the shipping app.
         */
        shipping?: object | null;
        /**
         * The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection).
         */
        shipping_address?: object | null;
        /**
         * NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`. Only read when the shipping snapshot carries no 'price'.
         */
        shipping_total?: number | null;
        /**
         * Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change.
         */
        user_data?: object | null;
    }

    /**
     * The order that was created, with its positions. A placement has no shipments, returns or cancellations yet — read GET /orders/{id} for the aggregate.
     */
    export type OrderPlaced = {
        /**
         * When the fulfilling system took the order over. Written once. While it is null the order can still be modified here; afterwards modification goes through that system, unless the tenant sets allow_modification_after_acknowledge.
         */
        acknowledged_at?: string | null;
        /**
         * The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to.
         */
        billing_address?: object | null;
        /**
         * The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it.
         */
        buyer?: object | null;
        /**
         * When the order was cancelled, whether by a full cancel or by the last open quantity being cancelled position by position. Null otherwise.
         */
        cancelled_at?: string | null;
        /**
         * The cart this order was placed from, when a storefront handed one over. A reference across an app boundary (the carts app), not a foreign key — nothing here checks that it resolves. Null for an order an integration or an operator created.
         */
        cart_id?: string | null;
        /**
         * The sales channel the order arrived through — webshop, app, phone desk, EDI. Null when the caller named none.
         */
        channel_id?: string | null;
        /**
         * When the order was closed — by a full shipment, by payment or by hand, depending on the tenant's auto_complete_on. Null until then.
         */
        completed_at?: string | null;
        /**
         * The PERSON who ordered — a contact in the customers app. Resolved from the acting principal whenever the caller carries one, and a body value that disagrees is refused rather than silently overridden. Null for a guest checkout.
         */
        contact_id?: string | null;
        /**
         * When the order row was written. For a placed order this is placed_at; for a requested one it is when the request was submitted.
         */
        created_at?: string;
        /**
         * ISO 4217 code of EVERY amount on this order. Frozen at place-time from the market's default_currency unless the caller named one. Nothing on this order is ever converted, and the approval threshold is read in this currency — which is why the threshold is a per-market setting.
         */
        currency?: string;
        /**
         * The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
         */
        customer_order_number?: string | null;
        /**
         * The FULFILLING system's reference for this order, typically the ERP order number. Written once by POST /orders/{id}/acknowledge and null until an integration acknowledged it.
         */
        external_ref?: string | null;
        /**
         * Whether the order has SHIPPED, and the one dimension nobody writes: it is DERIVED after every quantity change from the positions' own bookkeeping. 'fulfilled' means shipped >= ordered − cancelled across all positions, 'partial' means something went out. Sending it has no effect; ship, cancel or return something and it moves.
         */
        fulfillment_status?: OrderFulfillmentStatus;
        /**
         * What the buyer owes: subtotal + shipping_total + tax_total, COMPUTED by this app and NEVER taken from the caller — trusting a supplied total is how inconsistent orders happened. This is the number the approval threshold is compared against and the number the revenue rollup sums.
         */
        grand_total?: number;
        /**
         * Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
         */
        hold_reason?: string | null;
        /**
         * Primary key of the order, and the id every other route takes. Not the order number.
         */
        id?: string;
        /**
         * The summed ORDERED quantity over all positions, rounded to a whole number — a headline figure for a list, computed once at place-time. It is deliberately not reduced when something is cancelled or returned; the positions carry that arithmetic.
         */
        item_count?: number;
        /**
         * The created positions, numbered in steps of the order range position_step unless the caller set them.
         */
        items?: OrderItem[];
        /**
         * Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it.
         */
        metadata?: object | null;
        /**
         * The order number a human quotes — drawn from the tenant's order range at place-time, unique per tenant and never reused. It is NOT the id: every route addresses an order by uuid, and GET /orders?number=… is how a number becomes one.
         */
        number?: string;
        /**
         * A business stop, ORTHOGONAL to status: a held order keeps its lifecycle state and is refused at the guards. How far the hold reaches is the tenant's call (on_hold_blocks: shipping only, shipping and cancellation, or nothing at all).
         */
        on_hold?: boolean;
        /**
         * The COMPANY the order is booked on — an organization in the customers app, and the B2B half of who ordered. This is what orders.reports.customer-rollup aggregates by and what makes an order visible to a buyer's colleagues. Null on a private or guest order, which the rollup counts separately because it cannot attribute it.
         */
        organization_id?: string | null;
        /**
         * The payment arrangement as it was chosen, FROZEN. This app reads exactly two keys and stores the rest untouched: 'status' seeds payment_status at place-time when it names one of the permitted values (anything else is ignored and the order starts 'open'), and 'payment_id' is merged in by POST /orders/{id}/payment-status. The method itself, its provider fields and any redirect state belong to the payments app.
         */
        payment?: object | null;
        /**
         * Whether the order is PAID, and the dimension this app does not decide: it is fed from outside through POST /orders/{id}/payment-status (the payments app or an ERP), and only seeded at place-time from payment.status. Orthogonal to the lifecycle — a completed order can still be open, and a paid one can still be pending.
         */
        payment_status?: OrderPaymentStatus;
        /**
         * When the order was PLACED. Null while it is pending approval: an order awaiting sign-off exists but was never placed, and that is exactly the difference this field records.
         */
        placed_at?: string | null;
        /**
         * The shipping arrangement as it was chosen, FROZEN. Two keys are READ at place-time and feed the totals: 'price' becomes shipping_total (the shipping_total field is only the fallback when this is absent) and 'tax_rate' is what shipping is taxed at, because shipping is a Nebenleistung and is taxed too. Everything else — the carrier product, the delivery window, the pickup point — is stored untouched and belongs to the shipping app.
         */
        shipping?: object | null;
        /**
         * The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection).
         */
        shipping_address?: object | null;
        /**
         * NET shipping cost, taken from shipping.price or, when the snapshot carries no price, from the request's shipping_total. In `currency`.
         */
        shipping_total?: number;
        /**
         * Where the order stands in its LIFECYCLE, and one of three independent status dimensions. 'pending' = created but not placed, an order waiting for approval; 'placed' = accepted, nothing shipped; 'in_fulfillment' = part of it has gone out, or all of it has and the tenant does not close on shipment; 'completed' and 'cancelled' end it. Moved by the action routes only — it is not writable through PUT /orders/{id}.
         */
        status?: OrderStatus;
        /**
         * NET total of the positions (the sum of their line_total), COMPUTED here at place-time. In `currency`, four decimal places. A caller cannot set it.
         */
        subtotal?: number;
        /**
         * All tax on this order: the positions' tax_amount plus the tax on shipping (shipping_total × shipping.tax_rate). COMPUTED here — a caller cannot set it.
         */
        tax_total?: number;
        /**
         * When any column of the order last changed — every status move, every re-derived fulfillment, every modification.
         */
        updated_at?: string;
        /**
         * Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change.
         */
        user_data?: object | null;
    }

    /**
     * One quantity to put back into stock, named the way the inventories app wants it: by product, by sku, and how much.
     */
    export type OrderRestockPosition = {
        /**
         * The catalog product to restock. Null on a custom line, which is why `sku` is carried alongside it.
         */
        product_id?: string | null;
        /**
         * How much came back on this position, in the position's own unit.
         */
        quantity?: number;
        /**
         * The article number to restock — the key a warehouse actually books against.
         */
        sku?: string | null;
    }

    /**
     * Goods coming BACK, with their own lifecycle: registered → received → completed | rejected. Only completing books anything onto the positions; registering and receiving are announcements.
     */
    export type OrderReturn = {
        /**
         * When the return was settled, stamped by the SERVER. Never taken from the body: a client clock records when a client thinks it acted, not when the goods were booked.
         */
        completed_at?: string | null;
        /**
         * When the return row was written.
         */
        created_at?: string;
        /**
         * Primary key of the return. The {rid} segment of the return routes.
         */
        id?: string;
        /**
         * Free-form data for the caller — the returns portal's own reference. Stored and returned untouched.
         */
        metadata?: object | null;
        /**
         * The RETURN number — drawn from the tenant's return range, unique per tenant, and a third series alongside orders and delivery notes. What the customer writes on the parcel.
         */
        number?: string;
        /**
         * The order the goods are coming back from. A return of another order is a 404 on these routes, not a cross-order write.
         */
        order_id?: string;
        /**
         * The positions and quantities this return covers, fixed when it was registered and guarded against the shipped-but-not-yet-returned quantity of each. Entries flagged restock are what the completion reports back for the inventories call.
         */
        positions?: OrderReturnedPosition[];
        /**
         * Why the goods are coming back, free text as the customer or the desk stated it. Also what /reject stores when it is given no resolution out of the published set.
         */
        reason?: string | null;
        /**
         * When the goods physically arrived back. Null until POST …/receive — and null forever on a return that was completed straight out of registered, which is allowed.
         */
        received_at?: string | null;
        /**
         * When the return was announced. Defaults to now.
         */
        registered_at?: string;
        /**
         * When the return was refused. Null unless it was.
         */
        rejected_at?: string | null;
        /**
         * How it ended, in one of the words this app publishes — the settlement words on a completion (refund, partial_refund, replacement, repair, store_credit), the refusal words on a rejection (wear_and_tear, not_returnable); GET /orders/vocabularies/return-resolutions carries both sets with the stage that accepts each. The column carries no database constraint; the ROUTES enforce the set, which is what stopped a client settling returns with a word nobody else knew. On a rejection that named no resolution, the free-text reason is stored here instead — which is the one case a value outside the two sets appears.
         */
        resolution?: string | null;
        /**
         * Where the return stands: 'registered' = announced, nothing booked; 'received' = the goods are back but not yet settled; 'completed' = settled, and the only transition that books quantity_returned; 'rejected' = refused, nothing booked. The last two are final.
         */
        status?: OrderReturnStatus;
        /**
         * When the return last changed — each of its transitions writes it.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type OrderReturnCompleteRequest = {
        /**
         * How the return was settled. Omitted = settled without recording how.
         */
        resolution?: OrderReturnSettlement;
    }

    /**
     * The completed return plus the restock report. Restocking itself is an explicit inventories.restock call by the orchestrator — this app books quantity_returned and says what came back, it does not write another app&#039;s stock.
     */
    export type OrderReturnCompleted = {
        /**
         * When the return was settled, stamped by the SERVER. Never taken from the body: a client clock records when a client thinks it acted, not when the goods were booked.
         */
        completed_at?: string | null;
        /**
         * When the return row was written.
         */
        created_at?: string;
        /**
         * Primary key of the return. The {rid} segment of the return routes.
         */
        id?: string;
        /**
         * Free-form data for the caller — the returns portal's own reference. Stored and returned untouched.
         */
        metadata?: object | null;
        /**
         * The RETURN number — drawn from the tenant's return range, unique per tenant, and a third series alongside orders and delivery notes. What the customer writes on the parcel.
         */
        number?: string;
        /**
         * The order the goods are coming back from. A return of another order is a 404 on these routes, not a cross-order write.
         */
        order_id?: string;
        /**
         * The positions and quantities this return covers, fixed when it was registered and guarded against the shipped-but-not-yet-returned quantity of each. Entries flagged restock are what the completion reports back for the inventories call.
         */
        positions?: OrderReturnedPosition[];
        /**
         * Why the goods are coming back, free text as the customer or the desk stated it. Also what /reject stores when it is given no resolution out of the published set.
         */
        reason?: string | null;
        /**
         * When the goods physically arrived back. Null until POST …/receive — and null forever on a return that was completed straight out of registered, which is allowed.
         */
        received_at?: string | null;
        /**
         * When the return was announced. Defaults to now.
         */
        registered_at?: string;
        /**
         * When the return was refused. Null unless it was.
         */
        rejected_at?: string | null;
        /**
         * How it ended, in one of the words this app publishes — the settlement words on a completion (refund, partial_refund, replacement, repair, store_credit), the refusal words on a rejection (wear_and_tear, not_returnable); GET /orders/vocabularies/return-resolutions carries both sets with the stage that accepts each. The column carries no database constraint; the ROUTES enforce the set, which is what stopped a client settling returns with a word nobody else knew. On a rejection that named no resolution, the free-text reason is stored here instead — which is the one case a value outside the two sets appears.
         */
        resolution?: string | null;
        /**
         * One entry per returned position that carried restock: true. Empty when nothing was flagged.
         */
        restock?: OrderRestockPosition[];
        /**
         * Where the return stands: 'registered' = announced, nothing booked; 'received' = the goods are back but not yet settled; 'completed' = settled, and the only transition that books quantity_returned; 'rejected' = refused, nothing booked. The last two are final.
         */
        status?: OrderReturnStatus;
        /**
         * When the return last changed — each of its transitions writes it.
         */
        updated_at?: string;
    }

    /**
     * Register a return against the shipped quantities — the return number is drawn from the return range. Omitted positions = every position that still has a returnable quantity, in full (&#039;the customer sent it all back&#039;).
     */
    export type OrderReturnCreateRequest = {
        /**
         * Free-form data for the caller — the returns portal's own reference. Stored and returned untouched.
         */
        metadata?: object;
        /**
         * What is coming back. Omitted = every position with a returnable (shipped, not yet returned) quantity, in full.
         */
        positions?: OrderReturnPosition[];
        /**
         * Why the goods are coming back, free text as the customer or the desk stated it. Also what /reject stores when it is given no resolution out of the published set.
         */
        reason?: string;
        /**
         * The default restock flag for positions that carry none of their own — and the only way to say "put it all back into stock" when the positions are defaulted. It does not restock anything itself: it decides what the completion REPORTS for the orchestrator's inventories.restock call.
         */
        restock?: boolean;
    }

    /**
     * A position quantity to return — guarded against the shipped (not yet returned) quantity.
     */
    export type OrderReturnPosition = {
        /**
         * The order item (position) to act on. Read the ids from GET /orders/{id} (items[].id) or GET /orders/{id}/shippable (positions[].order_item_id) — an id this order does not carry is a 400.
         */
        order_item_id: string;
        /**
         * Defaults to the full remaining quantity of the position.
         */
        quantity?: number;
        /**
         * Report this position for restocking when the return completes (the explicit inventories.restock call stays with the orchestrator).
         */
        restock?: boolean;
    }

    /**
     * No payload — receiving is a pure state transition (registered → received).
     */
    export type OrderReturnReceiveRequest = {
    }

    /**
     * 
     */
    export type OrderReturnRejectRequest = {
        /**
         * Free-text fallback for 'resolution' — a sentence about this one return, not a value out of the set.
         */
        reason?: string;
        /**
         * Why the return was refused.
         */
        resolution?: OrderReturnRefusal;
    }

    /**
     * One position quantity registered for return.
     */
    export type OrderReturnedPosition = {
        /**
         * The order item this quantity was booked against — an id out of the same order, never another one.
         */
        order_item_id?: string;
        /**
         * The quantity booked on that position, in the position's own unit. Three decimal places, so 0.5 m of cable is a real booking.
         */
        quantity?: number;
        /**
         * Whether this quantity is reported for restocking when the return completes. Restocking itself stays an explicit inventories.restock call by the orchestrator — this app never writes another app's stock.
         */
        restock?: boolean;
    }

    /**
     * One handover to a carrier — a delivery note. An order has as many of these as it took to get the goods out; each carries the position quantities it booked.
     */
    export type OrderShipment = {
        /**
         * Who is carrying it, in the merchant's own words. Free text — this app neither validates it nor knows the carrier's API.
         */
        carrier?: string | null;
        /**
         * When the shipment was booked here, which is not necessarily when it left — that is shipped_at.
         */
        created_at?: string;
        /**
         * Primary key of the shipment.
         */
        id?: string;
        /**
         * The booked position quantities of this shipment.
         */
        items?: OrderShipmentItem[];
        /**
         * Free-form data for the caller — the warehouse system's own reference for this handover. Stored and returned untouched.
         */
        metadata?: object | null;
        /**
         * The DELIVERY NOTE number — drawn from the tenant's delivery range, unique per tenant, and a different series from the order number. A caller may supply its own when the number is issued by the warehouse system instead.
         */
        number?: string;
        /**
         * The order this shipment belongs to. Deleting the order deletes its shipments.
         */
        order_id?: string;
        /**
         * When the goods actually left. Defaults to now, and a caller may backdate it — a shipment booked on Monday for a Friday handover says Friday.
         */
        shipped_at?: string;
        /**
         * The consignment number the carrier issued. Free text: every carrier formats it differently and this app stores whatever it is given.
         */
        tracking_code?: string | null;
        /**
         * Where a human can follow the parcel. Supplied by the caller — this app does not build it, because only the caller knows the carrier's tracking address.
         */
        tracking_url?: string | null;
    }

    /**
     * Book what went out. Every field is optional: an empty body ships every position that still has an open quantity, in full, on a delivery note number drawn from the tenant&#039;s delivery range — which is the whole payload for the common case.
     */
    export type OrderShipmentCreateRequest = {
        /**
         * Who is carrying it, in the merchant's own words. Free text — this app neither validates it nor knows the carrier's API.
         */
        carrier?: string;
        /**
         * Free-form data for the caller — the warehouse system's own reference for this handover. Stored and returned untouched.
         */
        metadata?: object;
        /**
         * The DELIVERY NOTE number — drawn from the tenant's delivery range, unique per tenant, and a different series from the order number. A caller may supply its own when the number is issued by the warehouse system instead. Drawn from the 'delivery' range when omitted; supply one only when the number is issued elsewhere.
         */
        number?: string;
        /**
         * What this shipment carries. Omitted = every position with an open quantity, in full. GET /orders/{id}/shippable answers exactly the budget each one is guarded against.
         */
        positions?: OrderShipmentPosition[];
        /**
         * When the goods actually left. Defaults to now, and a caller may backdate it — a shipment booked on Monday for a Friday handover says Friday.
         */
        shipped_at?: string;
        /**
         * The consignment number the carrier issued. Free text: every carrier formats it differently and this app stores whatever it is given.
         */
        tracking_code?: string;
        /**
         * Where a human can follow the parcel. Supplied by the caller — this app does not build it, because only the caller knows the carrier's tracking address.
         */
        tracking_url?: string;
    }

    /**
     * What the booking produced: the new shipment with the quantities it took, and the order as it now stands.
     */
    export type OrderShipmentCreated = {
        /**
         * The order after the booking: fulfillment_status is re-derived from the positions, and status may have moved to in_fulfillment or (depending on the tenant's auto_complete_on) completed.
         */
        order?: Order;
        /**
         * The shipment that was created, WITH the position quantities it booked — the only place a caller learns which quantities actually went out when the positions were defaulted.
         */
        shipment?: OrderShipment;
    }

    /**
     * One line of a delivery note: how much of one order position went out in one shipment.
     */
    export type OrderShipmentItem = {
        /**
         * When the booking was written.
         */
        created_at?: string;
        /**
         * Primary key of the booked position line.
         */
        id?: string;
        /**
         * Which order position went out. Always a position of the same order as the shipment.
         */
        order_item_id?: string;
        /**
         * How much of that position this shipment carried. The sum of these over all shipments is the position's quantity_shipped.
         */
        quantity?: number;
        /**
         * The shipment this booking belongs to. Deleting the shipment deletes it.
         */
        shipment_id?: string;
    }

    /**
     * A position quantity to ship — guarded against the open quantity.
     */
    export type OrderShipmentPosition = {
        /**
         * The order item (position) to act on. Read the ids from GET /orders/{id} (items[].id) or GET /orders/{id}/shippable (positions[].order_item_id) — an id this order does not carry is a 400.
         */
        order_item_id: string;
        /**
         * Defaults to the full remaining quantity of the position.
         */
        quantity?: number;
    }

    /**
     * What a shipment of this order may still contain, and whether one would be accepted at all — answered by the same code POST /orders/{id}/ship runs, so the two cannot drift.
     */
    export type OrderShippable = {
        /**
         * Why not, in the very words POST /orders/{id}/ship would refuse with — including the hold reason where there is one. Null when `shippable` is true.
         */
        blocked_reason?: string | null;
        /**
         * How many positions still have an open quantity — the number of lines a shipment dialog would offer.
         */
        open_positions?: number;
        /**
         * The summed open quantity over those positions. Mixes units where the order does, so it is a headline figure, not a total to act on.
         */
        open_quantity?: number;
        /**
         * Just enough of the order to render the answer — the full row is GET /orders/{id}.
         */
        order?: OrderShippableOrder;
        /**
         * Every position of the order, in position order, each with its open quantity.
         */
        positions?: OrderShippablePosition[];
        /**
         * Whether a shipment would be accepted RIGHT NOW — the one question a "create shipment" button should be enabled on. False when the order is held, cancelled, completed, or has nothing open.
         */
        shippable?: boolean;
    }

    /**
     * Just enough of the order to render the answer — the full row is GET /orders/{id}.
     */
    export type OrderShippableOrder = {
        /**
         * Whether the order has SHIPPED, and the one dimension nobody writes: it is DERIVED after every quantity change from the positions' own bookkeeping. 'fulfilled' means shipped >= ordered − cancelled across all positions, 'partial' means something went out. Sending it has no effect; ship, cancel or return something and it moves.
         */
        fulfillment_status?: OrderFulfillmentStatus;
        /**
         * Why the order is held, in the words the shipping guard quotes back. Null when it is not held — releasing a hold clears it.
         */
        hold_reason?: string | null;
        /**
         * The order this answer is about.
         */
        id?: string;
        /**
         * The order number a human quotes — drawn from the tenant's order range at place-time, unique per tenant and never reused. It is NOT the id: every route addresses an order by uuid, and GET /orders?number=… is how a number becomes one.
         */
        number?: string;
        /**
         * A business stop, ORTHOGONAL to status: a held order keeps its lifecycle state and is refused at the guards. How far the hold reaches is the tenant's call (on_hold_blocks: shipping only, shipping and cancellation, or nothing at all).
         */
        on_hold?: boolean;
        /**
         * Where the order stands in its LIFECYCLE, and one of three independent status dimensions. 'pending' = created but not placed, an order waiting for approval; 'placed' = accepted, nothing shipped; 'in_fulfillment' = part of it has gone out, or all of it has and the tenant does not close on shipment; 'completed' and 'cancelled' end it. Moved by the action routes only — it is not writable through PUT /orders/{id}.
         */
        status?: OrderStatus;
    }

    /**
     * One order position with the quantity that may still be shipped, and the three numbers that quantity is made of. Every position of the order is here, including the ones with nothing left open — a dialog needs to show a fully shipped line as fully shipped, not omit it.
     */
    export type OrderShippablePosition = {
        /**
         * The article name as it stood at place-time, frozen. Falls back to the sku when the caller sent none — a position always reads as something.
         */
        name?: string;
        /**
         * The position, by the id a positions[] payload names it with. This is what POST /orders/{id}/ship expects — copy it, do not construct it.
         */
        order_item_id?: string;
        /**
         * The line number a human reads, and what the order is sorted by. Numbered in steps of the range's position_step (10, 20, 30) unless the caller set it explicitly — the gap is what lets a line be inserted later without renumbering.
         */
        position?: number;
        /**
         * The catalog product this line was taken from (the products app). Null on a custom line, and it stays a reference — the position keeps working after the product is retired.
         */
        product_id?: string | null;
        /**
         * How much was ORDERED on this position. Unchanged by anything that happens afterwards.
         */
        quantity?: number;
        /**
         * How much was cancelled and will never go out.
         */
        quantity_cancelled?: number;
        /**
         * quantity − shipped − cancelled: the budget POST /orders/{id}/ship guards this position against, and the largest quantity it will accept. Zero means the line is done.
         */
        quantity_open?: number;
        /**
         * How much has already gone out.
         */
        quantity_shipped?: number;
        /**
         * The article number as it stood at place-time, frozen with the rest of the line. The value an ERP and a warehouse both join on, and the one field a picker reads. Null only on a line that never had one.
         */
        sku?: string | null;
        /**
         * The unit the quantity is counted in — piece, metre, kilogram, package. Free text as the catalog carries it; this app does no conversion.
         */
        unit?: string | null;
    }

    /**
     * No payload — releasing the hold is a pure state transition, and it clears hold_reason with it. Send {}.
     */
    export type OrderUnholdRequest = {
    }

    /**
     * Narrow modification — these six columns and no others. Anything else in the body is ignored, and a body with none of them at all is a 400 naming the allowed set. A whole key REPLACES the value it names; there is no merge into an existing snapshot. Nothing here moves the order: status, payment and fulfillment travel through the action routes.
     */
    export type OrderUpdateRequest = {
        /**
         * The invoice address, FROZEN at place-time. Changing the customer's address afterwards does not change what this order was billed to. Replaced wholesale — send the whole address, not a patch of it.
         */
        billing_address?: object;
        /**
         * The ordering party as it was at place-time, FROZEN: a copy, not a reference, so the order still reads correctly after the customer record is renamed, merged or deleted. The caller decides what goes in; this app stores it and reads nothing out of it. Replaced wholesale — send the whole snapshot, not a patch of it.
         */
        buyer?: object;
        /**
         * The BUYER's own reference — their purchase-order number. Free text, not unique, never generated here: it exists so the paperwork can carry the number the buyer's accounts payable will look for. One of the few fields PUT /orders/{id} may still change.
         */
        customer_order_number?: string;
        /**
         * Free-form data belonging to the INTEGRATION side — an ERP's own bookkeeping about this order. Stored and returned untouched; nothing here reads it. Replaced wholesale.
         */
        metadata?: object;
        /**
         * The delivery address, FROZEN at place-time — what goes on the label of every shipment of this order. Null on an order that is never delivered (a service, a digital item, a collection). Replaced wholesale. This is the one correction that actually matters after placement: the label of every shipment still to go out is printed from it.
         */
        shipping_address?: object;
        /**
         * Free-form data belonging to the ORDERING side — carried through from the storefront or the cart and handed back untouched. One of the few fields PUT /orders/{id} may still change. Replaced wholesale.
         */
        user_data?: object;
    }

    /**
     * 
     */
    export type OrderVocabulary = {
        /**
         * This app's name — the part before the dot in the qualified id.
         */
        app?: string;
        /**
         * True when the values are the complete permitted set — always, since the routes enforce the ones the schema does not.
         */
        closed?: boolean;
        /**
         * The tone an unlabelled value gets.
         */
        default_tone?: OrderVocabularyTone;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        description?: string;
        /**
         * Which vocabulary this is — echoed from the path, and the part after the dot in the qualified id.
         */
        name?: OrderVocabularyName;
        /**
         * Who enforces the set: 'schema' = a CHECK constraint, 'app' = the routes.
         */
        source?: OrderVocabularySource;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        title?: string;
        /**
         * Every permitted value, in CONSTRAINT order — which for a status is lifecycle order, so a client can render them as a sequence without knowing one.
         */
        values?: OrderVocabularyValue[];
    }

    /**
     * 
     */
    export type OrderVocabularyIndex = {
        /**
         * This app's name — the part before the dot in the qualified id.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, without its values — fetch one with GET /orders/vocabularies/{name}.
         */
        vocabularies?: OrderVocabularySummary[];
    }

    /**
     * One vocabulary, named and titled but without its values.
     */
    export type OrderVocabularySummary = {
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        description?: string;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: OrderVocabularySummaryName;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        title?: string;
    }

    /**
     * One permitted value with the words and the badge tone a client should render for it.
     */
    export type OrderVocabularyValue = {
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        description?: string;
        /**
         * True when this value ENDS the lifecycle. Lets a reader ask "is this order still open?" instead of matching status names it guessed.
         */
        final?: boolean;
        /**
         * The value as stored — exactly what the CHECK constraint permits.
         */
        key?: string;
        /**
         * Only on 'return-resolutions': which return transition accepts this value. A settlement word on the refusal dialog is how the two sets got mixed up.
         */
        stage?: OrderResolutionStage;
        /**
         * Either one string, or a map of locale to string ({"en": …, "de": …}).
         */
        title?: string;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: OrderVocabularyTone;
    }

    /**
     * A buying COMPANY — the unit a contract, a credit limit and a price list belong to. Its people are `contacts`, and it is mirrored into platform auth as a team.
     */
    export type Organization = {
        /**
         * Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
         */
        branche?: string | null;
        /**
         * When this company record was created in this app. Not when the customer relationship began — an ERP import creates decade-old customers today.
         */
        created_at?: string;
        /**
         * Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero.
         */
        credit_limit?: number | null;
        /**
         * The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists.
         */
        customer_number?: string | null;
        /**
         * True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it.
         */
        delivery_block?: boolean;
        /**
         * Id of the platform TEAM this organization is mirrored as — what makes its people a team for storefront auth (sessions, SSO, mobile SDKs). Written by the mirror and ignored on every write a caller sends; null while the mirror has not run yet.
         */
        external_team_id?: string | null;
        /**
         * Primary key of the company record. Stable for its whole life; contacts, addresses, segment memberships and the metrics projection all point at it.
         */
        id?: string;
        /**
         * Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so.
         */
        lifecycle_stage?: string;
        /**
         * Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
         */
        name?: string;
        /**
         * When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business.
         */
        payment_terms?: string | null;
        /**
         * Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
         */
        price_list?: string | null;
        /**
         * Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing.
         */
        settings?: object | null;
        /**
         * ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out.
         */
        status?: OrganizationStatus;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * When any column of this row last changed.
         */
        updated_at?: string;
        /**
         * VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
         */
        vat_id?: string | null;
    }

    /**
     * 
     */
    export type OrganizationActivityRequest = {
        /**
         * Who logged it (operator id or email). Free text; this app does not resolve it.
         */
        actor?: string | null;
        /**
         * The person dealt with. Must be a contact of this organization.
         */
        contact_id: string;
        /**
         * What happened. 'system' is deliberately NOT accepted — those rows are the registration decision trail and are written by the approve/reject routes. Default 'note'.
         */
        kind?: ContactActivityKind;
        /**
         * The long form. Stored inside the event payload as `note`, not as a column of its own.
         */
        note?: string | null;
        /**
         * When it actually happened. Defaults to now — a call logged on Monday about Friday should say Friday.
         */
        occurred_at?: string | null;
        /**
         * One line a person can scan in a timeline. Required — an entry nobody can read at a glance is not worth the row.
         */
        subject: string;
    }

    /**
     * 
     */
    export type OrganizationCreateRequest = {
        /**
         * Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
         */
        branche?: string | null;
        /**
         * Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero. A create without it inherits the tenant's `default_credit_limit`.
         */
        credit_limit?: number | null;
        /**
         * The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
         */
        customer_number?: string | null;
        /**
         * True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
         */
        delivery_block?: boolean;
        /**
         * Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
         */
        lifecycle_stage?: string;
        /**
         * Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
         */
        name: string;
        /**
         * When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
         */
        payment_terms?: string | null;
        /**
         * Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
         */
        price_list?: string | null;
        /**
         * Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
         */
        settings?: object | null;
        /**
         * ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
         */
        status?: OrganizationStatus;
        /**
         * VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
         */
        vat_id?: string | null;
    }

    /**
     * What an organization has BOUGHT, materialized from the orders app. One row per organization — including all-zero rows for companies that never ordered, so a &#039;never bought anything&#039; rule has something to match.
     */
    export type OrganizationMetrics = {
        /**
         * revenue_total / order_count, computed here from the sums rather than averaged upstream. Zero when there are no orders.
         */
        avg_order_value?: number;
        /**
         * revenue_365d / order_count_365d. Zero when there were none in the window.
         */
        avg_order_value_365d?: number;
        /**
         * When this row was last written. The projection is materialized, so this is how stale the numbers are.
         */
        computed_at?: string;
        /**
         * When the projection row first appeared.
         */
        created_at?: string;
        /**
         * The single ISO 4217 currency all counted orders were in. NULL when there were none, and also when there were several — read `currency_mixed` to tell those two apart.
         */
        currency?: string | null;
        /**
         * True when this company ordered in more than one currency. The sums are still stored (dropping money is worse), but they are not comparable against a threshold, and a rule reading revenue should say so.
         */
        currency_mixed?: boolean;
        /**
         * When this company first ordered. Null if it never has — that is what makes it usable as "is this a customer at all?".
         */
        first_order_at?: string | null;
        /**
         * Primary key of the projection row.
         */
        id?: string;
        /**
         * When this company last ordered. Null if it never has, which is why the virtual `days_since_last_order` rule field never matches those companies: use `last_order_at is_empty` for them.
         */
        last_order_at?: string | null;
        /**
         * Orders ever counted for this company.
         */
        order_count?: number;
        /**
         * Orders in the 30 days before `orders_as_of`. A rolling window, not a calendar month.
         */
        order_count_30d?: number;
        /**
         * Orders in the 365 days before `orders_as_of`.
         */
        order_count_365d?: number;
        /**
         * Orders in the 90 days before `orders_as_of`.
         */
        order_count_90d?: number;
        /**
         * The instant the rolling windows were measured from. Pinned across a chunked refresh, so a multi-call pass cannot let the windows slide underneath it.
         */
        orders_as_of?: string | null;
        /**
         * The company these numbers describe. One row per organization, and rows exist for companies that never ordered — all zeros rather than missing, so a "never bought" rule matches something.
         */
        organization_id?: string;
        /**
         * Revenue in the 30 days before `orders_as_of`.
         */
        revenue_30d?: number;
        /**
         * Revenue in the 365 days before `orders_as_of`. The usual "how big is this customer" number, and the one a key-account rule should read.
         */
        revenue_365d?: number;
        /**
         * Revenue in the 90 days before `orders_as_of`.
         */
        revenue_90d?: number;
        /**
         * Revenue ever counted, in `currency`. Which orders count is the orders app's decision, not this app's.
         */
        revenue_total?: number;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * When the row last changed. Unchanged numbers are not rewritten, so this can lag `computed_at`.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type OrganizationMetricsFreshness = {
        /**
         * Companies with no metrics row yet. A rule reading revenue silently skips them, so this is the number to watch after an import.
         */
        missing?: number;
        /**
         * The OLDEST computed_at in the table — the floor, not an average. Null when there are no rows at all.
         */
        oldest_computed_at?: string | null;
        /**
         * The anchor those oldest numbers were measured from.
         */
        orders_as_of?: string | null;
        /**
         * Companies in this tenant.
         */
        organizations?: number;
        /**
         * Metrics rows that exist — at most one per company.
         */
        rows?: number;
    }

    /**
     * 
     */
    export type OrganizationMetricsRefreshRequest = {
        /**
         * Anchor for the rolling windows — pass back the value the previous call returned.
         */
        as_of?: string | null;
        /**
         * Continue an unfinished refresh: the value the previous call returned, verbatim. It is the id of the last organization processed, so only a value this API handed out ever resolves.
         */
        cursor?: string | null;
        /**
         * Refresh exactly these organizations in one call instead of walking all of them.
         */
        organization_ids?: string[] | null;
    }

    /**
     * 
     */
    export type OrganizationMetricsRefreshResponse = {
        /**
         * The instant the rolling windows are measured from. Send it back on every continuation — that is what stops the 30/90/365-day windows sliding while a multi-call refresh runs.
         */
        as_of?: string;
        /**
         * False if an insert had to fall back to row-at-a-time. A performance fact, not an error.
         */
        batched?: boolean;
        /**
         * Rollup calls made to the orders app — the cross-app cost of this pass.
         */
        batches?: number;
        /**
         * Where to resume: the id of the last organization this call processed. Send it back verbatim; null when the pass finished. No example is published — the value names a row in THIS tenant, and `cursor: "sample cursor"` reaches PostgREST as a malformed uuid and comes back as a 400 nobody can read.
         */
        cursor?: string | null;
        /**
         * False means the budget ran out with work left — POST again with the returned `cursor` AND `as_of`.
         */
        done?: boolean;
        /**
         * Metrics rows created — organizations that had none yet.
         */
        inserted?: number;
        /**
         * Orders the orders app counted while answering this call.
         */
        orders_scanned?: number;
        /**
         * Orders the orders app could not attribute to a company (B2C/guest). They belong to no organization and land in no metrics row.
         */
        orders_without_organization?: number;
        /**
         * Organizations processed by THIS call.
         */
        organizations?: number;
        /**
         * Rows that already said the same thing — no write was issued. A routine refresh is almost all of these.
         */
        unchanged?: number;
        /**
         * Metrics rows whose numbers actually changed.
         */
        updated?: number;
        /**
         * Of those, how many have at least one counted order.
         */
        with_orders?: number;
    }

    /**
     * Partial update — omitted fields keep their current value; external_team_id is mirror-managed and ignored.
     */
    export type OrganizationUpdateRequest = {
        /**
         * Industry / line of business, in the merchant's own words. Free text: no NACE code, no WZ number, no list to pick from — whatever somebody typed on the company. Segment rules read it, and both `?branche=` and an `eq` condition match it EXACTLY and case-sensitively, so 'Maschinenbau' and 'maschinenbau' are two different industries. Indexed, so it stays cheap to filter on.
         */
        branche?: string | null;
        /**
         * Ceiling on open receivables in the market's currency, and one of the inputs that decide whether an order is accepted at all. Null means NO limit — not a limit of zero. A create without it inherits the tenant's `default_credit_limit`.
         */
        credit_limit?: number | null;
        /**
         * The number this company carries in the merchant's own ERP — the key an ERP integration joins on, and what a service desk asks for on the phone. Free text with NO enforced format (a letter prefix and a running number is the common shape, but plain digits are just as valid), unique per tenant while it is set, and one of the fields duplicate detection can be pointed at. The real values come out of the merchant's ERP; nothing published here can name one that exists. A second company with the same number is a 409.
         */
        customer_number?: string | null;
        /**
         * True stops SHIPMENTS to this company while leaving login and ordering alone — the "they may order, we are just not sending anything until this is settled" state. Separate from `status` on purpose: blocking the login to stop a delivery locks out the people who could settle it. Default false.
         */
        delivery_block?: boolean;
        /**
         * Where the company stands in the SALES PIPELINE, and a deliberately separate axis from `status`: a prospect that may log in and a customer that may not are both ordinary states, and one column cannot say that. One of the tenant's own stages (GET /customers/lifecycle-stages) — a fresh install starts with lead, prospect, customer, churned, and the merchant may add their own. Nothing moves it automatically; a stage changes when a person or an integration says so. A create without it gets the stage flagged as default; a value the tenant does not keep is a 400.
         */
        lifecycle_stage?: string;
        /**
         * Legal or trading name of the COMPANY — never a person. Mirrored to the platform team, so a rename here is a rename in storefront auth too.
         */
        name?: string;
        /**
         * When this company has to pay — one of the tenant's own terms (GET /customers/payment-terms, seeded with prepayment, direct_debit, net_7/14/30/60/90). Null means nothing was agreed and the order flow falls back to the market's `default_payment_terms`. This is a commercial term, not a payment method: HOW they pay is the payments app's business. A create without it inherits the market's `default_payment_terms`; a value the tenant does not keep is a 400.
         */
        payment_terms?: string | null;
        /**
         * Code of the price list this company buys on — plain text pointing into the prices app. ADR-0055 forbids the cross-app foreign key, so nothing here checks it: a code that names no list simply prices nothing. `standard` is the list the prices app seeds on install.
         */
        price_list?: string | null;
        /**
         * Free-form per-organization settings, keyed by whatever the merchant's own integrations agree on — this app never branches on a key in here. Segment rules can address a TOP-LEVEL key as `setting:<key>`, which is the whole reason the blob survives: a flag an ERP writes here selects a segment without a schema change. Commercial terms are typed columns now (payment_terms, credit_limit); writing them back in here leaves the checkout reading the column and finding nothing. Replaced wholesale on an update — send the whole object, not a patch of it.
         */
        settings?: object | null;
        /**
         * ACCESS, not pipeline: 'blocked' stops this company's people from logging in and is where a rejected registration parks the company it founded. 'active' is the default. For how far along a company is, read `lifecycle_stage` — reading this one for that is how a won deal gets locked out. Default 'active'.
         */
        status?: OrganizationStatus;
        /**
         * VAT identification number (USt-IdNr. in Germany) — the closest thing a B2B buyer has to a legal identity. Validated against the EU VIES service when the tenant's `organization_vat_id_required` setting is on, and stored verbatim otherwise, including for buyers outside the EU.
         */
        vat_id?: string | null;
    }

    /**
     * One addressable page of the storefront: its metadata and publish pointer. Its CONTENT is not here — blocks live behind the editor and delivery routes.
     */
    export type Page = {
        /**
         * Identifiers of findings the blökkli analyze feature was told to stop reporting for this page. Written by the `set_ignored_analyze` mutation and carried through publish, so dismissing a finding survives the next edit.
         */
        analyze_ignored?: string[];
        /**
         * The page TYPE, e.g. `standard` or a landing-page type the theme defines. It decides which fields the editor offers and which template the theme renders; the value set belongs to the active theme, not to this app.
         */
        bundle?: string;
        /**
         * When the page was created.
         */
        created_at?: string;
        /**
         * The user id that created the page.
         */
        created_by?: string | null;
        /**
         * The tombstone. A soft-deleted page is never listed, never delivered and answers 404 — and it drops out of the unique slug index at once, so deleting a page frees its slug immediately.
         */
        deleted_at?: string | null;
        /**
         * Page-level blökkli display options, as a flat `option key → value` map — the options that belong to the PAGE rather than to a block (background, width, whether the header is shown). The keys are defined by the theme; this app stores whatever the `update_host_options` mutation set.
         */
        host_options?: object;
        /**
         * The page id. Every editor and delivery route addresses a page by it, and it never changes — publishing replaces a page's blocks, never the page.
         */
        id?: string;
        /**
         * The page's free-form metadata bag — SEO fields, social preview data, whatever the theme asks the editor for. Nothing in this app reads a key of it: it is stored, versioned into revisions and handed back to the renderer untouched, so the theme owns its shape.
         */
        meta?: object;
        /**
         * The revision the storefront is currently serving. `null` means nothing has ever been published, and delivery answers 404 for the page even when `status` says `published`.
         */
        published_revision_id?: string | null;
        /**
         * The path segment the storefront routes this page under, without a leading slash. Unique per tenant among live pages, and `null` for a page that is only ever reached by id. `GET /pages/delivery/page?slug=` matches it first and the translations second.
         */
        slug?: string | null;
        /**
         * The language the page was authored in. It is the fallback for every field a translation leaves empty, so a page never renders as a hole.
         */
        source_language?: string;
        /**
         * Where the page sits in the editorial lifecycle. Only `published` is ever delivered, and only together with a `published_revision_id`.
         */
        status?: PageStatus;
        /**
         * The page title as an editor typed it, in the page's source language. Publishing overwrites it with the title the edit state carries, so this is always the last published (or last saved) wording.
         */
        title?: string;
        /**
         * When the page last changed. The default sort of `GET /pages/pages` is this column descending, because "what did we touch last" is the question an editorial list is opened with.
         */
        updated_at?: string;
        /**
         * The user id that last changed the page — set by an update, a soft delete and by publishing.
         */
        updated_by?: string | null;
    }

    /**
     * The block and everything under it, serialized. This is the payload: every page that references the item renders THIS tree, so editing it here changes every placement at once.
     */
    export type PageBlockTree = {
        /**
         * The block type — `hero`, `text`, `teaser`, whatever the active theme defines. It decides which component renders it and which props it carries.
         */
        bundle?: string;
        /**
         * Nested blocks, keyed by the field they sit in — `{ "content": [...], "buttons": [...] }`. Absent on a leaf block.
         */
        children?: object;
        /**
         * The theme fragment this block renders instead of a props-driven component, or `null` for an ordinary block. Theme-defined, like a bundle.
         */
        fragment_name?: string | null;
        /**
         * blökkli display options for this block, as a flat `option key → value` map (variant, spacing, background). Theme-defined, set by the `update_options` mutation.
         */
        options?: object;
        /**
         * The block's field values in the page's SOURCE language, as a flat `field name → value` map. The field names are the theme's; this app stores and replays them without reading one.
         */
        props?: object;
        /**
         * Per-language overrides of `props`, keyed by langcode: `{ "en": { "title": "About us" } }`. A field missing for a language falls back to `props`, which is why a half-translated page still renders.
         */
        props_i18n?: object;
    }

    /**
     * A new comment. Send `blockUuids` for a thread anchored to blocks, `parentUuid` for a reply.
     */
    export type PageCommentCreateRequest = {
        /**
         * The blocks this thread is about, so the editor can draw a marker next to them. Leave empty for a comment about the page as a whole.
         */
        blockUuids?: string[] | null;
        /**
         * The comment, as editor HTML. `<span data-type="mention" data-id="USER_ID">` is what this app reads to decide whom to notify; `<li data-type="taskItem" data-checked="false">` makes a checkbox the toggle-task route can flip.
         */
        body: string;
        /**
         * The root comment this replies to. Omit for a new thread — only roots can be resolved.
         */
        parentUuid?: string | null;
    }

    /**
     * One comment, in the shape the editor renders — this is not the stored row: the id is `uuid`, the timestamps are `created`/`updated` and the author is nested under `user`.
     */
    export type PageCommentItem = {
        /**
         * The blocks this thread hangs on, so the editor can draw a marker next to them. Empty for a comment about the page as a whole.
         */
        blockUuids?: string[];
        /**
         * The comment itself, as editor HTML. @mentions are `<span data-type="mention" data-id="…">` — that is what this app reads to decide whom to notify — and task checkboxes are `<li data-type="taskItem" data-checked="…">`.
         */
        body?: string;
        /**
         * When the comment was written.
         */
        created?: string;
        /**
         * The root comment this is a reply to. Absent on a root — and only roots can be resolved.
         */
        parentUuid?: string | null;
        /**
         * Whether the thread was marked done. Replies inherit nothing: resolving is a property of the root.
         */
        resolved?: boolean;
        /**
         * When it was last edited. Absent when it never was.
         */
        updated?: string | null;
        /**
         * Who wrote it, or `null` when it was written without an identity.
         */
        user?: object | null;
        /**
         * The comment id. Every comment route addresses one by it.
         */
        uuid?: string;
    }

    /**
     * Every comment of the page, roots and replies flat in one list, oldest first — the editor builds the threads from `parentUuid`. Every write route answers this same full list rather than the row it changed.
     */
    export type PageCommentList = {
        /**
         * The page's comments, oldest first.
         */
        items?: PageCommentItem[];
    }

    /**
     * Which checkbox to flip.
     */
    export type PageCommentTaskRequest = {
        /**
         * The task item to toggle, counted in document order from 0. A comment with fewer tasks than that answers 400, and so does anything that is not a whole number at or above 0.
         */
        taskIndex: number;
    }

    /**
     * The new body. Nothing else about a comment is editable.
     */
    export type PageCommentUpdateRequest = {
        /**
         * The comment, as editor HTML. Replaces the old body completely.
         */
        body: string;
    }

    /**
     * A new page. Only the title is yours to supply — everything else has a tenant default behind it.
     */
    export type PageCreateRequest = {
        /**
         * The page type. Omit to take the default_page_bundle setting.
         */
        bundle?: string | null;
        /**
         * Page-level blökkli display options as a flat `option key → value` map. Theme-defined; usually left out and set later from the editor.
         */
        hostOptions?: object | null;
        /**
         * The page's metadata bag (SEO and social fields). Stored and handed back untouched — this app reads no key of it, so the theme decides what goes in.
         */
        meta?: object | null;
        /**
         * The path segment the storefront routes it under, without a leading slash. Unique per tenant among live pages; omit or send null for a page reached only by id. Nothing here derives one from the title.
         */
        slug?: string | null;
        /**
         * The language you are authoring in, and the fallback for every later translation. Omit to take the default_source_language setting for the request market.
         */
        sourceLanguage?: string | null;
        /**
         * What the page is called, in its source language. Shown in the editorial list and searched by `?q=`.
         */
        title: string;
    }

    /**
     * Where to put the undo pointer.
     */
    export type PageHistoryRequest = {
        /**
         * The position in the mutation log to materialize at. `-1` undoes everything; the last position redoes everything. Values outside the log are clamped rather than refused.
         */
        index: number;
        /**
         * Which language the returned state should be resolved for.
         */
        langcode?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value. Every page that references this item renders the new tree the next time it is delivered, which is the whole point of the library and the whole risk of editing one.
     */
    export type PageLibraryItemUpdateRequest = {
        /**
         * The block type this item instantiates. Changing it moves the item to a different part of the picker.
         */
        bundle?: string;
        /**
         * What the item is called in the picker.
         */
        label?: string;
        /**
         * A block and its whole subtree, serialized. Produced by the editor when a selection is made reusable or saved as a template, and instantiated back into real blocks when one is inserted.
         */
        tree?: PageBlockTree;
    }

    /**
     * One entry of a navigation menu. Stored verbatim, so a theme may carry extra keys of its own alongside these.
     */
    export type PageMenuItem = {
        /**
         * Sub-entries. This is how a two-level main navigation or a grouped footer is stored.
         */
        items?: object[];
        /**
         * The words a visitor clicks.
         */
        label?: string;
        /**
         * Where the entry goes: a page slug this app serves, a path the theme routes, or an absolute URL to somewhere else.
         */
        to?: string;
    }

    export type DefaultPageMenuItem = PageMenuItem & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Which entry of the history to switch, and to what.
     */
    export type PageMutationStatusRequest = {
        /**
         * Whether the entry takes part in the replay.
         */
        enabled: boolean;
        /**
         * The position in the mutation log to switch. Unknown positions answer 404.
         */
        index: number;
        /**
         * Which language the returned state should be resolved for.
         */
        langcode?: string | null;
    }

    /**
     * How long the link should live.
     */
    export type PagePreviewGrantRequest = {
        /**
         * Hours until the link expires. Defaults to 72. After that `GET /pages/delivery/preview/{token}` answers 410 rather than 404, so the holder can tell "expired" from "wrong link".
         */
        ttlHours?: number;
    }

    /**
     * What to record about this publication.
     */
    export type PagePublishRequest = {
        /**
         * Publish despite violations. Without it a page with unresolved violations answers 422 and nothing is written.
         */
        force?: boolean | null;
        /**
         * What to call this publication in the page's history — "Autumn campaign" rather than a timestamp.
         */
        label?: string | null;
    }

    /**
     * One publication of this page, without the snapshot — who published, when, and under what name.
     */
    export type PageRevisionRef = {
        /**
         * When this revision was published.
         */
        created_at?: string;
        /**
         * The user id that published.
         */
        created_by?: string | null;
        /**
         * That user's display name, copied in at publish time so the history stays readable after the user is gone.
         */
        created_by_name?: string | null;
        /**
         * The revision id. A page's `published_revision_id` points at one of these, and it is the only thing delivery reads.
         */
        id?: string;
        /**
         * What this publication was called, e.g. "Autumn campaign". It is what turns the history into a list of changes rather than a list of timestamps.
         */
        label?: string | null;
        /**
         * The page this revision belongs to.
         */
        page_id?: string;
    }

    /**
     * When this working copy should go live.
     */
    export type PageScheduleRequest = {
        /**
         * The moment to publish at. Stored on the edit state and echoed back normalized to UTC.
         */
        scheduledAt: string;
    }

    /**
     * The blocks to freeze, and where the template should be offered.
     */
    export type PageTemplateCreateRequest = {
        /**
         * A sentence about when to reach for it.
         */
        description?: string | null;
        /**
         * The field this template should be offered in. Null offers it in every field.
         */
        fieldName?: string | null;
        /**
         * Whether a new page of that type should start from this template.
         */
        isDefault?: boolean | null;
        /**
         * What the template is called in the picker.
         */
        label: string;
        /**
         * The page type this template should be offered on. Omit to take the current page's own type.
         */
        pageBundle?: string | null;
        /**
         * The blocks to serialize into the template, each with its whole subtree. They are read from the CURRENT edit state, so unpublished changes are included.
         */
        uuids: string[];
    }

    /**
     * Partial update — omitted fields keep their current value. A template is a COPY source, so changing it never reaches the pages already made from it.
     */
    export type PageTemplateUpdateRequest = {
        /**
         * A sentence about when to reach for it, shown next to the label.
         */
        description?: string | null;
        /**
         * The field this template is offered in. Null offers it in every field.
         */
        field_name?: string | null;
        /**
         * Whether a new page of this bundle starts from this template.
         */
        is_default?: boolean;
        /**
         * What the template is called in the picker.
         */
        label?: string;
        /**
         * The page type this template is offered on. Null offers it on every page type.
         */
        page_bundle?: string | null;
        /**
         * The blocks the template inserts, in order. Replaces the stored tree completely.
         */
        tree?: PageBlockTree[];
    }

    /**
     * The strings to translate. They are forwarded to the tenant&#039;s provider verbatim.
     */
    export type PageTranslateRequest = {
        /**
         * The strings to translate. This app reads no element of the list — the provider defines the contract, and the blökkli adapter sends the fields below.
         */
        items?: object[] | null;
    }

    /**
     * Partial update — only title, slug, status, meta and bundle are applied; other keys are ignored. The page&#039;s CONTENT is never edited here: blocks change through the editor&#039;s mutation log.
     */
    export type PageUpdateRequest = {
        /**
         * The page type. Changing it changes which template the theme renders.
         */
        bundle?: string;
        /**
         * The page's metadata bag. Replaced wholesale, not merged.
         */
        meta?: object;
        /**
         * The path segment the storefront routes it under. Sending a slug another live page holds answers 409; sending null makes the page unreachable by path.
         */
        slug?: string | null;
        /**
         * The lifecycle status. Setting `published` here does NOT publish content — delivery still needs a revision, which only `POST /pages/editor/{page_id}/publish` writes.
         */
        status?: PageStatus;
        /**
         * The page title in its source language.
         */
        title?: string;
    }

    /**
     * The preferences to store for the calling user.
     */
    export type PageUserSettingsRequest = {
        /**
         * The whole preferences bag — replaced, not merged, so send all of it. Its keys vary by the editor build and this app reads none of them. Null or omitted stores `{}`, which is how a user resets their editor.
         */
        settings?: object | null;
    }

    /**
     * One vocabulary and every value it permits.
     */
    export type PagesVocabulary = {
        /**
         * Always 'pages'.
         */
        app?: PagesVocabularyApp;
        /**
         * The set is exhaustive, so a value outside it is stale data rather than a missing label.
         */
        closed?: boolean;
        /**
         * The badge colour a value nobody toned falls back to.
         */
        default_tone?: PagesVocabularyTone;
        /**
         * What the set is for, or null. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The vocabulary name, echoed.
         */
        name?: PagesVocabularyName;
        /**
         * Always 'schema' — the values are parsed from the column's CHECK constraint, which is why the served set cannot drift from the enforced one.
         */
        source?: PagesVocabularySource;
        /**
         * What this set of values is called. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in the order the constraint lists them — which is the order a select should offer.
         */
        values?: PagesVocabularyValue[];
    }

    /**
     * Which vocabularies this app publishes.
     */
    export type PagesVocabularyIndex = {
        /**
         * Always 'pages' — the first half of the qualified id a client holds.
         */
        app?: PagesVocabularyIndexApp;
        /**
         * One entry per vocabulary, without its values.
         */
        vocabularies?: PagesVocabularyRef[];
    }

    /**
     * One vocabulary, named but not unpacked.
     */
    export type PagesVocabularyRef = {
        /**
         * What the set is for, or null. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The name to fetch it by — the part after the dot in the qualified id.
         */
        name?: string;
        /**
         * What this set of values is called. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
    }

    /**
     * One permitted value of a vocabulary, with everything needed to render it.
     */
    export type PagesVocabularyValue = {
        /**
         * When to use this value, or null when nobody wrote one. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The value ends the lifecycle.
         */
        final?: boolean;
        /**
         * The value as the database stores and enforces it.
         */
        key?: string;
        /**
         * What a person reads. Falls back to a humanized key. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: PagesVocabularyTone;
    }

    /**
     * 
     */
    export type Payment = {
        /**
         * What the provider is asked to authorize, in `currency`. 0 is legal (a free order) and negative is refused by the handler and by the CHECK behind it. `fee_amount` is recorded beside this and is NOT added to it — a checkout that charges its payment surcharge sends a total that already includes it.
         */
        amount?: number;
        /**
         * When the money was reserved — or, for invoice and prepayment, when it became owed. The clock the capture window and the dunning stages are measured from.
         */
        authorized_at?: string | null;
        /**
         * When the money was actually taken. The refund window is measured from here.
         */
        captured_at?: string | null;
        /**
         * The cart this payment pays for. Not a foreign key: the payment is a record of what happened and outlives the cart. Indexed, so it is the cheap way to find the payment behind a checkout.
         */
        cart_id?: string | null;
        /**
         * The paying customer contact. Not a foreign key — a payment must survive a contact being merged or erased. Indexed.
         */
        contact_id?: string | null;
        /**
         * When the payment was created. The dunning clock for invoice and prepayment runs from here.
         */
        created_at?: string;
        /**
         * ISO 4217 code the amount and the fee are in. The database bounds the length at three characters and nothing else, so lower case is stored as written.
         */
        currency?: string;
        /**
         * When the NEXT dunning stage falls due — the moment a reminder becomes due, then the moment it becomes overdue. null once nothing further is pending, which includes an already overdue payment and every paid, cancelled or refunded one.
         */
        dunning_due_at?: string | null;
        /**
         * How overdue an unpaid self-managed payment is: 'none', 'reminder' or 'overdue'. Written by the daily dunning scan from the merchant's two thresholds, and reset the moment the money arrives or the claim is dropped. It classifies and never sends: what a reminder looks like is the merchant's own workflow.
         */
        dunning_stage?: PaymentDunningStage;
        /**
         * The class of failure, out of a fixed taxonomy — the value to branch on. null unless the payment failed. The five classes say what a caller can DO: 'provider_unavailable', 'provider_unreachable', 'provider_not_configured', 'provider_declined', 'provider_error' — a provider that is unreachable or unavailable is worth a retry, a declined payment needs a different method from the buyer, and a provider that is not configured needs an operator.
         */
        error_code?: PaymentFailureCode;
        /**
         * One operator-facing sentence, fixed per `error_code`. Never the provider's or the runtime's own wording: that is unbounded internal text and it stays in the app log.
         */
        error_message?: string | null;
        /**
         * When the payment failed. `error_code` says which class of failure.
         */
        failed_at?: string | null;
        /**
         * The method surcharge as it was computed at creation, in `currency`. Kept so the fee that was quoted stays readable after the method's fee configuration changes.
         */
        fee_amount?: number;
        /**
         * Id of the payment. Every lifecycle route addresses it, and it is what the drivers send the provider as their merchant transaction reference.
         */
        id?: string;
        /**
         * The caller's own key for this creation attempt. Sending it again answers the SAME payment with 200 instead of creating a second one — which is what makes a retried checkout safe. Unique per tenant, so a filter on it answers at most one row.
         */
        idempotency_key?: string | null;
        /**
         * Copied from the method at creation. 'self_managed' payments move through the lifecycle without a PSP; 'psp' payments are driven by `provider`.
         */
        kind?: PaymentMethodKind;
        /**
         * Whatever the creating call sent, plus the keys this app writes onto it. The app's own: `provider_method` (the method's provider-side id, copied at creation), `return_url` (where the PSP sends the buyer back), `cancel_reason` / `refund_reason` (the operator's words from the cancel and refund routes, also handed to the provider) and `provider_fallback_from` (the provider that was WANTED, written when the tenant's fallback_provider stood in — the only record of why the money went through a different acquirer). Free jsonb; a caller's own keys are kept untouched beside these.
         */
        metadata?: object | null;
        /**
         * The `code` of the payment method this payment was made with, copied at creation. Deliberately a code and not a foreign key: the ledger records what happened and has to outlive the configuration it happened under.
         */
        method_code?: string;
        /**
         * What the storefront must do before this payment can go any further, or null when there is nothing to do. It is set exactly when `status` is `requires_action`, and every transition clears it. One shape exists today: `{ "type": "redirect", "url": … }` — send the buyer to `url` (that is also where a 3-D Secure challenge is presented, because the connector hands it back as a redirect), and when they come back call POST /payments/{id}/confirm. `type` is what to branch on; a client that does not recognise it must not guess.
         */
        next_action?: object | null;
        /**
         * The external order reference the checkout wrote onto the payment. It is what POST /payments/orders/{order_ref}/capture resolves and the fallback key a PSP webhook is matched on when it carries no transaction id — so an integration that leaves it null gives up both. Free text with no uniqueness: several payments may share one reference.
         */
        order_ref?: string | null;
        /**
         * The PSP the money really went through — resolved at creation and rewritten if the tenant's fallback provider stood in, in which case `metadata.provider_fallback_from` records what was meant. null for self-managed payments.
         */
        provider?: string | null;
        /**
         * The provider's own transaction id, as it answered — the value to quote in a PSP support case, and the primary key a webhook is matched on. Shaped by the provider, so nothing here constrains it; null until a provider has answered, and always null for self-managed payments.
         */
        psp_payment_id?: string | null;
        /**
         * When the payment was refunded in full — this app has no partial refund to record.
         */
        refunded_at?: string | null;
        /**
         * Where the payment stands. 'created' → 'requires_action' → 'authorized' → 'captured' → 'refunded', with 'failed' and 'cancelled' ending it. GET /payments/vocabularies/statuses serves the same set with labels, badge tones and which of them are final.
         */
        status?: PaymentStatus;
        /**
         * The tenant the row belongs to — the same slug the request carried in `X-Revenexx-Tenant`. Added by the platform rather than by this app, and echoed so a caller that fans several tenants into one store can tell the rows apart.
         */
        tenant_id?: string;
        /**
         * When the row last moved. For a PSP payment still waiting on a callback this is what the webhook-staleness check measures against, so an old payment that changed a minute ago counts as progressing.
         */
        updated_at?: string;
    }

    /**
     * Creates AND authorizes: self-managed methods authorize immediately, PSP methods may answer next_action (redirect). Eligibility is re-checked server-side.
     */
    export type PaymentCreateRequest = {
        /**
         * What the provider is asked to authorize, in `currency`. 0 is legal (a free order) and negative is refused by the handler and by the CHECK behind it. `fee_amount` is recorded beside this and is NOT added to it — a checkout that charges its payment surcharge sends a total that already includes it.
         */
        amount: number;
        /**
         * The cart this payment pays for. Not a foreign key: the payment is a record of what happened and outlives the cart. Indexed, so it is the cheap way to find the payment behind a checkout.
         */
        cart_id?: string | null;
        /**
         * The paying customer contact. Not a foreign key — a payment must survive a contact being merged or erased. Indexed.
         */
        contact_id?: string | null;
        /**
         * The buyer's ISO 3166-1 alpha-2 country code, for the eligibility check. A method restricted to countries is refused with 422 without it.
         */
        country?: string | null;
        /**
         * ISO 4217 code the amount and the fee are in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR.
         */
        currency?: string;
        /**
         * The caller's own key for this creation attempt. Sending it again answers the SAME payment with 200 instead of creating a second one — which is what makes a retried checkout safe. Unique per tenant, so a filter on it answers at most one row. The replay answers 200, not 201.
         */
        idempotency_key?: string | null;
        /**
         * Free-form data to keep on the payment. Merged with the keys this app writes itself (`provider_method`, `return_url`, later the cancel/refund reasons), which win on a collision.
         */
        metadata?: object | null;
        /**
         * The `code` of the payment method this payment was made with, copied at creation. Deliberately a code and not a foreign key: the ledger records what happened and has to outlive the configuration it happened under. It must name a method this tenant has configured; eligibility for the buyer context below is re-checked here, whatever the checkout showed.
         */
        method_code: string;
        /**
         * The external order reference the checkout wrote onto the payment. It is what POST /payments/orders/{order_ref}/capture resolves and the fallback key a PSP webhook is matched on when it carries no transaction id — so an integration that leaves it null gives up both. Free text with no uniqueness: several payments may share one reference.
         */
        order_ref?: string | null;
        /**
         * Where the PSP sends the buyer back after a redirect or a 3-D Secure challenge. Kept in `metadata.return_url` and handed to the driver — a PSP method that needs a redirect and has none leaves the buyer stranded at the provider.
         */
        return_url?: string | null;
    }

    /**
     * The buyer context — restriction dimensions are ANDed, entries within a dimension ORed, empty = unrestricted.
     */
    export type PaymentEligibilityRequest = {
        /**
         * The order amount the order-value bounds are checked against and the percentage fees are computed from. Defaults to 0, which excludes every method carrying a minimum. Nothing is written, so the ledger's own amount bound does not apply here.
         */
        amount?: number | null;
        /**
         * The buyer's ISO 3166-1 alpha-2 country code. A method restricted to countries is excluded without it — an unknown buyer sees only the unrestricted methods, which is the safe default and not a bug.
         */
        country?: string | null;
        /**
         * ISO 4217 code the amount is in, echoed onto every computed fee. Defaults to EUR. This app does no conversion: the fee comes back in the currency it was asked with.
         */
        currency?: string | null;
    }

    /**
     * 
     */
    export type PaymentErrorRedactRequest = {
        /**
         * Write the reclassified values. Defaults to false, which reports what WOULD change and touches nothing.
         */
        apply?: boolean | null;
        /**
         * How many payments to scan, oldest first. Defaults to 500, capped at 5000 — a tenant with more pre-taxonomy rows needs several runs, and re-running is free.
         */
        limit?: number | null;
    }

    /**
     * 
     */
    export type PaymentMethod = {
        /**
         * The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it.
         */
        code?: string;
        /**
         * Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
         */
        countries?: string[] | null;
        /**
         * When this configuration was created.
         */
        created_at?: string;
        /**
         * One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
         */
        description?: string | null;
        /**
         * A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409.
         */
        enabled?: boolean;
        /**
         * The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here.
         */
        fee_amount?: number;
        /**
         * ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written.
         */
        fee_currency?: string;
        /**
         * How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount).
         */
        fee_type?: PaymentFeeType;
        /**
         * Id of the configuration row. A payment names its method by `code`, never by this — so an id is only ever used to address the configuration itself.
         */
        id?: string;
        /**
         * Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it.
         */
        kind?: PaymentMethodKind;
        /**
         * Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
         */
        labels?: object | null;
        /**
         * Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
         */
        max_order_value?: number | null;
        /**
         * Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
         */
        metadata?: object | null;
        /**
         * Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
         */
        min_order_value?: number | null;
        /**
         * Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`.
         */
        name?: string;
        /**
         * Sort order at checkout, ascending — the merchant's preferred payment method first.
         */
        position?: number;
        /**
         * The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting.
         */
        provider?: string | null;
        /**
         * The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
         */
        provider_method?: string | null;
        /**
         * The tenant the row belongs to — the same slug the request carried in `X-Revenexx-Tenant`. Added by the platform rather than by this app, and echoed so a caller that fans several tenants into one store can tell the rows apart.
         */
        tenant_id?: string;
        /**
         * When it was last changed. The eligibility answer is computed live, so this is the age of the configuration and not of any cached result.
         */
        updated_at?: string;
    }

    /**
     * A method needs its identity: code + name.
     */
    export type PaymentMethodCreateRequest = {
        /**
         * The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it. Required on create.
         */
        code: string;
        /**
         * Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
         */
        countries?: string[] | null;
        /**
         * One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
         */
        description?: string | null;
        /**
         * A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409. Defaults to false, so a half-configured method cannot reach a checkout by accident.
         */
        enabled?: boolean;
        /**
         * The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here. Defaults to 0.
         */
        fee_amount?: number;
        /**
         * ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR, and lower case is accepted here exactly as the handlers accept it.
         */
        fee_currency?: string;
        /**
         * How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount). Defaults to 'none'.
         */
        fee_type?: PaymentFeeType;
        /**
         * Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it. Defaults to 'self_managed'; 'psp' needs a 'provider' to transact.
         */
        kind?: PaymentMethodKind;
        /**
         * Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
         */
        labels?: object | null;
        /**
         * Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
         */
        max_order_value?: number | null;
        /**
         * Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
         */
        metadata?: object | null;
        /**
         * Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
         */
        min_order_value?: number | null;
        /**
         * Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`. Required on create.
         */
        name: string;
        /**
         * Sort order at checkout, ascending — the merchant's preferred payment method first. Defaults to 0.
         */
        position?: number;
        /**
         * The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting. Must be a code GET /payments/providers/catalog carries.
         */
        provider?: string | null;
        /**
         * The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
         */
        provider_method?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type PaymentMethodUpdateRequest = {
        /**
         * The machine name of the method, unique per tenant and lower case by convention ('invoice', 'prepayment', 'card', 'paypal'). It is the string the checkout asks for, the string every payment stores, and therefore the one value here that cannot be changed freely: renaming it would leave the ledger naming something that no longer exists, so it is refused with 409 for as long as any payment names it. Required on create.
         */
        code?: string;
        /**
         * Allowed ISO 3166-1 alpha-2 country codes, compared upper-cased against the buyer country. null or an empty list means unrestricted — the invoice method this app seeds is restricted to DE, which is why an eligibility call without a country sees it excluded.
         */
        countries?: string[] | null;
        /**
         * One line explaining the method where it is offered — payment terms, what happens after the order. Shown to the buyer, so it is the merchant's wording rather than the app's.
         */
        description?: string | null;
        /**
         * A disabled method is never eligible and never reaches a checkout. This is the switch an operator wants: deleting a method the ledger still names — or renaming its `code` — is refused with 409. Defaults to false, so a half-configured method cannot reach a checkout by accident.
         */
        enabled?: boolean;
        /**
         * The surcharge this method costs the buyer, read as an amount or as a percentage depending on `fee_type`. Never negative — a discount for paying a certain way is not expressible here. Defaults to 0.
         */
        fee_amount?: number;
        /**
         * ISO 4217 code a fixed fee is expressed in. The database bounds the length at three characters and nothing else, so lower case is stored as written. Defaults to EUR, and lower case is accepted here exactly as the handlers accept it.
         */
        fee_currency?: string;
        /**
         * How `fee_amount` applies: 'none' (no surcharge), 'fixed' (that many units of `fee_currency`) or 'percent' (that share of the order amount). Defaults to 'none'.
         */
        fee_type?: PaymentFeeType;
        /**
         * Who moves the money. 'self_managed' — invoice, prepayment — means the merchant fulfils and reconciles it outside any PSP, and such a payment authorizes the moment it is created. 'psp' means a configured provider authorizes, captures and refunds it. Defaults to 'self_managed'; 'psp' needs a 'provider' to transact.
         */
        kind?: PaymentMethodKind;
        /**
         * Buyer-facing names keyed by language tag — what a storefront shows instead of the operator-facing `name`. Free jsonb: the database constrains neither the tags nor the values, so a client reads the tag it wants and falls back to `en`.
         */
        labels?: object | null;
        /**
         * Largest order amount this method may be used for — the usual credit-risk cap on invoice and prepayment. null means no upper bound.
         */
        max_order_value?: number | null;
        /**
         * Free-form merchant data carried on the configuration. This app never reads it — it is storage for the integrations that do (an ERP key for the method, a ledger account, a display hint).
         */
        metadata?: object | null;
        /**
         * Smallest order amount this method may be used for — the usual guard against paying a €5 order by invoice. null means no lower bound.
         */
        min_order_value?: number | null;
        /**
         * Operator-facing name, in the language the merchant administers in. What a buyer sees comes from `labels`. Required on create.
         */
        name?: string;
        /**
         * Sort order at checkout, ascending — the merchant's preferred payment method first. Defaults to 0.
         */
        position?: number;
        /**
         * The PSP code this method transacts through, from GET /payments/providers/catalog. Only meaningful for kind 'psp'; a PSP method that names none falls back to the tenant's `default_provider` setting. Must be a code GET /payments/providers/catalog carries.
         */
        provider?: string | null;
        /**
         * The provider's own payment-method id ('card', 'paypal', 'sepa_debit') — what the driver is told to charge. Copied onto every payment created with this method as `metadata.provider_method`.
         */
        provider_method?: string | null;
    }

    /**
     * 
     */
    export type PaymentProvider = {
        /**
         * When this PSP was configured for the tenant.
         */
        created_at?: string;
        /**
         * Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one.
         */
        enabled?: boolean;
        /**
         * Id of the PSP configuration row — what the provider routes address. The provider itself is named by `provider`.
         */
        id?: string;
        /**
         * Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP.
         */
        name?: string;
        /**
         * Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
         */
        options?: object | null;
        /**
         * The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does.
         */
        provider?: string;
        /**
         * Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money.
         */
        test_mode?: boolean;
        /**
         * When its configuration last changed — including a credential rotation, which is otherwise invisible from the outside.
         */
        updated_at?: string;
    }

    /**
     * Activates a catalog PSP for this tenant — providers are configuration, not code.
     */
    export type PaymentProviderCreateRequest = {
        /**
         * The PSP's own API credentials, under the key names its auth scheme expects — `GET /payments/providers/catalog` publishes them per provider as `credential_fields` (Stripe: `api_key`; PayPal: `client_id` + `client_secret`; Novalnet: `api_key` + `payment_access_key` + `tariff_id`). They come from the provider's own dashboard, are handed to the driver in-process, and are never read back by any route. Write-only: to rotate one, write the new value. Whatever a document shows here is a placeholder.
         */
        credentials?: object | null;
        /**
         * Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one. Defaults to false — finish the credentials before switching it on.
         */
        enabled?: boolean | null;
        /**
         * Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP. null, omitted or empty falls back to the catalog label.
         */
        name?: string | null;
        /**
         * Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
         */
        options?: object | null;
        /**
         * The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does. Required on create, and refused with 400 when the catalog does not carry it.
         */
        provider: string;
        /**
         * Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money. Unstated takes the tenant's own `test_mode_default` setting.
         */
        test_mode?: boolean | null;
        /**
         * The signing secret the PSP issues when its webhook endpoint is created, in the provider's own dashboard. webhooks.revenexx.com verifies each callback against it before the dispatcher hands the envelope to this app. Write-only, like `credentials`: it is stored, used, and never read back by any route, so there is nothing to compare a value against — to rotate it, write the new one. Whatever a document shows here is a generated placeholder, not a usable secret — writing it verbatim leaves every callback failing verification.
         */
        webhook_secret?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type PaymentProviderUpdateRequest = {
        /**
         * The PSP's own API credentials, under the key names its auth scheme expects — `GET /payments/providers/catalog` publishes them per provider as `credential_fields` (Stripe: `api_key`; PayPal: `client_id` + `client_secret`; Novalnet: `api_key` + `payment_access_key` + `tariff_id`). They come from the provider's own dashboard, are handed to the driver in-process, and are never read back by any route. Write-only: to rotate one, write the new value. Whatever a document shows here is a placeholder.
         */
        credentials?: object | null;
        /**
         * Only an enabled provider takes NEW payments: a method pointing at a disabled one falls through to the tenant's `fallback_provider`, and to a 422 if there is none. Nothing else reads it — capture, cancel and refund on the payments this PSP already holds go on working — which is what makes disabling the safe retirement and deleting the refused one. Defaults to false — finish the credentials before switching it on.
         */
        enabled?: boolean;
        /**
         * Operator-facing name of the configuration. Defaults to the catalog label, and is worth changing when a tenant runs two accounts with one PSP. Written straight to the database, which refuses an empty one.
         */
        name?: string;
        /**
         * Per-provider switches this app understands, plus anything the merchant keeps beside them. Three keys are the app's own: `logo_url` (the bundled logo, filled in when the provider is seeded), `capture_method` and `three_ds` (what the prism driver does today). Free jsonb — an unknown key is stored and ignored.
         */
        options?: object | null;
        /**
         * The catalog code of the PSP this row configures — one row per provider per tenant. GET /payments/providers/catalog lists every code that may appear here. It is what every payment and every method naming this PSP resolves it by, so changing it is refused with 409 for as long as one of them does. Required on create, and refused with 400 when the catalog does not carry it.
         */
        provider?: string;
        /**
         * Whether the driver talks to the PSP's sandbox. New configurations start in test mode: a provider nobody verified must not touch live money. Unstated takes the tenant's own `test_mode_default` setting.
         */
        test_mode?: boolean;
        /**
         * The signing secret the PSP issues when its webhook endpoint is created, in the provider's own dashboard. webhooks.revenexx.com verifies each callback against it before the dispatcher hands the envelope to this app. Write-only, like `credentials`: it is stored, used, and never read back by any route, so there is nothing to compare a value against — to rotate it, write the new one. Whatever a document shows here is a generated placeholder, not a usable secret — writing it verbatim leaves every callback failing verification.
         */
        webhook_secret?: string | null;
    }

    /**
     * One value of the payment terms set. When a company has to pay. A wholesaler who agrees net 45 with one customer used to need a release of this app to say so.
     */
    export type PaymentTerm = {
        /**
         * What `organizations.payment_terms` stores, and the only part of this row other data depends on. Immutable once created: renaming it would orphan every record carrying it.
         */
        code?: string;
        /**
         * When the value was added to this set.
         */
        created_at?: string;
        /**
         * One line of help for an operator choosing this value. Null when there is nothing to add. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443).
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Primary key of this value. What the update and delete routes address it by — the CODE is what records store.
         */
        id?: string;
        /**
         * The value a create falls back to when the caller names none. Exactly one row of the set carries it; promoting another one demotes this.
         */
        is_default?: boolean;
        /**
         * True for a value this app seeded on install. Still renameable and still removable — it only records where the value came from.
         */
        is_system?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where this value sits in the set, ascending. It is the order a select should offer.
         */
        position?: number;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * The fallback name — what a client shows when no locale in `labels` matches. A row seeded before 0.22.0 may hold a serialized locale map here instead (PE-443) — those rows were seeded with no `labels` at all.
         */
        title?: string;
        /**
         * Semantic badge colour. The palette stays fixed — it is a render concern, not a merchant decision.
         */
        tone?: PaymentTermTone;
        /**
         * When it was last edited.
         */
        updated_at?: string;
    }

    /**
     * Add one value to the payment terms set. It is available to `organizations.payment_terms` immediately.
     */
    export type PaymentTermCreateRequest = {
        /**
         * What `organizations.payment_terms` will store. Lowercase, starting with a letter; immutable afterwards.
         */
        code: string;
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted in the same call.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending. Default 0.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title: string;
        /**
         * Semantic badge colour.
         */
        tone?: PaymentTermCreateRequestTone;
    }

    /**
     * Everything but `code`. Sending a different one is a 400 rather than a silent no-op, because records already store it.
     */
    export type PaymentTermUpdateRequest = {
        /**
         * One line of help for whoever picks this value.
         */
        description?: string | null;
        /**
         * Localized descriptions, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `description`.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles, keyed by language tag ({ "en": …, "de": … }). Null when nobody translated this value — a client then falls back to `title`.
         */
        labels?: object | null;
        /**
         * Where it sits in the set, ascending.
         */
        position?: number;
        /**
         * The fallback name shown when no locale matches.
         */
        title?: string;
        /**
         * Semantic badge colour.
         */
        tone?: PaymentTermUpdateRequestTone;
    }

    /**
     * 
     */
    export type PaymentTransitionRequest = {
        /**
         * The operator's own words for why. Kept on the payment (`metadata.cancel_reason` / `metadata.refund_reason`) AND handed to the provider's own cancellation or refund reason field, so it is readable in the PSP's dashboard too. Trimmed and cut at 500 characters.
         */
        reason?: string | null;
    }

    /**
     * One enum this app owns, with every permitted value.
     */
    export type PaymentVocabulary = {
        /**
         * The app that owns this vocabulary — always `payments` here. Together with `name` it forms the platform-wide key `payments.statuses`.
         */
        app?: string;
        /**
         * True when the set comes from a CHECK constraint and is therefore exhaustive — a client may treat anything outside it as stale data rather than a missing label.
         */
        closed?: boolean;
        /**
         * The tone a permitted value nobody labelled falls back to, so every value is renderable.
         */
        default_tone?: PaymentVocabularyTone;
        /**
         * What this set of values is about. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The vocabulary name, as it appears in the URL.
         */
        name?: string;
        /**
         * Where the values come from. `schema` means they were parsed out of the CHECK constraint, so what is served is what the database enforces.
         */
        source?: string;
        /**
         * The vocabulary's own label, for a filter heading or a column title. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in constraint order — which is the lifecycle order an author wrote, and the order a select should offer.
         */
        values?: PaymentVocabularyValue[];
    }

    /**
     * One permitted value, with the words and the colour a human reads for it.
     */
    export type PaymentVocabularyValue = {
        /**
         * One sentence on what the value means, or null where the key speaks for itself. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * This value ends the lifecycle — the honest way to ask "is this still open?" instead of matching status names.
         */
        final?: boolean;
        /**
         * The value exactly as the database stores it — what a filter sends and what a row carries.
         */
        key?: string;
        /**
         * The label to show for this value. A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * What the state MEANS, semantically: neutral, info, success, warning or danger. The client decides what each one looks like in its own design system.
         */
        tone?: PaymentVocabularyTone;
    }

    /**
     * The dispatch envelope from webhooks.revenexx.com. Nothing is required and nothing is constrained — three keys are read, and the rest is carried along.
     */
    export type PaymentWebhookIngestRequest = {
        /**
         * The dispatcher's delivery id. Echoed back as `delivery_id` so a delivery and what the ledger did can be correlated.
         */
        id?: string;
        /**
         * The captured HTTP request as the PSP sent it.
         */
        request?: string;
        /**
         * Whether the ingress verified the callback signature against the provider's `webhook_secret`. An explicit false is refused with 422: an endpoint may run in annotate mode, and the ledger stays sovereign over one that does.
         */
        verified?: string;
    }

    /**
     * One entry, before and after — the row a confirmation dialog shows.
     */
    export type PriceAdjustPreviewRow = {
        /**
         * The price entry this row is about.
         */
        id?: string;
        /**
         * After rounding and ending snapping, in the same currency and on the same basis. Never negative: below the lowest candidate ending it clamps to it.
         */
        new_unit_price?: number;
        /**
         * The product it prices — null when the entry is identified by SKU.
         */
        product_id?: string | null;
        /**
         * Which rung of the ladder this is.
         */
        quantity_min?: number;
        /**
         * The SKU it prices — null when the entry is identified by product id.
         */
        sku?: string | null;
        /**
         * Before the change, in the list’s currency and on its tax basis.
         */
        unit_price?: number;
    }

    /**
     * The row is gone. Deleting a price list cascades to its entries.
     */
    export type PriceDeleted = {
        /**
         * Always true — a row that was not there answers 404 instead.
         */
        deleted?: boolean;
        /**
         * The row that was removed.
         */
        id?: string;
    }

    /**
     * Change every priced entry of a list at once. Send &#039;percent&#039; OR &#039;amount&#039;, never both. On-request entries are never touched — a percentage of &quot;ask us&quot; is not a number.
     */
    export type PriceEntriesAdjustRequest = {
        /**
         * Absolute change added to every unit price, in the list's currency.
         */
        amount?: number | null;
        /**
         * true writes nothing and answers the same preview — what the Cockpit dialog shows before it commits.
         */
        dry_run?: boolean | null;
        /**
         * Relative change in percent: 5 raises by 5 %, -10 cuts by 10 %.
         */
        percent?: number | null;
        /**
         * Ending the computed prices snap to (nearest match). Omit to use the tenant's bulk_adjust_rounding setting.
         */
        rounding?: PriceEndingRule;
        /**
         * Restrict the change to entries whose SKU starts with this (a prefix, case-sensitive, no wildcards). Entries identified only by product_id never match a prefix. Omit to change the whole list.
         */
        sku_prefix?: string | null;
    }

    /**
     * What the change did (or would do, on a dry run), plus the rounding policy it was computed under — so a dialog can show a merchant the before/after before it commits.
     */
    export type PriceEntriesAdjustResponse = {
        /**
         * Echo of the request: true means nothing was written.
         */
        dry_run?: boolean;
        /**
         * Priced entries the filter selected. On-request entries are never counted — a percentage of "ask us" is not a number.
         */
        matched?: number;
        /**
         * Decimals the new prices were rounded to before snapping — the tenant’s price_precision.
         */
        precision?: number;
        /**
         * The first 50 changes, before and after. `matched` says how many there were in total.
         */
        preview?: PriceAdjustPreviewRow[];
        /**
         * true when more than 50 entries changed, so `preview` is a sample rather than the whole set.
         */
        preview_truncated?: boolean;
        /**
         * The price list this answer came out of — enough to link to it or to explain the number to a merchant ("this came from the dealer list").
         */
        price_list?: PriceListRef;
        /**
         * The price ending the results were snapped to — the request’s, or the tenant’s bulk_adjust_rounding where it sent none.
         */
        rounding?: PriceEntriesAdjustResponseRounding;
        /**
         * How they landed on the last decimal — the tenant’s rounding_mode.
         */
        rounding_mode?: PriceEntriesAdjustResponseRoundingMode;
        /**
         * Rows actually written — 0 on a dry run, and a price that came out unchanged is not rewritten.
         */
        updated?: number;
    }

    /**
     * A chunk of an import. Unlike the replace call it never wipes the list.
     */
    export type PriceEntriesBulkRequest = {
        /**
         * At most 5000 rows per call — send a large book in chunks.
         */
        entries: PriceEntryReplaceItem[];
        /**
         * Default 'upsert': a row naming a rung the list already has (same product/sku AND quantity_min) updates it. 'append' always inserts — a re-run then duplicates the ladder, which is what makes an ambiguous tier table.
         */
        mode?: PriceEntriesBulkMode;
    }

    /**
     * Counts, not rows: an import chunk of 5000 does not echo 5000 entries back.
     */
    export type PriceEntriesBulkResponse = {
        /**
         * Rows inserted — rungs this list did not have.
         */
        created?: number;
        /**
         * The mode actually applied — the request's, or the default `upsert`.
         */
        mode?: PriceEntriesBulkMode;
        /**
         * Existing rungs rewritten in place (always 0 in append mode).
         */
        updated?: number;
    }

    /**
     * The quantity ladder (Staffelpreise) for ONE item, generated instead of typed: a price at the first tier and a discount compounded per tier. Identify the item with &#039;product_id&#039; or &#039;sku&#039;.
     */
    export type PriceEntriesLadderRequest = {
        /**
         * Price for ONE unit at the FIRST tier, in the list’s currency and on the list’s tax basis — a decimal amount in major units (19.90), never minor units/cents.
         */
        base_price: number;
        /**
         * Discount applied per tier, COMPOUNDED down the ladder rather than off the base price: 5 gives 19.90 / 18.91 / 17.96. Default 0.
         */
        discount_percent?: number | null;
        /**
         * The item the ladder prices.
         */
        product_id?: string | null;
        /**
         * Tier thresholds, ascending — an array of numbers or a comma-separated string ('1, 10, 50'). Duplicates are collapsed and the set is sorted. Default [1, 10, 50], at most 50 tiers.
         */
        quantities?: number[] | null;
        /**
         * Default true: the item's existing entries in this list are removed first, so the ladder IS the ladder. false appends.
         */
        replace?: boolean | null;
        /**
         * Ending the computed prices snap to (nearest match). Omit to use the tenant's bulk_adjust_rounding setting.
         */
        rounding?: PriceEndingRule;
        /**
         * The item the ladder prices (alternative to product_id).
         */
        sku?: string | null;
        /**
         * Unit of measure carried onto every generated tier. Free text, neither validated nor converted.
         */
        unit?: string | null;
    }

    /**
     * The generated ladder as stored, plus the rounding policy that shaped it.
     */
    export type PriceEntriesLadderResponse = {
        /**
         * The generated rungs, one per requested quantity, ascending — this IS the item's ladder in this list.
         */
        entries?: PriceEntry[];
        /**
         * Decimals each tier was rounded to before snapping — the tenant's price_precision.
         */
        precision?: number;
        /**
         * true when the item's existing entries in this list were removed first (the default), so the answer is the whole ladder rather than an addition to one.
         */
        replaced?: boolean;
        /**
         * The price ending each tier was snapped to — the request's, or the tenant's bulk_adjust_rounding.
         */
        rounding?: PriceEndingRule;
        /**
         * How they landed on the last decimal — the tenant's rounding_mode.
         */
        rounding_mode?: PriceRoundingMode;
    }

    /**
     * 
     */
    export type PriceEntriesReplaceRequest = {
        /**
         * The complete new entry set (set semantics).
         */
        entries: PriceEntryReplaceItem[];
    }

    /**
     * The list as it now stands: everything that was there is gone and these are the rows that took its place.
     */
    export type PriceEntriesReplaceResponse = {
        /**
         * The complete new entry set, as stored — including the ids and timestamps the database filled in.
         */
        entries?: PriceEntry[];
    }

    /**
     * One rung of one item’s quantity ladder inside one price list. The ladder IS the set of entries sharing an identity (product_id or sku); the amount is in the LIST’s currency and on the LIST’s tax basis.
     */
    export type PriceEntry = {
        /**
         * When the entry was created.
         */
        created_at?: string;
        /**
         * The entry itself — one rung of one item’s quantity ladder.
         */
        id?: string;
        /**
         * Free-form bag, unvalidated and never read by this app: whatever JSON object you write round-trips exactly. Its keys are the integration’s own, e.g. {"source_system": "erp", "imported_batch": "2026-02-14"}.
         */
        metadata?: object | null;
        /**
         * The price list this entry belongs to, and therefore the currency and tax basis its amount is on. Set from the path on write.
         */
        price_list_id?: string;
        /**
         * `standard` is a number. `on_request` is the explicit no-price marker: it STOPS resolution for this item on this list and answers price-on-request, even where a cheaper list exists — the list is authoritative for this buyer and it says "ask us".
         */
        price_type?: PriceEntryType;
        /**
         * The product this rung prices. An entry needs `product_id` or `sku` (a row CHECK enforces it); an entry that carries both prices whichever of the two the resolve item names.
         */
        product_id?: string | null;
        /**
         * Lowest quantity this price applies from (Staffelpreis). The ladder for one item is the set of entries sharing its identity: the rung with the HIGHEST quantity_min at or below the requested quantity wins, and below the first rung the first rung’s price applies — a minimum order quantity belongs to the catalog, not to the ladder.
         */
        quantity_min?: number;
        /**
         * The article number this rung prices, for a price book keyed by SKU rather than by product id — matched exactly, never normalised or case-folded.
         */
        sku?: string | null;
        /**
         * The unit of measure the price is per — ‘pcs’, ‘m’, ‘kg’, a packaging size. Free text: this app neither validates nor converts it, and the `quantity` of a resolve call is counted in it.
         */
        unit?: string | null;
        /**
         * Price for ONE unit of `unit`, expressed in the list’s `currency` and on the list’s `tax_basis` — a decimal amount in major units (19.90 EUR), never minor units/cents. Stored at 4 decimals so a per-1000-piece price survives, and echoed back exactly as it was written; only DERIVED amounts (net, gross, line totals) are rounded to the tenant’s `price_precision`.
         */
        unit_price?: number;
        /**
         * When the entry last changed. A bulk adjust only writes the rows whose price actually moved, so this is a real "the price changed here" marker.
         */
        updated_at?: string;
        /**
         * Start of this entry’s own validity; null = open-ended. This is how a promo price is expressed — a second rung for the same item and quantity, live only for its window.
         */
        valid_from?: string | null;
        /**
         * End of this entry’s own validity; null = open-ended. Outside the window the rung is skipped and the ladder resolves as if it were not there.
         */
        valid_until?: string | null;
    }

    /**
     * An entry needs an identity: &#039;product_id&#039; or &#039;sku&#039;.
     */
    export type PriceEntryCreateRequest = {
        /**
         * Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
         */
        metadata?: object | null;
        /**
         * Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
         */
        price_type?: PriceEntryType;
        /**
         * The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
         */
        product_id?: string | null;
        /**
         * Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
         */
        quantity_min?: number;
        /**
         * The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
         */
        sku?: string | null;
        /**
         * Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
         */
        unit?: string | null;
        /**
         * Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
         */
        unit_price?: number;
        /**
         * Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
         */
        valid_from?: string | null;
        /**
         * End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
         */
        valid_until?: string | null;
    }

    /**
     * An entry needs an identity: &#039;product_id&#039; or &#039;sku&#039; — every other field is normalized to its default when null/omitted.
     */
    export type PriceEntryReplaceItem = {
        /**
         * Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
         */
        metadata?: object | null;
        /**
         * Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
         */
        price_type?: PriceEntryType;
        /**
         * The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
         */
        product_id?: string | null;
        /**
         * Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
         */
        quantity_min?: number | null;
        /**
         * The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
         */
        sku?: string | null;
        /**
         * Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
         */
        unit?: string | null;
        /**
         * Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
         */
        unit_price?: number | null;
        /**
         * Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
         */
        valid_from?: string | null;
        /**
         * End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
         */
        valid_until?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type PriceEntryUpdateRequest = {
        /**
         * Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours.
         */
        metadata?: object | null;
        /**
         * Default 'standard'; 'on_request' is the explicit no-price marker — it STOPS resolution for this item on this list and answers "price on request" even where a cheaper list exists.
         */
        price_type?: PriceEntryType;
        /**
         * The product this rung prices. An entry needs product_id or sku — the row CHECK enforces it.
         */
        product_id?: string | null;
        /**
         * Tier threshold (Staffelpreis): this price applies from this quantity upwards (default 1). The rungs of one item are the entries sharing its identity; the highest threshold at or below the requested quantity wins.
         */
        quantity_min?: number;
        /**
         * The article number this rung prices (alternative to product_id). Matched exactly on resolve — never normalised or case-folded.
         */
        sku?: string | null;
        /**
         * Unit of measure the price is per — free text, neither validated nor converted here. A resolve call’s `quantity` is counted in it.
         */
        unit?: string | null;
        /**
         * Price for ONE unit of `unit`, in the LIST’s currency and on the LIST’s tax basis — a decimal amount in major units (19.90), never minor units/cents. Stored at 4 decimals and echoed back exactly as sent (default 0).
         */
        unit_price?: number;
        /**
         * Start of this entry’s own validity (ISO 8601) — how a promo price is expressed: a second rung, live only for its window. null = open-ended.
         */
        valid_from?: string | null;
        /**
         * End of this entry’s own validity; null = open-ended. Outside it the rung is skipped and the ladder resolves as if it were not there.
         */
        valid_until?: string | null;
    }

    /**
     * A price list: one currency, one tax basis, one validity window, one buyer scope — and the entries that price items in it. Which list wins for a given buyer is decided by scope first, then priority, then the default flag; see prices.resolve.
     */
    export type PriceList = {
        /**
         * Buyer scope: this list prices for this sales channel. Beats the open lists, loses to contact and organization scope.
         */
        channel_id?: string | null;
        /**
         * The unique per-tenant handle of the list — what an import, an ERP export and every integration addresses it by, and what the `default_price_list_code` setting names. It is never quietly reassigned: a second list under a code that is taken answers 409.
         */
        code?: string;
        /**
         * Buyer scope: this list prices for this one contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
         */
        contact_id?: string | null;
        /**
         * When the list was created. Also the `newest` tie-break’s input when the tenant settles genuine ties that way.
         */
        created_at?: string;
        /**
         * ISO 4217 currency of EVERY amount in this list — entries carry no currency of their own, so this is the one that governs them. Resolution only ever considers lists whose currency equals the currency of the call: a list in another currency is not converted, it simply does not price the item. This app never converts between currencies.
         */
        currency?: string;
        /**
         * Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
         */
        description?: string | null;
        /**
         * The price list itself. Every sub-route addresses the list by this id, and a resolve answer names the list that priced an item under `price_list.id`.
         */
        id?: string;
        /**
         * The fallback list. Within its group it deliberately sorts LAST, so a default list wins only where nothing more specific priced the item. At most one list per tenant holds the flag — `prices.lists.make-default` moves it in one call.
         */
        is_default?: boolean;
        /**
         * Localised names, keyed by language tag: {"de": "Standardpreise", "en": "Standard prices"}. Read the tag you need and fall back to `en`; `name` is the untranslated original.
         */
        labels?: object | null;
        /**
         * Free-form bag, unvalidated and never read by this app: whatever JSON object you write round-trips exactly. Its keys are the integration’s own — ERP provenance is the usual content, e.g. {"source_system": "erp", "erp_price_group": "A1"}.
         */
        metadata?: object | null;
        /**
         * Operator-facing name, shown wherever a human picks a list. Not addressable — integrations join on `code`.
         */
        name?: string;
        /**
         * Buyer scope: this list prices for buyers of this organization. Beats channel-scoped and open lists, loses to a contact-scoped one.
         */
        organization_id?: string | null;
        /**
         * Tie-break WITHIN one specificity group, higher first. It never beats specificity: an organization-scoped list at priority 0 still wins over an open list at priority 100. Default 0.
         */
        priority?: number;
        /**
         * Gate: when true the list resolves only for a buyer who has a contact or organization context. An anonymous resolve never matches it, so a tenant that prices only for logged-in customers flags its list and guests fall through to price-on-request rather than to some other list’s number.
         */
        requires_auth?: boolean;
        /**
         * Whether the list takes part in resolution at all. Only `active` lists are candidates; `inactive` retires a list without deleting the prices it holds.
         */
        status?: PriceListStatus;
        /**
         * Whether the amounts stored in this list are `net` (tax excluded) or `gross` (tax included) — the one fact a price cannot be without. null inherits the tenant’s `tax_inclusive_default` setting, and the resolve answer names which of the two decided under `tax_basis_source`.
         */
        tax_basis?: PriceListTaxBasis;
        /**
         * LEGACY mirror of `tax_basis`. `false` is the column default, so it is NOT read as anybody having chosen net; only `true` is read as a statement (gross), and only where `tax_basis` is null. Prefer `tax_basis`.
         */
        tax_included?: boolean;
        /**
         * When the row last changed. Written by the database, not by the caller.
         */
        updated_at?: string;
        /**
         * Start of the validity window of the WHOLE list; null = open-ended. Outside the window the list is not a candidate at all. The instant compared against is the resolve call’s `at`, echoed as `basis.evaluated_at`.
         */
        valid_from?: string | null;
        /**
         * End of the validity window of the whole list; null = open-ended. Use it to let a season expire on its own instead of deactivating a list by hand.
         */
        valid_until?: string | null;
    }

    /**
     * 
     */
    export type PriceListCreateRequest = {
        /**
         * Scope: only this sales channel. Beats the open lists, loses to contact and organization.
         */
        channel_id?: string | null;
        /**
         * Unique list code per tenant — the handle every import and integration addresses this list by. A code already in use answers 409.
         */
        code: string;
        /**
         * Scope: only this contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
         */
        contact_id?: string | null;
        /**
         * ISO 4217 code (default EUR) — the currency of EVERY amount in this list, since entries carry none of their own. Resolution only considers lists matching the currency of the call; nothing is ever converted.
         */
        currency?: string;
        /**
         * Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
         */
        description?: string | null;
        /**
         * The fallback list. Within its group it sorts LAST, so it wins only where nothing more specific priced the item. Use prices.lists.make-default to move the flag rather than setting it here — two defaults leave a tie to row order.
         */
        is_default?: boolean;
        /**
         * Localised names, keyed by language tag — {"de": "Händlerpreise", "en": "Dealer prices"}. Omit to show `name` everywhere.
         */
        labels?: object | null;
        /**
         * Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours — ERP provenance is the usual content.
         */
        metadata?: object | null;
        /**
         * Operator-facing name, shown wherever a human picks a list.
         */
        name: string;
        /**
         * Scope: only buyers of this organization. Beats channel-scoped and open lists.
         */
        organization_id?: string | null;
        /**
         * Tie-break WITHIN a specificity group (higher wins, default 0). It never beats scope: an organization list at 0 still wins over an open list at 100.
         */
        priority?: number;
        /**
         * Gate: when true the list resolves only for an authenticated buyer (contact or organization context); anonymous resolve calls get on_request. Default false (open to everyone).
         */
        requires_auth?: boolean;
        /**
         * Default 'active' — only active lists resolve. 'inactive' retires a list without deleting its prices.
         */
        status?: PriceListStatus;
        /**
         * Whether the amounts in this list are net (tax excluded) or gross (tax included) — the one fact a price cannot be without. Omit (null) to inherit the tenant's tax_inclusive_default setting; the resolve answer names which of the two decided under tax_basis_source.
         */
        tax_basis?: PriceListTaxBasis;
        /**
         * LEGACY mirror of tax_basis. false is the column default and is NOT read as a statement of intent; true is read as gross, and only where tax_basis is null. Prefer tax_basis.
         */
        tax_included?: boolean;
        /**
         * Start of the validity window of the WHOLE list (ISO 8601); null = open-ended. Outside it the list is not a candidate at all.
         */
        valid_from?: string | null;
        /**
         * End of the validity window of the whole list; null = open-ended. Lets a season expire on its own instead of being deactivated by hand.
         */
        valid_until?: string | null;
    }

    /**
     * What seeding found and what it had to write. Idempotent twice over: by code, and by the existence of ANY default list — so changing default_price_list_code later never produces a second default.
     */
    export type PriceListDefaultsResponse = {
        /**
         * Codes of the lists this call created — empty on a tenant that was already seeded.
         */
        created?: string[];
        /**
         * Codes of the lists that were already there, so nothing was written for them.
         */
        existing?: string[];
    }

    /**
     * No payload — send {}.
     */
    export type PriceListMakeDefaultRequest = {
    }

    /**
     * The list as it now stands, plus whoever lost the flag.
     */
    export type PriceListMakeDefaultResponse = {
        /**
         * Codes of the lists that lost the flag — empty when this list already held it, which is what makes a repeated call free.
         */
        demoted?: string[];
        /**
         * A price list: one currency, one tax basis, one validity window, one buyer scope — and the entries that price items in it. Which list wins for a given buyer is decided by scope first, then priority, then the default flag; see prices.resolve.
         */
        price_list?: PriceList;
    }

    /**
     * The price list this answer came out of — enough to link to it or to explain the number to a merchant (&quot;this came from the dealer list&quot;).
     */
    export type PriceListRef = {
        /**
         * The list’s unique per-tenant code.
         */
        code?: string;
        /**
         * The list, by id — the same id `GET /prices/lists/{id}` takes.
         */
        id?: string;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type PriceListUpdateRequest = {
        /**
         * Scope: only this sales channel. Beats the open lists, loses to contact and organization.
         */
        channel_id?: string | null;
        /**
         * Unique list code per tenant — the handle every import and integration addresses this list by. A code already in use answers 409.
         */
        code?: string;
        /**
         * Scope: only this contact. The most specific scope there is — it beats organization, channel and every open list, whatever their priority.
         */
        contact_id?: string | null;
        /**
         * ISO 4217 code (default EUR) — the currency of EVERY amount in this list, since entries carry none of their own. Resolution only considers lists matching the currency of the call; nothing is ever converted.
         */
        currency?: string;
        /**
         * Free text for whoever maintains the list — why it exists and who it is for. Never shown to a buyer.
         */
        description?: string | null;
        /**
         * The fallback list. Within its group it sorts LAST, so it wins only where nothing more specific priced the item. Use prices.lists.make-default to move the flag rather than setting it here — two defaults leave a tie to row order.
         */
        is_default?: boolean;
        /**
         * Localised names, keyed by language tag — {"de": "Händlerpreise", "en": "Dealer prices"}. Omit to show `name` everywhere.
         */
        labels?: object | null;
        /**
         * Free-form bag: whatever JSON object you write round-trips exactly, and this app never reads it. Its keys are yours — ERP provenance is the usual content.
         */
        metadata?: object | null;
        /**
         * Operator-facing name, shown wherever a human picks a list.
         */
        name?: string;
        /**
         * Scope: only buyers of this organization. Beats channel-scoped and open lists.
         */
        organization_id?: string | null;
        /**
         * Tie-break WITHIN a specificity group (higher wins, default 0). It never beats scope: an organization list at 0 still wins over an open list at 100.
         */
        priority?: number;
        /**
         * Gate: when true the list resolves only for an authenticated buyer (contact or organization context); anonymous resolve calls get on_request. Default false (open to everyone).
         */
        requires_auth?: boolean;
        /**
         * Default 'active' — only active lists resolve. 'inactive' retires a list without deleting its prices.
         */
        status?: PriceListStatus;
        /**
         * Whether the amounts in this list are net (tax excluded) or gross (tax included) — the one fact a price cannot be without. Omit (null) to inherit the tenant's tax_inclusive_default setting; the resolve answer names which of the two decided under tax_basis_source.
         */
        tax_basis?: PriceListTaxBasis;
        /**
         * LEGACY mirror of tax_basis. false is the column default and is NOT read as a statement of intent; true is read as gross, and only where tax_basis is null. Prefer tax_basis.
         */
        tax_included?: boolean;
        /**
         * Start of the validity window of the WHOLE list (ISO 8601); null = open-ended. Outside it the list is not a candidate at all.
         */
        valid_from?: string | null;
        /**
         * End of the validity window of the whole list; null = open-ended. Lets a season expire on its own instead of being deactivated by hand.
         */
        valid_until?: string | null;
    }

    /**
     * Where this page sits in the full result set. Rows beyond `limit` are not returned and are not lost — ask for the next page with `offset`.
     */
    export type PricePage = {
        /**
         * true when `offset + returned < total` — there is another page to fetch.
         */
        hasMore?: boolean;
        /**
         * Page size actually applied — the `limit` you sent, clamped to 1…200 (default 50).
         */
        limit?: number;
        /**
         * Row offset actually applied (default 0).
         */
        offset?: number;
        /**
         * Rows in `items` on this page.
         */
        returned?: number;
        /**
         * Rows matching the filter across all pages, not just this one.
         */
        total?: number;
    }

    /**
     * The policy this answer was computed under — the tenant settings in force plus where the currency came from.
     */
    export type PriceResolveBasis = {
        /**
         * false ⇒ a buyer with no contact/organization is answered on_request for everything.
         */
        anonymous_resolve_allowed?: boolean;
        /**
         * Where `currency` came from: the request, the buyer market's own currency, the tenant's default_currency setting, or the shipped fallback.
         */
        currency_source?: PriceCurrencySource;
        /**
         * The instant validity windows were evaluated at.
         */
        evaluated_at?: string;
        /**
         * Which list won where specificity and priority tied.
         */
        price_list_priority_tiebreak?: PriceListTiebreak;
        /**
         * Decimals every DERIVED amount (net, gross, line totals) was rounded to.
         */
        price_precision?: number;
        /**
         * How those amounts landed on the last decimal.
         */
        rounding_mode?: PriceRoundingMode;
        /**
         * Tenant setting: the basis a price list that states none is read on.
         */
        tax_inclusive_default?: PriceTaxInclusiveDefault;
    }

    /**
     * Identify by &#039;product_id&#039; or &#039;sku&#039; — an item without identity resolves to on_request with a per-item error rather than failing the call.
     */
    export type PriceResolveItem = {
        /**
         * Product to price.
         */
        product_id?: string | null;
        /**
         * Requested quantity, counted in the entry’s `unit`. It picks the tier (the highest `quantity_min` at or below it) and multiplies into `line_total`. Default 1; a non-positive value falls back to 1.
         */
        quantity?: number | null;
        /**
         * SKU to price (alternative to product_id). Matched exactly against the entries’ own `sku`.
         */
        sku?: string | null;
    }

    /**
     * Buyer context + items. Unpriceable items come back as on_request — a missing price is a first-class state, never 0.
     */
    export type PriceResolveRequest = {
        /**
         * The instant every validity window — list and entry — is evaluated at (ISO 8601). Default now. This is how a promo price is previewed before it starts, and it is echoed as `basis.evaluated_at`.
         */
        at?: string | null;
        /**
         * Buyer context: the sales channel. Third scope — beats the open lists, loses to contact and organization.
         */
        channel_id?: string | null;
        /**
         * Buyer context: the contact this quote is for. The most specific scope — a list naming this contact beats every other list, whatever their priority. Sending it (or organization_id) is also what makes the buyer AUTHENTICATED for `requires_auth` lists and for the tenant’s anonymous_resolve_allowed setting.
         */
        contact_id?: string | null;
        /**
         * ISO 4217 code the quote is wanted in. ONLY lists in this currency are candidates and nothing is ever converted, so a wrong value here is not a rounding difference — it is no price at all. Omit to take the buyer market’s currency, then the tenant’s default_currency; `basis.currency_source` names which applied.
         */
        currency?: string | null;
        /**
         * Items to price, at most 200 per call — a whole cart or a whole product listing in one round trip. The answer holds one entry per item, in this order.
         */
        items: PriceResolveItem[];
        /**
         * Buyer context: the market, as a uuid pin for older callers. Prefer the `X-Revenexx-Market` header, which carries a market CODE and is what scopes the visible price lists. The market decides the tax rates AND which per-market settings (rounding, tie-break, anonymous access) apply — with several markets and no signal at all the answer says `tax.resolved: false`, `reason: market_required` rather than quoting another market’s VAT.
         */
        market_id?: string | null;
        /**
         * Buyer context: the organization the buyer belongs to. Second most specific scope; also counts as authenticated.
         */
        organization_id?: string | null;
    }

    /**
     * One answer per requested item, in request order, plus the currency, the tax context and the policy the numbers were computed under.
     */
    export type PriceResolveResponse = {
        /**
         * The policy this answer was computed under — the tenant settings in force plus where the currency came from.
         */
        basis?: PriceResolveBasis;
        /**
         * ISO 4217 currency the whole answer is quoted in, and the currency lists had to match to be candidates at all. `basis.currency_source` says where it came from: the request, the buyer market, the tenant setting, or the shipped fallback.
         */
        currency?: string;
        /**
         * One entry per requested item, in the order the items were sent. An item that could not be priced is present and `on_request`, never missing.
         */
        prices?: ResolvedPrice[];
        /**
         * Tax resolution status of this answer. resolved=false ⇒ tax_class/tax_rate are unknown, NOT zero.
         */
        tax?: PriceTaxContext;
    }

    /**
     * Tax resolution status of this answer. resolved=false ⇒ tax_class/tax_rate are unknown, NOT zero.
     */
    export type PriceTaxContext = {
        /**
         * The market whose tax classes were applied.
         */
        market_id?: string | null;
        /**
         * Human-readable form of `reason`, in English. Safe to log; not phrased for a buyer.
         */
        message?: string;
        /**
         * Only when resolved=false — why no rate could be applied.
         */
        reason?: PriceTaxUnresolvedReason;
        /**
         * true ⇒ every priced item carries `tax_class`, `tax_rate`, `unit_price_net` and `unit_price_gross`. false ⇒ those are null because the rate could not be established — read `reason`, and never as "no tax due".
         */
        resolved?: boolean;
        /**
         * Where the market came from: 'request' (market_id), 'header' (x-revenexx-market) or 'sole_market' (the tenant has exactly one).
         */
        source?: PriceTaxMarketSource;
    }

    /**
     * One rung of the winning list’s quantity ladder for this item.
     */
    export type PriceTier = {
        /**
         * The quantity this rung applies from. The rung with the highest `quantity_min` at or below the requested quantity is the one `unit_price` on the item was taken from.
         */
        quantity_min?: number;
        /**
         * Unit of measure the rung’s price is per. Absent when the entry names none.
         */
        unit?: string;
        /**
         * The rung’s price for ONE unit, in the answer’s `currency` and on the item’s `tax_basis` — decimal major units, exactly as stored. Tiers are NOT tax-adjusted: only the chosen price gets `unit_price_net`/`unit_price_gross`.
         */
        unit_price?: number;
    }

    /**
     * One closed value set with the words a human reads for it — so a UI never keeps its own copy of an enum this app enforces.
     */
    export type PriceVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Always true here: the values come from a CHECK constraint, so the list is exhaustive and a value outside it is stale data rather than a missing label.
         */
        closed?: boolean;
        /**
         * The tone a value that carries none falls back to.
         */
        default_tone?: PriceVocabularyTone;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: PriceVocabularyName;
        /**
         * Where the values came from. 'schema' = a CHECK constraint in this app's own schema.json.
         */
        source?: PriceVocabularySource;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Every permitted value, in CHECK-constraint order — which is the order an author wrote and the order a select should offer.
         */
        values?: PriceVocabularyValue[];
    }

    /**
     * What this app publishes, without the values — one fetch a UI can cache and then pull only the vocabularies it renders.
     */
    export type PriceVocabularyIndex = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * Every vocabulary this app owns, sorted by name.
         */
        vocabularies?: PriceVocabularyRef[];
    }

    /**
     * One vocabulary, named and titled — fetch its values with GET /prices/vocabularies/{name}.
     */
    export type PriceVocabularyRef = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * Vocabulary name, unique within the app.
         */
        name?: PriceVocabularyRefName;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
    }

    /**
     * One permitted value, with its words and its badge tone.
     */
    export type PriceVocabularyValue = {
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The value ends the lifecycle.
         */
        final?: boolean;
        /**
         * The value as the database stores and enforces it.
         */
        key?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({"en": …, "de": …}). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: PriceVocabularyTone;
    }

    /**
     * 
     */
    export type PrincipalResolveRequest = {
        /**
         * The contact the caller is acting for.
         */
        contact_id: string;
    }

    /**
     * 
     */
    export type ProductAssociations = {
        /**
         * Which kind of relation this is — the `association_types` row.
         */
        association_type_id?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Order in which the targets are shown, ascending.
         */
        position?: number;
        /**
         * The product the relation starts at — the one whose detail page shows it.
         */
        product_id?: string;
        /**
         * How many of the target belong to the source — the 4 in "this bundle contains 4 casters". Only meaningful when the association type carries `is_quantified`; null on an ordinary cross-sell.
         */
        quantity?: number | null;
        /**
         * The product the relation points at — the accessory, the spare part, the cross-sell.
         */
        target_product_id?: string;
    }

    /**
     * 
     */
    export type ProductAssociationsCreateRequest = {
        /**
         * Which kind of relation this is — the `association_types` row.
         */
        association_type_id: string;
        /**
         * Order in which the targets are shown, ascending.
         */
        position?: number;
        /**
         * The product the relation starts at — the one whose detail page shows it.
         */
        product_id: string;
        /**
         * How many of the target belong to the source — the 4 in "this bundle contains 4 casters". Only meaningful when the association type carries `is_quantified`; null on an ordinary cross-sell.
         */
        quantity?: number | null;
        /**
         * The product the relation points at — the accessory, the spare part, the cross-sell.
         */
        target_product_id: string;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `product_associations` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type ProductAssociationsFilter = {
        /**
         * The literal `?association_type_id=` value this call was understood to carry.
         */
        association_type_id?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?product_id=` value this call was understood to carry.
         */
        product_id?: string;
        /**
         * The literal `?quantity=` value this call was understood to carry.
         */
        quantity?: string;
        /**
         * The literal `?target_product_id=` value this call was understood to carry.
         */
        target_product_id?: string;
    }

    export type DefaultProductAssociationsFilter = ProductAssociationsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ProductAssociationsUpdateRequest = {
        /**
         * Which kind of relation this is — the `association_types` row.
         */
        association_type_id?: string;
        /**
         * Order in which the targets are shown, ascending.
         */
        position?: number;
        /**
         * The product the relation starts at — the one whose detail page shows it.
         */
        product_id?: string;
        /**
         * How many of the target belong to the source — the 4 in "this bundle contains 4 casters". Only meaningful when the association type carries `is_quantified`; null on an ordinary cross-sell.
         */
        quantity?: number | null;
        /**
         * The product the relation points at — the accessory, the spare part, the cross-sell.
         */
        target_product_id?: string;
    }

    /**
     * 
     */
    export type ProductCategories = {
        /**
         * The category it is filed into. One row per (product, category), whichever way it got there.
         */
        category_id?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Sort order of this product inside the category.
         */
        position?: number;
        /**
         * The product filed into the category. Deleting the product deletes the membership with it.
         */
        product_id?: string;
        /**
         * How the membership came about: 'manual' is hand-picked, 'rule' was materialized by a category rule. The two never touch each other — a recompute only ever inserts and deletes `rule` rows, so a hand-picked membership survives every pass.
         */
        source?: string;
    }

    /**
     * 
     */
    export type ProductCategoriesCreateRequest = {
        /**
         * The category it is filed into. One row per (product, category), whichever way it got there.
         */
        category_id: string;
        /**
         * Sort order of this product inside the category.
         */
        position?: number;
        /**
         * The product filed into the category. Deleting the product deletes the membership with it.
         */
        product_id: string;
        /**
         * How the membership came about: 'manual' is hand-picked, 'rule' was materialized by a category rule. The two never touch each other — a recompute only ever inserts and deletes `rule` rows, so a hand-picked membership survives every pass.
         */
        source?: ProductCategoriesSource;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `product_categories` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type ProductCategoriesFilter = {
        /**
         * The literal `?category_id=` value this call was understood to carry.
         */
        category_id?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?position=` value this call was understood to carry.
         */
        position?: string;
        /**
         * The literal `?product_id=` value this call was understood to carry.
         */
        product_id?: string;
        /**
         * The literal `?source=` value this call was understood to carry.
         */
        source?: string;
    }

    export type DefaultProductCategoriesFilter = ProductCategoriesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ProductCategoriesUpdateRequest = {
        /**
         * The category it is filed into. One row per (product, category), whichever way it got there.
         */
        category_id?: string;
        /**
         * Sort order of this product inside the category.
         */
        position?: number;
        /**
         * The product filed into the category. Deleting the product deletes the membership with it.
         */
        product_id?: string;
        /**
         * How the membership came about: 'manual' is hand-picked, 'rule' was materialized by a category rule. The two never touch each other — a recompute only ever inserts and deletes `rule` rows, so a hand-picked membership survives every pass.
         */
        source?: ProductCategoriesSource;
    }

    /**
     * The category has to exist already; this route files a product into one, it does not create one.
     */
    export type ProductCategoryAssignRequest = {
        /**
         * The category to file the product into.
         */
        category_id: string;
        /**
         * Sort order inside the category. Default 0.
         */
        position?: number;
    }

    /**
     * What was measured and stored into `products.completeness` by this call — how much of what the family requires the product actually carries.
     */
    export type ProductCompleteness = {
        /**
         * When this measurement was taken. It is a snapshot: editing the product does not update it, the next `POST /products/{id}/completeness` does.
         */
        computed_at?: string;
        /**
         * How many of those carry a value — in ANY bucket, so a name held only in German counts.
         */
        filled?: number;
        /**
         * Attribute codes with no value in any bucket.
         */
        missing?: string[];
        /**
         * filled / required, 0..1. A family that requires nothing is 1, not undefined.
         */
        ratio?: number;
        /**
         * Attributes the product's family marks is_required.
         */
        required?: number;
    }

    /**
     * No body. Everything this needs is the path id and what the catalog already holds; send `{}`.
     */
    export type ProductCompletenessRequest = {
    }

    /**
     * Name the family either way — `family_id` wins when both are sent. The family has to exist already; this route assigns one, it does not create one.
     */
    export type ProductFamilyAssignRequest = {
        /**
         * Alternative to family_id — a `families.code` this tenant holds, from `GET /products/families`. No example: a code is tenant data, and any value published here names a family somebody does not have.
         */
        family_code?: string;
        /**
         * The family to assign.
         */
        family_id?: string;
    }

    /**
     * 
     */
    export type ProductGridColumn = {
        /**
         * The key to read out of a row: a column name for the fixed columns, an attribute code for the rest (then it is a key of the row's `attributes` object).
         */
        code?: string;
        /**
         * The attribute's i18n labels, or a plain title for the fixed columns.
         */
        label?: object | null;
        /**
         * Where the value comes from: 'column' is a plain products column, 'attribute' a key inside `attribute_values`, 'resolved' something this route computed (the display name).
         */
        source?: ProductGridColumnSource;
        /**
         * Which control renders the cell — the same widget vocabulary `GET /products/attribute-schema` uses, so one renderer serves both.
         */
        type?: string;
    }

    /**
     * 
     */
    export type ProductGridFilter = {
        /**
         * The attribute code to filter on.
         */
        code?: string;
        /**
         * The attribute's i18n labels, for the filter's own caption.
         */
        label?: object | null;
        /**
         * Which control the filter asks for — the same widget vocabulary the columns use.
         */
        type?: string;
    }

    /**
     * 
     */
    export type ProductGridRow = {
        /**
         * The grid cells: one key per attribute code that `columns` lists with `source: "attribute"`, holding the value already resolved out of `attribute_values` for the requested context. A code the product carries no value for is null rather than absent, so a row is the same shape whatever it holds. The keys are the tenant's own attribute codes, which is why this object has no fixed properties — read `columns` for the set.
         */
        attributes?: object;
        /**
         * The stored `products.completeness` document, verbatim. Null means it has never been computed — not that the product is empty.
         */
        completeness?: object | null;
        /**
         * Whether the product is offered.
         */
        enabled?: boolean;
        /**
         * That family's code, resolved here so a grid can show and group by it without a second read.
         */
        family_code?: string | null;
        /**
         * The product's family. Null is the state that makes completeness impossible.
         */
        family_id?: string | null;
        /**
         * The product's id — what a row click navigates with.
         */
        id?: string;
        /**
         * 'simple', 'model' or 'variant' — a model is a row a person should not price or sell.
         */
        kind?: string;
        /**
         * The resolved display name. Never empty; read `label_source` before showing it as a name.
         */
        label?: string;
        /**
         * Which attribute code the name was read from, per this product's family.
         */
        label_attribute?: string;
        /**
         * Which bucket of attribute_values the name came from. 'sku' means the catalog holds no name for this product — show that as a missing name, not as a name.
         */
        label_source?: ProductLabelSource;
        /**
         * The merchant's article number.
         */
        sku?: string;
        /**
         * When the product row was last written — the column a "recently changed" sort uses.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ProductLabel = {
        /**
         * The attribute code the name was read from.
         */
        attribute?: string;
        /**
         * How that attribute was chosen: 'family' is the product's own `families.label_attribute`, 'setting' the tenant's `default_label_attribute`, 'convention' the built-in fallback to `name` when neither says anything.
         */
        attribute_from?: ProductLabelAttributeSource;
        /**
         * The product's id.
         */
        id?: string;
        /**
         * The name to show. Never empty — read `source` before treating it as a name, because `sku` there means this is the SKU standing in for one.
         */
        label?: string;
        /**
         * Which locale the value came out of, when it came from a locale bucket. Null for a value in `common` and for the SKU fallback.
         */
        locale?: string | null;
        /**
         * The SKU, which is also the fallback shown as `label` when the catalog holds no name.
         */
        sku?: string;
        /**
         * Which bucket of attribute_values the name came from. 'sku' means the catalog holds no name for this product — show that as a missing name, not as a name.
         */
        source?: ProductLabelSource;
    }

    /**
     * 
     */
    export type ProductLabelsRequest = {
        /**
         * Product ids to name. At most 500.
         */
        ids?: string[];
        /**
         * Product SKUs to name. At most 500.
         */
        skus?: string[];
    }

    /**
     * 
     */
    export type ProductTaxRef = {
        /**
         * The product's id.
         */
        id?: string;
        /**
         * The product's resolved display name, or its SKU when the catalog holds no name for it.
         */
        label?: string;
        /**
         * The SKU, so a caller that asked by id can key its own answer by SKU and the other way round.
         */
        sku?: string;
        /**
         * The tax class key the prices app resolves a rate from. Null means the product names none and the caller has to fall back to its own default.
         */
        tax_class?: string | null;
    }

    /**
     * 
     */
    export type Products = {
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.
         */
        attribute_values?: object;
        /**
         * How much of what this product's family REQUIRES it actually carries — the number a merchandiser works down. `required` counts the attributes the family marks `is_required`, `filled` how many of those carry a value in ANY bucket, `ratio` is filled/required between 0 and 1 (a family that requires nothing is 1, not undefined), `missing` lists the codes with no value anywhere, sorted, and `computed_at` is when it was measured.

Written only by `POST /products/{id}/completeness` and by `POST /products/{id}/family`; a plain create or update never touches it, so it is null until one of the two has run. It also stays null for a product with no family — there is nothing to measure it against, and 0 % would be a lie.
         */
        completeness?: object | null;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * When the product was soft-deleted. `GET /products/grid` and every category-rule evaluation exclude a row that carries one; `GET /products` does NOT — filter on it to read the live catalog.
         */
        deleted_at?: string | null;
        /**
         * Whether the product is offered. A create defaults it from the `new_products_enabled_by_default` tenant setting rather than blindly to true, so an import does not publish twenty thousand unfinished products the moment it lands. An explicit value in the body always wins.
         */
        enabled?: boolean;
        /**
         * The family that decides which attributes this product HAS. Without one nothing is required, completeness cannot be computed and the display name never resolves — `POST /products/{id}/family` is the call that sets it and computes completeness in the same step.
         */
        family_id?: string | null;
        /**
         * Which variant structure of the family this product follows — the axes it splits on. Null on a simple product.
         */
        family_variant_id?: string | null;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * Where the product sits in the variant hierarchy. 'simple' stands on its own. 'model' carries the values its variants share and is never sold itself. 'variant' carries the axis values and points at its model through `parent_id`.
         */
        kind?: string;
        /**
         * The display name, maintained by the DATABASE so a grid of twenty thousand rows can sort and filter on a name with no join. It is the first of `attribute_values.common.name`, `…common.label`, the `de`/`en`/`de_DE`/`en_US` locale buckets, `…common.manufacturer_aid`, and finally the SKU — so a value is ALWAYS present, and a label equal to the SKU means the catalog holds no name for this product. A generated column: it cannot be written, and a create or update that names it has it dropped rather than refused. The family-aware answer, which can consult `families.label_attribute` and report where the name came from, is `POST /products/labels`.
         */
        label?: string | null;
        /**
         * The product MODEL this variant belongs to. Only a `variant` carries one. Deleting the model leaves its variants behind with a null parent rather than deleting them.
         */
        parent_id?: string | null;
        /**
         * The import-side mirror of associations that carry a quantity — a bundle, a bill of materials, a spare-parts set. NOTHING IN THIS APP READS OR WRITES IT: no route produces it, no route consumes it, and it is null on every product this app has created. The surface that IS served is relational — `product_associations`, whose `quantity` column holds the number, guarded by `association_types.is_quantified`.

It exists because a PIM import (Akeneo, BMEcat) carries these in one blob keyed by association type code, and the column lets that document round-trip instead of being dropped. The database enforces no shape on it, so what a reader finds is whatever the importer wrote; the example is the conventional form.
         */
        quantified_associations?: object | null;
        /**
         * The merchant's own article number — unique per tenant, and the value every integration (ERP, shop, feed, price list) joins on. The one identifier a person types, and the fallback this app shows when the catalog holds no name.
         */
        sku?: string;
        /**
         * The tax class key the prices app resolves a VAT rate from. Free text here — the vocabulary belongs to the app that prices, and `POST /products/batch` exists to hand exactly this column to it in bulk.
         */
        tax_class?: string | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * Name the products either way, or both ways. Send at least one non-empty list; the two are unioned and a product named twice comes back once.
     */
    export type ProductsBatchRequest = {
        /**
         * Product ids, when the caller already holds them.
         */
        ids?: string[];
        /**
         * Product SKUs — the identifier a foreign system carries, which is why this route exists at all.
         */
        skus?: string[];
    }

    /**
     * 
     */
    export type ProductsCreateRequest = {
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.
         */
        attribute_values?: object;
        /**
         * How much of what this product's family REQUIRES it actually carries — the number a merchandiser works down. `required` counts the attributes the family marks `is_required`, `filled` how many of those carry a value in ANY bucket, `ratio` is filled/required between 0 and 1 (a family that requires nothing is 1, not undefined), `missing` lists the codes with no value anywhere, sorted, and `computed_at` is when it was measured.

Written only by `POST /products/{id}/completeness` and by `POST /products/{id}/family`; a plain create or update never touches it, so it is null until one of the two has run. It also stays null for a product with no family — there is nothing to measure it against, and 0 % would be a lie.
         */
        completeness?: object | null;
        /**
         * When the product was soft-deleted. `GET /products/grid` and every category-rule evaluation exclude a row that carries one; `GET /products` does NOT — filter on it to read the live catalog.
         */
        deleted_at?: string | null;
        /**
         * Whether the product is offered. A create defaults it from the `new_products_enabled_by_default` tenant setting rather than blindly to true, so an import does not publish twenty thousand unfinished products the moment it lands. An explicit value in the body always wins.
         */
        enabled?: boolean;
        /**
         * The family that decides which attributes this product HAS. Without one nothing is required, completeness cannot be computed and the display name never resolves — `POST /products/{id}/family` is the call that sets it and computes completeness in the same step.
         */
        family_id?: string | null;
        /**
         * Which variant structure of the family this product follows — the axes it splits on. Null on a simple product.
         */
        family_variant_id?: string | null;
        /**
         * Where the product sits in the variant hierarchy. 'simple' stands on its own. 'model' carries the values its variants share and is never sold itself. 'variant' carries the axis values and points at its model through `parent_id`.
         */
        kind?: ProductsKind;
        /**
         * The product MODEL this variant belongs to. Only a `variant` carries one. Deleting the model leaves its variants behind with a null parent rather than deleting them.
         */
        parent_id?: string | null;
        /**
         * The import-side mirror of associations that carry a quantity — a bundle, a bill of materials, a spare-parts set. NOTHING IN THIS APP READS OR WRITES IT: no route produces it, no route consumes it, and it is null on every product this app has created. The surface that IS served is relational — `product_associations`, whose `quantity` column holds the number, guarded by `association_types.is_quantified`.

It exists because a PIM import (Akeneo, BMEcat) carries these in one blob keyed by association type code, and the column lets that document round-trip instead of being dropped. The database enforces no shape on it, so what a reader finds is whatever the importer wrote; the example is the conventional form.
         */
        quantified_associations?: object | null;
        /**
         * The merchant's own article number — unique per tenant, and the value every integration (ERP, shop, feed, price list) joins on. The one identifier a person types, and the fallback this app shows when the catalog holds no name.
         */
        sku: string;
        /**
         * The tax class key the prices app resolves a VAT rate from. Free text here — the vocabulary belongs to the app that prices, and `POST /products/batch` exists to hand exactly this column to it in bulk.
         */
        tax_class?: string | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `products` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type ProductsFilter = {
        /**
         * The literal `?attribute_values=` value this call was understood to carry.
         */
        attribute_values?: string;
        /**
         * The literal `?completeness=` value this call was understood to carry.
         */
        completeness?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?deleted_at=` value this call was understood to carry.
         */
        deleted_at?: string;
        /**
         * The literal `?enabled=` value this call was understood to carry.
         */
        enabled?: string;
        /**
         * The literal `?family_id=` value this call was understood to carry.
         */
        family_id?: string;
        /**
         * The literal `?family_variant_id=` value this call was understood to carry.
         */
        family_variant_id?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?kind=` value this call was understood to carry.
         */
        kind?: string;
        /**
         * The literal `?label=` value this call was understood to carry.
         */
        label?: string;
        /**
         * The literal `?parent_id=` value this call was understood to carry.
         */
        parent_id?: string;
        /**
         * The literal `?quantified_associations=` value this call was understood to carry.
         */
        quantified_associations?: string;
        /**
         * The literal `?sku=` value this call was understood to carry.
         */
        sku?: string;
        /**
         * The literal `?tax_class=` value this call was understood to carry.
         */
        tax_class?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultProductsFilter = ProductsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ProductsUpdateRequest = {
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.
         */
        attribute_values?: object;
        /**
         * How much of what this product's family REQUIRES it actually carries — the number a merchandiser works down. `required` counts the attributes the family marks `is_required`, `filled` how many of those carry a value in ANY bucket, `ratio` is filled/required between 0 and 1 (a family that requires nothing is 1, not undefined), `missing` lists the codes with no value anywhere, sorted, and `computed_at` is when it was measured.

Written only by `POST /products/{id}/completeness` and by `POST /products/{id}/family`; a plain create or update never touches it, so it is null until one of the two has run. It also stays null for a product with no family — there is nothing to measure it against, and 0 % would be a lie.
         */
        completeness?: object | null;
        /**
         * When the product was soft-deleted. `GET /products/grid` and every category-rule evaluation exclude a row that carries one; `GET /products` does NOT — filter on it to read the live catalog.
         */
        deleted_at?: string | null;
        /**
         * Whether the product is offered. A create defaults it from the `new_products_enabled_by_default` tenant setting rather than blindly to true, so an import does not publish twenty thousand unfinished products the moment it lands. An explicit value in the body always wins.
         */
        enabled?: boolean;
        /**
         * The family that decides which attributes this product HAS. Without one nothing is required, completeness cannot be computed and the display name never resolves — `POST /products/{id}/family` is the call that sets it and computes completeness in the same step.
         */
        family_id?: string | null;
        /**
         * Which variant structure of the family this product follows — the axes it splits on. Null on a simple product.
         */
        family_variant_id?: string | null;
        /**
         * Where the product sits in the variant hierarchy. 'simple' stands on its own. 'model' carries the values its variants share and is never sold itself. 'variant' carries the axis values and points at its model through `parent_id`.
         */
        kind?: ProductsKind;
        /**
         * The product MODEL this variant belongs to. Only a `variant` carries one. Deleting the model leaves its variants behind with a null parent rather than deleting them.
         */
        parent_id?: string | null;
        /**
         * The import-side mirror of associations that carry a quantity — a bundle, a bill of materials, a spare-parts set. NOTHING IN THIS APP READS OR WRITES IT: no route produces it, no route consumes it, and it is null on every product this app has created. The surface that IS served is relational — `product_associations`, whose `quantity` column holds the number, guarded by `association_types.is_quantified`.

It exists because a PIM import (Akeneo, BMEcat) carries these in one blob keyed by association type code, and the column lets that document round-trip instead of being dropped. The database enforces no shape on it, so what a reader finds is whatever the importer wrote; the example is the conventional form.
         */
        quantified_associations?: object | null;
        /**
         * The merchant's own article number — unique per tenant, and the value every integration (ERP, shop, feed, price list) joins on. The one identifier a person types, and the fallback this app shows when the catalog holds no name.
         */
        sku?: string;
        /**
         * The tax class key the prices app resolves a VAT rate from. Free text here — the vocabulary belongs to the app that prices, and `POST /products/batch` exists to hand exactly this column to it in bulk.
         */
        tax_class?: string | null;
    }

    /**
     * 
     */
    export type PushSubscription = {
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        endpoint: string;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        last_seen_at: string | null;
        /**
         * 
         */
        subscriber_id: string;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
        /**
         * 
         */
        user_agent: string | null;
    }

    /**
     * 
     */
    export type ReferenceEntities = {
        /**
         * The entity's stable identifier — a domain of records the catalog POINTS AT instead of duplicating, so a brand is edited once and not on nine thousand products. Unique per tenant.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * A delivery path or URL for the entity's own icon. Cosmetic — nothing in this app resolves it.
         */
        image?: string | null;
        /**
         * What the entity is called, per language tag — the heading over its record list.
         */
        labels?: object | null;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ReferenceEntitiesCreateRequest = {
        /**
         * The entity's stable identifier — a domain of records the catalog POINTS AT instead of duplicating, so a brand is edited once and not on nine thousand products. Unique per tenant.
         */
        code: string;
        /**
         * A delivery path or URL for the entity's own icon. Cosmetic — nothing in this app resolves it.
         */
        image?: string | null;
        /**
         * What the entity is called, per language tag — the heading over its record list.
         */
        labels?: object | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `reference_entities` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type ReferenceEntitiesFilter = {
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?image=` value this call was understood to carry.
         */
        image?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultReferenceEntitiesFilter = ReferenceEntitiesFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ReferenceEntitiesUpdateRequest = {
        /**
         * The entity's stable identifier — a domain of records the catalog POINTS AT instead of duplicating, so a brand is edited once and not on nine thousand products. Unique per tenant.
         */
        code?: string;
        /**
         * A delivery path or URL for the entity's own icon. Cosmetic — nothing in this app resolves it.
         */
        image?: string | null;
        /**
         * What the entity is called, per language tag — the heading over its record list.
         */
        labels?: object | null;
    }

    /**
     * 
     */
    export type ReferenceEntityRecords = {
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.

Which attributes a record of this entity has comes from `attributes` rows with `entity_type: "reference_entity"` and `entity_ref` equal to the entity's code — `GET /products/attribute-schema?entity_type=reference_entity&entity_ref=brand` answers it in one call.
         */
        attribute_values?: object;
        /**
         * The record's stable identifier — the value a product stores when it points at this record, the same way a select stores an option code. Unique within the entity.
         */
        code?: string;
        /**
         * When the row was created. Server-set — it is not part of any request body.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A client never sends one; it reads one back and uses it in the path of every later call.
         */
        id?: string;
        /**
         * What the record is called, per language tag — the text a picker shows while the code is what gets written.
         */
        labels?: object | null;
        /**
         * Which reference entity this record belongs to.
         */
        reference_entity_id?: string;
        /**
         * When the row was last written. Server-set — it is not part of any request body.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type ReferenceEntityRecordsCreateRequest = {
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.

Which attributes a record of this entity has comes from `attributes` rows with `entity_type: "reference_entity"` and `entity_ref` equal to the entity's code — `GET /products/attribute-schema?entity_type=reference_entity&entity_ref=brand` answers it in one call.
         */
        attribute_values?: object;
        /**
         * The record's stable identifier — the value a product stores when it points at this record, the same way a select stores an option code. Unique within the entity.
         */
        code: string;
        /**
         * What the record is called, per language tag — the text a picker shows while the code is what gets written.
         */
        labels?: object | null;
        /**
         * Which reference entity this record belongs to.
         */
        reference_entity_id: string;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `reference_entity_records` — `?status=`, a typo, a filter another entity has — is DROPPED and does not appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type ReferenceEntityRecordsFilter = {
        /**
         * The literal `?attribute_values=` value this call was understood to carry.
         */
        attribute_values?: string;
        /**
         * The literal `?code=` value this call was understood to carry.
         */
        code?: string;
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?labels=` value this call was understood to carry.
         */
        labels?: string;
        /**
         * The literal `?reference_entity_id=` value this call was understood to carry.
         */
        reference_entity_id?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultReferenceEntityRecordsFilter = ReferenceEntityRecordsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ReferenceEntityRecordsUpdateRequest = {
        /**
         * Every attribute value the record carries, in ONE jsonb document — the core of an attribute-driven PIM. A record's properties are not columns here: they are rows in `attributes`, selected per family by `family_attributes`, and their values live under their attribute CODE inside this object.

Four buckets, and an attribute's own flags decide which one it writes to:

  `common`                    the attribute is neither localizable nor scopable — one value, full stop.
                              `{"common": {"net_weight": 2.4, "colour": "black"}}`
  `locale_specific`           `localizable`: one value per language tag.
                              `{"locale_specific": {"de_DE": {"name": "Akku-Bohrschrauber"}}}`
  `channel_specific`          `scopable`: one value per channel.
                              `{"channel_specific": {"b2b": {"minimum_order_quantity": 6}}}`
  `channel_locale_specific`   both: one value per channel AND language tag.
                              `{"channel_locale_specific": {"b2b": {"de_DE": {"description": "…"}}}}`

A reader takes the most specific bucket that carries the code and falls back through locale, then channel, then `common`. `common` is always last and always consulted, because early imports wrote everything there whatever an attribute's flags said — a reader that skipped it reports an imported catalog as empty. `GET /products/attribute-schema` answers, per field, the exact path a value belongs at (`storage.path`) and that full fallback order (`from`), so no client has to re-derive any of this.

The value itself is whatever the attribute's `type` implies: a string, a number, a boolean, an option CODE for a select (never its label), a list of codes for a multi-select, `{"amount": …, "unit": …}` for a measure, a list of `{"amount": …, "currency": …}` for a price, an asset code for media.

Defaults to `{}`, and an empty object is a normal state — a record nobody has enriched yet. The declared type also admits an array only because every jsonb column of this app shares one mapping; an array is not meaningful here and every reader in this app treats a non-object as empty.

Which attributes a record of this entity has comes from `attributes` rows with `entity_type: "reference_entity"` and `entity_ref` equal to the entity's code — `GET /products/attribute-schema?entity_type=reference_entity&entity_ref=brand` answers it in one call.
         */
        attribute_values?: object;
        /**
         * The record's stable identifier — the value a product stores when it points at this record, the same way a select stores an option code. Unique within the entity.
         */
        code?: string;
        /**
         * What the record is called, per language tag — the text a picker shows while the code is what gets written.
         */
        labels?: object | null;
        /**
         * Which reference entity this record belongs to.
         */
        reference_entity_id?: string;
    }

    /**
     * No required fields — send {}.
     */
    export type RegistrationApproveRequest = {
        /**
         * Who approved it — recorded on the contact and carried in the event. Free text (operator id or email); this app does not resolve it.
         */
        decided_by?: string | null;
    }

    /**
     * 
     */
    export type RegistrationRejectRequest = {
        /**
         * Who rejected it — recorded on the contact and carried in the event.
         */
        decided_by?: string | null;
        /**
         * Why the application was declined. Always stored on the contact. It only reaches the APPLICANT when the tenant's registration_reason_disclosed setting is on — the event payload then carries it, and so does the 403 the login answers.
         */
        reason: string;
    }

    /**
     * 
     */
    export type ReorderAlert = {
        /**
         * on_hand − reserved: the figure compared against the reorder point. Alerting on AVAILABLE rather than on_hand is the point of this list — a shelf that looks full but is entirely sold is exactly the row a buyer must see.
         */
        available?: number;
        /**
         * That location's code, resolved for the reader so no second call is needed. Null if the location row could not be read.
         */
        location_code?: string | null;
        /**
         * Whether that location is enabled. A DISABLED location still alerts — its stock is invisible to availability, but the goods are real and somebody has to decide. Null if the location row could not be read.
         */
        location_enabled?: boolean | null;
        /**
         * The location holding it.
         */
        location_id?: string;
        /**
         * What is physically there right now, promised units included.
         */
        on_hand?: number;
        /**
         * The product this row tracks, null when it is tracked by SKU.
         */
        product_id?: string | null;
        /**
         * The threshold that was applied to this row — its own, or the tenant default.
         */
        reorder_point?: number;
        /**
         * 'row' — the stock row's own threshold. 'default' — the reorder_point_default setting.
         */
        reorder_point_source?: ReorderPointSource;
        /**
         * How much of it is already promised to orders.
         */
        reserved?: number;
        /**
         * How far below the point this row has fallen. The list is sorted by it, worst first.
         */
        shortfall?: number;
        /**
         * The article number this row tracks, null when it is tracked by product id.
         */
        sku?: string | null;
        /**
         * The stock row that is low — the id to correct or receive against (POST /inventories/stock/{id}/adjust).
         */
        stock_level_id?: string;
    }

    /**
     * 
     */
    export type ReorderAlerts = {
        /**
         * The rows at or below their reorder point, worst first (by `shortfall`). Computed on read, so it is never stale — and never empty because of caching: an empty list means nothing is low, unless `enabled` is false.
         */
        alerts?: ReorderAlert[];
        /**
         * false when reorder_alert_enabled is off — the list is then empty by policy, not because nothing is low.
         */
        enabled?: boolean;
        /**
         * The threshold applied to rows carrying none of their own.
         */
        reorder_point_default?: number;
    }

    /**
     * 
     */
    export type ReorderScan = {
        /**
         * One entry per published event, in the order they went out. Re-running the scan on the same day returns the SAME ids and publishes nothing a second time — the event id is derived from the row and the day, and the bus drops the repeat.
         */
        emitted: ReorderScanEmit[];
        /**
         * false when reorder_alert_enabled is off — nothing was published, and not because nothing is low.
         */
        enabled: boolean;
        /**
         * How many rows were at or below their point when the scan ran.
         */
        scanned: number;
    }

    /**
     * 
     */
    export type ReorderScanEmit = {
        /**
         * The event id on the bus. Stable per (row, day), which is what makes a re-run harmless.
         */
        event_id: string;
        /**
         * The stock row the event is about.
         */
        stock_level_id: string;
    }

    /**
     * No fields — send `{}`. What counts as low follows each row&#039;s own `reorder_point` and the market&#039;s `reorder_point_default`, exactly as GET /inventories/reorder-alerts computes it.
     */
    export type ReorderScanRequest = {
    }

    /**
     * 
     */
    export type Reservation = {
        /**
         * When the row was created. Server-set: it is in no request body, and a value sent for it is ignored.
         */
        created_at?: string;
        /**
         * When this hold lapses. The sweeper — POST /inventories/reservations/sweep, and the 'expire-reservations' schedule that runs it every 15 minutes — releases everything past this moment exactly as a cancellation would, so an abandoned checkout stops holding stock on its own. Null means the row named no deadline: it is swept on its AGE instead once `reservation_ttl_minutes` is above 0, which is what makes turning that setting on retroactive.
         */
        expires_at?: string | null;
        /**
         * The row's own id, generated by the database. A caller never sends one — it reads one back and puts it in the path of every later call.
         */
        id?: string;
        /**
         * Which location is holding the goods for this order. Chosen at reserve time by the tenant's `allocation_strategy` — not by the caller, unless `ship_to.location_code` names one and the strategy is 'nearest'.
         */
        location_id?: string;
        /**
         * Free-form, and one key this app writes itself: `backordered` — how much of this hold was not covered by stock on hand when it was taken. Absent on a hold that was fully covered.
         */
        metadata?: object | null;
        /**
         * The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together.
         */
        order_ref?: string;
        /**
         * The product being held, copied from the reserve call. Null when the item was identified by SKU.
         */
        product_id?: string | null;
        /**
         * How much is being held, ALWAYS POSITIVE — the database CHECK is `quantity > 0`, because a hold of nothing is not a hold. It is added to `stock_levels.reserved` while the status is `active` and taken off again when the hold is released, expires or is committed. The matching ledger booking carries the same number NEGATIVE (see `stock_movements.quantity`).
         */
        quantity?: number;
        /**
         * The article number being held, copied from the reserve call. Null when the item was identified by product id.
         */
        sku?: string | null;
        /**
         * Where the hold stands in the reserve → commit | release lifecycle. 'active' — holding stock, and the ONLY status counted in `stock_levels.reserved`. 'committed' — the order shipped, so `on_hand` and `reserved` both fell. 'released' — the hold was given back, by POST /inventories/release or by the expiry sweeper. Both end states are final: nothing in this app moves a reservation back to active.
         */
        status?: ReservationStatus;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * When the hold last changed — in practice, when it moved out of `active`.
         */
        updated_at?: string;
    }

    /**
     * No fields — send `{}`. The cut-off is always now, and what counts as expired follows each reservation&#039;s own `expires_at` plus the `reservation_ttl_minutes` setting of the market it belongs to.
     */
    export type ReservationSweepRequest = {
    }

    /**
     * 
     */
    export type ReservationSweepResult = {
        /**
         * How many active reservations were found past their hold: the ones with an `expires_at` in the past, plus the undated ones older than their market's TTL.
         */
        expired?: number;
        /**
         * The market codes this run had to resolve a window for — every market that had an undated active reservation. Empty when nothing is market-assigned, which is the usual case.
         */
        markets?: string[];
        /**
         * How many were actually given back — `reserved` lowered on the stock row and a `release` booking written for each. It equals `expired` unless a row vanished mid-run. Idempotent: a second run immediately after finds nothing and answers 0.
         */
        released?: number;
        /**
         * The cut-off this run used — everything whose hold had run out by this moment was released. It is the run's own clock, not a stored value.
         */
        swept_at?: string;
        /**
         * The `reservation_ttl_minutes` that applied to reservations belonging to NO market — the tenant baseline. A reservation assigned to a market is judged against that market's own window instead, which is why this is reported rather than assumed to be the only one.
         */
        ttl_minutes?: number;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `reservations` — a typo, a filter another entity has, `?q=` — is DROPPED and cannot appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type ReservationsFilter = {
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?expires_at=` value this call was understood to carry.
         */
        expires_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?location_id=` value this call was understood to carry.
         */
        location_id?: string;
        /**
         * The literal `?metadata=` value this call was understood to carry.
         */
        metadata?: string;
        /**
         * The literal `?order_ref=` value this call was understood to carry.
         */
        order_ref?: string;
        /**
         * The literal `?product_id=` value this call was understood to carry.
         */
        product_id?: string;
        /**
         * The literal `?quantity=` value this call was understood to carry.
         */
        quantity?: string;
        /**
         * The literal `?sku=` value this call was understood to carry.
         */
        sku?: string;
        /**
         * The literal `?status=` value this call was understood to carry.
         */
        status?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultReservationsFilter = ReservationsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * What one item costs this buyer, and which list said so.
     */
    export type ResolvedPrice = {
        /**
         * ISO 4217 currency of every amount on this item. Always the winning list’s currency, which always equals the call’s top-level `currency` — resolution only considers lists that match it, so a list and its answer can never disagree. null on an on-request item.
         */
        currency?: string | null;
        /**
         * Present ONLY on an item that named neither `product_id` nor `sku`, and always with this exact text. The call still answers 200 and the item comes back on_request, because one malformed line must not cost a whole cart its prices.
         */
        error?: string;
        /**
         * `unit_price × quantity`, on the SAME basis as `unit_price` (so net if the list is net) and rounded to `basis.price_precision`. Not a tax-adjusted total — a cart computes its own from the net/gross pair.
         */
        line_total?: number | null;
        /**
         * true = no price for this buyer context — show "price on request", never 0.
         */
        on_request?: boolean;
        /**
         * Why there is no price: nothing prices it, a list marks it on-request, the tenant hides prices from anonymous buyers, or the item named neither product_id nor sku.
         */
        on_request_reason?: PriceOnRequestReason;
        /**
         * The list that priced this item — null when nothing did. On an `on_request_entry` answer it is the list that said "ask us".
         */
        price_list?: object | null;
        /**
         * Echo of the requested `product_id` — null when the item was identified by SKU.
         */
        product_id?: string | null;
        /**
         * The quantity this answer was computed for: what you sent, or 1 where you sent nothing or a non-positive value. It selects the tier and multiplies into `line_total`.
         */
        quantity?: number;
        /**
         * Echo of the requested `sku` — null when the item was identified by product id.
         */
        sku?: string | null;
        /**
         * Whether the stored amount is net or gross. THE fact a price cannot be without.
         */
        tax_basis?: PriceTaxBasis;
        /**
         * Who decided it: the list's own tax_basis, a legacy tax_included=true on the list, or the tenant's tax_inclusive_default setting.
         */
        tax_basis_source?: PriceTaxBasisSource;
        /**
         * The tax class code that produced `tax_rate`: the product’s own class where the products app knows one, otherwise the buyer market’s default class. The codes are the tenant’s, defined in `markets.tax_classes` — conventionally `standard` and `reduced`. null when tax could not be resolved.
         */
        tax_class?: string | null;
        /**
         * Whether unit_price already contains tax. Never null on a priced item — it is `tax_basis` as a boolean, kept for existing callers.
         */
        tax_included?: boolean | null;
        /**
         * Tax rate as a PERCENTAGE (19 means 19 %, not 0.19), read from `markets.tax_classes` for this market and `tax_class`. null means UNKNOWN — a checkout must be able to tell that apart from a genuine 0 %.
         */
        tax_rate?: number | null;
        /**
         * The FULL quantity ladder the winning list holds for this item, ascending by `quantity_min` — what a PDP renders as a tier table. Empty on an on-request item.
         */
        tiers?: PriceTier[];
        /**
         * Price for ONE unit, in `currency` and on the basis `tax_basis` names — a decimal amount in major units (19.90 EUR), never minor units/cents. It is the stored rung exactly as a merchant typed it, unrounded. Do not display it without reading `tax_basis`; prefer `unit_price_net`/`unit_price_gross`, which are unambiguous.
         */
        unit_price?: number | null;
        /**
         * Unit price INCLUDING tax, in `currency`, rounded to `basis.price_precision` under `basis.rounding_mode`. Derived from `unit_price` and `tax_rate` in whichever direction `tax_basis` requires. Present only when `tax.resolved` is true.
         */
        unit_price_gross?: number | null;
        /**
         * Unit price EXCLUDING tax, in `currency`, rounded to `basis.price_precision` under `basis.rounding_mode`. Present only when `tax.resolved` is true — null means the rate is unknown, not that there is no tax.
         */
        unit_price_net?: number | null;
    }

    /**
     * 
     */
    export type RoleCatalogResponse = {
        /**
         * The built-in permission vocabulary, one entry per grant. The authoritative, installed-app-aware list is the platform's permission ledger — this app deliberately does not duplicate it.
         */
        permissions?: object[];
        /**
         * Every role a contact of this tenant can hold, least to most privileged.
         */
        roles?: object[];
        /**
         * 'tenant' — the configured mapping answered. 'defaults' — this tenant has no roles yet, or custom_roles_enabled locks the ledger, and the built-ins answered.
         */
        source?: RoleCatalogResponseSource;
    }

    /**
     * 
     */
    export type RolePermissionsRequest = {
        /**
         * The complete new set. Duplicates and blanks are ignored; an empty array revokes everything.
         */
        permissions: string[];
    }

    /**
     * 
     */
    export type RolePermissionsResponse = {
        /**
         * The role that was written.
         */
        key?: string;
        /**
         * Its complete new set, after de-duplication.
         */
        permissions?: string[];
    }

    /**
     * No fields — send {}.
     */
    export type RolesDefaultsRequest = {
    }

    /**
     * 
     */
    export type RolesDefaultsResponse = {
        /**
         * Role keys created by this call.
         */
        created?: string[];
        /**
         * Role keys that were already there and were left untouched, permissions included.
         */
        existing?: string[];
    }

    /**
     * 
     */
    export type SearchHit = {
        /**
         * The matching document; its properties are the collection's own fields.
         */
        document?: object;
        /**
         * Per-field highlight snippets, keyed by field name.
         */
        highlight?: object;
        /**
         * Relevance score.
         */
        text_match?: number;
    }

    export type DefaultSearchHit = SearchHit & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * Typesense search parameters. Only the commonly used ones are enumerated — the proxy forwards the whole object, so any parameter Typesense accepts may be sent.
     */
    export type SearchParameters = {
        /**
         * Comma-separated document fields to omit.
         */
        exclude_fields?: string;
        /**
         * Comma-separated fields to facet on.
         */
        facet_by?: string;
        /**
         * Filter expression, e.g. `in_stock:=true && price:<100`. ANDed with the tenant filter the proxy injects.
         */
        filter_by?: string;
        /**
         * Comma-separated fields to group results by.
         */
        group_by?: string;
        /**
         * Comma-separated fields to highlight in full.
         */
        highlight_full_fields?: string;
        /**
         * Comma-separated document fields to return.
         */
        include_fields?: string;
        /**
         * Facet values to return per field.
         */
        max_facet_values?: number;
        /**
         * Typos tolerated per query token.
         */
        num_typos?: number;
        /**
         * 1-based page number.
         */
        page?: number;
        /**
         * Hits per page.
         */
        per_page?: number;
        /**
         * Whether the last token is a prefix; per-field when comma-separated.
         */
        prefix?: string;
        /**
         * Query text. Use `*` to match everything.
         */
        q?: string;
        /**
         * Comma-separated fields to search, in weight order.
         */
        query_by?: string;
        /**
         * Sort expression, e.g. `price:desc`.
         */
        sort_by?: string;
    }

    export type DefaultSearchParameters = SearchParameters & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * A Typesense search response, passed through verbatim.
     */
    export type SearchResult<FacetCount extends Models.FacetCount = Models.DefaultFacetCount, SearchHit extends Models.SearchHit = Models.DefaultSearchHit> = {
        /**
         * 
         */
        facet_counts?: FacetCount[];
        /**
         * Total matching documents.
         */
        found?: number;
        /**
         * 
         */
        hits?: SearchHit[];
        /**
         * Documents searched.
         */
        out_of?: number;
        /**
         * 1-based page this result is for.
         */
        page?: number;
        /**
         * 
         */
        search_time_ms?: number;
    }

    export type DefaultSearchResult<FacetCount extends Models.FacetCount = Models.DefaultFacetCount, SearchHit extends Models.SearchHit = Models.DefaultSearchHit> = SearchResult<FacetCount, SearchHit> & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * A theme&#039;s starting content. Both lists are optional; sending neither is a no-op.
     */
    export type SeedRequest = {
        /**
         * The menus to create. One with no key or no label is reported under `skipped`.
         */
        menus?: object[] | null;
        /**
         * The pages to create. One that has no `slug` or no `title` is reported under `skipped` rather than refused, so one bad entry never loses the rest.
         */
        pages?: object[] | null;
    }

    /**
     * What was created and what was already there. Nothing is ever overwritten, so a non-empty `skipped` is the normal answer to a second run.
     */
    export type SeedResult = {
        /**
         * The menu half of the run.
         */
        menus?: object;
        /**
         * The page half of the run.
         */
        pages?: object;
    }

    /**
     * A named group of ORGANIZATIONS — by hand, by rule, or both at once.
     */
    export type Segment = {
        /**
         * Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
         */
        code?: string;
        /**
         * When the segment was created.
         */
        created_at?: string;
        /**
         * Primary key of the segment.
         */
        id?: string;
        /**
         * Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
         */
        labels?: object | null;
        /**
         * Sort order in the cockpit, ascending. Ties fall back to insertion order.
         */
        position?: number;
        /**
         * How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
         */
        rule_match?: SegmentRuleMatch;
        /**
         * The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app.
         */
        rules?: object | null;
        /**
         * When the rule last finished a COMPLETE recompute. Null after a rule change, and while a chunked recompute is still running — so it doubles as "are the rule memberships trustworthy right now?".
         */
        rules_computed_at?: string | null;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
        /**
         * When any column of this row last changed.
         */
        updated_at?: string;
    }

    /**
     * 
     */
    export type SegmentCreateRequest = {
        /**
         * Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
         */
        code: string;
        /**
         * Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
         */
        labels?: object | null;
        /**
         * Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
         */
        position?: number;
        /**
         * How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
         */
        rule_match?: SegmentRuleMatch;
        /**
         * The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
         */
        rules?: SegmentRules;
    }

    /**
     * One organization inside one segment, and the record of how it got there (hand-picked or matched by the rule).
     */
    export type SegmentMember = {
        /**
         * When the organization joined the segment.
         */
        created_at?: string;
        /**
         * Primary key of the membership row.
         */
        id?: string;
        /**
         * The member company. Segments group companies, never people — a person is reached through their organization.
         */
        organization_id?: string;
        /**
         * The segment.
         */
        segment_id?: string;
        /**
         * How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member survives every rule change.
         */
        source?: SegmentMemberSource;
        /**
         * The tenant this row belongs to — the store slug, not an id. Set by the platform from the authenticated context, never by a caller; a write that carries it is ignored, and no request can read another tenant's rows by sending a different one.
         */
        tenant_id?: string;
    }

    /**
     * Add one organization to a segment. Use source=&#039;manual&#039; (the default) for hand-picked members; rule members are materialized by the recompute route.
     */
    export type SegmentMemberCreateRequest = {
        /**
         * The member company. Segments group companies, never people — a person is reached through their organization.
         */
        organization_id: string;
        /**
         * The segment.
         */
        segment_id: string;
        /**
         * How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member survives every rule change. Default 'manual'.
         */
        source?: SegmentMemberSource;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type SegmentMemberUpdateRequest = {
        /**
         * The member company. Segments group companies, never people — a person is reached through their organization.
         */
        organization_id?: string;
        /**
         * The segment.
         */
        segment_id?: string;
        /**
         * How this membership came about: 'manual' is hand-picked, 'rule' was materialized by a recompute. The distinction is load-bearing — a recompute only ever inserts and deletes 'rule' rows, so a hand-picked member survives every rule change. Default 'manual'.
         */
        source?: SegmentMemberSource;
    }

    /**
     * 
     */
    export type SegmentRuleCondition = {
        /**
         * What the organization IS: an organizations column (name, status, vat_id, branche, external_team_id) or 'setting:<key>' for a top-level key of organizations.settings. Or what it DID, read from the organization_metrics projection: order_count, order_count_30d/90d/365d, revenue_total, revenue_30d/90d/365d, avg_order_value, avg_order_value_365d, first_order_at, last_order_at, currency — plus the virtual days_since_last_order (gt/gte/lt/lte only), which compares last_order_at against a cut-off computed at evaluation time and never matches an organization that never ordered (use last_order_at is_empty for those).
         */
        field: string;
        /**
         * How `value` is compared to `field`. `contains`/`starts_with`/`ends_with` are text matches; `in` takes an array; `is_empty`/`is_not_empty` take no value at all.
         */
        operator: SegmentRuleOperator;
        /**
         * Omitted for is_empty/is_not_empty; an array for 'in'; a string, number or boolean otherwise. A number or boolean makes a 'setting:' condition compare as JSONB, so it only matches values stored as a JSON number/boolean.
         */
        value?: string;
    }

    /**
     * 
     */
    export type SegmentRulePreviewRequest = {
        /**
         * The conditions, combined by `rule_match`. At least one, at most 25.
         */
        conditions: SegmentRuleCondition[];
        /**
         * How the conditions combine. Default 'all'.
         */
        rule_match?: SegmentRulePreviewRequestRuleMatch;
        /**
         * Only 'organizations' is supported; any other value is rejected. A segment groups COMPANIES — the people are reached through them.
         */
        target?: SegmentRulePreviewRequestTarget;
    }

    /**
     * 
     */
    export type SegmentRulePreviewResponse = {
        /**
         * The cap that applied (5000), or null when the rule was answered by a single count query and no cap was needed.
         */
        cap?: number | null;
        /**
         * True when the combined evaluation hit the id cap, which makes `count` a lower bound.
         */
        capped?: boolean;
        /**
         * How many organizations the rule selects. Exact when 'capped' is false; a LOWER BOUND when it is true.
         */
        count?: number;
        /**
         * How the conditions were combined for this preview.
         */
        rule_match?: SegmentRulePreviewResponseRuleMatch;
        /**
         * A handful of the organizations the rule selects — enough for an operator to recognise whether the rule means what they thought. Never the full set.
         */
        sample?: object[];
        /**
         * The segment named in the path. It is not read — the rule comes from the body — but it has to exist.
         */
        segment_id?: string;
        /**
         * What the rule selects. Only 'organizations' exists.
         */
        target?: SegmentRulePreviewResponseTarget;
    }

    /**
     * No parameters — send {}.
     */
    export type SegmentRuleRecomputeAllRequest = {
    }

    /**
     * 
     */
    export type SegmentRuleRecomputeAllResponse = {
        /**
         * Rule memberships inserted across every segment in THIS call.
         */
        added?: number;
        /**
         * False when any segment is unfinished or skipped — call again.
         */
        done?: boolean;
        /**
         * Segments whose own recompute raised — they carry `error` and `status` in `segments` and did not abort the run.
         */
        failed?: number;
        /**
         * Ruled segments the run looked at.
         */
        processed?: number;
        /**
         * Rule memberships deleted across every segment in THIS call.
         */
        removed?: number;
        /**
         * One entry per segment; a failed segment carries `error` and `status` instead of the counters.
         */
        segments?: object[];
        /**
         * Segments the budget did not reach at all.
         */
        skipped?: number;
    }

    /**
     * 
     */
    export type SegmentRuleRecomputeRequest = {
        /**
         * Continuation token from a previous response — the id of the last organization the pass touched. Omit to resume or start automatically; pass null to force a restart from the beginning.
         */
        cursor?: string | null;
    }

    /**
     * 
     */
    export type SegmentRuleRecomputeResponse = {
        /**
         * Rule memberships inserted by THIS call.
         */
        added?: number;
        /**
         * True when every membership insert used a bulk array request; false if any batch fell back to row-at-a-time.
         */
        batched?: boolean;
        /**
         * Set when the pass completes.
         */
        computed_at?: string | null;
        /**
         * Send back on the next call; null when the pass is done.
         */
        cursor?: string | null;
        /**
         * False means work remains — POST again with `cursor`.
         */
        done?: boolean;
        /**
         * Matching organizations examined by THIS call.
         */
        processed?: number;
        /**
         * Rule memberships deleted by THIS call.
         */
        removed?: number;
        /**
         * The segment that was recomputed.
         */
        segment_id?: string;
        /**
         * The rule's full match count; null until done.
         */
        total?: number | null;
    }

    /**
     * The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:&lt;key&gt;` entries and the organization_metrics projection — so &#039;no order in 365 days&#039; is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
     */
    export type SegmentRules = {
        /**
         * The conditions, combined by `rule_match`. At least one, at most 25.
         */
        conditions: SegmentRuleCondition[];
        /**
         * Only 'organizations' is supported; any other value is rejected. A segment groups COMPANIES — the people are reached through them.
         */
        target?: SegmentRulesTarget;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type SegmentUpdateRequest = {
        /**
         * Stable identifier, unique per tenant — what other apps and integrations name the segment by. Free text, but lowercase with underscores is the convention every seeded vocabulary follows.
         */
        code?: string;
        /**
         * Localized display names keyed by language tag. Null means nobody translated it and a client falls back to showing the code.
         */
        labels?: object | null;
        /**
         * Sort order in the cockpit, ascending. Ties fall back to insertion order. Default 0.
         */
        position?: number;
        /**
         * How the conditions combine: 'all' (default) is AND, 'any' is OR. Null means the same as 'all'.
         */
        rule_match?: SegmentRuleMatch;
        /**
         * The selector that decides membership, stored verbatim. Null means the segment is manual-only. The same rule language product categories use, evaluated over organization columns, `setting:<key>` entries and the organization_metrics projection — so 'no order in 365 days' is expressible without joining the orders app. Null makes the segment manual-only. Changing it does not move a single membership — run the recompute.
         */
        rules?: SegmentRules;
    }

    /**
     * 
     */
    export type ShippingCarrier = {
        /**
         * Stable carrier code, unique per tenant (e.g. dhl, dpd, gls). A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field. Deliberately no slug pattern: the column asks only for a non-empty string, and a contract stricter than the implementation would refuse codes merchants already keep.
         */
        code?: string;
        /**
         * The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list.
         */
        countries?: string[] | null;
        /**
         * When the row was created (UTC).
         */
        created_at?: string;
        /**
         * This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
         */
        cutoff_time?: string | null;
        /**
         * Transit time upper bound, in calendar days from the ship date.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
         */
        eta_days_min?: number | null;
        /**
         * Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days. Overrides the tenant's handling_days.
         */
        handling_days?: number | null;
        /**
         * Row id, assigned by the database on insert.
         */
        id?: string;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
         */
        metadata?: object | null;
        /**
         * Display name, as an operator typed it.
         */
        name?: string;
        /**
         * Sort order among the carriers; ties fall back to whatever the database returns.
         */
        position?: number;
        /**
         * The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
         */
        service_level?: string;
        /**
         * Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
         */
        status?: ShippingCarrierStatus;
        /**
         * Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
         */
        tracking_url_template?: string | null;
        /**
         * When the row was last written (UTC).
         */
        updated_at?: string;
    }

    /**
     * One carrier this app knows the facts for, exactly as it would be created.
     */
    export type ShippingCarrierCatalogEntry = {
        /**
         * The code the seeded row would carry, and the code a method's `carrier` text has to match to resolve to it.
         */
        code?: string;
        /**
         * The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list.
         */
        countries?: string[] | null;
        /**
         * This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
         */
        cutoff_time?: string | null;
        /**
         * Transit time upper bound, in calendar days from the ship date.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
         */
        eta_days_min?: number | null;
        /**
         * Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days. Overrides the tenant's handling_days.
         */
        handling_days?: number | null;
        /**
         * Localized display names the seed would carry. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * The display name the seeded row would carry. An existing row keeps the merchant's own name — the seed never writes over one.
         */
        name?: string;
        /**
         * Whether a fresh install starts with this carrier. False means this app knows how to describe it but only creates it when asked.
         */
        seeded?: boolean;
        /**
         * Service-level code the seeded row carries — one of the tenant's own values.
         */
        service_level?: string;
        /**
         * Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
         */
        tracking_url_template?: string | null;
    }

    /**
     * A new carrier — the tracking-URL template, service level, transit time and pickup cut-off a method inherits.
     */
    export type ShippingCarrierCreateRequest = {
        /**
         * Stable carrier code, unique per tenant (e.g. dhl, dpd, gls). A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field. Deliberately no slug pattern: the column asks only for a non-empty string, and a contract stricter than the implementation would refuse codes merchants already keep.
         */
        code: string;
        /**
         * The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the method's own restriction: a method may not be offered into a country its carrier does not reach.
         */
        countries?: string[] | null;
        /**
         * This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
         */
        cutoff_time?: string | null;
        /**
         * Transit time upper bound, in calendar days from the ship date.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
         */
        eta_days_min?: number | null;
        /**
         * Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days. Overrides the tenant's handling_days.
         */
        handling_days?: number | null;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
         */
        metadata?: object | null;
        /**
         * Display name, as an operator typed it.
         */
        name: string;
        /**
         * Sort order among the carriers; ties fall back to whatever the database returns.
         */
        position?: number;
        /**
         * The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
         */
        service_level?: string;
        /**
         * Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
         */
        status?: ShippingCarrierStatus;
        /**
         * Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
         */
        tracking_url_template?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ShippingCarrierUpdateRequest = {
        /**
         * Stable carrier code, unique per tenant (e.g. dhl, dpd, gls). A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field. Deliberately no slug pattern: the column asks only for a non-empty string, and a contract stricter than the implementation would refuse codes merchants already keep.
         */
        code?: string;
        /**
         * The countries this carrier serves. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the method's own restriction: a method may not be offered into a country its carrier does not reach.
         */
        countries?: string[] | null;
        /**
         * This carrier's own daily pickup cut-off, HH:MM in 24-hour form, UTC. Overrides the tenant's cutoff_time for methods on this carrier — one shop-wide time cannot be both DHL's 16:00 and a forwarder's 12:00. Null or the empty string means this carrier declares none; any other shape is a 400, because a cut-off the estimator cannot read is a delivery promise silently computed without one.
         */
        cutoff_time?: string | null;
        /**
         * Transit time upper bound, in calendar days from the ship date.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound, in calendar days from the ship date — inherited by any method on this carrier that states no ETA of its own.
         */
        eta_days_min?: number | null;
        /**
         * Days needed to make a consignment ready for THIS carrier, added to the ship date before the transit days. Overrides the tenant's handling_days.
         */
        handling_days?: number | null;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
         */
        metadata?: object | null;
        /**
         * Display name, as an operator typed it.
         */
        name?: string;
        /**
         * Sort order among the carriers; ties fall back to whatever the database returns.
         */
        position?: number;
        /**
         * The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
         */
        service_level?: string;
        /**
         * Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable.
         */
        status?: ShippingCarrierStatus;
        /**
         * Tracking page URL with {tracking_code} where the number goes; {postal_code} and {country} are also substituted, URL-encoded. Null for a carrier with no public tracking page.
         */
        tracking_url_template?: string | null;
    }

    /**
     * The delivery window a checkout can print. Calendar days, cut-off evaluated in UTC (send `at` to control the instant).
     */
    export type ShippingDeliveryEstimate = {
        /**
         * Whether the cut-off had passed at evaluation time, costing a day.
         */
        cutoff_passed?: boolean;
        /**
         * The cut-off applied (HH:MM, UTC), or null when none is configured — the carrier's own when it declares one, else the market's `cutoff_time` setting.
         */
        cutoff_time?: string | null;
        /**
         * ship_date + eta_days_min.
         */
        earliest?: string | null;
        /**
         * The tenant's handling_days setting, as applied.
         */
        handling_days?: number;
        /**
         * ship_date + eta_days_max.
         */
        latest?: string | null;
        /**
         * The day the parcel leaves — today plus handling days, plus one when the cut-off has passed.
         */
        ship_date?: string;
    }

    /**
     * 
     */
    export type ShippingMethod = {
        /**
         * Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
         */
        carrier?: string | null;
        /**
         * The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
         */
        carrier_id?: string | null;
        /**
         * Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
         */
        code?: string;
        /**
         * The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list.
         */
        countries?: string[] | null;
        /**
         * When the row was created (UTC).
         */
        created_at?: string;
        /**
         * ISO 4217 code (default EUR). Exactly three characters — the column says so. Echoed into a rate, never converted: this app prices in the currency the method carries.
         */
        currency?: string;
        /**
         * The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
         */
        description?: string | null;
        /**
         * Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
         */
        enabled?: boolean;
        /**
         * Transit time upper bound in calendar days. Falls back to the carrier's when null.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
         */
        eta_days_min?: number | null;
        /**
         * Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold.
         */
        free_above?: number | null;
        /**
         * Row id, assigned by the database on insert.
         */
        id?: string;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at. Free text: the set of attributes is the catalogue's, not this app's.
         */
        matrix_attribute?: string | null;
        /**
         * The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value, or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
         */
        matrix_basis?: ShippingMethodMatrixBasis;
        /**
         * Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
         */
        metadata?: object | null;
        /**
         * Display name shown in the checkout.
         */
        name?: string;
        /**
         * Sort order in the checkout (default 0) — a rate answer is returned in this order.
         */
        position?: number;
        /**
         * The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
         */
        price?: number;
        /**
         * Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
         */
        pricing_type?: ShippingMethodPricingType;
        /**
         * Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically.
         */
        quote_above?: number | null;
        /**
         * This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
         */
        tax_class?: string | null;
        /**
         * When the row was last written (UTC).
         */
        updated_at?: string;
    }

    /**
     * A new shipping method — fixed, free or matrix pricing.
     */
    export type ShippingMethodCreateRequest = {
        /**
         * Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
         */
        carrier?: string | null;
        /**
         * The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
         */
        carrier_id?: string | null;
        /**
         * Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
         */
        code: string;
        /**
         * The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the carrier's own reach.
         */
        countries?: string[] | null;
        /**
         * ISO 4217 code (default EUR). Exactly three characters — the column says so. Echoed into a rate, never converted: this app prices in the currency the method carries.
         */
        currency?: string;
        /**
         * The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
         */
        description?: string | null;
        /**
         * Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
         */
        enabled?: boolean;
        /**
         * Transit time upper bound in calendar days. Falls back to the carrier's when null.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
         */
        eta_days_min?: number | null;
        /**
         * Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold.
         */
        free_above?: number | null;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at. Free text: the set of attributes is the catalogue's, not this app's.
         */
        matrix_attribute?: string | null;
        /**
         * The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value, or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
         */
        matrix_basis?: ShippingMethodMatrixBasis;
        /**
         * Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
         */
        metadata?: object | null;
        /**
         * Display name shown in the checkout.
         */
        name: string;
        /**
         * Sort order in the checkout (default 0) — a rate answer is returned in this order.
         */
        position?: number;
        /**
         * The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
         */
        price?: number;
        /**
         * Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
         */
        pricing_type?: ShippingMethodPricingType;
        /**
         * Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically.
         */
        quote_above?: number | null;
        /**
         * This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
         */
        tax_class?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ShippingMethodUpdateRequest = {
        /**
         * Carrier CODE, kept from before shipping_carriers existed. Looked up in the carrier table when carrier_id is not set, so an existing value keeps working and gains a tracking template; a code nobody maintains is still reported as a plain name.
         */
        carrier?: string | null;
        /**
         * The carrier this method ships with. Wins over `carrier` and supplies the tracking template, pickup cut-off, handling time and transit days.
         */
        carrier_id?: string | null;
        /**
         * Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
         */
        code?: string;
        /**
         * The countries this method may be offered into. ISO 3166-1 alpha-2 codes; null or an empty array means no restriction. Compared upper-cased, so a lower-case entry still matches. Declared as an array rather than the bare object a jsonb column derives to — this one is always a list. ANDed with the carrier's own reach.
         */
        countries?: string[] | null;
        /**
         * ISO 4217 code (default EUR). Exactly three characters — the column says so. Echoed into a rate, never converted: this app prices in the currency the method carries.
         */
        currency?: string;
        /**
         * The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
         */
        description?: string | null;
        /**
         * Only enabled methods are ever quoted (default false); a disabled one is reported in `excluded` rather than hidden.
         */
        enabled?: boolean;
        /**
         * Transit time upper bound in calendar days. Falls back to the carrier's when null.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound in calendar days, for the checkout. Falls back to the carrier's when null.
         */
        eta_days_min?: number | null;
        /**
         * Free shipping at or above this order value — wins over every pricing model, including a matrix. Compared net or gross as the market's free_above_compares setting declares. Null falls back to the tenant's shop-wide free_shipping_threshold.
         */
        free_above?: number | null;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Attribute name for matrix_basis 'attribute' — the key the rate request's `attributes` map is read at. Free text: the set of attributes is the catalogue's, not this app's.
         */
        matrix_attribute?: string | null;
        /**
         * The measure a matrix method prices its tiers over: total basket weight (in the market's weight unit), total item count, order value, or 'attribute' — any number the rate request carries under matrix_attribute. Null falls back to the tenant's matrix_basis_default. Ignored unless pricing_type is 'matrix'.
         */
        matrix_basis?: ShippingMethodMatrixBasis;
        /**
         * Free-form jsonb the platform never reads or validates — whatever the merchant or their integration needs to keep beside the row (a customer number with the carrier, an ERP key, a label-printer id). The shape varies BY INTEGRATION, not by anything this app knows, so no key is declared and none is reserved; the example is one plausible instance rather than a schema. A flat map of scalars is the convention, and nothing enforces it.
         */
        metadata?: object | null;
        /**
         * Display name shown in the checkout.
         */
        name?: string;
        /**
         * Sort order in the checkout (default 0) — a rate answer is returned in this order.
         */
        position?: number;
        /**
         * The fixed price (default 0), in `currency` — ignored for 'free' and 'matrix'.
         */
        price?: number;
        /**
         * Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
         */
        pricing_type?: ShippingMethodPricingType;
        /**
         * Above this MATRIX MEASURE the method carries no automatic price: it is still offered, flagged `quote_required` with a reason, and the storefront shows 'shipping on request'. For bulky or overweight freight priced by hand. Null = every measure is priced automatically.
         */
        quote_above?: number | null;
        /**
         * This method's own tax class, as a CODE into the buyer market's tax classes (markets.tax_classes) — never a rate. First step of the tax chain: unset falls back to the tenant's shipping_tax_class setting, then the market default. Not a foreign key and it could not be (ADR-0055); GET /shipping/tax-classes/{code}/usage is the integrity question markets asks in its place.
         */
        tax_class?: string | null;
    }

    /**
     * One offerable shipping method with its computed price for this buyer context.
     */
    export type ShippingRate = {
        /**
         * The carrier CODE — unchanged for every caller that already reads it. The method's carrier_id, else its `carrier` text, else the tenant's default_carrier.
         */
        carrier?: string | null;
        /**
         * The carrier row's display name, or null when the code names no maintained carrier.
         */
        carrier_name?: string | null;
        /**
         * The class of service this rate is, from the carrier row — a code into the tenant's service levels.
         */
        carrier_service_level?: string | null;
        /**
         * Which step of the chain answered: 'method' (carrier_id), 'method_code' (the method's text matched a carrier), 'method_text' (it matched none), 'tenant_default' / 'tenant_default_text' (the setting, matched or not).
         */
        carrier_source?: ShippingCarrierSource;
        /**
         * Stable method code, unique per tenant (e.g. standard, express). What a checkout and an order line store, so it is the value every integration joins on.
         */
        code?: string;
        /**
         * ISO 4217 code (default EUR). Exactly three characters — the column says so. Echoed into a rate, never converted: this app prices in the currency the method carries.
         */
        currency?: string;
        /**
         * The delivery window a checkout can print. Calendar days, cut-off evaluated in UTC (send `at` to control the instant).
         */
        delivery?: ShippingDeliveryEstimate;
        /**
         * The sentence under the name in the checkout — the delivery promise in words. Null when the name says enough.
         */
        description?: string | null;
        /**
         * Transit time upper bound in calendar days, as applied: the method's own, else the carrier's.
         */
        eta_days_max?: number | null;
        /**
         * Transit time lower bound in calendar days, as applied: the method's own, else the carrier's.
         */
        eta_days_min?: number | null;
        /**
         * Only when a free-above threshold applied. Names the compared value AND its basis (net or gross), and says whether the threshold was the method's own or shop-wide — the free-shipping promise is a common dispute and this is the sentence that settles it.
         */
        free_reason?: string;
        /**
         * Localized display names. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Display name shown in the checkout.
         */
        name?: string;
        /**
         * Sort order in the checkout (default 0) — a rate answer is returned in this order.
         */
        position?: number;
        /**
         * The shipping fee for this basket, in `currency`, rounded to two decimals — 0 when a free-above threshold or a 'free' method applied. NULL when `quote_required` is true: the price is unknown, not zero, and a checkout must not add 0.00 for it.
         */
        price?: number | null;
        /**
         * Pricing model (default 'fixed'): 'fixed' is one price for every basket, 'free' is no price at all, 'matrix' is a tiered price read off this method's rate tiers. Only 'matrix' looks at matrix_basis, quote_above and the tier table.
         */
        pricing_type?: ShippingRatePricingType;
        /**
         * Only when quote_required — the measure and the threshold it exceeded, so an operator pricing it by hand can see what triggered the referral.
         */
        quote_reason?: string;
        /**
         * True when the matrix measure is above the method's quote_above threshold: the method is still offered, carries no price, and the storefront shows 'shipping on request'. The order is placed without a computed shipping fee.
         */
        quote_required?: boolean;
        /**
         * The tax class this rate was taxed under, as a code in markets.tax_classes — the method's own, the tenant's shipping_tax_class, or the market's default, whichever answered. Null means unresolved, not untaxed.
         */
        tax_class?: string | null;
        /**
         * The rate in percent from markets.tax_classes for this market and tax_class — 19 means 19 %. Null means UNKNOWN, never 0: read `tax.resolved` before treating a missing rate as tax-free.
         */
        tax_rate?: number | null;
        /**
         * Which step of the chain supplied the rate: the method's own class, the tenant's shipping_tax_class, the market default, or the tenant's default_shipping_tax_rate. Null means unknown, NOT untaxed.
         */
        tax_source?: ShippingTaxSource;
    }

    /**
     * 
     */
    export type ShippingRateTier = {
        /**
         * When the row was created (UTC).
         */
        created_at?: string;
        /**
         * Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first.
         */
        from_value?: number;
        /**
         * Row id, assigned by the database on insert.
         */
        id?: string;
        /**
         * The shipping method this tier prices. Set from the path on every write, so a body that names another method is ignored rather than obeyed. ON DELETE CASCADE: deleting the method deletes its table.
         */
        method_id?: string;
        /**
         * Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
         */
        position?: number;
        /**
         * What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit.
         */
        price?: number;
        /**
         * When the row was last written (UTC).
         */
        updated_at?: string;
    }

    /**
     * A new matrix tier (from_value → price) of the method in the path.
     */
    export type ShippingRateTierCreateRequest = {
        /**
         * Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Defaults to 0.
         */
        from_value?: number;
        /**
         * Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
         */
        position?: number;
        /**
         * What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Defaults to 0.
         */
        price?: number;
    }

    /**
     * A matrix tier of the new set (from_value → price) — null falls back to 0, position derives from the array order.
     */
    export type ShippingRateTierReplaceItem = {
        /**
         * Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Null falls back to 0.
         */
        from_value?: number | null;
        /**
         * Ignored — derived from the array index.
         */
        position?: number | null;
        /**
         * What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Null falls back to 0.
         */
        price?: number | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type ShippingRateTierUpdateRequest = {
        /**
         * Lower bound of this tier, in the method's matrix measure — kilograms (or whatever the market's `weight_unit` names, converted through its factor) for a weight matrix, items for quantity, money in the method's currency for order_value, and the raw attribute value for 'attribute'. INCLUSIVE: the tier applies from this value upward, and the tier that wins is the one with the highest from_value at or below the measured value, so a measure of exactly 10 is priced by the tier at 10 rather than the one below it. The last tier has no upper bound. Unique per method — a second tier at the same threshold is a 409, because which of the two won would be whatever the database returned first. Defaults to 0.
         */
        from_value?: number;
        /**
         * Display order in the matrix editor (default 0; a bulk replace derives it from the array index). Pricing reads from_value, never this.
         */
        position?: number;
        /**
         * What this tier costs, in the method's currency. Charged in full for the whole consignment — a matrix is a lookup table, not a rate per unit. Defaults to 0.
         */
        price?: number;
    }

    /**
     * An evenly-stepped tier table. Tiers are generated at from_value, from_value+step, … up to to_value; each costs step_price more than the one before.
     */
    export type ShippingRateTiersLadderRequest = {
        /**
         * Price of the first tier.
         */
        base_price: number;
        /**
         * First tier threshold (default 0), in the method's matrix measure.
         */
        from_value?: number | null;
        /**
         * Replace the whole table (default true) or append to it.
         */
        replace?: boolean | null;
        /**
         * Distance between two tiers. Must be > 0.
         */
        step: number;
        /**
         * Added to each subsequent tier (default 0). A negative value is allowed as long as no tier ends up below 0.
         */
        step_price?: number | null;
        /**
         * Last tier threshold. The final tier keeps applying above it — a matrix has no upper bound. Must be >= from_value.
         */
        to_value: number;
    }

    /**
     * 
     */
    export type ShippingRateTiersReplaceRequest = {
        /**
         * The complete new tier set (set semantics) — positions are derived from the array order. An empty array clears the matrix, and a matrix method with no tiers quotes nothing.
         */
        tiers: ShippingRateTierReplaceItem[];
    }

    /**
     * How this answer was measured — the tenant settings that shaped it, echoed so the numbers can be re-derived.
     */
    export type ShippingRatesBasis = {
        /**
         * The instant the delivery estimates were computed from.
         */
        evaluated_at?: string;
        /**
         * Whether free-above thresholds were compared against the net or the gross order value.
         */
        free_above_compares?: ShippingFreeAboveBasis;
        /**
         * The measure a matrix method without its own basis priced over.
         */
        matrix_basis_default?: ShippingRatesBasisMatrixBasisDefault;
        /**
         * The unit the request expressed its weight in; converted to weight_unit before any tier was matched.
         */
        request_weight_unit?: string;
        /**
         * Kilograms per unit of `request_weight_unit`, as applied.
         */
        request_weight_unit_factor?: number;
        /**
         * The unit the rate tiers are keyed in — this market's `weight_unit` setting, else the unit the tenant flagged as default.
         */
        weight_unit?: string;
        /**
         * Kilograms per unit of `weight_unit`, as applied. Echoed because a unit is a code PLUS a number and the number is what priced the parcel — a quote has to be re-derivable from its own payload, not from a table the merchant may since have edited.
         */
        weight_unit_factor?: number;
    }

    /**
     * The buyer context the checkout resolves rates for — matrix methods need their measure (weight, quantity, order value or attribute) to apply.
     */
    export type ShippingRatesRequest = {
        /**
         * The instant to evaluate the delivery estimate at (ISO 8601). Omitted: now. Lets a storefront compute the cut-off in its own timezone.
         */
        at?: string | null;
        /**
         * Measure values for attribute matrices, keyed by attribute NAME — the key a matrix method names in its matrix_attribute, and the value the number its tiers are matched against. Summed over the basket by the caller, not by this app. Only the key a method asks for is read; anything else in the map is carried along and ignored, and a value that is not a finite number excludes that method with a reason rather than failing the quote.
         */
        attributes?: object | null;
        /**
         * Destination ISO 3166-1 alpha-2 code — compared upper-cased against method and carrier country restrictions. Omitted or null: every method that restricts by country is excluded, with a reason.
         */
        country?: string | null;
        /**
         * ISO 4217 code, echoed into the rates (default 'EUR'). Echoed, not converted: this app prices in the currency the method carries.
         */
        currency?: string | null;
        /**
         * Buyer market for tax resolution. Omitted: the market matching `country`, else the tenant's sole market — never an arbitrary one.
         */
        market_id?: string | null;
        /**
         * Order value (default 0) — drives order_value matrices, and free-above thresholds when no sided value is sent. Read on the basis the tenant's free_above_compares setting declares.
         */
        order_value?: number | null;
        /**
         * Order value including tax. Compared against free-above thresholds when free_above_compares is 'gross'.
         */
        order_value_gross?: number | null;
        /**
         * Order value excluding tax. Compared against free-above thresholds when free_above_compares is 'net'.
         */
        order_value_net?: number | null;
        /**
         * Total quantity — measure for quantity matrices.
         */
        quantity?: number | null;
        /**
         * Total weight — measure for weight matrices. Read in weight_unit and converted to the unit the tiers are keyed in.
         */
        weight?: number | null;
        /**
         * The unit `weight` is expressed in, as a CODE into the tenant's own weight units (GET /shipping/weight-units). Omitted, it is the unit this market quotes in. A unit the tenant does not keep is a 400 — a mis-read weight prices the wrong bracket silently, and guessing is worse than refusing.
         */
        weight_unit?: string | null;
    }

    /**
     * 
     */
    export type ShippingServiceLevelCreateRequest = {
        /**
         * Lowercase letters, digits, - or _, starting with a letter. What `shipping_carriers.service_level` stores. Immutable once created — renaming it would orphan every row carrying it.
         */
        code: string;
        /**
         * The sentence under the title, explaining when to pick this service level. Null when the title says enough.
         */
        description?: string | null;
        /**
         * Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        descriptions?: object | null;
        /**
         * Promote this value on creation; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Sort order in a select — the collection is returned in it.
         */
        position?: number;
        /**
         * What an operator reads in a select. The name a merchant renames; the code underneath never moves.
         */
        title: string;
        /**
         * Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
         */
        tone?: ShippingServiceLevelCreateRequestTone;
    }

    /**
     * No payload — send {}.
     */
    export type ShippingServiceLevelMakeDefaultRequest = {
    }

    /**
     * 
     */
    export type ShippingServiceLevelRow = {
        /**
         * What `shipping_carriers.service_level` stores. Immutable once created — renaming it would orphan every row carrying it.
         */
        code?: string;
        /**
         * When the row was created (UTC).
         */
        created_at?: string;
        /**
         * The sentence under the title, explaining when to pick this service level. Null when the title says enough.
         */
        description?: string | null;
        /**
         * Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        descriptions?: object | null;
        /**
         * Row id, assigned by the database on insert.
         */
        id?: string;
        /**
         * The service level a fallback lands on. Exactly one row carries it, and POST …/make-default is what moves it.
         */
        is_default?: boolean;
        /**
         * Seeded on install rather than typed by the merchant. Still renameable and still deletable; it only says where the row came from.
         */
        is_system?: boolean;
        /**
         * Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Sort order in a select — the collection is returned in it.
         */
        position?: number;
        /**
         * What an operator reads in a select. The name a merchant renames; the code underneath never moves.
         */
        title?: string;
        /**
         * Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
         */
        tone?: ShippingServiceLevelRowTone;
        /**
         * When the row was last written (UTC).
         */
        updated_at?: string;
    }

    /**
     * Everything but the code. Sending a different code is a 400 rather than a silent no-op: renaming it would orphan every row that carries it.
     */
    export type ShippingServiceLevelUpdateRequest = {
        /**
         * The sentence under the title, explaining when to pick this service level. Null when the title says enough.
         */
        description?: string | null;
        /**
         * Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        descriptions?: object | null;
        /**
         * Promote this value; the previous default is demoted. POST …/make-default does the same thing without an edit.
         */
        is_default?: boolean;
        /**
         * Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Sort order in a select — the collection is returned in it.
         */
        position?: number;
        /**
         * What an operator reads in a select. The name a merchant renames; the code underneath never moves.
         */
        title?: string;
        /**
         * Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
         */
        tone?: ShippingServiceLevelUpdateRequestTone;
    }

    /**
     * What in this app still points at a market tax class, by code.
     */
    export type ShippingTaxClassUsage = {
        /**
         * The tax-class code that was asked about, echoed back.
         */
        code?: string;
        /**
         * True when this market's shipping_tax_class setting names the code — the class every method that names none falls back to.
         */
        fallback_setting?: boolean;
        /**
         * True when at least one method or the market fallback setting names it. The single field a caller deciding whether to allow a delete needs; the rest is so it can word the refusal.
         */
        in_use?: boolean;
        /**
         * The first 20 of them, so a refusal can name names instead of a number.
         */
        methods?: object[];
        /**
         * How many methods name this code as their own tax_class. Capped at 500 — a tenant with more shipping methods than that has a bigger problem than an imprecise count.
         */
        shipping_methods?: number;
    }

    /**
     * Tax resolution status of this answer. resolved=false ⇒ tax_class/tax_rate are unknown, NOT zero.
     */
    export type ShippingTaxContext = {
        /**
         * The market whose tax classes were applied.
         */
        market_id?: string | null;
        /**
         * Human-readable form of `reason`, safe to log or show an operator. One sentence per reason; the example is the `no_markets` wording.
         */
        message?: string;
        /**
         * Only when resolved=false — why no rate could be applied.
         */
        reason?: ShippingTaxUnresolvedReason;
        /**
         * Whether a tax rate could be applied at all. FALSE means every rate's tax_class and tax_rate are UNKNOWN — not zero, and not tax-free. A checkout that adds 0 % on this is wrong; read `reason` and either ask for a market or refuse to quote.
         */
        resolved?: boolean;
        /**
         * Where the market came from: 'request' (market_id), 'header' (x-revenexx-market), 'country' (the market matching the destination) or 'sole_market' (the tenant has exactly one).
         */
        source?: ShippingTaxMarketSource;
        /**
         * Present when the market is known but registers no tax classes and the tenant's default_shipping_tax_rate supplied the number instead.
         */
        via?: ShippingTaxContextVia;
    }

    /**
     * The carrier row that owns the URL format, identified so the caller can show who is carrying the parcel without a second read. Resolved whatever its status — a retired carrier still answers here.
     */
    export type ShippingTrackingCarrier = {
        /**
         * Stable carrier code, unique per tenant (e.g. dhl, dpd, gls). A method whose `carrier` text equals this code resolves to this carrier — that is the migration path off the free-text field. Deliberately no slug pattern: the column asks only for a non-empty string, and a contract stricter than the implementation would refuse codes merchants already keep.
         */
        code?: string;
        /**
         * Row id, assigned by the database on insert.
         */
        id?: string;
        /**
         * Display name, for the line that reads "shipped with …".
         */
        name?: string;
        /**
         * The class of service this row represents (default 'standard'), as a CODE into the tenant's own service levels (GET /shipping/service-levels). One row is one class: a carrier selling both a parcel and an express product is two rows. Deliberately not an enum here — the set is the merchant's, so a fixed list in this contract would make the gateway reject a level they created. A code the tenant does not keep is a 400 naming the codes they do.
         */
        service_level?: string;
        /**
         * Whether this carrier may be quoted (default 'active'). Anything else excludes every method that ships with it from POST /shipping/rates, with a reason. Tracking links are NOT gated on it — a retired carrier's old shipments stay resolvable. Reported here so a UI can mark a link as belonging to a carrier nobody quotes any more.
         */
        status?: ShippingTrackingCarrierStatus;
    }

    /**
     * One parcel, resolved into a tracking link by the carrier that owns the URL format.
     */
    export type ShippingTrackingRequest = {
        /**
         * Carrier code (what an order shipment already stores) or the carrier row id — a value matching the uuid form is read as the id, anything else as a code, case-insensitively. Must name a carrier THIS tenant keeps; one that does not is a 404.
         */
        carrier: string;
        /**
         * Destination ISO 3166-1 alpha-2 code — only needed by a template that names {country}. Upper-cased before substitution.
         */
        country?: string | null;
        /**
         * Destination postcode — only needed by a template that names {postal_code}.
         */
        postal_code?: string | null;
        /**
         * The carrier's tracking number. Required by every template that names {tracking_code}, which is all of them in the shipped catalog. URL-encoded before substitution, so a code with a space or a slash cannot reshape the link.
         */
        tracking_code?: string | null;
    }

    /**
     * 
     */
    export type ShippingVocabulary = {
        /**
         * The app that owns this vocabulary.
         */
        app?: string;
        /**
         * The set is exhaustive, so a value outside it is stale data rather than a missing label. True either way — what differs is who may extend it.
         */
        closed?: boolean;
        /**
         * The badge colour a value that names none falls back to.
         */
        default_tone?: ShippingVocabularyDefaultTone;
        /**
         * What the vocabulary is for. Either one string or a locale map keyed by locale (e.g. {en, de}) — curated copy carries the map, a value falling back to its own key carries the string.
         */
        description?: string | null;
        /**
         * The vocabulary name — the part after the dot in the qualified id.
         */
        name?: string;
        /**
         * 'schema' — the values are a CHECK constraint's, so the served set IS the enforced set. 'table' — the values are the tenant's own rows, read per request.
         */
        source?: ShippingVocabularySource;
        /**
         * What the vocabulary is called. Either one string or a locale map keyed by locale (e.g. {en, de}) — curated copy carries the map, a value falling back to its own key carries the string.
         */
        title?: string;
        /**
         * Every permitted value, in the order a select should offer them — constraint order for a schema vocabulary, `position` for a table one.
         */
        values?: ShippingVocabularyValue[];
    }

    /**
     * 
     */
    export type ShippingVocabularyIndex = {
        /**
         * The app that owns these vocabularies — the part before the dot in a qualified id.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, without its values. Names only: fetch one to get the set.
         */
        vocabularies?: ShippingVocabularyIndexEntry[];
    }

    /**
     * One vocabulary, named and titled.
     */
    export type ShippingVocabularyIndexEntry = {
        /**
         * What the vocabulary is for. Either one string or a locale map keyed by locale (e.g. {en, de}) — curated copy carries the map, a value falling back to its own key carries the string.
         */
        description?: string | null;
        /**
         * The part after the dot in the qualified id — what GET /shipping/vocabularies/{name} takes.
         */
        name?: string;
        /**
         * What the vocabulary is called. Either one string or a locale map keyed by locale (e.g. {en, de}) — curated copy carries the map, a value falling back to its own key carries the string.
         */
        title?: string;
    }

    /**
     * 
     */
    export type ShippingVocabularyValue = {
        /**
         * What the value means. Either one string or a locale map keyed by locale (e.g. {en, de}) — curated copy carries the map, a value falling back to its own key carries the string.
         */
        description?: string | null;
        /**
         * Table-backed only: localized descriptions, keyed by locale.
         */
        descriptions?: object | null;
        /**
         * weight-units only: kilograms per unit. A weight vocabulary without it is a list of names you cannot convert with.
         */
        factor?: number;
        /**
         * The value ends the lifecycle.
         */
        final?: boolean;
        /**
         * weight-units only: the unit every other factor is expressed in.
         */
        is_base?: boolean;
        /**
         * Table-backed only: the value a caller falls back to, so a client can mark it without reading the settings as well.
         */
        is_default?: boolean;
        /**
         * Table-backed only: seeded on install. Still renameable and retirable.
         */
        is_system?: boolean;
        /**
         * The value as the database stores it — what a column carries and what a filter matches. The only field a machine should compare on.
         */
        key?: string;
        /**
         * Table-backed only: localized titles, keyed by locale. Absent for a vocabulary whose values come from a CHECK constraint — those carry their copy in `title` instead.
         */
        labels?: object | null;
        /**
         * What a person reads. Falls back to a humanized key. Either one string or a locale map keyed by locale (e.g. {en, de}) — curated copy carries the map, a value falling back to its own key carries the string.
         */
        title?: string;
        /**
         * Semantic badge colour. The client owns what each tone looks like.
         */
        tone?: ShippingVocabularyTone;
    }

    /**
     * 
     */
    export type ShippingWeightUnitCreateRequest = {
        /**
         * Lowercase letters, digits, - or _, starting with a letter. What a rate request names in `weight_unit`, and what a market's `weight_unit` setting stores. Immutable once created — renaming it would orphan every row carrying it.
         */
        code: string;
        /**
         * The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
         */
        description?: string | null;
        /**
         * Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        descriptions?: object | null;
        /**
         * How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
         */
        factor: number;
        /**
         * Promote this value on creation; the previous default is demoted.
         */
        is_default?: boolean;
        /**
         * Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Sort order in a select — the collection is returned in it.
         */
        position?: number;
        /**
         * What an operator reads in a select. The name a merchant renames; the code underneath never moves.
         */
        title: string;
        /**
         * Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
         */
        tone?: ShippingWeightUnitCreateRequestTone;
    }

    /**
     * No payload — send {}.
     */
    export type ShippingWeightUnitMakeDefaultRequest = {
    }

    /**
     * 
     */
    export type ShippingWeightUnitRow = {
        /**
         * What a rate request names in `weight_unit`, and what a market's `weight_unit` setting stores. Immutable once created — renaming it would orphan every row carrying it.
         */
        code?: string;
        /**
         * When the row was created (UTC).
         */
        created_at?: string;
        /**
         * The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
         */
        description?: string | null;
        /**
         * Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        descriptions?: object | null;
        /**
         * How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
         */
        factor?: number;
        /**
         * Row id, assigned by the database on insert.
         */
        id?: string;
        /**
         * The anchor every other factor is expressed in. Exactly one row, fixed at install, not writable and not deletable — moving it would silently reprice every weight matrix.
         */
        is_base?: boolean;
        /**
         * The unit a market whose `weight_unit` setting is unset keys its tiers in. Exactly one row carries it.
         */
        is_default?: boolean;
        /**
         * Seeded on install rather than typed by the merchant. Still renameable and still deletable; it only says where the row came from.
         */
        is_system?: boolean;
        /**
         * Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Sort order in a select — the collection is returned in it.
         */
        position?: number;
        /**
         * What an operator reads in a select. The name a merchant renames; the code underneath never moves.
         */
        title?: string;
        /**
         * Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
         */
        tone?: ShippingWeightUnitRowTone;
        /**
         * When the row was last written (UTC).
         */
        updated_at?: string;
    }

    /**
     * Everything but the code. Sending a different code is a 400 rather than a silent no-op: renaming it would orphan every row that carries it.
     */
    export type ShippingWeightUnitUpdateRequest = {
        /**
         * The sentence under the title, explaining when to pick this weight unit. Null when the title says enough.
         */
        description?: string | null;
        /**
         * Localized descriptions. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        descriptions?: object | null;
        /**
         * How many BASE units (kilograms) one of this unit weighs — a tonne is 1000, a gram 0.001, a pound 0.45359237. This number prices parcels: every weight matrix converts a request through it. Must be > 0; the base unit is fixed at 1 and rejects a change.
         */
        factor?: number;
        /**
         * Promote this value; the previous default is demoted. POST …/make-default does the same thing without an edit.
         */
        is_default?: boolean;
        /**
         * Localized titles. A flat map keyed by locale — the Cockpit falls back to `en`. Null means the row has no translations and every client shows the untranslated column instead.
         */
        labels?: object | null;
        /**
         * Sort order in a select — the collection is returned in it.
         */
        position?: number;
        /**
         * What an operator reads in a select. The name a merchant renames; the code underneath never moves.
         */
        title?: string;
        /**
         * Semantic badge colour for a UI listing the set. The client owns what each tone looks like.
         */
        tone?: ShippingWeightUnitUpdateRequestTone;
    }

    /**
     * 
     */
    export type StockLevel = {
        /**
         * When the row was created. Server-set: it is in no request body, and a value sent for it is ignored.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A caller never sends one — it reads one back and puts it in the path of every later call.
         */
        id?: string;
        /**
         * The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it.
         */
        location_id?: string;
        /**
         * Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
         */
        metadata?: object | null;
        /**
         * How much is PHYSICALLY at this location, INCLUDING the units already promised to orders. It is a BALANCE, not a movement: the running total of every `stock_movements` booking for this (location, item), and no request writes it directly — POST /inventories/receive raises it, POST /inventories/commit lowers it when the order ships, the adjust routes correct it, and a create/update body naming it has it DROPPED (422 if it names nothing else). Never negative: the database CHECK is `on_hand >= 0`, so a correction that would go below zero is refused with 422 and no setting overrides it — `allow_negative_stock` is about available stock, not about this. available (`on_hand` − `reserved`) is DERIVED and never stored — POST /inventories/availability and GET /inventories/reorder-alerts compute it on read.
         */
        on_hand?: number;
        /**
         * The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
         */
        product_id?: string | null;
        /**
         * The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
         */
        reorder_point?: number | null;
        /**
         * How much of `on_hand` is already promised — the sum of the ACTIVE reservations at this row. Reserving raises it; releasing, expiring or committing lowers it. Never negative (CHECK `reserved >= 0`). It does NOT reduce `on_hand`: the goods are still in the building until the shipment is committed, which is why the sellable figure is the difference of the two and not either one alone. available (`on_hand` − `reserved`) is DERIVED and never stored — POST /inventories/availability and GET /inventories/reorder-alerts compute it on read.
         */
        reserved?: number;
        /**
         * The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
         */
        sku?: string | null;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * When this row was last written. Every balance change stamps it, so it doubles as "when did this item last move at this location".
         */
        updated_at?: string;
    }

    /**
     * Correct ONE stock row. The row already knows its location and its item, so a caller owes only the signed delta and a reason — which is exactly what an operator can be asked for in a dialog.
     */
    export type StockLevelAdjustRequest = {
        /**
         * The SIGNED correction to this row's `on_hand`: −3 writes off three, +3 finds three. A delta, not the new balance. Zero is refused (400). A correction that would take `on_hand` below zero is a 422 the database insists on; one that would take it below this row's own `reserved` is a 422 the `allow_negative_stock` setting can permit.
         */
        quantity: number;
        /**
         * Why this row is being corrected, written onto the ledger booking. Owed unless `movement_reason_required` is 'none'.
         */
        reason?: string | null;
    }

    /**
     * A stock row tracks an item: &#039;product_id&#039; or &#039;sku&#039;.
     */
    export type StockLevelCreateRequest = {
        /**
         * The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it. It has to exist already (GET /inventories/locations); an id no location carries is answered 400 by the foreign key, not 404.
         */
        location_id: string;
        /**
         * Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
         */
        metadata?: object | null;
        /**
         * The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
         */
        product_id?: string | null;
        /**
         * The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
         */
        reorder_point?: number | null;
        /**
         * The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
         */
        sku?: string | null;
    }

    /**
     * Partial update — omitted fields keep their current value.
     */
    export type StockLevelUpdateRequest = {
        /**
         * The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it. It has to exist already (GET /inventories/locations); an id no location carries is answered 400 by the foreign key, not 404.
         */
        location_id?: string;
        /**
         * Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
         */
        metadata?: object | null;
        /**
         * The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
         */
        product_id?: string | null;
        /**
         * The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
         */
        reorder_point?: number | null;
        /**
         * The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
         */
        sku?: string | null;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `stock_levels` — a typo, a filter another entity has, `?q=` — is DROPPED and cannot appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type StockLevelsFilter = {
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?location_id=` value this call was understood to carry.
         */
        location_id?: string;
        /**
         * The literal `?metadata=` value this call was understood to carry.
         */
        metadata?: string;
        /**
         * The literal `?on_hand=` value this call was understood to carry.
         */
        on_hand?: string;
        /**
         * The literal `?product_id=` value this call was understood to carry.
         */
        product_id?: string;
        /**
         * The literal `?reorder_point=` value this call was understood to carry.
         */
        reorder_point?: string;
        /**
         * The literal `?reserved=` value this call was understood to carry.
         */
        reserved?: string;
        /**
         * The literal `?sku=` value this call was understood to carry.
         */
        sku?: string;
        /**
         * The literal `?updated_at=` value this call was understood to carry.
         */
        updated_at?: string;
    }

    export type DefaultStockLevelsFilter = StockLevelsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type StockMovement = {
        /**
         * When the booking was written — the ledger's own clock and its natural order, which is why `?order=created_at.desc` is the feed order. There is no `updated_at`: the ledger is append-only, and a correction is another booking rather than an edit.
         */
        created_at?: string;
        /**
         * The row's own id, generated by the database. A caller never sends one — it reads one back and puts it in the path of every later call.
         */
        id?: string;
        /**
         * Where the booking happened. Copied from the call that caused it, not a foreign key — a movement outlives the location row it names.
         */
        location_id?: string;
        /**
         * Free-form, and two keys this app writes itself: `backordered` — on a `reserve` booking, how much of the hold was not covered by stock on hand; `shortfall` — on a `shipment` booking, how much was committed that was not physically there (`on_hand` floors at 0, so the difference is recorded here instead of vanishing). Neither key is present on a booking that needed neither.
         */
        metadata?: object | null;
        /**
         * The order this booking belongs to, for the bookings an order causes — 'reserve', 'release', 'shipment', and a 'restock' that names one. Null for a receipt or a stocktake. It is the join that reconstructs one order's whole stock history: GET /inventories/movements?order_ref=…
         */
        order_ref?: string | null;
        /**
         * The product this booking is for, copied from the call. Null when the item was identified by SKU.
         */
        product_id?: string | null;
        /**
         * The SIGNED size of the booking — a DELTA, never a balance, and deliberately the one quantity in this app with no bound on it. `stock_levels.on_hand`/`reserved` and `reservations.quantity` each carry a CHECK; this column carries none, because the SIGN is the direction of the booking and a rule that forbade one of them would forbid half the ledger. Positive adds to what the location holds ('inbound', 'restock', a positive 'adjustment'); negative takes it away ('shipment', a negative 'adjustment'). 'reserve' books the NEGATIVE of the quantity held (−5 for a hold of 5) while the reservation row itself carries +5: the movement says which way stock moved, the reservation says how much is being held. Summing this column for one (location, item) reconstructs `on_hand` — which is what makes the ledger an audit trail and not a log.
         */
        quantity?: number;
        /**
         * Why the booking happened, in a person's words — a delivery note number, 'stocktake 2026-03', 'damaged in transit'. Whether one is owed is the `movement_reason_required` setting ('none' | 'adjustments' | 'all'), never this column, which stays nullable so the tenant that requires nothing is not forced. The expiry sweeper writes 'reservation expired' on the releases it makes.
         */
        reason?: string | null;
        /**
         * The article number this booking is for, copied from the call. Null when the item was identified by product id.
         */
        sku?: string | null;
        /**
         * The tenant this row belongs to, as a slug. Set by the platform, never by a caller — it is the row-level security scope, not a field, and every row a request can reach is inside it already.
         */
        tenant_id?: string;
        /**
         * What the booking records. 'inbound' — a receipt (+on_hand). 'adjustment' — a manual correction, the only type whose sign can go either way. 'reserve' — a hold taken for an order (`reserved` up, `on_hand` untouched). 'release' — a hold given back, by cancellation or by the expiry sweeper. 'shipment' — a committed reservation leaving the building (`on_hand` and `reserved` both down). 'restock' — a return that rejoined sellable stock. GET /inventories/vocabularies/movement-types serves these with the words a person reads for them.
         */
        type?: StockMovementType;
    }

    /**
     * The exact-column filters this call was understood to carry, verbatim as they arrived. A query parameter that is not a column of `stock_movements` — a typo, a filter another entity has, `?q=` — is DROPPED and cannot appear here, and the list comes back unfiltered. This object is the only way to tell that apart from &quot;nothing matched&quot;.
     */
    export type StockMovementsFilter = {
        /**
         * The literal `?created_at=` value this call was understood to carry.
         */
        created_at?: string;
        /**
         * The literal `?id=` value this call was understood to carry.
         */
        id?: string;
        /**
         * The literal `?location_id=` value this call was understood to carry.
         */
        location_id?: string;
        /**
         * The literal `?metadata=` value this call was understood to carry.
         */
        metadata?: string;
        /**
         * The literal `?order_ref=` value this call was understood to carry.
         */
        order_ref?: string;
        /**
         * The literal `?product_id=` value this call was understood to carry.
         */
        product_id?: string;
        /**
         * The literal `?quantity=` value this call was understood to carry.
         */
        quantity?: string;
        /**
         * The literal `?reason=` value this call was understood to carry.
         */
        reason?: string;
        /**
         * The literal `?sku=` value this call was understood to carry.
         */
        sku?: string;
        /**
         * The literal `?type=` value this call was understood to carry.
         */
        type?: string;
    }

    export type DefaultStockMovementsFilter = StockMovementsFilter & {
        [key: string]: any;
        [__default]: true;
    };

    /**
     * 
     */
    export type StoreAssetRequest = {
        /**
         * 
         */
        alt_text?: string | null;
        /**
         * 
         */
        description?: string | null;
        /**
         * 
         */
        display_name?: string | null;
        /**
         * 
         */
        file: string;
        /**
         * 
         */
        folder_id?: string | null;
        /**
         * 
         */
        keep_archive?: boolean | null;
        /**
         * 
         */
        tags?: string[] | null;
        /**
         * Archives only: unpack the members after upload (see AssetController).
         */
        unpack?: boolean | null;
        /**
         * 
         */
        visibility?: StoreAssetRequestVisibility;
    }

    /**
     * 
     */
    export type Suppression = {
        /**
         * 
         */
        address: string | null;
        /**
         * 
         */
        address_hash: string;
        /**
         * 
         */
        channel: string;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        expires_at: string | null;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        note: string | null;
        /**
         * 
         */
        reason: string;
        /**
         * 
         */
        scope: string;
        /**
         * 
         */
        source: string | null;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
    }

    /**
     * 
     */
    export type SyncHistory = {
        /**
         * 
         */
        bytes_synced: number | null;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        duration_ms: number | null;
        /**
         * 
         */
        error: string | null;
        /**
         * 
         */
        id: number;
        /**
         * 
         */
        rule_id: string;
        /**
         * 
         */
        run_id: string;
        /**
         * 
         */
        source_path: string;
        /**
         * 
         */
        status: string;
        /**
         * 
         */
        target_asset_id: string | null;
        /**
         * 
         */
        tenant_id: string;
    }

    /**
     * 
     */
    export type SyncRuleResource = {
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        enabled: boolean;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        last_run_at: string | null;
        /**
         * 
         */
        options: any[];
        /**
         * 
         */
        schedule: string;
        /**
         * 
         */
        sftp_account_id: string;
        /**
         * 
         */
        source_path: string;
        /**
         * 
         */
        target_folder_id: string | null;
        /**
         * 
         */
        tenant_id: string;
    }

    /**
     * 
     */
    export type Template = {
        /**
         * 
         */
        body_html: string | null;
        /**
         * 
         */
        body_text: string | null;
        /**
         * 
         */
        channel: string;
        /**
         * 
         */
        content_sid: string | null;
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        design: any[] | null;
        /**
         * 
         */
        enabled: boolean;
        /**
         * 
         */
        has_unpublished_changes: string;
        /**
         * 
         */
        id: string;
        /**
         * 
         */
        is_published: string;
        /**
         * 
         */
        key: string;
        /**
         * 
         */
        layout_id: string | null;
        /**
         * 
         */
        lifecycle_state: string;
        /**
         * 
         */
        locale: string;
        /**
         * 
         */
        markets: any[];
        /**
         * 
         */
        message_class: string;
        /**
         * 
         */
        published_version_id: string | null;
        /**
         * 
         */
        source_library_key: string | null;
        /**
         * 
         */
        subject: string | null;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        test_mode: boolean;
        /**
         * 
         */
        title: string | null;
        /**
         * 
         */
        updated_at: string | null;
        /**
         * 
         */
        uses_raw_html: string;
        /**
         * 
         */
        valid_from: string | null;
        /**
         * 
         */
        valid_until: string | null;
        /**
         * 
         */
        variable_defaults: any[] | null;
        /**
         * 
         */
        variables: any[] | null;
        /**
         * 
         */
        whatsapp_category: string | null;
    }

    /**
     * 
     */
    export type TenantConfig = {
        /**
         * 
         */
        created_at: string | null;
        /**
         * 
         */
        default_locale: string | null;
        /**
         * 
         */
        defaults: any[] | null;
        /**
         * 
         */
        delivery_reporting: any[] | null;
        /**
         * 
         */
        locales: any[] | null;
        /**
         * 
         */
        product: string | null;
        /**
         * 
         */
        provisioned_at: string | null;
        /**
         * 
         */
        quiet_hours: any[] | null;
        /**
         * 
         */
        quotas: any[] | null;
        /**
         * 
         */
        retention_days: number | null;
        /**
         * 
         */
        support_email: string | null;
        /**
         * 
         */
        tenant_id: string;
        /**
         * 
         */
        updated_at: string | null;
    }

    /**
     * One locale somewhere in this tenant, its read and write keys, and the markets that asked for it.
     */
    export type TenantLocaleKeys = {
        /**
         * The locale this entry is about, as some market registered it.
         */
        code?: string;
        /**
         * Its language part, which is also the key under language granularity.
         */
        language?: string;
        /**
         * Codes of the markets that registered this locale, sorted — who a baseline translation written here is actually for. An editor that lists six inputs without saying who needs them invites translations nobody will ever read.
         */
        markets?: string[];
        /**
         * Keys to try in order until one holds text — the same resolved order the per-market answer gives, so a baseline value and a market value can never be keyed differently.
         */
        read?: string[];
        /**
         * A key inside a labels bag: a full locale ('de-DE') under regional granularity, a bare language ('de') under language granularity.
         */
        write?: string;
    }

    /**
     * How this tenant keys its translations, resolved rather than named: the key a client WRITES and the order it READS, per locale. Emitting the resolved answer is the point — a client handed only the setting names re-implements the policy and gets it subtly different, which is how a label editor came to ask for de-DE while the row held de.
     */
    export type TenantLocalePolicy = {
        /**
         * settings#locale_fallback — what a read tries after the exact key holds nothing.
         */
        fallback?: MarketLocaleFallback;
        /**
         * settings#locale_granularity — whether a value is keyed by the full locale ('regional') or by its language alone.
         */
        granularity?: MarketLocaleGranularity;
        /**
         * The UNION of every market's locales, each one appearing once — the full set of inputs a tenant-baseline editor has to offer. Empty when no market registers a locale at all.
         */
        locales?: TenantLocaleKeys[];
    }

    /**
     * 
     */
    export type UnauthenticatedResponse = {
        /**
         * 
         */
        message?: string;
    }

    /**
     * 
     */
    export type ValidationFailedResponse = {
        /**
         * 
         */
        errors?: string[];
        /**
         * 
         */
        status?: ValidationFailedResponseStatus;
    }

    /**
     * 
     */
    export type Vocabulary = {
        /**
         * This app's name — the part before the dot in the qualified id.
         */
        app?: string;
        /**
         * True when the values are the complete permitted set. For a CHECK-backed vocabulary the constraint guarantees it; for a table-backed one the app refuses a value outside the rows, and for `locales` outside the configured list — the same guarantee by three mechanisms.
         */
        closed?: boolean;
        /**
         * The tone an unlabelled value gets.
         */
        default_tone?: VocabularyDefaultTone;
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`. A curated label is a map; a value nobody labelled is humanized into a plain string.
         */
        description?: object | null;
        /**
         * The vocabulary this is.
         */
        name?: string;
        /**
         * 'schema' — a CHECK constraint owns the set. 'table' — the tenant's own rows do. 'defaults' — a table-backed set the tenant never wrote down, answered from the built-ins. 'tenant' — the merchant configured the values through a setting (locales).
         */
        source?: VocabularySource;
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`. A curated label is a map; a value nobody labelled is humanized into a plain string.
         */
        title?: object;
        /**
         * Every permitted value, in the order a select should offer them.
         */
        values?: object[];
    }

    /**
     * 
     */
    export type VocabularyIndex = {
        /**
         * This app's name — the part before the dot in the qualified id `customers.<name>`.
         */
        app?: string;
        /**
         * Every vocabulary this app publishes, without their values.
         */
        vocabularies?: object[];
    }

    /**
     * 
     */
    export type VocabularyRef = {
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * The name to pass to `GET /products/vocabularies/{name}`.
         */
        name?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
    }

    /**
     * 
     */
    export type VocabularyValue = {
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        description?: object | null;
        /**
         * A terminal state — nothing moves out of it. False or absent on a vocabulary that is not a lifecycle.
         */
        final?: boolean;
        /**
         * The value as it is STORED and as the CHECK admits it — what a filter or a write sends.
         */
        key?: string;
        /**
         * A plain string, or a locale map keyed by language tag ({ "en": …, "de": … }). Read the requested tag, fall back to `en`.
         */
        title?: object;
        /**
         * Which badge colour a UI should paint this value in.
         */
        tone?: VocabularyTone;
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
         * Bucket permissions. Each entry is a permission string: an action wrapping a role, e.g. `read("any")`, `update("user:abc")`, `delete("team:abc/owner")`. Actions are `read`, `create`, `update`, `delete` and the aggregate `write` (= create + update + delete); the role inside the quotes takes the form described under “Role strings” in this document's introduction.
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
         * Whether file-level security is enabled. When it is, each record's own `$permissions` are enforced on top of the container's.
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
     * Collection
     */
    export type Collection2 = {
        /**
         * Collection creation date in ISO 8601 format.
         */
        $createdAt: string;
        /**
         * Collection ID.
         */
        $id: string;
        /**
         * Collection permissions. Each entry is a permission string: an action wrapping a role, e.g. `read("any")`, `update("user:abc")`, `delete("team:abc/owner")`. Actions are `read`, `create`, `update`, `delete` and the aggregate `write` (= create + update + delete); the role inside the quotes takes the form described under “Role strings” in this document's introduction.
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
         * Whether document-level permissions are enabled. When it is, each record's own `$permissions` are enforced on top of the container's.
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
    export type CollectionList2 = {
        /**
         * List of collections.
         */
        collections: Collection2[];
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
         * Document permissions. Each entry is a permission string: an action wrapping a role, e.g. `read("any")`, `update("user:abc")`, `delete("team:abc/owner")`. Actions are `read`, `create`, `update`, `delete` and the aggregate `write` (= create + update + delete); the role inside the quotes takes the form described under “Role strings” in this document's introduction.
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
         * File permissions. Each entry is a permission string: an action wrapping a role, e.g. `read("any")`, `update("user:abc")`, `delete("team:abc/owner")`. Actions are `read`, `create`, `update`, `delete` and the aggregate `write` (= create + update + delete); the role inside the quotes takes the form described under “Role strings” in this document's introduction.
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
         * Name of the fallback file to serve instead of a 404 page. If null, the site runtime's built-in 404 page is served.
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
         * Current unix timestamp of the core service host.
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
         * Client code name. A short code such as `CH` for Chrome, derived from the request's User-Agent by the core service; the full code list is not part of this API.
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
         * Operating system code name. A short code such as `AND` for Android, derived from the request's User-Agent by the core service; the full code list is not part of this API.
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
    export type Message2 = {
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
        status: Message2Status;
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
        messages: Message2[];
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
         * Row permissions. Each entry is a permission string: an action wrapping a role, e.g. `read("any")`, `update("user:abc")`, `delete("team:abc/owner")`. Actions are `read`, `create`, `update`, `delete` and the aggregate `write` (= create + update + delete); the role inside the quotes takes the form described under “Role strings” in this document's introduction.
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
         * Client code name. A short code such as `CH` for Chrome, derived from the request's User-Agent by the core service; the full code list is not part of this API.
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
         * Operating system code name. A short code such as `AND` for Android, derived from the request's User-Agent by the core service; the full code list is not part of this API.
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
         * Name of the fallback file to serve instead of a 404 page. If null, the site runtime's built-in 404 page is served.
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
         * Table permissions. Each entry is a permission string: an action wrapping a role, e.g. `read("any")`, `update("user:abc")`, `delete("team:abc/owner")`. Actions are `read`, `create`, `update`, `delete` and the aggregate `write` (= create + update + delete); the role inside the quotes takes the form described under “Role strings” in this document's introduction.
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
         * Whether row-level permissions are enabled. When it is, each record's own `$permissions` are enforced on top of the container's.
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
        teams: Team[];
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
        users: User[];
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
