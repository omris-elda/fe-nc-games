import { useContext, useState, useEffect } from "react";
import { LoggedIn } from "../../contexts/loggedin";
import { GetUsers } from "../../queries/queries";

export default function Login() {
    const { loggedIn, setLoggedIn } = useContext(LoggedIn);
    const [errorMessage, setErrorMessage] = useState("");
    const [userList, setUserList] = useState([]);
    const [loginUsername, setLoginUsername] = useState("");
    
    useEffect(() => {
        GetUsers().then((response) => {
            return setUserList(response.users);
        });
    }, []);

    if (loggedIn !== "") {
      return <h2>You're already logged in, congratulations!</h2>;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let failed = true;

        userList.forEach((user) => {
            if (user.username === loginUsername) {
                setLoggedIn(loginUsername);
                failed = false;
            };
        })
        if (failed === true) {
            setErrorMessage("Sorry, we couldn't find your username. Please check the spelling.");
            setLoginUsername("");
        } else {
            // navigate("/profile")
            setErrorMessage(`Congrats, you've successfully logged in ${loggedIn}`)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">Username: </label>
            <input type="text" id="login" required placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}></input>
            <button id="login-button" className="buttons" type="submit">Login</button>
            <p className="errorMessage">{errorMessage}</p>
        </form>
    );
}