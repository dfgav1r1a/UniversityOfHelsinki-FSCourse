//child of Content
const Totals = ({ parts}) => {
    return (
        <h5> This course has a total of {
                parts.reduce((previous, current) => {
                    // console.log(previous, current.exercises);
                    return previous + current.exercises;
                }, 0)} exercises.
        </h5>
    )
}

//child of Content
const Part = ({ parts }) => {
    return (
        <div>
            {parts.map(({ name, exercises, id }) => <p key={id}>{name} {exercises}</p>)}
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            <Part parts={parts} />
            <Totals parts={parts} />
        </>
    )
}
export default Content;