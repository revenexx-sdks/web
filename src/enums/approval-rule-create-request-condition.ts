export enum ApprovalRuleCreateRequestCondition {
    Always = 'always',
    ConstantLimit = 'constantLimit',
    AvailableBudget = 'availableBudget',
    PersonalLimit = 'personalLimit',
    ContactHasRole = 'contactHasRole',
    ContactMissingPermission = 'contactMissingPermission',
}