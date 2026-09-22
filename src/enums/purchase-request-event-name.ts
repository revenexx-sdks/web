export enum PurchaseRequestEventName {
    PurchaseRequestRequested = 'purchase_request.requested',
    PurchaseRequestApproved = 'purchase_request.approved',
    PurchaseRequestDeclined = 'purchase_request.declined',
    PurchaseRequestCancelled = 'purchase_request.cancelled',
    PurchaseRequestOrdered = 'purchase_request.ordered',
    PurchaseRequestNotification = 'purchase_request.notification',
    BudgetWithdrawn = 'budget.withdrawn',
    BudgetConfirmed = 'budget.confirmed',
}