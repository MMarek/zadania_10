import React, {Component} from "react";

function Menu() {
    return (
        <ul>
            <li><a href="">Strona główna</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Cennik</a></li>
            <li><a href="">Kontakt</a></li>
        </ul>
    )
}

class Menu2 extends Component {
    render() {
        return (
            <ul>
                <li><a href="">Strona główna</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Cennik</a></li>
                <li><a href="">Kontakt</a></li>
            </ul>
        )
    }
}

function Task03() {
    return (
        <>
            <Menu/>
            <Menu2/>
        </>
    )
}

export default Task03;