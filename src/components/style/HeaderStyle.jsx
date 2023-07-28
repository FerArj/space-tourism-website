import styled from 'styled-components'

export const Menu = styled.div`   
    width: 50vw;
    height: 9vh;
    display: flex;
    justify-content: flex-end;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    flex-shrink: 0;
    text-transform: uppercase;
    position: fixed;
    top: 2vh;
    right: 0;
    & span{
        margin-right: 1em;
        font-weight: bold;
    }
    & ul{
        display: flex;
        padding-top: 2em;
        padding-right: 3vw;
    }
    & li{
        list-style-type: none;
        display: flex;
        font-size: 1rem;
        font-style: normal;
        margin-right: 5vw;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.7px;
        color: #FFF;
        font-family: Barlow Condensed;
        cursor: pointer;
    &  li:hover{
        border-bottom: 2px solid#FFF;
    }
} 
`