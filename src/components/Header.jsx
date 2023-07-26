import style from './Header.module.css'

function header() {
    return (
        <>
            <div className={style.menu}>
                <ul>
                    <li><span>00</span>Home</li>
                    <li><span>01</span>Destination</li>
                    <li><span>02</span>Crew</li>
                    <li><span>03</span>Technology</li>
                </ul>
            </div>
        </>
    )
}

export default header;