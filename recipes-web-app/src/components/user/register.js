import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";




const Register = ({user}) => {
    /*
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
     */
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
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
                    setCheck("check")
                } else {
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
                        <button className='btn btn-outline-secondary'
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
                                    check === "check" &&
                                    <>
                                        <div className='alert alert-warning'>
                                            Username already taken, please input a new username.
                                        </div>
                                    </>
                                }
                            </div>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}

export default Register