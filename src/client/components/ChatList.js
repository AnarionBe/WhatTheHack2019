import * as React from "react";

export default function ChatList(props) {
    const displayRooms = roomsArray => {
        return roomsArray.forEach(item => {
            return <li>{item.name}</li>;
        });
    };

    return (
        <main>
            <ol>{displayRooms(props.rooms)}</ol>
        </main>
    );
}
