import React, {Component} from "react";

function Hello(props) {
    console.log(props);
    const {name, surname} = props;
    return <h1>Hello, {name} {surname}</h1>
}

class Hi extends Component {
    render() {
        const {name, surname} = this.props;
        return <h1>Hi, {name} {surname}</h1>
    }
}

function Task04() {
    return (
        <>
            <Hello name={"Mariusz"} surname={"Motyka"}/>
            <Hi name={"Mariusz"} surname={"Motyka"}/>
        </>
    )
}

export default Task04;