import React, {useState,useEffect} from 'react';
import './About.css';

export default function About() {


    const [isShow, setIsShow] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
      };
    
      const handleClose = () => {
        setShowPopup(false);
      };

  return (
    <>
        <div id='contact' className="about-sec">
            <div className="about-me">
                <h1>Contact</h1>
                <hr className='hr2'/>
                <hr className='hr1'/>
            </div>
            <div className="content-about">
                <div class="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="your good Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        <input type="email" placeholder="your Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                        <textarea cols="40" rows="10" placeholder="Message what you want to send" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button id='submit' type="submit">Send</button>
                    </form>
                </div>
                <div className="left-content">
                    <h2><i className="fa-solid fa-address-card"></i>Information</h2>
                    <span className='location'>
                        <i className="fa-solid fa-location-dot fa-beat"></i>
                        <p>Near Sarita Steel WorkShop,Mohanpur,
                            Samastipur,Bihar ,848117</p>
                    </span>
                    <div class="contact-list">
                        <li><i className="fa-solid fa-paper-plane fa-beat-fade"></i>kumarravi@gmail.com</li>
                        <li><i className="fa-solid fa-phone fa-shake"></i>+91-9570500312</li>
                    </div>
                    <span className='icon'>
                        <a href="https://www.facebook.com/" ><i className="bx bxl-facebook" style={{ color: 'blue' }}></i></a>
                        <a href="https://www.instagram.com/"><i className="bx bxl-instagram" style={{color: 'red'}}></i></a>
                        <a href="https://in.linkedin.com/in/raviranjan-kumar-18b5652b5" ><i className="fa-brands fa-linkedin-in" style={{color: 'rgb(30,40,80)'}}></i></a>
                        <a href="https://github.com/"><i className="fa-brands fa-github" style={{color: 'black'}}></i></a>
                        <a href="https://twitter.com/?lang=en" ><i className="fa-brands fa-x-twitter"></i></a>
                    </span>
                </div>
            </div>
            <div className="rights">
                <h4>RaviRanjan Kumar</h4>
            </div>
        </div>
        {showPopup && (
        <div className="popup-message">
          <p>Your response is submitted with the following details:</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subject: {subject}</p>
          <button onClick={handleClose}>Close</button>
        </div>
        )}
    </>
  );
}
