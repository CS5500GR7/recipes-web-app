import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import registerService from "../../services/user-service"

const Register = ({user}) => {

    const history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        email: '',
        phone: '',
        role: 'USER',
    })
    const [check, setCheck] = useState("");

    const onClickRegister = () => {
        registerService.register(credentials)
            .then((user) => {
                console.log(user)
                if (user === 0) {
                    //alert("username already taken")
                    setCheck("check0")
                }
                else if (user == 1) {
                    //alert("email is not valid")
                    setCheck("check1")
                } 
                else if (user == 2) {
                    //alert("age is not valid")
                    setCheck("check2")
                }
                else if (user == 3) {
                    //alert("must be 21 years old")
                    setCheck("check3")
                }
                else {
                    history.push("/login")
                }
            })
    }

    return (
        <div>
            <div className="container">
                <h1>
                    Sign Up
                </h1>
                {
                    user &&
                    <>
                        <div className='alert alert-info'>
                            You're already logged in
                        </div>
                        <button className='btn btn-warning'
                                onClick={() => history.goBack()}>
                            Go Back
                        </button>
                    </>
                }
                {
                    !user &&
                    <>
                        <form>

                            <div>
                                {
                                    check === "check0" &&
                                    <>
                                        <div className='alert alert-warning'>
                                            Username or Email is already taken. Please input a new username or email.
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    check === "check1" &&
                                    <>
                                        <div className='alert alert-warning'>
                                            Invalid email. Please input a valid email.
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    check === "check2" &&
                                    <>
                                        <div className='alert alert-warning'>
                                            Invalid age. Numbers 1-100 only.
                                        </div>
                                    </>
                                }
                            </div>
                            <div>
                                {
                                    check === "check3" &&
                                    <>
                                        <div className='alert alert-warning'>
                                            You must be at least 21 years old to use Drink Masters.
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="form-group row">
                                <label htmlFor="username" className="col-sm-2 col-form-label">
                                    Username </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.username}
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, username: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-sm-2 col-form-label">
                                    Firstname </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.firstName}
                                        className="form-control"
                                        placeholder="Firstname"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, firstName: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="lastName" className="col-sm-2 col-form-label">
                                    Lastname </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.lastName}
                                        className="form-control"
                                        placeholder="Lastname"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, lastName: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="age" className="col-sm-2 col-form-label">
                                    Age </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.age}
                                        className="form-control"
                                        placeholder="Age"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, age: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">
                                    Password </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.password}
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, password: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">
                                    Email </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.email}
                                        type="email"
                                        className="form-control"
                                        placeholder="email"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, email: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="address" className="col-sm-2 col-form-label">
                                    Address </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.address}
                                        type="address"
                                        className="form-control"
                                        placeholder="address"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, address: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label">
                                    Phone </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.phone}
                                        type="phone"
                                        className="form-control"
                                        placeholder="phone"
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, phone: e.target.value})
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label">
                                    Role </label>
                                <div className="col-sm-10">
                                    <select
                                        onChange={(e) => {
                                            setCredentials(
                                                {...credentials, role: e.target.value})
                                        }}
                                        value={credentials.role}>
                                        <option>ADMIN</option>
                                        <option>USER</option></select>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button onClick={onClickRegister} type="button" className="btn btn-warning btn-block">Sign up
                                    </button>
                                    <div className="row">
                                        <div className="col-4">
                                            <Link to="/login">Login</Link>
                                        </div>
                                        <div className="col-4 text-center">
                                            <Link to="/">Cancel</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </>
                }
            </div>
        </div>
    )
}

export default Register
