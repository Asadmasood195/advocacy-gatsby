import * as React from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Link } from 'gatsby'
import regStep from "../../Assests/reg-step.png"
import { useForm } from '../Common/hooks/useForm';

const RegisterForm = () => {
    
    const { onChange, onSubmit, values, setValues } = useForm(submitHandler, {
        first_name: '',
        last_name: '',
    });

    const registerFormSchema = yup.object().shape({
        first_name: yup.string().required('Please Enter First Name'),
        last_name: yup.string().required('Please Enter Last Name'),
        email: yup.string().required('Please Enter an Email'),
    });

    function submitHandler() {
        console.log('submit');
    }

    return (
        <Formik initialValues={values}
        validationSchema={registerFormSchema} 
        onSubmit={values => {
            console.log(values);
        }}>
        {({ errors, touched, values, handleChange }) => (
        <Form>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Registration</h2>
                <div className="loginImage">
                    <img src={regStep} alt="reg-step" />
                </div>
                <div className="box2">
                    Thank you for starting the registration process on
                    Advocacy.biz by Capitol Enquiry. The registration process
                    for our website requires you complete the form below and
                    then confirm your email address before you can activate
                    your account. This is a quick process that ensures our
                    customers can get copies of their receipts and
                    notifications of shipment.
                </div>
                <p>
                    <b>STEP 1</b>
                </p>
                <div className="form-group">
                    <label htmlFor="ch-firstname">
                    First Name <span className="red">*</span>
                    </label>
                    <input
                    type="text"
                    className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                    id="ch-firstname"
                    placeholder="John"
                    name="first_name"            
                    value={values.first_name}
                    onChange={handleChange}
                    />
                    {errors.first_name &&
                    touched.first_name &&
                    <span className="input-feedback">
                        {errors.first_name}
                    </span>}   
                </div>
                <div className="form-group">
                    <label htmlFor="ch-lastname">
                    Last Name <span className="red">*</span>
                    </label>
                    <input
                    type="text"
                    className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                    id="ch-lastname"
                    placeholder="Doe"
                    name="last_name"            
                    value={values.last_name}
                    onChange={handleChange}
                    />
                    {errors.last_name &&
                    touched.last_name &&
                    <span className="input-feedback">
                        {errors.last_name}
                    </span>}   
                </div>
                <div className="form-group">
                    <label htmlFor="ch-username">
                    Username or email <span className="red">*</span>
                    </label>
                    <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="ch-username"
                    placeholder="email@example.com"
                    name="email"            
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email &&
                    touched.email &&
                    <span className="input-feedback">
                        {errors.email}
                    </span>}   
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
                </div>
            </div>
            <p>
                <Link to="/forgot">Lost your password</Link>
            </p>
            </div>
            </Form>
        )}
    </Formik>
    )
}

export default RegisterForm
