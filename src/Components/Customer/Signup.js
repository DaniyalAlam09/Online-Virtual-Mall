import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Navbar from "../Genral/Navbar";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    console.log(firstName, lastName, email, password);
    fetch("http://localhost:4000/users/registration", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        if (user.message == "success") {
          toast("Successfull Registered");
          window.localStorage.setItem("token", user.data);
          console.log(user.password);
          // window.location.href = "/account";
        } else if (user.message == "user Already exist") {
          toast.error("User Already exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (user.message == "All Feild must be filled") {
          toast.error("Too Short Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (user.message == "Email is not valid") {
          toast.error("Email is not valid", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (user.message == "password is not strong enough") {
          toast.error("password is not strong enough", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Wrong Inputs", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  }
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <div class="wrapper container heading">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src="/images/Account.png"
                alt="Image"
                className="img-fluid "
              />
            </div>
            <div class="inner">
              <form onSubmit={this.handleSubmit}>
                <h3>
                  {" "}
                  Become member of <strong>OVM</strong>
                </h3>
                <Link className="" to="/shopowner-account">
                  Register as Shop Owner?
                </Link>
                <div class="form-group mt-2">
                  <div class="form-wrapper mb-2">
                    <label for="">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                  </div>
                  <div class="form-wrapper mb-2">
                    <label for="">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="form-wrapper mb-2 form-group required">
                  <label class="control-label" for="">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div class="form-wrapper mb-2 form-group required">
                  <label class="control-label" for="">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <p className="error">
                    Use atleast a <strong>Capital letter</strong> a{" "}
                    <strong>number</strong> and a{" "}
                    <strong>special chracter</strong>
                  </p>
                </div>
                {/* <div class="form-wrapper mb-2">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" />
              </div> */}
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" /> I accept the Terms of Use and
                    Privacy Policy.
                    <span class="checkmark"></span>
                  </label>
                </div>
                <button
                  type="submit"
                  class="buttons btn text-white btn-block btn-primary"
                >
                  Register Now
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Signup;
