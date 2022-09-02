import "./App.css";
import CardList from "./components/CardList/CardList";
import { useState, useEffect } from "react";
import useAPI from "./components/useAPI/useAPI";

function App() {
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`https://fakestoreapi.com/products`);
  //         const dataResponse = await response.json();
  //         console.log(dataResponse);
  //         setData(dataResponse);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };
  //     fetchData();
  //     console.log("This is running");
  //   }, []);
  const { data } = useAPI();
  console.log(data);
  return (
    <div className="w-full sm:w-6 md:w-9 lg:w-20 pl-9 ml-12">
      <p className="bg-color[white]">Hello World</p>
      <CardList data={data} />
    </div>
  );
}

export default App;
