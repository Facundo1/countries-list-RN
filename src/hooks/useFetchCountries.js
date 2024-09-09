import { useState, useEffect } from "react";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data.slice(0, (page + 1) * 10));
        setLoading(false);
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    };

    fetchCountries();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { countries, loading, loadMore };
};
