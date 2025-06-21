import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useMode } from './components/ModeContext';

const dots = keyframes`
    0%, 20% {
        content: '.';
    }
    40% {
        content: '..';
    }
    60% {
        content: '...';
    }
    80%, 100% {
        content: '';
    }
`;

const Dot = styled.span`
    &::after {
        content: '.';
        animation: ${dots} 1.2s steps(4, end) infinite;
    }
`;

// Dynamic styled-component based on props
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: 1.875rem; /* text-3xl */
    font-weight: 500;
    transition: background-color 0.3s ease, color 0.3s ease;

    background-color: ${({ mode }) =>
            mode.includes('dark') ? '#000' : '#fff'};
    color: ${({ mode }) =>
            mode.includes('dark') ? '#fff' : '#000'};
`;

const Home = () => {
    const { mode } = useMode();

    return (
        <Wrapper mode={mode}>
            Thinking<Dot />
        </Wrapper>
    );
};

export default Home;
