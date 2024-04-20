import React, { createContext, useEffect, useState } from "react";
import fetchData from "../api/index";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchDataAndUpdate = async () => {
      try {
        const data = await fetchData();

        if (mounted) {
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndUpdate();

    return () => {
      mounted = false;
    };
  }, []);

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};
