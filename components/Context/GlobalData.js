import { createContext, useReducer } from "react";
import dataReducer from "./DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children, apolloClient }) => {
  //instantiate the basic dispatcher and data, using a reducer I created

  const [data, dispatch] = useReducer(dataReducer, {
    apolloClient: apolloClient,
    movies: {},
    selectedRow: -1,
    posterOpened: false,
  });

  //this is the actual provider of the data this allows us to access the data quickly and
  // export what data from the context we actually want and need, so we don't need to export all the data cause something are context background
  const provider = {
    apolloClient: data.apolloClient,
    movies: data.movies,
    selectedRow: data.selectedRow,
    posterOpened: data.posterOpened,
    dispatch: dispatch,
  };

  //return the context with our data and reducer
  return (
    <DataContext.Provider value={provider}>{children}</DataContext.Provider>
  );
};
