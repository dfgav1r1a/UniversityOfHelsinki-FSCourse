import Header from "./Header";
import Content from "./Content";

const Course = ({courses}) => {
    console.log(courses);
    return (
        <div>
            <Header  title={courses[0].name}/>
            <Content parts={courses[0].parts}/>
            <Header  title={courses[1].name}/>
            <Content parts={courses[1].parts}/>
        </div>
    )
}

export default Course