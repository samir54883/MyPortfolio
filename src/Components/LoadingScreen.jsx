import { useEffect, useState } from "react";
import UIHeavyButton from "../Buttons/UIHeavyButton";
import MinimalButton from "../Buttons/MinimalButton";
import Uiheavytoggle from "../Buttons/Uiheavytoggle";
import UIHeavySoundButton from "../Buttons/UIHeavySoundButton";

const greetings = ["Hello!", "Hola", "Bonjour", "नमस्ते", "こんにちは", "Ciao"];

export default function LoadingScreen() {
    const [greetingIndex, setGreetingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative flex flex-col justify-center items-center text-white transition-all duration-500 py-12">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            {/* Rotating Greeting in Center */}
            <div className="text-5xl font-semibold z-10 mt-[-10rem] georgia-font">
                {greetings[greetingIndex]}
            </div>


            {/* Bottom-Center Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-4">
                    <UIHeavyButton className="scale-80" />
                    <MinimalButton className="scale-80" />
                </div>
                <div className="text-base md:text-lg text-center max-w-[20rem] px-3 georgia-font">
                    Choose your preferred interface for an immersive journey
                </div>
            </div>

            {/* Bottom-Left Sound Button */}
            <div className="absolute bottom-4 left-8 flex flex-col items-center gap-4">
                <UIHeavySoundButton className="scale-80" />
                <div className="text-base md:text-lg text-center max-w-[16rem] px-1 leading-tight georgia-font">
                    Enhance the experience with sound effects.
                </div>
            </div>

            {/* Bottom-Right Toggle */}
            <div className="absolute bottom-4 right-8 flex flex-col items-center gap-4">
                <Uiheavytoggle className="scale-80" />
                <div className="text-base md:text-lg text-center max-w-[14rem] px-1 leading-tight georgia-font">
                    You can choose the mode you like
                </div>
            </div>
        </div>
    );
}
