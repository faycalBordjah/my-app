import React, {useState} from 'react';
import MessageBar from "./MessageBar";
import MessageList from "./MessageList";
import Test from "./test";

const chatStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    width: 400,
    backgroundColor: "#A2DED0",
    padding: 10,
    display: "flex",
    flexDirection: "column"
};

function Chat() {
    const greeting = "Hello world";
    const [messages, setMessages] = useState(
        ['']
    );

    const handleInputMessage = (msg) => {
        setMessages(messages.concat([msg]))
    };

    return <div style={chatStyle}> <h1>Chat</h1><br/>
    <MessageList messages={messages}/>
    <MessageBar handleInputMessage={handleInputMessage}/>
    <Test msg={greeting}/>
    </div>;
}

export default Chat;
