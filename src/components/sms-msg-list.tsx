"use client"

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { SmsMessageType, SmsMessagesResponseType } from "../types/index";

const SmsMsgList = () => {
    const sourceNumber = "";
    const [data, setData] = useState<SmsMessagesResponseType>();
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch('https://sms-code-sender.azurewebsites.net/api/smscoderequests')
            .then((res) => res.json())
            .then((data) => {
                let res: SmsMessagesResponseType = { limit: data.limit, offset: data.offset, totalCount: data.totalCount, items: [] };
                if (data.items) {
                    for (let i = 0; i < data.items.length; ++i) {
                        let m: SmsMessageType = {
                            _id: uuidv4(),
                            _fromMe: false,
                            smsMessageId: data.items[i].smsMessageId,
                            fromPhone: data.items[i].fromPhone,
                            toPhone: data.items[i].toPhone,
                            messageBody: data.items[i].messageBody,
                            messageSid: data.items[i].messageSid,
                            createdOn: data.items[i].createdOn
                        };
                        if (m.messageSid?.length == 0) {
                            m._fromMe = true;
                        }
                        res.items.push(m);
                    }
                    console.log(res);

                }
                setData(res);
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-slate-50 text-zinc-700 min-h-350">
            <div className="w-576 flex flex-col">
                {data?.items.map((item) => (
                    <div key={item._id} className="py-2 border-b border-zinc-300">
                        <div className="flex justify-between">
                            <div>
                                <span className="text-sm text-zinc-400 pr-1">from:</span><span>{item.fromPhone}</span>
                            </div>
                            <div>
                                <span className="text-sm text-zinc-400 pr-1">to:</span><span>{item.toPhone}</span>
                            </div>
                        </div>
                        <div className={`flex rounded-md shadow p-4 text-white ${item._fromMe ? "bg-blue-600" : "bg-lime-600"}`}>
                            {item.messageBody}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SmsMsgList
