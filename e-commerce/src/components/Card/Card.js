function Card({ item }) {
    return (
        <div>
            Card
            <h1>{item.title}</h1>
            <p>{item.category}</p>
            <img src={item.image} alt={item.title}></img>
            <p>{item.description}</p>
        </div>
    );
}

export default Card;
