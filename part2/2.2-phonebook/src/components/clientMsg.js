const SuccessMsg = ({successMsg}) => {
    return (
        <section className="success">
            <p>{successMsg}</p>
        </section>
    )
}

const Error = ({errorMessage}) => {
    return (
        <section className="error">
            <p>{errorMessage}</p>
        </section>
    )
}

export {
    Error,
    SuccessMsg,
}