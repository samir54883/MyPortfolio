import { motion } from "framer-motion";
import styled from "styled-components";

const WelcomeWrapper = styled(motion.div)`
    position: fixed;
    inset: 0;
    z-index: 999; /* Below Loading, above Home */
    background: #1a1a1a;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Arial", sans-serif;
    font-size: 3rem;
`;

function WelcomeScreen() {
    return (
        <WelcomeWrapper
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>Welcome</div>
            <div>To My</div>
        </WelcomeWrapper>
    );
}

export default WelcomeScreen;
