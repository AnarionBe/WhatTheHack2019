import * as React from "react";
import axios from "axios";

export default function Register(props) {
    let pseudo = "",
        email = "",
        password = "",
        age = 0,
        location = "",
        languages = [];

    const handleChange = event => {
        if (event.target.name === "pseudo") {
            pseudo = event.target.value;
        }
        if (event.target.name === "email") {
            email = event.target.value;
        }
        if (event.target.name === "password") {
            password = event.target.value;
        }
        if (event.target.name === "age") {
            age = event.target.value;
        }
        if (event.target.name === "location") {
            location = event.target.value;
        }
        if (event.target.name === "languages") {
            languages = [...new Set(languages.push(event.target.value))];
        }
    };

    const createUser = event => {
        event.preventDefault();
        let newUser = {
            email: email,
            pseudo: pseudo,
            password: password,
            location: location,
            age: age,
            languages: languages,
        };

        axios
            .post(`http://localhost/api/users/`, newUser)
            .then(response => {
                console.log(response);
                props.setUser(newUser);
                props.setStatus("main");
                return;
            })
            .catch(error => {
                console.error(error);
                return;
            });
    };

    return (
        <main>
            <form>
                <input
                    type="text"
                    name="pseudo"
                    onChange={handleChange}
                    placeholder="Pseudo"
                />
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="New password"
                />
                <input
                    type="number"
                    step="1"
                    min="1"
                    max="150"
                    name="age"
                    onChange={handleChange}
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    placeholder="City"
                />
                <input
                    type="text"
                    name="languages"
                    onChange={handleChange}
                    placeholder="Languages"
                />
                <button onClick={createUser}>{"Edit"}</button>
            </form>
        </main>
    );
}
