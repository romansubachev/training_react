import React from 'react';
import { createRoot } from 'react-dom/client';
import styled from "styled-components";

const MainDiv = styled.div`
  background: #4444FF;
  text-align: center;
  position: absolute;
  top: 50%;
  width:100%;
`;
const Txt = styled.p`
  color: 	#FFFF22;
  font-size: 40px;
`;
export default function Exc() {
  return (
    <MainDiv>
        <Txt>React Native is cool!</Txt>
    </MainDiv>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Exc />);