const Course = ({ course }) => (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts
        .reduce((sum, part) => sum + part.exercises, 0)}
      />
    </div>
)
  
const Header = ({ text }) => <h1>{text}</h1>
  
const Content = ({ parts }) => (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part} />
        )}
    </>
)
  
const Part = ({ id, part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
)
  
const Total = ({ total }) => <p>Number of exercises {total}</p>

export default Course