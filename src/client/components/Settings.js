import * as React from "react";
import axios from "axios";

export default function Settings(props) {
    let pseudo = "",
        email = "",
        password = "",
        age = 0,
        location = "",
        languages = "";

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
            languages = [...new Set(props.user.laguages)];
        }
    };

    const editUser = event => {
        event.preventDefault();
        if (!password || password === "") {
            password = props.user.password;
        }
        let currentUser = {
            pseudo: pseudo,
            email: email,
            password: password,
            location: location,
            age: age,
            languages: languages,
        };

        axios
            .put(`http://localhost/api/users/${props.user.id}`, currentUser)
            .then(response => {
                console.log(response);
                props.setUser(currentUser);
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
                    value={props.user.pseudo}
                    onChange={handleChange}
                    placeholder="Pseudo"
                />
                <input
                    type="email"
                    value={props.user.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value=""
                    name="password"
                    onChange={handleChange}
                    placeholder="New password"
                />
                <input
                    type="number"
                    step="1"
                    min="1"
                    max="150"
                    value={props.user.age}
                    name="age"
                    onChange={handleChange}
                    placeholder="Age"
                />
                <input
                    type="text"
                    value={props.user.location}
                    name="location"
                    onChange={handleChange}
                    placeholder="City"
                />
                <input
                    type="text"
                    name="languages"
                    values={props.user.laguages.join()}
                    onChange={handleChange}
                    placeholder="Languages"
                />
                <button onClick={editUser}>{"Edit"}</button>
            </form>
        </main>
    );
}
