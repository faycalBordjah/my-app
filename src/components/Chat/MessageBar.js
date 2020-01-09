import React, {useState} from 'react';
import styled from "styled-components";

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const MessageBar = (props) => {

    const [input, setInput] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (input) {
            props.handleInputMessage(input);
        }
        setInput('');
    };

    const handleMessage = e => {
        setInput(e.target.value)
    };

    return <form onSubmit={handleSubmit}>
        <h1>Hello</h1>
        <p>Enter your message:</p>
        <input
            type="text"
            onChange={handleMessage}
            value={input}
        />
        <Button type="submit" value="Send">
            Send
        </Button>
    </form>
};


export default MessageBar;
