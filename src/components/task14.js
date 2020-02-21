import React from "react";
import products from "./products";

function ReciptHeader() {
    return (
        <thead>
        <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Łączna cena</th>
        </tr>
        </thead>
    );
}

function ReciptItems(props) {
    const {items} = props;
    return (
        <tbody>
        {items.map(e => <ReciptItem key={e.code} item={e}/>
        )}
        </tbody>
    )
}

function RecipeItem(props) {
    const {code, name, single_price, qty} = props.item;
    return(
        <tr key={code}>
            <td>{name}</td>
            <td>{single_price}</td>
            <td>{qty}</td>
            <td>{(single_price * qty).toFixed(2)}</td>
        </tr>
    )
}

function RecipeFooter(props) {
    const {items} = props;
    const res = items.reduce((prev, next) => prev + (next.single_price * next.qty),0);
    return (
        <tfoot>
        <tr>
            <td>Razem</td>
            <td></td>
            <td></td>
            <td>{items.reduce((prev,next) => prev + (next.single_price * next.qty), 0).toFixed(2)} zł</td>
        </tr>
        </tfoot>
    );
}

function Task14(props) {
    const {items} = props;
    return(
        <table>
            <ReciptHeader/>
            <RecipeItems items={items}/>
            <RecipeFooter items={items}/>
        </table>
    );
}

export default Task14;
