import Desc from '../components/Desc'
import Header from '../components/Header'
import style from './Home.module.css'
import Circulo from '../components/Circulo'

function home() {
    return (
        <div className={style.homeContainer}>
            <Header />
            <div className={style.content}>
                <Desc 
                    title="So, you want to travel to"
                    subtitle="Space"
                    description="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
                />
                <Circulo />
            </div>
        </div>
    )
}

export default home