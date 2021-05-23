import React, { Component } from 'react'

export default class CreateAccount extends Component {

    state={
        userName:"",
        email:"",
        phNo:"",
        sName:"",
        pwd:""
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle submit");
        console.log(this.state);
        localStorage.setItem(this.state.user , JSON.stringify(this.state));
        this.setState({
            userName:"",
            email:"",
            phNo:"",
            sName:"",
            pwd:""
        })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div className="container card mt-5 col-6">
            <form className="card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputUsername" class="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputUsername"
                  aria-describedby="emailHelp"
                  value={this.state.userName}
                  onChange={this.handleChange}
                  name="userName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhoneNo" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPhoneNo"
                  aria-describedby="emailHelp"
                  value={this.state.phNo}
                  onChange={this.handleChange}
                  name="phNo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputsname" class="form-label">
                  Screen Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputsname"
                  value={this.state.sName}
                  onChange={this.handleChange}
                  name="sName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={this.state.pwd}
                  onChange={this.handleChange}
                  name="pwd"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )
    }
}
