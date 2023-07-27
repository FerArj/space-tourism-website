import Header from '../components/Header'
import style from './Crew.module.css'
import Desc from '../components/Desc'

function Crew (){
    return(
        <div className={style.crewContainer}>
            <Header/>
            <div className={style. content}>
                <Desc
                    title={"Commander"}
                    subtitle={"Douglas Hurley"}
                    description={"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."}
                />
            </div>
        </div>
    )
}

export default Crew