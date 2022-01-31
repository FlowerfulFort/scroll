/* MainPage */
import React from "react";
import styled from "styled-components";
import HalfPage from "./HalfPage";
import ParseDay from "./ParseDay";
import DailyTasks from "./DailyTasks";

const MainFooter = styled.div`
    font-size: 20px;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 3px;
`;
export default class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.checkDay = this.checkDay.bind(this);
        this.referDateObj = new Date();
        this.state = {
            referDate: this.referDateObj.getDate(),
        };
        this.nextDate = this.state.referDate + 1;
        this.refresh = setInterval(this.checkDay, 5000);
        console.log(`Today is ${this.referDateObj}`);

        this.obj = window.load.loadData();
    }
    checkDay() {
        const now = new Date().getDate();
        const oldDate = this.state["referDate"];
        if (this.state["referDate"] !== now) {
            this.setState({ referDate: now }, () => {
                console.log(`Date changed ${oldDate} to ${now}`);
                this.nextDate = this.state["referDate"] + 1;
            });
        }
    }
    render() {
        console.log("MainPage Rendered");
        return (
            <React.Fragment>
                <HalfPage>
                    <MainFooter>Today's Task</MainFooter>
                    <MainFooter>Tomorrow's Task</MainFooter>
                </HalfPage>
                <HalfPage>
                    <DailyTasks obj={this.obj} />
                    <DailyTasks obj={this.obj} />
                </HalfPage>
            </React.Fragment>
        );
    }
}
