import Header from '../components/Header'
import Desc from '../components/Desc'
import {CrewContainer} from './style/CrewStyle'

function Crew (){
    return(
        <CrewContainer>
            <Header/>
            <>
                <Desc 
                    title={"Commander"}
                    subtitle={"Douglas Hurley"}
                    description={"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."}
                />
            </>
        </CrewContainer>
    )
}

export default Crew