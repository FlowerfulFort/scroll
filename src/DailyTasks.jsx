/* Component: DailyTasks
 * DailyTasks is a Page for viewing daily tasks. */
import React from "react";
import TaskBlock from "./TaskBlock";
import PropTypes from "prop-types";
import ParseDay from "./ParseDay";
import MergeDailyWeekly from "./MergeDailyWeekly";

class DailyTasks extends React.PureComponent {
    constructor(props) {
        super(props);
        this.dailylist = this.props.obj["daily"];
        this.weeklylist = this.props.obj;

        this.referObj = new Date().setDate(this.props.referDate);
        const today = ParseDay(this.referObj);
    }
    render() {
        console.log("DailyTasks Rendered");
        return (
            <div className="TasksPage">
                {MergeDailyWeekly(this.dailylist, this.weeklylist).map((element) => {
                    return (
                        <TaskBlock
                            taskname={element["name"]}
                            time={element["time"]}
                            locate={element["locate"]}
                            alarm={element["alarm"]}
                            key={element["name"].concat("@", element["time"])}
                        />
                    );
                })}
            </div>
        );
        /*
        return (
            <div className="TasksPage">
                {this.props.obj["daily"].map((element) => {
                    return (
                        <TaskBlock
                            taskname={element["name"]}
                            time={element["time"]}
                            locate={element["locate"]}
                            alarm={element["alarm"]}
                            key={element["name"].concat("@", element["time"])}
                        />
                    );
                })}
            </div>
        );
        */
    }
}
DailyTasks.propTypes = {
    referDate: PropTypes.number,
    obj: PropTypes.object.isRequired,
};
DailyTasks.defaultProps = {
    referDate: new Date().getDate(),
};

export default DailyTasks;
