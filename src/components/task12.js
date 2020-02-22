import React, {Component} from "react";

let items = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
];

class ShopItemHeader extends Component{
    render() {
        const {title, image} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <img src={image}/>
            </header>
        );
    }
}

class ShopList extends Component{
    render() {
        const {items} = this.props;
        return (
            <div className={'shoplist'}>
                {items.map(({title, image}, index) => (
                    <ShopItemHeader key={index} title={title} image={image}/>
                ))}
            </div>
        );
    }
}

class Task12 extends Component{
    render() {
        return <ShopList items={items} />
    }
}

export default Task12;

// function ShopList(props) {
//     const {items} = props;
//     return(
//         <div className={'shoplist'}>
//             {items.map( product => <ShopItemHeader title={product.title} image={product.image}/>)}
//         </div>
//     )
// }
//
// function Task12() {
//     return (
//         <ShopList items={items}/>
//     )
// }
//
// export default Task12;