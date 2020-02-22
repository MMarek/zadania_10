import React, {Component} from "react";

class ChatHeader extends Component{
    render() {
        const {name} = this.props;
        return(
            <header>
                <h1>{name}</h1>
            </header>
        )
    }
}

class ChatMessages extends Component{
    render() {
        const {text} = this.props;
        return(
            <div>
                <ul>
                    {text.map((content, index) => (
                    <ChatMessage key={index} content={content} />
                    ))}
                </ul>
            </div>
        )
    }
}

class ChatMessage extends Component{
    render() {
        const {content} = this.props;
        return <li>{content}</li>
    }
}

class NewMessage extends Component{
    render() {
        return(
            <footer>
                <form>
                    <input type='text'/>
                    <button>Wyślij</button>
                </form>
            </footer>
        )
    }
}

class Chat extends Component{
    render() {
        return (
            <section className='chat'>
                <ChatHeader name={'Czat prywatny'}/>
                <ChatMessages text={["Wpis z czatu 1", "Wpis z czatu 2", "Wpis z czatu 3"]}
                />
                <NewMessage/>
            </section>
        );
    }
}

class Task13 extends Component{
    render() {
        return <Chat/>
    }
}

export default Task13;




// function ChatHeader(props) {
//     return (
//         <header>
//             <h1>Chat prywatny</h1>
//         </header>
//     )
// }
//
// function NewChatMessage(props) {
//     return (
//         <footer>
//             <form>
//                 <input type='text'/>
//                 <button>Wyślij</button>
//             </form>
//         </footer>
//     )
// }
//
// function ChatMessages(props) {
//     const {msgs} = props;
//     return (
//         <div>
//             <ul>
//                 {msgs.map(el => <ChatMessages msg={el}/>)}
//             </ul>
//         </div>
//     )
// }
//
// function ChatMessage(props) {
//     const {msg} = props;
//     return <li>{msg}</li>
// }
//
// function Chat(props) {
//     const {messages} = props;
//     return (
//         <section className='chat'>
//             <ChatHeader/>
//             <ChatMessage msgs={messages}/>
//             <NewChatMessage/>
//         </section>
//     )
// }
//
// let texts = [
//     "Wiadomość 1",
//     "Wiadomość 2",
//     "Wiadomość 3",
//     "Wiadomość 4",
//     "Wiadomość 5",
//     "Wiadomość 6",
//     "Wiadomość 7",
// ];
//
// function Task13(props) {
//     return <Chat messages={texts}/>
// }
//
// export default Task13;