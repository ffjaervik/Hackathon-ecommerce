function Card({ item }) {
    return (
        <div className='flex flex-col bg-slate-500  items-center justify-start h-96'>
            <div className='flex flex-col items-center'>
                <h1 className='text-lg md:text-xl lg:text-2xl text-center max-w-[80%]'>
                    {item.title}
                </h1>
                <p className='text-sm md:text-md lg:text-lg'>{item.category}</p>
                <div className=' flex image-container bg-white w-52 h-52 items-center justify-center'>
                    <img
                        className='image object-cover max-h-52 max-w-[80%]'
                        src={item.image}
                        alt={item.title}
                    ></img>
                </div>
            </div>
            <p className='text-sm md:text-md lg:text-lg text-center max-w-[80%]  truncate '>
                {item.description}
            </p>
        </div>
    );
}

export default Card;
