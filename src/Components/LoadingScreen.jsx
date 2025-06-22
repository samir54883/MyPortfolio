import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../Components/ModeContext";
import Uiheavytoggle from "../Buttons/Uiheavytoggle";

// Dark Mode Buttons
import UIHeavyButton from "../Buttons/UIHeavyButton";
import MinimalButton from "../Buttons/MinimalButton";
import UIHeavySoundButton from "../Buttons/UIHeavySoundButton";

// Light Mode Buttons
import UIHeavyLightButton from "../Buttons/UIHeavyLightButton";
import MinimalLightButton from "../Buttons/MinimalLightButton";
import UIHeavyLightSoundButton from "../Buttons/UIHeavyLightSoundButton";

/* ─────────────── 1. Greetings list ─────────────── */
const greetings = [
    { text: "Hello!",    fontClass: "font-french" },
    { text: "Hola",      fontClass: "font-crustaceans" },
    { text: "Bonjour",   fontClass: "font-parisienne" },
    { text: "こんにちは", fontClass: "font-naganoshi" },
    { text: "Ciao",      fontClass: "font-ngetic" },
    { text: "안녕하세요", fontClass: "font-notoserifkr" },
    { text: "Hallo",     fontClass: "font-scriptorial" },
    { text: "你好",       fontClass: "font-mingimperial" },
    { text: "नमस्ते",     fontClass: "font-tirodevanagari" },
    { text: "Merhaba",   fontClass: "font-autography" },
    { text: "Hello!",    fontClass: "font-french" }, // Repeat for center animation
];

export default function LoadingScreen() {
    const { mode } = useMode();
    const isDark = mode === "enhancedDark";

    const [greetingIndex, setGreetingIndex] = useState(0);
    const [startLoop, setStartLoop] = useState(false);
    const [showFinal, setShowFinal] = useState(false);
    const [beginExit, setBeginExit] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setStartLoop(true), 2000);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!startLoop) return;

        const loop = setInterval(() => {
            setGreetingIndex((prev) => {
                if (prev === greetings.length - 1) {
                    clearInterval(loop);
                    setTimeout(() => setShowFinal(true), 600);
                    return prev;
                }
                return prev + 1;
            });
        }, 300);

        return () => clearInterval(loop);
    }, [startLoop]);

    useEffect(() => {
        if (showFinal) {
            const t = setTimeout(() => setBeginExit(true), 1800);
            return () => clearTimeout(t);
        }
    }, [showFinal]);

    const fade = { duration: 1.2, ease: [0.2, 0.8, 0.2, 1] };

    // Dynamically switch components based on mode
    const HeavyButton = isDark ? UIHeavyButton : UIHeavyLightButton;
    const MinimalBtn = isDark ? MinimalButton : MinimalLightButton;
    const SoundButton = isDark ? UIHeavySoundButton : UIHeavyLightSoundButton;

    return (
        <AnimatePresence>
            {!beginExit && (
                <motion.div
                    className={`fixed inset-0 z-50 min-h-screen overflow-hidden flex flex-col justify-center items-center ${
                        isDark ? "text-white" : "text-black"
                    } py-12`}
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                >
                    {/* --- Static background block --- */}
                    <div className={`absolute inset-0 ${isDark ? "bg-black" : "bg-white"} -z-20`} />

                    {/* --- Radial-gradient background --- */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={showFinal ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className={`absolute inset-0 -z-10 h-full w-full ${
                            isDark
                                ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
                                : "[background:radial-gradient(125%_125%_at_50%_10%,#fff_33%,#3488e3_60%)]"
                        }`}
                    />

                    {/* --- Greeting Text --- */}
                    <motion.div
                        initial={{ y: -200, opacity: 0, scale: 0.92, marginTop: "-10rem" }}
                        animate={
                            showFinal
                                ? { y: 0, scale: 1.15, opacity: 1, marginTop: "0rem" }
                                : { y: 0, scale: 1, opacity: 1, marginTop: "-10rem" }
                        }
                        transition={fade}
                        className={`text-7xl ${greetings[greetingIndex].fontClass}`}
                    >
                        {greetings[greetingIndex].text}
                    </motion.div>

                    {/* --- Bottom-center buttons --- */}
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.92 }}
                        animate={showFinal ? { y: 200, opacity: 0 } : { y: 0, opacity: 1, scale: 1 }}
                        transition={{ ...fade, delay: 0.1 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                    >
                        <div className="flex flex-row items-center gap-4">
                            <HeavyButton className="scale-80" />
                            <MinimalBtn className="scale-80" />
                        </div>
                        <div className="text-base md:text-lg text-center max-w-[20rem] px-3 georgia-font text-white">
                            Choose your preferred interface for an immersive journey
                        </div>
                    </motion.div>

                    {/* --- Bottom-left sound button --- */}
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.92 }}
                        animate={showFinal ? { y: 200, opacity: 0 } : { y: 0, opacity: 1, scale: 1 }}
                        transition={{ ...fade, delay: 0.15 }}
                        className="absolute bottom-4 left-8 flex flex-col items-center gap-4"
                    >
                        <SoundButton className="scale-80" />
                        <div className="text-base md:text-lg text-center max-w-[16rem] px-1 leading-tight georgia-font text-white">
                            Enhance the experience with sound effects.
                        </div>
                    </motion.div>

                    {/* --- Bottom-right toggle --- */}
                    <motion.div
                        initial={{ y: 100, opacity: 0, scale: 0.92 }}
                        animate={showFinal ? { y: 200, opacity: 0 } : { y: 0, opacity: 1, scale: 1 }}
                        transition={{ ...fade, delay: 0.2 }}
                        className="absolute bottom-4 right-8 flex flex-col items-center gap-4"
                    >
                        <Uiheavytoggle className="scale-80" />
                        <div className="text-base md:text-lg text-center max-w-[14rem] px-1 leading-tight georgia-font text-white">
                            You can choose the mode you like
                        </div>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
