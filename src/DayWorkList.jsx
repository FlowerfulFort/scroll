import React from "react";
class DayWorkList extends React.Component {
    constructor(props) {
        super(props);
        this.daily = window.load.loadData()["daily"];
        console.log(this.daily);
    }
    render() {
        return (
            <>
                <h3>DayWorkList</h3>
                {this.daily.map((element) => (
                    <>
                        <div>{element.name}</div>
                        <div>{element.time}</div>
                    </>
                ))}
            </>
        );
    }
}

export default DayWorkList;
