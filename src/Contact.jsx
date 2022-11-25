import React, { useState } from "react";
const Contact = () => {
    const [data,setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    });
    const InputEvent = (event) => {
        const {name,value} = event.target;
        setData ((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e) => {
     e.preventDeafault();
     alert(`My name is ${data.fullname}.My Mobile is ${data.phone}.My Email is ${data.email} Here is was want to say Awesome`)
    };
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <from onChange = {formSubmit}>
                    <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                      <input type="name" class="form-control" id="exampleFormControlInput1"
                       name =  "fullname"
                       value = {data.fullname}
                       onChange={InputEvent}
                       placeholder="Enter Your Name"/>
                    </div>
                    <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">Phone</label>
                      <input type="number" class="form-control" name =  "phone"
                      value = {data.phone}
                      onChange={InputEvent}id="exampleFormControlInput1" 
                      placeholder="mobile number"/>
                    </div>
                    <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" name =  "email"
                      value = {data.email}
                      onChange={InputEvent}id="exampleFormControlInput1" 
                      placeholder="name@example.com"/>
                    </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                     name =  ""
                       value = {data.message}
                       onChange={InputEvent}>
                        
                    </textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type = "submit">
                        Submit form
                    </button>
                  </div>
                    </from>
                </div>
            </div>
        </div>
    </>
    )
}
export default Contact;