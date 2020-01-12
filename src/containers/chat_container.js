import { connect } from 'react-redux';
import {addMessage} from "../actions/chat_actions";
import Chat from "../components/Chat/Chat";

const stateToProps = state => ({
    messages: state.messages,
    user: state.user,
});

const dispatchToProps = dispatch => {
    return {
        addMessage: (message) => dispatch(addMessage(message)),
    };
};

export default connect(
    stateToProps,
    dispatchToProps
)(Chat);
