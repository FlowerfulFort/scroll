/* Component: TaskBlock
 * TaskBlock is a Block for viewing a Task
 * Props:
 *   taskname: name of task
 *   time: time of task
 *   locate: locate for acting task
 *   alarm: setting for ringing alarm */
import React from "react";
import bellimg from "../resource/bell.png";
import bellimg_false from "../resource/bell_false.png";
import Style from "./css/TaskBlock.css";
import PropTypes from "prop-types";

class TaskBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    SelectBellImg() {
        if (this.props.alarm) return bellimg;
        return bellimg_false;
    }
    render() {
        return (
            <div className="TaskBlock">
                <div className="TaskName">{this.props.taskname}</div>
                <div className="TaskBottom">
                    <img src={this.SelectBellImg()} />
                    <div>
                        <div>{this.props.time}</div>
                        <div>{this.props.locate}</div>
                    </div>
                </div>
            </div>
        );
    }
}

TaskBlock.propTypes = {
    taskname: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    locate: PropTypes.string,
    alarm: PropTypes.bool,
};
TaskBlock.defaultProps = {
    alarm: false,
};
export default TaskBlock;
