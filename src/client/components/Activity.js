import * as React from "react";
import ReactDOM from "react-dom";

export default function Activity( props ) {

    return ( <div>
        <p>{props.activity.title}</p>
        <p>{props.activity.locality}</p>
        <p>{props.activity.date}</p>
        <p>{props.activity.description}</p>
    </div> );
}
