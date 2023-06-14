export default function Validation(values){

    const errors = {}

    const emailPattern = /^[a\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === "") {
        errors.email = "Email is Required"
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email did not Match"
    }

    if(values.password === "") {
        errors.password = "Password Required"
    } else if (!passwordPattern.test(values.password)){
        errors.password = "Password must nt be less than 8 char"
    }

    return errors;
}