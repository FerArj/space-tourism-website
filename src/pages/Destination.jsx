import Header from '../components/Header'
import Content from '../components/Content'
import style from './Destination.module.css'
import customDescContainerStyle from '../components/DescAlign.module.css'
import customDescStyle from '../components/DescAlign.module.css'
import Desc from '../components/Desc'
import React, {useState} from 'react'

function Destination() {
    const [subtitle, setSubtitle] = useState("Moon");
    const [description, setDescription] = useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");

    const descriptionMap = {
        Moon: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", 
        Mars: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        Europa: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        Titan: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    }

    const handleButtonClick = (buttonLabel) => {
        setSubtitle(buttonLabel);
        setDescription(descriptionMap[buttonLabel]);
    }

    return (
        <div className={style.destinationContainer}>
            <Header />
            <div className={style.content}>
                <Content />
                <Desc 
                    buttons={[
                        { label: 'Moon', onClick: () => handleButtonClick('Moon') },
                        { label: 'Mars', onClick: () => handleButtonClick('Mars') },
                        { label: 'Europa', onClick: () => handleButtonClick('Europa') },
                        { label: 'Titan', onClick: () => handleButtonClick('Titan') },
                      ]}
                    subtitle={subtitle}
                    description={description}
                    customDescContainer={customDescContainerStyle.descContainerPosition}
                    customDesc={customDescStyle.descPosition}

                />
            </div>
        </div>
    )
}

export default Destination