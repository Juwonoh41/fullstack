import Header from './header'
import Content from './content'
import Total from './total'

const Course = () => {
    const course = [
        {
      name: 'Half Stack application development',
      parts:[
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    
    ]
    return(
        <div>
        <h1>Web development Curriculum</h1>
        <Header course= {course[0].name}/>
        <Content props = {course[0].parts}/>
        <Total props={course[0].parts}/>
        <Header course = {course[1].name}/>
        <Content props = {course[1].parts}/>
        <Total props = {course[1].parts}/>
        </div>
        
    )
}

export default Course