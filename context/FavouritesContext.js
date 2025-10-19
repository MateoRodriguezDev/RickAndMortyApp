import { createContext, useReducer } from "react";
import { favouritesReducer, initialState } from "../reducers/favourites-reducers";




export const FavouritesContext = createContext()

export const FavouritesProvider = ({children} ) => {
    const [state, dispatch] = useReducer(favouritesReducer, initialState)


    return (
        <FavouritesContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}