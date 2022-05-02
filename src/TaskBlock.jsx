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
import styled from "styled-components";
/*
const TaskBlock = styled.div`
    height: fit-content;
    border-top: black solid 3px;
    border-left: black solid 3px;
    border-right: black solid 3px;
    &:nth-last-child(1) {
        border-bottom: black solid 3px;
    }
`;
*/ /*
const CheckMark = styled.span`
    content: "\\2714";
`;*/
const CheckMark = ({ checked }) => {
    const styleAttr = {};
    if (checked) styleAttr["display"] = "inline-block";
    else styleAttr["display"] = "none";
    return <span style={styleAttr}>&#10004;</span>;
};
class TaskBlock extends React.Component {
    constructor(props) {
        super(props);
        this.passed = false; // 내가 만들었지만 의미불명.
    }
    SelectBellImg() {
        if (this.props.alarm) return bellimg;
        return bellimg_false;
    }
    checkTime(dateObj) {
        if (this.passed) return true;
        const hours = dateObj.getHours();
        const minute = dateObj.getMinutes();

        const tasktime = this.props.time.split(":");
        if (hours > tasktime[0]) {
            this.passed = true;
            return true;
        }
        if (hours === tasktime[0] && minute > tasktime[1]) {
            this.passed = true;
            return true;
        }
        return this.passed;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.passed) {
            // when this.passed === false
            return this.checkTime();
        }
        const now = nextProps.now;
        const hours = now.getHours();
        const minute = now.getMinutes();

        const tasktime = this.nextProps.time.split(":");
        if (hours > tasktime[0]) {
            this.passed = true;
            return true;
        }
        if (hours === tasktime[0] && minute > tasktime[1]) {
            this.passed = true;
            return true;
        }
    }
    /* TODO: timeover가 갖춰져야 할 시간을 탐지해야함.
             몇초 주기로 컴포넌트 업데이트를 확인해야하는 함수를 추가해야함. */
    render() {
        let attr = "TaskName timeover"; // 임시로
        if (this.passed) attr.concat("timeover");
        return (
            <div className="TaskBlock">
                <div className={attr}>
                    {this.props.taskname}
                    <CheckMark checked />
                </div>
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
CheckMark.propTypes = {
    checked: PropTypes.bool,
};
export default TaskBlock;
