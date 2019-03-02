import * as React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";

export default function App() {
    const [status, setStatus] = React.useState("login");
    const [user, setUser] = React.useState({});

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
