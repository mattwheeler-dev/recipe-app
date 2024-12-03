const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="ingredient"  placeholder="Enter ingredient" aria-label="Add ingredient" />
        <button>Add Ingredient</button>
    </form>
}

export default Form;