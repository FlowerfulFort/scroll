/* Component: DailyTasks
 * DailyTasks is a Page for viewing daily tasks.
 * 알려진 버그:
 * - 날짜가 바뀌어 props가 바뀌면 render()가 실행되긴 하지만
 *   this.daily(weekly)list가 바뀌지 않아 화면은 그대로이다.
 */
import React from "react";
import TaskBlock from "./TaskBlock";
import PropTypes from "prop-types";
import ParseDay from "./ParseDay";
import MergeDailyWeekly from "./MergeDailyWeekly";

class DailyTasks extends React.PureComponent {
    constructor(props) {
        super(props);
        this.dailylist = this.props.obj["daily"];

        this.referObj = new Date().setDate(this.props.referDate);
        const today = ParseDay(this.referObj);
        const weekly = this.props.obj["weekly"].filter((e) => e["day"] === today);
        /*
        this.props.obj["weekly"].forEach((element) => {
            if (element["day"] === today) weekly.push(element);
        });
        */
        this.weeklylist = weekly;
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
