import React, {Component} from "react";
import products from "./products";

class ReceiptHeader extends Component {
    render() {
        return (
            <thead style={{textAlign: 'left'}}>
            <tr>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Łączna cena</th>
            </tr>
            </thead>
        )
    }
}

class ReceiptItems extends Component{
    render() {
        return(
            <tbody>
            {products.map((item) =>
            <ReceiptItem {...item} key={item.code}/>
            )}
            </tbody>
        );
    }
}

class ReceiptItem extends Component{
    render() {
        const {name, single_price, qty} =this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{(single_price).toFixed(2) + " zł"}</td>
                <td>{qty}</td>
                <td>{(single_price * qty).toFixed(2) + " zł"}</td>
            </tr>
        );
    }
}

class ReceiptFooter extends Component{
    render() {
        return (
            <tfoot>
            <tr>
                <td>Razem</td>
                <td></td>
                <td></td>
                <td>{(products.map(({ single_price, qty }) => single_price * qty)
                    .reduce((price1, price2) => price1 + price2)
                ).toFixed(2) + " zł"}
                </td>
            </tr>
            </tfoot>
        )
    }
}

class Receipt extends Component{
    render() {
        return(
            <table style={{width: '40vw'}}>
            <ReceiptHeader/>
            <ReceiptItems/>
            <ReceiptFooter/>
            </table>
        )
    }
}

class Task14 extends Component{
    render() {
        return <Receipt/>
    }
}

export default Task14;

//
// function ReciptHeader() {
//     return (
//         <thead>
//         <tr>
//             <th>Nazwa</th>
//             <th>Cena</th>
//             <th>Ilość</th>
//             <th>Łączna cena</th>
//         </tr>
//         </thead>
//     );
// }
//
// function RecipeItems(props) {
//     const {items} = props;
//     return (
//         <tbody>
//         {products.map(e => <RecipeItem key={e.code} item={e}/>
//         )}
//         </tbody>
//     )
// }
//
// function RecipeItem(props) {
//     const {code, name, single_price, qty} = props.item;
//     return(
//         <tr key={code}>
//             <td>{name}</td>
//             <td>{single_price}</td>
//             <td>{qty}</td>
//             <td>{(single_price * qty).toFixed(2)}</td>
//         </tr>
//     )
// }
//
// function RecipeFooter(props) {
//     const {products} = props;
//     const res = products.reduce((prev, next) => prev + (next.single_price * next.qty),0);
//     return (
//         <tfoot>
//         <tr>
//             <td>Razem</td>
//             <td></td>
//             <td></td>
//             <td>{products.reduce((prev,next) => prev + (next.single_price * next.qty), 0).toFixed(2)} zł</td>
//         </tr>
//         </tfoot>
//     );
// }
//
// function Task14(props) {
//     const {products} = props;
//     return(
//         <table>
//             <ReciptHeader/>
//             <RecipeItems items={products}/>
//             <RecipeFooter items={products}/>
//         </table>
//     );
// }
//
// export default Task14;
