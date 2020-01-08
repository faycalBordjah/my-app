import React from "react";
import Emoji from "react-emoji-render"

const MessageItem = (props) => {
    return <p>You said:
        <span>
        <Emoji text={props.message}/>
        </span> </p>;
};

export default MessageItem;
