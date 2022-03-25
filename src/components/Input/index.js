import './index.css'

const Input = (props) => {
    const {text} = props;
    console.log({text})
    return (
        <div className='result-container'>
            <p className="result-item" value={text}>{text}</p>
        </div>
    )
}

export default Input