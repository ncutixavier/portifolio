export default function validate(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'Name is required';
    }

    if (!values.comment.trim()) {
        errors.comment = 'Comment is required';
    }

    return errors
}