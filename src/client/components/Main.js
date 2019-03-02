import * as React from "react";
import * as DateTimePicker from "react-datetime";

export default function Main(props) {
    const [searchLocality, setSearchLocality] = React.useState(
        props.user.locality,
    );
    const [searchCriteria, setSearchCriteria] = React.useState([]);
    const [searchDate, setSearchDate] = React.useState(new Date());

    let yesterday = Datetime.moment().subtract(1, "day"),
        valid = current => current.isAfter(yesterday);

    const handleChange = event => {
        event.preventDefault();

        if (event.target.name === "searchLocality") {
            setSearchLocality(event.target.value);
        }
        if (event.target.name === "searchCriteriaDrink") {
            setSearchCriteria([...new Set(searchCriteria.push("drink"))]);
        }
        if (event.target.name === "searchCriteriaParty") {
            setSearchCriteria([...new Set(searchCriteria.push("party"))]);
        }
        if (event.target.name === "searchCriteriaOther") {
            setSearchCriteria([...new Set(searchCriteria.push("other"))]);
        }

        console.log(searchCriteria);
    };

    const updateDate = date => {
        setSearchDate({date});
    };

    const matchWithRandoms = () => {
        axios
            .get("http://localhost/api/matches", {
                locality: searchLocality,
                date: searchDate,
                criterias: searchCriteria,
                email: props.user.email,
            })
            .then(response => {
                console.log(response);
                // display chatroom
                props.setState("chat");
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    };

    return (
        <div className="main">
            <input
                type="text"
                name="searchLocality"
                value={searchLocality}
                onChange={handleChange}
            />
            <DateTimePicker
                isValidDate={valid}
                onChange={updateDate}
                value={searchDate}
            />
            <p>
                <label htmlFor="searchCriteriaParty">{"Let's Party"}</label>
                <input
                    type="checkbox"
                    name="searchCriteriaParty"
                    onChange={handleChange}
                />
            </p>
            <p>
                <label htmlFor="searchCriteriaDrink">
                    {"Let's Have a Drink"}
                </label>
                <input
                    type="checkbox"
                    name="searchCriteriaDrink"
                    onChange={handleChange}
                />
            </p>
            <p>
                <label htmlFor="searchCriteriaOther">
                    {"Let's Do Something"}
                </label>
                <input
                    type="checkbox"
                    name="searchCriteriaOther"
                    onChange={handleChange}
                />
            </p>
            <button onClick={() => matchWithRandoms()}>{"Go!"}</button>
        </div>
    );
}
