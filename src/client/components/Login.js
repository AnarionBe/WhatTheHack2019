import * as React from "react";
import axios from "axios";
import Main from "./Main";

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
                props.setUser(response.user);
                props.setStatus("main");
                return;
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    };

    if (props.status === "main") {
        return (
            <Main
                setUser={setUser}
                setStatus={setStatus}
                status={status}
                user={user}
            />
        );
    }
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
        </main>
    );
}
