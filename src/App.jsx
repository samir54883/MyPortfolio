import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import { ModeProvider } from "./components/ModeContext.jsx";

function App() {
    const [showLoading, setShowLoading] = useState(true);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        // 1. LoadingScreen ends at 6.2s
        const loadingTimer = setTimeout(() => {
            setShowLoading(false);
        }, 6200);

        // 2. WelcomeScreen ends at 8.2s
        const welcomeTimer = setTimeout(() => {
            setShowWelcome(false);
        }, 18200);

        return () => {
            clearTimeout(loadingTimer);
            clearTimeout(welcomeTimer);
        };
    }, []);

    return (
        <ModeProvider>
            <Router>
                {/* All layers rendered from the beginning */}
                {showWelcome && <WelcomeScreen />}
                {showLoading && <LoadingScreen />}

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ModeProvider>
    );
}

export default App;
