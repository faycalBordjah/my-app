import React, {useState} from 'react';
import MessageBar from "./MessageBar";
import MessageList from "./MessageList";

const chatStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    width: 400,
    backgroundColor: "#A2DED0",
    padding: 10,
    display: "flex",
    flexDirection: "column"
};
const Chat = () => {
    return <div className='root-container' style={chatStyle}>
        <MessageList />
        <MessageBar />
    </div>
};

export default Chat;
