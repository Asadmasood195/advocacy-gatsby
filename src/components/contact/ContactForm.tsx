import * as React from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useForm } from '../Common/hooks/useForm';

const ContactForm = () => {
    
    const { onChange, onSubmit, values, setValues } = useForm(submitHandler, {
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const contactFormSchema = yup.object().shape({
        name: yup.string().required('Please Enter a name'),
        email: yup.string().email('Please Enter a valid Email').required('Please Enter an Email'),
        phone: yup.string().required('Please Enter a Phone Number'),
        message: yup.string().required('Write a Message'),
    });

    function submitHandler() {
        console.log('submit');
    }

    const throwError = (e:any) => {
        e.preventDefault();
        throw Error('Component Error')
    }
    return (
        <Formik initialValues={values}
            validationSchema={contactFormSchema} 
            onSubmit={values => {
                console.log(values);
            }}>
            {({ errors, touched, values, handleChange }) => (
            <Form>
            <div className="mb-3">
            <label htmlFor="txt-name" className="form-label">
                Name <span className="red">*</span>
            </label>
            <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                name="name"
                id="txt-name"
                placeholder="Put your name here"
                value={values.name}
                onChange={handleChange}
            />
            {errors.name &&
            touched.name &&
            <span className="input-feedback">
                {errors.name}
            </span>}   
            </div>
            <div className="mb-3">
            <label htmlFor="txt-phone" className="form-label">
                Phone Number <span className="red">*</span>
            </label>
            <input
                type="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                name="phone"
                id="txt-phone"
                placeholder="Put your phone number here"
                value={values.phone}
                onChange={handleChange}
            />
            {errors.phone &&
            touched.phone &&
            <span className="input-feedback">
                {errors.phone}
            </span>}   
            </div>
            <div className="mb-3">
            <label htmlFor="txt-email" className="form-label">
                Email <span className="red">*</span>
            </label>
            <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="txt-email"
                name="email"
                placeholder="Put your email here"
                onChange={handleChange}
                value={values.email}
            />
            {errors.email &&
            touched.email &&
            <span className="input-feedback">
                {errors.email}
            </span>}   
            </div>
            <div className="mb-3">
            <label htmlFor="txt-message" className="form-label">
                Message <span className="red">*</span>{" "}
            </label>
            <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="txt-message"
                name="message"
                rows={3}
                value={values.message}
                placeholder="Put your message here"
                onChange={handleChange}
            ></textarea>
            {errors.phone &&
            touched.phone &&
            <span className="input-feedback">
                {errors.phone}
            </span>}   
            </div>
            <div className="mb-3 align-right">
            <button type="submit" className="btn btn-primary">
                SEND MESSAGE
            </button>
            </div>
        </Form>
        )}
    </Formik>
    )
}

export default ContactForm
