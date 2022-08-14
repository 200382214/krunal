import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export class Register extends Component {
    render() {
        return (
            <section className="login">

            <div className="login-box">
                <div className=" text-center">
                    <h2 className="margin-top-0 text-light headers">
                        <i className="fas fa-caret-left"></i>&nbsp; Register &nbsp;<i className="fas fa-caret-right"></i>
                    </h2>
                </div>
                <form>

                    <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Confirm Password</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                   
                    <div className="signup">
                        <Link href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign up
                        </Link>
                    </div>
                    <div className="switchlabel">
                        <Link to="/login" className="hvr-wobble-top">
                            Already Registered?
                        </Link>

                    </div>

                </form>
            </div>
            </section>

        )
    }
}

export default Register
