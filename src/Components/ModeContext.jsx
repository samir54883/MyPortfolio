import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("preferredMode") || "enhancedDark";
    });

    useEffect(() => {
        localStorage.setItem("preferredMode", mode);
    }, [mode]);

    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export function useMode() {
    return useContext(ModeContext);
}
