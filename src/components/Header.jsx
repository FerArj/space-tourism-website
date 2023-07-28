import { useNavigate } from 'react-router-dom';
import { Menu } from './style/HeaderStyle';

function header() {
    const navigate  = useNavigate();

    return (
        <>
            <Menu>
                <ul>
                    <li onClick={() => navigate("/")}><span>00</span>Home</li>
                    <li onClick={() => navigate("/destination")}><span>01</span>Destination</li>
                    <li onClick={() => navigate("/crew")}><span>02</span>Crew</li>
                    <li><span>03</span>Technology</li>
                </ul>
            </Menu>
        </>
    )
}

export default header;