import React from 'react'
import './contact.css'
import msg_icon from '../Assets/msg-icon.png'
import phone_icon from '../Assets/phone-icon.png'
import mail_icon from '../Assets/mail-icon.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0ea3803f-601c-420c-bd13-7cd87f19ac3d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
           <h3>
               Send us a Message <img src={msg_icon} alt=''/> 
           </h3>
           <p>We'd love to hear from you! Whether you have a question, feedback, or need support, our team is here to help. </p>
           <ul>
            <li> <img src={mail_icon} alt=''/>iftikharrj2001@gmail.com</li>
            <li> <img src={phone_icon} alt=''/>+923104628296</li>
            
           </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder=' Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder=' Enter phone number' required/>
          <label> Write message in here</label>
          <textarea type='text' name='message' rows='6' required  placeholder='Enter your message'/>
          <button type='submit' className='btn dark-btn'> submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact