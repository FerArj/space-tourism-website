import style from './Content.module.css'

function content ({image}){
    return(
        <div className={style.contentContainer}>
            <h2>Pick your destination</h2>
            <img className={style.planet} src={image} alt="" />
        </div>
    )
}

export default content