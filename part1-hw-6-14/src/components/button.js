const Button = ({text, event}) => {
    return(
        <span>
            <button onClick = {event}>{text}</button>
        </span>
    )
}

export default Button