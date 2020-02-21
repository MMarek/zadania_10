import React, {Component} from "react";

class AddNumbers extends Component{
    render() {
        const {numberA, numberB} = this.props;
        return(
        <h1>{numberA} * {numberB} = {numberA * numberB}</h1>
        )
    }
}

class Task10 extends Component{
    render() {
        return <AddNumbers numberA={20} numberB={80}/>
    }
}

export default Task10;