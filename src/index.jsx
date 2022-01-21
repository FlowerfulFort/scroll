import React from "react";
import ReactDOM from "react-dom";
import DayWorkList from "./DayWorkList";
import TaskBlock from "./TaskBlock";
function App() {
    let daily = window.load.loadData()["daily"][0];

    return <TaskBlock taskname={daily["name"]} time={daily["time"]} locate={daily["locate"]} />;
}
ReactDOM.render(<App />, document.querySelector("#root"));
