function Card({ item }) {
    return (
        <div className='flex flex-col bg-slate-500 w-full'>
            Card
            <h1>{item.title}</h1>
            <p>{item.category}</p>
            <div className=' image-container max-w-52 min-h-52'>
                <img
                    className='image  object-scale-down '
                    src={item.image}
                    alt={item.title}
                ></img>
            </div>
            <p>{item.description}</p>
        </div>
    );
}

export default Card;
