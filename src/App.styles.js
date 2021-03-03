import styled from 'styled-components';

export const AppBody = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin-top: 20px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media all and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
