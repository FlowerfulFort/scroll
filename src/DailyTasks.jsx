/* Component: DailyTasks
 * DailyTasks is a Page for viewing daily tasks. */
import React from "react";
import TaskBlock from "./TaskBlock";
export default class DailyTasks extends React.Component {
    constructor(props) {
        super(props);
        // this.state.referDate = this.props.referDate;
    }
    render() {
        return (
            <div className="TasksPage">
                {this.props.obj["daily"].map((element) => {
                    return (
                        <TaskBlock
                            taskname={element["name"]}
                            time={element["time"]}
                            locate={element["locate"]}
                            alarm={element["alarm"]}
                        />
                    );
                })}
            </div>
        );
    }
}
