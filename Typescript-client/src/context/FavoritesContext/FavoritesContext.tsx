import { createContext, useState } from "react";
import { children } from "../../models/models";

interface FavoriteItemProps {
    id: number;
    title: string;
    thumbnail: string;
}
interface IFavoriteContext {
    favorites: FavoriteItemProps[];
    setFavorites: React.Dispatch<React.SetStateAction<FavoriteItemProps[]>>;
}

export const FavoriteContext = createContext<Partial<IFavoriteContext>>({});

export const FavouritesProvider = ({ children }: children) => {
    const [favorites, setFavorites] = useState([{
        id: 1000,
        title: "Iphone 14 pro",
        thumbnail: "https://i.dummyjson.com/data/products/1/1.jpg"
    }]);
    console.log(favorites, '====aaa')
    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};
