var ExposedFn;
(function (ExposedFn) {
    ExposedFn["OnMessage"] = "onMessage";
    ExposedFn["OnAck"] = "onAck";
    ExposedFn["OnParticipantsChanged"] = "onParticipantsChanged";
})(ExposedFn || (ExposedFn = {}));
/**
 * Exposes [OnMessage] function
 */
WAPI.waitNewMessages(false, function (data) {
    data.forEach(function (message) {
        window[ExposedFn.OnMessage](message);
    });
});
WAPI.waitNewAcknowledgements(function (data) {
    function ack(data) {
        switch (data) {
            case -7:
                return 'MD_DOWNGRADE';
            case -6:
                return 'INACTIVE';
            case -5:
                return 'CONTENT_UNUPLOADABLE';
            case -4:
                return 'CONTENT_TOO_BIG';
            case -3:
                return 'CONTENT_GONE';
            case -2:
                return 'EXPIRED';
            case -1:
                return 'FAILED';
            case 0:
                return 'CLOCK';
            case 1:
                return 'SENT';
            case 2:
                return 'RECEIVED';
            case 3:
                return 'READ';
            case 4:
                return 'PLAYED';
        }
    }
    var message = {
        id: data.id,
        body: data.body,
        type: data.type,
        t: data.t,
        subtype: data.subtype,
        notifyName: data.notifyName,
        from: data.from,
        to: data.to,
        self: data.self,
        ack: ack(data.ack),
        invis: data.invis,
        isNewMsg: data.isNewMsg,
        star: data.star,
        loc: data.loc,
        lat: data.lat,
        lng: data.lng,
        mentionedJidList: data.mentionedJidList,
        isForwarded: data.isForwarded,
        labels: data.labels,
        ephemeralStartTimestamp: data.ephemeralStartTimestamp,
    };
    if (window[ExposedFn.OnAck]) {
        window[ExposedFn.OnAck](message);
    }
});
