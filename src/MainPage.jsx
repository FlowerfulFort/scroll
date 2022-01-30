/* MainPage */
import React from "react";
import ParseDay from "./ParseDay";

export default class MainPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.checkDay = this.checkDay.bind(this);
        this.referDateObj = new Date();
        this.state.referDate = this.referDateObj.getDate();
        this.nextDate = this.state.referDate + 1;
        this.refresh = setInterval(this.checkDay, 5000);
    }
    checkDay() {
        const now = new Date().getDate();
        if (this.state.referDate !== now) {
            this.setState({ referDate: now }, () => {
                console.log("Date changed.");
            });
        }
    }
    render() {}
}
