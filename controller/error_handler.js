module.exports.handleErrors = (error) => {
    console.log(error.message, error.code);
        let errors = { email: "", password: "" }

        if(error.code == 11000) {
            errors.email = "email already exists";
            return errors;
        }
    
        if(error.message.includes("user validation failed")){
            Object.values(error.errors).forEach(({ properties }) => {
                errors[properties.path] = properties.message
            })
        }

        return errors;
}