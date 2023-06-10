import { createContext, useState } from "react";
import { children } from "../../models/models";

interface FavoriteItemProps {
    id: number;
    title: string;
    thumbnail: string;
}
interface IFavoriteContext {
    favorites: FavoriteItemProps[];
    setFavorites: React.Dispatch<React.SetStateAction<never[]>>;
}

export const FavoriteContext = createContext<Partial<IFavoriteContext>>({});

export const FavouritesProvider = ({ children }: children) => {
    const [favorites, setFavorites] = useState([]);
    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};
