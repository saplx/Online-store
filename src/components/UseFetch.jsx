import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err);
        }
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading, error];
};

export default UseFetch;
