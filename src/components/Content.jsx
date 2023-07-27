import style from './Content.module.css'

function content ({image, titleContent}){
    return(
        <div className={style.contentContainer}>
            {titleContent && <h2>{titleContent}</h2>}
            {image && <img className={style.planet} src={image} alt="" />}
        </div>
    )
}

export default content