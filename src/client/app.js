import * as React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import ChatRoom from "./components/ChatRoom";
import ChatList from "./components/ChatList";
import Settings from "./components/Settings";
import Register from "./components/Register";
import Menu from "./components/Menu";

export default function App() {
    const [status, setStatus] = React.useState("login");
    const [user, setUser] = React.useState({});
    const [people, setPeople] = React.useState([]);

    if (props.status === "main") {
        return (
            <div>
                <Menu user={user} status={status} />
                <Main
                    people={people}
                    setPeople={setPeople}
                    setUser={setUser}
                    setStatus={setStatus}
                    status={status}
                    user={user}
                />
            </div>
        );
    } else if (status === "chat") {
        return (
            <div>
                <Menu user={user} status={status} />
                <ChatRoom
                    room={room}
                    messages={messages}
                    people={people}
                    user={user}
                />
            </div>
        );
    } else if (status === "chatlist") {
        return (
            <div>
                <Menu user={user} status={status} />
                <ChatList
                    setStatus={setStatus}
                    status={status}
                    rooms={rooms}
                    user={user}
                />
            </div>
        );
    } else if (status === "settings") {
        return (
            <div>
                <Menu user={user} status={status} />
                <Settings setStatus={setStatus} status={status} user={user} />
            </div>
        );
    } else if (status === "register") {
        return (
            <div>
                <Menu user={user} status={status} />
                <Register
                    setStatus={setStatus}
                    status={status}
                    user={user}
                    setUser={setUser}
                />
            </div>
        );
    }
    return (
        <Login
            setUser={setUser}
            setStatus={setStatus}
            status={status}
            user={user}
        />
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
