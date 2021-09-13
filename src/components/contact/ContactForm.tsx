import * as React from 'react'

const ContactForm = () => {
    const throwError = (e:any) => {
        e.preventDefault();
        throw Error('Component Error')
    }
    return (
        <form method="POST">
            <div className="mb-3">
            <label htmlFor="txt-name" className="form-label">
                Name <span className="red">*</span>
            </label>
            <input
                type="text"
                className="form-control"
                id="txt-name"
                placeholder="Put your name here"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="txt-phone" className="form-label">
                Phone Number <span className="red">*</span>
            </label>
            <input
                type="phone"
                className="form-control"
                id="txt-phone"
                placeholder="Put your phone number here"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="txt-email" className="form-label">
                Email <span className="red">*</span>
            </label>
            <input
                type="email"
                className="form-control"
                id="txt-email"
                placeholder="Put your email here"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="txt-message" className="form-label">
                Message <span className="red">*</span>{" "}
            </label>
            <textarea
                className="form-control"
                id="txt-message"
                rows={3}
                placeholder="Put your message here"
            ></textarea>
            </div>
            <div className="mb-3 align-right">
            <button type="submit" onClick={throwError} className="btn btn-primary">
                SEND MESSAGE
            </button>
            </div>
        </form>
    )
}

export default ContactForm
