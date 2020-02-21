import React, {Component} from "react";

class AddNumbers extends Component {
    render() {
        const {numberA, numberB} = this.props;
        return <h1>{numberA} + {numberB} = {numberA + numberB}</h1>
    }
}

function Task05() {
    return (
        <>
            <AddNumbers numberA={3} numberB={6}/>
            <AddNumbers numberA={34} numberB={63}/>
            <AddNumbers numberA={32} numberB={9}/>
        </>
    )
}

export default Task05;