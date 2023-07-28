import styled from 'styled-components'
import backgroundDestinationImage from '../../assets/destination/background-destination-desktop.jpg'

export const DestinationContainer = styled.div`
    background-image: url(${backgroundDestinationImage});
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
