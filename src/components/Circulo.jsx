import { useNavigate } from 'react-router-dom'
import style from './Circulo.module.css'

function circulo() {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/destination")} className={style.containerCirculo}>
            <p>Explore</p>
        </div>
    )
}

export default circulo