import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframe animation for bars
const wave = keyframes`
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
`;

// Button container
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
  background: white;
  color: black;
  border: none;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  border-radius: 24px;
  box-sizing: border-box;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #2f80ed;
  }

  &:hover span#label {
    color: #1E82FF;
  }
`;

// Container for bars
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
  transform: scaleY(0.25);
  transform-origin: ${({ isOn }) => (isOn ? 'bottom center' : 'center center')};
  transition: transform 0.4s ease-out;
  background: ${({ index }) => {
    const colors = [
        '#89bff2', '#78b4ef', '#67a9ec', '#569ee9', '#4593e6',
        '#3488e3', '#237de0', '#1e82ff', '#237de0', '#3488e3',
        '#4593e6', '#569ee9', '#67a9ec', '#78b4ef', '#89bff2'
    ];
    return colors[index] || '#fff';
}};

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
  font-family: "Times New Roman", Times, serif;
`;

const UIHeavyLightSoundButton = () => {
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

export default UIHeavyLightSoundButton;
