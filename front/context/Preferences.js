import { createContext, useEffect, useState } from 'react';

export const PreferencesContext = createContext({});
PreferencesContext.displayName = 'PreferencesContext';

export const PreferencesProvider = ({ children }) => {
    const [isModalOpen, setModal] = useState(false);

    const toggleModal = () => setModal(!isModalOpen);

    return (
        <PreferencesContext.Provider
            value={{
                isModalOpen,
                toggleModal
            }}
        >
            {children}
        </PreferencesContext.Provider>
    )
}