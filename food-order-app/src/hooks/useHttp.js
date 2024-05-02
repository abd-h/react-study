import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const respondse = await fetch(url, config);
  const resData = await respondse.json();
  if (!respondse.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const restData = await sendHttpRequest(url, { ...config, body: data });
        setData(restData);
      } catch (error) {
        if (error) {
          setError(
            error.message || "Something went wrong, failed to send request"
          );
        }
      }
      setIsLoading(false);
    },
    [url, config]
  );


  useEffect(() => {
    if (config && (config.method == "GET" || !config.method || !config)) {
      sendRequest();
    }
  }, [sendRequest, config]);

  console.log(error);
  return {
    isLoading,
    error,
    data,
    sendRequest,
    clearData
  };
}
