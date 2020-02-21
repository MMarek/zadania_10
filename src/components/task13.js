import React, {Component} from "react";

function ChatHeader(props) {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

function NewChatMessage(props) {
    return (
        <footer>
            <form>
                <input type='text'/>
                <button>Wyślij</button>
            </form>
        </footer>
    )
}

function ChatMessages(props) {
    const {msgs} = props;
    return (
        <div>
            <ul>
                {msgs.map(el => <ChatMessages msg={el}/>)}
            </ul>
        </div>
    )
}

function ChatMessage(props) {
    const {msg} = props;
    return <li>{msg}</li>
}

function Chat(props) {
    const {messages} = props;
    return (
        <section className='chat'>
            <ChatHeader/>
            <ChatMessage msgs={messages}/>
            <NewChatMessage/>
        </section>
    )
}

let texts = [
    "Wiadomość 1",
    "Wiadomość 2",
    "Wiadomość 3",
    "Wiadomość 4",
    "Wiadomość 5",
    "Wiadomość 6",
    "Wiadomość 7",
];

function Task13(props) {
    return <Chat messages={texts}/>
}
//
// class Task13 extends Component{
//     render() {
//         return (
            {/*<Chat messages={texts}/>*/}
        // )
    // }
// }

export default Task13;