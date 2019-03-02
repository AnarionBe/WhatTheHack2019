import * as React from "react";

export default function ChatRoom(props) {
    const [messages, setMessages] = React.useState([]);
    const [response, setResponse] = React.useState("");

    const displayMessages = messagesArray => {
        return messagesArray.forEach(item => {
            return <li>{item.body}</li>;
        });
    };

    const handleChange = event => {
        event.preventDefault();
        setResponse(event.target.value);
    };

    const sendResponse = () => {
        let newMessages = messages;

        newMessages.push({
            body: response,
            author: props.user.pseudo,
            date: Date.now(),
        });
        setMessages(newMessages);
    };

    return (
        <div className="main">
            <h1>{props.room.name}</h1>
            <ol>{displayMessages(messages)}</ol>
            <form>
                <input
                    name="responseField"
                    type="text"
                    placeholder="Message"
                    onChange={handleChange}
                />
                <button onClick={sendResponse}>{"Send"}</button>
            </form>
        </div>
    );
}
