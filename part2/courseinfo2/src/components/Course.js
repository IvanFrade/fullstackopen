import React from "react"

const Course = ({ course }) => (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>
  )
  
const Header = ({ course }) => <h2>{course.name}</h2>
  
const Total = ({ course }) => {
    const sum = course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0)
    return(
      <p>Total of {sum} exercises</p>
    ) 
}
  
const Content = ({ course }) => (
    <div>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
)
  
const Part = (props) => (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
)

export default Course