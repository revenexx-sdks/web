export enum SubmitCartResultOutcome {
    Direct = 'direct',
    Approval = 'approval',
    Prevent = 'prevent',
    Decided = 'decided',
    CurrencyMismatch = 'currency_mismatch',
    NoBudget = 'no_budget',
}