import React, {useEffect} from 'react'
import "./home-screen.css";
import NavigationBar from "../NavigationBar";

const HomeScreen = () => {
    useEffect(()=> {
        console.log("I am HomeScreen's useEffect")
    }, []);
    return (
        <div>
            <div className="container-fluid">
                <div className="row img-ys">
                    <div className="col-2 col-xs-2">
                        <NavigationBar />
                    </div>
                    <div className='col-5 d-none d-md-block'>
                        <h1 className="home-text-1 homeScreen-title">MORE THAN JUST A DRINK</h1>
                        <h3 className="home-text-2 homeScreen-subTitle">It’s finally that time of day.</h3>
                    </div>

                    <div className="col-5 col-xs-10 first-img-border">
                        <div>
                            <img src="https://images.unsplash.com/photo-1581845969227-30eb1857fa0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvY2t0YWlsfGVufDB8MXwyfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                 className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row img-ys2">
                    <div className="col-2 col-xs-2">

                    </div>
                    <div className="col-5 col-xs-10">
                        <div>
                            <img src="https://images.unsplash.com/photo-1582837611539-e3020079eab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWx8ZW58MHwxfDB8YmxhY2t8&auto=format&fit=crop&w=500&q=60"
                                 className="second-img img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-5 d-none d-md-block">
                        <h1 className="homeScreen-title ms-5">BEYOND THE GLASS</h1>
                        <p className="homeScreen-subTitle">Whatever the scenario, whatever the vibe, whatever our tastes are, there’s a drink for that.</p>
                        <p className="homeScreen-subTitle">Make a cocktail for you and your beloved.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeScreen