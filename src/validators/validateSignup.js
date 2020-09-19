export default function validateSignup(values) {
    let errors = {};

    //Name Errors
    if (!values.name) {
        errors.name = "A username is required.";
    }

    //Email Errors
    if (!values.email) {
        errors.email = "Your Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Please input a valid Email.";
    }

    //Password Errors
    if (!values.password) {
        errors.password = "A password is required.";
    } else if (values.password.length < 6) {
        errors.password = "The password must be at least 6 charecters long.";
    }

    return errors;
}