import * as React from 'react'
import { Link } from 'gatsby'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useForm } from '../Common/hooks/useForm';

const LoginForm = () => {

    const { onChange, onSubmit, values, setValues } = useForm(submitHandler, {
        email: '',
        password: '',
    });

    const loginFormSchema = yup.object().shape({
        email: yup.string().email('Please Enter a valid Email').required('Please Enter an Email'),
        password: yup.string().required('Please Enter The Password'),
    });

    function submitHandler() {
        console.log('submit');
    }

    return (
        
        <Formik initialValues={values}
            validationSchema={loginFormSchema} 
            onSubmit={values => {
                console.log(values);
            }}>
            {({ errors, touched, values, handleChange }) => (
            <Form>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Log In</h2>
                <div className="form-group">
                    <label htmlFor="ch-username">
                    Username or email <span className="red">*</span>
                    </label>
                    <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="ch-username"
                    aria-describedby="emailHelp"
                    placeholder="Your Username or email"
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
                <div className="form-group">
                    <label htmlFor="ch-password">
                    Password <span className="red">*</span>
                    </label>
                    <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="ch-password"
                    aria-describedby="emailHelp"
                    placeholder="Your Password"
                    name="password"            
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password &&
                    touched.password &&
                    <span className="input-feedback">
                        {errors.password}
                    </span>}   
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                <button type="submit" className="btn btn-primary">
                    Log In
                </button>
                </div>
                <div className="col-lg-10">
                <div className="form-group">
                    <label htmlFor="ch-remember-me">
                    <input
                        type="checkbox"
                        id="ch-remember-me"
                        placeholder=""
                    />
                    {" Remember Me "}
                    </label>
                </div>
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

export default LoginForm
