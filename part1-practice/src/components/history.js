const History = (props) => {
    if(props.array.length === 0){
        return(
            <div>
                <p>The app is used by clicking the buttons</p>
            </div>
        )
    }else{
        return(
            <p>{props.array.join(' ')}</p>
        )
    }
}

export default History