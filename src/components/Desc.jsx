import style from './Desc.module.css'

function Desc({ title, subtitle, description, customDescContainer, customDesc, buttons }) {
    return (
        <div className={`${style.descContainer} ${customDescContainer}`}>
            <div className={`${style.desc} ${customDesc}`}>
                {buttons && buttons.map((button, index) => (
                    <button key={index} onClick={button.onClick}>
                        {button.label}
                    </button>
                ))}
                {title && <h2>{title}</h2>}
                {subtitle && <h1>{subtitle}</h1>}
                {description && <p>{description}</p>}
            </div>
        </div>
    )
}

export default Desc