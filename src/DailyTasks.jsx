/* Component: DailyTasks
 * DailyTasks is a Page for viewing daily tasks. */
import React from "react";
import TaskBlock from "./TaskBlock";
import PropTypes from "prop-types";

class DailyTasks extends React.PureComponent {
    constructor(props) {
        super(props);
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
                            key={element["name"].concat("@", element["time"])}
                        />
                    );
                })}
            </div>
        );
    }
}
DailyTasks.propTypes = {
    referDate: PropTypes.number,
};
DailyTasks.defaultProps = {
    referDate: new Date().getDate(),
};

export default DailyTasks;
