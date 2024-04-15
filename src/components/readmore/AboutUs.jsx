import React from 'react'
import "./About.css";
import "../animation.css";
import "../responsive.css";
import {logo1} from '../../assets'

const AboutUs = () => {
 
  return (
    
    <section className='inner-banner'>
     <div className='image-layer img-fluid'>  </div>
      <div class="container">
        <div class="inner">
          <div class="subtitle">
            <span> OUR STORY </span>
          </div>
            <div class="pattern-image">
              <img src={logo1}/>
            </div>
              <h1><span>About Us</span></h1>
            <div className='h'></div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
// import React, { useState } from "react";
// import "./About.css";
// function FormComponent() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   // Function to handle form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Store form data in local storage
//     localStorage.setItem("formData", JSON.stringify(formData));
//     // You can also use sessionStorage for session-based storage
//     // sessionStorage.setItem('formData', JSON.stringify(formData));
//     // Clear form fields after submission if needed
//     setFormData({ name: "", email: "", message: "" });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="inner-banner">
//       <div >
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// }
// export default FormComponent;
