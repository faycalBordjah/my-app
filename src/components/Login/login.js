import React, {useState} from 'react';
import { withRouter } from 'react-router';

const Login = () =>
{
    const [user , setUser ] = useState(
            []
    );
    const handleChange = (event) => {
    setUser(event.target.value);
};
    const login = (props) =>  {
    props.loginUser(user);
    //props.router.push('/chat');
};
    return (
        <div className='login-page'>
            <input  type='text' id='user'  onChange={handleChange} placeholder='Type your name' value={user}/>
            <button className='login-button' onClick={login}>Login</button>
        </div>
    );
};
export default Login;

