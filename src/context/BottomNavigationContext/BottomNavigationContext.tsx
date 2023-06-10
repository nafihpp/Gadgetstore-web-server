import React from 'react'
import { children } from "../../models/models";
interface INavigationContext {
    navigationValue: string;
    setNavigationValue: React.Dispatch<React.SetStateAction<string>> | undefined;
}
export const BottomNavigationContext = React.createContext<Partial<INavigationContext>>({});

export const BottomNavigationProvider = ({ children }: children) => {
    const [navigationValue, setNavigationValue] = React.useState("");
    return (
        <BottomNavigationContext.Provider value={{ navigationValue, setNavigationValue }}>{children}</BottomNavigationContext.Provider>
    )


}

