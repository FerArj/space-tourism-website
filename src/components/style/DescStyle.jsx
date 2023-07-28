import styled from 'styled-components';

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ isDestination }) => (isDestination ? '0' : '100vh')};
  color: #D0D6F9;
  margin-left: ${({ isDestination }) => (isDestination ? '60vw' : '15vw')};
`;

export const DescContent = styled.div`
  color: #D0D6F9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 23.125vw;
  padding-top: 40vh;
  & h1 {
    color: #FFF;
    font-family: Bellefair;
    font-size: 7.8125vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  & h2 {
    text-transform: uppercase;
    letter-spacing: 2.7px;
  }
  margin-bottom: ${({ isDestination }) => (isDestination ? '140vh' : '')};
`;

export const DescButton = styled.button`
  background: transparent;
  color: #FFF;
  border: none;
  font-size: 1rem;  
  text-transform: uppercase;
  letter-spacing: 2.7px;
  width: 5vw;    
  cursor: pointer;
  & button:hover {
    border-bottom: 2px solid white;
  }
`;
