import React, {Component} from "react";

function SearchBox() {
    return (
        <section>
            <input type='search'/>
            <button>Wyszukaj</button>
        </section>
    );
}

class SearchForm extends Component {

    render() {
        return (
            <section>
                <input type='search'/>
                <button>Wyszukaj</button>
            </section>
        )
    }
}

function Task01() {
    return (
        <>
            <SearchBox/>
            <SearchForm/>
        </>
    )
}

export default Task01;


