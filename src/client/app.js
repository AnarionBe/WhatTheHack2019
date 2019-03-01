import * as React from "react";
import ReactDOM from "react-dom";
import ActivitiesList from "./components/ActivitiesList";

export default function App() {
    const rng = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [status, setStatus] = React.useState("lonely");

    const [user, setUser] = React.useState({
        pseudo: "WhatTheHack",
        age: "28",
        email: "whatthehack@hackathon.com",
        locality: "Liège",
        languages: ["FR", "EN", "DE", "NL"],
    });

    const [friendsList, setFriendsList] = React.useState([
        {
            pseudo: "Anarion",
            age: "23",
            email: "marcodb.debona@gmail.com",
            locality: "Liège",
            languages: ["FR", "EN", "DE"],
        },
        {
            pseudo: "Stephane Wiertz",
            age: "27",
            email: "stwiertz@gmail.com",
            locality: "Liège",
            languages: ["FR", "EN", "DE"],
        },
        {
            pseudo: "Lyanor",
            age: "26",
            email: "tanguy.scholtes@gmail.com",
            locality: "Liège",
            languages: ["FR", "EN"],
        },
        {
            pseudo: "Olivier Keutgens",
            age: "23",
            email: "keutgensolivier@gmail.com",
            locality: "Liège",
            languages: ["FR", "EN"],
        },
        {
            pseudo: "Jordan De Re",
            age: "24",
            email: "dere.jordan@gmail.com",
            locality: "Liège",
            languages: ["FR", "EN"],
        },
        {
            pseudo: "Leny",
            age: "33",
            email: "leny@becode.com",
            locality: "Liège",
            languages: ["FR", "EN"],
        },
    ]);

    const [activitiesList, setActivitiesList] = React.useState([
        {
            id: (Math.random() + Math.random()) * Date.now(),
            title: "Galaxy Arcade",
            description: "Old school arcade room located in Liège",
            locality: "Liège",
            validity: 1551474159890,
        },
        {
            id: (Math.random() + Math.random()) * Date.now(),
            title: "SuperStar Bowling",
            description: "Bowl in the 80's mood at SuperStar Bowling",
            locality: "Liège",
            validity: 1551474159890,
        },
        {
            id: (Math.random() + Math.random()) * Date.now(),
            title: "Warzone",
            description: "Gaming bar & fast-food",
            locality: "Liège",
            validity: 1551474159890,
        },
        {
            id: (Math.random() + Math.random()) * Date.now(),
            title: "Disneyland Liège",
            description: "Like the Paris one, but with beer",
            locality: "Liège",
            validity: 1551474159890,
        },
        {
            id: (Math.random() + Math.random()) * Date.now(),
            title: "Old Marcel's Fisherboat",
            description:
                "Want to tickle da fishies ? Yaaa'r all welcome aboard !",
            locality: "Liège",
            validity: 1551474159890,
        },
        {
            id: (Math.random() + Math.random()) * Date.now(),
            title: "KeyForge Liège Classics",
            description:
                "A KeyForge Call of the Archons open tournament every friday. Get prizes!",
            locality: "Liège",
            validity: 1551474159890,
        },
    ]);

    let randomFriends = [];

    const matchWithRandoms = () => {};

    if (status === "lonely") {
        return (
            <div className="main">
                <button onClick={() => matchWithRandoms()}>
                    Find me some friends!
                </button>
            </div>
        );
    }
    return (
        <div className="main">
            <FriendlyView activities={activities} friends={friends} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
