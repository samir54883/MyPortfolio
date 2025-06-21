import styled, { keyframes } from "styled-components";

// === Keyframe Animations ===
const borderGlowTranslate = keyframes`
    0% { transform: translateX(-50%) translateY(0); }
    100% { transform: translateX(-50%) translateY(-50%); }
`;

const borderGlowScale = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.5); }
`;

const starShine = keyframes`
    0% { opacity: 0.2; }
    100% { opacity: 0.6; }
`;

const sparkleSoft = keyframes`
    0%, 34%, 71%, 100% { transform: scale(1); }
    17% { transform: scale(1.03); }
    49% { transform: scale(1.05); }
    83% { transform: scale(1.02); }
`;

const sparkleStrong = keyframes`
    0%, 34%, 71%, 100% { transform: scale(1); }
    17% { transform: scale(1.08); }
    49% { transform: scale(1.12); }
    83% { transform: scale(1.06); }
`;

// === Styled Components ===
const BorderGlowTranslate = styled.span`
    animation: ${borderGlowTranslate} 10s ease-in-out infinite alternate;
`;

const BorderGlowScale = styled.span`
    animation: ${borderGlowScale} 10s ease-in-out infinite alternate;
`;

const StarShine = styled.span`
    animation: ${starShine} 14s ease-in-out infinite alternate;
`;

const SparkleIcon = styled.svg`
    animation: ${sparkleSoft} 2s infinite ease-in-out;
    transform-origin: center;

    .path {
        fill: white;
        stroke: white;
        transform-origin: center;
    }

    .group:hover & {
        animation: ${sparkleStrong} 1.5s infinite ease-in-out;
    }

    .group:hover .path {
        animation: ${sparkleStrong} 1.5s linear 0.5s infinite;
    }
`;

export default function MinimalButton() {
    return (
        <button className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden">
            {/* Outer Glow Background */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 pointer-events-none select-none">
          <span
              className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
              style={{
                  background: "linear-gradient(135deg, #d4d4d4, #f0f0f0, #a0a0a0)",
              }}
          />
        </span>
      </span>

            {/* Glow Border Effects */}
            <BorderGlowTranslate className="absolute inset-0 pointer-events-none select-none">
                <BorderGlowScale
                    className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                    style={{
                        background: "linear-gradient(135deg, #d4d4d4, #f0f0f0, #a0a0a0)",
                    }}
                />
            </BorderGlowTranslate>

            {/* Button Content */}
            <span className="flex items-center justify-center gap-1 relative z-[1] bg-neutral-50/90 dark:bg-neutral-950/90 rounded-full py-2 px-4 pl-2 w-full">
        <span className="relative group-hover:scale-105 transition-transform duration-500">
          <SparkleIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-[1.125rem] h-[1.125rem] sparkle"
          >
            <path
                className="path"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
            />
            <path
                className="path"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
            />
            <path
                className="path"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
            />
          </SparkleIcon>

          <StarShine
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg opacity-0 dark:opacity-30 rounded-full size-11"
              style={{
                  background:
                      "linear-gradient(135deg, #ffffff, #d1d5db, #9ca3af, #f9fafb)",
              }}
          />
        </span>

        <span className="ml-1.5 text-xs bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-950/50 dark:from-white dark:to-white/50 group-hover:scale-105 transition transform-gpu">
          Minimal Interface
        </span>
      </span>
        </button>
    );
}
