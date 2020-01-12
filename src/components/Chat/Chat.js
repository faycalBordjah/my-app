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
/*function Chat() {
    const greeting = "Hello world";
    const [messages, setMessages] = useState(
        ['']
    );

    const msgs = useSelector(state => state.chat.messages);

    const handleInputMessage = (msg) => {
        setMessages(messages.concat([msg]))
    };

    return <div style={chatStyle}> <h1>Chat</h1><br/>
    <MessageList messages={messages}/>
    <MessageBar handleInputMessage={handleInputMessage}/>
    </div>;
}*/

const Chat = () => {
    return <div className='root-container' style={chatStyle}>
        <MessageList />
        <MessageBar />
    </div>
};

export default Chat;
