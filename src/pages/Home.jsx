import Desc from '../components/Desc'
import Header from '../components/Header'
import Circulo from '../components/Circulo'
import { HomeContainer, Content} from './style/HomeStyle'

function home() {
    return (
        <HomeContainer> 
            <Header/>
            <Content>
                <Desc 
                    title="So, you want to travel to"
                    subtitle="Space"
                    description="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
                />
            <Circulo />
            </Content>
        </HomeContainer>
    )
}

export default home