import React, {Component} from "react";

class CurrentConverter extends Component {

    render() {
        const {from, to, value, rate} = this.props;
        return (
            <div>
                <strong>{value}</strong> {from} => <strong>{(value * rate).toFixed(2)}</strong> {to}
            </div>
        )
    }
}

function Task08() {
    return (
        <>
            <CurrentConverter from='EUR' to="USD" value={200} rate={1.12275}/>
            <CurrentConverter from='USD' to="PLN" value={430} rate={3.78}/>
        </>
    )
}

export default Task08;