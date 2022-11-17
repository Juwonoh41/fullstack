const Button =({random, text})=>{
    return(
        <span>
            <button onClick={random}>{text}</button>
        </span>
    )
}

export default Button