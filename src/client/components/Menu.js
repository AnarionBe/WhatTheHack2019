import * as React from "react";

export default function Menu(props) {
    const logout = () => {
        props.setState("login");
        return;
    };

    const chatrooms = () => {
        props.setState("chatlist");
        return;
    };

    const settings = () => {
        props.setState("settings");
        return;
    };

    return (
        <nav>
            <a href="" onClick={settings}>
                {"Settings"}
            </a>
            <a href="" onClick={chatrooms}>
                {"Chatrooms"}
            </a>
            <a href="" onClick={logout}>
                {"Logout"}
            </a>
        </nav>
    );
}
