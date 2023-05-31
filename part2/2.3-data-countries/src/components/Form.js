const Form = ({countries, setCountryQuery}) => {
    //handling form input
    const handleChange = e => {
        const query = e.target.value;
        setCountryQuery(query);
    };


    return (
        <section>
            <form>
                <label htmlFor="country">Find the country: </label>
                <input type="text" onChange={handleChange}/>
            </form>
        </section>
    );
}

export default Form;