import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});
UserContext.displayName = 'UserContext';

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState({ name: 'John Doe', isAdmin: true, })

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser({})
        setIsLoggedIn(false)
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                user,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}