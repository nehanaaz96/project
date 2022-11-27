import React from "react";
import { NavLink } from "react-bootstrap";
import web from '../src/images/img-4.jpg';
import Common from "./Common";
const About = () => {
    return (
        <>
       <Common name = "Welcome to About page"
        imgsrc = {web}
        visit ="/contact"
        btname = "Contact Now"
       />
        </>
    )
}
export default About;