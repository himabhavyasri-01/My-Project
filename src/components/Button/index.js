import './index.css'

const Button = (props) => {
    const {text, handleClick} = props;

    const click = () => {
        handleClick(text)
    }
    
    let className = (text === "=") ? "enter" : "button"
    return (
        <button className={className} value={text} onClick={click}>{text}</button>
    )
}

export default Button