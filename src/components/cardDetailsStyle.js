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
  height: 48%;
  position: relative;
  overflow: hidden;
`;
export const Img = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const Tag = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  right: 0%;
  top: 0%;
  width: 90px;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
`;

export const CardInfo = styled.div``

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 50px;
`;

export const Title = styled.div`
  height: 50px;
  font-weight: bold
`

export const ThumbNail = styled.img`
  width: 30px;
  height: 30px;
`;

export const CardBody = styled.div`
  display: flex;
  margin-top: -8px;
  padding: 10px;
`

export const CardDetail = styled.div`
  margin-right: 15px;
  margin-left: 5px;
  font-size: 10px;
  font-weight: bold;
`
