import * as React from "react";
import ReactDOM from "react-dom";
import Activity from "./components/Activity";

export default function ActivitiesList( props ) {
    const activities = props.activitiesList.forEach( activity => {
        return ( <li>
            <Activity
                activity={activity}
            />
        <li> );
    } );

    return ( <ul>{events}</ul> );
}
