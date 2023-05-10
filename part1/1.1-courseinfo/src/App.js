
//child of App
const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

//child of Content
const Parts = ({name, exercises}) => {
  return (
    <>
      <p>Course {name} has {exercises} exercises</p>
    </>
  )
}

//child of App
const Content = (props) => {
  const parts = props.parts.map((object, key) => {
    const { name, exercises } = object;
    // console.log(name, exercises)
    return <Parts key={key} name={name} exercises={exercises} />
  })

  return (
    <div>
      {parts}
    </div>
  )
}

//child of App
const Total = (props) => {
  const onlyExercises = [];
  props.total.forEach(object => {
    onlyExercises.push(object.exercises);
  });
  //reducing new array to one value by addind each of its items
  const total = onlyExercises.reduce((previous, current) => previous + current );
  return (
    <div>
      <p>Total number of exercises is {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 6
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </>
  );
}

export default App;
