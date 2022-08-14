import React, {Component} from 'react'
import '../../components/App.css';
import '../../components/Responsive.css'
import '../../components/App.scss';
import {Link} from 'react-router-dom'

export class login extends Component {
    render() {
        return (
            <section className="login bg-light">
                <div className="login-box ">
                    <div className=" text-center">
                        <h2 className="margin-top-0 text-light headers">
                            <i className="fas fa-caret-left"></i>&nbsp; Login &nbsp;<i className="fas fa-caret-right"></i>
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

                        <div className="signup">
                            <a href="/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Login in 
                            </a>
                        </div>
                        <div className="switchlabel ">
                            <Link to="/register" className="hvr-wobble-top">
                                Create Account
                            </Link>

                        </div>
                    </form>
                </div>
                </section>
        )
    }
}

export default login;