import React from "react";
import MessageItem from "./MessageItem";


const MessageList = ({messages}) => {
    return <div>
            <li>
                {messages.map((msg, i) => <MessageItem message={msg} key={i}/>)}
            </li>
    </div>
};


export default MessageList;
