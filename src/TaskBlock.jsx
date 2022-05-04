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
/* 고려해야 할 사항
   this.passed 를 state로써 관리해야하나? 
   상위 컴포넌트에서 시간 오브젝트를 받아야 하나 아니면 이 컴포넌트 자체적으로 시간을 측정해야하나. 
   성능이슈가 있을까? */
class TaskBlock extends React.Component {
    constructor(props) {
        super(props);
        this.passed = false; // 내가 만들었지만 의미불명. 아마 시간이 지나갔는지 나타나는 것일듯.
    }
    SelectBellImg() {       // taskblock의 alarm property에 맞춰 알람 이미지를 설정.
        if (this.props.alarm) return bellimg;
        return bellimg_false;
    }
    checkTime(dateObj) {    // 의미불명 재해석해야함.
        if (this.passed) return true;       // 일이 이미 지나갔으면 시간체크를 할 필요가 없다.

        // when this.passed === false
        const hours = dateObj.getHours();
        const minute = dateObj.getMinutes();

        const tasktime = this.props.time.split(":");
        if (hours > tasktime[0]) {  // 시간 비교.
            this.passed = true;     // 만약 현재 시간이 task의 시간을 넘어섰다면,
            return true;            // passed=true, 이 task는 지나갔음.
        }
        if (hours === tasktime[0] && minute > tasktime[1]) {
            this.passed = true;     // 시간은 같아도 분단위로 비교를 함.
            return true;            // 이 역시 지나감.
        }
        return this.passed;         // true가 리턴되지 않았다면 false이다.
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.passed) {
            // when this.passed === false
            // 시간이 지나갔는지 검사함. 만약 지나가지 않았다면 취소선 그을 이유도 없고 날이 바뀐것도 아님. */
            return this.checkTime(new Date());  // 현재 시간을 넘김.
        }
        /* 이미 now property로 passed를 구현했었다. now를 안넘길 뿐
           그럼 checkTime()은 필요없어진건가. */
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
        console.log(`TaskName: "${this.props.taskname}" is rendering..`);
        let attr = "TaskName "; // class Attribute
        if (this.passed) attr.concat("timeover");
        return (
            <div className="TaskBlock">
                <div className={attr}>
                    {this.props.taskname}
                    <CheckMark checked={this.passed} />
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
