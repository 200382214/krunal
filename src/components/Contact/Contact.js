import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as emailjs from 'emailjs-com'

/***********************
  Contact Component
 ***********************/

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		  type: ""
		};
	
		this.handleDropdownChange = this.handleDropdownChange.bind(this);
	  }
  state = {
	email: '',
	name: '',
	number: '',
	city: '',
	date: '',
	type: '',
  }
  handleDropdownChange(e) {
    this.setState({ type: e.target.value });
  }

  handleSubmit(e) {
		e.preventDefault()
		const {email, name, number, city, date, type} = this.state
		let templateParams = {
			from_email: email,
			from_name: name,
			from_number: number,
			from_city: city,
			_date: date,
			_service: type,
			to_name: 'Kunal',
		}
		//emailjs.send("service_v5n544u","template_8grhnJRh");
		emailjs.send(
			'service_v5n544u',
			'template_8grhnJRh',
			templateParams,
			'user_LZpCELjZBVGE1nvhqLa6I'
			
		).then((response) => {
			ReactDOM.render(<div className="alert alert-success">
			<strong>Success! </strong>Your message has been sent successfully.</div>, document.getElementById('success'));
			},
			(error) => {
				console.log(error);
			}
		)
		this.resetForm()
  }

  resetForm() {
    this.setState({
		email: '',
		name: '',
		number: '',
		city: '',
		date: '',
		type: '',
    })
  }
  handleChange = (param, e) => {
		this.setState({ [param]: e.target.value })
	}


	render() {

		
		return (
			<section id="contact" className="text-light bg-dark">
				<div className="container ">
					<div className="row ">
						<div className="col-lg-8 col-lg-offset-2 text-center wow animate__animated animate__fadeInUp"  data-wow-delay=".3s">
						<h2 className="margin-top-0 text-light headers">
							<i className="fas fa-caret-left"></i>&nbsp; Get in Touch &nbsp;<i className="fas fa-caret-right"></i>
						</h2>
							<hr className="light wow animate__animated animate__flash"  data-wow-delay=".3s" />
						</div>
						<div className="col-lg-10 col-lg-offset-1 text-center">
						<div id="success" className="p-3"></div>
							<form className="contact-form row" onSubmit={this.handleSubmit.bind(this)}>
							
								<div className="col-md-6">
									<label></label>
									<input type="text" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Full Name" required/>
								</div>
								<div className="col-md-6">
									<label></label>
									<input type="text" className="form-control" value={this.state.number} onChange={this.handleChange.bind(this, 'number')} maxLength='10' pattern="\d+"  placeholder="Phone" required/>
								</div>
								<div className="col-md-4">
									<label></label>
									<input type="text" className="form-control" value={this.state.city} onChange={this.handleChange.bind(this, 'city')} placeholder="Enter a city where you want Service " required/>
								</div>
								<div className="col-md-4">
									<label></label>
									<input type="date" className="form-control" value={this.state.date} onChange={this.handleChange.bind(this, 'date')} placeholder="Enter a date When you want Service " required/>
								</div>
								<div className="col-md-4">
									<label></label>
									<select name="type" id="type" className="form-control" value={this.state.type} onChange={this.handleDropdownChange} placeholder="Select a service type">
										<option value="default">Select your service...</option>
										<option value="Wedding">Wedding</option>
										<option value="Pre-Wedding">Pre-Wedding</option>
										<option value="Engagement">Engagement</option>
									</select>
								
								<input type="text" className="hidden" value={this.state.type} onChange={this.handleChange.bind(this, 'type')}/>

								</div>
								<div className="col-md-12">
									<label></label>
									<input type="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" required/>
								</div>
								<div className="col-md-4 col-md-offset-4 ">
									<label></label>
									<button type="submit" id="submit" value="submit" className=" form-control hvr-reveal btn btn-primary btn-lg text-light">Send</button>
								</div>
                			</form>
						</div>
					</div>
				</div>
    		</section>
		);
	}
};
export default Contact;