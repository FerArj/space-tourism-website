import { useNavigate } from 'react-router-dom'
import { ContainerCirculo } from './style/CirculoStyle';

function circulo() {

    const navigate = useNavigate();

    return (
        <ContainerCirculo onClick={() => navigate("./destination")}>
            <p>Explore</p>
        </ContainerCirculo>
    )
}

export default circulo