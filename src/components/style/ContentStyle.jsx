import styled from 'styled-components'

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    color: #D0D6F9;
    margin-left: 15vw;
    & h2{
        font-size: 2rem;
        font-weight: 400;
        font-family: Barlow Condensed;
        text-transform: uppercase;
        letter-spacing: 4.725px;
    }
    & img{
        width: 60.32vh;
        height: 60.32vh;
        padding-top: 8vh;
    }
`;