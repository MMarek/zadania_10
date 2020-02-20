import React, {Component} from "react";


function LikeBox() {
    return (
        <p>100 likes</p>
    )
}

class TextBox extends Component {
    render() {
        return (
            <button>Lubię to!</button>
        )
    }
}

function Task02() {
    return (
        <>
            <LikeBox/>
            <TextBox/>
        </>
    )
}

export default Task02;