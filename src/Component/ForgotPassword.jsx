import React from 'react';
import './Registration/forgotpassword.css'

const ForgotPassword = () => {
    return (
        <>
        {/* <div></div> */}
        <div className="forgot-password-container">
            <div className="card">
                <div className="card-header h5 text-white bg-primary">Password Reset</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Enter your email address and we'll send you new password.
                    </p>
                    <div data-mdb-input-init className="form-outline">
                        <input type="email" id="typeEmail" className="form-control my-3" />
                        <label className="form-label" htmlFor="typeEmail">Email input</label>
                    </div>
                    <a href="#" data-mdb-ripple-init className="btn btn-primary w-100">Send password</a>
                    <div className="d-flex justify-content-between mt-4">
                    <a href="/signin" data-mdb-ripple-init className="btn btn-primary w-100">Go back</a>
                    <div className="d-flex justify-content-between mt-4"></div>                    
                        {/* <a href="/signin" className="btn btn-link">Login</a> */}
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default ForgotPassword;
