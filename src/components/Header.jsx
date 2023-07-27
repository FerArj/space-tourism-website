import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'

function header() {
    const navigate  = useNavigate();

    return (
        <>
            <div className={style.menu}>
                <ul>
                    <li onClick={() => navigate("/")}><span>00</span>Home</li>
                    <li onClick={() => navigate("/destination")}><span>01</span>Destination</li>
                    <li onClick={() => navigate("/crew")}><span>02</span>Crew</li>
                    <li><span>03</span>Technology</li>
                </ul>
            </div>
        </>
    )
}

export default header;