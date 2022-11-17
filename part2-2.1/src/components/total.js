const Total =({ props}) => {
    let totalSum = props.reduce((sum, {exercises}) => sum += exercises,0)
    return(
        <div>
            <h4>total of {totalSum} exercises</h4>
        </div>
    )
}

export default Total