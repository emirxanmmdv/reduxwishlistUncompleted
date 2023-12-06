import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/Products");
    const jsondata = await response.json()
    setData(jsondata)
  };
  return{data,fetchData}
};

export default useFetch;