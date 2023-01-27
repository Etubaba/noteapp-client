import { useState, useEffect } from "react";
import axios from "axios";
import { IApiData } from "../interface";

const useFetch = (url: string, dependent = 1) => {
  const [fetchData, setFetchData] = useState<IApiData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setFetchData(data?.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [url, dependent]);

  return { fetchData, loading };
};

export default useFetch;
