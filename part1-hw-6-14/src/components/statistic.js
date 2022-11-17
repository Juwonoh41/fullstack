import State from "./state"
import '../styles/statistics.css'
const Statistics = ({good, neutral, bad, all, average, positive}) => {

    return(
        
            <table id = 'state'>
                <tbody>
                    <State state = 'good' num = {good} />
                    <State state= 'neutral' num = {neutral}/>
                    <State state='bad' num = {bad}/>
                    <State state='all' num = {all}/>
                    <State state= 'average' num = {average}/>
                    <State state= 'positive' num = {positive}/>
                </tbody>
            </table>
        
    )

}

export default Statistics