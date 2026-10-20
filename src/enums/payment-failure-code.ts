export enum PaymentFailureCode {
    ProviderUnavailable = 'provider_unavailable',
    ProviderUnreachable = 'provider_unreachable',
    ProviderNotConfigured = 'provider_not_configured',
    ProviderDeclined = 'provider_declined',
    PaymentMethodNotSupported = 'payment_method_not_supported',
    ProviderError = 'provider_error',
}