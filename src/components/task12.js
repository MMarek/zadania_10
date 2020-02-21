import React from "react";
import {ShopItemHeader} from './task11';

let items = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
];

function ShopList(props) {
    const {items} = props;
    return(
        <div className={'shoplist'}>
            {items.map( product => <ShopItemHeader title={product.title} image={product.image}/>)}
        </div>
    )
}

function Task12() {
    return (
        <ShopList items={items}/>
    )
}

export default Task12;