import { DescContainer, DescContent, DescButton } from './style/DescStyle';

function Desc({ title, subtitle, description, buttons, isDestination}) {
    return (
        <DescContainer isDestination={isDestination}>
            <DescContent isDestination={isDestination}>
                {buttons && buttons.map((button, index) => (
                    <DescButton key={index} onClick={button.onClick}>
                        {button.label}
                    </DescButton>
                ))}
                {title && <h2>{title}</h2>}
                {subtitle && <h1>{subtitle}</h1>}
                {description && <p>{description}</p>}
            </DescContent>
        </DescContainer>
    )
}

export default Desc