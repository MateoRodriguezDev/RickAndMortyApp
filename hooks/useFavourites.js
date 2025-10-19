import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";


export const useFavourites = () => {
    const context = useContext(FavouritesContext)
    if(!context){
        throw new Error('useList must be used within a ListProvider')
    }

    return context
}