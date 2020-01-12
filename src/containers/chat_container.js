import { connect } from 'react-redux';
import {addMessage} from "../actions/chat_actions";
import Chat from "../components/Chat/Chat";

const mapStateToProps = state => ({
    messages: state.messages,
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (message) => dispatch(addMessage(message)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
