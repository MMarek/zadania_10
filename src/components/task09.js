import React from "react";

function Header(props) {
    const {logo, searchPlaceholder} = props;
    return (
        <header>
            <a href='#'>{logo}</a>
            <form>
                <input placeholder={searchPlaceholder} name='s'/>
                <button>Search</button>
            </form>
        </header>
    )
}

function Task09() {
    return <Header logo="Your company!" searchPlaceholder="Type some words..."/>
}

export default Task09;