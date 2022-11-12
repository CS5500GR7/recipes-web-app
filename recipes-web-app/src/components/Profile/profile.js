import React, {useState, useEffect} from 'react';
import ProfileBio from "./profile-bio";
import ProfileAbout from "./profile-about";
import ProfileFavorite from "./profile-favorite";
import ProfileReview from "./profile-review";
import profileService from "../../services/profile-service";
import {useParams, Link} from "react-router-dom";
import "./profile.css";



const Profile = ({user, setUser}) => {

    const {uid} = useParams();
    console.log('uid ' + uid);
    const [profileType, setProfileType] = useState("About me");
    const [currentProfile, setCurrentProfile] = useState({});
    console.log(currentProfile);

    const saveProfile = (user) => {
        profileService.updateProfile(user)
            .then(res => console.log(res))
    }

    const isAdmin = user && user.role === "ADMIN";
    const adminId = isAdmin && user._id;
    const userId = uid;
    console.log('userID=' +userId);

    const editable = (userId == null || adminId === userId);

    useEffect(() => {
        if(uid) {
            profileService.findProfileById(uid)
                .then((profile) => {
                    setCurrentProfile(profile)
                })
        }
    }, [uid])

    return (
        <>
            <h1 className='rose-red'>Profile </h1>
            {/*如果是admin, 会有一个 admin panel按钮*/}
            {
                isAdmin && <Link className="btn btn-primary" to="/profiles" style={{margin:"10px"}}>
                    Admin Panel to manage users!
                </Link>
            }
            {/*uid是从params里拿到的，打开自己的profile，endpoints是/profiles, 那么uid就是undefined, 但没关系，bio那里的信息可以从user这个object里获取
            那什么时候会用上uid呢？是从admin panel中点击的uid进入的/profiles/{uid}才会有。所以打开自己的profile, uid=undefined, user则是自己，所以下面这行的意思是既不是从
            admin那里进来的，也不是登陆的用户，那就请登陆*/}
            {!user && !uid &&
            <>
                <div className='alert alert-light'>
                    Please log in first
                </div>
                <Link className='btn btn-outline-primary' to='/login'>Back to login page</Link>
            </>
            }
            {}
            {
                (user || uid) &&
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="profile-bio col-md-4">
                                <ProfileBio user={user} setUser={setUser} saveProfile={saveProfile} editable={editable} currentProfile={currentProfile}/>
                                <div className="list-group col-md-10">
                                    <button type="button"
                                            className="list-group-item"
                                            name="bio"
                                            onClick={(e) => setProfileType("About")}>
                                        About Me
                                    </button>
                                    <button type="button"
                                            className="list-group-item"
                                            name="bio"
                                            onClick={(e) => setProfileType("Review")}>
                                        My Reviews
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-8">
                                        {
                                            profileType === "About" &&
                                            <ProfileAbout user={user} setUser={setUser} saveProfile={saveProfile} editable={editable} currentProfile={currentProfile}/>
                                        }
                                        {
                                            profileType === "Review" &&
                                            <ProfileReview user={user} editable={editable} currentProfile={currentProfile}/>
                                        }
                                    </div>
                                    <div className="col-md-4">

                                        <ProfileFavorite user={user} editable={editable} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            }
        </>
    )
}

export default Profile;

