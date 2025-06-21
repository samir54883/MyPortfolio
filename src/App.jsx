import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { ModeProvider } from "./components/ModeContext.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 120000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ModeProvider>
            <Router>
                {isLoading ? (
                    <LoadingScreen />
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                )}
            </Router>
        </ModeProvider>
    );
}

export default App;
