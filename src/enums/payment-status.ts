export enum PaymentStatus {
    Created = 'created',
    RequiresAction = 'requires_action',
    Authorized = 'authorized',
    Captured = 'captured',
    Failed = 'failed',
    Cancelled = 'cancelled',
    Refunded = 'refunded',
}