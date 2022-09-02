function Card({ item }) {
  return (
    <div className="flex flex-col bg-slate-500  items-center justify-around">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold">{item.title}</h1>
        <p>{item.category}</p>
        <div className=" flex image-container bg-white w-52 h-52 items-center justify-center">
          <img
            className="image object-cover max-h-52 "
            src={item.image}
            alt={item.title}
          ></img>
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  );
}

export default Card;
