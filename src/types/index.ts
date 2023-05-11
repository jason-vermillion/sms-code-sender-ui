
export type SmsMessageType = {
    _id: string,
    _fromMe: boolean,
    smsMessageId: number,
    toPhone?: string,
    fromPhone?: string,
    messageBody?: string,
    messageSid?: string,
    createdOn?: Date
};

export type SmsMessagesResponseType = {
    items: SmsMessageType[],
    totalCount: number,
    limit: number,
    offset: number
}
