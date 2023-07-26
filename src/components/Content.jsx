import img from '../assets/destination/image-moon.png'
import style from './Content.module.css'

function content (){
    return(
        <div className={style.contentContainer}>
            <h2>Pick your destination</h2>
            <img className={style.planet} src={img} alt="Moon" />
        </div>
    )
}

export default content