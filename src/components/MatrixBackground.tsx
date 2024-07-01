import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const breathe = keyframes`
  0% { opacity: 0.2; transform: scaleY(0.8); }
  50% { opacity: 0.8; transform: scaleY(1.2); }
  100% { opacity: 0.2; transform: scaleY(0.8); }
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const BackgroundLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 7px,
    rgba(0, 0, 0, 0.8) 9px,
    rgba(0, 0, 0, 0.8) 13px,
    transparent 13px
  );
`;

const GreenLine = styled.div`
  position: absolute;
  height: 6px;
  width: 100%;
  background-color: #4bffab44;
  top: ${(props) => props.top}%;
  animation: ${breathe} 2s ease-in-out infinite;
  transform-origin: center;
  box-shadow: 0 0 10px #4bffab, 0 0 20px #4bffab, 0 0 30px #4bffab;
  text-shadow: 0 0 10px #4bffab;
`;

const MatrixBackground = () => {
  const [greenLines, setGreenLines] = useState([]);

  useEffect(() => {
    const createLines = () => {
      const newLines = Array.from({ length: 3 }, () => ({
        id: Math.random(),
        top: Math.random() * 100,
      }));
      setGreenLines(newLines);
    };

    createLines();
    const intervalId = setInterval(createLines, 2100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BackgroundContainer>
      <BackgroundLines />
      {greenLines.map((line) => (
        <GreenLine key={line.id} top={line.top} />
      ))}
    </BackgroundContainer>
  );
};

export default MatrixBackground;
