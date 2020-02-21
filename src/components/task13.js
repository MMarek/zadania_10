import React from "react";

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

function ChatMessage(props) {
    const {msg} = props;
    return <li>{msg}</li>
}

function Chat(props) {
    const {messages} = props;
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