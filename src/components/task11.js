import React from "react";

let itemData = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
};

function ShopItemHeader(props) {
    const {title, image} = props;
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} style={{maxHeight: '300px'}}/>
        </header>
    )
}

function ShopItemDescription(props) {
    const {description} = props;
    return (
        <article>
            <p>{description}</p>
        </article>
    )
}

function ShopItemPricing(props) {
    const {price} = props;
    return(
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    )
}

function ShopItem(props) {
    const {productInfo} = props;
    return (
        <section>
            <ShopItemHeader title={productInfo.title} image={productInfo.image}/>
            <ShopItemDescription description={productInfo.description}/>
            <ShopItemPricing price={productInfo.price}/>
        </section>
    );
}

function Task11(props) {
    return (
        <ShopItem productInfo={itemData}/>
    )
}

export default Task11;