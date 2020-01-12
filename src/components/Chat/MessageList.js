import React from "react";
import MessageItem from "./MessageItem";


const MessageList = ({messages}) => {
    return <div className='messages-container'>
            <li><MessageItem messages={messages.map(msg => messages.concat(msg))}/>
            </li>
    </div>
};


export default MessageList;
