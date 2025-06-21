import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UIHeavyButton from "../Buttons/UIHeavyButton";
import MinimalButton from "../Buttons/MinimalButton";
import Uiheavytoggle from "../Buttons/Uiheavytoggle";
import UIHeavySoundButton from "../Buttons/UIHeavySoundButton";

const greetings = ["Hello!", "Hola", "Bonjour", "नमस्ते", "こんにちは", "Ciao"];

export default function LoadingScreen() {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [startGreetingLoop, setStartGreetingLoop] = useState(false);

    useEffect(() => {
        const delayStart = setTimeout(() => {
            setStartGreetingLoop(true);
        }, 1000);

        return () => clearTimeout(delayStart);
    }, []);

    useEffect(() => {
        if (!startGreetingLoop) return;

        const interval = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }, 500);

        return () => clearInterval(interval);
    }, [startGreetingLoop]);

    const softEntrance = {
        duration: 1.4,
        ease: [0.2, 0.8, 0.2, 1]
    };

    const fadeOptions = {
        ...softEntrance,
        opacity: { duration: 1.2 }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center text-white transition-all duration-500 py-12">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            {/* Greeting with fade-in and float-down */}
            <motion.div
                initial={{ y: -200, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={fadeOptions}
                className="text-5xl font-semibold z-10 mt-[-10rem] georgia-font"
            >
                {greetings[greetingIndex]}
            </motion.div>

            {/* Bottom-Center Buttons */}
            <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ ...fadeOptions, delay: 0.1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="flex flex-row items-center gap-4">
                    <UIHeavyButton className="scale-80" />
                    <MinimalButton className="scale-80" />
                </div>
                <div className="text-base md:text-lg text-center max-w-[20rem] px-3 georgia-font">
                    Choose your preferred interface for an immersive journey
                </div>
            </motion.div>

            {/* Bottom-Left Sound Button */}
            <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ ...fadeOptions, delay: 0.15 }}
                className="absolute bottom-4 left-8 flex flex-col items-center gap-4"
            >
                <UIHeavySoundButton className="scale-80" />
                <div className="text-base md:text-lg text-center max-w-[16rem] px-1 leading-tight georgia-font">
                    Enhance the experience with sound effects.
                </div>
            </motion.div>

            {/* Bottom-Right Toggle */}
            <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ ...fadeOptions, delay: 0.2 }}
                className="absolute bottom-4 right-8 flex flex-col items-center gap-4"
            >
                <Uiheavytoggle className="scale-80" />
                <div className="text-base md:text-lg text-center max-w-[14rem] px-1 leading-tight georgia-font">
                    You can choose the mode you like
                </div>
            </motion.div>
        </div>
    );
}
