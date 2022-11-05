import  React, {useState, useEffect, Fragment} from 'react'
import profileService from "../../services/profile-service";
import {Link} from "react-router-dom";

const Others = ({user}) => {
    const [profiles, setProfiles] = useState();
    useEffect(() => {
        profileService.findAllProfiles()
            .then((profiles) => {
                setProfiles(profiles)
            })
    }, [])
    return (
        <Fragment>
            {!user &&
                <>
                    <div className='alert alert-light'>
                        Please log in first
                    </div>
                    <Link className='btn btn-outline-primary' to='/login'>Back to login page</Link>
                </>
            }

            {
                user &&
                <>
                    <table className="table admin-table">
                        <thead>
                        <tr>
                            <th scope="col">User (Click to view)</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            profiles && profiles.map(_profile =>
                                <tr key={_profile._id}>

                                    <td>
                                        <Link to={`/profiles/${_profile._id}`}>
                                            {_profile.username}
                                        </Link></td>
                                    <td>{_profile.firstName}</td>
                                    <td>{_profile.lastName}</td>
                                    <td>{_profile.email}</td>
                                </tr>
                            )
                        }
                        </tbody>

                    </table>
                </>
            }



        </Fragment>
    );
}
export default Others;