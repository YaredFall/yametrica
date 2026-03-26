export const MetricaMethods = {
    Init: "init",
    AddFileExtension: "addFileExtension",
    ExtLink: "extLink",
    File: "file",
    FirstPartyParams: "firstPartyParams",
    FirstPartyParamsHashed: "firstPartyParamsHashed",
    GetClientID: "getClientID",
    Hit: "hit",
    NotBounce: "notBounce",
    Params: "params",
    ReachGoal: "reachGoal",
    SetUserID: "setUserID",
    UserParams: "userParams",
} as const;

export type MetricaMethods = (typeof MetricaMethods)[keyof typeof MetricaMethods];
