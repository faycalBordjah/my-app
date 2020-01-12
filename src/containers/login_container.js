import { connect } from 'react-redux';
import Login from '../components/Login/login';
import {currentUser} from "../actions/user_actions";


const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(currentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
