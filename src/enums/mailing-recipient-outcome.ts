export enum MailingRecipientOutcome {
    Queued = 'queued',
    Sent = 'sent',
    Ineligible = 'ineligible',
    Graymail = 'graymail',
    Suppressed = 'suppressed',
    Invalid = 'invalid',
    Excluded = 'excluded',
}