import React, {Component} from "react";

function Sum(props) {
    const {numbers} = props;
    return <h1>{numbers.reduce((prev, curr) => prev + curr, 0)}</h1>
}

class Task06 extends Component{
    render() {
        return (
            <Sum numbers = {[2,4,6,8,10]}/>
        )
    }
}

export default Task06;