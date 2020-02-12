import React, {useState} from 'react';

const Login = (props) => {
    const [user, setUser] = useState("")
    console.log(user);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     .post('', user)
    //         .then((res) => {
                
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    return (
        <div>
            <form>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}></input>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}></input>
                    <button>Login</button>
            </form>
        </div>
    )
}

export default Login;