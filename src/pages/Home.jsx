import Desc from '../components/Desc'
import Header from '../components/Header'
import style from './Home.module.css'
import Circulo from '../components/Circulo'

function home() {
    return (
        <div className={style.homeContainer}>
            <Header />
            <div className={style.content}>
                <Desc />
                <Circulo />
            </div>
        </div>
    )
}

export default home