import * as React from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Link } from "gatsby"
import ArrowRight16 from "../../assests/octicons/arrow-right-16.svg"
import CrdVisa from "../../assests/octicons/crd-visa.svg"
import CrdMaster from "../../assests/octicons/crd-master.svg"
import CrdAe from "../../assests/octicons/crd-ae.svg"
import CrdDisc from "../../assests/octicons/crd-disc.svg"
import CrdDc from "../../assests/octicons/crd-dc.svg"
import CrdJcb from "../../assests/octicons/crd-jcb.svg"
import CardEcheck from "../../assests/octicons/card-echeck.svg"
import EchInfo from "../../assests/ech-info.webp"
import { useForm } from '../common/hooks/useForm';
import Billing from './Billing';

const CheckOutForm = () => {
    const { onChange, onSubmit, values, setValues } = useForm(submitHandler, {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        company_name: '',
        country: '',
        city: '',
        state: '',
        zip: '',
        street_address: '',
        notes: '',
        sales_tax: '',
        customer_number: '',
        po_number: '',
        card_number: '',
        expiration: '',
        card_security: '',
        e_check: 'Checking',
        terms: false,
    });

    const loginFormSchema = yup.object().shape({
        email: yup.string().email('Please Enter a valid Email').required('Please Enter an Email'),
        password: yup.string().required('Password Is Required'),
        first_name: yup.string().required('First Name Is Required'),
        last_name: yup.string().required('Last Name Is Required'),
        phone: yup.string().required('Phone No. Is Required'),
        country: yup.string().required('Country Is Required'),
        city: yup.string().required('City Is Required'),
        state: yup.string().required('State Is Required'),
        zip: yup.string().required('ZIP Code Is Required'),
        street_address: yup.string().required('Street Address Is Required'),
        card_number: yup.string().required('Card Number Is Required'),
        expiration: yup.string().required('Expiration Date Is Required'),
        card_security: yup.string().required('Security no. Is Required'),
        terms: yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
    });

    function submitHandler() {
        console.log('submit');
    }

    return (
        <>
        <Formik initialValues={values}
            validationSchema={loginFormSchema} 
            onSubmit={values => {
                console.log(values);
            }}>
            {({ errors, touched, values, handleChange }) => (
            <Form>
              <div className="container">
                <div className="row" id="return-customer">
                  <div className="col-md-12">
                    <form method="post">
                      <p className="box1">
                        Returning customer?{" "}
                        <Link to="#" className="ch-show-login">
                          Click here to login
                        </Link>
                      </p>
                      <div
                        className="card"
                        id="login-form"
                        style={{ display: "none" }}
                      >
                        <div className="card-body">
                          <p>
                            If you have shopped with us before, please enter
                            your details below. If you are a new customer,
                            please proceed to the Billing section.
                          </p>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="ch-username">
                                  Username or email{" "}
                                  <span className="red">*</span>
                                </label>
                                <input
                                  type="text"
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
                            </div>
                            <div className="col">
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
                                  />{" "}
                                  Remember Me
                                </label>
                              </div>
                            </div>
                          </div>
                          <p>
                            <Link to="/forgot">Lost your password</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row" id="billing-details">
                  <div className="col-md-6">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="ch-first-name">
                            First Name <span className="red">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                            id="ch-first-name"
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
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="ch-last-name">
                            Last Name <span className="red">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                            id="ch-last-name"
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
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-company-name">
                        Company name (Optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="ch-company-name"
                        placeholder=""
                        name="company_name"            
                        value={values.company_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-country">
                        Country/Region <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                        id="ch-country"
                        placeholder=""
                        name="country"            
                        value={values.country}
                        onChange={handleChange}
                      />
                      {errors.country &&
                        touched.country &&
                        <span className="input-feedback">
                            {errors.country}
                        </span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-street-addr">
                        Street Address <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.street_address ? 'is-invalid' : ''}`}
                        id="ch-street-addr"
                        placeholder=""
                        name="street_address"            
                        value={values.street_address}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="ch-street-addr2"
                        placeholder=""
                      />
                      {errors.street_address &&
                        touched.street_address &&
                        <span className="input-feedback">
                            {errors.street_address}
                        </span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-town">
                        Town/City <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                        id="ch-town"
                        placeholder=""
                        name="city"            
                        value={values.city}
                        onChange={handleChange}
                      />
                      {errors.city &&
                        touched.city &&
                        <span className="input-feedback">
                            {errors.city}
                        </span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-state">
                        State <span className="red">*</span>
                      </label>
                      <select className={`form-control ${errors.state ? 'is-invalid' : ''}`} id="ch-state"
                        name="state"            
                        value={values.state}
                        onChange={handleChange}>
                        <option>California</option>
                      </select>
                      {errors.state &&
                        touched.state &&
                        <span className="input-feedback">
                            {errors.state}
                        </span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-zip">
                        Zip <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                        id="ch-zip"
                        placeholder=""
                        name="zip"            
                        value={values.zip}
                        onChange={handleChange}
                      />
                      {errors.zip &&
                        touched.zip &&
                        <span className="input-feedback">
                            {errors.zip}
                        </span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-phone">
                        Phone <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="ch-phone"
                        placeholder=""
                        name="phone"            
                        value={values.phone}
                        onChange={handleChange}
                      />
                      {errors.phone &&
                        touched.phone &&
                        <span className="input-feedback">
                            {errors.phone}
                        </span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ch-email">
                        Email Address <span className="red">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="ch-email"
                        placeholder=""
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
                      <label htmlFor="ch-create-acc">
                        <input
                          type="checkbox"
                          id="ch-create-acc"
                          placeholder=""
                        />{" "}
                        Create an Account ?
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="ch-diff-add">
                        <h3>
                          <input
                            type="checkbox"
                            id="ch-diff-add"
                            placeholder=""
                          />{" "}
                          Ship to different Address
                        </h3>
                      </label>
                    </div>
                    <div id="shipping-address" style={{ display: "none" }}>
                      <p>
                        <Link to="#" className="btn btn-primary">
                          Copy and Use Billing Details
                        </Link>
                      </p>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="ch-first-name2">
                              First Name <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                              id="ch-first-name2"
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
                        </div>
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="ch-last-name2">
                              Last Name <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                              id="ch-last-name2"
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
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-company-name2">
                          Company name (Optional)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ch-company-name2"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-country2">
                          Country/Region <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                          id="ch-country2"
                          placeholder=""
                          name="country"            
                            value={values.country}
                            onChange={handleChange}
                        />
                        {errors.country &&
                          touched.country &&
                          <span className="input-feedback">
                              {errors.country}
                          </span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-street-addr_">
                          Street Address <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.street_address ? 'is-invalid' : ''}`}
                          id="ch-street-addr_"
                          placeholder=""
                          name="street_address"            
                          value={values.street_address}
                          onChange={handleChange}
                        />
                        {errors.street_address &&
                          touched.street_address &&
                          <span className="input-feedback">
                              {errors.street_address}
                          </span>}
                        <input
                          type="text"
                          className="form-control"
                          id="ch-street-addr3"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-town2">
                          Town/City <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                          id="ch-town2"
                          placeholder=""
                          name="city"            
                          value={values.city}
                          onChange={handleChange}
                        />
                        {errors.city &&
                          touched.city &&
                          <span className="input-feedback">
                              {errors.city}
                          </span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-state2">
                          State <span className="red">*</span>
                        </label>
                        <select className={`form-control ${errors.state ? 'is-invalid' : ''}`} id="ch-state2"
                        name="state"            
                        value={values.state}
                        onChange={handleChange}>
                          <option>California</option>
                        </select>
                        {errors.state &&
                        touched.state &&
                        <span className="input-feedback">
                            {errors.state}
                        </span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-zip2">
                          Zip <span className="red">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                          id="ch-zip2"
                          placeholder=""
                          name="zip"            
                          value={values.zip}
                          onChange={handleChange}
                        />
                        {errors.zip &&
                        touched.zip &&
                        <span className="input-feedback">
                            {errors.zip}
                        </span>}
                      </div>
                    </div>
                    <div id="additional-fields1">
                      <div className="form-group">
                        <label htmlFor="ch-order-notes">
                          Order Notes (Optional){" "}
                        </label>
                        <textarea
                          className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
                          id="ch-order-notes"
                          placeholder="Notes about your order e.g special notes for delivery"
                          name="notes"            
                          value={values.notes}
                          onChange={handleChange}
                        ></textarea>
                        {errors.notes &&
                        touched.notes &&
                        <span className="input-feedback">
                            {errors.notes}
                        </span>}
                      </div>
                      <div id="customer-fields">
                        <label>Customer Fields</label>
                        <div className="card">
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="ch-sales-tax">
                                Sales Tax (Optional){" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-sales-tax"
                                placeholder="Sales Tax"
                              />
                            </div>
                            <div className="form-group">
                              <p>
                                if you are exempt from state sales tax, please
                                enter your state-issued tax exempt number here
                              </p>
                              <label htmlFor="ch-std-odr">
                                <input type="checkbox" id="ch-std-odr" /> Make
                                this a standing order. We will contact you to
                                confirm prior to shipping. (optional)
                              </label>
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-cust-num">
                                Customer Number (optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-cust-num"
                                placeholder="Customer Number"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-po-num">
                                PO Number (optional)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-po-num"
                                placeholder="PO Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Billing />
                <div className="row" id="choose-payment">
                  <div className="col-md-12">
                    <div className="box2">
                      <div className="form-group">
                        <label htmlFor="ch-creditcard">
                          <input
                            type="radio"
                            id="ch-creditcard"
                            name="payment"
                            checked
                          />{" "}
                          Credit Card <br />
                        </label>
                        <div className="card-logo">
                          <CrdVisa className="svg" />
                          <CrdMaster className="svg" />
                          <CrdAe className="svg" />
                          <CrdDisc className="svg" />
                          <CrdDc className="svg" />
                          <CrdJcb className="svg" />
                        </div>

                        <div className="card">
                          <p>Pay securely using your credit card.</p>
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="ch-card-num">
                                Card Number <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${errors.card_number ? 'is-invalid' : ''}`}
                                id="ch-card-num"
                                placeholder="**** **** **** ****"
                                name="card_number"            
                                value={values.card_number}
                                onChange={handleChange}
                              />
                              {errors.card_number &&
                                touched.card_number &&
                                <span className="input-feedback">
                                    {errors.card_number}
                                </span>}
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-expiration">
                                Expiration (MM/YY){" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${errors.expiration ? 'is-invalid' : ''}`}
                                id="ch-expiration"
                                placeholder="MM/YY"
                                name="expiration"            
                                value={values.expiration}
                                onChange={handleChange}
                              />{errors.expiration &&
                                touched.expiration &&
                                <span className="input-feedback">
                                    {errors.expiration}
                                </span>}
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-csc">
                                Card Security Code{" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${errors.card_security ? 'is-invalid' : ''}`}
                                id="ch-csc"
                                placeholder="CSC"
                                name="card_security"            
                                value={values.card_security}
                                onChange={handleChange}
                              />{errors.card_security &&
                                touched.card_security &&
                                <span className="input-feedback">
                                    {errors.card_security}
                                </span>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-echeck">
                          <input type="radio" id="ch-echeck" name="payment" />{" "}
                          eCheck{" "}
                          <span className="card-logo">
                            <CardEcheck />
                          </span>
                        </label>
                        <div className="card" style={{ display: "none" }}>
                          <p>Pay securely using your credit card.</p>
                          <p className="info-check" style={{ display: "none" }}>
                            <img src={EchInfo} alt="" />
                          </p>
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="ch-routing-num">
                                Routing Number{" "}
                                <ArrowRight16 className="show-echeck-info" />{" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-routing-num"
                                placeholder="*********"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-account-num">
                                Account Number{" "}
                                <ArrowRight16 className=" show-echeck-info" />{" "}
                                <span className="red">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="ch-account-num"
                                placeholder=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ch-chk-num">
                                Account Type{" "}
                                <ArrowRight16 className=" show-echeck-info" />{" "}
                                <span className="red">*</span>
                              </label>
                              <select className={`form-control ${errors.e_check ? 'is-invalid' : ''}`} id="ch-chk-num">
                                <option>Checking</option>
                                <option>Saving</option>
                              </select>
                              {errors.e_check &&
                                touched.e_check &&
                                <span className="input-feedback">
                                    {errors.e_check}
                                </span>}
                            </div>
                          </div>
                          <p>
                            By clicking the button below, I authorize Capitol
                            Enquiry to charge my bank account on August 12, 2021
                            for the amount of $326.20.
                          </p>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="ch-sendinv">
                          <input type="radio" id="ch-sendinv" 
                          name="e_check"            
                          value={values.e_check}
                          onChange={handleChange}/>{" "}
                          Send Invoice
                        </label>
                        <div className="card" style={{ display: "none" }}>
                          <div className="card-body">Payment Information</div>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group">
                        <label htmlFor="ch-accept">
                          <input type="checkbox" 
                          id="ch-accept" 
                          name="terms"
                          checked={values.terms ? true : false }
                          onClick={handleChange}
                          /> I have read
                          and accept the{" "}
                          <Link to="/terms">terms, conditions</Link> and{" "}
                          <Link to="/privacy">privacy policy</Link> as well as{" "}
                          <Link to="https://www.govbuddy.com/about/tos/">
                            Govbuddy terms, conditions
                          </Link>{" "}
                          and{" "}
                          <Link to="https://www.govbuddy.com/about/privacy/">
                            Govbuddy privacy policy
                          </Link>
                        </label>
                        {errors.terms &&
                        touched.terms &&
                        <span className="input-feedback">
                            {errors.terms}
                        </span>}
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
              </Form>
            )}
        </Formik>   
        </>
    )
}

export default CheckOutForm
