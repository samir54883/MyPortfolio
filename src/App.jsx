import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { ModeProvider } from "./components/ModeContext.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 9000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ModeProvider>
            <Router>
                {/* default (“sync”) mode lets entering elements mount immediately */}
                <AnimatePresence>
                    {isLoading && <LoadingScreen key="loading" />}   {/* ← only overlay */}
                </AnimatePresence>

                {/* Routes are always in the tree, so Home is ready underneath */}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ModeProvider>
    );
}

export default App;
