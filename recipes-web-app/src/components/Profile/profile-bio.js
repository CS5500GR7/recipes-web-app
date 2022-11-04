import React, {Fragment, useState} from 'react'

const ProfileBio = ({user, setUser, saveProfile, editable, currentProfile}) => {

    const [editing, setEditing] = useState(false);

    return (
        <Fragment>
            {
                editable &&
                <>
                    <img className="avatar" src={user.avatar} width="300"/>
                    <p className="bio-name" >User: {user.firstName} {user.lastName}</p>
                    {
                        editing &&
                        <div className="bio-block">
                            <i onClick={() => {saveProfile(user); setEditing(false)}} className="fa fa-check" style={{color:"green"}}></i>
                            <input defaultValue={user.password} onChange={(e) => setUser(user =>
                                ({...user, password : e.target.value}))} className="form-control"/>
                            <input defaultValue={user.phone} onChange={(e) => setUser(user =>
                                ({...user, phone : e.target.value}))} className="form-control"/>
                            <input defaultValue={user.email} onChange = {(e) => setUser(user =>
                                ({...user, email : e.target.value}))} className="form-control"/>
                            <input defaultValue={user.address} onChange = {(e) => setUser(user =>
                                ({...user, address : e.target.value}))} className="form-control"/>
                        </div>
                    }
                    {
                        !editing &&
                        <>
                            <div className="bio-block">
                                <i onClick={() => setEditing(true)} className="fa fa-edit"></i>
                                <ul className="list-group">
                                    <li className="list-group-item rose-red">Password: {user.password}</li>
                                    <li className="list-group-item rose-red">Phone: {user.phone}</li>
                                    <li className="list-group-item rose-red">Email: {user.email}</li>
                                    <li className="list-group-item rose-red">Address: {user.address}</li>
                                </ul>
                            </div>
                        </>
                    }
                </>
            }
            {
                // what admin will see
                !editable &&
                <>
                    <img src={currentProfile.avatar} width="200"/>
                    <p>Name: {currentProfile.firstName} {currentProfile.lastName}</p>
                    <div className="bio-block">
                        <ul className="list-group">
                            {/*<li className="list-group-item ">{currentProfile.phone}</li>*/}
                            <li className="list-group-item">Email: {currentProfile.email}</li>
                            {/*<li className="list-group-item">{currentProfile.address}</li>*/}
                        </ul>
                    </div>
                </>
            }
        </Fragment>
    )
}



export default ProfileBio;