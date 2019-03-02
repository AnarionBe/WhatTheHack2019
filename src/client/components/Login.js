import * as React from "react";
import axios from "axios";

export default function Login(props) {
    let email = "",
        password = "";

    const handleChange = event => {
        if (event.target.name === "email") {
            email = event.target.value;
        }
        if (event.target.name === "password") {
            password = event.target.value;
        }
    };

    const login = event => {
        event.preventDefault();

        axios
            .post("http://localhost/api/login", {
                email: email,
                password: password,
            })
            .then(response => {
                props.setUser(response);
                props.setStatus("main");
                return;
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    };

    const register = event => {
        event.preventDefault();

        props.setStatus("register");
        return;
    };

    return (
        <main>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button onClick={login}>{"Login"}</button>
            </form>
            <a href="" onClick={register}>
                {"Sign up"}
            </a>
        </main>
    );
}
