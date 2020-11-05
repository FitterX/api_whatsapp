declare module WAPI {
    const waitNewMessages: (rmCallback: boolean, callback: Function) => void;
    const waitNewAcknowledgements: (callback: Function) => void;
}
declare enum ExposedFn {
    OnMessage = "onMessage",
    OnAck = "onAck",
    OnParticipantsChanged = "onParticipantsChanged"
}
