import React from "react"
import { children } from "../../models/models";

interface IAuthContext {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = React.createContext<Partial<IAuthContext>>({})

export const AuthProvider = ({ children }: children) => {
    React.useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            setAuth(true);
        }
    })
    const [auth, setAuth] = React.useState<boolean>(false);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
