import styled from 'styled-components'
import backgroundHomeDesktop from '../../assets/home/background-home-desktop.jpg';

export const HomeContainer = styled.div`
    background-image: url(${backgroundHomeDesktop});
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Content = styled.div`
    display: flex;
`