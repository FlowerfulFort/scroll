import React from "react";
import ReactDOM from "react-dom";
import DayWorkList from "./DayWorkList";
import TaskBlock from "./TaskBlock";
function App() {
    let dailylist = window.load.loadData()["daily"];

    return dailylist.map((daily) => {
        return <TaskBlock taskname={daily["name"]} time={daily["time"]} locate={daily["locate"]} alarm={daily["alarm"]} />;
    });
}
ReactDOM.render(<App />, document.querySelector("#root"));
