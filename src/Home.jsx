import React from "react";
import { NavLink } from "react-bootstrap";
import web from '../src/images/img-1.jpg';
const Home = () => {
    return (
        <>
        <section id="header" className="sec-center">
            <div className="container-fluid nav_bg ">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Grow Your Business With <strong className="brand-name ">FOOD PLAZA</strong></h1>
                            <h2 className="my-3">We are the team of talented babarchies make good dishes</h2>
                            <div className="mt-3 btn-get">
                                <NavLink to ="/service" className="btn-get-started"> Get started</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src ={web} className= "img-fluid animated" alt = "home img"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;