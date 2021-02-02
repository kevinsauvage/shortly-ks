import React, { createContext, useState } from "react";

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const getShortenUrl = async () => {
    const url = `https://api.shrtco.de/v2/shorten?url=${query}/very/long/link.html`;
    const response = await fetch(url);
    const data = await response.json();
    let res;
    if (data.ok) {
      res = data.result.full_short_link2;
    }

    if (results[0]) {
      setResults([...results, { origin: input, result: res }]);
      setIsLoading(false);
    } else {
      const obj = { origin: input, result: res };
      setResults([obj]);
      setIsLoading(false);
    }
  };

  return (
    <Provider
      value={{
        input,
        setInput,
        query,
        setQuery,
        results,
        getShortenUrl,
        isLoading,
        setIsLoading,
        menuIsOpen,
        setMenuIsOpen,
      }}>
      {props.children}
    </Provider>
  );
};
