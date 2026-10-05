export enum DirectOrderStatus {
    Placing = 'placing',
    CommitPending = 'commit_pending',
    CommitRefused = 'commit_refused',
    Committed = 'committed',
    Settled = 'settled',
    Abandoned = 'abandoned',
}