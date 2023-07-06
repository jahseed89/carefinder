
const Validation = (values) => {
  let errors = {}
//   const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if(!values.name) {
    errors.name = "Name is Required"
  } 

  if(!values.email) {
    errors.email = "Email is Required"
//   } else if(values.email !== emailRegx) {
//     errors.email = "Enter a Valid Email"
  } 

  if(!values.password) {
    errors.password = "Password is Required"
  } else if(values.password.length < 6) {
    errors.email = "Password must not be less than 6char..."
  } 

  return errors
}

export default Validation