import React, {Component} from "react";

function Menu(props) {
    const {menu} = props;
    return (
        <ul>
            {menu.map( e=>
                <li key={e.url}>
                    <a href={e.url}>{e.text}</a>
                </li>)
            }
        </ul>
    )
}

class Task07 extends Component{
    render() {
        return <Menu menu={
            [
                {
                    url: '/',
                    text: 'Strona główna'
                },
                {
                    url: '/blog',
                    text: 'Blog'
                },
                {
                    url: '/cennik',
                    text: 'Cennik'
                },
                {
                    url: '/kontakt',
                    text: 'Kontakt'
                }
            ]
        }/>
    }
}

export default Task07;


// let menu1 = [
//     {title: 'Home', url: ''},
//     {title: 'Blog', url: '/blog'},
//     {title: 'Cennik', url: '/cennik'},
//     {title: 'Kontakt', url: '/kontakt'},
// ];
//
// let menu2 = [
//     {title: 'Regulamin', url: '/regulamin'},
//     {title: 'Rodo', url: '/rodo'}
// ];
//
// class Menu extends Component {
//
//     render() {
//         const {position: menuPositions} = this.props;
//
//         return (
//             <ul>
//                 {menuPositions.map(el => <li><a href={el.url}>{el.title}</a></li>)}
//             </ul>
//         )
//     }
// }
//
// class Task07 extends Component{
//
//     render() {
//         return(
//             <>
//                 <Menu positions={menu1}/>
//                 <Menu positions={menu2}/>
//             </>
//         )
//     }
// }
//
// export default Task07;