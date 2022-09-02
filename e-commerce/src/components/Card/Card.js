function Card({ item }) {
  return (
    <div className="flex flex-col bg-slate-500  items-center justify-between">
      <h1>{item.title}</h1>
      <p>{item.category}</p>
      <div className=" image-container bg-green-600 w-52 h-52">
        {/* <img
                    className='image  object-scale-down '
                    src={item.image}
                    alt={item.title}
                ></img> */}
      </div>
      <p>{item.description}</p>
    </div>
  );
}

export default Card;
