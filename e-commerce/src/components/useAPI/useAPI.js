import { useEffect, useState } from "react";

function useAPI() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const dataResponse = await response.json();
        console.log(dataResponse);
        setData(dataResponse);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    console.log("This is running");
  }, []);
  return { data };
}

export default useAPI;
