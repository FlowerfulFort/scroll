/* Component: DailyTasks
 * DailyTasks is a Page for viewing daily tasks.
 * Props:
 *   obj: data.yml object
 *   referDate: reference about date to create TaskBlock
 *   key: attribute for react management system
 *   today: a flag to know this component viewing today's tasks
 * Component hierarchy
 * MainPage > HalfPage > DailyTasks */
import React from "react";
import TaskBlock from "./TaskBlock";
import PropTypes from "prop-types";
import ParseDay from "./ParseDay";
import MergeDailyWeekly from "./MergeDailyWeekly";
/* TODO: today 특성이 있다면(DailyTasks가 두개이니), 시간을 계속 체크하는 비동기 구문을 짜서
   setState() 로 render()를 유도하여 TasksBlock에 now attribute를 수정해준다. */
class DailyTasks extends React.PureComponent {
    constructor(props) {
        super(props);
        if(this.props.today) {
            this.iteration = setInterval(() => {
                this.clock = new Date();
            }, 5000);
        }
        /*
        this.dailylist = this.props.obj["daily"];

        this.referObj = new Date().setDate(this.props.referDate);
        const today = ParseDay(this.referObj);
        const weekly = this.props.obj["weekly"].filter((e) => e["day"] === today);
        */
        /*
        this.props.obj["weekly"].forEach((element) => {
            if (element["day"] === today) weekly.push(element);
        });
        */
    }
    clocking() {
        /* TODOs */
        const nowtime = new Date();
    }
    render() {
        const dailylist = this.props.obj["daily"];

        /* MainPage로 부터 referDate를 받아 해당 날짜의 Date Object를 생성. */
        const referObj = new Date().setDate(this.props.referDate);
        const today = ParseDay(referObj);   // 요일 파싱
        /* weekly task 중 today에 해당하는 task만 필터링함. */
        const weeklylist = this.props.obj["weekly"].filter((e) => e["day"] === today);
        console.log("DailyTasks Rendered");
        return (
            <div className="TasksPage">
                {MergeDailyWeekly(dailylist, weeklylist).map((element) => {
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
    today: PropTypes.bool,
};
DailyTasks.defaultProps = {
    referDate: new Date().getDate(),
    today: false,
};

export default DailyTasks;
