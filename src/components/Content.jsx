import { ContentContainer } from "./style/ContentStyle";

function content ({image, titleContent}){
    return(
        <ContentContainer>
            {titleContent && <h2>{titleContent}</h2>}
            {image && <img src={image} alt="" />}
        </ContentContainer>
    )
}

export default content