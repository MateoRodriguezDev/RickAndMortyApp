import { createContext, useReducer } from "react";
import {
  favouritesReducer,
  initialState,
} from "../reducers/favourites-reducers";
import { getData, storeData } from "../service/storeData";
import { useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);


  useEffect(() => {
    const loadFavourites = async () => {
      const data = await getData();
      if (data) {
        dispatch({ type: "load-storage", payload: { list: data } });
      }
    };
    loadFavourites();
  }, []);

  useEffect(() => {
    if (state.list) {
      storeData(state.list);
    }
  }, [state.list]);

  return (
    <FavouritesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
