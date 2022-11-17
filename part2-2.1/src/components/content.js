
const Content = ({props}) => {
    return(
        <div>
            <div>{props.map((part, i )=> <p key = {i}>{part.name} {part.exercises}</p> )}</div>
        </div>
    )
    
}

export default Content