import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export function ModeProvider({ children }) {
    const [mode, setMode] = useState(() => {
        // Read mode from localStorage or default to "darkMinimal"
        return localStorage.getItem("preferredMode") || "darkMinimal";
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
