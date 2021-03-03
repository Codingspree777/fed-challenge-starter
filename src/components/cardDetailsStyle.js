import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
0% { }
100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }
`;

export const Cards = styled.div`
  width: 22%;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 10px;

  @media (prefers-reduced-motion: no-preference) {
    transform: scale(0.6);
    animation: ${scaleUp} 0.65s ease-in-out forwards;
  }
`;

export const MainImgBox = styled.div`
  display: inline-block;
  height: 50%;
  position: relative;
  overflow: hidden;
`;
export const Img = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const Tag = styled.div`
  position: absolute;
  border-radius: 10px;
  right: 0%;
  top: 0%;
  width: 80px;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
`;

export const CardPreview = styled.div`
  height: 125px;
`;

export const ThumbNail = styled.img``;
