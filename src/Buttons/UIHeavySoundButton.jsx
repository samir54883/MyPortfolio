import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Wave animation
const wave = keyframes`
    0%, 100% { transform: scaleY(0.3); }
    50% { transform: scaleY(1); }
`;

// Main button
const Button = styled.button`
    --btn-h: 36px;
    --wave-w: 2px;
    --wave-gap: 3px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    padding: 4px 4px 2px 8px;
    height: var(--btn-h);
    width: 120px;
    background: #000;
    color: #fff;
    box-shadow: 0 0 2px lightgray;
    cursor: pointer;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    box-sizing: border-box;
    border-radius: 24px;

    &:focus-visible {
        outline: 2px solid #2f80ed;
    }

    &:hover span#label {
        color: #6446FF;
    }
`;

// Waves container
const Waves = styled.div`
    display: flex;
    gap: var(--wave-gap);
    height: 48%;
    align-items: ${({ isOn }) => (isOn ? 'end' : 'center')};
    flex-shrink: 0;
`;

// Individual bars
const Bar = styled.span`
    width: var(--wave-w);
    height: 100%;
    background: ${({ index }) => {
        const colors = [
            '#120a33', '#241466', '#362099', '#482bcc', '#5936f0',
            '#5e3fff', '#6244ff', '#6446ff', '#6244ff', '#5e3fff',
            '#5936f0', '#482bcc', '#362099', '#241466', '#120a33'
        ];
        return colors[index] || '#fff';
    }};
    transform-origin: ${({ isOn }) => (isOn ? 'bottom center' : 'center center')};
    transform: scaleY(0.25);
    transition: transform 0.4s ease-out;

    ${({ isOn, index }) =>
            isOn &&
            css`
                animation: ${wave} 1s ease-in-out infinite;
                animation-delay: -${index * 0.1}s;
            `}
`;

// Label text
const Label = styled.span`
    display: inline-block;
    min-width: 28px;
    text-align: left;
    padding-right: 2px;
    margin: 0;
    line-height: 1;
    font-family: 'Times New Roman', Times, serif;
`;

const UIHeavySoundButton = () => {
    const [isOn, setIsOn] = useState(true);

    return (
        <Button
            className={isOn ? 'on' : ''}
            aria-pressed={isOn}
            onClick={() => setIsOn(!isOn)}
        >
            <Waves isOn={isOn} aria-hidden="true">
                {[...Array(15)].map((_, i) => (
                    <Bar key={i} index={i} isOn={isOn} />
                ))}
            </Waves>
            <Label id="label">{isOn ? 'ON' : 'OFF'}</Label>
        </Button>
    );
};

export default UIHeavySoundButton;
