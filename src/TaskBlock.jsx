import React from "react";
import bellimg from "../resource/bell.png";
import bellimg_false from "../resource/bell_false.png";
import Style from "./css/TaskBlock.css";
export default class TaskBlock extends React.Component {
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
