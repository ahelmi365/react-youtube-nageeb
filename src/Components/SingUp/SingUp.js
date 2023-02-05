import React from 'react';
import './SingUp.css'
export default function SingUp() {
    const [firstname, setFirstname] = React.useState();


    return (
        <div className="container">
            <div className="signup-container">
                <div className="signup-header">
                    <h2 className='signup-header-title'>Create a new account</h2>
                    <p className='signup-header-text'>It's quick and easy.</p>
                </div>
                <div className="signup-form">

                    <form action="" method="post">

                        <div className="signup-form-username form-field">
                            <input type="text" name="firstname" placeholder="First name" />
                            <input type="text" name="surname" placeholder="Surname" />
                        </div>

                        <div className="signup-form-email form-field full-form-field">
                            <input type="email" name="email" placeholder="Email" />
                        </div>

                        <div className="signup-form-passowrd form-field full-form-field">
                            <input type="passowrd" name="passowrd" placeholder="Password" />
                        </div>
                        <div className="signup-form-birthdate form-field">
                            <p>Date of birth</p>
                            <input type="date" name="birthdate" />
                        </div>
                        <div className="signup-form-gender form-field">
                            <p>Gender</p>
                            <div className="signup-form-gender-options">
                                <div className="gender-male gender-option">
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="male" value="male" />
                                </div>
                                <div className="gender-female gender-option">
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" name="gender" id="female" value="female" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}