export default function validateCreateLink(values) {
    let errors = {};


    //Description Errors
    if (!values.description) {
        errors.description = "Your description is required.";
    } else if (values.description.length < 10) {
        errors.description = "The description cannot be less than 10 charecters.";
    }

    //url Errors
    if (!values.url) {
        errors.url = "A URL is required.";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
        errors.url = "The URL must be a valid one.";
    }

    return errors;
}